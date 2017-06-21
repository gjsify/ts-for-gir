/**
 * Gio-2.0
 */

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
export function action_parse_detailed_name(detailed_name: string, action_name: string, target_value: GLib.Variant): boolean
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
export function bus_own_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_closure: GObject.Closure | null, name_lost_closure: GObject.Closure | null): number
export function bus_own_name_with_closures(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_closure: GObject.Closure | null, name_acquired_closure: GObject.Closure | null, name_lost_closure: GObject.Closure | null): number
export function bus_unown_name(owner_id: number): void
export function bus_unwatch_name(watcher_id: number): void
export function bus_watch_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_closure: GObject.Closure | null, name_vanished_closure: GObject.Closure | null): number
export function bus_watch_name_with_closures(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_closure: GObject.Closure | null, name_vanished_closure: GObject.Closure | null): number
export function content_type_can_be_executable(type: string): boolean
export function content_type_equals(type1: string, type2: string): boolean
export function content_type_from_mime_type(mime_type: string): string | null
export function content_type_get_description(type: string): string
export function content_type_get_generic_icon_name(type: string): string
export function content_type_get_icon(type: string): Icon
export function content_type_get_mime_type(type: string): string | null
export function content_type_get_symbolic_icon(type: string): Icon
export function content_type_guess(filename: string | null, data: number[] | null, data_size: number, result_uncertain: boolean | null): string
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
export function dbus_gvalue_to_gvariant(gvalue: GObject.Value, type: GLib.VariantType): GLib.Variant
export function dbus_gvariant_to_gvalue(value: GLib.Variant, out_gvalue: GObject.Value): void
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
export function file_new_tmp(tmpl: string, iostream: FileIOStream): File
export function file_parse_name(parse_name: string): File
export function icon_deserialize(value: GLib.Variant): Icon
export function icon_hash(icon: object): number
export function icon_new_for_string(str: string): Icon
export function initable_newv(object_type: number, n_parameters: number, parameters: GObject.Parameter[], cancellable: Cancellable | null): GObject.Object
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
export function pollable_stream_read(stream: InputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable | null): number
export function pollable_stream_write(stream: OutputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable | null): number
export function pollable_stream_write_all(stream: OutputStream, buffer: number[], count: number, blocking: boolean, bytes_written: number, cancellable: Cancellable | null): boolean
export function proxy_get_default_for_protocol(protocol: string): Proxy
export function proxy_resolver_get_default(): ProxyResolver
export function resolver_error_quark(): GLib.Quark
export function resource_error_quark(): GLib.Quark
export function resource_load(filename: string): Resource
export function resources_enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[]
export function resources_get_info(path: string, lookup_flags: ResourceLookupFlags, size: number | null, flags: number | null): boolean
export function resources_lookup_data(path: string, lookup_flags: ResourceLookupFlags): GLib.Bytes
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
export interface DBusSubtreeEnumerateFunc {
    (connection: DBusConnection, sender: string, object_path: string, user_data: object): string[]
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
export interface ReallocFunc {
    (data: object, size: number): object
}
export interface SettingsBindGetMapping {
    (value: GObject.Value, variant: GLib.Variant, user_data: object): boolean
}
export interface SettingsBindSetMapping {
    (value: GObject.Value, expected_type: GLib.VariantType, user_data: object): GLib.Variant
}
export interface SettingsGetMapping {
    (value: GLib.Variant, result: object, user_data: object): boolean
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
export interface Action_ConstructProps {
    /* Properties of Action */
}
export interface Action {
    /* Properties of Action */
    readonly enabled:boolean
    readonly name:string
    readonly parameter_type:GLib.VariantType
    readonly state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Methods of Action */
    activate(parameter: GLib.Variant | null): void
    change_state(value: GLib.Variant): void
    get_enabled(): boolean
    get_name(): string
    get_parameter_type(): GLib.VariantType
    get_state(): GLib.Variant
    get_state_hint(): GLib.Variant | null
    get_state_type(): GLib.VariantType
    /* Virtual methods of Action */
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
    new (config: Action_ConstructProps): Action
}
export declare class Action_Static {
    name_is_valid(action_name: string): boolean
    parse_detailed_name(detailed_name: string, action_name: string, target_value: GLib.Variant): boolean
    print_detailed_name(action_name: string, target_value: GLib.Variant | null): string
}
export declare var Action: Action_Static
export interface ActionGroup_ConstructProps {
}
export interface ActionGroup {
    /* Methods of ActionGroup */
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
    query_action(action_name: string, enabled: boolean, parameter_type: GLib.VariantType | null, state_type: GLib.VariantType | null, state_hint: GLib.Variant | null, state: GLib.Variant | null): boolean
    /* Virtual methods of ActionGroup */
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
    vfunc_query_action(action_name: string, enabled: boolean, parameter_type: GLib.VariantType | null, state_type: GLib.VariantType | null, state_hint: GLib.Variant | null, state: GLib.Variant | null): boolean
    /* Signals of ActionGroup */
    connect(sigName: "action-added", callback: ((action_name: string) => void))
    connect(sigName: "action-enabled-changed", callback: ((action_name: string, enabled: boolean) => void))
    connect(sigName: "action-removed", callback: ((action_name: string) => void))
    connect(sigName: "action-state-changed", callback: ((action_name: string, value: GLib.Variant) => void))
}
export interface ActionGroup_Static {
    new (config: ActionGroup_ConstructProps): ActionGroup
}
export declare var ActionGroup: ActionGroup_Static
export interface ActionMap_ConstructProps {
}
export interface ActionMap {
    /* Methods of ActionMap */
    add_action(action: Action): void
    add_action_entries(entries: ActionEntry[], n_entries: number, user_data: object): void
    lookup_action(action_name: string): Action
    remove_action(action_name: string): void
    /* Virtual methods of ActionMap */
    vfunc_add_action(action: Action): void
    vfunc_lookup_action(action_name: string): Action
    vfunc_remove_action(action_name: string): void
}
export interface ActionMap_Static {
    new (config: ActionMap_ConstructProps): ActionMap
}
export declare var ActionMap: ActionMap_Static
export interface AppInfo_ConstructProps {
}
export interface AppInfo {
    /* Methods of AppInfo */
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
    /* Virtual methods of AppInfo */
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
    new (config: AppInfo_ConstructProps): AppInfo
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
export interface AsyncInitable_ConstructProps {
}
export interface AsyncInitable {
    /* Methods of AsyncInitable */
    init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    init_finish(res: AsyncResult): boolean
    new_finish(res: AsyncResult): GObject.Object
    /* Virtual methods of AsyncInitable */
    vfunc_init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_init_finish(res: AsyncResult): boolean
}
export interface AsyncInitable_Static {
    new (config: AsyncInitable_ConstructProps): AsyncInitable
}
export declare class AsyncInitable_Static {
    newv_async(object_type: number, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
}
export declare var AsyncInitable: AsyncInitable_Static
export interface AsyncResult_ConstructProps {
}
export interface AsyncResult {
    /* Methods of AsyncResult */
    get_source_object(): GObject.Object
    get_user_data(): object
    is_tagged(source_tag: object): boolean
    legacy_propagate_error(): boolean
    /* Virtual methods of AsyncResult */
    vfunc_get_source_object(): GObject.Object
    vfunc_get_user_data(): object
    vfunc_is_tagged(source_tag: object): boolean
}
export interface AsyncResult_Static {
    new (config: AsyncResult_ConstructProps): AsyncResult
}
export declare var AsyncResult: AsyncResult_Static
export interface Converter_ConstructProps {
}
export interface Converter {
    /* Methods of Converter */
    convert(inbuf: number[], inbuf_size: number, outbuf: object, outbuf_size: number, flags: ConverterFlags, bytes_read: number, bytes_written: number): ConverterResult
    reset(): void
    /* Virtual methods of Converter */
    vfunc_convert(inbuf: number[], inbuf_size: number, outbuf: object, outbuf_size: number, flags: ConverterFlags, bytes_read: number, bytes_written: number): ConverterResult
    vfunc_reset(): void
}
export interface Converter_Static {
    new (config: Converter_ConstructProps): Converter
}
export declare var Converter: Converter_Static
export interface DBusInterface_ConstructProps {
}
export interface DBusInterface {
    /* Methods of DBusInterface */
    dup_object(): DBusObject
    get_info(): DBusInterfaceInfo
    set_object(object: DBusObject | null): void
    /* Virtual methods of DBusInterface */
    vfunc_dup_object(): DBusObject
    vfunc_get_info(): DBusInterfaceInfo
    vfunc_set_object(object: DBusObject | null): void
}
export interface DBusInterface_Static {
    new (config: DBusInterface_ConstructProps): DBusInterface
}
export declare var DBusInterface: DBusInterface_Static
export interface DBusObject_ConstructProps {
}
export interface DBusObject {
    /* Methods of DBusObject */
    get_interface(interface_name: string): DBusInterface
    get_interfaces(): GLib.List
    get_object_path(): string
    /* Virtual methods of DBusObject */
    vfunc_get_interface(interface_name: string): DBusInterface
    vfunc_get_interfaces(): GLib.List
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: DBusInterface): void
    vfunc_interface_removed(interface_: DBusInterface): void
    /* Signals of DBusObject */
    connect(sigName: "interface-added", callback: ((interface: DBusInterface) => void))
    connect(sigName: "interface-removed", callback: ((interface: DBusInterface) => void))
}
export interface DBusObject_Static {
    new (config: DBusObject_ConstructProps): DBusObject
}
export declare var DBusObject: DBusObject_Static
export interface DBusObjectManager_ConstructProps {
}
export interface DBusObjectManager {
    /* Methods of DBusObjectManager */
    get_interface(object_path: string, interface_name: string): DBusInterface
    get_object(object_path: string): DBusObject
    get_object_path(): string
    get_objects(): GLib.List
    /* Virtual methods of DBusObjectManager */
    vfunc_get_interface(object_path: string, interface_name: string): DBusInterface
    vfunc_get_object(object_path: string): DBusObject
    vfunc_get_object_path(): string
    vfunc_get_objects(): GLib.List
    vfunc_interface_added(object: DBusObject, interface_: DBusInterface): void
    vfunc_interface_removed(object: DBusObject, interface_: DBusInterface): void
    vfunc_object_added(object: DBusObject): void
    vfunc_object_removed(object: DBusObject): void
    /* Signals of DBusObjectManager */
    connect(sigName: "interface-added", callback: ((object: DBusObject, interface: DBusInterface) => void))
    connect(sigName: "interface-removed", callback: ((object: DBusObject, interface: DBusInterface) => void))
    connect(sigName: "object-added", callback: ((object: DBusObject) => void))
    connect(sigName: "object-removed", callback: ((object: DBusObject) => void))
}
export interface DBusObjectManager_Static {
    new (config: DBusObjectManager_ConstructProps): DBusObjectManager
}
export declare var DBusObjectManager: DBusObjectManager_Static
export interface DatagramBased_ConstructProps {
}
export interface DatagramBased {
    /* Methods of DatagramBased */
    condition_check(condition: GLib.IOCondition): GLib.IOCondition
    condition_wait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable | null): boolean
    create_source(condition: GLib.IOCondition, cancellable: Cancellable | null): GLib.Source
    receive_messages(messages: InputMessage, num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number
    send_messages(messages: OutputMessage, num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number
    /* Virtual methods of DatagramBased */
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable | null): boolean
    vfunc_create_source(condition: GLib.IOCondition, cancellable: Cancellable | null): GLib.Source
    vfunc_receive_messages(messages: InputMessage, num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number
    vfunc_send_messages(messages: OutputMessage, num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number
}
export interface DatagramBased_Static {
    new (config: DatagramBased_ConstructProps): DatagramBased
}
export declare var DatagramBased: DatagramBased_Static
export interface DesktopAppInfoLookup_ConstructProps {
}
export interface DesktopAppInfoLookup {
    /* Methods of DesktopAppInfoLookup */
    get_default_for_uri_scheme(uri_scheme: string): AppInfo
    /* Virtual methods of DesktopAppInfoLookup */
    vfunc_get_default_for_uri_scheme(uri_scheme: string): AppInfo
}
export interface DesktopAppInfoLookup_Static {
    new (config: DesktopAppInfoLookup_ConstructProps): DesktopAppInfoLookup
}
export declare var DesktopAppInfoLookup: DesktopAppInfoLookup_Static
export interface Drive_ConstructProps {
}
export interface Drive {
    /* Methods of Drive */
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
    /* Virtual methods of Drive */
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
    /* Signals of Drive */
    connect(sigName: "changed", callback: (() => void))
    connect(sigName: "disconnected", callback: (() => void))
    connect(sigName: "eject-button", callback: (() => void))
    connect(sigName: "stop-button", callback: (() => void))
}
export interface Drive_Static {
    new (config: Drive_ConstructProps): Drive
}
export declare var Drive: Drive_Static
export interface File_ConstructProps {
}
export interface File {
    /* Methods of File */
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
    load_contents(cancellable: Cancellable | null, contents: number[], length: number | null, etag_out: string | null): boolean
    load_contents_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    load_contents_finish(res: AsyncResult, contents: number[], length: number | null, etag_out: string | null): boolean
    load_partial_contents_finish(res: AsyncResult, contents: number[], length: number | null, etag_out: string | null): boolean
    make_directory(cancellable: Cancellable | null): boolean
    make_directory_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    make_directory_finish(result: AsyncResult): boolean
    make_directory_with_parents(cancellable: Cancellable | null): boolean
    make_symbolic_link(symlink_value: string, cancellable: Cancellable | null): boolean
    measure_disk_usage_finish(result: AsyncResult, disk_usage: number | null, num_dirs: number | null, num_files: number | null): boolean
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
    replace_contents(contents: number[], length: number, etag: string | null, make_backup: boolean, flags: FileCreateFlags, new_etag: string | null, cancellable: Cancellable | null): boolean
    replace_contents_async(contents: number[], length: number, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    replace_contents_bytes_async(contents: GLib.Bytes, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    replace_contents_finish(res: AsyncResult, new_etag: string | null): boolean
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
    set_attributes_finish(result: AsyncResult, info: FileInfo): boolean
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
    /* Virtual methods of File */
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
    vfunc_measure_disk_usage_finish(result: AsyncResult, disk_usage: number | null, num_dirs: number | null, num_files: number | null): boolean
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
    vfunc_set_attributes_finish(result: AsyncResult, info: FileInfo): boolean
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
    new (config: File_ConstructProps): File
}
export declare class File_Static {
    new_for_commandline_arg(arg: string): File
    new_for_commandline_arg_and_cwd(arg: string, cwd: string): File
    new_for_path(path: string): File
    new_for_uri(uri: string): File
    new_tmp(tmpl: string, iostream: FileIOStream): File
    parse_name(parse_name: string): File
}
export declare var File: File_Static
export interface FileDescriptorBased_ConstructProps {
}
export interface FileDescriptorBased {
    /* Methods of FileDescriptorBased */
    get_fd(): number
    /* Virtual methods of FileDescriptorBased */
    vfunc_get_fd(): number
}
export interface FileDescriptorBased_Static {
    new (config: FileDescriptorBased_ConstructProps): FileDescriptorBased
}
export declare var FileDescriptorBased: FileDescriptorBased_Static
export interface Icon_ConstructProps {
}
export interface Icon {
    /* Methods of Icon */
    equal(icon2: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Virtual methods of Icon */
    vfunc_equal(icon2: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
}
export interface Icon_Static {
    new (config: Icon_ConstructProps): Icon
}
export declare class Icon_Static {
    deserialize(value: GLib.Variant): Icon
    hash(icon: object): number
    new_for_string(str: string): Icon
}
export declare var Icon: Icon_Static
export interface Initable_ConstructProps {
}
export interface Initable {
    /* Methods of Initable */
    init(cancellable: Cancellable | null): boolean
    /* Virtual methods of Initable */
    vfunc_init(cancellable: Cancellable | null): boolean
}
export interface Initable_Static {
    new (config: Initable_ConstructProps): Initable
}
export declare class Initable_Static {
    newv(object_type: number, n_parameters: number, parameters: GObject.Parameter[], cancellable: Cancellable | null): GObject.Object
}
export declare var Initable: Initable_Static
export interface ListModel_ConstructProps {
}
export interface ListModel {
    /* Methods of ListModel */
    get_item_type(): number
    get_n_items(): number
    get_object(position: number): GObject.Object | null
    items_changed(position: number, removed: number, added: number): void
    /* Virtual methods of ListModel */
    vfunc_get_item_type(): number
    vfunc_get_n_items(): number
    /* Signals of ListModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void))
}
export interface ListModel_Static {
    new (config: ListModel_ConstructProps): ListModel
}
export declare var ListModel: ListModel_Static
export interface LoadableIcon_ConstructProps {
}
export interface LoadableIcon {
    /* Methods of LoadableIcon */
    load(size: number, type: string | null, cancellable: Cancellable | null): InputStream
    load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    load_finish(res: AsyncResult, type: string | null): InputStream
    /* Virtual methods of LoadableIcon */
    vfunc_load(size: number, type: string | null, cancellable: Cancellable | null): InputStream
    vfunc_load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_load_finish(res: AsyncResult, type: string | null): InputStream
}
export interface LoadableIcon_Static {
    new (config: LoadableIcon_ConstructProps): LoadableIcon
}
export declare var LoadableIcon: LoadableIcon_Static
export interface Mount_ConstructProps {
}
export interface Mount {
    /* Methods of Mount */
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
    /* Virtual methods of Mount */
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
    /* Signals of Mount */
    connect(sigName: "changed", callback: (() => void))
    connect(sigName: "pre-unmount", callback: (() => void))
    connect(sigName: "unmounted", callback: (() => void))
}
export interface Mount_Static {
    new (config: Mount_ConstructProps): Mount
}
export declare var Mount: Mount_Static
export interface NetworkMonitor_ConstructProps {
    /* Properties of NetworkMonitor */
}
export interface NetworkMonitor {
    /* Properties of NetworkMonitor */
    readonly connectivity:NetworkConnectivity
    readonly network_available:boolean
    readonly network_metered:boolean
    /* Methods of NetworkMonitor */
    can_reach(connectable: SocketConnectable, cancellable: Cancellable | null): boolean
    can_reach_async(connectable: SocketConnectable, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    can_reach_finish(result: AsyncResult): boolean
    get_connectivity(): NetworkConnectivity
    get_network_available(): boolean
    get_network_metered(): boolean
    /* Virtual methods of NetworkMonitor */
    vfunc_can_reach(connectable: SocketConnectable, cancellable: Cancellable | null): boolean
    vfunc_can_reach_async(connectable: SocketConnectable, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_can_reach_finish(result: AsyncResult): boolean
    vfunc_network_changed(available: boolean): void
    /* Signals of NetworkMonitor */
    connect(sigName: "network-changed", callback: ((available: boolean) => void))
}
export interface NetworkMonitor_Static {
    new (config: NetworkMonitor_ConstructProps): NetworkMonitor
}
export declare class NetworkMonitor_Static {
    get_default(): NetworkMonitor
}
export declare var NetworkMonitor: NetworkMonitor_Static
export interface PollableInputStream_ConstructProps {
}
export interface PollableInputStream {
    /* Methods of PollableInputStream */
    can_poll(): boolean
    create_source(cancellable: Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of PollableInputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable: Cancellable | null): GLib.Source
    vfunc_is_readable(): boolean
    vfunc_read_nonblocking(buffer: number[], count: number): number
}
export interface PollableInputStream_Static {
    new (config: PollableInputStream_ConstructProps): PollableInputStream
}
export declare var PollableInputStream: PollableInputStream_Static
export interface PollableOutputStream_ConstructProps {
}
export interface PollableOutputStream {
    /* Methods of PollableOutputStream */
    can_poll(): boolean
    create_source(cancellable: Cancellable | null): GLib.Source
    is_writable(): boolean
    write_nonblocking(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of PollableOutputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable: Cancellable | null): GLib.Source
    vfunc_is_writable(): boolean
    vfunc_write_nonblocking(buffer: number[], count: number): number
}
export interface PollableOutputStream_Static {
    new (config: PollableOutputStream_ConstructProps): PollableOutputStream
}
export declare var PollableOutputStream: PollableOutputStream_Static
export interface Proxy_ConstructProps {
}
export interface Proxy {
    /* Methods of Proxy */
    connect(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null): IOStream
    connect_async(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): IOStream
    supports_hostname(): boolean
    /* Virtual methods of Proxy */
    vfunc_connect(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null): IOStream
    vfunc_connect_async(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_connect_finish(result: AsyncResult): IOStream
    vfunc_supports_hostname(): boolean
}
export interface Proxy_Static {
    new (config: Proxy_ConstructProps): Proxy
}
export declare class Proxy_Static {
    get_default_for_protocol(protocol: string): Proxy
}
export declare var Proxy: Proxy_Static
export interface ProxyResolver_ConstructProps {
}
export interface ProxyResolver {
    /* Methods of ProxyResolver */
    is_supported(): boolean
    lookup(uri: string, cancellable: Cancellable | null): string[]
    lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_finish(result: AsyncResult): string[]
    /* Virtual methods of ProxyResolver */
    vfunc_is_supported(): boolean
    vfunc_lookup(uri: string, cancellable: Cancellable | null): string[]
    vfunc_lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_finish(result: AsyncResult): string[]
}
export interface ProxyResolver_Static {
    new (config: ProxyResolver_ConstructProps): ProxyResolver
}
export declare class ProxyResolver_Static {
    get_default(): ProxyResolver
}
export declare var ProxyResolver: ProxyResolver_Static
export interface RemoteActionGroup_ConstructProps {
}
export interface RemoteActionGroup {
    /* Methods of RemoteActionGroup */
    activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    /* Virtual methods of RemoteActionGroup */
    vfunc_activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    vfunc_change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
}
export interface RemoteActionGroup_Static {
    new (config: RemoteActionGroup_ConstructProps): RemoteActionGroup
}
export declare var RemoteActionGroup: RemoteActionGroup_Static
export interface Seekable_ConstructProps {
}
export interface Seekable {
    /* Methods of Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable: Cancellable | null): boolean
    /* Virtual methods of Seekable */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable: Cancellable | null): boolean
}
export interface Seekable_Static {
    new (config: Seekable_ConstructProps): Seekable
}
export declare var Seekable: Seekable_Static
export interface SocketConnectable_ConstructProps {
}
export interface SocketConnectable {
    /* Methods of SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of SocketConnectable */
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
}
export interface SocketConnectable_Static {
    new (config: SocketConnectable_ConstructProps): SocketConnectable
}
export declare var SocketConnectable: SocketConnectable_Static
export interface TlsBackend_ConstructProps {
}
export interface TlsBackend {
    /* Methods of TlsBackend */
    get_certificate_type(): number
    get_client_connection_type(): number
    get_default_database(): TlsDatabase
    get_file_database_type(): number
    get_server_connection_type(): number
    supports_tls(): boolean
    /* Virtual methods of TlsBackend */
    vfunc_get_default_database(): TlsDatabase
    vfunc_supports_tls(): boolean
}
export interface TlsBackend_Static {
    new (config: TlsBackend_ConstructProps): TlsBackend
}
export declare class TlsBackend_Static {
    get_default(): TlsBackend
}
export declare var TlsBackend: TlsBackend_Static
export interface TlsClientConnection_ConstructProps {
    /* Properties of TlsClientConnection */
    server_identity?:SocketConnectable
    use_ssl3?:boolean
    validation_flags?:TlsCertificateFlags
}
export interface TlsClientConnection {
    /* Properties of TlsClientConnection */
    readonly accepted_cas:GLib.List
    server_identity:SocketConnectable
    use_ssl3:boolean
    validation_flags:TlsCertificateFlags
    /* Methods of TlsClientConnection */
    copy_session_state(source: TlsClientConnection): void
    get_accepted_cas(): GLib.List
    get_server_identity(): SocketConnectable
    get_use_ssl3(): boolean
    get_validation_flags(): TlsCertificateFlags
    set_server_identity(identity: SocketConnectable): void
    set_use_ssl3(use_ssl3: boolean): void
    set_validation_flags(flags: TlsCertificateFlags): void
    /* Virtual methods of TlsClientConnection */
    vfunc_copy_session_state(source: TlsClientConnection): void
}
export interface TlsClientConnection_Static {
    new (config: TlsClientConnection_ConstructProps): TlsClientConnection
}
export declare class TlsClientConnection_Static {
    new(base_io_stream: IOStream, server_identity: SocketConnectable | null): TlsClientConnection
}
export declare var TlsClientConnection: TlsClientConnection_Static
export interface TlsFileDatabase_ConstructProps {
    /* Properties of TlsFileDatabase */
    anchors?:string
}
export interface TlsFileDatabase {
    /* Properties of TlsFileDatabase */
    anchors:string
}
export interface TlsFileDatabase_Static {
    new (config: TlsFileDatabase_ConstructProps): TlsFileDatabase
}
export declare class TlsFileDatabase_Static {
    new(anchors: string): TlsFileDatabase
}
export declare var TlsFileDatabase: TlsFileDatabase_Static
export interface TlsServerConnection_ConstructProps {
    /* Properties of TlsServerConnection */
    authentication_mode?:TlsAuthenticationMode
}
export interface TlsServerConnection {
    /* Properties of TlsServerConnection */
    authentication_mode:TlsAuthenticationMode
}
export interface TlsServerConnection_Static {
    new (config: TlsServerConnection_ConstructProps): TlsServerConnection
}
export declare class TlsServerConnection_Static {
    new(base_io_stream: IOStream, certificate: TlsCertificate | null): TlsServerConnection
}
export declare var TlsServerConnection: TlsServerConnection_Static
export interface Volume_ConstructProps {
}
export interface Volume {
    /* Methods of Volume */
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
    /* Virtual methods of Volume */
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
    /* Signals of Volume */
    connect(sigName: "changed", callback: (() => void))
    connect(sigName: "removed", callback: (() => void))
}
export interface Volume_Static {
    new (config: Volume_ConstructProps): Volume
}
export declare var Volume: Volume_Static
export interface AppInfoMonitor_ConstructProps {
}
export interface AppInfoMonitor {
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of AppInfoMonitor */
    connect(sigName: "changed", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AppInfoMonitor_Static {
    new (config: AppInfoMonitor_ConstructProps): AppInfoMonitor
}
export declare class AppInfoMonitor_Static {
    get(): AppInfoMonitor
}
export declare var AppInfoMonitor: AppInfoMonitor_Static
export interface AppLaunchContext_ConstructProps {
}
export interface AppLaunchContext {
    /* Methods of AppLaunchContext */
    get_display(info: AppInfo, files: GLib.List): string
    get_environment(): string[]
    get_startup_notify_id(info: AppInfo, files: GLib.List): string
    launch_failed(startup_notify_id: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of AppLaunchContext */
    vfunc_get_display(info: AppInfo, files: GLib.List): string
    vfunc_get_startup_notify_id(info: AppInfo, files: GLib.List): string
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launched(info: AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of AppLaunchContext */
    connect(sigName: "launch-failed", callback: ((startup_notify_id: string) => void))
    connect(sigName: "launched", callback: ((info: AppInfo, platform_data: GLib.Variant) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface AppLaunchContext_Static {
    new (config: AppLaunchContext_ConstructProps): AppLaunchContext
}
export declare var AppLaunchContext: AppLaunchContext_Static
export interface Application_ConstructProps {
    /* Properties of Application */
    action_group?:ActionGroup
    application_id?:string
    flags?:ApplicationFlags
    inactivity_timeout?:number
    resource_base_path?:string
}
export interface Application {
    /* Properties of Application */
    action_group:ActionGroup
    application_id:string
    flags:ApplicationFlags
    inactivity_timeout:number
    readonly is_busy:boolean
    readonly is_registered:boolean
    readonly is_remote:boolean
    resource_base_path:string
    /* Methods of Application */
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
    open(files: File[], n_files: number, hint: string): void
    quit(): void
    register(cancellable: Cancellable | null): boolean
    release(): void
    run(argc: number, argv: string[] | null): number
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Application */
    vfunc_activate(): void
    vfunc_add_platform_data(builder: GLib.VariantBuilder): void
    vfunc_after_emit(platform_data: GLib.Variant): void
    vfunc_before_emit(platform_data: GLib.Variant): void
    vfunc_command_line(command_line: ApplicationCommandLine): number
    vfunc_dbus_register(connection: DBusConnection, object_path: string): boolean
    vfunc_dbus_unregister(connection: DBusConnection, object_path: string): void
    vfunc_handle_local_options(options: GLib.VariantDict): number
    vfunc_local_command_line(arguments_: string[], exit_status: number): boolean
    vfunc_open(files: File[], n_files: number, hint: string): void
    vfunc_quit_mainloop(): void
    vfunc_run_mainloop(): void
    vfunc_shutdown(): void
    vfunc_startup(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Application */
    connect(sigName: "activate", callback: (() => void))
    connect(sigName: "command-line", callback: ((command_line: ApplicationCommandLine) => number))
    connect(sigName: "handle-local-options", callback: ((options: GLib.VariantDict) => number))
    connect(sigName: "open", callback: ((files: File[], n_files: number, hint: string) => void))
    connect(sigName: "shutdown", callback: (() => void))
    connect(sigName: "startup", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Application_Static {
    new (config: Application_ConstructProps): Application
}
export declare class Application_Static {
    get_default(): Application
    id_is_valid(application_id: string): boolean
}
export declare var Application: Application_Static
export interface ApplicationCommandLine_ConstructProps {
    /* Properties of ApplicationCommandLine */
    "arguments"?:GLib.Variant
    options?:GLib.Variant
    platform_data?:GLib.Variant
}
export interface ApplicationCommandLine {
    /* Properties of ApplicationCommandLine */
    readonly is_remote:boolean
    /* Methods of ApplicationCommandLine */
    create_file_for_arg(arg: string): File
    get_arguments(argc: number | null): string[]
    get_cwd(): string
    get_environ(): string[]
    get_exit_status(): number
    get_is_remote(): boolean
    get_options_dict(): GLib.VariantDict
    get_platform_data(): GLib.Variant | null
    get_stdin(): InputStream
    getenv(name: string): string
    set_exit_status(exit_status: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of ApplicationCommandLine */
    vfunc_get_stdin(): InputStream
    vfunc_print_literal(message: string): void
    vfunc_printerr_literal(message: string): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ApplicationCommandLine_Static {
    new (config: ApplicationCommandLine_ConstructProps): ApplicationCommandLine
}
export declare var ApplicationCommandLine: ApplicationCommandLine_Static
export interface BufferedInputStream_ConstructProps {
    /* Properties of BufferedInputStream */
    buffer_size?:number
    /* Properties of FilterInputStream */
    base_stream?:InputStream
    close_base_stream?:boolean
}
export interface BufferedInputStream {
    /* Properties of BufferedInputStream */
    buffer_size:number
    /* Properties of FilterInputStream */
    close_base_stream:boolean
    /* Methods of BufferedInputStream */
    fill(count: number, cancellable: Cancellable | null): number
    fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    fill_finish(result: AsyncResult): number
    get_available(): number
    get_buffer_size(): number
    peek(buffer: number[], offset: number, count: number): number
    peek_buffer(count: number): number[]
    read_byte(cancellable: Cancellable | null): number
    set_buffer_size(size: number): void
    /* Methods of FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Cancellable | null): number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult, bytes_read: number): boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): GLib.Bytes
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of BufferedInputStream */
    vfunc_fill(count: number, cancellable: Cancellable | null): number
    vfunc_fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_fill_finish(result: AsyncResult): number
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface BufferedInputStream_Static {
    new (config: BufferedInputStream_ConstructProps): BufferedInputStream
}
export declare var BufferedInputStream: BufferedInputStream_Static
export interface BufferedOutputStream_ConstructProps {
    /* Properties of BufferedOutputStream */
    auto_grow?:boolean
    buffer_size?:number
    /* Properties of FilterOutputStream */
    base_stream?:OutputStream
    close_base_stream?:boolean
}
export interface BufferedOutputStream {
    /* Properties of BufferedOutputStream */
    auto_grow:boolean
    buffer_size:number
    /* Properties of FilterOutputStream */
    /* Methods of BufferedOutputStream */
    get_auto_grow(): boolean
    get_buffer_size(): number
    set_auto_grow(auto_grow: boolean): void
    set_buffer_size(size: number): void
    /* Methods of FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of OutputStream */
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
    write(buffer: number[], count: number, cancellable: Cancellable | null): number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable | null): boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult, bytes_written: number): boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface BufferedOutputStream_Static {
    new (config: BufferedOutputStream_ConstructProps): BufferedOutputStream
}
export declare var BufferedOutputStream: BufferedOutputStream_Static
export interface BytesIcon_ConstructProps {
    /* Properties of BytesIcon */
    bytes?:GLib.Bytes
}
export interface BytesIcon {
    /* Properties of BytesIcon */
    /* Methods of BytesIcon */
    get_bytes(): GLib.Bytes
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface BytesIcon_Static {
    new (config: BytesIcon_ConstructProps): BytesIcon
}
export declare var BytesIcon: BytesIcon_Static
export interface Cancellable_ConstructProps {
}
export interface Cancellable {
    /* Methods of Cancellable */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Cancellable */
    vfunc_cancelled(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Cancellable */
    connect(sigName: "cancelled", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Cancellable_Static {
    new (config: Cancellable_ConstructProps): Cancellable
}
export declare class Cancellable_Static {
    get_current(): Cancellable | null
}
export declare var Cancellable: Cancellable_Static
export interface CharsetConverter_ConstructProps {
    /* Properties of CharsetConverter */
    from_charset?:string
    to_charset?:string
    use_fallback?:boolean
}
export interface CharsetConverter {
    /* Properties of CharsetConverter */
    use_fallback:boolean
    /* Methods of CharsetConverter */
    get_num_fallbacks(): number
    get_use_fallback(): boolean
    set_use_fallback(use_fallback: boolean): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface CharsetConverter_Static {
    new (config: CharsetConverter_ConstructProps): CharsetConverter
}
export declare var CharsetConverter: CharsetConverter_Static
export interface ConverterInputStream_ConstructProps {
    /* Properties of ConverterInputStream */
    converter?:Converter
    /* Properties of FilterInputStream */
    base_stream?:InputStream
    close_base_stream?:boolean
}
export interface ConverterInputStream {
    /* Properties of ConverterInputStream */
    /* Properties of FilterInputStream */
    close_base_stream:boolean
    /* Methods of ConverterInputStream */
    get_converter(): Converter
    /* Methods of FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Cancellable | null): number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult, bytes_read: number): boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): GLib.Bytes
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ConverterInputStream_Static {
    new (config: ConverterInputStream_ConstructProps): ConverterInputStream
}
export declare var ConverterInputStream: ConverterInputStream_Static
export interface ConverterOutputStream_ConstructProps {
    /* Properties of ConverterOutputStream */
    converter?:Converter
    /* Properties of FilterOutputStream */
    base_stream?:OutputStream
    close_base_stream?:boolean
}
export interface ConverterOutputStream {
    /* Properties of ConverterOutputStream */
    /* Properties of FilterOutputStream */
    /* Methods of ConverterOutputStream */
    get_converter(): Converter
    /* Methods of FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of OutputStream */
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
    write(buffer: number[], count: number, cancellable: Cancellable | null): number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable | null): boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult, bytes_written: number): boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ConverterOutputStream_Static {
    new (config: ConverterOutputStream_ConstructProps): ConverterOutputStream
}
export declare var ConverterOutputStream: ConverterOutputStream_Static
export interface Credentials_ConstructProps {
}
export interface Credentials {
    /* Methods of Credentials */
    get_unix_pid(): number
    get_unix_user(): number
    is_same_user(other_credentials: Credentials): boolean
    set_native(native_type: CredentialsType, native: object): void
    set_unix_user(uid: number): boolean
    to_string(): string
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Credentials_Static {
    new (config: Credentials_ConstructProps): Credentials
}
export declare var Credentials: Credentials_Static
export interface DBusActionGroup_ConstructProps {
}
export interface DBusActionGroup {
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusActionGroup_Static {
    new (config: DBusActionGroup_ConstructProps): DBusActionGroup
}
export declare class DBusActionGroup_Static {
    get(connection: DBusConnection, bus_name: string, object_path: string): DBusActionGroup
}
export declare var DBusActionGroup: DBusActionGroup_Static
export interface DBusAuthObserver_ConstructProps {
}
export interface DBusAuthObserver {
    /* Methods of DBusAuthObserver */
    allow_mechanism(mechanism: string): boolean
    authorize_authenticated_peer(stream: IOStream, credentials: Credentials | null): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DBusAuthObserver */
    connect(sigName: "allow-mechanism", callback: ((mechanism: string) => boolean))
    connect(sigName: "authorize-authenticated-peer", callback: ((stream: IOStream, credentials: Credentials | null) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusAuthObserver_Static {
    new (config: DBusAuthObserver_ConstructProps): DBusAuthObserver
}
export declare var DBusAuthObserver: DBusAuthObserver_Static
export interface DBusConnection_ConstructProps {
    /* Properties of DBusConnection */
    address?:string
    authentication_observer?:DBusAuthObserver
    exit_on_close?:boolean
    flags?:DBusConnectionFlags
    guid?:string
    stream?:IOStream
}
export interface DBusConnection {
    /* Properties of DBusConnection */
    readonly capabilities:DBusCapabilityFlags
    readonly closed:boolean
    exit_on_close:boolean
    readonly unique_name:string
    /* Methods of DBusConnection */
    add_filter(filter_function: DBusMessageFilterFunction, user_data: object, user_data_free_func: GLib.DestroyNotify): number
    call(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    call_finish(res: AsyncResult): GLib.Variant
    call_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null): GLib.Variant
    call_with_unix_fd_list(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    call_with_unix_fd_list_finish(out_fd_list: UnixFDList | null, res: AsyncResult): GLib.Variant
    call_with_unix_fd_list_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, out_fd_list: UnixFDList | null, cancellable: Cancellable | null): GLib.Variant
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
    register_object(object_path: string, interface_info: DBusInterfaceInfo, vtable: DBusInterfaceVTable | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number
    register_object_with_closures(object_path: string, interface_info: DBusInterfaceInfo, method_call_closure: GObject.Closure | null, get_property_closure: GObject.Closure | null, set_property_closure: GObject.Closure | null): number
    register_subtree(object_path: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, user_data: object, user_data_free_func: GLib.DestroyNotify): number
    remove_filter(filter_id: number): void
    send_message(message: DBusMessage, flags: DBusSendMessageFlags, out_serial: number | null): boolean
    send_message_with_reply(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, out_serial: number | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    send_message_with_reply_finish(res: AsyncResult): DBusMessage
    send_message_with_reply_sync(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, out_serial: number | null, cancellable: Cancellable | null): DBusMessage
    set_exit_on_close(exit_on_close: boolean): void
    signal_subscribe(sender: string | null, interface_name: string | null, member: string | null, object_path: string | null, arg0: string | null, flags: DBusSignalFlags, callback: DBusSignalCallback, user_data: object, user_data_free_func: GLib.DestroyNotify | null): number
    signal_unsubscribe(subscription_id: number): void
    start_message_processing(): void
    unexport_action_group(export_id: number): void
    unexport_menu_model(export_id: number): void
    unregister_object(registration_id: number): boolean
    unregister_subtree(registration_id: number): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DBusConnection */
    connect(sigName: "closed", callback: ((remote_peer_vanished: boolean, error: GLib.Error | null) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusConnection_Static {
    new (config: DBusConnection_ConstructProps): DBusConnection
}
export declare class DBusConnection_Static {
    new(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    new_for_address(address: string, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
}
export declare var DBusConnection: DBusConnection_Static
export interface DBusInterfaceSkeleton_ConstructProps {
    /* Properties of DBusInterfaceSkeleton */
    g_flags?:DBusInterfaceSkeletonFlags
}
export interface DBusInterfaceSkeleton {
    /* Properties of DBusInterfaceSkeleton */
    g_flags:DBusInterfaceSkeletonFlags
    /* Methods of DBusInterfaceSkeleton */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: DBusMethodInvocation): boolean
    vfunc_get_info(): DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: DBusMethodInvocation) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusInterfaceSkeleton_Static {
    new (config: DBusInterfaceSkeleton_ConstructProps): DBusInterfaceSkeleton
}
export declare var DBusInterfaceSkeleton: DBusInterfaceSkeleton_Static
export interface DBusMenuModel_ConstructProps {
}
export interface DBusMenuModel {
    /* Methods of MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number, attributes: GLib.HashTable): void
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number, links: GLib.HashTable): void
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of MenuModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusMenuModel_Static {
    new (config: DBusMenuModel_ConstructProps): DBusMenuModel
}
export declare class DBusMenuModel_Static {
    get(connection: DBusConnection, bus_name: string, object_path: string): DBusMenuModel
}
export declare var DBusMenuModel: DBusMenuModel_Static
export interface DBusMessage_ConstructProps {
    /* Properties of DBusMessage */
}
export interface DBusMessage {
    /* Properties of DBusMessage */
    readonly locked:boolean
    /* Methods of DBusMessage */
    copy(): DBusMessage
    get_arg0(): string
    get_body(): GLib.Variant
    get_byte_order(): DBusMessageByteOrder
    get_destination(): string
    get_error_name(): string
    get_flags(): DBusMessageFlags
    get_header(header_field: DBusMessageHeaderField): GLib.Variant
    get_header_fields(): number[]
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
    to_blob(out_size: number, capabilities: DBusCapabilityFlags): number[]
    to_gerror(): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusMessage_Static {
    new (config: DBusMessage_ConstructProps): DBusMessage
}
export declare class DBusMessage_Static {
    bytes_needed(blob: number[], blob_len: number): number
}
export declare var DBusMessage: DBusMessage_Static
export interface DBusMethodInvocation_ConstructProps {
}
export interface DBusMethodInvocation {
    /* Methods of DBusMethodInvocation */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusMethodInvocation_Static {
    new (config: DBusMethodInvocation_ConstructProps): DBusMethodInvocation
}
export declare var DBusMethodInvocation: DBusMethodInvocation_Static
export interface DBusObjectManagerClient_ConstructProps {
    /* Properties of DBusObjectManagerClient */
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
    /* Properties of DBusObjectManagerClient */
    readonly name_owner:string
    /* Methods of DBusObjectManagerClient */
    get_connection(): DBusConnection
    get_flags(): DBusObjectManagerClientFlags
    get_name(): string
    get_name_owner(): string | null
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of DBusObjectManagerClient */
    vfunc_interface_proxy_properties_changed(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_interface_proxy_signal(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: ((object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void))
    connect(sigName: "interface-proxy-signal", callback: ((object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusObjectManagerClient_Static {
    new (config: DBusObjectManagerClient_ConstructProps): DBusObjectManagerClient
}
export declare class DBusObjectManagerClient_Static {
    new(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    new_for_bus(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
}
export declare var DBusObjectManagerClient: DBusObjectManagerClient_Static
export interface DBusObjectManagerServer_ConstructProps {
    /* Properties of DBusObjectManagerServer */
    connection?:DBusConnection
    object_path?:string
}
export interface DBusObjectManagerServer {
    /* Properties of DBusObjectManagerServer */
    connection:DBusConnection
    /* Methods of DBusObjectManagerServer */
    export(object: DBusObjectSkeleton): void
    export_uniquely(object: DBusObjectSkeleton): void
    get_connection(): DBusConnection
    is_exported(object: DBusObjectSkeleton): boolean
    set_connection(connection: DBusConnection | null): void
    unexport(object_path: string): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusObjectManagerServer_Static {
    new (config: DBusObjectManagerServer_ConstructProps): DBusObjectManagerServer
}
export declare var DBusObjectManagerServer: DBusObjectManagerServer_Static
export interface DBusObjectProxy_ConstructProps {
    /* Properties of DBusObjectProxy */
    g_connection?:DBusConnection
    g_object_path?:string
}
export interface DBusObjectProxy {
    /* Properties of DBusObjectProxy */
    /* Methods of DBusObjectProxy */
    get_connection(): DBusConnection
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusObjectProxy_Static {
    new (config: DBusObjectProxy_ConstructProps): DBusObjectProxy
}
export declare var DBusObjectProxy: DBusObjectProxy_Static
export interface DBusObjectSkeleton_ConstructProps {
    /* Properties of DBusObjectSkeleton */
    g_object_path?:string
}
export interface DBusObjectSkeleton {
    /* Properties of DBusObjectSkeleton */
    g_object_path:string
    /* Methods of DBusObjectSkeleton */
    add_interface(interface_: DBusInterfaceSkeleton): void
    flush(): void
    remove_interface(interface_: DBusInterfaceSkeleton): void
    remove_interface_by_name(interface_name: string): void
    set_object_path(object_path: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of DBusObjectSkeleton */
    vfunc_authorize_method(interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: ((interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusObjectSkeleton_Static {
    new (config: DBusObjectSkeleton_ConstructProps): DBusObjectSkeleton
}
export declare var DBusObjectSkeleton: DBusObjectSkeleton_Static
export interface DBusProxy_ConstructProps {
    /* Properties of DBusProxy */
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
    /* Properties of DBusProxy */
    g_default_timeout:number
    g_interface_info:DBusInterfaceInfo
    readonly g_name_owner:string
    /* Methods of DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    call_finish(res: AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    call_with_unix_fd_list_finish(out_fd_list: UnixFDList | null, res: AsyncResult): GLib.Variant
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, out_fd_list: UnixFDList | null, cancellable: Cancellable | null): GLib.Variant
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changed_properties: GLib.Variant, invalidated_properties: string[]) => void))
    connect(sigName: "g-signal", callback: ((sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusProxy_Static {
    new (config: DBusProxy_ConstructProps): DBusProxy
}
export declare class DBusProxy_Static {
    new(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    new_for_bus(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
}
export declare var DBusProxy: DBusProxy_Static
export interface DBusServer_ConstructProps {
    /* Properties of DBusServer */
    address?:string
    authentication_observer?:DBusAuthObserver
    flags?:DBusServerFlags
    guid?:string
}
export interface DBusServer {
    /* Properties of DBusServer */
    readonly active:boolean
    readonly client_address:string
    /* Methods of DBusServer */
    get_client_address(): string
    get_flags(): DBusServerFlags
    get_guid(): string
    is_active(): boolean
    start(): void
    stop(): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DBusServer */
    connect(sigName: "new-connection", callback: ((connection: DBusConnection) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DBusServer_Static {
    new (config: DBusServer_ConstructProps): DBusServer
}
export declare var DBusServer: DBusServer_Static
export interface DataInputStream_ConstructProps {
    /* Properties of DataInputStream */
    byte_order?:DataStreamByteOrder
    newline_type?:DataStreamNewlineType
    /* Properties of BufferedInputStream */
    buffer_size?:number
    /* Properties of FilterInputStream */
    base_stream?:InputStream
    close_base_stream?:boolean
}
export interface DataInputStream {
    /* Properties of DataInputStream */
    byte_order:DataStreamByteOrder
    newline_type:DataStreamNewlineType
    /* Properties of BufferedInputStream */
    buffer_size:number
    /* Properties of FilterInputStream */
    close_base_stream:boolean
    /* Methods of DataInputStream */
    get_byte_order(): DataStreamByteOrder
    get_newline_type(): DataStreamNewlineType
    read_byte(cancellable: Cancellable | null): number
    read_int16(cancellable: Cancellable | null): number
    read_int32(cancellable: Cancellable | null): number
    read_int64(cancellable: Cancellable | null): number
    read_line(length: number, cancellable: Cancellable | null): number[] | null
    read_line_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_line_finish(result: AsyncResult, length: number): number[] | null
    read_line_finish_utf8(result: AsyncResult, length: number): string | null
    read_line_utf8(length: number, cancellable: Cancellable | null): string | null
    read_uint16(cancellable: Cancellable | null): number
    read_uint32(cancellable: Cancellable | null): number
    read_uint64(cancellable: Cancellable | null): number
    read_until(stop_chars: string, length: number, cancellable: Cancellable | null): string
    read_until_async(stop_chars: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_until_finish(result: AsyncResult, length: number): string
    read_upto(stop_chars: string, stop_chars_len: number, length: number, cancellable: Cancellable | null): string
    read_upto_async(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_upto_finish(result: AsyncResult, length: number): string
    set_byte_order(order: DataStreamByteOrder): void
    set_newline_type(type: DataStreamNewlineType): void
    /* Methods of BufferedInputStream */
    fill(count: number, cancellable: Cancellable | null): number
    fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    fill_finish(result: AsyncResult): number
    get_available(): number
    get_buffer_size(): number
    peek(buffer: number[], offset: number, count: number): number
    peek_buffer(count: number): number[]
    set_buffer_size(size: number): void
    /* Methods of FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Cancellable | null): number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult, bytes_read: number): boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): GLib.Bytes
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of BufferedInputStream */
    vfunc_fill(count: number, cancellable: Cancellable | null): number
    vfunc_fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_fill_finish(result: AsyncResult): number
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DataInputStream_Static {
    new (config: DataInputStream_ConstructProps): DataInputStream
}
export declare var DataInputStream: DataInputStream_Static
export interface DataOutputStream_ConstructProps {
    /* Properties of DataOutputStream */
    byte_order?:DataStreamByteOrder
    /* Properties of FilterOutputStream */
    base_stream?:OutputStream
    close_base_stream?:boolean
}
export interface DataOutputStream {
    /* Properties of DataOutputStream */
    byte_order:DataStreamByteOrder
    /* Properties of FilterOutputStream */
    /* Methods of DataOutputStream */
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
    /* Methods of FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of OutputStream */
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
    write(buffer: number[], count: number, cancellable: Cancellable | null): number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable | null): boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult, bytes_written: number): boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DataOutputStream_Static {
    new (config: DataOutputStream_ConstructProps): DataOutputStream
}
export declare var DataOutputStream: DataOutputStream_Static
export interface DesktopAppInfo_ConstructProps {
    /* Properties of DesktopAppInfo */
    filename?:string
}
export interface DesktopAppInfo {
    /* Properties of DesktopAppInfo */
    /* Methods of DesktopAppInfo */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface DesktopAppInfo_Static {
    new (config: DesktopAppInfo_ConstructProps): DesktopAppInfo
}
export declare class DesktopAppInfo_Static {
    get_implementations(interface: string): GLib.List
    search(search_string: string): any
    set_desktop_env(desktop_env: string): void
}
export declare var DesktopAppInfo: DesktopAppInfo_Static
export interface Emblem_ConstructProps {
    /* Properties of Emblem */
    icon?:GObject.Object
    origin?:EmblemOrigin
}
export interface Emblem {
    /* Properties of Emblem */
    /* Methods of Emblem */
    get_icon(): Icon
    get_origin(): EmblemOrigin
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Emblem_Static {
    new (config: Emblem_ConstructProps): Emblem
}
export declare var Emblem: Emblem_Static
export interface EmblemedIcon_ConstructProps {
    /* Properties of EmblemedIcon */
    gicon?:Icon
}
export interface EmblemedIcon {
    /* Properties of EmblemedIcon */
    /* Methods of EmblemedIcon */
    add_emblem(emblem: Emblem): void
    clear_emblems(): void
    get_emblems(): GLib.List
    get_icon(): Icon
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface EmblemedIcon_Static {
    new (config: EmblemedIcon_ConstructProps): EmblemedIcon
}
export declare var EmblemedIcon: EmblemedIcon_Static
export interface FileEnumerator_ConstructProps {
    /* Properties of FileEnumerator */
    container?:File
}
export interface FileEnumerator {
    /* Properties of FileEnumerator */
    /* Methods of FileEnumerator */
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    get_child(info: FileInfo): File
    get_container(): File
    has_pending(): boolean
    is_closed(): boolean
    iterate(out_info: FileInfo | null, out_child: File | null, cancellable: Cancellable | null): boolean
    next_file(cancellable: Cancellable | null): FileInfo | null
    next_files_async(num_files: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    next_files_finish(result: AsyncResult): GLib.List
    set_pending(pending: boolean): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of FileEnumerator */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_next_file(cancellable: Cancellable | null): FileInfo | null
    vfunc_next_files_async(num_files: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_next_files_finish(result: AsyncResult): GLib.List
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileEnumerator_Static {
    new (config: FileEnumerator_ConstructProps): FileEnumerator
}
export declare var FileEnumerator: FileEnumerator_Static
export interface FileIOStream_ConstructProps {
    /* Properties of IOStream */
}
export interface FileIOStream {
    /* Properties of IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Methods of FileIOStream */
    get_etag(): string
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of IOStream */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of FileIOStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_get_etag(): string
    vfunc_query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(size: number, cancellable: Cancellable | null): boolean
    /* Virtual methods of IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileIOStream_Static {
    new (config: FileIOStream_ConstructProps): FileIOStream
}
export declare var FileIOStream: FileIOStream_Static
export interface FileIcon_ConstructProps {
    /* Properties of FileIcon */
    file?:File
}
export interface FileIcon {
    /* Properties of FileIcon */
    /* Methods of FileIcon */
    get_file(): File
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileIcon_Static {
    new (config: FileIcon_ConstructProps): FileIcon
}
export declare var FileIcon: FileIcon_Static
export interface FileInfo_ConstructProps {
}
export interface FileInfo {
    /* Methods of FileInfo */
    clear_status(): void
    copy_into(dest_info: FileInfo): void
    dup(): FileInfo
    get_attribute_as_string(attribute: string): string
    get_attribute_boolean(attribute: string): boolean
    get_attribute_byte_string(attribute: string): string
    get_attribute_data(attribute: string, type: FileAttributeType | null, value_pp: object | null, status: FileAttributeStatus | null): boolean
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
    get_modification_time(result: GLib.TimeVal): void
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileInfo_Static {
    new (config: FileInfo_ConstructProps): FileInfo
}
export declare var FileInfo: FileInfo_Static
export interface FileInputStream_ConstructProps {
}
export interface FileInputStream {
    /* Methods of FileInputStream */
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Cancellable | null): number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult, bytes_read: number): boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): GLib.Bytes
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of FileInputStream */
    vfunc_can_seek(): boolean
    vfunc_query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    vfunc_tell(): number
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileInputStream_Static {
    new (config: FileInputStream_ConstructProps): FileInputStream
}
export declare var FileInputStream: FileInputStream_Static
export interface FileMonitor_ConstructProps {
    /* Properties of FileMonitor */
    rate_limit?:number
}
export interface FileMonitor {
    /* Properties of FileMonitor */
    readonly cancelled:boolean
    rate_limit:number
    /* Methods of FileMonitor */
    cancel(): boolean
    emit_event(child: File, other_file: File, event_type: FileMonitorEvent): void
    is_cancelled(): boolean
    set_rate_limit(limit_msecs: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of FileMonitor */
    vfunc_cancel(): boolean
    vfunc_changed(file: File, other_file: File, event_type: FileMonitorEvent): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of FileMonitor */
    connect(sigName: "changed", callback: ((file: File, other_file: File | null, event_type: FileMonitorEvent) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileMonitor_Static {
    new (config: FileMonitor_ConstructProps): FileMonitor
}
export declare var FileMonitor: FileMonitor_Static
export interface FileOutputStream_ConstructProps {
}
export interface FileOutputStream {
    /* Methods of FileOutputStream */
    get_etag(): string
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of OutputStream */
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
    write(buffer: number[], count: number, cancellable: Cancellable | null): number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable | null): boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult, bytes_written: number): boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of FileOutputStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_get_etag(): string
    vfunc_query_info(attributes: string, cancellable: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(size: number, cancellable: Cancellable | null): boolean
    /* Virtual methods of OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FileOutputStream_Static {
    new (config: FileOutputStream_ConstructProps): FileOutputStream
}
export declare var FileOutputStream: FileOutputStream_Static
export interface FilenameCompleter_ConstructProps {
}
export interface FilenameCompleter {
    /* Methods of FilenameCompleter */
    get_completion_suffix(initial_text: string): string
    get_completions(initial_text: string): string[]
    set_dirs_only(dirs_only: boolean): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of FilenameCompleter */
    vfunc_got_completion_data(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of FilenameCompleter */
    connect(sigName: "got-completion-data", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FilenameCompleter_Static {
    new (config: FilenameCompleter_ConstructProps): FilenameCompleter
}
export declare var FilenameCompleter: FilenameCompleter_Static
export interface FilterInputStream_ConstructProps {
    /* Properties of FilterInputStream */
    base_stream?:InputStream
    close_base_stream?:boolean
}
export interface FilterInputStream {
    /* Properties of FilterInputStream */
    close_base_stream:boolean
    /* Methods of FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Cancellable | null): number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult, bytes_read: number): boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): GLib.Bytes
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FilterInputStream_Static {
    new (config: FilterInputStream_ConstructProps): FilterInputStream
}
export declare var FilterInputStream: FilterInputStream_Static
export interface FilterOutputStream_ConstructProps {
    /* Properties of FilterOutputStream */
    base_stream?:OutputStream
    close_base_stream?:boolean
}
export interface FilterOutputStream {
    /* Properties of FilterOutputStream */
    /* Methods of FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of OutputStream */
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
    write(buffer: number[], count: number, cancellable: Cancellable | null): number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable | null): boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult, bytes_written: number): boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FilterOutputStream_Static {
    new (config: FilterOutputStream_ConstructProps): FilterOutputStream
}
export declare var FilterOutputStream: FilterOutputStream_Static
export interface IOModule_ConstructProps {
}
export interface IOModule {
    /* Methods of IOModule */
    load(): void
    unload(): void
    /* Methods of TypeModule */
    add_interface(instance_type: number, interface_type: number, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): number
    register_flags(name: string, const_static_values: GObject.FlagsValue): number
    register_type(parent_type: number, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): number
    set_name(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface IOModule_Static {
    new (config: IOModule_ConstructProps): IOModule
}
export declare class IOModule_Static {
    query(): string[]
}
export declare var IOModule: IOModule_Static
export interface IOStream_ConstructProps {
    /* Properties of IOStream */
}
export interface IOStream {
    /* Properties of IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Methods of IOStream */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface IOStream_Static {
    new (config: IOStream_ConstructProps): IOStream
}
export declare class IOStream_Static {
    splice_finish(result: AsyncResult): boolean
}
export declare var IOStream: IOStream_Static
export interface InetAddress_ConstructProps {
    /* Properties of InetAddress */
    bytes?:object
    family?:SocketFamily
}
export interface InetAddress {
    /* Properties of InetAddress */
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
    /* Methods of InetAddress */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of InetAddress */
    vfunc_to_string(): string
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface InetAddress_Static {
    new (config: InetAddress_ConstructProps): InetAddress
}
export declare var InetAddress: InetAddress_Static
export interface InetAddressMask_ConstructProps {
    /* Properties of InetAddressMask */
    address?:InetAddress
    length?:number
}
export interface InetAddressMask {
    /* Properties of InetAddressMask */
    address:InetAddress
    readonly family:SocketFamily
    length:number
    /* Methods of InetAddressMask */
    equal(mask2: InetAddressMask): boolean
    get_address(): InetAddress
    get_family(): SocketFamily
    get_length(): number
    matches(address: InetAddress): boolean
    to_string(): string
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface InetAddressMask_Static {
    new (config: InetAddressMask_ConstructProps): InetAddressMask
}
export declare var InetAddressMask: InetAddressMask_Static
export interface InetSocketAddress_ConstructProps {
    /* Properties of InetSocketAddress */
    address?:InetAddress
    flowinfo?:number
    port?:number
    scope_id?:number
    /* Properties of SocketAddress */
}
export interface InetSocketAddress {
    /* Properties of InetSocketAddress */
    /* Properties of SocketAddress */
    readonly family:SocketFamily
    /* Methods of InetSocketAddress */
    get_address(): InetAddress
    get_flowinfo(): number
    get_port(): number
    get_scope_id(): number
    /* Methods of SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object, destlen: number): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object, destlen: number): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface InetSocketAddress_Static {
    new (config: InetSocketAddress_ConstructProps): InetSocketAddress
}
export declare var InetSocketAddress: InetSocketAddress_Static
export interface InputStream_ConstructProps {
}
export interface InputStream {
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Cancellable | null): number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult, bytes_read: number): boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): GLib.Bytes
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface InputStream_Static {
    new (config: InputStream_ConstructProps): InputStream
}
export declare var InputStream: InputStream_Static
export interface ListStore_ConstructProps {
    /* Properties of ListStore */
    item_type?:number
}
export interface ListStore {
    /* Properties of ListStore */
    /* Methods of ListStore */
    append(item: GObject.Object): void
    insert(position: number, item: GObject.Object): void
    insert_sorted(item: GObject.Object, compare_func: GLib.CompareDataFunc, user_data: object): number
    remove(position: number): void
    remove_all(): void
    sort(compare_func: GLib.CompareDataFunc, user_data: object): void
    splice(position: number, n_removals: number, additions: GObject.Object[], n_additions: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ListStore_Static {
    new (config: ListStore_ConstructProps): ListStore
}
export declare var ListStore: ListStore_Static
export interface MemoryInputStream_ConstructProps {
}
export interface MemoryInputStream {
    /* Methods of MemoryInputStream */
    add_bytes(bytes: GLib.Bytes): void
    add_data(data: number[], len: number, destroy: GLib.DestroyNotify | null): void
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Cancellable | null): number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult, bytes_read: number): boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): GLib.Bytes
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MemoryInputStream_Static {
    new (config: MemoryInputStream_ConstructProps): MemoryInputStream
}
export declare var MemoryInputStream: MemoryInputStream_Static
export interface MemoryOutputStream_ConstructProps {
    /* Properties of MemoryOutputStream */
    data?:object
    destroy_function?:object
    realloc_function?:object
    size?:number
}
export interface MemoryOutputStream {
    /* Properties of MemoryOutputStream */
    readonly data_size:number
    /* Methods of MemoryOutputStream */
    get_data(): object
    get_data_size(): number
    get_size(): number
    steal_as_bytes(): GLib.Bytes
    steal_data(): object
    /* Methods of OutputStream */
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
    write(buffer: number[], count: number, cancellable: Cancellable | null): number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable | null): boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult, bytes_written: number): boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MemoryOutputStream_Static {
    new (config: MemoryOutputStream_ConstructProps): MemoryOutputStream
}
export declare var MemoryOutputStream: MemoryOutputStream_Static
export interface Menu_ConstructProps {
}
export interface Menu {
    /* Methods of Menu */
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
    /* Methods of MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number, attributes: GLib.HashTable): void
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number, links: GLib.HashTable): void
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of MenuModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Menu_Static {
    new (config: Menu_ConstructProps): Menu
}
export declare var Menu: Menu_Static
export interface MenuAttributeIter_ConstructProps {
}
export interface MenuAttributeIter {
    /* Methods of MenuAttributeIter */
    get_name(): string
    get_next(out_name: string | null, value: GLib.Variant | null): boolean
    get_value(): GLib.Variant
    next(): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of MenuAttributeIter */
    vfunc_get_next(out_name: string | null, value: GLib.Variant | null): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MenuAttributeIter_Static {
    new (config: MenuAttributeIter_ConstructProps): MenuAttributeIter
}
export declare var MenuAttributeIter: MenuAttributeIter_Static
export interface MenuItem_ConstructProps {
}
export interface MenuItem {
    /* Methods of MenuItem */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MenuItem_Static {
    new (config: MenuItem_ConstructProps): MenuItem
}
export declare var MenuItem: MenuItem_Static
export interface MenuLinkIter_ConstructProps {
}
export interface MenuLinkIter {
    /* Methods of MenuLinkIter */
    get_name(): string
    get_next(out_link: string | null, value: MenuModel | null): boolean
    get_value(): MenuModel
    next(): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of MenuLinkIter */
    vfunc_get_next(out_link: string | null, value: MenuModel | null): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MenuLinkIter_Static {
    new (config: MenuLinkIter_ConstructProps): MenuLinkIter
}
export declare var MenuLinkIter: MenuLinkIter_Static
export interface MenuModel_ConstructProps {
}
export interface MenuModel {
    /* Methods of MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number, attributes: GLib.HashTable): void
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number, links: GLib.HashTable): void
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of MenuModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MenuModel_Static {
    new (config: MenuModel_ConstructProps): MenuModel
}
export declare var MenuModel: MenuModel_Static
export interface MountOperation_ConstructProps {
    /* Properties of MountOperation */
    anonymous?:boolean
    choice?:number
    domain?:string
    password?:string
    password_save?:PasswordSave
    username?:string
}
export interface MountOperation {
    /* Properties of MountOperation */
    anonymous:boolean
    choice:number
    domain:string
    password:string
    password_save:PasswordSave
    username:string
    /* Methods of MountOperation */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of MountOperation */
    vfunc_aborted(): void
    vfunc_ask_password(message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void
    vfunc_ask_question(message: string, choices: string): void
    vfunc_reply(result: MountOperationResult): void
    vfunc_show_unmount_progress(message: string, time_left: number, bytes_left: number): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of MountOperation */
    connect(sigName: "aborted", callback: (() => void))
    connect(sigName: "ask-password", callback: ((message: string, default_user: string, default_domain: string, flags: AskPasswordFlags) => void))
    connect(sigName: "ask-question", callback: ((message: string, choices: string[]) => void))
    connect(sigName: "reply", callback: ((result: MountOperationResult) => void))
    connect(sigName: "show-processes", callback: ((message: string, processes: GLib.Pid[], choices: string[]) => void))
    connect(sigName: "show-unmount-progress", callback: ((message: string, time_left: number, bytes_left: number) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface MountOperation_Static {
    new (config: MountOperation_ConstructProps): MountOperation
}
export declare var MountOperation: MountOperation_Static
export interface NativeVolumeMonitor_ConstructProps {
}
export interface NativeVolumeMonitor {
    /* Methods of VolumeMonitor */
    get_connected_drives(): GLib.List
    get_mount_for_uuid(uuid: string): Mount
    get_mounts(): GLib.List
    get_volume_for_uuid(uuid: string): Volume
    get_volumes(): GLib.List
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of VolumeMonitor */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of VolumeMonitor */
    connect(sigName: "drive-changed", callback: ((drive: Drive) => void))
    connect(sigName: "drive-connected", callback: ((drive: Drive) => void))
    connect(sigName: "drive-disconnected", callback: ((drive: Drive) => void))
    connect(sigName: "drive-eject-button", callback: ((drive: Drive) => void))
    connect(sigName: "drive-stop-button", callback: ((drive: Drive) => void))
    connect(sigName: "mount-added", callback: ((mount: Mount) => void))
    connect(sigName: "mount-changed", callback: ((mount: Mount) => void))
    connect(sigName: "mount-pre-unmount", callback: ((mount: Mount) => void))
    connect(sigName: "mount-removed", callback: ((mount: Mount) => void))
    connect(sigName: "volume-added", callback: ((volume: Volume) => void))
    connect(sigName: "volume-changed", callback: ((volume: Volume) => void))
    connect(sigName: "volume-removed", callback: ((volume: Volume) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface NativeVolumeMonitor_Static {
    new (config: NativeVolumeMonitor_ConstructProps): NativeVolumeMonitor
}
export declare var NativeVolumeMonitor: NativeVolumeMonitor_Static
export interface NetworkAddress_ConstructProps {
    /* Properties of NetworkAddress */
    hostname?:string
    port?:number
    scheme?:string
}
export interface NetworkAddress {
    /* Properties of NetworkAddress */
    /* Methods of NetworkAddress */
    get_hostname(): string
    get_port(): number
    get_scheme(): string
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface NetworkAddress_Static {
    new (config: NetworkAddress_ConstructProps): NetworkAddress
}
export declare class NetworkAddress_Static {
    parse(host_and_port: string, default_port: number): NetworkAddress
    parse_uri(uri: string, default_port: number): NetworkAddress
}
export declare var NetworkAddress: NetworkAddress_Static
export interface NetworkService_ConstructProps {
    /* Properties of NetworkService */
    domain?:string
    protocol?:string
    scheme?:string
    service?:string
}
export interface NetworkService {
    /* Properties of NetworkService */
    scheme:string
    /* Methods of NetworkService */
    get_domain(): string
    get_protocol(): string
    get_scheme(): string
    get_service(): string
    set_scheme(scheme: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface NetworkService_Static {
    new (config: NetworkService_ConstructProps): NetworkService
}
export declare var NetworkService: NetworkService_Static
export interface Notification_ConstructProps {
}
export interface Notification {
    /* Methods of Notification */
    add_button(label: string, detailed_action: string): void
    add_button_with_target_value(label: string, action: string, target: GLib.Variant | null): void
    set_body(body: string | null): void
    set_default_action(detailed_action: string): void
    set_default_action_and_target_value(action: string, target: GLib.Variant | null): void
    set_icon(icon: Icon): void
    set_priority(priority: NotificationPriority): void
    set_title(title: string): void
    set_urgent(urgent: boolean): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Notification_Static {
    new (config: Notification_ConstructProps): Notification
}
export declare var Notification: Notification_Static
export interface OutputStream_ConstructProps {
}
export interface OutputStream {
    /* Methods of OutputStream */
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
    write(buffer: number[], count: number, cancellable: Cancellable | null): number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable | null): boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult, bytes_written: number): boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface OutputStream_Static {
    new (config: OutputStream_ConstructProps): OutputStream
}
export declare var OutputStream: OutputStream_Static
export interface Permission_ConstructProps {
    /* Properties of Permission */
}
export interface Permission {
    /* Properties of Permission */
    readonly allowed:boolean
    readonly can_acquire:boolean
    readonly can_release:boolean
    /* Methods of Permission */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Permission */
    vfunc_acquire(cancellable: Cancellable | null): boolean
    vfunc_acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_acquire_finish(result: AsyncResult): boolean
    vfunc_release(cancellable: Cancellable | null): boolean
    vfunc_release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_release_finish(result: AsyncResult): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Permission_Static {
    new (config: Permission_ConstructProps): Permission
}
export declare var Permission: Permission_Static
export interface PropertyAction_ConstructProps {
    /* Properties of PropertyAction */
    invert_boolean?:boolean
    name?:string
    object?:GObject.Object
    property_name?:string
}
export interface PropertyAction {
    /* Properties of PropertyAction */
    readonly enabled:boolean
    readonly parameter_type:GLib.VariantType
    readonly state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface PropertyAction_Static {
    new (config: PropertyAction_ConstructProps): PropertyAction
}
export declare var PropertyAction: PropertyAction_Static
export interface ProxyAddress_ConstructProps {
    /* Properties of ProxyAddress */
    destination_hostname?:string
    destination_port?:number
    destination_protocol?:string
    password?:string
    protocol?:string
    uri?:string
    username?:string
    /* Properties of InetSocketAddress */
    address?:InetAddress
    flowinfo?:number
    port?:number
    scope_id?:number
    /* Properties of SocketAddress */
}
export interface ProxyAddress {
    /* Properties of ProxyAddress */
    /* Properties of InetSocketAddress */
    /* Properties of SocketAddress */
    readonly family:SocketFamily
    /* Methods of ProxyAddress */
    get_destination_hostname(): string
    get_destination_port(): number
    get_destination_protocol(): string
    get_password(): string
    get_protocol(): string
    get_uri(): string
    get_username(): string
    /* Methods of InetSocketAddress */
    get_address(): InetAddress
    get_flowinfo(): number
    get_port(): number
    get_scope_id(): number
    /* Methods of SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object, destlen: number): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object, destlen: number): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ProxyAddress_Static {
    new (config: ProxyAddress_ConstructProps): ProxyAddress
}
export declare var ProxyAddress: ProxyAddress_Static
export interface ProxyAddressEnumerator_ConstructProps {
    /* Properties of ProxyAddressEnumerator */
    connectable?:SocketConnectable
    default_port?:number
    proxy_resolver?:ProxyResolver
    uri?:string
}
export interface ProxyAddressEnumerator {
    /* Properties of ProxyAddressEnumerator */
    proxy_resolver:ProxyResolver
    /* Methods of SocketAddressEnumerator */
    next(cancellable: Cancellable | null): SocketAddress
    next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    next_finish(result: AsyncResult): SocketAddress
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketAddressEnumerator */
    vfunc_next(cancellable: Cancellable | null): SocketAddress
    vfunc_next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_next_finish(result: AsyncResult): SocketAddress
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ProxyAddressEnumerator_Static {
    new (config: ProxyAddressEnumerator_ConstructProps): ProxyAddressEnumerator
}
export declare var ProxyAddressEnumerator: ProxyAddressEnumerator_Static
export interface Resolver_ConstructProps {
}
export interface Resolver {
    /* Methods of Resolver */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Resolver */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Resolver */
    connect(sigName: "reload", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Resolver_Static {
    new (config: Resolver_ConstructProps): Resolver
}
export declare class Resolver_Static {
    get_default(): Resolver
}
export declare var Resolver: Resolver_Static
export interface Settings_ConstructProps {
    /* Properties of Settings */
    backend?:any
    path?:string
    schema?:string
    schema_id?:string
    settings_schema?:SettingsSchema
}
export interface Settings {
    /* Properties of Settings */
    readonly delay_apply:boolean
    readonly has_unapplied:boolean
    /* Methods of Settings */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Settings */
    vfunc_change_event(keys: GLib.Quark, n_keys: number): boolean
    vfunc_changed(key: string): void
    vfunc_writable_change_event(key: GLib.Quark): boolean
    vfunc_writable_changed(key: string): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Settings */
    connect(sigName: "change-event", callback: ((keys: GLib.Quark[] | null, n_keys: number) => boolean))
    connect(sigName: "changed", callback: ((key: string) => void))
    connect(sigName: "writable-change-event", callback: ((key: number) => boolean))
    connect(sigName: "writable-changed", callback: ((key: string) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Settings_Static {
    new (config: Settings_ConstructProps): Settings
}
export declare class Settings_Static {
    list_relocatable_schemas(): string[]
    list_schemas(): string[]
    sync(): void
    unbind(object: GObject.Object, property: string): void
}
export declare var Settings: Settings_Static
export interface SimpleAction_ConstructProps {
    /* Properties of SimpleAction */
    enabled?:boolean
    name?:string
    parameter_type?:GLib.VariantType
    state?:GLib.Variant
}
export interface SimpleAction {
    /* Properties of SimpleAction */
    enabled:boolean
    state:GLib.Variant
    readonly state_type:GLib.VariantType
    /* Methods of SimpleAction */
    set_enabled(enabled: boolean): void
    set_state(value: GLib.Variant): void
    set_state_hint(state_hint: GLib.Variant | null): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SimpleAction */
    connect(sigName: "activate", callback: ((parameter: GLib.Variant | null) => void))
    connect(sigName: "change-state", callback: ((value: GLib.Variant | null) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SimpleAction_Static {
    new (config: SimpleAction_ConstructProps): SimpleAction
}
export declare var SimpleAction: SimpleAction_Static
export interface SimpleActionGroup_ConstructProps {
}
export interface SimpleActionGroup {
    /* Methods of SimpleActionGroup */
    add_entries(entries: ActionEntry[], n_entries: number, user_data: object): void
    insert(action: Action): void
    lookup(action_name: string): Action
    remove(action_name: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SimpleActionGroup_Static {
    new (config: SimpleActionGroup_ConstructProps): SimpleActionGroup
}
export declare var SimpleActionGroup: SimpleActionGroup_Static
export interface SimpleAsyncResult_ConstructProps {
}
export interface SimpleAsyncResult {
    /* Methods of SimpleAsyncResult */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SimpleAsyncResult_Static {
    new (config: SimpleAsyncResult_ConstructProps): SimpleAsyncResult
}
export declare class SimpleAsyncResult_Static {
    is_valid(result: AsyncResult, source: GObject.Object | null, source_tag: object | null): boolean
}
export declare var SimpleAsyncResult: SimpleAsyncResult_Static
export interface SimpleIOStream_ConstructProps {
    /* Properties of SimpleIOStream */
    input_stream?:InputStream
    output_stream?:OutputStream
    /* Properties of IOStream */
}
export interface SimpleIOStream {
    /* Properties of SimpleIOStream */
    /* Properties of IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Methods of IOStream */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SimpleIOStream_Static {
    new (config: SimpleIOStream_ConstructProps): SimpleIOStream
}
export declare var SimpleIOStream: SimpleIOStream_Static
export interface SimplePermission_ConstructProps {
    /* Properties of Permission */
}
export interface SimplePermission {
    /* Properties of Permission */
    readonly allowed:boolean
    readonly can_acquire:boolean
    readonly can_release:boolean
    /* Methods of Permission */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Permission */
    vfunc_acquire(cancellable: Cancellable | null): boolean
    vfunc_acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_acquire_finish(result: AsyncResult): boolean
    vfunc_release(cancellable: Cancellable | null): boolean
    vfunc_release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_release_finish(result: AsyncResult): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SimplePermission_Static {
    new (config: SimplePermission_ConstructProps): SimplePermission
}
export declare var SimplePermission: SimplePermission_Static
export interface SimpleProxyResolver_ConstructProps {
    /* Properties of SimpleProxyResolver */
    default_proxy?:string
    ignore_hosts?:string[]
}
export interface SimpleProxyResolver {
    /* Properties of SimpleProxyResolver */
    default_proxy:string
    ignore_hosts:string[]
    /* Methods of SimpleProxyResolver */
    set_default_proxy(default_proxy: string): void
    set_ignore_hosts(ignore_hosts: string): void
    set_uri_proxy(uri_scheme: string, proxy: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SimpleProxyResolver_Static {
    new (config: SimpleProxyResolver_ConstructProps): SimpleProxyResolver
}
export declare class SimpleProxyResolver_Static {
    new(default_proxy: string | null, ignore_hosts: string | null): ProxyResolver
}
export declare var SimpleProxyResolver: SimpleProxyResolver_Static
export interface Socket_ConstructProps {
    /* Properties of Socket */
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
    /* Properties of Socket */
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
    /* Methods of Socket */
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
    get_option(level: number, optname: number, value: number): boolean
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
    receive(buffer: number[], size: number, cancellable: Cancellable | null): number
    receive_from(address: SocketAddress | null, buffer: number[], size: number, cancellable: Cancellable | null): number
    receive_message(address: SocketAddress | null, vectors: InputVector[], num_vectors: number, messages: SocketControlMessage[] | null, num_messages: number, flags: number, cancellable: Cancellable | null): number
    receive_messages(messages: InputMessage, num_messages: number, flags: number, cancellable: Cancellable | null): number
    receive_with_blocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable | null): number
    send(buffer: number[], size: number, cancellable: Cancellable | null): number
    send_message(address: SocketAddress | null, vectors: OutputVector[], num_vectors: number, messages: SocketControlMessage[] | null, num_messages: number, flags: number, cancellable: Cancellable | null): number
    send_messages(messages: OutputMessage[], num_messages: number, flags: number, cancellable: Cancellable | null): number
    send_to(address: SocketAddress | null, buffer: number[], size: number, cancellable: Cancellable | null): number
    send_with_blocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable | null): number
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Socket_Static {
    new (config: Socket_ConstructProps): Socket
}
export declare var Socket: Socket_Static
export interface SocketAddress_ConstructProps {
    /* Properties of SocketAddress */
}
export interface SocketAddress {
    /* Properties of SocketAddress */
    readonly family:SocketFamily
    /* Methods of SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object, destlen: number): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object, destlen: number): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SocketAddress_Static {
    new (config: SocketAddress_ConstructProps): SocketAddress
}
export declare var SocketAddress: SocketAddress_Static
export interface SocketAddressEnumerator_ConstructProps {
}
export interface SocketAddressEnumerator {
    /* Methods of SocketAddressEnumerator */
    next(cancellable: Cancellable | null): SocketAddress
    next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    next_finish(result: AsyncResult): SocketAddress
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketAddressEnumerator */
    vfunc_next(cancellable: Cancellable | null): SocketAddress
    vfunc_next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_next_finish(result: AsyncResult): SocketAddress
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SocketAddressEnumerator_Static {
    new (config: SocketAddressEnumerator_ConstructProps): SocketAddressEnumerator
}
export declare var SocketAddressEnumerator: SocketAddressEnumerator_Static
export interface SocketClient_ConstructProps {
    /* Properties of SocketClient */
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
    /* Properties of SocketClient */
    enable_proxy:boolean
    family:SocketFamily
    local_address:SocketAddress
    protocol:SocketProtocol
    proxy_resolver:ProxyResolver
    timeout:number
    tls:boolean
    tls_validation_flags:TlsCertificateFlags
    type:SocketType
    /* Methods of SocketClient */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketClient */
    vfunc_event(event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SocketClient */
    connect(sigName: "event", callback: ((event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream | null) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SocketClient_Static {
    new (config: SocketClient_ConstructProps): SocketClient
}
export declare var SocketClient: SocketClient_Static
export interface SocketConnection_ConstructProps {
    /* Properties of SocketConnection */
    socket?:Socket
    /* Properties of IOStream */
}
export interface SocketConnection {
    /* Properties of SocketConnection */
    /* Properties of IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Methods of SocketConnection */
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of IOStream */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SocketConnection_Static {
    new (config: SocketConnection_ConstructProps): SocketConnection
}
export declare class SocketConnection_Static {
    factory_lookup_type(family: SocketFamily, type: SocketType, protocol_id: number): number
    factory_register_type(g_type: number, family: SocketFamily, type: SocketType, protocol: number): void
}
export declare var SocketConnection: SocketConnection_Static
export interface SocketControlMessage_ConstructProps {
}
export interface SocketControlMessage {
    /* Methods of SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SocketControlMessage_Static {
    new (config: SocketControlMessage_ConstructProps): SocketControlMessage
}
export declare class SocketControlMessage_Static {
    deserialize(level: number, type: number, size: number, data: number[]): SocketControlMessage
}
export declare var SocketControlMessage: SocketControlMessage_Static
export interface SocketListener_ConstructProps {
    /* Properties of SocketListener */
    listen_backlog?:number
}
export interface SocketListener {
    /* Properties of SocketListener */
    listen_backlog:number
    /* Methods of SocketListener */
    accept(source_object: GObject.Object | null, cancellable: Cancellable | null): SocketConnection
    accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_finish(result: AsyncResult, source_object: GObject.Object | null): SocketConnection
    accept_socket(source_object: GObject.Object | null, cancellable: Cancellable | null): Socket
    accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_socket_finish(result: AsyncResult, source_object: GObject.Object | null): Socket
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object | null, effective_address: SocketAddress | null): boolean
    add_any_inet_port(source_object: GObject.Object | null): number
    add_inet_port(port: number, source_object: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SocketListener */
    connect(sigName: "event", callback: ((event: SocketListenerEvent, socket: Socket) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SocketListener_Static {
    new (config: SocketListener_ConstructProps): SocketListener
}
export declare var SocketListener: SocketListener_Static
export interface SocketService_ConstructProps {
    /* Properties of SocketService */
    active?:boolean
    /* Properties of SocketListener */
    listen_backlog?:number
}
export interface SocketService {
    /* Properties of SocketService */
    active:boolean
    /* Properties of SocketListener */
    listen_backlog:number
    /* Methods of SocketService */
    is_active(): boolean
    start(): void
    stop(): void
    /* Methods of SocketListener */
    accept(source_object: GObject.Object | null, cancellable: Cancellable | null): SocketConnection
    accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_finish(result: AsyncResult, source_object: GObject.Object | null): SocketConnection
    accept_socket(source_object: GObject.Object | null, cancellable: Cancellable | null): Socket
    accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_socket_finish(result: AsyncResult, source_object: GObject.Object | null): Socket
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object | null, effective_address: SocketAddress | null): boolean
    add_any_inet_port(source_object: GObject.Object | null): number
    add_inet_port(port: number, source_object: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketService */
    vfunc_incoming(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SocketService */
    connect(sigName: "incoming", callback: ((connection: SocketConnection, source_object: GObject.Object | null) => boolean))
    /* Signals of SocketListener */
    connect(sigName: "event", callback: ((event: SocketListenerEvent, socket: Socket) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SocketService_Static {
    new (config: SocketService_ConstructProps): SocketService
}
export declare var SocketService: SocketService_Static
export interface Subprocess_ConstructProps {
    /* Properties of Subprocess */
    argv?:string[]
    flags?:SubprocessFlags
}
export interface Subprocess {
    /* Properties of Subprocess */
    /* Methods of Subprocess */
    communicate(stdin_buf: GLib.Bytes | null, cancellable: Cancellable | null, stdout_buf: GLib.Bytes, stderr_buf: GLib.Bytes): boolean
    communicate_async(stdin_buf: GLib.Bytes | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    communicate_finish(result: AsyncResult, stdout_buf: GLib.Bytes, stderr_buf: GLib.Bytes): boolean
    communicate_utf8(stdin_buf: string | null, cancellable: Cancellable | null, stdout_buf: string, stderr_buf: string): boolean
    communicate_utf8_async(stdin_buf: string | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    communicate_utf8_finish(result: AsyncResult, stdout_buf: string, stderr_buf: string): boolean
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Subprocess_Static {
    new (config: Subprocess_ConstructProps): Subprocess
}
export declare var Subprocess: Subprocess_Static
export interface SubprocessLauncher_ConstructProps {
    /* Properties of SubprocessLauncher */
    flags?:SubprocessFlags
}
export interface SubprocessLauncher {
    /* Properties of SubprocessLauncher */
    /* Methods of SubprocessLauncher */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface SubprocessLauncher_Static {
    new (config: SubprocessLauncher_ConstructProps): SubprocessLauncher
}
export declare var SubprocessLauncher: SubprocessLauncher_Static
export interface Task_ConstructProps {
    /* Properties of Task */
}
export interface Task {
    /* Properties of Task */
    readonly completed:boolean
    /* Methods of Task */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Task_Static {
    new (config: Task_ConstructProps): Task
}
export declare class Task_Static {
    is_valid(result: AsyncResult, source_object: GObject.Object | null): boolean
    report_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, callback_data: object, source_tag: object, error: GLib.Error): void
}
export declare var Task: Task_Static
export interface TcpConnection_ConstructProps {
    /* Properties of TcpConnection */
    graceful_disconnect?:boolean
    /* Properties of SocketConnection */
    socket?:Socket
    /* Properties of IOStream */
}
export interface TcpConnection {
    /* Properties of TcpConnection */
    graceful_disconnect:boolean
    /* Properties of SocketConnection */
    /* Properties of IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Methods of TcpConnection */
    get_graceful_disconnect(): boolean
    set_graceful_disconnect(graceful_disconnect: boolean): void
    /* Methods of SocketConnection */
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of IOStream */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface TcpConnection_Static {
    new (config: TcpConnection_ConstructProps): TcpConnection
}
export declare var TcpConnection: TcpConnection_Static
export interface TcpWrapperConnection_ConstructProps {
    /* Properties of TcpWrapperConnection */
    base_io_stream?:IOStream
    /* Properties of TcpConnection */
    graceful_disconnect?:boolean
    /* Properties of SocketConnection */
    socket?:Socket
    /* Properties of IOStream */
}
export interface TcpWrapperConnection {
    /* Properties of TcpWrapperConnection */
    /* Properties of TcpConnection */
    graceful_disconnect:boolean
    /* Properties of SocketConnection */
    /* Properties of IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Methods of TcpWrapperConnection */
    get_base_io_stream(): IOStream
    /* Methods of TcpConnection */
    get_graceful_disconnect(): boolean
    set_graceful_disconnect(graceful_disconnect: boolean): void
    /* Methods of SocketConnection */
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of IOStream */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface TcpWrapperConnection_Static {
    new (config: TcpWrapperConnection_ConstructProps): TcpWrapperConnection
}
export declare var TcpWrapperConnection: TcpWrapperConnection_Static
export interface TestDBus_ConstructProps {
    /* Properties of TestDBus */
    flags?:TestDBusFlags
}
export interface TestDBus {
    /* Properties of TestDBus */
    /* Methods of TestDBus */
    add_service_dir(path: string): void
    down(): void
    get_bus_address(): string
    get_flags(): TestDBusFlags
    stop(): void
    up(): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface TestDBus_Static {
    new (config: TestDBus_ConstructProps): TestDBus
}
export declare class TestDBus_Static {
    unset(): void
}
export declare var TestDBus: TestDBus_Static
export interface ThemedIcon_ConstructProps {
    /* Properties of ThemedIcon */
    name?:string
    names?:string[]
    use_default_fallbacks?:boolean
}
export interface ThemedIcon {
    /* Properties of ThemedIcon */
    /* Methods of ThemedIcon */
    append_name(iconname: string): void
    get_names(): string[]
    prepend_name(iconname: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ThemedIcon_Static {
    new (config: ThemedIcon_ConstructProps): ThemedIcon
}
export declare var ThemedIcon: ThemedIcon_Static
export interface ThreadedSocketService_ConstructProps {
    /* Properties of ThreadedSocketService */
    max_threads?:number
    /* Properties of SocketService */
    active?:boolean
    /* Properties of SocketListener */
    listen_backlog?:number
}
export interface ThreadedSocketService {
    /* Properties of ThreadedSocketService */
    /* Properties of SocketService */
    active:boolean
    /* Properties of SocketListener */
    listen_backlog:number
    /* Methods of SocketService */
    is_active(): boolean
    start(): void
    stop(): void
    /* Methods of SocketListener */
    accept(source_object: GObject.Object | null, cancellable: Cancellable | null): SocketConnection
    accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_finish(result: AsyncResult, source_object: GObject.Object | null): SocketConnection
    accept_socket(source_object: GObject.Object | null, cancellable: Cancellable | null): Socket
    accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    accept_socket_finish(result: AsyncResult, source_object: GObject.Object | null): Socket
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object | null, effective_address: SocketAddress | null): boolean
    add_any_inet_port(source_object: GObject.Object | null): number
    add_inet_port(port: number, source_object: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of ThreadedSocketService */
    vfunc_run(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of SocketService */
    vfunc_incoming(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ThreadedSocketService */
    connect(sigName: "run", callback: ((connection: SocketConnection, source_object: GObject.Object) => boolean))
    /* Signals of SocketService */
    connect(sigName: "incoming", callback: ((connection: SocketConnection, source_object: GObject.Object | null) => boolean))
    /* Signals of SocketListener */
    connect(sigName: "event", callback: ((event: SocketListenerEvent, socket: Socket) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ThreadedSocketService_Static {
    new (config: ThreadedSocketService_ConstructProps): ThreadedSocketService
}
export declare var ThreadedSocketService: ThreadedSocketService_Static
export interface TlsCertificate_ConstructProps {
    /* Properties of TlsCertificate */
    certificate?:object[]
    certificate_pem?:string
    issuer?:TlsCertificate
    private_key?:object[]
    private_key_pem?:string
}
export interface TlsCertificate {
    /* Properties of TlsCertificate */
    /* Methods of TlsCertificate */
    get_issuer(): TlsCertificate
    is_same(cert_two: TlsCertificate): boolean
    verify(identity: SocketConnectable | null, trusted_ca: TlsCertificate | null): TlsCertificateFlags
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of TlsCertificate */
    vfunc_verify(identity: SocketConnectable | null, trusted_ca: TlsCertificate | null): TlsCertificateFlags
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface TlsCertificate_Static {
    new (config: TlsCertificate_ConstructProps): TlsCertificate
}
export declare class TlsCertificate_Static {
    list_new_from_file(file: string): GLib.List
}
export declare var TlsCertificate: TlsCertificate_Static
export interface TlsConnection_ConstructProps {
    /* Properties of TlsConnection */
    base_io_stream?:IOStream
    certificate?:TlsCertificate
    database?:TlsDatabase
    interaction?:TlsInteraction
    rehandshake_mode?:TlsRehandshakeMode
    require_close_notify?:boolean
    use_system_certdb?:boolean
    /* Properties of IOStream */
}
export interface TlsConnection {
    /* Properties of TlsConnection */
    certificate:TlsCertificate
    database:TlsDatabase
    interaction:TlsInteraction
    readonly peer_certificate:TlsCertificate
    readonly peer_certificate_errors:TlsCertificateFlags
    rehandshake_mode:TlsRehandshakeMode
    require_close_notify:boolean
    use_system_certdb:boolean
    /* Properties of IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Methods of TlsConnection */
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
    /* Methods of IOStream */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of TlsConnection */
    vfunc_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfunc_handshake(cancellable: Cancellable | null): boolean
    vfunc_handshake_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_handshake_finish(result: AsyncResult): boolean
    /* Virtual methods of IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TlsConnection */
    connect(sigName: "accept-certificate", callback: ((peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface TlsConnection_Static {
    new (config: TlsConnection_ConstructProps): TlsConnection
}
export declare var TlsConnection: TlsConnection_Static
export interface TlsDatabase_ConstructProps {
}
export interface TlsDatabase {
    /* Methods of TlsDatabase */
    create_certificate_handle(certificate: TlsCertificate): string | null
    lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate
    lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate
    lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate
    lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate
    lookup_certificates_issued_by(issuer_raw_dn: number[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): GLib.List
    lookup_certificates_issued_by_async(issuer_raw_dn: number[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    lookup_certificates_issued_by_finish(result: AsyncResult): GLib.List
    verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null): TlsCertificateFlags
    verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    verify_chain_finish(result: AsyncResult): TlsCertificateFlags
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of TlsDatabase */
    vfunc_create_certificate_handle(certificate: TlsCertificate): string | null
    vfunc_lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate
    vfunc_lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate
    vfunc_lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate
    vfunc_lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate
    vfunc_lookup_certificates_issued_by(issuer_raw_dn: number[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): GLib.List
    vfunc_lookup_certificates_issued_by_async(issuer_raw_dn: number[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_lookup_certificates_issued_by_finish(result: AsyncResult): GLib.List
    vfunc_verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null): TlsCertificateFlags
    vfunc_verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_verify_chain_finish(result: AsyncResult): TlsCertificateFlags
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface TlsDatabase_Static {
    new (config: TlsDatabase_ConstructProps): TlsDatabase
}
export declare var TlsDatabase: TlsDatabase_Static
export interface TlsInteraction_ConstructProps {
}
export interface TlsInteraction {
    /* Methods of TlsInteraction */
    ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult
    ask_password_async(password: TlsPassword, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void
    ask_password_finish(result: AsyncResult): TlsInteractionResult
    invoke_ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult
    invoke_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult
    request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult
    request_certificate_async(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void
    request_certificate_finish(result: AsyncResult): TlsInteractionResult
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of TlsInteraction */
    vfunc_ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult
    vfunc_ask_password_async(password: TlsPassword, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void
    vfunc_ask_password_finish(result: AsyncResult): TlsInteractionResult
    vfunc_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult
    vfunc_request_certificate_async(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void
    vfunc_request_certificate_finish(result: AsyncResult): TlsInteractionResult
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface TlsInteraction_Static {
    new (config: TlsInteraction_ConstructProps): TlsInteraction
}
export declare var TlsInteraction: TlsInteraction_Static
export interface TlsPassword_ConstructProps {
    /* Properties of TlsPassword */
    description?:string
    flags?:TlsPasswordFlags
    warning?:string
}
export interface TlsPassword {
    /* Properties of TlsPassword */
    description:string
    flags:TlsPasswordFlags
    warning:string
    /* Methods of TlsPassword */
    get_description(): string
    get_flags(): TlsPasswordFlags
    get_value(length: number | null): number
    get_warning(): string
    set_description(description: string): void
    set_flags(flags: TlsPasswordFlags): void
    set_value(value: number, length: number): void
    set_value_full(value: number, length: number, destroy: GLib.DestroyNotify | null): void
    set_warning(warning: string): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of TlsPassword */
    vfunc_get_default_warning(): string
    vfunc_get_value(length: number | null): number
    vfunc_set_value(value: number, length: number, destroy: GLib.DestroyNotify | null): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface TlsPassword_Static {
    new (config: TlsPassword_ConstructProps): TlsPassword
}
export declare var TlsPassword: TlsPassword_Static
export interface UnixConnection_ConstructProps {
    /* Properties of SocketConnection */
    socket?:Socket
    /* Properties of IOStream */
}
export interface UnixConnection {
    /* Properties of SocketConnection */
    /* Properties of IOStream */
    readonly closed:boolean
    readonly input_stream:InputStream
    readonly output_stream:OutputStream
    /* Methods of UnixConnection */
    receive_credentials(cancellable: Cancellable | null): Credentials
    receive_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    receive_credentials_finish(result: AsyncResult): Credentials
    receive_fd(cancellable: Cancellable | null): number
    send_credentials(cancellable: Cancellable | null): boolean
    send_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    send_credentials_finish(result: AsyncResult): boolean
    send_fd(fd: number, cancellable: Cancellable | null): boolean
    /* Methods of SocketConnection */
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of IOStream */
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
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of IOStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface UnixConnection_Static {
    new (config: UnixConnection_ConstructProps): UnixConnection
}
export declare var UnixConnection: UnixConnection_Static
export interface UnixCredentialsMessage_ConstructProps {
    /* Properties of UnixCredentialsMessage */
    credentials?:Credentials
}
export interface UnixCredentialsMessage {
    /* Properties of UnixCredentialsMessage */
    /* Methods of UnixCredentialsMessage */
    get_credentials(): Credentials
    /* Methods of SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface UnixCredentialsMessage_Static {
    new (config: UnixCredentialsMessage_ConstructProps): UnixCredentialsMessage
}
export declare class UnixCredentialsMessage_Static {
    is_supported(): boolean
}
export declare var UnixCredentialsMessage: UnixCredentialsMessage_Static
export interface UnixFDList_ConstructProps {
}
export interface UnixFDList {
    /* Methods of UnixFDList */
    append(fd: number): number
    get(index_: number): number
    get_length(): number
    peek_fds(length: number | null): number[]
    steal_fds(length: number | null): number[]
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface UnixFDList_Static {
    new (config: UnixFDList_ConstructProps): UnixFDList
}
export declare var UnixFDList: UnixFDList_Static
export interface UnixFDMessage_ConstructProps {
    /* Properties of UnixFDMessage */
    fd_list?:UnixFDList
}
export interface UnixFDMessage {
    /* Properties of UnixFDMessage */
    /* Methods of UnixFDMessage */
    append_fd(fd: number): boolean
    get_fd_list(): UnixFDList
    steal_fds(length: number | null): number[]
    /* Methods of SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface UnixFDMessage_Static {
    new (config: UnixFDMessage_ConstructProps): UnixFDMessage
}
export declare var UnixFDMessage: UnixFDMessage_Static
export interface UnixInputStream_ConstructProps {
    /* Properties of UnixInputStream */
    close_fd?:boolean
    fd?:number
}
export interface UnixInputStream {
    /* Properties of UnixInputStream */
    close_fd:boolean
    /* Methods of UnixInputStream */
    get_close_fd(): boolean
    get_fd(): number
    set_close_fd(close_fd: boolean): void
    /* Methods of InputStream */
    clear_pending(): void
    close(cancellable: Cancellable | null): boolean
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(buffer: number[], count: number, cancellable: Cancellable | null): number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_all_finish(result: AsyncResult, bytes_read: number): boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    read_bytes_finish(result: AsyncResult): GLib.Bytes
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    skip_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of InputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object, count: number, cancellable: Cancellable | null): number
    vfunc_skip(count: number, cancellable: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface UnixInputStream_Static {
    new (config: UnixInputStream_ConstructProps): UnixInputStream
}
export declare var UnixInputStream: UnixInputStream_Static
export interface UnixMountMonitor_ConstructProps {
}
export interface UnixMountMonitor {
    /* Methods of UnixMountMonitor */
    set_rate_limit(limit_msec: number): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of UnixMountMonitor */
    connect(sigName: "mountpoints-changed", callback: (() => void))
    connect(sigName: "mounts-changed", callback: (() => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface UnixMountMonitor_Static {
    new (config: UnixMountMonitor_ConstructProps): UnixMountMonitor
}
export declare class UnixMountMonitor_Static {
    get(): UnixMountMonitor
}
export declare var UnixMountMonitor: UnixMountMonitor_Static
export interface UnixOutputStream_ConstructProps {
    /* Properties of UnixOutputStream */
    close_fd?:boolean
    fd?:number
}
export interface UnixOutputStream {
    /* Properties of UnixOutputStream */
    close_fd:boolean
    /* Methods of UnixOutputStream */
    get_close_fd(): boolean
    get_fd(): number
    set_close_fd(close_fd: boolean): void
    /* Methods of OutputStream */
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
    write(buffer: number[], count: number, cancellable: Cancellable | null): number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable | null): boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_all_finish(result: AsyncResult, bytes_written: number): boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of OutputStream */
    vfunc_close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable: Cancellable | null): boolean
    vfunc_flush(cancellable: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: number[], count: number, cancellable: Cancellable | null): number
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface UnixOutputStream_Static {
    new (config: UnixOutputStream_ConstructProps): UnixOutputStream
}
export declare var UnixOutputStream: UnixOutputStream_Static
export interface UnixSocketAddress_ConstructProps {
    /* Properties of UnixSocketAddress */
    abstract?:boolean
    address_type?:UnixSocketAddressType
    path?:string
    path_as_array?:object[]
    /* Properties of SocketAddress */
}
export interface UnixSocketAddress {
    /* Properties of UnixSocketAddress */
    /* Properties of SocketAddress */
    readonly family:SocketFamily
    /* Methods of UnixSocketAddress */
    get_address_type(): UnixSocketAddressType
    get_is_abstract(): boolean
    get_path(): string
    get_path_len(): number
    /* Methods of SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object, destlen: number): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object, destlen: number): boolean
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface UnixSocketAddress_Static {
    new (config: UnixSocketAddress_ConstructProps): UnixSocketAddress
}
export declare class UnixSocketAddress_Static {
    abstract_names_supported(): boolean
}
export declare var UnixSocketAddress: UnixSocketAddress_Static
export interface Vfs_ConstructProps {
}
export interface Vfs {
    /* Methods of Vfs */
    get_file_for_path(path: string): File
    get_file_for_uri(uri: string): File
    get_supported_uri_schemes(): string[]
    is_active(): boolean
    parse_name(parse_name: string): File
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Vfs */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Vfs_Static {
    new (config: Vfs_ConstructProps): Vfs
}
export declare class Vfs_Static {
    get_default(): Vfs
    get_local(): Vfs
}
export declare var Vfs: Vfs_Static
export interface VolumeMonitor_ConstructProps {
}
export interface VolumeMonitor {
    /* Methods of VolumeMonitor */
    get_connected_drives(): GLib.List
    get_mount_for_uuid(uuid: string): Mount
    get_mounts(): GLib.List
    get_volume_for_uuid(uuid: string): Volume
    get_volumes(): GLib.List
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of VolumeMonitor */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of VolumeMonitor */
    connect(sigName: "drive-changed", callback: ((drive: Drive) => void))
    connect(sigName: "drive-connected", callback: ((drive: Drive) => void))
    connect(sigName: "drive-disconnected", callback: ((drive: Drive) => void))
    connect(sigName: "drive-eject-button", callback: ((drive: Drive) => void))
    connect(sigName: "drive-stop-button", callback: ((drive: Drive) => void))
    connect(sigName: "mount-added", callback: ((mount: Mount) => void))
    connect(sigName: "mount-changed", callback: ((mount: Mount) => void))
    connect(sigName: "mount-pre-unmount", callback: ((mount: Mount) => void))
    connect(sigName: "mount-removed", callback: ((mount: Mount) => void))
    connect(sigName: "volume-added", callback: ((volume: Volume) => void))
    connect(sigName: "volume-changed", callback: ((volume: Volume) => void))
    connect(sigName: "volume-removed", callback: ((volume: Volume) => void))
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface VolumeMonitor_Static {
    new (config: VolumeMonitor_ConstructProps): VolumeMonitor
}
export declare class VolumeMonitor_Static {
    adopt_orphan_mount(mount: Mount): Volume
    get(): VolumeMonitor
}
export declare var VolumeMonitor: VolumeMonitor_Static
export interface ZlibCompressor_ConstructProps {
    /* Properties of ZlibCompressor */
    file_info?:FileInfo
    format?:ZlibCompressorFormat
    level?:number
}
export interface ZlibCompressor {
    /* Properties of ZlibCompressor */
    file_info:FileInfo
    /* Methods of ZlibCompressor */
    get_file_info(): FileInfo
    set_file_info(file_info: FileInfo | null): void
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ZlibCompressor_Static {
    new (config: ZlibCompressor_ConstructProps): ZlibCompressor
}
export declare var ZlibCompressor: ZlibCompressor_Static
export interface ZlibDecompressor_ConstructProps {
    /* Properties of ZlibDecompressor */
    format?:ZlibCompressorFormat
}
export interface ZlibDecompressor {
    /* Properties of ZlibDecompressor */
    readonly file_info:FileInfo
    /* Methods of ZlibDecompressor */
    get_file_info(): FileInfo
    /* Methods of Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface ZlibDecompressor_Static {
    new (config: ZlibDecompressor_ConstructProps): ZlibDecompressor
}
export declare var ZlibDecompressor: ZlibDecompressor_Static
export interface ActionEntry_ConstructProps {
}
export interface ActionEntry {
}
export interface ActionEntry_Static {
    new (config: ActionEntry_ConstructProps): ActionEntry
}
export declare var ActionEntry: ActionEntry_Static
export interface ActionGroupInterface_ConstructProps {
}
export interface ActionGroupInterface {
}
export interface ActionGroupInterface_Static {
    new (config: ActionGroupInterface_ConstructProps): ActionGroupInterface
}
export declare var ActionGroupInterface: ActionGroupInterface_Static
export interface ActionInterface_ConstructProps {
}
export interface ActionInterface {
}
export interface ActionInterface_Static {
    new (config: ActionInterface_ConstructProps): ActionInterface
}
export declare var ActionInterface: ActionInterface_Static
export interface ActionMapInterface_ConstructProps {
}
export interface ActionMapInterface {
}
export interface ActionMapInterface_Static {
    new (config: ActionMapInterface_ConstructProps): ActionMapInterface
}
export declare var ActionMapInterface: ActionMapInterface_Static
export interface AppInfoIface_ConstructProps {
}
export interface AppInfoIface {
}
export interface AppInfoIface_Static {
    new (config: AppInfoIface_ConstructProps): AppInfoIface
}
export declare var AppInfoIface: AppInfoIface_Static
export interface AppLaunchContextClass_ConstructProps {
}
export interface AppLaunchContextClass {
}
export interface AppLaunchContextClass_Static {
    new (config: AppLaunchContextClass_ConstructProps): AppLaunchContextClass
}
export declare var AppLaunchContextClass: AppLaunchContextClass_Static
export interface AppLaunchContextPrivate_ConstructProps {
}
export interface AppLaunchContextPrivate {
}
export interface AppLaunchContextPrivate_Static {
    new (config: AppLaunchContextPrivate_ConstructProps): AppLaunchContextPrivate
}
export declare var AppLaunchContextPrivate: AppLaunchContextPrivate_Static
export interface ApplicationClass_ConstructProps {
}
export interface ApplicationClass {
}
export interface ApplicationClass_Static {
    new (config: ApplicationClass_ConstructProps): ApplicationClass
}
export declare var ApplicationClass: ApplicationClass_Static
export interface ApplicationCommandLineClass_ConstructProps {
}
export interface ApplicationCommandLineClass {
}
export interface ApplicationCommandLineClass_Static {
    new (config: ApplicationCommandLineClass_ConstructProps): ApplicationCommandLineClass
}
export declare var ApplicationCommandLineClass: ApplicationCommandLineClass_Static
export interface ApplicationCommandLinePrivate_ConstructProps {
}
export interface ApplicationCommandLinePrivate {
}
export interface ApplicationCommandLinePrivate_Static {
    new (config: ApplicationCommandLinePrivate_ConstructProps): ApplicationCommandLinePrivate
}
export declare var ApplicationCommandLinePrivate: ApplicationCommandLinePrivate_Static
export interface ApplicationPrivate_ConstructProps {
}
export interface ApplicationPrivate {
}
export interface ApplicationPrivate_Static {
    new (config: ApplicationPrivate_ConstructProps): ApplicationPrivate
}
export declare var ApplicationPrivate: ApplicationPrivate_Static
export interface AsyncInitableIface_ConstructProps {
}
export interface AsyncInitableIface {
}
export interface AsyncInitableIface_Static {
    new (config: AsyncInitableIface_ConstructProps): AsyncInitableIface
}
export declare var AsyncInitableIface: AsyncInitableIface_Static
export interface AsyncResultIface_ConstructProps {
}
export interface AsyncResultIface {
}
export interface AsyncResultIface_Static {
    new (config: AsyncResultIface_ConstructProps): AsyncResultIface
}
export declare var AsyncResultIface: AsyncResultIface_Static
export interface BufferedInputStreamClass_ConstructProps {
}
export interface BufferedInputStreamClass {
}
export interface BufferedInputStreamClass_Static {
    new (config: BufferedInputStreamClass_ConstructProps): BufferedInputStreamClass
}
export declare var BufferedInputStreamClass: BufferedInputStreamClass_Static
export interface BufferedInputStreamPrivate_ConstructProps {
}
export interface BufferedInputStreamPrivate {
}
export interface BufferedInputStreamPrivate_Static {
    new (config: BufferedInputStreamPrivate_ConstructProps): BufferedInputStreamPrivate
}
export declare var BufferedInputStreamPrivate: BufferedInputStreamPrivate_Static
export interface BufferedOutputStreamClass_ConstructProps {
}
export interface BufferedOutputStreamClass {
}
export interface BufferedOutputStreamClass_Static {
    new (config: BufferedOutputStreamClass_ConstructProps): BufferedOutputStreamClass
}
export declare var BufferedOutputStreamClass: BufferedOutputStreamClass_Static
export interface BufferedOutputStreamPrivate_ConstructProps {
}
export interface BufferedOutputStreamPrivate {
}
export interface BufferedOutputStreamPrivate_Static {
    new (config: BufferedOutputStreamPrivate_ConstructProps): BufferedOutputStreamPrivate
}
export declare var BufferedOutputStreamPrivate: BufferedOutputStreamPrivate_Static
export interface CancellableClass_ConstructProps {
}
export interface CancellableClass {
}
export interface CancellableClass_Static {
    new (config: CancellableClass_ConstructProps): CancellableClass
}
export declare var CancellableClass: CancellableClass_Static
export interface CancellablePrivate_ConstructProps {
}
export interface CancellablePrivate {
}
export interface CancellablePrivate_Static {
    new (config: CancellablePrivate_ConstructProps): CancellablePrivate
}
export declare var CancellablePrivate: CancellablePrivate_Static
export interface CharsetConverterClass_ConstructProps {
}
export interface CharsetConverterClass {
}
export interface CharsetConverterClass_Static {
    new (config: CharsetConverterClass_ConstructProps): CharsetConverterClass
}
export declare var CharsetConverterClass: CharsetConverterClass_Static
export interface ConverterIface_ConstructProps {
}
export interface ConverterIface {
}
export interface ConverterIface_Static {
    new (config: ConverterIface_ConstructProps): ConverterIface
}
export declare var ConverterIface: ConverterIface_Static
export interface ConverterInputStreamClass_ConstructProps {
}
export interface ConverterInputStreamClass {
}
export interface ConverterInputStreamClass_Static {
    new (config: ConverterInputStreamClass_ConstructProps): ConverterInputStreamClass
}
export declare var ConverterInputStreamClass: ConverterInputStreamClass_Static
export interface ConverterInputStreamPrivate_ConstructProps {
}
export interface ConverterInputStreamPrivate {
}
export interface ConverterInputStreamPrivate_Static {
    new (config: ConverterInputStreamPrivate_ConstructProps): ConverterInputStreamPrivate
}
export declare var ConverterInputStreamPrivate: ConverterInputStreamPrivate_Static
export interface ConverterOutputStreamClass_ConstructProps {
}
export interface ConverterOutputStreamClass {
}
export interface ConverterOutputStreamClass_Static {
    new (config: ConverterOutputStreamClass_ConstructProps): ConverterOutputStreamClass
}
export declare var ConverterOutputStreamClass: ConverterOutputStreamClass_Static
export interface ConverterOutputStreamPrivate_ConstructProps {
}
export interface ConverterOutputStreamPrivate {
}
export interface ConverterOutputStreamPrivate_Static {
    new (config: ConverterOutputStreamPrivate_ConstructProps): ConverterOutputStreamPrivate
}
export declare var ConverterOutputStreamPrivate: ConverterOutputStreamPrivate_Static
export interface CredentialsClass_ConstructProps {
}
export interface CredentialsClass {
}
export interface CredentialsClass_Static {
    new (config: CredentialsClass_ConstructProps): CredentialsClass
}
export declare var CredentialsClass: CredentialsClass_Static
export interface DBusAnnotationInfo_ConstructProps {
}
export interface DBusAnnotationInfo {
    /* Methods of DBusAnnotationInfo */
    ref(): DBusAnnotationInfo
    unref(): void
}
export interface DBusAnnotationInfo_Static {
    new (config: DBusAnnotationInfo_ConstructProps): DBusAnnotationInfo
}
export declare class DBusAnnotationInfo_Static {
    lookup(annotations: DBusAnnotationInfo[] | null, name: string): string
}
export declare var DBusAnnotationInfo: DBusAnnotationInfo_Static
export interface DBusArgInfo_ConstructProps {
}
export interface DBusArgInfo {
    /* Methods of DBusArgInfo */
    ref(): DBusArgInfo
    unref(): void
}
export interface DBusArgInfo_Static {
    new (config: DBusArgInfo_ConstructProps): DBusArgInfo
}
export declare var DBusArgInfo: DBusArgInfo_Static
export interface DBusErrorEntry_ConstructProps {
}
export interface DBusErrorEntry {
}
export interface DBusErrorEntry_Static {
    new (config: DBusErrorEntry_ConstructProps): DBusErrorEntry
}
export declare var DBusErrorEntry: DBusErrorEntry_Static
export interface DBusInterfaceIface_ConstructProps {
}
export interface DBusInterfaceIface {
}
export interface DBusInterfaceIface_Static {
    new (config: DBusInterfaceIface_ConstructProps): DBusInterfaceIface
}
export declare var DBusInterfaceIface: DBusInterfaceIface_Static
export interface DBusInterfaceInfo_ConstructProps {
}
export interface DBusInterfaceInfo {
    /* Methods of DBusInterfaceInfo */
    cache_build(): void
    cache_release(): void
    generate_xml(indent: number, string_builder: GLib.String): void
    lookup_method(name: string): DBusMethodInfo
    lookup_property(name: string): DBusPropertyInfo
    lookup_signal(name: string): DBusSignalInfo
    ref(): DBusInterfaceInfo
    unref(): void
}
export interface DBusInterfaceInfo_Static {
    new (config: DBusInterfaceInfo_ConstructProps): DBusInterfaceInfo
}
export declare var DBusInterfaceInfo: DBusInterfaceInfo_Static
export interface DBusInterfaceSkeletonClass_ConstructProps {
}
export interface DBusInterfaceSkeletonClass {
}
export interface DBusInterfaceSkeletonClass_Static {
    new (config: DBusInterfaceSkeletonClass_ConstructProps): DBusInterfaceSkeletonClass
}
export declare var DBusInterfaceSkeletonClass: DBusInterfaceSkeletonClass_Static
export interface DBusInterfaceSkeletonPrivate_ConstructProps {
}
export interface DBusInterfaceSkeletonPrivate {
}
export interface DBusInterfaceSkeletonPrivate_Static {
    new (config: DBusInterfaceSkeletonPrivate_ConstructProps): DBusInterfaceSkeletonPrivate
}
export declare var DBusInterfaceSkeletonPrivate: DBusInterfaceSkeletonPrivate_Static
export interface DBusInterfaceVTable_ConstructProps {
}
export interface DBusInterfaceVTable {
}
export interface DBusInterfaceVTable_Static {
    new (config: DBusInterfaceVTable_ConstructProps): DBusInterfaceVTable
}
export declare var DBusInterfaceVTable: DBusInterfaceVTable_Static
export interface DBusMethodInfo_ConstructProps {
}
export interface DBusMethodInfo {
    /* Methods of DBusMethodInfo */
    ref(): DBusMethodInfo
    unref(): void
}
export interface DBusMethodInfo_Static {
    new (config: DBusMethodInfo_ConstructProps): DBusMethodInfo
}
export declare var DBusMethodInfo: DBusMethodInfo_Static
export interface DBusNodeInfo_ConstructProps {
}
export interface DBusNodeInfo {
    /* Methods of DBusNodeInfo */
    generate_xml(indent: number, string_builder: GLib.String): void
    lookup_interface(name: string): DBusInterfaceInfo
    ref(): DBusNodeInfo
    unref(): void
}
export interface DBusNodeInfo_Static {
    new (config: DBusNodeInfo_ConstructProps): DBusNodeInfo
}
export declare var DBusNodeInfo: DBusNodeInfo_Static
export interface DBusObjectIface_ConstructProps {
}
export interface DBusObjectIface {
}
export interface DBusObjectIface_Static {
    new (config: DBusObjectIface_ConstructProps): DBusObjectIface
}
export declare var DBusObjectIface: DBusObjectIface_Static
export interface DBusObjectManagerClientClass_ConstructProps {
}
export interface DBusObjectManagerClientClass {
}
export interface DBusObjectManagerClientClass_Static {
    new (config: DBusObjectManagerClientClass_ConstructProps): DBusObjectManagerClientClass
}
export declare var DBusObjectManagerClientClass: DBusObjectManagerClientClass_Static
export interface DBusObjectManagerClientPrivate_ConstructProps {
}
export interface DBusObjectManagerClientPrivate {
}
export interface DBusObjectManagerClientPrivate_Static {
    new (config: DBusObjectManagerClientPrivate_ConstructProps): DBusObjectManagerClientPrivate
}
export declare var DBusObjectManagerClientPrivate: DBusObjectManagerClientPrivate_Static
export interface DBusObjectManagerIface_ConstructProps {
}
export interface DBusObjectManagerIface {
}
export interface DBusObjectManagerIface_Static {
    new (config: DBusObjectManagerIface_ConstructProps): DBusObjectManagerIface
}
export declare var DBusObjectManagerIface: DBusObjectManagerIface_Static
export interface DBusObjectManagerServerClass_ConstructProps {
}
export interface DBusObjectManagerServerClass {
}
export interface DBusObjectManagerServerClass_Static {
    new (config: DBusObjectManagerServerClass_ConstructProps): DBusObjectManagerServerClass
}
export declare var DBusObjectManagerServerClass: DBusObjectManagerServerClass_Static
export interface DBusObjectManagerServerPrivate_ConstructProps {
}
export interface DBusObjectManagerServerPrivate {
}
export interface DBusObjectManagerServerPrivate_Static {
    new (config: DBusObjectManagerServerPrivate_ConstructProps): DBusObjectManagerServerPrivate
}
export declare var DBusObjectManagerServerPrivate: DBusObjectManagerServerPrivate_Static
export interface DBusObjectProxyClass_ConstructProps {
}
export interface DBusObjectProxyClass {
}
export interface DBusObjectProxyClass_Static {
    new (config: DBusObjectProxyClass_ConstructProps): DBusObjectProxyClass
}
export declare var DBusObjectProxyClass: DBusObjectProxyClass_Static
export interface DBusObjectProxyPrivate_ConstructProps {
}
export interface DBusObjectProxyPrivate {
}
export interface DBusObjectProxyPrivate_Static {
    new (config: DBusObjectProxyPrivate_ConstructProps): DBusObjectProxyPrivate
}
export declare var DBusObjectProxyPrivate: DBusObjectProxyPrivate_Static
export interface DBusObjectSkeletonClass_ConstructProps {
}
export interface DBusObjectSkeletonClass {
}
export interface DBusObjectSkeletonClass_Static {
    new (config: DBusObjectSkeletonClass_ConstructProps): DBusObjectSkeletonClass
}
export declare var DBusObjectSkeletonClass: DBusObjectSkeletonClass_Static
export interface DBusObjectSkeletonPrivate_ConstructProps {
}
export interface DBusObjectSkeletonPrivate {
}
export interface DBusObjectSkeletonPrivate_Static {
    new (config: DBusObjectSkeletonPrivate_ConstructProps): DBusObjectSkeletonPrivate
}
export declare var DBusObjectSkeletonPrivate: DBusObjectSkeletonPrivate_Static
export interface DBusPropertyInfo_ConstructProps {
}
export interface DBusPropertyInfo {
    /* Methods of DBusPropertyInfo */
    ref(): DBusPropertyInfo
    unref(): void
}
export interface DBusPropertyInfo_Static {
    new (config: DBusPropertyInfo_ConstructProps): DBusPropertyInfo
}
export declare var DBusPropertyInfo: DBusPropertyInfo_Static
export interface DBusProxyClass_ConstructProps {
}
export interface DBusProxyClass {
}
export interface DBusProxyClass_Static {
    new (config: DBusProxyClass_ConstructProps): DBusProxyClass
}
export declare var DBusProxyClass: DBusProxyClass_Static
export interface DBusProxyPrivate_ConstructProps {
}
export interface DBusProxyPrivate {
}
export interface DBusProxyPrivate_Static {
    new (config: DBusProxyPrivate_ConstructProps): DBusProxyPrivate
}
export declare var DBusProxyPrivate: DBusProxyPrivate_Static
export interface DBusSignalInfo_ConstructProps {
}
export interface DBusSignalInfo {
    /* Methods of DBusSignalInfo */
    ref(): DBusSignalInfo
    unref(): void
}
export interface DBusSignalInfo_Static {
    new (config: DBusSignalInfo_ConstructProps): DBusSignalInfo
}
export declare var DBusSignalInfo: DBusSignalInfo_Static
export interface DBusSubtreeVTable_ConstructProps {
}
export interface DBusSubtreeVTable {
}
export interface DBusSubtreeVTable_Static {
    new (config: DBusSubtreeVTable_ConstructProps): DBusSubtreeVTable
}
export declare var DBusSubtreeVTable: DBusSubtreeVTable_Static
export interface DataInputStreamClass_ConstructProps {
}
export interface DataInputStreamClass {
}
export interface DataInputStreamClass_Static {
    new (config: DataInputStreamClass_ConstructProps): DataInputStreamClass
}
export declare var DataInputStreamClass: DataInputStreamClass_Static
export interface DataInputStreamPrivate_ConstructProps {
}
export interface DataInputStreamPrivate {
}
export interface DataInputStreamPrivate_Static {
    new (config: DataInputStreamPrivate_ConstructProps): DataInputStreamPrivate
}
export declare var DataInputStreamPrivate: DataInputStreamPrivate_Static
export interface DataOutputStreamClass_ConstructProps {
}
export interface DataOutputStreamClass {
}
export interface DataOutputStreamClass_Static {
    new (config: DataOutputStreamClass_ConstructProps): DataOutputStreamClass
}
export declare var DataOutputStreamClass: DataOutputStreamClass_Static
export interface DataOutputStreamPrivate_ConstructProps {
}
export interface DataOutputStreamPrivate {
}
export interface DataOutputStreamPrivate_Static {
    new (config: DataOutputStreamPrivate_ConstructProps): DataOutputStreamPrivate
}
export declare var DataOutputStreamPrivate: DataOutputStreamPrivate_Static
export interface DatagramBasedInterface_ConstructProps {
}
export interface DatagramBasedInterface {
}
export interface DatagramBasedInterface_Static {
    new (config: DatagramBasedInterface_ConstructProps): DatagramBasedInterface
}
export declare var DatagramBasedInterface: DatagramBasedInterface_Static
export interface DesktopAppInfoClass_ConstructProps {
}
export interface DesktopAppInfoClass {
}
export interface DesktopAppInfoClass_Static {
    new (config: DesktopAppInfoClass_ConstructProps): DesktopAppInfoClass
}
export declare var DesktopAppInfoClass: DesktopAppInfoClass_Static
export interface DesktopAppInfoLookupIface_ConstructProps {
}
export interface DesktopAppInfoLookupIface {
}
export interface DesktopAppInfoLookupIface_Static {
    new (config: DesktopAppInfoLookupIface_ConstructProps): DesktopAppInfoLookupIface
}
export declare var DesktopAppInfoLookupIface: DesktopAppInfoLookupIface_Static
export interface DriveIface_ConstructProps {
}
export interface DriveIface {
}
export interface DriveIface_Static {
    new (config: DriveIface_ConstructProps): DriveIface
}
export declare var DriveIface: DriveIface_Static
export interface EmblemClass_ConstructProps {
}
export interface EmblemClass {
}
export interface EmblemClass_Static {
    new (config: EmblemClass_ConstructProps): EmblemClass
}
export declare var EmblemClass: EmblemClass_Static
export interface EmblemedIconClass_ConstructProps {
}
export interface EmblemedIconClass {
}
export interface EmblemedIconClass_Static {
    new (config: EmblemedIconClass_ConstructProps): EmblemedIconClass
}
export declare var EmblemedIconClass: EmblemedIconClass_Static
export interface EmblemedIconPrivate_ConstructProps {
}
export interface EmblemedIconPrivate {
}
export interface EmblemedIconPrivate_Static {
    new (config: EmblemedIconPrivate_ConstructProps): EmblemedIconPrivate
}
export declare var EmblemedIconPrivate: EmblemedIconPrivate_Static
export interface FileAttributeInfo_ConstructProps {
}
export interface FileAttributeInfo {
}
export interface FileAttributeInfo_Static {
    new (config: FileAttributeInfo_ConstructProps): FileAttributeInfo
}
export declare var FileAttributeInfo: FileAttributeInfo_Static
export interface FileAttributeInfoList_ConstructProps {
}
export interface FileAttributeInfoList {
    /* Methods of FileAttributeInfoList */
    add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void
    dup(): FileAttributeInfoList
    lookup(name: string): FileAttributeInfo
    ref(): FileAttributeInfoList
    unref(): void
}
export interface FileAttributeInfoList_Static {
    new (config: FileAttributeInfoList_ConstructProps): FileAttributeInfoList
}
export declare var FileAttributeInfoList: FileAttributeInfoList_Static
export interface FileAttributeMatcher_ConstructProps {
}
export interface FileAttributeMatcher {
    /* Methods of FileAttributeMatcher */
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
    new (config: FileAttributeMatcher_ConstructProps): FileAttributeMatcher
}
export declare var FileAttributeMatcher: FileAttributeMatcher_Static
export interface FileDescriptorBasedIface_ConstructProps {
}
export interface FileDescriptorBasedIface {
}
export interface FileDescriptorBasedIface_Static {
    new (config: FileDescriptorBasedIface_ConstructProps): FileDescriptorBasedIface
}
export declare var FileDescriptorBasedIface: FileDescriptorBasedIface_Static
export interface FileEnumeratorClass_ConstructProps {
}
export interface FileEnumeratorClass {
}
export interface FileEnumeratorClass_Static {
    new (config: FileEnumeratorClass_ConstructProps): FileEnumeratorClass
}
export declare var FileEnumeratorClass: FileEnumeratorClass_Static
export interface FileEnumeratorPrivate_ConstructProps {
}
export interface FileEnumeratorPrivate {
}
export interface FileEnumeratorPrivate_Static {
    new (config: FileEnumeratorPrivate_ConstructProps): FileEnumeratorPrivate
}
export declare var FileEnumeratorPrivate: FileEnumeratorPrivate_Static
export interface FileIOStreamClass_ConstructProps {
}
export interface FileIOStreamClass {
}
export interface FileIOStreamClass_Static {
    new (config: FileIOStreamClass_ConstructProps): FileIOStreamClass
}
export declare var FileIOStreamClass: FileIOStreamClass_Static
export interface FileIOStreamPrivate_ConstructProps {
}
export interface FileIOStreamPrivate {
}
export interface FileIOStreamPrivate_Static {
    new (config: FileIOStreamPrivate_ConstructProps): FileIOStreamPrivate
}
export declare var FileIOStreamPrivate: FileIOStreamPrivate_Static
export interface FileIconClass_ConstructProps {
}
export interface FileIconClass {
}
export interface FileIconClass_Static {
    new (config: FileIconClass_ConstructProps): FileIconClass
}
export declare var FileIconClass: FileIconClass_Static
export interface FileIface_ConstructProps {
}
export interface FileIface {
}
export interface FileIface_Static {
    new (config: FileIface_ConstructProps): FileIface
}
export declare var FileIface: FileIface_Static
export interface FileInfoClass_ConstructProps {
}
export interface FileInfoClass {
}
export interface FileInfoClass_Static {
    new (config: FileInfoClass_ConstructProps): FileInfoClass
}
export declare var FileInfoClass: FileInfoClass_Static
export interface FileInputStreamClass_ConstructProps {
}
export interface FileInputStreamClass {
}
export interface FileInputStreamClass_Static {
    new (config: FileInputStreamClass_ConstructProps): FileInputStreamClass
}
export declare var FileInputStreamClass: FileInputStreamClass_Static
export interface FileInputStreamPrivate_ConstructProps {
}
export interface FileInputStreamPrivate {
}
export interface FileInputStreamPrivate_Static {
    new (config: FileInputStreamPrivate_ConstructProps): FileInputStreamPrivate
}
export declare var FileInputStreamPrivate: FileInputStreamPrivate_Static
export interface FileMonitorClass_ConstructProps {
}
export interface FileMonitorClass {
}
export interface FileMonitorClass_Static {
    new (config: FileMonitorClass_ConstructProps): FileMonitorClass
}
export declare var FileMonitorClass: FileMonitorClass_Static
export interface FileMonitorPrivate_ConstructProps {
}
export interface FileMonitorPrivate {
}
export interface FileMonitorPrivate_Static {
    new (config: FileMonitorPrivate_ConstructProps): FileMonitorPrivate
}
export declare var FileMonitorPrivate: FileMonitorPrivate_Static
export interface FileOutputStreamClass_ConstructProps {
}
export interface FileOutputStreamClass {
}
export interface FileOutputStreamClass_Static {
    new (config: FileOutputStreamClass_ConstructProps): FileOutputStreamClass
}
export declare var FileOutputStreamClass: FileOutputStreamClass_Static
export interface FileOutputStreamPrivate_ConstructProps {
}
export interface FileOutputStreamPrivate {
}
export interface FileOutputStreamPrivate_Static {
    new (config: FileOutputStreamPrivate_ConstructProps): FileOutputStreamPrivate
}
export declare var FileOutputStreamPrivate: FileOutputStreamPrivate_Static
export interface FilenameCompleterClass_ConstructProps {
}
export interface FilenameCompleterClass {
}
export interface FilenameCompleterClass_Static {
    new (config: FilenameCompleterClass_ConstructProps): FilenameCompleterClass
}
export declare var FilenameCompleterClass: FilenameCompleterClass_Static
export interface FilterInputStreamClass_ConstructProps {
}
export interface FilterInputStreamClass {
}
export interface FilterInputStreamClass_Static {
    new (config: FilterInputStreamClass_ConstructProps): FilterInputStreamClass
}
export declare var FilterInputStreamClass: FilterInputStreamClass_Static
export interface FilterOutputStreamClass_ConstructProps {
}
export interface FilterOutputStreamClass {
}
export interface FilterOutputStreamClass_Static {
    new (config: FilterOutputStreamClass_ConstructProps): FilterOutputStreamClass
}
export declare var FilterOutputStreamClass: FilterOutputStreamClass_Static
export interface IOExtension_ConstructProps {
}
export interface IOExtension {
    /* Methods of IOExtension */
    get_name(): string
    get_priority(): number
    get_type(): number
}
export interface IOExtension_Static {
    new (config: IOExtension_ConstructProps): IOExtension
}
export declare var IOExtension: IOExtension_Static
export interface IOExtensionPoint_ConstructProps {
}
export interface IOExtensionPoint {
    /* Methods of IOExtensionPoint */
    get_extension_by_name(name: string): IOExtension
    get_extensions(): GLib.List
    get_required_type(): number
    set_required_type(type: number): void
}
export interface IOExtensionPoint_Static {
    new (config: IOExtensionPoint_ConstructProps): IOExtensionPoint
}
export declare class IOExtensionPoint_Static {
    implement(extension_point_name: string, type: number, extension_name: string, priority: number): IOExtension
    lookup(name: string): IOExtensionPoint
    register(name: string): IOExtensionPoint
}
export declare var IOExtensionPoint: IOExtensionPoint_Static
export interface IOModuleClass_ConstructProps {
}
export interface IOModuleClass {
}
export interface IOModuleClass_Static {
    new (config: IOModuleClass_ConstructProps): IOModuleClass
}
export declare var IOModuleClass: IOModuleClass_Static
export interface IOModuleScope_ConstructProps {
}
export interface IOModuleScope {
    /* Methods of IOModuleScope */
    block(basename: string): void
    free(): void
}
export interface IOModuleScope_Static {
    new (config: IOModuleScope_ConstructProps): IOModuleScope
}
export declare class IOModuleScope_Static {
}
export declare var IOModuleScope: IOModuleScope_Static
export interface IOSchedulerJob_ConstructProps {
}
export interface IOSchedulerJob {
    /* Methods of IOSchedulerJob */
    send_to_mainloop(func: GLib.SourceFunc, user_data: object, notify: GLib.DestroyNotify | null): boolean
    send_to_mainloop_async(func: GLib.SourceFunc, user_data: object, notify: GLib.DestroyNotify | null): void
}
export interface IOSchedulerJob_Static {
    new (config: IOSchedulerJob_ConstructProps): IOSchedulerJob
}
export declare var IOSchedulerJob: IOSchedulerJob_Static
export interface IOStreamAdapter_ConstructProps {
}
export interface IOStreamAdapter {
}
export interface IOStreamAdapter_Static {
    new (config: IOStreamAdapter_ConstructProps): IOStreamAdapter
}
export declare var IOStreamAdapter: IOStreamAdapter_Static
export interface IOStreamClass_ConstructProps {
}
export interface IOStreamClass {
}
export interface IOStreamClass_Static {
    new (config: IOStreamClass_ConstructProps): IOStreamClass
}
export declare var IOStreamClass: IOStreamClass_Static
export interface IOStreamPrivate_ConstructProps {
}
export interface IOStreamPrivate {
}
export interface IOStreamPrivate_Static {
    new (config: IOStreamPrivate_ConstructProps): IOStreamPrivate
}
export declare var IOStreamPrivate: IOStreamPrivate_Static
export interface IconIface_ConstructProps {
}
export interface IconIface {
}
export interface IconIface_Static {
    new (config: IconIface_ConstructProps): IconIface
}
export declare var IconIface: IconIface_Static
export interface InetAddressClass_ConstructProps {
}
export interface InetAddressClass {
}
export interface InetAddressClass_Static {
    new (config: InetAddressClass_ConstructProps): InetAddressClass
}
export declare var InetAddressClass: InetAddressClass_Static
export interface InetAddressMaskClass_ConstructProps {
}
export interface InetAddressMaskClass {
}
export interface InetAddressMaskClass_Static {
    new (config: InetAddressMaskClass_ConstructProps): InetAddressMaskClass
}
export declare var InetAddressMaskClass: InetAddressMaskClass_Static
export interface InetAddressMaskPrivate_ConstructProps {
}
export interface InetAddressMaskPrivate {
}
export interface InetAddressMaskPrivate_Static {
    new (config: InetAddressMaskPrivate_ConstructProps): InetAddressMaskPrivate
}
export declare var InetAddressMaskPrivate: InetAddressMaskPrivate_Static
export interface InetAddressPrivate_ConstructProps {
}
export interface InetAddressPrivate {
}
export interface InetAddressPrivate_Static {
    new (config: InetAddressPrivate_ConstructProps): InetAddressPrivate
}
export declare var InetAddressPrivate: InetAddressPrivate_Static
export interface InetSocketAddressClass_ConstructProps {
}
export interface InetSocketAddressClass {
}
export interface InetSocketAddressClass_Static {
    new (config: InetSocketAddressClass_ConstructProps): InetSocketAddressClass
}
export declare var InetSocketAddressClass: InetSocketAddressClass_Static
export interface InetSocketAddressPrivate_ConstructProps {
}
export interface InetSocketAddressPrivate {
}
export interface InetSocketAddressPrivate_Static {
    new (config: InetSocketAddressPrivate_ConstructProps): InetSocketAddressPrivate
}
export declare var InetSocketAddressPrivate: InetSocketAddressPrivate_Static
export interface InitableIface_ConstructProps {
}
export interface InitableIface {
}
export interface InitableIface_Static {
    new (config: InitableIface_ConstructProps): InitableIface
}
export declare var InitableIface: InitableIface_Static
export interface InputMessage_ConstructProps {
}
export interface InputMessage {
}
export interface InputMessage_Static {
    new (config: InputMessage_ConstructProps): InputMessage
}
export declare var InputMessage: InputMessage_Static
export interface InputStreamClass_ConstructProps {
}
export interface InputStreamClass {
}
export interface InputStreamClass_Static {
    new (config: InputStreamClass_ConstructProps): InputStreamClass
}
export declare var InputStreamClass: InputStreamClass_Static
export interface InputStreamPrivate_ConstructProps {
}
export interface InputStreamPrivate {
}
export interface InputStreamPrivate_Static {
    new (config: InputStreamPrivate_ConstructProps): InputStreamPrivate
}
export declare var InputStreamPrivate: InputStreamPrivate_Static
export interface InputVector_ConstructProps {
}
export interface InputVector {
}
export interface InputVector_Static {
    new (config: InputVector_ConstructProps): InputVector
}
export declare var InputVector: InputVector_Static
export interface ListModelInterface_ConstructProps {
}
export interface ListModelInterface {
}
export interface ListModelInterface_Static {
    new (config: ListModelInterface_ConstructProps): ListModelInterface
}
export declare var ListModelInterface: ListModelInterface_Static
export interface ListStoreClass_ConstructProps {
}
export interface ListStoreClass {
}
export interface ListStoreClass_Static {
    new (config: ListStoreClass_ConstructProps): ListStoreClass
}
export declare var ListStoreClass: ListStoreClass_Static
export interface LoadableIconIface_ConstructProps {
}
export interface LoadableIconIface {
}
export interface LoadableIconIface_Static {
    new (config: LoadableIconIface_ConstructProps): LoadableIconIface
}
export declare var LoadableIconIface: LoadableIconIface_Static
export interface MemoryInputStreamClass_ConstructProps {
}
export interface MemoryInputStreamClass {
}
export interface MemoryInputStreamClass_Static {
    new (config: MemoryInputStreamClass_ConstructProps): MemoryInputStreamClass
}
export declare var MemoryInputStreamClass: MemoryInputStreamClass_Static
export interface MemoryInputStreamPrivate_ConstructProps {
}
export interface MemoryInputStreamPrivate {
}
export interface MemoryInputStreamPrivate_Static {
    new (config: MemoryInputStreamPrivate_ConstructProps): MemoryInputStreamPrivate
}
export declare var MemoryInputStreamPrivate: MemoryInputStreamPrivate_Static
export interface MemoryOutputStreamClass_ConstructProps {
}
export interface MemoryOutputStreamClass {
}
export interface MemoryOutputStreamClass_Static {
    new (config: MemoryOutputStreamClass_ConstructProps): MemoryOutputStreamClass
}
export declare var MemoryOutputStreamClass: MemoryOutputStreamClass_Static
export interface MemoryOutputStreamPrivate_ConstructProps {
}
export interface MemoryOutputStreamPrivate {
}
export interface MemoryOutputStreamPrivate_Static {
    new (config: MemoryOutputStreamPrivate_ConstructProps): MemoryOutputStreamPrivate
}
export declare var MemoryOutputStreamPrivate: MemoryOutputStreamPrivate_Static
export interface MenuAttributeIterClass_ConstructProps {
}
export interface MenuAttributeIterClass {
}
export interface MenuAttributeIterClass_Static {
    new (config: MenuAttributeIterClass_ConstructProps): MenuAttributeIterClass
}
export declare var MenuAttributeIterClass: MenuAttributeIterClass_Static
export interface MenuAttributeIterPrivate_ConstructProps {
}
export interface MenuAttributeIterPrivate {
}
export interface MenuAttributeIterPrivate_Static {
    new (config: MenuAttributeIterPrivate_ConstructProps): MenuAttributeIterPrivate
}
export declare var MenuAttributeIterPrivate: MenuAttributeIterPrivate_Static
export interface MenuLinkIterClass_ConstructProps {
}
export interface MenuLinkIterClass {
}
export interface MenuLinkIterClass_Static {
    new (config: MenuLinkIterClass_ConstructProps): MenuLinkIterClass
}
export declare var MenuLinkIterClass: MenuLinkIterClass_Static
export interface MenuLinkIterPrivate_ConstructProps {
}
export interface MenuLinkIterPrivate {
}
export interface MenuLinkIterPrivate_Static {
    new (config: MenuLinkIterPrivate_ConstructProps): MenuLinkIterPrivate
}
export declare var MenuLinkIterPrivate: MenuLinkIterPrivate_Static
export interface MenuModelClass_ConstructProps {
}
export interface MenuModelClass {
}
export interface MenuModelClass_Static {
    new (config: MenuModelClass_ConstructProps): MenuModelClass
}
export declare var MenuModelClass: MenuModelClass_Static
export interface MenuModelPrivate_ConstructProps {
}
export interface MenuModelPrivate {
}
export interface MenuModelPrivate_Static {
    new (config: MenuModelPrivate_ConstructProps): MenuModelPrivate
}
export declare var MenuModelPrivate: MenuModelPrivate_Static
export interface MountIface_ConstructProps {
}
export interface MountIface {
}
export interface MountIface_Static {
    new (config: MountIface_ConstructProps): MountIface
}
export declare var MountIface: MountIface_Static
export interface MountOperationClass_ConstructProps {
}
export interface MountOperationClass {
}
export interface MountOperationClass_Static {
    new (config: MountOperationClass_ConstructProps): MountOperationClass
}
export declare var MountOperationClass: MountOperationClass_Static
export interface MountOperationPrivate_ConstructProps {
}
export interface MountOperationPrivate {
}
export interface MountOperationPrivate_Static {
    new (config: MountOperationPrivate_ConstructProps): MountOperationPrivate
}
export declare var MountOperationPrivate: MountOperationPrivate_Static
export interface NativeSocketAddress_ConstructProps {
}
export interface NativeSocketAddress {
}
export interface NativeSocketAddress_Static {
    new (config: NativeSocketAddress_ConstructProps): NativeSocketAddress
}
export declare var NativeSocketAddress: NativeSocketAddress_Static
export interface NativeVolumeMonitorClass_ConstructProps {
}
export interface NativeVolumeMonitorClass {
}
export interface NativeVolumeMonitorClass_Static {
    new (config: NativeVolumeMonitorClass_ConstructProps): NativeVolumeMonitorClass
}
export declare var NativeVolumeMonitorClass: NativeVolumeMonitorClass_Static
export interface NetworkAddressClass_ConstructProps {
}
export interface NetworkAddressClass {
}
export interface NetworkAddressClass_Static {
    new (config: NetworkAddressClass_ConstructProps): NetworkAddressClass
}
export declare var NetworkAddressClass: NetworkAddressClass_Static
export interface NetworkAddressPrivate_ConstructProps {
}
export interface NetworkAddressPrivate {
}
export interface NetworkAddressPrivate_Static {
    new (config: NetworkAddressPrivate_ConstructProps): NetworkAddressPrivate
}
export declare var NetworkAddressPrivate: NetworkAddressPrivate_Static
export interface NetworkMonitorInterface_ConstructProps {
}
export interface NetworkMonitorInterface {
}
export interface NetworkMonitorInterface_Static {
    new (config: NetworkMonitorInterface_ConstructProps): NetworkMonitorInterface
}
export declare var NetworkMonitorInterface: NetworkMonitorInterface_Static
export interface NetworkServiceClass_ConstructProps {
}
export interface NetworkServiceClass {
}
export interface NetworkServiceClass_Static {
    new (config: NetworkServiceClass_ConstructProps): NetworkServiceClass
}
export declare var NetworkServiceClass: NetworkServiceClass_Static
export interface NetworkServicePrivate_ConstructProps {
}
export interface NetworkServicePrivate {
}
export interface NetworkServicePrivate_Static {
    new (config: NetworkServicePrivate_ConstructProps): NetworkServicePrivate
}
export declare var NetworkServicePrivate: NetworkServicePrivate_Static
export interface OutputMessage_ConstructProps {
}
export interface OutputMessage {
}
export interface OutputMessage_Static {
    new (config: OutputMessage_ConstructProps): OutputMessage
}
export declare var OutputMessage: OutputMessage_Static
export interface OutputStreamClass_ConstructProps {
}
export interface OutputStreamClass {
}
export interface OutputStreamClass_Static {
    new (config: OutputStreamClass_ConstructProps): OutputStreamClass
}
export declare var OutputStreamClass: OutputStreamClass_Static
export interface OutputStreamPrivate_ConstructProps {
}
export interface OutputStreamPrivate {
}
export interface OutputStreamPrivate_Static {
    new (config: OutputStreamPrivate_ConstructProps): OutputStreamPrivate
}
export declare var OutputStreamPrivate: OutputStreamPrivate_Static
export interface OutputVector_ConstructProps {
}
export interface OutputVector {
}
export interface OutputVector_Static {
    new (config: OutputVector_ConstructProps): OutputVector
}
export declare var OutputVector: OutputVector_Static
export interface PermissionClass_ConstructProps {
}
export interface PermissionClass {
}
export interface PermissionClass_Static {
    new (config: PermissionClass_ConstructProps): PermissionClass
}
export declare var PermissionClass: PermissionClass_Static
export interface PermissionPrivate_ConstructProps {
}
export interface PermissionPrivate {
}
export interface PermissionPrivate_Static {
    new (config: PermissionPrivate_ConstructProps): PermissionPrivate
}
export declare var PermissionPrivate: PermissionPrivate_Static
export interface PollableInputStreamInterface_ConstructProps {
}
export interface PollableInputStreamInterface {
}
export interface PollableInputStreamInterface_Static {
    new (config: PollableInputStreamInterface_ConstructProps): PollableInputStreamInterface
}
export declare var PollableInputStreamInterface: PollableInputStreamInterface_Static
export interface PollableOutputStreamInterface_ConstructProps {
}
export interface PollableOutputStreamInterface {
}
export interface PollableOutputStreamInterface_Static {
    new (config: PollableOutputStreamInterface_ConstructProps): PollableOutputStreamInterface
}
export declare var PollableOutputStreamInterface: PollableOutputStreamInterface_Static
export interface ProxyAddressClass_ConstructProps {
}
export interface ProxyAddressClass {
}
export interface ProxyAddressClass_Static {
    new (config: ProxyAddressClass_ConstructProps): ProxyAddressClass
}
export declare var ProxyAddressClass: ProxyAddressClass_Static
export interface ProxyAddressEnumeratorClass_ConstructProps {
}
export interface ProxyAddressEnumeratorClass {
}
export interface ProxyAddressEnumeratorClass_Static {
    new (config: ProxyAddressEnumeratorClass_ConstructProps): ProxyAddressEnumeratorClass
}
export declare var ProxyAddressEnumeratorClass: ProxyAddressEnumeratorClass_Static
export interface ProxyAddressEnumeratorPrivate_ConstructProps {
}
export interface ProxyAddressEnumeratorPrivate {
}
export interface ProxyAddressEnumeratorPrivate_Static {
    new (config: ProxyAddressEnumeratorPrivate_ConstructProps): ProxyAddressEnumeratorPrivate
}
export declare var ProxyAddressEnumeratorPrivate: ProxyAddressEnumeratorPrivate_Static
export interface ProxyAddressPrivate_ConstructProps {
}
export interface ProxyAddressPrivate {
}
export interface ProxyAddressPrivate_Static {
    new (config: ProxyAddressPrivate_ConstructProps): ProxyAddressPrivate
}
export declare var ProxyAddressPrivate: ProxyAddressPrivate_Static
export interface ProxyInterface_ConstructProps {
}
export interface ProxyInterface {
}
export interface ProxyInterface_Static {
    new (config: ProxyInterface_ConstructProps): ProxyInterface
}
export declare var ProxyInterface: ProxyInterface_Static
export interface ProxyResolverInterface_ConstructProps {
}
export interface ProxyResolverInterface {
}
export interface ProxyResolverInterface_Static {
    new (config: ProxyResolverInterface_ConstructProps): ProxyResolverInterface
}
export declare var ProxyResolverInterface: ProxyResolverInterface_Static
export interface RemoteActionGroupInterface_ConstructProps {
}
export interface RemoteActionGroupInterface {
}
export interface RemoteActionGroupInterface_Static {
    new (config: RemoteActionGroupInterface_ConstructProps): RemoteActionGroupInterface
}
export declare var RemoteActionGroupInterface: RemoteActionGroupInterface_Static
export interface ResolverClass_ConstructProps {
}
export interface ResolverClass {
}
export interface ResolverClass_Static {
    new (config: ResolverClass_ConstructProps): ResolverClass
}
export declare var ResolverClass: ResolverClass_Static
export interface ResolverPrivate_ConstructProps {
}
export interface ResolverPrivate {
}
export interface ResolverPrivate_Static {
    new (config: ResolverPrivate_ConstructProps): ResolverPrivate
}
export declare var ResolverPrivate: ResolverPrivate_Static
export interface Resource_ConstructProps {
}
export interface Resource {
    /* Methods of Resource */
    _register(): void
    _unregister(): void
    enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[]
    get_info(path: string, lookup_flags: ResourceLookupFlags, size: number | null, flags: number | null): boolean
    lookup_data(path: string, lookup_flags: ResourceLookupFlags): GLib.Bytes
    open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream
    ref(): Resource
    unref(): void
}
export interface Resource_Static {
    new (config: Resource_ConstructProps): Resource
}
export declare class Resource_Static {
    load(filename: string): Resource
}
export declare var Resource: Resource_Static
export interface SeekableIface_ConstructProps {
}
export interface SeekableIface {
}
export interface SeekableIface_Static {
    new (config: SeekableIface_ConstructProps): SeekableIface
}
export declare var SeekableIface: SeekableIface_Static
export interface SettingsBackend_ConstructProps {
}
export interface SettingsBackend {
}
export interface SettingsBackend_Static {
    new (config: SettingsBackend_ConstructProps): SettingsBackend
}
export declare var SettingsBackend: SettingsBackend_Static
export interface SettingsClass_ConstructProps {
}
export interface SettingsClass {
}
export interface SettingsClass_Static {
    new (config: SettingsClass_ConstructProps): SettingsClass
}
export declare var SettingsClass: SettingsClass_Static
export interface SettingsPrivate_ConstructProps {
}
export interface SettingsPrivate {
}
export interface SettingsPrivate_Static {
    new (config: SettingsPrivate_ConstructProps): SettingsPrivate
}
export declare var SettingsPrivate: SettingsPrivate_Static
export interface SettingsSchema_ConstructProps {
}
export interface SettingsSchema {
    /* Methods of SettingsSchema */
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
    new (config: SettingsSchema_ConstructProps): SettingsSchema
}
export declare var SettingsSchema: SettingsSchema_Static
export interface SettingsSchemaKey_ConstructProps {
}
export interface SettingsSchemaKey {
    /* Methods of SettingsSchemaKey */
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
    new (config: SettingsSchemaKey_ConstructProps): SettingsSchemaKey
}
export declare var SettingsSchemaKey: SettingsSchemaKey_Static
export interface SettingsSchemaSource_ConstructProps {
}
export interface SettingsSchemaSource {
    /* Methods of SettingsSchemaSource */
    list_schemas(recursive: boolean, non_relocatable: string[], relocatable: string[]): void
    lookup(schema_id: string, recursive: boolean): SettingsSchema | null
    ref(): SettingsSchemaSource
    unref(): void
}
export interface SettingsSchemaSource_Static {
    new (config: SettingsSchemaSource_ConstructProps): SettingsSchemaSource
}
export declare class SettingsSchemaSource_Static {
    get_default(): SettingsSchemaSource
}
export declare var SettingsSchemaSource: SettingsSchemaSource_Static
export interface SimpleActionGroupClass_ConstructProps {
}
export interface SimpleActionGroupClass {
}
export interface SimpleActionGroupClass_Static {
    new (config: SimpleActionGroupClass_ConstructProps): SimpleActionGroupClass
}
export declare var SimpleActionGroupClass: SimpleActionGroupClass_Static
export interface SimpleActionGroupPrivate_ConstructProps {
}
export interface SimpleActionGroupPrivate {
}
export interface SimpleActionGroupPrivate_Static {
    new (config: SimpleActionGroupPrivate_ConstructProps): SimpleActionGroupPrivate
}
export declare var SimpleActionGroupPrivate: SimpleActionGroupPrivate_Static
export interface SimpleAsyncResultClass_ConstructProps {
}
export interface SimpleAsyncResultClass {
}
export interface SimpleAsyncResultClass_Static {
    new (config: SimpleAsyncResultClass_ConstructProps): SimpleAsyncResultClass
}
export declare var SimpleAsyncResultClass: SimpleAsyncResultClass_Static
export interface SimpleProxyResolverClass_ConstructProps {
}
export interface SimpleProxyResolverClass {
}
export interface SimpleProxyResolverClass_Static {
    new (config: SimpleProxyResolverClass_ConstructProps): SimpleProxyResolverClass
}
export declare var SimpleProxyResolverClass: SimpleProxyResolverClass_Static
export interface SimpleProxyResolverPrivate_ConstructProps {
}
export interface SimpleProxyResolverPrivate {
}
export interface SimpleProxyResolverPrivate_Static {
    new (config: SimpleProxyResolverPrivate_ConstructProps): SimpleProxyResolverPrivate
}
export declare var SimpleProxyResolverPrivate: SimpleProxyResolverPrivate_Static
export interface SocketAddressClass_ConstructProps {
}
export interface SocketAddressClass {
}
export interface SocketAddressClass_Static {
    new (config: SocketAddressClass_ConstructProps): SocketAddressClass
}
export declare var SocketAddressClass: SocketAddressClass_Static
export interface SocketAddressEnumeratorClass_ConstructProps {
}
export interface SocketAddressEnumeratorClass {
}
export interface SocketAddressEnumeratorClass_Static {
    new (config: SocketAddressEnumeratorClass_ConstructProps): SocketAddressEnumeratorClass
}
export declare var SocketAddressEnumeratorClass: SocketAddressEnumeratorClass_Static
export interface SocketClass_ConstructProps {
}
export interface SocketClass {
}
export interface SocketClass_Static {
    new (config: SocketClass_ConstructProps): SocketClass
}
export declare var SocketClass: SocketClass_Static
export interface SocketClientClass_ConstructProps {
}
export interface SocketClientClass {
}
export interface SocketClientClass_Static {
    new (config: SocketClientClass_ConstructProps): SocketClientClass
}
export declare var SocketClientClass: SocketClientClass_Static
export interface SocketClientPrivate_ConstructProps {
}
export interface SocketClientPrivate {
}
export interface SocketClientPrivate_Static {
    new (config: SocketClientPrivate_ConstructProps): SocketClientPrivate
}
export declare var SocketClientPrivate: SocketClientPrivate_Static
export interface SocketConnectableIface_ConstructProps {
}
export interface SocketConnectableIface {
}
export interface SocketConnectableIface_Static {
    new (config: SocketConnectableIface_ConstructProps): SocketConnectableIface
}
export declare var SocketConnectableIface: SocketConnectableIface_Static
export interface SocketConnectionClass_ConstructProps {
}
export interface SocketConnectionClass {
}
export interface SocketConnectionClass_Static {
    new (config: SocketConnectionClass_ConstructProps): SocketConnectionClass
}
export declare var SocketConnectionClass: SocketConnectionClass_Static
export interface SocketConnectionPrivate_ConstructProps {
}
export interface SocketConnectionPrivate {
}
export interface SocketConnectionPrivate_Static {
    new (config: SocketConnectionPrivate_ConstructProps): SocketConnectionPrivate
}
export declare var SocketConnectionPrivate: SocketConnectionPrivate_Static
export interface SocketControlMessageClass_ConstructProps {
}
export interface SocketControlMessageClass {
}
export interface SocketControlMessageClass_Static {
    new (config: SocketControlMessageClass_ConstructProps): SocketControlMessageClass
}
export declare var SocketControlMessageClass: SocketControlMessageClass_Static
export interface SocketControlMessagePrivate_ConstructProps {
}
export interface SocketControlMessagePrivate {
}
export interface SocketControlMessagePrivate_Static {
    new (config: SocketControlMessagePrivate_ConstructProps): SocketControlMessagePrivate
}
export declare var SocketControlMessagePrivate: SocketControlMessagePrivate_Static
export interface SocketListenerClass_ConstructProps {
}
export interface SocketListenerClass {
}
export interface SocketListenerClass_Static {
    new (config: SocketListenerClass_ConstructProps): SocketListenerClass
}
export declare var SocketListenerClass: SocketListenerClass_Static
export interface SocketListenerPrivate_ConstructProps {
}
export interface SocketListenerPrivate {
}
export interface SocketListenerPrivate_Static {
    new (config: SocketListenerPrivate_ConstructProps): SocketListenerPrivate
}
export declare var SocketListenerPrivate: SocketListenerPrivate_Static
export interface SocketPrivate_ConstructProps {
}
export interface SocketPrivate {
}
export interface SocketPrivate_Static {
    new (config: SocketPrivate_ConstructProps): SocketPrivate
}
export declare var SocketPrivate: SocketPrivate_Static
export interface SocketServiceClass_ConstructProps {
}
export interface SocketServiceClass {
}
export interface SocketServiceClass_Static {
    new (config: SocketServiceClass_ConstructProps): SocketServiceClass
}
export declare var SocketServiceClass: SocketServiceClass_Static
export interface SocketServicePrivate_ConstructProps {
}
export interface SocketServicePrivate {
}
export interface SocketServicePrivate_Static {
    new (config: SocketServicePrivate_ConstructProps): SocketServicePrivate
}
export declare var SocketServicePrivate: SocketServicePrivate_Static
export interface SrvTarget_ConstructProps {
}
export interface SrvTarget {
    /* Methods of SrvTarget */
    copy(): SrvTarget
    free(): void
    get_hostname(): string
    get_port(): number
    get_priority(): number
    get_weight(): number
}
export interface SrvTarget_Static {
    new (config: SrvTarget_ConstructProps): SrvTarget
}
export declare class SrvTarget_Static {
}
export declare var SrvTarget: SrvTarget_Static
export interface StaticResource_ConstructProps {
}
export interface StaticResource {
    /* Methods of StaticResource */
    fini(): void
    get_resource(): Resource
    init(): void
}
export interface StaticResource_Static {
    new (config: StaticResource_ConstructProps): StaticResource
}
export declare var StaticResource: StaticResource_Static
export interface TaskClass_ConstructProps {
}
export interface TaskClass {
}
export interface TaskClass_Static {
    new (config: TaskClass_ConstructProps): TaskClass
}
export declare var TaskClass: TaskClass_Static
export interface TcpConnectionClass_ConstructProps {
}
export interface TcpConnectionClass {
}
export interface TcpConnectionClass_Static {
    new (config: TcpConnectionClass_ConstructProps): TcpConnectionClass
}
export declare var TcpConnectionClass: TcpConnectionClass_Static
export interface TcpConnectionPrivate_ConstructProps {
}
export interface TcpConnectionPrivate {
}
export interface TcpConnectionPrivate_Static {
    new (config: TcpConnectionPrivate_ConstructProps): TcpConnectionPrivate
}
export declare var TcpConnectionPrivate: TcpConnectionPrivate_Static
export interface TcpWrapperConnectionClass_ConstructProps {
}
export interface TcpWrapperConnectionClass {
}
export interface TcpWrapperConnectionClass_Static {
    new (config: TcpWrapperConnectionClass_ConstructProps): TcpWrapperConnectionClass
}
export declare var TcpWrapperConnectionClass: TcpWrapperConnectionClass_Static
export interface TcpWrapperConnectionPrivate_ConstructProps {
}
export interface TcpWrapperConnectionPrivate {
}
export interface TcpWrapperConnectionPrivate_Static {
    new (config: TcpWrapperConnectionPrivate_ConstructProps): TcpWrapperConnectionPrivate
}
export declare var TcpWrapperConnectionPrivate: TcpWrapperConnectionPrivate_Static
export interface ThemedIconClass_ConstructProps {
}
export interface ThemedIconClass {
}
export interface ThemedIconClass_Static {
    new (config: ThemedIconClass_ConstructProps): ThemedIconClass
}
export declare var ThemedIconClass: ThemedIconClass_Static
export interface ThreadedSocketServiceClass_ConstructProps {
}
export interface ThreadedSocketServiceClass {
}
export interface ThreadedSocketServiceClass_Static {
    new (config: ThreadedSocketServiceClass_ConstructProps): ThreadedSocketServiceClass
}
export declare var ThreadedSocketServiceClass: ThreadedSocketServiceClass_Static
export interface ThreadedSocketServicePrivate_ConstructProps {
}
export interface ThreadedSocketServicePrivate {
}
export interface ThreadedSocketServicePrivate_Static {
    new (config: ThreadedSocketServicePrivate_ConstructProps): ThreadedSocketServicePrivate
}
export declare var ThreadedSocketServicePrivate: ThreadedSocketServicePrivate_Static
export interface TlsBackendInterface_ConstructProps {
}
export interface TlsBackendInterface {
}
export interface TlsBackendInterface_Static {
    new (config: TlsBackendInterface_ConstructProps): TlsBackendInterface
}
export declare var TlsBackendInterface: TlsBackendInterface_Static
export interface TlsCertificateClass_ConstructProps {
}
export interface TlsCertificateClass {
}
export interface TlsCertificateClass_Static {
    new (config: TlsCertificateClass_ConstructProps): TlsCertificateClass
}
export declare var TlsCertificateClass: TlsCertificateClass_Static
export interface TlsCertificatePrivate_ConstructProps {
}
export interface TlsCertificatePrivate {
}
export interface TlsCertificatePrivate_Static {
    new (config: TlsCertificatePrivate_ConstructProps): TlsCertificatePrivate
}
export declare var TlsCertificatePrivate: TlsCertificatePrivate_Static
export interface TlsClientConnectionInterface_ConstructProps {
}
export interface TlsClientConnectionInterface {
}
export interface TlsClientConnectionInterface_Static {
    new (config: TlsClientConnectionInterface_ConstructProps): TlsClientConnectionInterface
}
export declare var TlsClientConnectionInterface: TlsClientConnectionInterface_Static
export interface TlsConnectionClass_ConstructProps {
}
export interface TlsConnectionClass {
}
export interface TlsConnectionClass_Static {
    new (config: TlsConnectionClass_ConstructProps): TlsConnectionClass
}
export declare var TlsConnectionClass: TlsConnectionClass_Static
export interface TlsConnectionPrivate_ConstructProps {
}
export interface TlsConnectionPrivate {
}
export interface TlsConnectionPrivate_Static {
    new (config: TlsConnectionPrivate_ConstructProps): TlsConnectionPrivate
}
export declare var TlsConnectionPrivate: TlsConnectionPrivate_Static
export interface TlsDatabaseClass_ConstructProps {
}
export interface TlsDatabaseClass {
}
export interface TlsDatabaseClass_Static {
    new (config: TlsDatabaseClass_ConstructProps): TlsDatabaseClass
}
export declare var TlsDatabaseClass: TlsDatabaseClass_Static
export interface TlsDatabasePrivate_ConstructProps {
}
export interface TlsDatabasePrivate {
}
export interface TlsDatabasePrivate_Static {
    new (config: TlsDatabasePrivate_ConstructProps): TlsDatabasePrivate
}
export declare var TlsDatabasePrivate: TlsDatabasePrivate_Static
export interface TlsFileDatabaseInterface_ConstructProps {
}
export interface TlsFileDatabaseInterface {
}
export interface TlsFileDatabaseInterface_Static {
    new (config: TlsFileDatabaseInterface_ConstructProps): TlsFileDatabaseInterface
}
export declare var TlsFileDatabaseInterface: TlsFileDatabaseInterface_Static
export interface TlsInteractionClass_ConstructProps {
}
export interface TlsInteractionClass {
}
export interface TlsInteractionClass_Static {
    new (config: TlsInteractionClass_ConstructProps): TlsInteractionClass
}
export declare var TlsInteractionClass: TlsInteractionClass_Static
export interface TlsInteractionPrivate_ConstructProps {
}
export interface TlsInteractionPrivate {
}
export interface TlsInteractionPrivate_Static {
    new (config: TlsInteractionPrivate_ConstructProps): TlsInteractionPrivate
}
export declare var TlsInteractionPrivate: TlsInteractionPrivate_Static
export interface TlsPasswordClass_ConstructProps {
}
export interface TlsPasswordClass {
}
export interface TlsPasswordClass_Static {
    new (config: TlsPasswordClass_ConstructProps): TlsPasswordClass
}
export declare var TlsPasswordClass: TlsPasswordClass_Static
export interface TlsPasswordPrivate_ConstructProps {
}
export interface TlsPasswordPrivate {
}
export interface TlsPasswordPrivate_Static {
    new (config: TlsPasswordPrivate_ConstructProps): TlsPasswordPrivate
}
export declare var TlsPasswordPrivate: TlsPasswordPrivate_Static
export interface TlsServerConnectionInterface_ConstructProps {
}
export interface TlsServerConnectionInterface {
}
export interface TlsServerConnectionInterface_Static {
    new (config: TlsServerConnectionInterface_ConstructProps): TlsServerConnectionInterface
}
export declare var TlsServerConnectionInterface: TlsServerConnectionInterface_Static
export interface UnixConnectionClass_ConstructProps {
}
export interface UnixConnectionClass {
}
export interface UnixConnectionClass_Static {
    new (config: UnixConnectionClass_ConstructProps): UnixConnectionClass
}
export declare var UnixConnectionClass: UnixConnectionClass_Static
export interface UnixConnectionPrivate_ConstructProps {
}
export interface UnixConnectionPrivate {
}
export interface UnixConnectionPrivate_Static {
    new (config: UnixConnectionPrivate_ConstructProps): UnixConnectionPrivate
}
export declare var UnixConnectionPrivate: UnixConnectionPrivate_Static
export interface UnixCredentialsMessageClass_ConstructProps {
}
export interface UnixCredentialsMessageClass {
}
export interface UnixCredentialsMessageClass_Static {
    new (config: UnixCredentialsMessageClass_ConstructProps): UnixCredentialsMessageClass
}
export declare var UnixCredentialsMessageClass: UnixCredentialsMessageClass_Static
export interface UnixCredentialsMessagePrivate_ConstructProps {
}
export interface UnixCredentialsMessagePrivate {
}
export interface UnixCredentialsMessagePrivate_Static {
    new (config: UnixCredentialsMessagePrivate_ConstructProps): UnixCredentialsMessagePrivate
}
export declare var UnixCredentialsMessagePrivate: UnixCredentialsMessagePrivate_Static
export interface UnixFDListClass_ConstructProps {
}
export interface UnixFDListClass {
}
export interface UnixFDListClass_Static {
    new (config: UnixFDListClass_ConstructProps): UnixFDListClass
}
export declare var UnixFDListClass: UnixFDListClass_Static
export interface UnixFDListPrivate_ConstructProps {
}
export interface UnixFDListPrivate {
}
export interface UnixFDListPrivate_Static {
    new (config: UnixFDListPrivate_ConstructProps): UnixFDListPrivate
}
export declare var UnixFDListPrivate: UnixFDListPrivate_Static
export interface UnixFDMessageClass_ConstructProps {
}
export interface UnixFDMessageClass {
}
export interface UnixFDMessageClass_Static {
    new (config: UnixFDMessageClass_ConstructProps): UnixFDMessageClass
}
export declare var UnixFDMessageClass: UnixFDMessageClass_Static
export interface UnixFDMessagePrivate_ConstructProps {
}
export interface UnixFDMessagePrivate {
}
export interface UnixFDMessagePrivate_Static {
    new (config: UnixFDMessagePrivate_ConstructProps): UnixFDMessagePrivate
}
export declare var UnixFDMessagePrivate: UnixFDMessagePrivate_Static
export interface UnixInputStreamClass_ConstructProps {
}
export interface UnixInputStreamClass {
}
export interface UnixInputStreamClass_Static {
    new (config: UnixInputStreamClass_ConstructProps): UnixInputStreamClass
}
export declare var UnixInputStreamClass: UnixInputStreamClass_Static
export interface UnixInputStreamPrivate_ConstructProps {
}
export interface UnixInputStreamPrivate {
}
export interface UnixInputStreamPrivate_Static {
    new (config: UnixInputStreamPrivate_ConstructProps): UnixInputStreamPrivate
}
export declare var UnixInputStreamPrivate: UnixInputStreamPrivate_Static
export interface UnixMountEntry_ConstructProps {
}
export interface UnixMountEntry {
}
export interface UnixMountEntry_Static {
    new (config: UnixMountEntry_ConstructProps): UnixMountEntry
}
export declare var UnixMountEntry: UnixMountEntry_Static
export interface UnixMountMonitorClass_ConstructProps {
}
export interface UnixMountMonitorClass {
}
export interface UnixMountMonitorClass_Static {
    new (config: UnixMountMonitorClass_ConstructProps): UnixMountMonitorClass
}
export declare var UnixMountMonitorClass: UnixMountMonitorClass_Static
export interface UnixMountPoint_ConstructProps {
}
export interface UnixMountPoint {
    /* Methods of UnixMountPoint */
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
    new (config: UnixMountPoint_ConstructProps): UnixMountPoint
}
export declare var UnixMountPoint: UnixMountPoint_Static
export interface UnixOutputStreamClass_ConstructProps {
}
export interface UnixOutputStreamClass {
}
export interface UnixOutputStreamClass_Static {
    new (config: UnixOutputStreamClass_ConstructProps): UnixOutputStreamClass
}
export declare var UnixOutputStreamClass: UnixOutputStreamClass_Static
export interface UnixOutputStreamPrivate_ConstructProps {
}
export interface UnixOutputStreamPrivate {
}
export interface UnixOutputStreamPrivate_Static {
    new (config: UnixOutputStreamPrivate_ConstructProps): UnixOutputStreamPrivate
}
export declare var UnixOutputStreamPrivate: UnixOutputStreamPrivate_Static
export interface UnixSocketAddressClass_ConstructProps {
}
export interface UnixSocketAddressClass {
}
export interface UnixSocketAddressClass_Static {
    new (config: UnixSocketAddressClass_ConstructProps): UnixSocketAddressClass
}
export declare var UnixSocketAddressClass: UnixSocketAddressClass_Static
export interface UnixSocketAddressPrivate_ConstructProps {
}
export interface UnixSocketAddressPrivate {
}
export interface UnixSocketAddressPrivate_Static {
    new (config: UnixSocketAddressPrivate_ConstructProps): UnixSocketAddressPrivate
}
export declare var UnixSocketAddressPrivate: UnixSocketAddressPrivate_Static
export interface VfsClass_ConstructProps {
}
export interface VfsClass {
}
export interface VfsClass_Static {
    new (config: VfsClass_ConstructProps): VfsClass
}
export declare var VfsClass: VfsClass_Static
export interface VolumeIface_ConstructProps {
}
export interface VolumeIface {
}
export interface VolumeIface_Static {
    new (config: VolumeIface_ConstructProps): VolumeIface
}
export declare var VolumeIface: VolumeIface_Static
export interface VolumeMonitorClass_ConstructProps {
}
export interface VolumeMonitorClass {
}
export interface VolumeMonitorClass_Static {
    new (config: VolumeMonitorClass_ConstructProps): VolumeMonitorClass
}
export declare var VolumeMonitorClass: VolumeMonitorClass_Static
export interface ZlibCompressorClass_ConstructProps {
}
export interface ZlibCompressorClass {
}
export interface ZlibCompressorClass_Static {
    new (config: ZlibCompressorClass_ConstructProps): ZlibCompressorClass
}
export declare var ZlibCompressorClass: ZlibCompressorClass_Static
export interface ZlibDecompressorClass_ConstructProps {
}
export interface ZlibDecompressorClass {
}
export interface ZlibDecompressorClass_Static {
    new (config: ZlibDecompressorClass_ConstructProps): ZlibDecompressorClass
}
export declare var ZlibDecompressorClass: ZlibDecompressorClass_Static
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