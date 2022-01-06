/**
 * Mbim-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Mbim {

enum AccessMediaType {
    UNKNOWN,
    /* 3GPP (invalid, starts with a number) */
    /* 3GPP_PREFERRED (invalid, starts with a number) */
}
enum ActivationCommand {
    DEACTIVATE,
    ACTIVATE,
}
enum ActivationState {
    UNKNOWN,
    ACTIVATED,
    ACTIVATING,
    DEACTIVATED,
    DEACTIVATING,
}
enum AtdsProviderPlmnMode {
    GSM,
    UTRAN,
    LTE,
}
enum AtdsRatMode {
    AUTOMATIC,
    /* 2G_ONLY (invalid, starts with a number) */
    /* 3G_ONLY (invalid, starts with a number) */
    /* 4G_ONLY (invalid, starts with a number) */
}
enum AuthProtocol {
    NONE,
    PAP,
    CHAP,
    MSCHAPV2,
}
enum CidAtds {
    UNKNOWN,
    SIGNAL,
    LOCATION,
    OPERATORS,
    RAT,
    REGISTER_STATE,
}
enum CidAuth {
    UNKNOWN,
    AKA,
    AKAP,
    SIM,
}
enum CidBasicConnect {
    UNKNOWN,
    DEVICE_CAPS,
    SUBSCRIBER_READY_STATUS,
    RADIO_STATE,
    PIN,
    PIN_LIST,
    HOME_PROVIDER,
    PREFERRED_PROVIDERS,
    VISIBLE_PROVIDERS,
    REGISTER_STATE,
    PACKET_SERVICE,
    SIGNAL_STATE,
    CONNECT,
    PROVISIONED_CONTEXTS,
    SERVICE_ACTIVATION,
    IP_CONFIGURATION,
    DEVICE_SERVICES,
    DEVICE_SERVICE_SUBSCRIBE_LIST,
    PACKET_STATISTICS,
    NETWORK_IDLE_HINT,
    EMERGENCY_MODE,
    IP_PACKET_FILTERS,
    MULTICARRIER_PROVIDERS,
}
enum CidDss {
    UNKNOWN,
    CONNECT,
}
enum CidIntelFirmwareUpdate {
    UNKNOWN,
    MODEM_REBOOT,
}
enum CidMsBasicConnectExtensions {
    UNKNOWN,
    PROVISIONED_CONTEXTS,
    NETWORK_DENYLIST,
    LTE_ATTACH_CONFIGURATION,
    LTE_ATTACH_INFO,
    SYS_CAPS,
    DEVICE_CAPS,
    DEVICE_SLOT_MAPPINGS,
    SLOT_INFO_STATUS,
    PCO,
    DEVICE_RESET,
    BASE_STATIONS_INFO,
    LOCATION_INFO_STATUS,
    VERSION,
    MODEM_CONFIGURATION,
    REGISTRATION_PARAMETERS,
    WAKE_REASON,
}
enum CidMsFirmwareId {
    UNKNOWN,
    GET,
}
enum CidMsHostShutdown {
    UNKNOWN,
    NOTIFY,
}
enum CidMsSar {
    UNKNOWN,
    CONFIG,
    TRANSMISSION_STATUS,
}
enum CidMsUiccLowLevelAccess {
    UNKNOWN,
    ATR,
    OPEN_CHANNEL,
    CLOSE_CHANNEL,
    APDU,
    TERMINAL_CAPABILITY,
    RESET,
}
enum CidPhonebook {
    UNKNOWN,
    CONFIGURATION,
    READ,
    DELETE,
    WRITE,
}
enum CidProxyControl {
    UNKNOWN,
    CONFIGURATION,
    VERSION,
}
enum CidQdu {
    UNKNOWN,
    UPDATE_SESSION,
    FILE_OPEN,
    FILE_WRITE,
}
enum CidQmi {
    UNKNOWN,
    MSG,
}
enum CidQuectel {
    UNKNOWN,
    RADIO_STATE,
}
enum CidSms {
    UNKNOWN,
    CONFIGURATION,
    READ,
    SEND,
    DELETE,
    MESSAGE_STORE_STATUS,
}
enum CidStk {
    UNKNOWN,
    PAC,
    TERMINAL_RESPONSE,
    ENVELOPE,
}
enum CidUssd {
    USSD_UNKNOWN,
    USSD,
}
enum Compression {
    NONE,
    ENABLE,
}
enum ContextIpType {
    DEFAULT,
    IPV4,
    IPV6,
    IPV4V6,
    IPV4_AND_IPV6,
}
enum ContextMediaType {
    CELLULAR_ONLY,
    WIFI_ONLY,
    ALL,
}
enum ContextOperation {
    DEFAULT,
    DELETE,
    RESTORE_FACTORY,
}
enum ContextRoamingControl {
    HOME_ONLY,
    PARTNER_ONLY,
    NON_PARTNER_ONLY,
    HOME_AND_PARTNER,
    HOME_AND_NON_PARTNER,
    PARTNER_AND_NON_PARTNER,
    ALLOW_ALL,
}
enum ContextSource {
    ADMIN,
    USER,
    OPERATOR,
    MODEM,
    DEVICE,
}
enum ContextState {
    DISABLED,
    ENABLED,
}
enum ContextType {
    INVALID,
    NONE,
    INTERNET,
    VPN,
    VOICE,
    VIDEO_SHARE,
    PURCHASE,
    IMS,
    MMS,
    LOCAL,
    ADMIN,
    APP,
    XCAP,
    TETHERING,
    EMERGENCY_CALLING,
}
enum CoreError {
    FAILED,
    WRONGSTATE,
    TIMEOUT,
    INVALIDARGS,
    INVALIDMESSAGE,
    UNSUPPORTED,
    ABORTED,
    UNKNOWNSTATE,
}
enum DefaultPduActivationHint {
    UNLIKELY,
    LIKELY,
}
enum DeviceType {
    UNKNOWN,
    EMBEDDED,
    REMOVABLE,
    REMOTE,
}
enum DrxCycle {
    NOT_SPECIFIED,
    NOT_SUPPORTED,
    /* 32 (invalid, starts with a number) */
    /* 64 (invalid, starts with a number) */
    /* 128 (invalid, starts with a number) */
    /* 256 (invalid, starts with a number) */
}
enum DssLinkState {
    DEACTIVATE,
    ACTIVATE,
}
enum EmergencyModeState {
    OFF,
    ON,
}
enum LadnInfo {
    NOT_NEEDED,
    REQUESTED,
}
enum LteAttachContextOperation {
    DEFAULT,
    RESTORE_FACTORY,
}
enum LteAttachContextRoamingControl {
    HOME,
    PARTNER,
    NON_PARTNER,
}
enum LteAttachState {
    DETACHED,
    ATTACHED,
}
enum MessageCommandType {
    UNKNOWN,
    QUERY,
    SET,
}
enum MessageType {
    INVALID,
    OPEN,
    CLOSE,
    COMMAND,
    HOST_ERROR,
    OPEN_DONE,
    CLOSE_DONE,
    COMMAND_DONE,
    FUNCTION_ERROR,
    INDICATE_STATUS,
}
enum MicoMode {
    DISABLED,
    ENABLED,
    UNSUPPORTED,
    DEFAULT,
}
enum ModemConfigurationStatus {
    UNKNOWN,
    STARTED,
    COMPLETED,
}
enum NetworkIdleHintState {
    DISABLED,
    ENABLED,
}
enum NwError {
    NONE,
    IMSI_UNKNOWN_IN_HLR,
    ILLEGAL_MS,
    IMSI_UNKNOWN_IN_VLR,
    IMEI_NOT_ACCEPTED,
    ILLEGAL_ME,
    GPRS_NOT_ALLOWED,
    GPRS_AND_NON_GPRS_NOT_ALLOWED,
    MS_IDENTITY_NOT_DERIVED_BY_NETWORK,
    IMPLICITLY_DETACHED,
    PLMN_NOT_ALLOWED,
    LOCATION_AREA_NOT_ALLOWED,
    ROAMING_NOT_ALLOWED_IN_LOCATION_AREA,
    GPRS_NOT_ALLOWED_IN_PLMN,
    NO_CELLS_IN_LOCATION_AREA,
    MSC_TEMPORARILY_NOT_REACHABLE,
    NETWORK_FAILURE,
    MAC_FAILURE,
    SYNCH_FAILURE,
    CONGESTION,
    GSM_AUTHENTICATION_UNACCEPTABLE,
    NOT_AUTHORIZED_FOR_CSG,
    INSUFFICIENT_RESOURCES,
    MISSING_OR_UNKNOWN_APN,
    UNKNOWN_PDP_ADDRESS_OR_TYPE,
    USER_AUTHENTICATION_FAILED,
    ACTIVATION_REJECTED_BY_GGSN_OR_GW,
    ACTIVATION_REJECTED_UNSPECIFIED,
    SERVICE_OPTION_NOT_SUPPORTED,
    REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED,
    SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER,
    NO_PDP_CONTEXT_ACTIVATED,
    PDP_TYPE_IPV4_ONLY_ALLOWED,
    PDP_TYPE_IPV6_ONLY_ALLOWED,
    MAXIMUM_NUMBER_OF_PDP_CONTEXTS_REACHED,
    REQUESTED_APN_NOT_SUPPORTED_IN_CURRENT_RAT_AND_PLMN,
    SEMANTICALLY_INCORRECT_MESSAGE,
    INVALID_MANDATORY_INFORMATION,
    MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED,
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED,
    CONDITIONAL_IE_ERROR,
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    PROTOCOL_ERROR_UNSPECIFIED,
    APN_RESTRICTION_VALUE_INCOMPATIBLE_WITH_ACTIVE_PDP_CONTEXT,
    MULTIPLE_ACCESSES_TO_A_PDN_CONNECTION_NOT_ALLOWED,
}
enum PacketServiceAction {
    ATTACH,
    DETACH,
}
enum PacketServiceState {
    UNKNOWN,
    ATTACHING,
    ATTACHED,
    DETACHING,
    DETACHED,
}
enum PcoType {
    COMPLETE,
    PARTIAL,
}
enum PhonebookFlag {
    ALL,
    INDEX,
}
enum PhonebookState {
    NOT_INITIALIZED,
    INITIALIZED,
}
enum PhonebookWriteFlag {
    UNUSED,
    INDEX,
}
enum PinFormat {
    UNKNOWN,
    NUMERIC,
    ALPHANUMERIC,
}
enum PinMode {
    NOT_SUPPORTED,
    ENABLED,
    DISABLED,
}
enum PinOperation {
    ENTER,
    ENABLE,
    DISABLE,
    CHANGE,
}
enum PinState {
    UNLOCKED,
    LOCKED,
}
enum PinType {
    UNKNOWN,
    CUSTOM,
    PIN1,
    PIN2,
    DEVICE_SIM_PIN,
    DEVICE_FIRST_SIM_PIN,
    NETWORK_PIN,
    NETWORK_SUBSET_PIN,
    SERVICE_PROVIDER_PIN,
    CORPORATE_PIN,
    SUBSIDY_PIN,
    PUK1,
    PUK2,
    DEVICE_FIRST_SIM_PUK,
    NETWORK_PUK,
    NETWORK_SUBSET_PUK,
    SERVICE_PROVIDER_PUK,
    CORPORATE_PUK,
}
enum ProtocolError {
    INVALID,
    TIMEOUTFRAGMENT,
    FRAGMENTOUTOFSEQUENCE,
    LENGTHMISMATCH,
    DUPLICATEDTID,
    NOTOPENED,
    UNKNOWN,
    CANCEL,
    MAXTRANSFER,
}
enum QduFileType {
    PACKAGE,
}
enum QduSessionAction {
    START,
    STOP,
}
enum QduSessionResult {
    SUCCESS,
    FAILURE,
}
enum QduSessionStatus {
    INACTIVE,
    FILE_TRANSFER,
    APPLY_UPDATE,
}
enum QduSessionType {
    NONE,
    LE,
}
enum QuectelRadioSwitchState {
    OFF,
    ON,
    FCC_LOCKED,
}
enum RadioSwitchState {
    OFF,
    ON,
}
enum RegisterAction {
    AUTOMATIC,
    MANUAL,
}
enum RegisterMode {
    UNKNOWN,
    AUTOMATIC,
    MANUAL,
}
enum RegisterState {
    UNKNOWN,
    DEREGISTERED,
    SEARCHING,
    HOME,
    ROAMING,
    PARTNER,
    DENIED,
}
enum SarBackoffState {
    DISABLED,
    ENABLED,
}
enum SarControlMode {
    DEVICE,
    OS,
}
enum SarWifiHardwareState {
    INTEGRATED,
    NOT_INTEGRATED,
}
enum Service {
    INVALID,
    BASIC_CONNECT,
    SMS,
    USSD,
    PHONEBOOK,
    STK,
    AUTH,
    DSS,
    MS_FIRMWARE_ID,
    MS_HOST_SHUTDOWN,
    PROXY_CONTROL,
    QMI,
    ATDS,
    INTEL_FIRMWARE_UPDATE,
    MS_BASIC_CONNECT_EXTENSIONS,
    MS_SAR,
    QDU,
    MS_UICC_LOW_LEVEL_ACCESS,
    QUECTEL,
}
enum SmsCdmaEncoding {
    OCTET,
    EPM,
    /* 7BIT_ASCII (invalid, starts with a number) */
    LA5,
    UNICODE,
    SHIFT_JIS,
    KOREAN,
    LATIN_HEBREW,
    LATIN,
    GSM_7BIT,
}
enum SmsCdmaLang {
    UNKNOWN,
    ENGLISH,
    FRENCH,
    SPANISH,
    JAPANESE,
    KOREAN,
    CHINESE,
    HEBREW,
}
enum SmsFlag {
    ALL,
    INDEX,
    NEW,
    OLD,
    SENT,
    DRAFT,
}
enum SmsFormat {
    PDU,
    CDMA,
}
enum SmsStatus {
    NEW,
    OLD,
    DRAFT,
    SENT,
}
enum SmsStatusFlag {
    NONE,
    MESSAGE_STORE_FULL,
    NEW_MESSAGE,
}
enum SmsStorageState {
    NOT_INITIALIZED,
    INITIALIZED,
}
enum StatusError {
    NONE,
    BUSY,
    FAILURE,
    SIMNOTINSERTED,
    BADSIM,
    PINREQUIRED,
    PINDISABLED,
    NOTREGISTERED,
    PROVIDERSNOTFOUND,
    NODEVICESUPPORT,
    PROVIDERNOTVISIBLE,
    DATACLASSNOTAVAILABLE,
    PACKETSERVICEDETACHED,
    MAXACTIVATEDCONTEXTS,
    NOTINITIALIZED,
    VOICECALLINPROGRESS,
    CONTEXTNOTACTIVATED,
    SERVICENOTACTIVATED,
    INVALIDACCESSSTRING,
    INVALIDUSERNAMEPWD,
    RADIOPOWEROFF,
    INVALIDPARAMETERS,
    READFAILURE,
    WRITEFAILURE,
    NOPHONEBOOK,
    PARAMETERTOOLONG,
    STKBUSY,
    OPERATIONNOTALLOWED,
    MEMORYFAILURE,
    INVALIDMEMORYINDEX,
    MEMORYFULL,
    FILTERNOTSUPPORTED,
    DSSINSTANCELIMIT,
    INVALIDDEVICESERVICEOPERATION,
    AUTHINCORRECTAUTH,
    AUTHSYNCFAILURE,
    AUTHAMFNOTSET,
    CONTEXTNOTSUPPORTED,
    SMSUNKNOWNSMSCADDRESS,
    SMSNETWORKTIMEOUT,
    SMSLANGNOTSUPPORTED,
    SMSENCODINGNOTSUPPORTED,
    SMSFORMATNOTSUPPORTED,
}
enum StkPacProfile {
    NOT_HANDLED_BY_FUNCTION_HANDLED_BY_HOST,
    NOT_HANDLED_BY_FUNCTION_MAY_BE_HANDLED_BY_HOST,
    HANDLED_BY_FUNCTION_ONLY_TRANSPARENT_TO_HOST,
    HANDLED_BY_FUNCTION_NOTIFICATION_TO_HOST_POSSIBLE,
    HANDLED_BY_FUNCTION_NOTIFICATIONS_TO_HOST_ENABLED,
    HANDLED_BY_FUNCTION_CAN_BE_OVERRIDEN_BY_HOST,
    HANDLED_BY_HOST_FUNCTION_NOT_ABLE_TO_HANDLE,
    HANDLED_BY_HOST_FUNCTION_ABLE_TO_HANDLE,
}
enum StkPacType {
    PROACTIVE_COMMAND,
    NOTIFICATION,
}
enum SubscriberReadyState {
    NOT_INITIALIZED,
    INITIALIZED,
    SIM_NOT_INSERTED,
    BAD_SIM,
    FAILURE,
    NOT_ACTIVATED,
    DEVICE_LOCKED,
    NO_ESIM_PROFILE,
}
enum TlvType {
    INVALID,
    UE_POLICITES,
    SINGLE_NSSAI,
    ALLOWED_NSSAI,
    CFG_NSSAI,
    DFLT_CFG_NSSAI,
    PRECFG_DFLT_CFG_NSSAI,
    REJ_NSSAI,
    LADN,
    TAI,
    WCHAR_STR,
    UINT16_TBL,
    EAP_PACKET,
    PCO,
    ROUTE_SELECTION_DESCRIPTORS,
    TRAFFIC_PARAMETERS,
    WAKE_COMMAND,
    WAKE_PACKET,
}
enum TransmissionNotificationStatus {
    DISABLED,
    ENABLED,
}
enum TransmissionState {
    INACTIVE,
    ACTIVE,
}
enum UiccClassByteType {
    INTER_INDUSTRY,
    EXTENDED,
}
enum UiccPassThroughAction {
    DISABLE,
    ENABLE,
}
enum UiccPassThroughStatus {
    DISABLED,
    ENABLED,
}
enum UiccSecureMessaging {
    NONE,
    NO_HDR_AUTH,
}
enum UiccSlotState {
    STATE_UNKNOWN,
    SATE_OFF_EMPTY,
    STATE_OFF,
    STATE_EMPTY,
    STATE_NOT_READY,
    STATE_ACTIVE,
    STATE_ERROR,
    STATE_ACTIVE_ESIM,
    STATE_ACTIVE_ESIM_NO_PROFILES,
}
enum UssdAction {
    INITIATE,
    CONTINUE,
    CANCEL,
}
enum UssdResponse {
    NO_ACTION_REQUIRED,
    ACTION_REQUIRED,
    TERMINATED_BY_NETWORK,
    OTHER_LOCAL_CLIENT,
    OPERATION_NOT_SUPPORTED,
    NETWORK_TIMEOUT,
}
enum UssdSessionState {
    NEW_SESSION,
    EXISTING_SESSION,
}
enum VisibleProvidersAction {
    FULL_SCAN,
    RESTRICTED_SCAN,
}
enum VoiceCallState {
    NONE,
    IN_PROGRESS,
    HANG_UP,
}
enum VoiceClass {
    UNKNOWN,
    NO_VOICE,
    SEPARATED_VOICE_DATA,
    SIMULTANEOUS_VOICE_DATA,
}
enum WakeType {
    CID_RESPONSE,
    CID_INDICATION,
    PACKET,
}
enum CellularClass {
    GSM,
    CDMA,
}
enum CtrlCaps {
    NONE,
    REG_MANUAL,
    HW_RADIO_SWITCH,
    CDMA_MOBILE_IP,
    CDMA_SIMPLE_IP,
    MULTI_CARRIER,
    ESIM,
    UE_POLICY_ROUTE_SELECTION,
    SIM_HOT_SWAP_CAPABLE,
}
enum DataClass {
    GPRS,
    EDGE,
    UMTS,
    HSDPA,
    HSUPA,
    LTE,
    /* 5G_NSA (invalid, starts with a number) */
    /* 5G_SA (invalid, starts with a number) */
    /* 1XRTT (invalid, starts with a number) */
    /* 1XEVDO (invalid, starts with a number) */
    /* 1XEVDO_REVA (invalid, starts with a number) */
    /* 1XEVDV (invalid, starts with a number) */
    /* 3XRTT (invalid, starts with a number) */
    /* 1XEVDO_REVB (invalid, starts with a number) */
    UMB,
    CUSTOM,
}
enum DataClassV3 {
    GPRS,
    EDGE,
    UMTS,
    HSDPA,
    HSUPA,
    LTE,
    /* 5G (invalid, starts with a number) */
    /* 1XRTT (invalid, starts with a number) */
    /* 1XEVDO (invalid, starts with a number) */
    /* 1XEVDO_REVA (invalid, starts with a number) */
    /* 1XEVDV (invalid, starts with a number) */
    /* 3XRTT (invalid, starts with a number) */
    /* 1XEVDO_REVB (invalid, starts with a number) */
    UMB,
    CUSTOM,
}
enum DataSubclass {
    NONE,
    /* 5G_ENDC (invalid, starts with a number) */
    /* 5G_NR (invalid, starts with a number) */
    /* 5G_NEDC (invalid, starts with a number) */
    /* 5G_ELTE (invalid, starts with a number) */
    /* 5G_NGENDC (invalid, starts with a number) */
}
enum DeviceOpenFlags {
    NONE,
    PROXY,
    MS_MBIMEX_V2,
    MS_MBIMEX_V3,
}
enum FrequencyRange {
    UNKNOWN,
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
}
enum IPConfigurationAvailableFlag {
    NONE,
    ADDRESS,
    GATEWAY,
    DNS,
    MTU,
}
enum ProviderState {
    UNKNOWN,
    HOME,
    FORBIDDEN,
    PREFERRED,
    VISIBLE,
    REGISTERED,
    PREFERRED_MULTICARRIER,
}
enum ReadyInfoFlag {
    NONE,
    PROTECT_UNIQUE_ID,
}
enum RegistrationFlag {
    NONE,
    MANUAL_SELECTION_NOT_AVAILABLE,
    PACKET_SERVICE_AUTOMATIC_ATTACH,
}
enum SimClass {
    LOGICAL,
    REMOVABLE,
}
enum SmsCaps {
    PDU_RECEIVE,
    PDU_SEND,
    TEXT_RECEIVE,
    TEXT_SEND,
}
enum SubscriberReadyStatusFlag {
    NONE,
    ESIM,
    SIM_REMOVABILITY_KNOWN,
    SIM_REMOVABLE,
}
export const DBUS_ERROR_PREFIX: string
export const DEVICE_FILE: string
export const DEVICE_IN_SESSION: string
export const DEVICE_SESSION_ID_MAX: number
export const DEVICE_SESSION_ID_MIN: number
export const DEVICE_SIGNAL_ERROR: string
export const DEVICE_SIGNAL_INDICATE_STATUS: string
export const DEVICE_SIGNAL_REMOVED: string
export const DEVICE_TRANSACTION_ID: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const PROXY_N_CLIENTS: string
export const PROXY_N_DEVICES: string
export const PROXY_SOCKET_PATH: string
function access_media_type_get_string(val: AccessMediaType): string
function activation_command_get_string(val: ActivationCommand): string
function activation_state_get_string(val: ActivationState): string
function atds_provider_array_free(array: AtdsProviderArray): void
function atds_provider_plmn_mode_get_string(val: AtdsProviderPlmnMode): string
function atds_rat_mode_get_string(val: AtdsRatMode): string
function auth_protocol_get_string(val: AuthProtocol): string
function cell_info_cdma_array_free(array: CellInfoCdmaArray): void
function cell_info_neighboring_gsm_array_free(array: CellInfoNeighboringGsmArray): void
function cell_info_neighboring_lte_array_free(array: CellInfoNeighboringLteArray): void
function cell_info_neighboring_nr_array_free(array: CellInfoNeighboringNrArray): void
function cell_info_neighboring_tdscdma_array_free(array: CellInfoNeighboringTdscdmaArray): void
function cell_info_neighboring_umts_array_free(array: CellInfoNeighboringUmtsArray): void
function cell_info_serving_nr_array_free(array: CellInfoServingNrArray): void
function cellular_class_build_string_from_mask(mask: CellularClass): string
function cid_atds_get_string(val: CidAtds): string
function cid_auth_get_string(val: CidAuth): string
function cid_basic_connect_get_string(val: CidBasicConnect): string
function cid_can_notify(service: Service, cid: number): boolean
function cid_can_query(service: Service, cid: number): boolean
function cid_can_set(service: Service, cid: number): boolean
function cid_dss_get_string(val: CidDss): string
function cid_get_printable(service: Service, cid: number): string
function cid_intel_firmware_update_get_string(val: CidIntelFirmwareUpdate): string
function cid_ms_basic_connect_extensions_get_string(val: CidMsBasicConnectExtensions): string
function cid_ms_firmware_id_get_string(val: CidMsFirmwareId): string
function cid_ms_host_shutdown_get_string(val: CidMsHostShutdown): string
function cid_ms_sar_get_string(val: CidMsSar): string
function cid_ms_uicc_low_level_access_get_string(val: CidMsUiccLowLevelAccess): string
function cid_phonebook_get_string(val: CidPhonebook): string
function cid_proxy_control_get_string(val: CidProxyControl): string
function cid_qdu_get_string(val: CidQdu): string
function cid_qmi_get_string(val: CidQmi): string
function cid_quectel_get_string(val: CidQuectel): string
function cid_sms_get_string(val: CidSms): string
function cid_stk_get_string(val: CidStk): string
function cid_ussd_get_string(val: CidUssd): string
function compression_get_string(val: Compression): string
function context_ip_type_get_string(val: ContextIpType): string
function context_media_type_get_string(val: ContextMediaType): string
function context_operation_get_string(val: ContextOperation): string
function context_roaming_control_get_string(val: ContextRoamingControl): string
function context_source_get_string(val: ContextSource): string
function context_state_get_string(val: ContextState): string
function context_type_get_string(val: ContextType): string
function core_error_get_string(val: CoreError): string
function core_error_quark(): GLib.Quark
function ctrl_caps_build_string_from_mask(mask: CtrlCaps): string
function data_class_build_string_from_mask(mask: DataClass): string
function data_class_v3_build_string_from_mask(mask: DataClassV3): string
function data_subclass_build_string_from_mask(mask: DataSubclass): string
function default_pdu_activation_hint_get_string(val: DefaultPduActivationHint): string
function device_service_element_array_free(array: DeviceServiceElementArray): void
function device_type_get_string(val: DeviceType): string
function drx_cycle_get_string(val: DrxCycle): string
function dss_link_state_get_string(val: DssLinkState): string
function emergency_mode_state_get_string(val: EmergencyModeState): string
function event_entry_array_free(array: EventEntryArray): void
function frequency_range_build_string_from_mask(mask: FrequencyRange): string
function ip_configuration_available_flag_build_string_from_mask(mask: IPConfigurationAvailableFlag): string
function ipv4_element_array_free(array: IPv4ElementArray): void
function ipv6_element_array_free(array: IPv6ElementArray): void
function ladn_info_get_string(val: LadnInfo): string
function lte_attach_configuration_array_free(array: LteAttachConfigurationArray): void
function lte_attach_context_operation_get_string(val: LteAttachContextOperation): string
function lte_attach_context_roaming_control_get_string(val: LteAttachContextRoamingControl): string
function lte_attach_state_get_string(val: LteAttachState): string
function message_command_type_get_string(val: MessageCommandType): string
function message_type_get_string(val: MessageType): string
function mico_mode_get_string(val: MicoMode): string
function modem_configuration_status_get_string(val: ModemConfigurationStatus): string
function network_idle_hint_state_get_string(val: NetworkIdleHintState): string
function nw_error_get_string(val: NwError): string
function packet_filter_array_free(array: PacketFilterArray): void
function packet_filter_v3_array_free(array: PacketFilterV3Array): void
function packet_service_action_get_string(val: PacketServiceAction): string
function packet_service_state_get_string(val: PacketServiceState): string
function pco_type_get_string(val: PcoType): string
function phonebook_entry_array_free(array: PhonebookEntryArray): void
function phonebook_flag_get_string(val: PhonebookFlag): string
function phonebook_state_get_string(val: PhonebookState): string
function phonebook_write_flag_get_string(val: PhonebookWriteFlag): string
function pin_format_get_string(val: PinFormat): string
function pin_mode_get_string(val: PinMode): string
function pin_operation_get_string(val: PinOperation): string
function pin_state_get_string(val: PinState): string
function pin_type_get_string(val: PinType): string
function protocol_error_get_string(val: ProtocolError): string
function protocol_error_quark(): GLib.Quark
function provider_array_free(array: ProviderArray): void
function provider_state_build_string_from_mask(mask: ProviderState): string
function provisioned_context_element_array_free(array: ProvisionedContextElementArray): void
function provisioned_context_element_v2_array_free(array: ProvisionedContextElementV2Array): void
function qdu_file_type_get_string(val: QduFileType): string
function qdu_session_action_get_string(val: QduSessionAction): string
function qdu_session_result_get_string(val: QduSessionResult): string
function qdu_session_status_get_string(val: QduSessionStatus): string
function qdu_session_type_get_string(val: QduSessionType): string
function quectel_radio_switch_state_get_string(val: QuectelRadioSwitchState): string
function radio_switch_state_get_string(val: RadioSwitchState): string
function ready_info_flag_build_string_from_mask(mask: ReadyInfoFlag): string
function register_action_get_string(val: RegisterAction): string
function register_custom_service(uuid: Uuid, nickname: string): number
function register_mode_get_string(val: RegisterMode): string
function register_state_get_string(val: RegisterState): string
function registration_flag_build_string_from_mask(mask: RegistrationFlag): string
function rsrp_snr_info_array_free(array: RsrpSnrInfoArray): void
function sar_backoff_state_get_string(val: SarBackoffState): string
function sar_config_state_array_free(array: SarConfigStateArray): void
function sar_control_mode_get_string(val: SarControlMode): string
function sar_wifi_hardware_state_get_string(val: SarWifiHardwareState): string
function service_get_string(val: Service): string
function service_id_is_custom(id: number): boolean
function service_lookup_name(service: number): string
function sim_class_build_string_from_mask(mask: SimClass): string
function slot_array_free(array: SlotArray): void
function sms_caps_build_string_from_mask(mask: SmsCaps): string
function sms_cdma_encoding_get_string(val: SmsCdmaEncoding): string
function sms_cdma_lang_get_string(val: SmsCdmaLang): string
function sms_cdma_read_record_array_free(array: SmsCdmaReadRecordArray): void
function sms_flag_get_string(val: SmsFlag): string
function sms_format_get_string(val: SmsFormat): string
function sms_pdu_read_record_array_free(array: SmsPduReadRecordArray): void
function sms_status_flag_get_string(val: SmsStatusFlag): string
function sms_status_get_string(val: SmsStatus): string
function sms_storage_state_get_string(val: SmsStorageState): string
function status_error_get_string(val: StatusError): string
function status_error_quark(): GLib.Quark
function stk_pac_profile_get_string(val: StkPacProfile): string
function stk_pac_type_get_string(val: StkPacType): string
function subscriber_ready_state_get_string(val: SubscriberReadyState): string
function subscriber_ready_status_flag_build_string_from_mask(mask: SubscriberReadyStatusFlag): string
function terminal_capability_info_array_free(array: TerminalCapabilityInfoArray): void
function tlv_type_get_string(val: TlvType): string
function transmission_notification_status_get_string(val: TransmissionNotificationStatus): string
function transmission_state_get_string(val: TransmissionState): string
function uicc_class_byte_type_get_string(val: UiccClassByteType): string
function uicc_pass_through_action_get_string(val: UiccPassThroughAction): string
function uicc_pass_through_status_get_string(val: UiccPassThroughStatus): string
function uicc_secure_messaging_get_string(val: UiccSecureMessaging): string
function uicc_slot_state_get_string(val: UiccSlotState): string
function unregister_custom_service(id: number): boolean
function ussd_action_get_string(val: UssdAction): string
function ussd_response_get_string(val: UssdResponse): string
function ussd_session_state_get_string(val: UssdSessionState): string
function utils_get_traces_enabled(): boolean
function utils_set_traces_enabled(enabled: boolean): void
function uuid_from_context_type(context_type: ContextType): Uuid
function uuid_from_printable(str: string, uuid: Uuid): boolean
function uuid_from_service(service: Service): Uuid
function visible_providers_action_get_string(val: VisibleProvidersAction): string
function voice_call_state_get_string(val: VoiceCallState): string
function voice_class_get_string(val: VoiceClass): string
function wake_type_get_string(val: WakeType): string
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    device_file?: Gio.File
    device_in_session?: boolean
    device_transaction_id?: number
}
class Device {
    /* Properties of Mbim-1.0.Mbim.Device */
    device_in_session: boolean
    device_transaction_id: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Mbim-1.0.Mbim.Device */
    add_link(session_id: number, base_ifname: string, ifname_prefix: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_link_finish(res: Gio.AsyncResult, session_id: number): string
    check_link_supported(): boolean
    check_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean
    close(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(res: Gio.AsyncResult): boolean
    close_force(): boolean
    command(message: Message, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    command_finish(res: Gio.AsyncResult): Message
    delete_all_links(base_ifname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_all_links_finish(res: Gio.AsyncResult): boolean
    delete_link(ifname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_link_finish(res: Gio.AsyncResult): boolean
    get_ms_mbimex_version(out_ms_mbimex_version_minor: number): number
    get_next_transaction_id(): number
    get_path(): string
    get_path_display(): string
    get_transaction_id(): number
    is_open(): boolean
    list_links(base_ifname: string): [ /* returnType */ boolean, /* out_links */ string[] ]
    open(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(res: Gio.AsyncResult): boolean
    open_full(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_full_finish(res: Gio.AsyncResult): boolean
    set_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Mbim-1.0.Mbim.Device */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Mbim-1.0.Mbim.Device */
    connect(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    connect_after(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    emit(sigName: "device-error", object: GLib.Error): void
    connect(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    connect_after(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    emit(sigName: "device-indicate-status", object: Message): void
    connect(sigName: "device-removed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Device) => void)): number
    emit(sigName: "device-removed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-in-session", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-in-session", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-transaction-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-transaction-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): Device
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
}
class Proxy {
    /* Properties of Mbim-1.0.Mbim.Proxy */
    readonly mbim_proxy_n_clients: number
    readonly mbim_proxy_n_devices: number
    /* Fields of Mbim-1.0.Mbim.Proxy */
    parent: GObject.Object
    priv: ProxyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mbim-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mbim-proxy-n-devices", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-devices", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Proxy
    static $gtype: GObject.Type
}
class AtdsProvider {
    /* Fields of Mbim-1.0.Mbim.AtdsProvider */
    provider_id: string
    provider_state: number
    provider_name: string
    plmn_mode: number
    rssi: number
    error_rate: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: AtdsProviderArray): void
}
class CellInfoCdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoCdma */
    serving_cell_flag: number
    nid: number
    sid: number
    base_station_id: number
    base_latitude: number
    base_longitude: number
    ref_pn: number
    gps_seconds: number
    pilot_strength: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: CellInfoCdmaArray): void
}
class CellInfoNeighboringGsm {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringGsm */
    provider_id: string
    location_area_code: number
    cell_id: number
    arfcn: number
    base_station_id: number
    rx_level: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: CellInfoNeighboringGsmArray): void
}
class CellInfoNeighboringLte {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringLte */
    provider_id: string
    cell_id: number
    earfcn: number
    physical_cell_id: number
    tac: number
    rsrp: number
    rsrq: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: CellInfoNeighboringLteArray): void
}
class CellInfoNeighboringNr {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringNr */
    system_sub_type: number
    provider_id: string
    cell_id: string
    physical_cell_id: number
    tac: number
    rsrp: number
    rsrq: number
    sinr: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: CellInfoNeighboringNrArray): void
}
class CellInfoNeighboringTdscdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma */
    provider_id: string
    location_area_code: number
    cell_id: number
    uarfcn: number
    cell_parameter_id: number
    timing_advance: number
    rscp: number
    path_loss: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: CellInfoNeighboringTdscdmaArray): void
}
class CellInfoNeighboringUmts {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringUmts */
    provider_id: string
    location_area_code: number
    cell_id: number
    uarfcn: number
    primary_scrambling_code: number
    rscp: number
    ecno: number
    path_loss: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: CellInfoNeighboringUmtsArray): void
}
class CellInfoServingGsm {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingGsm */
    provider_id: string
    location_area_code: number
    cell_id: number
    timing_advance: number
    arfcn: number
    base_station_id: number
    rx_level: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingGsm */
    free(): void
    static name: string
}
class CellInfoServingLte {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingLte */
    provider_id: string
    cell_id: number
    earfcn: number
    physical_cell_id: number
    tac: number
    rsrp: number
    rsrq: number
    timing_advance: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingLte */
    free(): void
    static name: string
}
class CellInfoServingNr {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingNr */
    provider_id: string
    nci: number
    physical_cell_id: number
    nrarfcn: number
    tac: number
    rsrp: number
    rsrq: number
    sinr: number
    timing_advance: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: CellInfoServingNrArray): void
}
class CellInfoServingTdscdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingTdscdma */
    provider_id: string
    location_area_code: number
    cell_id: number
    uarfcn: number
    cell_parameter_id: number
    timing_advance: number
    rscp: number
    path_loss: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingTdscdma */
    free(): void
    static name: string
}
class CellInfoServingUmts {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingUmts */
    provider_id: string
    location_area_code: number
    cell_id: number
    frequency_info_ul: number
    frequency_info_dl: number
    frequency_info_nt: number
    uarfcn: number
    primary_scrambling_code: number
    rscp: number
    ecno: number
    path_loss: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingUmts */
    free(): void
    static name: string
}
abstract class DeviceClass {
    static name: string
}
class DevicePrivate {
    static name: string
}
class DeviceServiceElement {
    /* Fields of Mbim-1.0.Mbim.DeviceServiceElement */
    device_service_id: Uuid
    dss_payload: number
    max_dss_instances: number
    cids_count: number
    cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: DeviceServiceElementArray): void
}
class EventEntry {
    /* Fields of Mbim-1.0.Mbim.EventEntry */
    device_service_id: Uuid
    cids_count: number
    cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: EventEntryArray): void
}
class IPv4 {
    /* Fields of Mbim-1.0.Mbim.IPv4 */
    addr: Uint8Array[]
    static name: string
}
class IPv4Element {
    /* Fields of Mbim-1.0.Mbim.IPv4Element */
    on_link_prefix_length: number
    ipv4_address: IPv4
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: IPv4ElementArray): void
}
class IPv6 {
    /* Fields of Mbim-1.0.Mbim.IPv6 */
    addr: Uint8Array[]
    static name: string
}
class IPv6Element {
    /* Fields of Mbim-1.0.Mbim.IPv6Element */
    on_link_prefix_length: number
    ipv6_address: IPv6
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: IPv6ElementArray): void
}
class LteAttachConfiguration {
    /* Fields of Mbim-1.0.Mbim.LteAttachConfiguration */
    ip_type: number
    roaming: number
    source: number
    access_string: string
    user_name: string
    password: string
    compression: number
    auth_protocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: LteAttachConfigurationArray): void
}
class LteAttachStatus {
    /* Fields of Mbim-1.0.Mbim.LteAttachStatus */
    lte_attach_state: number
    ip_type: number
    access_string: string
    user_name: string
    password: string
    compression: number
    auth_protocol: number
    /* Methods of Mbim-1.0.Mbim.LteAttachStatus */
    free(): void
    static name: string
}
class Message {
    /* Methods of Mbim-1.0.Mbim.Message */
    atds_location_response_parse(): [ /* returnType */ boolean, /* out_lac */ number | null, /* out_tac */ number | null, /* out_cell_id */ number | null ]
    atds_operators_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ AtdsProvider[] | null ]
    atds_rat_response_parse(): [ /* returnType */ boolean, /* out_mode */ AtdsRatMode | null ]
    atds_register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    atds_signal_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_rscp */ number | null, /* out_ecno */ number | null, /* out_rsrq */ number | null, /* out_rsrp */ number | null, /* out_rssnr */ number | null ]
    auth_aka_response_parse(): [ /* returnType */ boolean, /* out_res */ Uint8Array[] | null, /* out_res_len */ number | null, /* out_integrating_key */ Uint8Array[] | null, /* out_ciphering_key */ Uint8Array[] | null, /* out_auts */ Uint8Array[] | null ]
    auth_akap_response_parse(): [ /* returnType */ boolean, /* out_res */ Uint8Array[] | null, /* out_res_len */ number | null, /* out_integrating_key */ Uint8Array[] | null, /* out_ciphering_key */ Uint8Array[] | null, /* out_auts */ Uint8Array[] | null ]
    auth_sim_response_parse(): [ /* returnType */ boolean, /* out_sres1 */ number | null, /* out_kc1 */ number | null, /* out_sres2 */ number | null, /* out_kc2 */ number | null, /* out_sres3 */ number | null, /* out_kc3 */ number | null, /* out_n */ number | null ]
    close_done_get_result(): boolean
    close_done_get_status_code(): StatusError
    command_append(buffer: number, buffer_size: number): void
    command_done_get_cid(): number
    command_done_get_raw_information_buffer(): [ /* returnType */ number, /* out_length */ number ]
    command_done_get_result(): boolean
    command_done_get_service(): Service
    command_done_get_service_id(): Uuid
    command_done_get_status_code(): StatusError
    command_get_cid(): number
    command_get_command_type(): MessageCommandType
    command_get_raw_information_buffer(): [ /* returnType */ number, /* out_length */ number ]
    command_get_service(): Service
    command_get_service_id(): Uuid
    connect_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_activation_state */ ActivationState | null, /* out_voice_call_state */ VoiceCallState | null, /* out_ip_type */ ContextIpType | null, /* out_context_type */ Uuid | null, /* out_nw_error */ number | null ]
    connect_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_activation_state */ ActivationState | null, /* out_voice_call_state */ VoiceCallState | null, /* out_ip_type */ ContextIpType | null, /* out_context_type */ Uuid | null, /* out_nw_error */ number | null ]
    device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType | null, /* out_cellular_class */ CellularClass | null, /* out_voice_class */ VoiceClass | null, /* out_sim_class */ SimClass | null, /* out_data_class */ DataClass | null, /* out_sms_caps */ SmsCaps | null, /* out_control_caps */ CtrlCaps | null, /* out_max_sessions */ number | null, /* out_custom_data_class */ string | null, /* out_device_id */ string | null, /* out_firmware_info */ string | null, /* out_hardware_info */ string | null ]
    device_service_subscribe_list_response_parse(): [ /* returnType */ boolean, /* out_events_count */ number | null, /* out_events */ EventEntry[] | null ]
    device_service_subscriber_list_response_parse(events_count: number, events: EventEntry): boolean
    device_services_response_parse(): [ /* returnType */ boolean, /* out_device_services_count */ number | null, /* out_max_dss_sessions */ number | null, /* out_device_services */ DeviceServiceElement[] | null ]
    dss_connect_response_parse(): boolean
    dup(): Message
    emergency_mode_notification_parse(): [ /* returnType */ boolean, /* out_state */ EmergencyModeState | null ]
    emergency_mode_response_parse(): [ /* returnType */ boolean, /* out_state */ EmergencyModeState | null ]
    error_get_error(): GLib.Error
    error_get_error_status_code(): ProtocolError
    get_message_length(): number
    get_message_type(): MessageType
    get_printable(line_prefix: string, headers_only: boolean): string
    get_printable_full(mbimex_version_major: number, mbimex_version_minor: number, line_prefix: string, headers_only: boolean): string
    get_raw(): [ /* returnType */ number, /* length */ number ]
    get_transaction_id(): number
    home_provider_response_parse(): [ /* returnType */ boolean, /* out_provider */ Provider | null ]
    indicate_status_get_cid(): number
    indicate_status_get_raw_information_buffer(): [ /* returnType */ number, /* out_length */ number ]
    indicate_status_get_service(): Service
    indicate_status_get_service_id(): Uuid
    ip_configuration_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_ipv4_configuration_available */ IPConfigurationAvailableFlag | null, /* out_ipv6_configuration_available */ IPConfigurationAvailableFlag | null, /* out_ipv4_address_count */ number | null, /* out_ipv4_address */ IPv4Element[] | null, /* out_ipv6_address_count */ number | null, /* out_ipv6_address */ IPv6Element[] | null, /* out_ipv4_gateway */ IPv4 | null, /* out_ipv6_gateway */ IPv6 | null, /* out_ipv4_dns_server_count */ number | null, /* out_ipv4_dns_server */ IPv4[] | null, /* out_ipv6_dns_server_count */ number | null, /* out_ipv6_dns_server */ IPv6[] | null, /* out_ipv4_mtu */ number | null, /* out_ipv6_mtu */ number | null ]
    ip_configuration_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_ipv4_configuration_available */ IPConfigurationAvailableFlag | null, /* out_ipv6_configuration_available */ IPConfigurationAvailableFlag | null, /* out_ipv4_address_count */ number | null, /* out_ipv4_address */ IPv4Element[] | null, /* out_ipv6_address_count */ number | null, /* out_ipv6_address */ IPv6Element[] | null, /* out_ipv4_gateway */ IPv4 | null, /* out_ipv6_gateway */ IPv6 | null, /* out_ipv4_dns_server_count */ number | null, /* out_ipv4_dns_server */ IPv4[] | null, /* out_ipv6_dns_server_count */ number | null, /* out_ipv6_dns_server */ IPv6[] | null, /* out_ipv4_mtu */ number | null, /* out_ipv6_mtu */ number | null ]
    ip_packet_filters_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_packet_filters_count */ number | null, /* out_packet_filters */ PacketFilter[] | null ]
    ms_basic_connect_extensions_base_stations_info_response_parse(): [ /* returnType */ boolean, /* out_system_type */ DataClass | null, /* out_gsm_serving_cell */ CellInfoServingGsm | null, /* out_umts_serving_cell */ CellInfoServingUmts | null, /* out_tdscdma_serving_cell */ CellInfoServingTdscdma | null, /* out_lte_serving_cell */ CellInfoServingLte | null, /* out_gsm_neighboring_cells_count */ number | null, /* out_gsm_neighboring_cells */ CellInfoNeighboringGsm[] | null, /* out_umts_neighboring_cells_count */ number | null, /* out_umts_neighboring_cells */ CellInfoNeighboringUmts[] | null, /* out_tdscdma_neighboring_cells_count */ number | null, /* out_tdscdma_neighboring_cells */ CellInfoNeighboringTdscdma[] | null, /* out_lte_neighboring_cells_count */ number | null, /* out_lte_neighboring_cells */ CellInfoNeighboringLte[] | null, /* out_cdma_cells_count */ number | null, /* out_cdma_cells */ CellInfoCdma[] | null ]
    ms_basic_connect_extensions_device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType | null, /* out_cellular_class */ CellularClass | null, /* out_voice_class */ VoiceClass | null, /* out_sms_class */ SimClass | null, /* out_data_class */ DataClass | null, /* out_sms_caps */ SmsCaps | null, /* out_control_caps */ CtrlCaps | null, /* out_max_sessions */ number | null, /* out_custom_data_class */ string | null, /* out_device_id */ string | null, /* out_firmware_info */ string | null, /* out_hardware_info */ string | null, /* out_executor_index */ number | null ]
    ms_basic_connect_extensions_device_slot_mappings_response_parse(): [ /* returnType */ boolean, /* out_map_count */ number | null, /* out_slot_map */ Slot[] | null ]
    ms_basic_connect_extensions_location_info_status_notification_parse(): [ /* returnType */ boolean, /* out_location_area_code */ number | null, /* out_tracking_area_code */ number | null, /* out_cell_id */ number | null ]
    ms_basic_connect_extensions_location_info_status_response_parse(): [ /* returnType */ boolean, /* out_location_area_code */ number | null, /* out_tracking_area_code */ number | null, /* out_cell_id */ number | null ]
    ms_basic_connect_extensions_lte_attach_configuration_notification_parse(): [ /* returnType */ boolean, /* out_configuration_count */ number | null, /* out_configurations */ LteAttachConfiguration[] | null ]
    ms_basic_connect_extensions_lte_attach_configuration_response_parse(): [ /* returnType */ boolean, /* out_configuration_count */ number | null, /* out_configurations */ LteAttachConfiguration[] | null ]
    ms_basic_connect_extensions_lte_attach_info_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState | null, /* out_ip_type */ ContextIpType | null, /* out_access_string */ string | null, /* out_user_name */ string | null, /* out_password */ string | null, /* out_compression */ Compression | null, /* out_auth_protocol */ AuthProtocol | null ]
    ms_basic_connect_extensions_lte_attach_info_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState | null, /* out_ip_type */ ContextIpType | null, /* out_access_string */ string | null, /* out_user_name */ string | null, /* out_password */ string | null, /* out_compression */ Compression | null, /* out_auth_protocol */ AuthProtocol | null ]
    ms_basic_connect_extensions_lte_attach_status_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_status */ LteAttachStatus | null ]
    ms_basic_connect_extensions_lte_attach_status_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_status */ LteAttachStatus | null ]
    ms_basic_connect_extensions_pco_notification_parse(): [ /* returnType */ boolean, /* out_pco_value */ PcoValue | null ]
    ms_basic_connect_extensions_pco_response_parse(): [ /* returnType */ boolean, /* out_pco_value */ PcoValue | null ]
    ms_basic_connect_extensions_provisioned_contexts_notification_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number | null, /* out_provisioned_contexts */ ProvisionedContextElementV2[] | null ]
    ms_basic_connect_extensions_provisioned_contexts_response_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number | null, /* out_provisioned_contexts */ ProvisionedContextElementV2[] | null ]
    ms_basic_connect_extensions_slot_info_status_notification_parse(): [ /* returnType */ boolean, /* out_slot_index */ number | null, /* out_state */ UiccSlotState | null ]
    ms_basic_connect_extensions_slot_info_status_response_parse(): [ /* returnType */ boolean, /* out_slot_index */ number | null, /* out_state */ UiccSlotState | null ]
    ms_basic_connect_extensions_sys_caps_response_parse(): [ /* returnType */ boolean, /* out_number_of_executors */ number | null, /* out_number_of_slots */ number | null, /* out_concurrency */ number | null, /* out_modem_id */ number | null ]
    ms_basic_connect_extensions_v2_version_response_parse(): [ /* returnType */ boolean, /* out_mbim_version */ number | null, /* out_mbim_extended_version */ number | null ]
    ms_basic_connect_extensions_v3_base_stations_info_response_parse(): [ /* returnType */ boolean, /* out_system_type */ DataClassV3 | null, /* out_system_sub_type */ DataSubclass | null, /* out_gsm_serving_cell */ CellInfoServingGsm | null, /* out_umts_serving_cell */ CellInfoServingUmts | null, /* out_tdscdma_serving_cell */ CellInfoServingTdscdma | null, /* out_lte_serving_cell */ CellInfoServingLte | null, /* out_gsm_neighboring_cells_count */ number | null, /* out_gsm_neighboring_cells */ CellInfoNeighboringGsm[] | null, /* out_umts_neighboring_cells_count */ number | null, /* out_umts_neighboring_cells */ CellInfoNeighboringUmts[] | null, /* out_tdscdma_neighboring_cells_count */ number | null, /* out_tdscdma_neighboring_cells */ CellInfoNeighboringTdscdma[] | null, /* out_lte_neighboring_cells_count */ number | null, /* out_lte_neighboring_cells */ CellInfoNeighboringLte[] | null, /* out_cdma_cells_count */ number | null, /* out_cdma_cells */ CellInfoCdma[] | null, /* out_nr_serving_cells_count */ number | null, /* out_nr_serving_cells */ CellInfoServingNr[] | null, /* out_nr_neighbor_cells_count */ number | null, /* out_nr_neighbor_cells */ CellInfoNeighboringNr[] | null ]
    ms_basic_connect_extensions_v3_device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType | null, /* out_cellular_class */ CellularClass | null, /* out_voice_class */ VoiceClass | null, /* out_sim_class */ SimClass | null, /* out_data_class */ DataClassV3 | null, /* out_sms_caps */ SmsCaps | null, /* out_control_caps */ CtrlCaps | null, /* out_data_subclass */ DataSubclass | null, /* out_max_sessions */ number | null, /* out_executor_index */ number | null, /* out_wcdma_band_class */ number | null, /* out_lte_band_class_count */ number | null, /* out_lte_band_class */ number | null, /* out_nr_band_class_count */ number | null, /* out_nr_band_class */ number | null, /* out_custom_data_class */ string | null, /* out_device_id */ string | null, /* out_firmware_info */ string | null, /* out_hardware_info */ string | null ]
    ms_basic_connect_extensions_v3_lte_attach_info_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState | null, /* out_nw_error */ NwError | null, /* out_ip_type */ ContextIpType | null, /* out_access_string */ string | null, /* out_user_name */ string | null, /* out_password */ string | null, /* out_compression */ Compression | null, /* out_auth_protocol */ AuthProtocol | null ]
    ms_basic_connect_extensions_v3_lte_attach_info_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState | null, /* out_nw_error */ NwError | null, /* out_ip_type */ ContextIpType | null, /* out_access_string */ string | null, /* out_user_name */ string | null, /* out_password */ string | null, /* out_compression */ Compression | null, /* out_auth_protocol */ AuthProtocol | null ]
    ms_basic_connect_extensions_v3_modem_configuration_notification_parse(): [ /* returnType */ boolean, /* out_modem_configuration_status */ ModemConfigurationStatus | null, /* out_configuration_name */ string | null, /* out_unnamed_ies */ Tlv[] | null ]
    ms_basic_connect_extensions_v3_modem_configuration_response_parse(): [ /* returnType */ boolean, /* out_configuration_status */ ModemConfigurationStatus | null, /* out_configuration_name */ string | null, /* out_unnamed_ies */ Tlv[] | null ]
    ms_basic_connect_extensions_v3_registration_parameters_response_parse(): [ /* returnType */ boolean, /* out_mico_mode */ MicoMode | null, /* out_drx_cycle */ DrxCycle | null, /* out_ladn_info */ LadnInfo | null, /* out_default_pdu_activation_hint */ DefaultPduActivationHint | null, /* out_re_register_if_nedeed */ boolean | null, /* out_unnamed_ies */ Tlv[] | null ]
    ms_basic_connect_extensions_v3_wake_reason_response_parse(): [ /* returnType */ boolean, /* out_wake_type */ WakeType | null, /* out_session_id */ number | null, /* out_wake_tlv */ Tlv | null ]
    ms_basic_connect_v2_packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_current_data_class */ DataClass | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null, /* out_frequency_range */ FrequencyRange | null ]
    ms_basic_connect_v2_packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_current_data_class */ DataClass | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null, /* out_frequency_range */ FrequencyRange | null ]
    ms_basic_connect_v2_register_state_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null, /* out_preferred_data_classes */ DataClass | null ]
    ms_basic_connect_v2_register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null, /* out_preferred_data_classes */ DataClass | null ]
    ms_basic_connect_v2_signal_state_notification_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_signal_strength_interval */ number | null, /* out_rssi_threshold */ number | null, /* out_error_rate_threshold */ number | null, /* out_rsrp_snr_count */ number | null, /* out_rsrp_snr */ RsrpSnrInfo[] | null ]
    ms_basic_connect_v2_signal_state_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_signal_strength_interval */ number | null, /* out_rssi_threshold */ number | null, /* out_error_rate_threshold */ number | null, /* out_rsrp_snr_count */ number | null, /* out_rsrp_snr */ RsrpSnrInfo[] | null ]
    ms_basic_connect_v3_connect_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_activation_state */ ActivationState | null, /* out_voice_call_state */ VoiceCallState | null, /* out_ip_type */ ContextIpType | null, /* out_context_type */ Uuid | null, /* out_nw_error */ number | null, /* out_media_preference */ AccessMediaType | null, /* out_access_string */ string | null, /* out_unnamed_ies */ Tlv[] | null ]
    ms_basic_connect_v3_connect_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_activation_state */ ActivationState | null, /* out_voice_call_state */ VoiceCallState | null, /* out_ip_type */ ContextIpType | null, /* out_context_type */ Uuid | null, /* out_nw_error */ number | null, /* out_media_preference */ AccessMediaType | null, /* out_access_string */ string | null, /* out_unnamed_ies */ Tlv[] | null ]
    ms_basic_connect_v3_ip_packet_filters_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_packet_filters_count */ number | null, /* out_packet_filters */ PacketFilterV3[] | null ]
    ms_basic_connect_v3_packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_highest_available_data_class */ DataClassV3 | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null, /* out_frequency_range */ FrequencyRange | null, /* out_data_subclass */ DataSubclass | null, /* out_tai */ Tai | null ]
    ms_basic_connect_v3_packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_highest_available_data_class */ DataClassV3 | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null, /* out_frequency_range */ FrequencyRange | null, /* out_data_subclass */ DataSubclass | null, /* out_tai */ Tai | null ]
    ms_basic_connect_v3_subscriber_ready_status_notification_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_flags */ SubscriberReadyStatusFlag | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    ms_basic_connect_v3_subscriber_ready_status_response_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_flags */ SubscriberReadyStatusFlag | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    ms_firmware_id_get_response_parse(): [ /* returnType */ boolean, /* out_firmware_id */ Uuid | null ]
    ms_sar_config_response_parse(): [ /* returnType */ boolean, /* out_mode */ SarControlMode | null, /* out_backoff_state */ SarBackoffState | null, /* out_wifi_integration */ SarWifiHardwareState | null, /* out_config_states_count */ number | null, /* out_config_states */ SarConfigState[] | null ]
    ms_sar_transmission_status_notification_parse(): [ /* returnType */ boolean, /* out_channel_notification */ TransmissionNotificationStatus | null, /* out_transmission_status */ TransmissionState | null, /* out_hysteresis_timer */ number | null ]
    ms_sar_transmission_status_response_parse(): [ /* returnType */ boolean, /* out_channel_notification */ TransmissionNotificationStatus | null, /* out_transmission_status */ TransmissionState | null, /* out_hysteresis_timer */ number | null ]
    ms_uicc_low_level_access_apdu_response_parse(): [ /* returnType */ boolean, /* out_status */ number | null, /* out_response */ Uint8Array[] | null ]
    ms_uicc_low_level_access_atr_response_parse(): [ /* returnType */ boolean, /* out_atr */ string | null ]
    ms_uicc_low_level_access_close_channel_response_parse(): [ /* returnType */ boolean, /* out_status */ number | null ]
    ms_uicc_low_level_access_open_channel_response_parse(): [ /* returnType */ boolean, /* out_status */ number | null, /* out_channel */ number | null, /* out_response */ Uint8Array[] | null ]
    ms_uicc_low_level_access_reset_response_parse(): [ /* returnType */ boolean, /* out_pass_through_status */ UiccPassThroughStatus | null ]
    ms_uicc_low_level_access_terminal_capability_response_parse(): [ /* returnType */ boolean, /* out_terminal_capability_count */ number | null, /* out_terminal_capability */ TerminalCapabilityInfo[] | null ]
    multicarrier_providers_notification_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    multicarrier_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    network_idle_hint_response_parse(): [ /* returnType */ boolean, /* out_state */ NetworkIdleHintState | null ]
    open_done_get_result(): boolean
    open_done_get_status_code(): StatusError
    open_get_max_control_transfer(): number
    packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_highest_available_data_class */ DataClass | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null ]
    packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_highest_available_data_class */ DataClass | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null ]
    packet_statistics_response_parse(): [ /* returnType */ boolean, /* out_in_discards */ number | null, /* out_in_errors */ number | null, /* out_in_octets */ number | null, /* out_in_packets */ number | null, /* out_out_octets */ number | null, /* out_out_packets */ number | null, /* out_out_errors */ number | null, /* out_out_discards */ number | null ]
    phonebook_configuration_notification_parse(): [ /* returnType */ boolean, /* out_state */ PhonebookState | null, /* out_number_of_entries */ number | null, /* out_used_entries */ number | null, /* out_max_number_length */ number | null, /* out_max_name */ number | null ]
    phonebook_configuration_response_parse(): [ /* returnType */ boolean, /* out_state */ PhonebookState | null, /* out_number_of_entries */ number | null, /* out_used_entries */ number | null, /* out_max_number_length */ number | null, /* out_max_name */ number | null ]
    phonebook_delete_response_parse(): boolean
    phonebook_read_response_parse(): [ /* returnType */ boolean, /* out_entry_count */ number | null, /* out_entries */ PhonebookEntry[] | null ]
    phonebook_write_response_parse(): boolean
    pin_list_response_parse(): [ /* returnType */ boolean, /* out_pin_desc_pin1 */ PinDesc | null, /* out_pin_desc_pin2 */ PinDesc | null, /* out_pin_desc_device_sim_pin */ PinDesc | null, /* out_pin_desc_device_first_sim_pin */ PinDesc | null, /* out_pin_desc_network_pin */ PinDesc | null, /* out_pin_desc_network_subset_pin */ PinDesc | null, /* out_pin_desc_service_provider_pin */ PinDesc | null, /* out_pin_desc_corporate_pin */ PinDesc | null, /* out_pin_desc_subsidy_lock */ PinDesc | null, /* out_pin_desc_custom */ PinDesc | null ]
    pin_response_parse(): [ /* returnType */ boolean, /* out_pin_type */ PinType | null, /* out_pin_state */ PinState | null, /* out_remaining_attempts */ number | null ]
    preferred_providers_notification_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    preferred_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    provisioned_contexts_notification_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number | null, /* out_provisioned_contexts */ ProvisionedContextElement[] | null ]
    provisioned_contexts_response_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number | null, /* out_provisioned_contexts */ ProvisionedContextElement[] | null ]
    proxy_control_configuration_response_parse(): boolean
    proxy_control_version_notification_parse(): [ /* returnType */ boolean, /* out_mbim_version */ number | null, /* out_mbim_extended_version */ number | null ]
    qdu_file_open_response_parse(): [ /* returnType */ boolean, /* out_max_transfer_size */ number | null, /* out_max_window_size */ number | null ]
    qdu_file_write_response_parse(): boolean
    qdu_update_session_response_parse(): [ /* returnType */ boolean, /* out_current_session_type */ QduSessionType | null, /* out_current_session_status */ QduSessionStatus | null, /* out_last_session_type */ QduSessionType | null, /* out_last_session_result */ QduSessionResult | null, /* out_last_session_error_offset */ number | null, /* out_last_session_error_size */ number | null ]
    qmi_msg_notification_parse(): [ /* returnType */ boolean, /* out_qmux */ Uint8Array[] | null ]
    qmi_msg_response_parse(): [ /* returnType */ boolean, /* out_qmux */ Uint8Array[] | null ]
    quectel_radio_state_response_parse(): [ /* returnType */ boolean, /* out_radio_state */ QuectelRadioSwitchState | null ]
    radio_state_notification_parse(): [ /* returnType */ boolean, /* out_hw_radio_state */ RadioSwitchState | null, /* out_sw_radio_state */ RadioSwitchState | null ]
    radio_state_response_parse(): [ /* returnType */ boolean, /* out_hw_radio_state */ RadioSwitchState | null, /* out_sw_radio_state */ RadioSwitchState | null ]
    ref(): Message
    register_state_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    response_get_result(expected: MessageType): boolean
    service_activation_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_buffer */ Uint8Array[] | null ]
    set_transaction_id(transaction_id: number): void
    signal_state_notification_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_signal_strength_interval */ number | null, /* out_rssi_threshold */ number | null, /* out_error_rate_threshold */ number | null ]
    signal_state_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_signal_strength_interval */ number | null, /* out_rssi_threshold */ number | null, /* out_error_rate_threshold */ number | null ]
    sms_configuration_response_parse(): [ /* returnType */ boolean, /* out_sms_storage_state */ SmsStorageState | null, /* out_format */ SmsFormat | null, /* out_max_messages */ number | null, /* out_cdma_short_message_size */ number | null, /* out_sc_address */ string | null ]
    sms_delete_response_parse(): boolean
    sms_message_store_status_notification_parse(): [ /* returnType */ boolean, /* out_flag */ SmsStatusFlag | null, /* out_message_index */ number | null ]
    sms_message_store_status_response_parse(): [ /* returnType */ boolean, /* out_flag */ SmsStatusFlag | null, /* out_message_index */ number | null ]
    sms_read_notification_parse(): [ /* returnType */ boolean, /* out_format */ SmsFormat | null, /* out_messages_count */ number | null, /* out_pdu_messages */ SmsPduReadRecord[] | null, /* out_cdma_messages */ SmsCdmaReadRecord[] | null ]
    sms_read_response_parse(): [ /* returnType */ boolean, /* out_format */ SmsFormat | null, /* out_messages_count */ number | null, /* out_pdu_messages */ SmsPduReadRecord[] | null, /* out_cdma_messages */ SmsCdmaReadRecord[] | null ]
    sms_send_response_parse(): [ /* returnType */ boolean, /* out_message_reference */ number | null ]
    stk_envelope_response_parse(): [ /* returnType */ boolean, /* out_envelope_support */ Uint8Array[] | null ]
    stk_pac_notification_parse(): [ /* returnType */ boolean, /* out_pac_type */ StkPacType | null, /* out_data_buffer */ Uint8Array[] | null ]
    stk_pac_response_parse(): [ /* returnType */ boolean, /* out_pac_support */ Uint8Array[] | null ]
    stk_terminal_response_response_parse(): [ /* returnType */ boolean, /* out_result_data */ Uint8Array[] | null, /* out_status_words */ number | null ]
    subscriber_ready_status_notification_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    subscriber_ready_status_response_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    unref(): void
    ussd_notification_parse(): [ /* returnType */ boolean, /* out_response */ UssdResponse | null, /* out_session_state */ UssdSessionState | null, /* out_data_coding_scheme */ number | null, /* out_payload */ Uint8Array[] | null ]
    ussd_response_parse(): [ /* returnType */ boolean, /* out_response */ UssdResponse | null, /* out_session_state */ UssdSessionState | null, /* out_data_coding_scheme */ number | null, /* out_payload */ Uint8Array[] | null ]
    visible_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    static name: string
    static new(data: number, data_length: number): Message
    constructor(data: number, data_length: number)
    /* Static methods and pseudo-constructors */
    static atds_location_query_new(): Message
    static atds_operators_query_new(): Message
    static atds_rat_query_new(): Message
    static atds_rat_set_new(mode: AtdsRatMode): Message
    static atds_register_state_query_new(): Message
    static atds_signal_query_new(): Message
    static auth_aka_query_new(rand: Uint8Array[], autn: Uint8Array[]): Message
    static auth_akap_query_new(rand: Uint8Array[], autn: Uint8Array[], network_name: string): Message
    static auth_sim_query_new(rand1: Uint8Array[], rand2: Uint8Array[], rand3: Uint8Array[], n: number): Message
    static close_done_new(transaction_id: number, error_status_code: StatusError): Message
    static close_new(transaction_id: number): Message
    static command_new(transaction_id: number, service: Service, cid: number, command_type: MessageCommandType): Message
    static connect_query_new(session_id: number, activation_state: ActivationState, voice_call_state: VoiceCallState, ip_type: ContextIpType, context_type: Uuid, nw_error: number): Message
    static connect_set_new(session_id: number, activation_command: ActivationCommand, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid): Message
    static device_caps_query_new(): Message
    static device_service_subscribe_list_set_new(events_count: number, events: EventEntry[]): Message
    static device_service_subscriber_list_set_new(events_count: number, events: EventEntry): Message
    static device_services_query_new(): Message
    static dss_connect_set_new(device_service_id: Uuid, dss_session_id: number, dss_link_state: DssLinkState): Message
    static emergency_mode_query_new(): Message
    static emergency_mode_set_new(state: EmergencyModeState): Message
    static error_new(transaction_id: number, error_status_code: ProtocolError): Message
    static function_error_new(transaction_id: number, error_status_code: ProtocolError): Message
    static home_provider_query_new(): Message
    static home_provider_set_new(provider: Provider): Message
    static intel_firmware_update_modem_reboot_set_new(): Message
    static ip_configuration_query_new(session_id: number, ipv4_configuration_available: IPConfigurationAvailableFlag, ipv6_configuration_available: IPConfigurationAvailableFlag, ipv4_address_count: number, ipv4_address: IPv4Element[], ipv6_address_count: number, ipv6_address: IPv6Element[], ipv4_gateway: IPv4, ipv6_gateway: IPv6, ipv4_dns_server_count: number, ipv4_dns_server: IPv4[], ipv6_dns_server_count: number, ipv6_dns_server: IPv6[], ipv4_mtu: number, ipv6_mtu: number): Message
    static ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter[]): Message
    static ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter[]): Message
    static ms_basic_connect_extensions_base_stations_info_query_new(max_gsm_count: number, max_umts_count: number, max_tdscdma_count: number, max_lte_count: number, max_cdma_count: number): Message
    static ms_basic_connect_extensions_device_caps_query_new(): Message
    static ms_basic_connect_extensions_device_slot_mappings_query_new(): Message
    static ms_basic_connect_extensions_device_slot_mappings_set_new(map_count: number, slot_map: Slot[]): Message
    static ms_basic_connect_extensions_location_info_status_query_new(): Message
    static ms_basic_connect_extensions_lte_attach_configuration_query_new(): Message
    static ms_basic_connect_extensions_lte_attach_configuration_set_new(operation: LteAttachContextOperation, configuration_count: number, configurations: LteAttachConfiguration[]): Message
    static ms_basic_connect_extensions_lte_attach_info_query_new(): Message
    static ms_basic_connect_extensions_lte_attach_status_query_new(): Message
    static ms_basic_connect_extensions_pco_query_new(pco_value: PcoValue): Message
    static ms_basic_connect_extensions_provisioned_contexts_query_new(): Message
    static ms_basic_connect_extensions_provisioned_contexts_set_new(operation: ContextOperation, context_type: Uuid, ip_type: ContextIpType, state: ContextState, roaming: ContextRoamingControl, media_type: ContextMediaType, source: ContextSource, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol): Message
    static ms_basic_connect_extensions_slot_info_status_query_new(slot_index: number): Message
    static ms_basic_connect_extensions_sys_caps_query_new(): Message
    static ms_basic_connect_extensions_v2_version_query_new(mbim_version: number, mbim_extended_version: number): Message
    static ms_basic_connect_extensions_v3_base_stations_info_query_new(max_gsm_count: number, max_umts_count: number, max_tdscdma_count: number, max_lte_count: number, max_cdma_count: number, max_nr_count: number): Message
    static ms_basic_connect_extensions_v3_modem_configuration_query_new(): Message
    static ms_basic_connect_extensions_v3_registration_parameters_query_new(): Message
    static ms_basic_connect_extensions_v3_registration_parameters_set_new(mico_mode: MicoMode, drx_cycle: DrxCycle, ladn_info: LadnInfo, default_pdu_activation_hint: DefaultPduActivationHint, re_register_if_nedeed: boolean, unnamed_ies: Tlv[]): Message
    static ms_basic_connect_extensions_v3_wake_reason_query_new(): Message
    static ms_basic_connect_v3_connect_query_new(session_id: number): Message
    static ms_basic_connect_v3_connect_set_new(session_id: number, activation_command: ActivationCommand, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid, media_preference: AccessMediaType, access_string: string, user_name: string, password: string, unnamed_ies: Tlv[]): Message
    static ms_basic_connect_v3_ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilterV3[]): Message
    static ms_basic_connect_v3_ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilterV3[]): Message
    static ms_firmware_id_get_query_new(): Message
    static ms_host_shutdown_notify_set_new(): Message
    static ms_sar_config_query_new(): Message
    static ms_sar_config_set_new(mode: SarControlMode, backoff_state: SarBackoffState, config_states_count: number, config_states: SarConfigState[]): Message
    static ms_sar_transmission_status_query_new(): Message
    static ms_sar_transmission_status_set_new(channel_notification: TransmissionNotificationStatus, hysteresis_timer: number): Message
    static ms_uicc_low_level_access_apdu_set_new(channel: number, secure_messaging: UiccSecureMessaging, class_byte_type: UiccClassByteType, command: Uint8Array[]): Message
    static ms_uicc_low_level_access_atr_query_new(): Message
    static ms_uicc_low_level_access_close_channel_set_new(channel: number, channel_group: number): Message
    static ms_uicc_low_level_access_open_channel_set_new(app_id: Uint8Array[], select_p2_arg: number, channel_group: number): Message
    static ms_uicc_low_level_access_reset_query_new(): Message
    static ms_uicc_low_level_access_reset_set_new(pass_through_action: UiccPassThroughAction): Message
    static ms_uicc_low_level_access_terminal_capability_query_new(): Message
    static ms_uicc_low_level_access_terminal_capability_set_new(terminal_capability_count: number, terminal_capability: TerminalCapabilityInfo[]): Message
    static multicarrier_providers_query_new(): Message
    static multicarrier_providers_set_new(providers_count: number, providers: Provider[]): Message
    static network_idle_hint_query_new(): Message
    static network_idle_hint_set_new(state: NetworkIdleHintState): Message
    static new(data: number, data_length: number): Message
    static open_done_new(transaction_id: number, error_status_code: StatusError): Message
    static open_new(transaction_id: number, max_control_transfer: number): Message
    static packet_service_query_new(): Message
    static packet_service_set_new(packet_service_action: PacketServiceAction): Message
    static packet_statistics_query_new(): Message
    static phonebook_configuration_query_new(): Message
    static phonebook_delete_set_new(filter_flag: PhonebookFlag, filter_message_index: number): Message
    static phonebook_read_query_new(filter_flag: PhonebookFlag, filter_message_index: number): Message
    static phonebook_write_set_new(save_flag: PhonebookWriteFlag, save_index: number, number: string, name: string): Message
    static pin_list_query_new(): Message
    static pin_query_new(): Message
    static pin_set_new(pin_type: PinType, pin_operation: PinOperation, pin: string, new_pin: string): Message
    static preferred_providers_query_new(): Message
    static preferred_providers_set_new(providers_count: number, providers: Provider[]): Message
    static provisioned_contexts_query_new(): Message
    static provisioned_contexts_set_new(context_id: number, context_type: Uuid, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, provider_id: string): Message
    static proxy_control_configuration_set_new(device_path: string, timeout: number): Message
    static qdu_file_open_query_new(): Message
    static qdu_file_open_set_new(file_type: QduFileType, file_size: number): Message
    static qdu_file_write_set_new(data_buffer: Uint8Array[]): Message
    static qdu_update_session_query_new(): Message
    static qdu_update_session_set_new(session_action: QduSessionAction, session_type: QduSessionType): Message
    static qmi_msg_set_new(qmi_msg: Uint8Array[]): Message
    static quectel_radio_state_query_new(): Message
    static quectel_radio_state_set_new(radio_state: QuectelRadioSwitchState): Message
    static radio_state_query_new(): Message
    static radio_state_set_new(radio_state: RadioSwitchState): Message
    static register_state_query_new(): Message
    static register_state_set_new(provider_id: string, register_action: RegisterAction, data_class: DataClass): Message
    static service_activation_set_new(buffer: Uint8Array[]): Message
    static signal_state_query_new(): Message
    static signal_state_set_new(signal_strength_interval: number, rssi_threshold: number, error_rate_threshold: number): Message
    static sms_configuration_query_new(): Message
    static sms_configuration_set_new(format: SmsFormat, sc_address: string): Message
    static sms_delete_set_new(flag: SmsFlag, message_index: number): Message
    static sms_message_store_status_query_new(): Message
    static sms_read_query_new(format: SmsFormat, flag: SmsFlag, message_index: number): Message
    static sms_send_set_new(format: SmsFormat, pdu_message: SmsPduSendRecord, cdma_message: SmsCdmaSendRecord): Message
    static stk_envelope_query_new(): Message
    static stk_envelope_set_new(data: Uint8Array[]): Message
    static stk_pac_query_new(): Message
    static stk_pac_set_new(pac_host_control: Uint8Array[]): Message
    static stk_terminal_response_set_new(response: Uint8Array[]): Message
    static subscriber_ready_status_query_new(): Message
    static ussd_set_new(action: UssdAction, data_coding_scheme: number, payload: Uint8Array[]): Message
    static visible_providers_query_new(action: VisibleProvidersAction): Message
}
class PacketFilter {
    /* Fields of Mbim-1.0.Mbim.PacketFilter */
    filter_size: number
    packet_filter: number
    packet_mask: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: PacketFilterArray): void
}
class PacketFilterV3 {
    /* Fields of Mbim-1.0.Mbim.PacketFilterV3 */
    filter_size: number
    packet_filter: number
    packet_mask: number
    filter_id: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: PacketFilterV3Array): void
}
class PcoValue {
    /* Fields of Mbim-1.0.Mbim.PcoValue */
    session_id: number
    pco_data_size: number
    pco_data_type: number
    pco_data_buffer: number
    /* Methods of Mbim-1.0.Mbim.PcoValue */
    free(): void
    static name: string
}
class PhonebookEntry {
    /* Fields of Mbim-1.0.Mbim.PhonebookEntry */
    entry_index: number
    number: string
    name: string
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: PhonebookEntryArray): void
}
class PinDesc {
    /* Fields of Mbim-1.0.Mbim.PinDesc */
    pin_mode: number
    pin_format: number
    pin_length_min: number
    pin_length_max: number
    /* Methods of Mbim-1.0.Mbim.PinDesc */
    free(): void
    static name: string
}
class Provider {
    /* Fields of Mbim-1.0.Mbim.Provider */
    provider_id: string
    provider_state: number
    provider_name: string
    cellular_class: number
    rssi: number
    error_rate: number
    /* Methods of Mbim-1.0.Mbim.Provider */
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: ProviderArray): void
}
class ProvisionedContextElement {
    /* Fields of Mbim-1.0.Mbim.ProvisionedContextElement */
    context_id: number
    context_type: Uuid
    access_string: string
    user_name: string
    password: string
    compression: number
    auth_protocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: ProvisionedContextElementArray): void
}
class ProvisionedContextElementV2 {
    /* Fields of Mbim-1.0.Mbim.ProvisionedContextElementV2 */
    context_id: number
    context_type: Uuid
    ip_type: number
    state: number
    roaming: number
    media_type: number
    source: number
    access_string: string
    user_name: string
    password: string
    compression: number
    auth_protocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: ProvisionedContextElementV2Array): void
}
abstract class ProxyClass {
    /* Fields of Mbim-1.0.Mbim.ProxyClass */
    parent: GObject.ObjectClass
    static name: string
}
class ProxyPrivate {
    static name: string
}
class RsrpSnrInfo {
    /* Fields of Mbim-1.0.Mbim.RsrpSnrInfo */
    rsrp: number
    snr: number
    rsrp_threshold: number
    snr_threshold: number
    system_type: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: RsrpSnrInfoArray): void
}
class SarConfigState {
    /* Fields of Mbim-1.0.Mbim.SarConfigState */
    antenna_index: number
    backoff_index: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: SarConfigStateArray): void
}
class Slot {
    /* Fields of Mbim-1.0.Mbim.Slot */
    slot: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: SlotArray): void
}
class SmsCdmaReadRecord {
    /* Fields of Mbim-1.0.Mbim.SmsCdmaReadRecord */
    message_index: number
    message_status: number
    address: string
    timestamp: string
    encoding: number
    language: number
    encoded_message_size: number
    encoded_message: number
    encoded_message_size_in_characters: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: SmsCdmaReadRecordArray): void
}
class SmsCdmaSendRecord {
    /* Fields of Mbim-1.0.Mbim.SmsCdmaSendRecord */
    encoding: number
    language: number
    address: string
    encoded_message_size: number
    encoded_message: number
    encoded_message_size_in_characters: number
    /* Methods of Mbim-1.0.Mbim.SmsCdmaSendRecord */
    free(): void
    static name: string
}
class SmsPduReadRecord {
    /* Fields of Mbim-1.0.Mbim.SmsPduReadRecord */
    message_index: number
    message_status: number
    pdu_data_size: number
    pdu_data: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: SmsPduReadRecordArray): void
}
class SmsPduSendRecord {
    /* Fields of Mbim-1.0.Mbim.SmsPduSendRecord */
    pdu_data_size: number
    pdu_data: number
    /* Methods of Mbim-1.0.Mbim.SmsPduSendRecord */
    free(): void
    static name: string
}
class Tai {
    /* Fields of Mbim-1.0.Mbim.Tai */
    plmn_mcc: number
    plmn_mnc: number
    tac: number
    /* Methods of Mbim-1.0.Mbim.Tai */
    free(): void
    static name: string
}
class TerminalCapabilityInfo {
    /* Fields of Mbim-1.0.Mbim.TerminalCapabilityInfo */
    terminal_capability_data_size: number
    terminal_capability_data: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: TerminalCapabilityInfoArray): void
}
class Tlv {
    /* Methods of Mbim-1.0.Mbim.Tlv */
    dup(): Tlv
    get_raw(): [ /* returnType */ number, /* length */ number ]
    get_tlv_data(): [ /* returnType */ number, /* out_length */ number ]
    get_tlv_type(): TlvType
    guint16_array_get(): [ /* returnType */ boolean, /* array_size */ number | null, /* array */ number | null ]
    ref(): Tlv
    string_get(): string
    unref(): void
    wake_command_get(): [ /* returnType */ boolean, /* service */ Uuid | null, /* cid */ number | null, /* payload_size */ number | null, /* payload */ number | null ]
    wake_packet_get(): [ /* returnType */ boolean, /* filter_id */ number | null, /* original_packet_size */ number | null, /* packet_size */ number | null, /* packet */ number | null ]
    static name: string
    static new(type: TlvType, data: number, data_length: number): Tlv
    constructor(type: TlvType, data: number, data_length: number)
    /* Static methods and pseudo-constructors */
    static new(type: TlvType, data: number, data_length: number): Tlv
    static string_new(str: string): Tlv
}
class Uuid {
    /* Fields of Mbim-1.0.Mbim.Uuid */
    a: Uint8Array[]
    b: Uint8Array[]
    c: Uint8Array[]
    d: Uint8Array[]
    e: Uint8Array[]
    /* Methods of Mbim-1.0.Mbim.Uuid */
    cmp(b: Uuid): boolean
    get_printable(): string
    to_context_type(): ContextType
    to_service(): Service
    static name: string
    /* Static methods and pseudo-constructors */
    static from_context_type(context_type: ContextType): Uuid
    static from_printable(str: string, uuid: Uuid): boolean
    static from_service(service: Service): Uuid
}
type AtdsProviderArray = AtdsProvider
type CellInfoCdmaArray = CellInfoCdma
type CellInfoNeighboringGsmArray = CellInfoNeighboringGsm
type CellInfoNeighboringLteArray = CellInfoNeighboringLte
type CellInfoNeighboringNrArray = CellInfoNeighboringNr
type CellInfoNeighboringTdscdmaArray = CellInfoNeighboringTdscdma
type CellInfoNeighboringUmtsArray = CellInfoNeighboringUmts
type CellInfoServingNrArray = CellInfoServingNr
type DeprecatedCidBasicConnect = number
type DeprecatedCidMsBasicConnectExtensions = number
type DeprecatedRegistrationFlag = number
type DeviceServiceElementArray = DeviceServiceElement
type EventEntryArray = EventEntry
type IPv4ElementArray = IPv4Element
type IPv6ElementArray = IPv6Element
type LteAttachConfigurationArray = LteAttachConfiguration
type NwErrorDeprecated = number
type PacketFilterArray = PacketFilter
type PacketFilterV3Array = PacketFilterV3
type PhonebookEntryArray = PhonebookEntry
type ProviderArray = Provider
type ProvisionedContextElementArray = ProvisionedContextElement
type ProvisionedContextElementV2Array = ProvisionedContextElementV2
type RsrpSnrInfoArray = RsrpSnrInfo
type SarConfigStateArray = SarConfigState
type SlotArray = Slot
type SmsCdmaReadRecordArray = SmsCdmaReadRecord
type SmsPduReadRecordArray = SmsPduReadRecord
type TerminalCapabilityInfoArray = TerminalCapabilityInfo
}
export default Mbim