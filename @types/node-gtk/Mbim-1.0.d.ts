/**
 * Mbim-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Mbim {

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
function accessMediaTypeGetString(val: AccessMediaType): string
function activationCommandGetString(val: ActivationCommand): string
function activationStateGetString(val: ActivationState): string
function atdsProviderArrayFree(array: AtdsProviderArray): void
function atdsProviderPlmnModeGetString(val: AtdsProviderPlmnMode): string
function atdsRatModeGetString(val: AtdsRatMode): string
function authProtocolGetString(val: AuthProtocol): string
function cellInfoCdmaArrayFree(array: CellInfoCdmaArray): void
function cellInfoNeighboringGsmArrayFree(array: CellInfoNeighboringGsmArray): void
function cellInfoNeighboringLteArrayFree(array: CellInfoNeighboringLteArray): void
function cellInfoNeighboringNrArrayFree(array: CellInfoNeighboringNrArray): void
function cellInfoNeighboringTdscdmaArrayFree(array: CellInfoNeighboringTdscdmaArray): void
function cellInfoNeighboringUmtsArrayFree(array: CellInfoNeighboringUmtsArray): void
function cellInfoServingNrArrayFree(array: CellInfoServingNrArray): void
function cellularClassBuildStringFromMask(mask: CellularClass): string
function cidAtdsGetString(val: CidAtds): string
function cidAuthGetString(val: CidAuth): string
function cidBasicConnectGetString(val: CidBasicConnect): string
function cidCanNotify(service: Service, cid: number): boolean
function cidCanQuery(service: Service, cid: number): boolean
function cidCanSet(service: Service, cid: number): boolean
function cidDssGetString(val: CidDss): string
function cidGetPrintable(service: Service, cid: number): string
function cidIntelFirmwareUpdateGetString(val: CidIntelFirmwareUpdate): string
function cidMsBasicConnectExtensionsGetString(val: CidMsBasicConnectExtensions): string
function cidMsFirmwareIdGetString(val: CidMsFirmwareId): string
function cidMsHostShutdownGetString(val: CidMsHostShutdown): string
function cidMsSarGetString(val: CidMsSar): string
function cidMsUiccLowLevelAccessGetString(val: CidMsUiccLowLevelAccess): string
function cidPhonebookGetString(val: CidPhonebook): string
function cidProxyControlGetString(val: CidProxyControl): string
function cidQduGetString(val: CidQdu): string
function cidQmiGetString(val: CidQmi): string
function cidQuectelGetString(val: CidQuectel): string
function cidSmsGetString(val: CidSms): string
function cidStkGetString(val: CidStk): string
function cidUssdGetString(val: CidUssd): string
function compressionGetString(val: Compression): string
function contextIpTypeGetString(val: ContextIpType): string
function contextMediaTypeGetString(val: ContextMediaType): string
function contextOperationGetString(val: ContextOperation): string
function contextRoamingControlGetString(val: ContextRoamingControl): string
function contextSourceGetString(val: ContextSource): string
function contextStateGetString(val: ContextState): string
function contextTypeGetString(val: ContextType): string
function coreErrorGetString(val: CoreError): string
function coreErrorQuark(): GLib.Quark
function ctrlCapsBuildStringFromMask(mask: CtrlCaps): string
function dataClassBuildStringFromMask(mask: DataClass): string
function dataClassV3BuildStringFromMask(mask: DataClassV3): string
function dataSubclassBuildStringFromMask(mask: DataSubclass): string
function defaultPduActivationHintGetString(val: DefaultPduActivationHint): string
function deviceServiceElementArrayFree(array: DeviceServiceElementArray): void
function deviceTypeGetString(val: DeviceType): string
function drxCycleGetString(val: DrxCycle): string
function dssLinkStateGetString(val: DssLinkState): string
function emergencyModeStateGetString(val: EmergencyModeState): string
function eventEntryArrayFree(array: EventEntryArray): void
function frequencyRangeBuildStringFromMask(mask: FrequencyRange): string
function ipConfigurationAvailableFlagBuildStringFromMask(mask: IPConfigurationAvailableFlag): string
function ipv4ElementArrayFree(array: IPv4ElementArray): void
function ipv6ElementArrayFree(array: IPv6ElementArray): void
function ladnInfoGetString(val: LadnInfo): string
function lteAttachConfigurationArrayFree(array: LteAttachConfigurationArray): void
function lteAttachContextOperationGetString(val: LteAttachContextOperation): string
function lteAttachContextRoamingControlGetString(val: LteAttachContextRoamingControl): string
function lteAttachStateGetString(val: LteAttachState): string
function messageCommandTypeGetString(val: MessageCommandType): string
function messageTypeGetString(val: MessageType): string
function micoModeGetString(val: MicoMode): string
function modemConfigurationStatusGetString(val: ModemConfigurationStatus): string
function networkIdleHintStateGetString(val: NetworkIdleHintState): string
function nwErrorGetString(val: NwError): string
function packetFilterArrayFree(array: PacketFilterArray): void
function packetFilterV3ArrayFree(array: PacketFilterV3Array): void
function packetServiceActionGetString(val: PacketServiceAction): string
function packetServiceStateGetString(val: PacketServiceState): string
function pcoTypeGetString(val: PcoType): string
function phonebookEntryArrayFree(array: PhonebookEntryArray): void
function phonebookFlagGetString(val: PhonebookFlag): string
function phonebookStateGetString(val: PhonebookState): string
function phonebookWriteFlagGetString(val: PhonebookWriteFlag): string
function pinFormatGetString(val: PinFormat): string
function pinModeGetString(val: PinMode): string
function pinOperationGetString(val: PinOperation): string
function pinStateGetString(val: PinState): string
function pinTypeGetString(val: PinType): string
function protocolErrorGetString(val: ProtocolError): string
function protocolErrorQuark(): GLib.Quark
function providerArrayFree(array: ProviderArray): void
function providerStateBuildStringFromMask(mask: ProviderState): string
function provisionedContextElementArrayFree(array: ProvisionedContextElementArray): void
function provisionedContextElementV2ArrayFree(array: ProvisionedContextElementV2Array): void
function qduFileTypeGetString(val: QduFileType): string
function qduSessionActionGetString(val: QduSessionAction): string
function qduSessionResultGetString(val: QduSessionResult): string
function qduSessionStatusGetString(val: QduSessionStatus): string
function qduSessionTypeGetString(val: QduSessionType): string
function quectelRadioSwitchStateGetString(val: QuectelRadioSwitchState): string
function radioSwitchStateGetString(val: RadioSwitchState): string
function readyInfoFlagBuildStringFromMask(mask: ReadyInfoFlag): string
function registerActionGetString(val: RegisterAction): string
function registerCustomService(uuid: Uuid, nickname: string): number
function registerModeGetString(val: RegisterMode): string
function registerStateGetString(val: RegisterState): string
function registrationFlagBuildStringFromMask(mask: RegistrationFlag): string
function rsrpSnrInfoArrayFree(array: RsrpSnrInfoArray): void
function sarBackoffStateGetString(val: SarBackoffState): string
function sarConfigStateArrayFree(array: SarConfigStateArray): void
function sarControlModeGetString(val: SarControlMode): string
function sarWifiHardwareStateGetString(val: SarWifiHardwareState): string
function serviceGetString(val: Service): string
function serviceIdIsCustom(id: number): boolean
function serviceLookupName(service: number): string
function simClassBuildStringFromMask(mask: SimClass): string
function slotArrayFree(array: SlotArray): void
function smsCapsBuildStringFromMask(mask: SmsCaps): string
function smsCdmaEncodingGetString(val: SmsCdmaEncoding): string
function smsCdmaLangGetString(val: SmsCdmaLang): string
function smsCdmaReadRecordArrayFree(array: SmsCdmaReadRecordArray): void
function smsFlagGetString(val: SmsFlag): string
function smsFormatGetString(val: SmsFormat): string
function smsPduReadRecordArrayFree(array: SmsPduReadRecordArray): void
function smsStatusFlagGetString(val: SmsStatusFlag): string
function smsStatusGetString(val: SmsStatus): string
function smsStorageStateGetString(val: SmsStorageState): string
function statusErrorGetString(val: StatusError): string
function statusErrorQuark(): GLib.Quark
function stkPacProfileGetString(val: StkPacProfile): string
function stkPacTypeGetString(val: StkPacType): string
function subscriberReadyStateGetString(val: SubscriberReadyState): string
function subscriberReadyStatusFlagBuildStringFromMask(mask: SubscriberReadyStatusFlag): string
function terminalCapabilityInfoArrayFree(array: TerminalCapabilityInfoArray): void
function tlvTypeGetString(val: TlvType): string
function transmissionNotificationStatusGetString(val: TransmissionNotificationStatus): string
function transmissionStateGetString(val: TransmissionState): string
function uiccClassByteTypeGetString(val: UiccClassByteType): string
function uiccPassThroughActionGetString(val: UiccPassThroughAction): string
function uiccPassThroughStatusGetString(val: UiccPassThroughStatus): string
function uiccSecureMessagingGetString(val: UiccSecureMessaging): string
function uiccSlotStateGetString(val: UiccSlotState): string
function unregisterCustomService(id: number): boolean
function ussdActionGetString(val: UssdAction): string
function ussdResponseGetString(val: UssdResponse): string
function ussdSessionStateGetString(val: UssdSessionState): string
function utilsGetTracesEnabled(): boolean
function utilsSetTracesEnabled(enabled: boolean): void
function uuidFromContextType(contextType: ContextType): Uuid
function uuidFromPrintable(str: string, uuid: Uuid): boolean
function uuidFromService(service: Service): Uuid
function visibleProvidersActionGetString(val: VisibleProvidersAction): string
function voiceCallStateGetString(val: VoiceCallState): string
function voiceClassGetString(val: VoiceClass): string
function wakeTypeGetString(val: WakeType): string
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    deviceFile?: Gio.File
    deviceInSession?: boolean
    deviceTransactionId?: number
}
class Device {
    /* Properties of Mbim-1.0.Mbim.Device */
    deviceInSession: boolean
    deviceTransactionId: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Mbim-1.0.Mbim.Device */
    addLink(sessionId: number, baseIfname: string, ifnamePrefix: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addLinkFinish(res: Gio.AsyncResult, sessionId: number): string
    checkLinkSupported(): boolean
    checkMsMbimexVersion(msMbimexVersionMajor: number, msMbimexVersionMinor: number): boolean
    close(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): boolean
    closeForce(): boolean
    command(message: Message, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    commandFinish(res: Gio.AsyncResult): Message
    deleteAllLinks(baseIfname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteAllLinksFinish(res: Gio.AsyncResult): boolean
    deleteLink(ifname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteLinkFinish(res: Gio.AsyncResult): boolean
    getMsMbimexVersion(outMsMbimexVersionMinor: number): number
    getNextTransactionId(): number
    getPath(): string
    getPathDisplay(): string
    getTransactionId(): number
    isOpen(): boolean
    listLinks(baseIfname: string): { returnType: boolean, outLinks: string[] }
    open(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(res: Gio.AsyncResult): boolean
    openFull(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFullFinish(res: Gio.AsyncResult): boolean
    setMsMbimexVersion(msMbimexVersionMajor: number, msMbimexVersionMinor: number): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Signals of Mbim-1.0.Mbim.Device */
    connect(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    on(sigName: "device-error", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-error", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-error", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "device-error", object: GLib.Error): void
    connect(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    on(sigName: "device-indicate-status", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-indicate-status", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-indicate-status", callback: (object: Message) => void): NodeJS.EventEmitter
    emit(sigName: "device-indicate-status", object: Message): void
    connect(sigName: "device-removed", callback: (($obj: Device) => void)): number
    on(sigName: "device-removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "device-removed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-in-session", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-in-session", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-in-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-in-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-in-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-transaction-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-transaction-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): Device
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
}
class Proxy {
    /* Properties of Mbim-1.0.Mbim.Proxy */
    readonly mbimProxyNClients: number
    readonly mbimProxyNDevices: number
    /* Fields of Mbim-1.0.Mbim.Proxy */
    parent: GObject.Object
    priv: ProxyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mbim-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mbim-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mbim-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mbim-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mbim-proxy-n-devices", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-devices", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mbim-proxy-n-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mbim-proxy-n-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mbim-proxy-n-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Proxy
    static $gtype: GObject.Type
}
class AtdsProvider {
    /* Fields of Mbim-1.0.Mbim.AtdsProvider */
    providerId: string
    providerState: number
    providerName: string
    plmnMode: number
    rssi: number
    errorRate: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: AtdsProviderArray): void
}
class CellInfoCdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoCdma */
    servingCellFlag: number
    nid: number
    sid: number
    baseStationId: number
    baseLatitude: number
    baseLongitude: number
    refPn: number
    gpsSeconds: number
    pilotStrength: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: CellInfoCdmaArray): void
}
class CellInfoNeighboringGsm {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringGsm */
    providerId: string
    locationAreaCode: number
    cellId: number
    arfcn: number
    baseStationId: number
    rxLevel: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: CellInfoNeighboringGsmArray): void
}
class CellInfoNeighboringLte {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringLte */
    providerId: string
    cellId: number
    earfcn: number
    physicalCellId: number
    tac: number
    rsrp: number
    rsrq: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: CellInfoNeighboringLteArray): void
}
class CellInfoNeighboringNr {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringNr */
    systemSubType: number
    providerId: string
    cellId: string
    physicalCellId: number
    tac: number
    rsrp: number
    rsrq: number
    sinr: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: CellInfoNeighboringNrArray): void
}
class CellInfoNeighboringTdscdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma */
    providerId: string
    locationAreaCode: number
    cellId: number
    uarfcn: number
    cellParameterId: number
    timingAdvance: number
    rscp: number
    pathLoss: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: CellInfoNeighboringTdscdmaArray): void
}
class CellInfoNeighboringUmts {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringUmts */
    providerId: string
    locationAreaCode: number
    cellId: number
    uarfcn: number
    primaryScramblingCode: number
    rscp: number
    ecno: number
    pathLoss: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: CellInfoNeighboringUmtsArray): void
}
class CellInfoServingGsm {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingGsm */
    providerId: string
    locationAreaCode: number
    cellId: number
    timingAdvance: number
    arfcn: number
    baseStationId: number
    rxLevel: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingGsm */
    free(): void
    static name: string
}
class CellInfoServingLte {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingLte */
    providerId: string
    cellId: number
    earfcn: number
    physicalCellId: number
    tac: number
    rsrp: number
    rsrq: number
    timingAdvance: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingLte */
    free(): void
    static name: string
}
class CellInfoServingNr {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingNr */
    providerId: string
    nci: number
    physicalCellId: number
    nrarfcn: number
    tac: number
    rsrp: number
    rsrq: number
    sinr: number
    timingAdvance: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: CellInfoServingNrArray): void
}
class CellInfoServingTdscdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingTdscdma */
    providerId: string
    locationAreaCode: number
    cellId: number
    uarfcn: number
    cellParameterId: number
    timingAdvance: number
    rscp: number
    pathLoss: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingTdscdma */
    free(): void
    static name: string
}
class CellInfoServingUmts {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingUmts */
    providerId: string
    locationAreaCode: number
    cellId: number
    frequencyInfoUl: number
    frequencyInfoDl: number
    frequencyInfoNt: number
    uarfcn: number
    primaryScramblingCode: number
    rscp: number
    ecno: number
    pathLoss: number
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
    deviceServiceId: Uuid
    dssPayload: number
    maxDssInstances: number
    cidsCount: number
    cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: DeviceServiceElementArray): void
}
class EventEntry {
    /* Fields of Mbim-1.0.Mbim.EventEntry */
    deviceServiceId: Uuid
    cidsCount: number
    cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: EventEntryArray): void
}
class IPv4 {
    /* Fields of Mbim-1.0.Mbim.IPv4 */
    addr: any[]
    static name: string
}
class IPv4Element {
    /* Fields of Mbim-1.0.Mbim.IPv4Element */
    onLinkPrefixLength: number
    ipv4Address: IPv4
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: IPv4ElementArray): void
}
class IPv6 {
    /* Fields of Mbim-1.0.Mbim.IPv6 */
    addr: any[]
    static name: string
}
class IPv6Element {
    /* Fields of Mbim-1.0.Mbim.IPv6Element */
    onLinkPrefixLength: number
    ipv6Address: IPv6
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: IPv6ElementArray): void
}
class LteAttachConfiguration {
    /* Fields of Mbim-1.0.Mbim.LteAttachConfiguration */
    ipType: number
    roaming: number
    source: number
    accessString: string
    userName: string
    password: string
    compression: number
    authProtocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: LteAttachConfigurationArray): void
}
class LteAttachStatus {
    /* Fields of Mbim-1.0.Mbim.LteAttachStatus */
    lteAttachState: number
    ipType: number
    accessString: string
    userName: string
    password: string
    compression: number
    authProtocol: number
    /* Methods of Mbim-1.0.Mbim.LteAttachStatus */
    free(): void
    static name: string
}
class Message {
    /* Methods of Mbim-1.0.Mbim.Message */
    atdsLocationResponseParse(): { returnType: boolean, outLac: number | null, outTac: number | null, outCellId: number | null }
    atdsOperatorsResponseParse(): { returnType: boolean, outProvidersCount: number | null, outProviders: AtdsProvider[] | null }
    atdsRatResponseParse(): { returnType: boolean, outMode: AtdsRatMode | null }
    atdsRegisterStateResponseParse(): { returnType: boolean, outNwError: NwError | null, outRegisterState: RegisterState | null, outRegisterMode: RegisterMode | null, outAvailableDataClasses: DataClass | null, outCurrentCellularClass: CellularClass | null, outProviderId: string | null, outProviderName: string | null, outRoamingText: string | null, outRegistrationFlag: RegistrationFlag | null }
    atdsSignalResponseParse(): { returnType: boolean, outRssi: number | null, outErrorRate: number | null, outRscp: number | null, outEcno: number | null, outRsrq: number | null, outRsrp: number | null, outRssnr: number | null }
    authAkaResponseParse(): { returnType: boolean, outRes: any[] | null, outResLen: number | null, outIntegratingKey: any[] | null, outCipheringKey: any[] | null, outAuts: any[] | null }
    authAkapResponseParse(): { returnType: boolean, outRes: any[] | null, outResLen: number | null, outIntegratingKey: any[] | null, outCipheringKey: any[] | null, outAuts: any[] | null }
    authSimResponseParse(): { returnType: boolean, outSres1: number | null, outKc1: number | null, outSres2: number | null, outKc2: number | null, outSres3: number | null, outKc3: number | null, outN: number | null }
    closeDoneGetResult(): boolean
    closeDoneGetStatusCode(): StatusError
    commandAppend(buffer: number, bufferSize: number): void
    commandDoneGetCid(): number
    commandDoneGetRawInformationBuffer(): { returnType: number, outLength: number }
    commandDoneGetResult(): boolean
    commandDoneGetService(): Service
    commandDoneGetServiceId(): Uuid
    commandDoneGetStatusCode(): StatusError
    commandGetCid(): number
    commandGetCommandType(): MessageCommandType
    commandGetRawInformationBuffer(): { returnType: number, outLength: number }
    commandGetService(): Service
    commandGetServiceId(): Uuid
    connectNotificationParse(): { returnType: boolean, outSessionId: number | null, outActivationState: ActivationState | null, outVoiceCallState: VoiceCallState | null, outIpType: ContextIpType | null, outContextType: Uuid | null, outNwError: number | null }
    connectResponseParse(): { returnType: boolean, outSessionId: number | null, outActivationState: ActivationState | null, outVoiceCallState: VoiceCallState | null, outIpType: ContextIpType | null, outContextType: Uuid | null, outNwError: number | null }
    deviceCapsResponseParse(): { returnType: boolean, outDeviceType: DeviceType | null, outCellularClass: CellularClass | null, outVoiceClass: VoiceClass | null, outSimClass: SimClass | null, outDataClass: DataClass | null, outSmsCaps: SmsCaps | null, outControlCaps: CtrlCaps | null, outMaxSessions: number | null, outCustomDataClass: string | null, outDeviceId: string | null, outFirmwareInfo: string | null, outHardwareInfo: string | null }
    deviceServiceSubscribeListResponseParse(): { returnType: boolean, outEventsCount: number | null, outEvents: EventEntry[] | null }
    deviceServiceSubscriberListResponseParse(eventsCount: number, events: EventEntry): boolean
    deviceServicesResponseParse(): { returnType: boolean, outDeviceServicesCount: number | null, outMaxDssSessions: number | null, outDeviceServices: DeviceServiceElement[] | null }
    dssConnectResponseParse(): boolean
    dup(): Message
    emergencyModeNotificationParse(): { returnType: boolean, outState: EmergencyModeState | null }
    emergencyModeResponseParse(): { returnType: boolean, outState: EmergencyModeState | null }
    errorGetError(): GLib.Error
    errorGetErrorStatusCode(): ProtocolError
    getMessageLength(): number
    getMessageType(): MessageType
    getPrintable(linePrefix: string, headersOnly: boolean): string
    getPrintableFull(mbimexVersionMajor: number, mbimexVersionMinor: number, linePrefix: string, headersOnly: boolean): string
    getRaw(): { returnType: number, length: number }
    getTransactionId(): number
    homeProviderResponseParse(): { returnType: boolean, outProvider: Provider | null }
    indicateStatusGetCid(): number
    indicateStatusGetRawInformationBuffer(): { returnType: number, outLength: number }
    indicateStatusGetService(): Service
    indicateStatusGetServiceId(): Uuid
    ipConfigurationNotificationParse(): { returnType: boolean, outSessionId: number | null, outIpv4ConfigurationAvailable: IPConfigurationAvailableFlag | null, outIpv6ConfigurationAvailable: IPConfigurationAvailableFlag | null, outIpv4AddressCount: number | null, outIpv4Address: IPv4Element[] | null, outIpv6AddressCount: number | null, outIpv6Address: IPv6Element[] | null, outIpv4Gateway: IPv4 | null, outIpv6Gateway: IPv6 | null, outIpv4DnsServerCount: number | null, outIpv4DnsServer: IPv4[] | null, outIpv6DnsServerCount: number | null, outIpv6DnsServer: IPv6[] | null, outIpv4Mtu: number | null, outIpv6Mtu: number | null }
    ipConfigurationResponseParse(): { returnType: boolean, outSessionId: number | null, outIpv4ConfigurationAvailable: IPConfigurationAvailableFlag | null, outIpv6ConfigurationAvailable: IPConfigurationAvailableFlag | null, outIpv4AddressCount: number | null, outIpv4Address: IPv4Element[] | null, outIpv6AddressCount: number | null, outIpv6Address: IPv6Element[] | null, outIpv4Gateway: IPv4 | null, outIpv6Gateway: IPv6 | null, outIpv4DnsServerCount: number | null, outIpv4DnsServer: IPv4[] | null, outIpv6DnsServerCount: number | null, outIpv6DnsServer: IPv6[] | null, outIpv4Mtu: number | null, outIpv6Mtu: number | null }
    ipPacketFiltersResponseParse(): { returnType: boolean, outSessionId: number | null, outPacketFiltersCount: number | null, outPacketFilters: PacketFilter[] | null }
    msBasicConnectExtensionsBaseStationsInfoResponseParse(): { returnType: boolean, outSystemType: DataClass | null, outGsmServingCell: CellInfoServingGsm | null, outUmtsServingCell: CellInfoServingUmts | null, outTdscdmaServingCell: CellInfoServingTdscdma | null, outLteServingCell: CellInfoServingLte | null, outGsmNeighboringCellsCount: number | null, outGsmNeighboringCells: CellInfoNeighboringGsm[] | null, outUmtsNeighboringCellsCount: number | null, outUmtsNeighboringCells: CellInfoNeighboringUmts[] | null, outTdscdmaNeighboringCellsCount: number | null, outTdscdmaNeighboringCells: CellInfoNeighboringTdscdma[] | null, outLteNeighboringCellsCount: number | null, outLteNeighboringCells: CellInfoNeighboringLte[] | null, outCdmaCellsCount: number | null, outCdmaCells: CellInfoCdma[] | null }
    msBasicConnectExtensionsDeviceCapsResponseParse(): { returnType: boolean, outDeviceType: DeviceType | null, outCellularClass: CellularClass | null, outVoiceClass: VoiceClass | null, outSmsClass: SimClass | null, outDataClass: DataClass | null, outSmsCaps: SmsCaps | null, outControlCaps: CtrlCaps | null, outMaxSessions: number | null, outCustomDataClass: string | null, outDeviceId: string | null, outFirmwareInfo: string | null, outHardwareInfo: string | null, outExecutorIndex: number | null }
    msBasicConnectExtensionsDeviceSlotMappingsResponseParse(): { returnType: boolean, outMapCount: number | null, outSlotMap: Slot[] | null }
    msBasicConnectExtensionsLocationInfoStatusNotificationParse(): { returnType: boolean, outLocationAreaCode: number | null, outTrackingAreaCode: number | null, outCellId: number | null }
    msBasicConnectExtensionsLocationInfoStatusResponseParse(): { returnType: boolean, outLocationAreaCode: number | null, outTrackingAreaCode: number | null, outCellId: number | null }
    msBasicConnectExtensionsLteAttachConfigurationNotificationParse(): { returnType: boolean, outConfigurationCount: number | null, outConfigurations: LteAttachConfiguration[] | null }
    msBasicConnectExtensionsLteAttachConfigurationResponseParse(): { returnType: boolean, outConfigurationCount: number | null, outConfigurations: LteAttachConfiguration[] | null }
    msBasicConnectExtensionsLteAttachInfoNotificationParse(): { returnType: boolean, outLteAttachState: LteAttachState | null, outIpType: ContextIpType | null, outAccessString: string | null, outUserName: string | null, outPassword: string | null, outCompression: Compression | null, outAuthProtocol: AuthProtocol | null }
    msBasicConnectExtensionsLteAttachInfoResponseParse(): { returnType: boolean, outLteAttachState: LteAttachState | null, outIpType: ContextIpType | null, outAccessString: string | null, outUserName: string | null, outPassword: string | null, outCompression: Compression | null, outAuthProtocol: AuthProtocol | null }
    msBasicConnectExtensionsLteAttachStatusNotificationParse(): { returnType: boolean, outLteAttachStatus: LteAttachStatus | null }
    msBasicConnectExtensionsLteAttachStatusResponseParse(): { returnType: boolean, outLteAttachStatus: LteAttachStatus | null }
    msBasicConnectExtensionsPcoNotificationParse(): { returnType: boolean, outPcoValue: PcoValue | null }
    msBasicConnectExtensionsPcoResponseParse(): { returnType: boolean, outPcoValue: PcoValue | null }
    msBasicConnectExtensionsProvisionedContextsNotificationParse(): { returnType: boolean, outProvisionedContextsCount: number | null, outProvisionedContexts: ProvisionedContextElementV2[] | null }
    msBasicConnectExtensionsProvisionedContextsResponseParse(): { returnType: boolean, outProvisionedContextsCount: number | null, outProvisionedContexts: ProvisionedContextElementV2[] | null }
    msBasicConnectExtensionsSlotInfoStatusNotificationParse(): { returnType: boolean, outSlotIndex: number | null, outState: UiccSlotState | null }
    msBasicConnectExtensionsSlotInfoStatusResponseParse(): { returnType: boolean, outSlotIndex: number | null, outState: UiccSlotState | null }
    msBasicConnectExtensionsSysCapsResponseParse(): { returnType: boolean, outNumberOfExecutors: number | null, outNumberOfSlots: number | null, outConcurrency: number | null, outModemId: number | null }
    msBasicConnectExtensionsV2VersionResponseParse(): { returnType: boolean, outMbimVersion: number | null, outMbimExtendedVersion: number | null }
    msBasicConnectExtensionsV3BaseStationsInfoResponseParse(): { returnType: boolean, outSystemType: DataClassV3 | null, outSystemSubType: DataSubclass | null, outGsmServingCell: CellInfoServingGsm | null, outUmtsServingCell: CellInfoServingUmts | null, outTdscdmaServingCell: CellInfoServingTdscdma | null, outLteServingCell: CellInfoServingLte | null, outGsmNeighboringCellsCount: number | null, outGsmNeighboringCells: CellInfoNeighboringGsm[] | null, outUmtsNeighboringCellsCount: number | null, outUmtsNeighboringCells: CellInfoNeighboringUmts[] | null, outTdscdmaNeighboringCellsCount: number | null, outTdscdmaNeighboringCells: CellInfoNeighboringTdscdma[] | null, outLteNeighboringCellsCount: number | null, outLteNeighboringCells: CellInfoNeighboringLte[] | null, outCdmaCellsCount: number | null, outCdmaCells: CellInfoCdma[] | null, outNrServingCellsCount: number | null, outNrServingCells: CellInfoServingNr[] | null, outNrNeighborCellsCount: number | null, outNrNeighborCells: CellInfoNeighboringNr[] | null }
    msBasicConnectExtensionsV3DeviceCapsResponseParse(): { returnType: boolean, outDeviceType: DeviceType | null, outCellularClass: CellularClass | null, outVoiceClass: VoiceClass | null, outSimClass: SimClass | null, outDataClass: DataClassV3 | null, outSmsCaps: SmsCaps | null, outControlCaps: CtrlCaps | null, outDataSubclass: DataSubclass | null, outMaxSessions: number | null, outExecutorIndex: number | null, outWcdmaBandClass: number | null, outLteBandClassCount: number | null, outLteBandClass: number | null, outNrBandClassCount: number | null, outNrBandClass: number | null, outCustomDataClass: string | null, outDeviceId: string | null, outFirmwareInfo: string | null, outHardwareInfo: string | null }
    msBasicConnectExtensionsV3LteAttachInfoNotificationParse(): { returnType: boolean, outLteAttachState: LteAttachState | null, outNwError: NwError | null, outIpType: ContextIpType | null, outAccessString: string | null, outUserName: string | null, outPassword: string | null, outCompression: Compression | null, outAuthProtocol: AuthProtocol | null }
    msBasicConnectExtensionsV3LteAttachInfoResponseParse(): { returnType: boolean, outLteAttachState: LteAttachState | null, outNwError: NwError | null, outIpType: ContextIpType | null, outAccessString: string | null, outUserName: string | null, outPassword: string | null, outCompression: Compression | null, outAuthProtocol: AuthProtocol | null }
    msBasicConnectExtensionsV3ModemConfigurationNotificationParse(): { returnType: boolean, outModemConfigurationStatus: ModemConfigurationStatus | null, outConfigurationName: string | null, outUnnamedIes: Tlv[] | null }
    msBasicConnectExtensionsV3ModemConfigurationResponseParse(): { returnType: boolean, outConfigurationStatus: ModemConfigurationStatus | null, outConfigurationName: string | null, outUnnamedIes: Tlv[] | null }
    msBasicConnectExtensionsV3RegistrationParametersResponseParse(): { returnType: boolean, outMicoMode: MicoMode | null, outDrxCycle: DrxCycle | null, outLadnInfo: LadnInfo | null, outDefaultPduActivationHint: DefaultPduActivationHint | null, outReRegisterIfNedeed: boolean | null, outUnnamedIes: Tlv[] | null }
    msBasicConnectExtensionsV3WakeReasonResponseParse(): { returnType: boolean, outWakeType: WakeType | null, outSessionId: number | null, outWakeTlv: Tlv | null }
    msBasicConnectV2PacketServiceNotificationParse(): { returnType: boolean, outNwError: number | null, outPacketServiceState: PacketServiceState | null, outCurrentDataClass: DataClass | null, outUplinkSpeed: number | null, outDownlinkSpeed: number | null, outFrequencyRange: FrequencyRange | null }
    msBasicConnectV2PacketServiceResponseParse(): { returnType: boolean, outNwError: number | null, outPacketServiceState: PacketServiceState | null, outCurrentDataClass: DataClass | null, outUplinkSpeed: number | null, outDownlinkSpeed: number | null, outFrequencyRange: FrequencyRange | null }
    msBasicConnectV2RegisterStateNotificationParse(): { returnType: boolean, outNwError: NwError | null, outRegisterState: RegisterState | null, outRegisterMode: RegisterMode | null, outAvailableDataClasses: DataClass | null, outCurrentCellularClass: CellularClass | null, outProviderId: string | null, outProviderName: string | null, outRoamingText: string | null, outRegistrationFlag: RegistrationFlag | null, outPreferredDataClasses: DataClass | null }
    msBasicConnectV2RegisterStateResponseParse(): { returnType: boolean, outNwError: NwError | null, outRegisterState: RegisterState | null, outRegisterMode: RegisterMode | null, outAvailableDataClasses: DataClass | null, outCurrentCellularClass: CellularClass | null, outProviderId: string | null, outProviderName: string | null, outRoamingText: string | null, outRegistrationFlag: RegistrationFlag | null, outPreferredDataClasses: DataClass | null }
    msBasicConnectV2SignalStateNotificationParse(): { returnType: boolean, outRssi: number | null, outErrorRate: number | null, outSignalStrengthInterval: number | null, outRssiThreshold: number | null, outErrorRateThreshold: number | null, outRsrpSnrCount: number | null, outRsrpSnr: RsrpSnrInfo[] | null }
    msBasicConnectV2SignalStateResponseParse(): { returnType: boolean, outRssi: number | null, outErrorRate: number | null, outSignalStrengthInterval: number | null, outRssiThreshold: number | null, outErrorRateThreshold: number | null, outRsrpSnrCount: number | null, outRsrpSnr: RsrpSnrInfo[] | null }
    msBasicConnectV3ConnectNotificationParse(): { returnType: boolean, outSessionId: number | null, outActivationState: ActivationState | null, outVoiceCallState: VoiceCallState | null, outIpType: ContextIpType | null, outContextType: Uuid | null, outNwError: number | null, outMediaPreference: AccessMediaType | null, outAccessString: string | null, outUnnamedIes: Tlv[] | null }
    msBasicConnectV3ConnectResponseParse(): { returnType: boolean, outSessionId: number | null, outActivationState: ActivationState | null, outVoiceCallState: VoiceCallState | null, outIpType: ContextIpType | null, outContextType: Uuid | null, outNwError: number | null, outMediaPreference: AccessMediaType | null, outAccessString: string | null, outUnnamedIes: Tlv[] | null }
    msBasicConnectV3IpPacketFiltersResponseParse(): { returnType: boolean, outSessionId: number | null, outPacketFiltersCount: number | null, outPacketFilters: PacketFilterV3[] | null }
    msBasicConnectV3PacketServiceNotificationParse(): { returnType: boolean, outNwError: number | null, outPacketServiceState: PacketServiceState | null, outHighestAvailableDataClass: DataClassV3 | null, outUplinkSpeed: number | null, outDownlinkSpeed: number | null, outFrequencyRange: FrequencyRange | null, outDataSubclass: DataSubclass | null, outTai: Tai | null }
    msBasicConnectV3PacketServiceResponseParse(): { returnType: boolean, outNwError: number | null, outPacketServiceState: PacketServiceState | null, outHighestAvailableDataClass: DataClassV3 | null, outUplinkSpeed: number | null, outDownlinkSpeed: number | null, outFrequencyRange: FrequencyRange | null, outDataSubclass: DataSubclass | null, outTai: Tai | null }
    msBasicConnectV3SubscriberReadyStatusNotificationParse(): { returnType: boolean, outReadyState: SubscriberReadyState | null, outFlags: SubscriberReadyStatusFlag | null, outSubscriberId: string | null, outSimIccId: string | null, outReadyInfo: ReadyInfoFlag | null, outTelephoneNumbersCount: number | null, outTelephoneNumbers: string[] | null }
    msBasicConnectV3SubscriberReadyStatusResponseParse(): { returnType: boolean, outReadyState: SubscriberReadyState | null, outFlags: SubscriberReadyStatusFlag | null, outSubscriberId: string | null, outSimIccId: string | null, outReadyInfo: ReadyInfoFlag | null, outTelephoneNumbersCount: number | null, outTelephoneNumbers: string[] | null }
    msFirmwareIdGetResponseParse(): { returnType: boolean, outFirmwareId: Uuid | null }
    msSarConfigResponseParse(): { returnType: boolean, outMode: SarControlMode | null, outBackoffState: SarBackoffState | null, outWifiIntegration: SarWifiHardwareState | null, outConfigStatesCount: number | null, outConfigStates: SarConfigState[] | null }
    msSarTransmissionStatusNotificationParse(): { returnType: boolean, outChannelNotification: TransmissionNotificationStatus | null, outTransmissionStatus: TransmissionState | null, outHysteresisTimer: number | null }
    msSarTransmissionStatusResponseParse(): { returnType: boolean, outChannelNotification: TransmissionNotificationStatus | null, outTransmissionStatus: TransmissionState | null, outHysteresisTimer: number | null }
    msUiccLowLevelAccessApduResponseParse(): { returnType: boolean, outStatus: number | null, outResponse: any[] | null }
    msUiccLowLevelAccessAtrResponseParse(): { returnType: boolean, outAtr: string | null }
    msUiccLowLevelAccessCloseChannelResponseParse(): { returnType: boolean, outStatus: number | null }
    msUiccLowLevelAccessOpenChannelResponseParse(): { returnType: boolean, outStatus: number | null, outChannel: number | null, outResponse: any[] | null }
    msUiccLowLevelAccessResetResponseParse(): { returnType: boolean, outPassThroughStatus: UiccPassThroughStatus | null }
    msUiccLowLevelAccessTerminalCapabilityResponseParse(): { returnType: boolean, outTerminalCapabilityCount: number | null, outTerminalCapability: TerminalCapabilityInfo[] | null }
    multicarrierProvidersNotificationParse(): { returnType: boolean, outProvidersCount: number | null, outProviders: Provider[] | null }
    multicarrierProvidersResponseParse(): { returnType: boolean, outProvidersCount: number | null, outProviders: Provider[] | null }
    networkIdleHintResponseParse(): { returnType: boolean, outState: NetworkIdleHintState | null }
    openDoneGetResult(): boolean
    openDoneGetStatusCode(): StatusError
    openGetMaxControlTransfer(): number
    packetServiceNotificationParse(): { returnType: boolean, outNwError: number | null, outPacketServiceState: PacketServiceState | null, outHighestAvailableDataClass: DataClass | null, outUplinkSpeed: number | null, outDownlinkSpeed: number | null }
    packetServiceResponseParse(): { returnType: boolean, outNwError: number | null, outPacketServiceState: PacketServiceState | null, outHighestAvailableDataClass: DataClass | null, outUplinkSpeed: number | null, outDownlinkSpeed: number | null }
    packetStatisticsResponseParse(): { returnType: boolean, outInDiscards: number | null, outInErrors: number | null, outInOctets: number | null, outInPackets: number | null, outOutOctets: number | null, outOutPackets: number | null, outOutErrors: number | null, outOutDiscards: number | null }
    phonebookConfigurationNotificationParse(): { returnType: boolean, outState: PhonebookState | null, outNumberOfEntries: number | null, outUsedEntries: number | null, outMaxNumberLength: number | null, outMaxName: number | null }
    phonebookConfigurationResponseParse(): { returnType: boolean, outState: PhonebookState | null, outNumberOfEntries: number | null, outUsedEntries: number | null, outMaxNumberLength: number | null, outMaxName: number | null }
    phonebookDeleteResponseParse(): boolean
    phonebookReadResponseParse(): { returnType: boolean, outEntryCount: number | null, outEntries: PhonebookEntry[] | null }
    phonebookWriteResponseParse(): boolean
    pinListResponseParse(): { returnType: boolean, outPinDescPin1: PinDesc | null, outPinDescPin2: PinDesc | null, outPinDescDeviceSimPin: PinDesc | null, outPinDescDeviceFirstSimPin: PinDesc | null, outPinDescNetworkPin: PinDesc | null, outPinDescNetworkSubsetPin: PinDesc | null, outPinDescServiceProviderPin: PinDesc | null, outPinDescCorporatePin: PinDesc | null, outPinDescSubsidyLock: PinDesc | null, outPinDescCustom: PinDesc | null }
    pinResponseParse(): { returnType: boolean, outPinType: PinType | null, outPinState: PinState | null, outRemainingAttempts: number | null }
    preferredProvidersNotificationParse(): { returnType: boolean, outProvidersCount: number | null, outProviders: Provider[] | null }
    preferredProvidersResponseParse(): { returnType: boolean, outProvidersCount: number | null, outProviders: Provider[] | null }
    provisionedContextsNotificationParse(): { returnType: boolean, outProvisionedContextsCount: number | null, outProvisionedContexts: ProvisionedContextElement[] | null }
    provisionedContextsResponseParse(): { returnType: boolean, outProvisionedContextsCount: number | null, outProvisionedContexts: ProvisionedContextElement[] | null }
    proxyControlConfigurationResponseParse(): boolean
    proxyControlVersionNotificationParse(): { returnType: boolean, outMbimVersion: number | null, outMbimExtendedVersion: number | null }
    qduFileOpenResponseParse(): { returnType: boolean, outMaxTransferSize: number | null, outMaxWindowSize: number | null }
    qduFileWriteResponseParse(): boolean
    qduUpdateSessionResponseParse(): { returnType: boolean, outCurrentSessionType: QduSessionType | null, outCurrentSessionStatus: QduSessionStatus | null, outLastSessionType: QduSessionType | null, outLastSessionResult: QduSessionResult | null, outLastSessionErrorOffset: number | null, outLastSessionErrorSize: number | null }
    qmiMsgNotificationParse(): { returnType: boolean, outQmux: any[] | null }
    qmiMsgResponseParse(): { returnType: boolean, outQmux: any[] | null }
    quectelRadioStateResponseParse(): { returnType: boolean, outRadioState: QuectelRadioSwitchState | null }
    radioStateNotificationParse(): { returnType: boolean, outHwRadioState: RadioSwitchState | null, outSwRadioState: RadioSwitchState | null }
    radioStateResponseParse(): { returnType: boolean, outHwRadioState: RadioSwitchState | null, outSwRadioState: RadioSwitchState | null }
    ref(): Message
    registerStateNotificationParse(): { returnType: boolean, outNwError: NwError | null, outRegisterState: RegisterState | null, outRegisterMode: RegisterMode | null, outAvailableDataClasses: DataClass | null, outCurrentCellularClass: CellularClass | null, outProviderId: string | null, outProviderName: string | null, outRoamingText: string | null, outRegistrationFlag: RegistrationFlag | null }
    registerStateResponseParse(): { returnType: boolean, outNwError: NwError | null, outRegisterState: RegisterState | null, outRegisterMode: RegisterMode | null, outAvailableDataClasses: DataClass | null, outCurrentCellularClass: CellularClass | null, outProviderId: string | null, outProviderName: string | null, outRoamingText: string | null, outRegistrationFlag: RegistrationFlag | null }
    responseGetResult(expected: MessageType): boolean
    serviceActivationResponseParse(): { returnType: boolean, outNwError: NwError | null, outBuffer: any[] | null }
    setTransactionId(transactionId: number): void
    signalStateNotificationParse(): { returnType: boolean, outRssi: number | null, outErrorRate: number | null, outSignalStrengthInterval: number | null, outRssiThreshold: number | null, outErrorRateThreshold: number | null }
    signalStateResponseParse(): { returnType: boolean, outRssi: number | null, outErrorRate: number | null, outSignalStrengthInterval: number | null, outRssiThreshold: number | null, outErrorRateThreshold: number | null }
    smsConfigurationResponseParse(): { returnType: boolean, outSmsStorageState: SmsStorageState | null, outFormat: SmsFormat | null, outMaxMessages: number | null, outCdmaShortMessageSize: number | null, outScAddress: string | null }
    smsDeleteResponseParse(): boolean
    smsMessageStoreStatusNotificationParse(): { returnType: boolean, outFlag: SmsStatusFlag | null, outMessageIndex: number | null }
    smsMessageStoreStatusResponseParse(): { returnType: boolean, outFlag: SmsStatusFlag | null, outMessageIndex: number | null }
    smsReadNotificationParse(): { returnType: boolean, outFormat: SmsFormat | null, outMessagesCount: number | null, outPduMessages: SmsPduReadRecord[] | null, outCdmaMessages: SmsCdmaReadRecord[] | null }
    smsReadResponseParse(): { returnType: boolean, outFormat: SmsFormat | null, outMessagesCount: number | null, outPduMessages: SmsPduReadRecord[] | null, outCdmaMessages: SmsCdmaReadRecord[] | null }
    smsSendResponseParse(): { returnType: boolean, outMessageReference: number | null }
    stkEnvelopeResponseParse(): { returnType: boolean, outEnvelopeSupport: any[] | null }
    stkPacNotificationParse(): { returnType: boolean, outPacType: StkPacType | null, outDataBuffer: any[] | null }
    stkPacResponseParse(): { returnType: boolean, outPacSupport: any[] | null }
    stkTerminalResponseResponseParse(): { returnType: boolean, outResultData: any[] | null, outStatusWords: number | null }
    subscriberReadyStatusNotificationParse(): { returnType: boolean, outReadyState: SubscriberReadyState | null, outSubscriberId: string | null, outSimIccId: string | null, outReadyInfo: ReadyInfoFlag | null, outTelephoneNumbersCount: number | null, outTelephoneNumbers: string[] | null }
    subscriberReadyStatusResponseParse(): { returnType: boolean, outReadyState: SubscriberReadyState | null, outSubscriberId: string | null, outSimIccId: string | null, outReadyInfo: ReadyInfoFlag | null, outTelephoneNumbersCount: number | null, outTelephoneNumbers: string[] | null }
    unref(): void
    ussdNotificationParse(): { returnType: boolean, outResponse: UssdResponse | null, outSessionState: UssdSessionState | null, outDataCodingScheme: number | null, outPayload: any[] | null }
    ussdResponseParse(): { returnType: boolean, outResponse: UssdResponse | null, outSessionState: UssdSessionState | null, outDataCodingScheme: number | null, outPayload: any[] | null }
    visibleProvidersResponseParse(): { returnType: boolean, outProvidersCount: number | null, outProviders: Provider[] | null }
    static name: string
    static new(data: number, dataLength: number): Message
    constructor(data: number, dataLength: number)
    /* Static methods and pseudo-constructors */
    static atdsLocationQueryNew(): Message
    static atdsOperatorsQueryNew(): Message
    static atdsRatQueryNew(): Message
    static atdsRatSetNew(mode: AtdsRatMode): Message
    static atdsRegisterStateQueryNew(): Message
    static atdsSignalQueryNew(): Message
    static authAkaQueryNew(rand: any[], autn: any[]): Message
    static authAkapQueryNew(rand: any[], autn: any[], networkName: string): Message
    static authSimQueryNew(rand1: any[], rand2: any[], rand3: any[], n: number): Message
    static closeDoneNew(transactionId: number, errorStatusCode: StatusError): Message
    static closeNew(transactionId: number): Message
    static commandNew(transactionId: number, service: Service, cid: number, commandType: MessageCommandType): Message
    static connectQueryNew(sessionId: number, activationState: ActivationState, voiceCallState: VoiceCallState, ipType: ContextIpType, contextType: Uuid, nwError: number): Message
    static connectSetNew(sessionId: number, activationCommand: ActivationCommand, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol, ipType: ContextIpType, contextType: Uuid): Message
    static deviceCapsQueryNew(): Message
    static deviceServiceSubscribeListSetNew(eventsCount: number, events: EventEntry[]): Message
    static deviceServiceSubscriberListSetNew(eventsCount: number, events: EventEntry): Message
    static deviceServicesQueryNew(): Message
    static dssConnectSetNew(deviceServiceId: Uuid, dssSessionId: number, dssLinkState: DssLinkState): Message
    static emergencyModeQueryNew(): Message
    static emergencyModeSetNew(state: EmergencyModeState): Message
    static errorNew(transactionId: number, errorStatusCode: ProtocolError): Message
    static functionErrorNew(transactionId: number, errorStatusCode: ProtocolError): Message
    static homeProviderQueryNew(): Message
    static homeProviderSetNew(provider: Provider): Message
    static intelFirmwareUpdateModemRebootSetNew(): Message
    static ipConfigurationQueryNew(sessionId: number, ipv4ConfigurationAvailable: IPConfigurationAvailableFlag, ipv6ConfigurationAvailable: IPConfigurationAvailableFlag, ipv4AddressCount: number, ipv4Address: IPv4Element[], ipv6AddressCount: number, ipv6Address: IPv6Element[], ipv4Gateway: IPv4, ipv6Gateway: IPv6, ipv4DnsServerCount: number, ipv4DnsServer: IPv4[], ipv6DnsServerCount: number, ipv6DnsServer: IPv6[], ipv4Mtu: number, ipv6Mtu: number): Message
    static ipPacketFiltersQueryNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilter[]): Message
    static ipPacketFiltersSetNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilter[]): Message
    static msBasicConnectExtensionsBaseStationsInfoQueryNew(maxGsmCount: number, maxUmtsCount: number, maxTdscdmaCount: number, maxLteCount: number, maxCdmaCount: number): Message
    static msBasicConnectExtensionsDeviceCapsQueryNew(): Message
    static msBasicConnectExtensionsDeviceSlotMappingsQueryNew(): Message
    static msBasicConnectExtensionsDeviceSlotMappingsSetNew(mapCount: number, slotMap: Slot[]): Message
    static msBasicConnectExtensionsLocationInfoStatusQueryNew(): Message
    static msBasicConnectExtensionsLteAttachConfigurationQueryNew(): Message
    static msBasicConnectExtensionsLteAttachConfigurationSetNew(operation: LteAttachContextOperation, configurationCount: number, configurations: LteAttachConfiguration[]): Message
    static msBasicConnectExtensionsLteAttachInfoQueryNew(): Message
    static msBasicConnectExtensionsLteAttachStatusQueryNew(): Message
    static msBasicConnectExtensionsPcoQueryNew(pcoValue: PcoValue): Message
    static msBasicConnectExtensionsProvisionedContextsQueryNew(): Message
    static msBasicConnectExtensionsProvisionedContextsSetNew(operation: ContextOperation, contextType: Uuid, ipType: ContextIpType, state: ContextState, roaming: ContextRoamingControl, mediaType: ContextMediaType, source: ContextSource, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol): Message
    static msBasicConnectExtensionsSlotInfoStatusQueryNew(slotIndex: number): Message
    static msBasicConnectExtensionsSysCapsQueryNew(): Message
    static msBasicConnectExtensionsV2VersionQueryNew(mbimVersion: number, mbimExtendedVersion: number): Message
    static msBasicConnectExtensionsV3BaseStationsInfoQueryNew(maxGsmCount: number, maxUmtsCount: number, maxTdscdmaCount: number, maxLteCount: number, maxCdmaCount: number, maxNrCount: number): Message
    static msBasicConnectExtensionsV3ModemConfigurationQueryNew(): Message
    static msBasicConnectExtensionsV3RegistrationParametersQueryNew(): Message
    static msBasicConnectExtensionsV3RegistrationParametersSetNew(micoMode: MicoMode, drxCycle: DrxCycle, ladnInfo: LadnInfo, defaultPduActivationHint: DefaultPduActivationHint, reRegisterIfNedeed: boolean, unnamedIes: Tlv[]): Message
    static msBasicConnectExtensionsV3WakeReasonQueryNew(): Message
    static msBasicConnectV3ConnectQueryNew(sessionId: number): Message
    static msBasicConnectV3ConnectSetNew(sessionId: number, activationCommand: ActivationCommand, compression: Compression, authProtocol: AuthProtocol, ipType: ContextIpType, contextType: Uuid, mediaPreference: AccessMediaType, accessString: string, userName: string, password: string, unnamedIes: Tlv[]): Message
    static msBasicConnectV3IpPacketFiltersQueryNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilterV3[]): Message
    static msBasicConnectV3IpPacketFiltersSetNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilterV3[]): Message
    static msFirmwareIdGetQueryNew(): Message
    static msHostShutdownNotifySetNew(): Message
    static msSarConfigQueryNew(): Message
    static msSarConfigSetNew(mode: SarControlMode, backoffState: SarBackoffState, configStatesCount: number, configStates: SarConfigState[]): Message
    static msSarTransmissionStatusQueryNew(): Message
    static msSarTransmissionStatusSetNew(channelNotification: TransmissionNotificationStatus, hysteresisTimer: number): Message
    static msUiccLowLevelAccessApduSetNew(channel: number, secureMessaging: UiccSecureMessaging, classByteType: UiccClassByteType, command: any[]): Message
    static msUiccLowLevelAccessAtrQueryNew(): Message
    static msUiccLowLevelAccessCloseChannelSetNew(channel: number, channelGroup: number): Message
    static msUiccLowLevelAccessOpenChannelSetNew(appId: any[], selectP2Arg: number, channelGroup: number): Message
    static msUiccLowLevelAccessResetQueryNew(): Message
    static msUiccLowLevelAccessResetSetNew(passThroughAction: UiccPassThroughAction): Message
    static msUiccLowLevelAccessTerminalCapabilityQueryNew(): Message
    static msUiccLowLevelAccessTerminalCapabilitySetNew(terminalCapabilityCount: number, terminalCapability: TerminalCapabilityInfo[]): Message
    static multicarrierProvidersQueryNew(): Message
    static multicarrierProvidersSetNew(providersCount: number, providers: Provider[]): Message
    static networkIdleHintQueryNew(): Message
    static networkIdleHintSetNew(state: NetworkIdleHintState): Message
    static new(data: number, dataLength: number): Message
    static openDoneNew(transactionId: number, errorStatusCode: StatusError): Message
    static openNew(transactionId: number, maxControlTransfer: number): Message
    static packetServiceQueryNew(): Message
    static packetServiceSetNew(packetServiceAction: PacketServiceAction): Message
    static packetStatisticsQueryNew(): Message
    static phonebookConfigurationQueryNew(): Message
    static phonebookDeleteSetNew(filterFlag: PhonebookFlag, filterMessageIndex: number): Message
    static phonebookReadQueryNew(filterFlag: PhonebookFlag, filterMessageIndex: number): Message
    static phonebookWriteSetNew(saveFlag: PhonebookWriteFlag, saveIndex: number, number: string, name: string): Message
    static pinListQueryNew(): Message
    static pinQueryNew(): Message
    static pinSetNew(pinType: PinType, pinOperation: PinOperation, pin: string, newPin: string): Message
    static preferredProvidersQueryNew(): Message
    static preferredProvidersSetNew(providersCount: number, providers: Provider[]): Message
    static provisionedContextsQueryNew(): Message
    static provisionedContextsSetNew(contextId: number, contextType: Uuid, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol, providerId: string): Message
    static proxyControlConfigurationSetNew(devicePath: string, timeout: number): Message
    static qduFileOpenQueryNew(): Message
    static qduFileOpenSetNew(fileType: QduFileType, fileSize: number): Message
    static qduFileWriteSetNew(dataBuffer: any[]): Message
    static qduUpdateSessionQueryNew(): Message
    static qduUpdateSessionSetNew(sessionAction: QduSessionAction, sessionType: QduSessionType): Message
    static qmiMsgSetNew(qmiMsg: any[]): Message
    static quectelRadioStateQueryNew(): Message
    static quectelRadioStateSetNew(radioState: QuectelRadioSwitchState): Message
    static radioStateQueryNew(): Message
    static radioStateSetNew(radioState: RadioSwitchState): Message
    static registerStateQueryNew(): Message
    static registerStateSetNew(providerId: string, registerAction: RegisterAction, dataClass: DataClass): Message
    static serviceActivationSetNew(buffer: any[]): Message
    static signalStateQueryNew(): Message
    static signalStateSetNew(signalStrengthInterval: number, rssiThreshold: number, errorRateThreshold: number): Message
    static smsConfigurationQueryNew(): Message
    static smsConfigurationSetNew(format: SmsFormat, scAddress: string): Message
    static smsDeleteSetNew(flag: SmsFlag, messageIndex: number): Message
    static smsMessageStoreStatusQueryNew(): Message
    static smsReadQueryNew(format: SmsFormat, flag: SmsFlag, messageIndex: number): Message
    static smsSendSetNew(format: SmsFormat, pduMessage: SmsPduSendRecord, cdmaMessage: SmsCdmaSendRecord): Message
    static stkEnvelopeQueryNew(): Message
    static stkEnvelopeSetNew(data: any[]): Message
    static stkPacQueryNew(): Message
    static stkPacSetNew(pacHostControl: any[]): Message
    static stkTerminalResponseSetNew(response: any[]): Message
    static subscriberReadyStatusQueryNew(): Message
    static ussdSetNew(action: UssdAction, dataCodingScheme: number, payload: any[]): Message
    static visibleProvidersQueryNew(action: VisibleProvidersAction): Message
}
class PacketFilter {
    /* Fields of Mbim-1.0.Mbim.PacketFilter */
    filterSize: number
    packetFilter: number
    packetMask: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: PacketFilterArray): void
}
class PacketFilterV3 {
    /* Fields of Mbim-1.0.Mbim.PacketFilterV3 */
    filterSize: number
    packetFilter: number
    packetMask: number
    filterId: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: PacketFilterV3Array): void
}
class PcoValue {
    /* Fields of Mbim-1.0.Mbim.PcoValue */
    sessionId: number
    pcoDataSize: number
    pcoDataType: number
    pcoDataBuffer: number
    /* Methods of Mbim-1.0.Mbim.PcoValue */
    free(): void
    static name: string
}
class PhonebookEntry {
    /* Fields of Mbim-1.0.Mbim.PhonebookEntry */
    entryIndex: number
    number: string
    name: string
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: PhonebookEntryArray): void
}
class PinDesc {
    /* Fields of Mbim-1.0.Mbim.PinDesc */
    pinMode: number
    pinFormat: number
    pinLengthMin: number
    pinLengthMax: number
    /* Methods of Mbim-1.0.Mbim.PinDesc */
    free(): void
    static name: string
}
class Provider {
    /* Fields of Mbim-1.0.Mbim.Provider */
    providerId: string
    providerState: number
    providerName: string
    cellularClass: number
    rssi: number
    errorRate: number
    /* Methods of Mbim-1.0.Mbim.Provider */
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: ProviderArray): void
}
class ProvisionedContextElement {
    /* Fields of Mbim-1.0.Mbim.ProvisionedContextElement */
    contextId: number
    contextType: Uuid
    accessString: string
    userName: string
    password: string
    compression: number
    authProtocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: ProvisionedContextElementArray): void
}
class ProvisionedContextElementV2 {
    /* Fields of Mbim-1.0.Mbim.ProvisionedContextElementV2 */
    contextId: number
    contextType: Uuid
    ipType: number
    state: number
    roaming: number
    mediaType: number
    source: number
    accessString: string
    userName: string
    password: string
    compression: number
    authProtocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: ProvisionedContextElementV2Array): void
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
    rsrpThreshold: number
    snrThreshold: number
    systemType: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: RsrpSnrInfoArray): void
}
class SarConfigState {
    /* Fields of Mbim-1.0.Mbim.SarConfigState */
    antennaIndex: number
    backoffIndex: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: SarConfigStateArray): void
}
class Slot {
    /* Fields of Mbim-1.0.Mbim.Slot */
    slot: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: SlotArray): void
}
class SmsCdmaReadRecord {
    /* Fields of Mbim-1.0.Mbim.SmsCdmaReadRecord */
    messageIndex: number
    messageStatus: number
    address: string
    timestamp: string
    encoding: number
    language: number
    encodedMessageSize: number
    encodedMessage: number
    encodedMessageSizeInCharacters: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: SmsCdmaReadRecordArray): void
}
class SmsCdmaSendRecord {
    /* Fields of Mbim-1.0.Mbim.SmsCdmaSendRecord */
    encoding: number
    language: number
    address: string
    encodedMessageSize: number
    encodedMessage: number
    encodedMessageSizeInCharacters: number
    /* Methods of Mbim-1.0.Mbim.SmsCdmaSendRecord */
    free(): void
    static name: string
}
class SmsPduReadRecord {
    /* Fields of Mbim-1.0.Mbim.SmsPduReadRecord */
    messageIndex: number
    messageStatus: number
    pduDataSize: number
    pduData: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: SmsPduReadRecordArray): void
}
class SmsPduSendRecord {
    /* Fields of Mbim-1.0.Mbim.SmsPduSendRecord */
    pduDataSize: number
    pduData: number
    /* Methods of Mbim-1.0.Mbim.SmsPduSendRecord */
    free(): void
    static name: string
}
class Tai {
    /* Fields of Mbim-1.0.Mbim.Tai */
    plmnMcc: number
    plmnMnc: number
    tac: number
    /* Methods of Mbim-1.0.Mbim.Tai */
    free(): void
    static name: string
}
class TerminalCapabilityInfo {
    /* Fields of Mbim-1.0.Mbim.TerminalCapabilityInfo */
    terminalCapabilityDataSize: number
    terminalCapabilityData: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: TerminalCapabilityInfoArray): void
}
class Tlv {
    /* Methods of Mbim-1.0.Mbim.Tlv */
    dup(): Tlv
    getRaw(): { returnType: number, length: number }
    getTlvData(): { returnType: number, outLength: number }
    getTlvType(): TlvType
    guint16ArrayGet(): { returnType: boolean, arraySize: number | null, array: number | null }
    ref(): Tlv
    stringGet(): string
    unref(): void
    wakeCommandGet(): { returnType: boolean, service: Uuid | null, cid: number | null, payloadSize: number | null, payload: number | null }
    wakePacketGet(): { returnType: boolean, filterId: number | null, originalPacketSize: number | null, packetSize: number | null, packet: number | null }
    static name: string
    static new(type: TlvType, data: number, dataLength: number): Tlv
    constructor(type: TlvType, data: number, dataLength: number)
    /* Static methods and pseudo-constructors */
    static new(type: TlvType, data: number, dataLength: number): Tlv
    static stringNew(str: string): Tlv
}
class Uuid {
    /* Fields of Mbim-1.0.Mbim.Uuid */
    a: any[]
    b: any[]
    c: any[]
    d: any[]
    e: any[]
    /* Methods of Mbim-1.0.Mbim.Uuid */
    cmp(b: Uuid): boolean
    getPrintable(): string
    toContextType(): ContextType
    toService(): Service
    static name: string
    /* Static methods and pseudo-constructors */
    static fromContextType(contextType: ContextType): Uuid
    static fromPrintable(str: string, uuid: Uuid): boolean
    static fromService(service: Service): Uuid
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