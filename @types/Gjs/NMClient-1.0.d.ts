/**
 * NMClient-1.0
 */

import type * as Gjs from './Gjs';
import type * as NetworkManager from './NetworkManager-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as DBusGLib from './DBusGLib-1.0';
import type * as Gio from './Gio-2.0';

export enum ClientError {
    UNKNOWNERROR,
    MANAGERNOTRUNNING,
}
export enum ClientPermission {
    NONE,
    ENABLE_DISABLE_NETWORK,
    ENABLE_DISABLE_WIFI,
    ENABLE_DISABLE_WWAN,
    ENABLE_DISABLE_WIMAX,
    SLEEP_WAKE,
    NETWORK_CONTROL,
    WIFI_SHARE_PROTECTED,
    WIFI_SHARE_OPEN,
    SETTINGS_MODIFY_SYSTEM,
    SETTINGS_MODIFY_OWN,
    SETTINGS_MODIFY_HOSTNAME,
    SETTINGS_MODIFY_GLOBAL_DNS,
    RELOAD,
    CHECKPOINT_ROLLBACK,
    ENABLE_DISABLE_STATISTICS,
    LAST,
}
export enum ClientPermissionResult {
    UNKNOWN,
    YES,
    AUTH,
    NO,
}
export enum DeviceAdslError {
    UNKNOWNERROR,
    NOTADSLCONNECTION,
    INVALIDADSLCONNECTION,
}
export enum DeviceBondError {
    UNKNOWNERROR,
    NOTBONDCONNECTION,
    INVALIDBONDCONNECTION,
    INTERFACEMISMATCH,
}
export enum DeviceBridgeError {
    UNKNOWNERROR,
    NOTBRIDGECONNECTION,
    INVALIDBRIDGECONNECTION,
    INTERFACEMISMATCH,
}
export enum DeviceBtError {
    UNKNOWNERROR,
    NOTBTCONNECTION,
    INVALIDBTCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
    MISSINGDEVICECAPS,
}
export enum DeviceError {
    UNKNOWNERROR,
    INTERFACEMISMATCH,
}
export enum DeviceEthernetError {
    UNKNOWNERROR,
    NOTETHERNETCONNECTION,
    INVALIDETHERNETCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
export enum DeviceGenericError {
    UNKNOWNERROR,
    NOTGENERICCONNECTION,
    MISSINGINTERFACENAME,
}
export enum DeviceInfinibandError {
    UNKNOWNERROR,
    NOTINFINIBANDCONNECTION,
    INVALIDINFINIBANDCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
export enum DeviceModemError {
    UNKNOWNERROR,
    NOTMODEMCONNECTION,
    INVALIDMODEMCONNECTION,
    MISSINGDEVICECAPS,
}
export enum DeviceOlpcMeshError {
    UNKNOWNERROR,
    NOTOLPCMESHCONNECTION,
    INVALIDOLPCMESHCONNECTION,
}
export enum DeviceTeamError {
    UNKNOWNERROR,
    NOTTEAMCONNECTION,
    INVALIDTEAMCONNECTION,
    INTERFACEMISMATCH,
}
export enum DeviceVlanError {
    UNKNOWNERROR,
    NOTVLANCONNECTION,
    INVALIDVLANCONNECTION,
    IDMISMATCH,
    INTERFACEMISMATCH,
    MACMISMATCH,
}
export enum DeviceWifiError {
    UNKNOWNERROR,
    NOTWIFICONNECTION,
    INVALIDWIFICONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
    MISSINGDEVICEWPACAPS,
    MISSINGDEVICERSNCAPS,
}
export enum DeviceWimaxError {
    UNKNOWNERROR,
    NOTWIMAXCONNECTION,
    INVALIDWIMAXCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
export enum ObjectError {
    UNKNOWN,
    OBJECT_CREATION_FAILURE,
}
export enum RemoteConnectionError {
    UNKNOWNERROR,
    DISCONNECTED,
}
export enum RemoteSettingsError {
    UNKNOWNERROR,
    CONNECTIONREMOVED,
    CONNECTIONUNAVAILABLE,
    SERVICEUNAVAILABLE,
}
export enum SecretAgentError {
    NOTAUTHORIZED,
    INVALIDCONNECTION,
    USERCANCELED,
    AGENTCANCELED,
    INTERNALERROR,
    NOSECRETS,
}
export enum WimaxNspNetworkType {
    UNKNOWN,
    HOME,
    PARTNER,
    ROAMING_PARTNER,
}
export enum SecretAgentCapabilities {
    NONE,
    VPN_HINTS,
    LAST,
}
export enum SecretAgentGetSecretsFlags {
    NONE,
    ALLOW_INTERACTION,
    REQUEST_NEW,
    USER_REQUESTED,
}
export const ACCESS_POINT_BSSID: string
export const ACCESS_POINT_FLAGS: string
export const ACCESS_POINT_FREQUENCY: string
export const ACCESS_POINT_HW_ADDRESS: string
export const ACCESS_POINT_LAST_SEEN: string
export const ACCESS_POINT_MAX_BITRATE: string
export const ACCESS_POINT_MODE: string
export const ACCESS_POINT_RSN_FLAGS: string
export const ACCESS_POINT_SSID: string
export const ACCESS_POINT_STRENGTH: string
export const ACCESS_POINT_WPA_FLAGS: string
export const ACTIVE_CONNECTION_CONNECTION: string
export const ACTIVE_CONNECTION_DEFAULT: string
export const ACTIVE_CONNECTION_DEFAULT6: string
export const ACTIVE_CONNECTION_DEVICES: string
export const ACTIVE_CONNECTION_DHCP4_CONFIG: string
export const ACTIVE_CONNECTION_DHCP6_CONFIG: string
export const ACTIVE_CONNECTION_ID: string
export const ACTIVE_CONNECTION_IP4_CONFIG: string
export const ACTIVE_CONNECTION_IP6_CONFIG: string
export const ACTIVE_CONNECTION_MASTER: string
export const ACTIVE_CONNECTION_SPECIFIC_OBJECT: string
export const ACTIVE_CONNECTION_STATE: string
export const ACTIVE_CONNECTION_TYPE: string
export const ACTIVE_CONNECTION_UUID: string
export const ACTIVE_CONNECTION_VPN: string
export const CLIENT_ACTIVATING_CONNECTION: string
export const CLIENT_ACTIVE_CONNECTIONS: string
export const CLIENT_ALL_DEVICES: string
export const CLIENT_CONNECTIVITY: string
export const CLIENT_DEVICES: string
export const CLIENT_MANAGER_RUNNING: string
export const CLIENT_NETWORKING_ENABLED: string
export const CLIENT_PRIMARY_CONNECTION: string
export const CLIENT_STARTUP: string
export const CLIENT_STATE: string
export const CLIENT_VERSION: string
export const CLIENT_WIMAX_ENABLED: string
export const CLIENT_WIMAX_HARDWARE_ENABLED: string
export const CLIENT_WIRELESS_ENABLED: string
export const CLIENT_WIRELESS_HARDWARE_ENABLED: string
export const CLIENT_WWAN_ENABLED: string
export const CLIENT_WWAN_HARDWARE_ENABLED: string
export const DEVICE_ACTIVE_CONNECTION: string
export const DEVICE_ADSL_CARRIER: string
export const DEVICE_AUTOCONNECT: string
export const DEVICE_AVAILABLE_CONNECTIONS: string
export const DEVICE_BOND_CARRIER: string
export const DEVICE_BOND_HW_ADDRESS: string
export const DEVICE_BOND_SLAVES: string
export const DEVICE_BRIDGE_CARRIER: string
export const DEVICE_BRIDGE_HW_ADDRESS: string
export const DEVICE_BRIDGE_SLAVES: string
export const DEVICE_BT_CAPABILITIES: string
export const DEVICE_BT_HW_ADDRESS: string
export const DEVICE_BT_NAME: string
export const DEVICE_CAPABILITIES: string
export const DEVICE_DEVICE_TYPE: string
export const DEVICE_DHCP4_CONFIG: string
export const DEVICE_DHCP6_CONFIG: string
export const DEVICE_DRIVER: string
export const DEVICE_DRIVER_VERSION: string
export const DEVICE_ETHERNET_CARRIER: string
export const DEVICE_ETHERNET_HW_ADDRESS: string
export const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string
export const DEVICE_ETHERNET_SPEED: string
export const DEVICE_FIRMWARE_MISSING: string
export const DEVICE_FIRMWARE_VERSION: string
export const DEVICE_GENERIC_HW_ADDRESS: string
export const DEVICE_GENERIC_TYPE_DESCRIPTION: string
export const DEVICE_INFINIBAND_CARRIER: string
export const DEVICE_INFINIBAND_HW_ADDRESS: string
export const DEVICE_INTERFACE: string
export const DEVICE_IP4_CONFIG: string
export const DEVICE_IP6_CONFIG: string
export const DEVICE_IP_INTERFACE: string
export const DEVICE_MANAGED: string
export const DEVICE_MODEM_CURRENT_CAPABILITIES: string
export const DEVICE_MODEM_MODEM_CAPABILITIES: string
export const DEVICE_MTU: string
export const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string
export const DEVICE_OLPC_MESH_COMPANION: string
export const DEVICE_OLPC_MESH_HW_ADDRESS: string
export const DEVICE_PHYSICAL_PORT_ID: string
export const DEVICE_PRODUCT: string
export const DEVICE_REAL: string
export const DEVICE_STATE: string
export const DEVICE_STATE_REASON: string
export const DEVICE_TEAM_CARRIER: string
export const DEVICE_TEAM_HW_ADDRESS: string
export const DEVICE_TEAM_SLAVES: string
export const DEVICE_UDI: string
export const DEVICE_VENDOR: string
export const DEVICE_VLAN_CARRIER: string
export const DEVICE_VLAN_HW_ADDRESS: string
export const DEVICE_VLAN_PARENT: string
export const DEVICE_VLAN_VLAN_ID: string
export const DEVICE_WIFI_ACCESS_POINTS: string
export const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string
export const DEVICE_WIFI_BITRATE: string
export const DEVICE_WIFI_CAPABILITIES: string
export const DEVICE_WIFI_HW_ADDRESS: string
export const DEVICE_WIFI_MODE: string
export const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string
export const DEVICE_WIMAX_ACTIVE_NSP: string
export const DEVICE_WIMAX_BSID: string
export const DEVICE_WIMAX_CENTER_FREQUENCY: string
export const DEVICE_WIMAX_CINR: string
export const DEVICE_WIMAX_HW_ADDRESS: string
export const DEVICE_WIMAX_NSPS: string
export const DEVICE_WIMAX_RSSI: string
export const DEVICE_WIMAX_TX_POWER: string
export const DHCP4_CONFIG_OPTIONS: string
export const DHCP6_CONFIG_OPTIONS: string
export const IP4_CONFIG_ADDRESSES: string
export const IP4_CONFIG_DOMAINS: string
export const IP4_CONFIG_GATEWAY: string
export const IP4_CONFIG_NAMESERVERS: string
export const IP4_CONFIG_ROUTES: string
export const IP4_CONFIG_SEARCHES: string
export const IP4_CONFIG_WINS_SERVERS: string
export const IP6_CONFIG_ADDRESSES: string
export const IP6_CONFIG_DOMAINS: string
export const IP6_CONFIG_GATEWAY: string
export const IP6_CONFIG_NAMESERVERS: string
export const IP6_CONFIG_ROUTES: string
export const IP6_CONFIG_SEARCHES: string
export const OBJECT_DBUS_CONNECTION: string
export const OBJECT_DBUS_PATH: string
export const REMOTE_CONNECTION_REMOVED: string
export const REMOTE_CONNECTION_UNSAVED: string
export const REMOTE_CONNECTION_UPDATED: string
export const REMOTE_SETTINGS_BUS: string
export const REMOTE_SETTINGS_CAN_MODIFY: string
export const REMOTE_SETTINGS_CONNECTIONS_READ: string
export const REMOTE_SETTINGS_HOSTNAME: string
export const REMOTE_SETTINGS_NEW_CONNECTION: string
export const REMOTE_SETTINGS_SERVICE_RUNNING: string
export const SECRET_AGENT_AUTO_REGISTER: string
export const SECRET_AGENT_CAPABILITIES: string
export const SECRET_AGENT_IDENTIFIER: string
export const SECRET_AGENT_REGISTERED: string
export const SECRET_AGENT_REGISTRATION_RESULT: string
export const VPN_CONNECTION_BANNER: string
export const VPN_CONNECTION_VPN_STATE: string
export const WIMAX_NSP_NAME: string
export const WIMAX_NSP_NETWORK_TYPE: string
export const WIMAX_NSP_SIGNAL_QUALITY: string
export function client_error_quark(): GLib.Quark
export function device_adsl_error_quark(): GLib.Quark
export function device_bond_error_quark(): GLib.Quark
export function device_bridge_error_quark(): GLib.Quark
export function device_bt_error_quark(): GLib.Quark
export function device_error_quark(): GLib.Quark
export function device_ethernet_error_quark(): GLib.Quark
export function device_generic_error_quark(): GLib.Quark
export function device_infiniband_error_quark(): GLib.Quark
export function device_modem_error_quark(): GLib.Quark
export function device_olpc_mesh_error_quark(): GLib.Quark
export function device_team_error_quark(): GLib.Quark
export function device_vlan_error_quark(): GLib.Quark
export function device_wifi_error_quark(): GLib.Quark
export function device_wimax_error_quark(): GLib.Quark
export function object_error_quark(): GLib.Quark
export function remote_connection_error_quark(): GLib.Quark
export function remote_settings_error_quark(): GLib.Quark
export function secret_agent_error_quark(): GLib.Quark
export interface ClientActivateFn {
    (client: Client, active_connection: ActiveConnection, error: GLib.Error): void
}
export interface ClientAddActivateFn {
    (client: Client, connection: ActiveConnection, new_connection_path: string, error: GLib.Error): void
}
export interface DeviceCallbackFn {
    (device: Device, error: GLib.Error): void
}
export interface DeviceDeactivateFn {
    (device: Device, error: GLib.Error): void
}
export interface DeviceWifiRequestScanFn {
    (device: DeviceWifi, error: GLib.Error): void
}
export interface RemoteConnectionGetSecretsFunc {
    (connection: RemoteConnection, secrets: GLib.HashTable, error: GLib.Error): void
}
export interface RemoteConnectionResultFunc {
    (connection: RemoteConnection, error: GLib.Error): void
}
export interface RemoteSettingsAddConnectionFunc {
    (settings: RemoteSettings, connection: RemoteConnection, error: GLib.Error): void
}
export interface RemoteSettingsLoadConnectionsFunc {
    (settings: RemoteSettings, failures: string, error: GLib.Error): void
}
export interface RemoteSettingsSaveHostnameFunc {
    (settings: RemoteSettings, error: GLib.Error): void
}
export interface SecretAgentDeleteSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void
}
export interface SecretAgentGetSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, secrets: GLib.HashTable, error: GLib.Error): void
}
export interface SecretAgentSaveSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void
}
export interface AccessPoint_ConstructProps extends Object_ConstructProps {
}
export class AccessPoint {
    /* Properties of NMClient.AccessPoint */
    readonly bssid: string
    readonly flags: number
    readonly frequency: number
    readonly hw_address: string
    readonly last_seen: number
    readonly max_bitrate: number
    readonly mode: number
    readonly rsn_flags: number
    readonly ssid: any
    readonly strength: number
    readonly wpa_flags: number
    /* Fields of NMClient.AccessPoint */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.AccessPoint */
    connection_valid(connection: NetworkManager.Connection): boolean
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_bssid(): string
    get_flags(): NetworkManager.TODO_80211ApFlags
    get_frequency(): number
    get_hw_address(): string
    get_last_seen(): number
    get_max_bitrate(): number
    get_mode(): NetworkManager.TODO_80211Mode
    get_rsn_flags(): NetworkManager.TODO_80211ApSecurityFlags
    get_ssid(): Uint8Array[]
    get_strength(): number
    get_wpa_flags(): NetworkManager.TODO_80211ApSecurityFlags
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: AccessPoint, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: AccessPoint, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bssid", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bssid", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frequency", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frequency", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-seen", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-seen", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rsn-flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rsn-flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssid", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssid", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strength", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strength", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wpa-flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wpa-flags", callback: (($obj: AccessPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccessPoint_ConstructProps)
    _init (config?: AccessPoint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): AccessPoint
    static $gtype: GObject.Type
}
export interface ActiveConnection_ConstructProps extends Object_ConstructProps {
}
export class ActiveConnection {
    /* Properties of NMClient.ActiveConnection */
    readonly connection: string
    readonly "default": boolean
    readonly default6: boolean
    readonly devices: any
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly id: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly master: string
    readonly specific_object: string
    readonly state: number
    readonly type: string
    readonly uuid: string
    readonly vpn: boolean
    /* Fields of NMClient.ActiveConnection */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.ActiveConnection */
    get_connection(): string
    get_connection_type(): string
    get_default(): boolean
    get_default6(): boolean
    get_devices(): Device[]
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_id(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_master(): string
    get_specific_object(): string
    get_state(): NetworkManager.ActiveConnectionState
    get_uuid(): string
    get_vpn(): boolean
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: ActiveConnection, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: ActiveConnection, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default6", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default6", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::devices", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::master", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::specific-object", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specific-object", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vpn", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn", callback: (($obj: ActiveConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActiveConnection_ConstructProps)
    _init (config?: ActiveConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): ActiveConnection
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends Object_ConstructProps {
    networking_enabled?: boolean
    wimax_enabled?: boolean
    wireless_enabled?: boolean
    wwan_enabled?: boolean
}
export class Client {
    /* Properties of NMClient.Client */
    readonly activating_connection: ActiveConnection
    readonly active_connections: object[]
    readonly all_devices: any
    readonly connectivity: number
    readonly devices: any
    readonly manager_running: boolean
    networking_enabled: boolean
    readonly primary_connection: ActiveConnection
    readonly startup: boolean
    readonly state: number
    readonly version: string
    wimax_enabled: boolean
    readonly wimax_hardware_enabled: boolean
    wireless_enabled: boolean
    readonly wireless_hardware_enabled: boolean
    wwan_enabled: boolean
    readonly wwan_hardware_enabled: boolean
    /* Fields of NMClient.Client */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.Client */
    activate_connection(connection?: NetworkManager.Connection | null, device?: Device | null, specific_object?: string | null, callback?: ClientActivateFn | null): void
    add_and_activate_connection(partial: NetworkManager.Connection | null, device: Device, specific_object?: string | null, callback?: ClientAddActivateFn | null): void
    check_connectivity(cancellable?: Gio.Cancellable | null): NetworkManager.ConnectivityState
    check_connectivity_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    check_connectivity_finish(result: Gio.AsyncResult): NetworkManager.ConnectivityState
    deactivate_connection(active: ActiveConnection): void
    get_activating_connection(): ActiveConnection
    get_active_connections(): ActiveConnection[]
    get_all_devices(): Device[]
    get_connectivity(): NetworkManager.ConnectivityState
    get_device_by_iface(iface: string): Device
    get_device_by_path(object_path: string): Device
    get_devices(): Device[]
    get_logging(level?: string | null, domains?: string | null): boolean
    get_manager_running(): boolean
    get_permission_result(permission: ClientPermission): ClientPermissionResult
    get_primary_connection(): ActiveConnection
    get_startup(): boolean
    get_state(): NetworkManager.State
    get_version(): string
    networking_get_enabled(): boolean
    networking_set_enabled(enabled: boolean): void
    set_logging(level?: string | null, domains?: string | null): boolean
    sleep(sleep_: boolean): void
    wimax_get_enabled(): boolean
    wimax_hardware_get_enabled(): boolean
    wimax_set_enabled(enabled: boolean): void
    wireless_get_enabled(): boolean
    wireless_hardware_get_enabled(): boolean
    wireless_set_enabled(enabled: boolean): void
    wwan_get_enabled(): boolean
    wwan_hardware_get_enabled(): boolean
    wwan_set_enabled(enabled: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Client */
    vfunc_device_added(device: Device): void
    vfunc_device_removed(device: Device): void
    vfunc_permission_changed(permission: ClientPermission, result: ClientPermissionResult): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Client */
    connect(sigName: "any-device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "any-device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "any-device-added", device: Device): void
    connect(sigName: "any-device-removed", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "any-device-removed", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "any-device-removed", device: Device): void
    connect(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    connect(sigName: "permission-changed", callback: (($obj: Client, permission: number, result: number) => void)): number
    connect_after(sigName: "permission-changed", callback: (($obj: Client, permission: number, result: number) => void)): number
    emit(sigName: "permission-changed", permission: number, result: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: Client, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: Client, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activating-connection", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activating-connection", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connections", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connections", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::all-devices", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-devices", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectivity", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectivity", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::devices", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manager-running", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager-running", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::networking-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::networking-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-connection", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-connection", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wimax-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wimax-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wimax-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wimax-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wireless-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wireless-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wwan-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwan-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wwan-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwan-hardware-enabled", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static new_finish(result: Gio.AsyncResult): Client
    static new_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface DHCP4Config_ConstructProps extends Object_ConstructProps {
}
export class DHCP4Config {
    /* Properties of NMClient.DHCP4Config */
    readonly options: GLib.HashTable
    /* Fields of NMClient.DHCP4Config */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DHCP4Config */
    get_one_option(option: string): string
    get_options(): GLib.HashTable
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DHCP4Config, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DHCP4Config, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DHCP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DHCP4Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::options", callback: (($obj: DHCP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: DHCP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DHCP4Config_ConstructProps)
    _init (config?: DHCP4Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, object_path: string): DHCP4Config
    static $gtype: GObject.Type
}
export interface DHCP6Config_ConstructProps extends Object_ConstructProps {
}
export class DHCP6Config {
    /* Properties of NMClient.DHCP6Config */
    readonly options: GLib.HashTable
    /* Fields of NMClient.DHCP6Config */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DHCP6Config */
    get_one_option(option: string): string
    get_options(): GLib.HashTable
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DHCP6Config, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DHCP6Config, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DHCP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DHCP6Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::options", callback: (($obj: DHCP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: DHCP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DHCP6Config_ConstructProps)
    _init (config?: DHCP6Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, object_path: string): DHCP6Config
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends Object_ConstructProps {
    autoconnect?: boolean
}
export class Device {
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.Device */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_hw_address(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: Device, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Device, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: Device, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: Device, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-connection", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): Device
    static disambiguate_names(devices: Device[]): string[]
    static $gtype: GObject.Type
}
export interface DeviceAdsl_ConstructProps extends Device_ConstructProps {
}
export class DeviceAdsl {
    /* Properties of NMClient.DeviceAdsl */
    readonly carrier: boolean
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceAdsl */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceAdsl */
    get_carrier(): boolean
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_hw_address(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceAdsl, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceAdsl, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceAdsl, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceAdsl, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceAdsl_ConstructProps)
    _init (config?: DeviceAdsl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceAdsl
    static $gtype: GObject.Type
}
export interface DeviceBond_ConstructProps extends Device_ConstructProps {
}
export class DeviceBond {
    /* Properties of NMClient.DeviceBond */
    readonly carrier: boolean
    readonly hw_address: string
    readonly slaves: any
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceBond */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceBond */
    get_carrier(): boolean
    get_hw_address(): string
    get_slaves(): Device[]
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceBond, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceBond, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceBond, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceBond, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slaves", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceBond_ConstructProps)
    _init (config?: DeviceBond_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceBond
    static $gtype: GObject.Type
}
export interface DeviceBridge_ConstructProps extends Device_ConstructProps {
}
export class DeviceBridge {
    /* Properties of NMClient.DeviceBridge */
    readonly carrier: boolean
    readonly hw_address: string
    readonly slaves: any
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceBridge */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceBridge */
    get_carrier(): boolean
    get_hw_address(): string
    get_slaves(): Device[]
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceBridge, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceBridge, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceBridge, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceBridge, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slaves", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceBridge_ConstructProps)
    _init (config?: DeviceBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceBridge
    static $gtype: GObject.Type
}
export interface DeviceBt_ConstructProps extends Device_ConstructProps {
}
export class DeviceBt {
    /* Properties of NMClient.DeviceBt */
    readonly bt_capabilities: number
    readonly hw_address: string
    readonly name: string
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceBt */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceBt */
    get_capabilities(): NetworkManager.BluetoothCapabilities
    get_hw_address(): string
    get_name(): string
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceBt, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceBt, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceBt, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceBt, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bt-capabilities", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bt-capabilities", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceBt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceBt_ConstructProps)
    _init (config?: DeviceBt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceBt
    static $gtype: GObject.Type
}
export interface DeviceEthernet_ConstructProps extends Device_ConstructProps {
}
export class DeviceEthernet {
    /* Properties of NMClient.DeviceEthernet */
    readonly carrier: boolean
    readonly hw_address: string
    readonly perm_hw_address: string
    readonly speed: number
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceEthernet */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceEthernet */
    get_carrier(): boolean
    get_hw_address(): string
    get_permanent_hw_address(): string
    get_speed(): number
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceEthernet, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceEthernet, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceEthernet, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceEthernet, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::perm-hw-address", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perm-hw-address", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::speed", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceEthernet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceEthernet_ConstructProps)
    _init (config?: DeviceEthernet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceEthernet
    static $gtype: GObject.Type
}
export interface DeviceGeneric_ConstructProps extends Device_ConstructProps {
}
export class DeviceGeneric {
    /* Properties of NMClient.DeviceGeneric */
    readonly hw_address: string
    readonly type_description: string
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceGeneric */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceGeneric */
    get_hw_address(): string
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceGeneric, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceGeneric, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceGeneric, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceGeneric, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-description", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-description", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceGeneric_ConstructProps)
    _init (config?: DeviceGeneric_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceGeneric
    static $gtype: GObject.Type
}
export interface DeviceInfiniband_ConstructProps extends Device_ConstructProps {
}
export class DeviceInfiniband {
    /* Properties of NMClient.DeviceInfiniband */
    readonly carrier: boolean
    readonly hw_address: string
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceInfiniband */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceInfiniband */
    get_carrier(): boolean
    get_hw_address(): string
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceInfiniband, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceInfiniband, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceInfiniband, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceInfiniband, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceInfiniband_ConstructProps)
    _init (config?: DeviceInfiniband_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceInfiniband
    static $gtype: GObject.Type
}
export interface DeviceModem_ConstructProps extends Device_ConstructProps {
}
export class DeviceModem {
    /* Properties of NMClient.DeviceModem */
    readonly current_capabilities: number
    readonly modem_capabilities: number
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceModem */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceModem */
    get_current_capabilities(): NetworkManager.DeviceModemCapabilities
    get_modem_capabilities(): NetworkManager.DeviceModemCapabilities
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_hw_address(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceModem, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceModem, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceModem, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceModem, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceModem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceModem_ConstructProps)
    _init (config?: DeviceModem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceOlpcMesh_ConstructProps extends Device_ConstructProps {
}
export class DeviceOlpcMesh {
    /* Properties of NMClient.DeviceOlpcMesh */
    readonly active_channel: number
    readonly companion: DeviceWifi
    readonly hw_address: string
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceOlpcMesh */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceOlpcMesh */
    get_active_channel(): number
    get_companion(): DeviceWifi
    get_hw_address(): string
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceOlpcMesh, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceOlpcMesh, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceOlpcMesh, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceOlpcMesh, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-channel", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-channel", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::companion", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::companion", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceOlpcMesh_ConstructProps)
    _init (config?: DeviceOlpcMesh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceOlpcMesh
    static $gtype: GObject.Type
}
export interface DeviceTeam_ConstructProps extends Device_ConstructProps {
}
export class DeviceTeam {
    /* Properties of NMClient.DeviceTeam */
    readonly carrier: boolean
    readonly hw_address: string
    readonly slaves: any
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceTeam */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceTeam */
    get_carrier(): boolean
    get_hw_address(): string
    get_slaves(): Device[]
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceTeam, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceTeam, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceTeam, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceTeam, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slaves", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceTeam_ConstructProps)
    _init (config?: DeviceTeam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceTeam
    static $gtype: GObject.Type
}
export interface DeviceVlan_ConstructProps extends Device_ConstructProps {
}
export class DeviceVlan {
    /* Properties of NMClient.DeviceVlan */
    readonly carrier: boolean
    readonly hw_address: string
    readonly parent: Device
    readonly vlan_id: number
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceVlan */
    get_carrier(): boolean
    get_hw_address(): string
    get_parent(): Device
    get_vlan_id(): number
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceVlan, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceVlan, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceVlan, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceVlan, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vlan-id", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vlan-id", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceVlan_ConstructProps)
    _init (config?: DeviceVlan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceVlan
    static $gtype: GObject.Type
}
export interface DeviceWifi_ConstructProps extends Device_ConstructProps {
}
export class DeviceWifi {
    /* Properties of NMClient.DeviceWifi */
    readonly access_points: any
    readonly active_access_point: AccessPoint
    readonly bitrate: number
    readonly hw_address: string
    readonly mode: number
    readonly perm_hw_address: string
    readonly wireless_capabilities: number
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceWifi */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceWifi */
    get_access_point_by_path(path: string): AccessPoint
    get_access_points(): AccessPoint[]
    get_active_access_point(): AccessPoint
    get_bitrate(): number
    get_capabilities(): NetworkManager.DeviceWifiCapabilities
    get_hw_address(): string
    get_mode(): NetworkManager.TODO_80211Mode
    get_permanent_hw_address(): string
    request_scan_simple(callback?: DeviceWifiRequestScanFn | null): void
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.DeviceWifi */
    vfunc_access_point_added(ap: AccessPoint): void
    vfunc_access_point_removed(ap: AccessPoint): void
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.DeviceWifi */
    connect(sigName: "access-point-added", callback: (($obj: DeviceWifi, ap: GObject.Object) => void)): number
    connect_after(sigName: "access-point-added", callback: (($obj: DeviceWifi, ap: GObject.Object) => void)): number
    emit(sigName: "access-point-added", ap: GObject.Object): void
    connect(sigName: "access-point-removed", callback: (($obj: DeviceWifi, ap: GObject.Object) => void)): number
    connect_after(sigName: "access-point-removed", callback: (($obj: DeviceWifi, ap: GObject.Object) => void)): number
    emit(sigName: "access-point-removed", ap: GObject.Object): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceWifi, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceWifi, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceWifi, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceWifi, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-points", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-points", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-access-point", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-access-point", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bitrate", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::perm-hw-address", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perm-hw-address", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wireless-capabilities", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-capabilities", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceWifi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceWifi_ConstructProps)
    _init (config?: DeviceWifi_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceWifi
    static $gtype: GObject.Type
}
export interface DeviceWimax_ConstructProps extends Device_ConstructProps {
}
export class DeviceWimax {
    /* Properties of NMClient.DeviceWimax */
    readonly active_nsp: WimaxNsp
    readonly bsid: string
    readonly center_frequency: number
    readonly cinr: number
    readonly hw_address: string
    readonly nsps: any
    readonly rssi: number
    readonly tx_power: number
    /* Properties of NMClient.Device */
    readonly active_connection: ActiveConnection
    autoconnect: boolean
    readonly available_connections: any
    readonly capabilities: number
    readonly device_type: number
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly driver: string
    readonly driver_version: string
    readonly firmware_missing: boolean
    readonly firmware_version: string
    readonly interface: string
    readonly ip_interface: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physical_port_id: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient.DeviceWimax */
    parent: Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.DeviceWimax */
    get_active_nsp(): WimaxNsp
    get_bsid(): string
    get_center_frequency(): number
    get_cinr(): number
    get_hw_address(): string
    get_nsp_by_path(path: string): WimaxNsp
    get_nsps(): WimaxNsp[]
    get_rssi(): number
    get_tx_power(): number
    /* Methods of NMClient.Device */
    connection_compatible(connection: NetworkManager.Connection): boolean
    connection_valid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_active_connection(): ActiveConnection
    get_autoconnect(): boolean
    get_available_connections(): RemoteConnection[]
    get_capabilities(): NetworkManager.DeviceCapabilities
    get_description(): string
    get_device_type(): NetworkManager.DeviceType
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_driver(): string
    get_driver_version(): string
    get_firmware_missing(): boolean
    get_firmware_version(): string
    get_iface(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_ip_iface(): string
    get_managed(): boolean
    get_mtu(): number
    get_physical_port_id(): string
    get_product(): string
    get_setting_type(): GObject.Type
    get_state(): NetworkManager.DeviceState
    get_state_reason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    get_type_description(): string
    get_udi(): string
    get_vendor(): string
    is_real(): boolean
    is_software(): boolean
    set_autoconnect(autoconnect: boolean): void
    set_managed(managed: boolean): void
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.DeviceWimax */
    vfunc_nsp_added(nsp: WimaxNsp): void
    vfunc_nsp_removed(nsp: WimaxNsp): void
    /* Virtual methods of NMClient.Device */
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean
    vfunc_get_hw_address(): string
    vfunc_get_setting_type(): GObject.Type
    vfunc_get_type_description(): string
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.DeviceWimax */
    connect(sigName: "nsp-added", callback: (($obj: DeviceWimax, nsp: GObject.Object) => void)): number
    connect_after(sigName: "nsp-added", callback: (($obj: DeviceWimax, nsp: GObject.Object) => void)): number
    emit(sigName: "nsp-added", nsp: GObject.Object): void
    connect(sigName: "nsp-removed", callback: (($obj: DeviceWimax, nsp: GObject.Object) => void)): number
    connect_after(sigName: "nsp-removed", callback: (($obj: DeviceWimax, nsp: GObject.Object) => void)): number
    emit(sigName: "nsp-removed", nsp: GObject.Object): void
    /* Signals of NMClient.Device */
    connect(sigName: "state-changed", callback: (($obj: DeviceWimax, new_state: number, old_state: number, reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: DeviceWimax, new_state: number, old_state: number, reason: number) => void)): number
    emit(sigName: "state-changed", new_state: number, old_state: number, reason: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: DeviceWimax, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: DeviceWimax, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-nsp", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-nsp", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bsid", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bsid", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::center-frequency", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-frequency", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cinr", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cinr", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hw-address", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nsps", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nsps", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rssi", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rssi", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tx-power", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tx-power", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-connection", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoconnect", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-connections", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::driver-version", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-missing", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::firmware-version", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-interface", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::managed", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::physical-port-id", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udi", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceWimax_ConstructProps)
    _init (config?: DeviceWimax_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceWimax
    static $gtype: GObject.Type
}
export interface IP4Config_ConstructProps extends Object_ConstructProps {
}
export class IP4Config {
    /* Properties of NMClient.IP4Config */
    readonly addresses: object
    readonly domains: any
    readonly gateway: string
    readonly nameservers: any
    readonly routes: object
    readonly searches: any
    readonly wins_servers: any
    /* Fields of NMClient.IP4Config */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.IP4Config */
    get_addresses(): NetworkManager.IP4Address[]
    get_domains(): string[]
    get_gateway(): string
    get_nameservers(): number[]
    get_routes(): NetworkManager.IP4Route[]
    get_searches(): string[]
    get_wins_servers(): number[]
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: IP4Config, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: IP4Config, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::addresses", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::addresses", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::domains", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domains", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gateway", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nameservers", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nameservers", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::routes", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::routes", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::searches", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searches", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wins-servers", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wins-servers", callback: (($obj: IP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IP4Config_ConstructProps)
    _init (config?: IP4Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, object_path: string): IP4Config
    static $gtype: GObject.Type
}
export interface IP6Config_ConstructProps extends Object_ConstructProps {
}
export class IP6Config {
    /* Properties of NMClient.IP6Config */
    readonly addresses: any
    readonly domains: any
    readonly gateway: string
    readonly nameservers: any
    readonly routes: any
    readonly searches: any
    /* Fields of NMClient.IP6Config */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.IP6Config */
    get_addresses(): NetworkManager.IP6Address[]
    get_domains(): string[]
    get_gateway(): string
    get_nameserver(idx: number): Uint8Array[]
    get_num_nameservers(): number
    get_routes(): NetworkManager.IP6Route[]
    get_searches(): string[]
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: IP6Config, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: IP6Config, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::addresses", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::addresses", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::domains", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domains", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gateway", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nameservers", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nameservers", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::routes", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::routes", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::searches", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searches", callback: (($obj: IP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IP6Config_ConstructProps)
    _init (config?: IP6Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, object_path: string): IP6Config
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    dbus_path?: string
}
export class Object {
    /* Fields of NMClient.Object */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: Object, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: Object, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
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
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface RemoteConnection_ConstructProps extends NetworkManager.Connection_ConstructProps {
    dbus_path?: string
}
export class RemoteConnection {
    /* Properties of NMClient.RemoteConnection */
    readonly unsaved: boolean
    /* Properties of NetworkManager.Connection */
    path: string
    /* Fields of NMClient.RemoteConnection */
    parent: NetworkManager.Connection
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.RemoteConnection */
    commit_changes(callback?: RemoteConnectionResultFunc | null): void
    commit_changes_unsaved(callback?: RemoteConnectionResultFunc | null): void
    delete(callback?: RemoteConnectionResultFunc | null): void
    get_secrets(setting_name: string, callback: RemoteConnectionGetSecretsFunc): void
    get_unsaved(): boolean
    save(callback?: RemoteConnectionResultFunc | null): void
    /* Methods of NetworkManager.Connection */
    add_setting(setting: NetworkManager.Setting): void
    clear_secrets(): void
    clear_secrets_with_flags(func: NetworkManager.SettingClearSecretsWithFlagsFn): void
    compare(b: NetworkManager.Connection, flags: NetworkManager.SettingCompareFlags): boolean
    diff(b: NetworkManager.Connection, flags: NetworkManager.SettingCompareFlags, out_settings: GLib.HashTable): boolean
    dump(): void
    duplicate(): NetworkManager.Connection
    for_each_setting_value(func: NetworkManager.SettingValueIterFn): void
    get_connection_type(): string
    get_id(): string
    get_interface_name(): string
    get_path(): string
    get_setting(setting_type: GObject.Type): NetworkManager.Setting
    get_setting_802_1x(): NetworkManager.Setting8021x
    get_setting_adsl(): NetworkManager.SettingAdsl
    get_setting_bluetooth(): NetworkManager.SettingBluetooth
    get_setting_bond(): NetworkManager.SettingBond
    get_setting_bridge(): NetworkManager.SettingBridge
    get_setting_bridge_port(): NetworkManager.SettingBridgePort
    get_setting_by_name(name: string): NetworkManager.Setting
    get_setting_cdma(): NetworkManager.SettingCdma
    get_setting_connection(): NetworkManager.SettingConnection
    get_setting_dcb(): NetworkManager.SettingDcb
    get_setting_generic(): NetworkManager.SettingGeneric
    get_setting_gsm(): NetworkManager.SettingGsm
    get_setting_infiniband(): NetworkManager.SettingInfiniband
    get_setting_ip4_config(): NetworkManager.SettingIP4Config
    get_setting_ip6_config(): NetworkManager.SettingIP6Config
    get_setting_olpc_mesh(): NetworkManager.SettingOlpcMesh
    get_setting_ppp(): NetworkManager.SettingPPP
    get_setting_pppoe(): NetworkManager.SettingPPPOE
    get_setting_serial(): NetworkManager.SettingSerial
    get_setting_team(): NetworkManager.SettingTeam
    get_setting_team_port(): NetworkManager.SettingTeamPort
    get_setting_vlan(): NetworkManager.SettingVlan
    get_setting_vpn(): NetworkManager.SettingVPN
    get_setting_wimax(): NetworkManager.SettingWimax
    get_setting_wired(): NetworkManager.SettingWired
    get_setting_wireless(): NetworkManager.SettingWireless
    get_setting_wireless_security(): NetworkManager.SettingWirelessSecurity
    get_uuid(): string
    get_virtual_device_description(): string
    get_virtual_iface_name(): string
    is_type(type: string): boolean
    need_secrets(): [ /* returnType */ string, /* hints */ string[] | null ]
    normalize(parameters?: GLib.HashTable | null): [ /* returnType */ boolean, /* modified */ boolean | null ]
    remove_setting(setting_type: GObject.Type): void
    replace_settings(new_settings: GLib.HashTable): boolean
    replace_settings_from_connection(new_connection: NetworkManager.Connection): boolean
    set_path(path: string): void
    to_hash(flags: NetworkManager.SettingHashFlags): GLib.HashTable
    update_secrets(setting_name: string, secrets: GLib.HashTable): boolean
    verify(): boolean
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.RemoteConnection */
    vfunc_removed(): void
    vfunc_updated(new_settings: GLib.HashTable): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NetworkManager.Connection */
    vfunc_secrets_updated(setting: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.RemoteConnection */
    connect(sigName: "removed", callback: (($obj: RemoteConnection) => void)): number
    connect_after(sigName: "removed", callback: (($obj: RemoteConnection) => void)): number
    emit(sigName: "removed"): void
    connect(sigName: "updated", callback: (($obj: RemoteConnection) => void)): number
    connect_after(sigName: "updated", callback: (($obj: RemoteConnection) => void)): number
    emit(sigName: "updated"): void
    connect(sigName: "visible", callback: (($obj: RemoteConnection, object: boolean) => void)): number
    connect_after(sigName: "visible", callback: (($obj: RemoteConnection, object: boolean) => void)): number
    emit(sigName: "visible", object: boolean): void
    /* Signals of NetworkManager.Connection */
    connect(sigName: "changed", callback: (($obj: RemoteConnection) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RemoteConnection) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "secrets-cleared", callback: (($obj: RemoteConnection) => void)): number
    connect_after(sigName: "secrets-cleared", callback: (($obj: RemoteConnection) => void)): number
    emit(sigName: "secrets-cleared"): void
    connect(sigName: "secrets-updated", callback: (($obj: RemoteConnection, setting_name: string) => void)): number
    connect_after(sigName: "secrets-updated", callback: (($obj: RemoteConnection, setting_name: string) => void)): number
    emit(sigName: "secrets-updated", setting_name: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unsaved", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsaved", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: RemoteConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteConnection_ConstructProps)
    _init (config?: RemoteConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bus: DBusGLib.Connection, path: string): RemoteConnection
    static new(): RemoteConnection
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface RemoteSettings_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteSettings {
    /* Properties of NMClient.RemoteSettings */
    readonly can_modify: boolean
    readonly hostname: string
    readonly service_running: boolean
    /* Fields of NMClient.RemoteSettings */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.RemoteSettings */
    add_connection(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean
    add_connection_unsaved(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean
    get_connection_by_id(id: string): RemoteConnection
    get_connection_by_path(path: string): RemoteConnection
    get_connection_by_uuid(uuid: string): RemoteConnection
    list_connections(): RemoteConnection[]
    load_connections(filenames: string): [ /* returnType */ boolean, /* failures */ string ]
    reload_connections(): boolean
    save_hostname(hostname: string, callback?: RemoteSettingsSaveHostnameFunc | null): boolean
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.RemoteSettings */
    vfunc_connections_read(): void
    vfunc_new_connection(connection: RemoteConnection): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.RemoteSettings */
    connect(sigName: "connections-read", callback: (($obj: RemoteSettings) => void)): number
    connect_after(sigName: "connections-read", callback: (($obj: RemoteSettings) => void)): number
    emit(sigName: "connections-read"): void
    connect(sigName: "new-connection", callback: (($obj: RemoteSettings, object: GObject.Object) => void)): number
    connect_after(sigName: "new-connection", callback: (($obj: RemoteSettings, object: GObject.Object) => void)): number
    emit(sigName: "new-connection", object: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-modify", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-modify", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hostname", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hostname", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-running", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-running", callback: (($obj: RemoteSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteSettings_ConstructProps)
    _init (config?: RemoteSettings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bus?: DBusGLib.Connection | null): RemoteSettings
    static new_finish(result: Gio.AsyncResult): RemoteSettings
    static new_async(bus?: DBusGLib.Connection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SecretAgent_ConstructProps extends GObject.Object_ConstructProps {
    auto_register?: boolean
    capabilities?: SecretAgentCapabilities
    identifier?: string
}
export class SecretAgent {
    /* Properties of NMClient.SecretAgent */
    auto_register: boolean
    capabilities: SecretAgentCapabilities
    readonly registered: boolean
    /* Fields of NMClient.SecretAgent */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.SecretAgent */
    delete_secrets(connection: NetworkManager.Connection, callback: SecretAgentDeleteSecretsFunc): void
    get_registered(): boolean
    get_secrets(connection: NetworkManager.Connection, setting_name: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc): void
    register(): boolean
    save_secrets(connection: NetworkManager.Connection, callback: SecretAgentSaveSecretsFunc): void
    unregister(): boolean
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
    /* Virtual methods of NMClient.SecretAgent */
    vfunc_cancel_get_secrets(connection_path: string, setting_name: string): void
    vfunc_delete_secrets(connection: NetworkManager.Connection, connection_path: string, callback: SecretAgentDeleteSecretsFunc): void
    vfunc_get_secrets(connection: NetworkManager.Connection, connection_path: string, setting_name: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc): void
    vfunc_registration_result(error: GLib.Error): void
    vfunc_save_secrets(connection: NetworkManager.Connection, connection_path: string, callback: SecretAgentSaveSecretsFunc): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.SecretAgent */
    connect(sigName: "registration-result", callback: (($obj: SecretAgent, error?: object | null) => void)): number
    connect_after(sigName: "registration-result", callback: (($obj: SecretAgent, error?: object | null) => void)): number
    emit(sigName: "registration-result", error?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-register", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-register", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registered", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registered", callback: (($obj: SecretAgent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SecretAgent_ConstructProps)
    _init (config?: SecretAgent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VPNConnection_ConstructProps extends ActiveConnection_ConstructProps {
}
export class VPNConnection {
    /* Properties of NMClient.VPNConnection */
    readonly banner: string
    readonly vpn_state: number
    /* Properties of NMClient.ActiveConnection */
    readonly connection: string
    readonly "default": boolean
    readonly default6: boolean
    readonly devices: any
    readonly dhcp4_config: DHCP4Config
    readonly dhcp6_config: DHCP6Config
    readonly id: string
    readonly ip4_config: IP4Config
    readonly ip6_config: IP6Config
    readonly master: string
    readonly specific_object: string
    readonly state: number
    readonly type: string
    readonly uuid: string
    readonly vpn: boolean
    /* Fields of NMClient.VPNConnection */
    parent: ActiveConnection
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.VPNConnection */
    get_banner(): string
    get_vpn_state(): NetworkManager.VPNConnectionState
    /* Methods of NMClient.ActiveConnection */
    get_connection(): string
    get_connection_type(): string
    get_default(): boolean
    get_default6(): boolean
    get_devices(): Device[]
    get_dhcp4_config(): DHCP4Config
    get_dhcp6_config(): DHCP6Config
    get_id(): string
    get_ip4_config(): IP4Config
    get_ip6_config(): IP6Config
    get_master(): string
    get_specific_object(): string
    get_state(): NetworkManager.ActiveConnectionState
    get_uuid(): string
    get_vpn(): boolean
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.VPNConnection */
    vfunc_vpn_state_changed(state: NetworkManager.VPNConnectionState, reason: NetworkManager.VPNConnectionStateReason): void
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.VPNConnection */
    connect(sigName: "vpn-state-changed", callback: (($obj: VPNConnection, object: number, p0: number) => void)): number
    connect_after(sigName: "vpn-state-changed", callback: (($obj: VPNConnection, object: number, p0: number) => void)): number
    emit(sigName: "vpn-state-changed", object: number, p0: number): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: VPNConnection, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: VPNConnection, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::banner", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::banner", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vpn-state", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn-state", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default6", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default6", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::devices", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp4-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp6-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::master", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::specific-object", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specific-object", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vpn", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn", callback: (($obj: VPNConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VPNConnection_ConstructProps)
    _init (config?: VPNConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): VPNConnection
    static $gtype: GObject.Type
}
export interface WimaxNsp_ConstructProps extends Object_ConstructProps {
}
export class WimaxNsp {
    /* Properties of NMClient.WimaxNsp */
    readonly name: string
    readonly network_type: number
    readonly signal_quality: number
    /* Fields of NMClient.WimaxNsp */
    parent: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NMClient.WimaxNsp */
    connection_valid(connection: NetworkManager.Connection): boolean
    filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    get_name(): string
    get_network_type(): WimaxNspNetworkType
    get_signal_quality(): number
    /* Methods of NMClient.Object */
    get_connection(): DBusGLib.Connection
    get_path(): string
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NMClient.Object */
    vfunc_object_creation_failed(error: GLib.Error, failed_path: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of NMClient.Object */
    connect(sigName: "object-creation-failed", callback: (($obj: WimaxNsp, error?: object | null, failed_path?: object | null) => void)): number
    connect_after(sigName: "object-creation-failed", callback: (($obj: WimaxNsp, error?: object | null, failed_path?: object | null) => void)): number
    emit(sigName: "object-creation-failed", error?: object | null, failed_path?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-type", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signal-quality", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-quality", callback: (($obj: WimaxNsp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WimaxNsp_ConstructProps)
    _init (config?: WimaxNsp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): WimaxNsp
    static $gtype: GObject.Type
}
export abstract class AccessPointClass {
    /* Fields of NMClient.AccessPointClass */
    parent: ObjectClass
    static name: string
}
export abstract class ActiveConnectionClass {
    /* Fields of NMClient.ActiveConnectionClass */
    parent: ObjectClass
    static name: string
}
export abstract class ClientClass {
    /* Fields of NMClient.ClientClass */
    parent: ObjectClass
    device_added: (client: Client, device: Device) => void
    device_removed: (client: Client, device: Device) => void
    permission_changed: (client: Client, permission: ClientPermission, result: ClientPermissionResult) => void
    static name: string
}
export abstract class DHCP4ConfigClass {
    /* Fields of NMClient.DHCP4ConfigClass */
    parent: ObjectClass
    static name: string
}
export abstract class DHCP6ConfigClass {
    /* Fields of NMClient.DHCP6ConfigClass */
    parent: ObjectClass
    static name: string
}
export abstract class DeviceAdslClass {
    /* Fields of NMClient.DeviceAdslClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceBondClass {
    /* Fields of NMClient.DeviceBondClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceBridgeClass {
    /* Fields of NMClient.DeviceBridgeClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceBtClass {
    /* Fields of NMClient.DeviceBtClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceClass {
    /* Fields of NMClient.DeviceClass */
    parent: ObjectClass
    state_changed: (device: Device, new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason) => void
    connection_compatible: (device: Device, connection: NetworkManager.Connection) => boolean
    get_type_description: (device: Device) => string
    get_hw_address: (device: Device) => string
    get_setting_type: (device: Device) => GObject.Type
    static name: string
}
export abstract class DeviceEthernetClass {
    /* Fields of NMClient.DeviceEthernetClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceGenericClass {
    /* Fields of NMClient.DeviceGenericClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceInfinibandClass {
    /* Fields of NMClient.DeviceInfinibandClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceModemClass {
    /* Fields of NMClient.DeviceModemClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceOlpcMeshClass {
    /* Fields of NMClient.DeviceOlpcMeshClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceTeamClass {
    /* Fields of NMClient.DeviceTeamClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceVlanClass {
    /* Fields of NMClient.DeviceVlanClass */
    parent: DeviceClass
    static name: string
}
export abstract class DeviceWifiClass {
    /* Fields of NMClient.DeviceWifiClass */
    parent: DeviceClass
    access_point_added: (device: DeviceWifi, ap: AccessPoint) => void
    access_point_removed: (device: DeviceWifi, ap: AccessPoint) => void
    static name: string
}
export abstract class DeviceWimaxClass {
    /* Fields of NMClient.DeviceWimaxClass */
    parent: DeviceClass
    nsp_added: (self: DeviceWimax, nsp: WimaxNsp) => void
    nsp_removed: (self: DeviceWimax, nsp: WimaxNsp) => void
    static name: string
}
export abstract class IP4ConfigClass {
    /* Fields of NMClient.IP4ConfigClass */
    parent: ObjectClass
    static name: string
}
export abstract class IP6ConfigClass {
    /* Fields of NMClient.IP6ConfigClass */
    parent: ObjectClass
    static name: string
}
export abstract class ObjectClass {
    /* Fields of NMClient.ObjectClass */
    parent: GObject.ObjectClass
    object_creation_failed: (master_object: Object, error: GLib.Error, failed_path: string) => void
    static name: string
}
export abstract class RemoteConnectionClass {
    /* Fields of NMClient.RemoteConnectionClass */
    parent_class: NetworkManager.ConnectionClass
    updated: (connection: RemoteConnection, new_settings: GLib.HashTable) => void
    removed: (connection: RemoteConnection) => void
    static name: string
}
export abstract class RemoteSettingsClass {
    /* Fields of NMClient.RemoteSettingsClass */
    parent: GObject.ObjectClass
    new_connection: (settings: RemoteSettings, connection: RemoteConnection) => void
    connections_read: (settings: RemoteSettings) => void
    static name: string
}
export abstract class SecretAgentClass {
    /* Fields of NMClient.SecretAgentClass */
    parent: GObject.ObjectClass
    get_secrets: (self: SecretAgent, connection: NetworkManager.Connection, connection_path: string, setting_name: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc) => void
    cancel_get_secrets: (self: SecretAgent, connection_path: string, setting_name: string) => void
    save_secrets: (self: SecretAgent, connection: NetworkManager.Connection, connection_path: string, callback: SecretAgentSaveSecretsFunc) => void
    delete_secrets: (self: SecretAgent, connection: NetworkManager.Connection, connection_path: string, callback: SecretAgentDeleteSecretsFunc) => void
    registration_result: (agent: SecretAgent, error: GLib.Error) => void
    static name: string
}
export abstract class VPNConnectionClass {
    /* Fields of NMClient.VPNConnectionClass */
    parent: ActiveConnectionClass
    vpn_state_changed: (connection: VPNConnection, state: NetworkManager.VPNConnectionState, reason: NetworkManager.VPNConnectionStateReason) => void
    static name: string
}
export abstract class WimaxNspClass {
    /* Fields of NMClient.WimaxNspClass */
    parent: ObjectClass
    static name: string
}
export type RemoteConnectionCommitFunc = RemoteConnectionResultFunc
export type RemoteConnectionDeleteFunc = RemoteConnectionResultFunc