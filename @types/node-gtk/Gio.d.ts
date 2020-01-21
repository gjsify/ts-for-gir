/**
 * Gio-2.0
 */

/// <reference path="GObject.d.ts" />
/// <reference path="GLib.d.ts" />

declare namespace Gio {

export enum BusType {
    STARTER,
    NONE,
    SYSTEM,
    SESSION,
}
export enum ConverterResult {
    ERROR,
    CONVERTED,
    FINISHED,
    FLUSHED,
}
export enum CredentialsType {
    INVALID,
    LINUX_UCRED,
    FREEBSD_CMSGCRED,
    OPENBSD_SOCKPEERCRED,
    SOLARIS_UCRED,
    NETBSD_UNPCBID,
}
export enum DBusError {
    FAILED,
    NO_MEMORY,
    SERVICE_UNKNOWN,
    NAME_HAS_NO_OWNER,
    NO_REPLY,
    IO_ERROR,
    BAD_ADDRESS,
    NOT_SUPPORTED,
    LIMITS_EXCEEDED,
    ACCESS_DENIED,
    AUTH_FAILED,
    NO_SERVER,
    TIMEOUT,
    NO_NETWORK,
    ADDRESS_IN_USE,
    DISCONNECTED,
    INVALID_ARGS,
    FILE_NOT_FOUND,
    FILE_EXISTS,
    UNKNOWN_METHOD,
    TIMED_OUT,
    MATCH_RULE_NOT_FOUND,
    MATCH_RULE_INVALID,
    SPAWN_EXEC_FAILED,
    SPAWN_FORK_FAILED,
    SPAWN_CHILD_EXITED,
    SPAWN_CHILD_SIGNALED,
    SPAWN_FAILED,
    SPAWN_SETUP_FAILED,
    SPAWN_CONFIG_INVALID,
    SPAWN_SERVICE_INVALID,
    SPAWN_SERVICE_NOT_FOUND,
    SPAWN_PERMISSIONS_INVALID,
    SPAWN_FILE_INVALID,
    SPAWN_NO_MEMORY,
    UNIX_PROCESS_ID_UNKNOWN,
    INVALID_SIGNATURE,
    INVALID_FILE_CONTENT,
    SELINUX_SECURITY_CONTEXT_UNKNOWN,
    ADT_AUDIT_DATA_UNKNOWN,
    OBJECT_PATH_IN_USE,
    UNKNOWN_OBJECT,
    UNKNOWN_INTERFACE,
    UNKNOWN_PROPERTY,
    PROPERTY_READ_ONLY,
}
export enum DBusMessageByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
}
export enum DBusMessageHeaderField {
    INVALID,
    PATH,
    INTERFACE,
    MEMBER,
    ERROR_NAME,
    REPLY_SERIAL,
    DESTINATION,
    SENDER,
    SIGNATURE,
    NUM_UNIX_FDS,
}
export enum DBusMessageType {
    INVALID,
    METHOD_CALL,
    METHOD_RETURN,
    ERROR,
    SIGNAL,
}
export enum DataStreamByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    HOST_ENDIAN,
}
export enum DataStreamNewlineType {
    LF,
    CR,
    CR_LF,
    ANY,
}
export enum DriveStartStopType {
    UNKNOWN,
    SHUTDOWN,
    NETWORK,
    MULTIDISK,
    PASSWORD,
}
export enum EmblemOrigin {
    UNKNOWN,
    DEVICE,
    LIVEMETADATA,
    TAG,
}
export enum FileAttributeStatus {
    UNSET,
    SET,
    ERROR_SETTING,
}
export enum FileAttributeType {
    INVALID,
    STRING,
    BYTE_STRING,
    BOOLEAN,
    UINT32,
    INT32,
    UINT64,
    INT64,
    OBJECT,
    STRINGV,
}
export enum FileMonitorEvent {
    CHANGED,
    CHANGES_DONE_HINT,
    DELETED,
    CREATED,
    ATTRIBUTE_CHANGED,
    PRE_UNMOUNT,
    UNMOUNTED,
    MOVED,
    RENAMED,
    MOVED_IN,
    MOVED_OUT,
}
export enum FileType {
    UNKNOWN,
    REGULAR,
    DIRECTORY,
    SYMBOLIC_LINK,
    SPECIAL,
    SHORTCUT,
    MOUNTABLE,
}
export enum FilesystemPreviewType {
    IF_ALWAYS,
    IF_LOCAL,
    NEVER,
}
export enum IOErrorEnum {
    FAILED,
    NOT_FOUND,
    EXISTS,
    IS_DIRECTORY,
    NOT_DIRECTORY,
    NOT_EMPTY,
    NOT_REGULAR_FILE,
    NOT_SYMBOLIC_LINK,
    NOT_MOUNTABLE_FILE,
    FILENAME_TOO_LONG,
    INVALID_FILENAME,
    TOO_MANY_LINKS,
    NO_SPACE,
    INVALID_ARGUMENT,
    PERMISSION_DENIED,
    NOT_SUPPORTED,
    NOT_MOUNTED,
    ALREADY_MOUNTED,
    CLOSED,
    CANCELLED,
    PENDING,
    READ_ONLY,
    CANT_CREATE_BACKUP,
    WRONG_ETAG,
    TIMED_OUT,
    WOULD_RECURSE,
    BUSY,
    WOULD_BLOCK,
    HOST_NOT_FOUND,
    WOULD_MERGE,
    FAILED_HANDLED,
    TOO_MANY_OPEN_FILES,
    NOT_INITIALIZED,
    ADDRESS_IN_USE,
    PARTIAL_INPUT,
    INVALID_DATA,
    DBUS_ERROR,
    HOST_UNREACHABLE,
    NETWORK_UNREACHABLE,
    CONNECTION_REFUSED,
    PROXY_FAILED,
    PROXY_AUTH_FAILED,
    PROXY_NEED_AUTH,
    PROXY_NOT_ALLOWED,
    BROKEN_PIPE,
    CONNECTION_CLOSED,
    NOT_CONNECTED,
    MESSAGE_TOO_LARGE,
}
export enum IOModuleScopeFlags {
    NONE,
    BLOCK_DUPLICATES,
}
export enum MountOperationResult {
    HANDLED,
    ABORTED,
    UNHANDLED,
}
export enum NetworkConnectivity {
    LOCAL,
    LIMITED,
    PORTAL,
    FULL,
}
export enum NotificationPriority {
    NORMAL,
    LOW,
    HIGH,
    URGENT,
}
export enum PasswordSave {
    NEVER,
    FOR_SESSION,
    PERMANENTLY,
}
export enum PollableReturn {
    FAILED,
    OK,
    WOULD_BLOCK,
}
export enum ResolverError {
    NOT_FOUND,
    TEMPORARY_FAILURE,
    INTERNAL,
}
export enum ResolverRecordType {
    SRV,
    MX,
    TXT,
    SOA,
    NS,
}
export enum ResourceError {
    NOT_FOUND,
    INTERNAL,
}
export enum SocketClientEvent {
    RESOLVING,
    RESOLVED,
    CONNECTING,
    CONNECTED,
    PROXY_NEGOTIATING,
    PROXY_NEGOTIATED,
    TLS_HANDSHAKING,
    TLS_HANDSHAKED,
    COMPLETE,
}
export enum SocketFamily {
    INVALID,
    UNIX,
    IPV4,
    IPV6,
}
export enum SocketListenerEvent {
    BINDING,
    BOUND,
    LISTENING,
    LISTENED,
}
export enum SocketProtocol {
    UNKNOWN,
    DEFAULT,
    TCP,
    UDP,
    SCTP,
}
export enum SocketType {
    INVALID,
    STREAM,
    DATAGRAM,
    SEQPACKET,
}
export enum TlsAuthenticationMode {
    NONE,
    REQUESTED,
    REQUIRED,
}
export enum TlsCertificateRequestFlags {
    NONE,
}
export enum TlsDatabaseLookupFlags {
    NONE,
    KEYPAIR,
}
export enum TlsError {
    UNAVAILABLE,
    MISC,
    BAD_CERTIFICATE,
    NOT_TLS,
    HANDSHAKE,
    CERTIFICATE_REQUIRED,
    EOF,
    INAPPROPRIATE_FALLBACK,
}
export enum TlsInteractionResult {
    UNHANDLED,
    HANDLED,
    FAILED,
}
export enum TlsRehandshakeMode {
    NEVER,
    SAFELY,
    UNSAFELY,
}
export enum UnixSocketAddressType {
    INVALID,
    ANONYMOUS,
    PATH,
    ABSTRACT,
    ABSTRACT_PADDED,
}
export enum ZlibCompressorFormat {
    ZLIB,
    GZIP,
    RAW,
}
export enum AppInfoCreateFlags {
    NONE,
    NEEDS_TERMINAL,
    SUPPORTS_URIS,
    SUPPORTS_STARTUP_NOTIFICATION,
}
export enum ApplicationFlags {
    FLAGS_NONE,
    IS_SERVICE,
    IS_LAUNCHER,
    HANDLES_OPEN,
    HANDLES_COMMAND_LINE,
    SEND_ENVIRONMENT,
    NON_UNIQUE,
    CAN_OVERRIDE_APP_ID,
    ALLOW_REPLACEMENT,
    REPLACE,
}
export enum AskPasswordFlags {
    NEED_PASSWORD,
    NEED_USERNAME,
    NEED_DOMAIN,
    SAVING_SUPPORTED,
    ANONYMOUS_SUPPORTED,
    TCRYPT,
}
export enum BusNameOwnerFlags {
    NONE,
    ALLOW_REPLACEMENT,
    REPLACE,
    DO_NOT_QUEUE,
}
export enum BusNameWatcherFlags {
    NONE,
    AUTO_START,
}
export enum ConverterFlags {
    NONE,
    INPUT_AT_END,
    FLUSH,
}
export enum DBusCallFlags {
    NONE,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
}
export enum DBusCapabilityFlags {
    NONE,
    UNIX_FD_PASSING,
}
export enum DBusConnectionFlags {
    NONE,
    AUTHENTICATION_CLIENT,
    AUTHENTICATION_SERVER,
    AUTHENTICATION_ALLOW_ANONYMOUS,
    MESSAGE_BUS_CONNECTION,
    DELAY_MESSAGE_PROCESSING,
}
export enum DBusInterfaceSkeletonFlags {
    NONE,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD,
}
export enum DBusMessageFlags {
    NONE,
    NO_REPLY_EXPECTED,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
}
export enum DBusObjectManagerClientFlags {
    NONE,
    DO_NOT_AUTO_START,
}
export enum DBusPropertyInfoFlags {
    NONE,
    READABLE,
    WRITABLE,
}
export enum DBusProxyFlags {
    NONE,
    DO_NOT_LOAD_PROPERTIES,
    DO_NOT_CONNECT_SIGNALS,
    DO_NOT_AUTO_START,
    GET_INVALIDATED_PROPERTIES,
    DO_NOT_AUTO_START_AT_CONSTRUCTION,
}
export enum DBusSendMessageFlags {
    NONE,
    PRESERVE_SERIAL,
}
export enum DBusServerFlags {
    NONE,
    RUN_IN_THREAD,
    AUTHENTICATION_ALLOW_ANONYMOUS,
}
export enum DBusSignalFlags {
    NONE,
    NO_MATCH_RULE,
    MATCH_ARG0_NAMESPACE,
    MATCH_ARG0_PATH,
}
export enum DBusSubtreeFlags {
    NONE,
    DISPATCH_TO_UNENUMERATED_NODES,
}
export enum DriveStartFlags {
    NONE,
}
export enum FileAttributeInfoFlags {
    NONE,
    COPY_WITH_FILE,
    COPY_WHEN_MOVED,
}
export enum FileCopyFlags {
    NONE,
    OVERWRITE,
    BACKUP,
    NOFOLLOW_SYMLINKS,
    ALL_METADATA,
    NO_FALLBACK_FOR_MOVE,
    TARGET_DEFAULT_PERMS,
}
export enum FileCreateFlags {
    NONE,
    PRIVATE,
    REPLACE_DESTINATION,
}
export enum FileMeasureFlags {
    NONE,
    REPORT_ANY_ERROR,
    APPARENT_SIZE,
    NO_XDEV,
}
export enum FileMonitorFlags {
    NONE,
    WATCH_MOUNTS,
    SEND_MOVED,
    WATCH_HARD_LINKS,
    WATCH_MOVES,
}
export enum FileQueryInfoFlags {
    NONE,
    NOFOLLOW_SYMLINKS,
}
export enum IOStreamSpliceFlags {
    NONE,
    CLOSE_STREAM1,
    CLOSE_STREAM2,
    WAIT_FOR_BOTH,
}
export enum MountMountFlags {
    NONE,
}
export enum MountUnmountFlags {
    NONE,
    FORCE,
}
export enum OutputStreamSpliceFlags {
    NONE,
    CLOSE_SOURCE,
    CLOSE_TARGET,
}
export enum ResolverNameLookupFlags {
    DEFAULT,
    IPV4_ONLY,
    IPV6_ONLY,
}
export enum ResourceFlags {
    NONE,
    COMPRESSED,
}
export enum ResourceLookupFlags {
    NONE,
}
export enum SettingsBindFlags {
    DEFAULT,
    GET,
    SET,
    NO_SENSITIVITY,
    GET_NO_CHANGES,
    INVERT_BOOLEAN,
}
export enum SocketMsgFlags {
    NONE,
    OOB,
    PEEK,
    DONTROUTE,
}
export enum SubprocessFlags {
    NONE,
    STDIN_PIPE,
    STDIN_INHERIT,
    STDOUT_PIPE,
    STDOUT_SILENCE,
    STDERR_PIPE,
    STDERR_SILENCE,
    STDERR_MERGE,
    INHERIT_FDS,
}
export enum TestDBusFlags {
    NONE,
}
export enum TlsCertificateFlags {
    UNKNOWN_CA,
    BAD_IDENTITY,
    NOT_ACTIVATED,
    EXPIRED,
    REVOKED,
    INSECURE,
    GENERIC_ERROR,
    VALIDATE_ALL,
}
export enum TlsDatabaseVerifyFlags {
    NONE,
}
export enum TlsPasswordFlags {
    NONE,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
}
export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME:string
export const DRIVE_IDENTIFIER_KIND_UNIX_DEVICE:string
export const FILE_ATTRIBUTE_ACCESS_CAN_DELETE:string
export const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE:string
export const FILE_ATTRIBUTE_ACCESS_CAN_READ:string
export const FILE_ATTRIBUTE_ACCESS_CAN_RENAME:string
export const FILE_ATTRIBUTE_ACCESS_CAN_TRASH:string
export const FILE_ATTRIBUTE_ACCESS_CAN_WRITE:string
export const FILE_ATTRIBUTE_DOS_IS_ARCHIVE:string
export const FILE_ATTRIBUTE_DOS_IS_MOUNTPOINT:string
export const FILE_ATTRIBUTE_DOS_IS_SYSTEM:string
export const FILE_ATTRIBUTE_DOS_REPARSE_POINT_TAG:string
export const FILE_ATTRIBUTE_ETAG_VALUE:string
export const FILE_ATTRIBUTE_FILESYSTEM_FREE:string
export const FILE_ATTRIBUTE_FILESYSTEM_READONLY:string
export const FILE_ATTRIBUTE_FILESYSTEM_REMOTE:string
export const FILE_ATTRIBUTE_FILESYSTEM_SIZE:string
export const FILE_ATTRIBUTE_FILESYSTEM_TYPE:string
export const FILE_ATTRIBUTE_FILESYSTEM_USED:string
export const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW:string
export const FILE_ATTRIBUTE_GVFS_BACKEND:string
export const FILE_ATTRIBUTE_ID_FILE:string
export const FILE_ATTRIBUTE_ID_FILESYSTEM:string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT:string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT:string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL:string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START:string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED:string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP:string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT:string
export const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI:string
export const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC:string
export const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE:string
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE:string
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE:string
export const FILE_ATTRIBUTE_OWNER_GROUP:string
export const FILE_ATTRIBUTE_OWNER_USER:string
export const FILE_ATTRIBUTE_OWNER_USER_REAL:string
export const FILE_ATTRIBUTE_PREVIEW_ICON:string
export const FILE_ATTRIBUTE_RECENT_MODIFIED:string
export const FILE_ATTRIBUTE_SELINUX_CONTEXT:string
export const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE:string
export const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE:string
export const FILE_ATTRIBUTE_STANDARD_COPY_NAME:string
export const FILE_ATTRIBUTE_STANDARD_DESCRIPTION:string
export const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME:string
export const FILE_ATTRIBUTE_STANDARD_EDIT_NAME:string
export const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE:string
export const FILE_ATTRIBUTE_STANDARD_ICON:string
export const FILE_ATTRIBUTE_STANDARD_IS_BACKUP:string
export const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN:string
export const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK:string
export const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL:string
export const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE:string
export const FILE_ATTRIBUTE_STANDARD_NAME:string
export const FILE_ATTRIBUTE_STANDARD_SIZE:string
export const FILE_ATTRIBUTE_STANDARD_SORT_ORDER:string
export const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON:string
export const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET:string
export const FILE_ATTRIBUTE_STANDARD_TARGET_URI:string
export const FILE_ATTRIBUTE_STANDARD_TYPE:string
export const FILE_ATTRIBUTE_THUMBNAILING_FAILED:string
export const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID:string
export const FILE_ATTRIBUTE_THUMBNAIL_PATH:string
export const FILE_ATTRIBUTE_TIME_ACCESS:string
export const FILE_ATTRIBUTE_TIME_ACCESS_USEC:string
export const FILE_ATTRIBUTE_TIME_CHANGED:string
export const FILE_ATTRIBUTE_TIME_CHANGED_USEC:string
export const FILE_ATTRIBUTE_TIME_CREATED:string
export const FILE_ATTRIBUTE_TIME_CREATED_USEC:string
export const FILE_ATTRIBUTE_TIME_MODIFIED:string
export const FILE_ATTRIBUTE_TIME_MODIFIED_USEC:string
export const FILE_ATTRIBUTE_TRASH_DELETION_DATE:string
export const FILE_ATTRIBUTE_TRASH_ITEM_COUNT:string
export const FILE_ATTRIBUTE_TRASH_ORIG_PATH:string
export const FILE_ATTRIBUTE_UNIX_BLOCKS:string
export const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE:string
export const FILE_ATTRIBUTE_UNIX_DEVICE:string
export const FILE_ATTRIBUTE_UNIX_GID:string
export const FILE_ATTRIBUTE_UNIX_INODE:string
export const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT:string
export const FILE_ATTRIBUTE_UNIX_MODE:string
export const FILE_ATTRIBUTE_UNIX_NLINK:string
export const FILE_ATTRIBUTE_UNIX_RDEV:string
export const FILE_ATTRIBUTE_UNIX_UID:string
export const MENU_ATTRIBUTE_ACTION:string
export const MENU_ATTRIBUTE_ACTION_NAMESPACE:string
export const MENU_ATTRIBUTE_ICON:string
export const MENU_ATTRIBUTE_LABEL:string
export const MENU_ATTRIBUTE_TARGET:string
export const MENU_LINK_SECTION:string
export const MENU_LINK_SUBMENU:string
export const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME:string
export const NETWORK_MONITOR_EXTENSION_POINT_NAME:string
export const PROXY_EXTENSION_POINT_NAME:string
export const PROXY_RESOLVER_EXTENSION_POINT_NAME:string
export const SETTINGS_BACKEND_EXTENSION_POINT_NAME:string
export const TLS_BACKEND_EXTENSION_POINT_NAME:string
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT:string
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER:string
export const VFS_EXTENSION_POINT_NAME:string
export const VOLUME_IDENTIFIER_KIND_CLASS:string
export const VOLUME_IDENTIFIER_KIND_HAL_UDI:string
export const VOLUME_IDENTIFIER_KIND_LABEL:string
export const VOLUME_IDENTIFIER_KIND_NFS_MOUNT:string
export const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE:string
export const VOLUME_IDENTIFIER_KIND_UUID:string
export const VOLUME_MONITOR_EXTENSION_POINT_NAME:string
export function actionNameIsValid(action_name: string): boolean
export function actionParseDetailedName(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]
export function actionPrintDetailedName(action_name: string, target_value?: GLib.Variant | null): string
export function appInfoCreateFromCommandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo
export function appInfoGetAll(): AppInfo[]
export function appInfoGetAllForType(content_type: string): AppInfo[]
export function appInfoGetDefaultForType(content_type: string, must_support_uris: boolean): AppInfo
export function appInfoGetDefaultForUriScheme(uri_scheme: string): AppInfo
export function appInfoGetFallbackForType(content_type: string): AppInfo[]
export function appInfoGetRecommendedForType(content_type: string): AppInfo[]
export function appInfoLaunchDefaultForUri(uri: string, context?: AppLaunchContext | null): boolean
export function appInfoLaunchDefaultForUriAsync(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function appInfoLaunchDefaultForUriFinish(result: AsyncResult): boolean
export function appInfoResetTypeAssociations(content_type: string): void
export function asyncInitableNewvAsync(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function busGet(bus_type: BusType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function busGetFinish(res: AsyncResult): DBusConnection
export function busGetSync(bus_type: BusType, cancellable?: Cancellable | null): DBusConnection
export function busOwnNameOnConnection(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_closure?: Function, name_lost_closure?: Function): number
export function busOwnName(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_closure?: Function, name_acquired_closure?: Function, name_lost_closure?: Function): number
export function busUnownName(owner_id: number): void
export function busUnwatchName(watcher_id: number): void
export function busWatchNameOnConnection(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_closure?: Function, name_vanished_closure?: Function): number
export function busWatchName(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_closure?: Function, name_vanished_closure?: Function): number
export function contentTypeCanBeExecutable(type: string): boolean
export function contentTypeEquals(type1: string, type2: string): boolean
export function contentTypeFromMimeType(mime_type: string): string | null
export function contentTypeGetDescription(type: string): string
export function contentTypeGetGenericIconName(type: string): string | null
export function contentTypeGetIcon(type: string): Icon
export function contentTypeGetMimeDirs(): string[]
export function contentTypeGetMimeType(type: string): string | null
export function contentTypeGetSymbolicIcon(type: string): Icon
export function contentTypeGuess(filename: string | null, data: any | null): [ /* returnType */ string, /* result_uncertain */ boolean | null ]
export function contentTypeGuessForTree(root: File): string[]
export function contentTypeIsA(type: string, supertype: string): boolean
export function contentTypeIsMimeType(type: string, mime_type: string): boolean
export function contentTypeIsUnknown(type: string): boolean
export function contentTypeSetMimeDirs(dirs?: string[] | null): void
export function contentTypesGetRegistered(): string[]
export function dbusAddressEscapeValue(string: string): string
export function dbusAddressGetForBusSync(bus_type: BusType, cancellable?: Cancellable | null): string
export function dbusAddressGetStream(address: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function dbusAddressGetStreamFinish(res: AsyncResult): [ /* returnType */ IOStream, /* out_guid */ string | null ]
export function dbusAddressGetStreamSync(address: string, cancellable?: Cancellable | null): [ /* returnType */ IOStream, /* out_guid */ string | null ]
export function dbusAnnotationInfoLookup(annotations: DBusAnnotationInfo[] | null, name: string): string
export function dbusErrorEncodeGerror(error: GLib.Error): string
export function dbusErrorGetRemoteError(error: GLib.Error): string
export function dbusErrorIsRemoteError(error: GLib.Error): boolean
export function dbusErrorNewForDbusError(dbus_error_name: string, dbus_error_message: string): GLib.Error
export function dbusErrorQuark(): GLib.Quark
export function dbusErrorRegisterError(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean
export function dbusErrorRegisterErrorDomain(error_domain_quark_name: string, quark_volatile: number, entries: DBusErrorEntry[]): void
export function dbusErrorStripRemoteError(error: GLib.Error): boolean
export function dbusErrorUnregisterError(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean
export function dbusGenerateGuid(): string
export function dbusGvalueToGvariant(gvalue: any, type: GLib.VariantType): GLib.Variant
export function dbusGvariantToGvalue(value: GLib.Variant): /* out_gvalue */ any
export function dbusIsAddress(string: string): boolean
export function dbusIsGuid(string: string): boolean
export function dbusIsInterfaceName(string: string): boolean
export function dbusIsMemberName(string: string): boolean
export function dbusIsName(string: string): boolean
export function dbusIsSupportedAddress(string: string): boolean
export function dbusIsUniqueName(string: string): boolean
export function dtlsClientConnectionNew(base_socket: DatagramBased, server_identity?: SocketConnectable | null): DtlsClientConnection
export function dtlsServerConnectionNew(base_socket: DatagramBased, certificate?: TlsCertificate | null): DtlsServerConnection
export function fileNewForCommandlineArg(arg: string): File
export function fileNewForCommandlineArgAndCwd(arg: string, cwd: string): File
export function fileNewForPath(path: string): File
export function fileNewForUri(uri: string): File
export function fileNewTmp(tmpl?: string | null): [ /* returnType */ File, /* iostream */ FileIOStream ]
export function fileParseName(parse_name: string): File
export function iconDeserialize(value: GLib.Variant): Icon
export function iconHash(icon: object): number
export function iconNewForString(str: string): Icon
export function initableNewv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
export function ioErrorFromErrno(err_no: number): IOErrorEnum
export function ioErrorQuark(): GLib.Quark
export function ioExtensionPointImplement(extension_point_name: string, type: GObject.Type, extension_name: string, priority: number): IOExtension
export function ioExtensionPointLookup(name: string): IOExtensionPoint
export function ioExtensionPointRegister(name: string): IOExtensionPoint
export function ioModulesLoadAllInDirectory(dirname: string): IOModule[]
export function ioModulesLoadAllInDirectoryWithScope(dirname: string, scope: IOModuleScope): IOModule[]
export function ioModulesScanAllInDirectory(dirname: string): void
export function ioModulesScanAllInDirectoryWithScope(dirname: string, scope: IOModuleScope): void
export function ioSchedulerCancelAllJobs(): void
export function ioSchedulerPushJob(job_func: IOSchedulerJobFunc, io_priority: number, cancellable?: Cancellable | null): void
export function keyfileSettingsBackendNew(filename: string, root_path: string, root_group?: string | null): SettingsBackend
export function memorySettingsBackendNew(): SettingsBackend
export function networkMonitorGetDefault(): NetworkMonitor
export function networkingInit(): void
export function nullSettingsBackendNew(): SettingsBackend
export function pollableSourceNew(pollable_stream: GObject.Object): GLib.Source
export function pollableSourceNewFull(pollable_stream: GObject.Object, child_source?: GLib.Source | null, cancellable?: Cancellable | null): GLib.Source
export function pollableStreamRead(stream: InputStream, buffer: any, blocking: boolean, cancellable?: Cancellable | null): number
export function pollableStreamWrite(stream: OutputStream, buffer: any, blocking: boolean, cancellable?: Cancellable | null): number
export function pollableStreamWriteAll(stream: OutputStream, buffer: any, blocking: boolean, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
export function proxyGetDefaultForProtocol(protocol: string): Proxy
export function proxyResolverGetDefault(): ProxyResolver
export function resolverErrorQuark(): GLib.Quark
export function resourceErrorQuark(): GLib.Quark
export function resourceLoad(filename: string): Resource
export function resourcesEnumerateChildren(path: string, lookup_flags: ResourceLookupFlags): string[]
export function resourcesGetInfo(path: string, lookup_flags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
export function resourcesLookupData(path: string, lookup_flags: ResourceLookupFlags): Gjs.byteArray.ByteArray
export function resourcesOpenStream(path: string, lookup_flags: ResourceLookupFlags): InputStream
export function resourcesRegister(resource: Resource): void
export function resourcesUnregister(resource: Resource): void
export function settingsSchemaSourceGetDefault(): SettingsSchemaSource | null
export function simpleAsyncReportGerrorInIdle(object: GObject.Object | null, callback: AsyncReadyCallback | null, error: GLib.Error): void
export function tlsBackendGetDefault(): TlsBackend
export function tlsClientConnectionNew(base_io_stream: IOStream, server_identity?: SocketConnectable | null): TlsClientConnection
export function tlsErrorQuark(): GLib.Quark
export function tlsFileDatabaseNew(anchors: string): TlsFileDatabase
export function tlsServerConnectionNew(base_io_stream: IOStream, certificate?: TlsCertificate | null): TlsServerConnection
export function unixIsMountPathSystemInternal(mount_path: string): boolean
export function unixIsSystemDevicePath(device_path: string): boolean
export function unixIsSystemFsType(fs_type: string): boolean
export function unixMountAt(mount_path: string): [ /* returnType */ UnixMountEntry, /* time_read */ number | null ]
export function unixMountCompare(mount1: UnixMountEntry, mount2: UnixMountEntry): number
export function unixMountCopy(mount_entry: UnixMountEntry): UnixMountEntry
export function unixMountFor(file_path: string): [ /* returnType */ UnixMountEntry, /* time_read */ number | null ]
export function unixMountFree(mount_entry: UnixMountEntry): void
export function unixMountGetDevicePath(mount_entry: UnixMountEntry): string
export function unixMountGetFsType(mount_entry: UnixMountEntry): string
export function unixMountGetMountPath(mount_entry: UnixMountEntry): string
export function unixMountGetOptions(mount_entry: UnixMountEntry): string | null
export function unixMountGetRootPath(mount_entry: UnixMountEntry): string | null
export function unixMountGuessCanEject(mount_entry: UnixMountEntry): boolean
export function unixMountGuessIcon(mount_entry: UnixMountEntry): Icon
export function unixMountGuessName(mount_entry: UnixMountEntry): string
export function unixMountGuessShouldDisplay(mount_entry: UnixMountEntry): boolean
export function unixMountGuessSymbolicIcon(mount_entry: UnixMountEntry): Icon
export function unixMountIsReadonly(mount_entry: UnixMountEntry): boolean
export function unixMountIsSystemInternal(mount_entry: UnixMountEntry): boolean
export function unixMountPointsChangedSince(time: number): boolean
export function unixMountPointsGet(): [ /* returnType */ UnixMountPoint[], /* time_read */ number | null ]
export function unixMountsChangedSince(time: number): boolean
export function unixMountsGet(): [ /* returnType */ UnixMountEntry[], /* time_read */ number | null ]
export interface AsyncReadyCallback {
    (source_object: GObject.Object | null, res: AsyncResult): void
}
export interface BusAcquiredCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameAcquiredCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameAppearedCallback {
    (connection: DBusConnection, name: string, name_owner: string): void
}
export interface BusNameLostCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameVanishedCallback {
    (connection: DBusConnection, name: string): void
}
export interface CancellableSourceFunc {
    (cancellable?: Cancellable | null): boolean
}
export interface DBusInterfaceGetPropertyFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, error: GLib.Error): GLib.Variant
}
export interface DBusInterfaceMethodCallFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: DBusMethodInvocation): void
}
export interface DBusInterfaceSetPropertyFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant, error: GLib.Error): boolean
}
export interface DBusMessageFilterFunction {
    (connection: DBusConnection, message: DBusMessage, incoming: boolean): DBusMessage | null
}
export interface DBusProxyTypeFunc {
    (manager: DBusObjectManagerClient, object_path: string, interface_name?: string | null): GObject.Type
}
export interface DBusSignalCallback {
    (connection: DBusConnection, sender_name: string, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant): void
}
export interface DBusSubtreeDispatchFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, node: string, out_user_data: object): DBusInterfaceVTable
}
export interface DBusSubtreeIntrospectFunc {
    (connection: DBusConnection, sender: string, object_path: string, node: string): DBusInterfaceInfo
}
export interface DatagramBasedSourceFunc {
    (datagram_based: DatagramBased, condition: GLib.IOCondition): boolean
}
export interface DesktopAppLaunchCallback {
    (appinfo: DesktopAppInfo, pid: GLib.Pid): void
}
export interface FileMeasureProgressCallback {
    (reporting: boolean, current_size: number, num_dirs: number, num_files: number): void
}
export interface FileProgressCallback {
    (current_num_bytes: number, total_num_bytes: number): void
}
export interface FileReadMoreCallback {
    (file_contents: string, file_size: number): boolean
}
export interface IOSchedulerJobFunc {
    (job: IOSchedulerJob, cancellable?: Cancellable | null): boolean
}
export interface PollableSourceFunc {
    (pollable_stream: GObject.Object): boolean
}
export interface ReallocFunc {
    (data: object | null, size: number): object | null
}
export interface SettingsBindGetMapping {
    (value: any, variant: GLib.Variant): boolean
}
export interface SettingsBindSetMapping {
    (value: any, expected_type: GLib.VariantType): GLib.Variant
}
export interface SettingsGetMapping {
    (value: GLib.Variant): boolean
}
export interface SimpleAsyncThreadFunc {
    (res: SimpleAsyncResult, object: GObject.Object, cancellable?: Cancellable | null): void
}
export interface SocketSourceFunc {
    (socket: Socket, condition: GLib.IOCondition): boolean
}
export interface TaskThreadFunc {
    (task: Task, source_object: GObject.Object, task_data?: object | null, cancellable?: Cancellable | null): void
}
export interface VfsFileLookupFunc {
    (vfs: Vfs, identifier: string): File
}
export class Action {
    /* Properties of Gio.Action */
    readonly enabled:boolean
    readonly name:string
    readonly parameter_type:GLib.VariantType
    readonly state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    /* Virtual methods of Gio.Action */
    vfuncActivate?(parameter?: GLib.Variant | null): void
    vfuncChangeState?(value: GLib.Variant): void
    vfuncGetEnabled?(): boolean
    vfuncGetName?(): string
    vfuncGetParameterType?(): GLib.VariantType | null
    vfuncGetState?(): GLib.Variant
    vfuncGetStateHint?(): GLib.Variant | null
    vfuncGetStateType?(): GLib.VariantType | null
    static name: string
    static nameIsValid(action_name: string): boolean
    static parseDetailedName(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]
    static printDetailedName(action_name: string, target_value?: GLib.Variant | null): string
}
export class ActionGroup {
    /* Methods of Gio.ActionGroup */
    actionAdded(action_name: string): void
    actionEnabledChanged(action_name: string, enabled: boolean): void
    actionRemoved(action_name: string): void
    actionStateChanged(action_name: string, state: GLib.Variant): void
    activateAction(action_name: string, parameter?: GLib.Variant | null): void
    changeActionState(action_name: string, value: GLib.Variant): void
    getActionEnabled(action_name: string): boolean
    getActionParameterType(action_name: string): GLib.VariantType | null
    getActionState(action_name: string): GLib.Variant | null
    getActionStateHint(action_name: string): GLib.Variant | null
    getActionStateType(action_name: string): GLib.VariantType | null
    hasAction(action_name: string): boolean
    listActions(): string[]
    queryAction(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Virtual methods of Gio.ActionGroup */
    vfuncActionAdded?(action_name: string): void
    vfuncActionEnabledChanged?(action_name: string, enabled: boolean): void
    vfuncActionRemoved?(action_name: string): void
    vfuncActionStateChanged?(action_name: string, state: GLib.Variant): void
    vfuncActivateAction?(action_name: string, parameter?: GLib.Variant | null): void
    vfuncChangeActionState?(action_name: string, value: GLib.Variant): void
    vfuncGetActionEnabled?(action_name: string): boolean
    vfuncGetActionParameterType?(action_name: string): GLib.VariantType | null
    vfuncGetActionState?(action_name: string): GLib.Variant | null
    vfuncGetActionStateHint?(action_name: string): GLib.Variant | null
    vfuncGetActionStateType?(action_name: string): GLib.VariantType | null
    vfuncHasAction?(action_name: string): boolean
    vfuncListActions?(): string[]
    vfuncQueryAction?(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((obj: ActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: ((obj: ActionGroup, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: ((obj: ActionGroup, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: ((obj: ActionGroup, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((obj: ActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: ((obj: ActionGroup, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: ((obj: ActionGroup, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: ((obj: ActionGroup, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    static name: string
}
export class ActionMap {
    /* Methods of Gio.ActionMap */
    addAction(action: Action): void
    addActionEntries(entries: ActionEntry[], user_data?: object | null): void
    lookupAction(action_name: string): Action
    removeAction(action_name: string): void
    /* Virtual methods of Gio.ActionMap */
    vfuncAddAction?(action: Action): void
    vfuncLookupAction?(action_name: string): Action
    vfuncRemoveAction?(action_name: string): void
    static name: string
}
export class AppInfo {
    /* Methods of Gio.AppInfo */
    addSupportsType(content_type: string): boolean
    canDelete(): boolean
    canRemoveSupportsType(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    getCommandline(): string
    getDescription(): string
    getDisplayName(): string
    getExecutable(): string
    getIcon(): Icon
    getId(): string
    getName(): string
    getSupportedTypes(): string[]
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    launchUris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    launchUrisAsync(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    launchUrisFinish(result: AsyncResult): boolean
    removeSupportsType(content_type: string): boolean
    setAsDefaultForExtension(extension: string): boolean
    setAsDefaultForType(content_type: string): boolean
    setAsLastUsedForType(content_type: string): boolean
    shouldShow(): boolean
    supportsFiles(): boolean
    supportsUris(): boolean
    /* Virtual methods of Gio.AppInfo */
    vfuncAddSupportsType?(content_type: string): boolean
    vfuncCanDelete?(): boolean
    vfuncCanRemoveSupportsType?(): boolean
    vfuncDoDelete?(): boolean
    vfuncDup?(): AppInfo
    vfuncEqual?(appinfo2: AppInfo): boolean
    vfuncGetCommandline?(): string
    vfuncGetDescription?(): string
    vfuncGetDisplayName?(): string
    vfuncGetExecutable?(): string
    vfuncGetIcon?(): Icon
    vfuncGetId?(): string
    vfuncGetName?(): string
    vfuncGetSupportedTypes?(): string[]
    vfuncLaunch?(files?: File[] | null, context?: AppLaunchContext | null): boolean
    vfuncLaunchUris?(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    vfuncLaunchUrisAsync?(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLaunchUrisFinish?(result: AsyncResult): boolean
    vfuncRemoveSupportsType?(content_type: string): boolean
    vfuncSetAsDefaultForExtension?(extension: string): boolean
    vfuncSetAsDefaultForType?(content_type: string): boolean
    vfuncSetAsLastUsedForType?(content_type: string): boolean
    vfuncShouldShow?(): boolean
    vfuncSupportsFiles?(): boolean
    vfuncSupportsUris?(): boolean
    static name: string
    static createFromCommandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo
    static getAll(): AppInfo[]
    static getAllForType(content_type: string): AppInfo[]
    static getDefaultForType(content_type: string, must_support_uris: boolean): AppInfo
    static getDefaultForUriScheme(uri_scheme: string): AppInfo
    static getFallbackForType(content_type: string): AppInfo[]
    static getRecommendedForType(content_type: string): AppInfo[]
    static launchDefaultForUri(uri: string, context?: AppLaunchContext | null): boolean
    static launchDefaultForUriAsync(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static launchDefaultForUriFinish(result: AsyncResult): boolean
    static resetTypeAssociations(content_type: string): void
}
export class AsyncInitable {
    /* Methods of Gio.AsyncInitable */
    initAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Virtual methods of Gio.AsyncInitable */
    vfuncInitAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncInitFinish?(res: AsyncResult): boolean
    static name: string
    static newvAsync(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
}
export class AsyncResult {
    /* Methods of Gio.AsyncResult */
    getSourceObject(): GObject.Object | null
    getUserData(): object | null
    isTagged(source_tag?: object | null): boolean
    legacyPropagateError(): boolean
    /* Virtual methods of Gio.AsyncResult */
    vfuncGetSourceObject?(): GObject.Object | null
    vfuncGetUserData?(): object | null
    vfuncIsTagged?(source_tag?: object | null): boolean
    static name: string
}
export class Converter {
    /* Methods of Gio.Converter */
    convert(inbuf: any, outbuf: any, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Virtual methods of Gio.Converter */
    vfuncConvert?(inbuf: any | null, outbuf: any | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    vfuncReset?(): void
    static name: string
}
export class DBusInterface {
    /* Methods of Gio.DBusInterface */
    getObject(): DBusObject
    getInfo(): DBusInterfaceInfo
    setObject(object?: DBusObject | null): void
    /* Virtual methods of Gio.DBusInterface */
    vfuncDupObject?(): DBusObject
    vfuncGetInfo?(): DBusInterfaceInfo
    vfuncSetObject?(object?: DBusObject | null): void
    static name: string
}
export class DBusObject {
    /* Methods of Gio.DBusObject */
    getInterface(interface_name: string): DBusInterface
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of Gio.DBusObject */
    vfuncGetInterface?(interface_name: string): DBusInterface
    vfuncGetInterfaces?(): DBusInterface[]
    vfuncGetObjectPath?(): string
    vfuncInterfaceAdded?(interface_: DBusInterface): void
    vfuncInterfaceRemoved?(interface_: DBusInterface): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((obj: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: ((obj: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((obj: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: ((obj: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    static name: string
}
export class DBusObjectManager {
    /* Methods of Gio.DBusObjectManager */
    getInterface(object_path: string, interface_name: string): DBusInterface
    getObject(object_path: string): DBusObject
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Virtual methods of Gio.DBusObjectManager */
    vfuncGetInterface?(object_path: string, interface_name: string): DBusInterface
    vfuncGetObject?(object_path: string): DBusObject
    vfuncGetObjectPath?(): string
    vfuncGetObjects?(): DBusObject[]
    vfuncInterfaceAdded?(object: DBusObject, interface_: DBusInterface): void
    vfuncInterfaceRemoved?(object: DBusObject, interface_: DBusInterface): void
    vfuncObjectAdded?(object: DBusObject): void
    vfuncObjectRemoved?(object: DBusObject): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: ((obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: ((obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: ((obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: ((obj: DBusObjectManager, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: ((obj: DBusObjectManager, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: ((obj: DBusObjectManager, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: ((obj: DBusObjectManager, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    static name: string
}
export class DatagramBased {
    /* Methods of Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DatagramBased */
    vfuncConditionCheck?(condition: GLib.IOCondition): GLib.IOCondition
    vfuncConditionWait?(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfuncCreateSource?(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfuncReceiveMessages?(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfuncSendMessages?(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    static name: string
}
export class DesktopAppInfoLookup {
    /* Methods of Gio.DesktopAppInfoLookup */
    getDefaultForUriScheme(uri_scheme: string): AppInfo
    /* Virtual methods of Gio.DesktopAppInfoLookup */
    vfuncGetDefaultForUriScheme?(uri_scheme: string): AppInfo
    static name: string
}
export class Drive {
    /* Methods of Gio.Drive */
    canEject(): boolean
    canPollForMedia(): boolean
    canStart(): boolean
    canStartDegraded(): boolean
    canStop(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    enumerateIdentifiers(): string[]
    getIcon(): Icon
    getIdentifier(kind: string): string | null
    getName(): string
    getSortKey(): string | null
    getStartStopType(): DriveStartStopType
    getSymbolicIcon(): Icon
    getVolumes(): Volume[]
    hasMedia(): boolean
    hasVolumes(): boolean
    isMediaCheckAutomatic(): boolean
    isMediaRemovable(): boolean
    isRemovable(): boolean
    pollForMedia(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    pollForMediaFinish(result: AsyncResult): boolean
    start(flags: DriveStartFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    startFinish(result: AsyncResult): boolean
    stop(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    stopFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.Drive */
    vfuncCanEject?(): boolean
    vfuncCanPollForMedia?(): boolean
    vfuncCanStart?(): boolean
    vfuncCanStartDegraded?(): boolean
    vfuncCanStop?(): boolean
    vfuncChanged?(): void
    vfuncDisconnected?(): void
    vfuncEject?(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectButton?(): void
    vfuncEjectFinish?(result: AsyncResult): boolean
    vfuncEjectWithOperation?(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectWithOperationFinish?(result: AsyncResult): boolean
    vfuncEnumerateIdentifiers?(): string[]
    vfuncGetIcon?(): Icon
    vfuncGetIdentifier?(kind: string): string | null
    vfuncGetName?(): string
    vfuncGetSortKey?(): string | null
    vfuncGetStartStopType?(): DriveStartStopType
    vfuncGetSymbolicIcon?(): Icon
    vfuncGetVolumes?(): Volume[]
    vfuncHasMedia?(): boolean
    vfuncHasVolumes?(): boolean
    vfuncIsMediaCheckAutomatic?(): boolean
    vfuncIsMediaRemovable?(): boolean
    vfuncIsRemovable?(): boolean
    vfuncPollForMedia?(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncPollForMediaFinish?(result: AsyncResult): boolean
    vfuncStart?(flags: DriveStartFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncStartFinish?(result: AsyncResult): boolean
    vfuncStop?(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncStopButton?(): void
    vfuncStopFinish?(result: AsyncResult): boolean
    /* Signals of Gio.Drive */
    connect(sigName: "changed", callback: ((obj: Drive) => void)): number
    connect_after(sigName: "changed", callback: ((obj: Drive) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "disconnected", callback: ((obj: Drive) => void)): number
    connect_after(sigName: "disconnected", callback: ((obj: Drive) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "eject-button", callback: ((obj: Drive) => void)): number
    connect_after(sigName: "eject-button", callback: ((obj: Drive) => void)): number
    emit(sigName: "eject-button"): void
    connect(sigName: "stop-button", callback: ((obj: Drive) => void)): number
    connect_after(sigName: "stop-button", callback: ((obj: Drive) => void)): number
    emit(sigName: "stop-button"): void
    static name: string
}
export class DtlsClientConnection {
    /* Properties of Gio.DtlsClientConnection */
    readonly accepted_cas:object[]
    server_identity:SocketConnectable
    validation_flags:TlsCertificateFlags
    /* Methods of Gio.DtlsClientConnection */
    getAcceptedCas(): any
    getServerIdentity(): SocketConnectable
    getValidationFlags(): TlsCertificateFlags
    setServerIdentity(identity: SocketConnectable): void
    setValidationFlags(flags: TlsCertificateFlags): void
    static name: string
}
export class DtlsConnection {
    /* Properties of Gio.DtlsConnection */
    advertised_protocols:string[]
    certificate:TlsCertificate
    database:TlsDatabase
    interaction:TlsInteraction
    readonly negotiated_protocol:string
    readonly peer_certificate:TlsCertificate
    readonly peer_certificate_errors:TlsCertificateFlags
    rehandshake_mode:TlsRehandshakeMode
    require_close_notify:boolean
    /* Methods of Gio.DtlsConnection */
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    emitAcceptCertificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate
    getDatabase(): TlsDatabase
    getInteraction(): TlsInteraction
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate
    getPeerCertificateErrors(): TlsCertificateFlags
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database: TlsDatabase): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(require_close_notify: boolean): void
    shutdown(shutdown_read: boolean, shutdown_write: boolean, cancellable?: Cancellable | null): boolean
    shutdownAsync(shutdown_read: boolean, shutdown_write: boolean, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    shutdownFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.DtlsConnection */
    vfuncAcceptCertificate?(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfuncGetNegotiatedProtocol?(): string | null
    vfuncHandshake?(cancellable?: Cancellable | null): boolean
    vfuncHandshakeAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncHandshakeFinish?(result: AsyncResult): boolean
    vfuncSetAdvertisedProtocols?(protocols?: string[] | null): void
    vfuncShutdown?(shutdown_read: boolean, shutdown_write: boolean, cancellable?: Cancellable | null): boolean
    vfuncShutdownAsync?(shutdown_read: boolean, shutdown_write: boolean, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncShutdownFinish?(result: AsyncResult): boolean
    /* Signals of Gio.DtlsConnection */
    connect(sigName: "accept-certificate", callback: ((obj: DtlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: ((obj: DtlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peer_cert: TlsCertificate, errors: TlsCertificateFlags): void
    static name: string
}
export class DtlsServerConnection {
    /* Properties of Gio.DtlsServerConnection */
    authentication_mode:TlsAuthenticationMode
    static name: string
}
export class File {
    /* Methods of Gio.File */
    appendTo(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    appendToAsync(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    appendToFinish(res: AsyncResult): FileOutputStream
    copy(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progress_callback?: FileProgressCallback | null): boolean
    copyAsync(destination: File, flags: FileCopyFlags, io_priority: number, cancellable?: Cancellable | null): void
    copyAttributes(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null): boolean
    copyFinish(res: AsyncResult): boolean
    create(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    createAsync(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    createFinish(res: AsyncResult): FileOutputStream
    createReadwrite(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    createReadwriteAsync(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    createReadwriteFinish(res: AsyncResult): FileIOStream
    delete(cancellable?: Cancellable | null): boolean
    deleteAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    deleteFinish(result: AsyncResult): boolean
    dup(): File
    ejectMountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectMountableFinish(result: AsyncResult): boolean
    ejectMountableWithOperation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectMountableWithOperationFinish(result: AsyncResult): boolean
    enumerateChildren(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileEnumerator
    enumerateChildrenAsync(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    enumerateChildrenFinish(res: AsyncResult): FileEnumerator
    equal(file2: File): boolean
    findEnclosingMount(cancellable?: Cancellable | null): Mount
    findEnclosingMountAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    findEnclosingMountFinish(res: AsyncResult): Mount
    getBasename(): string | null
    getChild(name: string): File
    getChildForDisplayName(display_name: string): File
    getParent(): File | null
    getParseName(): string
    getPath(): string | null
    getRelativePath(descendant: File): string | null
    getUri(): string
    getUriScheme(): string
    hasParent(parent?: File | null): boolean
    hasPrefix(prefix: File): boolean
    hasUriScheme(uri_scheme: string): boolean
    hash(): number
    isNative(): boolean
    loadBytes(cancellable?: Cancellable | null): [ /* returnType */ Gjs.byteArray.ByteArray, /* etag_out */ string | null ]
    loadBytesAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadBytesFinish(result: AsyncResult): [ /* returnType */ Gjs.byteArray.ByteArray, /* etag_out */ string | null ]
    loadContents(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* contents */ any, /* etag_out */ string | null ]
    loadContentsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ any, /* etag_out */ string | null ]
    loadPartialContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ any, /* etag_out */ string | null ]
    makeDirectory(cancellable?: Cancellable | null): boolean
    makeDirectoryAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    makeDirectoryFinish(result: AsyncResult): boolean
    makeDirectoryWithParents(cancellable?: Cancellable | null): boolean
    makeSymbolicLink(symlink_value: string, cancellable?: Cancellable | null): boolean
    measureDiskUsageFinish(result: AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    monitor(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    monitorDirectory(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    monitorFile(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    mountEnclosingVolume(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountEnclosingVolumeFinish(result: AsyncResult): boolean
    mountMountable(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountMountableFinish(result: AsyncResult): File
    move(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progress_callback?: FileProgressCallback | null): boolean
    openReadwrite(cancellable?: Cancellable | null): FileIOStream
    openReadwriteAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    openReadwriteFinish(res: AsyncResult): FileIOStream
    peekPath(): string | null
    pollMountable(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    pollMountableFinish(result: AsyncResult): boolean
    queryDefaultHandler(cancellable?: Cancellable | null): AppInfo
    queryDefaultHandlerAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryDefaultHandlerFinish(result: AsyncResult): AppInfo
    queryExists(cancellable?: Cancellable | null): boolean
    queryFileType(flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileType
    queryFilesystemInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryFilesystemInfoAsync(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryFilesystemInfoFinish(res: AsyncResult): FileInfo
    queryInfo(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(res: AsyncResult): FileInfo
    querySettableAttributes(cancellable?: Cancellable | null): FileAttributeInfoList
    queryWritableNamespaces(cancellable?: Cancellable | null): FileAttributeInfoList
    read(cancellable?: Cancellable | null): FileInputStream
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readFinish(res: AsyncResult): FileInputStream
    replace(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    replaceAsync(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContents(contents: any, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* new_etag */ string | null ]
    replaceContentsAsync(contents: any, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContentsBytesAsync(contents: Gjs.byteArray.ByteArray, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* new_etag */ string | null ]
    replaceFinish(res: AsyncResult): FileOutputStream
    replaceReadwrite(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    replaceReadwriteAsync(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceReadwriteFinish(res: AsyncResult): FileIOStream
    resolveRelativePath(relative_path: string): File
    setAttribute(attribute: string, type: FileAttributeType, value_p: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeByteString(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeInt32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeInt64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeString(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeUint32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeUint64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributesAsync(info: FileInfo, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    setAttributesFinish(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    setAttributesFromInfo(info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setDisplayName(display_name: string, cancellable?: Cancellable | null): File
    setDisplayNameAsync(display_name: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    setDisplayNameFinish(res: AsyncResult): File
    startMountable(flags: DriveStartFlags, start_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    startMountableFinish(result: AsyncResult): boolean
    stopMountable(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    stopMountableFinish(result: AsyncResult): boolean
    supportsThreadContexts(): boolean
    trash(cancellable?: Cancellable | null): boolean
    trashAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    trashFinish(result: AsyncResult): boolean
    unmountMountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountMountableFinish(result: AsyncResult): boolean
    unmountMountableWithOperation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountMountableWithOperationFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.File */
    vfuncAppendTo?(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfuncAppendToAsync?(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncAppendToFinish?(res: AsyncResult): FileOutputStream
    vfuncCopy?(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progress_callback?: FileProgressCallback | null): boolean
    vfuncCopyAsync?(destination: File, flags: FileCopyFlags, io_priority: number, cancellable?: Cancellable | null): void
    vfuncCopyFinish?(res: AsyncResult): boolean
    vfuncCreate?(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfuncCreateAsync?(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCreateFinish?(res: AsyncResult): FileOutputStream
    vfuncCreateReadwrite?(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    vfuncCreateReadwriteAsync?(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCreateReadwriteFinish?(res: AsyncResult): FileIOStream
    vfuncDeleteFile?(cancellable?: Cancellable | null): boolean
    vfuncDeleteFileAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncDeleteFileFinish?(result: AsyncResult): boolean
    vfuncDup?(): File
    vfuncEjectMountable?(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectMountableFinish?(result: AsyncResult): boolean
    vfuncEjectMountableWithOperation?(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectMountableWithOperationFinish?(result: AsyncResult): boolean
    vfuncEnumerateChildren?(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileEnumerator
    vfuncEnumerateChildrenAsync?(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEnumerateChildrenFinish?(res: AsyncResult): FileEnumerator
    vfuncEqual?(file2: File): boolean
    vfuncFindEnclosingMount?(cancellable?: Cancellable | null): Mount
    vfuncFindEnclosingMountAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFindEnclosingMountFinish?(res: AsyncResult): Mount
    vfuncGetBasename?(): string
    vfuncGetChildForDisplayName?(display_name: string): File
    vfuncGetParent?(): File | null
    vfuncGetParseName?(): string
    vfuncGetPath?(): string
    vfuncGetRelativePath?(descendant: File): string
    vfuncGetUri?(): string
    vfuncGetUriScheme?(): string
    vfuncHasUriScheme?(uri_scheme: string): boolean
    vfuncHash?(): number
    vfuncIsNative?(): boolean
    vfuncMakeDirectory?(cancellable?: Cancellable | null): boolean
    vfuncMakeDirectoryAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncMakeDirectoryFinish?(result: AsyncResult): boolean
    vfuncMakeSymbolicLink?(symlink_value: string, cancellable?: Cancellable | null): boolean
    vfuncMeasureDiskUsageFinish?(result: AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    vfuncMonitorDir?(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    vfuncMonitorFile?(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    vfuncMountEnclosingVolume?(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncMountEnclosingVolumeFinish?(result: AsyncResult): boolean
    vfuncMountMountable?(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncMountMountableFinish?(result: AsyncResult): File
    vfuncMove?(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progress_callback?: FileProgressCallback | null): boolean
    vfuncOpenReadwrite?(cancellable?: Cancellable | null): FileIOStream
    vfuncOpenReadwriteAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncOpenReadwriteFinish?(res: AsyncResult): FileIOStream
    vfuncPollMountable?(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncPollMountableFinish?(result: AsyncResult): boolean
    vfuncPrefixMatches?(file: File): boolean
    vfuncQueryFilesystemInfo?(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfuncQueryFilesystemInfoAsync?(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryFilesystemInfoFinish?(res: AsyncResult): FileInfo
    vfuncQueryInfo?(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo
    vfuncQueryInfoAsync?(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryInfoFinish?(res: AsyncResult): FileInfo
    vfuncQuerySettableAttributes?(cancellable?: Cancellable | null): FileAttributeInfoList
    vfuncQueryWritableNamespaces?(cancellable?: Cancellable | null): FileAttributeInfoList
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReadFinish?(res: AsyncResult): FileInputStream
    vfuncReadFn?(cancellable?: Cancellable | null): FileInputStream
    vfuncReplace?(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfuncReplaceAsync?(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReplaceFinish?(res: AsyncResult): FileOutputStream
    vfuncReplaceReadwrite?(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    vfuncReplaceReadwriteAsync?(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReplaceReadwriteFinish?(res: AsyncResult): FileIOStream
    vfuncResolveRelativePath?(relative_path: string): File
    vfuncSetAttribute?(attribute: string, type: FileAttributeType, value_p: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfuncSetAttributesAsync?(info: FileInfo, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSetAttributesFinish?(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    vfuncSetAttributesFromInfo?(info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfuncSetDisplayName?(display_name: string, cancellable?: Cancellable | null): File
    vfuncSetDisplayNameAsync?(display_name: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSetDisplayNameFinish?(res: AsyncResult): File
    vfuncStartMountable?(flags: DriveStartFlags, start_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncStartMountableFinish?(result: AsyncResult): boolean
    vfuncStopMountable?(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncStopMountableFinish?(result: AsyncResult): boolean
    vfuncTrash?(cancellable?: Cancellable | null): boolean
    vfuncTrashAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncTrashFinish?(result: AsyncResult): boolean
    vfuncUnmountMountable?(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncUnmountMountableFinish?(result: AsyncResult): boolean
    vfuncUnmountMountableWithOperation?(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncUnmountMountableWithOperationFinish?(result: AsyncResult): boolean
    static name: string
    static newForCommandlineArg(arg: string): File
    static newForCommandlineArgAndCwd(arg: string, cwd: string): File
    static newForPath(path: string): File
    static newForUri(uri: string): File
    static newTmp(tmpl?: string | null): [ /* returnType */ File, /* iostream */ FileIOStream ]
    static parseName(parse_name: string): File
}
export class FileDescriptorBased {
    /* Methods of Gio.FileDescriptorBased */
    getFd(): number
    /* Virtual methods of Gio.FileDescriptorBased */
    vfuncGetFd?(): number
    static name: string
}
export class Icon {
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    /* Virtual methods of Gio.Icon */
    vfuncEqual?(icon2?: Icon | null): boolean
    vfuncHash?(): number
    vfuncSerialize?(): GLib.Variant
    static name: string
    static deserialize(value: GLib.Variant): Icon
    static hash(icon: object): number
    static newForString(str: string): Icon
}
export class Initable {
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Initable */
    vfuncInit?(cancellable?: Cancellable | null): boolean
    static name: string
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
}
export class ListModel {
    /* Methods of Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Virtual methods of Gio.ListModel */
    vfuncGetItem?(position: number): GObject.Object | null
    vfuncGetItemType?(): GObject.Type
    vfuncGetNItems?(): number
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: ((obj: ListModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: ((obj: ListModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    static name: string
}
export class LoadableIcon {
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of Gio.LoadableIcon */
    vfuncLoad?(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    vfuncLoadAsync?(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLoadFinish?(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    static name: string
}
export class Mount {
    /* Methods of Gio.Mount */
    canEject(): boolean
    canUnmount(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    getDefaultLocation(): File
    getDrive(): Drive | null
    getIcon(): Icon
    getName(): string
    getRoot(): File
    getSortKey(): string | null
    getSymbolicIcon(): Icon
    getUuid(): string | null
    getVolume(): Volume | null
    guessContentType(force_rescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    guessContentTypeFinish(result: AsyncResult): string[]
    guessContentTypeSync(force_rescan: boolean, cancellable?: Cancellable | null): string[]
    isShadowed(): boolean
    remount(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    remountFinish(result: AsyncResult): boolean
    shadow(): void
    unmount(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountFinish(result: AsyncResult): boolean
    unmountWithOperation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountWithOperationFinish(result: AsyncResult): boolean
    unshadow(): void
    /* Virtual methods of Gio.Mount */
    vfuncCanEject?(): boolean
    vfuncCanUnmount?(): boolean
    vfuncChanged?(): void
    vfuncEject?(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectFinish?(result: AsyncResult): boolean
    vfuncEjectWithOperation?(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectWithOperationFinish?(result: AsyncResult): boolean
    vfuncGetDefaultLocation?(): File
    vfuncGetDrive?(): Drive | null
    vfuncGetIcon?(): Icon
    vfuncGetName?(): string
    vfuncGetRoot?(): File
    vfuncGetSortKey?(): string | null
    vfuncGetSymbolicIcon?(): Icon
    vfuncGetUuid?(): string | null
    vfuncGetVolume?(): Volume | null
    vfuncGuessContentType?(force_rescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncGuessContentTypeFinish?(result: AsyncResult): string[]
    vfuncGuessContentTypeSync?(force_rescan: boolean, cancellable?: Cancellable | null): string[]
    vfuncPreUnmount?(): void
    vfuncRemount?(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncRemountFinish?(result: AsyncResult): boolean
    vfuncUnmount?(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncUnmountFinish?(result: AsyncResult): boolean
    vfuncUnmountWithOperation?(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncUnmountWithOperationFinish?(result: AsyncResult): boolean
    vfuncUnmounted?(): void
    /* Signals of Gio.Mount */
    connect(sigName: "changed", callback: ((obj: Mount) => void)): number
    connect_after(sigName: "changed", callback: ((obj: Mount) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "pre-unmount", callback: ((obj: Mount) => void)): number
    connect_after(sigName: "pre-unmount", callback: ((obj: Mount) => void)): number
    emit(sigName: "pre-unmount"): void
    connect(sigName: "unmounted", callback: ((obj: Mount) => void)): number
    connect_after(sigName: "unmounted", callback: ((obj: Mount) => void)): number
    emit(sigName: "unmounted"): void
    static name: string
}
export class NetworkMonitor {
    /* Properties of Gio.NetworkMonitor */
    readonly connectivity:NetworkConnectivity
    readonly network_available:boolean
    readonly network_metered:boolean
    /* Methods of Gio.NetworkMonitor */
    canReach(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean
    canReachAsync(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    canReachFinish(result: AsyncResult): boolean
    getConnectivity(): NetworkConnectivity
    getNetworkAvailable(): boolean
    getNetworkMetered(): boolean
    /* Virtual methods of Gio.NetworkMonitor */
    vfuncCanReach?(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean
    vfuncCanReachAsync?(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCanReachFinish?(result: AsyncResult): boolean
    vfuncNetworkChanged?(network_available: boolean): void
    /* Signals of Gio.NetworkMonitor */
    connect(sigName: "network-changed", callback: ((obj: NetworkMonitor, network_available: boolean) => void)): number
    connect_after(sigName: "network-changed", callback: ((obj: NetworkMonitor, network_available: boolean) => void)): number
    emit(sigName: "network-changed", network_available: boolean): void
    static name: string
    static getDefault(): NetworkMonitor
}
export class PollableInputStream {
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.PollableInputStream */
    vfuncCanPoll?(): boolean
    vfuncCreateSource?(cancellable?: Cancellable | null): GLib.Source
    vfuncIsReadable?(): boolean
    vfuncReadNonblocking?(buffer: any | null): number
    static name: string
}
export class PollableOutputStream {
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Virtual methods of Gio.PollableOutputStream */
    vfuncCanPoll?(): boolean
    vfuncCreateSource?(cancellable?: Cancellable | null): GLib.Source
    vfuncIsWritable?(): boolean
    vfuncWriteNonblocking?(buffer: any | null): number
    vfuncWritevNonblocking?(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    static name: string
}
export class Proxy {
    /* Methods of Gio.Proxy */
    connect(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null): IOStream
    connectAsync(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): IOStream
    supportsHostname(): boolean
    /* Virtual methods of Gio.Proxy */
    vfuncConnect?(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null): IOStream
    vfuncConnectAsync?(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncConnectFinish?(result: AsyncResult): IOStream
    vfuncSupportsHostname?(): boolean
    static name: string
    static getDefaultForProtocol(protocol: string): Proxy
}
export class ProxyResolver {
    /* Methods of Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupFinish(result: AsyncResult): string[]
    /* Virtual methods of Gio.ProxyResolver */
    vfuncIsSupported?(): boolean
    vfuncLookup?(uri: string, cancellable?: Cancellable | null): string[]
    vfuncLookupAsync?(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupFinish?(result: AsyncResult): string[]
    static name: string
    static getDefault(): ProxyResolver
}
export class RemoteActionGroup {
    /* Methods of Gio.RemoteActionGroup */
    activateActionFull(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    changeActionStateFull(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    /* Virtual methods of Gio.RemoteActionGroup */
    vfuncActivateActionFull?(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    vfuncChangeActionStateFull?(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    static name: string
}
export class Seekable {
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Seekable */
    vfuncCanSeek?(): boolean
    vfuncCanTruncate?(): boolean
    vfuncSeek?(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell?(): number
    vfuncTruncateFn?(offset: number, cancellable?: Cancellable | null): boolean
    static name: string
}
export class SocketConnectable {
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketConnectable */
    vfuncEnumerate?(): SocketAddressEnumerator
    vfuncProxyEnumerate?(): SocketAddressEnumerator
    vfuncToString?(): string
    static name: string
}
export class TlsBackend {
    /* Methods of Gio.TlsBackend */
    getCertificateType(): GObject.Type
    getClientConnectionType(): GObject.Type
    getDefaultDatabase(): TlsDatabase
    getDtlsClientConnectionType(): GObject.Type
    getDtlsServerConnectionType(): GObject.Type
    getFileDatabaseType(): GObject.Type
    getServerConnectionType(): GObject.Type
    setDefaultDatabase(database?: TlsDatabase | null): void
    supportsDtls(): boolean
    supportsTls(): boolean
    /* Virtual methods of Gio.TlsBackend */
    vfuncGetDefaultDatabase?(): TlsDatabase
    vfuncSupportsDtls?(): boolean
    vfuncSupportsTls?(): boolean
    static name: string
    static getDefault(): TlsBackend
}
export class TlsClientConnection {
    /* Properties of Gio.TlsClientConnection */
    readonly accepted_cas:object[]
    server_identity:SocketConnectable
    use_ssl3:boolean
    validation_flags:TlsCertificateFlags
    /* Methods of Gio.TlsClientConnection */
    copySessionState(source: TlsClientConnection): void
    getAcceptedCas(): any
    getServerIdentity(): SocketConnectable
    getUseSsl3(): boolean
    getValidationFlags(): TlsCertificateFlags
    setServerIdentity(identity: SocketConnectable): void
    setUseSsl3(use_ssl3: boolean): void
    setValidationFlags(flags: TlsCertificateFlags): void
    /* Virtual methods of Gio.TlsClientConnection */
    vfuncCopySessionState?(source: TlsClientConnection): void
    static name: string
}
export class TlsFileDatabase {
    /* Properties of Gio.TlsFileDatabase */
    anchors:string
    static name: string
}
export class TlsServerConnection {
    /* Properties of Gio.TlsServerConnection */
    authentication_mode:TlsAuthenticationMode
    static name: string
}
export class Volume {
    /* Methods of Gio.Volume */
    canEject(): boolean
    canMount(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    enumerateIdentifiers(): string[]
    getActivationRoot(): File | null
    getDrive(): Drive | null
    getIcon(): Icon
    getIdentifier(kind: string): string | null
    getMount(): Mount | null
    getName(): string
    getSortKey(): string | null
    getSymbolicIcon(): Icon
    getUuid(): string | null
    mount(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountFinish(result: AsyncResult): boolean
    shouldAutomount(): boolean
    /* Virtual methods of Gio.Volume */
    vfuncCanEject?(): boolean
    vfuncCanMount?(): boolean
    vfuncChanged?(): void
    vfuncEject?(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectFinish?(result: AsyncResult): boolean
    vfuncEjectWithOperation?(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectWithOperationFinish?(result: AsyncResult): boolean
    vfuncEnumerateIdentifiers?(): string[]
    vfuncGetActivationRoot?(): File | null
    vfuncGetDrive?(): Drive | null
    vfuncGetIcon?(): Icon
    vfuncGetIdentifier?(kind: string): string | null
    vfuncGetMount?(): Mount | null
    vfuncGetName?(): string
    vfuncGetSortKey?(): string | null
    vfuncGetSymbolicIcon?(): Icon
    vfuncGetUuid?(): string | null
    vfuncMountFinish?(result: AsyncResult): boolean
    vfuncMountFn?(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncRemoved?(): void
    vfuncShouldAutomount?(): boolean
    /* Signals of Gio.Volume */
    connect(sigName: "changed", callback: ((obj: Volume) => void)): number
    connect_after(sigName: "changed", callback: ((obj: Volume) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "removed", callback: ((obj: Volume) => void)): number
    connect_after(sigName: "removed", callback: ((obj: Volume) => void)): number
    emit(sigName: "removed"): void
    static name: string
}
export interface AppInfoMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppInfoMonitor {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppInfoMonitor */
    connect(sigName: "changed", callback: ((obj: AppInfoMonitor) => void)): number
    connect_after(sigName: "changed", callback: ((obj: AppInfoMonitor) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: AppInfoMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: AppInfoMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppInfoMonitor_ConstructProps)
    _init (config?: AppInfoMonitor_ConstructProps): void
    static get(): AppInfoMonitor
    static $gtype: GObject.Type
}
export interface AppLaunchContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppLaunchContext {
    /* Fields of Gio.AppLaunchContext */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.AppLaunchContext */
    getDisplay(info: AppInfo, files: File[]): string
    getEnvironment(): string[]
    getStartupNotifyId(info: AppInfo, files: File[]): string
    launchFailed(startup_notify_id: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.AppLaunchContext */
    vfuncGetDisplay?(info: AppInfo, files: File[]): string
    vfuncGetStartupNotifyId?(info: AppInfo, files: File[]): string
    vfuncLaunchFailed?(startup_notify_id: string): void
    vfuncLaunched?(info: AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: ((obj: AppLaunchContext, startup_notify_id: string) => void)): number
    connect_after(sigName: "launch-failed", callback: ((obj: AppLaunchContext, startup_notify_id: string) => void)): number
    emit(sigName: "launch-failed", startup_notify_id: string): void
    connect(sigName: "launched", callback: ((obj: AppLaunchContext, info: AppInfo, platform_data: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: ((obj: AppLaunchContext, info: AppInfo, platform_data: GLib.Variant) => void)): number
    emit(sigName: "launched", info: AppInfo, platform_data: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
    action_group?:ActionGroup
    application_id?:string
    flags?:ApplicationFlags
    inactivity_timeout?:number
    resource_base_path?:string
}
export class Application {
    /* Properties of Gio.Application */
    action_group:ActionGroup
    application_id:string
    flags:ApplicationFlags
    inactivity_timeout:number
    readonly is_busy:boolean
    readonly is_registered:boolean
    readonly is_remote:boolean
    resource_base_path:string
    /* Fields of Gio.Application */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Application */
    activate(): void
    addMainOption(long_name: string, short_name: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, arg_description?: string | null): void
    addMainOptionEntries(entries: GLib.OptionEntry[]): void
    addOptionGroup(group: GLib.OptionGroup): void
    bindBusyProperty(object: GObject.Object, property: string): void
    getApplicationId(): string
    getDbusConnection(): DBusConnection
    getDbusObjectPath(): string
    getFlags(): ApplicationFlags
    getInactivityTimeout(): number
    getIsBusy(): boolean
    getIsRegistered(): boolean
    getIsRemote(): boolean
    getResourceBasePath(): string | null
    hold(): void
    markBusy(): void
    open(files: File[], hint: string): void
    quit(): void
    register(cancellable?: Cancellable | null): boolean
    release(): void
    run(argv?: string[] | null): number
    sendNotification(id: string | null, notification: Notification): void
    setActionGroup(action_group?: ActionGroup | null): void
    setApplicationId(application_id?: string | null): void
    setDefault(): void
    setFlags(flags: ApplicationFlags): void
    setInactivityTimeout(inactivity_timeout: number): void
    setOptionContextDescription(description?: string | null): void
    setOptionContextParameterString(parameter_string?: string | null): void
    setOptionContextSummary(summary?: string | null): void
    setResourceBasePath(resource_path?: string | null): void
    unbindBusyProperty(object: GObject.Object, property: string): void
    unmarkBusy(): void
    withdrawNotification(id: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.ActionGroup */
    actionAdded(action_name: string): void
    actionEnabledChanged(action_name: string, enabled: boolean): void
    actionRemoved(action_name: string): void
    actionStateChanged(action_name: string, state: GLib.Variant): void
    activateAction(action_name: string, parameter?: GLib.Variant | null): void
    changeActionState(action_name: string, value: GLib.Variant): void
    getActionEnabled(action_name: string): boolean
    getActionParameterType(action_name: string): GLib.VariantType | null
    getActionState(action_name: string): GLib.Variant | null
    getActionStateHint(action_name: string): GLib.Variant | null
    getActionStateType(action_name: string): GLib.VariantType | null
    hasAction(action_name: string): boolean
    listActions(): string[]
    queryAction(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    addAction(action: Action): void
    addActionEntries(entries: ActionEntry[], user_data?: object | null): void
    lookupAction(action_name: string): Action
    removeAction(action_name: string): void
    /* Virtual methods of Gio.Application */
    vfuncActivate?(): void
    vfuncAddPlatformData?(builder: GLib.VariantBuilder): void
    vfuncAfterEmit?(platform_data: GLib.Variant): void
    vfuncBeforeEmit?(platform_data: GLib.Variant): void
    vfuncCommandLine?(command_line: ApplicationCommandLine): number
    vfuncDbusRegister?(connection: DBusConnection, object_path: string): boolean
    vfuncDbusUnregister?(connection: DBusConnection, object_path: string): void
    vfuncHandleLocalOptions?(options: GLib.VariantDict): number
    vfuncLocalCommandLine?(arguments_: string[]): [ /* returnType */ boolean, /* exit_status */ number ]
    vfuncNameLost?(): boolean
    vfuncOpen?(files: File[], hint: string): void
    vfuncQuitMainloop?(): void
    vfuncRunMainloop?(): void
    vfuncShutdown?(): void
    vfuncStartup?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Application */
    connect(sigName: "activate", callback: ((obj: Application) => void)): number
    connect_after(sigName: "activate", callback: ((obj: Application) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "command-line", callback: ((obj: Application, command_line: ApplicationCommandLine) => number)): number
    connect_after(sigName: "command-line", callback: ((obj: Application, command_line: ApplicationCommandLine) => number)): number
    emit(sigName: "command-line", command_line: ApplicationCommandLine): void
    connect(sigName: "handle-local-options", callback: ((obj: Application, options: GLib.VariantDict) => number)): number
    connect_after(sigName: "handle-local-options", callback: ((obj: Application, options: GLib.VariantDict) => number)): number
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    connect(sigName: "name-lost", callback: ((obj: Application) => boolean)): number
    connect_after(sigName: "name-lost", callback: ((obj: Application) => boolean)): number
    emit(sigName: "name-lost"): void
    connect(sigName: "open", callback: ((obj: Application, files: File[], hint: string) => void)): number
    connect_after(sigName: "open", callback: ((obj: Application, files: File[], hint: string) => void)): number
    emit(sigName: "open", files: File[], hint: string): void
    connect(sigName: "shutdown", callback: ((obj: Application) => void)): number
    connect_after(sigName: "shutdown", callback: ((obj: Application) => void)): number
    emit(sigName: "shutdown"): void
    connect(sigName: "startup", callback: ((obj: Application) => void)): number
    connect_after(sigName: "startup", callback: ((obj: Application) => void)): number
    emit(sigName: "startup"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((obj: Application, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: ((obj: Application, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: ((obj: Application, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: ((obj: Application, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((obj: Application, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: ((obj: Application, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: ((obj: Application, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: ((obj: Application, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: "notify::action-group", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application-id", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inactivity-timeout", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-busy", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-registered", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-remote", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-base-path", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: ((obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static new(application_id: string | null, flags: ApplicationFlags): Application
    static getDefault(): Application
    static idIsValid(application_id: string): boolean
    static $gtype: GObject.Type
}
export interface ApplicationCommandLine_ConstructProps extends GObject.Object_ConstructProps {
    "arguments"?:GLib.Variant
    options?:GLib.Variant
    platform_data?:GLib.Variant
}
export class ApplicationCommandLine {
    /* Properties of Gio.ApplicationCommandLine */
    readonly is_remote:boolean
    /* Fields of Gio.ApplicationCommandLine */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ApplicationCommandLine */
    createFileForArg(arg: string): File
    getArguments(): string[]
    getCwd(): string | null
    getEnviron(): string[]
    getExitStatus(): number
    getIsRemote(): boolean
    getOptionsDict(): GLib.VariantDict
    getPlatformData(): GLib.Variant | null
    getStdin(): InputStream
    getenv(name: string): string
    setExitStatus(exit_status: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.ApplicationCommandLine */
    vfuncGetStdin?(): InputStream
    vfuncPrintLiteral?(message: string): void
    vfuncPrinterrLiteral?(message: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-remote", callback: ((obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: ((obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ApplicationCommandLine_ConstructProps)
    _init (config?: ApplicationCommandLine_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BufferedInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    buffer_size?:number
}
export class BufferedInputStream {
    /* Properties of Gio.BufferedInputStream */
    buffer_size:number
    /* Properties of Gio.FilterInputStream */
    close_base_stream:boolean
    /* Fields of Gio.BufferedInputStream */
    parent_instance:FilterInputStream
    /* Fields of Gio.FilterInputStream */
    base_stream:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable?: Cancellable | null): number
    fillAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    fillFinish(result: AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: any, offset: number): number
    peekBuffer(): any
    readByte(cancellable?: Cancellable | null): number
    setBufferSize(size: number): void
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytes_read */ number ]
    readAllAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    readBytesAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): Gjs.byteArray.ByteArray
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedInputStream */
    vfuncFill?(count: number, cancellable?: Cancellable | null): number
    vfuncFillAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFillFinish?(result: AsyncResult): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer-size", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-base-stream", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BufferedInputStream_ConstructProps)
    _init (config?: BufferedInputStream_ConstructProps): void
    static new(base_stream: InputStream): BufferedInputStream
    static newSized(base_stream: InputStream, size: number): BufferedInputStream
    static $gtype: GObject.Type
}
export interface BufferedOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    auto_grow?:boolean
    buffer_size?:number
}
export class BufferedOutputStream {
    /* Properties of Gio.BufferedOutputStream */
    auto_grow:boolean
    buffer_size:number
    /* Properties of Gio.FilterOutputStream */
    /* Fields of Gio.BufferedOutputStream */
    parent_instance:FilterOutputStream
    priv:BufferedOutputStreamPrivate
    /* Fields of Gio.FilterOutputStream */
    base_stream:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.BufferedOutputStream */
    getAutoGrow(): boolean
    getBufferSize(): number
    setAutoGrow(auto_grow: boolean): void
    setBufferSize(size: number): void
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAllAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAllAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncFlush?(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: AsyncResult): boolean
    vfuncSplice?(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync?(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync?(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfuncWritevFn?(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-grow", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-grow", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BufferedOutputStream_ConstructProps)
    _init (config?: BufferedOutputStream_ConstructProps): void
    static new(base_stream: OutputStream): BufferedOutputStream
    static newSized(base_stream: OutputStream, size: number): BufferedOutputStream
    static $gtype: GObject.Type
}
export interface BytesIcon_ConstructProps extends GObject.Object_ConstructProps {
    bytes?:Gjs.byteArray.ByteArray
}
export class BytesIcon {
    /* Properties of Gio.BytesIcon */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.BytesIcon */
    getBytes(): Gjs.byteArray.ByteArray
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BytesIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: BytesIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BytesIcon_ConstructProps)
    _init (config?: BytesIcon_ConstructProps): void
    static new(bytes: Gjs.byteArray.ByteArray): BytesIcon
    static $gtype: GObject.Type
}
export interface Cancellable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Cancellable {
    /* Fields of Gio.Cancellable */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Cancellable */
    cancel(): void
    connect(callback: GObject.Callback): number
    disconnect(handler_id: number): void
    getFd(): number
    isCancelled(): boolean
    makePollfd(pollfd: GLib.PollFD): boolean
    popCurrent(): void
    pushCurrent(): void
    releaseFd(): void
    reset(): void
    setErrorIfCancelled(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Cancellable */
    vfuncCancelled?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Cancellable */
    connect(sigName: "cancelled", callback: ((obj: Cancellable) => void)): number
    connect_after(sigName: "cancelled", callback: ((obj: Cancellable) => void)): number
    emit(sigName: "cancelled"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cancellable_ConstructProps)
    _init (config?: Cancellable_ConstructProps): void
    static new(): Cancellable
    static getCurrent(): Cancellable | null
    static $gtype: GObject.Type
}
export interface CharsetConverter_ConstructProps extends GObject.Object_ConstructProps {
    from_charset?:string
    to_charset?:string
    use_fallback?:boolean
}
export class CharsetConverter {
    /* Properties of Gio.CharsetConverter */
    use_fallback:boolean
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.CharsetConverter */
    getNumFallbacks(): number
    getUseFallback(): boolean
    setUseFallback(use_fallback: boolean): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Converter */
    convert(inbuf: any, outbuf: any, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-fallback", callback: ((obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-fallback", callback: ((obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CharsetConverter_ConstructProps)
    _init (config?: CharsetConverter_ConstructProps): void
    static new(to_charset: string, from_charset: string): CharsetConverter
    static $gtype: GObject.Type
}
export interface ConverterInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    converter?:Converter
}
export class ConverterInputStream {
    /* Properties of Gio.ConverterInputStream */
    /* Properties of Gio.FilterInputStream */
    close_base_stream:boolean
    /* Fields of Gio.ConverterInputStream */
    parent_instance:FilterInputStream
    /* Fields of Gio.FilterInputStream */
    base_stream:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ConverterInputStream */
    getConverter(): Converter
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytes_read */ number ]
    readAllAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    readBytesAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): Gjs.byteArray.ByteArray
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: ((obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConverterInputStream_ConstructProps)
    _init (config?: ConverterInputStream_ConstructProps): void
    static new(base_stream: InputStream, converter: Converter): ConverterInputStream
    static $gtype: GObject.Type
}
export interface ConverterOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    converter?:Converter
}
export class ConverterOutputStream {
    /* Properties of Gio.ConverterOutputStream */
    /* Properties of Gio.FilterOutputStream */
    /* Fields of Gio.ConverterOutputStream */
    parent_instance:FilterOutputStream
    /* Fields of Gio.FilterOutputStream */
    base_stream:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ConverterOutputStream */
    getConverter(): Converter
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAllAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAllAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncFlush?(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: AsyncResult): boolean
    vfuncSplice?(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync?(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync?(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfuncWritevFn?(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ConverterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ConverterOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConverterOutputStream_ConstructProps)
    _init (config?: ConverterOutputStream_ConstructProps): void
    static new(base_stream: OutputStream, converter: Converter): ConverterOutputStream
    static $gtype: GObject.Type
}
export interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
export class Credentials {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Credentials */
    getUnixPid(): number
    getUnixUser(): number
    isSameUser(other_credentials: Credentials): boolean
    setNative(native_type: CredentialsType, native: object): void
    setUnixUser(uid: number): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Credentials_ConstructProps)
    _init (config?: Credentials_ConstructProps): void
    static new(): Credentials
    static $gtype: GObject.Type
}
export interface DBusActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusActionGroup {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.ActionGroup */
    actionAdded(action_name: string): void
    actionEnabledChanged(action_name: string, enabled: boolean): void
    actionRemoved(action_name: string): void
    actionStateChanged(action_name: string, state: GLib.Variant): void
    activateAction(action_name: string, parameter?: GLib.Variant | null): void
    changeActionState(action_name: string, value: GLib.Variant): void
    getActionEnabled(action_name: string): boolean
    getActionParameterType(action_name: string): GLib.VariantType | null
    getActionState(action_name: string): GLib.Variant | null
    getActionStateHint(action_name: string): GLib.Variant | null
    getActionStateType(action_name: string): GLib.VariantType | null
    hasAction(action_name: string): boolean
    listActions(): string[]
    queryAction(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.RemoteActionGroup */
    activateActionFull(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    changeActionStateFull(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusActionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusActionGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((obj: DBusActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: ((obj: DBusActionGroup, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: ((obj: DBusActionGroup, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: ((obj: DBusActionGroup, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((obj: DBusActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: ((obj: DBusActionGroup, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: ((obj: DBusActionGroup, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: ((obj: DBusActionGroup, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusActionGroup_ConstructProps)
    _init (config?: DBusActionGroup_ConstructProps): void
    static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusActionGroup
    static $gtype: GObject.Type
}
export interface DBusAuthObserver_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusAuthObserver {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusAuthObserver */
    allowMechanism(mechanism: string): boolean
    authorizeAuthenticatedPeer(stream: IOStream, credentials?: Credentials | null): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusAuthObserver */
    connect(sigName: "allow-mechanism", callback: ((obj: DBusAuthObserver, mechanism: string) => boolean)): number
    connect_after(sigName: "allow-mechanism", callback: ((obj: DBusAuthObserver, mechanism: string) => boolean)): number
    emit(sigName: "allow-mechanism", mechanism: string): void
    connect(sigName: "authorize-authenticated-peer", callback: ((obj: DBusAuthObserver, stream: IOStream, credentials?: Credentials | null) => boolean)): number
    connect_after(sigName: "authorize-authenticated-peer", callback: ((obj: DBusAuthObserver, stream: IOStream, credentials?: Credentials | null) => boolean)): number
    emit(sigName: "authorize-authenticated-peer", stream: IOStream, credentials?: Credentials | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusAuthObserver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusAuthObserver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusAuthObserver_ConstructProps)
    _init (config?: DBusAuthObserver_ConstructProps): void
    static new(): DBusAuthObserver
    static $gtype: GObject.Type
}
export interface DBusConnection_ConstructProps extends GObject.Object_ConstructProps {
    address?:string
    authentication_observer?:DBusAuthObserver
    exit_on_close?:boolean
    flags?:DBusConnectionFlags
    guid?:string
    stream?:IOStream
}
export class DBusConnection {
    /* Properties of Gio.DBusConnection */
    readonly capabilities:DBusCapabilityFlags
    readonly closed:boolean
    exit_on_close:boolean
    readonly unique_name:string
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusConnection */
    addFilter(filter_function: DBusMessageFilterFunction): number
    call(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callFinish(res: AsyncResult): GLib.Variant
    callSync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable?: Cancellable | null): GLib.Variant
    callWithUnixFdList(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list?: UnixFDList | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    callWithUnixFdListSync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list?: UnixFDList | null, cancellable?: Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    close(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(res: AsyncResult): boolean
    closeSync(cancellable?: Cancellable | null): boolean
    emitSignal(destination_bus_name: string | null, object_path: string, interface_name: string, signal_name: string, parameters?: GLib.Variant | null): boolean
    exportActionGroup(object_path: string, action_group: ActionGroup): number
    exportMenuModel(object_path: string, menu: MenuModel): number
    flush(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(res: AsyncResult): boolean
    flushSync(cancellable?: Cancellable | null): boolean
    getCapabilities(): DBusCapabilityFlags
    getExitOnClose(): boolean
    getFlags(): DBusConnectionFlags
    getGuid(): string
    getLastSerial(): number
    getPeerCredentials(): Credentials | null
    getStream(): IOStream
    getUniqueName(): string | null
    isClosed(): boolean
    registerObject(object_path: string, interface_info: DBusInterfaceInfo, method_call_closure?: Function, get_property_closure?: Function, set_property_closure?: Function): number
    registerSubtree(object_path: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number
    removeFilter(filter_id: number): void
    sendMessage(message: DBusMessage, flags: DBusSendMessageFlags): [ /* returnType */ boolean, /* out_serial */ number | null ]
    sendMessageWithReply(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* out_serial */ number | null
    sendMessageWithReplyFinish(res: AsyncResult): DBusMessage
    sendMessageWithReplySync(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, cancellable?: Cancellable | null): [ /* returnType */ DBusMessage, /* out_serial */ number | null ]
    setExitOnClose(exit_on_close: boolean): void
    signalSubscribe(sender: string | null, interface_name: string | null, member: string | null, object_path: string | null, arg0: string | null, flags: DBusSignalFlags, callback: DBusSignalCallback): number
    signalUnsubscribe(subscription_id: number): void
    startMessageProcessing(): void
    unexportActionGroup(export_id: number): void
    unexportMenuModel(export_id: number): void
    unregisterObject(registration_id: number): boolean
    unregisterSubtree(registration_id: number): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    initAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusConnection */
    connect(sigName: "closed", callback: ((obj: DBusConnection, remote_peer_vanished: boolean, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "closed", callback: ((obj: DBusConnection, remote_peer_vanished: boolean, error?: GLib.Error | null) => void)): number
    emit(sigName: "closed", remote_peer_vanished: boolean, error?: GLib.Error | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::exit-on-close", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exit-on-close", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unique-name", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-name", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusConnection_ConstructProps)
    _init (config?: DBusConnection_ConstructProps): void
    static newFinish(res: AsyncResult): DBusConnection
    static newForAddressFinish(res: AsyncResult): DBusConnection
    static newForAddressSync(address: string, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusConnection
    static newSync(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusConnection
    static newForAddress(address: string, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface DBusInterfaceSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    g_flags?:DBusInterfaceSkeletonFlags
}
export class DBusInterfaceSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags:DBusInterfaceSkeletonFlags
    /* Fields of Gio.DBusInterfaceSkeleton */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: DBusConnection, object_path: string): boolean
    flush(): void
    getConnection(): DBusConnection
    getConnections(): DBusConnection[]
    getFlags(): DBusInterfaceSkeletonFlags
    getInfo(): DBusInterfaceInfo
    getObjectPath(): string
    getProperties(): GLib.Variant
    hasConnection(connection: DBusConnection): boolean
    setFlags(flags: DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: DBusConnection): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.DBusInterface */
    getObject(): DBusObject
    setObject(object?: DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush?(): void
    vfuncGAuthorizeMethod?(invocation: DBusMethodInvocation): boolean
    vfuncGetInfo?(): DBusInterfaceInfo
    vfuncGetProperties?(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((obj: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: ((obj: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusInterfaceSkeleton_ConstructProps)
    _init (config?: DBusInterfaceSkeleton_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusMenuModel_ConstructProps extends MenuModel_ConstructProps {
}
export class DBusMenuModel {
    /* Fields of Gio.MenuModel */
    parent_instance:GObject.Object
    priv:MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuModel */
    getItemAttributeValue(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    getItemLink(item_index: number, link: string): MenuModel
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(item_index: number): MenuAttributeIter
    iterateItemLinks(item_index: number): MenuLinkIter
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuModel */
    vfuncGetItemAttributeValue?(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    vfuncGetItemAttributes?(item_index: number): /* attributes */ GLib.HashTable
    vfuncGetItemLink?(item_index: number, link: string): MenuModel
    vfuncGetItemLinks?(item_index: number): /* links */ GLib.HashTable
    vfuncGetNItems?(): number
    vfuncIsMutable?(): boolean
    vfuncIterateItemAttributes?(item_index: number): MenuAttributeIter
    vfuncIterateItemLinks?(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((obj: DBusMenuModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: ((obj: DBusMenuModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusMenuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusMenuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusMenuModel_ConstructProps)
    _init (config?: DBusMenuModel_ConstructProps): void
    static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusMenuModel
    static $gtype: GObject.Type
}
export interface DBusMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusMessage {
    /* Properties of Gio.DBusMessage */
    readonly locked:boolean
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusMessage */
    copy(): DBusMessage
    getArg0(): string
    getBody(): GLib.Variant
    getByteOrder(): DBusMessageByteOrder
    getDestination(): string
    getErrorName(): string
    getFlags(): DBusMessageFlags
    getHeader(header_field: DBusMessageHeaderField): GLib.Variant | null
    getHeaderFields(): any
    getInterface(): string
    getLocked(): boolean
    getMember(): string
    getMessageType(): DBusMessageType
    getNumUnixFds(): number
    getPath(): string
    getReplySerial(): number
    getSender(): string
    getSerial(): number
    getSignature(): string
    getUnixFdList(): UnixFDList
    lock(): void
    newMethodErrorLiteral(error_name: string, error_message: string): DBusMessage
    newMethodReply(): DBusMessage
    print(indent: number): string
    setBody(body: GLib.Variant): void
    setByteOrder(byte_order: DBusMessageByteOrder): void
    setDestination(value: string): void
    setErrorName(value: string): void
    setFlags(flags: DBusMessageFlags): void
    setHeader(header_field: DBusMessageHeaderField, value?: GLib.Variant | null): void
    setInterface(value: string): void
    setMember(value: string): void
    setMessageType(type: DBusMessageType): void
    setNumUnixFds(value: number): void
    setPath(value: string): void
    setReplySerial(value: number): void
    setSender(value: string): void
    setSerial(serial: number): void
    setSignature(value: string): void
    setUnixFdList(fd_list?: UnixFDList | null): void
    toBlob(capabilities: DBusCapabilityFlags): any
    toGerror(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locked", callback: ((obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: ((obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusMessage_ConstructProps)
    _init (config?: DBusMessage_ConstructProps): void
    static new(): DBusMessage
    static newFromBlob(blob: any, capabilities: DBusCapabilityFlags): DBusMessage
    static newMethodCall(name: string | null, path: string, interface_: string | null, method: string): DBusMessage
    static newSignal(path: string, interface_: string, signal: string): DBusMessage
    static bytesNeeded(blob: any): number
    static $gtype: GObject.Type
}
export interface DBusMethodInvocation_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusMethodInvocation {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusMethodInvocation */
    getConnection(): DBusConnection
    getInterfaceName(): string
    getMessage(): DBusMessage
    getMethodInfo(): DBusMethodInfo
    getMethodName(): string
    getObjectPath(): string
    getParameters(): GLib.Variant
    getPropertyInfo(): DBusPropertyInfo
    getSender(): string
    returnDbusError(error_name: string, error_message: string): void
    returnErrorLiteral(domain: GLib.Quark, code: number, message: string): void
    returnGerror(error: GLib.Error): void
    returnValue(parameters?: GLib.Variant | null): void
    returnValueWithUnixFdList(parameters?: GLib.Variant | null, fd_list?: UnixFDList | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusMethodInvocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusMethodInvocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusMethodInvocation_ConstructProps)
    _init (config?: DBusMethodInvocation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusObjectManagerClient_ConstructProps extends GObject.Object_ConstructProps {
    bus_type?:BusType
    connection?:DBusConnection
    flags?:DBusObjectManagerClientFlags
    get_proxy_type_destroy_notify?:object
    get_proxy_type_func?:object
    get_proxy_type_user_data?:object
    name?:string
    object_path?:string
}
export class DBusObjectManagerClient {
    /* Properties of Gio.DBusObjectManagerClient */
    readonly name_owner:string
    /* Fields of Gio.DBusObjectManagerClient */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerClient */
    getConnection(): DBusConnection
    getFlags(): DBusObjectManagerClientFlags
    getName(): string
    getNameOwner(): string | null
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    initAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Methods of Gio.DBusObjectManager */
    getInterface(object_path: string, interface_name: string): DBusInterface
    getObject(object_path: string): DBusObject
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusObjectManagerClient */
    vfuncInterfaceProxyPropertiesChanged?(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfuncInterfaceProxySignal?(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: ((obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: ((obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: ((obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: ((obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: ((obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: ((obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: ((obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: ((obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: ((obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: ((obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: ((obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    connect(sigName: "notify::name-owner", callback: ((obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: ((obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusObjectManagerClient_ConstructProps)
    _init (config?: DBusObjectManagerClient_ConstructProps): void
    static newFinish(res: AsyncResult): DBusObjectManagerClient
    static newForBusFinish(res: AsyncResult): DBusObjectManagerClient
    static newForBusSync(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null): DBusObjectManagerClient
    static newSync(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null): DBusObjectManagerClient
    static newForBus(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface DBusObjectManagerServer_ConstructProps extends GObject.Object_ConstructProps {
    connection?:DBusConnection
    object_path?:string
}
export class DBusObjectManagerServer {
    /* Properties of Gio.DBusObjectManagerServer */
    connection:DBusConnection
    /* Fields of Gio.DBusObjectManagerServer */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerServer */
    export(object: DBusObjectSkeleton): void
    exportUniquely(object: DBusObjectSkeleton): void
    getConnection(): DBusConnection
    isExported(object: DBusObjectSkeleton): boolean
    setConnection(connection?: DBusConnection | null): void
    unexport(object_path: string): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.DBusObjectManager */
    getInterface(object_path: string, interface_name: string): DBusInterface
    getObject(object_path: string): DBusObject
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: ((obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: ((obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: ((obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: ((obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: ((obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: ((obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: ((obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    connect(sigName: "notify::connection", callback: ((obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusObjectManagerServer_ConstructProps)
    _init (config?: DBusObjectManagerServer_ConstructProps): void
    static new(object_path: string): DBusObjectManagerServer
    static $gtype: GObject.Type
}
export interface DBusObjectProxy_ConstructProps extends GObject.Object_ConstructProps {
    g_connection?:DBusConnection
    g_object_path?:string
}
export class DBusObjectProxy {
    /* Properties of Gio.DBusObjectProxy */
    /* Fields of Gio.DBusObjectProxy */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusObjectProxy */
    getConnection(): DBusConnection
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.DBusObject */
    getInterface(interface_name: string): DBusInterface
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: ((obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: ((obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusObjectProxy_ConstructProps)
    _init (config?: DBusObjectProxy_ConstructProps): void
    static new(connection: DBusConnection, object_path: string): DBusObjectProxy
    static $gtype: GObject.Type
}
export interface DBusObjectSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    g_object_path?:string
}
export class DBusObjectSkeleton {
    /* Properties of Gio.DBusObjectSkeleton */
    g_object_path:string
    /* Fields of Gio.DBusObjectSkeleton */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusObjectSkeleton */
    addInterface(interface_: DBusInterfaceSkeleton): void
    flush(): void
    removeInterface(interface_: DBusInterfaceSkeleton): void
    removeInterfaceByName(interface_name: string): void
    setObjectPath(object_path: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.DBusObject */
    getInterface(interface_name: string): DBusInterface
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of Gio.DBusObjectSkeleton */
    vfuncAuthorizeMethod?(interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: ((obj: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: ((obj: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: ((obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: ((obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    connect(sigName: "notify::g-object-path", callback: ((obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: ((obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusObjectSkeleton_ConstructProps)
    _init (config?: DBusObjectSkeleton_ConstructProps): void
    static new(object_path: string): DBusObjectSkeleton
    static $gtype: GObject.Type
}
export interface DBusProxy_ConstructProps extends GObject.Object_ConstructProps {
    g_bus_type?:BusType
    g_connection?:DBusConnection
    g_default_timeout?:number
    g_flags?:DBusProxyFlags
    g_interface_info?:DBusInterfaceInfo
    g_interface_name?:string
    g_name?:string
    g_object_path?:string
}
export class DBusProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout:number
    g_interface_info:DBusInterfaceInfo
    readonly g_name_owner:string
    /* Fields of Gio.DBusProxy */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callFinish(res: AsyncResult): GLib.Variant
    callSync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable?: Cancellable | null): GLib.Variant
    callWithUnixFdList(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list?: UnixFDList | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    callWithUnixFdListSync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list?: UnixFDList | null, cancellable?: Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    getCachedProperty(property_name: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): DBusConnection
    getDefaultTimeout(): number
    getFlags(): DBusProxyFlags
    getInterfaceInfo(): DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(property_name: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeout_msec: number): void
    setInterfaceInfo(info?: DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    initAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): DBusObject
    getInfo(): DBusInterfaceInfo
    setObject(object?: DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged?(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfuncGSignal?(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((obj: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: ((obj: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: ((obj: DBusProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: ((obj: DBusProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusProxy_ConstructProps)
    _init (config?: DBusProxy_ConstructProps): void
    static newFinish(res: AsyncResult): DBusProxy
    static newForBusFinish(res: AsyncResult): DBusProxy
    static newForBusSync(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Cancellable | null): DBusProxy
    static newSync(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Cancellable | null): DBusProxy
    static newForBus(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface DBusServer_ConstructProps extends GObject.Object_ConstructProps {
    address?:string
    authentication_observer?:DBusAuthObserver
    flags?:DBusServerFlags
    guid?:string
}
export class DBusServer {
    /* Properties of Gio.DBusServer */
    readonly active:boolean
    readonly client_address:string
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusServer */
    getClientAddress(): string
    getFlags(): DBusServerFlags
    getGuid(): string
    isActive(): boolean
    start(): void
    stop(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusServer */
    connect(sigName: "new-connection", callback: ((obj: DBusServer, connection: DBusConnection) => boolean)): number
    connect_after(sigName: "new-connection", callback: ((obj: DBusServer, connection: DBusConnection) => boolean)): number
    emit(sigName: "new-connection", connection: DBusConnection): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-address", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-address", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusServer_ConstructProps)
    _init (config?: DBusServer_ConstructProps): void
    static newSync(address: string, flags: DBusServerFlags, guid: string, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusServer
    static $gtype: GObject.Type
}
export interface DataInputStream_ConstructProps extends BufferedInputStream_ConstructProps {
    byte_order?:DataStreamByteOrder
    newline_type?:DataStreamNewlineType
}
export class DataInputStream {
    /* Properties of Gio.DataInputStream */
    byte_order:DataStreamByteOrder
    newline_type:DataStreamNewlineType
    /* Properties of Gio.BufferedInputStream */
    buffer_size:number
    /* Properties of Gio.FilterInputStream */
    close_base_stream:boolean
    /* Fields of Gio.DataInputStream */
    parent_instance:BufferedInputStream
    /* Fields of Gio.BufferedInputStream */
    /* Fields of Gio.FilterInputStream */
    base_stream:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DataInputStream */
    getByteOrder(): DataStreamByteOrder
    getNewlineType(): DataStreamNewlineType
    readByte(cancellable?: Cancellable | null): number
    readInt16(cancellable?: Cancellable | null): number
    readInt32(cancellable?: Cancellable | null): number
    readInt64(cancellable?: Cancellable | null): number
    readLine(cancellable?: Cancellable | null): [ /* returnType */ any | null, /* length */ number | null ]
    readLineAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readLineFinish(result: AsyncResult): [ /* returnType */ any | null, /* length */ number | null ]
    readLineFinishUtf8(result: AsyncResult): [ /* returnType */ string | null, /* length */ number | null ]
    readLineUtf8(cancellable?: Cancellable | null): [ /* returnType */ string | null, /* length */ number | null ]
    readUint16(cancellable?: Cancellable | null): number
    readUint32(cancellable?: Cancellable | null): number
    readUint64(cancellable?: Cancellable | null): number
    readUntil(stop_chars: string, cancellable?: Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUntilAsync(stop_chars: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readUntilFinish(result: AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    readUpto(stop_chars: string, stop_chars_len: number, cancellable?: Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUptoAsync(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readUptoFinish(result: AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    setByteOrder(order: DataStreamByteOrder): void
    setNewlineType(type: DataStreamNewlineType): void
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable?: Cancellable | null): number
    fillAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    fillFinish(result: AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: any, offset: number): number
    peekBuffer(): any
    setBufferSize(size: number): void
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytes_read */ number ]
    readAllAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    readBytesAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): Gjs.byteArray.ByteArray
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedInputStream */
    vfuncFill?(count: number, cancellable?: Cancellable | null): number
    vfuncFillAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFillFinish?(result: AsyncResult): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::newline-type", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-base-stream", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataInputStream_ConstructProps)
    _init (config?: DataInputStream_ConstructProps): void
    static new(base_stream: InputStream): DataInputStream
    static $gtype: GObject.Type
}
export interface DataOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    byte_order?:DataStreamByteOrder
}
export class DataOutputStream {
    /* Properties of Gio.DataOutputStream */
    byte_order:DataStreamByteOrder
    /* Properties of Gio.FilterOutputStream */
    /* Fields of Gio.DataOutputStream */
    parent_instance:FilterOutputStream
    /* Fields of Gio.FilterOutputStream */
    base_stream:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DataOutputStream */
    getByteOrder(): DataStreamByteOrder
    putByte(data: number, cancellable?: Cancellable | null): boolean
    putInt16(data: number, cancellable?: Cancellable | null): boolean
    putInt32(data: number, cancellable?: Cancellable | null): boolean
    putInt64(data: number, cancellable?: Cancellable | null): boolean
    putString(str: string, cancellable?: Cancellable | null): boolean
    putUint16(data: number, cancellable?: Cancellable | null): boolean
    putUint32(data: number, cancellable?: Cancellable | null): boolean
    putUint64(data: number, cancellable?: Cancellable | null): boolean
    setByteOrder(order: DataStreamByteOrder): void
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAllAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAllAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncFlush?(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: AsyncResult): boolean
    vfuncSplice?(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync?(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync?(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfuncWritevFn?(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: ((obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: ((obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataOutputStream_ConstructProps)
    _init (config?: DataOutputStream_ConstructProps): void
    static new(base_stream: OutputStream): DataOutputStream
    static $gtype: GObject.Type
}
export interface DesktopAppInfo_ConstructProps extends GObject.Object_ConstructProps {
    filename?:string
}
export class DesktopAppInfo {
    /* Properties of Gio.DesktopAppInfo */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DesktopAppInfo */
    getActionName(action_name: string): string
    getBoolean(key: string): boolean
    getCategories(): string
    getFilename(): string
    getGenericName(): string
    getIsHidden(): boolean
    getKeywords(): string[]
    getLocaleString(key: string): string | null
    getNodisplay(): boolean
    getShowIn(desktop_env?: string | null): boolean
    getStartupWmClass(): string
    getString(key: string): string
    getStringList(key: string): string[]
    hasKey(key: string): boolean
    launchAction(action_name: string, launch_context?: AppLaunchContext | null): void
    launchUrisAsManager(uris: string[], launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags): boolean
    launchUrisAsManagerWithFds(uris: string[], launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, stdin_fd: number, stdout_fd: number, stderr_fd: number): boolean
    listActions(): string[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.AppInfo */
    addSupportsType(content_type: string): boolean
    canDelete(): boolean
    canRemoveSupportsType(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    getCommandline(): string
    getDescription(): string
    getDisplayName(): string
    getExecutable(): string
    getIcon(): Icon
    getId(): string
    getName(): string
    getSupportedTypes(): string[]
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    launchUris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    launchUrisAsync(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    launchUrisFinish(result: AsyncResult): boolean
    removeSupportsType(content_type: string): boolean
    setAsDefaultForExtension(extension: string): boolean
    setAsDefaultForType(content_type: string): boolean
    setAsLastUsedForType(content_type: string): boolean
    shouldShow(): boolean
    supportsFiles(): boolean
    supportsUris(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DesktopAppInfo_ConstructProps)
    _init (config?: DesktopAppInfo_ConstructProps): void
    static new(desktop_id: string): DesktopAppInfo | null
    static newFromFilename(filename: string): DesktopAppInfo | null
    static newFromKeyfile(key_file: GLib.KeyFile): DesktopAppInfo | null
    static getImplementations(interface: string): DesktopAppInfo[]
    static search(search_string: string): any
    static setDesktopEnv(desktop_env: string): void
    static $gtype: GObject.Type
}
export interface Emblem_ConstructProps extends GObject.Object_ConstructProps {
    icon?:GObject.Object
    origin?:EmblemOrigin
}
export class Emblem {
    /* Properties of Gio.Emblem */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Emblem */
    getIcon(): Icon
    getOrigin(): EmblemOrigin
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Emblem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Emblem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Emblem_ConstructProps)
    _init (config?: Emblem_ConstructProps): void
    static new(icon: Icon): Emblem
    static newWithOrigin(icon: Icon, origin: EmblemOrigin): Emblem
    static $gtype: GObject.Type
}
export interface EmblemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    gicon?:Icon
}
export class EmblemedIcon {
    /* Properties of Gio.EmblemedIcon */
    /* Fields of Gio.EmblemedIcon */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.EmblemedIcon */
    addEmblem(emblem: Emblem): void
    clearEmblems(): void
    getEmblems(): Emblem[]
    getIcon(): Icon
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: EmblemedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: EmblemedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EmblemedIcon_ConstructProps)
    _init (config?: EmblemedIcon_ConstructProps): void
    static new(icon: Icon, emblem?: Emblem | null): EmblemedIcon
    static $gtype: GObject.Type
}
export interface FileEnumerator_ConstructProps extends GObject.Object_ConstructProps {
    container?:File
}
export class FileEnumerator {
    /* Properties of Gio.FileEnumerator */
    /* Fields of Gio.FileEnumerator */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileEnumerator */
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getChild(info: FileInfo): File
    getContainer(): File
    hasPending(): boolean
    isClosed(): boolean
    iterate(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* out_info */ FileInfo | null, /* out_child */ File | null ]
    nextFile(cancellable?: Cancellable | null): FileInfo | null
    nextFilesAsync(num_files: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFilesFinish(result: AsyncResult): FileInfo[]
    setPending(pending: boolean): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FileEnumerator */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncNextFile?(cancellable?: Cancellable | null): FileInfo | null
    vfuncNextFilesAsync?(num_files: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncNextFilesFinish?(result: AsyncResult): FileInfo[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileEnumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileEnumerator_ConstructProps)
    _init (config?: FileEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileIOStream_ConstructProps extends IOStream_ConstructProps {
}
export class FileIOStream {
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.FileIOStream */
    parent_instance:IOStream
    /* Fields of Gio.IOStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileIOStream */
    getEtag(): string
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileIOStream */
    vfuncCanSeek?(): boolean
    vfuncCanTruncate?(): boolean
    vfuncGetEtag?(): string
    vfuncQueryInfo?(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfuncQueryInfoAsync?(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryInfoFinish?(result: AsyncResult): FileInfo
    vfuncSeek?(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell?(): number
    vfuncTruncateFn?(size: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream?(): InputStream
    vfuncGetOutputStream?(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileIOStream_ConstructProps)
    _init (config?: FileIOStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileIcon_ConstructProps extends GObject.Object_ConstructProps {
    file?:File
}
export class FileIcon {
    /* Properties of Gio.FileIcon */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileIcon */
    getFile(): File
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileIcon_ConstructProps)
    _init (config?: FileIcon_ConstructProps): void
    static new(file: File): FileIcon
    static $gtype: GObject.Type
}
export interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class FileInfo {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileInfo */
    clearStatus(): void
    copyInto(dest_info: FileInfo): void
    dup(): FileInfo
    getAttributeAsString(attribute: string): string | null
    getAttributeBoolean(attribute: string): boolean
    getAttributeByteString(attribute: string): string
    getAttributeData(attribute: string): [ /* returnType */ boolean, /* type */ FileAttributeType | null, /* value_pp */ object | null, /* status */ FileAttributeStatus | null ]
    getAttributeInt32(attribute: string): number
    getAttributeInt64(attribute: string): number
    getAttributeObject(attribute: string): GObject.Object
    getAttributeStatus(attribute: string): FileAttributeStatus
    getAttributeString(attribute: string): string
    getAttributeStringv(attribute: string): string[]
    getAttributeType(attribute: string): FileAttributeType
    getAttributeUint32(attribute: string): number
    getAttributeUint64(attribute: string): number
    getContentType(): string
    getDeletionDate(): GLib.DateTime
    getDisplayName(): string
    getEditName(): string
    getEtag(): string
    getFileType(): FileType
    getIcon(): Icon
    getIsBackup(): boolean
    getIsHidden(): boolean
    getIsSymlink(): boolean
    getModificationDateTime(): GLib.DateTime | null
    getModificationTime(): /* result */ GLib.TimeVal
    getName(): string
    getSize(): number
    getSortOrder(): number
    getSymbolicIcon(): Icon
    getSymlinkTarget(): string
    hasAttribute(attribute: string): boolean
    hasNamespace(name_space: string): boolean
    listAttributes(name_space?: string | null): string[] | null
    removeAttribute(attribute: string): void
    setAttribute(attribute: string, type: FileAttributeType, value_p: object): void
    setAttributeBoolean(attribute: string, attr_value: boolean): void
    setAttributeByteString(attribute: string, attr_value: string): void
    setAttributeInt32(attribute: string, attr_value: number): void
    setAttributeInt64(attribute: string, attr_value: number): void
    setAttributeMask(mask: FileAttributeMatcher): void
    setAttributeObject(attribute: string, attr_value: GObject.Object): void
    setAttributeStatus(attribute: string, status: FileAttributeStatus): boolean
    setAttributeString(attribute: string, attr_value: string): void
    setAttributeStringv(attribute: string, attr_value: string[]): void
    setAttributeUint32(attribute: string, attr_value: number): void
    setAttributeUint64(attribute: string, attr_value: number): void
    setContentType(content_type: string): void
    setDisplayName(display_name: string): void
    setEditName(edit_name: string): void
    setFileType(type: FileType): void
    setIcon(icon: Icon): void
    setIsHidden(is_hidden: boolean): void
    setIsSymlink(is_symlink: boolean): void
    setModificationDateTime(mtime: GLib.DateTime): void
    setModificationTime(mtime: GLib.TimeVal): void
    setName(name: string): void
    setSize(size: number): void
    setSortOrder(sort_order: number): void
    setSymbolicIcon(icon: Icon): void
    setSymlinkTarget(symlink_target: string): void
    unsetAttributeMask(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileInfo_ConstructProps)
    _init (config?: FileInfo_ConstructProps): void
    static new(): FileInfo
    static $gtype: GObject.Type
}
export interface FileInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class FileInputStream {
    /* Fields of Gio.FileInputStream */
    parent_instance:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileInputStream */
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytes_read */ number ]
    readAllAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    readBytesAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): Gjs.byteArray.ByteArray
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileInputStream */
    vfuncCanSeek?(): boolean
    vfuncQueryInfo?(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfuncQueryInfoAsync?(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryInfoFinish?(result: AsyncResult): FileInfo
    vfuncSeek?(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell?(): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileInputStream_ConstructProps)
    _init (config?: FileInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileMonitor_ConstructProps extends GObject.Object_ConstructProps {
    rate_limit?:number
}
export class FileMonitor {
    /* Properties of Gio.FileMonitor */
    readonly cancelled:boolean
    rate_limit:number
    /* Fields of Gio.FileMonitor */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileMonitor */
    cancel(): boolean
    emitEvent(child: File, other_file: File, event_type: FileMonitorEvent): void
    isCancelled(): boolean
    setRateLimit(limit_msecs: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FileMonitor */
    vfuncCancel?(): boolean
    vfuncChanged?(file: File, other_file: File, event_type: FileMonitorEvent): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.FileMonitor */
    connect(sigName: "changed", callback: ((obj: FileMonitor, file: File, other_file: File | null, event_type: FileMonitorEvent) => void)): number
    connect_after(sigName: "changed", callback: ((obj: FileMonitor, file: File, other_file: File | null, event_type: FileMonitorEvent) => void)): number
    emit(sigName: "changed", file: File, other_file: File | null, event_type: FileMonitorEvent): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancelled", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelled", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate-limit", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate-limit", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileMonitor_ConstructProps)
    _init (config?: FileMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
export class FileOutputStream {
    /* Fields of Gio.FileOutputStream */
    parent_instance:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileOutputStream */
    getEtag(): string
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAllAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAllAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileOutputStream */
    vfuncCanSeek?(): boolean
    vfuncCanTruncate?(): boolean
    vfuncGetEtag?(): string
    vfuncQueryInfo?(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfuncQueryInfoAsync?(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryInfoFinish?(result: AsyncResult): FileInfo
    vfuncSeek?(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell?(): number
    vfuncTruncateFn?(size: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncFlush?(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: AsyncResult): boolean
    vfuncSplice?(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync?(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync?(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfuncWritevFn?(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileOutputStream_ConstructProps)
    _init (config?: FileOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilenameCompleter_ConstructProps extends GObject.Object_ConstructProps {
}
export class FilenameCompleter {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FilenameCompleter */
    getCompletionSuffix(initial_text: string): string
    getCompletions(initial_text: string): string[]
    setDirsOnly(dirs_only: boolean): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FilenameCompleter */
    vfuncGotCompletionData?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.FilenameCompleter */
    connect(sigName: "got-completion-data", callback: ((obj: FilenameCompleter) => void)): number
    connect_after(sigName: "got-completion-data", callback: ((obj: FilenameCompleter) => void)): number
    emit(sigName: "got-completion-data"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FilenameCompleter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FilenameCompleter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilenameCompleter_ConstructProps)
    _init (config?: FilenameCompleter_ConstructProps): void
    static new(): FilenameCompleter
    static $gtype: GObject.Type
}
export interface FilterInputStream_ConstructProps extends InputStream_ConstructProps {
    base_stream?:InputStream
    close_base_stream?:boolean
}
export class FilterInputStream {
    /* Properties of Gio.FilterInputStream */
    close_base_stream:boolean
    /* Fields of Gio.FilterInputStream */
    parent_instance:InputStream
    base_stream:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytes_read */ number ]
    readAllAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    readBytesAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): Gjs.byteArray.ByteArray
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: ((obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterInputStream_ConstructProps)
    _init (config?: FilterInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilterOutputStream_ConstructProps extends OutputStream_ConstructProps {
    base_stream?:OutputStream
    close_base_stream?:boolean
}
export class FilterOutputStream {
    /* Properties of Gio.FilterOutputStream */
    /* Fields of Gio.FilterOutputStream */
    parent_instance:OutputStream
    base_stream:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAllAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAllAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncFlush?(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: AsyncResult): boolean
    vfuncSplice?(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync?(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync?(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfuncWritevFn?(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOutputStream_ConstructProps)
    _init (config?: FilterOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IOModule_ConstructProps extends GObject.TypeModule_ConstructProps {
}
export class IOModule {
    /* Fields of GObject.TypeModule */
    parent_instance:GObject.Object
    use_count:number
    type_infos:object[]
    interface_infos:object[]
    name:string
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.IOModule */
    load(): void
    unload(): void
    /* Methods of GObject.TypeModule */
    addInterface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    registerEnum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    registerFlags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    registerType(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    setName(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GObject.TypePlugin */
    completeInterfaceInfo(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    completeTypeInfo(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    /* Virtual methods of GObject.TypeModule */
    vfuncLoad?(): boolean
    vfuncUnload?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: IOModule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: IOModule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IOModule_ConstructProps)
    _init (config?: IOModule_ConstructProps): void
    static new(filename: string): IOModule
    static query(): string[]
    static $gtype: GObject.Type
}
export interface IOStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class IOStream {
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.IOStream */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream?(): InputStream
    vfuncGetOutputStream?(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IOStream_ConstructProps)
    _init (config?: IOStream_ConstructProps): void
    static spliceFinish(result: AsyncResult): boolean
    static $gtype: GObject.Type
}
export interface InetAddress_ConstructProps extends GObject.Object_ConstructProps {
    bytes?:object
    family?:SocketFamily
}
export class InetAddress {
    /* Properties of Gio.InetAddress */
    readonly is_any:boolean
    readonly is_link_local:boolean
    readonly is_loopback:boolean
    readonly is_mc_global:boolean
    readonly is_mc_link_local:boolean
    readonly is_mc_node_local:boolean
    readonly is_mc_org_local:boolean
    readonly is_mc_site_local:boolean
    readonly is_multicast:boolean
    readonly is_site_local:boolean
    /* Fields of Gio.InetAddress */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.InetAddress */
    equal(other_address: InetAddress): boolean
    getFamily(): SocketFamily
    getIsAny(): boolean
    getIsLinkLocal(): boolean
    getIsLoopback(): boolean
    getIsMcGlobal(): boolean
    getIsMcLinkLocal(): boolean
    getIsMcNodeLocal(): boolean
    getIsMcOrgLocal(): boolean
    getIsMcSiteLocal(): boolean
    getIsMulticast(): boolean
    getIsSiteLocal(): boolean
    getNativeSize(): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InetAddress */
    vfuncToString?(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-any", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-any", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-link-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-link-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loopback", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loopback", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-global", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-global", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-link-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-link-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-node-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-node-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-org-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-org-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-site-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-site-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-multicast", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-multicast", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-site-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-site-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InetAddress_ConstructProps)
    _init (config?: InetAddress_ConstructProps): void
    static newAny(family: SocketFamily): InetAddress
    static newFromBytes(bytes: any, family: SocketFamily): InetAddress
    static newFromString(string: string): InetAddress
    static newLoopback(family: SocketFamily): InetAddress
    static $gtype: GObject.Type
}
export interface InetAddressMask_ConstructProps extends GObject.Object_ConstructProps {
    address?:InetAddress
    length?:number
}
export class InetAddressMask {
    /* Properties of Gio.InetAddressMask */
    address:InetAddress
    readonly family:SocketFamily
    length:number
    /* Fields of Gio.InetAddressMask */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.InetAddressMask */
    equal(mask2: InetAddressMask): boolean
    getAddress(): InetAddress
    getFamily(): SocketFamily
    getLength(): number
    matches(address: InetAddress): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InetAddressMask_ConstructProps)
    _init (config?: InetAddressMask_ConstructProps): void
    static new(addr: InetAddress, length: number): InetAddressMask
    static newFromString(mask_string: string): InetAddressMask
    static $gtype: GObject.Type
}
export interface InetSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    address?:InetAddress
    flowinfo?:number
    port?:number
    scope_id?:number
}
export class InetSocketAddress {
    /* Properties of Gio.InetSocketAddress */
    /* Properties of Gio.SocketAddress */
    readonly family:SocketFamily
    /* Fields of Gio.InetSocketAddress */
    parent_instance:SocketAddress
    /* Fields of Gio.SocketAddress */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.InetSocketAddress */
    getAddress(): InetAddress
    getFlowinfo(): number
    getPort(): number
    getScopeId(): number
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily?(): SocketFamily
    vfuncGetNativeSize?(): number
    vfuncToNative?(dest: object | null, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InetSocketAddress_ConstructProps)
    _init (config?: InetSocketAddress_ConstructProps): void
    static new(address: InetAddress, port: number): InetSocketAddress
    static newFromString(address: string, port: number): InetSocketAddress
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class InputStream {
    /* Fields of Gio.InputStream */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytes_read */ number ]
    readAllAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    readBytesAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): Gjs.byteArray.ByteArray
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ListStore_ConstructProps extends GObject.Object_ConstructProps {
    item_type?:GObject.Type
}
export class ListStore {
    /* Properties of Gio.ListStore */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ListStore */
    append(item: GObject.Object): void
    insert(position: number, item: GObject.Object): void
    insertSorted(item: GObject.Object, compare_func: GLib.CompareDataFunc): number
    remove(position: number): void
    removeAll(): void
    sort(compare_func: GLib.CompareDataFunc): void
    splice(position: number, n_removals: number, additions: GObject.Object[]): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ListStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ListStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: ((obj: ListStore, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: ((obj: ListStore, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListStore_ConstructProps)
    _init (config?: ListStore_ConstructProps): void
    static new(item_type: GObject.Type): ListStore
    static $gtype: GObject.Type
}
export interface MemoryInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class MemoryInputStream {
    /* Fields of Gio.MemoryInputStream */
    parent_instance:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MemoryInputStream */
    addBytes(bytes: Gjs.byteArray.ByteArray): void
    addData(data: any, destroy?: GLib.DestroyNotify | null): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytes_read */ number ]
    readAllAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    readBytesAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): Gjs.byteArray.ByteArray
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Cancellable | null): number
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MemoryInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MemoryInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MemoryInputStream_ConstructProps)
    _init (config?: MemoryInputStream_ConstructProps): void
    static new(): MemoryInputStream
    static newFromBytes(bytes: Gjs.byteArray.ByteArray): MemoryInputStream
    static newFromData(data: any, destroy?: GLib.DestroyNotify | null): MemoryInputStream
    static $gtype: GObject.Type
}
export interface MemoryOutputStream_ConstructProps extends OutputStream_ConstructProps {
    data?:object
    size?:number
}
export class MemoryOutputStream {
    /* Properties of Gio.MemoryOutputStream */
    readonly data_size:number
    /* Fields of Gio.MemoryOutputStream */
    parent_instance:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MemoryOutputStream */
    getData(): object | null
    getDataSize(): number
    getSize(): number
    stealAsBytes(): Gjs.byteArray.ByteArray
    stealData(): object | null
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAllAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAllAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncFlush?(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: AsyncResult): boolean
    vfuncSplice?(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync?(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync?(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfuncWritevFn?(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data-size", callback: ((obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-size", callback: ((obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MemoryOutputStream_ConstructProps)
    _init (config?: MemoryOutputStream_ConstructProps): void
    static newResizable(): MemoryOutputStream
    static $gtype: GObject.Type
}
export interface Menu_ConstructProps extends MenuModel_ConstructProps {
}
export class Menu {
    /* Fields of Gio.MenuModel */
    parent_instance:GObject.Object
    priv:MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Menu */
    append(label?: string | null, detailed_action?: string | null): void
    appendItem(item: MenuItem): void
    appendSection(label: string | null, section: MenuModel): void
    appendSubmenu(label: string | null, submenu: MenuModel): void
    freeze(): void
    insert(position: number, label?: string | null, detailed_action?: string | null): void
    insertItem(position: number, item: MenuItem): void
    insertSection(position: number, label: string | null, section: MenuModel): void
    insertSubmenu(position: number, label: string | null, submenu: MenuModel): void
    prepend(label?: string | null, detailed_action?: string | null): void
    prependItem(item: MenuItem): void
    prependSection(label: string | null, section: MenuModel): void
    prependSubmenu(label: string | null, submenu: MenuModel): void
    remove(position: number): void
    removeAll(): void
    /* Methods of Gio.MenuModel */
    getItemAttributeValue(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    getItemLink(item_index: number, link: string): MenuModel
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(item_index: number): MenuAttributeIter
    iterateItemLinks(item_index: number): MenuLinkIter
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuModel */
    vfuncGetItemAttributeValue?(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    vfuncGetItemAttributes?(item_index: number): /* attributes */ GLib.HashTable
    vfuncGetItemLink?(item_index: number, link: string): MenuModel
    vfuncGetItemLinks?(item_index: number): /* links */ GLib.HashTable
    vfuncGetNItems?(): number
    vfuncIsMutable?(): boolean
    vfuncIterateItemAttributes?(item_index: number): MenuAttributeIter
    vfuncIterateItemLinks?(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((obj: Menu, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: ((obj: Menu, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    static new(): Menu
    static $gtype: GObject.Type
}
export interface MenuAttributeIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuAttributeIter {
    /* Fields of Gio.MenuAttributeIter */
    parent_instance:GObject.Object
    priv:MenuAttributeIterPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuAttributeIter */
    getName(): string
    getNext(): [ /* returnType */ boolean, /* out_name */ string | null, /* value */ GLib.Variant | null ]
    getValue(): GLib.Variant
    next(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuAttributeIter */
    vfuncGetNext?(): [ /* returnType */ boolean, /* out_name */ string | null, /* value */ GLib.Variant | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MenuAttributeIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MenuAttributeIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuAttributeIter_ConstructProps)
    _init (config?: MenuAttributeIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuItem {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuItem */
    getAttributeValue(attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    getLink(link: string): MenuModel
    setActionAndTargetValue(action?: string | null, target_value?: GLib.Variant | null): void
    setAttributeValue(attribute: string, value?: GLib.Variant | null): void
    setDetailedAction(detailed_action: string): void
    setIcon(icon: Icon): void
    setLabel(label?: string | null): void
    setLink(link: string, model?: MenuModel | null): void
    setSection(section?: MenuModel | null): void
    setSubmenu(submenu?: MenuModel | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuItem_ConstructProps)
    _init (config?: MenuItem_ConstructProps): void
    static new(label?: string | null, detailed_action?: string | null): MenuItem
    static newFromModel(model: MenuModel, item_index: number): MenuItem
    static newSection(label: string | null, section: MenuModel): MenuItem
    static newSubmenu(label: string | null, submenu: MenuModel): MenuItem
    static $gtype: GObject.Type
}
export interface MenuLinkIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuLinkIter {
    /* Fields of Gio.MenuLinkIter */
    parent_instance:GObject.Object
    priv:MenuLinkIterPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuLinkIter */
    getName(): string
    getNext(): [ /* returnType */ boolean, /* out_link */ string | null, /* value */ MenuModel | null ]
    getValue(): MenuModel
    next(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuLinkIter */
    vfuncGetNext?(): [ /* returnType */ boolean, /* out_link */ string | null, /* value */ MenuModel | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MenuLinkIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MenuLinkIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuLinkIter_ConstructProps)
    _init (config?: MenuLinkIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MenuModel_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuModel {
    /* Fields of Gio.MenuModel */
    parent_instance:GObject.Object
    priv:MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuModel */
    getItemAttributeValue(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    getItemLink(item_index: number, link: string): MenuModel
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(item_index: number): MenuAttributeIter
    iterateItemLinks(item_index: number): MenuLinkIter
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuModel */
    vfuncGetItemAttributeValue?(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    vfuncGetItemAttributes?(item_index: number): /* attributes */ GLib.HashTable
    vfuncGetItemLink?(item_index: number, link: string): MenuModel
    vfuncGetItemLinks?(item_index: number): /* links */ GLib.HashTable
    vfuncGetNItems?(): number
    vfuncIsMutable?(): boolean
    vfuncIterateItemAttributes?(item_index: number): MenuAttributeIter
    vfuncIterateItemLinks?(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((obj: MenuModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: ((obj: MenuModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MenuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MenuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuModel_ConstructProps)
    _init (config?: MenuModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MountOperation_ConstructProps extends GObject.Object_ConstructProps {
    anonymous?:boolean
    choice?:number
    domain?:string
    is_tcrypt_hidden_volume?:boolean
    is_tcrypt_system_volume?:boolean
    password?:string
    password_save?:PasswordSave
    pim?:number
    username?:string
}
export class MountOperation {
    /* Properties of Gio.MountOperation */
    anonymous:boolean
    choice:number
    domain:string
    is_tcrypt_hidden_volume:boolean
    is_tcrypt_system_volume:boolean
    password:string
    password_save:PasswordSave
    pim:number
    username:string
    /* Fields of Gio.MountOperation */
    parent_instance:GObject.Object
    priv:MountOperationPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MountOperation */
    getAnonymous(): boolean
    getChoice(): number
    getDomain(): string
    getIsTcryptHiddenVolume(): boolean
    getIsTcryptSystemVolume(): boolean
    getPassword(): string
    getPasswordSave(): PasswordSave
    getPim(): number
    getUsername(): string
    reply(result: MountOperationResult): void
    setAnonymous(anonymous: boolean): void
    setChoice(choice: number): void
    setDomain(domain: string): void
    setIsTcryptHiddenVolume(hidden_volume: boolean): void
    setIsTcryptSystemVolume(system_volume: boolean): void
    setPassword(password: string): void
    setPasswordSave(save: PasswordSave): void
    setPim(pim: number): void
    setUsername(username: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MountOperation */
    vfuncAborted?(): void
    vfuncAskPassword?(message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void
    vfuncAskQuestion?(message: string, choices: string[]): void
    vfuncReply?(result: MountOperationResult): void
    vfuncShowProcesses?(message: string, processes: GLib.Pid[], choices: string[]): void
    vfuncShowUnmountProgress?(message: string, time_left: number, bytes_left: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MountOperation */
    connect(sigName: "aborted", callback: ((obj: MountOperation) => void)): number
    connect_after(sigName: "aborted", callback: ((obj: MountOperation) => void)): number
    emit(sigName: "aborted"): void
    connect(sigName: "ask-password", callback: ((obj: MountOperation, message: string, default_user: string, default_domain: string, flags: AskPasswordFlags) => void)): number
    connect_after(sigName: "ask-password", callback: ((obj: MountOperation, message: string, default_user: string, default_domain: string, flags: AskPasswordFlags) => void)): number
    emit(sigName: "ask-password", message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void
    connect(sigName: "ask-question", callback: ((obj: MountOperation, message: string, choices: string[]) => void)): number
    connect_after(sigName: "ask-question", callback: ((obj: MountOperation, message: string, choices: string[]) => void)): number
    emit(sigName: "ask-question", message: string, choices: string[]): void
    connect(sigName: "reply", callback: ((obj: MountOperation, result: MountOperationResult) => void)): number
    connect_after(sigName: "reply", callback: ((obj: MountOperation, result: MountOperationResult) => void)): number
    emit(sigName: "reply", result: MountOperationResult): void
    connect(sigName: "show-processes", callback: ((obj: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void)): number
    connect_after(sigName: "show-processes", callback: ((obj: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void)): number
    emit(sigName: "show-processes", message: string, processes: GLib.Pid[], choices: string[]): void
    connect(sigName: "show-unmount-progress", callback: ((obj: MountOperation, message: string, time_left: number, bytes_left: number) => void)): number
    connect_after(sigName: "show-unmount-progress", callback: ((obj: MountOperation, message: string, time_left: number, bytes_left: number) => void)): number
    emit(sigName: "show-unmount-progress", message: string, time_left: number, bytes_left: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::choice", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::domain", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-tcrypt-hidden-volume", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-tcrypt-hidden-volume", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-tcrypt-system-volume", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-tcrypt-system-volume", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-save", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-save", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pim", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pim", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MountOperation_ConstructProps)
    _init (config?: MountOperation_ConstructProps): void
    static new(): MountOperation
    static $gtype: GObject.Type
}
export interface NativeSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
}
export class NativeSocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family:SocketFamily
    /* Fields of Gio.NativeSocketAddress */
    parent_instance:SocketAddress
    /* Fields of Gio.SocketAddress */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily?(): SocketFamily
    vfuncGetNativeSize?(): number
    vfuncToNative?(dest: object | null, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NativeSocketAddress_ConstructProps)
    _init (config?: NativeSocketAddress_ConstructProps): void
    static new(native: object | null, len: number): NativeSocketAddress
    static $gtype: GObject.Type
}
export interface NativeVolumeMonitor_ConstructProps extends VolumeMonitor_ConstructProps {
}
export class NativeVolumeMonitor {
    /* Fields of Gio.NativeVolumeMonitor */
    parent_instance:VolumeMonitor
    /* Fields of Gio.VolumeMonitor */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.VolumeMonitor */
    getConnectedDrives(): Drive[]
    getMountForUuid(uuid: string): Mount
    getMounts(): Mount[]
    getVolumeForUuid(uuid: string): Volume
    getVolumes(): Volume[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.VolumeMonitor */
    vfuncDriveChanged?(drive: Drive): void
    vfuncDriveConnected?(drive: Drive): void
    vfuncDriveDisconnected?(drive: Drive): void
    vfuncDriveEjectButton?(drive: Drive): void
    vfuncDriveStopButton?(drive: Drive): void
    vfuncGetConnectedDrives?(): Drive[]
    vfuncGetMountForUuid?(uuid: string): Mount
    vfuncGetMounts?(): Mount[]
    vfuncGetVolumeForUuid?(uuid: string): Volume
    vfuncGetVolumes?(): Volume[]
    vfuncMountAdded?(mount: Mount): void
    vfuncMountChanged?(mount: Mount): void
    vfuncMountPreUnmount?(mount: Mount): void
    vfuncMountRemoved?(mount: Mount): void
    vfuncVolumeAdded?(volume: Volume): void
    vfuncVolumeChanged?(volume: Volume): void
    vfuncVolumeRemoved?(volume: Volume): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-changed", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-changed", drive: Drive): void
    connect(sigName: "drive-connected", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-connected", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-connected", drive: Drive): void
    connect(sigName: "drive-disconnected", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-disconnected", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-disconnected", drive: Drive): void
    connect(sigName: "drive-eject-button", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-eject-button", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-eject-button", drive: Drive): void
    connect(sigName: "drive-stop-button", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-stop-button", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-stop-button", drive: Drive): void
    connect(sigName: "mount-added", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-added", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-added", mount: Mount): void
    connect(sigName: "mount-changed", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-changed", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-changed", mount: Mount): void
    connect(sigName: "mount-pre-unmount", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-pre-unmount", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-pre-unmount", mount: Mount): void
    connect(sigName: "mount-removed", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-removed", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-removed", mount: Mount): void
    connect(sigName: "volume-added", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-added", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-added", volume: Volume): void
    connect(sigName: "volume-changed", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-changed", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-changed", volume: Volume): void
    connect(sigName: "volume-removed", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-removed", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-removed", volume: Volume): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NativeVolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: NativeVolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NativeVolumeMonitor_ConstructProps)
    _init (config?: NativeVolumeMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkAddress_ConstructProps extends GObject.Object_ConstructProps {
    hostname?:string
    port?:number
    scheme?:string
}
export class NetworkAddress {
    /* Properties of Gio.NetworkAddress */
    /* Fields of Gio.NetworkAddress */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.NetworkAddress */
    getHostname(): string
    getPort(): number
    getScheme(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NetworkAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: NetworkAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkAddress_ConstructProps)
    _init (config?: NetworkAddress_ConstructProps): void
    static new(hostname: string, port: number): NetworkAddress
    static newLoopback(port: number): NetworkAddress
    static parse(host_and_port: string, default_port: number): NetworkAddress
    static parseUri(uri: string, default_port: number): NetworkAddress
    static $gtype: GObject.Type
}
export interface NetworkService_ConstructProps extends GObject.Object_ConstructProps {
    domain?:string
    protocol?:string
    scheme?:string
    service?:string
}
export class NetworkService {
    /* Properties of Gio.NetworkService */
    scheme:string
    /* Fields of Gio.NetworkService */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.NetworkService */
    getDomain(): string
    getProtocol(): string
    getScheme(): string
    getService(): string
    setScheme(scheme: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scheme", callback: ((obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: ((obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkService_ConstructProps)
    _init (config?: NetworkService_ConstructProps): void
    static new(service: string, protocol: string, domain: string): NetworkService
    static $gtype: GObject.Type
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
export class Notification {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Notification */
    addButton(label: string, detailed_action: string): void
    addButtonWithTarget(label: string, action: string, target?: GLib.Variant | null): void
    setBody(body?: string | null): void
    setDefaultAction(detailed_action: string): void
    setDefaultActionAndTarget(action: string, target?: GLib.Variant | null): void
    setIcon(icon: Icon): void
    setPriority(priority: NotificationPriority): void
    setTitle(title: string): void
    setUrgent(urgent: boolean): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    static new(title: string): Notification
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class OutputStream {
    /* Fields of Gio.OutputStream */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAllAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAllAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncFlush?(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: AsyncResult): boolean
    vfuncSplice?(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync?(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync?(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfuncWritevFn?(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Permission_ConstructProps extends GObject.Object_ConstructProps {
}
export class Permission {
    /* Properties of Gio.Permission */
    readonly allowed:boolean
    readonly can_acquire:boolean
    readonly can_release:boolean
    /* Fields of Gio.Permission */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Permission */
    acquire(cancellable?: Cancellable | null): boolean
    acquireAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acquireFinish(result: AsyncResult): boolean
    getAllowed(): boolean
    getCanAcquire(): boolean
    getCanRelease(): boolean
    implUpdate(allowed: boolean, can_acquire: boolean, can_release: boolean): void
    release(cancellable?: Cancellable | null): boolean
    releaseAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    releaseFinish(result: AsyncResult): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Permission */
    vfuncAcquire?(cancellable?: Cancellable | null): boolean
    vfuncAcquireAsync?(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncAcquireFinish?(result: AsyncResult): boolean
    vfuncRelease?(cancellable?: Cancellable | null): boolean
    vfuncReleaseAsync?(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReleaseFinish?(result: AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-acquire", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-release", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Permission_ConstructProps)
    _init (config?: Permission_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PropertyAction_ConstructProps extends GObject.Object_ConstructProps {
    invert_boolean?:boolean
    name?:string
    object?:GObject.Object
    property_name?:string
}
export class PropertyAction {
    /* Properties of Gio.PropertyAction */
    readonly enabled:boolean
    readonly parameter_type:GLib.VariantType
    readonly state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Properties of Gio.Action */
    readonly name:string
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameter-type", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameter-type", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-type", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-type", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PropertyAction_ConstructProps)
    _init (config?: PropertyAction_ConstructProps): void
    static new(name: string, object: GObject.Object, property_name: string): PropertyAction
    static $gtype: GObject.Type
}
export interface ProxyAddress_ConstructProps extends InetSocketAddress_ConstructProps {
    destination_hostname?:string
    destination_port?:number
    destination_protocol?:string
    password?:string
    protocol?:string
    uri?:string
    username?:string
}
export class ProxyAddress {
    /* Properties of Gio.ProxyAddress */
    /* Properties of Gio.InetSocketAddress */
    /* Properties of Gio.SocketAddress */
    readonly family:SocketFamily
    /* Fields of Gio.ProxyAddress */
    parent_instance:InetSocketAddress
    /* Fields of Gio.InetSocketAddress */
    /* Fields of Gio.SocketAddress */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ProxyAddress */
    getDestinationHostname(): string
    getDestinationPort(): number
    getDestinationProtocol(): string
    getPassword(): string
    getProtocol(): string
    getUri(): string
    getUsername(): string
    /* Methods of Gio.InetSocketAddress */
    getAddress(): InetAddress
    getFlowinfo(): number
    getPort(): number
    getScopeId(): number
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily?(): SocketFamily
    vfuncGetNativeSize?(): number
    vfuncToNative?(dest: object | null, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyAddress_ConstructProps)
    _init (config?: ProxyAddress_ConstructProps): void
    static new(inetaddr: InetAddress, port: number, protocol: string, dest_hostname: string, dest_port: number, username?: string | null, password?: string | null): ProxyAddress
    static $gtype: GObject.Type
}
export interface ProxyAddressEnumerator_ConstructProps extends SocketAddressEnumerator_ConstructProps {
    connectable?:SocketConnectable
    default_port?:number
    proxy_resolver?:ProxyResolver
    uri?:string
}
export class ProxyAddressEnumerator {
    /* Properties of Gio.ProxyAddressEnumerator */
    proxy_resolver:ProxyResolver
    /* Fields of Gio.ProxyAddressEnumerator */
    /* Fields of Gio.SocketAddressEnumerator */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketAddressEnumerator */
    next(cancellable?: Cancellable | null): SocketAddress
    nextAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFinish(result: AsyncResult): SocketAddress
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketAddressEnumerator */
    vfuncNext?(cancellable?: Cancellable | null): SocketAddress
    vfuncNextAsync?(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncNextFinish?(result: AsyncResult): SocketAddress
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-resolver", callback: ((obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyAddressEnumerator_ConstructProps)
    _init (config?: ProxyAddressEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Resolver_ConstructProps extends GObject.Object_ConstructProps {
}
export class Resolver {
    /* Fields of Gio.Resolver */
    parent_instance:GObject.Object
    priv:ResolverPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Resolver */
    lookupByAddress(address: InetAddress, cancellable?: Cancellable | null): string
    lookupByAddressAsync(address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByAddressFinish(result: AsyncResult): string
    lookupByName(hostname: string, cancellable?: Cancellable | null): InetAddress[]
    lookupByNameAsync(hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByNameFinish(result: AsyncResult): InetAddress[]
    lookupByNameWithFlags(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null): InetAddress[]
    lookupByNameWithFlagsAsync(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByNameWithFlagsFinish(result: AsyncResult): InetAddress[]
    lookupRecords(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null): GLib.Variant[]
    lookupRecordsAsync(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupRecordsFinish(result: AsyncResult): GLib.Variant[]
    lookupService(service: string, protocol: string, domain: string, cancellable?: Cancellable | null): SrvTarget[]
    lookupServiceAsync(service: string, protocol: string, domain: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupServiceFinish(result: AsyncResult): SrvTarget[]
    setDefault(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Resolver */
    vfuncLookupByAddress?(address: InetAddress, cancellable?: Cancellable | null): string
    vfuncLookupByAddressAsync?(address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupByAddressFinish?(result: AsyncResult): string
    vfuncLookupByName?(hostname: string, cancellable?: Cancellable | null): InetAddress[]
    vfuncLookupByNameAsync?(hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupByNameFinish?(result: AsyncResult): InetAddress[]
    vfuncLookupByNameWithFlags?(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null): InetAddress[]
    vfuncLookupByNameWithFlagsAsync?(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupByNameWithFlagsFinish?(result: AsyncResult): InetAddress[]
    vfuncLookupRecords?(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null): GLib.Variant[]
    vfuncLookupRecordsAsync?(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupRecordsFinish?(result: AsyncResult): GLib.Variant[]
    vfuncLookupServiceAsync?(rrname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupServiceFinish?(result: AsyncResult): SrvTarget[]
    vfuncReload?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Resolver */
    connect(sigName: "reload", callback: ((obj: Resolver) => void)): number
    connect_after(sigName: "reload", callback: ((obj: Resolver) => void)): number
    emit(sigName: "reload"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Resolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Resolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Resolver_ConstructProps)
    _init (config?: Resolver_ConstructProps): void
    static getDefault(): Resolver
    static $gtype: GObject.Type
}
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    backend?:SettingsBackend
    path?:string
    schema?:string
    schema_id?:string
    settings_schema?:SettingsSchema
}
export class Settings {
    /* Properties of Gio.Settings */
    readonly delay_apply:boolean
    readonly has_unapplied:boolean
    /* Fields of Gio.Settings */
    parent_instance:GObject.Object
    priv:SettingsPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Settings */
    apply(): void
    bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags): void
    bindWritable(key: string, object: GObject.Object, property: string, inverted: boolean): void
    createAction(key: string): Action
    delay(): void
    getBoolean(key: string): boolean
    getChild(name: string): Settings
    getDefaultValue(key: string): GLib.Variant | null
    getDouble(key: string): number
    getEnum(key: string): number
    getFlags(key: string): number
    getHasUnapplied(): boolean
    getInt(key: string): number
    getInt64(key: string): number
    getMapped(key: string, mapping: SettingsGetMapping): object | null
    getRange(key: string): GLib.Variant
    getString(key: string): string
    getStrv(key: string): string[]
    getUint(key: string): number
    getUint64(key: string): number
    getUserValue(key: string): GLib.Variant | null
    getValue(key: string): GLib.Variant
    isWritable(name: string): boolean
    listChildren(): string[]
    listKeys(): string[]
    rangeCheck(key: string, value: GLib.Variant): boolean
    reset(key: string): void
    revert(): void
    setBoolean(key: string, value: boolean): boolean
    setDouble(key: string, value: number): boolean
    setEnum(key: string, value: number): boolean
    setFlags(key: string, value: number): boolean
    setInt(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setStrv(key: string, value?: string[] | null): boolean
    setUint(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    setValue(key: string, value: GLib.Variant): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Settings */
    vfuncChangeEvent?(keys: GLib.Quark, n_keys: number): boolean
    vfuncChanged?(key: string): void
    vfuncWritableChangeEvent?(key: GLib.Quark): boolean
    vfuncWritableChanged?(key: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Settings */
    connect(sigName: "change-event", callback: ((obj: Settings, keys: GLib.Quark[] | null) => boolean)): number
    connect_after(sigName: "change-event", callback: ((obj: Settings, keys: GLib.Quark[] | null) => boolean)): number
    emit(sigName: "change-event", keys: GLib.Quark[] | null): void
    connect(sigName: "changed", callback: ((obj: Settings, key: string) => void)): number
    connect_after(sigName: "changed", callback: ((obj: Settings, key: string) => void)): number
    emit(sigName: "changed", key: string): void
    connect(sigName: "writable-change-event", callback: ((obj: Settings, key: number) => boolean)): number
    connect_after(sigName: "writable-change-event", callback: ((obj: Settings, key: number) => boolean)): number
    emit(sigName: "writable-change-event", key: number): void
    connect(sigName: "writable-changed", callback: ((obj: Settings, key: string) => void)): number
    connect_after(sigName: "writable-changed", callback: ((obj: Settings, key: string) => void)): number
    emit(sigName: "writable-changed", key: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::delay-apply", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay-apply", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-unapplied", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-unapplied", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    static new(schema_id: string): Settings
    static newFull(schema: SettingsSchema, backend?: SettingsBackend | null, path?: string | null): Settings
    static newWithBackend(schema_id: string, backend: SettingsBackend): Settings
    static newWithBackendAndPath(schema_id: string, backend: SettingsBackend, path: string): Settings
    static newWithPath(schema_id: string, path: string): Settings
    static listRelocatableSchemas(): string[]
    static listSchemas(): string[]
    static sync(): void
    static unbind(object: GObject.Object, property: string): void
    static $gtype: GObject.Type
}
export interface SettingsBackend_ConstructProps extends GObject.Object_ConstructProps {
}
export class SettingsBackend {
    /* Fields of Gio.SettingsBackend */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SettingsBackend */
    changed(key: string, origin_tag?: object | null): void
    changedTree(tree: GLib.Tree, origin_tag?: object | null): void
    keysChanged(path: string, items: string[], origin_tag?: object | null): void
    pathChanged(path: string, origin_tag?: object | null): void
    pathWritableChanged(path: string): void
    writableChanged(key: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SettingsBackend */
    vfuncGetWritable?(key: string): boolean
    vfuncRead?(key: string, expected_type: GLib.VariantType, default_value: boolean): GLib.Variant
    vfuncReadUserValue?(key: string, expected_type: GLib.VariantType): GLib.Variant
    vfuncReset?(key: string, origin_tag?: object | null): void
    vfuncSubscribe?(name: string): void
    vfuncSync?(): void
    vfuncUnsubscribe?(name: string): void
    vfuncWrite?(key: string, value: GLib.Variant, origin_tag?: object | null): boolean
    vfuncWriteTree?(tree: GLib.Tree, origin_tag?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SettingsBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SettingsBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingsBackend_ConstructProps)
    _init (config?: SettingsBackend_ConstructProps): void
    static flattenTree(tree: GLib.Tree): [ /* path */ string, /* keys */ string[], /* values */ GLib.Variant[] | null ]
    static getDefault(): SettingsBackend
    static $gtype: GObject.Type
}
export interface SimpleAction_ConstructProps extends GObject.Object_ConstructProps {
    enabled?:boolean
    name?:string
    parameter_type?:GLib.VariantType
    state?:GLib.Variant
}
export class SimpleAction {
    /* Properties of Gio.SimpleAction */
    enabled:boolean
    state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Properties of Gio.Action */
    readonly name:string
    readonly parameter_type:GLib.VariantType
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SimpleAction */
    setEnabled(enabled: boolean): void
    setState(value: GLib.Variant): void
    setStateHint(state_hint?: GLib.Variant | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SimpleAction */
    connect(sigName: "activate", callback: ((obj: SimpleAction, parameter?: GLib.Variant | null) => void)): number
    connect_after(sigName: "activate", callback: ((obj: SimpleAction, parameter?: GLib.Variant | null) => void)): number
    emit(sigName: "activate", parameter?: GLib.Variant | null): void
    connect(sigName: "change-state", callback: ((obj: SimpleAction, value?: GLib.Variant | null) => void)): number
    connect_after(sigName: "change-state", callback: ((obj: SimpleAction, value?: GLib.Variant | null) => void)): number
    emit(sigName: "change-state", value?: GLib.Variant | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-type", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-type", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameter-type", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameter-type", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleAction_ConstructProps)
    _init (config?: SimpleAction_ConstructProps): void
    static new(name: string, parameter_type?: GLib.VariantType | null): SimpleAction
    static newStateful(name: string, parameter_type: GLib.VariantType | null, state: GLib.Variant): SimpleAction
    static $gtype: GObject.Type
}
export interface SimpleActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleActionGroup {
    /* Fields of Gio.SimpleActionGroup */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SimpleActionGroup */
    addEntries(entries: ActionEntry[], user_data?: object | null): void
    insert(action: Action): void
    lookup(action_name: string): Action
    remove(action_name: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.ActionGroup */
    actionAdded(action_name: string): void
    actionEnabledChanged(action_name: string, enabled: boolean): void
    actionRemoved(action_name: string): void
    actionStateChanged(action_name: string, state: GLib.Variant): void
    activateAction(action_name: string, parameter?: GLib.Variant | null): void
    changeActionState(action_name: string, value: GLib.Variant): void
    getActionEnabled(action_name: string): boolean
    getActionParameterType(action_name: string): GLib.VariantType | null
    getActionState(action_name: string): GLib.Variant | null
    getActionStateHint(action_name: string): GLib.Variant | null
    getActionStateType(action_name: string): GLib.VariantType | null
    hasAction(action_name: string): boolean
    listActions(): string[]
    queryAction(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    addAction(action: Action): void
    addActionEntries(entries: ActionEntry[], user_data?: object | null): void
    lookupAction(action_name: string): Action
    removeAction(action_name: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleActionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SimpleActionGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((obj: SimpleActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: ((obj: SimpleActionGroup, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: ((obj: SimpleActionGroup, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: ((obj: SimpleActionGroup, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((obj: SimpleActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: ((obj: SimpleActionGroup, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: ((obj: SimpleActionGroup, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: ((obj: SimpleActionGroup, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleActionGroup_ConstructProps)
    _init (config?: SimpleActionGroup_ConstructProps): void
    static new(): SimpleActionGroup
    static $gtype: GObject.Type
}
export interface SimpleAsyncResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleAsyncResult {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SimpleAsyncResult */
    complete(): void
    completeInIdle(): void
    getOpResGboolean(): boolean
    getOpResGssize(): number
    propagateError(): boolean
    setCheckCancellable(check_cancellable?: Cancellable | null): void
    setFromError(error: GLib.Error): void
    setHandleCancellation(handle_cancellation: boolean): void
    setOpResGboolean(op_res: boolean): void
    setOpResGssize(op_res: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncResult */
    getSourceObject(): GObject.Object | null
    getUserData(): object | null
    isTagged(source_tag?: object | null): boolean
    legacyPropagateError(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleAsyncResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SimpleAsyncResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleAsyncResult_ConstructProps)
    _init (config?: SimpleAsyncResult_ConstructProps): void
    static new(source_object?: GObject.Object | null, callback?: AsyncReadyCallback | null, source_tag?: object | null): SimpleAsyncResult
    static newFromError(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, error: GLib.Error): SimpleAsyncResult
    static isValid(result: AsyncResult, source?: GObject.Object | null, source_tag?: object | null): boolean
    static $gtype: GObject.Type
}
export interface SimpleIOStream_ConstructProps extends IOStream_ConstructProps {
    input_stream?:InputStream
    output_stream?:OutputStream
}
export class SimpleIOStream {
    /* Properties of Gio.SimpleIOStream */
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.IOStream */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream?(): InputStream
    vfuncGetOutputStream?(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleIOStream_ConstructProps)
    _init (config?: SimpleIOStream_ConstructProps): void
    static new(input_stream: InputStream, output_stream: OutputStream): SimpleIOStream
    static $gtype: GObject.Type
}
export interface SimplePermission_ConstructProps extends Permission_ConstructProps {
}
export class SimplePermission {
    /* Properties of Gio.Permission */
    readonly allowed:boolean
    readonly can_acquire:boolean
    readonly can_release:boolean
    /* Fields of Gio.Permission */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Permission */
    acquire(cancellable?: Cancellable | null): boolean
    acquireAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acquireFinish(result: AsyncResult): boolean
    getAllowed(): boolean
    getCanAcquire(): boolean
    getCanRelease(): boolean
    implUpdate(allowed: boolean, can_acquire: boolean, can_release: boolean): void
    release(cancellable?: Cancellable | null): boolean
    releaseAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    releaseFinish(result: AsyncResult): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Permission */
    vfuncAcquire?(cancellable?: Cancellable | null): boolean
    vfuncAcquireAsync?(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncAcquireFinish?(result: AsyncResult): boolean
    vfuncRelease?(cancellable?: Cancellable | null): boolean
    vfuncReleaseAsync?(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReleaseFinish?(result: AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-acquire", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-release", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimplePermission_ConstructProps)
    _init (config?: SimplePermission_ConstructProps): void
    static new(allowed: boolean): SimplePermission
    static $gtype: GObject.Type
}
export interface SimpleProxyResolver_ConstructProps extends GObject.Object_ConstructProps {
    default_proxy?:string
    ignore_hosts?:string[]
}
export class SimpleProxyResolver {
    /* Properties of Gio.SimpleProxyResolver */
    default_proxy:string
    ignore_hosts:string[]
    /* Fields of Gio.SimpleProxyResolver */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SimpleProxyResolver */
    setDefaultProxy(default_proxy: string): void
    setIgnoreHosts(ignore_hosts: string): void
    setUriProxy(uri_scheme: string, proxy: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupFinish(result: AsyncResult): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-proxy", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-proxy", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-hosts", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-hosts", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleProxyResolver_ConstructProps)
    _init (config?: SimpleProxyResolver_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Socket_ConstructProps extends GObject.Object_ConstructProps {
    blocking?:boolean
    broadcast?:boolean
    family?:SocketFamily
    fd?:number
    keepalive?:boolean
    listen_backlog?:number
    multicast_loopback?:boolean
    multicast_ttl?:number
    protocol?:SocketProtocol
    timeout?:number
    ttl?:number
    type?:SocketType
}
export class Socket {
    /* Properties of Gio.Socket */
    blocking:boolean
    broadcast:boolean
    keepalive:boolean
    listen_backlog:number
    readonly local_address:SocketAddress
    multicast_loopback:boolean
    multicast_ttl:number
    readonly remote_address:SocketAddress
    timeout:number
    ttl:number
    /* Fields of Gio.Socket */
    parent_instance:GObject.Object
    priv:SocketPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Socket */
    accept(cancellable?: Cancellable | null): Socket
    bind(address: SocketAddress, allow_reuse: boolean): boolean
    checkConnectResult(): boolean
    close(): boolean
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionTimedWait(condition: GLib.IOCondition, timeout_us: number, cancellable?: Cancellable | null): boolean
    conditionWait(condition: GLib.IOCondition, cancellable?: Cancellable | null): boolean
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectionFactoryCreateConnection(): SocketConnection
    getAvailableBytes(): number
    getBlocking(): boolean
    getBroadcast(): boolean
    getCredentials(): Credentials
    getFamily(): SocketFamily
    getFd(): number
    getKeepalive(): boolean
    getListenBacklog(): number
    getLocalAddress(): SocketAddress
    getMulticastLoopback(): boolean
    getMulticastTtl(): number
    getOption(level: number, optname: number): [ /* returnType */ boolean, /* value */ number ]
    getProtocol(): SocketProtocol
    getRemoteAddress(): SocketAddress
    getSocketType(): SocketType
    getTimeout(): number
    getTtl(): number
    isClosed(): boolean
    isConnected(): boolean
    joinMulticastGroup(group: InetAddress, source_specific: boolean, iface?: string | null): boolean
    joinMulticastGroupSsm(group: InetAddress, source_specific?: InetAddress | null, iface?: string | null): boolean
    leaveMulticastGroup(group: InetAddress, source_specific: boolean, iface?: string | null): boolean
    leaveMulticastGroupSsm(group: InetAddress, source_specific?: InetAddress | null, iface?: string | null): boolean
    listen(): boolean
    receive(buffer: any, cancellable?: Cancellable | null): number
    receiveFrom(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null ]
    receiveMessage(vectors: InputVector[], flags: number, cancellable?: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null, /* messages */ SocketControlMessage[] | null ]
    receiveMessages(messages: InputMessage[], flags: number, cancellable?: Cancellable | null): number
    receiveWithBlocking(buffer: any, blocking: boolean, cancellable?: Cancellable | null): number
    send(buffer: any, cancellable?: Cancellable | null): number
    sendMessage(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, cancellable?: Cancellable | null): number
    sendMessageWithTimeout(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, timeout_us: number, cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    sendMessages(messages: OutputMessage[], flags: number, cancellable?: Cancellable | null): number
    sendTo(address: SocketAddress | null, buffer: any, cancellable?: Cancellable | null): number
    sendWithBlocking(buffer: any, blocking: boolean, cancellable?: Cancellable | null): number
    setBlocking(blocking: boolean): void
    setBroadcast(broadcast: boolean): void
    setKeepalive(keepalive: boolean): void
    setListenBacklog(backlog: number): void
    setMulticastLoopback(loopback: boolean): void
    setMulticastTtl(ttl: number): void
    setOption(level: number, optname: number, value: number): boolean
    setTimeout(timeout: number): void
    setTtl(ttl: number): void
    shutdown(shutdown_read: boolean, shutdown_write: boolean): boolean
    speaksIpv4(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.DatagramBased */
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocking", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocking", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::broadcast", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::broadcast", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keepalive", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::listen-backlog", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-address", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-address", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::multicast-loopback", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multicast-loopback", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::multicast-ttl", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multicast-ttl", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-address", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-address", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ttl", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ttl", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    static new(family: SocketFamily, type: SocketType, protocol: SocketProtocol): Socket
    static newFromFd(fd: number): Socket
    static $gtype: GObject.Type
}
export interface SocketAddress_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family:SocketFamily
    /* Fields of Gio.SocketAddress */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily?(): SocketFamily
    vfuncGetNativeSize?(): number
    vfuncToNative?(dest: object | null, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketAddress_ConstructProps)
    _init (config?: SocketAddress_ConstructProps): void
    static newFromNative(native: object, len: number): SocketAddress
    static $gtype: GObject.Type
}
export interface SocketAddressEnumerator_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketAddressEnumerator {
    /* Fields of Gio.SocketAddressEnumerator */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketAddressEnumerator */
    next(cancellable?: Cancellable | null): SocketAddress
    nextAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFinish(result: AsyncResult): SocketAddress
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketAddressEnumerator */
    vfuncNext?(cancellable?: Cancellable | null): SocketAddress
    vfuncNextAsync?(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncNextFinish?(result: AsyncResult): SocketAddress
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SocketAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketAddressEnumerator_ConstructProps)
    _init (config?: SocketAddressEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SocketClient_ConstructProps extends GObject.Object_ConstructProps {
    enable_proxy?:boolean
    family?:SocketFamily
    local_address?:SocketAddress
    protocol?:SocketProtocol
    proxy_resolver?:ProxyResolver
    timeout?:number
    tls?:boolean
    tls_validation_flags?:TlsCertificateFlags
    type?:SocketType
}
export class SocketClient {
    /* Properties of Gio.SocketClient */
    enable_proxy:boolean
    family:SocketFamily
    local_address:SocketAddress
    protocol:SocketProtocol
    proxy_resolver:ProxyResolver
    timeout:number
    tls:boolean
    tls_validation_flags:TlsCertificateFlags
    type:SocketType
    /* Fields of Gio.SocketClient */
    parent_instance:GObject.Object
    priv:SocketClientPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketClient */
    addApplicationProxy(protocol: string): void
    connect(connectable: SocketConnectable, cancellable?: Cancellable | null): SocketConnection
    connectAsync(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): SocketConnection
    connectToHost(host_and_port: string, default_port: number, cancellable?: Cancellable | null): SocketConnection
    connectToHostAsync(host_and_port: string, default_port: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToHostFinish(result: AsyncResult): SocketConnection
    connectToService(domain: string, service: string, cancellable?: Cancellable | null): SocketConnection
    connectToServiceAsync(domain: string, service: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToServiceFinish(result: AsyncResult): SocketConnection
    connectToUri(uri: string, default_port: number, cancellable?: Cancellable | null): SocketConnection
    connectToUriAsync(uri: string, default_port: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToUriFinish(result: AsyncResult): SocketConnection
    getEnableProxy(): boolean
    getFamily(): SocketFamily
    getLocalAddress(): SocketAddress
    getProtocol(): SocketProtocol
    getProxyResolver(): ProxyResolver
    getSocketType(): SocketType
    getTimeout(): number
    getTls(): boolean
    getTlsValidationFlags(): TlsCertificateFlags
    setEnableProxy(enable: boolean): void
    setFamily(family: SocketFamily): void
    setLocalAddress(address?: SocketAddress | null): void
    setProtocol(protocol: SocketProtocol): void
    setProxyResolver(proxy_resolver?: ProxyResolver | null): void
    setSocketType(type: SocketType): void
    setTimeout(timeout: number): void
    setTls(tls: boolean): void
    setTlsValidationFlags(flags: TlsCertificateFlags): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketClient */
    vfuncEvent?(event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketClient */
    connect(sigName: "event", callback: ((obj: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void)): number
    connect_after(sigName: "event", callback: ((obj: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void)): number
    emit(sigName: "event", event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-proxy", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-proxy", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-address", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-address", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-validation-flags", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-validation-flags", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketClient_ConstructProps)
    _init (config?: SocketClient_ConstructProps): void
    static new(): SocketClient
    static $gtype: GObject.Type
}
export interface SocketConnection_ConstructProps extends IOStream_ConstructProps {
    socket?:Socket
}
export class SocketConnection {
    /* Properties of Gio.SocketConnection */
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.SocketConnection */
    parent_instance:IOStream
    priv:SocketConnectionPrivate
    /* Fields of Gio.IOStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream?(): InputStream
    vfuncGetOutputStream?(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketConnection_ConstructProps)
    _init (config?: SocketConnection_ConstructProps): void
    static factoryLookupType(family: SocketFamily, type: SocketType, protocol_id: number): GObject.Type
    static factoryRegisterType(g_type: GObject.Type, family: SocketFamily, type: SocketType, protocol: number): void
    static $gtype: GObject.Type
}
export interface SocketControlMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketControlMessage {
    /* Fields of Gio.SocketControlMessage */
    parent_instance:GObject.Object
    priv:SocketControlMessagePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketControlMessage */
    vfuncGetLevel?(): number
    vfuncGetSize?(): number
    vfuncGetType?(): number
    vfuncSerialize?(data: object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketControlMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SocketControlMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketControlMessage_ConstructProps)
    _init (config?: SocketControlMessage_ConstructProps): void
    static deserialize(level: number, type: number, data: any): SocketControlMessage
    static $gtype: GObject.Type
}
export interface SocketListener_ConstructProps extends GObject.Object_ConstructProps {
    listen_backlog?:number
}
export class SocketListener {
    /* Properties of Gio.SocketListener */
    listen_backlog:number
    /* Fields of Gio.SocketListener */
    parent_instance:GObject.Object
    priv:SocketListenerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object?: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    addAnyInetPort(source_object?: GObject.Object | null): number
    addInetPort(port: number, source_object?: GObject.Object | null): boolean
    addSocket(socket: Socket, source_object?: GObject.Object | null): boolean
    close(): void
    setBacklog(listen_backlog: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketListener */
    vfuncChanged?(): void
    vfuncEvent?(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: ((obj: SocketListener, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: ((obj: SocketListener, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::listen-backlog", callback: ((obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: ((obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketListener_ConstructProps)
    _init (config?: SocketListener_ConstructProps): void
    static new(): SocketListener
    static $gtype: GObject.Type
}
export interface SocketService_ConstructProps extends SocketListener_ConstructProps {
    active?:boolean
}
export class SocketService {
    /* Properties of Gio.SocketService */
    active:boolean
    /* Properties of Gio.SocketListener */
    listen_backlog:number
    /* Fields of Gio.SocketService */
    parent_instance:SocketListener
    priv:SocketServicePrivate
    /* Fields of Gio.SocketListener */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketService */
    isActive(): boolean
    start(): void
    stop(): void
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object?: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    addAnyInetPort(source_object?: GObject.Object | null): number
    addInetPort(port: number, source_object?: GObject.Object | null): boolean
    addSocket(socket: Socket, source_object?: GObject.Object | null): boolean
    close(): void
    setBacklog(listen_backlog: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketService */
    vfuncIncoming?(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketListener */
    vfuncChanged?(): void
    vfuncEvent?(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketService */
    connect(sigName: "incoming", callback: ((obj: SocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    connect_after(sigName: "incoming", callback: ((obj: SocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    emit(sigName: "incoming", connection: SocketConnection, source_object?: GObject.Object | null): void
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: ((obj: SocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: ((obj: SocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::listen-backlog", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketService_ConstructProps)
    _init (config?: SocketService_ConstructProps): void
    static new(): SocketService
    static $gtype: GObject.Type
}
export interface Subprocess_ConstructProps extends GObject.Object_ConstructProps {
    argv?:string[]
    flags?:SubprocessFlags
}
export class Subprocess {
    /* Properties of Gio.Subprocess */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Subprocess */
    communicate(stdin_buf?: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* stdout_buf */ Gjs.byteArray.ByteArray, /* stderr_buf */ Gjs.byteArray.ByteArray ]
    communicateAsync(stdin_buf?: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    communicateFinish(result: AsyncResult): [ /* returnType */ boolean, /* stdout_buf */ Gjs.byteArray.ByteArray, /* stderr_buf */ Gjs.byteArray.ByteArray ]
    communicateUtf8(stdin_buf?: string | null, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* stdout_buf */ string | null, /* stderr_buf */ string | null ]
    communicateUtf8Async(stdin_buf?: string | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    communicateUtf8Finish(result: AsyncResult): [ /* returnType */ boolean, /* stdout_buf */ string | null, /* stderr_buf */ string | null ]
    forceExit(): void
    getExitStatus(): number
    getIdentifier(): string | null
    getIfExited(): boolean
    getIfSignaled(): boolean
    getStatus(): number
    getStderrPipe(): InputStream
    getStdinPipe(): OutputStream
    getStdoutPipe(): InputStream
    getSuccessful(): boolean
    getTermSig(): number
    sendSignal(signal_num: number): void
    wait(cancellable?: Cancellable | null): boolean
    waitAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    waitCheck(cancellable?: Cancellable | null): boolean
    waitCheckAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    waitCheckFinish(result: AsyncResult): boolean
    waitFinish(result: AsyncResult): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Subprocess_ConstructProps)
    _init (config?: Subprocess_ConstructProps): void
    static new(argv: string[], flags: SubprocessFlags): Subprocess
    static $gtype: GObject.Type
}
export interface SubprocessLauncher_ConstructProps extends GObject.Object_ConstructProps {
    flags?:SubprocessFlags
}
export class SubprocessLauncher {
    /* Properties of Gio.SubprocessLauncher */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SubprocessLauncher */
    getenv(variable: string): string
    setCwd(cwd: string): void
    setEnviron(env: string[]): void
    setFlags(flags: SubprocessFlags): void
    setStderrFilePath(path?: string | null): void
    setStdinFilePath(path: string): void
    setStdoutFilePath(path?: string | null): void
    setenv(variable: string, value: string, overwrite: boolean): void
    spawnv(argv: string[]): Subprocess
    takeFd(source_fd: number, target_fd: number): void
    takeStderrFd(fd: number): void
    takeStdinFd(fd: number): void
    takeStdoutFd(fd: number): void
    unsetenv(variable: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SubprocessLauncher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SubprocessLauncher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubprocessLauncher_ConstructProps)
    _init (config?: SubprocessLauncher_ConstructProps): void
    static new(flags: SubprocessFlags): SubprocessLauncher
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
export class Task {
    /* Properties of Gio.Task */
    readonly completed:boolean
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Task */
    getCancellable(): Cancellable
    getCheckCancellable(): boolean
    getCompleted(): boolean
    getContext(): GLib.MainContext
    getName(): string | null
    getPriority(): number
    getReturnOnCancel(): boolean
    getSourceObject(): GObject.Object | null
    getSourceTag(): object | null
    getTaskData(): object | null
    hadError(): boolean
    propagateBoolean(): boolean
    propagateInt(): number
    propagatePointer(): object | null
    returnBoolean(result: boolean): void
    returnError(error: GLib.Error): void
    returnErrorIfCancelled(): boolean
    returnInt(result: number): void
    returnPointer(result?: object | null, result_destroy?: GLib.DestroyNotify | null): void
    setCheckCancellable(check_cancellable: boolean): void
    setName(name?: string | null): void
    setPriority(priority: number): void
    setReturnOnCancel(return_on_cancel: boolean): boolean
    setSourceTag(source_tag?: object | null): void
    setTaskData(task_data?: object | null, task_data_destroy?: GLib.DestroyNotify | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncResult */
    getUserData(): object | null
    isTagged(source_tag?: object | null): boolean
    legacyPropagateError(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed", callback: ((obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: ((obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    static new(source_object?: GObject.Object | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): Task
    static isValid(result: AsyncResult, source_object?: GObject.Object | null): boolean
    static reportError(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, source_tag: object | null, error: GLib.Error): void
    static $gtype: GObject.Type
}
export interface TcpConnection_ConstructProps extends SocketConnection_ConstructProps {
    graceful_disconnect?:boolean
}
export class TcpConnection {
    /* Properties of Gio.TcpConnection */
    graceful_disconnect:boolean
    /* Properties of Gio.SocketConnection */
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.TcpConnection */
    parent_instance:SocketConnection
    priv:TcpConnectionPrivate
    /* Fields of Gio.SocketConnection */
    /* Fields of Gio.IOStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TcpConnection */
    getGracefulDisconnect(): boolean
    setGracefulDisconnect(graceful_disconnect: boolean): void
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream?(): InputStream
    vfuncGetOutputStream?(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::graceful-disconnect", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::graceful-disconnect", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TcpConnection_ConstructProps)
    _init (config?: TcpConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TcpWrapperConnection_ConstructProps extends TcpConnection_ConstructProps {
    base_io_stream?:IOStream
}
export class TcpWrapperConnection {
    /* Properties of Gio.TcpWrapperConnection */
    /* Properties of Gio.TcpConnection */
    graceful_disconnect:boolean
    /* Properties of Gio.SocketConnection */
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.TcpWrapperConnection */
    parent_instance:TcpConnection
    priv:TcpWrapperConnectionPrivate
    /* Fields of Gio.TcpConnection */
    /* Fields of Gio.SocketConnection */
    /* Fields of Gio.IOStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TcpWrapperConnection */
    getBaseIoStream(): IOStream
    /* Methods of Gio.TcpConnection */
    getGracefulDisconnect(): boolean
    setGracefulDisconnect(graceful_disconnect: boolean): void
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream?(): InputStream
    vfuncGetOutputStream?(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::graceful-disconnect", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::graceful-disconnect", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TcpWrapperConnection_ConstructProps)
    _init (config?: TcpWrapperConnection_ConstructProps): void
    static new(base_io_stream: IOStream, socket: Socket): TcpWrapperConnection
    static $gtype: GObject.Type
}
export interface TestDBus_ConstructProps extends GObject.Object_ConstructProps {
    flags?:TestDBusFlags
}
export class TestDBus {
    /* Properties of Gio.TestDBus */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TestDBus */
    addServiceDir(path: string): void
    down(): void
    getBusAddress(): string | null
    getFlags(): TestDBusFlags
    stop(): void
    up(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TestDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TestDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TestDBus_ConstructProps)
    _init (config?: TestDBus_ConstructProps): void
    static new(flags: TestDBusFlags): TestDBus
    static unset(): void
    static $gtype: GObject.Type
}
export interface ThemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    name?:string
    names?:string[]
    use_default_fallbacks?:boolean
}
export class ThemedIcon {
    /* Properties of Gio.ThemedIcon */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ThemedIcon */
    appendName(iconname: string): void
    getNames(): string[]
    prependName(iconname: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ThemedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ThemedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThemedIcon_ConstructProps)
    _init (config?: ThemedIcon_ConstructProps): void
    static new(iconname: string): ThemedIcon
    static newFromNames(iconnames: string[]): ThemedIcon
    static newWithDefaultFallbacks(iconname: string): ThemedIcon
    static $gtype: GObject.Type
}
export interface ThreadedSocketService_ConstructProps extends SocketService_ConstructProps {
    max_threads?:number
}
export class ThreadedSocketService {
    /* Properties of Gio.ThreadedSocketService */
    /* Properties of Gio.SocketService */
    active:boolean
    /* Properties of Gio.SocketListener */
    listen_backlog:number
    /* Fields of Gio.ThreadedSocketService */
    parent_instance:SocketService
    priv:ThreadedSocketServicePrivate
    /* Fields of Gio.SocketService */
    /* Fields of Gio.SocketListener */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketService */
    isActive(): boolean
    start(): void
    stop(): void
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object?: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    addAnyInetPort(source_object?: GObject.Object | null): number
    addInetPort(port: number, source_object?: GObject.Object | null): boolean
    addSocket(socket: Socket, source_object?: GObject.Object | null): boolean
    close(): void
    setBacklog(listen_backlog: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.ThreadedSocketService */
    vfuncRun?(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketService */
    vfuncIncoming?(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketListener */
    vfuncChanged?(): void
    vfuncEvent?(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.ThreadedSocketService */
    connect(sigName: "run", callback: ((obj: ThreadedSocketService, connection: SocketConnection, source_object: GObject.Object) => boolean)): number
    connect_after(sigName: "run", callback: ((obj: ThreadedSocketService, connection: SocketConnection, source_object: GObject.Object) => boolean)): number
    emit(sigName: "run", connection: SocketConnection, source_object: GObject.Object): void
    /* Signals of Gio.SocketService */
    connect(sigName: "incoming", callback: ((obj: ThreadedSocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    connect_after(sigName: "incoming", callback: ((obj: ThreadedSocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    emit(sigName: "incoming", connection: SocketConnection, source_object?: GObject.Object | null): void
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: ((obj: ThreadedSocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: ((obj: ThreadedSocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::listen-backlog", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThreadedSocketService_ConstructProps)
    _init (config?: ThreadedSocketService_ConstructProps): void
    static new(max_threads: number): ThreadedSocketService
    static $gtype: GObject.Type
}
export interface TlsCertificate_ConstructProps extends GObject.Object_ConstructProps {
    certificate?:any
    certificate_pem?:string
    issuer?:TlsCertificate
    private_key?:any
    private_key_pem?:string
}
export class TlsCertificate {
    /* Properties of Gio.TlsCertificate */
    /* Fields of Gio.TlsCertificate */
    parent_instance:GObject.Object
    priv:TlsCertificatePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TlsCertificate */
    getIssuer(): TlsCertificate
    isSame(cert_two: TlsCertificate): boolean
    verify(identity?: SocketConnectable | null, trusted_ca?: TlsCertificate | null): TlsCertificateFlags
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsCertificate */
    vfuncVerify?(identity?: SocketConnectable | null, trusted_ca?: TlsCertificate | null): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TlsCertificate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsCertificate_ConstructProps)
    _init (config?: TlsCertificate_ConstructProps): void
    static newFromFile(file: string): TlsCertificate
    static newFromFiles(cert_file: string, key_file: string): TlsCertificate
    static newFromPem(data: string, length: number): TlsCertificate
    static listNewFromFile(file: string): TlsCertificate[]
    static $gtype: GObject.Type
}
export interface TlsConnection_ConstructProps extends IOStream_ConstructProps {
    advertised_protocols?:string[]
    base_io_stream?:IOStream
    certificate?:TlsCertificate
    database?:TlsDatabase
    interaction?:TlsInteraction
    rehandshake_mode?:TlsRehandshakeMode
    require_close_notify?:boolean
    use_system_certdb?:boolean
}
export class TlsConnection {
    /* Properties of Gio.TlsConnection */
    advertised_protocols:string[]
    certificate:TlsCertificate
    database:TlsDatabase
    interaction:TlsInteraction
    readonly negotiated_protocol:string
    readonly peer_certificate:TlsCertificate
    readonly peer_certificate_errors:TlsCertificateFlags
    rehandshake_mode:TlsRehandshakeMode
    require_close_notify:boolean
    use_system_certdb:boolean
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.TlsConnection */
    parent_instance:IOStream
    priv:TlsConnectionPrivate
    /* Fields of Gio.IOStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TlsConnection */
    emitAcceptCertificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate
    getDatabase(): TlsDatabase
    getInteraction(): TlsInteraction
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate
    getPeerCertificateErrors(): TlsCertificateFlags
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    getUseSystemCertdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database: TlsDatabase): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(require_close_notify: boolean): void
    setUseSystemCertdb(use_system_certdb: boolean): void
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsConnection */
    vfuncAcceptCertificate?(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfuncHandshake?(cancellable?: Cancellable | null): boolean
    vfuncHandshakeAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncHandshakeFinish?(result: AsyncResult): boolean
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream?(): InputStream
    vfuncGetOutputStream?(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: ((obj: TlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: ((obj: TlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peer_cert: TlsCertificate, errors: TlsCertificateFlags): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::advertised-protocols", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::certificate", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::database", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interaction", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::negotiated-protocol", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::peer-certificate", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::peer-certificate-errors", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rehandshake-mode", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::require-close-notify", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-system-certdb", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsConnection_ConstructProps)
    _init (config?: TlsConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsDatabase_ConstructProps extends GObject.Object_ConstructProps {
}
export class TlsDatabase {
    /* Fields of Gio.TlsDatabase */
    parent_instance:GObject.Object
    priv:TlsDatabasePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TlsDatabase */
    createCertificateHandle(certificate: TlsCertificate): string | null
    lookupCertificateForHandle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    lookupCertificateForHandleAsync(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateForHandleFinish(result: AsyncResult): TlsCertificate
    lookupCertificateIssuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    lookupCertificateIssuerAsync(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateIssuerFinish(result: AsyncResult): TlsCertificate
    lookupCertificatesIssuedBy(issuer_raw_dn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    lookupCertificatesIssuedByAsync(issuer_raw_dn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificatesIssuedByFinish(result: AsyncResult): TlsCertificate[]
    verifyChain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    verifyChainAsync(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    verifyChainFinish(result: AsyncResult): TlsCertificateFlags
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsDatabase */
    vfuncCreateCertificateHandle?(certificate: TlsCertificate): string | null
    vfuncLookupCertificateForHandle?(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    vfuncLookupCertificateForHandleAsync?(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificateForHandleFinish?(result: AsyncResult): TlsCertificate
    vfuncLookupCertificateIssuer?(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    vfuncLookupCertificateIssuerAsync?(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificateIssuerFinish?(result: AsyncResult): TlsCertificate
    vfuncLookupCertificatesIssuedBy?(issuer_raw_dn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    vfuncLookupCertificatesIssuedByAsync?(issuer_raw_dn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificatesIssuedByFinish?(result: AsyncResult): TlsCertificate[]
    vfuncVerifyChain?(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    vfuncVerifyChainAsync?(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncVerifyChainFinish?(result: AsyncResult): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TlsDatabase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsDatabase_ConstructProps)
    _init (config?: TlsDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsInteraction_ConstructProps extends GObject.Object_ConstructProps {
}
export class TlsInteraction {
    /* Fields of Gio.TlsInteraction */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TlsInteraction */
    askPassword(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    askPasswordAsync(password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    askPasswordFinish(result: AsyncResult): TlsInteractionResult
    invokeAskPassword(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    invokeRequestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    requestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    requestCertificateAsync(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    requestCertificateFinish(result: AsyncResult): TlsInteractionResult
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsInteraction */
    vfuncAskPassword?(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    vfuncAskPasswordAsync?(password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncAskPasswordFinish?(result: AsyncResult): TlsInteractionResult
    vfuncRequestCertificate?(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    vfuncRequestCertificateAsync?(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncRequestCertificateFinish?(result: AsyncResult): TlsInteractionResult
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsInteraction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TlsInteraction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsInteraction_ConstructProps)
    _init (config?: TlsInteraction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsPassword_ConstructProps extends GObject.Object_ConstructProps {
    description?:string
    flags?:TlsPasswordFlags
    warning?:string
}
export class TlsPassword {
    /* Properties of Gio.TlsPassword */
    description:string
    flags:TlsPasswordFlags
    warning:string
    /* Fields of Gio.TlsPassword */
    parent_instance:GObject.Object
    priv:TlsPasswordPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TlsPassword */
    getDescription(): string
    getFlags(): TlsPasswordFlags
    getValue(length?: number | null): number
    getWarning(): string
    setDescription(description: string): void
    setFlags(flags: TlsPasswordFlags): void
    setValue(value: any): void
    setValueFull(value: any, destroy?: GLib.DestroyNotify | null): void
    setWarning(warning: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsPassword */
    vfuncGetDefaultWarning?(): string
    vfuncGetValue?(length?: number | null): number
    vfuncSetValue?(value: any, destroy?: GLib.DestroyNotify | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsPassword_ConstructProps)
    _init (config?: TlsPassword_ConstructProps): void
    static new(flags: TlsPasswordFlags, description: string): TlsPassword
    static $gtype: GObject.Type
}
export interface UnixConnection_ConstructProps extends SocketConnection_ConstructProps {
}
export class UnixConnection {
    /* Properties of Gio.SocketConnection */
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.UnixConnection */
    parent_instance:SocketConnection
    priv:UnixConnectionPrivate
    /* Fields of Gio.SocketConnection */
    /* Fields of Gio.IOStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixConnection */
    receiveCredentials(cancellable?: Cancellable | null): Credentials
    receiveCredentialsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    receiveCredentialsFinish(result: AsyncResult): Credentials
    receiveFd(cancellable?: Cancellable | null): number
    sendCredentials(cancellable?: Cancellable | null): boolean
    sendCredentialsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    sendCredentialsFinish(result: AsyncResult): boolean
    sendFd(fd: number, cancellable?: Cancellable | null): boolean
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream?(): InputStream
    vfuncGetOutputStream?(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixConnection_ConstructProps)
    _init (config?: UnixConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UnixCredentialsMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    credentials?:Credentials
}
export class UnixCredentialsMessage {
    /* Properties of Gio.UnixCredentialsMessage */
    /* Fields of Gio.UnixCredentialsMessage */
    parent_instance:SocketControlMessage
    priv:UnixCredentialsMessagePrivate
    /* Fields of Gio.SocketControlMessage */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixCredentialsMessage */
    getCredentials(): Credentials
    /* Methods of Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketControlMessage */
    vfuncGetLevel?(): number
    vfuncGetSize?(): number
    vfuncGetType?(): number
    vfuncSerialize?(data: object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixCredentialsMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UnixCredentialsMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixCredentialsMessage_ConstructProps)
    _init (config?: UnixCredentialsMessage_ConstructProps): void
    static new(): UnixCredentialsMessage
    static newWithCredentials(credentials: Credentials): UnixCredentialsMessage
    static isSupported(): boolean
    static $gtype: GObject.Type
}
export interface UnixFDList_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnixFDList {
    /* Fields of Gio.UnixFDList */
    parent_instance:GObject.Object
    priv:UnixFDListPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixFDList */
    append(fd: number): number
    get(index_: number): number
    getLength(): number
    peekFds(): number[]
    stealFds(): number[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixFDList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UnixFDList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixFDList_ConstructProps)
    _init (config?: UnixFDList_ConstructProps): void
    static new(): UnixFDList
    static newFromArray(fds: number[]): UnixFDList
    static $gtype: GObject.Type
}
export interface UnixFDMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    fd_list?:UnixFDList
}
export class UnixFDMessage {
    /* Properties of Gio.UnixFDMessage */
    /* Fields of Gio.UnixFDMessage */
    parent_instance:SocketControlMessage
    priv:UnixFDMessagePrivate
    /* Fields of Gio.SocketControlMessage */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixFDMessage */
    appendFd(fd: number): boolean
    getFdList(): UnixFDList
    stealFds(): number[]
    /* Methods of Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketControlMessage */
    vfuncGetLevel?(): number
    vfuncGetSize?(): number
    vfuncGetType?(): number
    vfuncSerialize?(data: object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixFDMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UnixFDMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixFDMessage_ConstructProps)
    _init (config?: UnixFDMessage_ConstructProps): void
    static new(): UnixFDMessage
    static newWithFdList(fd_list: UnixFDList): UnixFDMessage
    static $gtype: GObject.Type
}
export interface UnixInputStream_ConstructProps extends InputStream_ConstructProps {
    close_fd?:boolean
    fd?:number
}
export class UnixInputStream {
    /* Properties of Gio.UnixInputStream */
    close_fd:boolean
    /* Fields of Gio.UnixInputStream */
    parent_instance:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixInputStream */
    getCloseFd(): boolean
    getFd(): number
    setCloseFd(close_fd: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytes_read */ number ]
    readAllAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    readAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    readBytesAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): Gjs.byteArray.ByteArray
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.FileDescriptorBased */
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncReadAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync?(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-fd", callback: ((obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: ((obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixInputStream_ConstructProps)
    _init (config?: UnixInputStream_ConstructProps): void
    static new(fd: number, close_fd: boolean): UnixInputStream
    static $gtype: GObject.Type
}
export interface UnixMountMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnixMountMonitor {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixMountMonitor */
    setRateLimit(limit_msec: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.UnixMountMonitor */
    connect(sigName: "mountpoints-changed", callback: ((obj: UnixMountMonitor) => void)): number
    connect_after(sigName: "mountpoints-changed", callback: ((obj: UnixMountMonitor) => void)): number
    emit(sigName: "mountpoints-changed"): void
    connect(sigName: "mounts-changed", callback: ((obj: UnixMountMonitor) => void)): number
    connect_after(sigName: "mounts-changed", callback: ((obj: UnixMountMonitor) => void)): number
    emit(sigName: "mounts-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixMountMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UnixMountMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixMountMonitor_ConstructProps)
    _init (config?: UnixMountMonitor_ConstructProps): void
    static new(): UnixMountMonitor
    static get(): UnixMountMonitor
    static $gtype: GObject.Type
}
export interface UnixOutputStream_ConstructProps extends OutputStream_ConstructProps {
    close_fd?:boolean
    fd?:number
}
export class UnixOutputStream {
    /* Properties of Gio.UnixOutputStream */
    close_fd:boolean
    /* Fields of Gio.UnixOutputStream */
    parent_instance:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixOutputStream */
    getCloseFd(): boolean
    getFd(): number
    setCloseFd(close_fd: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAllAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writeAsync(buffer: any, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAllAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writevAsync(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.FileDescriptorBased */
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Cancellable | null): boolean
    vfuncFlush?(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync?(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: AsyncResult): boolean
    vfuncSplice?(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync?(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync?(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfuncWritevFn?(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-fd", callback: ((obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: ((obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixOutputStream_ConstructProps)
    _init (config?: UnixOutputStream_ConstructProps): void
    static new(fd: number, close_fd: boolean): UnixOutputStream
    static $gtype: GObject.Type
}
export interface UnixSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    abstract?:boolean
    address_type?:UnixSocketAddressType
    path?:string
    path_as_array?:any
}
export class UnixSocketAddress {
    /* Properties of Gio.UnixSocketAddress */
    /* Properties of Gio.SocketAddress */
    readonly family:SocketFamily
    /* Fields of Gio.UnixSocketAddress */
    parent_instance:SocketAddress
    /* Fields of Gio.SocketAddress */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixSocketAddress */
    getAddressType(): UnixSocketAddressType
    getIsAbstract(): boolean
    getPath(): string
    getPathLen(): number
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily?(): SocketFamily
    vfuncGetNativeSize?(): number
    vfuncToNative?(dest: object | null, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixSocketAddress_ConstructProps)
    _init (config?: UnixSocketAddress_ConstructProps): void
    static new(path: string): UnixSocketAddress
    static newAbstract(path: number[]): UnixSocketAddress
    static newWithType(path: number[], type: UnixSocketAddressType): UnixSocketAddress
    static abstractNamesSupported(): boolean
    static $gtype: GObject.Type
}
export interface Vfs_ConstructProps extends GObject.Object_ConstructProps {
}
export class Vfs {
    /* Fields of Gio.Vfs */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Vfs */
    getFileForPath(path: string): File
    getFileForUri(uri: string): File
    getSupportedUriSchemes(): string[]
    isActive(): boolean
    parseName(parse_name: string): File
    registerUriScheme(scheme: string, uri_func?: VfsFileLookupFunc | null, parse_name_func?: VfsFileLookupFunc | null): boolean
    unregisterUriScheme(scheme: string): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Vfs */
    vfuncAddWritableNamespaces?(list: FileAttributeInfoList): void
    vfuncGetFileForPath?(path: string): File
    vfuncGetFileForUri?(uri: string): File
    vfuncGetSupportedUriSchemes?(): string[]
    vfuncIsActive?(): boolean
    vfuncLocalFileAddInfo?(filename: string, device: number, attribute_matcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable | null, extra_data: object | null, free_extra_data: GLib.DestroyNotify): void
    vfuncLocalFileMoved?(source: string, dest: string): void
    vfuncLocalFileRemoved?(filename: string): void
    vfuncLocalFileSetAttributes?(filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfuncParseName?(parse_name: string): File
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Vfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Vfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Vfs_ConstructProps)
    _init (config?: Vfs_ConstructProps): void
    static getDefault(): Vfs
    static getLocal(): Vfs
    static $gtype: GObject.Type
}
export interface VolumeMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class VolumeMonitor {
    /* Fields of Gio.VolumeMonitor */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.VolumeMonitor */
    getConnectedDrives(): Drive[]
    getMountForUuid(uuid: string): Mount
    getMounts(): Mount[]
    getVolumeForUuid(uuid: string): Volume
    getVolumes(): Volume[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.VolumeMonitor */
    vfuncDriveChanged?(drive: Drive): void
    vfuncDriveConnected?(drive: Drive): void
    vfuncDriveDisconnected?(drive: Drive): void
    vfuncDriveEjectButton?(drive: Drive): void
    vfuncDriveStopButton?(drive: Drive): void
    vfuncGetConnectedDrives?(): Drive[]
    vfuncGetMountForUuid?(uuid: string): Mount
    vfuncGetMounts?(): Mount[]
    vfuncGetVolumeForUuid?(uuid: string): Volume
    vfuncGetVolumes?(): Volume[]
    vfuncMountAdded?(mount: Mount): void
    vfuncMountChanged?(mount: Mount): void
    vfuncMountPreUnmount?(mount: Mount): void
    vfuncMountRemoved?(mount: Mount): void
    vfuncVolumeAdded?(volume: Volume): void
    vfuncVolumeChanged?(volume: Volume): void
    vfuncVolumeRemoved?(volume: Volume): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-changed", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-changed", drive: Drive): void
    connect(sigName: "drive-connected", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-connected", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-connected", drive: Drive): void
    connect(sigName: "drive-disconnected", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-disconnected", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-disconnected", drive: Drive): void
    connect(sigName: "drive-eject-button", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-eject-button", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-eject-button", drive: Drive): void
    connect(sigName: "drive-stop-button", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-stop-button", callback: ((obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-stop-button", drive: Drive): void
    connect(sigName: "mount-added", callback: ((obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-added", callback: ((obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-added", mount: Mount): void
    connect(sigName: "mount-changed", callback: ((obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-changed", callback: ((obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-changed", mount: Mount): void
    connect(sigName: "mount-pre-unmount", callback: ((obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-pre-unmount", callback: ((obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-pre-unmount", mount: Mount): void
    connect(sigName: "mount-removed", callback: ((obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-removed", callback: ((obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-removed", mount: Mount): void
    connect(sigName: "volume-added", callback: ((obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-added", callback: ((obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-added", volume: Volume): void
    connect(sigName: "volume-changed", callback: ((obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-changed", callback: ((obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-changed", volume: Volume): void
    connect(sigName: "volume-removed", callback: ((obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-removed", callback: ((obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-removed", volume: Volume): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: VolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: VolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VolumeMonitor_ConstructProps)
    _init (config?: VolumeMonitor_ConstructProps): void
    static adoptOrphanMount(mount: Mount): Volume
    static get(): VolumeMonitor
    static $gtype: GObject.Type
}
export interface ZlibCompressor_ConstructProps extends GObject.Object_ConstructProps {
    file_info?:FileInfo
    format?:ZlibCompressorFormat
    level?:number
}
export class ZlibCompressor {
    /* Properties of Gio.ZlibCompressor */
    file_info:FileInfo
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ZlibCompressor */
    getFileInfo(): FileInfo
    setFileInfo(file_info?: FileInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Converter */
    convert(inbuf: any, outbuf: any, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::file-info", callback: ((obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-info", callback: ((obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ZlibCompressor_ConstructProps)
    _init (config?: ZlibCompressor_ConstructProps): void
    static new(format: ZlibCompressorFormat, level: number): ZlibCompressor
    static $gtype: GObject.Type
}
export interface ZlibDecompressor_ConstructProps extends GObject.Object_ConstructProps {
    format?:ZlibCompressorFormat
}
export class ZlibDecompressor {
    /* Properties of Gio.ZlibDecompressor */
    readonly file_info:FileInfo
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ZlibDecompressor */
    getFileInfo(): FileInfo
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Converter */
    convert(inbuf: any, outbuf: any, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::file-info", callback: ((obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-info", callback: ((obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ZlibDecompressor_ConstructProps)
    _init (config?: ZlibDecompressor_ConstructProps): void
    static new(format: ZlibCompressorFormat): ZlibDecompressor
    static $gtype: GObject.Type
}
export class ActionEntry {
    /* Fields of Gio.ActionEntry */
    name:string
    activate:any
    parameter_type:string
    state:string
    change_state:any
    static name: string
}
export class AppLaunchContextPrivate {
    static name: string
}
export class ApplicationCommandLinePrivate {
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export class BufferedInputStreamPrivate {
    static name: string
}
export class BufferedOutputStreamPrivate {
    static name: string
}
export class CancellablePrivate {
    static name: string
}
export class ConverterInputStreamPrivate {
    static name: string
}
export class ConverterOutputStreamPrivate {
    static name: string
}
export class DBusAnnotationInfo {
    /* Fields of Gio.DBusAnnotationInfo */
    ref_count:number
    key:string
    value:string
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusAnnotationInfo */
    ref(): DBusAnnotationInfo
    unref(): void
    static name: string
    static lookup(annotations: DBusAnnotationInfo[] | null, name: string): string
}
export class DBusArgInfo {
    /* Fields of Gio.DBusArgInfo */
    ref_count:number
    name:string
    signature:string
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusArgInfo */
    ref(): DBusArgInfo
    unref(): void
    static name: string
}
export class DBusErrorEntry {
    /* Fields of Gio.DBusErrorEntry */
    error_code:number
    dbus_error_name:string
    static name: string
}
export class DBusInterfaceInfo {
    /* Fields of Gio.DBusInterfaceInfo */
    ref_count:number
    name:string
    methods:DBusMethodInfo[]
    signals:DBusSignalInfo[]
    properties:DBusPropertyInfo[]
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusInterfaceInfo */
    cacheBuild(): void
    cacheRelease(): void
    generateXml(indent: number, string_builder: GLib.String): void
    lookupMethod(name: string): DBusMethodInfo
    lookupProperty(name: string): DBusPropertyInfo
    lookupSignal(name: string): DBusSignalInfo
    ref(): DBusInterfaceInfo
    unref(): void
    static name: string
}
export class DBusInterfaceSkeletonPrivate {
    static name: string
}
export class DBusInterfaceVTable {
    /* Fields of Gio.DBusInterfaceVTable */
    method_call:DBusInterfaceMethodCallFunc
    get_property:DBusInterfaceGetPropertyFunc
    set_property:DBusInterfaceSetPropertyFunc
    static name: string
}
export class DBusMethodInfo {
    /* Fields of Gio.DBusMethodInfo */
    ref_count:number
    name:string
    in_args:DBusArgInfo[]
    out_args:DBusArgInfo[]
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusMethodInfo */
    ref(): DBusMethodInfo
    unref(): void
    static name: string
}
export class DBusNodeInfo {
    /* Fields of Gio.DBusNodeInfo */
    ref_count:number
    path:string
    interfaces:DBusInterfaceInfo[]
    nodes:DBusNodeInfo[]
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusNodeInfo */
    generateXml(indent: number, string_builder: GLib.String): void
    lookupInterface(name: string): DBusInterfaceInfo
    ref(): DBusNodeInfo
    unref(): void
    static name: string
    static newForXml(xml_data: string): DBusNodeInfo
}
export class DBusObjectManagerClientPrivate {
    static name: string
}
export class DBusObjectManagerServerPrivate {
    static name: string
}
export class DBusObjectProxyPrivate {
    static name: string
}
export class DBusObjectSkeletonPrivate {
    static name: string
}
export class DBusPropertyInfo {
    /* Fields of Gio.DBusPropertyInfo */
    ref_count:number
    name:string
    signature:string
    flags:DBusPropertyInfoFlags
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusPropertyInfo */
    ref(): DBusPropertyInfo
    unref(): void
    static name: string
}
export class DBusProxyPrivate {
    static name: string
}
export class DBusSignalInfo {
    /* Fields of Gio.DBusSignalInfo */
    ref_count:number
    name:string
    args:DBusArgInfo[]
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusSignalInfo */
    ref(): DBusSignalInfo
    unref(): void
    static name: string
}
export class DBusSubtreeVTable {
    /* Fields of Gio.DBusSubtreeVTable */
    introspect:DBusSubtreeIntrospectFunc
    dispatch:DBusSubtreeDispatchFunc
    static name: string
}
export class DataInputStreamPrivate {
    static name: string
}
export class DataOutputStreamPrivate {
    static name: string
}
export class EmblemedIconPrivate {
    static name: string
}
export class FileAttributeInfo {
    /* Fields of Gio.FileAttributeInfo */
    name:string
    type:FileAttributeType
    flags:FileAttributeInfoFlags
    static name: string
}
export class FileAttributeInfoList {
    /* Fields of Gio.FileAttributeInfoList */
    infos:FileAttributeInfo
    n_infos:number
    /* Methods of Gio.FileAttributeInfoList */
    add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void
    dup(): FileAttributeInfoList
    lookup(name: string): FileAttributeInfo
    ref(): FileAttributeInfoList
    unref(): void
    static name: string
    static new(): FileAttributeInfoList
    constructor()
    static new(): FileAttributeInfoList
}
export class FileAttributeMatcher {
    /* Methods of Gio.FileAttributeMatcher */
    enumerateNamespace(ns: string): boolean
    enumerateNext(): string
    matches(attribute: string): boolean
    matchesOnly(attribute: string): boolean
    ref(): FileAttributeMatcher
    subtract(subtract: FileAttributeMatcher): FileAttributeMatcher
    unref(): void
    static name: string
    static new(attributes: string): FileAttributeMatcher
    constructor(attributes: string)
    static new(attributes: string): FileAttributeMatcher
}
export class FileEnumeratorPrivate {
    static name: string
}
export class FileIOStreamPrivate {
    static name: string
}
export class FileInputStreamPrivate {
    static name: string
}
export class FileMonitorPrivate {
    static name: string
}
export class FileOutputStreamPrivate {
    static name: string
}
export class IOExtension {
    /* Methods of Gio.IOExtension */
    getName(): string
    getPriority(): number
    getType(): GObject.Type
    static name: string
}
export class IOExtensionPoint {
    /* Methods of Gio.IOExtensionPoint */
    getExtensionByName(name: string): IOExtension
    getExtensions(): IOExtension[]
    getRequiredType(): GObject.Type
    setRequiredType(type: GObject.Type): void
    static name: string
    static implement(extension_point_name: string, type: GObject.Type, extension_name: string, priority: number): IOExtension
    static lookup(name: string): IOExtensionPoint
    static register(name: string): IOExtensionPoint
}
export class IOModuleScope {
    /* Methods of Gio.IOModuleScope */
    block(basename: string): void
    free(): void
    static name: string
}
export class IOSchedulerJob {
    /* Methods of Gio.IOSchedulerJob */
    sendToMainloop(func: GLib.SourceFunc): boolean
    sendToMainloopAsync(func: GLib.SourceFunc): void
    static name: string
}
export class IOStreamAdapter {
    static name: string
}
export class IOStreamPrivate {
    static name: string
}
export class InetAddressMaskPrivate {
    static name: string
}
export class InetAddressPrivate {
    static name: string
}
export class InetSocketAddressPrivate {
    static name: string
}
export class InputMessage {
    /* Fields of Gio.InputMessage */
    address:SocketAddress
    vectors:InputVector[]
    num_vectors:number
    bytes_received:number
    flags:number
    control_messages:SocketControlMessage[]
    num_control_messages:number
    static name: string
}
export class InputStreamPrivate {
    static name: string
}
export class InputVector {
    /* Fields of Gio.InputVector */
    buffer:object
    size:number
    static name: string
}
export class MemoryInputStreamPrivate {
    static name: string
}
export class MemoryOutputStreamPrivate {
    static name: string
}
export class MenuAttributeIterPrivate {
    static name: string
}
export class MenuLinkIterPrivate {
    static name: string
}
export class MenuModelPrivate {
    static name: string
}
export class MountOperationPrivate {
    static name: string
}
export class NativeSocketAddressPrivate {
    static name: string
}
export class NetworkAddressPrivate {
    static name: string
}
export class NetworkServicePrivate {
    static name: string
}
export class OutputMessage {
    /* Fields of Gio.OutputMessage */
    address:SocketAddress
    vectors:OutputVector
    num_vectors:number
    bytes_sent:number
    control_messages:SocketControlMessage[]
    num_control_messages:number
    static name: string
}
export class OutputStreamPrivate {
    static name: string
}
export class OutputVector {
    /* Fields of Gio.OutputVector */
    buffer:object
    size:number
    static name: string
}
export class PermissionPrivate {
    static name: string
}
export class ProxyAddressEnumeratorPrivate {
    static name: string
}
export class ProxyAddressPrivate {
    static name: string
}
export class ResolverPrivate {
    static name: string
}
export class Resource {
    /* Methods of Gio.Resource */
    register(): void
    unregister(): void
    enumerateChildren(path: string, lookup_flags: ResourceLookupFlags): string[]
    getInfo(path: string, lookup_flags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
    lookupData(path: string, lookup_flags: ResourceLookupFlags): Gjs.byteArray.ByteArray
    openStream(path: string, lookup_flags: ResourceLookupFlags): InputStream
    ref(): Resource
    unref(): void
    static name: string
    static newFromData(data: Gjs.byteArray.ByteArray): Resource
    static load(filename: string): Resource
}
export class SettingsBackendPrivate {
    static name: string
}
export class SettingsPrivate {
    static name: string
}
export class SettingsSchema {
    /* Methods of Gio.SettingsSchema */
    getId(): string
    getKey(name: string): SettingsSchemaKey
    getPath(): string
    hasKey(name: string): boolean
    listChildren(): string[]
    listKeys(): string[]
    ref(): SettingsSchema
    unref(): void
    static name: string
}
export class SettingsSchemaKey {
    /* Methods of Gio.SettingsSchemaKey */
    getDefaultValue(): GLib.Variant
    getDescription(): string
    getName(): string
    getRange(): GLib.Variant
    getSummary(): string
    getValueType(): GLib.VariantType
    rangeCheck(value: GLib.Variant): boolean
    ref(): SettingsSchemaKey
    unref(): void
    static name: string
}
export class SettingsSchemaSource {
    /* Methods of Gio.SettingsSchemaSource */
    listSchemas(recursive: boolean): [ /* non_relocatable */ string[], /* relocatable */ string[] ]
    lookup(schema_id: string, recursive: boolean): SettingsSchema | null
    ref(): SettingsSchemaSource
    unref(): void
    static name: string
    static newFromDirectory(directory: string, parent: SettingsSchemaSource | null, trusted: boolean): SettingsSchemaSource
    static getDefault(): SettingsSchemaSource | null
}
export class SimpleActionGroupPrivate {
    static name: string
}
export class SimpleProxyResolverPrivate {
    static name: string
}
export class SocketClientPrivate {
    static name: string
}
export class SocketConnectionPrivate {
    static name: string
}
export class SocketControlMessagePrivate {
    static name: string
}
export class SocketListenerPrivate {
    static name: string
}
export class SocketPrivate {
    static name: string
}
export class SocketServicePrivate {
    static name: string
}
export class SrvTarget {
    /* Methods of Gio.SrvTarget */
    copy(): SrvTarget
    free(): void
    getHostname(): string
    getPort(): number
    getPriority(): number
    getWeight(): number
    static name: string
    static new(hostname: string, port: number, priority: number, weight: number): SrvTarget
    constructor(hostname: string, port: number, priority: number, weight: number)
    static new(hostname: string, port: number, priority: number, weight: number): SrvTarget
}
export class StaticResource {
    /* Fields of Gio.StaticResource */
    /* Methods of Gio.StaticResource */
    fini(): void
    getResource(): Resource
    init(): void
    static name: string
}
export class TcpConnectionPrivate {
    static name: string
}
export class TcpWrapperConnectionPrivate {
    static name: string
}
export class ThreadedSocketServicePrivate {
    static name: string
}
export class TlsCertificatePrivate {
    static name: string
}
export class TlsConnectionPrivate {
    static name: string
}
export class TlsDatabasePrivate {
    static name: string
}
export class TlsInteractionPrivate {
    static name: string
}
export class TlsPasswordPrivate {
    static name: string
}
export class UnixConnectionPrivate {
    static name: string
}
export class UnixCredentialsMessagePrivate {
    static name: string
}
export class UnixFDListPrivate {
    static name: string
}
export class UnixFDMessagePrivate {
    static name: string
}
export class UnixInputStreamPrivate {
    static name: string
}
export class UnixMountEntry {
    static name: string
}
export class UnixMountPoint {
    /* Methods of Gio.UnixMountPoint */
    compare(mount2: UnixMountPoint): number
    copy(): UnixMountPoint
    free(): void
    getDevicePath(): string
    getFsType(): string
    getMountPath(): string
    getOptions(): string
    guessCanEject(): boolean
    guessIcon(): Icon
    guessName(): string
    guessSymbolicIcon(): Icon
    isLoopback(): boolean
    isReadonly(): boolean
    isUserMountable(): boolean
    static name: string
}
export class UnixOutputStreamPrivate {
    static name: string
}
export class UnixSocketAddressPrivate {
    static name: string
}
}