/**
 * Gio-2.0
 */

import * as Gjs from './Gjs'
import * as GObject from './GObject'
import * as GLib from './GLib'
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
}
export enum AskPasswordFlags {
    NEED_PASSWORD,
    NEED_USERNAME,
    NEED_DOMAIN,
    SAVING_SUPPORTED,
    ANONYMOUS_SUPPORTED,
}
export enum BusNameOwnerFlags {
    NONE,
    ALLOW_REPLACEMENT,
    REPLACE,
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
export const FILE_ATTRIBUTE_ACCESS_CAN_DELETE:string
export const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE:string
export const FILE_ATTRIBUTE_ACCESS_CAN_READ:string
export const FILE_ATTRIBUTE_ACCESS_CAN_RENAME:string
export const FILE_ATTRIBUTE_ACCESS_CAN_TRASH:string
export const FILE_ATTRIBUTE_ACCESS_CAN_WRITE:string
export const FILE_ATTRIBUTE_DOS_IS_ARCHIVE:string
export const FILE_ATTRIBUTE_DOS_IS_SYSTEM:string
export const FILE_ATTRIBUTE_ETAG_VALUE:string
export const FILE_ATTRIBUTE_FILESYSTEM_FREE:string
export const FILE_ATTRIBUTE_FILESYSTEM_READONLY:string
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
export function action_name_is_valid(action_name: string): boolean
export function action_parse_detailed_name(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]
export function action_print_detailed_name(action_name: string, target_value: GLib.Variant | null): string
export function app_info_create_from_commandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo
export function app_info_get_all(): GLib.List
export function app_info_get_all_for_type(content_type: string): GLib.List
export function app_info_get_default_for_type(content_type: string, must_support_uris: boolean): AppInfo
export function app_info_get_default_for_uri_scheme(uri_scheme: string): AppInfo
export function app_info_get_fallback_for_type(content_type: string): GLib.List
export function app_info_get_recommended_for_type(content_type: string): GLib.List
export function app_info_launch_default_for_uri(uri: string, launch_context: AppLaunchContext | null): boolean
export function app_info_reset_type_associations(content_type: string): void
export function async_initable_newv_async(object_type: number, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
export function bus_get(bus_type: BusType, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
export function bus_get_finish(res: AsyncResult): DBusConnection
export function bus_get_sync(bus_type: BusType, cancellable: Cancellable | null): DBusConnection
export function bus_own_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_closure: Function, name_lost_closure: Function): number
export function bus_own_name_with_closures(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_closure: Function, name_acquired_closure: Function, name_lost_closure: Function): number
export function bus_unown_name(owner_id: number): void
export function bus_unwatch_name(watcher_id: number): void
export function bus_watch_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_closure: Function, name_vanished_closure: Function): number
export function bus_watch_name_with_closures(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_closure: Function, name_vanished_closure: Function): number
export function content_type_can_be_executable(type: string): boolean
export function content_type_equals(type1: string, type2: string): boolean
export function content_type_from_mime_type(mime_type: string): string | null
export function content_type_get_description(type: string): string
export function content_type_get_generic_icon_name(type: string): string
export function content_type_get_icon(type: string): Icon
export function content_type_get_mime_type(type: string): string | null
export function content_type_get_symbolic_icon(type: string): Icon
export function content_type_guess(filename: string | null, data: Gjs.byteArray.ByteArray[] | null): [ /* returnType */ string, /* result_uncertain */ boolean | null ]
export function content_type_guess_for_tree(root: File): string[]
export function content_type_is_a(type: string, supertype: string): boolean
export function content_type_is_unknown(type: string): boolean
export function content_types_get_registered(): GLib.List
export function dbus_address_escape_value(string: string): string
export function dbus_address_get_for_bus_sync(bus_type: BusType, cancellable: Cancellable | null): string
export function dbus_address_get_stream(address: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
export function dbus_address_get_stream_finish(res: AsyncResult, out_guid: string): IOStream
export function dbus_address_get_stream_sync(address: string, out_guid: string, cancellable: Cancellable | null): IOStream
export function dbus_annotation_info_lookup(annotations: DBusAnnotationInfo[] | null, name: string): string
export function dbus_error_encode_gerror(error: GLib.Error): string
export function dbus_error_get_remote_error(error: GLib.Error): string
export function dbus_error_is_remote_error(error: GLib.Error): boolean
export function dbus_error_new_for_dbus_error(dbus_error_name: string, dbus_error_message: string): GLib.Error
export function dbus_error_quark(): GLib.Quark
export function dbus_error_register_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean
export function dbus_error_register_error_domain(error_domain_quark_name: string, quark_volatile: number, entries: DBusErrorEntry, num_entries: number): void
export function dbus_error_strip_remote_error(error: GLib.Error): boolean
export function dbus_error_unregister_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean
export function dbus_generate_guid(): string
export function dbus_gvalue_to_gvariant(gvalue: any, type: GLib.VariantType): GLib.Variant
export function dbus_gvariant_to_gvalue(value: GLib.Variant): /* out_gvalue */ any
export function dbus_is_address(string: string): boolean
export function dbus_is_guid(string: string): boolean
export function dbus_is_interface_name(string: string): boolean
export function dbus_is_member_name(string: string): boolean
export function dbus_is_name(string: string): boolean
export function dbus_is_supported_address(string: string): boolean
export function dbus_is_unique_name(string: string): boolean
export function file_new_for_commandline_arg(arg: string): File
export function file_new_for_commandline_arg_and_cwd(arg: string, cwd: string): File
export function file_new_for_path(path: string): File
export function file_new_for_uri(uri: string): File
export function file_new_tmp(tmpl: string): [ /* returnType */ File, /* iostream */ FileIOStream ]
export function file_parse_name(parse_name: string): File
export function icon_deserialize(value: GLib.Variant): Icon
export function icon_hash(icon: object): number
export function icon_new_for_string(str: string): Icon
export function initable_newv(object_type: number, parameters: GObject.Parameter[], cancellable: Cancellable | null): GObject.Object
export function io_error_from_errno(err_no: number): IOErrorEnum
export function io_error_quark(): GLib.Quark
export function io_extension_point_implement(extension_point_name: string, type: number, extension_name: string, priority: number): IOExtension
export function io_extension_point_lookup(name: string): IOExtensionPoint
export function io_extension_point_register(name: string): IOExtensionPoint
export function io_modules_load_all_in_directory(dirname: string): GLib.List
export function io_modules_load_all_in_directory_with_scope(dirname: string, scope: IOModuleScope): GLib.List
export function io_modules_scan_all_in_directory(dirname: string): void
export function io_modules_scan_all_in_directory_with_scope(dirname: string, scope: IOModuleScope): void
export function io_scheduler_cancel_all_jobs(): void
export function io_scheduler_push_job(job_func: IOSchedulerJobFunc, user_data: object, notify: GLib.DestroyNotify | null, io_priority: number, cancellable: Cancellable | null): void
export function network_monitor_get_default(): NetworkMonitor
export function networking_init(): void
export function pollable_source_new(pollable_stream: GObject.Object): GLib.Source
export function pollable_source_new_full(pollable_stream: GObject.Object, child_source: GLib.Source | null, cancellable: Cancellable | null): GLib.Source
export function pollable_stream_read(stream: InputStream, buffer: Gjs.byteArray.ByteArray[], blocking: boolean, cancellable: Cancellable | null): number
export function pollable_stream_write(stream: OutputStream, buffer: Gjs.byteArray.ByteArray[], blocking: boolean, cancellable: Cancellable | null): number
export function pollable_stream_write_all(stream: OutputStream, buffer: Gjs.byteArray.ByteArray[], blocking: boolean, cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
export function proxy_get_default_for_protocol(protocol: string): Proxy
export function proxy_resolver_get_default(): ProxyResolver
export function resolver_error_quark(): GLib.Quark
export function resource_error_quark(): GLib.Quark
export function resource_load(filename: string): Resource
export function resources_enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[]
export function resources_get_info(path: string, lookup_flags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
export function resources_lookup_data(path: string, lookup_flags: ResourceLookupFlags): Gjs.byteArray.ByteArray
export function resources_open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream
export function resources_register(resource: Resource): void
export function resources_unregister(resource: Resource): void
export function settings_schema_source_get_default(): SettingsSchemaSource
export function simple_async_report_gerror_in_idle(object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object, error: GLib.Error): void
export function tls_backend_get_default(): TlsBackend
export function tls_client_connection_new(base_io_stream: IOStream, server_identity: SocketConnectable | null): TlsClientConnection
export function tls_error_quark(): GLib.Quark
export function tls_file_database_new(anchors: string): TlsFileDatabase
export function tls_server_connection_new(base_io_stream: IOStream, certificate: TlsCertificate | null): TlsServerConnection
export function unix_is_mount_path_system_internal(mount_path: string): boolean
export function unix_mount_compare(mount1: UnixMountEntry, mount2: UnixMountEntry): number
export function unix_mount_free(mount_entry: UnixMountEntry): void
export function unix_mount_get_device_path(mount_entry: UnixMountEntry): string
export function unix_mount_get_fs_type(mount_entry: UnixMountEntry): string
export function unix_mount_get_mount_path(mount_entry: UnixMountEntry): string
export function unix_mount_guess_can_eject(mount_entry: UnixMountEntry): boolean
export function unix_mount_guess_icon(mount_entry: UnixMountEntry): Icon
export function unix_mount_guess_name(mount_entry: UnixMountEntry): string
export function unix_mount_guess_should_display(mount_entry: UnixMountEntry): boolean
export function unix_mount_guess_symbolic_icon(mount_entry: UnixMountEntry): Icon
export function unix_mount_is_readonly(mount_entry: UnixMountEntry): boolean
export function unix_mount_is_system_internal(mount_entry: UnixMountEntry): boolean
export function unix_mount_points_changed_since(time: number): boolean
export function unix_mounts_changed_since(time: number): boolean
export interface AsyncReadyCallback {
    (source_object: GObject.Object, res: AsyncResult, user_data: object): void
}
export interface BusAcquiredCallback {
    (connection: DBusConnection, name: string, user_data: object): void
}
export interface BusNameAcquiredCallback {
    (connection: DBusConnection, name: string, user_data: object): void
}
export interface BusNameAppearedCallback {
    (connection: DBusConnection, name: string, name_owner: string, user_data: object): void
}
export interface BusNameLostCallback {
    (connection: DBusConnection, name: string, user_data: object): void
}
export interface BusNameVanishedCallback {
    (connection: DBusConnection, name: string, user_data: object): void
}
export interface CancellableSourceFunc {
    (cancellable: Cancellable | null, user_data: object): boolean
}
export interface DBusInterfaceGetPropertyFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, error: GLib.Error, user_data: object): GLib.Variant
}
export interface DBusInterfaceMethodCallFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: DBusMethodInvocation, user_data: object): void
}
export interface DBusInterfaceSetPropertyFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant, error: GLib.Error, user_data: object): boolean
}
export interface DBusMessageFilterFunction {
    (connection: DBusConnection, message: DBusMessage, incoming: boolean, user_data: object): DBusMessage
}
export interface DBusProxyTypeFunc {
    (manager: DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: object): number
}
export interface DBusSignalCallback {
    (connection: DBusConnection, sender_name: string, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant, user_data: object): void
}
export interface DBusSubtreeDispatchFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, node: string, out_user_data: object | null, user_data: object): DBusInterfaceVTable
}
export interface DBusSubtreeIntrospectFunc {
    (connection: DBusConnection, sender: string, object_path: string, node: string, user_data: object): DBusInterfaceInfo
}
export interface DatagramBasedSourceFunc {
    (datagram_based: DatagramBased, condition: GLib.IOCondition, user_data: object): boolean
}
export interface DesktopAppLaunchCallback {
    (appinfo: DesktopAppInfo, pid: GLib.Pid, user_data: object): void
}
export interface FileMeasureProgressCallback {
    (reporting: boolean, current_size: number, num_dirs: number, num_files: number, user_data: object): void
}
export interface FileProgressCallback {
    (current_num_bytes: number, total_num_bytes: number, user_data: object): void
}
export interface FileReadMoreCallback {
    (file_contents: string, file_size: number, callback_data: object): boolean
}
export interface IOSchedulerJobFunc {
    (job: IOSchedulerJob, cancellable: Cancellable | null, user_data: object): boolean
}
export interface PollableSourceFunc {
    (pollable_stream: GObject.Object, user_data: object): boolean
}
export interface SettingsBindGetMapping {
    (value: any, variant: GLib.Variant, user_data: object): boolean
}
export interface SettingsBindSetMapping {
    (value: any, expected_type: GLib.VariantType, user_data: object): GLib.Variant
}
export interface SettingsGetMapping {
    (value: GLib.Variant, user_data: object): boolean
}
export interface SimpleAsyncThreadFunc {
    (res: SimpleAsyncResult, object: GObject.Object, cancellable: Cancellable | null): void
}
export interface SocketSourceFunc {
    (socket: Socket, condition: GLib.IOCondition, user_data: object): boolean
}
export interface TaskThreadFunc {
    (task: Task, source_object: GObject.Object, task_data: object, cancellable: Cancellable | null): void
}
export interface Action {
    /* Properties of Gio.Action */
    readonly enabled:boolean
    readonly name:string
    readonly parameter_type:GLib.VariantType
    readonly state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Methods of Gio.Action */
    activate(parameter: GLib.Variant | null): void
    change_state(value: GLib.Variant): void
    get_enabled(): boolean
    get_name(): string
    get_parameter_type(): GLib.VariantType
    get_state(): GLib.Variant
    get_state_hint(): GLib.Variant | null
    get_state_type(): GLib.VariantType
    /* Virtual methods of Gio.Action */
    vfunc_activate(parameter: GLib.Variant | null): void
    vfunc_change_state(value: GLib.Variant): void
    vfunc_get_enabled(): boolean
    vfunc_get_name(): string
    vfunc_get_parameter_type(): GLib.VariantType
    vfunc_get_state(): GLib.Variant
    vfunc_get_state_hint(): GLib.Variant | null
    vfunc_get_state_type(): GLib.VariantType
}
export interface Action_Static {
    name: string
}
export declare class Action_Static {
    name_is_valid(action_name: string): boolean
    parse_detailed_name(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]
    print_detailed_name(action_name: string, target_value: GLib.Variant | null): string
}
export declare var Action: Action_Static
export interface ActionGroup {
    /* Methods of Gio.ActionGroup */
    action_added(action_name: string): void
    action_enabled_changed(action_name: string, enabled: boolean): void
    action_removed(action_name: string): void
    action_state_changed(action_name: string, state: GLib.Variant): void
    activate_action(action_name: string, parameter: GLib.Variant | null): void
    change_action_state(action_name: string, value: GLib.Variant): void
    get_action_enabled(action_name: string): boolean
    get_action_parameter_type(action_name: string): GLib.VariantType | null
    get_action_state(action_name: string): GLib.Variant | null
    get_action_state_hint(action_name: string): GLib.Variant | null
    get_action_state_type(action_name: string): GLib.VariantType | null
    has_action(action_name: string): boolean
    list_actions(): string[]
    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Virtual methods of Gio.ActionGroup */
    vfunc_action_added(action_name: string): void
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void
    vfunc_action_removed(action_name: string): void
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void
    vfunc_activate_action(action_name: string, parameter: GLib.Variant | null): void
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void
    vfunc_get_action_enabled(action_name: string): boolean
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null
    vfunc_get_action_state(action_name: string): GLib.Variant | null
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null
    vfunc_has_action(action_name: string): boolean
    vfunc_list_actions(): string[]
    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((obj: ActionGroup, action_name: string) => void))
    connect(sigName: "action-enabled-changed", callback: ((obj: ActionGroup, action_name: string, enabled: boolean) => void))
    connect(sigName: "action-removed", callback: ((obj: ActionGroup, action_name: string) => void))
    connect(sigName: "action-state-changed", callback: ((obj: ActionGroup, action_name: string, value: GLib.Variant) => void))
}
export interface ActionGroup_Static {
    name: string
}
export declare var ActionGroup: ActionGroup_Static
export interface ActionMap {
    /* Methods of Gio.ActionMap */
    add_action(action: Action): void
    add_action_entries(entries: ActionEntry[], user_data: object): void
    lookup_action(action_name: string): Action
    remove_action(action_name: string): void
    /* Virtual methods of Gio.ActionMap */
    vfunc_add_action(action: Action): void
    vfunc_lookup_action(action_name: string): Action
    vfunc_remove_action(action_name: string): void
}
export interface ActionMap_Static {
    name: string
}
export declare var ActionMap: ActionMap_Static
export interface AppInfo {
    /* Methods of Gio.AppInfo */
    add_supports_type(content_type: string): boolean
    can_delete(): boolean
    can_remove_supports_type(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    get_commandline(): string
    get_description(): string
    get_display_name(): string
    get_executable(): string
    get_icon(): Icon
    get_id(): string
    get_name(): string
    get_supported_types(): string[]
    launch(files: GLib.List | null, launch_context: AppLaunchContext | null): boolean
    launch_uris(uris: GLib.List | null, launch_context: AppLaunchContext | null): boolean
    remove_supports_type(content_type: string): boolean
    set_as_default_for_extension(extension: string): boolean
    set_as_default_for_type(content_type: string): boolean
    set_as_last_used_for_type(content_type: string): boolean
    should_show(): boolean
    supports_files(): boolean
    supports_uris(): boolean
    /* Virtual methods of Gio.AppInfo */
    vfunc_add_supports_type(content_type: string): boolean
    vfunc_can_delete(): boolean
    vfunc_can_remove_supports_type(): boolean
    vfunc_do_delete(): boolean
    vfunc_dup(): AppInfo
    vfunc_equal(appinfo2: AppInfo): boolean
    vfunc_get_commandline(): string
    vfunc_get_description(): string
    vfunc_get_display_name(): string
    vfunc_get_executable(): string
    vfunc_get_icon(): Icon
    vfunc_get_id(): string
    vfunc_get_name(): string
    vfunc_get_supported_types(): string[]
    vfunc_launch(files: GLib.List | null, launch_context: AppLaunchContext | null): boolean
    vfunc_launch_uris(uris: GLib.List | null, launch_context: AppLaunchContext | null): boolean
    vfunc_remove_supports_type(content_type: string): boolean
    vfunc_set_as_default_for_extension(extension: string): boolean
    vfunc_set_as_default_for_type(content_type: string): boolean
    vfunc_set_as_last_used_for_type(content_type: string): boolean
    vfunc_should_show(): boolean
    vfunc_supports_files(): boolean
    vfunc_supports_uris(): boolean
}
export interface AppInfo_Static {
    name: string
}
export declare class AppInfo_Static {
    create_from_commandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo
    get_all(): GLib.List
    get_all_for_type(content_type: string): GLib.List
    get_default_for_type(content_type: string, must_support_uris: boolean): AppInfo
    get_default_for_uri_scheme(uri_scheme: string): AppInfo
    get_fallback_for_type(content_type: string): GLib.List
    get_recommended_for_type(content_type: string): GLib.List
    launch_default_for_uri(uri: string, launch_context: AppLaunchContext | null): boolean
    reset_type_associations(content_type: string): void
}
export declare var AppInfo: AppInfo_Static
export interface AsyncInitable {
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    init_finish(res: AsyncResult): boolean
    new_finish(res: AsyncResult): GObject.Object
    /* Virtual methods of Gio.AsyncInitable */
    vfunc_init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_init_finish(res: AsyncResult): boolean
}
export interface AsyncInitable_Static {
    name: string
}
export declare class AsyncInitable_Static {
    newv_async(object_type: number, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
}
export declare var AsyncInitable: AsyncInitable_Static
export interface AsyncResult {
    /* Methods of Gio.AsyncResult */
    get_source_object(): GObject.Object
    get_user_data(): object
    is_tagged(source_tag: object): boolean
    legacy_propagate_error(): boolean
    /* Virtual methods of Gio.AsyncResult */
    vfunc_get_source_object(): GObject.Object
    vfunc_get_user_data(): object
    vfunc_is_tagged(source_tag: object): boolean
}
export interface AsyncResult_Static {
    name: string
}
export declare var AsyncResult: AsyncResult_Static
export interface Converter {
    /* Methods of Gio.Converter */
    convert(inbuf: Gjs.byteArray.ByteArray[], outbuf: object, outbuf_size: number, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Virtual methods of Gio.Converter */
    vfunc_convert(inbuf: Gjs.byteArray.ByteArray[], outbuf: object, outbuf_size: number, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    vfunc_reset(): void
}
export interface Converter_Static {
    name: string
}
export declare var Converter: Converter_Static
export interface DBusInterface {
    /* Methods of Gio.DBusInterface */
    dup_object(): DBusObject
    get_info(): DBusInterfaceInfo
    set_object(object: DBusObject | null): void
    /* Virtual methods of Gio.DBusInterface */
    vfunc_dup_object(): DBusObject
    vfunc_get_info(): DBusInterfaceInfo
    vfunc_set_object(object: DBusObject | null): void
}
export interface DBusInterface_Static {
    name: string
}
export declare var DBusInterface: DBusInterface_Static
export interface DBusObject {
    /* Methods of Gio.DBusObject */
    get_interface(interface_name: string): DBusInterface
    get_interfaces(): GLib.List
    get_object_path(): string
    /* Virtual methods of Gio.DBusObject */
    vfunc_get_interface(interface_name: string): DBusInterface
    vfunc_get_interfaces(): GLib.List
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: DBusInterface): void
    vfunc_interface_removed(interface_: DBusInterface): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((obj: DBusObject, interface: DBusInterface) => void))
    connect(sigName: "interface-removed", callback: ((obj: DBusObject, interface: DBusInterface) => void))
}
export interface DBusObject_Static {
    name: string
}
export declare var DBusObject: DBusObject_Static
export interface DBusObjectManager {
    /* Methods of Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): DBusInterface
    get_object(object_path: string): DBusObject
    get_object_path(): string
    get_objects(): GLib.List
    /* Virtual methods of Gio.DBusObjectManager */
    vfunc_get_interface(object_path: string, interface_name: string): DBusInterface
    vfunc_get_object(object_path: string): DBusObject
    vfunc_get_object_path(): string
    vfunc_get_objects(): GLib.List
    vfunc_interface_added(object: DBusObject, interface_: DBusInterface): void
    vfunc_interface_removed(object: DBusObject, interface_: DBusInterface): void
    vfunc_object_added(object: DBusObject): void
    vfunc_object_removed(object: DBusObject): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: ((obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void))
    connect(sigName: "interface-removed", callback: ((obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void))
    connect(sigName: "object-added", callback: ((obj: DBusObjectManager, object: DBusObject) => void))
    connect(sigName: "object-removed", callback: ((obj: DBusObjectManager, object: DBusObject) => void))
}
export interface DBusObjectManager_Static {
    name: string
}
export declare var DBusObjectManager: DBusObjectManager_Static
export interface DatagramBased {
    /* Methods of Gio.DatagramBased */
    condition_check(condition: GLib.IOCondition): GLib.IOCondition
    condition_wait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable | null): boolean
    create_source(condition: GLib.IOCondition, cancellable: Cancellable | null): GLib.Source
    receive_messages(messages: InputMessage, num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number
    send_messages(messages: OutputMessage, num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number
    /* Virtual methods of Gio.DatagramBased */
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable | null): boolean
    vfunc_create_source(condition: GLib.IOCondition, cancellable: Cancellable | null): GLib.Source
    vfunc_receive_messages(messages: InputMessage, num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number
    vfunc_send_messages(messages: OutputMessage, num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number
}
export interface DatagramBased_Static {
    name: string
}
export declare var DatagramBased: DatagramBased_Static
export interface DesktopAppInfoLookup {
    /* Methods of Gio.DesktopAppInfoLookup */
    get_default_for_uri_scheme(uri_scheme: string): AppInfo
    /* Virtual methods of Gio.DesktopAppInfoLookup */
    vfunc_get_default_for_uri_scheme(uri_scheme: string): AppInfo
}
export interface DesktopAppInfoLookup_Static {
    name: string
}
export declare var DesktopAppInfoLookup: DesktopAppInfoLookup_Static
export interface Drive {
    /* Methods of Gio.Drive */
    can_eject(): boolean
    can_poll_for_media(): boolean
    can_start(): boolean
    can_start_degraded(): boolean
    can_stop(): boolean
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    eject_finish(result: AsyncResult): boolean
    eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    eject_with_operation_finish(result: AsyncResult): boolean
    enumerate_identifiers(): string[]
    get_icon(): Icon
    get_identifier(kind: string): string
    get_name(): string
    get_sort_key(): string
    get_start_stop_type(): DriveStartStopType
    get_symbolic_icon(): Icon
    get_volumes(): GLib.List
    has_media(): boolean
    has_volumes(): boolean
    is_media_check_automatic(): boolean
    is_media_removable(): boolean
    poll_for_media(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    poll_for_media_finish(result: AsyncResult): boolean
    start(flags: DriveStartFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    start_finish(result: AsyncResult): boolean
    stop(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    stop_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.Drive */
    vfunc_can_eject(): boolean
    vfunc_can_poll_for_media(): boolean
    vfunc_can_start(): boolean
    vfunc_can_start_degraded(): boolean
    vfunc_can_stop(): boolean
    vfunc_changed(): void
    vfunc_disconnected(): void
    vfunc_eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_eject_button(): void
    vfunc_eject_finish(result: AsyncResult): boolean
    vfunc_eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean
    vfunc_enumerate_identifiers(): string[]
    vfunc_get_icon(): Icon
    vfunc_get_identifier(kind: string): string
    vfunc_get_name(): string
    vfunc_get_sort_key(): string
    vfunc_get_start_stop_type(): DriveStartStopType
    vfunc_get_symbolic_icon(): Icon
    vfunc_get_volumes(): GLib.List
    vfunc_has_media(): boolean
    vfunc_has_volumes(): boolean
    vfunc_is_media_check_automatic(): boolean
    vfunc_is_media_removable(): boolean
    vfunc_poll_for_media(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_poll_for_media_finish(result: AsyncResult): boolean
    vfunc_start(flags: DriveStartFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_start_finish(result: AsyncResult): boolean
    vfunc_stop(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_stop_button(): void
    vfunc_stop_finish(result: AsyncResult): boolean
    /* Signals of Gio.Drive */
    connect(sigName: "changed", callback: ((obj: Drive) => void))
    connect(sigName: "disconnected", callback: ((obj: Drive) => void))
    connect(sigName: "eject-button", callback: ((obj: Drive) => void))
    connect(sigName: "stop-button", callback: ((obj: Drive) => void))
}
export interface Drive_Static {
    name: string
}
export declare var Drive: Drive_Static
export interface File {
    /* Methods of Gio.File */
    append_to(flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream
    append_to_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    append_to_finish(res: AsyncResult): FileOutputStream
    copy(destination: File, flags: FileCopyFlags, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object): boolean
    copy_attributes(destination: File, flags: FileCopyFlags, cancellable: Cancellable | null): boolean
    copy_finish(res: AsyncResult): boolean
    create(flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream
    create_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    create_finish(res: AsyncResult): FileOutputStream
    create_readwrite(flags: FileCreateFlags, cancellable: Cancellable | null): FileIOStream
    create_readwrite_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    create_readwrite_finish(res: AsyncResult): FileIOStream
    delete(cancellable: Cancellable | null): boolean
    delete_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    delete_finish(result: AsyncResult): boolean
    dup(): File
    eject_mountable(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    eject_mountable_finish(result: AsyncResult): boolean
    eject_mountable_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    eject_mountable_with_operation_finish(result: AsyncResult): boolean
    enumerate_children(attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileEnumerator
    enumerate_children_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    enumerate_children_finish(res: AsyncResult): FileEnumerator
    equal(file2: File): boolean
    find_enclosing_mount(cancellable: Cancellable | null): Mount
    find_enclosing_mount_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    find_enclosing_mount_finish(res: AsyncResult): Mount
    get_basename(): string | null
    get_child(name: string): File
    get_child_for_display_name(display_name: string): File
    get_parent(): File | null
    get_parse_name(): string
    get_path(): string | null
    get_relative_path(descendant: File): string | null
    get_uri(): string
    get_uri_scheme(): string
    has_parent(parent: File | null): boolean
    has_prefix(prefix: File): boolean
    has_uri_scheme(uri_scheme: string): boolean
    hash(): number
    is_native(): boolean
    load_contents(cancellable: Cancellable | null): [ /* returnType */ boolean, /* contents */ Gjs.byteArray.ByteArray[], /* etag_out */ string | null ]
    load_contents_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    load_contents_finish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ Gjs.byteArray.ByteArray[], /* etag_out */ string | null ]
    load_partial_contents_finish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ Gjs.byteArray.ByteArray[], /* etag_out */ string | null ]
    make_directory(cancellable: Cancellable | null): boolean
    make_directory_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    make_directory_finish(result: AsyncResult): boolean
    make_directory_with_parents(cancellable: Cancellable | null): boolean
    make_symbolic_link(symlink_value: string, cancellable: Cancellable | null): boolean
    measure_disk_usage_finish(result: AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    monitor(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor
    monitor_directory(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor
    monitor_file(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor
    mount_enclosing_volume(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    mount_enclosing_volume_finish(result: AsyncResult): boolean
    mount_mountable(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    mount_mountable_finish(result: AsyncResult): File
    move(destination: File, flags: FileCopyFlags, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object): boolean
    open_readwrite(cancellable: Cancellable | null): FileIOStream
    open_readwrite_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    open_readwrite_finish(res: AsyncResult): FileIOStream
    poll_mountable(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    poll_mountable_finish(result: AsyncResult): boolean
    query_default_handler(cancellable: Cancellable | null): AppInfo
    query_exists(cancellable: Cancellable | null): boolean
    query_file_type(flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileType
    query_filesystem_info(attributes: string, cancellable: Cancellable | null): FileInfo
    query_filesystem_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    query_filesystem_info_finish(res: AsyncResult): FileInfo
    query_info(attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileInfo
    query_info_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    query_info_finish(res: AsyncResult): FileInfo
    query_settable_attributes(cancellable: Cancellable | null): FileAttributeInfoList
    query_writable_namespaces(cancellable: Cancellable | null): FileAttributeInfoList
    read(cancellable: Cancellable | null): FileInputStream
    read_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_finish(res: AsyncResult): FileInputStream
    replace(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream
    replace_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    replace_contents(contents: Gjs.byteArray.ByteArray[], etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null): [ /* returnType */ boolean, /* new_etag */ string | null ]
    replace_contents_async(contents: Gjs.byteArray.ByteArray[], etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    replace_contents_bytes_async(contents: Gjs.byteArray.ByteArray, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    replace_contents_finish(res: AsyncResult): [ /* returnType */ boolean, /* new_etag */ string | null ]
    replace_finish(res: AsyncResult): FileOutputStream
    replace_readwrite(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null): FileIOStream
    replace_readwrite_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    replace_readwrite_finish(res: AsyncResult): FileIOStream
    resolve_relative_path(relative_path: string): File
    set_attribute(attribute: string, type: FileAttributeType, value_p: object | null, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    set_attribute_byte_string(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    set_attribute_int32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    set_attribute_int64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    set_attribute_string(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    set_attribute_uint32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    set_attribute_uint64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    set_attributes_async(info: FileInfo, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    set_attributes_finish(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    set_attributes_from_info(info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    set_display_name(display_name: string, cancellable: Cancellable | null): File
    set_display_name_async(display_name: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    set_display_name_finish(res: AsyncResult): File
    start_mountable(flags: DriveStartFlags, start_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    start_mountable_finish(result: AsyncResult): boolean
    stop_mountable(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    stop_mountable_finish(result: AsyncResult): boolean
    supports_thread_contexts(): boolean
    trash(cancellable: Cancellable | null): boolean
    trash_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    trash_finish(result: AsyncResult): boolean
    unmount_mountable(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    unmount_mountable_finish(result: AsyncResult): boolean
    unmount_mountable_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    unmount_mountable_with_operation_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.File */
    vfunc_append_to(flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream
    vfunc_append_to_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_append_to_finish(res: AsyncResult): FileOutputStream
    vfunc_copy(destination: File, flags: FileCopyFlags, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object): boolean
    vfunc_copy_finish(res: AsyncResult): boolean
    vfunc_create(flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream
    vfunc_create_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_create_finish(res: AsyncResult): FileOutputStream
    vfunc_create_readwrite(flags: FileCreateFlags, cancellable: Cancellable | null): FileIOStream
    vfunc_create_readwrite_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_create_readwrite_finish(res: AsyncResult): FileIOStream
    vfunc_delete_file(cancellable: Cancellable | null): boolean
    vfunc_delete_file_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_delete_file_finish(result: AsyncResult): boolean
    vfunc_dup(): File
    vfunc_eject_mountable(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_eject_mountable_finish(result: AsyncResult): boolean
    vfunc_eject_mountable_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_eject_mountable_with_operation_finish(result: AsyncResult): boolean
    vfunc_enumerate_children(attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileEnumerator
    vfunc_enumerate_children_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_enumerate_children_finish(res: AsyncResult): FileEnumerator
    vfunc_equal(file2: File): boolean
    vfunc_find_enclosing_mount(cancellable: Cancellable | null): Mount
    vfunc_find_enclosing_mount_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_find_enclosing_mount_finish(res: AsyncResult): Mount
    vfunc_get_basename(): string | null
    vfunc_get_child_for_display_name(display_name: string): File
    vfunc_get_parent(): File | null
    vfunc_get_parse_name(): string
    vfunc_get_path(): string | null
    vfunc_get_relative_path(descendant: File): string | null
    vfunc_get_uri(): string
    vfunc_get_uri_scheme(): string
    vfunc_has_uri_scheme(uri_scheme: string): boolean
    vfunc_hash(): number
    vfunc_is_native(): boolean
    vfunc_make_directory(cancellable: Cancellable | null): boolean
    vfunc_make_directory_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_make_directory_finish(result: AsyncResult): boolean
    vfunc_make_symbolic_link(symlink_value: string, cancellable: Cancellable | null): boolean
    vfunc_measure_disk_usage_finish(result: AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    vfunc_monitor_dir(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor
    vfunc_monitor_file(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor
    vfunc_mount_enclosing_volume(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_mount_enclosing_volume_finish(result: AsyncResult): boolean
    vfunc_mount_mountable(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_mount_mountable_finish(result: AsyncResult): File
    vfunc_move(destination: File, flags: FileCopyFlags, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object): boolean
    vfunc_open_readwrite(cancellable: Cancellable | null): FileIOStream
    vfunc_open_readwrite_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_open_readwrite_finish(res: AsyncResult): FileIOStream
    vfunc_poll_mountable(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_poll_mountable_finish(result: AsyncResult): boolean
    vfunc_prefix_matches(file: File): boolean
    vfunc_query_filesystem_info(attributes: string, cancellable: Cancellable | null): FileInfo
    vfunc_query_filesystem_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_query_filesystem_info_finish(res: AsyncResult): FileInfo
    vfunc_query_info(attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_query_info_finish(res: AsyncResult): FileInfo
    vfunc_query_settable_attributes(cancellable: Cancellable | null): FileAttributeInfoList
    vfunc_query_writable_namespaces(cancellable: Cancellable | null): FileAttributeInfoList
    vfunc_read_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(res: AsyncResult): FileInputStream
    vfunc_read_fn(cancellable: Cancellable | null): FileInputStream
    vfunc_replace(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream
    vfunc_replace_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_replace_finish(res: AsyncResult): FileOutputStream
    vfunc_replace_readwrite(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null): FileIOStream
    vfunc_replace_readwrite_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_replace_readwrite_finish(res: AsyncResult): FileIOStream
    vfunc_resolve_relative_path(relative_path: string): File
    vfunc_set_attribute(attribute: string, type: FileAttributeType, value_p: object | null, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    vfunc_set_attributes_async(info: FileInfo, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_set_attributes_finish(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    vfunc_set_attributes_from_info(info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    vfunc_set_display_name(display_name: string, cancellable: Cancellable | null): File
    vfunc_set_display_name_async(display_name: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_set_display_name_finish(res: AsyncResult): File
    vfunc_start_mountable(flags: DriveStartFlags, start_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_start_mountable_finish(result: AsyncResult): boolean
    vfunc_stop_mountable(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_stop_mountable_finish(result: AsyncResult): boolean
    vfunc_trash(cancellable: Cancellable | null): boolean
    vfunc_trash_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_trash_finish(result: AsyncResult): boolean
    vfunc_unmount_mountable(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_unmount_mountable_finish(result: AsyncResult): boolean
    vfunc_unmount_mountable_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_unmount_mountable_with_operation_finish(result: AsyncResult): boolean
}
export interface File_Static {
    name: string
}
export declare class File_Static {
    new_for_commandline_arg(arg: string): File
    new_for_commandline_arg_and_cwd(arg: string, cwd: string): File
    new_for_path(path: string): File
    new_for_uri(uri: string): File
    new_tmp(tmpl: string): [ /* returnType */ File, /* iostream */ FileIOStream ]
    parse_name(parse_name: string): File
}
export declare var File: File_Static
export interface FileDescriptorBased {
    /* Methods of Gio.FileDescriptorBased */
    get_fd(): number
    /* Virtual methods of Gio.FileDescriptorBased */
    vfunc_get_fd(): number
}
export interface FileDescriptorBased_Static {
    name: string
}
export declare var FileDescriptorBased: FileDescriptorBased_Static
export interface Icon {
    /* Methods of Gio.Icon */
    equal(icon2: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Virtual methods of Gio.Icon */
    vfunc_equal(icon2: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
}
export interface Icon_Static {
    name: string
}
export declare class Icon_Static {
    deserialize(value: GLib.Variant): Icon
    hash(icon: object): number
    new_for_string(str: string): Icon
}
export declare var Icon: Icon_Static
export interface Initable {
    /* Methods of Gio.Initable */
    init(cancellable: Cancellable | null): boolean
    /* Virtual methods of Gio.Initable */
    vfunc_init(cancellable: Cancellable | null): boolean
}
export interface Initable_Static {
    name: string
}
export declare class Initable_Static {
    newv(object_type: number, parameters: GObject.Parameter[], cancellable: Cancellable | null): GObject.Object
}
export declare var Initable: Initable_Static
export interface ListModel {
    /* Methods of Gio.ListModel */
    get_item_type(): number
    get_n_items(): number
    get_object(position: number): GObject.Object | null
    items_changed(position: number, removed: number, added: number): void
    /* Virtual methods of Gio.ListModel */
    vfunc_get_item_type(): number
    vfunc_get_n_items(): number
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: ((obj: ListModel, position: number, removed: number, added: number) => void))
}
export interface ListModel_Static {
    name: string
}
export declare var ListModel: ListModel_Static
export interface LoadableIcon {
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    load_finish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of Gio.LoadableIcon */
    vfunc_load(size: number, cancellable: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_load_finish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
}
export interface LoadableIcon_Static {
    name: string
}
export declare var LoadableIcon: LoadableIcon_Static
export interface Mount {
    /* Methods of Gio.Mount */
    can_eject(): boolean
    can_unmount(): boolean
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    eject_finish(result: AsyncResult): boolean
    eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    eject_with_operation_finish(result: AsyncResult): boolean
    get_default_location(): File
    get_drive(): Drive
    get_icon(): Icon
    get_name(): string
    get_root(): File
    get_sort_key(): string
    get_symbolic_icon(): Icon
    get_uuid(): string
    get_volume(): Volume
    guess_content_type(force_rescan: boolean, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    guess_content_type_finish(result: AsyncResult): string[]
    guess_content_type_sync(force_rescan: boolean, cancellable: Cancellable | null): string[]
    is_shadowed(): boolean
    remount(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    remount_finish(result: AsyncResult): boolean
    shadow(): void
    unmount(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    unmount_finish(result: AsyncResult): boolean
    unmount_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    unmount_with_operation_finish(result: AsyncResult): boolean
    unshadow(): void
    /* Virtual methods of Gio.Mount */
    vfunc_can_eject(): boolean
    vfunc_can_unmount(): boolean
    vfunc_changed(): void
    vfunc_eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_eject_finish(result: AsyncResult): boolean
    vfunc_eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean
    vfunc_get_default_location(): File
    vfunc_get_drive(): Drive
    vfunc_get_icon(): Icon
    vfunc_get_name(): string
    vfunc_get_root(): File
    vfunc_get_sort_key(): string
    vfunc_get_symbolic_icon(): Icon
    vfunc_get_uuid(): string
    vfunc_get_volume(): Volume
    vfunc_guess_content_type(force_rescan: boolean, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_guess_content_type_finish(result: AsyncResult): string[]
    vfunc_guess_content_type_sync(force_rescan: boolean, cancellable: Cancellable | null): string[]
    vfunc_pre_unmount(): void
    vfunc_remount(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_remount_finish(result: AsyncResult): boolean
    vfunc_unmount(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_unmount_finish(result: AsyncResult): boolean
    vfunc_unmount_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_unmount_with_operation_finish(result: AsyncResult): boolean
    vfunc_unmounted(): void
    /* Signals of Gio.Mount */
    connect(sigName: "changed", callback: ((obj: Mount) => void))
    connect(sigName: "pre-unmount", callback: ((obj: Mount) => void))
    connect(sigName: "unmounted", callback: ((obj: Mount) => void))
}
export interface Mount_Static {
    name: string
}
export declare var Mount: Mount_Static
export interface NetworkMonitor {
    /* Properties of Gio.NetworkMonitor */
    readonly connectivity:NetworkConnectivity
    readonly network_available:boolean
    readonly network_metered:boolean
    /* Methods of Gio.NetworkMonitor */
    can_reach(connectable: SocketConnectable, cancellable: Cancellable | null): boolean
    can_reach_async(connectable: SocketConnectable, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    can_reach_finish(result: AsyncResult): boolean
    get_connectivity(): NetworkConnectivity
    get_network_available(): boolean
    get_network_metered(): boolean
    /* Virtual methods of Gio.NetworkMonitor */
    vfunc_can_reach(connectable: SocketConnectable, cancellable: Cancellable | null): boolean
    vfunc_can_reach_async(connectable: SocketConnectable, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_can_reach_finish(result: AsyncResult): boolean
    vfunc_network_changed(available: boolean): void
    /* Signals of Gio.NetworkMonitor */
    connect(sigName: "network-changed", callback: ((obj: NetworkMonitor, available: boolean) => void))
}
export interface NetworkMonitor_Static {
    name: string
}
export declare class NetworkMonitor_Static {
    get_default(): NetworkMonitor
}
export declare var NetworkMonitor: NetworkMonitor_Static
export interface PollableInputStream {
    /* Methods of Gio.PollableInputStream */
    can_poll(): boolean
    create_source(cancellable: Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of Gio.PollableInputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable: Cancellable | null): GLib.Source
    vfunc_is_readable(): boolean
    vfunc_read_nonblocking(buffer: Gjs.byteArray.ByteArray[]): number
}
export interface PollableInputStream_Static {
    name: string
}
export declare var PollableInputStream: PollableInputStream_Static
export interface PollableOutputStream {
    /* Methods of Gio.PollableOutputStream */
    can_poll(): boolean
    create_source(cancellable: Cancellable | null): GLib.Source
    is_writable(): boolean
    write_nonblocking(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of Gio.PollableOutputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable: Cancellable | null): GLib.Source
    vfunc_is_writable(): boolean
    vfunc_write_nonblocking(buffer: Gjs.byteArray.ByteArray[]): number
}
export interface PollableOutputStream_Static {
    name: string
}
export declare var PollableOutputStream: PollableOutputStream_Static
export interface Proxy {
    /* Methods of Gio.Proxy */
    connect(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null): IOStream
    connect_async(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): IOStream
    supports_hostname(): boolean
    /* Virtual methods of Gio.Proxy */
    vfunc_connect(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null): IOStream
    vfunc_connect_async(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_connect_finish(result: AsyncResult): IOStream
    vfunc_supports_hostname(): boolean
}
export interface Proxy_Static {
    name: string
}
export declare class Proxy_Static {
    get_default_for_protocol(protocol: string): Proxy
}
export declare var Proxy: Proxy_Static
export interface ProxyResolver {
    /* Methods of Gio.ProxyResolver */
    is_supported(): boolean
    lookup(uri: string, cancellable: Cancellable | null): string[]
    lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_finish(result: AsyncResult): string[]
    /* Virtual methods of Gio.ProxyResolver */
    vfunc_is_supported(): boolean
    vfunc_lookup(uri: string, cancellable: Cancellable | null): string[]
    vfunc_lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_finish(result: AsyncResult): string[]
}
export interface ProxyResolver_Static {
    name: string
}
export declare class ProxyResolver_Static {
    get_default(): ProxyResolver
}
export declare var ProxyResolver: ProxyResolver_Static
export interface RemoteActionGroup {
    /* Methods of Gio.RemoteActionGroup */
    activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    /* Virtual methods of Gio.RemoteActionGroup */
    vfunc_activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    vfunc_change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
}
export interface RemoteActionGroup_Static {
    name: string
}
export declare var RemoteActionGroup: RemoteActionGroup_Static
export interface Seekable {
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable: Cancellable | null): boolean
    /* Virtual methods of Gio.Seekable */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable: Cancellable | null): boolean
}
export interface Seekable_Static {
    name: string
}
export declare var Seekable: Seekable_Static
export interface SocketConnectable {
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.SocketConnectable */
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
}
export interface SocketConnectable_Static {
    name: string
}
export declare var SocketConnectable: SocketConnectable_Static
export interface TlsBackend {
    /* Methods of Gio.TlsBackend */
    get_certificate_type(): number
    get_client_connection_type(): number
    get_default_database(): TlsDatabase
    get_file_database_type(): number
    get_server_connection_type(): number
    supports_tls(): boolean
    /* Virtual methods of Gio.TlsBackend */
    vfunc_get_default_database(): TlsDatabase
    vfunc_supports_tls(): boolean
}
export interface TlsBackend_Static {
    name: string
}
export declare class TlsBackend_Static {
    get_default(): TlsBackend
}
export declare var TlsBackend: TlsBackend_Static
export interface TlsClientConnection {
    /* Properties of Gio.TlsClientConnection */
    readonly accepted_cas:GLib.List
    server_identity:SocketConnectable
    use_ssl3:boolean
    validation_flags:TlsCertificateFlags
    /* Methods of Gio.TlsClientConnection */
    copy_session_state(source: TlsClientConnection): void
    get_accepted_cas(): GLib.List
    get_server_identity(): SocketConnectable
    get_use_ssl3(): boolean
    get_validation_flags(): TlsCertificateFlags
    set_server_identity(identity: SocketConnectable): void
    set_use_ssl3(use_ssl3: boolean): void
    set_validation_flags(flags: TlsCertificateFlags): void
    /* Virtual methods of Gio.TlsClientConnection */
    vfunc_copy_session_state(source: TlsClientConnection): void
}
export interface TlsClientConnection_Static {
    name: string
}
export declare class TlsClientConnection_Static {
    new(base_io_stream: IOStream, server_identity: SocketConnectable | null): TlsClientConnection
}
export declare var TlsClientConnection: TlsClientConnection_Static
export interface TlsFileDatabase {
    /* Properties of Gio.TlsFileDatabase */
    anchors:string
}
export interface TlsFileDatabase_Static {
    name: string
}
export declare class TlsFileDatabase_Static {
    new(anchors: string): TlsFileDatabase
}
export declare var TlsFileDatabase: TlsFileDatabase_Static
export interface TlsServerConnection {
    /* Properties of Gio.TlsServerConnection */
    authentication_mode:TlsAuthenticationMode
}
export interface TlsServerConnection_Static {
    name: string
}
export declare class TlsServerConnection_Static {
    new(base_io_stream: IOStream, certificate: TlsCertificate | null): TlsServerConnection
}
export declare var TlsServerConnection: TlsServerConnection_Static
export interface Volume {
    /* Methods of Gio.Volume */
    can_eject(): boolean
    can_mount(): boolean
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    eject_finish(result: AsyncResult): boolean
    eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    eject_with_operation_finish(result: AsyncResult): boolean
    enumerate_identifiers(): string[]
    get_activation_root(): File | null
    get_drive(): Drive
    get_icon(): Icon
    get_identifier(kind: string): string
    get_mount(): Mount
    get_name(): string
    get_sort_key(): string
    get_symbolic_icon(): Icon
    get_uuid(): string
    mount(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    mount_finish(result: AsyncResult): boolean
    should_automount(): boolean
    /* Virtual methods of Gio.Volume */
    vfunc_can_eject(): boolean
    vfunc_can_mount(): boolean
    vfunc_changed(): void
    vfunc_eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_eject_finish(result: AsyncResult): boolean
    vfunc_eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean
    vfunc_enumerate_identifiers(): string[]
    vfunc_get_activation_root(): File | null
    vfunc_get_drive(): Drive
    vfunc_get_icon(): Icon
    vfunc_get_identifier(kind: string): string
    vfunc_get_mount(): Mount
    vfunc_get_name(): string
    vfunc_get_sort_key(): string
    vfunc_get_symbolic_icon(): Icon
    vfunc_get_uuid(): string
    vfunc_mount_finish(result: AsyncResult): boolean
    vfunc_mount_fn(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_removed(): void
    vfunc_should_automount(): boolean
    /* Signals of Gio.Volume */
    connect(sigName: "changed", callback: ((obj: Volume) => void))
    connect(sigName: "removed", callback: ((obj: Volume) => void))
}
export interface Volume_Static {
    name: string
}
export declare var Volume: Volume_Static
export interface AppInfoMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export interface AppInfoMonitor {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppInfoMonitor */
    connect(sigName: "changed", callback: ((obj: AppInfoMonitor) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: AppInfoMonitor, pspec: GObject.ParamSpec) => void))
}
export interface AppInfoMonitor_Static {
    name: string
    new (config: AppInfoMonitor_ConstructProps): AppInfoMonitor
}
export declare class AppInfoMonitor_Static {
    get(): AppInfoMonitor
}
export declare var AppInfoMonitor: AppInfoMonitor_Static
export interface AppLaunchContext_ConstructProps extends GObject.Object_ConstructProps {
}
export interface AppLaunchContext {
    /* Fields of Gio.AppLaunchContext */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.AppLaunchContext */
    get_display(info: AppInfo, files: GLib.List): string
    get_environment(): string[]
    get_startup_notify_id(info: AppInfo, files: GLib.List): string
    launch_failed(startup_notify_id: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.AppLaunchContext */
    vfunc_get_display(info: AppInfo, files: GLib.List): string
    vfunc_get_startup_notify_id(info: AppInfo, files: GLib.List): string
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launched(info: AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: ((obj: AppLaunchContext, startup_notify_id: string) => void))
    connect(sigName: "launched", callback: ((obj: AppLaunchContext, info: AppInfo, platform_data: GLib.Variant) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: AppLaunchContext, pspec: GObject.ParamSpec) => void))
}
export interface AppLaunchContext_Static {
    name: string
    new (config: AppLaunchContext_ConstructProps): AppLaunchContext
}
export declare class AppLaunchContext_Static {
    new(): AppLaunchContext
}
export declare var AppLaunchContext: AppLaunchContext_Static
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
    action_group?:ActionGroup
    application_id?:string
    flags?:ApplicationFlags
    inactivity_timeout?:number
    resource_base_path?:string
}
export interface Application {
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
    add_main_option(long_name: string, short_name: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, arg_description: string | null): void
    add_main_option_entries(entries: GLib.OptionEntry[]): void
    add_option_group(group: GLib.OptionGroup): void
    bind_busy_property(object: GObject.Object, property: string): void
    get_application_id(): string
    get_dbus_connection(): DBusConnection
    get_dbus_object_path(): string
    get_flags(): ApplicationFlags
    get_inactivity_timeout(): number
    get_is_busy(): boolean
    get_is_registered(): boolean
    get_is_remote(): boolean
    get_resource_base_path(): string | null
    hold(): void
    mark_busy(): void
    open(files: File[], hint: string): void
    quit(): void
    register(cancellable: Cancellable | null): boolean
    release(): void
    run(argv: string[] | null): number
    send_notification(id: string | null, notification: Notification): void
    set_action_group(action_group: ActionGroup | null): void
    set_application_id(application_id: string | null): void
    set_default(): void
    set_flags(flags: ApplicationFlags): void
    set_inactivity_timeout(inactivity_timeout: number): void
    set_resource_base_path(resource_path: string | null): void
    unbind_busy_property(object: GObject.Object, property: string): void
    unmark_busy(): void
    withdraw_notification(id: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Application */
    vfunc_activate(): void
    vfunc_add_platform_data(builder: GLib.VariantBuilder): void
    vfunc_after_emit(platform_data: GLib.Variant): void
    vfunc_before_emit(platform_data: GLib.Variant): void
    vfunc_command_line(command_line: ApplicationCommandLine): number
    vfunc_dbus_register(connection: DBusConnection, object_path: string): boolean
    vfunc_dbus_unregister(connection: DBusConnection, object_path: string): void
    vfunc_handle_local_options(options: GLib.VariantDict): number
    vfunc_local_command_line(arguments_: string[]): [ /* returnType */ boolean, /* exit_status */ number ]
    vfunc_open(files: File[], hint: string): void
    vfunc_quit_mainloop(): void
    vfunc_run_mainloop(): void
    vfunc_shutdown(): void
    vfunc_startup(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Application */
    connect(sigName: "activate", callback: ((obj: Application) => void))
    connect(sigName: "command-line", callback: ((obj: Application, command_line: ApplicationCommandLine) => number))
    connect(sigName: "handle-local-options", callback: ((obj: Application, options: GLib.VariantDict) => number))
    connect(sigName: "open", callback: ((obj: Application, files: File[], hint: string) => void))
    connect(sigName: "shutdown", callback: ((obj: Application) => void))
    connect(sigName: "startup", callback: ((obj: Application) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::action-group", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::application-id", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::flags", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::inactivity-timeout", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-busy", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-registered", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-remote", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::resource-base-path", callback: ((obj: Application, pspec: GObject.ParamSpec) => void))
}
export interface Application_Static {
    name: string
    new (config: Application_ConstructProps): Application
}
export declare class Application_Static {
    new(application_id: string | null, flags: ApplicationFlags): Application
    get_default(): Application
    id_is_valid(application_id: string): boolean
}
export declare var Application: Application_Static
export interface ApplicationCommandLine_ConstructProps extends GObject.Object_ConstructProps {
    "arguments"?:GLib.Variant
    options?:GLib.Variant
    platform_data?:GLib.Variant
}
export interface ApplicationCommandLine {
    /* Properties of Gio.ApplicationCommandLine */
    readonly is_remote:boolean
    /* Fields of Gio.ApplicationCommandLine */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ApplicationCommandLine */
    create_file_for_arg(arg: string): File
    get_arguments(): [ /* returnType */ string[], /* argc */ number | null ]
    get_cwd(): string
    get_environ(): string[]
    get_exit_status(): number
    get_is_remote(): boolean
    get_options_dict(): GLib.VariantDict
    get_platform_data(): GLib.Variant | null
    get_stdin(): InputStream
    getenv(name: string): string
    set_exit_status(exit_status: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.ApplicationCommandLine */
    vfunc_get_stdin(): InputStream
    vfunc_print_literal(message: string): void
    vfunc_printerr_literal(message: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-remote", callback: ((obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void))
}
export interface ApplicationCommandLine_Static {
    name: string
    new (config: ApplicationCommandLine_ConstructProps): ApplicationCommandLine
}
export declare var ApplicationCommandLine: ApplicationCommandLine_Static
export interface BufferedInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    buffer_size?:number
}
export interface BufferedInputStream {
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
    fill(count: number, cancellable: Cancellable | null): number
    fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    fill_finish(result: AsyncResult): number
    get_available(): number
    get_buffer_size(): number
    peek(buffer: Gjs.byteArray.ByteArray[], offset: number): number
    peek_buffer(): [ /* returnType */ Gjs.byteArray.ByteArray[], /* count */ number ]
    read_byte(cancellable: Cancellable | null): number
    set_buffer_size(size: number): void
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    read_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.BufferedInputStream */
    vfunc_fill(count: number, cancellable: Cancellable | null): number
    vfunc_fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_fill_finish(result: AsyncResult): number
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::buffer-size", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::close-base-stream", callback: ((obj: BufferedInputStream, pspec: GObject.ParamSpec) => void))
}
export interface BufferedInputStream_Static {
    name: string
    new (config: BufferedInputStream_ConstructProps): BufferedInputStream
}
export declare class BufferedInputStream_Static {
    new(base_stream: InputStream): BufferedInputStream
    new_sized(base_stream: InputStream, size: number): BufferedInputStream
}
export declare var BufferedInputStream: BufferedInputStream_Static
export interface BufferedOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    auto_grow?:boolean
    buffer_size?:number
}
export interface BufferedOutputStream {
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
    get_auto_grow(): boolean
    get_buffer_size(): number
    set_auto_grow(auto_grow: boolean): void
    set_buffer_size(size: number): void
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::auto-grow", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::buffer-size", callback: ((obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void))
}
export interface BufferedOutputStream_Static {
    name: string
    new (config: BufferedOutputStream_ConstructProps): BufferedOutputStream
}
export declare class BufferedOutputStream_Static {
    new(base_stream: OutputStream): BufferedOutputStream
    new_sized(base_stream: OutputStream, size: number): BufferedOutputStream
}
export declare var BufferedOutputStream: BufferedOutputStream_Static
export interface BytesIcon_ConstructProps extends GObject.Object_ConstructProps {
    bytes?:Gjs.byteArray.ByteArray
}
export interface BytesIcon {
    /* Properties of Gio.BytesIcon */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.BytesIcon */
    get_bytes(): Gjs.byteArray.ByteArray
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BytesIcon, pspec: GObject.ParamSpec) => void))
}
export interface BytesIcon_Static {
    name: string
    new (config: BytesIcon_ConstructProps): BytesIcon
}
export declare class BytesIcon_Static {
    new(bytes: Gjs.byteArray.ByteArray): BytesIcon
}
export declare var BytesIcon: BytesIcon_Static
export interface Cancellable_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Cancellable {
    /* Fields of Gio.Cancellable */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Cancellable */
    cancel(): void
    connect(callback: GObject.Callback, data: object, data_destroy_func: GLib.DestroyNotify | null): number
    disconnect(handler_id: number): void
    get_fd(): number
    is_cancelled(): boolean
    make_pollfd(pollfd: GLib.PollFD): boolean
    pop_current(): void
    push_current(): void
    release_fd(): void
    reset(): void
    set_error_if_cancelled(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Cancellable */
    vfunc_cancelled(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Cancellable */
    connect(sigName: "cancelled", callback: ((obj: Cancellable) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Cancellable, pspec: GObject.ParamSpec) => void))
}
export interface Cancellable_Static {
    name: string
    new (config: Cancellable_ConstructProps): Cancellable
}
export declare class Cancellable_Static {
    new(): Cancellable
    get_current(): Cancellable | null
}
export declare var Cancellable: Cancellable_Static
export interface CharsetConverter_ConstructProps extends GObject.Object_ConstructProps {
    from_charset?:string
    to_charset?:string
    use_fallback?:boolean
}
export interface CharsetConverter {
    /* Properties of Gio.CharsetConverter */
    use_fallback:boolean
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.CharsetConverter */
    get_num_fallbacks(): number
    get_use_fallback(): boolean
    set_use_fallback(use_fallback: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: CharsetConverter, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::use-fallback", callback: ((obj: CharsetConverter, pspec: GObject.ParamSpec) => void))
}
export interface CharsetConverter_Static {
    name: string
    new (config: CharsetConverter_ConstructProps): CharsetConverter
}
export declare class CharsetConverter_Static {
    new(to_charset: string, from_charset: string): CharsetConverter
}
export declare var CharsetConverter: CharsetConverter_Static
export interface ConverterInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    converter?:Converter
}
export interface ConverterInputStream {
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
    get_converter(): Converter
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    read_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ConverterInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::close-base-stream", callback: ((obj: ConverterInputStream, pspec: GObject.ParamSpec) => void))
}
export interface ConverterInputStream_Static {
    name: string
    new (config: ConverterInputStream_ConstructProps): ConverterInputStream
}
export declare class ConverterInputStream_Static {
    new(base_stream: InputStream, converter: Converter): ConverterInputStream
}
export declare var ConverterInputStream: ConverterInputStream_Static
export interface ConverterOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    converter?:Converter
}
export interface ConverterOutputStream {
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
    get_converter(): Converter
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ConverterOutputStream, pspec: GObject.ParamSpec) => void))
}
export interface ConverterOutputStream_Static {
    name: string
    new (config: ConverterOutputStream_ConstructProps): ConverterOutputStream
}
export declare class ConverterOutputStream_Static {
    new(base_stream: OutputStream, converter: Converter): ConverterOutputStream
}
export declare var ConverterOutputStream: ConverterOutputStream_Static
export interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Credentials {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Credentials */
    get_unix_pid(): number
    get_unix_user(): number
    is_same_user(other_credentials: Credentials): boolean
    set_native(native_type: CredentialsType, native: object): void
    set_unix_user(uid: number): boolean
    to_string(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Credentials, pspec: GObject.ParamSpec) => void))
}
export interface Credentials_Static {
    name: string
    new (config: Credentials_ConstructProps): Credentials
}
export declare class Credentials_Static {
    new(): Credentials
}
export declare var Credentials: Credentials_Static
export interface DBusActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export interface DBusActionGroup {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusActionGroup, pspec: GObject.ParamSpec) => void))
}
export interface DBusActionGroup_Static {
    name: string
    new (config: DBusActionGroup_ConstructProps): DBusActionGroup
}
export declare class DBusActionGroup_Static {
    get(connection: DBusConnection, bus_name: string, object_path: string): DBusActionGroup
}
export declare var DBusActionGroup: DBusActionGroup_Static
export interface DBusAuthObserver_ConstructProps extends GObject.Object_ConstructProps {
}
export interface DBusAuthObserver {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusAuthObserver */
    allow_mechanism(mechanism: string): boolean
    authorize_authenticated_peer(stream: IOStream, credentials: Credentials | null): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusAuthObserver */
    connect(sigName: "allow-mechanism", callback: ((obj: DBusAuthObserver, mechanism: string) => boolean))
    connect(sigName: "authorize-authenticated-peer", callback: ((obj: DBusAuthObserver, stream: IOStream, credentials: Credentials | null) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusAuthObserver, pspec: GObject.ParamSpec) => void))
}
export interface DBusAuthObserver_Static {
    name: string
    new (config: DBusAuthObserver_ConstructProps): DBusAuthObserver
}
export declare class DBusAuthObserver_Static {
    new(): DBusAuthObserver
}
export declare var DBusAuthObserver: DBusAuthObserver_Static
export interface DBusConnection_ConstructProps extends GObject.Object_ConstructProps {
    address?:string
    authentication_observer?:DBusAuthObserver
    exit_on_close?:boolean
    flags?:DBusConnectionFlags
    guid?:string
    stream?:IOStream
}
export interface DBusConnection {
    /* Properties of Gio.DBusConnection */
    readonly capabilities:DBusCapabilityFlags
    readonly closed:boolean
    exit_on_close:boolean
    readonly unique_name:string
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusConnection */
    add_filter(filter_function: DBusMessageFilterFunction, user_data: object, user_data_free_func: GLib.DestroyNotify): number
    call(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    call_finish(res: AsyncResult): GLib.Variant
    call_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null): GLib.Variant
    call_with_unix_fd_list(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    call_with_unix_fd_list_finish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    call_with_unix_fd_list_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    close(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(res: AsyncResult): boolean
    close_sync(cancellable: Cancellable | null): boolean
    emit_signal(destination_bus_name: string | null, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant | null): boolean
    export_action_group(object_path: string, action_group: ActionGroup): number
    export_menu_model(object_path: string, menu: MenuModel): number
    flush(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(res: AsyncResult): boolean
    flush_sync(cancellable: Cancellable | null): boolean
    get_capabilities(): DBusCapabilityFlags
    get_exit_on_close(): boolean
    get_guid(): string
    get_last_serial(): number
    get_peer_credentials(): Credentials
    get_stream(): IOStream
    get_unique_name(): string
    is_closed(): boolean
    register_object_with_closures(object_path: string, interface_info: DBusInterfaceInfo, method_call_closure: Function, get_property_closure: Function, set_property_closure: Function): number
    register_subtree(object_path: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, user_data: object, user_data_free_func: GLib.DestroyNotify): number
    remove_filter(filter_id: number): void
    send_message(message: DBusMessage, flags: DBusSendMessageFlags): [ /* returnType */ boolean, /* out_serial */ number | null ]
    send_message_with_reply(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): /* out_serial */ number | null
    send_message_with_reply_finish(res: AsyncResult): DBusMessage
    send_message_with_reply_sync(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, cancellable: Cancellable | null): [ /* returnType */ DBusMessage, /* out_serial */ number | null ]
    set_exit_on_close(exit_on_close: boolean): void
    signal_subscribe(sender: string | null, interface_name: string | null, member: string | null, object_path: string | null, arg0: string | null, flags: DBusSignalFlags, callback: DBusSignalCallback, user_data: object, user_data_free_func: GLib.DestroyNotify | null): number
    signal_unsubscribe(subscription_id: number): void
    start_message_processing(): void
    unexport_action_group(export_id: number): void
    unexport_menu_model(export_id: number): void
    unregister_object(registration_id: number): boolean
    unregister_subtree(registration_id: number): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusConnection */
    connect(sigName: "closed", callback: ((obj: DBusConnection, remote_peer_vanished: boolean, error: GLib.Error | null) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::capabilities", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::exit-on-close", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::unique-name", callback: ((obj: DBusConnection, pspec: GObject.ParamSpec) => void))
}
export interface DBusConnection_Static {
    name: string
    new (config: DBusConnection_ConstructProps): DBusConnection
}
export declare class DBusConnection_Static {
    new_finish(res: AsyncResult): DBusConnection
    new_for_address_finish(res: AsyncResult): DBusConnection
    new_for_address_sync(address: string, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null): DBusConnection
    new_sync(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null): DBusConnection
    new(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    new_for_address(address: string, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
}
export declare var DBusConnection: DBusConnection_Static
export interface DBusInterfaceSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    g_flags?:DBusInterfaceSkeletonFlags
}
export interface DBusInterfaceSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags:DBusInterfaceSkeletonFlags
    /* Fields of Gio.DBusInterfaceSkeleton */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): DBusConnection
    get_connections(): GLib.List
    get_flags(): DBusInterfaceSkeletonFlags
    get_info(): DBusInterfaceInfo
    get_object_path(): string
    get_properties(): GLib.Variant
    has_connection(connection: DBusConnection): boolean
    set_flags(flags: DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: DBusConnection): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: DBusMethodInvocation): boolean
    vfunc_get_info(): DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((obj: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::g-flags", callback: ((obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void))
}
export interface DBusInterfaceSkeleton_Static {
    name: string
    new (config: DBusInterfaceSkeleton_ConstructProps): DBusInterfaceSkeleton
}
export declare var DBusInterfaceSkeleton: DBusInterfaceSkeleton_Static
export interface DBusMenuModel_ConstructProps extends MenuModel_ConstructProps {
}
export interface DBusMenuModel {
    /* Fields of Gio.MenuModel */
    parent_instance:GObject.Object
    priv:MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number): /* attributes */ GLib.HashTable
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number): /* links */ GLib.HashTable
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((obj: DBusMenuModel, position: number, removed: number, added: number) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusMenuModel, pspec: GObject.ParamSpec) => void))
}
export interface DBusMenuModel_Static {
    name: string
    new (config: DBusMenuModel_ConstructProps): DBusMenuModel
}
export declare class DBusMenuModel_Static {
    get(connection: DBusConnection, bus_name: string, object_path: string): DBusMenuModel
}
export declare var DBusMenuModel: DBusMenuModel_Static
export interface DBusMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export interface DBusMessage {
    /* Properties of Gio.DBusMessage */
    readonly locked:boolean
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusMessage */
    copy(): DBusMessage
    get_arg0(): string
    get_body(): GLib.Variant
    get_byte_order(): DBusMessageByteOrder
    get_destination(): string
    get_error_name(): string
    get_flags(): DBusMessageFlags
    get_header(header_field: DBusMessageHeaderField): GLib.Variant
    get_header_fields(): Gjs.byteArray.ByteArray[]
    get_interface(): string
    get_locked(): boolean
    get_member(): string
    get_message_type(): DBusMessageType
    get_num_unix_fds(): number
    get_path(): string
    get_reply_serial(): number
    get_sender(): string
    get_serial(): number
    get_signature(): string
    get_unix_fd_list(): UnixFDList
    lock(): void
    new_method_error_literal(error_name: string, error_message: string): DBusMessage
    new_method_reply(): DBusMessage
    print(indent: number): string
    set_body(body: GLib.Variant): void
    set_byte_order(byte_order: DBusMessageByteOrder): void
    set_destination(value: string): void
    set_error_name(value: string): void
    set_flags(flags: DBusMessageFlags): void
    set_header(header_field: DBusMessageHeaderField, value: GLib.Variant | null): void
    set_interface(value: string): void
    set_member(value: string): void
    set_message_type(type: DBusMessageType): void
    set_num_unix_fds(value: number): void
    set_path(value: string): void
    set_reply_serial(value: number): void
    set_sender(value: string): void
    set_serial(serial: number): void
    set_signature(value: string): void
    set_unix_fd_list(fd_list: UnixFDList | null): void
    to_blob(capabilities: DBusCapabilityFlags): [ /* returnType */ Gjs.byteArray.ByteArray[], /* out_size */ number ]
    to_gerror(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusMessage, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::locked", callback: ((obj: DBusMessage, pspec: GObject.ParamSpec) => void))
}
export interface DBusMessage_Static {
    name: string
    new (config: DBusMessage_ConstructProps): DBusMessage
}
export declare class DBusMessage_Static {
    new(): DBusMessage
    new_from_blob(blob: Gjs.byteArray.ByteArray[], blob_len: number, capabilities: DBusCapabilityFlags): DBusMessage
    new_method_call(name: string | null, path: string, interface_: string | null, method: string): DBusMessage
    new_signal(path: string, interface_: string, signal: string): DBusMessage
    bytes_needed(blob: Gjs.byteArray.ByteArray[]): number
}
export declare var DBusMessage: DBusMessage_Static
export interface DBusMethodInvocation_ConstructProps extends GObject.Object_ConstructProps {
}
export interface DBusMethodInvocation {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusMethodInvocation */
    get_connection(): DBusConnection
    get_interface_name(): string
    get_message(): DBusMessage
    get_method_info(): DBusMethodInfo
    get_method_name(): string
    get_object_path(): string
    get_parameters(): GLib.Variant
    get_property_info(): DBusPropertyInfo
    get_sender(): string
    return_dbus_error(error_name: string, error_message: string): void
    return_error_literal(domain: GLib.Quark, code: number, message: string): void
    return_gerror(error: GLib.Error): void
    return_value(parameters: GLib.Variant | null): void
    return_value_with_unix_fd_list(parameters: GLib.Variant | null, fd_list: UnixFDList | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusMethodInvocation, pspec: GObject.ParamSpec) => void))
}
export interface DBusMethodInvocation_Static {
    name: string
    new (config: DBusMethodInvocation_ConstructProps): DBusMethodInvocation
}
export declare var DBusMethodInvocation: DBusMethodInvocation_Static
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
export interface DBusObjectManagerClient {
    /* Properties of Gio.DBusObjectManagerClient */
    readonly name_owner:string
    /* Fields of Gio.DBusObjectManagerClient */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerClient */
    get_connection(): DBusConnection
    get_flags(): DBusObjectManagerClientFlags
    get_name(): string
    get_name_owner(): string | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.DBusObjectManagerClient */
    vfunc_interface_proxy_properties_changed(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_interface_proxy_signal(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: ((obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void))
    connect(sigName: "interface-proxy-signal", callback: ((obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::name-owner", callback: ((obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void))
}
export interface DBusObjectManagerClient_Static {
    name: string
    new (config: DBusObjectManagerClient_ConstructProps): DBusObjectManagerClient
}
export declare class DBusObjectManagerClient_Static {
    new_finish(res: AsyncResult): DBusObjectManagerClient
    new_for_bus_finish(res: AsyncResult): DBusObjectManagerClient
    new_for_bus_sync(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null): DBusObjectManagerClient
    new_sync(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null): DBusObjectManagerClient
    new(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    new_for_bus(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
}
export declare var DBusObjectManagerClient: DBusObjectManagerClient_Static
export interface DBusObjectManagerServer_ConstructProps extends GObject.Object_ConstructProps {
    connection?:DBusConnection
    object_path?:string
}
export interface DBusObjectManagerServer {
    /* Properties of Gio.DBusObjectManagerServer */
    connection:DBusConnection
    /* Fields of Gio.DBusObjectManagerServer */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerServer */
    export(object: DBusObjectSkeleton): void
    export_uniquely(object: DBusObjectSkeleton): void
    get_connection(): DBusConnection
    is_exported(object: DBusObjectSkeleton): boolean
    set_connection(connection: DBusConnection | null): void
    unexport(object_path: string): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::connection", callback: ((obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void))
}
export interface DBusObjectManagerServer_Static {
    name: string
    new (config: DBusObjectManagerServer_ConstructProps): DBusObjectManagerServer
}
export declare class DBusObjectManagerServer_Static {
    new(object_path: string): DBusObjectManagerServer
}
export declare var DBusObjectManagerServer: DBusObjectManagerServer_Static
export interface DBusObjectProxy_ConstructProps extends GObject.Object_ConstructProps {
    g_connection?:DBusConnection
    g_object_path?:string
}
export interface DBusObjectProxy {
    /* Properties of Gio.DBusObjectProxy */
    /* Fields of Gio.DBusObjectProxy */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusObjectProxy */
    get_connection(): DBusConnection
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusObjectProxy, pspec: GObject.ParamSpec) => void))
}
export interface DBusObjectProxy_Static {
    name: string
    new (config: DBusObjectProxy_ConstructProps): DBusObjectProxy
}
export declare class DBusObjectProxy_Static {
    new(connection: DBusConnection, object_path: string): DBusObjectProxy
}
export declare var DBusObjectProxy: DBusObjectProxy_Static
export interface DBusObjectSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    g_object_path?:string
}
export interface DBusObjectSkeleton {
    /* Properties of Gio.DBusObjectSkeleton */
    g_object_path:string
    /* Fields of Gio.DBusObjectSkeleton */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusObjectSkeleton */
    add_interface(interface_: DBusInterfaceSkeleton): void
    flush(): void
    remove_interface(interface_: DBusInterfaceSkeleton): void
    remove_interface_by_name(interface_name: string): void
    set_object_path(object_path: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.DBusObjectSkeleton */
    vfunc_authorize_method(interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: ((obj: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::g-object-path", callback: ((obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void))
}
export interface DBusObjectSkeleton_Static {
    name: string
    new (config: DBusObjectSkeleton_ConstructProps): DBusObjectSkeleton
}
export declare class DBusObjectSkeleton_Static {
    new(object_path: string): DBusObjectSkeleton
}
export declare var DBusObjectSkeleton: DBusObjectSkeleton_Static
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
export interface DBusProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout:number
    g_interface_info:DBusInterfaceInfo
    readonly g_name_owner:string
    /* Fields of Gio.DBusProxy */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    call_finish(res: AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    call_with_unix_fd_list_finish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant
    get_cached_property_names(): string[]
    get_connection(): DBusConnection
    get_default_timeout(): number
    get_flags(): DBusProxyFlags
    get_interface_info(): DBusInterfaceInfo
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string
    get_object_path(): string
    set_cached_property(property_name: string, value: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info: DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((obj: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void))
    connect(sigName: "g-signal", callback: ((obj: DBusProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::g-default-timeout", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::g-interface-info", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::g-name-owner", callback: ((obj: DBusProxy, pspec: GObject.ParamSpec) => void))
}
export interface DBusProxy_Static {
    name: string
    new (config: DBusProxy_ConstructProps): DBusProxy
}
export declare class DBusProxy_Static {
    new_finish(res: AsyncResult): DBusProxy
    new_for_bus_finish(res: AsyncResult): DBusProxy
    new_for_bus_sync(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Cancellable | null): DBusProxy
    new_sync(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Cancellable | null): DBusProxy
    new(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    new_for_bus(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
}
export declare var DBusProxy: DBusProxy_Static
export interface DBusServer_ConstructProps extends GObject.Object_ConstructProps {
    address?:string
    authentication_observer?:DBusAuthObserver
    flags?:DBusServerFlags
    guid?:string
}
export interface DBusServer {
    /* Properties of Gio.DBusServer */
    readonly active:boolean
    readonly client_address:string
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DBusServer */
    get_client_address(): string
    get_flags(): DBusServerFlags
    get_guid(): string
    is_active(): boolean
    start(): void
    stop(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusServer */
    connect(sigName: "new-connection", callback: ((obj: DBusServer, connection: DBusConnection) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::active", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::client-address", callback: ((obj: DBusServer, pspec: GObject.ParamSpec) => void))
}
export interface DBusServer_Static {
    name: string
    new (config: DBusServer_ConstructProps): DBusServer
}
export declare class DBusServer_Static {
    new_sync(address: string, flags: DBusServerFlags, guid: string, observer: DBusAuthObserver | null, cancellable: Cancellable | null): DBusServer
}
export declare var DBusServer: DBusServer_Static
export interface DataInputStream_ConstructProps extends BufferedInputStream_ConstructProps {
    byte_order?:DataStreamByteOrder
    newline_type?:DataStreamNewlineType
}
export interface DataInputStream {
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
    get_byte_order(): DataStreamByteOrder
    get_newline_type(): DataStreamNewlineType
    read_byte(cancellable: Cancellable | null): number
    read_int16(cancellable: Cancellable | null): number
    read_int32(cancellable: Cancellable | null): number
    read_int64(cancellable: Cancellable | null): number
    read_line(cancellable: Cancellable | null): [ /* returnType */ Gjs.byteArray.ByteArray[] | null, /* length */ number ]
    read_line_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_line_finish(result: AsyncResult): [ /* returnType */ Gjs.byteArray.ByteArray[] | null, /* length */ number ]
    read_line_finish_utf8(result: AsyncResult): [ /* returnType */ string | null, /* length */ number ]
    read_line_utf8(cancellable: Cancellable | null): [ /* returnType */ string | null, /* length */ number ]
    read_uint16(cancellable: Cancellable | null): number
    read_uint32(cancellable: Cancellable | null): number
    read_uint64(cancellable: Cancellable | null): number
    read_until(stop_chars: string, cancellable: Cancellable | null): [ /* returnType */ string, /* length */ number ]
    read_until_async(stop_chars: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_until_finish(result: AsyncResult): [ /* returnType */ string, /* length */ number ]
    read_upto(stop_chars: string, stop_chars_len: number, cancellable: Cancellable | null): [ /* returnType */ string, /* length */ number ]
    read_upto_async(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_upto_finish(result: AsyncResult): [ /* returnType */ string, /* length */ number ]
    set_byte_order(order: DataStreamByteOrder): void
    set_newline_type(type: DataStreamNewlineType): void
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable: Cancellable | null): number
    fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    fill_finish(result: AsyncResult): number
    get_available(): number
    get_buffer_size(): number
    peek(buffer: Gjs.byteArray.ByteArray[], offset: number): number
    peek_buffer(): [ /* returnType */ Gjs.byteArray.ByteArray[], /* count */ number ]
    set_buffer_size(size: number): void
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    read_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.BufferedInputStream */
    vfunc_fill(count: number, cancellable: Cancellable | null): number
    vfunc_fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_fill_finish(result: AsyncResult): number
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::byte-order", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::newline-type", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::buffer-size", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::close-base-stream", callback: ((obj: DataInputStream, pspec: GObject.ParamSpec) => void))
}
export interface DataInputStream_Static {
    name: string
    new (config: DataInputStream_ConstructProps): DataInputStream
}
export declare class DataInputStream_Static {
    new(base_stream: InputStream): DataInputStream
}
export declare var DataInputStream: DataInputStream_Static
export interface DataOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    byte_order?:DataStreamByteOrder
}
export interface DataOutputStream {
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
    get_byte_order(): DataStreamByteOrder
    put_byte(data: number, cancellable: Cancellable | null): boolean
    put_int16(data: number, cancellable: Cancellable | null): boolean
    put_int32(data: number, cancellable: Cancellable | null): boolean
    put_int64(data: number, cancellable: Cancellable | null): boolean
    put_string(str: string, cancellable: Cancellable | null): boolean
    put_uint16(data: number, cancellable: Cancellable | null): boolean
    put_uint32(data: number, cancellable: Cancellable | null): boolean
    put_uint64(data: number, cancellable: Cancellable | null): boolean
    set_byte_order(order: DataStreamByteOrder): void
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataOutputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::byte-order", callback: ((obj: DataOutputStream, pspec: GObject.ParamSpec) => void))
}
export interface DataOutputStream_Static {
    name: string
    new (config: DataOutputStream_ConstructProps): DataOutputStream
}
export declare class DataOutputStream_Static {
    new(base_stream: OutputStream): DataOutputStream
}
export declare var DataOutputStream: DataOutputStream_Static
export interface DesktopAppInfo_ConstructProps extends GObject.Object_ConstructProps {
    filename?:string
}
export interface DesktopAppInfo {
    /* Properties of Gio.DesktopAppInfo */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.DesktopAppInfo */
    get_action_name(action_name: string): string
    get_boolean(key: string): boolean
    get_categories(): string
    get_filename(): string
    get_generic_name(): string
    get_is_hidden(): boolean
    get_keywords(): string[]
    get_nodisplay(): boolean
    get_show_in(desktop_env: string | null): boolean
    get_startup_wm_class(): string
    get_string(key: string): string
    has_key(key: string): boolean
    launch_action(action_name: string, launch_context: AppLaunchContext | null): void
    launch_uris_as_manager(uris: GLib.List, launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, user_setup: GLib.SpawnChildSetupFunc | null, user_setup_data: object | null, pid_callback: DesktopAppLaunchCallback | null, pid_callback_data: object | null): boolean
    list_actions(): string[]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void))
}
export interface DesktopAppInfo_Static {
    name: string
    new (config: DesktopAppInfo_ConstructProps): DesktopAppInfo
}
export declare class DesktopAppInfo_Static {
    new(desktop_id: string): DesktopAppInfo
    new_from_filename(filename: string): DesktopAppInfo
    new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo
    get_implementations(interface: string): GLib.List
    search(search_string: string): any
    set_desktop_env(desktop_env: string): void
}
export declare var DesktopAppInfo: DesktopAppInfo_Static
export interface Emblem_ConstructProps extends GObject.Object_ConstructProps {
    icon?:GObject.Object
    origin?:EmblemOrigin
}
export interface Emblem {
    /* Properties of Gio.Emblem */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Emblem */
    get_icon(): Icon
    get_origin(): EmblemOrigin
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Emblem, pspec: GObject.ParamSpec) => void))
}
export interface Emblem_Static {
    name: string
    new (config: Emblem_ConstructProps): Emblem
}
export declare class Emblem_Static {
    new(icon: Icon): Emblem
    new_with_origin(icon: Icon, origin: EmblemOrigin): Emblem
}
export declare var Emblem: Emblem_Static
export interface EmblemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    gicon?:Icon
}
export interface EmblemedIcon {
    /* Properties of Gio.EmblemedIcon */
    /* Fields of Gio.EmblemedIcon */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.EmblemedIcon */
    add_emblem(emblem: Emblem): void
    clear_emblems(): void
    get_emblems(): GLib.List
    get_icon(): Icon
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: EmblemedIcon, pspec: GObject.ParamSpec) => void))
}
export interface EmblemedIcon_Static {
    name: string
    new (config: EmblemedIcon_ConstructProps): EmblemedIcon
}
export declare class EmblemedIcon_Static {
    new(icon: Icon, emblem: Emblem | null): EmblemedIcon
}
export declare var EmblemedIcon: EmblemedIcon_Static
export interface FileEnumerator_ConstructProps extends GObject.Object_ConstructProps {
    container?:File
}
export interface FileEnumerator {
    /* Properties of Gio.FileEnumerator */
    /* Fields of Gio.FileEnumerator */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileEnumerator */
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_child(info: FileInfo): File
    get_container(): File
    has_pending(): boolean
    is_closed(): boolean
    iterate(cancellable: Cancellable | null): [ /* returnType */ boolean, /* out_info */ FileInfo | null, /* out_child */ File | null ]
    next_file(cancellable: Cancellable | null): FileInfo | null
    next_files_async(num_files: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    next_files_finish(result: AsyncResult): GLib.List
    set_pending(pending: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FileEnumerator */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_next_file(cancellable: Cancellable | null): FileInfo | null
    vfunc_next_files_async(num_files: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_next_files_finish(result: AsyncResult): GLib.List
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileEnumerator, pspec: GObject.ParamSpec) => void))
}
export interface FileEnumerator_Static {
    name: string
    new (config: FileEnumerator_ConstructProps): FileEnumerator
}
export declare var FileEnumerator: FileEnumerator_Static
export interface FileIOStream_ConstructProps extends IOStream_ConstructProps {
}
export interface FileIOStream {
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
    get_etag(): string
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FileIOStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_get_etag(): string
    vfunc_query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(size: number, cancellable: Cancellable | null): boolean
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-stream", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::output-stream", callback: ((obj: FileIOStream, pspec: GObject.ParamSpec) => void))
}
export interface FileIOStream_Static {
    name: string
    new (config: FileIOStream_ConstructProps): FileIOStream
}
export declare var FileIOStream: FileIOStream_Static
export interface FileIcon_ConstructProps extends GObject.Object_ConstructProps {
    file?:File
}
export interface FileIcon {
    /* Properties of Gio.FileIcon */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileIcon */
    get_file(): File
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileIcon, pspec: GObject.ParamSpec) => void))
}
export interface FileIcon_Static {
    name: string
    new (config: FileIcon_ConstructProps): FileIcon
}
export declare class FileIcon_Static {
    new(file: File): FileIcon
}
export declare var FileIcon: FileIcon_Static
export interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export interface FileInfo {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileInfo */
    clear_status(): void
    copy_into(dest_info: FileInfo): void
    dup(): FileInfo
    get_attribute_as_string(attribute: string): string
    get_attribute_boolean(attribute: string): boolean
    get_attribute_byte_string(attribute: string): string
    get_attribute_data(attribute: string): [ /* returnType */ boolean, /* type */ FileAttributeType | null, /* value_pp */ object | null, /* status */ FileAttributeStatus | null ]
    get_attribute_int32(attribute: string): number
    get_attribute_int64(attribute: string): number
    get_attribute_object(attribute: string): GObject.Object
    get_attribute_status(attribute: string): FileAttributeStatus
    get_attribute_string(attribute: string): string
    get_attribute_stringv(attribute: string): string[]
    get_attribute_type(attribute: string): FileAttributeType
    get_attribute_uint32(attribute: string): number
    get_attribute_uint64(attribute: string): number
    get_content_type(): string
    get_deletion_date(): GLib.DateTime
    get_display_name(): string
    get_edit_name(): string
    get_etag(): string
    get_file_type(): FileType
    get_icon(): Icon
    get_is_backup(): boolean
    get_is_hidden(): boolean
    get_is_symlink(): boolean
    get_modification_time(): /* result */ GLib.TimeVal
    get_name(): string
    get_size(): number
    get_sort_order(): number
    get_symbolic_icon(): Icon
    get_symlink_target(): string
    has_attribute(attribute: string): boolean
    has_namespace(name_space: string): boolean
    list_attributes(name_space: string): string[] | null
    remove_attribute(attribute: string): void
    set_attribute(attribute: string, type: FileAttributeType, value_p: object): void
    set_attribute_boolean(attribute: string, attr_value: boolean): void
    set_attribute_byte_string(attribute: string, attr_value: string): void
    set_attribute_int32(attribute: string, attr_value: number): void
    set_attribute_int64(attribute: string, attr_value: number): void
    set_attribute_mask(mask: FileAttributeMatcher): void
    set_attribute_object(attribute: string, attr_value: GObject.Object): void
    set_attribute_status(attribute: string, status: FileAttributeStatus): boolean
    set_attribute_string(attribute: string, attr_value: string): void
    set_attribute_stringv(attribute: string, attr_value: string[]): void
    set_attribute_uint32(attribute: string, attr_value: number): void
    set_attribute_uint64(attribute: string, attr_value: number): void
    set_content_type(content_type: string): void
    set_display_name(display_name: string): void
    set_edit_name(edit_name: string): void
    set_file_type(type: FileType): void
    set_icon(icon: Icon): void
    set_is_hidden(is_hidden: boolean): void
    set_is_symlink(is_symlink: boolean): void
    set_modification_time(mtime: GLib.TimeVal): void
    set_name(name: string): void
    set_size(size: number): void
    set_sort_order(sort_order: number): void
    set_symbolic_icon(icon: Icon): void
    set_symlink_target(symlink_target: string): void
    unset_attribute_mask(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileInfo, pspec: GObject.ParamSpec) => void))
}
export interface FileInfo_Static {
    name: string
    new (config: FileInfo_ConstructProps): FileInfo
}
export declare class FileInfo_Static {
    new(): FileInfo
}
export declare var FileInfo: FileInfo_Static
export interface FileInputStream_ConstructProps extends InputStream_ConstructProps {
}
export interface FileInputStream {
    /* Fields of Gio.FileInputStream */
    parent_instance:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileInputStream */
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    read_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FileInputStream */
    vfunc_can_seek(): boolean
    vfunc_query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    vfunc_tell(): number
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileInputStream, pspec: GObject.ParamSpec) => void))
}
export interface FileInputStream_Static {
    name: string
    new (config: FileInputStream_ConstructProps): FileInputStream
}
export declare var FileInputStream: FileInputStream_Static
export interface FileMonitor_ConstructProps extends GObject.Object_ConstructProps {
    rate_limit?:number
}
export interface FileMonitor {
    /* Properties of Gio.FileMonitor */
    readonly cancelled:boolean
    rate_limit:number
    /* Fields of Gio.FileMonitor */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileMonitor */
    cancel(): boolean
    emit_event(child: File, other_file: File, event_type: FileMonitorEvent): void
    is_cancelled(): boolean
    set_rate_limit(limit_msecs: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FileMonitor */
    vfunc_cancel(): boolean
    vfunc_changed(file: File, other_file: File, event_type: FileMonitorEvent): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.FileMonitor */
    connect(sigName: "changed", callback: ((obj: FileMonitor, file: File, other_file: File | null, event_type: FileMonitorEvent) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::cancelled", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::rate-limit", callback: ((obj: FileMonitor, pspec: GObject.ParamSpec) => void))
}
export interface FileMonitor_Static {
    name: string
    new (config: FileMonitor_ConstructProps): FileMonitor
}
export declare var FileMonitor: FileMonitor_Static
export interface FileOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
export interface FileOutputStream {
    /* Fields of Gio.FileOutputStream */
    parent_instance:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FileOutputStream */
    get_etag(): string
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FileOutputStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_get_etag(): string
    vfunc_query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(size: number, cancellable: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FileOutputStream, pspec: GObject.ParamSpec) => void))
}
export interface FileOutputStream_Static {
    name: string
    new (config: FileOutputStream_ConstructProps): FileOutputStream
}
export declare var FileOutputStream: FileOutputStream_Static
export interface FilenameCompleter_ConstructProps extends GObject.Object_ConstructProps {
}
export interface FilenameCompleter {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FilenameCompleter */
    get_completion_suffix(initial_text: string): string
    get_completions(initial_text: string): string[]
    set_dirs_only(dirs_only: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.FilenameCompleter */
    vfunc_got_completion_data(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.FilenameCompleter */
    connect(sigName: "got-completion-data", callback: ((obj: FilenameCompleter) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FilenameCompleter, pspec: GObject.ParamSpec) => void))
}
export interface FilenameCompleter_Static {
    name: string
    new (config: FilenameCompleter_ConstructProps): FilenameCompleter
}
export declare class FilenameCompleter_Static {
    new(): FilenameCompleter
}
export declare var FilenameCompleter: FilenameCompleter_Static
export interface FilterInputStream_ConstructProps extends InputStream_ConstructProps {
    base_stream?:InputStream
    close_base_stream?:boolean
}
export interface FilterInputStream {
    /* Properties of Gio.FilterInputStream */
    close_base_stream:boolean
    /* Fields of Gio.FilterInputStream */
    parent_instance:InputStream
    base_stream:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    read_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FilterInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::close-base-stream", callback: ((obj: FilterInputStream, pspec: GObject.ParamSpec) => void))
}
export interface FilterInputStream_Static {
    name: string
    new (config: FilterInputStream_ConstructProps): FilterInputStream
}
export declare var FilterInputStream: FilterInputStream_Static
export interface FilterOutputStream_ConstructProps extends OutputStream_ConstructProps {
    base_stream?:OutputStream
    close_base_stream?:boolean
}
export interface FilterOutputStream {
    /* Properties of Gio.FilterOutputStream */
    /* Fields of Gio.FilterOutputStream */
    parent_instance:OutputStream
    base_stream:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FilterOutputStream, pspec: GObject.ParamSpec) => void))
}
export interface FilterOutputStream_Static {
    name: string
    new (config: FilterOutputStream_ConstructProps): FilterOutputStream
}
export declare var FilterOutputStream: FilterOutputStream_Static
export interface IOModule_ConstructProps extends GObject.TypeModule_ConstructProps {
}
export interface IOModule {
    /* Fields of GObject.TypeModule */
    parent_instance:GObject.Object
    use_count:number
    type_infos:GLib.SList
    interface_infos:GLib.SList
    name:string
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.IOModule */
    load(): void
    unload(): void
    /* Methods of GObject.TypeModule */
    add_interface(instance_type: number, interface_type: number, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): number
    register_flags(name: string, const_static_values: GObject.FlagsValue): number
    register_type(parent_type: number, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): number
    set_name(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: IOModule, pspec: GObject.ParamSpec) => void))
}
export interface IOModule_Static {
    name: string
    new (config: IOModule_ConstructProps): IOModule
}
export declare class IOModule_Static {
    new(filename: string): IOModule
    query(): string[]
}
export declare var IOModule: IOModule_Static
export interface IOStream_ConstructProps extends GObject.Object_ConstructProps {
}
export interface IOStream {
    /* Properties of Gio.IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Fields of Gio.IOStream */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-stream", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::output-stream", callback: ((obj: IOStream, pspec: GObject.ParamSpec) => void))
}
export interface IOStream_Static {
    name: string
    new (config: IOStream_ConstructProps): IOStream
}
export declare class IOStream_Static {
    splice_finish(result: AsyncResult): boolean
}
export declare var IOStream: IOStream_Static
export interface InetAddress_ConstructProps extends GObject.Object_ConstructProps {
    bytes?:object
    family?:SocketFamily
}
export interface InetAddress {
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
    get_family(): SocketFamily
    get_is_any(): boolean
    get_is_link_local(): boolean
    get_is_loopback(): boolean
    get_is_mc_global(): boolean
    get_is_mc_link_local(): boolean
    get_is_mc_node_local(): boolean
    get_is_mc_org_local(): boolean
    get_is_mc_site_local(): boolean
    get_is_multicast(): boolean
    get_is_site_local(): boolean
    get_native_size(): number
    to_string(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InetAddress */
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-any", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-link-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-loopback", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-mc-global", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-mc-link-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-mc-node-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-mc-org-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-mc-site-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-multicast", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::is-site-local", callback: ((obj: InetAddress, pspec: GObject.ParamSpec) => void))
}
export interface InetAddress_Static {
    name: string
    new (config: InetAddress_ConstructProps): InetAddress
}
export declare class InetAddress_Static {
    new_any(family: SocketFamily): InetAddress
    new_from_bytes(bytes: Gjs.byteArray.ByteArray[], family: SocketFamily): InetAddress
    new_from_string(string: string): InetAddress
    new_loopback(family: SocketFamily): InetAddress
}
export declare var InetAddress: InetAddress_Static
export interface InetAddressMask_ConstructProps extends GObject.Object_ConstructProps {
    address?:InetAddress
    length?:number
}
export interface InetAddressMask {
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
    get_address(): InetAddress
    get_family(): SocketFamily
    get_length(): number
    matches(address: InetAddress): boolean
    to_string(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::address", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::family", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::length", callback: ((obj: InetAddressMask, pspec: GObject.ParamSpec) => void))
}
export interface InetAddressMask_Static {
    name: string
    new (config: InetAddressMask_ConstructProps): InetAddressMask
}
export declare class InetAddressMask_Static {
    new(addr: InetAddress, length: number): InetAddressMask
    new_from_string(mask_string: string): InetAddressMask
}
export declare var InetAddressMask: InetAddressMask_Static
export interface InetSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    address?:InetAddress
    flowinfo?:number
    port?:number
    scope_id?:number
}
export interface InetSocketAddress {
    /* Properties of Gio.InetSocketAddress */
    /* Properties of Gio.SocketAddress */
    readonly family:SocketFamily
    /* Fields of Gio.InetSocketAddress */
    parent_instance:SocketAddress
    /* Fields of Gio.SocketAddress */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.InetSocketAddress */
    get_address(): InetAddress
    get_flowinfo(): number
    get_port(): number
    get_scope_id(): number
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object, destlen: number): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InetSocketAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::family", callback: ((obj: InetSocketAddress, pspec: GObject.ParamSpec) => void))
}
export interface InetSocketAddress_Static {
    name: string
    new (config: InetSocketAddress_ConstructProps): InetSocketAddress
}
export declare class InetSocketAddress_Static {
    new(address: InetAddress, port: number): InetSocketAddress
    new_from_string(address: string, port: number): InetSocketAddress
}
export declare var InetSocketAddress: InetSocketAddress_Static
export interface InputStream_ConstructProps extends GObject.Object_ConstructProps {
}
export interface InputStream {
    /* Fields of Gio.InputStream */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    read_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InputStream, pspec: GObject.ParamSpec) => void))
}
export interface InputStream_Static {
    name: string
    new (config: InputStream_ConstructProps): InputStream
}
export declare var InputStream: InputStream_Static
export interface ListStore_ConstructProps extends GObject.Object_ConstructProps {
    item_type?:number
}
export interface ListStore {
    /* Properties of Gio.ListStore */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ListStore */
    append(item: GObject.Object): void
    insert(position: number, item: GObject.Object): void
    insert_sorted(item: GObject.Object, compare_func: GLib.CompareDataFunc, user_data: object): number
    remove(position: number): void
    remove_all(): void
    sort(compare_func: GLib.CompareDataFunc, user_data: object): void
    splice(position: number, n_removals: number, additions: GObject.Object[]): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ListStore, pspec: GObject.ParamSpec) => void))
}
export interface ListStore_Static {
    name: string
    new (config: ListStore_ConstructProps): ListStore
}
export declare class ListStore_Static {
    new(item_type: number): ListStore
}
export declare var ListStore: ListStore_Static
export interface MemoryInputStream_ConstructProps extends InputStream_ConstructProps {
}
export interface MemoryInputStream {
    /* Fields of Gio.MemoryInputStream */
    parent_instance:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MemoryInputStream */
    add_bytes(bytes: Gjs.byteArray.ByteArray): void
    add_data(data: Gjs.byteArray.ByteArray[], destroy: GLib.DestroyNotify | null): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    read_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MemoryInputStream, pspec: GObject.ParamSpec) => void))
}
export interface MemoryInputStream_Static {
    name: string
    new (config: MemoryInputStream_ConstructProps): MemoryInputStream
}
export declare class MemoryInputStream_Static {
    new(): MemoryInputStream
    new_from_bytes(bytes: Gjs.byteArray.ByteArray): MemoryInputStream
    new_from_data(data: Gjs.byteArray.ByteArray[], len: number, destroy: GLib.DestroyNotify | null): MemoryInputStream
}
export declare var MemoryInputStream: MemoryInputStream_Static
export interface MemoryOutputStream_ConstructProps extends OutputStream_ConstructProps {
    data?:object
    size?:number
}
export interface MemoryOutputStream {
    /* Properties of Gio.MemoryOutputStream */
    readonly data_size:number
    /* Fields of Gio.MemoryOutputStream */
    parent_instance:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MemoryOutputStream */
    get_data(): object
    get_data_size(): number
    get_size(): number
    steal_as_bytes(): Gjs.byteArray.ByteArray
    steal_data(): object
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::data-size", callback: ((obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void))
}
export interface MemoryOutputStream_Static {
    name: string
    new (config: MemoryOutputStream_ConstructProps): MemoryOutputStream
}
export declare class MemoryOutputStream_Static {
    new_resizable(): MemoryOutputStream
}
export declare var MemoryOutputStream: MemoryOutputStream_Static
export interface Menu_ConstructProps extends MenuModel_ConstructProps {
}
export interface Menu {
    /* Fields of Gio.MenuModel */
    parent_instance:GObject.Object
    priv:MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Menu */
    append(label: string | null, detailed_action: string | null): void
    append_item(item: MenuItem): void
    append_section(label: string | null, section: MenuModel): void
    append_submenu(label: string | null, submenu: MenuModel): void
    freeze(): void
    insert(position: number, label: string | null, detailed_action: string | null): void
    insert_item(position: number, item: MenuItem): void
    insert_section(position: number, label: string | null, section: MenuModel): void
    insert_submenu(position: number, label: string | null, submenu: MenuModel): void
    prepend(label: string | null, detailed_action: string | null): void
    prepend_item(item: MenuItem): void
    prepend_section(label: string | null, section: MenuModel): void
    prepend_submenu(label: string | null, submenu: MenuModel): void
    remove(position: number): void
    remove_all(): void
    /* Methods of Gio.MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number): /* attributes */ GLib.HashTable
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number): /* links */ GLib.HashTable
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((obj: Menu, position: number, removed: number, added: number) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Menu, pspec: GObject.ParamSpec) => void))
}
export interface Menu_Static {
    name: string
    new (config: Menu_ConstructProps): Menu
}
export declare class Menu_Static {
    new(): Menu
}
export declare var Menu: Menu_Static
export interface MenuAttributeIter_ConstructProps extends GObject.Object_ConstructProps {
}
export interface MenuAttributeIter {
    /* Fields of Gio.MenuAttributeIter */
    parent_instance:GObject.Object
    priv:MenuAttributeIterPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuAttributeIter */
    get_name(): string
    get_next(): [ /* returnType */ boolean, /* out_name */ string | null, /* value */ GLib.Variant | null ]
    get_value(): GLib.Variant
    next(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuAttributeIter */
    vfunc_get_next(): [ /* returnType */ boolean, /* out_name */ string | null, /* value */ GLib.Variant | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MenuAttributeIter, pspec: GObject.ParamSpec) => void))
}
export interface MenuAttributeIter_Static {
    name: string
    new (config: MenuAttributeIter_ConstructProps): MenuAttributeIter
}
export declare var MenuAttributeIter: MenuAttributeIter_Static
export interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
}
export interface MenuItem {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuItem */
    get_attribute_value(attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    get_link(link: string): MenuModel
    set_action_and_target_value(action: string | null, target_value: GLib.Variant | null): void
    set_attribute_value(attribute: string, value: GLib.Variant | null): void
    set_detailed_action(detailed_action: string): void
    set_icon(icon: Icon): void
    set_label(label: string | null): void
    set_link(link: string, model: MenuModel | null): void
    set_section(section: MenuModel | null): void
    set_submenu(submenu: MenuModel | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MenuItem, pspec: GObject.ParamSpec) => void))
}
export interface MenuItem_Static {
    name: string
    new (config: MenuItem_ConstructProps): MenuItem
}
export declare class MenuItem_Static {
    new(label: string | null, detailed_action: string | null): MenuItem
    new_from_model(model: MenuModel, item_index: number): MenuItem
    new_section(label: string | null, section: MenuModel): MenuItem
    new_submenu(label: string | null, submenu: MenuModel): MenuItem
}
export declare var MenuItem: MenuItem_Static
export interface MenuLinkIter_ConstructProps extends GObject.Object_ConstructProps {
}
export interface MenuLinkIter {
    /* Fields of Gio.MenuLinkIter */
    parent_instance:GObject.Object
    priv:MenuLinkIterPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuLinkIter */
    get_name(): string
    get_next(): [ /* returnType */ boolean, /* out_link */ string | null, /* value */ MenuModel | null ]
    get_value(): MenuModel
    next(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuLinkIter */
    vfunc_get_next(): [ /* returnType */ boolean, /* out_link */ string | null, /* value */ MenuModel | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MenuLinkIter, pspec: GObject.ParamSpec) => void))
}
export interface MenuLinkIter_Static {
    name: string
    new (config: MenuLinkIter_ConstructProps): MenuLinkIter
}
export declare var MenuLinkIter: MenuLinkIter_Static
export interface MenuModel_ConstructProps extends GObject.Object_ConstructProps {
}
export interface MenuModel {
    /* Fields of Gio.MenuModel */
    parent_instance:GObject.Object
    priv:MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number): /* attributes */ GLib.HashTable
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number): /* links */ GLib.HashTable
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((obj: MenuModel, position: number, removed: number, added: number) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MenuModel, pspec: GObject.ParamSpec) => void))
}
export interface MenuModel_Static {
    name: string
    new (config: MenuModel_ConstructProps): MenuModel
}
export declare var MenuModel: MenuModel_Static
export interface MountOperation_ConstructProps extends GObject.Object_ConstructProps {
    anonymous?:boolean
    choice?:number
    domain?:string
    password?:string
    password_save?:PasswordSave
    username?:string
}
export interface MountOperation {
    /* Properties of Gio.MountOperation */
    anonymous:boolean
    choice:number
    domain:string
    password:string
    password_save:PasswordSave
    username:string
    /* Fields of Gio.MountOperation */
    parent_instance:GObject.Object
    priv:MountOperationPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.MountOperation */
    get_anonymous(): boolean
    get_choice(): number
    get_domain(): string
    get_password(): string
    get_password_save(): PasswordSave
    get_username(): string
    reply(result: MountOperationResult): void
    set_anonymous(anonymous: boolean): void
    set_choice(choice: number): void
    set_domain(domain: string): void
    set_password(password: string): void
    set_password_save(save: PasswordSave): void
    set_username(username: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.MountOperation */
    vfunc_aborted(): void
    vfunc_ask_password(message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void
    vfunc_ask_question(message: string, choices: string): void
    vfunc_reply(result: MountOperationResult): void
    vfunc_show_unmount_progress(message: string, time_left: number, bytes_left: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MountOperation */
    connect(sigName: "aborted", callback: ((obj: MountOperation) => void))
    connect(sigName: "ask-password", callback: ((obj: MountOperation, message: string, default_user: string, default_domain: string, flags: AskPasswordFlags) => void))
    connect(sigName: "ask-question", callback: ((obj: MountOperation, message: string, choices: string[]) => void))
    connect(sigName: "reply", callback: ((obj: MountOperation, result: MountOperationResult) => void))
    connect(sigName: "show-processes", callback: ((obj: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void))
    connect(sigName: "show-unmount-progress", callback: ((obj: MountOperation, message: string, time_left: number, bytes_left: number) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::anonymous", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::choice", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::domain", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::password", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::password-save", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::username", callback: ((obj: MountOperation, pspec: GObject.ParamSpec) => void))
}
export interface MountOperation_Static {
    name: string
    new (config: MountOperation_ConstructProps): MountOperation
}
export declare class MountOperation_Static {
    new(): MountOperation
}
export declare var MountOperation: MountOperation_Static
export interface NativeVolumeMonitor_ConstructProps extends VolumeMonitor_ConstructProps {
}
export interface NativeVolumeMonitor {
    /* Fields of Gio.NativeVolumeMonitor */
    parent_instance:VolumeMonitor
    /* Fields of Gio.VolumeMonitor */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.VolumeMonitor */
    get_connected_drives(): GLib.List
    get_mount_for_uuid(uuid: string): Mount
    get_mounts(): GLib.List
    get_volume_for_uuid(uuid: string): Volume
    get_volumes(): GLib.List
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.VolumeMonitor */
    vfunc_drive_changed(drive: Drive): void
    vfunc_drive_connected(drive: Drive): void
    vfunc_drive_disconnected(drive: Drive): void
    vfunc_drive_eject_button(drive: Drive): void
    vfunc_drive_stop_button(drive: Drive): void
    vfunc_get_connected_drives(): GLib.List
    vfunc_get_mount_for_uuid(uuid: string): Mount
    vfunc_get_mounts(): GLib.List
    vfunc_get_volume_for_uuid(uuid: string): Volume
    vfunc_get_volumes(): GLib.List
    vfunc_mount_added(mount: Mount): void
    vfunc_mount_changed(mount: Mount): void
    vfunc_mount_pre_unmount(mount: Mount): void
    vfunc_mount_removed(mount: Mount): void
    vfunc_volume_added(volume: Volume): void
    vfunc_volume_changed(volume: Volume): void
    vfunc_volume_removed(volume: Volume): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void))
    connect(sigName: "drive-connected", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void))
    connect(sigName: "drive-disconnected", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void))
    connect(sigName: "drive-eject-button", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void))
    connect(sigName: "drive-stop-button", callback: ((obj: NativeVolumeMonitor, drive: Drive) => void))
    connect(sigName: "mount-added", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void))
    connect(sigName: "mount-changed", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void))
    connect(sigName: "mount-pre-unmount", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void))
    connect(sigName: "mount-removed", callback: ((obj: NativeVolumeMonitor, mount: Mount) => void))
    connect(sigName: "volume-added", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void))
    connect(sigName: "volume-changed", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void))
    connect(sigName: "volume-removed", callback: ((obj: NativeVolumeMonitor, volume: Volume) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NativeVolumeMonitor, pspec: GObject.ParamSpec) => void))
}
export interface NativeVolumeMonitor_Static {
    name: string
    new (config: NativeVolumeMonitor_ConstructProps): NativeVolumeMonitor
}
export declare var NativeVolumeMonitor: NativeVolumeMonitor_Static
export interface NetworkAddress_ConstructProps extends GObject.Object_ConstructProps {
    hostname?:string
    port?:number
    scheme?:string
}
export interface NetworkAddress {
    /* Properties of Gio.NetworkAddress */
    /* Fields of Gio.NetworkAddress */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.NetworkAddress */
    get_hostname(): string
    get_port(): number
    get_scheme(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NetworkAddress, pspec: GObject.ParamSpec) => void))
}
export interface NetworkAddress_Static {
    name: string
    new (config: NetworkAddress_ConstructProps): NetworkAddress
}
export declare class NetworkAddress_Static {
    new(hostname: string, port: number): NetworkAddress
    new_loopback(port: number): NetworkAddress
    parse(host_and_port: string, default_port: number): NetworkAddress
    parse_uri(uri: string, default_port: number): NetworkAddress
}
export declare var NetworkAddress: NetworkAddress_Static
export interface NetworkService_ConstructProps extends GObject.Object_ConstructProps {
    domain?:string
    protocol?:string
    scheme?:string
    service?:string
}
export interface NetworkService {
    /* Properties of Gio.NetworkService */
    scheme:string
    /* Fields of Gio.NetworkService */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.NetworkService */
    get_domain(): string
    get_protocol(): string
    get_scheme(): string
    get_service(): string
    set_scheme(scheme: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: NetworkService, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::scheme", callback: ((obj: NetworkService, pspec: GObject.ParamSpec) => void))
}
export interface NetworkService_Static {
    name: string
    new (config: NetworkService_ConstructProps): NetworkService
}
export declare class NetworkService_Static {
    new(service: string, protocol: string, domain: string): NetworkService
}
export declare var NetworkService: NetworkService_Static
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Notification {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Notification */
    add_button(label: string, detailed_action: string): void
    add_button_with_target_value(label: string, action: string, target: GLib.Variant | null): void
    set_body(body: string | null): void
    set_default_action(detailed_action: string): void
    set_default_action_and_target_value(action: string, target: GLib.Variant | null): void
    set_icon(icon: Icon): void
    set_priority(priority: NotificationPriority): void
    set_title(title: string): void
    set_urgent(urgent: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
}
export interface Notification_Static {
    name: string
    new (config: Notification_ConstructProps): Notification
}
export declare class Notification_Static {
    new(title: string): Notification
}
export declare var Notification: Notification_Static
export interface OutputStream_ConstructProps extends GObject.Object_ConstructProps {
}
export interface OutputStream {
    /* Fields of Gio.OutputStream */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: OutputStream, pspec: GObject.ParamSpec) => void))
}
export interface OutputStream_Static {
    name: string
    new (config: OutputStream_ConstructProps): OutputStream
}
export declare var OutputStream: OutputStream_Static
export interface Permission_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Permission {
    /* Properties of Gio.Permission */
    readonly allowed:boolean
    readonly can_acquire:boolean
    readonly can_release:boolean
    /* Fields of Gio.Permission */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Permission */
    acquire(cancellable: Cancellable | null): boolean
    acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    acquire_finish(result: AsyncResult): boolean
    get_allowed(): boolean
    get_can_acquire(): boolean
    get_can_release(): boolean
    impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean): void
    release(cancellable: Cancellable | null): boolean
    release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    release_finish(result: AsyncResult): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Permission */
    vfunc_acquire(cancellable: Cancellable | null): boolean
    vfunc_acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_acquire_finish(result: AsyncResult): boolean
    vfunc_release(cancellable: Cancellable | null): boolean
    vfunc_release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_release_finish(result: AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::allowed", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-acquire", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-release", callback: ((obj: Permission, pspec: GObject.ParamSpec) => void))
}
export interface Permission_Static {
    name: string
    new (config: Permission_ConstructProps): Permission
}
export declare var Permission: Permission_Static
export interface PropertyAction_ConstructProps extends GObject.Object_ConstructProps {
    invert_boolean?:boolean
    name?:string
    object?:GObject.Object
    property_name?:string
}
export interface PropertyAction {
    /* Properties of Gio.PropertyAction */
    readonly enabled:boolean
    readonly parameter_type:GLib.VariantType
    readonly state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::enabled", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::parameter-type", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::state", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::state-type", callback: ((obj: PropertyAction, pspec: GObject.ParamSpec) => void))
}
export interface PropertyAction_Static {
    name: string
    new (config: PropertyAction_ConstructProps): PropertyAction
}
export declare class PropertyAction_Static {
    new(name: string, object: GObject.Object, property_name: string): PropertyAction
}
export declare var PropertyAction: PropertyAction_Static
export interface ProxyAddress_ConstructProps extends InetSocketAddress_ConstructProps {
    destination_hostname?:string
    destination_port?:number
    destination_protocol?:string
    password?:string
    protocol?:string
    uri?:string
    username?:string
}
export interface ProxyAddress {
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
    get_destination_hostname(): string
    get_destination_port(): number
    get_destination_protocol(): string
    get_password(): string
    get_protocol(): string
    get_uri(): string
    get_username(): string
    /* Methods of Gio.InetSocketAddress */
    get_address(): InetAddress
    get_flowinfo(): number
    get_port(): number
    get_scope_id(): number
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object, destlen: number): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ProxyAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::family", callback: ((obj: ProxyAddress, pspec: GObject.ParamSpec) => void))
}
export interface ProxyAddress_Static {
    name: string
    new (config: ProxyAddress_ConstructProps): ProxyAddress
}
export declare class ProxyAddress_Static {
    new(inetaddr: InetAddress, port: number, protocol: string, dest_hostname: string, dest_port: number, username: string | null, password: string | null): ProxyAddress
}
export declare var ProxyAddress: ProxyAddress_Static
export interface ProxyAddressEnumerator_ConstructProps extends SocketAddressEnumerator_ConstructProps {
    connectable?:SocketConnectable
    default_port?:number
    proxy_resolver?:ProxyResolver
    uri?:string
}
export interface ProxyAddressEnumerator {
    /* Properties of Gio.ProxyAddressEnumerator */
    proxy_resolver:ProxyResolver
    /* Fields of Gio.ProxyAddressEnumerator */
    parent_instance:SocketAddressEnumerator
    priv:ProxyAddressEnumeratorPrivate
    /* Fields of Gio.SocketAddressEnumerator */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketAddressEnumerator */
    next(cancellable: Cancellable | null): SocketAddress
    next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    next_finish(result: AsyncResult): SocketAddress
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketAddressEnumerator */
    vfunc_next(cancellable: Cancellable | null): SocketAddress
    vfunc_next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_next_finish(result: AsyncResult): SocketAddress
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::proxy-resolver", callback: ((obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void))
}
export interface ProxyAddressEnumerator_Static {
    name: string
    new (config: ProxyAddressEnumerator_ConstructProps): ProxyAddressEnumerator
}
export declare var ProxyAddressEnumerator: ProxyAddressEnumerator_Static
export interface Resolver_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Resolver {
    /* Fields of Gio.Resolver */
    parent_instance:GObject.Object
    priv:ResolverPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Resolver */
    lookup_by_address(address: InetAddress, cancellable: Cancellable | null): string
    lookup_by_address_async(address: InetAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_by_address_finish(result: AsyncResult): string
    lookup_by_name(hostname: string, cancellable: Cancellable | null): GLib.List
    lookup_by_name_async(hostname: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_by_name_finish(result: AsyncResult): GLib.List
    lookup_records(rrname: string, record_type: ResolverRecordType, cancellable: Cancellable | null): GLib.List
    lookup_records_async(rrname: string, record_type: ResolverRecordType, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_records_finish(result: AsyncResult): GLib.List
    lookup_service(service: string, protocol: string, domain: string, cancellable: Cancellable | null): GLib.List
    lookup_service_async(service: string, protocol: string, domain: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_service_finish(result: AsyncResult): GLib.List
    set_default(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Resolver */
    vfunc_lookup_by_address(address: InetAddress, cancellable: Cancellable | null): string
    vfunc_lookup_by_address_async(address: InetAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_by_address_finish(result: AsyncResult): string
    vfunc_lookup_by_name(hostname: string, cancellable: Cancellable | null): GLib.List
    vfunc_lookup_by_name_async(hostname: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_by_name_finish(result: AsyncResult): GLib.List
    vfunc_lookup_records(rrname: string, record_type: ResolverRecordType, cancellable: Cancellable | null): GLib.List
    vfunc_lookup_records_async(rrname: string, record_type: ResolverRecordType, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_records_finish(result: AsyncResult): GLib.List
    vfunc_lookup_service_async(rrname: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_service_finish(result: AsyncResult): GLib.List
    vfunc_reload(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Resolver */
    connect(sigName: "reload", callback: ((obj: Resolver) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Resolver, pspec: GObject.ParamSpec) => void))
}
export interface Resolver_Static {
    name: string
    new (config: Resolver_ConstructProps): Resolver
}
export declare class Resolver_Static {
    get_default(): Resolver
}
export declare var Resolver: Resolver_Static
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    path?:string
    schema?:string
    schema_id?:string
    settings_schema?:SettingsSchema
}
export interface Settings {
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
    bind_writable(key: string, object: GObject.Object, property: string, inverted: boolean): void
    create_action(key: string): Action
    delay(): void
    get_boolean(key: string): boolean
    get_child(name: string): Settings
    get_default_value(key: string): GLib.Variant
    get_double(key: string): number
    get_enum(key: string): number
    get_flags(key: string): number
    get_has_unapplied(): boolean
    get_int(key: string): number
    get_mapped(key: string, mapping: SettingsGetMapping, user_data: object): object
    get_range(key: string): GLib.Variant
    get_string(key: string): string
    get_strv(key: string): string[]
    get_uint(key: string): number
    get_user_value(key: string): GLib.Variant
    get_value(key: string): GLib.Variant
    is_writable(name: string): boolean
    list_children(): string[]
    list_keys(): string[]
    range_check(key: string, value: GLib.Variant): boolean
    reset(key: string): void
    revert(): void
    set_boolean(key: string, value: boolean): boolean
    set_double(key: string, value: number): boolean
    set_enum(key: string, value: number): boolean
    set_flags(key: string, value: number): boolean
    set_int(key: string, value: number): boolean
    set_string(key: string, value: string): boolean
    set_strv(key: string, value: string[] | null): boolean
    set_uint(key: string, value: number): boolean
    set_value(key: string, value: GLib.Variant): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Settings */
    vfunc_change_event(keys: GLib.Quark, n_keys: number): boolean
    vfunc_changed(key: string): void
    vfunc_writable_change_event(key: GLib.Quark): boolean
    vfunc_writable_changed(key: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Settings */
    connect(sigName: "change-event", callback: ((obj: Settings, keys: GLib.Quark[] | null) => boolean))
    connect(sigName: "changed", callback: ((obj: Settings, key: string) => void))
    connect(sigName: "writable-change-event", callback: ((obj: Settings, key: number) => boolean))
    connect(sigName: "writable-changed", callback: ((obj: Settings, key: string) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::delay-apply", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::has-unapplied", callback: ((obj: Settings, pspec: GObject.ParamSpec) => void))
}
export interface Settings_Static {
    name: string
    new (config: Settings_ConstructProps): Settings
}
export declare class Settings_Static {
    new(schema_id: string): Settings
    new_full(schema: SettingsSchema, backend: SettingsBackend | null, path: string | null): Settings
    new_with_backend(schema_id: string, backend: SettingsBackend): Settings
    new_with_backend_and_path(schema_id: string, backend: SettingsBackend, path: string): Settings
    new_with_path(schema_id: string, path: string): Settings
    list_relocatable_schemas(): string[]
    list_schemas(): string[]
    sync(): void
    unbind(object: GObject.Object, property: string): void
}
export declare var Settings: Settings_Static
export interface SimpleAction_ConstructProps extends GObject.Object_ConstructProps {
    enabled?:boolean
    name?:string
    parameter_type?:GLib.VariantType
    state?:GLib.Variant
}
export interface SimpleAction {
    /* Properties of Gio.SimpleAction */
    enabled:boolean
    state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SimpleAction */
    set_enabled(enabled: boolean): void
    set_state(value: GLib.Variant): void
    set_state_hint(state_hint: GLib.Variant | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SimpleAction */
    connect(sigName: "activate", callback: ((obj: SimpleAction, parameter: GLib.Variant | null) => void))
    connect(sigName: "change-state", callback: ((obj: SimpleAction, value: GLib.Variant | null) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::enabled", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::state", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::state-type", callback: ((obj: SimpleAction, pspec: GObject.ParamSpec) => void))
}
export interface SimpleAction_Static {
    name: string
    new (config: SimpleAction_ConstructProps): SimpleAction
}
export declare class SimpleAction_Static {
    new(name: string, parameter_type: GLib.VariantType | null): SimpleAction
    new_stateful(name: string, parameter_type: GLib.VariantType | null, state: GLib.Variant): SimpleAction
}
export declare var SimpleAction: SimpleAction_Static
export interface SimpleActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export interface SimpleActionGroup {
    /* Fields of Gio.SimpleActionGroup */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SimpleActionGroup */
    add_entries(entries: ActionEntry[], user_data: object): void
    insert(action: Action): void
    lookup(action_name: string): Action
    remove(action_name: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleActionGroup, pspec: GObject.ParamSpec) => void))
}
export interface SimpleActionGroup_Static {
    name: string
    new (config: SimpleActionGroup_ConstructProps): SimpleActionGroup
}
export declare class SimpleActionGroup_Static {
    new(): SimpleActionGroup
}
export declare var SimpleActionGroup: SimpleActionGroup_Static
export interface SimpleAsyncResult_ConstructProps extends GObject.Object_ConstructProps {
}
export interface SimpleAsyncResult {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SimpleAsyncResult */
    complete(): void
    complete_in_idle(): void
    get_op_res_gboolean(): boolean
    get_op_res_gssize(): number
    propagate_error(): boolean
    set_check_cancellable(check_cancellable: Cancellable | null): void
    set_from_error(error: GLib.Error): void
    set_handle_cancellation(handle_cancellation: boolean): void
    set_op_res_gboolean(op_res: boolean): void
    set_op_res_gssize(op_res: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleAsyncResult, pspec: GObject.ParamSpec) => void))
}
export interface SimpleAsyncResult_Static {
    name: string
    new (config: SimpleAsyncResult_ConstructProps): SimpleAsyncResult
}
export declare class SimpleAsyncResult_Static {
    new(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object, source_tag: object): SimpleAsyncResult
    new_from_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object, error: GLib.Error): SimpleAsyncResult
    is_valid(result: AsyncResult, source: GObject.Object | null, source_tag: object | null): boolean
}
export declare var SimpleAsyncResult: SimpleAsyncResult_Static
export interface SimpleIOStream_ConstructProps extends IOStream_ConstructProps {
    input_stream?:InputStream
    output_stream?:OutputStream
}
export interface SimpleIOStream {
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
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-stream", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::output-stream", callback: ((obj: SimpleIOStream, pspec: GObject.ParamSpec) => void))
}
export interface SimpleIOStream_Static {
    name: string
    new (config: SimpleIOStream_ConstructProps): SimpleIOStream
}
export declare class SimpleIOStream_Static {
    new(input_stream: InputStream, output_stream: OutputStream): SimpleIOStream
}
export declare var SimpleIOStream: SimpleIOStream_Static
export interface SimplePermission_ConstructProps extends Permission_ConstructProps {
}
export interface SimplePermission {
    /* Properties of Gio.Permission */
    readonly allowed:boolean
    readonly can_acquire:boolean
    readonly can_release:boolean
    /* Fields of Gio.Permission */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Permission */
    acquire(cancellable: Cancellable | null): boolean
    acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    acquire_finish(result: AsyncResult): boolean
    get_allowed(): boolean
    get_can_acquire(): boolean
    get_can_release(): boolean
    impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean): void
    release(cancellable: Cancellable | null): boolean
    release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    release_finish(result: AsyncResult): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Permission */
    vfunc_acquire(cancellable: Cancellable | null): boolean
    vfunc_acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_acquire_finish(result: AsyncResult): boolean
    vfunc_release(cancellable: Cancellable | null): boolean
    vfunc_release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_release_finish(result: AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::allowed", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-acquire", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::can-release", callback: ((obj: SimplePermission, pspec: GObject.ParamSpec) => void))
}
export interface SimplePermission_Static {
    name: string
    new (config: SimplePermission_ConstructProps): SimplePermission
}
export declare class SimplePermission_Static {
    new(allowed: boolean): SimplePermission
}
export declare var SimplePermission: SimplePermission_Static
export interface SimpleProxyResolver_ConstructProps extends GObject.Object_ConstructProps {
    default_proxy?:string
    ignore_hosts?:string[]
}
export interface SimpleProxyResolver {
    /* Properties of Gio.SimpleProxyResolver */
    default_proxy:string
    ignore_hosts:string[]
    /* Fields of Gio.SimpleProxyResolver */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SimpleProxyResolver */
    set_default_proxy(default_proxy: string): void
    set_ignore_hosts(ignore_hosts: string): void
    set_uri_proxy(uri_scheme: string, proxy: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::default-proxy", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::ignore-hosts", callback: ((obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void))
}
export interface SimpleProxyResolver_Static {
    name: string
    new (config: SimpleProxyResolver_ConstructProps): SimpleProxyResolver
}
export declare class SimpleProxyResolver_Static {
    new(default_proxy: string | null, ignore_hosts: string | null): ProxyResolver
}
export declare var SimpleProxyResolver: SimpleProxyResolver_Static
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
export interface Socket {
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
    accept(cancellable: Cancellable | null): Socket
    bind(address: SocketAddress, allow_reuse: boolean): boolean
    check_connect_result(): boolean
    close(): boolean
    condition_check(condition: GLib.IOCondition): GLib.IOCondition
    condition_timed_wait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable | null): boolean
    condition_wait(condition: GLib.IOCondition, cancellable: Cancellable | null): boolean
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connection_factory_create_connection(): SocketConnection
    get_available_bytes(): number
    get_blocking(): boolean
    get_broadcast(): boolean
    get_credentials(): Credentials
    get_family(): SocketFamily
    get_fd(): number
    get_keepalive(): boolean
    get_listen_backlog(): number
    get_local_address(): SocketAddress
    get_multicast_loopback(): boolean
    get_multicast_ttl(): number
    get_option(level: number, optname: number): [ /* returnType */ boolean, /* value */ number ]
    get_protocol(): SocketProtocol
    get_remote_address(): SocketAddress
    get_socket_type(): SocketType
    get_timeout(): number
    get_ttl(): number
    is_closed(): boolean
    is_connected(): boolean
    join_multicast_group(group: InetAddress, source_specific: boolean, iface: string | null): boolean
    leave_multicast_group(group: InetAddress, source_specific: boolean, iface: string | null): boolean
    listen(): boolean
    receive(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    receive_from(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null ]
    receive_message(vectors: InputVector[], messages: SocketControlMessage[] | null, flags: number, cancellable: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null ]
    receive_messages(messages: InputMessage, num_messages: number, flags: number, cancellable: Cancellable | null): number
    receive_with_blocking(buffer: Gjs.byteArray.ByteArray[], blocking: boolean, cancellable: Cancellable | null): number
    send(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    send_message(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, cancellable: Cancellable | null): number
    send_messages(messages: OutputMessage[], flags: number, cancellable: Cancellable | null): number
    send_to(address: SocketAddress | null, buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    send_with_blocking(buffer: Gjs.byteArray.ByteArray[], blocking: boolean, cancellable: Cancellable | null): number
    set_blocking(blocking: boolean): void
    set_broadcast(broadcast: boolean): void
    set_keepalive(keepalive: boolean): void
    set_listen_backlog(backlog: number): void
    set_multicast_loopback(loopback: boolean): void
    set_multicast_ttl(ttl: number): void
    set_option(level: number, optname: number, value: number): boolean
    set_timeout(timeout: number): void
    set_ttl(ttl: number): void
    shutdown(shutdown_read: boolean, shutdown_write: boolean): boolean
    speaks_ipv4(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::blocking", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::broadcast", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::keepalive", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::listen-backlog", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::local-address", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::multicast-loopback", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::multicast-ttl", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::remote-address", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::timeout", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::ttl", callback: ((obj: Socket, pspec: GObject.ParamSpec) => void))
}
export interface Socket_Static {
    name: string
    new (config: Socket_ConstructProps): Socket
}
export declare class Socket_Static {
    new(family: SocketFamily, type: SocketType, protocol: SocketProtocol): Socket
    new_from_fd(fd: number): Socket
}
export declare var Socket: Socket_Static
export interface SocketAddress_ConstructProps extends GObject.Object_ConstructProps {
}
export interface SocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family:SocketFamily
    /* Fields of Gio.SocketAddress */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object, destlen: number): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::family", callback: ((obj: SocketAddress, pspec: GObject.ParamSpec) => void))
}
export interface SocketAddress_Static {
    name: string
    new (config: SocketAddress_ConstructProps): SocketAddress
}
export declare class SocketAddress_Static {
    new_from_native(native: object, len: number): SocketAddress
}
export declare var SocketAddress: SocketAddress_Static
export interface SocketAddressEnumerator_ConstructProps extends GObject.Object_ConstructProps {
}
export interface SocketAddressEnumerator {
    /* Fields of Gio.SocketAddressEnumerator */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketAddressEnumerator */
    next(cancellable: Cancellable | null): SocketAddress
    next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    next_finish(result: AsyncResult): SocketAddress
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketAddressEnumerator */
    vfunc_next(cancellable: Cancellable | null): SocketAddress
    vfunc_next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_next_finish(result: AsyncResult): SocketAddress
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketAddressEnumerator, pspec: GObject.ParamSpec) => void))
}
export interface SocketAddressEnumerator_Static {
    name: string
    new (config: SocketAddressEnumerator_ConstructProps): SocketAddressEnumerator
}
export declare var SocketAddressEnumerator: SocketAddressEnumerator_Static
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
export interface SocketClient {
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
    add_application_proxy(protocol: string): void
    connect(connectable: SocketConnectable, cancellable: Cancellable | null): SocketConnection
    connect_async(connectable: SocketConnectable, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): SocketConnection
    connect_to_host(host_and_port: string, default_port: number, cancellable: Cancellable | null): SocketConnection
    connect_to_host_async(host_and_port: string, default_port: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_to_host_finish(result: AsyncResult): SocketConnection
    connect_to_service(domain: string, service: string, cancellable: Cancellable | null): SocketConnection
    connect_to_service_async(domain: string, service: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_to_service_finish(result: AsyncResult): SocketConnection
    connect_to_uri(uri: string, default_port: number, cancellable: Cancellable | null): SocketConnection
    connect_to_uri_async(uri: string, default_port: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_to_uri_finish(result: AsyncResult): SocketConnection
    get_enable_proxy(): boolean
    get_family(): SocketFamily
    get_local_address(): SocketAddress
    get_protocol(): SocketProtocol
    get_proxy_resolver(): ProxyResolver
    get_socket_type(): SocketType
    get_timeout(): number
    get_tls(): boolean
    get_tls_validation_flags(): TlsCertificateFlags
    set_enable_proxy(enable: boolean): void
    set_family(family: SocketFamily): void
    set_local_address(address: SocketAddress | null): void
    set_protocol(protocol: SocketProtocol): void
    set_proxy_resolver(proxy_resolver: ProxyResolver | null): void
    set_socket_type(type: SocketType): void
    set_timeout(timeout: number): void
    set_tls(tls: boolean): void
    set_tls_validation_flags(flags: TlsCertificateFlags): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketClient */
    vfunc_event(event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketClient */
    connect(sigName: "event", callback: ((obj: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream | null) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::enable-proxy", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::family", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::local-address", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::protocol", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::proxy-resolver", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::timeout", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tls", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::tls-validation-flags", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::type", callback: ((obj: SocketClient, pspec: GObject.ParamSpec) => void))
}
export interface SocketClient_Static {
    name: string
    new (config: SocketClient_ConstructProps): SocketClient
}
export declare class SocketClient_Static {
    new(): SocketClient
}
export declare var SocketClient: SocketClient_Static
export interface SocketConnection_ConstructProps extends IOStream_ConstructProps {
    socket?:Socket
}
export interface SocketConnection {
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
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-stream", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::output-stream", callback: ((obj: SocketConnection, pspec: GObject.ParamSpec) => void))
}
export interface SocketConnection_Static {
    name: string
    new (config: SocketConnection_ConstructProps): SocketConnection
}
export declare class SocketConnection_Static {
    factory_lookup_type(family: SocketFamily, type: SocketType, protocol_id: number): number
    factory_register_type(g_type: number, family: SocketFamily, type: SocketType, protocol: number): void
}
export declare var SocketConnection: SocketConnection_Static
export interface SocketControlMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export interface SocketControlMessage {
    /* Fields of Gio.SocketControlMessage */
    parent_instance:GObject.Object
    priv:SocketControlMessagePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketControlMessage, pspec: GObject.ParamSpec) => void))
}
export interface SocketControlMessage_Static {
    name: string
    new (config: SocketControlMessage_ConstructProps): SocketControlMessage
}
export declare class SocketControlMessage_Static {
    deserialize(level: number, type: number, data: Gjs.byteArray.ByteArray[]): SocketControlMessage
}
export declare var SocketControlMessage: SocketControlMessage_Static
export interface SocketListener_ConstructProps extends GObject.Object_ConstructProps {
    listen_backlog?:number
}
export interface SocketListener {
    /* Properties of Gio.SocketListener */
    listen_backlog:number
    /* Fields of Gio.SocketListener */
    parent_instance:GObject.Object
    priv:SocketListenerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SocketListener */
    accept(cancellable: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_finish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_socket(cancellable: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_socket_finish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    add_any_inet_port(source_object: GObject.Object | null): number
    add_inet_port(port: number, source_object: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: ((obj: SocketListener, event: SocketListenerEvent, socket: Socket) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketListener, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::listen-backlog", callback: ((obj: SocketListener, pspec: GObject.ParamSpec) => void))
}
export interface SocketListener_Static {
    name: string
    new (config: SocketListener_ConstructProps): SocketListener
}
export declare class SocketListener_Static {
    new(): SocketListener
}
export declare var SocketListener: SocketListener_Static
export interface SocketService_ConstructProps extends SocketListener_ConstructProps {
    active?:boolean
}
export interface SocketService {
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
    is_active(): boolean
    start(): void
    stop(): void
    /* Methods of Gio.SocketListener */
    accept(cancellable: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_finish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_socket(cancellable: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_socket_finish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    add_any_inet_port(source_object: GObject.Object | null): number
    add_inet_port(port: number, source_object: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketService */
    vfunc_incoming(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketService */
    connect(sigName: "incoming", callback: ((obj: SocketService, connection: SocketConnection, source_object: GObject.Object | null) => boolean))
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: ((obj: SocketService, event: SocketListenerEvent, socket: Socket) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::active", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::listen-backlog", callback: ((obj: SocketService, pspec: GObject.ParamSpec) => void))
}
export interface SocketService_Static {
    name: string
    new (config: SocketService_ConstructProps): SocketService
}
export declare class SocketService_Static {
    new(): SocketService
}
export declare var SocketService: SocketService_Static
export interface Subprocess_ConstructProps extends GObject.Object_ConstructProps {
    argv?:string[]
    flags?:SubprocessFlags
}
export interface Subprocess {
    /* Properties of Gio.Subprocess */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Subprocess */
    communicate(stdin_buf: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): [ /* returnType */ boolean, /* stdout_buf */ Gjs.byteArray.ByteArray, /* stderr_buf */ Gjs.byteArray.ByteArray ]
    communicate_async(stdin_buf: Gjs.byteArray.ByteArray, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    communicate_finish(result: AsyncResult): [ /* returnType */ boolean, /* stdout_buf */ Gjs.byteArray.ByteArray, /* stderr_buf */ Gjs.byteArray.ByteArray ]
    communicate_utf8(stdin_buf: string | null, cancellable: Cancellable | null): [ /* returnType */ boolean, /* stdout_buf */ string, /* stderr_buf */ string ]
    communicate_utf8_async(stdin_buf: string | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    communicate_utf8_finish(result: AsyncResult): [ /* returnType */ boolean, /* stdout_buf */ string, /* stderr_buf */ string ]
    force_exit(): void
    get_exit_status(): number
    get_identifier(): string
    get_if_exited(): boolean
    get_if_signaled(): boolean
    get_status(): number
    get_stderr_pipe(): InputStream
    get_stdin_pipe(): OutputStream
    get_stdout_pipe(): InputStream
    get_successful(): boolean
    get_term_sig(): number
    send_signal(signal_num: number): void
    wait(cancellable: Cancellable | null): boolean
    wait_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    wait_check(cancellable: Cancellable | null): boolean
    wait_check_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    wait_check_finish(result: AsyncResult): boolean
    wait_finish(result: AsyncResult): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Subprocess, pspec: GObject.ParamSpec) => void))
}
export interface Subprocess_Static {
    name: string
    new (config: Subprocess_ConstructProps): Subprocess
}
export declare class Subprocess_Static {
    newv(argv: string[], flags: SubprocessFlags): Subprocess
}
export declare var Subprocess: Subprocess_Static
export interface SubprocessLauncher_ConstructProps extends GObject.Object_ConstructProps {
    flags?:SubprocessFlags
}
export interface SubprocessLauncher {
    /* Properties of Gio.SubprocessLauncher */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.SubprocessLauncher */
    getenv(variable: string): string
    set_child_setup(child_setup: GLib.SpawnChildSetupFunc, user_data: object, destroy_notify: GLib.DestroyNotify): void
    set_cwd(cwd: string): void
    set_environ(env: string): void
    set_flags(flags: SubprocessFlags): void
    set_stderr_file_path(path: string): void
    set_stdin_file_path(path: string): void
    set_stdout_file_path(path: string): void
    setenv(variable: string, value: string, overwrite: boolean): void
    spawnv(argv: string[]): Subprocess
    take_fd(source_fd: number, target_fd: number): void
    take_stderr_fd(fd: number): void
    take_stdin_fd(fd: number): void
    take_stdout_fd(fd: number): void
    unsetenv(variable: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SubprocessLauncher, pspec: GObject.ParamSpec) => void))
}
export interface SubprocessLauncher_Static {
    name: string
    new (config: SubprocessLauncher_ConstructProps): SubprocessLauncher
}
export declare class SubprocessLauncher_Static {
    new(flags: SubprocessFlags): SubprocessLauncher
}
export declare var SubprocessLauncher: SubprocessLauncher_Static
export interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Task {
    /* Properties of Gio.Task */
    readonly completed:boolean
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Task */
    get_cancellable(): Cancellable
    get_check_cancellable(): boolean
    get_completed(): boolean
    get_context(): GLib.MainContext
    get_priority(): number
    get_return_on_cancel(): boolean
    get_source_object(): GObject.Object
    get_source_tag(): object
    get_task_data(): object
    had_error(): boolean
    propagate_boolean(): boolean
    propagate_int(): number
    propagate_pointer(): object
    return_boolean(result: boolean): void
    return_error(error: GLib.Error): void
    return_error_if_cancelled(): boolean
    return_int(result: number): void
    return_pointer(result: object | null, result_destroy: GLib.DestroyNotify | null): void
    set_check_cancellable(check_cancellable: boolean): void
    set_priority(priority: number): void
    set_return_on_cancel(return_on_cancel: boolean): boolean
    set_source_tag(source_tag: object): void
    set_task_data(task_data: object | null, task_data_destroy: GLib.DestroyNotify | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Task, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::completed", callback: ((obj: Task, pspec: GObject.ParamSpec) => void))
}
export interface Task_Static {
    name: string
    new (config: Task_ConstructProps): Task
}
export declare class Task_Static {
    new(source_object: GObject.Object | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, callback_data: object): Task
    is_valid(result: AsyncResult, source_object: GObject.Object | null): boolean
    report_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, callback_data: object, source_tag: object, error: GLib.Error): void
}
export declare var Task: Task_Static
export interface TcpConnection_ConstructProps extends SocketConnection_ConstructProps {
    graceful_disconnect?:boolean
}
export interface TcpConnection {
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
    get_graceful_disconnect(): boolean
    set_graceful_disconnect(graceful_disconnect: boolean): void
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::graceful-disconnect", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-stream", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::output-stream", callback: ((obj: TcpConnection, pspec: GObject.ParamSpec) => void))
}
export interface TcpConnection_Static {
    name: string
    new (config: TcpConnection_ConstructProps): TcpConnection
}
export declare var TcpConnection: TcpConnection_Static
export interface TcpWrapperConnection_ConstructProps extends TcpConnection_ConstructProps {
    base_io_stream?:IOStream
}
export interface TcpWrapperConnection {
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
    get_base_io_stream(): IOStream
    /* Methods of Gio.TcpConnection */
    get_graceful_disconnect(): boolean
    set_graceful_disconnect(graceful_disconnect: boolean): void
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::graceful-disconnect", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-stream", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::output-stream", callback: ((obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void))
}
export interface TcpWrapperConnection_Static {
    name: string
    new (config: TcpWrapperConnection_ConstructProps): TcpWrapperConnection
}
export declare class TcpWrapperConnection_Static {
    new(base_io_stream: IOStream, socket: Socket): TcpWrapperConnection
}
export declare var TcpWrapperConnection: TcpWrapperConnection_Static
export interface TestDBus_ConstructProps extends GObject.Object_ConstructProps {
    flags?:TestDBusFlags
}
export interface TestDBus {
    /* Properties of Gio.TestDBus */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TestDBus */
    add_service_dir(path: string): void
    down(): void
    get_bus_address(): string
    get_flags(): TestDBusFlags
    stop(): void
    up(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TestDBus, pspec: GObject.ParamSpec) => void))
}
export interface TestDBus_Static {
    name: string
    new (config: TestDBus_ConstructProps): TestDBus
}
export declare class TestDBus_Static {
    new(flags: TestDBusFlags): TestDBus
    unset(): void
}
export declare var TestDBus: TestDBus_Static
export interface ThemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    name?:string
    names?:string[]
    use_default_fallbacks?:boolean
}
export interface ThemedIcon {
    /* Properties of Gio.ThemedIcon */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ThemedIcon */
    append_name(iconname: string): void
    get_names(): string[]
    prepend_name(iconname: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ThemedIcon, pspec: GObject.ParamSpec) => void))
}
export interface ThemedIcon_Static {
    name: string
    new (config: ThemedIcon_ConstructProps): ThemedIcon
}
export declare class ThemedIcon_Static {
    new(iconname: string): ThemedIcon
    new_from_names(iconnames: string[], len: number): ThemedIcon
    new_with_default_fallbacks(iconname: string): ThemedIcon
}
export declare var ThemedIcon: ThemedIcon_Static
export interface ThreadedSocketService_ConstructProps extends SocketService_ConstructProps {
    max_threads?:number
}
export interface ThreadedSocketService {
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
    is_active(): boolean
    start(): void
    stop(): void
    /* Methods of Gio.SocketListener */
    accept(cancellable: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_finish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_socket(cancellable: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_socket_finish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    add_any_inet_port(source_object: GObject.Object | null): number
    add_inet_port(port: number, source_object: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.ThreadedSocketService */
    vfunc_run(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketService */
    vfunc_incoming(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.ThreadedSocketService */
    connect(sigName: "run", callback: ((obj: ThreadedSocketService, connection: SocketConnection, source_object: GObject.Object) => boolean))
    /* Signals of Gio.SocketService */
    connect(sigName: "incoming", callback: ((obj: ThreadedSocketService, connection: SocketConnection, source_object: GObject.Object | null) => boolean))
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: ((obj: ThreadedSocketService, event: SocketListenerEvent, socket: Socket) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::active", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::listen-backlog", callback: ((obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void))
}
export interface ThreadedSocketService_Static {
    name: string
    new (config: ThreadedSocketService_ConstructProps): ThreadedSocketService
}
export declare class ThreadedSocketService_Static {
    new(max_threads: number): ThreadedSocketService
}
export declare var ThreadedSocketService: ThreadedSocketService_Static
export interface TlsCertificate_ConstructProps extends GObject.Object_ConstructProps {
    certificate?:object[]
    certificate_pem?:string
    issuer?:TlsCertificate
    private_key?:object[]
    private_key_pem?:string
}
export interface TlsCertificate {
    /* Properties of Gio.TlsCertificate */
    /* Fields of Gio.TlsCertificate */
    parent_instance:GObject.Object
    priv:TlsCertificatePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TlsCertificate */
    get_issuer(): TlsCertificate
    is_same(cert_two: TlsCertificate): boolean
    verify(identity: SocketConnectable | null, trusted_ca: TlsCertificate | null): TlsCertificateFlags
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsCertificate */
    vfunc_verify(identity: SocketConnectable | null, trusted_ca: TlsCertificate | null): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsCertificate, pspec: GObject.ParamSpec) => void))
}
export interface TlsCertificate_Static {
    name: string
    new (config: TlsCertificate_ConstructProps): TlsCertificate
}
export declare class TlsCertificate_Static {
    new_from_file(file: string): TlsCertificate
    new_from_files(cert_file: string, key_file: string): TlsCertificate
    new_from_pem(data: string, length: number): TlsCertificate
    list_new_from_file(file: string): GLib.List
}
export declare var TlsCertificate: TlsCertificate_Static
export interface TlsConnection_ConstructProps extends IOStream_ConstructProps {
    base_io_stream?:IOStream
    certificate?:TlsCertificate
    database?:TlsDatabase
    interaction?:TlsInteraction
    rehandshake_mode?:TlsRehandshakeMode
    require_close_notify?:boolean
    use_system_certdb?:boolean
}
export interface TlsConnection {
    /* Properties of Gio.TlsConnection */
    certificate:TlsCertificate
    database:TlsDatabase
    interaction:TlsInteraction
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
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    get_certificate(): TlsCertificate
    get_database(): TlsDatabase
    get_interaction(): TlsInteraction
    get_peer_certificate(): TlsCertificate
    get_peer_certificate_errors(): TlsCertificateFlags
    get_rehandshake_mode(): TlsRehandshakeMode
    get_require_close_notify(): boolean
    get_use_system_certdb(): boolean
    handshake(cancellable: Cancellable | null): boolean
    handshake_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    handshake_finish(result: AsyncResult): boolean
    set_certificate(certificate: TlsCertificate): void
    set_database(database: TlsDatabase): void
    set_interaction(interaction: TlsInteraction | null): void
    set_rehandshake_mode(mode: TlsRehandshakeMode): void
    set_require_close_notify(require_close_notify: boolean): void
    set_use_system_certdb(use_system_certdb: boolean): void
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsConnection */
    vfunc_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfunc_handshake(cancellable: Cancellable | null): boolean
    vfunc_handshake_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_handshake_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: ((obj: TlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::certificate", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::database", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::interaction", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::peer-certificate", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::peer-certificate-errors", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::rehandshake-mode", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::require-close-notify", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::use-system-certdb", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-stream", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::output-stream", callback: ((obj: TlsConnection, pspec: GObject.ParamSpec) => void))
}
export interface TlsConnection_Static {
    name: string
    new (config: TlsConnection_ConstructProps): TlsConnection
}
export declare var TlsConnection: TlsConnection_Static
export interface TlsDatabase_ConstructProps extends GObject.Object_ConstructProps {
}
export interface TlsDatabase {
    /* Fields of Gio.TlsDatabase */
    parent_instance:GObject.Object
    priv:TlsDatabasePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TlsDatabase */
    create_certificate_handle(certificate: TlsCertificate): string | null
    lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate
    lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate
    lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate
    lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate
    lookup_certificates_issued_by(issuer_raw_dn: Gjs.byteArray.ByteArray[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): GLib.List
    lookup_certificates_issued_by_async(issuer_raw_dn: Gjs.byteArray.ByteArray[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_certificates_issued_by_finish(result: AsyncResult): GLib.List
    verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null): TlsCertificateFlags
    verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    verify_chain_finish(result: AsyncResult): TlsCertificateFlags
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsDatabase */
    vfunc_create_certificate_handle(certificate: TlsCertificate): string | null
    vfunc_lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate
    vfunc_lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate
    vfunc_lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate
    vfunc_lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate
    vfunc_lookup_certificates_issued_by(issuer_raw_dn: Gjs.byteArray.ByteArray[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): GLib.List
    vfunc_lookup_certificates_issued_by_async(issuer_raw_dn: Gjs.byteArray.ByteArray[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_certificates_issued_by_finish(result: AsyncResult): GLib.List
    vfunc_verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null): TlsCertificateFlags
    vfunc_verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_verify_chain_finish(result: AsyncResult): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsDatabase, pspec: GObject.ParamSpec) => void))
}
export interface TlsDatabase_Static {
    name: string
    new (config: TlsDatabase_ConstructProps): TlsDatabase
}
export declare var TlsDatabase: TlsDatabase_Static
export interface TlsInteraction_ConstructProps extends GObject.Object_ConstructProps {
}
export interface TlsInteraction {
    /* Fields of Gio.TlsInteraction */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.TlsInteraction */
    ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult
    ask_password_async(password: TlsPassword, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void
    ask_password_finish(result: AsyncResult): TlsInteractionResult
    invoke_ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult
    invoke_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult
    request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult
    request_certificate_async(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void
    request_certificate_finish(result: AsyncResult): TlsInteractionResult
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsInteraction */
    vfunc_ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult
    vfunc_ask_password_async(password: TlsPassword, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void
    vfunc_ask_password_finish(result: AsyncResult): TlsInteractionResult
    vfunc_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult
    vfunc_request_certificate_async(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void
    vfunc_request_certificate_finish(result: AsyncResult): TlsInteractionResult
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsInteraction, pspec: GObject.ParamSpec) => void))
}
export interface TlsInteraction_Static {
    name: string
    new (config: TlsInteraction_ConstructProps): TlsInteraction
}
export declare var TlsInteraction: TlsInteraction_Static
export interface TlsPassword_ConstructProps extends GObject.Object_ConstructProps {
    description?:string
    flags?:TlsPasswordFlags
    warning?:string
}
export interface TlsPassword {
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
    get_description(): string
    get_flags(): TlsPasswordFlags
    get_value(length: number | null): number
    get_warning(): string
    set_description(description: string): void
    set_flags(flags: TlsPasswordFlags): void
    set_value(value: number, length: number): void
    set_value_full(value: number, length: number, destroy: GLib.DestroyNotify | null): void
    set_warning(warning: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsPassword */
    vfunc_get_default_warning(): string
    vfunc_get_value(length: number | null): number
    vfunc_set_value(value: number, length: number, destroy: GLib.DestroyNotify | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::description", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::flags", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::warning", callback: ((obj: TlsPassword, pspec: GObject.ParamSpec) => void))
}
export interface TlsPassword_Static {
    name: string
    new (config: TlsPassword_ConstructProps): TlsPassword
}
export declare class TlsPassword_Static {
    new(flags: TlsPasswordFlags, description: string): TlsPassword
}
export declare var TlsPassword: TlsPassword_Static
export interface UnixConnection_ConstructProps extends SocketConnection_ConstructProps {
}
export interface UnixConnection {
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
    receive_credentials(cancellable: Cancellable | null): Credentials
    receive_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    receive_credentials_finish(result: AsyncResult): Credentials
    receive_fd(cancellable: Cancellable | null): number
    send_credentials(cancellable: Cancellable | null): boolean
    send_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    send_credentials_finish(result: AsyncResult): boolean
    send_fd(fd: number, cancellable: Cancellable | null): boolean
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::input-stream", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::output-stream", callback: ((obj: UnixConnection, pspec: GObject.ParamSpec) => void))
}
export interface UnixConnection_Static {
    name: string
    new (config: UnixConnection_ConstructProps): UnixConnection
}
export declare var UnixConnection: UnixConnection_Static
export interface UnixCredentialsMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    credentials?:Credentials
}
export interface UnixCredentialsMessage {
    /* Properties of Gio.UnixCredentialsMessage */
    /* Fields of Gio.UnixCredentialsMessage */
    parent_instance:SocketControlMessage
    priv:UnixCredentialsMessagePrivate
    /* Fields of Gio.SocketControlMessage */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixCredentialsMessage */
    get_credentials(): Credentials
    /* Methods of Gio.SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixCredentialsMessage, pspec: GObject.ParamSpec) => void))
}
export interface UnixCredentialsMessage_Static {
    name: string
    new (config: UnixCredentialsMessage_ConstructProps): UnixCredentialsMessage
}
export declare class UnixCredentialsMessage_Static {
    new(): UnixCredentialsMessage
    new_with_credentials(credentials: Credentials): UnixCredentialsMessage
    is_supported(): boolean
}
export declare var UnixCredentialsMessage: UnixCredentialsMessage_Static
export interface UnixFDList_ConstructProps extends GObject.Object_ConstructProps {
}
export interface UnixFDList {
    /* Fields of Gio.UnixFDList */
    parent_instance:GObject.Object
    priv:UnixFDListPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixFDList */
    append(fd: number): number
    get(index_: number): number
    get_length(): number
    peek_fds(): [ /* returnType */ number[], /* length */ number | null ]
    steal_fds(): [ /* returnType */ number[], /* length */ number | null ]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixFDList, pspec: GObject.ParamSpec) => void))
}
export interface UnixFDList_Static {
    name: string
    new (config: UnixFDList_ConstructProps): UnixFDList
}
export declare class UnixFDList_Static {
    new(): UnixFDList
    new_from_array(fds: number[], n_fds: number): UnixFDList
}
export declare var UnixFDList: UnixFDList_Static
export interface UnixFDMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    fd_list?:UnixFDList
}
export interface UnixFDMessage {
    /* Properties of Gio.UnixFDMessage */
    /* Fields of Gio.UnixFDMessage */
    parent_instance:SocketControlMessage
    priv:UnixFDMessagePrivate
    /* Fields of Gio.SocketControlMessage */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixFDMessage */
    append_fd(fd: number): boolean
    get_fd_list(): UnixFDList
    steal_fds(): [ /* returnType */ number[], /* length */ number | null ]
    /* Methods of Gio.SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixFDMessage, pspec: GObject.ParamSpec) => void))
}
export interface UnixFDMessage_Static {
    name: string
    new (config: UnixFDMessage_ConstructProps): UnixFDMessage
}
export declare class UnixFDMessage_Static {
    new(): UnixFDMessage
    new_with_fd_list(fd_list: UnixFDList): UnixFDMessage
}
export declare var UnixFDMessage: UnixFDMessage_Static
export interface UnixInputStream_ConstructProps extends InputStream_ConstructProps {
    close_fd?:boolean
    fd?:number
}
export interface UnixInputStream {
    /* Properties of Gio.UnixInputStream */
    close_fd:boolean
    /* Fields of Gio.UnixInputStream */
    parent_instance:InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixInputStream */
    get_close_fd(): boolean
    get_fd(): number
    set_close_fd(close_fd: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    read_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixInputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::close-fd", callback: ((obj: UnixInputStream, pspec: GObject.ParamSpec) => void))
}
export interface UnixInputStream_Static {
    name: string
    new (config: UnixInputStream_ConstructProps): UnixInputStream
}
export declare class UnixInputStream_Static {
    new(fd: number, close_fd: boolean): UnixInputStream
}
export declare var UnixInputStream: UnixInputStream_Static
export interface UnixMountMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export interface UnixMountMonitor {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixMountMonitor */
    set_rate_limit(limit_msec: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.UnixMountMonitor */
    connect(sigName: "mountpoints-changed", callback: ((obj: UnixMountMonitor) => void))
    connect(sigName: "mounts-changed", callback: ((obj: UnixMountMonitor) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixMountMonitor, pspec: GObject.ParamSpec) => void))
}
export interface UnixMountMonitor_Static {
    name: string
    new (config: UnixMountMonitor_ConstructProps): UnixMountMonitor
}
export declare class UnixMountMonitor_Static {
    new(): UnixMountMonitor
    get(): UnixMountMonitor
}
export declare var UnixMountMonitor: UnixMountMonitor_Static
export interface UnixOutputStream_ConstructProps extends OutputStream_ConstructProps {
    close_fd?:boolean
    fd?:number
}
export interface UnixOutputStream {
    /* Properties of Gio.UnixOutputStream */
    close_fd:boolean
    /* Fields of Gio.UnixOutputStream */
    parent_instance:OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixOutputStream */
    get_close_fd(): boolean
    get_fd(): number
    set_close_fd(close_fd: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_all_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number ]
    write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray[], io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray[], cancellable: Cancellable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixOutputStream, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::close-fd", callback: ((obj: UnixOutputStream, pspec: GObject.ParamSpec) => void))
}
export interface UnixOutputStream_Static {
    name: string
    new (config: UnixOutputStream_ConstructProps): UnixOutputStream
}
export declare class UnixOutputStream_Static {
    new(fd: number, close_fd: boolean): UnixOutputStream
}
export declare var UnixOutputStream: UnixOutputStream_Static
export interface UnixSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    abstract?:boolean
    address_type?:UnixSocketAddressType
    path?:string
    path_as_array?:object[]
}
export interface UnixSocketAddress {
    /* Properties of Gio.UnixSocketAddress */
    /* Properties of Gio.SocketAddress */
    readonly family:SocketFamily
    /* Fields of Gio.UnixSocketAddress */
    parent_instance:SocketAddress
    /* Fields of Gio.SocketAddress */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.UnixSocketAddress */
    get_address_type(): UnixSocketAddressType
    get_is_abstract(): boolean
    get_path(): string
    get_path_len(): number
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object, destlen: number): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object, destlen: number): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::family", callback: ((obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void))
}
export interface UnixSocketAddress_Static {
    name: string
    new (config: UnixSocketAddress_ConstructProps): UnixSocketAddress
}
export declare class UnixSocketAddress_Static {
    new(path: string): UnixSocketAddress
    new_abstract(path: number[], path_len: number): UnixSocketAddress
    new_with_type(path: number[], path_len: number, type: UnixSocketAddressType): UnixSocketAddress
    abstract_names_supported(): boolean
}
export declare var UnixSocketAddress: UnixSocketAddress_Static
export interface Vfs_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Vfs {
    /* Fields of Gio.Vfs */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.Vfs */
    get_file_for_path(path: string): File
    get_file_for_uri(uri: string): File
    get_supported_uri_schemes(): string[]
    is_active(): boolean
    parse_name(parse_name: string): File
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.Vfs */
    vfunc_add_writable_namespaces(list: FileAttributeInfoList): void
    vfunc_get_file_for_path(path: string): File
    vfunc_get_file_for_uri(uri: string): File
    vfunc_get_supported_uri_schemes(): string[]
    vfunc_is_active(): boolean
    vfunc_local_file_add_info(filename: string, device: number, attribute_matcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable | null, extra_data: object, free_extra_data: GLib.DestroyNotify): void
    vfunc_local_file_moved(source: string, dest: string): void
    vfunc_local_file_removed(filename: string): void
    vfunc_local_file_set_attributes(filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean
    vfunc_parse_name(parse_name: string): File
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Vfs, pspec: GObject.ParamSpec) => void))
}
export interface Vfs_Static {
    name: string
    new (config: Vfs_ConstructProps): Vfs
}
export declare class Vfs_Static {
    get_default(): Vfs
    get_local(): Vfs
}
export declare var Vfs: Vfs_Static
export interface VolumeMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export interface VolumeMonitor {
    /* Fields of Gio.VolumeMonitor */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.VolumeMonitor */
    get_connected_drives(): GLib.List
    get_mount_for_uuid(uuid: string): Mount
    get_mounts(): GLib.List
    get_volume_for_uuid(uuid: string): Volume
    get_volumes(): GLib.List
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.VolumeMonitor */
    vfunc_drive_changed(drive: Drive): void
    vfunc_drive_connected(drive: Drive): void
    vfunc_drive_disconnected(drive: Drive): void
    vfunc_drive_eject_button(drive: Drive): void
    vfunc_drive_stop_button(drive: Drive): void
    vfunc_get_connected_drives(): GLib.List
    vfunc_get_mount_for_uuid(uuid: string): Mount
    vfunc_get_mounts(): GLib.List
    vfunc_get_volume_for_uuid(uuid: string): Volume
    vfunc_get_volumes(): GLib.List
    vfunc_mount_added(mount: Mount): void
    vfunc_mount_changed(mount: Mount): void
    vfunc_mount_pre_unmount(mount: Mount): void
    vfunc_mount_removed(mount: Mount): void
    vfunc_volume_added(volume: Volume): void
    vfunc_volume_changed(volume: Volume): void
    vfunc_volume_removed(volume: Volume): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: ((obj: VolumeMonitor, drive: Drive) => void))
    connect(sigName: "drive-connected", callback: ((obj: VolumeMonitor, drive: Drive) => void))
    connect(sigName: "drive-disconnected", callback: ((obj: VolumeMonitor, drive: Drive) => void))
    connect(sigName: "drive-eject-button", callback: ((obj: VolumeMonitor, drive: Drive) => void))
    connect(sigName: "drive-stop-button", callback: ((obj: VolumeMonitor, drive: Drive) => void))
    connect(sigName: "mount-added", callback: ((obj: VolumeMonitor, mount: Mount) => void))
    connect(sigName: "mount-changed", callback: ((obj: VolumeMonitor, mount: Mount) => void))
    connect(sigName: "mount-pre-unmount", callback: ((obj: VolumeMonitor, mount: Mount) => void))
    connect(sigName: "mount-removed", callback: ((obj: VolumeMonitor, mount: Mount) => void))
    connect(sigName: "volume-added", callback: ((obj: VolumeMonitor, volume: Volume) => void))
    connect(sigName: "volume-changed", callback: ((obj: VolumeMonitor, volume: Volume) => void))
    connect(sigName: "volume-removed", callback: ((obj: VolumeMonitor, volume: Volume) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: VolumeMonitor, pspec: GObject.ParamSpec) => void))
}
export interface VolumeMonitor_Static {
    name: string
    new (config: VolumeMonitor_ConstructProps): VolumeMonitor
}
export declare class VolumeMonitor_Static {
    adopt_orphan_mount(mount: Mount): Volume
    get(): VolumeMonitor
}
export declare var VolumeMonitor: VolumeMonitor_Static
export interface ZlibCompressor_ConstructProps extends GObject.Object_ConstructProps {
    file_info?:FileInfo
    format?:ZlibCompressorFormat
    level?:number
}
export interface ZlibCompressor {
    /* Properties of Gio.ZlibCompressor */
    file_info:FileInfo
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ZlibCompressor */
    get_file_info(): FileInfo
    set_file_info(file_info: FileInfo | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ZlibCompressor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::file-info", callback: ((obj: ZlibCompressor, pspec: GObject.ParamSpec) => void))
}
export interface ZlibCompressor_Static {
    name: string
    new (config: ZlibCompressor_ConstructProps): ZlibCompressor
}
export declare class ZlibCompressor_Static {
    new(format: ZlibCompressorFormat, level: number): ZlibCompressor
}
export declare var ZlibCompressor: ZlibCompressor_Static
export interface ZlibDecompressor_ConstructProps extends GObject.Object_ConstructProps {
    format?:ZlibCompressorFormat
}
export interface ZlibDecompressor {
    /* Properties of Gio.ZlibDecompressor */
    readonly file_info:FileInfo
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gio.ZlibDecompressor */
    get_file_info(): FileInfo
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::file-info", callback: ((obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void))
}
export interface ZlibDecompressor_Static {
    name: string
    new (config: ZlibDecompressor_ConstructProps): ZlibDecompressor
}
export declare class ZlibDecompressor_Static {
    new(format: ZlibCompressorFormat): ZlibDecompressor
}
export declare var ZlibDecompressor: ZlibDecompressor_Static
export interface ActionEntry {
    /* Fields of Gio.ActionEntry */
    name:string
    activate:any
    parameter_type:string
    state:string
    change_state:any
}
export interface ActionEntry_Static {
    name: string
}
export declare var ActionEntry: ActionEntry_Static
export interface AppLaunchContextPrivate {
}
export interface AppLaunchContextPrivate_Static {
    name: string
}
export declare var AppLaunchContextPrivate: AppLaunchContextPrivate_Static
export interface ApplicationCommandLinePrivate {
}
export interface ApplicationCommandLinePrivate_Static {
    name: string
}
export declare var ApplicationCommandLinePrivate: ApplicationCommandLinePrivate_Static
export interface ApplicationPrivate {
}
export interface ApplicationPrivate_Static {
    name: string
}
export declare var ApplicationPrivate: ApplicationPrivate_Static
export interface BufferedInputStreamPrivate {
}
export interface BufferedInputStreamPrivate_Static {
    name: string
}
export declare var BufferedInputStreamPrivate: BufferedInputStreamPrivate_Static
export interface BufferedOutputStreamPrivate {
}
export interface BufferedOutputStreamPrivate_Static {
    name: string
}
export declare var BufferedOutputStreamPrivate: BufferedOutputStreamPrivate_Static
export interface CancellablePrivate {
}
export interface CancellablePrivate_Static {
    name: string
}
export declare var CancellablePrivate: CancellablePrivate_Static
export interface ConverterInputStreamPrivate {
}
export interface ConverterInputStreamPrivate_Static {
    name: string
}
export declare var ConverterInputStreamPrivate: ConverterInputStreamPrivate_Static
export interface ConverterOutputStreamPrivate {
}
export interface ConverterOutputStreamPrivate_Static {
    name: string
}
export declare var ConverterOutputStreamPrivate: ConverterOutputStreamPrivate_Static
export interface DBusAnnotationInfo {
    /* Fields of Gio.DBusAnnotationInfo */
    ref_count:number
    key:string
    value:string
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusAnnotationInfo */
    ref(): DBusAnnotationInfo
    unref(): void
}
export interface DBusAnnotationInfo_Static {
    name: string
}
export declare class DBusAnnotationInfo_Static {
    lookup(annotations: DBusAnnotationInfo[] | null, name: string): string
}
export declare var DBusAnnotationInfo: DBusAnnotationInfo_Static
export interface DBusArgInfo {
    /* Fields of Gio.DBusArgInfo */
    ref_count:number
    name:string
    signature:string
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusArgInfo */
    ref(): DBusArgInfo
    unref(): void
}
export interface DBusArgInfo_Static {
    name: string
}
export declare var DBusArgInfo: DBusArgInfo_Static
export interface DBusErrorEntry {
    /* Fields of Gio.DBusErrorEntry */
    error_code:number
    dbus_error_name:string
}
export interface DBusErrorEntry_Static {
    name: string
}
export declare var DBusErrorEntry: DBusErrorEntry_Static
export interface DBusInterfaceInfo {
    /* Fields of Gio.DBusInterfaceInfo */
    ref_count:number
    name:string
    methods:DBusMethodInfo[]
    signals:DBusSignalInfo[]
    properties:DBusPropertyInfo[]
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusInterfaceInfo */
    cache_build(): void
    cache_release(): void
    generate_xml(indent: number): /* string_builder */ GLib.String
    lookup_method(name: string): DBusMethodInfo
    lookup_property(name: string): DBusPropertyInfo
    lookup_signal(name: string): DBusSignalInfo
    ref(): DBusInterfaceInfo
    unref(): void
}
export interface DBusInterfaceInfo_Static {
    name: string
}
export declare var DBusInterfaceInfo: DBusInterfaceInfo_Static
export interface DBusInterfaceSkeletonPrivate {
}
export interface DBusInterfaceSkeletonPrivate_Static {
    name: string
}
export declare var DBusInterfaceSkeletonPrivate: DBusInterfaceSkeletonPrivate_Static
export interface DBusInterfaceVTable {
    /* Fields of Gio.DBusInterfaceVTable */
    method_call:DBusInterfaceMethodCallFunc
    get_property:DBusInterfaceGetPropertyFunc
    set_property:DBusInterfaceSetPropertyFunc
}
export interface DBusInterfaceVTable_Static {
    name: string
}
export declare var DBusInterfaceVTable: DBusInterfaceVTable_Static
export interface DBusMethodInfo {
    /* Fields of Gio.DBusMethodInfo */
    ref_count:number
    name:string
    in_args:DBusArgInfo[]
    out_args:DBusArgInfo[]
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusMethodInfo */
    ref(): DBusMethodInfo
    unref(): void
}
export interface DBusMethodInfo_Static {
    name: string
}
export declare var DBusMethodInfo: DBusMethodInfo_Static
export interface DBusNodeInfo {
    /* Fields of Gio.DBusNodeInfo */
    ref_count:number
    path:string
    interfaces:DBusInterfaceInfo[]
    nodes:DBusNodeInfo[]
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusNodeInfo */
    generate_xml(indent: number): /* string_builder */ GLib.String
    lookup_interface(name: string): DBusInterfaceInfo
    ref(): DBusNodeInfo
    unref(): void
}
export interface DBusNodeInfo_Static {
    name: string
}
export declare class DBusNodeInfo_Static {
    new_for_xml(xml_data: string): DBusNodeInfo
}
export declare var DBusNodeInfo: DBusNodeInfo_Static
export interface DBusObjectManagerClientPrivate {
}
export interface DBusObjectManagerClientPrivate_Static {
    name: string
}
export declare var DBusObjectManagerClientPrivate: DBusObjectManagerClientPrivate_Static
export interface DBusObjectManagerServerPrivate {
}
export interface DBusObjectManagerServerPrivate_Static {
    name: string
}
export declare var DBusObjectManagerServerPrivate: DBusObjectManagerServerPrivate_Static
export interface DBusObjectProxyPrivate {
}
export interface DBusObjectProxyPrivate_Static {
    name: string
}
export declare var DBusObjectProxyPrivate: DBusObjectProxyPrivate_Static
export interface DBusObjectSkeletonPrivate {
}
export interface DBusObjectSkeletonPrivate_Static {
    name: string
}
export declare var DBusObjectSkeletonPrivate: DBusObjectSkeletonPrivate_Static
export interface DBusPropertyInfo {
    /* Fields of Gio.DBusPropertyInfo */
    ref_count:number
    name:string
    signature:string
    flags:DBusPropertyInfoFlags
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusPropertyInfo */
    ref(): DBusPropertyInfo
    unref(): void
}
export interface DBusPropertyInfo_Static {
    name: string
}
export declare var DBusPropertyInfo: DBusPropertyInfo_Static
export interface DBusProxyPrivate {
}
export interface DBusProxyPrivate_Static {
    name: string
}
export declare var DBusProxyPrivate: DBusProxyPrivate_Static
export interface DBusSignalInfo {
    /* Fields of Gio.DBusSignalInfo */
    ref_count:number
    name:string
    args:DBusArgInfo[]
    annotations:DBusAnnotationInfo[]
    /* Methods of Gio.DBusSignalInfo */
    ref(): DBusSignalInfo
    unref(): void
}
export interface DBusSignalInfo_Static {
    name: string
}
export declare var DBusSignalInfo: DBusSignalInfo_Static
export interface DBusSubtreeVTable {
    /* Fields of Gio.DBusSubtreeVTable */
    introspect:DBusSubtreeIntrospectFunc
    dispatch:DBusSubtreeDispatchFunc
}
export interface DBusSubtreeVTable_Static {
    name: string
}
export declare var DBusSubtreeVTable: DBusSubtreeVTable_Static
export interface DataInputStreamPrivate {
}
export interface DataInputStreamPrivate_Static {
    name: string
}
export declare var DataInputStreamPrivate: DataInputStreamPrivate_Static
export interface DataOutputStreamPrivate {
}
export interface DataOutputStreamPrivate_Static {
    name: string
}
export declare var DataOutputStreamPrivate: DataOutputStreamPrivate_Static
export interface EmblemedIconPrivate {
}
export interface EmblemedIconPrivate_Static {
    name: string
}
export declare var EmblemedIconPrivate: EmblemedIconPrivate_Static
export interface FileAttributeInfo {
    /* Fields of Gio.FileAttributeInfo */
    name:string
    type:FileAttributeType
    flags:FileAttributeInfoFlags
}
export interface FileAttributeInfo_Static {
    name: string
}
export declare var FileAttributeInfo: FileAttributeInfo_Static
export interface FileAttributeInfoList {
    /* Fields of Gio.FileAttributeInfoList */
    infos:FileAttributeInfo
    n_infos:number
    /* Methods of Gio.FileAttributeInfoList */
    add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void
    dup(): FileAttributeInfoList
    lookup(name: string): FileAttributeInfo
    ref(): FileAttributeInfoList
    unref(): void
}
export interface FileAttributeInfoList_Static {
    name: string
}
export declare class FileAttributeInfoList_Static {
    new(): FileAttributeInfoList
}
export declare var FileAttributeInfoList: FileAttributeInfoList_Static
export interface FileAttributeMatcher {
    /* Methods of Gio.FileAttributeMatcher */
    enumerate_namespace(ns: string): boolean
    enumerate_next(): string
    matches(attribute: string): boolean
    matches_only(attribute: string): boolean
    ref(): FileAttributeMatcher
    subtract(subtract: FileAttributeMatcher): FileAttributeMatcher
    to_string(): string
    unref(): void
}
export interface FileAttributeMatcher_Static {
    name: string
}
export declare class FileAttributeMatcher_Static {
    new(attributes: string): FileAttributeMatcher
}
export declare var FileAttributeMatcher: FileAttributeMatcher_Static
export interface FileEnumeratorPrivate {
}
export interface FileEnumeratorPrivate_Static {
    name: string
}
export declare var FileEnumeratorPrivate: FileEnumeratorPrivate_Static
export interface FileIOStreamPrivate {
}
export interface FileIOStreamPrivate_Static {
    name: string
}
export declare var FileIOStreamPrivate: FileIOStreamPrivate_Static
export interface FileInputStreamPrivate {
}
export interface FileInputStreamPrivate_Static {
    name: string
}
export declare var FileInputStreamPrivate: FileInputStreamPrivate_Static
export interface FileMonitorPrivate {
}
export interface FileMonitorPrivate_Static {
    name: string
}
export declare var FileMonitorPrivate: FileMonitorPrivate_Static
export interface FileOutputStreamPrivate {
}
export interface FileOutputStreamPrivate_Static {
    name: string
}
export declare var FileOutputStreamPrivate: FileOutputStreamPrivate_Static
export interface IOExtension {
    /* Methods of Gio.IOExtension */
    get_name(): string
    get_priority(): number
    get_type(): number
}
export interface IOExtension_Static {
    name: string
}
export declare var IOExtension: IOExtension_Static
export interface IOExtensionPoint {
    /* Methods of Gio.IOExtensionPoint */
    get_extension_by_name(name: string): IOExtension
    get_extensions(): GLib.List
    get_required_type(): number
    set_required_type(type: number): void
}
export interface IOExtensionPoint_Static {
    name: string
}
export declare class IOExtensionPoint_Static {
    implement(extension_point_name: string, type: number, extension_name: string, priority: number): IOExtension
    lookup(name: string): IOExtensionPoint
    register(name: string): IOExtensionPoint
}
export declare var IOExtensionPoint: IOExtensionPoint_Static
export interface IOModuleScope {
    /* Methods of Gio.IOModuleScope */
    block(basename: string): void
    free(): void
}
export interface IOModuleScope_Static {
    name: string
}
export declare var IOModuleScope: IOModuleScope_Static
export interface IOSchedulerJob {
    /* Methods of Gio.IOSchedulerJob */
    send_to_mainloop(func: GLib.SourceFunc, user_data: object, notify: GLib.DestroyNotify | null): boolean
    send_to_mainloop_async(func: GLib.SourceFunc, user_data: object, notify: GLib.DestroyNotify | null): void
}
export interface IOSchedulerJob_Static {
    name: string
}
export declare var IOSchedulerJob: IOSchedulerJob_Static
export interface IOStreamAdapter {
}
export interface IOStreamAdapter_Static {
    name: string
}
export declare var IOStreamAdapter: IOStreamAdapter_Static
export interface IOStreamPrivate {
}
export interface IOStreamPrivate_Static {
    name: string
}
export declare var IOStreamPrivate: IOStreamPrivate_Static
export interface InetAddressMaskPrivate {
}
export interface InetAddressMaskPrivate_Static {
    name: string
}
export declare var InetAddressMaskPrivate: InetAddressMaskPrivate_Static
export interface InetAddressPrivate {
}
export interface InetAddressPrivate_Static {
    name: string
}
export declare var InetAddressPrivate: InetAddressPrivate_Static
export interface InetSocketAddressPrivate {
}
export interface InetSocketAddressPrivate_Static {
    name: string
}
export declare var InetSocketAddressPrivate: InetSocketAddressPrivate_Static
export interface InputMessage {
    /* Fields of Gio.InputMessage */
    address:SocketAddress
    vectors:InputVector[]
    num_vectors:number
    bytes_received:number
    flags:number
    control_messages:SocketControlMessage[]
    num_control_messages:number
}
export interface InputMessage_Static {
    name: string
}
export declare var InputMessage: InputMessage_Static
export interface InputStreamPrivate {
}
export interface InputStreamPrivate_Static {
    name: string
}
export declare var InputStreamPrivate: InputStreamPrivate_Static
export interface InputVector {
    /* Fields of Gio.InputVector */
    buffer:object
    size:number
}
export interface InputVector_Static {
    name: string
}
export declare var InputVector: InputVector_Static
export interface MemoryInputStreamPrivate {
}
export interface MemoryInputStreamPrivate_Static {
    name: string
}
export declare var MemoryInputStreamPrivate: MemoryInputStreamPrivate_Static
export interface MemoryOutputStreamPrivate {
}
export interface MemoryOutputStreamPrivate_Static {
    name: string
}
export declare var MemoryOutputStreamPrivate: MemoryOutputStreamPrivate_Static
export interface MenuAttributeIterPrivate {
}
export interface MenuAttributeIterPrivate_Static {
    name: string
}
export declare var MenuAttributeIterPrivate: MenuAttributeIterPrivate_Static
export interface MenuLinkIterPrivate {
}
export interface MenuLinkIterPrivate_Static {
    name: string
}
export declare var MenuLinkIterPrivate: MenuLinkIterPrivate_Static
export interface MenuModelPrivate {
}
export interface MenuModelPrivate_Static {
    name: string
}
export declare var MenuModelPrivate: MenuModelPrivate_Static
export interface MountOperationPrivate {
}
export interface MountOperationPrivate_Static {
    name: string
}
export declare var MountOperationPrivate: MountOperationPrivate_Static
export interface NativeSocketAddress {
}
export interface NativeSocketAddress_Static {
    name: string
}
export declare var NativeSocketAddress: NativeSocketAddress_Static
export interface NetworkAddressPrivate {
}
export interface NetworkAddressPrivate_Static {
    name: string
}
export declare var NetworkAddressPrivate: NetworkAddressPrivate_Static
export interface NetworkServicePrivate {
}
export interface NetworkServicePrivate_Static {
    name: string
}
export declare var NetworkServicePrivate: NetworkServicePrivate_Static
export interface OutputMessage {
    /* Fields of Gio.OutputMessage */
    address:SocketAddress
    vectors:OutputVector
    num_vectors:number
    bytes_sent:number
    control_messages:SocketControlMessage[]
    num_control_messages:number
}
export interface OutputMessage_Static {
    name: string
}
export declare var OutputMessage: OutputMessage_Static
export interface OutputStreamPrivate {
}
export interface OutputStreamPrivate_Static {
    name: string
}
export declare var OutputStreamPrivate: OutputStreamPrivate_Static
export interface OutputVector {
    /* Fields of Gio.OutputVector */
    buffer:object
    size:number
}
export interface OutputVector_Static {
    name: string
}
export declare var OutputVector: OutputVector_Static
export interface PermissionPrivate {
}
export interface PermissionPrivate_Static {
    name: string
}
export declare var PermissionPrivate: PermissionPrivate_Static
export interface ProxyAddressEnumeratorPrivate {
}
export interface ProxyAddressEnumeratorPrivate_Static {
    name: string
}
export declare var ProxyAddressEnumeratorPrivate: ProxyAddressEnumeratorPrivate_Static
export interface ProxyAddressPrivate {
}
export interface ProxyAddressPrivate_Static {
    name: string
}
export declare var ProxyAddressPrivate: ProxyAddressPrivate_Static
export interface ResolverPrivate {
}
export interface ResolverPrivate_Static {
    name: string
}
export declare var ResolverPrivate: ResolverPrivate_Static
export interface Resource {
    /* Methods of Gio.Resource */
    _register(): void
    _unregister(): void
    enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[]
    get_info(path: string, lookup_flags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
    lookup_data(path: string, lookup_flags: ResourceLookupFlags): Gjs.byteArray.ByteArray
    open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream
    ref(): Resource
    unref(): void
}
export interface Resource_Static {
    name: string
}
export declare class Resource_Static {
    new_from_data(data: Gjs.byteArray.ByteArray): Resource
    load(filename: string): Resource
}
export declare var Resource: Resource_Static
export interface SettingsBackend {
}
export interface SettingsBackend_Static {
    name: string
}
export declare var SettingsBackend: SettingsBackend_Static
export interface SettingsPrivate {
}
export interface SettingsPrivate_Static {
    name: string
}
export declare var SettingsPrivate: SettingsPrivate_Static
export interface SettingsSchema {
    /* Methods of Gio.SettingsSchema */
    get_id(): string
    get_key(name: string): SettingsSchemaKey
    get_path(): string
    has_key(name: string): boolean
    list_children(): string[]
    list_keys(): string[]
    ref(): SettingsSchema
    unref(): void
}
export interface SettingsSchema_Static {
    name: string
}
export declare var SettingsSchema: SettingsSchema_Static
export interface SettingsSchemaKey {
    /* Methods of Gio.SettingsSchemaKey */
    get_default_value(): GLib.Variant
    get_description(): string
    get_name(): string
    get_range(): GLib.Variant
    get_summary(): string
    get_value_type(): GLib.VariantType
    range_check(value: GLib.Variant): boolean
    ref(): SettingsSchemaKey
    unref(): void
}
export interface SettingsSchemaKey_Static {
    name: string
}
export declare var SettingsSchemaKey: SettingsSchemaKey_Static
export interface SettingsSchemaSource {
    /* Methods of Gio.SettingsSchemaSource */
    list_schemas(recursive: boolean): [ /* non_relocatable */ string[], /* relocatable */ string[] ]
    lookup(schema_id: string, recursive: boolean): SettingsSchema | null
    ref(): SettingsSchemaSource
    unref(): void
}
export interface SettingsSchemaSource_Static {
    name: string
}
export declare class SettingsSchemaSource_Static {
    new_from_directory(directory: string, parent: SettingsSchemaSource | null, trusted: boolean): SettingsSchemaSource
    get_default(): SettingsSchemaSource
}
export declare var SettingsSchemaSource: SettingsSchemaSource_Static
export interface SimpleActionGroupPrivate {
}
export interface SimpleActionGroupPrivate_Static {
    name: string
}
export declare var SimpleActionGroupPrivate: SimpleActionGroupPrivate_Static
export interface SimpleProxyResolverPrivate {
}
export interface SimpleProxyResolverPrivate_Static {
    name: string
}
export declare var SimpleProxyResolverPrivate: SimpleProxyResolverPrivate_Static
export interface SocketClientPrivate {
}
export interface SocketClientPrivate_Static {
    name: string
}
export declare var SocketClientPrivate: SocketClientPrivate_Static
export interface SocketConnectionPrivate {
}
export interface SocketConnectionPrivate_Static {
    name: string
}
export declare var SocketConnectionPrivate: SocketConnectionPrivate_Static
export interface SocketControlMessagePrivate {
}
export interface SocketControlMessagePrivate_Static {
    name: string
}
export declare var SocketControlMessagePrivate: SocketControlMessagePrivate_Static
export interface SocketListenerPrivate {
}
export interface SocketListenerPrivate_Static {
    name: string
}
export declare var SocketListenerPrivate: SocketListenerPrivate_Static
export interface SocketPrivate {
}
export interface SocketPrivate_Static {
    name: string
}
export declare var SocketPrivate: SocketPrivate_Static
export interface SocketServicePrivate {
}
export interface SocketServicePrivate_Static {
    name: string
}
export declare var SocketServicePrivate: SocketServicePrivate_Static
export interface SrvTarget {
    /* Methods of Gio.SrvTarget */
    copy(): SrvTarget
    free(): void
    get_hostname(): string
    get_port(): number
    get_priority(): number
    get_weight(): number
}
export interface SrvTarget_Static {
    name: string
}
export declare class SrvTarget_Static {
    new(hostname: string, port: number, priority: number, weight: number): SrvTarget
}
export declare var SrvTarget: SrvTarget_Static
export interface StaticResource {
    /* Fields of Gio.StaticResource */
    /* Methods of Gio.StaticResource */
    fini(): void
    get_resource(): Resource
    init(): void
}
export interface StaticResource_Static {
    name: string
}
export declare var StaticResource: StaticResource_Static
export interface TcpConnectionPrivate {
}
export interface TcpConnectionPrivate_Static {
    name: string
}
export declare var TcpConnectionPrivate: TcpConnectionPrivate_Static
export interface TcpWrapperConnectionPrivate {
}
export interface TcpWrapperConnectionPrivate_Static {
    name: string
}
export declare var TcpWrapperConnectionPrivate: TcpWrapperConnectionPrivate_Static
export interface ThreadedSocketServicePrivate {
}
export interface ThreadedSocketServicePrivate_Static {
    name: string
}
export declare var ThreadedSocketServicePrivate: ThreadedSocketServicePrivate_Static
export interface TlsCertificatePrivate {
}
export interface TlsCertificatePrivate_Static {
    name: string
}
export declare var TlsCertificatePrivate: TlsCertificatePrivate_Static
export interface TlsConnectionPrivate {
}
export interface TlsConnectionPrivate_Static {
    name: string
}
export declare var TlsConnectionPrivate: TlsConnectionPrivate_Static
export interface TlsDatabasePrivate {
}
export interface TlsDatabasePrivate_Static {
    name: string
}
export declare var TlsDatabasePrivate: TlsDatabasePrivate_Static
export interface TlsInteractionPrivate {
}
export interface TlsInteractionPrivate_Static {
    name: string
}
export declare var TlsInteractionPrivate: TlsInteractionPrivate_Static
export interface TlsPasswordPrivate {
}
export interface TlsPasswordPrivate_Static {
    name: string
}
export declare var TlsPasswordPrivate: TlsPasswordPrivate_Static
export interface UnixConnectionPrivate {
}
export interface UnixConnectionPrivate_Static {
    name: string
}
export declare var UnixConnectionPrivate: UnixConnectionPrivate_Static
export interface UnixCredentialsMessagePrivate {
}
export interface UnixCredentialsMessagePrivate_Static {
    name: string
}
export declare var UnixCredentialsMessagePrivate: UnixCredentialsMessagePrivate_Static
export interface UnixFDListPrivate {
}
export interface UnixFDListPrivate_Static {
    name: string
}
export declare var UnixFDListPrivate: UnixFDListPrivate_Static
export interface UnixFDMessagePrivate {
}
export interface UnixFDMessagePrivate_Static {
    name: string
}
export declare var UnixFDMessagePrivate: UnixFDMessagePrivate_Static
export interface UnixInputStreamPrivate {
}
export interface UnixInputStreamPrivate_Static {
    name: string
}
export declare var UnixInputStreamPrivate: UnixInputStreamPrivate_Static
export interface UnixMountEntry {
}
export interface UnixMountEntry_Static {
    name: string
}
export declare var UnixMountEntry: UnixMountEntry_Static
export interface UnixMountPoint {
    /* Methods of Gio.UnixMountPoint */
    compare(mount2: UnixMountPoint): number
    free(): void
    get_device_path(): string
    get_fs_type(): string
    get_mount_path(): string
    get_options(): string
    guess_can_eject(): boolean
    guess_icon(): Icon
    guess_name(): string
    guess_symbolic_icon(): Icon
    is_loopback(): boolean
    is_readonly(): boolean
    is_user_mountable(): boolean
}
export interface UnixMountPoint_Static {
    name: string
}
export declare var UnixMountPoint: UnixMountPoint_Static
export interface UnixOutputStreamPrivate {
}
export interface UnixOutputStreamPrivate_Static {
    name: string
}
export declare var UnixOutputStreamPrivate: UnixOutputStreamPrivate_Static
export interface UnixSocketAddressPrivate {
}
export interface UnixSocketAddressPrivate_Static {
    name: string
}
export declare var UnixSocketAddressPrivate: UnixSocketAddressPrivate_Static
type ActionMap_autoptr = object
type Action_autoptr = object
type AppInfoMonitor_autoptr = object
type AppInfo_autoptr = object
type AppLaunchContext_autoptr = object
type ApplicationCommandLine_autoptr = object
type Application_autoptr = object
type AsyncInitable_autoptr = object
type AsyncResult_autoptr = object
type BufferedInputStream_autoptr = object
type BufferedOutputStream_autoptr = object
type BytesIcon_autoptr = object
type Cancellable_autoptr = object
type CharsetConverter_autoptr = object
type ConverterInputStream_autoptr = object
type ConverterOutputStream_autoptr = object
type Converter_autoptr = object
type Credentials_autoptr = object
type DBusActionGroup_autoptr = object
type DBusAuthObserver_autoptr = object
type DBusConnection_autoptr = object
type DBusInterfaceSkeleton_autoptr = object
type DBusInterface_autoptr = object
type DBusMenuModel_autoptr = object
type DBusMessage_autoptr = object
type DBusMethodInvocation_autoptr = object
type DBusNodeInfo_autoptr = object
type DBusObjectManagerClient_autoptr = object
type DBusObjectManagerServer_autoptr = object
type DBusObjectManager_autoptr = object
type DBusObjectProxy_autoptr = object
type DBusObjectSkeleton_autoptr = object
type DBusObject_autoptr = object
type DBusProxy_autoptr = object
type DBusServer_autoptr = object
type DataInputStream_autoptr = object
type DataOutputStream_autoptr = object
type DatagramBased_autoptr = object
type DesktopAppInfo_autoptr = object
type Drive_autoptr = object
type Emblem_autoptr = object
type EmblemedIcon_autoptr = object
type FileDescriptorBased_autoptr = object
type FileEnumerator_autoptr = object
type FileIOStream_autoptr = object
type FileIcon_autoptr = object
type FileInfo_autoptr = object
type FileInputStream_autoptr = object
type FileMonitor_autoptr = object
type FileOutputStream_autoptr = object
type File_autoptr = object
type FilenameCompleter_autoptr = object
type FilterInputStream_autoptr = object
type FilterOutputStream_autoptr = object
type IOModule_autoptr = object
type IOStream_autoptr = object
type Icon_autoptr = object
type InetAddressMask_autoptr = object
type InetAddress_autoptr = object
type InetSocketAddress_autoptr = object
type Initable_autoptr = object
type InputStream_autoptr = object
type ListModel_autoptr = object
type ListStore_autoptr = object
type LoadableIcon_autoptr = object
type MemoryInputStream_autoptr = object
type MemoryOutputStream_autoptr = object
type MenuAttributeIter_autoptr = object
type MenuItem_autoptr = object
type MenuLinkIter_autoptr = object
type MenuModel_autoptr = object
type Menu_autoptr = object
type MountOperation_autoptr = object
type Mount_autoptr = object
type NativeVolumeMonitor_autoptr = object
type NetworkAddress_autoptr = object
type NetworkMonitor_autoptr = object
type NetworkService_autoptr = object
type Notification_autoptr = object
type OutputStream_autoptr = object
type Permission_autoptr = object
type PollableInputStream_autoptr = object
type PollableOutputStream_autoptr = object
type PropertyAction_autoptr = object
type ProxyAddressEnumerator_autoptr = object
type ProxyAddress_autoptr = object
type ProxyResolver_autoptr = object
type Proxy_autoptr = object
type RemoteActionGroup_autoptr = object
type Resolver_autoptr = object
type Seekable_autoptr = object
type SettingsBackend_autoptr = object
type SettingsSchema_autoptr = object
type Settings_autoptr = object
type SimpleActionGroup_autoptr = object
type SimpleAction_autoptr = object
type SimpleAsyncResult_autoptr = object
type SimplePermission_autoptr = object
type SimpleProxyResolver_autoptr = object
type SocketAddressEnumerator_autoptr = object
type SocketAddress_autoptr = object
type SocketClient_autoptr = object
type SocketConnectable_autoptr = object
type SocketConnection_autoptr = object
type SocketControlMessage_autoptr = object
type SocketListener_autoptr = object
type SocketService_autoptr = object
type Socket_autoptr = object
type SubprocessLauncher_autoptr = object
type Subprocess_autoptr = object
type Task_autoptr = object
type TcpConnection_autoptr = object
type TcpWrapperConnection_autoptr = object
type TestDBus_autoptr = object
type ThemedIcon_autoptr = object
type ThreadedSocketService_autoptr = object
type TlsBackend_autoptr = object
type TlsCertificate_autoptr = object
type TlsClientConnection_autoptr = object
type TlsConnection_autoptr = object
type TlsDatabase_autoptr = object
type TlsFileDatabase_autoptr = object
type TlsInteraction_autoptr = object
type TlsPassword_autoptr = object
type TlsServerConnection_autoptr = object
type UnixConnection_autoptr = object
type UnixCredentialsMessage_autoptr = object
type UnixFDList_autoptr = object
type UnixFDMessage_autoptr = object
type UnixInputStream_autoptr = object
type UnixMountMonitor_autoptr = object
type UnixOutputStream_autoptr = object
type UnixSocketAddress_autoptr = object
type Vfs_autoptr = object
type VolumeMonitor_autoptr = object
type Volume_autoptr = object
type ZlibCompressor_autoptr = object
type ZlibDecompressor_autoptr = object