/**
 * NetworkManager-1.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as DBusGLib from './DBusGLib-1.0';

export enum TODO_80211Mode {
    UNKNOWN,
    ADHOC,
    INFRA,
    AP,
}
export enum ActiveConnectionState {
    UNKNOWN,
    ACTIVATING,
    ACTIVATED,
    DEACTIVATING,
    DEACTIVATED,
}
export enum ConnectionError {
    UNKNOWNERROR,
    CONNECTIONSETTINGNOTFOUND,
    CONNECTIONTYPEINVALID,
    SETTINGNOTFOUND,
    INVALIDSETTING,
}
export enum ConnectivityState {
    UNKNOWN,
    NONE,
    PORTAL,
    LIMITED,
    FULL,
}
export enum DeviceState {
    UNKNOWN,
    UNMANAGED,
    UNAVAILABLE,
    DISCONNECTED,
    PREPARE,
    CONFIG,
    NEED_AUTH,
    IP_CONFIG,
    IP_CHECK,
    SECONDARIES,
    ACTIVATED,
    DEACTIVATING,
    FAILED,
}
export enum DeviceStateReason {
    NONE,
    UNKNOWN,
    NOW_MANAGED,
    NOW_UNMANAGED,
    CONFIG_FAILED,
    IP_CONFIG_UNAVAILABLE,
    IP_CONFIG_EXPIRED,
    NO_SECRETS,
    SUPPLICANT_DISCONNECT,
    SUPPLICANT_CONFIG_FAILED,
    SUPPLICANT_FAILED,
    SUPPLICANT_TIMEOUT,
    PPP_START_FAILED,
    PPP_DISCONNECT,
    PPP_FAILED,
    DHCP_START_FAILED,
    DHCP_ERROR,
    DHCP_FAILED,
    SHARED_START_FAILED,
    SHARED_FAILED,
    AUTOIP_START_FAILED,
    AUTOIP_ERROR,
    AUTOIP_FAILED,
    MODEM_BUSY,
    MODEM_NO_DIAL_TONE,
    MODEM_NO_CARRIER,
    MODEM_DIAL_TIMEOUT,
    MODEM_DIAL_FAILED,
    MODEM_INIT_FAILED,
    GSM_APN_FAILED,
    GSM_REGISTRATION_NOT_SEARCHING,
    GSM_REGISTRATION_DENIED,
    GSM_REGISTRATION_TIMEOUT,
    GSM_REGISTRATION_FAILED,
    GSM_PIN_CHECK_FAILED,
    FIRMWARE_MISSING,
    REMOVED,
    SLEEPING,
    CONNECTION_REMOVED,
    USER_REQUESTED,
    CARRIER,
    CONNECTION_ASSUMED,
    SUPPLICANT_AVAILABLE,
    MODEM_NOT_FOUND,
    BT_FAILED,
    GSM_SIM_NOT_INSERTED,
    GSM_SIM_PIN_REQUIRED,
    GSM_SIM_PUK_REQUIRED,
    GSM_SIM_WRONG,
    INFINIBAND_MODE,
    DEPENDENCY_FAILED,
    BR2684_FAILED,
    MODEM_MANAGER_UNAVAILABLE,
    SSID_NOT_FOUND,
    SECONDARY_CONNECTION_FAILED,
    DCB_FCOE_FAILED,
    TEAMD_CONTROL_FAILED,
    MODEM_FAILED,
    MODEM_AVAILABLE,
    SIM_PIN_INCORRECT,
    NEW_ACTIVATION,
    PARENT_CHANGED,
    PARENT_MANAGED_CHANGED,
    LAST,
}
export enum DeviceType {
    UNKNOWN,
    ETHERNET,
    WIFI,
    UNUSED1,
    UNUSED2,
    BT,
    OLPC_MESH,
    WIMAX,
    MODEM,
    INFINIBAND,
    BOND,
    VLAN,
    ADSL,
    BRIDGE,
    GENERIC,
    TEAM,
    TUN,
    IP_TUNNEL,
    MACVLAN,
    VXLAN,
    VETH,
}
export enum Setting8021xCKFormat {
    UNKNOWN,
    X509,
    RAW_KEY,
    PKCS12,
}
export enum Setting8021xCKScheme {
    UNKNOWN,
    BLOB,
    PATH,
}
export enum Setting8021xError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingAdslError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingBluetoothError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    TYPESETTINGNOTFOUND,
}
export enum SettingBondError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    INVALIDOPTION,
    MISSINGOPTION,
}
export enum SettingBridgeError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingBridgePortError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingCdmaError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSERIALSETTING,
}
export enum SettingCompareFlags {
    EXACT,
    FUZZY,
    IGNORE_ID,
    IGNORE_SECRETS,
    IGNORE_AGENT_OWNED_SECRETS,
    IGNORE_NOT_SAVED_SECRETS,
    DIFF_RESULT_WITH_DEFAULT,
    DIFF_RESULT_NO_DEFAULT,
}
export enum SettingConnectionError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    TYPESETTINGNOTFOUND,
    IPCONFIGNOTALLOWED,
}
export enum SettingDcbError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingDcbFlags {
    NONE,
    ENABLE,
    ADVERTISE,
    WILLING,
}
export enum SettingDiffResult {
    UNKNOWN,
    IN_A,
    IN_B,
    IN_A_DEFAULT,
    IN_B_DEFAULT,
}
export enum SettingError {
    UNKNOWNERROR,
    PROPERTYNOTFOUND,
    PROPERTYNOTSECRET,
    PROPERTYTYPEMISMATCH,
}
export enum SettingGenericError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingGsmError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSERIALSETTING,
}
export enum SettingGsmNetworkBand {
    UNKNOWN,
    ANY,
    EGSM,
    DCS,
    PCS,
    G850,
    U2100,
    U1800,
    U17IV,
    U800,
    U850,
    U900,
    U17IX,
    U1900,
    U2600,
}
export enum SettingGsmNetworkType {
    ANY,
    UMTS_HSPA,
    GPRS_EDGE,
    PREFER_UMTS_HSPA,
    PREFER_GPRS_EDGE,
    PREFER_4G,
    /* 4G (invalid, starts with a number) */
}
export enum SettingHashFlags {
    ALL,
    NO_SECRETS,
    ONLY_SECRETS,
}
export enum SettingIP4ConfigError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    NOTALLOWEDFORMETHOD,
}
export enum SettingIP6ConfigError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    NOTALLOWEDFORMETHOD,
}
export enum SettingIP6ConfigPrivacy {
    UNKNOWN,
    DISABLED,
    PREFER_PUBLIC_ADDR,
    PREFER_TEMP_ADDR,
}
export enum SettingInfinibandError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingOlpcMeshError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingPPPError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    REQUIREMPPENOTALLOWED,
}
export enum SettingPPPOEError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGPPPSETTING,
}
export enum SettingSecretFlags {
    NONE,
    AGENT_OWNED,
    NOT_SAVED,
    NOT_REQUIRED,
}
export enum SettingSerialError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGPPPSETTING,
}
export enum SettingTeamError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingTeamPortError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingVlanError {
    UNKNOWN,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    INVALIDPARENT,
}
export enum SettingVpnError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingWimaxError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingWiredError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
export enum SettingWirelessError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSECURITYSETTING,
    CHANNELREQUIRESBAND,
}
export enum SettingWirelessSecurityError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSING8021XSETTING,
    LEAPREQUIRES8021X,
    LEAPREQUIRESUSERNAME,
    SHAREDKEYREQUIRESWEP,
}
export enum State {
    UNKNOWN,
    ASLEEP,
    DISCONNECTED,
    DISCONNECTING,
    CONNECTING,
    CONNECTED_LOCAL,
    CONNECTED_SITE,
    CONNECTED_GLOBAL,
}
export enum UtilsSecurityType {
    INVALID,
    NONE,
    STATIC_WEP,
    LEAP,
    DYNAMIC_WEP,
    WPA_PSK,
    WPA_ENTERPRISE,
    WPA2_PSK,
    WPA2_ENTERPRISE,
}
export enum VPNConnectionState {
    UNKNOWN,
    PREPARE,
    NEED_AUTH,
    CONNECT,
    IP_CONFIG_GET,
    ACTIVATED,
    FAILED,
    DISCONNECTED,
}
export enum VPNConnectionStateReason {
    UNKNOWN,
    NONE,
    USER_DISCONNECTED,
    DEVICE_DISCONNECTED,
    SERVICE_STOPPED,
    IP_CONFIG_INVALID,
    CONNECT_TIMEOUT,
    SERVICE_START_TIMEOUT,
    SERVICE_START_FAILED,
    NO_SECRETS,
    LOGIN_FAILED,
    CONNECTION_REMOVED,
}
export enum VPNPluginFailure {
    LOGIN_FAILED,
    CONNECT_FAILED,
    BAD_IP_CONFIG,
}
export enum VPNServiceState {
    UNKNOWN,
    INIT,
    SHUTDOWN,
    STARTING,
    STARTED,
    STOPPING,
    STOPPED,
}
export enum VlanFlags {
    REORDER_HEADERS,
    GVRP,
    LOOSE_BINDING,
    MVRP,
}
export enum VlanPriorityMap {
    INGRESS_MAP,
    EGRESS_MAP,
}
export enum WepKeyType {
    UNKNOWN,
    KEY,
    PASSPHRASE,
    LAST,
}
export enum TODO_80211ApFlags {
    NONE,
    PRIVACY,
}
export enum TODO_80211ApSecurityFlags {
    NONE,
    PAIR_WEP40,
    PAIR_WEP104,
    PAIR_TKIP,
    PAIR_CCMP,
    GROUP_WEP40,
    GROUP_WEP104,
    GROUP_TKIP,
    GROUP_CCMP,
    KEY_MGMT_PSK,
    KEY_MGMT_802_1X,
}
export enum BluetoothCapabilities {
    NONE,
    DUN,
    NAP,
}
export enum DeviceCapabilities {
    NONE,
    NM_SUPPORTED,
    CARRIER_DETECT,
    IS_SOFTWARE,
}
export enum DeviceModemCapabilities {
    NONE,
    POTS,
    CDMA_EVDO,
    GSM_UMTS,
    LTE,
}
export enum DeviceWifiCapabilities {
    NONE,
    CIPHER_WEP40,
    CIPHER_WEP104,
    CIPHER_TKIP,
    CIPHER_CCMP,
    WPA,
    RSN,
    AP,
    ADHOC,
    FREQ_VALID,
    FREQ_2GHZ,
    FREQ_5GHZ,
}
export const CONNECTION_CHANGED: string
export const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string
export const CONNECTION_PATH: string
export const CONNECTION_SECRETS_CLEARED: string
export const CONNECTION_SECRETS_UPDATED: string
export const DBUS_IFACE_SETTINGS: string
export const DBUS_IFACE_SETTINGS_CONNECTION: string
export const DBUS_IFACE_SETTINGS_CONNECTION_SECRETS: string
export const DBUS_INTERFACE: string
export const DBUS_INTERFACE_VPN: string
export const DBUS_INTERFACE_VPN_CONNECTION: string
export const DBUS_INVALID_VPN_CONNECTION: string
export const DBUS_NO_ACTIVE_VPN_CONNECTION: string
export const DBUS_NO_VPN_CONNECTIONS: string
export const DBUS_PATH: string
export const DBUS_PATH_AGENT_MANAGER: string
export const DBUS_PATH_SECRET_AGENT: string
export const DBUS_PATH_SETTINGS: string
export const DBUS_PATH_SETTINGS_CONNECTION: string
export const DBUS_PATH_VPN: string
export const DBUS_PATH_VPN_CONNECTION: string
export const DBUS_SERVICE: string
export const DBUS_VPN_ALREADY_STARTED: string
export const DBUS_VPN_ALREADY_STOPPED: string
export const DBUS_VPN_BAD_ARGUMENTS: string
export const DBUS_VPN_ERROR_PREFIX: string
export const DBUS_VPN_INTERACTIVE_NOT_SUPPORTED: string
export const DBUS_VPN_SIGNAL_CONNECT_FAILED: string
export const DBUS_VPN_SIGNAL_IP4_CONFIG: string
export const DBUS_VPN_SIGNAL_IP_CONFIG_BAD: string
export const DBUS_VPN_SIGNAL_LAUNCH_FAILED: string
export const DBUS_VPN_SIGNAL_LOGIN_BANNER: string
export const DBUS_VPN_SIGNAL_LOGIN_FAILED: string
export const DBUS_VPN_SIGNAL_STATE_CHANGE: string
export const DBUS_VPN_SIGNAL_VPN_CONFIG_BAD: string
export const DBUS_VPN_STARTING_IN_PROGRESS: string
export const DBUS_VPN_STOPPING_IN_PROGRESS: string
export const DBUS_VPN_WRONG_STATE: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const SETTING_802_1X_ALTSUBJECT_MATCHES: string
export const SETTING_802_1X_ANONYMOUS_IDENTITY: string
export const SETTING_802_1X_CA_CERT: string
export const SETTING_802_1X_CA_PATH: string
export const SETTING_802_1X_CLIENT_CERT: string
export const SETTING_802_1X_EAP: string
export const SETTING_802_1X_IDENTITY: string
export const SETTING_802_1X_PAC_FILE: string
export const SETTING_802_1X_PASSWORD: string
export const SETTING_802_1X_PASSWORD_FLAGS: string
export const SETTING_802_1X_PASSWORD_RAW: string
export const SETTING_802_1X_PASSWORD_RAW_FLAGS: string
export const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string
export const SETTING_802_1X_PHASE1_PEAPLABEL: string
export const SETTING_802_1X_PHASE1_PEAPVER: string
export const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string
export const SETTING_802_1X_PHASE2_AUTH: string
export const SETTING_802_1X_PHASE2_AUTHEAP: string
export const SETTING_802_1X_PHASE2_CA_CERT: string
export const SETTING_802_1X_PHASE2_CA_PATH: string
export const SETTING_802_1X_PHASE2_CLIENT_CERT: string
export const SETTING_802_1X_PHASE2_PRIVATE_KEY: string
export const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD: string
export const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD_FLAGS: string
export const SETTING_802_1X_PHASE2_SUBJECT_MATCH: string
export const SETTING_802_1X_PIN: string
export const SETTING_802_1X_PIN_FLAGS: string
export const SETTING_802_1X_PRIVATE_KEY: string
export const SETTING_802_1X_PRIVATE_KEY_PASSWORD: string
export const SETTING_802_1X_PRIVATE_KEY_PASSWORD_FLAGS: string
export const SETTING_802_1X_SETTING_NAME: string
export const SETTING_802_1X_SUBJECT_MATCH: string
export const SETTING_802_1X_SYSTEM_CA_CERTS: string
export const SETTING_ADSL_ENCAPSULATION: string
export const SETTING_ADSL_ENCAPSULATION_LLC: string
export const SETTING_ADSL_ENCAPSULATION_VCMUX: string
export const SETTING_ADSL_PASSWORD: string
export const SETTING_ADSL_PASSWORD_FLAGS: string
export const SETTING_ADSL_PROTOCOL: string
export const SETTING_ADSL_PROTOCOL_IPOATM: string
export const SETTING_ADSL_PROTOCOL_PPPOA: string
export const SETTING_ADSL_PROTOCOL_PPPOE: string
export const SETTING_ADSL_SETTING_NAME: string
export const SETTING_ADSL_USERNAME: string
export const SETTING_ADSL_VCI: string
export const SETTING_ADSL_VPI: string
export const SETTING_BLUETOOTH_BDADDR: string
export const SETTING_BLUETOOTH_SETTING_NAME: string
export const SETTING_BLUETOOTH_TYPE: string
export const SETTING_BLUETOOTH_TYPE_DUN: string
export const SETTING_BLUETOOTH_TYPE_PANU: string
export const SETTING_BOND_INTERFACE_NAME: string
export const SETTING_BOND_OPTIONS: string
export const SETTING_BOND_OPTION_AD_SELECT: string
export const SETTING_BOND_OPTION_ARP_INTERVAL: string
export const SETTING_BOND_OPTION_ARP_IP_TARGET: string
export const SETTING_BOND_OPTION_ARP_VALIDATE: string
export const SETTING_BOND_OPTION_DOWNDELAY: string
export const SETTING_BOND_OPTION_FAIL_OVER_MAC: string
export const SETTING_BOND_OPTION_LACP_RATE: string
export const SETTING_BOND_OPTION_MIIMON: string
export const SETTING_BOND_OPTION_MODE: string
export const SETTING_BOND_OPTION_PRIMARY: string
export const SETTING_BOND_OPTION_PRIMARY_RESELECT: string
export const SETTING_BOND_OPTION_RESEND_IGMP: string
export const SETTING_BOND_OPTION_UPDELAY: string
export const SETTING_BOND_OPTION_USE_CARRIER: string
export const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string
export const SETTING_BOND_SETTING_NAME: string
export const SETTING_BRIDGE_AGEING_TIME: string
export const SETTING_BRIDGE_FORWARD_DELAY: string
export const SETTING_BRIDGE_HELLO_TIME: string
export const SETTING_BRIDGE_INTERFACE_NAME: string
export const SETTING_BRIDGE_MAC_ADDRESS: string
export const SETTING_BRIDGE_MAX_AGE: string
export const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string
export const SETTING_BRIDGE_PORT_PATH_COST: string
export const SETTING_BRIDGE_PORT_PRIORITY: string
export const SETTING_BRIDGE_PORT_SETTING_NAME: string
export const SETTING_BRIDGE_PRIORITY: string
export const SETTING_BRIDGE_SETTING_NAME: string
export const SETTING_BRIDGE_STP: string
export const SETTING_CDMA_NUMBER: string
export const SETTING_CDMA_PASSWORD: string
export const SETTING_CDMA_PASSWORD_FLAGS: string
export const SETTING_CDMA_SETTING_NAME: string
export const SETTING_CDMA_USERNAME: string
export const SETTING_CONNECTION_AUTOCONNECT: string
export const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string
export const SETTING_CONNECTION_ID: string
export const SETTING_CONNECTION_INTERFACE_NAME: string
export const SETTING_CONNECTION_MASTER: string
export const SETTING_CONNECTION_PERMISSIONS: string
export const SETTING_CONNECTION_READ_ONLY: string
export const SETTING_CONNECTION_SECONDARIES: string
export const SETTING_CONNECTION_SETTING_NAME: string
export const SETTING_CONNECTION_SLAVE_TYPE: string
export const SETTING_CONNECTION_TIMESTAMP: string
export const SETTING_CONNECTION_TYPE: string
export const SETTING_CONNECTION_UUID: string
export const SETTING_CONNECTION_ZONE: string
export const SETTING_DCB_APP_FCOE_FLAGS: string
export const SETTING_DCB_APP_FCOE_MODE: string
export const SETTING_DCB_APP_FCOE_PRIORITY: string
export const SETTING_DCB_APP_FIP_FLAGS: string
export const SETTING_DCB_APP_FIP_PRIORITY: string
export const SETTING_DCB_APP_ISCSI_FLAGS: string
export const SETTING_DCB_APP_ISCSI_PRIORITY: string
export const SETTING_DCB_FCOE_MODE_FABRIC: string
export const SETTING_DCB_FCOE_MODE_VN2VN: string
export const SETTING_DCB_PRIORITY_BANDWIDTH: string
export const SETTING_DCB_PRIORITY_FLOW_CONTROL: string
export const SETTING_DCB_PRIORITY_FLOW_CONTROL_FLAGS: string
export const SETTING_DCB_PRIORITY_GROUP_BANDWIDTH: string
export const SETTING_DCB_PRIORITY_GROUP_FLAGS: string
export const SETTING_DCB_PRIORITY_GROUP_ID: string
export const SETTING_DCB_PRIORITY_STRICT_BANDWIDTH: string
export const SETTING_DCB_PRIORITY_TRAFFIC_CLASS: string
export const SETTING_DCB_SETTING_NAME: string
export const SETTING_GENERIC_SETTING_NAME: string
export const SETTING_GSM_ALLOWED_BANDS: string
export const SETTING_GSM_APN: string
export const SETTING_GSM_BANDS_MAX: number
export const SETTING_GSM_HOME_ONLY: string
export const SETTING_GSM_NETWORK_ID: string
export const SETTING_GSM_NETWORK_TYPE: string
export const SETTING_GSM_NUMBER: string
export const SETTING_GSM_PASSWORD: string
export const SETTING_GSM_PASSWORD_FLAGS: string
export const SETTING_GSM_PIN: string
export const SETTING_GSM_PIN_FLAGS: string
export const SETTING_GSM_SETTING_NAME: string
export const SETTING_GSM_USERNAME: string
export const SETTING_INFINIBAND_MAC_ADDRESS: string
export const SETTING_INFINIBAND_MTU: string
export const SETTING_INFINIBAND_PARENT: string
export const SETTING_INFINIBAND_P_KEY: string
export const SETTING_INFINIBAND_SETTING_NAME: string
export const SETTING_INFINIBAND_TRANSPORT_MODE: string
export const SETTING_IP4_CONFIG_ADDRESSES: string
export const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string
export const SETTING_IP4_CONFIG_DHCP_HOSTNAME: string
export const SETTING_IP4_CONFIG_DHCP_SEND_HOSTNAME: string
export const SETTING_IP4_CONFIG_DHCP_TIMEOUT: string
export const SETTING_IP4_CONFIG_DNS: string
export const SETTING_IP4_CONFIG_DNS_SEARCH: string
export const SETTING_IP4_CONFIG_IGNORE_AUTO_DNS: string
export const SETTING_IP4_CONFIG_IGNORE_AUTO_ROUTES: string
export const SETTING_IP4_CONFIG_MAY_FAIL: string
export const SETTING_IP4_CONFIG_METHOD: string
export const SETTING_IP4_CONFIG_METHOD_AUTO: string
export const SETTING_IP4_CONFIG_METHOD_DISABLED: string
export const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string
export const SETTING_IP4_CONFIG_METHOD_MANUAL: string
export const SETTING_IP4_CONFIG_METHOD_SHARED: string
export const SETTING_IP4_CONFIG_NEVER_DEFAULT: string
export const SETTING_IP4_CONFIG_ROUTES: string
export const SETTING_IP4_CONFIG_ROUTE_METRIC: string
export const SETTING_IP4_CONFIG_SETTING_NAME: string
export const SETTING_IP6_CONFIG_ADDRESSES: string
export const SETTING_IP6_CONFIG_DHCP_HOSTNAME: string
export const SETTING_IP6_CONFIG_DNS: string
export const SETTING_IP6_CONFIG_DNS_SEARCH: string
export const SETTING_IP6_CONFIG_IGNORE_AUTO_DNS: string
export const SETTING_IP6_CONFIG_IGNORE_AUTO_ROUTES: string
export const SETTING_IP6_CONFIG_IP6_PRIVACY: string
export const SETTING_IP6_CONFIG_MAY_FAIL: string
export const SETTING_IP6_CONFIG_METHOD: string
export const SETTING_IP6_CONFIG_METHOD_AUTO: string
export const SETTING_IP6_CONFIG_METHOD_DHCP: string
export const SETTING_IP6_CONFIG_METHOD_IGNORE: string
export const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string
export const SETTING_IP6_CONFIG_METHOD_MANUAL: string
export const SETTING_IP6_CONFIG_METHOD_SHARED: string
export const SETTING_IP6_CONFIG_NEVER_DEFAULT: string
export const SETTING_IP6_CONFIG_ROUTES: string
export const SETTING_IP6_CONFIG_ROUTE_METRIC: string
export const SETTING_IP6_CONFIG_SETTING_NAME: string
export const SETTING_NAME: string
export const SETTING_OLPC_MESH_CHANNEL: string
export const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string
export const SETTING_OLPC_MESH_SETTING_NAME: string
export const SETTING_OLPC_MESH_SSID: string
export const SETTING_PARAM_FUZZY_IGNORE: number
export const SETTING_PARAM_REQUIRED: number
export const SETTING_PARAM_SECRET: number
export const SETTING_PARAM_SERIALIZE: number
export const SETTING_PPPOE_PASSWORD: string
export const SETTING_PPPOE_PASSWORD_FLAGS: string
export const SETTING_PPPOE_SERVICE: string
export const SETTING_PPPOE_SETTING_NAME: string
export const SETTING_PPPOE_USERNAME: string
export const SETTING_PPP_BAUD: string
export const SETTING_PPP_CRTSCTS: string
export const SETTING_PPP_LCP_ECHO_FAILURE: string
export const SETTING_PPP_LCP_ECHO_INTERVAL: string
export const SETTING_PPP_MPPE_STATEFUL: string
export const SETTING_PPP_MRU: string
export const SETTING_PPP_MTU: string
export const SETTING_PPP_NOAUTH: string
export const SETTING_PPP_NOBSDCOMP: string
export const SETTING_PPP_NODEFLATE: string
export const SETTING_PPP_NO_VJ_COMP: string
export const SETTING_PPP_REFUSE_CHAP: string
export const SETTING_PPP_REFUSE_EAP: string
export const SETTING_PPP_REFUSE_MSCHAP: string
export const SETTING_PPP_REFUSE_MSCHAPV2: string
export const SETTING_PPP_REFUSE_PAP: string
export const SETTING_PPP_REQUIRE_MPPE: string
export const SETTING_PPP_REQUIRE_MPPE_128: string
export const SETTING_PPP_SETTING_NAME: string
export const SETTING_SERIAL_BAUD: string
export const SETTING_SERIAL_BITS: string
export const SETTING_SERIAL_PARITY: string
export const SETTING_SERIAL_SEND_DELAY: string
export const SETTING_SERIAL_SETTING_NAME: string
export const SETTING_SERIAL_STOPBITS: string
export const SETTING_TEAM_CONFIG: string
export const SETTING_TEAM_INTERFACE_NAME: string
export const SETTING_TEAM_PORT_CONFIG: string
export const SETTING_TEAM_PORT_SETTING_NAME: string
export const SETTING_TEAM_SETTING_NAME: string
export const SETTING_VLAN_EGRESS_PRIORITY_MAP: string
export const SETTING_VLAN_FLAGS: string
export const SETTING_VLAN_ID: string
export const SETTING_VLAN_INGRESS_PRIORITY_MAP: string
export const SETTING_VLAN_INTERFACE_NAME: string
export const SETTING_VLAN_PARENT: string
export const SETTING_VLAN_SETTING_NAME: string
export const SETTING_VPN_DATA: string
export const SETTING_VPN_PERSISTENT: string
export const SETTING_VPN_SECRETS: string
export const SETTING_VPN_SERVICE_TYPE: string
export const SETTING_VPN_SETTING_NAME: string
export const SETTING_VPN_USER_NAME: string
export const SETTING_WIMAX_MAC_ADDRESS: string
export const SETTING_WIMAX_NETWORK_NAME: string
export const SETTING_WIMAX_SETTING_NAME: string
export const SETTING_WIRED_AUTO_NEGOTIATE: string
export const SETTING_WIRED_CLONED_MAC_ADDRESS: string
export const SETTING_WIRED_DUPLEX: string
export const SETTING_WIRED_MAC_ADDRESS: string
export const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string
export const SETTING_WIRED_MTU: string
export const SETTING_WIRED_PORT: string
export const SETTING_WIRED_S390_NETTYPE: string
export const SETTING_WIRED_S390_OPTIONS: string
export const SETTING_WIRED_S390_SUBCHANNELS: string
export const SETTING_WIRED_SETTING_NAME: string
export const SETTING_WIRED_SPEED: string
export const SETTING_WIRELESS_BAND: string
export const SETTING_WIRELESS_BSSID: string
export const SETTING_WIRELESS_CHANNEL: string
export const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string
export const SETTING_WIRELESS_HIDDEN: string
export const SETTING_WIRELESS_MAC_ADDRESS: string
export const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string
export const SETTING_WIRELESS_MODE: string
export const SETTING_WIRELESS_MODE_ADHOC: string
export const SETTING_WIRELESS_MODE_AP: string
export const SETTING_WIRELESS_MODE_INFRA: string
export const SETTING_WIRELESS_MTU: string
export const SETTING_WIRELESS_POWERSAVE: string
export const SETTING_WIRELESS_RATE: string
export const SETTING_WIRELESS_SEC: string
export const SETTING_WIRELESS_SECURITY_AUTH_ALG: string
export const SETTING_WIRELESS_SECURITY_GROUP: string
export const SETTING_WIRELESS_SECURITY_KEY_MGMT: string
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string
export const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string
export const SETTING_WIRELESS_SECURITY_PAIRWISE: string
export const SETTING_WIRELESS_SECURITY_PROTO: string
export const SETTING_WIRELESS_SECURITY_PSK: string
export const SETTING_WIRELESS_SECURITY_PSK_FLAGS: string
export const SETTING_WIRELESS_SECURITY_SETTING_NAME: string
export const SETTING_WIRELESS_SECURITY_WEP_KEY0: string
export const SETTING_WIRELESS_SECURITY_WEP_KEY1: string
export const SETTING_WIRELESS_SECURITY_WEP_KEY2: string
export const SETTING_WIRELESS_SECURITY_WEP_KEY3: string
export const SETTING_WIRELESS_SECURITY_WEP_KEY_FLAGS: string
export const SETTING_WIRELESS_SECURITY_WEP_KEY_TYPE: string
export const SETTING_WIRELESS_SECURITY_WEP_TX_KEYIDX: string
export const SETTING_WIRELESS_SEEN_BSSIDS: string
export const SETTING_WIRELESS_SETTING_NAME: string
export const SETTING_WIRELESS_SSID: string
export const SETTING_WIRELESS_TX_POWER: string
export const UTILS_HWADDR_LEN_MAX: number
export const VLAN_FLAGS_ALL: number
export const VPN_DBUS_PLUGIN_INTERFACE: string
export const VPN_DBUS_PLUGIN_PATH: string
export const VPN_PLUGIN_CAN_PERSIST: string
export const VPN_PLUGIN_CONFIG_BANNER: string
export const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string
export const VPN_PLUGIN_CONFIG_HAS_IP4: string
export const VPN_PLUGIN_CONFIG_HAS_IP6: string
export const VPN_PLUGIN_CONFIG_MTU: string
export const VPN_PLUGIN_CONFIG_TUNDEV: string
export const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string
export const VPN_PLUGIN_IP4_CONFIG_DNS: string
export const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string
export const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string
export const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string
export const VPN_PLUGIN_IP4_CONFIG_MSS: string
export const VPN_PLUGIN_IP4_CONFIG_NBNS: string
export const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string
export const VPN_PLUGIN_IP4_CONFIG_PREFIX: string
export const VPN_PLUGIN_IP4_CONFIG_PTP: string
export const VPN_PLUGIN_IP4_CONFIG_ROUTES: string
export const VPN_PLUGIN_IP6_CONFIG_ADDRESS: string
export const VPN_PLUGIN_IP6_CONFIG_DNS: string
export const VPN_PLUGIN_IP6_CONFIG_DOMAIN: string
export const VPN_PLUGIN_IP6_CONFIG_DOMAINS: string
export const VPN_PLUGIN_IP6_CONFIG_INT_GATEWAY: string
export const VPN_PLUGIN_IP6_CONFIG_MSS: string
export const VPN_PLUGIN_IP6_CONFIG_NEVER_DEFAULT: string
export const VPN_PLUGIN_IP6_CONFIG_PREFIX: string
export const VPN_PLUGIN_IP6_CONFIG_PTP: string
export const VPN_PLUGIN_IP6_CONFIG_ROUTES: string
export function connection_error_quark(): GLib.Quark
export function setting_802_1x_error_quark(): GLib.Quark
export function setting_adsl_error_quark(): GLib.Quark
export function setting_bluetooth_error_quark(): GLib.Quark
export function setting_bond_error_quark(): GLib.Quark
export function setting_bridge_error_quark(): GLib.Quark
export function setting_bridge_port_error_quark(): GLib.Quark
export function setting_cdma_error_quark(): GLib.Quark
export function setting_connection_error_quark(): GLib.Quark
export function setting_dcb_error_quark(): GLib.Quark
export function setting_error_quark(): GLib.Quark
export function setting_generic_error_quark(): GLib.Quark
export function setting_gsm_error_quark(): GLib.Quark
export function setting_infiniband_error_quark(): GLib.Quark
export function setting_ip4_config_error_quark(): GLib.Quark
export function setting_ip6_config_error_quark(): GLib.Quark
export function setting_olpc_mesh_error_quark(): GLib.Quark
export function setting_ppp_error_quark(): GLib.Quark
export function setting_pppoe_error_quark(): GLib.Quark
export function setting_serial_error_quark(): GLib.Quark
export function setting_team_error_quark(): GLib.Quark
export function setting_team_port_error_quark(): GLib.Quark
export function setting_vlan_error_quark(): GLib.Quark
export function setting_vpn_error_quark(): GLib.Quark
export function setting_wimax_error_quark(): GLib.Quark
export function setting_wired_error_quark(): GLib.Quark
export function setting_wireless_error_quark(): GLib.Quark
export function setting_wireless_security_error_quark(): GLib.Quark
export function utils_ap_mode_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities): boolean
export function utils_bin2hexstr(bytes: string, len: number, final_len: number): string
export function utils_check_virtual_device_compatibility(virtual_type: GObject.Type, other_type: GObject.Type): boolean
export function utils_deinit(): void
export function utils_escape_ssid(ssid: number, len: number): string
export function utils_file_is_pkcs12(filename: string): boolean
export function utils_file_search_in_paths(progname: string, try_first: string | null, paths: string | null, file_test_flags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate): string
export function utils_gvalue_hash_dup(hash: GLib.HashTable): GLib.HashTable
export function utils_hex2byte(hex: string): number
export function utils_hexstr2bin(hex: string, len: number): string
export function utils_hwaddr_atoba(asc: string, type: number): Uint8Array[]
export function utils_hwaddr_aton(asc: string, type: number, buffer?: object | null): number
export function utils_hwaddr_aton_len(asc: string, buffer: object | null, length: number): number
export function utils_hwaddr_len(type: number): number
export function utils_hwaddr_ntoa(addr: object | null, type: number): string
export function utils_hwaddr_ntoa_len(addr: object | null, length: number): string
export function utils_hwaddr_type(len: number): number
export function utils_hwaddr_valid(asc: string): boolean
export function utils_iface_valid_name(name: string): boolean
export function utils_init(): boolean
export function utils_ip4_addresses_from_gvalue(value: any): IP4Address[]
export function utils_ip4_addresses_to_gvalue(list: IP4Address[], value: any): void
export function utils_ip4_get_default_prefix(ip: number): number
export function utils_ip4_netmask_to_prefix(netmask: number): number
export function utils_ip4_prefix_to_netmask(prefix: number): number
export function utils_ip4_routes_from_gvalue(value: any): IP4Route[]
export function utils_ip4_routes_to_gvalue(list: IP4Route[], value: any): void
export function utils_ip6_addresses_from_gvalue(value: any): IP6Address[]
export function utils_ip6_addresses_to_gvalue(list: IP6Address[], value: any): void
export function utils_ip6_routes_from_gvalue(value: any): IP6Route[]
export function utils_ip6_routes_to_gvalue(list: IP6Route[], value: any): void
export function utils_is_empty_ssid(ssid: number, len: number): boolean
export function utils_is_uuid(str: string): boolean
export function utils_rsa_key_encrypt(data: Uint8Array[], in_password?: string | null): [ /* returnType */ Uint8Array[], /* out_password */ string | null ]
export function utils_rsa_key_encrypt_aes(data: Uint8Array[], in_password?: string | null): [ /* returnType */ Uint8Array[], /* out_password */ string | null ]
export function utils_same_ssid(ssid1: Uint8Array[], ssid2: Uint8Array[], ignore_trailing_null: boolean): boolean
export function utils_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities, have_ap: boolean, adhoc: boolean, ap_flags: TODO_80211ApFlags, ap_wpa: TODO_80211ApSecurityFlags, ap_rsn: TODO_80211ApSecurityFlags): boolean
export function utils_ssid_to_utf8(ssid: Uint8Array[]): string
export function utils_uuid_generate(): string
export function utils_uuid_generate_from_string(s: string): string
export function utils_wep_key_valid(key: string, wep_type: WepKeyType): boolean
export function utils_wifi_channel_to_freq(channel: number, band: string): number
export function utils_wifi_find_next_channel(channel: number, direction: number, band: string): number
export function utils_wifi_freq_to_channel(freq: number): number
export function utils_wifi_is_channel_valid(channel: number, band: string): boolean
export function utils_wpa_psk_valid(psk: string): boolean
export interface SettingClearSecretsWithFlagsFn {
    (setting: Setting, secret: string, flags: SettingSecretFlags): boolean
}
export interface SettingValueIterFn {
    (setting: Setting, key: string, value: any, flags: GObject.ParamFlags): void
}
export interface UtilsFileSearchInPathsPredicate {
    (filename: string): boolean
}
export interface VPNIterFunc {
    (key: string, value: string): void
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    path?: string
}
export class Connection {
    /* Properties of NetworkManager.Connection */
    path: string
    /* Fields of NetworkManager.Connection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.Connection */
    add_setting(setting: Setting): void
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Connection, flags: SettingCompareFlags): boolean
    diff(b: Connection, flags: SettingCompareFlags, out_settings: GLib.HashTable): boolean
    dump(): void
    duplicate(): Connection
    for_each_setting_value(func: SettingValueIterFn): void
    get_connection_type(): string
    get_id(): string
    get_interface_name(): string
    get_path(): string
    get_setting(setting_type: GObject.Type): Setting
    get_setting_802_1x(): Setting8021x
    get_setting_adsl(): SettingAdsl
    get_setting_bluetooth(): SettingBluetooth
    get_setting_bond(): SettingBond
    get_setting_bridge(): SettingBridge
    get_setting_bridge_port(): SettingBridgePort
    get_setting_by_name(name: string): Setting
    get_setting_cdma(): SettingCdma
    get_setting_connection(): SettingConnection
    get_setting_dcb(): SettingDcb
    get_setting_generic(): SettingGeneric
    get_setting_gsm(): SettingGsm
    get_setting_infiniband(): SettingInfiniband
    get_setting_ip4_config(): SettingIP4Config
    get_setting_ip6_config(): SettingIP6Config
    get_setting_olpc_mesh(): SettingOlpcMesh
    get_setting_ppp(): SettingPPP
    get_setting_pppoe(): SettingPPPOE
    get_setting_serial(): SettingSerial
    get_setting_team(): SettingTeam
    get_setting_team_port(): SettingTeamPort
    get_setting_vlan(): SettingVlan
    get_setting_vpn(): SettingVPN
    get_setting_wimax(): SettingWimax
    get_setting_wired(): SettingWired
    get_setting_wireless(): SettingWireless
    get_setting_wireless_security(): SettingWirelessSecurity
    get_uuid(): string
    get_virtual_device_description(): string
    get_virtual_iface_name(): string
    is_type(type: string): boolean
    need_secrets(): [ /* returnType */ string, /* hints */ string[] | null ]
    normalize(parameters?: GLib.HashTable | null): [ /* returnType */ boolean, /* modified */ boolean | null ]
    remove_setting(setting_type: GObject.Type): void
    replace_settings(new_settings: GLib.HashTable): boolean
    replace_settings_from_connection(new_connection: Connection): boolean
    set_path(path: string): void
    to_hash(flags: SettingHashFlags): GLib.HashTable
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
    /* Signals of NetworkManager.Connection */
    connect(sigName: "changed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Connection) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "secrets-cleared", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "secrets-cleared", callback: (($obj: Connection) => void)): number
    emit(sigName: "secrets-cleared"): void
    connect(sigName: "secrets-updated", callback: (($obj: Connection, setting_name: string) => void)): number
    connect_after(sigName: "secrets-updated", callback: (($obj: Connection, setting_name: string) => void)): number
    emit(sigName: "secrets-updated", setting_name: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static new_from_hash(hash: GLib.HashTable): Connection
    static create_setting(name: string): Setting
    static lookup_setting_type(name: string): GObject.Type
    static lookup_setting_type_by_quark(error_quark: GLib.Quark): GObject.Type
    static $gtype: GObject.Type
}
export interface Setting_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
export class Setting {
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Setting_ConstructProps)
    _init (config?: Setting_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_hash(setting_type: GObject.Type, hash: GLib.HashTable): Setting
    static $gtype: GObject.Type
}
export interface Setting8021x_ConstructProps extends Setting_ConstructProps {
    anonymous_identity?: string
    ca_path?: string
    identity?: string
    pac_file?: string
    password?: string
    password_flags?: number
    password_raw_flags?: number
    phase1_fast_provisioning?: string
    phase1_peaplabel?: string
    phase1_peapver?: string
    phase2_auth?: string
    phase2_autheap?: string
    phase2_ca_path?: string
    phase2_private_key_password?: string
    phase2_private_key_password_flags?: number
    phase2_subject_match?: string
    pin?: string
    pin_flags?: number
    private_key_password?: string
    private_key_password_flags?: number
    subject_match?: string
    system_ca_certs?: boolean
}
export class Setting8021x {
    /* Properties of NetworkManager.Setting8021x */
    anonymous_identity: string
    ca_path: string
    identity: string
    pac_file: string
    password: string
    password_flags: number
    password_raw_flags: number
    phase1_fast_provisioning: string
    phase1_peaplabel: string
    phase1_peapver: string
    phase2_auth: string
    phase2_autheap: string
    phase2_ca_path: string
    phase2_private_key_password: string
    phase2_private_key_password_flags: number
    phase2_subject_match: string
    pin: string
    pin_flags: number
    private_key_password: string
    private_key_password_flags: number
    subject_match: string
    system_ca_certs: boolean
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.Setting8021x */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.Setting8021x */
    add_altsubject_match(altsubject_match: string): boolean
    add_eap_method(eap: string): boolean
    add_phase2_altsubject_match(phase2_altsubject_match: string): boolean
    clear_altsubject_matches(): void
    clear_eap_methods(): void
    clear_phase2_altsubject_matches(): void
    get_altsubject_match(i: number): string
    get_anonymous_identity(): string
    get_ca_cert_blob(): Uint8Array[]
    get_ca_cert_path(): string
    get_ca_cert_scheme(): Setting8021xCKScheme
    get_ca_path(): string
    get_client_cert_blob(): Uint8Array[]
    get_client_cert_path(): string
    get_client_cert_scheme(): Setting8021xCKScheme
    get_eap_method(i: number): string
    get_identity(): string
    get_num_altsubject_matches(): number
    get_num_eap_methods(): number
    get_num_phase2_altsubject_matches(): number
    get_pac_file(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_password_raw(): Uint8Array[]
    get_password_raw_flags(): SettingSecretFlags
    get_phase1_fast_provisioning(): string
    get_phase1_peaplabel(): string
    get_phase1_peapver(): string
    get_phase2_altsubject_match(i: number): string
    get_phase2_auth(): string
    get_phase2_autheap(): string
    get_phase2_ca_cert_blob(): Uint8Array[]
    get_phase2_ca_cert_path(): string
    get_phase2_ca_cert_scheme(): Setting8021xCKScheme
    get_phase2_ca_path(): string
    get_phase2_client_cert_blob(): Uint8Array[]
    get_phase2_client_cert_path(): string
    get_phase2_client_cert_scheme(): Setting8021xCKScheme
    get_phase2_private_key_blob(): Uint8Array[]
    get_phase2_private_key_format(): Setting8021xCKFormat
    get_phase2_private_key_password(): string
    get_phase2_private_key_password_flags(): SettingSecretFlags
    get_phase2_private_key_path(): string
    get_phase2_private_key_scheme(): Setting8021xCKScheme
    get_phase2_subject_match(): string
    get_pin(): string
    get_pin_flags(): SettingSecretFlags
    get_private_key_blob(): Uint8Array[]
    get_private_key_format(): Setting8021xCKFormat
    get_private_key_password(): string
    get_private_key_password_flags(): SettingSecretFlags
    get_private_key_path(): string
    get_private_key_scheme(): Setting8021xCKScheme
    get_subject_match(): string
    get_system_ca_certs(): boolean
    remove_altsubject_match(i: number): void
    remove_altsubject_match_by_value(altsubject_match: string): boolean
    remove_eap_method(i: number): void
    remove_eap_method_by_value(eap: string): boolean
    remove_phase2_altsubject_match(i: number): void
    remove_phase2_altsubject_match_by_value(phase2_altsubject_match: string): boolean
    set_ca_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    set_client_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    set_phase2_ca_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    set_phase2_client_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    set_phase2_private_key(key_path: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    set_private_key(key_path: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous-identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous-identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pac-file", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pac-file", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-raw-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-raw-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase1-fast-provisioning", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-fast-provisioning", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase1-peaplabel", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peaplabel", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase1-peapver", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peapver", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-auth", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-auth", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-autheap", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-autheap", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pin", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pin-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-ca-certs", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-ca-certs", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Setting8021x_ConstructProps)
    _init (config?: Setting8021x_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Setting8021x
    static $gtype: GObject.Type
}
export interface SettingAdsl_ConstructProps extends Setting_ConstructProps {
    encapsulation?: string
    password?: string
    password_flags?: number
    protocol?: string
    username?: string
    vci?: number
    vpi?: number
}
export class SettingAdsl {
    /* Properties of NetworkManager.SettingAdsl */
    encapsulation: string
    password: string
    password_flags: number
    protocol: string
    username: string
    vci: number
    vpi: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingAdsl */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingAdsl */
    get_encapsulation(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_protocol(): string
    get_username(): string
    get_vci(): number
    get_vpi(): number
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::encapsulation", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encapsulation", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vci", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vci", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vpi", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpi", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingAdsl_ConstructProps)
    _init (config?: SettingAdsl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingAdsl
    static $gtype: GObject.Type
}
export interface SettingBluetooth_ConstructProps extends Setting_ConstructProps {
    type?: string
}
export class SettingBluetooth {
    /* Properties of NetworkManager.SettingBluetooth */
    type: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingBluetooth */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingBluetooth */
    get_bdaddr(): Uint8Array[]
    get_connection_type(): string
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingBluetooth_ConstructProps)
    _init (config?: SettingBluetooth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBluetooth
    static $gtype: GObject.Type
}
export interface SettingBond_ConstructProps extends Setting_ConstructProps {
    interface_name?: string
}
export class SettingBond {
    /* Properties of NetworkManager.SettingBond */
    interface_name: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingBond */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingBond */
    add_option(name: string, value: string): boolean
    get_interface_name(): string
    get_num_options(): number
    get_option(idx: number): [ /* returnType */ boolean, /* out_name */ string, /* out_value */ string ]
    get_option_by_name(name: string): string
    get_option_default(name: string): string
    get_valid_options(): string[]
    remove_option(name: string): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::interface-name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingBond_ConstructProps)
    _init (config?: SettingBond_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBond
    static validate_option(name: string, value: string): boolean
    static $gtype: GObject.Type
}
export interface SettingBridge_ConstructProps extends Setting_ConstructProps {
    ageing_time?: number
    forward_delay?: number
    hello_time?: number
    interface_name?: string
    max_age?: number
    priority?: number
    stp?: boolean
}
export class SettingBridge {
    /* Properties of NetworkManager.SettingBridge */
    ageing_time: number
    forward_delay: number
    hello_time: number
    interface_name: string
    max_age: number
    priority: number
    stp: boolean
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingBridge */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingBridge */
    get_ageing_time(): number
    get_forward_delay(): number
    get_hello_time(): number
    get_interface_name(): string
    get_mac_address(): Uint8Array[]
    get_max_age(): number
    get_priority(): number
    get_stp(): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ageing-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ageing-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::forward-delay", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forward-delay", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hello-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hello-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface-name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-age", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stp", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stp", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingBridge_ConstructProps)
    _init (config?: SettingBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBridge
    static $gtype: GObject.Type
}
export interface SettingBridgePort_ConstructProps extends Setting_ConstructProps {
    hairpin_mode?: boolean
    path_cost?: number
    priority?: number
}
export class SettingBridgePort {
    /* Properties of NetworkManager.SettingBridgePort */
    hairpin_mode: boolean
    path_cost: number
    priority: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingBridgePort */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingBridgePort */
    get_hairpin_mode(): boolean
    get_path_cost(): number
    get_priority(): number
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hairpin-mode", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hairpin-mode", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path-cost", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-cost", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingBridgePort_ConstructProps)
    _init (config?: SettingBridgePort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBridgePort
    static $gtype: GObject.Type
}
export interface SettingCdma_ConstructProps extends Setting_ConstructProps {
    number?: string
    password?: string
    password_flags?: number
    username?: string
}
export class SettingCdma {
    /* Properties of NetworkManager.SettingCdma */
    number: string
    password: string
    password_flags: number
    username: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingCdma */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingCdma */
    get_number(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_username(): string
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::number", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingCdma_ConstructProps)
    _init (config?: SettingCdma_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingCdma
    static $gtype: GObject.Type
}
export interface SettingConnection_ConstructProps extends Setting_ConstructProps {
    autoconnect?: boolean
    gateway_ping_timeout?: number
    id?: string
    interface_name?: string
    master?: string
    read_only?: boolean
    slave_type?: string
    timestamp?: number
    type?: string
    uuid?: string
    zone?: string
}
export class SettingConnection {
    /* Properties of NetworkManager.SettingConnection */
    autoconnect: boolean
    gateway_ping_timeout: number
    id: string
    interface_name: string
    master: string
    read_only: boolean
    slave_type: string
    timestamp: number
    type: string
    uuid: string
    zone: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingConnection */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingConnection */
    add_permission(ptype: string, pitem: string, detail?: string | null): boolean
    add_secondary(sec_uuid: string): boolean
    get_autoconnect(): boolean
    get_connection_type(): string
    get_gateway_ping_timeout(): number
    get_id(): string
    get_interface_name(): string
    get_master(): string
    get_num_permissions(): number
    get_num_secondaries(): number
    get_permission(idx: number, out_ptype: string, out_pitem: string, out_detail: string): boolean
    get_read_only(): boolean
    get_secondary(idx: number): string
    get_slave_type(): string
    get_timestamp(): number
    get_uuid(): string
    get_zone(): string
    is_slave_type(type: string): boolean
    permissions_user_allowed(uname: string): boolean
    remove_permission(idx: number): void
    remove_permission_by_value(ptype: string, pitem: string, detail?: string | null): boolean
    remove_secondary(idx: number): void
    remove_secondary_by_value(sec_uuid: string): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::autoconnect", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gateway-ping-timeout", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway-ping-timeout", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface-name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::master", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slave-type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zone", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zone", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingConnection_ConstructProps)
    _init (config?: SettingConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingConnection
    static $gtype: GObject.Type
}
export interface SettingDcb_ConstructProps extends Setting_ConstructProps {
    app_fcoe_flags?: number
    app_fcoe_mode?: string
    app_fcoe_priority?: number
    app_fip_flags?: number
    app_fip_priority?: number
    app_iscsi_flags?: number
    app_iscsi_priority?: number
    priority_flow_control_flags?: number
    priority_group_flags?: number
}
export class SettingDcb {
    /* Properties of NetworkManager.SettingDcb */
    app_fcoe_flags: number
    app_fcoe_mode: string
    app_fcoe_priority: number
    app_fip_flags: number
    app_fip_priority: number
    app_iscsi_flags: number
    app_iscsi_priority: number
    priority_flow_control_flags: number
    priority_group_flags: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingDcb */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingDcb */
    get_app_fcoe_flags(): SettingDcbFlags
    get_app_fcoe_mode(): string
    get_app_fcoe_priority(): number
    get_app_fip_flags(): SettingDcbFlags
    get_app_fip_priority(): number
    get_app_iscsi_flags(): SettingDcbFlags
    get_app_iscsi_priority(): number
    get_priority_bandwidth(user_priority: number): number
    get_priority_flow_control(user_priority: number): boolean
    get_priority_flow_control_flags(): SettingDcbFlags
    get_priority_group_bandwidth(group_id: number): number
    get_priority_group_flags(): SettingDcbFlags
    get_priority_group_id(user_priority: number): number
    get_priority_strict_bandwidth(user_priority: number): boolean
    get_priority_traffic_class(user_priority: number): number
    set_priority_bandwidth(user_priority: number, bandwidth_percent: number): void
    set_priority_flow_control(user_priority: number, enabled: boolean): void
    set_priority_group_bandwidth(group_id: number, bandwidth_percent: number): void
    set_priority_group_id(user_priority: number, group_id: number): void
    set_priority_strict_bandwidth(user_priority: number, strict: boolean): void
    set_priority_traffic_class(user_priority: number, traffic_class: number): void
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-fcoe-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-fcoe-mode", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-mode", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-fcoe-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-fip-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-fip-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-iscsi-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-iscsi-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-flow-control-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-flow-control-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-group-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-group-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingDcb_ConstructProps)
    _init (config?: SettingDcb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingDcb
    static $gtype: GObject.Type
}
export interface SettingGeneric_ConstructProps extends Setting_ConstructProps {
}
export class SettingGeneric {
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingGeneric */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingGeneric_ConstructProps)
    _init (config?: SettingGeneric_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingGeneric
    static $gtype: GObject.Type
}
export interface SettingGsm_ConstructProps extends Setting_ConstructProps {
    allowed_bands?: number
    apn?: string
    home_only?: boolean
    network_id?: string
    network_type?: number
    number?: string
    password?: string
    password_flags?: number
    pin?: string
    pin_flags?: number
    username?: string
}
export class SettingGsm {
    /* Properties of NetworkManager.SettingGsm */
    allowed_bands: number
    apn: string
    home_only: boolean
    network_id: string
    network_type: number
    number: string
    password: string
    password_flags: number
    pin: string
    pin_flags: number
    username: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingGsm */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingGsm */
    get_allowed_bands(): number
    get_apn(): string
    get_home_only(): boolean
    get_network_id(): string
    get_network_type(): number
    get_number(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_pin(): string
    get_pin_flags(): SettingSecretFlags
    get_username(): string
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-bands", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-bands", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::apn", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apn", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-only", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-only", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-id", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-id", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-type", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pin", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pin-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingGsm_ConstructProps)
    _init (config?: SettingGsm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingGsm
    static $gtype: GObject.Type
}
export interface SettingIP4Config_ConstructProps extends Setting_ConstructProps {
    dhcp_client_id?: string
    dhcp_hostname?: string
    dhcp_send_hostname?: boolean
    dhcp_timeout?: number
    ignore_auto_dns?: boolean
    ignore_auto_routes?: boolean
    may_fail?: boolean
    method?: string
    never_default?: boolean
    route_metric?: number
}
export class SettingIP4Config {
    /* Properties of NetworkManager.SettingIP4Config */
    dhcp_client_id: string
    dhcp_hostname: string
    dhcp_send_hostname: boolean
    dhcp_timeout: number
    ignore_auto_dns: boolean
    ignore_auto_routes: boolean
    may_fail: boolean
    method: string
    never_default: boolean
    route_metric: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingIP4Config */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingIP4Config */
    add_address(address: IP4Address): boolean
    add_dns(dns: number): boolean
    add_dns_search(dns_search: string): boolean
    add_route(route: IP4Route): boolean
    clear_addresses(): void
    clear_dns(): void
    clear_dns_searches(): void
    clear_routes(): void
    get_address(i: number): IP4Address
    get_dhcp_client_id(): string
    get_dhcp_hostname(): string
    get_dhcp_send_hostname(): boolean
    get_dhcp_timeout(): number
    get_dns(i: number): number
    get_dns_search(i: number): string
    get_ignore_auto_dns(): boolean
    get_ignore_auto_routes(): boolean
    get_may_fail(): boolean
    get_method(): string
    get_never_default(): boolean
    get_num_addresses(): number
    get_num_dns(): number
    get_num_dns_searches(): number
    get_num_routes(): number
    get_route(i: number): IP4Route
    get_route_metric(): number
    remove_address(i: number): void
    remove_address_by_value(address: IP4Address): boolean
    remove_dns(i: number): void
    remove_dns_by_value(dns: number): boolean
    remove_dns_search(i: number): void
    remove_dns_search_by_value(dns_search: string): boolean
    remove_route(i: number): void
    remove_route_by_value(route: IP4Route): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-client-id", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-client-id", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp-send-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-send-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp-timeout", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-timeout", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::may-fail", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::never-default", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::route-metric", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingIP4Config_ConstructProps)
    _init (config?: SettingIP4Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingIP4Config
    static $gtype: GObject.Type
}
export interface SettingIP6Config_ConstructProps extends Setting_ConstructProps {
    dhcp_hostname?: string
    ignore_auto_dns?: boolean
    ignore_auto_routes?: boolean
    ip6_privacy?: number
    may_fail?: boolean
    method?: string
    never_default?: boolean
    route_metric?: number
}
export class SettingIP6Config {
    /* Properties of NetworkManager.SettingIP6Config */
    dhcp_hostname: string
    ignore_auto_dns: boolean
    ignore_auto_routes: boolean
    ip6_privacy: number
    may_fail: boolean
    method: string
    never_default: boolean
    route_metric: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingIP6Config */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingIP6Config */
    add_address(address: IP6Address): boolean
    add_dns(dns?: object | null): boolean
    add_dns_search(dns_search: string): boolean
    add_route(route: IP6Route): boolean
    clear_addresses(): void
    clear_dns(): void
    clear_dns_searches(): void
    clear_routes(): void
    get_address(i: number): IP6Address
    get_dhcp_hostname(): string
    get_dns(i: number): object | null
    get_dns_search(i: number): string
    get_ignore_auto_dns(): boolean
    get_ignore_auto_routes(): boolean
    get_ip6_privacy(): SettingIP6ConfigPrivacy
    get_may_fail(): boolean
    get_method(): string
    get_never_default(): boolean
    get_num_addresses(): number
    get_num_dns(): number
    get_num_dns_searches(): number
    get_num_routes(): number
    get_route(i: number): IP6Route
    get_route_metric(): number
    remove_address(i: number): void
    remove_address_by_value(address: IP6Address): boolean
    remove_dns(i: number): void
    remove_dns_by_value(dns?: object | null): boolean
    remove_dns_search(i: number): void
    remove_dns_search_by_value(dns_search: string): boolean
    remove_route(i: number): void
    remove_route_by_value(route: IP6Route): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-privacy", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-privacy", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::may-fail", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::never-default", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::route-metric", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingIP6Config_ConstructProps)
    _init (config?: SettingIP6Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingIP6Config
    static $gtype: GObject.Type
}
export interface SettingInfiniband_ConstructProps extends Setting_ConstructProps {
    mtu?: number
    p_key?: number
    parent?: string
    transport_mode?: string
}
export class SettingInfiniband {
    /* Properties of NetworkManager.SettingInfiniband */
    mtu: number
    p_key: number
    parent: string
    transport_mode: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingInfiniband */
    get_mac_address(): Uint8Array[]
    get_mtu(): number
    get_p_key(): number
    get_parent(): string
    get_transport_mode(): string
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mtu", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::p-key", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::p-key", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingInfiniband_ConstructProps)
    _init (config?: SettingInfiniband_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingInfiniband
    static $gtype: GObject.Type
}
export interface SettingOlpcMesh_ConstructProps extends Setting_ConstructProps {
    channel?: number
}
export class SettingOlpcMesh {
    /* Properties of NetworkManager.SettingOlpcMesh */
    channel: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingOlpcMesh */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingOlpcMesh */
    get_channel(): number
    get_dhcp_anycast_address(): Uint8Array[]
    get_ssid(): Uint8Array[]
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::channel", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingOlpcMesh_ConstructProps)
    _init (config?: SettingOlpcMesh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingOlpcMesh
    static $gtype: GObject.Type
}
export interface SettingPPP_ConstructProps extends Setting_ConstructProps {
    baud?: number
    crtscts?: boolean
    lcp_echo_failure?: number
    lcp_echo_interval?: number
    mppe_stateful?: boolean
    mru?: number
    mtu?: number
    no_vj_comp?: boolean
    noauth?: boolean
    nobsdcomp?: boolean
    nodeflate?: boolean
    refuse_chap?: boolean
    refuse_eap?: boolean
    refuse_mschap?: boolean
    refuse_mschapv2?: boolean
    refuse_pap?: boolean
    require_mppe?: boolean
    require_mppe_128?: boolean
}
export class SettingPPP {
    /* Properties of NetworkManager.SettingPPP */
    baud: number
    crtscts: boolean
    lcp_echo_failure: number
    lcp_echo_interval: number
    mppe_stateful: boolean
    mru: number
    mtu: number
    no_vj_comp: boolean
    noauth: boolean
    nobsdcomp: boolean
    nodeflate: boolean
    refuse_chap: boolean
    refuse_eap: boolean
    refuse_mschap: boolean
    refuse_mschapv2: boolean
    refuse_pap: boolean
    require_mppe: boolean
    require_mppe_128: boolean
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingPPP */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingPPP */
    get_baud(): number
    get_crtscts(): boolean
    get_lcp_echo_failure(): number
    get_lcp_echo_interval(): number
    get_mppe_stateful(): boolean
    get_mru(): number
    get_mtu(): number
    get_no_vj_comp(): boolean
    get_noauth(): boolean
    get_nobsdcomp(): boolean
    get_nodeflate(): boolean
    get_refuse_chap(): boolean
    get_refuse_eap(): boolean
    get_refuse_mschap(): boolean
    get_refuse_mschapv2(): boolean
    get_refuse_pap(): boolean
    get_require_mppe(): boolean
    get_require_mppe_128(): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::crtscts", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crtscts", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lcp-echo-failure", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-failure", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lcp-echo-interval", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-interval", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mppe-stateful", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mppe-stateful", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mru", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mru", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-vj-comp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-vj-comp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::noauth", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noauth", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nobsdcomp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nobsdcomp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nodeflate", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeflate", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-chap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-chap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-eap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-eap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-mschap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-mschapv2", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschapv2", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-pap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-pap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::require-mppe", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::require-mppe-128", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe-128", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingPPP_ConstructProps)
    _init (config?: SettingPPP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingPPP
    static $gtype: GObject.Type
}
export interface SettingPPPOE_ConstructProps extends Setting_ConstructProps {
    password?: string
    password_flags?: number
    service?: string
    username?: string
}
export class SettingPPPOE {
    /* Properties of NetworkManager.SettingPPPOE */
    password: string
    password_flags: number
    service: string
    username: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingPPPOE */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingPPPOE */
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_service(): string
    get_username(): string
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::password", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingPPPOE_ConstructProps)
    _init (config?: SettingPPPOE_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingPPPOE
    static $gtype: GObject.Type
}
export interface SettingSerial_ConstructProps extends Setting_ConstructProps {
    baud?: number
    bits?: number
    parity?: number
    send_delay?: number
    stopbits?: number
}
export class SettingSerial {
    /* Properties of NetworkManager.SettingSerial */
    baud: number
    bits: number
    parity: number
    send_delay: number
    stopbits: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingSerial */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingSerial */
    get_baud(): number
    get_bits(): number
    get_parity(): number
    get_send_delay(): number
    get_stopbits(): number
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parity", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parity", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::send-delay", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::send-delay", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stopbits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stopbits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingSerial_ConstructProps)
    _init (config?: SettingSerial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingSerial
    static $gtype: GObject.Type
}
export interface SettingTeam_ConstructProps extends Setting_ConstructProps {
    config?: string
    interface_name?: string
}
export class SettingTeam {
    /* Properties of NetworkManager.SettingTeam */
    config: string
    interface_name: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingTeam */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingTeam */
    get_config(): string
    get_interface_name(): string
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface-name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingTeam_ConstructProps)
    _init (config?: SettingTeam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingTeam
    static $gtype: GObject.Type
}
export interface SettingTeamPort_ConstructProps extends Setting_ConstructProps {
    config?: string
}
export class SettingTeamPort {
    /* Properties of NetworkManager.SettingTeamPort */
    config: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingTeamPort */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingTeamPort */
    get_config(): string
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingTeamPort_ConstructProps)
    _init (config?: SettingTeamPort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingTeamPort
    static $gtype: GObject.Type
}
export interface SettingVPN_ConstructProps extends Setting_ConstructProps {
    persistent?: boolean
    service_type?: string
    user_name?: string
}
export class SettingVPN {
    /* Properties of NetworkManager.SettingVPN */
    persistent: boolean
    service_type: string
    user_name: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingVPN */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingVPN */
    add_data_item(key: string, item: string): void
    add_secret(key: string, secret: string): void
    foreach_data_item(func: VPNIterFunc): void
    foreach_secret(func: VPNIterFunc): void
    get_data_item(key: string): string
    get_num_data_items(): number
    get_num_secrets(): number
    get_persistent(): boolean
    get_secret(key: string): string
    get_service_type(): string
    get_user_name(): string
    remove_data_item(key: string): boolean
    remove_secret(key: string): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::persistent", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-type", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingVPN_ConstructProps)
    _init (config?: SettingVPN_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingVPN
    static $gtype: GObject.Type
}
export interface SettingVlan_ConstructProps extends Setting_ConstructProps {
    flags?: number
    id?: number
    interface_name?: string
    parent?: string
}
export class SettingVlan {
    /* Properties of NetworkManager.SettingVlan */
    flags: number
    id: number
    interface_name: string
    parent: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingVlan */
    add_priority(map: VlanPriorityMap, from: number, to: number): boolean
    add_priority_str(map: VlanPriorityMap, str: string): boolean
    clear_priorities(map: VlanPriorityMap): void
    get_flags(): number
    get_id(): number
    get_interface_name(): string
    get_num_priorities(map: VlanPriorityMap): number
    get_parent(): string
    get_priority(map: VlanPriorityMap, idx: number): [ /* returnType */ boolean, /* out_from */ number, /* out_to */ number ]
    remove_priority(map: VlanPriorityMap, idx: number): void
    remove_priority_by_value(map: VlanPriorityMap, from: number, to: number): boolean
    remove_priority_str_by_value(map: VlanPriorityMap, str: string): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface-name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingVlan_ConstructProps)
    _init (config?: SettingVlan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingVlan
    static $gtype: GObject.Type
}
export interface SettingWimax_ConstructProps extends Setting_ConstructProps {
    network_name?: string
}
export class SettingWimax {
    /* Properties of NetworkManager.SettingWimax */
    network_name: string
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingWimax */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingWimax */
    get_mac_address(): Uint8Array[]
    get_network_name(): string
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingWimax_ConstructProps)
    _init (config?: SettingWimax_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWimax
    static $gtype: GObject.Type
}
export interface SettingWired_ConstructProps extends Setting_ConstructProps {
    auto_negotiate?: boolean
    duplex?: string
    mtu?: number
    port?: string
    s390_nettype?: string
    speed?: number
}
export class SettingWired {
    /* Properties of NetworkManager.SettingWired */
    auto_negotiate: boolean
    duplex: string
    mtu: number
    port: string
    s390_nettype: string
    speed: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingWired */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingWired */
    add_mac_blacklist_item(mac: string): boolean
    add_s390_option(key: string, value: string): boolean
    clear_mac_blacklist_items(): void
    get_auto_negotiate(): boolean
    get_cloned_mac_address(): Uint8Array[]
    get_duplex(): string
    get_mac_address(): Uint8Array[]
    get_mac_address_blacklist(): any[]
    get_mac_blacklist_item(idx: number): string
    get_mtu(): number
    get_num_mac_blacklist_items(): number
    get_num_s390_options(): number
    get_port(): string
    get_s390_nettype(): string
    get_s390_option(idx: number): [ /* returnType */ boolean, /* out_key */ string, /* out_value */ string ]
    get_s390_option_by_key(key: string): string
    get_s390_subchannels(): string[]
    get_speed(): number
    get_valid_s390_options(): string[]
    remove_mac_blacklist_item(idx: number): void
    remove_mac_blacklist_item_by_value(mac: string): boolean
    remove_s390_option(key: string): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-negotiate", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-negotiate", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duplex", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duplex", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::s390-nettype", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::s390-nettype", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::speed", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingWired_ConstructProps)
    _init (config?: SettingWired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWired
    static $gtype: GObject.Type
}
export interface SettingWireless_ConstructProps extends Setting_ConstructProps {
    band?: string
    channel?: number
    hidden?: boolean
    mode?: string
    mtu?: number
    powersave?: number
    rate?: number
    security?: string
    tx_power?: number
}
export class SettingWireless {
    /* Properties of NetworkManager.SettingWireless */
    band: string
    channel: number
    hidden: boolean
    mode: string
    mtu: number
    powersave: number
    rate: number
    security: string
    tx_power: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingWireless */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingWireless */
    add_mac_blacklist_item(mac: string): boolean
    add_seen_bssid(bssid: string): boolean
    ap_security_compatible(s_wireless_sec: SettingWirelessSecurity, ap_flags: TODO_80211ApFlags, ap_wpa: TODO_80211ApSecurityFlags, ap_rsn: TODO_80211ApSecurityFlags, ap_mode: TODO_80211Mode): boolean
    clear_mac_blacklist_items(): void
    get_band(): string
    get_bssid(): Uint8Array[]
    get_channel(): number
    get_cloned_mac_address(): Uint8Array[]
    get_hidden(): boolean
    get_mac_address(): Uint8Array[]
    get_mac_address_blacklist(): any[]
    get_mac_blacklist_item(idx: number): string
    get_mode(): string
    get_mtu(): number
    get_num_mac_blacklist_items(): number
    get_num_seen_bssids(): number
    get_powersave(): number
    get_rate(): number
    get_security(): string
    get_seen_bssid(i: number): string
    get_ssid(): Uint8Array[]
    get_tx_power(): number
    remove_mac_blacklist_item(idx: number): void
    remove_mac_blacklist_item_by_value(mac: string): boolean
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::band", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::band", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channel", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hidden", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::powersave", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::powersave", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tx-power", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tx-power", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingWireless_ConstructProps)
    _init (config?: SettingWireless_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWireless
    static $gtype: GObject.Type
}
export interface SettingWirelessSecurity_ConstructProps extends Setting_ConstructProps {
    auth_alg?: string
    key_mgmt?: string
    leap_password?: string
    leap_password_flags?: number
    leap_username?: string
    psk?: string
    psk_flags?: number
    wep_key_flags?: number
    wep_key_type?: number
    wep_key0?: string
    wep_key1?: string
    wep_key2?: string
    wep_key3?: string
    wep_tx_keyidx?: number
}
export class SettingWirelessSecurity {
    /* Properties of NetworkManager.SettingWirelessSecurity */
    auth_alg: string
    key_mgmt: string
    leap_password: string
    leap_password_flags: number
    leap_username: string
    psk: string
    psk_flags: number
    wep_key_flags: number
    wep_key_type: number
    wep_key0: string
    wep_key1: string
    wep_key2: string
    wep_key3: string
    wep_tx_keyidx: number
    /* Properties of NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager.SettingWirelessSecurity */
    parent: Setting
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager.SettingWirelessSecurity */
    add_group(group: string): boolean
    add_pairwise(pairwise: string): boolean
    add_proto(proto: string): boolean
    clear_groups(): void
    clear_pairwise(): void
    clear_protos(): void
    get_auth_alg(): string
    get_group(i: number): string
    get_key_mgmt(): string
    get_leap_password(): string
    get_leap_password_flags(): SettingSecretFlags
    get_leap_username(): string
    get_num_groups(): number
    get_num_pairwise(): number
    get_num_protos(): number
    get_pairwise(i: number): string
    get_proto(i: number): string
    get_psk(): string
    get_psk_flags(): SettingSecretFlags
    get_wep_key(idx: number): string
    get_wep_key_flags(): SettingSecretFlags
    get_wep_key_type(): WepKeyType
    get_wep_tx_keyidx(): number
    remove_group(i: number): void
    remove_group_by_value(group: string): boolean
    remove_pairwise(i: number): void
    remove_pairwise_by_value(pairwise: string): boolean
    remove_proto(i: number): void
    remove_proto_by_value(proto: string): boolean
    set_wep_key(idx: number, key: string): void
    /* Methods of NetworkManager.Setting */
    clear_secrets(): void
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerate_values(func: SettingValueIterFn): void
    get_name(): string
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    get_virtual_iface_name(): string
    need_secrets(): string[]
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    to_hash(flags: SettingHashFlags): GLib.HashTable
    to_string(): string
    update_secrets(secrets: GLib.HashTable): boolean
    verify(all_settings: Setting[]): boolean
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
    /* Virtual methods of NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    vfunc_get_virtual_iface_name(): string
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-alg", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-alg", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-mgmt", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-mgmt", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::leap-password", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::leap-password-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::leap-username", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-username", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::psk", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::psk-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key-type", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-type", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key0", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key0", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key1", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key1", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key2", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key2", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key3", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key3", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-tx-keyidx", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-tx-keyidx", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingWirelessSecurity_ConstructProps)
    _init (config?: SettingWirelessSecurity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWirelessSecurity
    static $gtype: GObject.Type
}
export abstract class ConnectionClass {
    /* Fields of NetworkManager.ConnectionClass */
    parent: GObject.ObjectClass
    secrets_updated: (connection: Connection, setting: string) => void
    static name: string
}
export class IP4Address {
    /* Methods of NetworkManager.IP4Address */
    compare(other: IP4Address): boolean
    dup(): IP4Address
    get_address(): number
    get_gateway(): number
    get_prefix(): number
    ref(): void
    set_address(addr: number): void
    set_gateway(gateway: number): void
    set_prefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP4Address
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP4Address
}
export class IP4Route {
    /* Methods of NetworkManager.IP4Route */
    compare(other: IP4Route): boolean
    dup(): IP4Route
    get_dest(): number
    get_metric(): number
    get_next_hop(): number
    get_prefix(): number
    ref(): void
    set_dest(dest: number): void
    set_metric(metric: number): void
    set_next_hop(next_hop: number): void
    set_prefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP4Route
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP4Route
}
export class IP6Address {
    /* Methods of NetworkManager.IP6Address */
    compare(other: IP6Address): boolean
    dup(): IP6Address
    get_address(): Uint8Array[]
    get_gateway(): Uint8Array[]
    get_prefix(): number
    ref(): void
    set_address(addr?: object | null): void
    set_gateway(gateway?: object | null): void
    set_prefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP6Address
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP6Address
}
export class IP6Route {
    /* Methods of NetworkManager.IP6Route */
    compare(other: IP6Route): boolean
    dup(): IP6Route
    get_dest(): Uint8Array[]
    get_metric(): number
    get_next_hop(): Uint8Array[]
    get_prefix(): number
    ref(): void
    set_dest(dest?: object | null): void
    set_metric(metric: number): void
    set_next_hop(next_hop?: object | null): void
    set_prefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP6Route
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP6Route
}
export abstract class Setting8021xClass {
    /* Fields of NetworkManager.Setting8021xClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingAdslClass {
    /* Fields of NetworkManager.SettingAdslClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingBluetoothClass {
    /* Fields of NetworkManager.SettingBluetoothClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingBondClass {
    /* Fields of NetworkManager.SettingBondClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingBridgeClass {
    /* Fields of NetworkManager.SettingBridgeClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingBridgePortClass {
    /* Fields of NetworkManager.SettingBridgePortClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingCdmaClass {
    /* Fields of NetworkManager.SettingCdmaClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingClass {
    /* Fields of NetworkManager.SettingClass */
    parent: GObject.ObjectClass
    need_secrets: (setting: Setting) => string[]
    update_one_secret: (setting: Setting, key: string, value: any) => number
    get_secret_flags: (setting: Setting, secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags) => boolean
    set_secret_flags: (setting: Setting, secret_name: string, verify_secret: boolean, flags: SettingSecretFlags) => boolean
    compare_property: (setting: Setting, other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags) => boolean
    get_virtual_iface_name: (setting: Setting) => string
    static name: string
}
export abstract class SettingConnectionClass {
    /* Fields of NetworkManager.SettingConnectionClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingDcbClass {
    /* Fields of NetworkManager.SettingDcbClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingGenericClass {
    /* Fields of NetworkManager.SettingGenericClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingGsmClass {
    /* Fields of NetworkManager.SettingGsmClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingIP4ConfigClass {
    /* Fields of NetworkManager.SettingIP4ConfigClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingIP6ConfigClass {
    /* Fields of NetworkManager.SettingIP6ConfigClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingInfinibandClass {
    /* Fields of NetworkManager.SettingInfinibandClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingOlpcMeshClass {
    /* Fields of NetworkManager.SettingOlpcMeshClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingPPPClass {
    /* Fields of NetworkManager.SettingPPPClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingPPPOEClass {
    /* Fields of NetworkManager.SettingPPPOEClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingSerialClass {
    /* Fields of NetworkManager.SettingSerialClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingTeamClass {
    /* Fields of NetworkManager.SettingTeamClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingTeamPortClass {
    /* Fields of NetworkManager.SettingTeamPortClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingVPNClass {
    /* Fields of NetworkManager.SettingVPNClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingVlanClass {
    /* Fields of NetworkManager.SettingVlanClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingWimaxClass {
    /* Fields of NetworkManager.SettingWimaxClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingWiredClass {
    /* Fields of NetworkManager.SettingWiredClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingWirelessClass {
    /* Fields of NetworkManager.SettingWirelessClass */
    parent: SettingClass
    static name: string
}
export abstract class SettingWirelessSecurityClass {
    /* Fields of NetworkManager.SettingWirelessSecurityClass */
    parent: SettingClass
    static name: string
}