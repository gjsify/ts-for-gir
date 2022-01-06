/**
 * NetworkManager-1.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { DBusGLib } from './DBusGLib-1.0';

declare namespace NetworkManager {

enum TODO_80211Mode {
    UNKNOWN,
    ADHOC,
    INFRA,
    AP,
}
enum ActiveConnectionState {
    UNKNOWN,
    ACTIVATING,
    ACTIVATED,
    DEACTIVATING,
    DEACTIVATED,
}
enum ConnectionError {
    UNKNOWNERROR,
    CONNECTIONSETTINGNOTFOUND,
    CONNECTIONTYPEINVALID,
    SETTINGNOTFOUND,
    INVALIDSETTING,
}
enum ConnectivityState {
    UNKNOWN,
    NONE,
    PORTAL,
    LIMITED,
    FULL,
}
enum DeviceState {
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
enum DeviceStateReason {
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
enum DeviceType {
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
enum Setting8021xCKFormat {
    UNKNOWN,
    X509,
    RAW_KEY,
    PKCS12,
}
enum Setting8021xCKScheme {
    UNKNOWN,
    BLOB,
    PATH,
}
enum Setting8021xError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingAdslError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingBluetoothError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    TYPESETTINGNOTFOUND,
}
enum SettingBondError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    INVALIDOPTION,
    MISSINGOPTION,
}
enum SettingBridgeError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingBridgePortError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingCdmaError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSERIALSETTING,
}
enum SettingCompareFlags {
    EXACT,
    FUZZY,
    IGNORE_ID,
    IGNORE_SECRETS,
    IGNORE_AGENT_OWNED_SECRETS,
    IGNORE_NOT_SAVED_SECRETS,
    DIFF_RESULT_WITH_DEFAULT,
    DIFF_RESULT_NO_DEFAULT,
}
enum SettingConnectionError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    TYPESETTINGNOTFOUND,
    IPCONFIGNOTALLOWED,
}
enum SettingDcbError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingDcbFlags {
    NONE,
    ENABLE,
    ADVERTISE,
    WILLING,
}
enum SettingDiffResult {
    UNKNOWN,
    IN_A,
    IN_B,
    IN_A_DEFAULT,
    IN_B_DEFAULT,
}
enum SettingError {
    UNKNOWNERROR,
    PROPERTYNOTFOUND,
    PROPERTYNOTSECRET,
    PROPERTYTYPEMISMATCH,
}
enum SettingGenericError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingGsmError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSERIALSETTING,
}
enum SettingGsmNetworkBand {
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
enum SettingGsmNetworkType {
    ANY,
    UMTS_HSPA,
    GPRS_EDGE,
    PREFER_UMTS_HSPA,
    PREFER_GPRS_EDGE,
    PREFER_4G,
    /* 4G (invalid, starts with a number) */
}
enum SettingHashFlags {
    ALL,
    NO_SECRETS,
    ONLY_SECRETS,
}
enum SettingIP4ConfigError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    NOTALLOWEDFORMETHOD,
}
enum SettingIP6ConfigError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    NOTALLOWEDFORMETHOD,
}
enum SettingIP6ConfigPrivacy {
    UNKNOWN,
    DISABLED,
    PREFER_PUBLIC_ADDR,
    PREFER_TEMP_ADDR,
}
enum SettingInfinibandError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingOlpcMeshError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingPPPError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    REQUIREMPPENOTALLOWED,
}
enum SettingPPPOEError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGPPPSETTING,
}
enum SettingSecretFlags {
    NONE,
    AGENT_OWNED,
    NOT_SAVED,
    NOT_REQUIRED,
}
enum SettingSerialError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGPPPSETTING,
}
enum SettingTeamError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingTeamPortError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingVlanError {
    UNKNOWN,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    INVALIDPARENT,
}
enum SettingVpnError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingWimaxError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingWiredError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingWirelessError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSECURITYSETTING,
    CHANNELREQUIRESBAND,
}
enum SettingWirelessSecurityError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSING8021XSETTING,
    LEAPREQUIRES8021X,
    LEAPREQUIRESUSERNAME,
    SHAREDKEYREQUIRESWEP,
}
enum State {
    UNKNOWN,
    ASLEEP,
    DISCONNECTED,
    DISCONNECTING,
    CONNECTING,
    CONNECTED_LOCAL,
    CONNECTED_SITE,
    CONNECTED_GLOBAL,
}
enum UtilsSecurityType {
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
enum VPNConnectionState {
    UNKNOWN,
    PREPARE,
    NEED_AUTH,
    CONNECT,
    IP_CONFIG_GET,
    ACTIVATED,
    FAILED,
    DISCONNECTED,
}
enum VPNConnectionStateReason {
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
enum VPNPluginFailure {
    LOGIN_FAILED,
    CONNECT_FAILED,
    BAD_IP_CONFIG,
}
enum VPNServiceState {
    UNKNOWN,
    INIT,
    SHUTDOWN,
    STARTING,
    STARTED,
    STOPPING,
    STOPPED,
}
enum VlanFlags {
    REORDER_HEADERS,
    GVRP,
    LOOSE_BINDING,
    MVRP,
}
enum VlanPriorityMap {
    INGRESS_MAP,
    EGRESS_MAP,
}
enum WepKeyType {
    UNKNOWN,
    KEY,
    PASSPHRASE,
    LAST,
}
enum TODO_80211ApFlags {
    NONE,
    PRIVACY,
}
enum TODO_80211ApSecurityFlags {
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
enum BluetoothCapabilities {
    NONE,
    DUN,
    NAP,
}
enum DeviceCapabilities {
    NONE,
    NM_SUPPORTED,
    CARRIER_DETECT,
    IS_SOFTWARE,
}
enum DeviceModemCapabilities {
    NONE,
    POTS,
    CDMA_EVDO,
    GSM_UMTS,
    LTE,
}
enum DeviceWifiCapabilities {
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
function connectionErrorQuark(): GLib.Quark
function setting8021xErrorQuark(): GLib.Quark
function settingAdslErrorQuark(): GLib.Quark
function settingBluetoothErrorQuark(): GLib.Quark
function settingBondErrorQuark(): GLib.Quark
function settingBridgeErrorQuark(): GLib.Quark
function settingBridgePortErrorQuark(): GLib.Quark
function settingCdmaErrorQuark(): GLib.Quark
function settingConnectionErrorQuark(): GLib.Quark
function settingDcbErrorQuark(): GLib.Quark
function settingErrorQuark(): GLib.Quark
function settingGenericErrorQuark(): GLib.Quark
function settingGsmErrorQuark(): GLib.Quark
function settingInfinibandErrorQuark(): GLib.Quark
function settingIp4ConfigErrorQuark(): GLib.Quark
function settingIp6ConfigErrorQuark(): GLib.Quark
function settingOlpcMeshErrorQuark(): GLib.Quark
function settingPppErrorQuark(): GLib.Quark
function settingPppoeErrorQuark(): GLib.Quark
function settingSerialErrorQuark(): GLib.Quark
function settingTeamErrorQuark(): GLib.Quark
function settingTeamPortErrorQuark(): GLib.Quark
function settingVlanErrorQuark(): GLib.Quark
function settingVpnErrorQuark(): GLib.Quark
function settingWimaxErrorQuark(): GLib.Quark
function settingWiredErrorQuark(): GLib.Quark
function settingWirelessErrorQuark(): GLib.Quark
function settingWirelessSecurityErrorQuark(): GLib.Quark
function utilsApModeSecurityValid(type: UtilsSecurityType, wifiCaps: DeviceWifiCapabilities): boolean
function utilsBin2hexstr(bytes: string, len: number, finalLen: number): string
function utilsCheckVirtualDeviceCompatibility(virtualType: GObject.Type, otherType: GObject.Type): boolean
function utilsDeinit(): void
function utilsEscapeSsid(ssid: number, len: number): string
function utilsFileIsPkcs12(filename: string): boolean
function utilsFileSearchInPaths(progname: string, tryFirst: string | null, paths: string | null, fileTestFlags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate): string
function utilsGvalueHashDup(hash: GLib.HashTable): GLib.HashTable
function utilsHex2byte(hex: string): number
function utilsHexstr2bin(hex: string, len: number): string
function utilsHwaddrAtoba(asc: string, type: number): any[]
function utilsHwaddrAton(asc: string, type: number, buffer?: object | null): number
function utilsHwaddrAtonLen(asc: string, buffer: object | null, length: number): number
function utilsHwaddrLen(type: number): number
function utilsHwaddrNtoa(addr: object | null, type: number): string
function utilsHwaddrNtoaLen(addr: object | null, length: number): string
function utilsHwaddrType(len: number): number
function utilsHwaddrValid(asc: string): boolean
function utilsIfaceValidName(name: string): boolean
function utilsInit(): boolean
function utilsIp4AddressesFromGvalue(value: any): IP4Address[]
function utilsIp4AddressesToGvalue(list: IP4Address[], value: any): void
function utilsIp4GetDefaultPrefix(ip: number): number
function utilsIp4NetmaskToPrefix(netmask: number): number
function utilsIp4PrefixToNetmask(prefix: number): number
function utilsIp4RoutesFromGvalue(value: any): IP4Route[]
function utilsIp4RoutesToGvalue(list: IP4Route[], value: any): void
function utilsIp6AddressesFromGvalue(value: any): IP6Address[]
function utilsIp6AddressesToGvalue(list: IP6Address[], value: any): void
function utilsIp6RoutesFromGvalue(value: any): IP6Route[]
function utilsIp6RoutesToGvalue(list: IP6Route[], value: any): void
function utilsIsEmptySsid(ssid: number, len: number): boolean
function utilsIsUuid(str: string): boolean
function utilsRsaKeyEncrypt(data: any[], inPassword?: string | null): { returnType: any[], outPassword: string | null }
function utilsRsaKeyEncryptAes(data: any[], inPassword?: string | null): { returnType: any[], outPassword: string | null }
function utilsSameSsid(ssid1: any[], ssid2: any[], ignoreTrailingNull: boolean): boolean
function utilsSecurityValid(type: UtilsSecurityType, wifiCaps: DeviceWifiCapabilities, haveAp: boolean, adhoc: boolean, apFlags: TODO_80211ApFlags, apWpa: TODO_80211ApSecurityFlags, apRsn: TODO_80211ApSecurityFlags): boolean
function utilsSsidToUtf8(ssid: any[]): string
function utilsUuidGenerate(): string
function utilsUuidGenerateFromString(s: string): string
function utilsWepKeyValid(key: string, wepType: WepKeyType): boolean
function utilsWifiChannelToFreq(channel: number, band: string): number
function utilsWifiFindNextChannel(channel: number, direction: number, band: string): number
function utilsWifiFreqToChannel(freq: number): number
function utilsWifiIsChannelValid(channel: number, band: string): boolean
function utilsWpaPskValid(psk: string): boolean
interface SettingClearSecretsWithFlagsFn {
    (setting: Setting, secret: string, flags: SettingSecretFlags): boolean
}
interface SettingValueIterFn {
    (setting: Setting, key: string, value: any, flags: GObject.ParamFlags): void
}
interface UtilsFileSearchInPathsPredicate {
    (filename: string): boolean
}
interface VPNIterFunc {
    (key: string, value: string): void
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    path?: string
}
class Connection {
    /* Properties of NetworkManager-1.0.NetworkManager.Connection */
    path: string
    /* Fields of NetworkManager-1.0.NetworkManager.Connection */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Connection */
    addSetting(setting: Setting): void
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Connection, flags: SettingCompareFlags): boolean
    diff(b: Connection, flags: SettingCompareFlags, outSettings: GLib.HashTable): boolean
    dump(): void
    duplicate(): Connection
    forEachSettingValue(func: SettingValueIterFn): void
    getConnectionType(): string
    getId(): string
    getInterfaceName(): string
    getPath(): string
    getSetting(settingType: GObject.Type): Setting
    getSetting8021x(): Setting8021x
    getSettingAdsl(): SettingAdsl
    getSettingBluetooth(): SettingBluetooth
    getSettingBond(): SettingBond
    getSettingBridge(): SettingBridge
    getSettingBridgePort(): SettingBridgePort
    getSettingByName(name: string): Setting
    getSettingCdma(): SettingCdma
    getSettingConnection(): SettingConnection
    getSettingDcb(): SettingDcb
    getSettingGeneric(): SettingGeneric
    getSettingGsm(): SettingGsm
    getSettingInfiniband(): SettingInfiniband
    getSettingIp4Config(): SettingIP4Config
    getSettingIp6Config(): SettingIP6Config
    getSettingOlpcMesh(): SettingOlpcMesh
    getSettingPpp(): SettingPPP
    getSettingPppoe(): SettingPPPOE
    getSettingSerial(): SettingSerial
    getSettingTeam(): SettingTeam
    getSettingTeamPort(): SettingTeamPort
    getSettingVlan(): SettingVlan
    getSettingVpn(): SettingVPN
    getSettingWimax(): SettingWimax
    getSettingWired(): SettingWired
    getSettingWireless(): SettingWireless
    getSettingWirelessSecurity(): SettingWirelessSecurity
    getUuid(): string
    getVirtualDeviceDescription(): string
    getVirtualIfaceName(): string
    isType(type: string): boolean
    needSecrets(): { returnType: string, hints: string[] | null }
    normalize(parameters?: GLib.HashTable | null): { returnType: boolean, modified: boolean | null }
    removeSetting(settingType: GObject.Type): void
    replaceSettings(newSettings: GLib.HashTable): boolean
    replaceSettingsFromConnection(newConnection: Connection): boolean
    setPath(path: string): void
    toHash(flags: SettingHashFlags): GLib.HashTable
    updateSecrets(settingName: string, secrets: GLib.HashTable): boolean
    verify(): boolean
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
    /* Signals of NetworkManager-1.0.NetworkManager.Connection */
    connect(sigName: "changed", callback: (($obj: Connection) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "secrets-cleared", callback: (($obj: Connection) => void)): number
    on(sigName: "secrets-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secrets-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secrets-cleared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "secrets-cleared"): void
    connect(sigName: "secrets-updated", callback: (($obj: Connection, settingName: string) => void)): number
    on(sigName: "secrets-updated", callback: (settingName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secrets-updated", callback: (settingName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secrets-updated", callback: (settingName: string) => void): NodeJS.EventEmitter
    emit(sigName: "secrets-updated", settingName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static newFromHash(hash: GLib.HashTable): Connection
    static createSetting(name: string): Setting
    static lookupSettingType(name: string): GObject.Type
    static lookupSettingTypeByQuark(errorQuark: GLib.Quark): GObject.Type
    static $gtype: GObject.Type
}
export interface Setting_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
class Setting {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Setting_ConstructProps)
    _init (config?: Setting_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromHash(settingType: GObject.Type, hash: GLib.HashTable): Setting
    static $gtype: GObject.Type
}
export interface Setting8021x_ConstructProps extends Setting_ConstructProps {
    anonymousIdentity?: string
    caPath?: string
    identity?: string
    pacFile?: string
    password?: string
    passwordFlags?: number
    passwordRawFlags?: number
    phase1FastProvisioning?: string
    phase1Peaplabel?: string
    phase1Peapver?: string
    phase2Auth?: string
    phase2Autheap?: string
    phase2CaPath?: string
    phase2PrivateKeyPassword?: string
    phase2PrivateKeyPasswordFlags?: number
    phase2SubjectMatch?: string
    pin?: string
    pinFlags?: number
    privateKeyPassword?: string
    privateKeyPasswordFlags?: number
    subjectMatch?: string
    systemCaCerts?: boolean
}
class Setting8021x {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting8021x */
    anonymousIdentity: string
    caPath: string
    identity: string
    pacFile: string
    password: string
    passwordFlags: number
    passwordRawFlags: number
    phase1FastProvisioning: string
    phase1Peaplabel: string
    phase1Peapver: string
    phase2Auth: string
    phase2Autheap: string
    phase2CaPath: string
    phase2PrivateKeyPassword: string
    phase2PrivateKeyPasswordFlags: number
    phase2SubjectMatch: string
    pin: string
    pinFlags: number
    privateKeyPassword: string
    privateKeyPasswordFlags: number
    subjectMatch: string
    systemCaCerts: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting8021x */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting8021x */
    addAltsubjectMatch(altsubjectMatch: string): boolean
    addEapMethod(eap: string): boolean
    addPhase2AltsubjectMatch(phase2AltsubjectMatch: string): boolean
    clearAltsubjectMatches(): void
    clearEapMethods(): void
    clearPhase2AltsubjectMatches(): void
    getAltsubjectMatch(i: number): string
    getAnonymousIdentity(): string
    getCaCertBlob(): any[]
    getCaCertPath(): string
    getCaCertScheme(): Setting8021xCKScheme
    getCaPath(): string
    getClientCertBlob(): any[]
    getClientCertPath(): string
    getClientCertScheme(): Setting8021xCKScheme
    getEapMethod(i: number): string
    getIdentity(): string
    getNumAltsubjectMatches(): number
    getNumEapMethods(): number
    getNumPhase2AltsubjectMatches(): number
    getPacFile(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getPasswordRaw(): any[]
    getPasswordRawFlags(): SettingSecretFlags
    getPhase1FastProvisioning(): string
    getPhase1Peaplabel(): string
    getPhase1Peapver(): string
    getPhase2AltsubjectMatch(i: number): string
    getPhase2Auth(): string
    getPhase2Autheap(): string
    getPhase2CaCertBlob(): any[]
    getPhase2CaCertPath(): string
    getPhase2CaCertScheme(): Setting8021xCKScheme
    getPhase2CaPath(): string
    getPhase2ClientCertBlob(): any[]
    getPhase2ClientCertPath(): string
    getPhase2ClientCertScheme(): Setting8021xCKScheme
    getPhase2PrivateKeyBlob(): any[]
    getPhase2PrivateKeyFormat(): Setting8021xCKFormat
    getPhase2PrivateKeyPassword(): string
    getPhase2PrivateKeyPasswordFlags(): SettingSecretFlags
    getPhase2PrivateKeyPath(): string
    getPhase2PrivateKeyScheme(): Setting8021xCKScheme
    getPhase2SubjectMatch(): string
    getPin(): string
    getPinFlags(): SettingSecretFlags
    getPrivateKeyBlob(): any[]
    getPrivateKeyFormat(): Setting8021xCKFormat
    getPrivateKeyPassword(): string
    getPrivateKeyPasswordFlags(): SettingSecretFlags
    getPrivateKeyPath(): string
    getPrivateKeyScheme(): Setting8021xCKScheme
    getSubjectMatch(): string
    getSystemCaCerts(): boolean
    removeAltsubjectMatch(i: number): void
    removeAltsubjectMatchByValue(altsubjectMatch: string): boolean
    removeEapMethod(i: number): void
    removeEapMethodByValue(eap: string): boolean
    removePhase2AltsubjectMatch(i: number): void
    removePhase2AltsubjectMatchByValue(phase2AltsubjectMatch: string): boolean
    setCaCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setClientCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setPhase2CaCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setPhase2ClientCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setPhase2PrivateKey(keyPath: string, password: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setPrivateKey(keyPath: string, password: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous-identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous-identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pac-file", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pac-file", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-raw-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-raw-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-fast-provisioning", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-fast-provisioning", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-peaplabel", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peaplabel", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-peapver", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peapver", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-auth", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-auth", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-autheap", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-autheap", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-ca-certs", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-ca-certs", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Setting8021x_ConstructProps)
    _init (config?: Setting8021x_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Setting8021x
    static $gtype: GObject.Type
}
export interface SettingAdsl_ConstructProps extends Setting_ConstructProps {
    encapsulation?: string
    password?: string
    passwordFlags?: number
    protocol?: string
    username?: string
    vci?: number
    vpi?: number
}
class SettingAdsl {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingAdsl */
    encapsulation: string
    password: string
    passwordFlags: number
    protocol: string
    username: string
    vci: number
    vpi: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingAdsl */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingAdsl */
    getEncapsulation(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getProtocol(): string
    getUsername(): string
    getVci(): number
    getVpi(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::encapsulation", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encapsulation", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vci", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vci", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpi", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpi", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingAdsl_ConstructProps)
    _init (config?: SettingAdsl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingAdsl
    static $gtype: GObject.Type
}
export interface SettingBluetooth_ConstructProps extends Setting_ConstructProps {
    type?: string
}
class SettingBluetooth {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    type: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    getBdaddr(): any[]
    getConnectionType(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingBluetooth_ConstructProps)
    _init (config?: SettingBluetooth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBluetooth
    static $gtype: GObject.Type
}
export interface SettingBond_ConstructProps extends Setting_ConstructProps {
    interfaceName?: string
}
class SettingBond {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBond */
    interfaceName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBond */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBond */
    addOption(name: string, value: string): boolean
    getInterfaceName(): string
    getNumOptions(): number
    getOption(idx: number): { returnType: boolean, outName: string, outValue: string }
    getOptionByName(name: string): string
    getOptionDefault(name: string): string
    getValidOptions(): string[]
    removeOption(name: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::interface-name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingBond_ConstructProps)
    _init (config?: SettingBond_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBond
    static validateOption(name: string, value: string): boolean
    static $gtype: GObject.Type
}
export interface SettingBridge_ConstructProps extends Setting_ConstructProps {
    ageingTime?: number
    forwardDelay?: number
    helloTime?: number
    interfaceName?: string
    maxAge?: number
    priority?: number
    stp?: boolean
}
class SettingBridge {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBridge */
    ageingTime: number
    forwardDelay: number
    helloTime: number
    interfaceName: string
    maxAge: number
    priority: number
    stp: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridge */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBridge */
    getAgeingTime(): number
    getForwardDelay(): number
    getHelloTime(): number
    getInterfaceName(): string
    getMacAddress(): any[]
    getMaxAge(): number
    getPriority(): number
    getStp(): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ageing-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ageing-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forward-delay", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forward-delay", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hello-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hello-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-age", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stp", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stp", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingBridge_ConstructProps)
    _init (config?: SettingBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBridge
    static $gtype: GObject.Type
}
export interface SettingBridgePort_ConstructProps extends Setting_ConstructProps {
    hairpinMode?: boolean
    pathCost?: number
    priority?: number
}
class SettingBridgePort {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    hairpinMode: boolean
    pathCost: number
    priority: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    getHairpinMode(): boolean
    getPathCost(): number
    getPriority(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hairpin-mode", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hairpin-mode", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path-cost", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-cost", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingBridgePort_ConstructProps)
    _init (config?: SettingBridgePort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBridgePort
    static $gtype: GObject.Type
}
export interface SettingCdma_ConstructProps extends Setting_ConstructProps {
    number?: string
    password?: string
    passwordFlags?: number
    username?: string
}
class SettingCdma {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingCdma */
    number: string
    password: string
    passwordFlags: number
    username: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingCdma */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingCdma */
    getNumber(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::number", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingCdma_ConstructProps)
    _init (config?: SettingCdma_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingCdma
    static $gtype: GObject.Type
}
export interface SettingConnection_ConstructProps extends Setting_ConstructProps {
    autoconnect?: boolean
    gatewayPingTimeout?: number
    id?: string
    interfaceName?: string
    master?: string
    readOnly?: boolean
    slaveType?: string
    timestamp?: number
    type?: string
    uuid?: string
    zone?: string
}
class SettingConnection {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingConnection */
    autoconnect: boolean
    gatewayPingTimeout: number
    id: string
    interfaceName: string
    master: string
    readOnly: boolean
    slaveType: string
    timestamp: number
    type: string
    uuid: string
    zone: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingConnection */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingConnection */
    addPermission(ptype: string, pitem: string, detail?: string | null): boolean
    addSecondary(secUuid: string): boolean
    getAutoconnect(): boolean
    getConnectionType(): string
    getGatewayPingTimeout(): number
    getId(): string
    getInterfaceName(): string
    getMaster(): string
    getNumPermissions(): number
    getNumSecondaries(): number
    getPermission(idx: number, outPtype: string, outPitem: string, outDetail: string): boolean
    getReadOnly(): boolean
    getSecondary(idx: number): string
    getSlaveType(): string
    getTimestamp(): number
    getUuid(): string
    getZone(): string
    isSlaveType(type: string): boolean
    permissionsUserAllowed(uname: string): boolean
    removePermission(idx: number): void
    removePermissionByValue(ptype: string, pitem: string, detail?: string | null): boolean
    removeSecondary(idx: number): void
    removeSecondaryByValue(secUuid: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::autoconnect", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gateway-ping-timeout", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway-ping-timeout", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slave-type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zone", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zone", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingConnection_ConstructProps)
    _init (config?: SettingConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingConnection
    static $gtype: GObject.Type
}
export interface SettingDcb_ConstructProps extends Setting_ConstructProps {
    appFcoeFlags?: number
    appFcoeMode?: string
    appFcoePriority?: number
    appFipFlags?: number
    appFipPriority?: number
    appIscsiFlags?: number
    appIscsiPriority?: number
    priorityFlowControlFlags?: number
    priorityGroupFlags?: number
}
class SettingDcb {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingDcb */
    appFcoeFlags: number
    appFcoeMode: string
    appFcoePriority: number
    appFipFlags: number
    appFipPriority: number
    appIscsiFlags: number
    appIscsiPriority: number
    priorityFlowControlFlags: number
    priorityGroupFlags: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingDcb */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingDcb */
    getAppFcoeFlags(): SettingDcbFlags
    getAppFcoeMode(): string
    getAppFcoePriority(): number
    getAppFipFlags(): SettingDcbFlags
    getAppFipPriority(): number
    getAppIscsiFlags(): SettingDcbFlags
    getAppIscsiPriority(): number
    getPriorityBandwidth(userPriority: number): number
    getPriorityFlowControl(userPriority: number): boolean
    getPriorityFlowControlFlags(): SettingDcbFlags
    getPriorityGroupBandwidth(groupId: number): number
    getPriorityGroupFlags(): SettingDcbFlags
    getPriorityGroupId(userPriority: number): number
    getPriorityStrictBandwidth(userPriority: number): boolean
    getPriorityTrafficClass(userPriority: number): number
    setPriorityBandwidth(userPriority: number, bandwidthPercent: number): void
    setPriorityFlowControl(userPriority: number, enabled: boolean): void
    setPriorityGroupBandwidth(groupId: number, bandwidthPercent: number): void
    setPriorityGroupId(userPriority: number, groupId: number): void
    setPriorityStrictBandwidth(userPriority: number, strict: boolean): void
    setPriorityTrafficClass(userPriority: number, trafficClass: number): void
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-fcoe-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fcoe-mode", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-mode", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fcoe-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fip-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fip-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-iscsi-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-iscsi-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-flow-control-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-flow-control-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-group-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-group-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingDcb_ConstructProps)
    _init (config?: SettingDcb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingDcb
    static $gtype: GObject.Type
}
export interface SettingGeneric_ConstructProps extends Setting_ConstructProps {
}
class SettingGeneric {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGeneric */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingGeneric_ConstructProps)
    _init (config?: SettingGeneric_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingGeneric
    static $gtype: GObject.Type
}
export interface SettingGsm_ConstructProps extends Setting_ConstructProps {
    allowedBands?: number
    apn?: string
    homeOnly?: boolean
    networkId?: string
    networkType?: number
    number?: string
    password?: string
    passwordFlags?: number
    pin?: string
    pinFlags?: number
    username?: string
}
class SettingGsm {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingGsm */
    allowedBands: number
    apn: string
    homeOnly: boolean
    networkId: string
    networkType: number
    number: string
    password: string
    passwordFlags: number
    pin: string
    pinFlags: number
    username: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGsm */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingGsm */
    getAllowedBands(): number
    getApn(): string
    getHomeOnly(): boolean
    getNetworkId(): string
    getNetworkType(): number
    getNumber(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getPin(): string
    getPinFlags(): SettingSecretFlags
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-bands", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-bands", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::apn", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apn", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-only", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-only", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-id", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-id", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-type", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingGsm_ConstructProps)
    _init (config?: SettingGsm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingGsm
    static $gtype: GObject.Type
}
export interface SettingIP4Config_ConstructProps extends Setting_ConstructProps {
    dhcpClientId?: string
    dhcpHostname?: string
    dhcpSendHostname?: boolean
    dhcpTimeout?: number
    ignoreAutoDns?: boolean
    ignoreAutoRoutes?: boolean
    mayFail?: boolean
    method?: string
    neverDefault?: boolean
    routeMetric?: number
}
class SettingIP4Config {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    dhcpClientId: string
    dhcpHostname: string
    dhcpSendHostname: boolean
    dhcpTimeout: number
    ignoreAutoDns: boolean
    ignoreAutoRoutes: boolean
    mayFail: boolean
    method: string
    neverDefault: boolean
    routeMetric: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    addAddress(address: IP4Address): boolean
    addDns(dns: number): boolean
    addDnsSearch(dnsSearch: string): boolean
    addRoute(route: IP4Route): boolean
    clearAddresses(): void
    clearDns(): void
    clearDnsSearches(): void
    clearRoutes(): void
    getAddress(i: number): IP4Address
    getDhcpClientId(): string
    getDhcpHostname(): string
    getDhcpSendHostname(): boolean
    getDhcpTimeout(): number
    getDns(i: number): number
    getDnsSearch(i: number): string
    getIgnoreAutoDns(): boolean
    getIgnoreAutoRoutes(): boolean
    getMayFail(): boolean
    getMethod(): string
    getNeverDefault(): boolean
    getNumAddresses(): number
    getNumDns(): number
    getNumDnsSearches(): number
    getNumRoutes(): number
    getRoute(i: number): IP4Route
    getRouteMetric(): number
    removeAddress(i: number): void
    removeAddressByValue(address: IP4Address): boolean
    removeDns(i: number): void
    removeDnsByValue(dns: number): boolean
    removeDnsSearch(i: number): void
    removeDnsSearchByValue(dnsSearch: string): boolean
    removeRoute(i: number): void
    removeRouteByValue(route: IP4Route): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-client-id", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-client-id", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-send-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-send-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-timeout", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-timeout", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::may-fail", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::never-default", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::route-metric", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingIP4Config_ConstructProps)
    _init (config?: SettingIP4Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingIP4Config
    static $gtype: GObject.Type
}
export interface SettingIP6Config_ConstructProps extends Setting_ConstructProps {
    dhcpHostname?: string
    ignoreAutoDns?: boolean
    ignoreAutoRoutes?: boolean
    ip6Privacy?: number
    mayFail?: boolean
    method?: string
    neverDefault?: boolean
    routeMetric?: number
}
class SettingIP6Config {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    dhcpHostname: string
    ignoreAutoDns: boolean
    ignoreAutoRoutes: boolean
    ip6Privacy: number
    mayFail: boolean
    method: string
    neverDefault: boolean
    routeMetric: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    addAddress(address: IP6Address): boolean
    addDns(dns?: object | null): boolean
    addDnsSearch(dnsSearch: string): boolean
    addRoute(route: IP6Route): boolean
    clearAddresses(): void
    clearDns(): void
    clearDnsSearches(): void
    clearRoutes(): void
    getAddress(i: number): IP6Address
    getDhcpHostname(): string
    getDns(i: number): object | null
    getDnsSearch(i: number): string
    getIgnoreAutoDns(): boolean
    getIgnoreAutoRoutes(): boolean
    getIp6Privacy(): SettingIP6ConfigPrivacy
    getMayFail(): boolean
    getMethod(): string
    getNeverDefault(): boolean
    getNumAddresses(): number
    getNumDns(): number
    getNumDnsSearches(): number
    getNumRoutes(): number
    getRoute(i: number): IP6Route
    getRouteMetric(): number
    removeAddress(i: number): void
    removeAddressByValue(address: IP6Address): boolean
    removeDns(i: number): void
    removeDnsByValue(dns?: object | null): boolean
    removeDnsSearch(i: number): void
    removeDnsSearchByValue(dnsSearch: string): boolean
    removeRoute(i: number): void
    removeRouteByValue(route: IP6Route): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-privacy", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-privacy", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::may-fail", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::never-default", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::route-metric", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingIP6Config_ConstructProps)
    _init (config?: SettingIP6Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingIP6Config
    static $gtype: GObject.Type
}
export interface SettingInfiniband_ConstructProps extends Setting_ConstructProps {
    mtu?: number
    pKey?: number
    parent?: string
    transportMode?: string
}
class SettingInfiniband {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingInfiniband */
    mtu: number
    pKey: number
    parent: string
    transportMode: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingInfiniband */
    getMacAddress(): any[]
    getMtu(): number
    getPKey(): number
    getParent(): string
    getTransportMode(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mtu", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::p-key", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::p-key", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-mode", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingInfiniband_ConstructProps)
    _init (config?: SettingInfiniband_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingInfiniband
    static $gtype: GObject.Type
}
export interface SettingOlpcMesh_ConstructProps extends Setting_ConstructProps {
    channel?: number
}
class SettingOlpcMesh {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    channel: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    getChannel(): number
    getDhcpAnycastAddress(): any[]
    getSsid(): any[]
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::channel", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingOlpcMesh_ConstructProps)
    _init (config?: SettingOlpcMesh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingOlpcMesh
    static $gtype: GObject.Type
}
export interface SettingPPP_ConstructProps extends Setting_ConstructProps {
    baud?: number
    crtscts?: boolean
    lcpEchoFailure?: number
    lcpEchoInterval?: number
    mppeStateful?: boolean
    mru?: number
    mtu?: number
    noVjComp?: boolean
    noauth?: boolean
    nobsdcomp?: boolean
    nodeflate?: boolean
    refuseChap?: boolean
    refuseEap?: boolean
    refuseMschap?: boolean
    refuseMschapv2?: boolean
    refusePap?: boolean
    requireMppe?: boolean
    requireMppe128?: boolean
}
class SettingPPP {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingPPP */
    baud: number
    crtscts: boolean
    lcpEchoFailure: number
    lcpEchoInterval: number
    mppeStateful: boolean
    mru: number
    mtu: number
    noVjComp: boolean
    noauth: boolean
    nobsdcomp: boolean
    nodeflate: boolean
    refuseChap: boolean
    refuseEap: boolean
    refuseMschap: boolean
    refuseMschapv2: boolean
    refusePap: boolean
    requireMppe: boolean
    requireMppe128: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPP */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingPPP */
    getBaud(): number
    getCrtscts(): boolean
    getLcpEchoFailure(): number
    getLcpEchoInterval(): number
    getMppeStateful(): boolean
    getMru(): number
    getMtu(): number
    getNoVjComp(): boolean
    getNoauth(): boolean
    getNobsdcomp(): boolean
    getNodeflate(): boolean
    getRefuseChap(): boolean
    getRefuseEap(): boolean
    getRefuseMschap(): boolean
    getRefuseMschapv2(): boolean
    getRefusePap(): boolean
    getRequireMppe(): boolean
    getRequireMppe128(): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::crtscts", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crtscts", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lcp-echo-failure", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-failure", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lcp-echo-interval", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-interval", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mppe-stateful", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mppe-stateful", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mru", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mru", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-vj-comp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-vj-comp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::noauth", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noauth", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nobsdcomp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nobsdcomp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nodeflate", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeflate", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-chap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-chap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-eap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-eap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-mschap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-mschapv2", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschapv2", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-pap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-pap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-mppe", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-mppe-128", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe-128", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingPPP_ConstructProps)
    _init (config?: SettingPPP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingPPP
    static $gtype: GObject.Type
}
export interface SettingPPPOE_ConstructProps extends Setting_ConstructProps {
    password?: string
    passwordFlags?: number
    service?: string
    username?: string
}
class SettingPPPOE {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    password: string
    passwordFlags: number
    service: string
    username: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getService(): string
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::password", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
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
    sendDelay?: number
    stopbits?: number
}
class SettingSerial {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingSerial */
    baud: number
    bits: number
    parity: number
    sendDelay: number
    stopbits: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingSerial */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingSerial */
    getBaud(): number
    getBits(): number
    getParity(): number
    getSendDelay(): number
    getStopbits(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parity", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parity", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::send-delay", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::send-delay", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stopbits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stopbits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingSerial_ConstructProps)
    _init (config?: SettingSerial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingSerial
    static $gtype: GObject.Type
}
export interface SettingTeam_ConstructProps extends Setting_ConstructProps {
    config?: string
    interfaceName?: string
}
class SettingTeam {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingTeam */
    config: string
    interfaceName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeam */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingTeam */
    getConfig(): string
    getInterfaceName(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingTeam_ConstructProps)
    _init (config?: SettingTeam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingTeam
    static $gtype: GObject.Type
}
export interface SettingTeamPort_ConstructProps extends Setting_ConstructProps {
    config?: string
}
class SettingTeamPort {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    config: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    getConfig(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingTeamPort_ConstructProps)
    _init (config?: SettingTeamPort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingTeamPort
    static $gtype: GObject.Type
}
export interface SettingVPN_ConstructProps extends Setting_ConstructProps {
    persistent?: boolean
    serviceType?: string
    userName?: string
}
class SettingVPN {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingVPN */
    persistent: boolean
    serviceType: string
    userName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVPN */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingVPN */
    addDataItem(key: string, item: string): void
    addSecret(key: string, secret: string): void
    foreachDataItem(func: VPNIterFunc): void
    foreachSecret(func: VPNIterFunc): void
    getDataItem(key: string): string
    getNumDataItems(): number
    getNumSecrets(): number
    getPersistent(): boolean
    getSecret(key: string): string
    getServiceType(): string
    getUserName(): string
    removeDataItem(key: string): boolean
    removeSecret(key: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::persistent", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-type", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingVPN_ConstructProps)
    _init (config?: SettingVPN_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingVPN
    static $gtype: GObject.Type
}
export interface SettingVlan_ConstructProps extends Setting_ConstructProps {
    flags?: number
    id?: number
    interfaceName?: string
    parent?: string
}
class SettingVlan {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingVlan */
    flags: number
    id: number
    interfaceName: string
    parent: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingVlan */
    addPriority(map: VlanPriorityMap, from: number, to: number): boolean
    addPriorityStr(map: VlanPriorityMap, str: string): boolean
    clearPriorities(map: VlanPriorityMap): void
    getFlags(): number
    getId(): number
    getInterfaceName(): string
    getNumPriorities(map: VlanPriorityMap): number
    getParent(): string
    getPriority(map: VlanPriorityMap, idx: number): { returnType: boolean, outFrom: number, outTo: number }
    removePriority(map: VlanPriorityMap, idx: number): void
    removePriorityByValue(map: VlanPriorityMap, from: number, to: number): boolean
    removePriorityStrByValue(map: VlanPriorityMap, str: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingVlan_ConstructProps)
    _init (config?: SettingVlan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingVlan
    static $gtype: GObject.Type
}
export interface SettingWimax_ConstructProps extends Setting_ConstructProps {
    networkName?: string
}
class SettingWimax {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWimax */
    networkName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWimax */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWimax */
    getMacAddress(): any[]
    getNetworkName(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingWimax_ConstructProps)
    _init (config?: SettingWimax_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWimax
    static $gtype: GObject.Type
}
export interface SettingWired_ConstructProps extends Setting_ConstructProps {
    autoNegotiate?: boolean
    duplex?: string
    mtu?: number
    port?: string
    s390Nettype?: string
    speed?: number
}
class SettingWired {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWired */
    autoNegotiate: boolean
    duplex: string
    mtu: number
    port: string
    s390Nettype: string
    speed: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWired */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWired */
    addMacBlacklistItem(mac: string): boolean
    addS390Option(key: string, value: string): boolean
    clearMacBlacklistItems(): void
    getAutoNegotiate(): boolean
    getClonedMacAddress(): any[]
    getDuplex(): string
    getMacAddress(): any[]
    getMacAddressBlacklist(): any[]
    getMacBlacklistItem(idx: number): string
    getMtu(): number
    getNumMacBlacklistItems(): number
    getNumS390Options(): number
    getPort(): string
    getS390Nettype(): string
    getS390Option(idx: number): { returnType: boolean, outKey: string, outValue: string }
    getS390OptionByKey(key: string): string
    getS390Subchannels(): string[]
    getSpeed(): number
    getValidS390Options(): string[]
    removeMacBlacklistItem(idx: number): void
    removeMacBlacklistItemByValue(mac: string): boolean
    removeS390Option(key: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-negotiate", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-negotiate", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duplex", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duplex", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::s390-nettype", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::s390-nettype", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
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
    txPower?: number
}
class SettingWireless {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWireless */
    band: string
    channel: number
    hidden: boolean
    mode: string
    mtu: number
    powersave: number
    rate: number
    security: string
    txPower: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWireless */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWireless */
    addMacBlacklistItem(mac: string): boolean
    addSeenBssid(bssid: string): boolean
    apSecurityCompatible(sWirelessSec: SettingWirelessSecurity, apFlags: TODO_80211ApFlags, apWpa: TODO_80211ApSecurityFlags, apRsn: TODO_80211ApSecurityFlags, apMode: TODO_80211Mode): boolean
    clearMacBlacklistItems(): void
    getBand(): string
    getBssid(): any[]
    getChannel(): number
    getClonedMacAddress(): any[]
    getHidden(): boolean
    getMacAddress(): any[]
    getMacAddressBlacklist(): any[]
    getMacBlacklistItem(idx: number): string
    getMode(): string
    getMtu(): number
    getNumMacBlacklistItems(): number
    getNumSeenBssids(): number
    getPowersave(): number
    getRate(): number
    getSecurity(): string
    getSeenBssid(i: number): string
    getSsid(): any[]
    getTxPower(): number
    removeMacBlacklistItem(idx: number): void
    removeMacBlacklistItemByValue(mac: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::band", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::band", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hidden", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::powersave", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::powersave", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tx-power", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tx-power", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingWireless_ConstructProps)
    _init (config?: SettingWireless_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWireless
    static $gtype: GObject.Type
}
export interface SettingWirelessSecurity_ConstructProps extends Setting_ConstructProps {
    authAlg?: string
    keyMgmt?: string
    leapPassword?: string
    leapPasswordFlags?: number
    leapUsername?: string
    psk?: string
    pskFlags?: number
    wepKeyFlags?: number
    wepKeyType?: number
    wepKey0?: string
    wepKey1?: string
    wepKey2?: string
    wepKey3?: string
    wepTxKeyidx?: number
}
class SettingWirelessSecurity {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    authAlg: string
    keyMgmt: string
    leapPassword: string
    leapPasswordFlags: number
    leapUsername: string
    psk: string
    pskFlags: number
    wepKeyFlags: number
    wepKeyType: number
    wepKey0: string
    wepKey1: string
    wepKey2: string
    wepKey3: string
    wepTxKeyidx: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    parent: Setting
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    addGroup(group: string): boolean
    addPairwise(pairwise: string): boolean
    addProto(proto: string): boolean
    clearGroups(): void
    clearPairwise(): void
    clearProtos(): void
    getAuthAlg(): string
    getGroup(i: number): string
    getKeyMgmt(): string
    getLeapPassword(): string
    getLeapPasswordFlags(): SettingSecretFlags
    getLeapUsername(): string
    getNumGroups(): number
    getNumPairwise(): number
    getNumProtos(): number
    getPairwise(i: number): string
    getProto(i: number): string
    getPsk(): string
    getPskFlags(): SettingSecretFlags
    getWepKey(idx: number): string
    getWepKeyFlags(): SettingSecretFlags
    getWepKeyType(): WepKeyType
    getWepTxKeyidx(): number
    removeGroup(i: number): void
    removeGroupByValue(group: string): boolean
    removePairwise(i: number): void
    removePairwiseByValue(pairwise: string): boolean
    removeProto(i: number): void
    removeProtoByValue(proto: string): boolean
    setWepKey(idx: number, key: string): void
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): { returnType: boolean, results: GLib.HashTable }
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: "notify", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-alg", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-alg", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-mgmt", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-mgmt", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-password", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-password-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-username", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-username", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::psk", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::psk-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key-type", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-type", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key0", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key0", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key1", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key1", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key2", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key2", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key3", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key3", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-tx-keyidx", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-tx-keyidx", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingWirelessSecurity_ConstructProps)
    _init (config?: SettingWirelessSecurity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWirelessSecurity
    static $gtype: GObject.Type
}
abstract class ConnectionClass {
    /* Fields of NetworkManager-1.0.NetworkManager.ConnectionClass */
    parent: GObject.ObjectClass
    secretsUpdated: (connection: Connection, setting: string) => void
    static name: string
}
class IP4Address {
    /* Methods of NetworkManager-1.0.NetworkManager.IP4Address */
    compare(other: IP4Address): boolean
    dup(): IP4Address
    getAddress(): number
    getGateway(): number
    getPrefix(): number
    ref(): void
    setAddress(addr: number): void
    setGateway(gateway: number): void
    setPrefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP4Address
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP4Address
}
class IP4Route {
    /* Methods of NetworkManager-1.0.NetworkManager.IP4Route */
    compare(other: IP4Route): boolean
    dup(): IP4Route
    getDest(): number
    getMetric(): number
    getNextHop(): number
    getPrefix(): number
    ref(): void
    setDest(dest: number): void
    setMetric(metric: number): void
    setNextHop(nextHop: number): void
    setPrefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP4Route
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP4Route
}
class IP6Address {
    /* Methods of NetworkManager-1.0.NetworkManager.IP6Address */
    compare(other: IP6Address): boolean
    dup(): IP6Address
    getAddress(): any[]
    getGateway(): any[]
    getPrefix(): number
    ref(): void
    setAddress(addr?: object | null): void
    setGateway(gateway?: object | null): void
    setPrefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP6Address
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP6Address
}
class IP6Route {
    /* Methods of NetworkManager-1.0.NetworkManager.IP6Route */
    compare(other: IP6Route): boolean
    dup(): IP6Route
    getDest(): any[]
    getMetric(): number
    getNextHop(): any[]
    getPrefix(): number
    ref(): void
    setDest(dest?: object | null): void
    setMetric(metric: number): void
    setNextHop(nextHop?: object | null): void
    setPrefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP6Route
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP6Route
}
abstract class Setting8021xClass {
    /* Fields of NetworkManager-1.0.NetworkManager.Setting8021xClass */
    parent: SettingClass
    static name: string
}
abstract class SettingAdslClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingAdslClass */
    parent: SettingClass
    static name: string
}
abstract class SettingBluetoothClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBluetoothClass */
    parent: SettingClass
    static name: string
}
abstract class SettingBondClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBondClass */
    parent: SettingClass
    static name: string
}
abstract class SettingBridgeClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgeClass */
    parent: SettingClass
    static name: string
}
abstract class SettingBridgePortClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgePortClass */
    parent: SettingClass
    static name: string
}
abstract class SettingCdmaClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingCdmaClass */
    parent: SettingClass
    static name: string
}
abstract class SettingClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingClass */
    parent: GObject.ObjectClass
    needSecrets: (setting: Setting) => string[]
    updateOneSecret: (setting: Setting, key: string, value: any) => number
    getSecretFlags: (setting: Setting, secretName: string, verifySecret: boolean, outFlags: SettingSecretFlags) => boolean
    setSecretFlags: (setting: Setting, secretName: string, verifySecret: boolean, flags: SettingSecretFlags) => boolean
    compareProperty: (setting: Setting, other: Setting, propSpec: GObject.ParamSpec, flags: SettingCompareFlags) => boolean
    getVirtualIfaceName: (setting: Setting) => string
    static name: string
}
abstract class SettingConnectionClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingConnectionClass */
    parent: SettingClass
    static name: string
}
abstract class SettingDcbClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingDcbClass */
    parent: SettingClass
    static name: string
}
abstract class SettingGenericClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGenericClass */
    parent: SettingClass
    static name: string
}
abstract class SettingGsmClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGsmClass */
    parent: SettingClass
    static name: string
}
abstract class SettingIP4ConfigClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP4ConfigClass */
    parent: SettingClass
    static name: string
}
abstract class SettingIP6ConfigClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP6ConfigClass */
    parent: SettingClass
    static name: string
}
abstract class SettingInfinibandClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingInfinibandClass */
    parent: SettingClass
    static name: string
}
abstract class SettingOlpcMeshClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingOlpcMeshClass */
    parent: SettingClass
    static name: string
}
abstract class SettingPPPClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPClass */
    parent: SettingClass
    static name: string
}
abstract class SettingPPPOEClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPOEClass */
    parent: SettingClass
    static name: string
}
abstract class SettingSerialClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingSerialClass */
    parent: SettingClass
    static name: string
}
abstract class SettingTeamClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamClass */
    parent: SettingClass
    static name: string
}
abstract class SettingTeamPortClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamPortClass */
    parent: SettingClass
    static name: string
}
abstract class SettingVPNClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVPNClass */
    parent: SettingClass
    static name: string
}
abstract class SettingVlanClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVlanClass */
    parent: SettingClass
    static name: string
}
abstract class SettingWimaxClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWimaxClass */
    parent: SettingClass
    static name: string
}
abstract class SettingWiredClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWiredClass */
    parent: SettingClass
    static name: string
}
abstract class SettingWirelessClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessClass */
    parent: SettingClass
    static name: string
}
abstract class SettingWirelessSecurityClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessSecurityClass */
    parent: SettingClass
    static name: string
}
}
export default NetworkManager