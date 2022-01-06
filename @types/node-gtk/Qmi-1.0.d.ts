/**
 * Qmi-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Qmi {

export enum CoreError {
    FAILED,
    WRONGSTATE,
    TIMEOUT,
    INVALIDARGS,
    INVALIDMESSAGE,
    TLVNOTFOUND,
    TLVTOOLONG,
    UNSUPPORTED,
    TLVEMPTY,
    UNEXPECTEDMESSAGE,
    INVALIDDATA,
}
export enum CtlDataFormat {
    ABSENT,
    PRESENT,
}
export enum CtlDataLinkProtocol {
    UNKNOWN,
    /* 802_3 (invalid, starts with a number) */
    RAW_IP,
}
export enum DataEndpointType {
    UNKNOWN,
    HSIC,
    HSUSB,
    PCIE,
    EMBEDDED,
    BAM_DMUX,
    UNDEFINED,
}
export enum DeviceExpectedDataFormat {
    UNKNOWN,
    /* 802_3 (invalid, starts with a number) */
    RAW_IP,
    QMAP_PASS_THROUGH,
}
export enum DmsActivationState {
    NOT_ACTIVATED,
    ACTIVATED,
    CONNECTING,
    CONNECTED,
    OTASP_AUTHENTICATED,
    OTASP_NAM,
    OTASP_MDN,
    OTASP_IMSI,
    OTASP_PRL,
    OTASP_SPC,
    OTASP_COMMITED,
}
export enum DmsBootImageDownloadMode {
    NORMAL,
    BOOT_AND_RECOVERY,
}
export enum DmsDataServiceCapability {
    NONE,
    CS,
    PS,
    SIMULTANEOUS_CS_PS,
    NON_SIMULTANEOUS_CS_PS,
}
export enum DmsFirmwareImageType {
    MODEM,
    PRI,
}
export enum DmsFoxconnDeviceMode {
    UNKNOWN,
    FASTBOOT_ONLINE,
    FASTBOOT_OTA,
}
export enum DmsFoxconnFirmwareVersionType {
    FIRMWARE_MCFG,
    FIRMWARE_MCFG_APPS,
    APPS,
}
export enum DmsHpDeviceMode {
    FASTBOOT,
}
export enum DmsMacType {
    WLAN,
    BT,
}
export enum DmsOperatingMode {
    ONLINE,
    LOW_POWER,
    FACTORY_TEST,
    OFFLINE,
    RESET,
    SHUTTING_DOWN,
    PERSISTENT_LOW_POWER,
    MODE_ONLY_LOW_POWER,
    UNKNOWN,
}
export enum DmsRadioInterface {
    CDMA20001X,
    EVDO,
    GSM,
    UMTS,
    LTE,
    TDS,
    /* 5GNR (invalid, starts with a number) */
}
export enum DmsSimCapability {
    NOT_SUPPORTED,
    SUPPORTED,
}
export enum DmsSwiUsbComposition {
    UNKNOWN,
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 11 (invalid, starts with a number) */
    /* 12 (invalid, starts with a number) */
    /* 13 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
    /* 15 (invalid, starts with a number) */
    /* 16 (invalid, starts with a number) */
    /* 17 (invalid, starts with a number) */
    /* 18 (invalid, starts with a number) */
    /* 19 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    /* 21 (invalid, starts with a number) */
    /* 22 (invalid, starts with a number) */
}
export enum DmsTimeReferenceType {
    USER,
}
export enum DmsTimeSource {
    DEVICE,
    CDMA_NETWORK,
    HDR_NETWORK,
}
export enum DmsUimFacility {
    PN,
    PU,
    PP,
    PC,
    PF,
}
export enum DmsUimFacilityState {
    DEACTIVATED,
    ACTIVATED,
    BLOCKED,
}
export enum DmsUimPinId {
    PIN,
    PIN2,
}
export enum DmsUimPinStatus {
    NOT_INITIALIZED,
    ENABLED_NOT_VERIFIED,
    ENABLED_VERIFIED,
    DISABLED,
    BLOCKED,
    PERMANENTLY_BLOCKED,
    UNBLOCKED,
    CHANGED,
}
export enum DmsUimState {
    INITIALIZATION_COMPLETED,
    LOCKED_OR_FAILED,
    NOT_PRESENT,
    RESERVED,
    UNKNOWN,
}
export enum DsdApnType {
    DEFAULT,
    IMS,
    MMS,
    DUN,
    SUPL,
    HIPRI,
    FOTA,
    CBS,
    IA,
    EMERGENCY,
}
export enum Endian {
    LITTLE,
    BIG,
}
export enum GasFirmwareListingMode {
    ACTIVE_FIRMWARE,
    ALL_FIRMWARE,
    SPECIFIC_FIRMWARE,
}
export enum GasUsbCompositionEndpointType {
    HSUSB,
    HSIC,
}
export enum LocEngineState {
    ON,
    OFF,
}
export enum LocFixRecurrenceType {
    PERIODIC_FIXES,
    SINGLE_FIX,
}
export enum LocHealthStatus {
    UNHEALTHY,
    HEALTHY,
}
export enum LocIndicationStatus {
    SUCCESS,
    GENERAL_FAILURE,
    UNSUPPORTED,
    INVALID_PARAMETER,
    ENGINE_BUSY,
    PHONE_OFFLINE,
    TIMEOUT,
}
export enum LocIntermediateReportState {
    UNKNOWN,
    ENABLE,
    DISABLE,
}
export enum LocLockType {
    NONE,
    MI,
    MT,
    ALL,
}
export enum LocNavigationData {
    EPHEMERIS,
    ALMANAC,
}
export enum LocOperationMode {
    DEFAULT,
    MSB,
    MSA,
    STANDALONE,
    CELLID,
    WWAN,
}
export enum LocPredictedOrbitsDataFormat {
    XTRA,
}
export enum LocReliability {
    NOT_SET,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
}
export enum LocSatelliteStatus {
    IDLE,
    SEARCHING,
    TRACKING,
}
export enum LocServerType {
    UNKNOWN,
    CDMA_PDE,
    CDMA_MPC,
    UMTS_SLP,
    CUSTOM_PDE,
}
export enum LocSessionStatus {
    SUCCESS,
    IN_PROGRESS,
    GENERAL_FAILURE,
    TIMEOUT,
    USER_ENDED,
    BAD_PARAMETER,
    PHONE_OFFLINE,
    ENGINE_LOCKED,
}
export enum LocSystem {
    GPS,
    GALILEO,
    SBAS,
    COMPASS,
    GLONASS,
}
export enum LocTimeSource {
    INVALID,
    NETWORK_TIME_TRANSFER,
    NETWORK_TIME_TAGGING,
    EXTERNAL_INPUT,
    TOW_DECODE,
    TOW_CONFIRMED,
    TOW_AND_WEEK_CONFIRMED,
    NAVIGATION_SOLUTION,
    SOLVE_FOR_TIME,
    GLO_TOW_DECODE,
    TIME_TRANSFORM,
    WCDMA_SLEEP_TIME_TAG,
    GSM_SLEEP_TIME_TAG,
    UNKNOWN,
    SYSTEM_TIMETICK,
    QZSS_TOW_DECODE,
    BDS_TOW_DECODE,
}
export enum NasActiveBand {
    BC_0,
    BC_1,
    BC_2,
    BC_3,
    BC_4,
    BC_5,
    BC_6,
    BC_7,
    BC_8,
    BC_9,
    BC_10,
    BC_11,
    BC_12,
    BC_13,
    BC_14,
    BC_15,
    BC_16,
    BC_17,
    BC_18,
    BC_19,
    GSM_450,
    GSM_480,
    GSM_750,
    GSM_850,
    GSM_900_EXTENDED,
    GSM_900_PRIMARY,
    GSM_900_RAILWAYS,
    GSM_DCS_1800,
    GSM_PCS_1900,
    WCDMA_2100,
    WCDMA_PCS_1900,
    WCDMA_DCS_1800,
    WCDMA_1700_US,
    WCDMA_850,
    WCDMA_800,
    WCDMA_2600,
    WCDMA_900,
    WCDMA_1700_JAPAN,
    WCDMA_1500_JAPAN,
    WCDMA_850_JAPAN,
    EUTRAN_1,
    EUTRAN_2,
    EUTRAN_3,
    EUTRAN_4,
    EUTRAN_5,
    EUTRAN_6,
    EUTRAN_7,
    EUTRAN_8,
    EUTRAN_9,
    EUTRAN_10,
    EUTRAN_11,
    EUTRAN_12,
    EUTRAN_13,
    EUTRAN_14,
    EUTRAN_17,
    EUTRAN_18,
    EUTRAN_19,
    EUTRAN_20,
    EUTRAN_21,
    EUTRAN_23,
    EUTRAN_24,
    EUTRAN_25,
    EUTRAN_26,
    EUTRAN_27,
    EUTRAN_28,
    EUTRAN_29,
    EUTRAN_30,
    EUTRAN_31,
    EUTRAN_32,
    EUTRAN_33,
    EUTRAN_34,
    EUTRAN_35,
    EUTRAN_36,
    EUTRAN_37,
    EUTRAN_38,
    EUTRAN_39,
    EUTRAN_40,
    EUTRAN_41,
    EUTRAN_42,
    EUTRAN_43,
    EUTRAN_46,
    EUTRAN_47,
    EUTRAN_48,
    EUTRAN_66,
    EUTRAN_71,
    EUTRAN_125,
    EUTRAN_126,
    EUTRAN_127,
    EUTRAN_250,
    TDSCDMA_A,
    TDSCDMA_B,
    TDSCDMA_C,
    TDSCDMA_D,
    TDSCDMA_E,
    TDSCDMA_F,
}
export enum NasAttachState {
    UNKNOWN,
    ATTACHED,
    DETACHED,
}
export enum NasBoolean {
    FALSE,
    TRUE,
    UNKNOWN,
}
export enum NasCallBarringStatus {
    NORMAL_ONLY,
    EMERGENCY_ONLY,
    NO_CALLS,
    ALL_CALLS,
    UNKNOWN,
}
export enum NasCdmaPilotType {
    ACTIVE,
    NEIGHBOR,
}
export enum NasCdmaPrlPreference {
    A_SIDE_ONLY,
    B_SIDE_ONLY,
    ANY,
}
export enum NasCellBroadcastCapability {
    UNKNOWN,
    OFF,
    ON,
}
export enum NasChangeDuration {
    POWER_CYCLE,
    PERMANENT,
}
export enum NasDLBandwidth {
    /* 1_4 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 15 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    INVALID,
    UNKNOWN,
}
export enum NasDataCapability {
    NONE,
    GPRS,
    EDGE,
    HSDPA,
    HSUPA,
    WCDMA,
    CDMA,
    EVDO_REV_0,
    EVDO_REV_A,
    GSM,
    EVDO_REV_B,
    LTE,
    HSDPA_PLUS,
    DC_HSDPA_PLUS,
}
export enum NasDayOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}
export enum NasDaylightSavingsAdjustment {
    NONE,
    ONE_HOUR,
    TWO_HOURS,
}
export enum NasDrx {
    UNKNOWN,
    CN6_T32,
    CN7_T64,
    CN8_T128,
    CN9_T256,
}
export enum NasEvdoSinrLevel {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
}
export enum NasGsmWcdmaAcquisitionOrderPreference {
    AUTOMATIC,
    GSM,
    WCDMA,
}
export enum NasHdrPersonality {
    UNKNOWN,
    HRPD,
    EHRPD,
}
export enum NasHdrProtocolRevision {
    NONE,
    REL_0,
    REL_A,
    REL_B,
}
export enum NasLteCellAccessStatus {
    NORMAL_ONLY,
    EMERGENCY_ONLY,
    NO_CALLS,
    ALL_CALLS,
    UNKNOWN,
}
export enum NasLteRegistrationDomain {
    NOT_APPLICABLE,
    CS_ONLY,
    PS_ONLY,
    CS_PS,
    LIMITED_SERVICE,
}
export enum NasLteVoiceDomain {
    NONE,
    IMS,
    /* 1X (invalid, starts with a number) */
    /* 3GPP (invalid, starts with a number) */
}
export enum NasNetworkDescriptionDisplay {
    NO,
    YES,
    UNKNOWN,
}
export enum NasNetworkDescriptionEncoding {
    UNSPECIFIED,
    ASCII7,
    UNICODE,
    GSM,
}
export enum NasNetworkNameSource {
    UNKNOWN,
    OPERATOR_PLMN_LIST_AND_PLMN_NETWORK_NAME,
    COMMON_PCN_HANDSET_SPECIFICATION_AND_OPERATOR_NAME_STRING,
    NITZ,
    SE13,
    MCC_MNC,
    SERVICE_PROVIDER_NAME,
}
export enum NasNetworkRegisterType {
    AUTOMATIC,
    MANUAL,
}
export enum NasNetworkScanResult {
    SUCCESS,
    ABORT,
    RADIO_LINK_FAILURE,
}
export enum NasNetworkSelectionPreference {
    AUTOMATIC,
    MANUAL,
}
export enum NasNetworkSelectionRegistrationRestriction {
    UNRESTRICTED,
    CAMPED_ONLY,
    LIMITED,
}
export enum NasNetworkServiceDomain {
    NONE,
    CS,
    PS,
    CS_PS,
    UNKNOWN,
}
export enum NasNetworkType {
    UNKNOWN,
    /* 3GPP2 (invalid, starts with a number) */
    /* 3GPP (invalid, starts with a number) */
}
export enum NasPlmnEncodingScheme {
    GSM,
    UCS2LE,
}
export enum NasPlmnLanguageId {
    UNKNOWN,
    ZH_TRAD,
    ZH_SIMP,
}
export enum NasPlmnNameCountryInitials {
    INITIALS_DO_NOT_ADD,
    INIITALS_ADD,
    INIITALS_UNSPECIFIED,
}
export enum NasPlmnNameSpareBits {
    UNKNOWN,
    BIT_8,
    BITS_78,
    BITS_68,
    BITS_58,
    BITS_48,
    BITS_38,
    BITS_28,
}
export enum NasPreferenceDuration {
    PERMANENT,
    POWER_CYCLE,
    ONE_CALL,
    ONE_CALL_OR_TIME,
    INTERNAL_ONE_CALL_1,
    INTERNAL_ONE_CALL_2,
    INTERNAL_ONE_CALL_3,
}
export enum NasPsAttachAction {
    ATTACH,
    DETACH,
}
export enum NasRadioInterface {
    UNKNOWN,
    NONE,
    CDMA_1X,
    CDMA_1XEVDO,
    AMPS,
    GSM,
    UMTS,
    LTE,
    TD_SCDMA,
    /* 5GNR (invalid, starts with a number) */
}
export enum NasRegistrationState {
    NOT_REGISTERED,
    REGISTERED,
    NOT_REGISTERED_SEARCHING,
    REGISTRATION_DENIED,
    UNKNOWN,
}
export enum NasRejectCause {
    NONE,
    IMSI_UNKNOWN_IN_HLR,
    ILLEGAL_UE,
    IMSI_UNKNOWN_IN_VLR,
    IMEI_NOT_ACCEPTED,
    ILLEGAL_ME,
    PS_SERVICES_NOT_ALLOWED,
    PS_AND_NON_PS_SERVICES_NOT_ALLOWED,
    UE_IDENTITY_NOT_DERIVED_BY_NETWORK,
    IMPLICITLY_DETACHED,
    PLMN_NOT_ALLOWED,
    LOCATION_AREA_NOT_ALLOWED,
    ROAMING_IN_LOCATION_AREA_NOT_ALLOWED,
    PS_SERVICES_IN_LOCATION_AREA_NOT_ALLOWED,
    NO_SUITABLE_CELLS_IN_LOCATION_AREA,
    MSC_TEMPORARILY_NOT_REACHABLE,
    NETWORK_FAILURE,
    CS_DOMAIN_NOT_AVAILABLE,
    ESM_FAILURE,
    MAC_FAILURE,
    SYNCH_FAILURE,
    CONGESTION,
    UE_SECURITY_CAPABILITIES_MISMATCH,
    SECURITY_MODE_REJECTED_UNSPECIFIED,
    CSG_NOT_AUTHORIZED,
    NON_EPS_AUTHENTICATION_UNACCEPTABLE,
    SMS_PROVIDED_BY_GPRS_IN_ROUTING_AREA,
    REDIRECTION_TO_5GCN_REQUIRED,
    SERVICE_OPTION_NOT_SUPPORTED,
    REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED,
    SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER,
    REQUESTED_SERVICE_OPTION_NOT_AUTHORIZED,
    CALL_CANNOT_BE_IDENTIFIED,
    CS_SERVICE_TEMPORARILY_NOT_AVAILABLE,
    NO_EPS_BEARER_CONTEXT_ACTIVATED,
    SEVERE_NETWORK_FAILURE,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_0,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_1,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_2,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_3,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_4,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_5,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_6,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_7,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_8,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_9,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_10,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_11,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_12,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_13,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_14,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_15,
    SEMANTICALLY_INCORRECT_MESSAGE,
    INVALID_MANDATORY_INFORMATION,
    MESSAGE_TYPE_NON_EXISTENT,
    MESSAGE_TYPE_NOT_COMPATIBLE,
    INFORMATION_ELEMENT_NON_EXISTENT,
    CONDITIONAL_INFORMATION_ELEMENT_ERROR,
    MESSAGE_NOT_COMPATIBLE,
    UNSPECIFIED_PROTOCOL_ERROR,
}
export enum NasRoamingIndicatorStatus {
    ON,
    OFF,
}
export enum NasRoamingPreference {
    OFF,
    NOT_OFF,
    NOT_FLASHING,
    ANY,
}
export enum NasRoamingStatus {
    OFF,
    ON,
    BLINK,
    OUT_OF_NEIGHBORHOOD,
    OUT_OF_BUILDING,
    PREFERRED_SYSTEM,
    AVAILABLE_SYSTEM,
    ALLIANCE_PARTNER,
    PREMIUM_PARTNER,
    FULL_SERVICE,
    PARTIAL_SERVICE,
    BANNER_ON,
    BANNER_OFF,
}
export enum NasScellState {
    DECONFIGURED,
    DEACTIVATED,
    ACTIVATED,
}
export enum NasServiceDomainPreference {
    CS_ONLY,
    PS_ONLY,
    CS_PS,
    PS_ATTACH,
    PS_DETACH,
}
export enum NasServiceStatus {
    NONE,
    LIMITED,
    AVAILABLE,
    LIMITED_REGIONAL,
    POWER_SAVE,
}
export enum NasSimRejectState {
    UNAVAILABLE,
    AVAILABLE,
    CS_INVALID,
    PS_INVALID,
    CS_PS_INVALID,
}
export enum NasSwiEmmConnectionState {
    RRC_IDLE,
    WAITING_RRC_CFM,
    RRC_CONNECTING,
    RRC_RELEASING,
    UNKNOWN,
}
export enum NasSwiEmmState {
    DEREGISTERED,
    REG_INITIATED,
    REGISTERED,
    TAU_INITIATED,
    SR_INITIATED,
    DEREG_INITIATED,
    INVALID,
    UNKNOWN,
}
export enum NasSwiImsRegState {
    NO_SRV,
    IN_PROG,
    FAILED,
    LIMITED,
    FULL_SRV,
    _UNKNOWN,
}
export enum NasSwiModemMode {
    POWERING_OFF,
    FACTORY_TEST,
    OFFLINE,
    OFFLINE_AMPS,
    OFFLINE_CDMA,
    ONLINE,
    LOW_POWER,
    RESETTING,
    NETWORK_TEST,
    OFFLINE_REQUEST,
    PSEUDO_ONLINE,
    RESETTING_MODEM,
    UNKNOWN,
}
export enum NasSwiPsState {
    ATTACHED,
    DETACHED,
    UNKNOWN,
}
export enum NasSwiSystemMode {
    NO_SERVICE,
    AMPS,
    CDMA,
    GSM,
    HDR,
    WCDMA,
    GPS,
    WLAN,
    LTE,
    UNKNOWN,
}
export enum NasUsagePreference {
    UNKNOWN,
    VOICE_CENTRIC,
    DATA_CENTRIC,
}
export enum NasVoiceDomainPreference {
    CS_ONLY,
    PS_ONLY,
    CS_PREFERRED,
    PS_PREFERRED,
}
export enum NasWcdmaHsService {
    HSDPA_HSUPA_UNSUPPORTED,
    HSDPA_SUPPORTED,
    HSUPA_SUPPORTED,
    HSDPA_HSUPA_SUPPORTED,
    HSDPA_PLUS_SUPPORTED,
    HSDPA_PLUS_HSUPA_SUPPORTED,
    DC_HSDPA_PLUS_SUPPORTED,
    DC_HSDPA_PLUS_HSUPA_SUPPORTED,
}
export enum NasWcdmaRrcState {
    DISCONNECTED,
    CELL_PCH,
    URA_PCH,
    CELL_FACH,
    CELL_DCH,
}
export enum OmaHfaFeatureDoneState {
    NONE,
    SUCCEEDED,
    FAILED,
}
export enum OmaSessionFailedReason {
    UNKNOWN,
    NETWORK_UNAVAILABLE,
    SERVER_UNAVAILABLE,
    AUTHENTICATION_FAILED,
    MAX_RETRY_EXCEEDED,
    SESSION_CANCELLED,
}
export enum OmaSessionState {
    COMPLETE_INFORMATION_UPDATED,
    COMPLETE_UPDATED_INFORMATION_UNAVAILABLE,
    FAILED,
    RETRYING,
    CONNECTING,
    CONNECTED,
    AUTHENTICATED,
    MDN_DOWNLOADED,
    MSID_DOWNLOADED,
    PRL_DOWNLOADED,
    MIP_PROFILE_DOWNLOADED,
}
export enum OmaSessionType {
    CLIENT_INITIATED_DEVICE_CONFIGURE,
    CLIENT_INITIATED_PRL_UPDATE,
    CLIENT_INITIATED_HANDS_FREE_ACTIVATION,
    DEVICE_INITIATED_HANDS_FREE_ACTIVATION,
    NETWORK_INITIATED_PRL_UPDATE,
    NETWORK_INITIATED_DEVICE_CONFIGURE,
    DEVICE_INITIATED_PRL_UPDATE,
}
export enum PbmSessionType {
    GW_PRIMARY,
    /* 1X_PRIMARY (invalid, starts with a number) */
    GW_SECONDARY,
    /* 1X_SECONDARY (invalid, starts with a number) */
    NONPROVISIONING_SLOT_1,
    NONPROVISIONING_SLOT_2,
    GLOBAL_PHONEBOOK_SLOT_1,
    GLOBAL_PHONEBOOK_SLOT_2,
}
export enum PdcConfigurationType {
    PLATFORM,
    SOFTWARE,
}
export enum PdcRefreshEventType {
    START,
    COMPLETE,
    CLIENT_REFRESH,
}
export enum PdsNetworkMode {
    UMTS,
    CDMA,
}
export enum PdsOperatingMode {
    STANDALONE,
    MS_BASED,
    MS_ASSISTED,
}
export enum PdsOperationMode {
    UNKNOWN,
    STANDALONE,
    MS_BASED,
    MS_ASSISTED,
}
export enum PdsPositionSessionStatus {
    SUCCESS,
    IN_PROGRESS,
    GENERAL_FAILURE,
    TIMEOUT,
    USER_ENDED_SESSION,
    BAD_PARAMETER,
    PHONE_OFFLINE,
    ENGINE_LOCKED,
    E911_SESSION_IN_PROGRESS,
}
export enum PdsTrackingSessionState {
    UNKNOWN,
    INACTIVE,
    ACTIVE,
}
export enum ProtocolError {
    NONE,
    MALFORMEDMESSAGE,
    NOMEMORY,
    INTERNAL,
    ABORTED,
    CLIENTIDSEXHAUSTED,
    UNABORTABLETRANSACTION,
    INVALIDCLIENTID,
    NOTHRESHOLDSPROVIDED,
    INVALIDHANDLE,
    INVALIDPROFILE,
    INVALIDPINID,
    INCORRECTPIN,
    NONETWORKFOUND,
    CALLFAILED,
    OUTOFCALL,
    NOTPROVISIONED,
    MISSINGARGUMENT,
    ARGUMENTTOOLONG,
    INVALIDTRANSACTIONID,
    DEVICEINUSE,
    NETWORKUNSUPPORTED,
    DEVICEUNSUPPORTED,
    NOEFFECT,
    NOFREEPROFILE,
    INVALIDPDPTYPE,
    INVALIDTECHNOLOGYPREFERENCE,
    INVALIDPROFILETYPE,
    INVALIDSERVICETYPE,
    INVALIDREGISTERACTION,
    INVALIDPSATTACHACTION,
    AUTHENTICATIONFAILED,
    PINBLOCKED,
    PINALWAYSBLOCKED,
    UIMUNINITIALIZED,
    MAXIMUMQOSREQUESTSINUSE,
    INCORRECTFLOWFILTER,
    NETWORKQOSUNAWARE,
    INVALIDQOSID,
    REQUESTEDNUMBERUNSUPPORTED,
    INTERFACENOTFOUND,
    FLOWSUSPENDED,
    INVALIDDATAFORMAT,
    GENERALERROR,
    UNKNOWNERROR,
    INVALIDARGUMENT,
    INVALIDINDEX,
    NOENTRY,
    DEVICESTORAGEFULL,
    DEVICENOTREADY,
    NETWORKNOTREADY,
    WMSCAUSECODE,
    WMSMESSAGENOTSENT,
    WMSMESSAGEDELIVERYFAILURE,
    WMSINVALIDMESSAGEID,
    WMSENCODING,
    AUTHENTICATIONLOCK,
    INVALIDTRANSITION,
    NOTMCASTINTERFACE,
    MAXIMUMMCASTREQUESTSINUSE,
    INVALIDMCASTHANDLE,
    INVALIDIPFAMILYPREFERENCE,
    SESSIONINACTIVE,
    SESSIONINVALID,
    SESSIONOWNERSHIP,
    INSUFFICIENTRESOURCES,
    DISABLED,
    INVALIDOPERATION,
    INVALIDQMICOMMAND,
    WMSTPDUTYPE,
    WMSSMSCADDRESS,
    INFORMATIONUNAVAILABLE,
    SEGMENTTOOLONG,
    SEGMENTORDER,
    BUNDLINGNOTSUPPORTED,
    OPERATIONPARTIALFAILURE,
    POLICYMISMATCH,
    SIMFILENOTFOUND,
    EXTENDEDINTERNAL,
    ACCESSDENIED,
    HARDWARERESTRICTED,
    ACKNOTSENT,
    INJECTTIMEOUT,
    INCOMPATIBLESTATE,
    FDNRESTRICT,
    SUPSFAILURECASE,
    NORADIO,
    NOTSUPPORTED,
    NOSUBSCRIPTION,
    CARDCALLCONTROLFAILED,
    NETWORKABORTED,
    MSGBLOCKED,
    INVALIDSESSIONTYPE,
    INVALIDPBTYPE,
    NOSIM,
    PBNOTREADY,
    PINRESTRICTION,
    PIN1RESTRICTION,
    PUKRESTRICTION,
    PUK2RESTRICTION,
    PBACCESSRESTRICTED,
    PBDELETEINPROGRESS,
    PBTEXTTOOLONG,
    PBNUMBERTOOLONG,
    PBHIDDENKEYRESTRICTION,
    PBNOTAVAILABLE,
    DEVICEMEMORYERROR,
    NOPERMISSION,
    TOOSOON,
    TIMENOTACQUIRED,
    OPERATIONINPROGRESS,
    FWWRITEFAILED,
    FWINFOREADFAILED,
    FWFILENOTFOUND,
    FWDIRNOTFOUND,
    FWALREADYACTIVATED,
    FWCANNOTGENERICIMAGE,
    FWFILEOPENFAILED,
    FWUPDATEDISCONTINUOUSFRAME,
    FWUPDATEFAILED,
    CATEVENTREGISTRATIONFAILED,
    CATINVALIDTERMINALRESPONSE,
    CATINVALIDENVELOPECOMMAND,
    CATENVELOPECOMMANDBUSY,
    CATENVELOPECOMMANDFAILED,
}
export enum QosEvent {
    UNKNOWN,
    ACTIVATED,
    SUSPENDED,
    GONE,
    MODIFY_ACCEPTED,
    MODIFY_REJECTED,
    INFO_CODE_UPDATED,
}
export enum QosStatus {
    UNKNOWN,
    ACTIVATED,
    SUSPENDED,
    GONE,
}
export enum SarRfState {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 11 (invalid, starts with a number) */
    /* 12 (invalid, starts with a number) */
    /* 13 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
    /* 15 (invalid, starts with a number) */
    /* 16 (invalid, starts with a number) */
    /* 17 (invalid, starts with a number) */
    /* 18 (invalid, starts with a number) */
    /* 19 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
}
export enum Service {
    UNKNOWN,
    CTL,
    WDS,
    DMS,
    NAS,
    QOS,
    WMS,
    PDS,
    AUTH,
    AT,
    VOICE,
    CAT2,
    UIM,
    PBM,
    QCHAT,
    RMTFS,
    TEST,
    LOC,
    SAR,
    IMS,
    ADC,
    CSD,
    MFS,
    TIME,
    TS,
    TMD,
    SAP,
    WDA,
    TSYNC,
    RFSA,
    CSVT,
    QCMAP,
    IMSP,
    IMSVT,
    IMSA,
    COEX,
    PDC,
    STX,
    BIT,
    IMSRTP,
    RFRPE,
    DSD,
    SSCTL,
    DPM,
    CAT,
    RMS,
    OMA,
    FOTA,
    GMS,
    GAS,
}
export enum SioPort {
    NONE,
    A2_MUX_RMNET0,
    A2_MUX_RMNET1,
    A2_MUX_RMNET2,
    A2_MUX_RMNET3,
    A2_MUX_RMNET4,
    A2_MUX_RMNET5,
    A2_MUX_RMNET6,
    A2_MUX_RMNET7,
}
export enum UimCardApplicationPersonalizationFeature {
    GW_NETWORK,
    GW_NETWORK_SUBSET,
    GW_SERVICE_PROVIDER,
    GW_CORPORATE,
    GW_UIM,
    /* 1X_NETWORK_TYPE_1 (invalid, starts with a number) */
    /* 1X_NETWORK_TYPE_2 (invalid, starts with a number) */
    /* 1X_HRPD (invalid, starts with a number) */
    /* 1X_SERVICE_PROVIDER (invalid, starts with a number) */
    /* 1X_CORPORATE (invalid, starts with a number) */
    /* 1X_RUIM (invalid, starts with a number) */
    UNKNOWN,
}
export enum UimCardApplicationPersonalizationState {
    UNKNOWN,
    IN_PROGRESS,
    READY,
    CODE_REQUIRED,
    PUK_CODE_REQUIRED,
    PERMANENTLY_BLOCKED,
}
export enum UimCardApplicationState {
    UNKNOWN,
    DETECTED,
    PIN1_OR_UPIN_PIN_REQUIRED,
    PUK1_OR_UPIN_PUK_REQUIRED,
    CHECK_PERSONALIZATION_STATE,
    PIN1_BLOCKED,
    ILLEGAL,
    READY,
}
export enum UimCardApplicationType {
    UNKNOWN,
    SIM,
    USIM,
    RUIM,
    CSIM,
    ISIM,
}
export enum UimCardError {
    UNKNOWN,
    POWER_DOWN,
    POLL,
    NO_ATR_RECEIVED,
    VOLTAGE_MISMATCH,
    PARITY,
    POSSIBLY_REMOVED,
    TECHNICAL,
}
export enum UimCardProtocol {
    UNKNOWN,
    ICC,
    UICC,
}
export enum UimCardState {
    ABSENT,
    PRESENT,
    ERROR,
}
export enum UimDepersonalizationOperation {
    DEACTIVATE,
    UNBLOCK,
}
export enum UimFileType {
    TRANSPARENT,
    CYCLIC,
    LINEAR_FIXED,
    DEDICATED_FILE,
    MASTER_FILE,
}
export enum UimPhysicalCardState {
    UNKNOWN,
    ABSENT,
    PRESENT,
}
export enum UimPinId {
    UNKNOWN,
    PIN1,
    PIN2,
    UPIN,
    HIDDEN_KEY,
}
export enum UimPinState {
    NOT_INITIALIZED,
    ENABLED_NOT_VERIFIED,
    ENABLED_VERIFIED,
    DISABLED,
    BLOCKED,
    PERMANENTLY_BLOCKED,
}
export enum UimRefreshMode {
    RESET,
    INIT,
    INIT_FCN,
    FCN,
    INIT_FULL_FCN,
    APP_RESET,
    /* 3G_RESET (invalid, starts with a number) */
}
export enum UimRefreshStage {
    WAIT_FOR_OK,
    START,
    END_WITH_SUCCESS,
    END_WITH_FAILURE,
}
export enum UimSecurityAttributeLogic {
    ALWAYS,
    NEVER,
    AND,
    OR,
    SINGLE,
}
export enum UimSessionType {
    PRIMARY_GW_PROVISIONING,
    PRIMARY_1X_PROVISIONING,
    SECONDARY_GW_PROVISIONING,
    SECONDARY_1X_PROVISIONING,
    NONPROVISIONING_SLOT_1,
    NONPROVISIONING_SLOT_2,
    CARD_SLOT_1,
    CARD_SLOT_2,
    LOGICAL_CHANNEL_SLOT_1,
    LOGICAL_CHANNEL_SLOT_2,
    TERTIARY_GW_PROVISIONING,
    TERTIARY_1X_PROVISIONING,
    QUATERNARY_GW_PROVISIONING,
    QUATERNARY_1X_PROVISIONING,
    QUINARY_GW_PROVISIONING,
    QUINARY_1X_PROVISIONING,
    NONPROVISIONING_SLOT_3,
    NONPROVISIONING_SLOT_4,
    NONPROVISIONING_SLOT_5,
    CARD_SLOT_3,
    CARD_SLOT_4,
    CARD_SLOT_5,
    LOGICAL_CHANNEL_SLOT_3,
    LOGICAL_CHANNEL_SLOT_4,
    LOGICAL_CHANNEL_SLOT_5,
}
export enum UimSlotState {
    INACTIVE,
    ACTIVE,
}
export enum VoiceAlphaDataCodingScheme {
    GSM,
    UCS2,
}
export enum VoiceAls {
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
}
export enum VoiceCallControlResultType {
    VOICE,
    SUPS,
    USSD,
}
export enum VoiceCallControlSupplementaryServiceType {
    ACTIVATE,
    DEACTIVATE,
    REGISTER,
    ERASE,
    INTERROGATE,
    REGISTER_PASSWORD,
    USSD,
}
export enum VoiceCallDirection {
    UNKNOWN,
    MO,
    MT,
}
export enum VoiceCallEndReason {
    OFFLINE,
    CDMA_LOCK,
    NO_SERVICE,
    FADE,
    INTERCEPT,
    REORDER,
    RELEASE_NORMAL,
    RELEASE_SO_REJECT,
    INCOMING_CALL,
    ALERT_STOP,
    CLIENT_END,
    ACTIVATION,
    MC_ABORT,
    MAX_ACCESS_PROBE,
    PSIST_N,
    UIM_NOT_PRESENT,
    ACCESS_ATTEMPT_IN_PROGRESS,
    ACCESS_FAILURE,
    ACCESS_RETRY_ORDER,
    CCS_NOT_SUPPORTED_BY_BS,
    NO_RESPONSE_FROM_BS,
    REJECTED_BY_BS,
    INCOMPATIBLE,
    ACCESS_BLOCK,
    ALREADY_IN_TC,
    EMERGENCY_FLASHED,
    USER_CALL_ORIGINATED_DURING_GPS,
    USER_CALL_ORIGINATED_DURING_SMS,
    USER_CALL_ORIGINATED_DURING_DATA,
    REDIRECTION_OR_HANDOFF,
    ACCESS_BLOCK_ALL,
    OTASP_SPC_ERR,
    IS707B_MAX_ACCESS_PROBES,
    ACCESS_FAILURE_REJECT_ORDER,
    ACCESS_FAILURE_RETRY_ORDER,
    TIMEOUT_T42,
    TIMEOUT_T40,
    SERVICE_INIT_FAILURE,
    TIMEOUT_T50,
    TIMEOUT_T51,
    RL_ACK_TIMEOUT,
    BAD_FORWARD_LINK,
    TRM_REQUEST_FAILED,
    TIMEOUT_T41,
    INCOMING_REJECTED,
    SETUP_REJECTED,
    NETWORK_END,
    NO_FUNDS,
    NO_GW_SERVICE,
    NO_CDMA_SERVICE,
    NO_FULL_SERVICE,
    MAX_PS_CALLS,
    UNKNOWN_SUBSCRIBER,
    ILLEGAL_SUBSCRIBER,
    BEARER_SERVICE_NOT_PROVISIONED,
    TELE_SERVICE_NOT_PROVISIONED,
    ILLEGAL_EQUIPMENT,
    CALL_BARRED,
    ILLEGAL_SS_OPERATION,
    SS_ERROR_STATUS,
    SS_NOT_AVAILABLE,
    SS_SUBSCRIPTION_VIOLATION,
    SS_INCOMPATIBILITY,
    FACILITY_NOT_SUPPORTED,
    ABSENT_SUBSCRIBER,
    SHORT_TERM_DENIAL,
    LONG_TERM_DENIAL,
    SYSTEM_FAILURE,
    DATA_MISSING,
    UNEXPECTED_DATA_VALUE,
    PASSWORD_REGISTRATION_FAILURE,
    NEGATIVE_PASSWORD_CHECK,
    NUM_OF_PASSWORD_ATTEMPTS_VIOLATION,
    POSITION_METHOD_FAILURE,
    UNKNOWN_ALPHABET,
    USSD_BUSY,
    REJECTED_BY_USER,
    REJECTED_BY_NETWORK,
    DEFLECTION_TO_SERVED_SUBSCRIBER,
    SPECIAL_SERVICE_CODE,
    INVALID_DEFLECTED_TO_NUMBER,
    MULTIPARTY_PARTICIPANTS_EXCEEDED,
    RESOURCES_NOT_AVAILABLE,
    UNASSIGNED_NUMBER,
    NO_ROUTE_TO_DESTINATION,
    CHANNEL_UNACCEPTABLE,
    OPERATOR_DETERMINED_BARRING,
    NORMAL_CALL_CLEARING,
    USER_BUSY,
    NO_USER_RESPONDING,
    USER_ALERTING_NO_ANSWER,
    CALL_REJECTED,
    NUMBER_CHANGED,
    PREEMPTION,
    DESTINATION_OUT_OF_ORDER,
    INVALID_NUMBER_FORMAT,
    FACILITY_REJECTED,
    RESPONSE_TO_STATUS_ENQUIRY,
    NORMAL_UNSPECIFIED,
    NO_CIRCUIT_OR_CHANNEL_AVAILABLE,
    NETWORK_OUT_OF_ORDER,
    TEMPORARY_FAILURE,
    SWITCHING_EQUIPMENT_CONGESTION,
    ACCESS_INFORMATION_DISCARDED,
    REQUESTED_CIRCUIT_OR_CHANNEL_NOT_AVAILABLE,
    RESOURCES_UNAVAILABLE_OR_UNSPECIFIED,
    QOS_UNAVAILABLE,
    REQUESTED_FACILITY_NOT_SUBSCRIBED,
    INCOMING_CALLS_BARRED_WITHIN_CUG,
    BEARER_CAPABILITY_NOT_AUTH,
    BEARER_CAPABILITY_UNAVAILABLE,
    SERVICE_OPTION_NOT_AVAILABLE,
    ACM_LIMIT_EXCEEDED,
    BEARER_SERVICE_NOT_IMPLEMENTED,
    REQUESTED_FACILITY_NOT_IMPLEMENTED,
    ONLY_DIGITAL_INFORMATION_BEARER_AVAILABLE,
    SERVICE_OR_OPTION_NOT_IMPLEMENTED,
    INVALID_TRANSACTION_IDENTIFIER,
    USER_NOT_MEMBER_OF_CUG,
    INCOMPATIBLE_DESTINATION,
    INVALID_TRANSIT_NETWORK_SELECTION,
    SEMANTICALLY_INCORRECT_MESSAGE,
    INVALID_MANDATORY_INFORMATION,
    MESSAGE_TYPE_NOT_IMPLEMENTED,
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    INFORMATION_ELEMENT_NON_EXISTENT,
    CONDITIONAL_IE_ERROR,
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    RECOVERY_ON_TIMER_EXPIRED,
    PROTOCOL_ERROR_UNSPECIFIED,
    INTERWORKING_UNSPECIFIED,
    OUTGOING_CALLS_BARRED_WITHIN_CUG,
    NO_CUG_SELECTION,
    UNKNOWN_CUG_INDEX,
    CUG_INDEX_INCOMPATIBLE,
    CUG_CALL_FAILURE_UNSPECIFIED,
    CLIR_NOT_SUBSCRIBED,
    CCBS_POSSIBLE,
    CCBS_NOT_POSSIBLE,
    IMSI_UNKNOWN_IN_HLR,
    ILLEGAL_MS,
    IMSI_UNKNOWN_IN_VLR,
    IMEI_NOT_ACCEPTED,
    ILLEGAL_ME,
    PLMN_NOT_ALLOWED,
    LOCATION_AREA_NOT_ALLOWED,
    ROAMING_NOT_ALLOWED_IN_THIS_LOCATION_AREA,
    NO_SUITABLE_CELLS_IN_LOCATION_AREA,
    NETWORK_FAILURE,
    MAC_FAILURE,
    SYNCH_FAILURE,
    NETWORK_CONGESTION,
    GSM_AUTHENTICATION_UNACCEPTABLE,
    SERVICE_NOT_SUBSCRIBED,
    SERVICE_TEMPORARILY_OUT_OF_ORDER,
    CALL_CANNOT_BE_IDENTIFIED,
    INCORRECT_SEMANTICS_IN_MESSAGE,
    MANDATORY_INFORMATION_INVALID,
    ACCESS_STRATUM_FAILURE,
    INVALID_SIM,
    WRONG_STATE,
    ACCESS_CLASS_BLOCKED,
    NO_RESOURCES,
    INVALID_USER_DATA,
    TIMER_T3230_EXPIRED,
    NO_CELL_AVAILABLE,
    ABORT_MESSAGE_RECEIVED,
    RADIO_LINK_LOST,
    TIMER_T303_EXPIRED,
    CNM_MM_RELEASE_PENDING,
    ACCESS_STRATUM_REJECT_RR_RELEASE_INDICATION,
    ACCESS_STRATUM_REJECT_RR_RANDOM_ACCESS_FAILURE,
    ACCESS_STRATUM_REJECT_RRC_RELEASE_INDICATION,
    ACCESS_STRATUM_REJECT_RRC_CLOSE_SESSION_INDICATION,
    ACCESS_STRATUM_REJECT_RRC_OPEN_SESSION_FAILURE,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_FAILURE,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_FAILURE_REDIAL_NOT_ALLOWED,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_IMMEDIATE_RETRY,
    ACCESS_STRATUM_REJECT_ABORT_RADIO_UNAVAILABLE,
    SERVICE_OPTION_NOT_SUPPORTED,
    BAD_REQUEST_WAIT_INVITE,
    BAD_REQUEST_WAIT_REINVITE,
    INVALID_REMOTE_URI,
    REMOTE_UNSUPPORTED_MEDIA_TYPE,
    PEER_NOT_REACHABLE,
    NETWORK_NO_RESPONSE_TIMEOUT,
    NETWORK_NO_RESPONSE_HOLD_FAILURE,
    DATA_CONNECTION_LOST,
    UPGRADE_DOWNGRADE_REJECTED,
    SIP_403_FORBIDDEN,
    NO_NETWORK_RESPONSE,
    UPGRADE_DOWNGRADE_FAILED,
    UPGRADE_DOWNGRADE_CANCELLED,
    SSAC_REJECT,
    THERMAL_EMERGENCY,
    /* 1XCSFB_SOFT_FAILURE (invalid, starts with a number) */
    /* 1XCSFB_HARD_FAILURE (invalid, starts with a number) */
}
export enum VoiceCallMode {
    UNKNOWN,
    CDMA,
    GSM,
    UMTS,
    LTE,
}
export enum VoiceCallState {
    UNKNOWN,
    ORIGINATION,
    INCOMING,
    CONVERSATION,
    CC_IN_PROGRESS,
    ALERTING,
    HOLD,
    WAITING,
    DISCONNECTING,
    END,
    SETUP,
}
export enum VoiceCallType {
    VOICE,
    VOICE_IP,
    OTAPA,
    NON_STD_OTASP,
    EMERGENCY,
    SUPS,
}
export enum VoiceDomain {
    CS_ONLY,
    PS_ONLY,
    CS_PREFERRED,
    PS_PREFERRED,
}
export enum VoicePresentation {
    ALLOWED,
    RESTRICTED,
    UNAVAILABLE,
    PAYPHONE,
}
export enum VoicePrivacy {
    STANDARD,
    ENHANCED,
}
export enum VoiceServiceOption {
    WILD,
    IS_96A,
    EVRC,
    /* 13K_IS733 (invalid, starts with a number) */
    SELECTABLE_MODE_VOCODER,
    /* 4GV_NARROW_BAND (invalid, starts with a number) */
    /* 4GV_WIDE_BAND (invalid, starts with a number) */
    /* 13K (invalid, starts with a number) */
    IS_96,
    WVRC,
}
export enum VoiceSupplementaryServiceAction {
    ACTIVATE,
    DEACTIVATE,
    REGISTER,
    ERASE,
}
export enum VoiceSupplementaryServiceNotificationType {
    OUTGOING_CALL_IS_FORWARDED,
    OUTGOING_CALL_IS_WAITING,
    OUTGOING_CUG_CALL,
    OUTGOING_CALLS_BARRED,
    OUTGOING_CALL_IS_DEFLECTED,
    INCOMING_CUG_CALL,
    INCOMING_CALLS_BARRED,
    INCOMING_FORWARDED_CALL,
    INCOMING_DEFLECTED_CALL,
    INCOMING_CALL_IS_FORWARDED,
    UNCONDITIONAL_CALL_FORWARD_ACTIVE,
    CONDITIONAL_CALL_FORWARD_ACTIVE,
    CLIR_SUPPRESSION_REJECTED,
    CALL_IS_ON_HOLD,
    CALL_IS_RETRIEVED,
    CALL_IS_IN_MULTIPARTY,
    INCOMING_CALL_IS_ECT,
}
export enum VoiceSupplementaryServiceReason {
    FORWARD_UNCONDITIONAL,
    FORWARD_MOBILE_BUSY,
    FORWARD_NO_REPLY,
    FORWARD_UNREACHABLE,
    FORWARD_ALL,
    FORWARD_ALL_CONDITIONAL,
    ALL_OUTGOING,
    OUTGOING_INTERNAL,
    OUTGOING_INTERNAL_EXTERNAL_TO_HOME,
    ALL_INCOMING,
    INCOMING_ROAMING,
    BAR_ALL,
    BAR_ALL_OUTGOING,
    BAR_ALL_INCOMING,
    CALL_WAITING,
}
export enum VoiceSupplementaryServiceType {
    RELEASE_HELD_OR_WAITING,
    RELEASE_ACTIVE_ACCEPT_HELD_OR_WAITING,
    HOLD_ACTIVE_ACCEPT_WAITING_OR_HELD,
    HOLD_ALL_EXCEPT_SPECIFIED_CALL,
    MAKE_CONFERENCE_CALL,
    EXPLICIT_CALL_TRANSFER,
    CCBS_ACTIVATION,
    END_ALL_CALLS,
    RELEASE_SPECIFIED_CALL,
    LOCAL_HOLD,
    LOCAL_UNHOLD,
}
export enum VoiceTtyMode {
    FULL,
    VCO,
    HCO,
    OFF,
}
export enum VoiceUserAction {
    UNKNOWN,
    NOT_REQUIRED,
    REQUIRED,
}
export enum VoiceUssDataCodingScheme {
    UNKNOWN,
    ASCII,
    /* 8BIT (invalid, starts with a number) */
    UCS2,
}
export enum WdaDataAggregationProtocol {
    DISABLED,
    TLP,
    QC_NCM,
    MBIM,
    RNDIS,
    QMAP,
    QMAPV2,
    QMAPV3,
    QMAPV4,
    QMAPV5,
}
export enum WdaLinkLayerProtocol {
    UNKNOWN,
    /* 802_3 (invalid, starts with a number) */
    RAW_IP,
}
export enum WdsAttachPdnListAction {
    NONE,
    DETACH_OR_PDN_DISCONNECT,
}
export enum WdsAutoconnectSetting {
    DISABLED,
    ENABLED,
    PAUSED,
}
export enum WdsAutoconnectSettingRoaming {
    ALLOWED,
    HOME_ONLY,
}
export enum WdsCallEndReason {
    GENERIC_UNSPECIFIED,
    GENERIC_CLIENT_END,
    GENERIC_NO_SERVICE,
    GENERIC_FADE,
    GENERIC_RELEASE_NORMAL,
    GENERIC_ACCESS_ATTEMPT_IN_PROGRESS,
    GENERIC_ACCESS_FAILURE,
    GENERIC_REDIRECTION_OR_HANDOFF,
    GENERIC_CLOSE_IN_PROGRESS,
    GENERIC_AUTHENTICATION_FAILED,
    GENERIC_INTERNAL_ERROR,
    CDMA_LOCK,
    CDMA_INTERCEPT,
    CDMA_REORDER,
    CDMA_RELEASE_SO_REJECT,
    CDMA_INCOMING_CALL,
    CDMA_ALERT_STOP,
    CDMA_ACTIVATION,
    CDMA_MAX_ACCESS_PROBES,
    CDMA_CCS_NOT_SUPPORTED_BY_BS,
    CDMA_NO_RESPONSE_FROM_BS,
    CDMA_REJECTED_BY_BS,
    CDMA_INCOMPATIBLE,
    CDMA_ALREADY_IN_TC,
    CDMA_USER_CALL_ORIGINATED_DURING_GPS,
    CDMA_USER_CALL_ORIGINATED_DURING_SMS,
    CDMA_NO_SERVICE,
    GSM_WCDMA_CONFERENCE_FAILED,
    GSM_WCDMA_INCOMING_REJECTED,
    GSM_WCDMA_NO_SERVICE,
    GSM_WCDMA_NETWORK_END,
    GSM_WCDMA_LLC_SNDCP_FAILURE,
    GSM_WCDMA_INSUFFICIENT_RESOURCES,
    GSM_WCDMA_OPTION_TEMPORARILY_OUT_OF_ORDER,
    GSM_WCDMA_NSAPI_ALREADY_USED,
    GSM_WCDMA_REGULAR_DEACTIVATION,
    GSM_WCDMA_NETWORK_FAILURE,
    GSM_WCDMA_REATTACH_REQUIRED,
    GSM_WCDMA_PROTOCOL_ERROR,
    GSM_WCDMA_OPERATOR_DETERMINED_BARRING,
    GSM_WCDMA_UNKNOWN_APN,
    GSM_WCDMA_UNKNOWN_PDP,
    GSM_WCDMA_GGSN_REJECT,
    GSM_WCDMA_ACTIVATION_REJECT,
    GSM_WCDMA_OPTION_NOT_SUPPORTED,
    GSM_WCDMA_OPTION_UNSUBSCRIBED,
    GSM_WCDMA_QOS_NOT_ACCEPTED,
    GSM_WCDMA_TFT_SEMANTIC_ERROR,
    GSM_WCDMA_TFT_SYNTAX_ERROR,
    GSM_WCDMA_UNKNOWN_PDP_CONTEXT,
    GSM_WCDMA_FILTER_SEMANTIC_ERROR,
    GSM_WCDMA_FILTER_SYNTAX_ERROR,
    GSM_WCDMA_PDP_WITHOUT_ACTIVE_TFT,
    GSM_WCDMA_INVALID_TRANSACTION_ID,
    GSM_WCDMA_MESSAGE_INCORRECT_SEMANTIC,
    GSM_WCDMA_INVALID_MANDATORY_INFO,
    GSM_WCDMA_MESSAGE_TYPE_UNSUPPORTED,
    GSM_WCDMA_MESSAGE_TYPE_NONCOMPATIBLE_STATE,
    GSM_WCDMA_UNKNOWN_INFO_ELEMENT,
    GSM_WCDMA_CONDITIONAL_IE_ERROR,
    GSM_WCDMA_MESSAGE_AND_PROTOCOL_STATE_UNCOMPATIBLE,
    GSM_WCDMA_APN_TYPE_CONFLICT,
    GSM_WCDMA_NO_GPRS_CONTEXT,
    GSM_WCDMA_FEATURE_NOT_SUPPORTED,
    EVDO_CONNECTION_DENY_GENERAL_OR_BUSY,
    EVDO_CONNECTION_DENY_BILLING_OR_AUTHENTICATION_FAILURE,
    EVDO_HDR_CHANGE,
    EVDO_HDR_EXIT,
    EVDO_HDR_NO_SESSION,
    EVDO_HDR_ORIGINATION_DURING_GPS_FIX,
    EVDO_HDR_CONNECTION_SETUP_TIMEOUT,
    EVDO_HDR_RELEASED_BY_CM,
}
export enum WdsCallType {
    LAPTOP,
    EMBEDDED,
}
export enum WdsClientType {
    TETHERED,
    UNDEFINED,
}
export enum WdsConnectionStatus {
    UNKNOWN,
    DISCONNECTED,
    CONNECTED,
    SUSPENDED,
    AUTHENTICATING,
}
export enum WdsDataBearerTechnology {
    UNKNOWN,
    CDMA20001X,
    /* 1XEVDO (invalid, starts with a number) */
    GSM,
    UMTS,
    /* 1XEVDO_REVA (invalid, starts with a number) */
    EDGE,
    HSDPA,
    HSUPA,
    HSDPA_HSUPDA,
    LTE,
    EHRPD,
    HSDPAPLUS,
    HSDPAPLUS_HSUPA,
    DCHSDPAPLUS,
    DCHSDPAPLUS_HSUPA,
    HSDPAPLUS_PLUS_64QAM,
    HSDPAPLUS_PLUS_64QAM_HSUPA,
    TDSCDMA,
    TDSCDMA_HSDPA,
    TDSCDMA_HSUPA,
}
export enum WdsDataCallStatus {
    UNKNOWN,
    ACTIVATED,
    TERMINATED,
}
export enum WdsDataCallType {
    UNKNOWN,
    EMBEDDED,
    TETHERED,
    MODEM_EMBEDDED,
}
export enum WdsDataSystem {
    UNKNOWN,
    CDMA1X,
    CDMA1X_EVDO,
    GPRS,
    WCDMA,
    LTE,
    TDSCDMA,
}
export enum WdsDataSystemNetworkType {
    /* 3GPP (invalid, starts with a number) */
    /* 3GPP2 (invalid, starts with a number) */
}
export enum WdsDeliveryOrder {
    SUBSCRIBE,
    ON,
    OFF,
}
export enum WdsDormancyStatus {
    UNKNOWN,
    TRAFFIC_CHANNEL_DORMANT,
    TRAFFIC_CHANNEL_ACTIVE,
}
export enum WdsDsProfileError {
    UNKNOWN,
    FAIL,
    INVALID_HANDLE,
    INVALID_OPERATION,
    INVALID_PROFILE_TYPE,
    INVALID_PROFILE_NUMBER,
    INVALID_PROFILE_ID,
    INVALID_ARGUMENT,
    REGISTRY_NOT_INITIALIZED,
    INVALID_PARAMETER_LENGTH,
    LIST_END,
    INVALID_SUBSCRIPTION_ID,
    INVALID_PROFILE_FAMILY,
    /* 3GPP_INVALID_PROFILE_FAMILY (invalid, starts with a number) */
    /* 3GPP_ACCESS_ERROR (invalid, starts with a number) */
    /* 3GPP_CONTEXT_NOT_DEFINED (invalid, starts with a number) */
    /* 3GPP_VALID_FLAG_NOT_SET (invalid, starts with a number) */
    /* 3GPP_READ_ONLY_FLAG_SET (invalid, starts with a number) */
    /* 3GPP_OUT_OF_PROFILES (invalid, starts with a number) */
    /* 3GPP2_INVALID_PROFILE_ID (invalid, starts with a number) */
}
export enum WdsExtendedTechnologyPreference {
    CDMA,
    UMTS,
    EPC,
    EMBMS,
    MODEM_LINK_LOCAL,
}
export enum WdsIpFamily {
    UNKNOWN,
    IPV4,
    IPV6,
    UNSPECIFIED,
}
export enum WdsIpSupportType {
    IPV4,
    IPV6,
    IPV4V6,
}
export enum WdsNetworkType {
    UNKNOWN,
    /* 3GPP2 (invalid, starts with a number) */
    /* 3GPP (invalid, starts with a number) */
}
export enum WdsPdpDataCompressionType {
    OFF,
    MANUFACTURER_PREFERRED,
    V42BIS,
    V44,
}
export enum WdsPdpHeaderCompressionType {
    OFF,
    MANUFACTURER_PREFERRED,
    RFC1144,
    RFC2507,
    RFC3095,
}
export enum WdsPdpType {
    IPV4,
    PPP,
    IPV6,
    IPV4_OR_IPV6,
}
export enum WdsProfileFamily {
    EMBEDDED,
    TETHERED,
}
export enum WdsProfileType {
    /* 3GPP (invalid, starts with a number) */
    /* 3GPP2 (invalid, starts with a number) */
}
export enum WdsQosClassIdentifier {
    NETWORK_ASSIGN,
    GUARANTEED_BITRATE1,
    GUARANTEED_BITRATE2,
    GUARANTEED_BITRATE3,
    GUARANTEED_BITRATE4,
    NON_GUARANTEED_BITRATE5,
    NON_GUARANTEED_BITRATE6,
    NON_GUARANTEED_BITRATE7,
    NON_GUARANTEED_BITRATE8,
}
export enum WdsRadioAccessTechnology {
    NULL_BEARER,
    /* 3GPP_WCDMA (invalid, starts with a number) */
    /* 3GPP_GERAN (invalid, starts with a number) */
    /* 3GPP_LTE (invalid, starts with a number) */
    /* 3GPP_TDSCDMA (invalid, starts with a number) */
    /* 3GPP_WLAN (invalid, starts with a number) */
    /* 3GPP_MAXIMUM (invalid, starts with a number) */
    /* 3GPP2_1X (invalid, starts with a number) */
    /* 3GPP2_HRPD (invalid, starts with a number) */
    /* 3GPP2_EHRPD (invalid, starts with a number) */
    /* 3GPP2_WLAN (invalid, starts with a number) */
    /* 3GPP2_MAXIMUM (invalid, starts with a number) */
}
export enum WdsSduErroneousDelivery {
    SUBSCRIBE,
    NO_DETECTION,
    ENABLED,
    DISABLED,
}
export enum WdsSduErrorRatio {
    SUBSCRIBE,
    /* 1E2 (invalid, starts with a number) */
    /* 7E3 (invalid, starts with a number) */
    /* 1E3 (invalid, starts with a number) */
    /* 1E4 (invalid, starts with a number) */
    /* 1E5 (invalid, starts with a number) */
    /* 1E6 (invalid, starts with a number) */
    /* 1E1 (invalid, starts with a number) */
}
export enum WdsSduResidualBitErrorRatio {
    SUBSCRIBE,
    /* 5E2 (invalid, starts with a number) */
    /* 1E2 (invalid, starts with a number) */
    /* 5E3 (invalid, starts with a number) */
    /* 4E3 (invalid, starts with a number) */
    /* 1E3 (invalid, starts with a number) */
    /* 1E4 (invalid, starts with a number) */
    /* 1E5 (invalid, starts with a number) */
    /* 1E6 (invalid, starts with a number) */
    /* 6E8 (invalid, starts with a number) */
}
export enum WdsTetheredCallType {
    NON_TETHERED,
    RMNET,
    DUN,
}
export enum WdsTrafficClass {
    SUBSCRIBED,
    CONVERSATIONAL,
    STREAMING,
    INTERACTIVE,
    BACKGROUND,
}
export enum WdsVerboseCallEndReason3gpp {
    OPERATOR_DETERMINED_BARRING,
    LLC_SNDCP_FAILURE,
    INSUFFICIENT_RESOURCES,
    UNKNOWN_APN,
    UNKNOWN_PDP,
    AUTHENTICATION_FAILED,
    GGSN_REJECT,
    ACTIVATION_REJECT,
    OPTION_NOT_SUPPORTED,
    OPTION_UNSUBSCRIBED,
    OPTION_TEMPORARILY_OUT_OF_ORDER,
    NSAPI_ALREADY_USED,
    REGULAR_DEACTIVATION,
    QOS_NOT_ACCEPTED,
    NETWORK_FAILURE,
    REATTACH_REQUIRED,
    FEATURE_NOT_SUPPORTED,
    TFT_SEMANTIC_ERROR,
    TFT_SYNTAX_ERROR,
    UNKNOWN_PDP_CONTEXT,
    FILTER_SEMANTIC_ERROR,
    FILTER_SYNTAX_ERROR,
    PDP_WITHOUT_ACTIVE_TFT,
    IPV4_ONLY_ALLOWED,
    IPV6_ONLY_ALLOWED,
    SINGLE_ADDRESS_BEARER_ONLY,
    ESM_INFO_NOT_RECEIVED,
    PDN_CONNECTION_DOES_NOT_EXIST,
    MULTIPLE_CONNECTION_TO_SAME_PDN_NOT_ALLOWED,
    INVALID_TRANSACTION_ID,
    MESSAGE_INCORRECT_SEMANTIC,
    INVALID_MANDATORY_INFO,
    MESSAGE_TYPE_UNSUPPORTED,
    MESSAGE_TYPE_NONCOMPATIBLE_STATE,
    UNKNOWN_INFO_ELEMENT,
    CONDITIONAL_IE_ERROR,
    MESSAGE_AND_PROTOCOL_STATE_UNCOMPATIBLE,
    PROTOCOL_ERROR,
    APN_TYPE_CONFLICT,
    INVALID_PROXY_CALL_SESSION_CONTROL_FUNCTION_ADDRESS,
}
export enum WdsVerboseCallEndReasonCm {
    CDMA_LOCK,
    INTERCEPT,
    REORDER,
    RELEASE_SO_REJECT,
    INCOMING_CALL,
    ALERT_STOP,
    ACTIVATION,
    MAX_ACCESS_PROBES,
    CCS_NOT_SUPPORTED_BY_BS,
    NO_RESPONSE_FROM_BS,
    REJECTED_BY_BS,
    INCOMPATIBLE,
    ALREADY_IN_TC,
    USER_CALL_ORIGINATED_DURING_GPS,
    USER_CALL_ORIGINATED_DURING_SMS,
    NO_CDMA_SERVICE,
    MC_ABORT,
    PSIST_NG,
    UIM_NOT_PRESENT,
    RETRY_ORDER,
    ACCESS_BLOCK,
    ACCESS_BLOCK_ALL,
    IS707B_MAX_ACCESS_PROBES,
    THERMAL_EMERGENCY,
    CALL_ORIGINATION_THROTTLED,
    USER_CALL_ORIGINATED,
    CONFERENCE_FAILED,
    INCOMING_REJECTED,
    NO_GATEWAY_SERVICE,
    NO_GPRS_CONTEXT,
    ILLEGAL_MS,
    ILLEGAL_ME,
    GPRS_AND_NON_GPRS_SERVICES_NOT_ALLOWED,
    GPRS_SERVICES_NOT_ALLOWED,
    MS_IDENTITY_NOT_DERIVED_BY_THE_NETWORK,
    IMPLICITLY_DETACHED,
    PLMN_NOT_ALLOWED,
    LA_NOT_ALLOWED,
    GPRS_SERVICES_NOT_ALLOWED_IN_PLMN,
    PDP_DUPLICATE,
    UE_RAT_CHANGE,
    CONGESTION,
    NO_PDP_CONTEXT_ACTIVATED,
    ACCESS_CLASS_DSAC_REJECTION,
    PDP_ACTIVATE_MAX_RETRY_FAILED,
    RAB_FAILURE,
    EPS_SERVICE_NOT_ALLOWED,
    TRACKING_AREA_NOT_ALLOWED,
    ROAMING_NOT_ALLOWED_IN_TRACKING_AREA,
    NO_SUITABLE_CELLS_IN_TRACKING_AREA,
    NOT_AUTHORIZED_CLOSED_SUBSCRIBER_GROUP,
    ESM_UNKNOWN_EPS_BEARER_CONTEXT,
    DRB_RELEASED_AT_RRC,
    NAS_SIGNAL_CONNECTION_RELEASED,
    EMM_DETACHED,
    EMM_ATTACH_FAILED,
    EMM_ATTACH_STARTED,
    LTE_NAS_SERVICE_REQUEST_FAILED,
    ESM_ACTIVE_DEDICATED_BEARER_REACTIVATED_BY_NW,
    ESM_LOWER_LAYER_FAILURE,
    ESM_SYNC_UP_WITH_NW,
    ESM_NW_ACTIVATED_DEDICATED_BEARER_WITH_ID_OF_DEFAULT_BEARER,
    ESM_BAD_OTA_MESSAGE,
    ESM_DS_REJECTED_CALL,
    ESM_CONTEXT_TRANSFERRED_DUE_TO_IRAT,
    DS_EXPLICIT_DEACT,
    ESM_LOCAL_CAUSE_NONE,
    LTE_NAS_SERVICE_REQUEST_FAILED_NO_THROTTLE,
    ACL_FAILURE,
    LTE_NAS_SERVICE_REQUEST_FAILED_DS_DISALLOW,
    EMM_T3417_EXPIRED,
    EMM_T3417_EXT_EXPIRED,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_TXN,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_HANDOVER,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_CONN_REL,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_RLF,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_CTRL_NOT_CONN,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_ABORTED,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_ACCESS_BARRED,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_CELL_RESELECTION,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_CONFIG_FAILURE,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_TIMER_EXPIRED,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_LINK_FAILURE,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_NOT_CAMPED,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_SI_FAILURE,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_REJECTED,
    LRRC_CONNECTION_RELEASE_NORMAL,
    LRRC_CONNECTION_RELEASE_RLF,
    LRRC_CONNECTION_RELEASE_CRE_FAILURE,
    LRRC_CONNECTION_RELEASE_OOS_DURING_CRE,
    LRRC_CONNECTION_RELEASE_ABORTED,
    LRRC_CONNECTION_RELEASE_SIB_READ_ERROR,
    DETACH_WITH_REATTACH_LTE_NW_DETACH,
    DETACH_WITHOUT_REATTACH_LTE_NW_DETACH,
    ESM_PROC_TIMEOUT,
    MESSAGE_EXCEED_MAX_L2_LIMIT,
    CONNECTION_DENY_GENERAL_OR_BUSY,
    CONNECTION_DENY_BILLING_OR_AUTHENTICATION_FAILURE,
    HDR_CHANGE,
    HDR_EXIT,
    HDR_NO_SESSION,
    HDR_ORIGINATION_DURING_GPS_FIX,
    HDR_CONNECTION_SETUP_TIMEOUT,
    HDR_RELEASED_BY_CM,
    HDR_COLLOCATED_ACQUISITION_FAILED,
    OTASP_COMMIT_IN_PROGRESS,
    HDR_NO_HYBRID_SERVICE,
    HDR_NO_LOCK_GRANTED,
    HOLD_OTHER_IN_PROGRESS,
    HDR_FADE,
    HDR_ACCESS_FAILURE,
    CLIENT_END,
    NO_SERVICE,
    FADE,
    RELEASE_NORMAL,
    ACCESS_ATTEMPT_IN_PROGRESS,
    ACCESS_FAILURE,
    REDIRECTION_OR_HANDOFF,
    OFFLINE,
    EMERGENCY_MODE,
    PHONE_IN_USE,
    INVALID_MODE,
    INVALID_SIM_STATE,
    NO_COLLOCATED_HDR,
    CALL_CONTROL_REJECTED,
}
export enum WdsVerboseCallEndReasonEhrpd {
    SUBSCRIPTION_LIMITED_TO_IPV4,
    SUBSCRIPTION_LIMITED_TO_IPV6,
    VSNCP_TIMEOUT,
    VSNCP_FAILURE,
    VSNCP_3GPP2_GENERAL_ERROR,
    VSNCP_3GPP2_UNAUTHENTICATED_APN,
    VSNCP_3GPP2_PDN_LIMIT_EXCEEDED,
    VSNCP_3GPP2_NO_PDN_GATEWAY,
    VSNCP_3GPP2_PDN_GATEWAY_UNREACHABLE,
    VSNCP_3GPP2_PDN_GATEWAY_REJECTED,
    VSNCP_3GPP2_INSUFFICIENT_PARAMETERS,
    VSNCP_3GPP2_RESOURCE_UNAVAILABLE,
    VSNCP_3GPP2_ADMINISTRATIVELY_PROHIBITED,
    VSNCP_3GPP2_PDN_ID_IN_USE,
    VSNCP_3GPP2_SUBSCRIPTION_LIMITATION,
    VSNCP_3GPP2_PDN_EXISTS_FOR_THIS_APN,
}
export enum WdsVerboseCallEndReasonInternal {
    ERROR,
    CALL_ENDED,
    UNKNOWN_INTERNAL_CAUSE,
    UNKNOWN_CAUSE,
    CLOSE_IN_PROGRESS,
    NETWORK_INITIATED_TERMINATION,
    APP_PREEMPTED,
    PDN_IPV4_CALL_DISALLOWED,
    PDN_IPV4_CALL_THROTTLED,
    PDN_IPV6_CALL_DISALLOWED,
    PDN_IPV6_CALL_THROTTLED,
    MODEM_RESTART,
    PDP_PPP_NOT_SUPPORTED,
    UNPREFERRED_RAT,
    PHYSICAL_LINK_CLOSE_IN_PROGRESS,
    APN_PENDING_HANDOVER,
    PROFILE_BEARER_INCOMPATIBLE,
    MMGDSI_CARD_EVENT,
    LPM_OR_POWER_DOWN,
    APN_DISABLED,
    MPIT_EXPIRED,
    IPV6_ADDRESS_TRANSFER_FAILED,
    TRAT_SWAP_FAILED,
    EHRPD_TO_HRPD_FALLBACK,
    MANDATORY_APN_DISABLED,
    MIP_CONFIG_FAILURE,
    PDN_INACTIVITY_TIMER_EXPIRED,
    MAX_V4_CONNECTIONS,
    MAX_V6_CONNECTIONS,
    APN_MISMATCH,
    IP_VERSION_MISMATCH,
    DUN_CALL_DISALLOWED,
    INVALID_PROFILE,
    EPC_NONEPC_TRANSITION,
    INVALID_PROFILE_ID,
    CALL_ALREADY_PRESENT,
    INTERFACE_IN_USE,
    IP_PDP_MISMATCH,
    APN_DISALLOWED_ON_ROAMING,
    APN_PARAMETER_CHANGE,
    INTERFACE_IN_USE_CONFIG_MATCH,
    NULL_APN_DISALLOWED,
    THERMAL_MITIGATION,
    SUBS_ID_MISMATCH,
    DATA_SETTINGS_DISABLED,
    DATA_ROAMING_SETTINGS_DISABLED,
    APN_FORMAT_INVALID,
    DDS_CALL_ABORT,
    VALIDATION_FAILURE,
}
export enum WdsVerboseCallEndReasonIpv6 {
    PREFIX_UNAVAILABLE,
    HRPD_IPV6_DISABLED,
    DISABLED,
}
export enum WdsVerboseCallEndReasonMip {
    ERROR_REASON_UNKNOWN,
    FA_ERROR_REASON_UNSPECIFIED,
    FA_ERROR_ADMINISTRATIVELY_PROHIBITED,
    FA_ERROR_INSUFFICIENT_RESOURCES,
    FA_ERROR_MOBILE_NODE_AUTHENTICATION_FAILURE,
    FA_ERROR_HA_AUTHENTICATION_FAILURE,
    FA_ERROR_REQUESTED_LIFETIME_TOO_LONG,
    FA_ERROR_MALFORMED_REQUEST,
    FA_ERROR_MALFORMED_REPLY,
    FA_ERROR_ENCAPSULATION_UNAVAILABLE,
    FA_ERROR_VJHC_UNAVAILABLE,
    FA_ERROR_REVERSE_TUNNEL_UNAVAILABLE,
    FA_ERROR_REVERSE_TUNNEL_MANDATORY_AND_T_BIT_NOT_SET,
    FA_ERROR_DELIVERY_STYLE_NOT_SUPPORTED,
    FA_ERROR_MISSING_NAI,
    FA_ERROR_MISSING_HA,
    FA_ERROR_MISSING_HOME_ADDRESS,
    FA_ERROR_UNKNOWN_CHALLENGE,
    FA_ERROR_MISSING_CHALLENGE,
    FA_ERROR_STALE_CHALLENGE,
    HA_ERROR_REASON_UNSPECIFIED,
    HA_ERROR_ADMINISTRATIVELY_PROHIBITED,
    HA_ERROR_INSUFFICIENT_RESOURCES,
    HA_ERROR_MOBILE_NODE_AUTHENTICATION_FAILURE,
    HA_ERROR_FA_AUTHENTICATION_FAILURE,
    HA_ERROR_REGISTRATION_ID_MISMATCH,
    HA_ERROR_MALFORMED_REQUEST,
    HA_ERROR_UNKNOWN_HA_ADDRESS,
    HA_ERROR_REVERSE_TUNNEL_UNAVAILABLE,
    HA_ERROR_REVERSE_TUNNEL_MANDATORY_AND_T_BIT_NOT_SET,
    HA_ERROR_ENCAPSULATION_UNAVAILABLE,
}
export enum WdsVerboseCallEndReasonPpp {
    UNKNOWN,
    TIMEOUT,
    AUTHENTICATION_FAILURE,
    OPTION_MISMATCH,
    PAP_FAILURE,
    CHAP_FAILURE,
    CLOSE_IN_PROGRESS,
}
export enum WdsVerboseCallEndReasonType {
    MIP,
    INTERNAL,
    CM,
    /* 3GPP (invalid, starts with a number) */
    PPP,
    EHRPD,
    IPV6,
}
export enum WmsAckFailureCause {
    NO_NETWORK_RESPONSE,
    NETWORK_RELEASED_LINK,
    NOT_SENT,
}
export enum WmsAckIndicator {
    SEND,
    DO_NOT_SEND,
}
export enum WmsCdmaCauseCode {
    NETWORK_ADDRESS_VACANT,
    NETWORK_ADDRESS_TRANSLATION_FAILURE,
    NETWORK_RESOURCE_SHORTAGE,
    NETWORK_FAILURE,
    NETWORK_INVALID_TELESERVICE_ID,
    NETWORK_OTHER,
    DESTINATION_NO_PAGE_RESPONSE,
    DESTINATION_BUSY,
    DESTINATION_NO_ACK,
    DESTINATION_RESOURCE_SHORTAGE,
    DESTINATION_SMS_DELIVERY_POSTPONED,
    DESTINATION_OUT_OF_SERVICE,
    DESTINATION_NOT_AT_ADDRESS,
    DESTINATION_OTHER,
    RADIO_INTERFACE_RESOURCE_SHORTAGE,
    RADIO_INTERFACE_INCOMPATIBILITY,
    RADIO_INTERFACE_OTHER,
    GENERAL_ENCODING,
    GENERAL_SMS_ORIGIN_DENIED,
    GENERAL_SMS_DESTINATION_DENIED,
    GENERAL_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED,
    GENERAL_SMS_NOT_SUPPORTED,
    GENERAL_MISSING_EXPECTED_PARAMETER,
    GENERAL_MISSING_MANDATORY_PARAMETER,
    GENERAL_UNRECOGNIZED_PARAMETER_VALUE,
    GENERAL_UNEXPECTED_PARAMETER_VALUE,
    GENERAL_USER_DATA_SIZE_ERROR,
    GENERAL_OTHER,
}
export enum WmsCdmaErrorClass {
    TEMPORARY,
    PERMANENT,
    TEMPORARY_DEVICE,
    PERMANENT_DEVICE,
}
export enum WmsCdmaServiceOption {
    AUTO,
    /* 6 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
}
export enum WmsGsmUmtsRpCause {
    UNASSIGNED_NUMBER,
    OPERATOR_DETERMINED_BARRING,
    CALL_BARRED,
    RESERVED,
    SMS_TRANSFER_REJECTED,
    MEMORY_CAPACITY_EXCEEDED,
    DESTINATION_OUT_OF_ORDER,
    UNIDENTIFIED_SUBSCRIBER,
    FACILITY_REJECTED,
    UNKNOWN_SUBSCRIBER,
    NETWORK_OUF_OF_ORDER,
    TEMPORARY_FAILURE,
    CONGESTION,
    RESOURCES_UNAVAILABLE,
    FACILITY_NOT_SUBSCRIBED,
    FACILITY_NOT_IMPLEMENTED,
    INVALID_SMS_TRANSFER_REFERENCE_VALUE,
    SEMANTICALLY_INCORRECT_MESSAGE,
    INVALID_MANDATORY_INFO,
    MESSAGE_TYPE_NOT_IMPLEMENTED,
    MESSAGE_NOT_COMPATIBLE_WITH_SMS,
    INFORMATION_ELEMENT_NOT_IMPLEMENTED,
    PROTOCOL_ERROR,
    INTERWORKING,
}
export enum WmsGsmUmtsTpCause {
    TELE_INTERWORKING_NOT_SUPPORTED,
    SHORT_MESSAGE_TYPE_0_NOT_SUPPORTED,
    SHORT_MESSAGE_CANNOT_BE_REPLACED,
    UNSPECIFIED_PID_ERROR,
    DCS_NOT_SUPPORTED,
    MESSAGE_CLASS_NOT_SUPPORTED,
    UNSPECIFIED_DCS_ERROR,
    COMMAND_CANNOT_BE_ACTIONED,
    COMMAND_UNSUPPORTED,
    UNSPECIFIED_COMMAND_ERROR,
    TPDU_NOT_SUPPORTED,
    SC_BUSY,
    NO_SC_SUBSCRIPTION,
    SC_SYSTEM_FAILURE,
    INVALID_SME_ADDRESS,
    DESTINATION_SME_BARRED,
    SM_REJECTED_OR_DUPLICATE,
    VPF_NOT_SUPPORTED,
    VP_NOT_SUPPORTED,
    SIM_SMS_STORAGE_FULL,
    NO_SMS_STORAGE_CAPABILITY_IN_SIM,
    MS_ERROR,
    MEMORY_CAPACITY_EXCEEDED,
    SIM_APPLICATION_TOOLKIT_BUSY,
    SIM_DATA_DOWNLOAD_ERROR,
    UNSPECIFIED_ERROR,
}
export enum WmsMessageClass {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    NONE,
    CDMA,
}
export enum WmsMessageDeliveryFailureType {
    TEMPORARY,
    PERMANENT,
}
export enum WmsMessageFormat {
    CDMA,
    GSM_WCDMA_POINT_TO_POINT,
    GSM_WCDMA_BROADCAST,
    MWI,
}
export enum WmsMessageMode {
    CDMA,
    GSM_WCDMA,
}
export enum WmsMessageProtocol {
    CDMA,
    WCDMA,
}
export enum WmsMessageTagType {
    MT_READ,
    MT_NOT_READ,
    MO_SENT,
    MO_NOT_SENT,
}
export enum WmsMessageType {
    POINT,
}
export enum WmsNotificationType {
    PRIMARY,
    SECONDARY_GSM,
    SECONDARY_UMTS,
}
export enum WmsReceiptAction {
    DISCARD,
    STORE_AND_NOTIFY,
    TRANSFER_ONLY,
    TRANSFER_AND_ACK,
    UNKNOWN,
}
export enum WmsStorageType {
    UIM,
    NV,
    NONE,
}
export enum WmsTransferIndication {
    CLIENT,
}
export enum CtlFlag {
    NONE,
    RESPONSE,
    INDICATION,
}
export enum DeviceAddLinkFlags {
    NONE,
    INGRESS_MAP_CKSUMV4,
    EGRESS_MAP_CKSUMV4,
    INGRESS_MAP_CKSUMV5,
    EGRESS_MAP_CKSUMV5,
}
export enum DeviceOpenFlags {
    NONE,
    VERSION_INFO,
    SYNC,
    NET_802_3,
    NET_RAW_IP,
    NET_QOS_HEADER,
    NET_NO_QOS_HEADER,
    PROXY,
    MBIM,
    AUTO,
    EXPECT_INDICATIONS,
}
export enum DeviceReleaseClientFlags {
    NONE,
    RELEASE_CID,
}
export enum DmsBandCapability {
    BC_0_A_SYSTEM,
    BC_0_B_SYSTEM,
    BC_1_ALL_BLOCKS,
    BC_2,
    BC_3_A_SYSTEM,
    BC_4_ALL_BLOCKS,
    BC_5_ALL_BLOCKS,
    GSM_DCS_1800,
    GSM_900_EXTENDED,
    GSM_900_PRIMARY,
    BC_6,
    BC_7,
    BC_8,
    BC_9,
    BC_10,
    BC_11,
    GSM_450,
    GSM_480,
    GSM_750,
    GSM_850,
    GSM_900_RAILWAYS,
    GSM_PCS_1900,
    WCDMA_2100,
    WCDMA_PCS_1900,
    WCDMA_DCS_1800,
    WCDMA_1700_US,
    WCDMA_850_US,
    WCDMA_800,
    BC_12,
    BC_14,
    BC_15,
    WCDMA_2600,
    WCDMA_900,
    WCDMA_1700_JAPAN,
    BC_16,
    BC_17,
    BC_18,
    BC_19,
    WCDMA_850_JAPAN,
    WCDMA_1500,
}
export enum DmsLteBandCapability {
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 11 (invalid, starts with a number) */
    /* 12 (invalid, starts with a number) */
    /* 13 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
    /* 17 (invalid, starts with a number) */
    /* 18 (invalid, starts with a number) */
    /* 19 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    /* 21 (invalid, starts with a number) */
    /* 24 (invalid, starts with a number) */
    /* 25 (invalid, starts with a number) */
    /* 26 (invalid, starts with a number) */
    /* 27 (invalid, starts with a number) */
    /* 28 (invalid, starts with a number) */
    /* 29 (invalid, starts with a number) */
    /* 30 (invalid, starts with a number) */
    /* 31 (invalid, starts with a number) */
    /* 32 (invalid, starts with a number) */
    /* 33 (invalid, starts with a number) */
    /* 34 (invalid, starts with a number) */
    /* 35 (invalid, starts with a number) */
    /* 36 (invalid, starts with a number) */
    /* 37 (invalid, starts with a number) */
    /* 38 (invalid, starts with a number) */
    /* 39 (invalid, starts with a number) */
    /* 40 (invalid, starts with a number) */
    /* 41 (invalid, starts with a number) */
    /* 42 (invalid, starts with a number) */
    /* 43 (invalid, starts with a number) */
}
export enum DmsOfflineReason {
    HOST_IMAGE_MISCONFIGURATION,
    PRI_IMAGE_MISCONFIGURATION,
    PRI_VERSION_INCOMPATIBLE,
    DEVICE_MEMORY_FULL,
}
export enum DmsPowerState {
    EXTERNAL_SOURCE,
    BATTERY_CONNECTED,
    BATTERY_CHARGING,
    FAULT,
}
export enum DsdApnTypePreference {
    DEFAULT,
    IMS,
    MMS,
    DUN,
    SUPL,
    HIPRI,
    FOTA,
    CBS,
    IA,
    EMERGENCY,
}
export enum LocDeleteCellDatabase {
    POS,
    LATEST_GPS_POS,
    OTA_POS,
    EXT_REF_POS,
    TIMETAG,
    CELLID,
    CACHED_CELLID,
    LAST_SRV_CELL,
    CUR_SRV_CELL,
    NEIGHBOR_INFO,
}
export enum LocDeleteClockInfo {
    TIME_EST,
    FREQ_EST,
    WEEK_NUMBER,
    RTC_TIME,
    TIME_TRANSFER,
    GPS_TIME_EST,
    GLO_TIME_EST,
    GLO_DAY_NUMBER,
    GLO_YEAR_NUMBER,
    GLO_RF_GRP_DELAY,
    DISABLE_TT,
}
export enum LocDeleteGnssData {
    GPS_SVDIR,
    GPS_SVSTEER,
    GPS_TIME,
    GPS_ALM_CORR,
    GLO_SVDIR,
    GLO_SVSTEER,
    GLO_TIME,
    GLO_ALM_CORR,
    SBAS_SVDIR,
    SBAS_SVSTEER,
    POSITION,
    TIME,
    IONO,
    UTC,
    HEALTH,
    SADATA,
    RTI,
    SV_NO_EXIST,
    FREQ_BIAS_EST,
}
export enum LocDeleteSvInfo {
    EPHEMERIS,
    ALMANAC,
}
export enum LocEventRegistrationFlag {
    POSITION_REPORT,
    GNSS_SATELLITE_INFO,
    NMEA,
    NI_NOTIFY_VERIFY_REQUEST,
    INJECT_TIME_REQUEST,
    INJECT_PREDICTED_ORBITS_REQUEST,
    INJECT_POSITION_REQUEST,
    ENGINE_STATE,
    FIX_SESSION_STATE,
    WIFI_REQUEST,
    SENSOR_STREAMING_READY_STATUS,
    TIME_SYNC_REQUEST,
    SET_SPI_STREAMING_REPORT,
    LOCATION_SERVER_CONNECTION_REQUEST,
    NI_GEOFENCE_NOTIFICATION,
    GEOFENCE_GENERAL_ALERT,
    GEOFENCE_BREACH_NOTIFICATION,
    PEDOMETER_CONTROL,
    MOTION_DATA_CONTROL,
}
export enum LocNmeaType {
    GGA,
    RMC,
    GSV,
    GSA,
    VTG,
    PQXFI,
    PSTIS,
    ALL,
}
export enum LocSatelliteValidInformation {
    SYSTEM,
    GNSS_SATELLITE_ID,
    HEALTH_STATUS,
    PROCESS_STATUS,
    SATELLITE_INFO_MASK,
    ELEVATION,
    AZIMUTH,
    SIGNAL_TO_NOISE_RATIO,
}
export enum LocSensorDataUsage {
    ACCELEROMETER_USED,
    GYRO_USED,
    AIDED_HEADING,
    AIDED_SPEED,
    AIDED_POSITION,
    AIDED_VELOCITY,
}
export enum LocServerAddressType {
    NONE,
    IPV4,
    IPV6,
    URL,
}
export enum LocTechnologyUsed {
    SATELLITE,
    CELLULAR,
    WIFI,
    SENSORS,
    REFERENCE_LOCATION,
    INJECTED_POSITION,
    AFLT,
    HYBRID,
}
export enum NasBandPreference {
    BC_0_A_SYSTEM,
    BC_0_B_SYSTEM,
    BC_1_ALL_BLOCKS,
    BC_2,
    BC_3_A_SYSTEM,
    BC_4_ALL_BLOCKS,
    BC_5_ALL_BLOCKS,
    GSM_DCS_1800,
    GSM_900_EXTENDED,
    GSM_900_PRIMARY,
    BC_6,
    BC_7,
    BC_8,
    BC_9,
    BC_10,
    BC_11,
    GSM_450,
    GSM_480,
    GSM_750,
    GSM_850,
    GSM_900_RAILWAYS,
    GSM_PCS_1900,
    WCDMA_2100,
    WCDMA_PCS_1900,
    WCDMA_DCS_1800,
    WCDMA_1700_US,
    WCDMA_850_US,
    WCDMA_800,
    BC_12,
    BC_14,
    BC_15,
    WCDMA_2600,
    WCDMA_900,
    WCDMA_1700_JAPAN,
    BC_16,
    BC_17,
    BC_18,
    BC_19,
    WCDMA_850_JAPAN,
    WCDMA_1500,
}
export enum NasLteBandPreference {
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 11 (invalid, starts with a number) */
    /* 12 (invalid, starts with a number) */
    /* 13 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
    /* 17 (invalid, starts with a number) */
    /* 18 (invalid, starts with a number) */
    /* 19 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    /* 21 (invalid, starts with a number) */
    /* 24 (invalid, starts with a number) */
    /* 25 (invalid, starts with a number) */
    /* 26 (invalid, starts with a number) */
    /* 27 (invalid, starts with a number) */
    /* 28 (invalid, starts with a number) */
    /* 29 (invalid, starts with a number) */
    /* 30 (invalid, starts with a number) */
    /* 31 (invalid, starts with a number) */
    /* 32 (invalid, starts with a number) */
    /* 33 (invalid, starts with a number) */
    /* 34 (invalid, starts with a number) */
    /* 35 (invalid, starts with a number) */
    /* 36 (invalid, starts with a number) */
    /* 37 (invalid, starts with a number) */
    /* 38 (invalid, starts with a number) */
    /* 39 (invalid, starts with a number) */
    /* 40 (invalid, starts with a number) */
    /* 41 (invalid, starts with a number) */
    /* 42 (invalid, starts with a number) */
    /* 43 (invalid, starts with a number) */
}
export enum NasNetworkNameDisplayCondition {
    REGISTERED_PLMN_IF_KNOWN_NETWORK,
    SPN_NOT_REQUIRED_IF_UNKNOWN_NETWORK,
}
export enum NasNetworkScanType {
    GSM,
    UMTS,
    LTE,
    TD_SCDMA,
}
export enum NasNetworkStatus {
    CURRENT_SERVING,
    AVAILABLE,
    HOME,
    ROAMING,
    FORBIDDEN,
    NOT_FORBIDDEN,
    PREFERRED,
    NOT_PREFERRED,
}
export enum NasPlmnAccessTechnologyIdentifier {
    UNSPECIFIED,
    GSM_COMPACT,
    GSM,
    NGRAN,
    EUTRAN,
    UTRAN,
    ALL,
}
export enum NasRadioTechnologyPreference {
    AUTO,
    /* 3GPP2 (invalid, starts with a number) */
    /* 3GPP (invalid, starts with a number) */
    AMPS_OR_GSM,
    CDMA_OR_WCDMA,
    HDR,
    LTE,
}
export enum NasRatModePreference {
    CDMA_1X,
    CDMA_1XEVDO,
    GSM,
    UMTS,
    LTE,
    TD_SCDMA,
    /* 5GNR (invalid, starts with a number) */
}
export enum NasSignalStrengthRequest {
    NONE,
    RSSI,
    ECIO,
    IO,
    SINR,
    ERROR_RATE,
    RSRQ,
    LTE_SNR,
    LTE_RSRP,
}
export enum NasTdScdmaBandPreference {
    A,
    B,
    C,
    D,
    E,
    F,
}
export enum PbmEventRegistrationFlag {
    RECORD_UPDATE,
    PHONEBOOK_READY,
    EMERGENCY_NUMBER_LIST,
    HIDDEN_RECORD_STATUS,
    AAS_UPDATE,
    GAS_UPDATE,
}
export enum PbmPhonebookType {
    ADN,
    FDN,
    MSISDN,
    MBDN,
    SDN,
    BDN,
    LND,
    MBN,
}
export enum PdsDataValid {
    TIMESTAMP_CALENDAR,
    TIMESTAMP_UTC,
    LEAP_SECONDS,
    TIME_UNCERTAINTY,
    LATITUDE,
    LONGITUDE,
    ELLIPSOID_ALTITUDE,
    MEAN_SEA_LEVEL_ALTITUDE,
    HORIZONTAL_SPEED,
    VERTICAL_SPEED,
    HEADING,
    HORIZONTAL_UNCERTAINTY_CIRCULAR,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_SEMI_MAJOR,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_SEMI_MINOR,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_ORIENT_AZIMUTH,
    VERTICAL_UNCERTAINTY,
    HORIZONTAL_VELOCITY_UNCERTAINTY,
    VERTICAL_VELOCITY_UNCERTAINTY,
    HORIZONTAL_CONFIDENCE,
    POSITION_DOP,
    HORIZONTAL_DOP,
    VERTICAL_DOP,
    OPERATING_MODE,
}
export enum ServiceFlag {
    NONE,
    COMPOUND,
    RESPONSE,
    INDICATION,
}
export enum UimConfiguration {
    AUTOMATIC_SELECTION,
    PERSONALIZATION_STATUS,
    HALT_SUBSCRIPTION,
}
export enum UimEventRegistrationFlag {
    CARD_STATUS,
    SAP_CONNECTION,
    EXTENDED_CARD_STATUS,
    PHYSICAL_SLOT_STATUS,
}
export enum UimSecurityAttribute {
    PIN1,
    PIN2,
    UPIN,
    ADM,
}
export enum VoiceWcdmaAmrStatus {
    NOT_SUPPORTED,
    WCDMA_AMR_WB,
    GSM_HR_AMR,
    GSM_AMR_WB,
    GSM_AMR_NB,
}
export enum WdsApnTypeMask {
    DEFAULT,
    IMS,
    MMS,
    FOTA,
    IA,
    EMERGENCY,
}
export enum WdsAuthentication {
    NONE,
    PAP,
    CHAP,
}
export enum WdsExtendedDataBearerTechnology3gpp {
    UNKNOWN,
    WCDMA,
    HSDPA,
    HSUPA,
    HSDPA_PLUS,
    DC_HSDPA_PLUS,
    /* 64QAM (invalid, starts with a number) */
    HSPA,
    GPRS,
    EDGE,
    GSM,
    S2B,
    LTE_LIMITED_SERVICE,
    LTE_FDD,
    LTE_TDD,
}
export enum WdsExtendedDataBearerTechnology3gpp2 {
    UNKNOWN,
    RESERVED,
    CDMA1X_IS95,
    CDMA1X_IS2000,
    CDMA1X_IS2000_REL_A,
    HDR_REV_0_DPA,
    HDR_REV_A_DPA,
    HDR_REV_B_DPA,
    HDR_REV_A_MPA,
    HDR_REV_B_MPA,
    HDR_REV_A_EMPA,
    HDR_REV_B_EMPA,
    HDR_REV_B_MMPA,
    HDR_EVDO_FMC,
}
export enum WdsGetCurrentSettingsRequestedSettings {
    NONE,
    PROFILE_ID,
    PROFILE_NAME,
    PDP_TYPE,
    APN_NAME,
    DNS_ADDRESS,
    GRANTED_QOS,
    USERNAME,
    AUTH_PROTOCOL,
    IP_ADDRESS,
    GATEWAY_INFO,
    PCSCF_ADDRESS,
    PCSCF_SERVER_ADDRESS_LIST,
    PCSCF_DOMAIN_NAME_LIST,
    MTU,
    DOMAIN_NAME_LIST,
    IP_FAMILY,
    IMCN_FLAG,
    EXTENDED_TECHNOLOGY,
}
export enum WdsPacketStatisticsMaskFlag {
    TX_PACKETS_OK,
    RX_PACKETS_OK,
    TX_PACKETS_ERROR,
    RX_PACKETS_ERROR,
    TX_OVERFLOWS,
    RX_OVERFLOWS,
    TX_BYTES_OK,
    RX_BYTES_OK,
    TX_PACKETS_DROPPED,
    RX_PACKETS_DROPPED,
}
export enum WdsRat3gpp {
    NONE,
    WCDMA,
    GPRS,
    HSDPA,
    HSUPA,
    EDGE,
    LTE,
    HSDPAPLUS,
    DCHSDPAPLUS,
    /* 64QAM (invalid, starts with a number) */
    TDSCDMA,
    NULL_BEARER,
}
export enum WdsRat3gpp2 {
    NONE,
    CDMA1X,
    EVDO_REV0,
    EVDO_REVA,
    EVDO_REVB,
    EHRPD,
    FMC,
    NULL_BEARER,
}
export enum WdsSetEventReportTransferStatistics {
    TX_PACKETS_OK,
    RX_PACKETS_OK,
    TX_PACKETS_ERROR,
    RX_PACKETS_ERROR,
    TX_OVERFLOWS,
    RX_OVERFLOWS,
    TX_BYTES_OK,
    RX_BYTES_OK,
    TX_PACKETS_DROPPED,
    RX_PACKETS_DROPPED,
}
export enum WdsSoCdma1x {
    NONE,
    IS95,
    IS2000,
    IS2000_REL_A,
}
export enum WdsSoEvdoRev0 {
    NONE,
    DPA,
}
export enum WdsSoEvdoRevA {
    NONE,
    DPA,
    MFPA,
    EMPA,
    EMPA_EHRPD,
}
export enum WdsSoEvdoRevB {
    NONE,
    DPA,
    MFPA,
    EMPA,
    EMPA_EHRPD,
    MMPA,
    MMPA_EHRPD,
}
export enum WdsTechnologyPreference {
    /* 3GPP (invalid, starts with a number) */
    /* 3GPP2 (invalid, starts with a number) */
}
export const CID_BROADCAST: number
export const CID_NONE: number
export const CLIENT_CID: string
export const CLIENT_DEVICE: string
export const CLIENT_SERVICE: string
export const CLIENT_VALID: string
export const CLIENT_VERSION_MAJOR: string
export const CLIENT_VERSION_MINOR: string
export const DBUS_ERROR_PREFIX: string
export const DEVICE_FILE: string
export const DEVICE_MUX_ID_MAX: number
export const DEVICE_MUX_ID_MIN: number
export const DEVICE_MUX_ID_UNBOUND: number
export const DEVICE_NODE: string
export const DEVICE_NO_FILE_CHECK: string
export const DEVICE_PROXY_PATH: string
export const DEVICE_SIGNAL_INDICATION: string
export const DEVICE_SIGNAL_REMOVED: string
export const DEVICE_WWAN_IFACE: string
export const MESSAGE_QMUX_MARKER: number
export const MESSAGE_VENDOR_GENERIC: number
export const PROXY_N_CLIENTS: string
export const PROXY_SOCKET_PATH: string
export const WDS_RATE_UNAVAILABLE: number
export function coreErrorGetString(val: CoreError): string
export function coreErrorQuark(): GLib.Quark
export function ctlDataFormatGetString(val: CtlDataFormat): string
export function ctlDataLinkProtocolGetString(val: CtlDataLinkProtocol): string
export function ctlFlagBuildStringFromMask(mask: CtlFlag): string
export function dataEndpointTypeGetString(val: DataEndpointType): string
export function deviceAddLinkFlagsBuildStringFromMask(mask: DeviceAddLinkFlags): string
export function deviceExpectedDataFormatGetString(val: DeviceExpectedDataFormat): string
export function deviceOpenFlagsBuildStringFromMask(mask: DeviceOpenFlags): string
export function deviceReleaseClientFlagsBuildStringFromMask(mask: DeviceReleaseClientFlags): string
export function dmsActivationStateGetString(val: DmsActivationState): string
export function dmsBandCapabilityBuildStringFromMask(mask: DmsBandCapability): string
export function dmsBootImageDownloadModeGetString(val: DmsBootImageDownloadMode): string
export function dmsDataServiceCapabilityGetString(val: DmsDataServiceCapability): string
export function dmsFirmwareImageTypeGetString(val: DmsFirmwareImageType): string
export function dmsFoxconnDeviceModeGetString(val: DmsFoxconnDeviceMode): string
export function dmsFoxconnFirmwareVersionTypeGetString(val: DmsFoxconnFirmwareVersionType): string
export function dmsHpDeviceModeGetString(val: DmsHpDeviceMode): string
export function dmsLteBandCapabilityBuildStringFromMask(mask: DmsLteBandCapability): string
export function dmsMacTypeGetString(val: DmsMacType): string
export function dmsOfflineReasonBuildStringFromMask(mask: DmsOfflineReason): string
export function dmsOperatingModeGetString(val: DmsOperatingMode): string
export function dmsPowerStateBuildStringFromMask(mask: DmsPowerState): string
export function dmsRadioInterfaceGetString(val: DmsRadioInterface): string
export function dmsSimCapabilityGetString(val: DmsSimCapability): string
export function dmsSwiUsbCompositionGetDescription(value: DmsSwiUsbComposition): string
export function dmsSwiUsbCompositionGetString(val: DmsSwiUsbComposition): string
export function dmsTimeReferenceTypeGetString(val: DmsTimeReferenceType): string
export function dmsTimeSourceGetString(val: DmsTimeSource): string
export function dmsUimFacilityGetString(val: DmsUimFacility): string
export function dmsUimFacilityStateGetString(val: DmsUimFacilityState): string
export function dmsUimPinIdGetString(val: DmsUimPinId): string
export function dmsUimPinStatusGetString(val: DmsUimPinStatus): string
export function dmsUimStateGetString(val: DmsUimState): string
export function dsdApnTypeGetString(val: DsdApnType): string
export function dsdApnTypePreferenceBuildStringFromMask(mask: DsdApnTypePreference): string
export function endianGetString(val: Endian): string
export function gasFirmwareListingModeGetString(val: GasFirmwareListingMode): string
export function gasUsbCompositionEndpointTypeGetString(val: GasUsbCompositionEndpointType): string
export function locDeleteCellDatabaseBuildStringFromMask(mask: LocDeleteCellDatabase): string
export function locDeleteClockInfoBuildStringFromMask(mask: LocDeleteClockInfo): string
export function locDeleteGnssDataBuildStringFromMask(mask: LocDeleteGnssData): string
export function locDeleteSvInfoBuildStringFromMask(mask: LocDeleteSvInfo): string
export function locEngineStateGetString(val: LocEngineState): string
export function locEventRegistrationFlagBuildStringFromMask(mask: LocEventRegistrationFlag): string
export function locFixRecurrenceTypeGetString(val: LocFixRecurrenceType): string
export function locHealthStatusGetString(val: LocHealthStatus): string
export function locIndicationStatusGetString(val: LocIndicationStatus): string
export function locIntermediateReportStateGetString(val: LocIntermediateReportState): string
export function locLockTypeGetString(val: LocLockType): string
export function locNavigationDataGetString(val: LocNavigationData): string
export function locNmeaTypeBuildStringFromMask(mask: LocNmeaType): string
export function locOperationModeGetString(val: LocOperationMode): string
export function locPredictedOrbitsDataFormatGetString(val: LocPredictedOrbitsDataFormat): string
export function locReliabilityGetString(val: LocReliability): string
export function locSatelliteStatusGetString(val: LocSatelliteStatus): string
export function locSatelliteValidInformationBuildStringFromMask(mask: LocSatelliteValidInformation): string
export function locSensorDataUsageBuildStringFromMask(mask: LocSensorDataUsage): string
export function locServerAddressTypeBuildStringFromMask(mask: LocServerAddressType): string
export function locServerTypeGetString(val: LocServerType): string
export function locSessionStatusGetString(val: LocSessionStatus): string
export function locSystemGetString(val: LocSystem): string
export function locTechnologyUsedBuildStringFromMask(mask: LocTechnologyUsed): string
export function locTimeSourceGetString(val: LocTimeSource): string
export function messageAddRawTlv(self: Message, type: number, raw: number, length: number): boolean
export function messageForeachRawTlv(self: Message): void
export function messageGetClientId(self: Message): number
export function messageGetData(self: Message): { returnType: number, length: number }
export function messageGetLength(self: Message): number
export function messageGetMessageId(self: Message): number
export function messageGetPrintableFull(self: Message, context: MessageContext, linePrefix: string): string
export function messageGetRaw(self: Message): { returnType: number, length: number }
export function messageGetRawTlv(self: Message, type: number): { returnType: number, length: number }
export function messageGetService(self: Message): Service
export function messageGetTlvPrintable(self: Message, linePrefix: string, type: number, raw: number, rawLength: number): string
export function messageGetTransactionId(self: Message): number
export function messageIsIndication(self: Message): boolean
export function messageIsRequest(self: Message): boolean
export function messageIsResponse(self: Message): boolean
export function messageNew(service: Service, clientId: number, transactionId: number, messageId: number): Message
export function messageNewFromData(service: Service, clientId: number, qmiData: any[]): { returnType: Message, qmiData: any[] }
export function messageNewFromRaw(raw: any[]): { returnType: Message, raw: any[] }
export function messageRef(self: Message): Message
export function messageResponseNew(request: Message, error: ProtocolError): Message
export function messageSetTransactionId(self: Message, transactionId: number): void
export function messageTlvReadFixedSizeString(self: Message, tlvOffset: number, offset: number, stringLength: number): { returnType: boolean, offset: number, out: string }
export function messageTlvReadGdouble(self: Message, tlvOffset: number, offset: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGfloatEndian(self: Message, tlvOffset: number, offset: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGint16(self: Message, tlvOffset: number, offset: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGint32(self: Message, tlvOffset: number, offset: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGint64(self: Message, tlvOffset: number, offset: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGint8(self: Message, tlvOffset: number, offset: number): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGuint16(self: Message, tlvOffset: number, offset: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGuint32(self: Message, tlvOffset: number, offset: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGuint64(self: Message, tlvOffset: number, offset: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadGuint8(self: Message, tlvOffset: number, offset: number): { returnType: boolean, offset: number, out: number }
export function messageTlvReadInit(self: Message, type: number): { returnType: number, outTlvLength: number }
export function messageTlvReadRemainingSize(self: Message, tlvOffset: number, offset: number): number
export function messageTlvReadSizedGuint(self: Message, tlvOffset: number, offset: number, nBytes: number, endian: Endian): { returnType: boolean, offset: number, out: number }
export function messageTlvReadString(self: Message, tlvOffset: number, offset: number, nSizePrefixBytes: number, maxSize: number): { returnType: boolean, offset: number, out: string }
export function messageTlvWriteComplete(self: Message, tlvOffset: number): boolean
export function messageTlvWriteGint16(self: Message, endian: Endian, in_: number): boolean
export function messageTlvWriteGint32(self: Message, endian: Endian, in_: number): boolean
export function messageTlvWriteGint64(self: Message, endian: Endian, in_: number): boolean
export function messageTlvWriteGint8(self: Message, in_: number): boolean
export function messageTlvWriteGuint16(self: Message, endian: Endian, in_: number): boolean
export function messageTlvWriteGuint32(self: Message, endian: Endian, in_: number): boolean
export function messageTlvWriteGuint64(self: Message, endian: Endian, in_: number): boolean
export function messageTlvWriteGuint8(self: Message, in_: number): boolean
export function messageTlvWriteInit(self: Message, type: number): number
export function messageTlvWriteReset(self: Message, tlvOffset: number): void
export function messageTlvWriteSizedGuint(self: Message, nBytes: number, endian: Endian, in_: number): boolean
export function messageTlvWriteString(self: Message, nSizePrefixBytes: number, in_: string, inLength: number): boolean
export function messageUnref(self: Message): void
export function nasActiveBandGetString(val: NasActiveBand): string
export function nasAttachStateGetString(val: NasAttachState): string
export function nasBandPreferenceBuildStringFromMask(mask: NasBandPreference): string
export function nasBooleanGetString(val: NasBoolean): string
export function nasCallBarringStatusGetString(val: NasCallBarringStatus): string
export function nasCdmaPilotTypeGetString(val: NasCdmaPilotType): string
export function nasCdmaPrlPreferenceGetString(val: NasCdmaPrlPreference): string
export function nasCellBroadcastCapabilityGetString(val: NasCellBroadcastCapability): string
export function nasChangeDurationGetString(val: NasChangeDuration): string
export function nasDataCapabilityGetString(val: NasDataCapability): string
export function nasDayOfWeekGetString(val: NasDayOfWeek): string
export function nasDaylightSavingsAdjustmentGetString(val: NasDaylightSavingsAdjustment): string
export function nasDlBandwidthGetString(val: NasDLBandwidth): string
export function nasDrxGetString(val: NasDrx): string
export function nasEvdoSinrLevelGetString(val: NasEvdoSinrLevel): string
export function nasGsmWcdmaAcquisitionOrderPreferenceGetString(val: NasGsmWcdmaAcquisitionOrderPreference): string
export function nasHdrPersonalityGetString(val: NasHdrPersonality): string
export function nasHdrProtocolRevisionGetString(val: NasHdrProtocolRevision): string
export function nasLteBandPreferenceBuildStringFromMask(mask: NasLteBandPreference): string
export function nasLteCellAccessStatusGetString(val: NasLteCellAccessStatus): string
export function nasLteRegistrationDomainGetString(val: NasLteRegistrationDomain): string
export function nasLteVoiceDomainGetString(val: NasLteVoiceDomain): string
export function nasNetworkDescriptionDisplayGetString(val: NasNetworkDescriptionDisplay): string
export function nasNetworkDescriptionEncodingGetString(val: NasNetworkDescriptionEncoding): string
export function nasNetworkNameDisplayConditionBuildStringFromMask(mask: NasNetworkNameDisplayCondition): string
export function nasNetworkNameSourceGetString(val: NasNetworkNameSource): string
export function nasNetworkRegisterTypeGetString(val: NasNetworkRegisterType): string
export function nasNetworkScanResultGetString(val: NasNetworkScanResult): string
export function nasNetworkScanTypeBuildStringFromMask(mask: NasNetworkScanType): string
export function nasNetworkSelectionPreferenceGetString(val: NasNetworkSelectionPreference): string
export function nasNetworkSelectionRegistrationRestrictionGetString(val: NasNetworkSelectionRegistrationRestriction): string
export function nasNetworkServiceDomainGetString(val: NasNetworkServiceDomain): string
export function nasNetworkStatusBuildStringFromMask(mask: NasNetworkStatus): string
export function nasNetworkTypeGetString(val: NasNetworkType): string
export function nasPlmnAccessTechnologyIdentifierBuildStringFromMask(mask: NasPlmnAccessTechnologyIdentifier): string
export function nasPlmnEncodingSchemeGetString(val: NasPlmnEncodingScheme): string
export function nasPlmnLanguageIdGetString(val: NasPlmnLanguageId): string
export function nasPlmnNameCountryInitialsGetString(val: NasPlmnNameCountryInitials): string
export function nasPlmnNameSpareBitsGetString(val: NasPlmnNameSpareBits): string
export function nasPreferenceDurationGetString(val: NasPreferenceDuration): string
export function nasPsAttachActionGetString(val: NasPsAttachAction): string
export function nasRadioInterfaceGetString(val: NasRadioInterface): string
export function nasRadioTechnologyPreferenceBuildStringFromMask(mask: NasRadioTechnologyPreference): string
export function nasRatModePreferenceBuildStringFromMask(mask: NasRatModePreference): string
export function nasReadStringFromNetworkDescriptionEncodedArray(encoding: NasNetworkDescriptionEncoding, array: any[]): string
export function nasReadStringFromPlmnEncodedArray(encoding: NasPlmnEncodingScheme, array: any[]): string
export function nasRegistrationStateGetString(val: NasRegistrationState): string
export function nasRejectCauseGetString(val: NasRejectCause): string
export function nasRoamingIndicatorStatusGetString(val: NasRoamingIndicatorStatus): string
export function nasRoamingPreferenceGetString(val: NasRoamingPreference): string
export function nasRoamingStatusGetString(val: NasRoamingStatus): string
export function nasScellStateGetString(val: NasScellState): string
export function nasServiceDomainPreferenceGetString(val: NasServiceDomainPreference): string
export function nasServiceStatusGetString(val: NasServiceStatus): string
export function nasSignalStrengthRequestBuildStringFromMask(mask: NasSignalStrengthRequest): string
export function nasSimRejectStateGetString(val: NasSimRejectState): string
export function nasSwiEmmConnectionStateGetString(val: NasSwiEmmConnectionState): string
export function nasSwiEmmStateGetString(val: NasSwiEmmState): string
export function nasSwiImsRegStateGetString(val: NasSwiImsRegState): string
export function nasSwiModemModeGetString(val: NasSwiModemMode): string
export function nasSwiPsStateGetString(val: NasSwiPsState): string
export function nasSwiSystemModeGetString(val: NasSwiSystemMode): string
export function nasTdScdmaBandPreferenceBuildStringFromMask(mask: NasTdScdmaBandPreference): string
export function nasUsagePreferenceGetString(val: NasUsagePreference): string
export function nasVoiceDomainPreferenceGetString(val: NasVoiceDomainPreference): string
export function nasWcdmaHsServiceGetString(val: NasWcdmaHsService): string
export function nasWcdmaRrcStateGetString(val: NasWcdmaRrcState): string
export function omaHfaFeatureDoneStateGetString(val: OmaHfaFeatureDoneState): string
export function omaSessionFailedReasonGetString(val: OmaSessionFailedReason): string
export function omaSessionStateGetString(val: OmaSessionState): string
export function omaSessionTypeGetString(val: OmaSessionType): string
export function pbmEventRegistrationFlagBuildStringFromMask(mask: PbmEventRegistrationFlag): string
export function pbmPhonebookTypeBuildStringFromMask(mask: PbmPhonebookType): string
export function pbmSessionTypeGetString(val: PbmSessionType): string
export function pdcConfigurationTypeGetString(val: PdcConfigurationType): string
export function pdcRefreshEventTypeGetString(val: PdcRefreshEventType): string
export function pdsDataValidBuildStringFromMask(mask: PdsDataValid): string
export function pdsNetworkModeGetString(val: PdsNetworkMode): string
export function pdsOperatingModeGetString(val: PdsOperatingMode): string
export function pdsOperationModeGetString(val: PdsOperationMode): string
export function pdsPositionSessionStatusGetString(val: PdsPositionSessionStatus): string
export function pdsTrackingSessionStateGetString(val: PdsTrackingSessionState): string
export function protocolErrorGetString(val: ProtocolError): string
export function protocolErrorQuark(): GLib.Quark
export function qosEventGetString(val: QosEvent): string
export function qosStatusGetString(val: QosStatus): string
export function sarRfStateGetString(val: SarRfState): string
export function serviceFlagBuildStringFromMask(mask: ServiceFlag): string
export function serviceGetString(val: Service): string
export function sioPortGetString(val: SioPort): string
export function uimCardApplicationPersonalizationFeatureGetString(val: UimCardApplicationPersonalizationFeature): string
export function uimCardApplicationPersonalizationStateGetString(val: UimCardApplicationPersonalizationState): string
export function uimCardApplicationStateGetString(val: UimCardApplicationState): string
export function uimCardApplicationTypeGetString(val: UimCardApplicationType): string
export function uimCardErrorGetString(val: UimCardError): string
export function uimCardProtocolGetString(val: UimCardProtocol): string
export function uimCardStateGetString(val: UimCardState): string
export function uimConfigurationBuildStringFromMask(mask: UimConfiguration): string
export function uimDepersonalizationOperationGetString(val: UimDepersonalizationOperation): string
export function uimEventRegistrationFlagBuildStringFromMask(mask: UimEventRegistrationFlag): string
export function uimFileTypeGetString(val: UimFileType): string
export function uimPhysicalCardStateGetString(val: UimPhysicalCardState): string
export function uimPinIdGetString(val: UimPinId): string
export function uimPinStateGetString(val: UimPinState): string
export function uimRefreshModeGetString(val: UimRefreshMode): string
export function uimRefreshStageGetString(val: UimRefreshStage): string
export function uimSecurityAttributeBuildStringFromMask(mask: UimSecurityAttribute): string
export function uimSecurityAttributeLogicGetString(val: UimSecurityAttributeLogic): string
export function uimSessionTypeGetString(val: UimSessionType): string
export function uimSlotStateGetString(val: UimSlotState): string
export function utilsGetTracesEnabled(): boolean
export function utilsSetTracesEnabled(enabled: boolean): void
export function voiceAlphaDataCodingSchemeGetString(val: VoiceAlphaDataCodingScheme): string
export function voiceAlsGetString(val: VoiceAls): string
export function voiceCallControlResultTypeGetString(val: VoiceCallControlResultType): string
export function voiceCallControlSupplementaryServiceTypeGetString(val: VoiceCallControlSupplementaryServiceType): string
export function voiceCallDirectionGetString(val: VoiceCallDirection): string
export function voiceCallEndReasonGetString(val: VoiceCallEndReason): string
export function voiceCallModeGetString(val: VoiceCallMode): string
export function voiceCallStateGetString(val: VoiceCallState): string
export function voiceCallTypeGetString(val: VoiceCallType): string
export function voiceDomainGetString(val: VoiceDomain): string
export function voicePresentationGetString(val: VoicePresentation): string
export function voicePrivacyGetString(val: VoicePrivacy): string
export function voiceServiceOptionGetString(val: VoiceServiceOption): string
export function voiceSupplementaryServiceActionGetString(val: VoiceSupplementaryServiceAction): string
export function voiceSupplementaryServiceNotificationTypeGetString(val: VoiceSupplementaryServiceNotificationType): string
export function voiceSupplementaryServiceReasonGetString(val: VoiceSupplementaryServiceReason): string
export function voiceSupplementaryServiceTypeGetString(val: VoiceSupplementaryServiceType): string
export function voiceTtyModeGetString(val: VoiceTtyMode): string
export function voiceUserActionGetString(val: VoiceUserAction): string
export function voiceUssDataCodingSchemeGetString(val: VoiceUssDataCodingScheme): string
export function voiceWcdmaAmrStatusBuildStringFromMask(mask: VoiceWcdmaAmrStatus): string
export function wdaDataAggregationProtocolGetString(val: WdaDataAggregationProtocol): string
export function wdaLinkLayerProtocolGetString(val: WdaLinkLayerProtocol): string
export function wdsApnTypeMaskBuildStringFromMask(mask: WdsApnTypeMask): string
export function wdsAttachPdnListActionGetString(val: WdsAttachPdnListAction): string
export function wdsAuthenticationBuildStringFromMask(mask: WdsAuthentication): string
export function wdsAutoconnectSettingGetString(val: WdsAutoconnectSetting): string
export function wdsAutoconnectSettingRoamingGetString(val: WdsAutoconnectSettingRoaming): string
export function wdsCallEndReasonGetString(val: WdsCallEndReason): string
export function wdsCallTypeGetString(val: WdsCallType): string
export function wdsClientTypeGetString(val: WdsClientType): string
export function wdsConnectionStatusGetString(val: WdsConnectionStatus): string
export function wdsDataBearerTechnologyGetString(val: WdsDataBearerTechnology): string
export function wdsDataCallStatusGetString(val: WdsDataCallStatus): string
export function wdsDataCallTypeGetString(val: WdsDataCallType): string
export function wdsDataSystemGetString(val: WdsDataSystem): string
export function wdsDataSystemNetworkTypeGetString(val: WdsDataSystemNetworkType): string
export function wdsDeliveryOrderGetString(val: WdsDeliveryOrder): string
export function wdsDormancyStatusGetString(val: WdsDormancyStatus): string
export function wdsDsProfileErrorGetString(val: WdsDsProfileError): string
export function wdsExtendedDataBearerTechnology3gpp2BuildStringFromMask(mask: WdsExtendedDataBearerTechnology3gpp2): string
export function wdsExtendedDataBearerTechnology3gppBuildStringFromMask(mask: WdsExtendedDataBearerTechnology3gpp): string
export function wdsExtendedTechnologyPreferenceGetString(val: WdsExtendedTechnologyPreference): string
export function wdsGetCurrentSettingsRequestedSettingsBuildStringFromMask(mask: WdsGetCurrentSettingsRequestedSettings): string
export function wdsIpFamilyGetString(val: WdsIpFamily): string
export function wdsIpSupportTypeGetString(val: WdsIpSupportType): string
export function wdsNetworkTypeGetString(val: WdsNetworkType): string
export function wdsPacketStatisticsMaskFlagBuildStringFromMask(mask: WdsPacketStatisticsMaskFlag): string
export function wdsPdpDataCompressionTypeGetString(val: WdsPdpDataCompressionType): string
export function wdsPdpHeaderCompressionTypeGetString(val: WdsPdpHeaderCompressionType): string
export function wdsPdpTypeGetString(val: WdsPdpType): string
export function wdsProfileFamilyGetString(val: WdsProfileFamily): string
export function wdsProfileTypeGetString(val: WdsProfileType): string
export function wdsQosClassIdentifierGetString(val: WdsQosClassIdentifier): string
export function wdsRadioAccessTechnologyGetString(val: WdsRadioAccessTechnology): string
export function wdsRat3gpp2BuildStringFromMask(mask: WdsRat3gpp2): string
export function wdsRat3gppBuildStringFromMask(mask: WdsRat3gpp): string
export function wdsSduErroneousDeliveryGetString(val: WdsSduErroneousDelivery): string
export function wdsSduErrorRatioGetString(val: WdsSduErrorRatio): string
export function wdsSduResidualBitErrorRatioGetString(val: WdsSduResidualBitErrorRatio): string
export function wdsSetEventReportTransferStatisticsBuildStringFromMask(mask: WdsSetEventReportTransferStatistics): string
export function wdsSoCdma1xBuildStringFromMask(mask: WdsSoCdma1x): string
export function wdsSoEvdoRev0BuildStringFromMask(mask: WdsSoEvdoRev0): string
export function wdsSoEvdoRevaBuildStringFromMask(mask: WdsSoEvdoRevA): string
export function wdsSoEvdoRevbBuildStringFromMask(mask: WdsSoEvdoRevB): string
export function wdsTechnologyPreferenceBuildStringFromMask(mask: WdsTechnologyPreference): string
export function wdsTetheredCallTypeGetString(val: WdsTetheredCallType): string
export function wdsTrafficClassGetString(val: WdsTrafficClass): string
export function wdsVerboseCallEndReason3gppGetString(val: WdsVerboseCallEndReason3gpp): string
export function wdsVerboseCallEndReasonCmGetString(val: WdsVerboseCallEndReasonCm): string
export function wdsVerboseCallEndReasonEhrpdGetString(val: WdsVerboseCallEndReasonEhrpd): string
export function wdsVerboseCallEndReasonGetString(type: WdsVerboseCallEndReasonType, reason: number): string
export function wdsVerboseCallEndReasonInternalGetString(val: WdsVerboseCallEndReasonInternal): string
export function wdsVerboseCallEndReasonIpv6GetString(val: WdsVerboseCallEndReasonIpv6): string
export function wdsVerboseCallEndReasonMipGetString(val: WdsVerboseCallEndReasonMip): string
export function wdsVerboseCallEndReasonPppGetString(val: WdsVerboseCallEndReasonPpp): string
export function wdsVerboseCallEndReasonTypeGetString(val: WdsVerboseCallEndReasonType): string
export function wmsAckFailureCauseGetString(val: WmsAckFailureCause): string
export function wmsAckIndicatorGetString(val: WmsAckIndicator): string
export function wmsCdmaCauseCodeGetString(val: WmsCdmaCauseCode): string
export function wmsCdmaErrorClassGetString(val: WmsCdmaErrorClass): string
export function wmsCdmaServiceOptionGetString(val: WmsCdmaServiceOption): string
export function wmsGsmUmtsRpCauseGetString(val: WmsGsmUmtsRpCause): string
export function wmsGsmUmtsTpCauseGetString(val: WmsGsmUmtsTpCause): string
export function wmsMessageClassGetString(val: WmsMessageClass): string
export function wmsMessageDeliveryFailureTypeGetString(val: WmsMessageDeliveryFailureType): string
export function wmsMessageFormatGetString(val: WmsMessageFormat): string
export function wmsMessageModeGetString(val: WmsMessageMode): string
export function wmsMessageProtocolGetString(val: WmsMessageProtocol): string
export function wmsMessageTagTypeGetString(val: WmsMessageTagType): string
export function wmsMessageTypeGetString(val: WmsMessageType): string
export function wmsNotificationTypeGetString(val: WmsNotificationType): string
export function wmsReceiptActionGetString(val: WmsReceiptAction): string
export function wmsStorageTypeGetString(val: WmsStorageType): string
export function wmsTransferIndicationGetString(val: WmsTransferIndication): string
export interface DeviceCommandAbortableParseResponseFn {
    (self: Device, abortResponse: Message): boolean
}
export interface MessageForeachRawTlvFn {
    (type: number, value: number, length: number): void
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    clientCid?: number
    clientDevice?: Device
    clientService?: Service
    clientVersionMajor?: number
    clientVersionMinor?: number
}
export class Client {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientCtl_ConstructProps extends Client_ConstructProps {
}
export class ClientCtl {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientCtl */
    allocateCid(input: MessageCtlAllocateCidInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    allocateCidFinish(res: Gio.AsyncResult): MessageCtlAllocateCidOutput
    getVersionInfo(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getVersionInfoFinish(res: Gio.AsyncResult): MessageCtlGetVersionInfoOutput
    internalProxyOpen(input: MessageCtlInternalProxyOpenInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    internalProxyOpenFinish(res: Gio.AsyncResult): MessageCtlInternalProxyOpenOutput
    releaseCid(input: MessageCtlReleaseCidInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    releaseCidFinish(res: Gio.AsyncResult): MessageCtlReleaseCidOutput
    setDataFormat(input: MessageCtlSetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDataFormatFinish(res: Gio.AsyncResult): MessageCtlSetDataFormatOutput
    setInstanceId(input: MessageCtlSetInstanceIdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setInstanceIdFinish(res: Gio.AsyncResult): MessageCtlSetInstanceIdOutput
    sync(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    syncFinish(res: Gio.AsyncResult): MessageCtlSyncOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientCtl */
    connect(sigName: "sync", callback: (($obj: ClientCtl) => void)): number
    on(sigName: "sync", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sync", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sync", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sync"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientCtl_ConstructProps)
    _init (config?: ClientCtl_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientDms_ConstructProps extends Client_ConstructProps {
}
export class ClientDms {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientDms */
    activateAutomatic(input: MessageDmsActivateAutomaticInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activateAutomaticFinish(res: Gio.AsyncResult): MessageDmsActivateAutomaticOutput
    activateManual(input: MessageDmsActivateManualInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activateManualFinish(res: Gio.AsyncResult): MessageDmsActivateManualOutput
    deleteStoredImage(input: MessageDmsDeleteStoredImageInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteStoredImageFinish(res: Gio.AsyncResult): MessageDmsDeleteStoredImageOutput
    foxconnChangeDeviceMode(input: MessageDmsFoxconnChangeDeviceModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    foxconnChangeDeviceModeFinish(res: Gio.AsyncResult): MessageDmsFoxconnChangeDeviceModeOutput
    foxconnGetFirmwareVersion(input: MessageDmsFoxconnGetFirmwareVersionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    foxconnGetFirmwareVersionFinish(res: Gio.AsyncResult): MessageDmsFoxconnGetFirmwareVersionOutput
    foxconnSetFccAuthentication(input: MessageDmsFoxconnSetFccAuthenticationInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    foxconnSetFccAuthenticationFinish(res: Gio.AsyncResult): MessageDmsFoxconnSetFccAuthenticationOutput
    getActivationState(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getActivationStateFinish(res: Gio.AsyncResult): MessageDmsGetActivationStateOutput
    getAltNetConfig(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAltNetConfigFinish(res: Gio.AsyncResult): MessageDmsGetAltNetConfigOutput
    getBandCapabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getBandCapabilitiesFinish(res: Gio.AsyncResult): MessageDmsGetBandCapabilitiesOutput
    getBootImageDownloadMode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getBootImageDownloadModeFinish(res: Gio.AsyncResult): MessageDmsGetBootImageDownloadModeOutput
    getCapabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCapabilitiesFinish(res: Gio.AsyncResult): MessageDmsGetCapabilitiesOutput
    getFactorySku(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFactorySkuFinish(res: Gio.AsyncResult): MessageDmsGetFactorySkuOutput
    getFirmwarePreference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFirmwarePreferenceFinish(res: Gio.AsyncResult): MessageDmsGetFirmwarePreferenceOutput
    getHardwareRevision(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getHardwareRevisionFinish(res: Gio.AsyncResult): MessageDmsGetHardwareRevisionOutput
    getIds(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getIdsFinish(res: Gio.AsyncResult): MessageDmsGetIdsOutput
    getMacAddress(input: MessageDmsGetMacAddressInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMacAddressFinish(res: Gio.AsyncResult): MessageDmsGetMacAddressOutput
    getManufacturer(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getManufacturerFinish(res: Gio.AsyncResult): MessageDmsGetManufacturerOutput
    getModel(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getModelFinish(res: Gio.AsyncResult): MessageDmsGetModelOutput
    getMsisdn(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMsisdnFinish(res: Gio.AsyncResult): MessageDmsGetMsisdnOutput
    getOperatingMode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getOperatingModeFinish(res: Gio.AsyncResult): MessageDmsGetOperatingModeOutput
    getPowerState(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPowerStateFinish(res: Gio.AsyncResult): MessageDmsGetPowerStateOutput
    getPrlVersion(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPrlVersionFinish(res: Gio.AsyncResult): MessageDmsGetPrlVersionOutput
    getRevision(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getRevisionFinish(res: Gio.AsyncResult): MessageDmsGetRevisionOutput
    getSoftwareVersion(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSoftwareVersionFinish(res: Gio.AsyncResult): MessageDmsGetSoftwareVersionOutput
    getStoredImageInfo(input: MessageDmsGetStoredImageInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getStoredImageInfoFinish(res: Gio.AsyncResult): MessageDmsGetStoredImageInfoOutput
    getSupportedMessages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSupportedMessagesFinish(res: Gio.AsyncResult): MessageDmsGetSupportedMessagesOutput
    getTime(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTimeFinish(res: Gio.AsyncResult): MessageDmsGetTimeOutput
    getUserLockState(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getUserLockStateFinish(res: Gio.AsyncResult): MessageDmsGetUserLockStateOutput
    hpChangeDeviceMode(input: MessageDmsHpChangeDeviceModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    hpChangeDeviceModeFinish(res: Gio.AsyncResult): MessageDmsHpChangeDeviceModeOutput
    listStoredImages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    listStoredImagesFinish(res: Gio.AsyncResult): MessageDmsListStoredImagesOutput
    readEriFile(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readEriFileFinish(res: Gio.AsyncResult): MessageDmsReadEriFileOutput
    readUserData(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readUserDataFinish(res: Gio.AsyncResult): MessageDmsReadUserDataOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessageDmsResetOutput
    restoreFactoryDefaults(input: MessageDmsRestoreFactoryDefaultsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    restoreFactoryDefaultsFinish(res: Gio.AsyncResult): MessageDmsRestoreFactoryDefaultsOutput
    setAltNetConfig(input: MessageDmsSetAltNetConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAltNetConfigFinish(res: Gio.AsyncResult): MessageDmsSetAltNetConfigOutput
    setBootImageDownloadMode(input: MessageDmsSetBootImageDownloadModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setBootImageDownloadModeFinish(res: Gio.AsyncResult): MessageDmsSetBootImageDownloadModeOutput
    setEventReport(input: MessageDmsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setEventReportFinish(res: Gio.AsyncResult): MessageDmsSetEventReportOutput
    setFccAuthentication(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFccAuthenticationFinish(res: Gio.AsyncResult): MessageDmsSetFccAuthenticationOutput
    setFirmwareId(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFirmwareIdFinish(res: Gio.AsyncResult): MessageDmsSetFirmwareIdOutput
    setFirmwarePreference(input: MessageDmsSetFirmwarePreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFirmwarePreferenceFinish(res: Gio.AsyncResult): MessageDmsSetFirmwarePreferenceOutput
    setOperatingMode(input: MessageDmsSetOperatingModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setOperatingModeFinish(res: Gio.AsyncResult): MessageDmsSetOperatingModeOutput
    setServiceProgrammingCode(input: MessageDmsSetServiceProgrammingCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setServiceProgrammingCodeFinish(res: Gio.AsyncResult): MessageDmsSetServiceProgrammingCodeOutput
    setTime(input: MessageDmsSetTimeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTimeFinish(res: Gio.AsyncResult): MessageDmsSetTimeOutput
    setUserLockCode(input: MessageDmsSetUserLockCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setUserLockCodeFinish(res: Gio.AsyncResult): MessageDmsSetUserLockCodeOutput
    setUserLockState(input: MessageDmsSetUserLockStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setUserLockStateFinish(res: Gio.AsyncResult): MessageDmsSetUserLockStateOutput
    swiGetCurrentFirmware(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swiGetCurrentFirmwareFinish(res: Gio.AsyncResult): MessageDmsSwiGetCurrentFirmwareOutput
    swiGetUsbComposition(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swiGetUsbCompositionFinish(res: Gio.AsyncResult): MessageDmsSwiGetUsbCompositionOutput
    swiSetUsbComposition(input: MessageDmsSwiSetUsbCompositionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swiSetUsbCompositionFinish(res: Gio.AsyncResult): MessageDmsSwiSetUsbCompositionOutput
    uimChangePin(input: MessageDmsUimChangePinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimChangePinFinish(res: Gio.AsyncResult): MessageDmsUimChangePinOutput
    uimGetCkStatus(input: MessageDmsUimGetCkStatusInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimGetCkStatusFinish(res: Gio.AsyncResult): MessageDmsUimGetCkStatusOutput
    uimGetIccid(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimGetIccidFinish(res: Gio.AsyncResult): MessageDmsUimGetIccidOutput
    uimGetImsi(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimGetImsiFinish(res: Gio.AsyncResult): MessageDmsUimGetImsiOutput
    uimGetPinStatus(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimGetPinStatusFinish(res: Gio.AsyncResult): MessageDmsUimGetPinStatusOutput
    uimGetState(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimGetStateFinish(res: Gio.AsyncResult): MessageDmsUimGetStateOutput
    uimSetCkProtection(input: MessageDmsUimSetCkProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimSetCkProtectionFinish(res: Gio.AsyncResult): MessageDmsUimSetCkProtectionOutput
    uimSetPinProtection(input: MessageDmsUimSetPinProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimSetPinProtectionFinish(res: Gio.AsyncResult): MessageDmsUimSetPinProtectionOutput
    uimUnblockCk(input: MessageDmsUimUnblockCkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimUnblockCkFinish(res: Gio.AsyncResult): MessageDmsUimUnblockCkOutput
    uimUnblockPin(input: MessageDmsUimUnblockPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimUnblockPinFinish(res: Gio.AsyncResult): MessageDmsUimUnblockPinOutput
    uimVerifyPin(input: MessageDmsUimVerifyPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uimVerifyPinFinish(res: Gio.AsyncResult): MessageDmsUimVerifyPinOutput
    validateServiceProgrammingCode(input: MessageDmsValidateServiceProgrammingCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    validateServiceProgrammingCodeFinish(res: Gio.AsyncResult): MessageDmsValidateServiceProgrammingCodeOutput
    writeUserData(input: MessageDmsWriteUserDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeUserDataFinish(res: Gio.AsyncResult): MessageDmsWriteUserDataOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientDms */
    connect(sigName: "event-report", callback: (($obj: ClientDms, output: IndicationDmsEventReportOutput) => void)): number
    on(sigName: "event-report", callback: (output: IndicationDmsEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-report", callback: (output: IndicationDmsEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-report", callback: (output: IndicationDmsEventReportOutput) => void): NodeJS.EventEmitter
    emit(sigName: "event-report", output: IndicationDmsEventReportOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientDms_ConstructProps)
    _init (config?: ClientDms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientDpm_ConstructProps extends Client_ConstructProps {
}
export class ClientDpm {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientDpm */
    closePort(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closePortFinish(res: Gio.AsyncResult): MessageDpmClosePortOutput
    openPort(input: MessageDpmOpenPortInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openPortFinish(res: Gio.AsyncResult): MessageDpmOpenPortOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    connect(sigName: "notify", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientDpm_ConstructProps)
    _init (config?: ClientDpm_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientDsd_ConstructProps extends Client_ConstructProps {
}
export class ClientDsd {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientDsd */
    getApnInfo(input: MessageDsdGetApnInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getApnInfoFinish(res: Gio.AsyncResult): MessageDsdGetApnInfoOutput
    setApnType(input: MessageDsdSetApnTypeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setApnTypeFinish(res: Gio.AsyncResult): MessageDsdSetApnTypeOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    connect(sigName: "notify", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientDsd_ConstructProps)
    _init (config?: ClientDsd_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientGas_ConstructProps extends Client_ConstructProps {
}
export class ClientGas {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientGas */
    dmsGetFirmwareList(input: MessageGasDmsGetFirmwareListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dmsGetFirmwareListFinish(res: Gio.AsyncResult): MessageGasDmsGetFirmwareListOutput
    dmsGetUsbComposition(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dmsGetUsbCompositionFinish(res: Gio.AsyncResult): MessageGasDmsGetUsbCompositionOutput
    dmsSetActiveFirmware(input: MessageGasDmsSetActiveFirmwareInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dmsSetActiveFirmwareFinish(res: Gio.AsyncResult): MessageGasDmsSetActiveFirmwareOutput
    dmsSetUsbComposition(input: MessageGasDmsSetUsbCompositionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dmsSetUsbCompositionFinish(res: Gio.AsyncResult): MessageGasDmsSetUsbCompositionOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    connect(sigName: "notify", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientGas_ConstructProps)
    _init (config?: ClientGas_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientGms_ConstructProps extends Client_ConstructProps {
}
export class ClientGms {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientGms */
    testGetValue(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    testGetValueFinish(res: Gio.AsyncResult): MessageGmsTestGetValueOutput
    testSetValue(input: MessageGmsTestSetValueInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    testSetValueFinish(res: Gio.AsyncResult): MessageGmsTestSetValueOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    connect(sigName: "notify", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientGms_ConstructProps)
    _init (config?: ClientGms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientLoc_ConstructProps extends Client_ConstructProps {
}
export class ClientLoc {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientLoc */
    deleteAssistanceData(input: MessageLocDeleteAssistanceDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteAssistanceDataFinish(res: Gio.AsyncResult): MessageLocDeleteAssistanceDataOutput
    getEngineLock(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getEngineLockFinish(res: Gio.AsyncResult): MessageLocGetEngineLockOutput
    getNmeaTypes(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getNmeaTypesFinish(res: Gio.AsyncResult): MessageLocGetNmeaTypesOutput
    getOperationMode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getOperationModeFinish(res: Gio.AsyncResult): MessageLocGetOperationModeOutput
    getPredictedOrbitsDataSource(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPredictedOrbitsDataSourceFinish(res: Gio.AsyncResult): MessageLocGetPredictedOrbitsDataSourceOutput
    getServer(input: MessageLocGetServerInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getServerFinish(res: Gio.AsyncResult): MessageLocGetServerOutput
    injectPredictedOrbitsData(input: MessageLocInjectPredictedOrbitsDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    injectPredictedOrbitsDataFinish(res: Gio.AsyncResult): MessageLocInjectPredictedOrbitsDataOutput
    injectXtraData(input: MessageLocInjectXtraDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    injectXtraDataFinish(res: Gio.AsyncResult): MessageLocInjectXtraDataOutput
    registerEvents(input: MessageLocRegisterEventsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    registerEventsFinish(res: Gio.AsyncResult): MessageLocRegisterEventsOutput
    setEngineLock(input: MessageLocSetEngineLockInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setEngineLockFinish(res: Gio.AsyncResult): MessageLocSetEngineLockOutput
    setNmeaTypes(input: MessageLocSetNmeaTypesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setNmeaTypesFinish(res: Gio.AsyncResult): MessageLocSetNmeaTypesOutput
    setOperationMode(input: MessageLocSetOperationModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setOperationModeFinish(res: Gio.AsyncResult): MessageLocSetOperationModeOutput
    setServer(input: MessageLocSetServerInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setServerFinish(res: Gio.AsyncResult): MessageLocSetServerOutput
    start(input: MessageLocStartInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startFinish(res: Gio.AsyncResult): MessageLocStartOutput
    stop(input: MessageLocStopInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stopFinish(res: Gio.AsyncResult): MessageLocStopOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientLoc */
    connect(sigName: "delete-assistance-data", callback: (($obj: ClientLoc, output: IndicationLocDeleteAssistanceDataOutput) => void)): number
    on(sigName: "delete-assistance-data", callback: (output: IndicationLocDeleteAssistanceDataOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-assistance-data", callback: (output: IndicationLocDeleteAssistanceDataOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-assistance-data", callback: (output: IndicationLocDeleteAssistanceDataOutput) => void): NodeJS.EventEmitter
    emit(sigName: "delete-assistance-data", output: IndicationLocDeleteAssistanceDataOutput): void
    connect(sigName: "engine-state", callback: (($obj: ClientLoc, output: IndicationLocEngineStateOutput) => void)): number
    on(sigName: "engine-state", callback: (output: IndicationLocEngineStateOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "engine-state", callback: (output: IndicationLocEngineStateOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "engine-state", callback: (output: IndicationLocEngineStateOutput) => void): NodeJS.EventEmitter
    emit(sigName: "engine-state", output: IndicationLocEngineStateOutput): void
    connect(sigName: "fix-recurrence-type", callback: (($obj: ClientLoc, output: IndicationLocFixRecurrenceTypeOutput) => void)): number
    on(sigName: "fix-recurrence-type", callback: (output: IndicationLocFixRecurrenceTypeOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "fix-recurrence-type", callback: (output: IndicationLocFixRecurrenceTypeOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "fix-recurrence-type", callback: (output: IndicationLocFixRecurrenceTypeOutput) => void): NodeJS.EventEmitter
    emit(sigName: "fix-recurrence-type", output: IndicationLocFixRecurrenceTypeOutput): void
    connect(sigName: "get-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocGetEngineLockOutput) => void)): number
    on(sigName: "get-engine-lock", callback: (output: IndicationLocGetEngineLockOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-engine-lock", callback: (output: IndicationLocGetEngineLockOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-engine-lock", callback: (output: IndicationLocGetEngineLockOutput) => void): NodeJS.EventEmitter
    emit(sigName: "get-engine-lock", output: IndicationLocGetEngineLockOutput): void
    connect(sigName: "get-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocGetNmeaTypesOutput) => void)): number
    on(sigName: "get-nmea-types", callback: (output: IndicationLocGetNmeaTypesOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-nmea-types", callback: (output: IndicationLocGetNmeaTypesOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-nmea-types", callback: (output: IndicationLocGetNmeaTypesOutput) => void): NodeJS.EventEmitter
    emit(sigName: "get-nmea-types", output: IndicationLocGetNmeaTypesOutput): void
    connect(sigName: "get-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocGetOperationModeOutput) => void)): number
    on(sigName: "get-operation-mode", callback: (output: IndicationLocGetOperationModeOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-operation-mode", callback: (output: IndicationLocGetOperationModeOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-operation-mode", callback: (output: IndicationLocGetOperationModeOutput) => void): NodeJS.EventEmitter
    emit(sigName: "get-operation-mode", output: IndicationLocGetOperationModeOutput): void
    connect(sigName: "get-predicted-orbits-data-source", callback: (($obj: ClientLoc, output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void)): number
    on(sigName: "get-predicted-orbits-data-source", callback: (output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-predicted-orbits-data-source", callback: (output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-predicted-orbits-data-source", callback: (output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void): NodeJS.EventEmitter
    emit(sigName: "get-predicted-orbits-data-source", output: IndicationLocGetPredictedOrbitsDataSourceOutput): void
    connect(sigName: "get-server", callback: (($obj: ClientLoc, output: IndicationLocGetServerOutput) => void)): number
    on(sigName: "get-server", callback: (output: IndicationLocGetServerOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-server", callback: (output: IndicationLocGetServerOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-server", callback: (output: IndicationLocGetServerOutput) => void): NodeJS.EventEmitter
    emit(sigName: "get-server", output: IndicationLocGetServerOutput): void
    connect(sigName: "gnss-sv-info", callback: (($obj: ClientLoc, output: IndicationLocGnssSvInfoOutput) => void)): number
    on(sigName: "gnss-sv-info", callback: (output: IndicationLocGnssSvInfoOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gnss-sv-info", callback: (output: IndicationLocGnssSvInfoOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gnss-sv-info", callback: (output: IndicationLocGnssSvInfoOutput) => void): NodeJS.EventEmitter
    emit(sigName: "gnss-sv-info", output: IndicationLocGnssSvInfoOutput): void
    connect(sigName: "inject-predicted-orbits-data", callback: (($obj: ClientLoc, output: IndicationLocInjectPredictedOrbitsDataOutput) => void)): number
    on(sigName: "inject-predicted-orbits-data", callback: (output: IndicationLocInjectPredictedOrbitsDataOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "inject-predicted-orbits-data", callback: (output: IndicationLocInjectPredictedOrbitsDataOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "inject-predicted-orbits-data", callback: (output: IndicationLocInjectPredictedOrbitsDataOutput) => void): NodeJS.EventEmitter
    emit(sigName: "inject-predicted-orbits-data", output: IndicationLocInjectPredictedOrbitsDataOutput): void
    connect(sigName: "inject-xtra-data", callback: (($obj: ClientLoc, output: IndicationLocInjectXtraDataOutput) => void)): number
    on(sigName: "inject-xtra-data", callback: (output: IndicationLocInjectXtraDataOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "inject-xtra-data", callback: (output: IndicationLocInjectXtraDataOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "inject-xtra-data", callback: (output: IndicationLocInjectXtraDataOutput) => void): NodeJS.EventEmitter
    emit(sigName: "inject-xtra-data", output: IndicationLocInjectXtraDataOutput): void
    connect(sigName: "nmea", callback: (($obj: ClientLoc, output: IndicationLocNmeaOutput) => void)): number
    on(sigName: "nmea", callback: (output: IndicationLocNmeaOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "nmea", callback: (output: IndicationLocNmeaOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "nmea", callback: (output: IndicationLocNmeaOutput) => void): NodeJS.EventEmitter
    emit(sigName: "nmea", output: IndicationLocNmeaOutput): void
    connect(sigName: "position-report", callback: (($obj: ClientLoc, output: IndicationLocPositionReportOutput) => void)): number
    on(sigName: "position-report", callback: (output: IndicationLocPositionReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-report", callback: (output: IndicationLocPositionReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-report", callback: (output: IndicationLocPositionReportOutput) => void): NodeJS.EventEmitter
    emit(sigName: "position-report", output: IndicationLocPositionReportOutput): void
    connect(sigName: "set-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocSetEngineLockOutput) => void)): number
    on(sigName: "set-engine-lock", callback: (output: IndicationLocSetEngineLockOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-engine-lock", callback: (output: IndicationLocSetEngineLockOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-engine-lock", callback: (output: IndicationLocSetEngineLockOutput) => void): NodeJS.EventEmitter
    emit(sigName: "set-engine-lock", output: IndicationLocSetEngineLockOutput): void
    connect(sigName: "set-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocSetNmeaTypesOutput) => void)): number
    on(sigName: "set-nmea-types", callback: (output: IndicationLocSetNmeaTypesOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-nmea-types", callback: (output: IndicationLocSetNmeaTypesOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-nmea-types", callback: (output: IndicationLocSetNmeaTypesOutput) => void): NodeJS.EventEmitter
    emit(sigName: "set-nmea-types", output: IndicationLocSetNmeaTypesOutput): void
    connect(sigName: "set-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocSetOperationModeOutput) => void)): number
    on(sigName: "set-operation-mode", callback: (output: IndicationLocSetOperationModeOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-operation-mode", callback: (output: IndicationLocSetOperationModeOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-operation-mode", callback: (output: IndicationLocSetOperationModeOutput) => void): NodeJS.EventEmitter
    emit(sigName: "set-operation-mode", output: IndicationLocSetOperationModeOutput): void
    connect(sigName: "set-server", callback: (($obj: ClientLoc, output: IndicationLocSetServerOutput) => void)): number
    on(sigName: "set-server", callback: (output: IndicationLocSetServerOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-server", callback: (output: IndicationLocSetServerOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-server", callback: (output: IndicationLocSetServerOutput) => void): NodeJS.EventEmitter
    emit(sigName: "set-server", output: IndicationLocSetServerOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientLoc_ConstructProps)
    _init (config?: ClientLoc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientNas_ConstructProps extends Client_ConstructProps {
}
export class ClientNas {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientNas */
    attachDetach(input: MessageNasAttachDetachInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    attachDetachFinish(res: Gio.AsyncResult): MessageNasAttachDetachOutput
    configSignalInfo(input: MessageNasConfigSignalInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    configSignalInfoFinish(res: Gio.AsyncResult): MessageNasConfigSignalInfoOutput
    forceNetworkSearch(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forceNetworkSearchFinish(res: Gio.AsyncResult): MessageNasForceNetworkSearchOutput
    getCdmaPositionInfo(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCdmaPositionInfoFinish(res: Gio.AsyncResult): MessageNasGetCdmaPositionInfoOutput
    getCellLocationInfo(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCellLocationInfoFinish(res: Gio.AsyncResult): MessageNasGetCellLocationInfoOutput
    getDrx(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDrxFinish(res: Gio.AsyncResult): MessageNasGetDrxOutput
    getHomeNetwork(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getHomeNetworkFinish(res: Gio.AsyncResult): MessageNasGetHomeNetworkOutput
    getLteCphyCaInfo(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getLteCphyCaInfoFinish(res: Gio.AsyncResult): MessageNasGetLteCphyCaInfoOutput
    getOperatorName(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getOperatorNameFinish(res: Gio.AsyncResult): MessageNasGetOperatorNameOutput
    getPlmnName(input: MessageNasGetPlmnNameInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPlmnNameFinish(res: Gio.AsyncResult): MessageNasGetPlmnNameOutput
    getPreferredNetworks(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPreferredNetworksFinish(res: Gio.AsyncResult): MessageNasGetPreferredNetworksOutput
    getRfBandInformation(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getRfBandInformationFinish(res: Gio.AsyncResult): MessageNasGetRfBandInformationOutput
    getServingSystem(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getServingSystemFinish(res: Gio.AsyncResult): MessageNasGetServingSystemOutput
    getSignalInfo(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSignalInfoFinish(res: Gio.AsyncResult): MessageNasGetSignalInfoOutput
    getSignalStrength(input: MessageNasGetSignalStrengthInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSignalStrengthFinish(res: Gio.AsyncResult): MessageNasGetSignalStrengthOutput
    getSupportedMessages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSupportedMessagesFinish(res: Gio.AsyncResult): MessageNasGetSupportedMessagesOutput
    getSystemInfo(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSystemInfoFinish(res: Gio.AsyncResult): MessageNasGetSystemInfoOutput
    getSystemSelectionPreference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSystemSelectionPreferenceFinish(res: Gio.AsyncResult): MessageNasGetSystemSelectionPreferenceOutput
    getTechnologyPreference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTechnologyPreferenceFinish(res: Gio.AsyncResult): MessageNasGetTechnologyPreferenceOutput
    getTxRxInfo(input: MessageNasGetTxRxInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTxRxInfoFinish(res: Gio.AsyncResult): MessageNasGetTxRxInfoOutput
    initiateNetworkRegister(input: MessageNasInitiateNetworkRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiateNetworkRegisterFinish(res: Gio.AsyncResult): MessageNasInitiateNetworkRegisterOutput
    networkScan(input: MessageNasNetworkScanInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    networkScanFinish(res: Gio.AsyncResult): MessageNasNetworkScanOutput
    registerIndications(input: MessageNasRegisterIndicationsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    registerIndicationsFinish(res: Gio.AsyncResult): MessageNasRegisterIndicationsOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessageNasResetOutput
    setEventReport(input: MessageNasSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setEventReportFinish(res: Gio.AsyncResult): MessageNasSetEventReportOutput
    setPreferredNetworks(input: MessageNasSetPreferredNetworksInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setPreferredNetworksFinish(res: Gio.AsyncResult): MessageNasSetPreferredNetworksOutput
    setSystemSelectionPreference(input: MessageNasSetSystemSelectionPreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setSystemSelectionPreferenceFinish(res: Gio.AsyncResult): MessageNasSetSystemSelectionPreferenceOutput
    setTechnologyPreference(input: MessageNasSetTechnologyPreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTechnologyPreferenceFinish(res: Gio.AsyncResult): MessageNasSetTechnologyPreferenceOutput
    swiGetStatus(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swiGetStatusFinish(res: Gio.AsyncResult): MessageNasSwiGetStatusOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientNas */
    connect(sigName: "event-report", callback: (($obj: ClientNas, output: IndicationNasEventReportOutput) => void)): number
    on(sigName: "event-report", callback: (output: IndicationNasEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-report", callback: (output: IndicationNasEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-report", callback: (output: IndicationNasEventReportOutput) => void): NodeJS.EventEmitter
    emit(sigName: "event-report", output: IndicationNasEventReportOutput): void
    connect(sigName: "network-reject", callback: (($obj: ClientNas, output: IndicationNasNetworkRejectOutput) => void)): number
    on(sigName: "network-reject", callback: (output: IndicationNasNetworkRejectOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "network-reject", callback: (output: IndicationNasNetworkRejectOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "network-reject", callback: (output: IndicationNasNetworkRejectOutput) => void): NodeJS.EventEmitter
    emit(sigName: "network-reject", output: IndicationNasNetworkRejectOutput): void
    connect(sigName: "network-time", callback: (($obj: ClientNas, output: IndicationNasNetworkTimeOutput) => void)): number
    on(sigName: "network-time", callback: (output: IndicationNasNetworkTimeOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "network-time", callback: (output: IndicationNasNetworkTimeOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "network-time", callback: (output: IndicationNasNetworkTimeOutput) => void): NodeJS.EventEmitter
    emit(sigName: "network-time", output: IndicationNasNetworkTimeOutput): void
    connect(sigName: "operator-name", callback: (($obj: ClientNas, output: IndicationNasOperatorNameOutput) => void)): number
    on(sigName: "operator-name", callback: (output: IndicationNasOperatorNameOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operator-name", callback: (output: IndicationNasOperatorNameOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operator-name", callback: (output: IndicationNasOperatorNameOutput) => void): NodeJS.EventEmitter
    emit(sigName: "operator-name", output: IndicationNasOperatorNameOutput): void
    connect(sigName: "serving-system", callback: (($obj: ClientNas, output: IndicationNasServingSystemOutput) => void)): number
    on(sigName: "serving-system", callback: (output: IndicationNasServingSystemOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serving-system", callback: (output: IndicationNasServingSystemOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serving-system", callback: (output: IndicationNasServingSystemOutput) => void): NodeJS.EventEmitter
    emit(sigName: "serving-system", output: IndicationNasServingSystemOutput): void
    connect(sigName: "signal-info", callback: (($obj: ClientNas, output: IndicationNasSignalInfoOutput) => void)): number
    on(sigName: "signal-info", callback: (output: IndicationNasSignalInfoOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-info", callback: (output: IndicationNasSignalInfoOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-info", callback: (output: IndicationNasSignalInfoOutput) => void): NodeJS.EventEmitter
    emit(sigName: "signal-info", output: IndicationNasSignalInfoOutput): void
    connect(sigName: "system-info", callback: (($obj: ClientNas, output: IndicationNasSystemInfoOutput) => void)): number
    on(sigName: "system-info", callback: (output: IndicationNasSystemInfoOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "system-info", callback: (output: IndicationNasSystemInfoOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "system-info", callback: (output: IndicationNasSystemInfoOutput) => void): NodeJS.EventEmitter
    emit(sigName: "system-info", output: IndicationNasSystemInfoOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientNas_ConstructProps)
    _init (config?: ClientNas_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientOma_ConstructProps extends Client_ConstructProps {
}
export class ClientOma {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientOma */
    cancelSession(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cancelSessionFinish(res: Gio.AsyncResult): MessageOmaCancelSessionOutput
    getFeatureSetting(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFeatureSettingFinish(res: Gio.AsyncResult): MessageOmaGetFeatureSettingOutput
    getSessionInfo(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSessionInfoFinish(res: Gio.AsyncResult): MessageOmaGetSessionInfoOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessageOmaResetOutput
    sendSelection(input: MessageOmaSendSelectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendSelectionFinish(res: Gio.AsyncResult): MessageOmaSendSelectionOutput
    setEventReport(input: MessageOmaSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setEventReportFinish(res: Gio.AsyncResult): MessageOmaSetEventReportOutput
    setFeatureSetting(input: MessageOmaSetFeatureSettingInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFeatureSettingFinish(res: Gio.AsyncResult): MessageOmaSetFeatureSettingOutput
    startSession(input: MessageOmaStartSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startSessionFinish(res: Gio.AsyncResult): MessageOmaStartSessionOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientOma */
    connect(sigName: "event-report", callback: (($obj: ClientOma, output: IndicationOmaEventReportOutput) => void)): number
    on(sigName: "event-report", callback: (output: IndicationOmaEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-report", callback: (output: IndicationOmaEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-report", callback: (output: IndicationOmaEventReportOutput) => void): NodeJS.EventEmitter
    emit(sigName: "event-report", output: IndicationOmaEventReportOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientOma_ConstructProps)
    _init (config?: ClientOma_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPbm_ConstructProps extends Client_ConstructProps {
}
export class ClientPbm {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientPbm */
    getAllCapabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAllCapabilitiesFinish(res: Gio.AsyncResult): MessagePbmGetAllCapabilitiesOutput
    getCapabilities(input: MessagePbmGetCapabilitiesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCapabilitiesFinish(res: Gio.AsyncResult): MessagePbmGetCapabilitiesOutput
    indicationRegister(input: MessagePbmIndicationRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indicationRegisterFinish(res: Gio.AsyncResult): MessagePbmIndicationRegisterOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    connect(sigName: "notify", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientPbm_ConstructProps)
    _init (config?: ClientPbm_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPdc_ConstructProps extends Client_ConstructProps {
}
export class ClientPdc {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientPdc */
    activateConfig(input: MessagePdcActivateConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activateConfigFinish(res: Gio.AsyncResult): MessagePdcActivateConfigOutput
    configChange(input: MessagePdcConfigChangeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    configChangeFinish(res: Gio.AsyncResult): MessagePdcConfigChangeOutput
    deactivateConfig(input: MessagePdcDeactivateConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deactivateConfigFinish(res: Gio.AsyncResult): MessagePdcDeactivateConfigOutput
    deleteConfig(input: MessagePdcDeleteConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteConfigFinish(res: Gio.AsyncResult): MessagePdcDeleteConfigOutput
    getConfigInfo(input: MessagePdcGetConfigInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConfigInfoFinish(res: Gio.AsyncResult): MessagePdcGetConfigInfoOutput
    getConfigLimits(input: MessagePdcGetConfigLimitsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConfigLimitsFinish(res: Gio.AsyncResult): MessagePdcGetConfigLimitsOutput
    getDefaultConfigInfo(input: MessagePdcGetDefaultConfigInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDefaultConfigInfoFinish(res: Gio.AsyncResult): MessagePdcGetDefaultConfigInfoOutput
    getSelectedConfig(input: MessagePdcGetSelectedConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSelectedConfigFinish(res: Gio.AsyncResult): MessagePdcGetSelectedConfigOutput
    listConfigs(input: MessagePdcListConfigsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    listConfigsFinish(res: Gio.AsyncResult): MessagePdcListConfigsOutput
    loadConfig(input: MessagePdcLoadConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadConfigFinish(res: Gio.AsyncResult): MessagePdcLoadConfigOutput
    register(input: MessagePdcRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    registerFinish(res: Gio.AsyncResult): MessagePdcRegisterOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessagePdcResetOutput
    setSelectedConfig(input: MessagePdcSetSelectedConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setSelectedConfigFinish(res: Gio.AsyncResult): MessagePdcSetSelectedConfigOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientPdc */
    connect(sigName: "activate-config", callback: (($obj: ClientPdc, output: IndicationPdcActivateConfigOutput) => void)): number
    on(sigName: "activate-config", callback: (output: IndicationPdcActivateConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-config", callback: (output: IndicationPdcActivateConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-config", callback: (output: IndicationPdcActivateConfigOutput) => void): NodeJS.EventEmitter
    emit(sigName: "activate-config", output: IndicationPdcActivateConfigOutput): void
    connect(sigName: "deactivate-config", callback: (($obj: ClientPdc, output: IndicationPdcDeactivateConfigOutput) => void)): number
    on(sigName: "deactivate-config", callback: (output: IndicationPdcDeactivateConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate-config", callback: (output: IndicationPdcDeactivateConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate-config", callback: (output: IndicationPdcDeactivateConfigOutput) => void): NodeJS.EventEmitter
    emit(sigName: "deactivate-config", output: IndicationPdcDeactivateConfigOutput): void
    connect(sigName: "get-config-info", callback: (($obj: ClientPdc, output: IndicationPdcGetConfigInfoOutput) => void)): number
    on(sigName: "get-config-info", callback: (output: IndicationPdcGetConfigInfoOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-config-info", callback: (output: IndicationPdcGetConfigInfoOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-config-info", callback: (output: IndicationPdcGetConfigInfoOutput) => void): NodeJS.EventEmitter
    emit(sigName: "get-config-info", output: IndicationPdcGetConfigInfoOutput): void
    connect(sigName: "get-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcGetSelectedConfigOutput) => void)): number
    on(sigName: "get-selected-config", callback: (output: IndicationPdcGetSelectedConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-selected-config", callback: (output: IndicationPdcGetSelectedConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-selected-config", callback: (output: IndicationPdcGetSelectedConfigOutput) => void): NodeJS.EventEmitter
    emit(sigName: "get-selected-config", output: IndicationPdcGetSelectedConfigOutput): void
    connect(sigName: "list-configs", callback: (($obj: ClientPdc, output: IndicationPdcListConfigsOutput) => void)): number
    on(sigName: "list-configs", callback: (output: IndicationPdcListConfigsOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "list-configs", callback: (output: IndicationPdcListConfigsOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "list-configs", callback: (output: IndicationPdcListConfigsOutput) => void): NodeJS.EventEmitter
    emit(sigName: "list-configs", output: IndicationPdcListConfigsOutput): void
    connect(sigName: "load-config", callback: (($obj: ClientPdc, output: IndicationPdcLoadConfigOutput) => void)): number
    on(sigName: "load-config", callback: (output: IndicationPdcLoadConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-config", callback: (output: IndicationPdcLoadConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-config", callback: (output: IndicationPdcLoadConfigOutput) => void): NodeJS.EventEmitter
    emit(sigName: "load-config", output: IndicationPdcLoadConfigOutput): void
    connect(sigName: "refresh", callback: (($obj: ClientPdc, output: IndicationPdcRefreshOutput) => void)): number
    on(sigName: "refresh", callback: (output: IndicationPdcRefreshOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh", callback: (output: IndicationPdcRefreshOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh", callback: (output: IndicationPdcRefreshOutput) => void): NodeJS.EventEmitter
    emit(sigName: "refresh", output: IndicationPdcRefreshOutput): void
    connect(sigName: "set-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcSetSelectedConfigOutput) => void)): number
    on(sigName: "set-selected-config", callback: (output: IndicationPdcSetSelectedConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-selected-config", callback: (output: IndicationPdcSetSelectedConfigOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-selected-config", callback: (output: IndicationPdcSetSelectedConfigOutput) => void): NodeJS.EventEmitter
    emit(sigName: "set-selected-config", output: IndicationPdcSetSelectedConfigOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientPdc_ConstructProps)
    _init (config?: ClientPdc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPds_ConstructProps extends Client_ConstructProps {
}
export class ClientPds {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientPds */
    getAgpsConfig(input: MessagePdsGetAgpsConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAgpsConfigFinish(res: Gio.AsyncResult): MessagePdsGetAgpsConfigOutput
    getAutoTrackingState(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAutoTrackingStateFinish(res: Gio.AsyncResult): MessagePdsGetAutoTrackingStateOutput
    getDefaultTrackingSession(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDefaultTrackingSessionFinish(res: Gio.AsyncResult): MessagePdsGetDefaultTrackingSessionOutput
    getGpsServiceState(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getGpsServiceStateFinish(res: Gio.AsyncResult): MessagePdsGetGpsServiceStateOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessagePdsResetOutput
    setAgpsConfig(input: MessagePdsSetAgpsConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAgpsConfigFinish(res: Gio.AsyncResult): MessagePdsSetAgpsConfigOutput
    setAutoTrackingState(input: MessagePdsSetAutoTrackingStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAutoTrackingStateFinish(res: Gio.AsyncResult): MessagePdsSetAutoTrackingStateOutput
    setDefaultTrackingSession(input: MessagePdsSetDefaultTrackingSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDefaultTrackingSessionFinish(res: Gio.AsyncResult): MessagePdsSetDefaultTrackingSessionOutput
    setEventReport(input: MessagePdsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setEventReportFinish(res: Gio.AsyncResult): MessagePdsSetEventReportOutput
    setGpsServiceState(input: MessagePdsSetGpsServiceStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setGpsServiceStateFinish(res: Gio.AsyncResult): MessagePdsSetGpsServiceStateOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientPds */
    connect(sigName: "event-report", callback: (($obj: ClientPds, output: IndicationPdsEventReportOutput) => void)): number
    on(sigName: "event-report", callback: (output: IndicationPdsEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-report", callback: (output: IndicationPdsEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-report", callback: (output: IndicationPdsEventReportOutput) => void): NodeJS.EventEmitter
    emit(sigName: "event-report", output: IndicationPdsEventReportOutput): void
    connect(sigName: "gps-ready", callback: (($obj: ClientPds) => void)): number
    on(sigName: "gps-ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gps-ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gps-ready", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "gps-ready"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientPds_ConstructProps)
    _init (config?: ClientPds_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientQos_ConstructProps extends Client_ConstructProps {
}
export class ClientQos {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientQos */
    getFlowStatus(input: MessageQosGetFlowStatusInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFlowStatusFinish(res: Gio.AsyncResult): MessageQosGetFlowStatusOutput
    getNetworkStatus(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getNetworkStatusFinish(res: Gio.AsyncResult): MessageQosGetNetworkStatusOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessageQosResetOutput
    swiReadDataStats(input: MessageQosSwiReadDataStatsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swiReadDataStatsFinish(res: Gio.AsyncResult): MessageQosSwiReadDataStatsOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientQos */
    connect(sigName: "flow-status", callback: (($obj: ClientQos, output: IndicationQosFlowStatusOutput) => void)): number
    on(sigName: "flow-status", callback: (output: IndicationQosFlowStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "flow-status", callback: (output: IndicationQosFlowStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "flow-status", callback: (output: IndicationQosFlowStatusOutput) => void): NodeJS.EventEmitter
    emit(sigName: "flow-status", output: IndicationQosFlowStatusOutput): void
    connect(sigName: "network-status", callback: (($obj: ClientQos, output: IndicationQosNetworkStatusOutput) => void)): number
    on(sigName: "network-status", callback: (output: IndicationQosNetworkStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "network-status", callback: (output: IndicationQosNetworkStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "network-status", callback: (output: IndicationQosNetworkStatusOutput) => void): NodeJS.EventEmitter
    emit(sigName: "network-status", output: IndicationQosNetworkStatusOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientQos_ConstructProps)
    _init (config?: ClientQos_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientSar_ConstructProps extends Client_ConstructProps {
}
export class ClientSar {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientSar */
    rfGetState(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rfGetStateFinish(res: Gio.AsyncResult): MessageSarRfGetStateOutput
    rfSetState(input: MessageSarRfSetStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rfSetStateFinish(res: Gio.AsyncResult): MessageSarRfSetStateOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    connect(sigName: "notify", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientSar_ConstructProps)
    _init (config?: ClientSar_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientUim_ConstructProps extends Client_ConstructProps {
}
export class ClientUim {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientUim */
    changePin(input: MessageUimChangePinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    changePinFinish(res: Gio.AsyncResult): MessageUimChangePinOutput
    changeProvisioningSession(input: MessageUimChangeProvisioningSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    changeProvisioningSessionFinish(res: Gio.AsyncResult): MessageUimChangeProvisioningSessionOutput
    depersonalization(input: MessageUimDepersonalizationInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    depersonalizationFinish(res: Gio.AsyncResult): MessageUimDepersonalizationOutput
    getCardStatus(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCardStatusFinish(res: Gio.AsyncResult): MessageUimGetCardStatusOutput
    getConfiguration(input: MessageUimGetConfigurationInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConfigurationFinish(res: Gio.AsyncResult): MessageUimGetConfigurationOutput
    getFileAttributes(input: MessageUimGetFileAttributesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFileAttributesFinish(res: Gio.AsyncResult): MessageUimGetFileAttributesOutput
    getSlotStatus(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSlotStatusFinish(res: Gio.AsyncResult): MessageUimGetSlotStatusOutput
    getSupportedMessages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSupportedMessagesFinish(res: Gio.AsyncResult): MessageUimGetSupportedMessagesOutput
    powerOffSim(input: MessageUimPowerOffSimInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    powerOffSimFinish(res: Gio.AsyncResult): MessageUimPowerOffSimOutput
    powerOnSim(input: MessageUimPowerOnSimInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    powerOnSimFinish(res: Gio.AsyncResult): MessageUimPowerOnSimOutput
    readRecord(input: MessageUimReadRecordInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readRecordFinish(res: Gio.AsyncResult): MessageUimReadRecordOutput
    readTransparent(input: MessageUimReadTransparentInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readTransparentFinish(res: Gio.AsyncResult): MessageUimReadTransparentOutput
    refreshComplete(input: MessageUimRefreshCompleteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshCompleteFinish(res: Gio.AsyncResult): MessageUimRefreshCompleteOutput
    refreshRegister(input: MessageUimRefreshRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshRegisterAll(input: MessageUimRefreshRegisterAllInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshRegisterAllFinish(res: Gio.AsyncResult): MessageUimRefreshRegisterAllOutput
    refreshRegisterFinish(res: Gio.AsyncResult): MessageUimRefreshRegisterOutput
    registerEvents(input: MessageUimRegisterEventsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    registerEventsFinish(res: Gio.AsyncResult): MessageUimRegisterEventsOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessageUimResetOutput
    setPinProtection(input: MessageUimSetPinProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setPinProtectionFinish(res: Gio.AsyncResult): MessageUimSetPinProtectionOutput
    switchSlot(input: MessageUimSwitchSlotInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    switchSlotFinish(res: Gio.AsyncResult): MessageUimSwitchSlotOutput
    unblockPin(input: MessageUimUnblockPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unblockPinFinish(res: Gio.AsyncResult): MessageUimUnblockPinOutput
    verifyPin(input: MessageUimVerifyPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifyPinFinish(res: Gio.AsyncResult): MessageUimVerifyPinOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientUim */
    connect(sigName: "card-status", callback: (($obj: ClientUim, output: IndicationUimCardStatusOutput) => void)): number
    on(sigName: "card-status", callback: (output: IndicationUimCardStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-status", callback: (output: IndicationUimCardStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-status", callback: (output: IndicationUimCardStatusOutput) => void): NodeJS.EventEmitter
    emit(sigName: "card-status", output: IndicationUimCardStatusOutput): void
    connect(sigName: "refresh", callback: (($obj: ClientUim, output: IndicationUimRefreshOutput) => void)): number
    on(sigName: "refresh", callback: (output: IndicationUimRefreshOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh", callback: (output: IndicationUimRefreshOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh", callback: (output: IndicationUimRefreshOutput) => void): NodeJS.EventEmitter
    emit(sigName: "refresh", output: IndicationUimRefreshOutput): void
    connect(sigName: "slot-status", callback: (($obj: ClientUim, output: IndicationUimSlotStatusOutput) => void)): number
    on(sigName: "slot-status", callback: (output: IndicationUimSlotStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "slot-status", callback: (output: IndicationUimSlotStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "slot-status", callback: (output: IndicationUimSlotStatusOutput) => void): NodeJS.EventEmitter
    emit(sigName: "slot-status", output: IndicationUimSlotStatusOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientUim_ConstructProps)
    _init (config?: ClientUim_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientVoice_ConstructProps extends Client_ConstructProps {
}
export class ClientVoice {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientVoice */
    answerCall(input: MessageVoiceAnswerCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    answerCallFinish(res: Gio.AsyncResult): MessageVoiceAnswerCallOutput
    answerUssd(input: MessageVoiceAnswerUssdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    answerUssdFinish(res: Gio.AsyncResult): MessageVoiceAnswerUssdOutput
    cancelUssd(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cancelUssdFinish(res: Gio.AsyncResult): MessageVoiceCancelUssdOutput
    dialCall(input: MessageVoiceDialCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dialCallFinish(res: Gio.AsyncResult): MessageVoiceDialCallOutput
    endCall(input: MessageVoiceEndCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    endCallFinish(res: Gio.AsyncResult): MessageVoiceEndCallOutput
    getAllCallInfo(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAllCallInfoFinish(res: Gio.AsyncResult): MessageVoiceGetAllCallInfoOutput
    getCallWaiting(input: MessageVoiceGetCallWaitingInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCallWaitingFinish(res: Gio.AsyncResult): MessageVoiceGetCallWaitingOutput
    getConfig(input: MessageVoiceGetConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConfigFinish(res: Gio.AsyncResult): MessageVoiceGetConfigOutput
    getSupportedMessages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSupportedMessagesFinish(res: Gio.AsyncResult): MessageVoiceGetSupportedMessagesOutput
    indicationRegister(input: MessageVoiceIndicationRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indicationRegisterFinish(res: Gio.AsyncResult): MessageVoiceIndicationRegisterOutput
    manageCalls(input: MessageVoiceManageCallsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    manageCallsFinish(res: Gio.AsyncResult): MessageVoiceManageCallsOutput
    originateUssd(input: MessageVoiceOriginateUssdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    originateUssdFinish(res: Gio.AsyncResult): MessageVoiceOriginateUssdOutput
    originateUssdNoWait(input: MessageVoiceOriginateUssdNoWaitInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    originateUssdNoWaitFinish(res: Gio.AsyncResult): MessageVoiceOriginateUssdNoWaitOutput
    setSupplementaryService(input: MessageVoiceSetSupplementaryServiceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setSupplementaryServiceFinish(res: Gio.AsyncResult): MessageVoiceSetSupplementaryServiceOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientVoice */
    connect(sigName: "all-call-status", callback: (($obj: ClientVoice, output: IndicationVoiceAllCallStatusOutput) => void)): number
    on(sigName: "all-call-status", callback: (output: IndicationVoiceAllCallStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "all-call-status", callback: (output: IndicationVoiceAllCallStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "all-call-status", callback: (output: IndicationVoiceAllCallStatusOutput) => void): NodeJS.EventEmitter
    emit(sigName: "all-call-status", output: IndicationVoiceAllCallStatusOutput): void
    connect(sigName: "originate-ussd-no-wait", callback: (($obj: ClientVoice, output: IndicationVoiceOriginateUssdNoWaitOutput) => void)): number
    on(sigName: "originate-ussd-no-wait", callback: (output: IndicationVoiceOriginateUssdNoWaitOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "originate-ussd-no-wait", callback: (output: IndicationVoiceOriginateUssdNoWaitOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "originate-ussd-no-wait", callback: (output: IndicationVoiceOriginateUssdNoWaitOutput) => void): NodeJS.EventEmitter
    emit(sigName: "originate-ussd-no-wait", output: IndicationVoiceOriginateUssdNoWaitOutput): void
    connect(sigName: "release-ussd", callback: (($obj: ClientVoice) => void)): number
    on(sigName: "release-ussd", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "release-ussd", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "release-ussd", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "release-ussd"): void
    connect(sigName: "supplementary-service", callback: (($obj: ClientVoice, output: IndicationVoiceSupplementaryServiceOutput) => void)): number
    on(sigName: "supplementary-service", callback: (output: IndicationVoiceSupplementaryServiceOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "supplementary-service", callback: (output: IndicationVoiceSupplementaryServiceOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "supplementary-service", callback: (output: IndicationVoiceSupplementaryServiceOutput) => void): NodeJS.EventEmitter
    emit(sigName: "supplementary-service", output: IndicationVoiceSupplementaryServiceOutput): void
    connect(sigName: "ussd", callback: (($obj: ClientVoice, output: IndicationVoiceUssdOutput) => void)): number
    on(sigName: "ussd", callback: (output: IndicationVoiceUssdOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ussd", callback: (output: IndicationVoiceUssdOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ussd", callback: (output: IndicationVoiceUssdOutput) => void): NodeJS.EventEmitter
    emit(sigName: "ussd", output: IndicationVoiceUssdOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientVoice_ConstructProps)
    _init (config?: ClientVoice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWda_ConstructProps extends Client_ConstructProps {
}
export class ClientWda {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientWda */
    getDataFormat(input: MessageWdaGetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFormatFinish(res: Gio.AsyncResult): MessageWdaGetDataFormatOutput
    getSupportedMessages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSupportedMessagesFinish(res: Gio.AsyncResult): MessageWdaGetSupportedMessagesOutput
    setDataFormat(input: MessageWdaSetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDataFormatFinish(res: Gio.AsyncResult): MessageWdaSetDataFormatOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    connect(sigName: "notify", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientWda_ConstructProps)
    _init (config?: ClientWda_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWds_ConstructProps extends Client_ConstructProps {
}
export class ClientWds {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientWds */
    bindDataPort(input: MessageWdsBindDataPortInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bindDataPortFinish(res: Gio.AsyncResult): MessageWdsBindDataPortOutput
    bindMuxDataPort(input: MessageWdsBindMuxDataPortInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bindMuxDataPortFinish(res: Gio.AsyncResult): MessageWdsBindMuxDataPortOutput
    createProfile(input: MessageWdsCreateProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createProfileFinish(res: Gio.AsyncResult): MessageWdsCreateProfileOutput
    deleteProfile(input: MessageWdsDeleteProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteProfileFinish(res: Gio.AsyncResult): MessageWdsDeleteProfileOutput
    getAutoconnectSettings(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAutoconnectSettingsFinish(res: Gio.AsyncResult): MessageWdsGetAutoconnectSettingsOutput
    getChannelRates(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChannelRatesFinish(res: Gio.AsyncResult): MessageWdsGetChannelRatesOutput
    getCurrentDataBearerTechnology(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCurrentDataBearerTechnologyFinish(res: Gio.AsyncResult): MessageWdsGetCurrentDataBearerTechnologyOutput
    getCurrentSettings(input: MessageWdsGetCurrentSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCurrentSettingsFinish(res: Gio.AsyncResult): MessageWdsGetCurrentSettingsOutput
    getDataBearerTechnology(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataBearerTechnologyFinish(res: Gio.AsyncResult): MessageWdsGetDataBearerTechnologyOutput
    getDefaultProfileNumber(input: MessageWdsGetDefaultProfileNumberInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDefaultProfileNumberFinish(res: Gio.AsyncResult): MessageWdsGetDefaultProfileNumberOutput
    getDefaultSettings(input: MessageWdsGetDefaultSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDefaultSettingsFinish(res: Gio.AsyncResult): MessageWdsGetDefaultSettingsOutput
    getDormancyStatus(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDormancyStatusFinish(res: Gio.AsyncResult): MessageWdsGetDormancyStatusOutput
    getLteAttachParameters(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getLteAttachParametersFinish(res: Gio.AsyncResult): MessageWdsGetLteAttachParametersOutput
    getLteAttachPdnList(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getLteAttachPdnListFinish(res: Gio.AsyncResult): MessageWdsGetLteAttachPdnListOutput
    getMaxLteAttachPdnNumber(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMaxLteAttachPdnNumberFinish(res: Gio.AsyncResult): MessageWdsGetMaxLteAttachPdnNumberOutput
    getPacketServiceStatus(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPacketServiceStatusFinish(res: Gio.AsyncResult): MessageWdsGetPacketServiceStatusOutput
    getPacketStatistics(input: MessageWdsGetPacketStatisticsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPacketStatisticsFinish(res: Gio.AsyncResult): MessageWdsGetPacketStatisticsOutput
    getPdnThrottleInfo(input: MessageWdsGetPdnThrottleInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPdnThrottleInfoFinish(res: Gio.AsyncResult): MessageWdsGetPdnThrottleInfoOutput
    getProfileList(input: MessageWdsGetProfileListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getProfileListFinish(res: Gio.AsyncResult): MessageWdsGetProfileListOutput
    getProfileSettings(input: MessageWdsGetProfileSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getProfileSettingsFinish(res: Gio.AsyncResult): MessageWdsGetProfileSettingsOutput
    getSupportedMessages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSupportedMessagesFinish(res: Gio.AsyncResult): MessageWdsGetSupportedMessagesOutput
    goActive(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    goActiveFinish(res: Gio.AsyncResult): MessageWdsGoActiveOutput
    goDormant(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    goDormantFinish(res: Gio.AsyncResult): MessageWdsGoDormantOutput
    modifyProfile(input: MessageWdsModifyProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyProfileFinish(res: Gio.AsyncResult): MessageWdsModifyProfileOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessageWdsResetOutput
    setAutoconnectSettings(input: MessageWdsSetAutoconnectSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAutoconnectSettingsFinish(res: Gio.AsyncResult): MessageWdsSetAutoconnectSettingsOutput
    setDefaultProfileNumber(input: MessageWdsSetDefaultProfileNumberInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDefaultProfileNumberFinish(res: Gio.AsyncResult): MessageWdsSetDefaultProfileNumberOutput
    setEventReport(input: MessageWdsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setEventReportFinish(res: Gio.AsyncResult): MessageWdsSetEventReportOutput
    setIpFamily(input: MessageWdsSetIpFamilyInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setIpFamilyFinish(res: Gio.AsyncResult): MessageWdsSetIpFamilyOutput
    setLteAttachPdnList(input: MessageWdsSetLteAttachPdnListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setLteAttachPdnListFinish(res: Gio.AsyncResult): MessageWdsSetLteAttachPdnListOutput
    startNetwork(input: MessageWdsStartNetworkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startNetworkFinish(res: Gio.AsyncResult): MessageWdsStartNetworkOutput
    stopNetwork(input: MessageWdsStopNetworkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stopNetworkFinish(res: Gio.AsyncResult): MessageWdsStopNetworkOutput
    swiCreateProfileIndexed(input: MessageWdsSwiCreateProfileIndexedInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swiCreateProfileIndexedFinish(res: Gio.AsyncResult): MessageWdsSwiCreateProfileIndexedOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientWds */
    connect(sigName: "event-report", callback: (($obj: ClientWds, output: IndicationWdsEventReportOutput) => void)): number
    on(sigName: "event-report", callback: (output: IndicationWdsEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-report", callback: (output: IndicationWdsEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-report", callback: (output: IndicationWdsEventReportOutput) => void): NodeJS.EventEmitter
    emit(sigName: "event-report", output: IndicationWdsEventReportOutput): void
    connect(sigName: "packet-service-status", callback: (($obj: ClientWds, output: IndicationWdsPacketServiceStatusOutput) => void)): number
    on(sigName: "packet-service-status", callback: (output: IndicationWdsPacketServiceStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "packet-service-status", callback: (output: IndicationWdsPacketServiceStatusOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "packet-service-status", callback: (output: IndicationWdsPacketServiceStatusOutput) => void): NodeJS.EventEmitter
    emit(sigName: "packet-service-status", output: IndicationWdsPacketServiceStatusOutput): void
    connect(sigName: "set-lte-attach-pdn-list", callback: (($obj: ClientWds, output: IndicationWdsSetLteAttachPdnListOutput) => void)): number
    on(sigName: "set-lte-attach-pdn-list", callback: (output: IndicationWdsSetLteAttachPdnListOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-lte-attach-pdn-list", callback: (output: IndicationWdsSetLteAttachPdnListOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-lte-attach-pdn-list", callback: (output: IndicationWdsSetLteAttachPdnListOutput) => void): NodeJS.EventEmitter
    emit(sigName: "set-lte-attach-pdn-list", output: IndicationWdsSetLteAttachPdnListOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientWds_ConstructProps)
    _init (config?: ClientWds_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWms_ConstructProps extends Client_ConstructProps {
}
export class ClientWms {
    /* Properties of Qmi-1.0.Qmi.Client */
    clientCid: number
    clientDevice: Device
    clientService: Service
    readonly clientValid: boolean
    clientVersionMajor: number
    clientVersionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientWms */
    delete(input: MessageWmsDeleteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(res: Gio.AsyncResult): MessageWmsDeleteOutput
    getMessageProtocol(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMessageProtocolFinish(res: Gio.AsyncResult): MessageWmsGetMessageProtocolOutput
    getRoutes(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getRoutesFinish(res: Gio.AsyncResult): MessageWmsGetRoutesOutput
    getSupportedMessages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSupportedMessagesFinish(res: Gio.AsyncResult): MessageWmsGetSupportedMessagesOutput
    listMessages(input: MessageWmsListMessagesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    listMessagesFinish(res: Gio.AsyncResult): MessageWmsListMessagesOutput
    modifyTag(input: MessageWmsModifyTagInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyTagFinish(res: Gio.AsyncResult): MessageWmsModifyTagOutput
    rawRead(input: MessageWmsRawReadInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rawReadFinish(res: Gio.AsyncResult): MessageWmsRawReadOutput
    rawSend(input: MessageWmsRawSendInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rawSendFinish(res: Gio.AsyncResult): MessageWmsRawSendOutput
    rawWrite(input: MessageWmsRawWriteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rawWriteFinish(res: Gio.AsyncResult): MessageWmsRawWriteOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetFinish(res: Gio.AsyncResult): MessageWmsResetOutput
    sendAck(input: MessageWmsSendAckInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendAckFinish(res: Gio.AsyncResult): MessageWmsSendAckOutput
    sendFromMemoryStorage(input: MessageWmsSendFromMemoryStorageInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFromMemoryStorageFinish(res: Gio.AsyncResult): MessageWmsSendFromMemoryStorageOutput
    setEventReport(input: MessageWmsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setEventReportFinish(res: Gio.AsyncResult): MessageWmsSetEventReportOutput
    setRoutes(input: MessageWmsSetRoutesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setRoutesFinish(res: Gio.AsyncResult): MessageWmsSetRoutesOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    checkVersion(major: number, minor: number): boolean
    getCid(): number
    getDevice(): GObject.Object
    getNextTransactionId(): number
    getService(): Service
    getVersion(major: number, minor: number): boolean
    isValid(): boolean
    peekDevice(): GObject.Object
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
    /* Signals of Qmi-1.0.Qmi.ClientWms */
    connect(sigName: "event-report", callback: (($obj: ClientWms, output: IndicationWmsEventReportOutput) => void)): number
    on(sigName: "event-report", callback: (output: IndicationWmsEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-report", callback: (output: IndicationWmsEventReportOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-report", callback: (output: IndicationWmsEventReportOutput) => void): NodeJS.EventEmitter
    emit(sigName: "event-report", output: IndicationWmsEventReportOutput): void
    connect(sigName: "smsc-address", callback: (($obj: ClientWms, output: IndicationWmsSmscAddressOutput) => void)): number
    on(sigName: "smsc-address", callback: (output: IndicationWmsSmscAddressOutput) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "smsc-address", callback: (output: IndicationWmsSmscAddressOutput) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "smsc-address", callback: (output: IndicationWmsSmscAddressOutput) => void): NodeJS.EventEmitter
    emit(sigName: "smsc-address", output: IndicationWmsSmscAddressOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-cid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-device", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-service", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientWms_ConstructProps)
    _init (config?: ClientWms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    deviceFile?: Gio.File
    deviceNoFileCheck?: boolean
    deviceProxyPath?: string
}
export class Device {
    /* Properties of Qmi-1.0.Qmi.Device */
    readonly deviceWwanIface: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.Device */
    addLink(muxId: number, baseIfname: string, ifnamePrefix: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addLinkFinish(res: Gio.AsyncResult, muxId: number): string
    addLinkWithFlags(muxId: number, baseIfname: string, ifnamePrefix: string, flags: DeviceAddLinkFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addLinkWithFlagsFinish(res: Gio.AsyncResult, muxId: number): string
    allocateClient(service: Service, cid: number, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    allocateClientFinish(res: Gio.AsyncResult): Client
    checkExpectedDataFormatSupported(format: DeviceExpectedDataFormat): boolean
    checkLinkSupported(): boolean
    closeAsync(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): boolean
    commandAbortableFinish(res: Gio.AsyncResult): Message
    commandFull(message: Message, messageContext: MessageContext, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    commandFullFinish(res: Gio.AsyncResult): Message
    deleteAllLinks(baseIfname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteAllLinksFinish(res: Gio.AsyncResult): boolean
    deleteLink(ifname: string, muxId: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteLinkFinish(res: Gio.AsyncResult): boolean
    getExpectedDataFormat(): DeviceExpectedDataFormat
    getFile(): Gio.File
    getPath(): string
    getPathDisplay(): string
    getServiceVersionInfo(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getServiceVersionInfoFinish(res: Gio.AsyncResult): DeviceServiceVersionInfo[]
    getWwanIface(): string
    isOpen(): boolean
    listLinks(baseIfname: string): { returnType: boolean, outLinks: string[] }
    open(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(res: Gio.AsyncResult): boolean
    peekFile(): Gio.File
    releaseClient(client: Client, flags: DeviceReleaseClientFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    releaseClientFinish(res: Gio.AsyncResult): boolean
    setExpectedDataFormat(format: DeviceExpectedDataFormat): boolean
    setInstanceId(instanceId: number, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setInstanceIdFinish(res: Gio.AsyncResult, linkId: number): boolean
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
    /* Signals of Qmi-1.0.Qmi.Device */
    connect(sigName: "device-removed", callback: (($obj: Device) => void)): number
    on(sigName: "device-removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "device-removed"): void
    connect(sigName: "indication", callback: (($obj: Device, output: any[]) => void)): number
    on(sigName: "indication", callback: (output: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "indication", callback: (output: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "indication", callback: (output: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "indication", output: any[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-wwan-iface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-wwan-iface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-wwan-iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-wwan-iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-wwan-iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class Proxy {
    /* Properties of Qmi-1.0.Qmi.Proxy */
    readonly qmiProxyNClients: number
    /* Fields of Qmi-1.0.Qmi.Proxy */
    parent: GObject.Object
    priv: ProxyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.Proxy */
    getNClients(): number
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
    connect(sigName: "notify::qmi-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qmi-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qmi-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qmi-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qmi-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export abstract class ClientClass {
    /* Fields of Qmi-1.0.Qmi.ClientClass */
    processIndication: (self: Client, message: Message) => void
    static name: string
}
export abstract class ClientCtlClass {
    static name: string
}
export abstract class ClientDmsClass {
    static name: string
}
export abstract class ClientDpmClass {
    static name: string
}
export abstract class ClientDsdClass {
    static name: string
}
export abstract class ClientGasClass {
    static name: string
}
export abstract class ClientGmsClass {
    static name: string
}
export abstract class ClientLocClass {
    static name: string
}
export abstract class ClientNasClass {
    static name: string
}
export abstract class ClientOmaClass {
    static name: string
}
export abstract class ClientPbmClass {
    static name: string
}
export abstract class ClientPdcClass {
    static name: string
}
export abstract class ClientPdsClass {
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class ClientQosClass {
    static name: string
}
export abstract class ClientSarClass {
    static name: string
}
export abstract class ClientUimClass {
    static name: string
}
export abstract class ClientVoiceClass {
    static name: string
}
export abstract class ClientWdaClass {
    static name: string
}
export abstract class ClientWdsClass {
    static name: string
}
export abstract class ClientWmsClass {
    static name: string
}
export class ConfigTypeAndId {
    /* Fields of Qmi-1.0.Qmi.ConfigTypeAndId */
    configType: PdcConfigurationType
    id: object[]
    static name: string
}
export abstract class DeviceClass {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export class DeviceServiceVersionInfo {
    /* Fields of Qmi-1.0.Qmi.DeviceServiceVersionInfo */
    service: Service
    majorVersion: number
    minorVersion: number
    static name: string
}
export class IndicationDmsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationDmsEventReportOutput */
    getActivationState(): { returnType: boolean, valueActivationState: DmsActivationState | null }
    getOperatingMode(): { returnType: boolean, valueOperatingMode: DmsOperatingMode | null }
    getPin1Status(): { returnType: boolean, valuePin1StatusCurrentStatus: DmsUimPinStatus | null, valuePin1StatusVerifyRetriesLeft: number | null, valuePin1StatusUnblockRetriesLeft: number | null }
    getPin2Status(): { returnType: boolean, valuePin2StatusCurrentStatus: DmsUimPinStatus | null, valuePin2StatusVerifyRetriesLeft: number | null, valuePin2StatusUnblockRetriesLeft: number | null }
    getPowerState(): { returnType: boolean, valuePowerStatePowerStateFlags: number | null, valuePowerStateBatteryLevel: number | null }
    getPrlInitNotification(): { returnType: boolean, valuePrlInitNotification: boolean | null }
    getUimState(): { returnType: boolean, valueUimState: DmsUimState | null }
    getWirelessDisableState(): { returnType: boolean, valueWirelessDisableState: boolean | null }
    ref(): IndicationDmsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationLocDeleteAssistanceDataOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocDeleteAssistanceDataOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    ref(): IndicationLocDeleteAssistanceDataOutput
    unref(): void
    static name: string
}
export class IndicationLocEngineStateOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocEngineStateOutput */
    getEngineState(): { returnType: boolean, valueEngineState: LocEngineState | null }
    ref(): IndicationLocEngineStateOutput
    unref(): void
    static name: string
}
export class IndicationLocFixRecurrenceTypeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocFixRecurrenceTypeOutput */
    getFixRecurrenceType(): { returnType: boolean, valueFixRecurrenceType: LocFixRecurrenceType | null }
    ref(): IndicationLocFixRecurrenceTypeOutput
    unref(): void
    static name: string
}
export class IndicationLocGetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetEngineLockOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    getLockType(): { returnType: boolean, valueLockType: LocLockType | null }
    ref(): IndicationLocGetEngineLockOutput
    unref(): void
    static name: string
}
export class IndicationLocGetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetNmeaTypesOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    getNmeaTypes(): { returnType: boolean, valueNmeaTypes: LocNmeaType | null }
    ref(): IndicationLocGetNmeaTypesOutput
    unref(): void
    static name: string
}
export class IndicationLocGetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetOperationModeOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    getOperationMode(): { returnType: boolean, valueOperationMode: LocOperationMode | null }
    ref(): IndicationLocGetOperationModeOutput
    unref(): void
    static name: string
}
export class IndicationLocGetPredictedOrbitsDataSourceOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetPredictedOrbitsDataSourceOutput */
    getAllowedSizes(): { returnType: boolean, valueAllowedSizesMaxFileSize: number | null, valueAllowedSizesMaxPartSize: number | null }
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    getServerList(): { returnType: boolean, valueServerList: string[] | null }
    ref(): IndicationLocGetPredictedOrbitsDataSourceOutput
    unref(): void
    static name: string
}
export class IndicationLocGetServerOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetServerOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    getIpv4(): { returnType: boolean, valueIpv4Ipv4Address: number | null, valueIpv4Ipv4Port: number | null }
    getIpv6(): { returnType: boolean, valueIpv6Ipv6Address: number[] | null, valueIpv6Ipv6Port: number | null }
    getServerType(): { returnType: boolean, valueServerType: LocServerType | null }
    getUrl(): { returnType: boolean, valueUrl: string | null }
    ref(): IndicationLocGetServerOutput
    unref(): void
    static name: string
}
export class IndicationLocGnssSvInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGnssSvInfoOutput */
    getAltitudeAssumed(): { returnType: boolean, valueAltitudeAssumed: boolean | null }
    getList(): { returnType: boolean, valueList: IndicationLocGnssSvInfoOutputListElement[] | null }
    ref(): IndicationLocGnssSvInfoOutput
    unref(): void
    static name: string
}
export class IndicationLocGnssSvInfoOutputListElement {
    /* Fields of Qmi-1.0.Qmi.IndicationLocGnssSvInfoOutputListElement */
    validInformation: LocSatelliteValidInformation
    system: LocSystem
    gnssSatelliteId: number
    healthStatus: LocHealthStatus
    satelliteStatus: LocSatelliteStatus
    navigationData: LocNavigationData
    elevationDegrees: number
    azimuthDegrees: number
    signalToNoiseRatioBhz: number
    static name: string
}
export class IndicationLocInjectPredictedOrbitsDataOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocInjectPredictedOrbitsDataOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    getPartNumber(): { returnType: boolean, valuePartNumber: number | null }
    ref(): IndicationLocInjectPredictedOrbitsDataOutput
    unref(): void
    static name: string
}
export class IndicationLocInjectXtraDataOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocInjectXtraDataOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    getPartNumber(): { returnType: boolean, valuePartNumber: number | null }
    ref(): IndicationLocInjectXtraDataOutput
    unref(): void
    static name: string
}
export class IndicationLocNmeaOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocNmeaOutput */
    getNmeaString(): { returnType: boolean, valueNmeaString: string | null }
    ref(): IndicationLocNmeaOutput
    unref(): void
    static name: string
}
export class IndicationLocPositionReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocPositionReportOutput */
    getAltitudeAssumed(): { returnType: boolean, valueAltitudeAssumed: boolean | null }
    getAltitudeFromEllipsoid(): { returnType: boolean, valueAltitudeFromEllipsoid: number | null }
    getAltitudeFromSealevel(): { returnType: boolean, valueAltitudeFromSealevel: number | null }
    getDilutionOfPrecision(): { returnType: boolean, valueDilutionOfPrecision: IndicationLocPositionReportOutputDilutionOfPrecision | null }
    getGpsTime(): { returnType: boolean, valueGpsTime: IndicationLocPositionReportOutputGpsTime | null }
    getHeading(): { returnType: boolean, valueHeading: number | null }
    getHeadingUncertainty(): { returnType: boolean, valueHeadingUncertainty: number | null }
    getHorizontalConfidence(): { returnType: boolean, valueHorizontalConfidence: number | null }
    getHorizontalReliability(): { returnType: boolean, valueHorizontalReliability: LocReliability | null }
    getHorizontalSpeed(): { returnType: boolean, valueHorizontalSpeed: number | null }
    getHorizontalUncertaintyCircular(): { returnType: boolean, valueHorizontalUncertaintyCircular: number | null }
    getHorizontalUncertaintyEllipticalAzimuth(): { returnType: boolean, valueHorizontalUncertaintyEllipticalAzimuth: number | null }
    getHorizontalUncertaintyEllipticalMajor(): { returnType: boolean, valueHorizontalUncertaintyEllipticalMajor: number | null }
    getHorizontalUncertaintyEllipticalMinor(): { returnType: boolean, valueHorizontalUncertaintyEllipticalMinor: number | null }
    getLatitude(): { returnType: boolean, valueLatitude: number | null }
    getLeapSeconds(): { returnType: boolean, valueLeapSeconds: number | null }
    getLongitude(): { returnType: boolean, valueLongitude: number | null }
    getMagneticDeviation(): { returnType: boolean, valueMagneticDeviation: number | null }
    getSatellitesUsed(): { returnType: boolean, valueSatellitesUsed: number[] | null }
    getSensorDataUsage(): { returnType: boolean, valueSensorDataUsage: LocSensorDataUsage | null }
    getSessionFixCount(): { returnType: boolean, valueSessionFixCount: number | null }
    getSessionId(): { returnType: boolean, valueSessionId: number | null }
    getSessionStatus(): { returnType: boolean, valueSessionStatus: LocSessionStatus | null }
    getSpeedUncertainty(): { returnType: boolean, valueSpeedUncertainty: number | null }
    getTechnologyUsed(): { returnType: boolean, valueTechnologyUsed: LocTechnologyUsed | null }
    getTimeSource(): { returnType: boolean, valueTimeSource: LocTimeSource | null }
    getTimeUncertainty(): { returnType: boolean, valueTimeUncertainty: number | null }
    getUtcTimestamp(): { returnType: boolean, valueUtcTimestamp: number | null }
    getVerticalConfidence(): { returnType: boolean, valueVerticalConfidence: number | null }
    getVerticalReliability(): { returnType: boolean, valueVerticalReliability: number | null }
    getVerticalSpeed(): { returnType: boolean, valueVerticalSpeed: number | null }
    getVerticalUncertainty(): { returnType: boolean, valueVerticalUncertainty: number | null }
    ref(): IndicationLocPositionReportOutput
    unref(): void
    static name: string
}
export class IndicationLocPositionReportOutputDilutionOfPrecision {
    /* Fields of Qmi-1.0.Qmi.IndicationLocPositionReportOutputDilutionOfPrecision */
    positionDilutionOfPrecision: number
    horizontalDilutionOfPrecision: number
    verticalDilutionOfPrecision: number
    static name: string
}
export class IndicationLocPositionReportOutputGpsTime {
    /* Fields of Qmi-1.0.Qmi.IndicationLocPositionReportOutputGpsTime */
    gpsWeeks: number
    gpsTimeOfWeekMilliseconds: number
    static name: string
}
export class IndicationLocSetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetEngineLockOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    ref(): IndicationLocSetEngineLockOutput
    unref(): void
    static name: string
}
export class IndicationLocSetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetNmeaTypesOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    ref(): IndicationLocSetNmeaTypesOutput
    unref(): void
    static name: string
}
export class IndicationLocSetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetOperationModeOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    ref(): IndicationLocSetOperationModeOutput
    unref(): void
    static name: string
}
export class IndicationLocSetServerOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetServerOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus | null }
    ref(): IndicationLocSetServerOutput
    unref(): void
    static name: string
}
export class IndicationNasEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasEventReportOutput */
    getEcio(): { returnType: boolean, valueEcioEcio: number | null, valueEcioRadioInterface: NasRadioInterface | null }
    getErrorRate(): { returnType: boolean, valueErrorRateRate: number | null, valueErrorRateRadioInterface: NasRadioInterface | null }
    getIo(): { returnType: boolean, valueIo: number | null }
    getLteRsrp(): { returnType: boolean, valueLteRsrp: number | null }
    getLteSnr(): { returnType: boolean, valueLteSnr: number | null }
    getRegistrationRejectReason(): { returnType: boolean, valueRegistrationRejectReasonServiceDomain: NasNetworkServiceDomain | null, valueRegistrationRejectReasonRejectCause: number | null }
    getRfBandInformation(): { returnType: boolean, valueRfBandInformation: IndicationNasEventReportOutputRfBandInformationElement[] | null }
    getRsrq(): { returnType: boolean, valueRsrqRsrq: number | null, valueRsrqRadioInterface: NasRadioInterface | null }
    getRssi(): { returnType: boolean, valueRssiRssi: number | null, valueRssiRadioInterface: NasRadioInterface | null }
    getSignalStrength(): { returnType: boolean, valueSignalStrengthStrength: number | null, valueSignalStrengthRadioInterface: NasRadioInterface | null }
    getSinr(): { returnType: boolean, valueSinr: NasEvdoSinrLevel | null }
    ref(): IndicationNasEventReportOutput
    unref(): void
    static name: string
}
export class IndicationNasEventReportOutputRfBandInformationElement {
    /* Fields of Qmi-1.0.Qmi.IndicationNasEventReportOutputRfBandInformationElement */
    radioInterface: NasRadioInterface
    activeBandClass: NasActiveBand
    activeChannel: number
    static name: string
}
export class IndicationNasNetworkRejectOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasNetworkRejectOutput */
    getClosedSubscriberGroup(): { returnType: boolean, valueClosedSubscriberGroup: number | null }
    getPlmn(): { returnType: boolean, valuePlmnMcc: number | null, valuePlmnMnc: number | null, valuePlmnIncludesPcsDigit: boolean | null }
    getRadioInterface(): { returnType: boolean, valueRadioInterface: NasRadioInterface | null }
    getRejectCause(): { returnType: boolean, valueRejectCause: NasRejectCause | null }
    getServiceDomain(): { returnType: boolean, valueServiceDomain: NasNetworkServiceDomain | null }
    ref(): IndicationNasNetworkRejectOutput
    unref(): void
    static name: string
}
export class IndicationNasNetworkTimeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasNetworkTimeOutput */
    getDaylightSavingsAdjustment(): { returnType: boolean, valueDaylightSavingsAdjustment: NasDaylightSavingsAdjustment | null }
    getRadioInterface(): { returnType: boolean, valueRadioInterface: NasRadioInterface | null }
    getTimezoneOffset(): { returnType: boolean, valueTimezoneOffset: number | null }
    getUniversalTime(): { returnType: boolean, valueUniversalTimeYear: number | null, valueUniversalTimeMonth: number | null, valueUniversalTimeDay: number | null, valueUniversalTimeHour: number | null, valueUniversalTimeMinute: number | null, valueUniversalTimeSecond: number | null, valueUniversalTimeDayOfWeek: NasDayOfWeek | null }
    ref(): IndicationNasNetworkTimeOutput
    unref(): void
    static name: string
}
export class IndicationNasOperatorNameOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasOperatorNameOutput */
    getNitzInformation(): { returnType: boolean, valueNitzInformationNameEncoding: NasPlmnEncodingScheme | null, valueNitzInformationShortCountryInitials: NasPlmnNameCountryInitials | null, valueNitzInformationLongNameSpareBits: NasPlmnNameSpareBits | null, valueNitzInformationShortNameSpareBits: NasPlmnNameSpareBits | null, valueNitzInformationLongName: any[] | null, valueNitzInformationShortName: any[] | null }
    getOperatorPlmnList(): { returnType: boolean, valueOperatorPlmnList: IndicationNasOperatorNameOutputOperatorPlmnListElement[] | null }
    getOperatorPlmnName(): { returnType: boolean, valueOperatorPlmnName: IndicationNasOperatorNameOutputOperatorPlmnNameElement[] | null }
    getOperatorStringName(): { returnType: boolean, valueOperatorStringName: string | null }
    getServiceProviderName(): { returnType: boolean, valueServiceProviderNameNameDisplayCondition: NasNetworkNameDisplayCondition | null, valueServiceProviderNameName: string | null }
    ref(): IndicationNasOperatorNameOutput
    unref(): void
    static name: string
}
export class IndicationNasOperatorNameOutputOperatorPlmnListElement {
    /* Fields of Qmi-1.0.Qmi.IndicationNasOperatorNameOutputOperatorPlmnListElement */
    mcc: string
    mnc: string
    lac1: number
    lac2: number
    plmnNameRecordIdentifier: number
    static name: string
}
export class IndicationNasOperatorNameOutputOperatorPlmnNameElement {
    /* Fields of Qmi-1.0.Qmi.IndicationNasOperatorNameOutputOperatorPlmnNameElement */
    nameEncoding: NasPlmnEncodingScheme
    shortCountryInitials: NasPlmnNameCountryInitials
    longNameSpareBits: NasPlmnNameSpareBits
    shortNameSpareBits: NasPlmnNameSpareBits
    longName: object[]
    shortName: object[]
    static name: string
}
export class IndicationNasServingSystemOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasServingSystemOutput */
    getCallBarringStatus(): { returnType: boolean, valueCallBarringStatusCsStatus: NasCallBarringStatus | null, valueCallBarringStatusPsStatus: NasCallBarringStatus | null }
    getCdmaBaseStationInfo(): { returnType: boolean, valueCdmaBaseStationInfoBaseStationId: number | null, valueCdmaBaseStationInfoBaseStationLatitude: number | null, valueCdmaBaseStationInfoBaseStationLongitude: number | null }
    getCdmaPRev(): { returnType: boolean, valueCdmaPRev: number | null }
    getCdmaSystemId(): { returnType: boolean, valueCdmaSystemIdSid: number | null, valueCdmaSystemIdNid: number | null }
    getCdmaSystemInfo(): { returnType: boolean, valueCdmaSystemInfoMcc: number | null, valueCdmaSystemInfoImsi1112: number | null }
    getCid3gpp(): { returnType: boolean, valueCid3gpp: number | null }
    getConcurrentServiceInfo3gpp2(): { returnType: boolean, valueConcurrentServiceInfo3gpp2: boolean | null }
    getCurrentPlmn(): { returnType: boolean, valueCurrentPlmnMcc: number | null, valueCurrentPlmnMnc: number | null, valueCurrentPlmnDescription: string | null }
    getDataServiceCapability(): { returnType: boolean, valueDataServiceCapability: NasDataCapability[] | null }
    getDaylightSavingTimeAdjustment3gpp(): { returnType: boolean, valueDaylightSavingTimeAdjustment3gpp: number | null }
    getDefaultRoamingIndicator(): { returnType: boolean, valueDefaultRoamingIndicator: NasRoamingIndicatorStatus | null }
    getDetailedServiceStatus(): { returnType: boolean, valueDetailedServiceStatusStatus: NasServiceStatus | null, valueDetailedServiceStatusCapability: NasNetworkServiceDomain | null, valueDetailedServiceStatusHdrStatus: NasServiceStatus | null, valueDetailedServiceStatusHdrHybrid: boolean | null, valueDetailedServiceStatusForbidden: boolean | null }
    getDtmSupport(): { returnType: boolean, valueDtmSupport: boolean | null }
    getHdrPersonality(): { returnType: boolean, valueHdrPersonality: NasHdrPersonality | null }
    getLac3gpp(): { returnType: boolean, valueLac3gpp: number | null }
    getLteTac(): { returnType: boolean, valueLteTac: number | null }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatusMcc: number | null, valueMncPcsDigitIncludeStatusMnc: number | null, valueMncPcsDigitIncludeStatusIncludesPcsDigit: boolean | null }
    getNetworkNameSource(): { returnType: boolean, valueNetworkNameSource: NasNetworkNameSource | null }
    getPlmnNameFlag3gpp(): { returnType: boolean, valuePlmnNameFlag3gpp: boolean | null }
    getPlmnNotChangedIndication(): { returnType: boolean, valuePlmnNotChangedIndication: boolean | null }
    getPrlIndicator3gpp2(): { returnType: boolean, valuePrlIndicator3gpp2: boolean | null }
    getRoamingIndicator(): { returnType: boolean, valueRoamingIndicator: NasRoamingIndicatorStatus | null }
    getRoamingIndicatorList(): { returnType: boolean, valueRoamingIndicatorList: IndicationNasServingSystemOutputRoamingIndicatorListElement[] | null }
    getServingSystem(): { returnType: boolean, valueServingSystemRegistrationState: NasRegistrationState | null, valueServingSystemCsAttachState: NasAttachState | null, valueServingSystemPsAttachState: NasAttachState | null, valueServingSystemSelectedNetwork: NasNetworkType | null, valueServingSystemRadioInterfaces: NasRadioInterface[] | null }
    getTimeZone3gpp(): { returnType: boolean, valueTimeZone3gpp: number | null }
    getTimeZone3gpp2(): { returnType: boolean, valueTimeZone3gpp2LeapSeconds: number | null, valueTimeZone3gpp2LocalTimeOffset: number | null, valueTimeZone3gpp2DaylightSavingTime: boolean | null }
    getUmtsPrimaryScramblingCode(): { returnType: boolean, valueUmtsPrimaryScramblingCode: number | null }
    getUniversalTimeAndLocalTimeZone3gpp(): { returnType: boolean, valueUniversalTimeAndLocalTimeZone3gppYear: number | null, valueUniversalTimeAndLocalTimeZone3gppMonth: number | null, valueUniversalTimeAndLocalTimeZone3gppDay: number | null, valueUniversalTimeAndLocalTimeZone3gppHour: number | null, valueUniversalTimeAndLocalTimeZone3gppMinute: number | null, valueUniversalTimeAndLocalTimeZone3gppSecond: number | null, valueUniversalTimeAndLocalTimeZone3gppTimeZone: number | null }
    ref(): IndicationNasServingSystemOutput
    unref(): void
    static name: string
}
export class IndicationNasServingSystemOutputRoamingIndicatorListElement {
    /* Fields of Qmi-1.0.Qmi.IndicationNasServingSystemOutputRoamingIndicatorListElement */
    radioInterface: NasRadioInterface
    roamingIndicator: NasRoamingIndicatorStatus
    static name: string
}
export class IndicationNasSignalInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasSignalInfoOutput */
    get5gSignalStrength(): { returnType: boolean, value5gSignalStrengthRsrp: number | null, value5gSignalStrengthSnr: number | null }
    get5gSignalStrengthExtended(): { returnType: boolean, value5gSignalStrengthExtended: number | null }
    getCdmaSignalStrength(): { returnType: boolean, valueCdmaSignalStrengthRssi: number | null, valueCdmaSignalStrengthEcio: number | null }
    getGsmSignalStrength(): { returnType: boolean, valueGsmSignalStrength: number | null }
    getHdrSignalStrength(): { returnType: boolean, valueHdrSignalStrengthRssi: number | null, valueHdrSignalStrengthEcio: number | null, valueHdrSignalStrengthSinr: NasEvdoSinrLevel | null, valueHdrSignalStrengthIo: number | null }
    getLteSignalStrength(): { returnType: boolean, valueLteSignalStrengthRssi: number | null, valueLteSignalStrengthRsrq: number | null, valueLteSignalStrengthRsrp: number | null, valueLteSignalStrengthSnr: number | null }
    getTdmaSignalStrength(): { returnType: boolean, valueTdmaSignalStrength: number | null }
    getWcdmaSignalStrength(): { returnType: boolean, valueWcdmaSignalStrengthRssi: number | null, valueWcdmaSignalStrengthEcio: number | null }
    ref(): IndicationNasSignalInfoOutput
    unref(): void
    static name: string
}
export class IndicationNasSystemInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasSystemInfoOutput */
    getAdditionalCdmaSystemInfo(): { returnType: boolean, valueAdditionalCdmaSystemInfoGeoSystemIndex: number | null, valueAdditionalCdmaSystemInfoRegistrationPeriod: number | null }
    getAdditionalGsmSystemInfo(): { returnType: boolean, valueAdditionalGsmSystemInfoGeoSystemIndex: number | null, valueAdditionalGsmSystemInfoCellBroadcastSupport: NasCellBroadcastCapability | null }
    getAdditionalHdrSystemInfo(): { returnType: boolean, valueAdditionalHdrSystemInfoGeoSystemIndex: number | null }
    getAdditionalLteSystemInfo(): { returnType: boolean, valueAdditionalLteSystemInfoGeoSystemIndex: number | null }
    getAdditionalWcdmaSystemInfo(): { returnType: boolean, valueAdditionalWcdmaSystemInfoGeoSystemIndex: number | null, valueAdditionalWcdmaSystemInfoCellBroadcastSupport: NasCellBroadcastCapability | null }
    getCdmaServiceStatus(): { returnType: boolean, valueCdmaServiceStatusServiceStatus: NasServiceStatus | null, valueCdmaServiceStatusPreferredDataPath: boolean | null }
    getCdmaSystemInfo(): { returnType: boolean, valueCdmaSystemInfoDomainValid: boolean | null, valueCdmaSystemInfoDomain: NasNetworkServiceDomain | null, valueCdmaSystemInfoServiceCapabilityValid: boolean | null, valueCdmaSystemInfoServiceCapability: NasNetworkServiceDomain | null, valueCdmaSystemInfoRoamingStatusValid: boolean | null, valueCdmaSystemInfoRoamingStatus: NasRoamingStatus | null, valueCdmaSystemInfoForbiddenValid: boolean | null, valueCdmaSystemInfoForbidden: boolean | null, valueCdmaSystemInfoPrlMatchValid: boolean | null, valueCdmaSystemInfoPrlMatch: boolean | null, valueCdmaSystemInfoPRevValid: boolean | null, valueCdmaSystemInfoPRev: number | null, valueCdmaSystemInfoBaseStationPRevValid: boolean | null, valueCdmaSystemInfoBaseStationPRev: number | null, valueCdmaSystemInfoConcurrentServiceSupportValid: boolean | null, valueCdmaSystemInfoConcurrentServiceSupport: boolean | null, valueCdmaSystemInfoCdmaSystemIdValid: boolean | null, valueCdmaSystemInfoSid: number | null, valueCdmaSystemInfoNid: number | null, valueCdmaSystemInfoBaseStationInfoValid: boolean | null, valueCdmaSystemInfoBaseStationId: number | null, valueCdmaSystemInfoBaseStationLatitude: number | null, valueCdmaSystemInfoBaseStationLongitude: number | null, valueCdmaSystemInfoPacketZoneValid: boolean | null, valueCdmaSystemInfoPacketZone: number | null, valueCdmaSystemInfoNetworkIdValid: boolean | null, valueCdmaSystemInfoMcc: string | null, valueCdmaSystemInfoMnc: string | null }
    getDcnrRestrictionInfo(): { returnType: boolean, valueDcnrRestrictionInfo: boolean | null }
    getEutraWithNr5gAvailability(): { returnType: boolean, valueEutraWithNr5gAvailability: boolean | null }
    getGsmCallBarringStatus(): { returnType: boolean, valueGsmCallBarringStatusCsStatus: NasCallBarringStatus | null, valueGsmCallBarringStatusPsStatus: NasCallBarringStatus | null }
    getGsmCipherDomain(): { returnType: boolean, valueGsmCipherDomain: NasNetworkServiceDomain | null }
    getGsmServiceStatus(): { returnType: boolean, valueGsmServiceStatusServiceStatus: NasServiceStatus | null, valueGsmServiceStatusTrueServiceStatus: NasServiceStatus | null, valueGsmServiceStatusPreferredDataPath: boolean | null }
    getGsmSystemInfoV2(): { returnType: boolean, valueGsmSystemInfoV2DomainValid: boolean | null, valueGsmSystemInfoV2Domain: NasNetworkServiceDomain | null, valueGsmSystemInfoV2ServiceCapabilityValid: boolean | null, valueGsmSystemInfoV2ServiceCapability: NasNetworkServiceDomain | null, valueGsmSystemInfoV2RoamingStatusValid: boolean | null, valueGsmSystemInfoV2RoamingStatus: NasRoamingStatus | null, valueGsmSystemInfoV2ForbiddenValid: boolean | null, valueGsmSystemInfoV2Forbidden: boolean | null, valueGsmSystemInfoV2LacValid: boolean | null, valueGsmSystemInfoV2Lac: number | null, valueGsmSystemInfoV2CidValid: boolean | null, valueGsmSystemInfoV2Cid: number | null, valueGsmSystemInfoV2RegistrationRejectInfoValid: boolean | null, valueGsmSystemInfoV2RegistrationRejectDomain: NasNetworkServiceDomain | null, valueGsmSystemInfoV2RegistrationRejectCause: NasRejectCause | null, valueGsmSystemInfoV2NetworkIdValid: boolean | null, valueGsmSystemInfoV2Mcc: string | null, valueGsmSystemInfoV2Mnc: string | null, valueGsmSystemInfoV2EgprsSupportValid: boolean | null, valueGsmSystemInfoV2EgprsSupport: boolean | null, valueGsmSystemInfoV2DtmSupportValid: boolean | null, valueGsmSystemInfoV2DtmSupport: boolean | null }
    getHdrServiceStatus(): { returnType: boolean, valueHdrServiceStatusServiceStatus: NasServiceStatus | null, valueHdrServiceStatusPreferredDataPath: boolean | null }
    getHdrSystemInfo(): { returnType: boolean, valueHdrSystemInfoDomainValid: boolean | null, valueHdrSystemInfoDomain: NasNetworkServiceDomain | null, valueHdrSystemInfoServiceCapabilityValid: boolean | null, valueHdrSystemInfoServiceCapability: NasNetworkServiceDomain | null, valueHdrSystemInfoRoamingStatusValid: boolean | null, valueHdrSystemInfoRoamingStatus: NasRoamingStatus | null, valueHdrSystemInfoForbiddenValid: boolean | null, valueHdrSystemInfoForbidden: boolean | null, valueHdrSystemInfoPrlMatchValid: boolean | null, valueHdrSystemInfoPrlMatch: boolean | null, valueHdrSystemInfoPersonalityValid: boolean | null, valueHdrSystemInfoPersonality: NasHdrPersonality | null, valueHdrSystemInfoProtocolRevisionValid: boolean | null, valueHdrSystemInfoProtocolRevision: NasHdrProtocolRevision | null, valueHdrSystemInfoIs856SystemIdValid: boolean | null, valueHdrSystemInfoIs856SystemId: string | null }
    getLteEmbmsCoverageInfoSupport(): { returnType: boolean, valueLteEmbmsCoverageInfoSupport: boolean | null }
    getLteServiceStatus(): { returnType: boolean, valueLteServiceStatusServiceStatus: NasServiceStatus | null, valueLteServiceStatusTrueServiceStatus: NasServiceStatus | null, valueLteServiceStatusPreferredDataPath: boolean | null }
    getLteSystemInfoV2(): { returnType: boolean, valueLteSystemInfoV2DomainValid: boolean | null, valueLteSystemInfoV2Domain: NasNetworkServiceDomain | null, valueLteSystemInfoV2ServiceCapabilityValid: boolean | null, valueLteSystemInfoV2ServiceCapability: NasNetworkServiceDomain | null, valueLteSystemInfoV2RoamingStatusValid: boolean | null, valueLteSystemInfoV2RoamingStatus: NasRoamingStatus | null, valueLteSystemInfoV2ForbiddenValid: boolean | null, valueLteSystemInfoV2Forbidden: boolean | null, valueLteSystemInfoV2LacValid: boolean | null, valueLteSystemInfoV2Lac: number | null, valueLteSystemInfoV2CidValid: boolean | null, valueLteSystemInfoV2Cid: number | null, valueLteSystemInfoV2RegistrationRejectInfoValid: boolean | null, valueLteSystemInfoV2RegistrationRejectDomain: NasNetworkServiceDomain | null, valueLteSystemInfoV2RegistrationRejectCause: NasRejectCause | null, valueLteSystemInfoV2NetworkIdValid: boolean | null, valueLteSystemInfoV2Mcc: string | null, valueLteSystemInfoV2Mnc: string | null, valueLteSystemInfoV2TacValid: boolean | null, valueLteSystemInfoV2Tac: number | null }
    getLteVoiceSupport(): { returnType: boolean, valueLteVoiceSupport: boolean | null }
    getNr5gServiceStatusInfo(): { returnType: boolean, valueNr5gServiceStatusInfoServiceStatus: NasServiceStatus | null, valueNr5gServiceStatusInfoTrueServiceStatus: NasServiceStatus | null, valueNr5gServiceStatusInfoPreferredDataPath: boolean | null }
    getNr5gSystemInfo(): { returnType: boolean, valueNr5gSystemInfoDomainValid: boolean | null, valueNr5gSystemInfoDomain: NasNetworkServiceDomain | null, valueNr5gSystemInfoServiceCapabilityValid: boolean | null, valueNr5gSystemInfoServiceCapability: NasNetworkServiceDomain | null, valueNr5gSystemInfoRoamingStatusValid: boolean | null, valueNr5gSystemInfoRoamingStatus: NasRoamingStatus | null, valueNr5gSystemInfoForbiddenValid: boolean | null, valueNr5gSystemInfoForbidden: boolean | null, valueNr5gSystemInfoLacValid: boolean | null, valueNr5gSystemInfoLac: number | null, valueNr5gSystemInfoCidValid: boolean | null, valueNr5gSystemInfoCid: number | null, valueNr5gSystemInfoRegistrationRejectInfoValid: boolean | null, valueNr5gSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain | null, valueNr5gSystemInfoRegistrationRejectCause: number | null, valueNr5gSystemInfoNetworkIdValid: boolean | null, valueNr5gSystemInfoMcc: string | null, valueNr5gSystemInfoMnc: string | null, valueNr5gSystemInfoTacValid: boolean | null, valueNr5gSystemInfoTac: number | null }
    getNr5gTrackingAreaCode(): { returnType: boolean, valueNr5gTrackingAreaCode: any[] | null }
    getPlmnNotChangedIndication(): { returnType: boolean, valuePlmnNotChangedIndication: boolean | null }
    getSimRejectInfo(): { returnType: boolean, valueSimRejectInfo: NasSimRejectState | null }
    getTdScdmaServiceStatus(): { returnType: boolean, valueTdScdmaServiceStatusServiceStatus: NasServiceStatus | null, valueTdScdmaServiceStatusTrueServiceStatus: NasServiceStatus | null, valueTdScdmaServiceStatusPreferredDataPath: boolean | null }
    getTdScmaSystemInfoV2(): { returnType: boolean, valueTdScmaSystemInfoV2DomainValid: boolean | null, valueTdScmaSystemInfoV2Domain: NasNetworkServiceDomain | null, valueTdScmaSystemInfoV2ServiceCapabilityValid: boolean | null, valueTdScmaSystemInfoV2ServiceCapability: NasNetworkServiceDomain | null, valueTdScmaSystemInfoV2RoamingStatusValid: boolean | null, valueTdScmaSystemInfoV2RoamingStatus: NasRoamingStatus | null, valueTdScmaSystemInfoV2ForbiddenValid: boolean | null, valueTdScmaSystemInfoV2Forbidden: boolean | null, valueTdScmaSystemInfoV2LacValid: boolean | null, valueTdScmaSystemInfoV2Lac: number | null, valueTdScmaSystemInfoV2CidValid: boolean | null, valueTdScmaSystemInfoV2Cid: number | null, valueTdScmaSystemInfoV2RegistrationRejectInfoValid: boolean | null, valueTdScmaSystemInfoV2RegistrationRejectDomain: NasNetworkServiceDomain | null, valueTdScmaSystemInfoV2RegistrationRejectCause: NasRejectCause | null, valueTdScmaSystemInfoV2NetworkIdValid: boolean | null, valueTdScmaSystemInfoV2Mcc: string | null, valueTdScmaSystemInfoV2Mnc: string | null, valueTdScmaSystemInfoV2HsCallStatusValid: boolean | null, valueTdScmaSystemInfoV2HsCallStatus: NasWcdmaHsService | null, valueTdScmaSystemInfoV2HsServiceValid: boolean | null, valueTdScmaSystemInfoV2HsService: NasWcdmaHsService | null, valueTdScmaSystemInfoV2CellParameterIdValid: boolean | null, valueTdScmaSystemInfoV2CellParameterId: number | null, valueTdScmaSystemInfoV2CellBroadcastSupportValid: boolean | null, valueTdScmaSystemInfoV2CellBroadcastSupport: NasCellBroadcastCapability | null, valueTdScmaSystemInfoV2CsCallBarringStatusValid: boolean | null, valueTdScmaSystemInfoV2CsCallBarringStatus: NasCallBarringStatus | null, valueTdScmaSystemInfoV2PsCallBarringStatusValid: boolean | null, valueTdScmaSystemInfoV2PsCallBarringStatus: NasCallBarringStatus | null, valueTdScmaSystemInfoV2CipherDomainValid: boolean | null, valueTdScmaSystemInfoV2CipherDomain: NasNetworkServiceDomain | null }
    getWcdmaCallBarringStatus(): { returnType: boolean, valueWcdmaCallBarringStatusCsStatus: NasCallBarringStatus | null, valueWcdmaCallBarringStatusPsStatus: NasCallBarringStatus | null }
    getWcdmaCipherDomain(): { returnType: boolean, valueWcdmaCipherDomain: NasNetworkServiceDomain | null }
    getWcdmaServiceStatus(): { returnType: boolean, valueWcdmaServiceStatusServiceStatus: NasServiceStatus | null, valueWcdmaServiceStatusTrueServiceStatus: NasServiceStatus | null, valueWcdmaServiceStatusPreferredDataPath: boolean | null }
    getWcdmaSystemInfoV2(): { returnType: boolean, valueWcdmaSystemInfoV2DomainValid: boolean | null, valueWcdmaSystemInfoV2Domain: NasNetworkServiceDomain | null, valueWcdmaSystemInfoV2ServiceCapabilityValid: boolean | null, valueWcdmaSystemInfoV2ServiceCapability: NasNetworkServiceDomain | null, valueWcdmaSystemInfoV2RoamingStatusValid: boolean | null, valueWcdmaSystemInfoV2RoamingStatus: NasRoamingStatus | null, valueWcdmaSystemInfoV2ForbiddenValid: boolean | null, valueWcdmaSystemInfoV2Forbidden: boolean | null, valueWcdmaSystemInfoV2LacValid: boolean | null, valueWcdmaSystemInfoV2Lac: number | null, valueWcdmaSystemInfoV2CidValid: boolean | null, valueWcdmaSystemInfoV2Cid: number | null, valueWcdmaSystemInfoV2RegistrationRejectInfoValid: boolean | null, valueWcdmaSystemInfoV2RegistrationRejectDomain: NasNetworkServiceDomain | null, valueWcdmaSystemInfoV2RegistrationRejectCause: NasRejectCause | null, valueWcdmaSystemInfoV2NetworkIdValid: boolean | null, valueWcdmaSystemInfoV2Mcc: string | null, valueWcdmaSystemInfoV2Mnc: string | null, valueWcdmaSystemInfoV2HsCallStatusValid: boolean | null, valueWcdmaSystemInfoV2HsCallStatus: NasWcdmaHsService | null, valueWcdmaSystemInfoV2HsServiceValid: boolean | null, valueWcdmaSystemInfoV2HsService: NasWcdmaHsService | null, valueWcdmaSystemInfoV2PrimaryScramblingCodeValid: boolean | null, valueWcdmaSystemInfoV2PrimaryScramblingCode: number | null }
    ref(): IndicationNasSystemInfoOutput
    unref(): void
    static name: string
}
export class IndicationOmaEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationOmaEventReportOutput */
    getNetworkInitiatedAlert(): { returnType: boolean, valueNetworkInitiatedAlertSessionType: OmaSessionType | null, valueNetworkInitiatedAlertSessionId: number | null }
    getSessionFailReason(): { returnType: boolean, valueSessionFailReason: OmaSessionFailedReason | null }
    getSessionState(): { returnType: boolean, valueSessionState: OmaSessionState | null }
    ref(): IndicationOmaEventReportOutput
    unref(): void
    static name: string
}
export class IndicationPdcActivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcActivateConfigOutput */
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): IndicationPdcActivateConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcDeactivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcDeactivateConfigOutput */
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): IndicationPdcDeactivateConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcGetConfigInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcGetConfigInfoOutput */
    getDescription(): { returnType: boolean, valueDescription: string | null }
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    getTotalSize(): { returnType: boolean, valueTotalSize: number | null }
    getVersion(): { returnType: boolean, valueVersion: number | null }
    ref(): IndicationPdcGetConfigInfoOutput
    unref(): void
    static name: string
}
export class IndicationPdcGetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcGetSelectedConfigOutput */
    getActiveId(): { returnType: boolean, valueActiveId: any[] | null }
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number | null }
    getPendingId(): { returnType: boolean, valuePendingId: any[] | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): IndicationPdcGetSelectedConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcListConfigsOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcListConfigsOutput */
    getConfigs(): { returnType: boolean, valueConfigs: IndicationPdcListConfigsOutputConfigsElement[] | null }
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): IndicationPdcListConfigsOutput
    unref(): void
    static name: string
}
export class IndicationPdcListConfigsOutputConfigsElement {
    /* Fields of Qmi-1.0.Qmi.IndicationPdcListConfigsOutputConfigsElement */
    configType: PdcConfigurationType
    id: object[]
    static name: string
}
export class IndicationPdcLoadConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcLoadConfigOutput */
    getFrameReset(): { returnType: boolean, valueFrameReset: boolean | null }
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number | null }
    getReceived(): { returnType: boolean, valueReceived: number | null }
    getRemainingSize(): { returnType: boolean, valueRemainingSize: number | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): IndicationPdcLoadConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcRefreshOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcRefreshOutput */
    getRefreshEvent(): { returnType: boolean, valueRefreshEvent: PdcRefreshEventType | null }
    getSlotId(): { returnType: boolean, valueSlotId: number | null }
    getSubscriptionId(): { returnType: boolean, valueSubscriptionId: number | null }
    ref(): IndicationPdcRefreshOutput
    unref(): void
    static name: string
}
export class IndicationPdcSetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcSetSelectedConfigOutput */
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): IndicationPdcSetSelectedConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdsEventReportOutput */
    getExtendedNmeaPosition(): { returnType: boolean, valueExtendedNmeaPositionOperationMode: PdsOperationMode | null, valueExtendedNmeaPositionNmea: string | null }
    getNmeaPosition(): { returnType: boolean, valueNmeaPosition: string | null }
    getPositionSessionStatus(): { returnType: boolean, valuePositionSessionStatus: PdsPositionSessionStatus | null }
    ref(): IndicationPdsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationQosFlowStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationQosFlowStatusOutput */
    getValue(): { returnType: boolean, valueValueQosId: number | null, valueValueStatus: QosStatus | null, valueValueEvent: QosEvent | null }
    ref(): IndicationQosFlowStatusOutput
    unref(): void
    static name: string
}
export class IndicationQosNetworkStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationQosNetworkStatusOutput */
    getQosSupported(): { returnType: boolean, valueQosSupported: boolean | null }
    ref(): IndicationQosNetworkStatusOutput
    unref(): void
    static name: string
}
export class IndicationUimCardStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationUimCardStatusOutput */
    getCardStatus(): { returnType: boolean, valueCardStatusIndexGwPrimary: number | null, valueCardStatusIndex1xPrimary: number | null, valueCardStatusIndexGwSecondary: number | null, valueCardStatusIndex1xSecondary: number | null, valueCardStatusCards: IndicationUimCardStatusOutputCardStatusCardsElement[] | null }
    ref(): IndicationUimCardStatusOutput
    unref(): void
    static name: string
}
export class IndicationUimCardStatusOutputCardStatusCardsElement {
    /* Fields of Qmi-1.0.Qmi.IndicationUimCardStatusOutputCardStatusCardsElement */
    cardState: UimCardState
    upinState: UimPinState
    upinRetries: number
    upukRetries: number
    errorCode: UimCardError
    applications: object[]
    static name: string
}
export class IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement {
    /* Fields of Qmi-1.0.Qmi.IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement */
    type: UimCardApplicationType
    state: UimCardApplicationState
    personalizationState: UimCardApplicationPersonalizationState
    personalizationFeature: UimCardApplicationPersonalizationFeature
    personalizationRetries: number
    personalizationUnblockRetries: number
    applicationIdentifierValue: object[]
    upinReplacesPin1: boolean
    pin1State: UimPinState
    pin1Retries: number
    puk1Retries: number
    pin2State: UimPinState
    pin2Retries: number
    puk2Retries: number
    static name: string
}
export class IndicationUimRefreshOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationUimRefreshOutput */
    getEvent(): { returnType: boolean, valueEventStage: UimRefreshStage | null, valueEventMode: UimRefreshMode | null, valueEventSessionType: UimSessionType | null, valueEventApplicationIdentifier: any[] | null, valueEventFiles: IndicationUimRefreshOutputEventFilesElement[] | null }
    ref(): IndicationUimRefreshOutput
    unref(): void
    static name: string
}
export class IndicationUimRefreshOutputEventFilesElement {
    /* Fields of Qmi-1.0.Qmi.IndicationUimRefreshOutputEventFilesElement */
    fileId: number
    path: object[]
    static name: string
}
export class IndicationUimSlotStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationUimSlotStatusOutput */
    getPhysicalSlotInformation(): { returnType: boolean, valuePhysicalSlotInformation: PhysicalSlotInformationSlot[] | null }
    getPhysicalSlotStatus(): { returnType: boolean, valuePhysicalSlotStatus: PhysicalSlotStatusSlot[] | null }
    getSlotEidInformation(): { returnType: boolean, valueSlotEidInformation: any[] | null }
    ref(): IndicationUimSlotStatusOutput
    unref(): void
    static name: string
}
export class IndicationVoiceAllCallStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceAllCallStatusOutput */
    getCallInformation(): { returnType: boolean, valueCallInformation: IndicationVoiceAllCallStatusOutputCallInformationCall[] | null }
    getRemotePartyNumber(): { returnType: boolean, valueRemotePartyNumber: IndicationVoiceAllCallStatusOutputRemotePartyNumberCall[] | null }
    ref(): IndicationVoiceAllCallStatusOutput
    unref(): void
    static name: string
}
export class IndicationVoiceAllCallStatusOutputCallInformationCall {
    /* Fields of Qmi-1.0.Qmi.IndicationVoiceAllCallStatusOutputCallInformationCall */
    id: number
    state: VoiceCallState
    type: VoiceCallType
    direction: VoiceCallDirection
    mode: VoiceCallMode
    multipartIndicator: boolean
    als: VoiceAls
    static name: string
}
export class IndicationVoiceAllCallStatusOutputRemotePartyNumberCall {
    /* Fields of Qmi-1.0.Qmi.IndicationVoiceAllCallStatusOutputRemotePartyNumberCall */
    id: number
    presentationIndicator: VoicePresentation
    type: string
    static name: string
}
export class IndicationVoiceOriginateUssdNoWaitOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceOriginateUssdNoWaitOutput */
    getAlphaIdentifier(): { returnType: boolean, valueAlphaIdentifierDataCodingScheme: VoiceAlphaDataCodingScheme | null, valueAlphaIdentifierAlpha: any[] | null }
    getErrorCode(): { returnType: boolean, valueErrorCode: number | null }
    getFailureCause(): { returnType: boolean, valueFailureCause: VoiceCallEndReason | null }
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme | null, valueUssDataData: any[] | null }
    getUssDataUtf16(): { returnType: boolean, valueUssDataUtf16: number[] | null }
    ref(): IndicationVoiceOriginateUssdNoWaitOutput
    unref(): void
    static name: string
}
export class IndicationVoiceSupplementaryServiceOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceSupplementaryServiceOutput */
    getInfo(): { returnType: boolean, valueInfoCallId: number | null, valueInfoNotificationType: VoiceSupplementaryServiceNotificationType | null }
    ref(): IndicationVoiceSupplementaryServiceOutput
    unref(): void
    static name: string
}
export class IndicationVoiceUssdOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceUssdOutput */
    getUserAction(): { returnType: boolean, valueUserAction: VoiceUserAction | null }
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme | null, valueUssDataData: any[] | null }
    getUssDataUtf16(): { returnType: boolean, valueUssDataUtf16: number[] | null }
    ref(): IndicationVoiceUssdOutput
    unref(): void
    static name: string
}
export class IndicationWdsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWdsEventReportOutput */
    getChannelRates(): { returnType: boolean, valueChannelRatesTxRateBps: number | null, valueChannelRatesRxRateBps: number | null }
    getCurrentDataBearerTechnology(): { returnType: boolean, valueCurrentDataBearerTechnologyNetworkType: WdsNetworkType | null, valueCurrentDataBearerTechnologyRatMask: number | null, valueCurrentDataBearerTechnologySoMask: number | null }
    getDataBearerTechnology(): { returnType: boolean, valueDataBearerTechnology: WdsDataBearerTechnology | null }
    getDataCallAddressFamily(): { returnType: boolean, valueDataCallAddressFamily: WdsIpFamily | null }
    getDataCallStatus(): { returnType: boolean, valueDataCallStatus: WdsDataCallStatus | null }
    getDataCallType(): { returnType: boolean, valueDataCallTypeDataCallType: WdsDataCallType | null, valueDataCallTypeTetheredCallType: WdsTetheredCallType | null }
    getDataSystems(): { returnType: boolean, valueDataSystemsPreferredNetworkType: WdsDataSystemNetworkType | null, valueDataSystemsNetworks: IndicationWdsEventReportOutputDataSystemsNetworksNetwork[] | null }
    getDormancyStatus(): { returnType: boolean, valueDormancyStatus: WdsDormancyStatus | null }
    getEvdoPageMonitorPeriodChange(): { returnType: boolean, valueEvdoPageMonitorPeriodChangePeriodChange: number | null, valueEvdoPageMonitorPeriodChangeForceLongSleep: boolean | null }
    getExtendedDataBearerTechnology(): { returnType: boolean, valueExtendedDataBearerTechnologyDataBearerTechnology: WdsDataSystemNetworkType | null, valueExtendedDataBearerTechnologyRadioAccessTechnology: WdsRadioAccessTechnology | null, valueExtendedDataBearerTechnologyExtendedDataBearerTechnology3gpp: WdsExtendedDataBearerTechnology3gpp | null, valueExtendedDataBearerTechnologyExtendedDataBearerTechnology3gpp2: WdsExtendedDataBearerTechnology3gpp2 | null }
    getMipStatus(): { returnType: boolean, valueMipStatus: boolean | null }
    getPdnFiltersRemoved(): { returnType: boolean, valuePdnFiltersRemovedPdnFilterHandler: number[] | null }
    getPreferredDataSystem(): { returnType: boolean, valuePreferredDataSystem: WdsDataSystem | null }
    getRxBytesOk(): { returnType: boolean, valueRxBytesOk: number | null }
    getRxOverflows(): { returnType: boolean, valueRxOverflows: number | null }
    getRxPacketsDropped(): { returnType: boolean, valueRxPacketsDropped: number | null }
    getRxPacketsError(): { returnType: boolean, valueRxPacketsError: number | null }
    getRxPacketsOk(): { returnType: boolean, valueRxPacketsOk: number | null }
    getTxBytesOk(): { returnType: boolean, valueTxBytesOk: number | null }
    getTxOverflows(): { returnType: boolean, valueTxOverflows: number | null }
    getTxPacketsDropped(): { returnType: boolean, valueTxPacketsDropped: number | null }
    getTxPacketsError(): { returnType: boolean, valueTxPacketsError: number | null }
    getTxPacketsOk(): { returnType: boolean, valueTxPacketsOk: number | null }
    getUplinkFlowControlEnabled(): { returnType: boolean, valueUplinkFlowControlEnabled: boolean | null }
    ref(): IndicationWdsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationWdsEventReportOutputDataSystemsNetworksNetwork {
    /* Fields of Qmi-1.0.Qmi.IndicationWdsEventReportOutputDataSystemsNetworksNetwork */
    networkType: WdsDataSystemNetworkType
    ratMask: number
    soMask: number
    static name: string
}
export class IndicationWdsPacketServiceStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWdsPacketServiceStatusOutput */
    getCallEndReason(): { returnType: boolean, valueCallEndReason: WdsCallEndReason | null }
    getConnectionStatus(): { returnType: boolean, valueConnectionStatusStatus: WdsConnectionStatus | null, valueConnectionStatusReconfigurationRequired: boolean | null }
    getExtendedTechnologyPreference(): { returnType: boolean, valueExtendedTechnologyPreference: WdsExtendedTechnologyPreference | null }
    getIpFamily(): { returnType: boolean, valueIpFamily: WdsIpFamily | null }
    getVerboseCallEndReason(): { returnType: boolean, valueVerboseCallEndReasonType: WdsVerboseCallEndReasonType | null, valueVerboseCallEndReasonReason: number | null }
    ref(): IndicationWdsPacketServiceStatusOutput
    unref(): void
    static name: string
}
export class IndicationWdsSetLteAttachPdnListOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWdsSetLteAttachPdnListOutput */
    getActionResult(): { returnType: boolean, valueActionResult: boolean | null }
    getResult(): boolean
    ref(): IndicationWdsSetLteAttachPdnListOutput
    unref(): void
    static name: string
}
export class IndicationWmsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWmsEventReportOutput */
    getEtwsMessage(): { returnType: boolean, valueEtwsMessageNotificationType: WmsNotificationType | null, valueEtwsMessageRawData: any[] | null }
    getEtwsPlmnInformation(): { returnType: boolean, valueEtwsPlmnInformationMcc: number | null, valueEtwsPlmnInformationMnc: number | null }
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode | null }
    getMtMessage(): { returnType: boolean, valueMtMessageStorageType: WmsStorageType | null, valueMtMessageMemoryIndex: number | null }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean | null }
    getSmscAddress(): { returnType: boolean, valueSmscAddress: string | null }
    getTransferRouteMtMessage(): { returnType: boolean, valueTransferRouteMtMessageAckIndicator: WmsAckIndicator | null, valueTransferRouteMtMessageTransactionId: number | null, valueTransferRouteMtMessageFormat: WmsMessageFormat | null, valueTransferRouteMtMessageRawData: any[] | null }
    ref(): IndicationWmsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationWmsSmscAddressOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWmsSmscAddressOutput */
    getAddress(): { returnType: boolean, valueAddressType: string | null, valueAddressDigits: string | null }
    ref(): IndicationWmsSmscAddressOutput
    unref(): void
    static name: string
}
export class MessageContext {
    /* Methods of Qmi-1.0.Qmi.MessageContext */
    getVendorId(): number
    ref(): MessageContext
    setVendorId(vendorId: number): void
    unref(): void
    static name: string
    static new(): MessageContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageContext
}
export class MessageCtlAllocateCidInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlAllocateCidInput */
    getService(): { returnType: boolean, valueService: Service | null }
    ref(): MessageCtlAllocateCidInput
    setService(valueService: Service): boolean
    unref(): void
    static name: string
    static new(): MessageCtlAllocateCidInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlAllocateCidInput
}
export class MessageCtlAllocateCidOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlAllocateCidOutput */
    getAllocationInfo(): { returnType: boolean, valueAllocationInfoService: Service | null, valueAllocationInfoCid: number | null }
    getResult(): boolean
    ref(): MessageCtlAllocateCidOutput
    unref(): void
    static name: string
}
export class MessageCtlGetVersionInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlGetVersionInfoOutput */
    getResult(): boolean
    getServiceList(): { returnType: boolean, valueServiceList: MessageCtlGetVersionInfoOutputServiceListService[] | null }
    ref(): MessageCtlGetVersionInfoOutput
    unref(): void
    static name: string
}
export class MessageCtlGetVersionInfoOutputServiceListService {
    /* Fields of Qmi-1.0.Qmi.MessageCtlGetVersionInfoOutputServiceListService */
    service: Service
    majorVersion: number
    minorVersion: number
    static name: string
}
export class MessageCtlInternalProxyOpenInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlInternalProxyOpenInput */
    getDevicePath(): { returnType: boolean, valueDevicePath: string | null }
    ref(): MessageCtlInternalProxyOpenInput
    setDevicePath(valueDevicePath: string): boolean
    unref(): void
    static name: string
    static new(): MessageCtlInternalProxyOpenInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlInternalProxyOpenInput
}
export class MessageCtlInternalProxyOpenOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlInternalProxyOpenOutput */
    getResult(): boolean
    ref(): MessageCtlInternalProxyOpenOutput
    unref(): void
    static name: string
}
export class MessageCtlReleaseCidInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlReleaseCidInput */
    getReleaseInfo(): { returnType: boolean, valueReleaseInfoService: Service | null, valueReleaseInfoCid: number | null }
    ref(): MessageCtlReleaseCidInput
    setReleaseInfo(valueReleaseInfoService: Service, valueReleaseInfoCid: number): boolean
    unref(): void
    static name: string
    static new(): MessageCtlReleaseCidInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlReleaseCidInput
}
export class MessageCtlReleaseCidOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlReleaseCidOutput */
    getReleaseInfo(): { returnType: boolean, valueReleaseInfoService: Service | null, valueReleaseInfoCid: number | null }
    getResult(): boolean
    ref(): MessageCtlReleaseCidOutput
    unref(): void
    static name: string
}
export class MessageCtlSetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetDataFormatInput */
    getFormat(): { returnType: boolean, valueFormat: CtlDataFormat | null }
    getProtocol(): { returnType: boolean, valueProtocol: CtlDataLinkProtocol | null }
    ref(): MessageCtlSetDataFormatInput
    setFormat(valueFormat: CtlDataFormat): boolean
    setProtocol(valueProtocol: CtlDataLinkProtocol): boolean
    unref(): void
    static name: string
    static new(): MessageCtlSetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlSetDataFormatInput
}
export class MessageCtlSetDataFormatOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetDataFormatOutput */
    getProtocol(): { returnType: boolean, valueProtocol: CtlDataLinkProtocol | null }
    getResult(): boolean
    ref(): MessageCtlSetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageCtlSetInstanceIdInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetInstanceIdInput */
    getId(): { returnType: boolean, valueId: number | null }
    ref(): MessageCtlSetInstanceIdInput
    setId(valueId: number): boolean
    unref(): void
    static name: string
    static new(): MessageCtlSetInstanceIdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlSetInstanceIdInput
}
export class MessageCtlSetInstanceIdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetInstanceIdOutput */
    getLinkId(): { returnType: boolean, valueLinkId: number | null }
    getResult(): boolean
    ref(): MessageCtlSetInstanceIdOutput
    unref(): void
    static name: string
}
export class MessageCtlSyncOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSyncOutput */
    getResult(): boolean
    ref(): MessageCtlSyncOutput
    unref(): void
    static name: string
}
export class MessageDmsActivateAutomaticInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsActivateAutomaticInput */
    getActivationCode(): { returnType: boolean, valueActivationCode: string | null }
    ref(): MessageDmsActivateAutomaticInput
    setActivationCode(valueActivationCode: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsActivateAutomaticInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsActivateAutomaticInput
}
export class MessageDmsActivateAutomaticOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsActivateAutomaticOutput */
    getResult(): boolean
    ref(): MessageDmsActivateAutomaticOutput
    unref(): void
    static name: string
}
export class MessageDmsActivateManualInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsActivateManualInput */
    getInfo(): { returnType: boolean, valueInfoServiceProgrammingCode: string | null, valueInfoSystemIdentificationNumber: number | null, valueInfoMobileDirectoryNumber: string | null, valueInfoMobileIdentificationNumber: string | null }
    getMnAaaKey(): { returnType: boolean, valueMnAaaKey: string | null }
    getMnHaKey(): { returnType: boolean, valueMnHaKey: string | null }
    getPrl(): { returnType: boolean, valuePrlPrlTotalLength: number | null, valuePrlPrlSegmentSequence: number | null, valuePrlPrlSegment: any[] | null }
    ref(): MessageDmsActivateManualInput
    setInfo(valueInfoServiceProgrammingCode: string, valueInfoSystemIdentificationNumber: number, valueInfoMobileDirectoryNumber: string, valueInfoMobileIdentificationNumber: string): boolean
    setMnAaaKey(valueMnAaaKey: string): boolean
    setMnHaKey(valueMnHaKey: string): boolean
    setPrl(valuePrlPrlTotalLength: number, valuePrlPrlSegmentSequence: number, valuePrlPrlSegment: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageDmsActivateManualInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsActivateManualInput
}
export class MessageDmsActivateManualOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsActivateManualOutput */
    getResult(): boolean
    ref(): MessageDmsActivateManualOutput
    unref(): void
    static name: string
}
export class MessageDmsDeleteStoredImageInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsDeleteStoredImageInput */
    getImage(): { returnType: boolean, valueImage: MessageDmsDeleteStoredImageInputImage | null }
    ref(): MessageDmsDeleteStoredImageInput
    setImage(valueImage: MessageDmsDeleteStoredImageInputImage): boolean
    unref(): void
    static name: string
    static new(): MessageDmsDeleteStoredImageInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsDeleteStoredImageInput
}
export class MessageDmsDeleteStoredImageInputImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsDeleteStoredImageInputImage */
    type: DmsFirmwareImageType
    uniqueId: object[]
    buildId: string
    static name: string
}
export class MessageDmsDeleteStoredImageOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsDeleteStoredImageOutput */
    getResult(): boolean
    ref(): MessageDmsDeleteStoredImageOutput
    unref(): void
    static name: string
}
export class MessageDmsFoxconnChangeDeviceModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnChangeDeviceModeInput */
    getMode(): { returnType: boolean, valueMode: DmsFoxconnDeviceMode | null }
    ref(): MessageDmsFoxconnChangeDeviceModeInput
    setMode(valueMode: DmsFoxconnDeviceMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsFoxconnChangeDeviceModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsFoxconnChangeDeviceModeInput
}
export class MessageDmsFoxconnChangeDeviceModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnChangeDeviceModeOutput */
    getResult(): boolean
    ref(): MessageDmsFoxconnChangeDeviceModeOutput
    unref(): void
    static name: string
}
export class MessageDmsFoxconnGetFirmwareVersionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnGetFirmwareVersionInput */
    getVersionType(): { returnType: boolean, valueVersionType: DmsFoxconnFirmwareVersionType | null }
    ref(): MessageDmsFoxconnGetFirmwareVersionInput
    setVersionType(valueVersionType: DmsFoxconnFirmwareVersionType): boolean
    unref(): void
    static name: string
    static new(): MessageDmsFoxconnGetFirmwareVersionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsFoxconnGetFirmwareVersionInput
}
export class MessageDmsFoxconnGetFirmwareVersionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnGetFirmwareVersionOutput */
    getResult(): boolean
    getVersion(): { returnType: boolean, valueVersion: string | null }
    ref(): MessageDmsFoxconnGetFirmwareVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsFoxconnSetFccAuthenticationInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnSetFccAuthenticationInput */
    getValue(): { returnType: boolean, valueValue: number | null }
    ref(): MessageDmsFoxconnSetFccAuthenticationInput
    setValue(valueValue: number): boolean
    unref(): void
    static name: string
    static new(): MessageDmsFoxconnSetFccAuthenticationInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsFoxconnSetFccAuthenticationInput
}
export class MessageDmsFoxconnSetFccAuthenticationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnSetFccAuthenticationOutput */
    getResult(): boolean
    ref(): MessageDmsFoxconnSetFccAuthenticationOutput
    unref(): void
    static name: string
}
export class MessageDmsGetActivationStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetActivationStateOutput */
    getInfo(): { returnType: boolean, valueInfo: DmsActivationState | null }
    getResult(): boolean
    ref(): MessageDmsGetActivationStateOutput
    unref(): void
    static name: string
}
export class MessageDmsGetAltNetConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetAltNetConfigOutput */
    getConfig(): { returnType: boolean, valueConfig: boolean | null }
    getResult(): boolean
    ref(): MessageDmsGetAltNetConfigOutput
    unref(): void
    static name: string
}
export class MessageDmsGetBandCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetBandCapabilitiesOutput */
    getBandCapability(): { returnType: boolean, valueBandCapability: DmsBandCapability | null }
    getExtendedLteBandCapability(): { returnType: boolean, valueExtendedLteBandCapability: number[] | null }
    getLteBandCapability(): { returnType: boolean, valueLteBandCapability: DmsLteBandCapability | null }
    getNr5gBandCapability(): { returnType: boolean, valueNr5gBandCapability: number[] | null }
    getResult(): boolean
    ref(): MessageDmsGetBandCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetBootImageDownloadModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetBootImageDownloadModeOutput */
    getMode(): { returnType: boolean, valueMode: DmsBootImageDownloadMode | null }
    getResult(): boolean
    ref(): MessageDmsGetBootImageDownloadModeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetCapabilitiesOutput */
    getInfo(): { returnType: boolean, valueInfoMaxTxChannelRate: number | null, valueInfoMaxRxChannelRate: number | null, valueInfoDataServiceCapability: DmsDataServiceCapability | null, valueInfoSimCapability: DmsSimCapability | null, valueInfoRadioInterfaceList: DmsRadioInterface[] | null }
    getResult(): boolean
    ref(): MessageDmsGetCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetFactorySkuOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetFactorySkuOutput */
    getResult(): boolean
    getSku(): { returnType: boolean, valueSku: string | null }
    ref(): MessageDmsGetFactorySkuOutput
    unref(): void
    static name: string
}
export class MessageDmsGetFirmwarePreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetFirmwarePreferenceOutput */
    getList(): { returnType: boolean, valueList: MessageDmsGetFirmwarePreferenceOutputListImage[] | null }
    getResult(): boolean
    ref(): MessageDmsGetFirmwarePreferenceOutput
    unref(): void
    static name: string
}
export class MessageDmsGetFirmwarePreferenceOutputListImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsGetFirmwarePreferenceOutputListImage */
    type: DmsFirmwareImageType
    uniqueId: object[]
    buildId: string
    static name: string
}
export class MessageDmsGetHardwareRevisionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetHardwareRevisionOutput */
    getResult(): boolean
    getRevision(): { returnType: boolean, valueRevision: string | null }
    ref(): MessageDmsGetHardwareRevisionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetIdsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetIdsOutput */
    getEsn(): { returnType: boolean, valueEsn: string | null }
    getImei(): { returnType: boolean, valueImei: string | null }
    getImeiSoftwareVersion(): { returnType: boolean, valueImeiSoftwareVersion: string | null }
    getMeid(): { returnType: boolean, valueMeid: string | null }
    getResult(): boolean
    ref(): MessageDmsGetIdsOutput
    unref(): void
    static name: string
}
export class MessageDmsGetMacAddressInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetMacAddressInput */
    getDevice(): { returnType: boolean, valueDevice: DmsMacType | null }
    ref(): MessageDmsGetMacAddressInput
    setDevice(valueDevice: DmsMacType): boolean
    unref(): void
    static name: string
    static new(): MessageDmsGetMacAddressInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsGetMacAddressInput
}
export class MessageDmsGetMacAddressOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetMacAddressOutput */
    getMacAddress(): { returnType: boolean, valueMacAddress: any[] | null }
    getResult(): boolean
    ref(): MessageDmsGetMacAddressOutput
    unref(): void
    static name: string
}
export class MessageDmsGetManufacturerOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetManufacturerOutput */
    getManufacturer(): { returnType: boolean, valueManufacturer: string | null }
    getResult(): boolean
    ref(): MessageDmsGetManufacturerOutput
    unref(): void
    static name: string
}
export class MessageDmsGetModelOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetModelOutput */
    getModel(): { returnType: boolean, valueModel: string | null }
    getResult(): boolean
    ref(): MessageDmsGetModelOutput
    unref(): void
    static name: string
}
export class MessageDmsGetMsisdnOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetMsisdnOutput */
    getMsisdn(): { returnType: boolean, valueMsisdn: string | null }
    getResult(): boolean
    ref(): MessageDmsGetMsisdnOutput
    unref(): void
    static name: string
}
export class MessageDmsGetOperatingModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetOperatingModeOutput */
    getHardwareRestrictedMode(): { returnType: boolean, valueHardwareRestrictedMode: boolean | null }
    getMode(): { returnType: boolean, valueMode: DmsOperatingMode | null }
    getOfflineReason(): { returnType: boolean, valueOfflineReason: DmsOfflineReason | null }
    getResult(): boolean
    ref(): MessageDmsGetOperatingModeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetPowerStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetPowerStateOutput */
    getInfo(): { returnType: boolean, valueInfoPowerStateFlags: number | null, valueInfoBatteryLevel: number | null }
    getResult(): boolean
    ref(): MessageDmsGetPowerStateOutput
    unref(): void
    static name: string
}
export class MessageDmsGetPrlVersionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetPrlVersionOutput */
    getPrlOnlyPreference(): { returnType: boolean, valuePrlOnlyPreference: boolean | null }
    getResult(): boolean
    getVersion(): { returnType: boolean, valueVersion: number | null }
    ref(): MessageDmsGetPrlVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetRevisionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetRevisionOutput */
    getResult(): boolean
    getRevision(): { returnType: boolean, valueRevision: string | null }
    ref(): MessageDmsGetRevisionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetSoftwareVersionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetSoftwareVersionOutput */
    getResult(): boolean
    getVersion(): { returnType: boolean, valueVersion: string | null }
    ref(): MessageDmsGetSoftwareVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetStoredImageInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetStoredImageInfoInput */
    getImage(): { returnType: boolean, valueImage: MessageDmsGetStoredImageInfoInputImage | null }
    ref(): MessageDmsGetStoredImageInfoInput
    setImage(valueImage: MessageDmsGetStoredImageInfoInputImage): boolean
    unref(): void
    static name: string
    static new(): MessageDmsGetStoredImageInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsGetStoredImageInfoInput
}
export class MessageDmsGetStoredImageInfoInputImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsGetStoredImageInfoInputImage */
    type: DmsFirmwareImageType
    uniqueId: object[]
    buildId: string
    static name: string
}
export class MessageDmsGetStoredImageInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetStoredImageInfoOutput */
    getBootVersion(): { returnType: boolean, valueBootVersionMajorVersion: number | null, valueBootVersionMinorVersion: number | null }
    getOemLockId(): { returnType: boolean, valueOemLockId: number | null }
    getPriVersion(): { returnType: boolean, valuePriVersionPriVersion: number | null, valuePriVersionPriInfo: string | null }
    getResult(): boolean
    ref(): MessageDmsGetStoredImageInfoOutput
    unref(): void
    static name: string
}
export class MessageDmsGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] | null }
    getResult(): boolean
    ref(): MessageDmsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetTimeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetTimeOutput */
    getDeviceTime(): { returnType: boolean, valueDeviceTimeTimeCount: number | null, valueDeviceTimeTimeSource: DmsTimeSource | null }
    getResult(): boolean
    getSystemTime(): { returnType: boolean, valueSystemTime: number | null }
    getUserTime(): { returnType: boolean, valueUserTime: number | null }
    ref(): MessageDmsGetTimeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetUserLockStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetUserLockStateOutput */
    getEnabled(): { returnType: boolean, valueEnabled: boolean | null }
    getResult(): boolean
    ref(): MessageDmsGetUserLockStateOutput
    unref(): void
    static name: string
}
export class MessageDmsHpChangeDeviceModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsHpChangeDeviceModeInput */
    getMode(): { returnType: boolean, valueMode: DmsHpDeviceMode | null }
    ref(): MessageDmsHpChangeDeviceModeInput
    setMode(valueMode: DmsHpDeviceMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsHpChangeDeviceModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsHpChangeDeviceModeInput
}
export class MessageDmsHpChangeDeviceModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsHpChangeDeviceModeOutput */
    getResult(): boolean
    ref(): MessageDmsHpChangeDeviceModeOutput
    unref(): void
    static name: string
}
export class MessageDmsListStoredImagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsListStoredImagesOutput */
    getList(): { returnType: boolean, valueList: MessageDmsListStoredImagesOutputListImage[] | null }
    getResult(): boolean
    ref(): MessageDmsListStoredImagesOutput
    unref(): void
    static name: string
}
export class MessageDmsListStoredImagesOutputListImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsListStoredImagesOutputListImage */
    type: DmsFirmwareImageType
    maximumImages: number
    indexOfRunningImage: number
    sublist: object[]
    static name: string
}
export class MessageDmsListStoredImagesOutputListImageSublistSublistElement {
    /* Fields of Qmi-1.0.Qmi.MessageDmsListStoredImagesOutputListImageSublistSublistElement */
    storageIndex: number
    failureCount: number
    uniqueId: object[]
    buildId: string
    static name: string
}
export class MessageDmsReadEriFileOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsReadEriFileOutput */
    getEriFile(): { returnType: boolean, valueEriFile: any[] | null }
    getResult(): boolean
    ref(): MessageDmsReadEriFileOutput
    unref(): void
    static name: string
}
export class MessageDmsReadUserDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsReadUserDataOutput */
    getResult(): boolean
    getUserData(): { returnType: boolean, valueUserData: any[] | null }
    ref(): MessageDmsReadUserDataOutput
    unref(): void
    static name: string
}
export class MessageDmsResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsResetOutput */
    getResult(): boolean
    ref(): MessageDmsResetOutput
    unref(): void
    static name: string
}
export class MessageDmsRestoreFactoryDefaultsInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsRestoreFactoryDefaultsInput */
    getServiceProgrammingCode(): { returnType: boolean, valueServiceProgrammingCode: string | null }
    ref(): MessageDmsRestoreFactoryDefaultsInput
    setServiceProgrammingCode(valueServiceProgrammingCode: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsRestoreFactoryDefaultsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsRestoreFactoryDefaultsInput
}
export class MessageDmsRestoreFactoryDefaultsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsRestoreFactoryDefaultsOutput */
    getResult(): boolean
    ref(): MessageDmsRestoreFactoryDefaultsOutput
    unref(): void
    static name: string
}
export class MessageDmsSetAltNetConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetAltNetConfigInput */
    getConfig(): { returnType: boolean, valueConfig: boolean | null }
    ref(): MessageDmsSetAltNetConfigInput
    setConfig(valueConfig: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetAltNetConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetAltNetConfigInput
}
export class MessageDmsSetAltNetConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetAltNetConfigOutput */
    getResult(): boolean
    ref(): MessageDmsSetAltNetConfigOutput
    unref(): void
    static name: string
}
export class MessageDmsSetBootImageDownloadModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetBootImageDownloadModeInput */
    getMode(): { returnType: boolean, valueMode: DmsBootImageDownloadMode | null }
    ref(): MessageDmsSetBootImageDownloadModeInput
    setMode(valueMode: DmsBootImageDownloadMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetBootImageDownloadModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetBootImageDownloadModeInput
}
export class MessageDmsSetBootImageDownloadModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetBootImageDownloadModeOutput */
    getResult(): boolean
    ref(): MessageDmsSetBootImageDownloadModeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetEventReportInput */
    getActivationStateReporting(): { returnType: boolean, valueActivationStateReporting: boolean | null }
    getBatteryLevelReportLimits(): { returnType: boolean, valueBatteryLevelReportLimitsLowerLimit: number | null, valueBatteryLevelReportLimitsUpperLimit: number | null }
    getOperatingModeReporting(): { returnType: boolean, valueOperatingModeReporting: boolean | null }
    getPinStateReporting(): { returnType: boolean, valuePinStateReporting: boolean | null }
    getPowerStateReporting(): { returnType: boolean, valuePowerStateReporting: boolean | null }
    getPrlInitReporting(): { returnType: boolean, valuePrlInitReporting: boolean | null }
    getUimStateReporting(): { returnType: boolean, valueUimStateReporting: boolean | null }
    getWirelessDisableStateReporting(): { returnType: boolean, valueWirelessDisableStateReporting: boolean | null }
    ref(): MessageDmsSetEventReportInput
    setActivationStateReporting(valueActivationStateReporting: boolean): boolean
    setBatteryLevelReportLimits(valueBatteryLevelReportLimitsLowerLimit: number, valueBatteryLevelReportLimitsUpperLimit: number): boolean
    setOperatingModeReporting(valueOperatingModeReporting: boolean): boolean
    setPinStateReporting(valuePinStateReporting: boolean): boolean
    setPowerStateReporting(valuePowerStateReporting: boolean): boolean
    setPrlInitReporting(valuePrlInitReporting: boolean): boolean
    setUimStateReporting(valueUimStateReporting: boolean): boolean
    setWirelessDisableStateReporting(valueWirelessDisableStateReporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetEventReportInput
}
export class MessageDmsSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetEventReportOutput */
    getResult(): boolean
    ref(): MessageDmsSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageDmsSetFccAuthenticationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetFccAuthenticationOutput */
    getResult(): boolean
    ref(): MessageDmsSetFccAuthenticationOutput
    unref(): void
    static name: string
}
export class MessageDmsSetFirmwareIdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetFirmwareIdOutput */
    getResult(): boolean
    ref(): MessageDmsSetFirmwareIdOutput
    unref(): void
    static name: string
}
export class MessageDmsSetFirmwarePreferenceInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetFirmwarePreferenceInput */
    getDownloadOverride(): { returnType: boolean, valueDownloadOverride: boolean | null }
    getList(): { returnType: boolean, valueList: MessageDmsSetFirmwarePreferenceInputListImage[] | null }
    getModemStorageIndex(): { returnType: boolean, valueModemStorageIndex: number | null }
    ref(): MessageDmsSetFirmwarePreferenceInput
    setDownloadOverride(valueDownloadOverride: boolean): boolean
    setList(valueList: MessageDmsSetFirmwarePreferenceInputListImage[]): boolean
    setModemStorageIndex(valueModemStorageIndex: number): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetFirmwarePreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetFirmwarePreferenceInput
}
export class MessageDmsSetFirmwarePreferenceInputListImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsSetFirmwarePreferenceInputListImage */
    type: DmsFirmwareImageType
    uniqueId: object[]
    buildId: string
    static name: string
}
export class MessageDmsSetFirmwarePreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetFirmwarePreferenceOutput */
    getImageDownloadList(): { returnType: boolean, valueImageDownloadList: DmsFirmwareImageType[] | null }
    getResult(): boolean
    ref(): MessageDmsSetFirmwarePreferenceOutput
    unref(): void
    static name: string
}
export class MessageDmsSetOperatingModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetOperatingModeInput */
    getMode(): { returnType: boolean, valueMode: DmsOperatingMode | null }
    ref(): MessageDmsSetOperatingModeInput
    setMode(valueMode: DmsOperatingMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetOperatingModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetOperatingModeInput
}
export class MessageDmsSetOperatingModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetOperatingModeOutput */
    getResult(): boolean
    ref(): MessageDmsSetOperatingModeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetServiceProgrammingCodeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetServiceProgrammingCodeInput */
    getCurrentCode(): { returnType: boolean, valueCurrentCode: string | null }
    getNewCode(): { returnType: boolean, valueNewCode: string | null }
    ref(): MessageDmsSetServiceProgrammingCodeInput
    setCurrentCode(valueCurrentCode: string): boolean
    setNewCode(valueNewCode: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetServiceProgrammingCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetServiceProgrammingCodeInput
}
export class MessageDmsSetServiceProgrammingCodeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetServiceProgrammingCodeOutput */
    getResult(): boolean
    ref(): MessageDmsSetServiceProgrammingCodeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetTimeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetTimeInput */
    getTimeReferenceType(): { returnType: boolean, valueTimeReferenceType: DmsTimeReferenceType | null }
    getTimeValue(): { returnType: boolean, valueTimeValue: number | null }
    ref(): MessageDmsSetTimeInput
    setTimeReferenceType(valueTimeReferenceType: DmsTimeReferenceType): boolean
    setTimeValue(valueTimeValue: number): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetTimeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetTimeInput
}
export class MessageDmsSetTimeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetTimeOutput */
    getResult(): boolean
    ref(): MessageDmsSetTimeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetUserLockCodeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetUserLockCodeInput */
    getInfo(): { returnType: boolean, valueInfoOldCode: string | null, valueInfoNewCode: string | null }
    ref(): MessageDmsSetUserLockCodeInput
    setInfo(valueInfoOldCode: string, valueInfoNewCode: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetUserLockCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetUserLockCodeInput
}
export class MessageDmsSetUserLockCodeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetUserLockCodeOutput */
    getResult(): boolean
    ref(): MessageDmsSetUserLockCodeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetUserLockStateInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetUserLockStateInput */
    getInfo(): { returnType: boolean, valueInfoEnabled: boolean | null, valueInfoLockCode: string | null }
    ref(): MessageDmsSetUserLockStateInput
    setInfo(valueInfoEnabled: boolean, valueInfoLockCode: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetUserLockStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetUserLockStateInput
}
export class MessageDmsSetUserLockStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetUserLockStateOutput */
    getResult(): boolean
    ref(): MessageDmsSetUserLockStateOutput
    unref(): void
    static name: string
}
export class MessageDmsSwiGetCurrentFirmwareOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiGetCurrentFirmwareOutput */
    getAmssVersion(): { returnType: boolean, valueAmssVersion: string | null }
    getBootVersion(): { returnType: boolean, valueBootVersion: string | null }
    getCarrier(): { returnType: boolean, valueCarrier: string | null }
    getCarrierId(): { returnType: boolean, valueCarrierId: string | null }
    getConfigVersion(): { returnType: boolean, valueConfigVersion: string | null }
    getModel(): { returnType: boolean, valueModel: string | null }
    getPackageId(): { returnType: boolean, valuePackageId: string | null }
    getPriVersion(): { returnType: boolean, valuePriVersion: string | null }
    getResult(): boolean
    getSkuId(): { returnType: boolean, valueSkuId: string | null }
    ref(): MessageDmsSwiGetCurrentFirmwareOutput
    unref(): void
    static name: string
}
export class MessageDmsSwiGetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiGetUsbCompositionOutput */
    getCurrent(): { returnType: boolean, valueCurrent: DmsSwiUsbComposition | null }
    getResult(): boolean
    getSupported(): { returnType: boolean, valueSupported: DmsSwiUsbComposition[] | null }
    ref(): MessageDmsSwiGetUsbCompositionOutput
    unref(): void
    static name: string
}
export class MessageDmsSwiSetUsbCompositionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiSetUsbCompositionInput */
    getCurrent(): { returnType: boolean, valueCurrent: DmsSwiUsbComposition | null }
    ref(): MessageDmsSwiSetUsbCompositionInput
    setCurrent(valueCurrent: DmsSwiUsbComposition): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSwiSetUsbCompositionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSwiSetUsbCompositionInput
}
export class MessageDmsSwiSetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiSetUsbCompositionOutput */
    getResult(): boolean
    ref(): MessageDmsSwiSetUsbCompositionOutput
    unref(): void
    static name: string
}
export class MessageDmsUimChangePinInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimChangePinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: DmsUimPinId | null, valueInfoOldPin: string | null, valueInfoNewPin: string | null }
    ref(): MessageDmsUimChangePinInput
    setInfo(valueInfoPinId: DmsUimPinId, valueInfoOldPin: string, valueInfoNewPin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimChangePinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimChangePinInput
}
export class MessageDmsUimChangePinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimChangePinOutput */
    getPinRetriesStatus(): { returnType: boolean, valuePinRetriesStatusVerifyRetriesLeft: number | null, valuePinRetriesStatusUnblockRetriesLeft: number | null }
    getResult(): boolean
    ref(): MessageDmsUimChangePinOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetCkStatusInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetCkStatusInput */
    getFacility(): { returnType: boolean, valueFacility: DmsUimFacility | null }
    ref(): MessageDmsUimGetCkStatusInput
    setFacility(valueFacility: DmsUimFacility): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimGetCkStatusInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimGetCkStatusInput
}
export class MessageDmsUimGetCkStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetCkStatusOutput */
    getCkStatus(): { returnType: boolean, valueCkStatusFacilityState: DmsUimFacilityState | null, valueCkStatusVerifyRetriesLeft: number | null, valueCkStatusUnblockRetriesLeft: number | null }
    getOperationBlockingFacility(): { returnType: boolean, valueOperationBlockingFacility: boolean | null }
    getResult(): boolean
    ref(): MessageDmsUimGetCkStatusOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetIccidOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetIccidOutput */
    getIccid(): { returnType: boolean, valueIccid: string | null }
    getResult(): boolean
    ref(): MessageDmsUimGetIccidOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetImsiOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetImsiOutput */
    getImsi(): { returnType: boolean, valueImsi: string | null }
    getResult(): boolean
    ref(): MessageDmsUimGetImsiOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetPinStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetPinStatusOutput */
    getPin1Status(): { returnType: boolean, valuePin1StatusCurrentStatus: DmsUimPinStatus | null, valuePin1StatusVerifyRetriesLeft: number | null, valuePin1StatusUnblockRetriesLeft: number | null }
    getPin2Status(): { returnType: boolean, valuePin2StatusCurrentStatus: DmsUimPinStatus | null, valuePin2StatusVerifyRetriesLeft: number | null, valuePin2StatusUnblockRetriesLeft: number | null }
    getResult(): boolean
    ref(): MessageDmsUimGetPinStatusOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetStateOutput */
    getResult(): boolean
    getState(): { returnType: boolean, valueState: DmsUimState | null }
    ref(): MessageDmsUimGetStateOutput
    unref(): void
    static name: string
}
export class MessageDmsUimSetCkProtectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetCkProtectionInput */
    getFacility(): { returnType: boolean, valueFacilityFacility: DmsUimFacility | null, valueFacilityFacilityState: DmsUimFacilityState | null, valueFacilityFacilityDepersonalizationControlKey: string | null }
    ref(): MessageDmsUimSetCkProtectionInput
    setFacility(valueFacilityFacility: DmsUimFacility, valueFacilityFacilityState: DmsUimFacilityState, valueFacilityFacilityDepersonalizationControlKey: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimSetCkProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimSetCkProtectionInput
}
export class MessageDmsUimSetCkProtectionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetCkProtectionOutput */
    getResult(): boolean
    getVerifyRetriesLeft(): { returnType: boolean, valueVerifyRetriesLeft: number | null }
    ref(): MessageDmsUimSetCkProtectionOutput
    unref(): void
    static name: string
}
export class MessageDmsUimSetPinProtectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetPinProtectionInput */
    getInfo(): { returnType: boolean, valueInfoPinId: DmsUimPinId | null, valueInfoProtectionEnabled: boolean | null, valueInfoPin: string | null }
    ref(): MessageDmsUimSetPinProtectionInput
    setInfo(valueInfoPinId: DmsUimPinId, valueInfoProtectionEnabled: boolean, valueInfoPin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimSetPinProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimSetPinProtectionInput
}
export class MessageDmsUimSetPinProtectionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetPinProtectionOutput */
    getPinRetriesStatus(): { returnType: boolean, valuePinRetriesStatusVerifyRetriesLeft: number | null, valuePinRetriesStatusUnblockRetriesLeft: number | null }
    getResult(): boolean
    ref(): MessageDmsUimSetPinProtectionOutput
    unref(): void
    static name: string
}
export class MessageDmsUimUnblockCkInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockCkInput */
    getFacility(): { returnType: boolean, valueFacilityFacility: DmsUimFacility | null, valueFacilityFacilityControlKey: string | null }
    ref(): MessageDmsUimUnblockCkInput
    setFacility(valueFacilityFacility: DmsUimFacility, valueFacilityFacilityControlKey: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimUnblockCkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimUnblockCkInput
}
export class MessageDmsUimUnblockCkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockCkOutput */
    getResult(): boolean
    getUnblockRetriesLeft(): { returnType: boolean, valueUnblockRetriesLeft: number | null }
    ref(): MessageDmsUimUnblockCkOutput
    unref(): void
    static name: string
}
export class MessageDmsUimUnblockPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockPinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: DmsUimPinId | null, valueInfoPuk: string | null, valueInfoNewPin: string | null }
    ref(): MessageDmsUimUnblockPinInput
    setInfo(valueInfoPinId: DmsUimPinId, valueInfoPuk: string, valueInfoNewPin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimUnblockPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimUnblockPinInput
}
export class MessageDmsUimUnblockPinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockPinOutput */
    getPinRetriesStatus(): { returnType: boolean, valuePinRetriesStatusVerifyRetriesLeft: number | null, valuePinRetriesStatusUnblockRetriesLeft: number | null }
    getResult(): boolean
    ref(): MessageDmsUimUnblockPinOutput
    unref(): void
    static name: string
}
export class MessageDmsUimVerifyPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimVerifyPinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: DmsUimPinId | null, valueInfoPin: string | null }
    ref(): MessageDmsUimVerifyPinInput
    setInfo(valueInfoPinId: DmsUimPinId, valueInfoPin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimVerifyPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimVerifyPinInput
}
export class MessageDmsUimVerifyPinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimVerifyPinOutput */
    getPinRetriesStatus(): { returnType: boolean, valuePinRetriesStatusVerifyRetriesLeft: number | null, valuePinRetriesStatusUnblockRetriesLeft: number | null }
    getResult(): boolean
    ref(): MessageDmsUimVerifyPinOutput
    unref(): void
    static name: string
}
export class MessageDmsValidateServiceProgrammingCodeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsValidateServiceProgrammingCodeInput */
    getServiceProgrammingCode(): { returnType: boolean, valueServiceProgrammingCode: string | null }
    ref(): MessageDmsValidateServiceProgrammingCodeInput
    setServiceProgrammingCode(valueServiceProgrammingCode: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsValidateServiceProgrammingCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsValidateServiceProgrammingCodeInput
}
export class MessageDmsValidateServiceProgrammingCodeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsValidateServiceProgrammingCodeOutput */
    getResult(): boolean
    ref(): MessageDmsValidateServiceProgrammingCodeOutput
    unref(): void
    static name: string
}
export class MessageDmsWriteUserDataInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsWriteUserDataInput */
    getUserData(): { returnType: boolean, valueUserData: any[] | null }
    ref(): MessageDmsWriteUserDataInput
    setUserData(valueUserData: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageDmsWriteUserDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsWriteUserDataInput
}
export class MessageDmsWriteUserDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsWriteUserDataOutput */
    getResult(): boolean
    ref(): MessageDmsWriteUserDataOutput
    unref(): void
    static name: string
}
export class MessageDpmClosePortOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDpmClosePortOutput */
    getResult(): boolean
    ref(): MessageDpmClosePortOutput
    unref(): void
    static name: string
}
export class MessageDpmOpenPortInput {
    /* Methods of Qmi-1.0.Qmi.MessageDpmOpenPortInput */
    getControlPorts(): { returnType: boolean, valueControlPorts: MessageDpmOpenPortInputControlPortsElement[] | null }
    getHardwareDataPorts(): { returnType: boolean, valueHardwareDataPorts: MessageDpmOpenPortInputHardwareDataPortsElement[] | null }
    getSoftwareDataPorts(): { returnType: boolean, valueSoftwareDataPorts: MessageDpmOpenPortInputSoftwareDataPortsElement[] | null }
    ref(): MessageDpmOpenPortInput
    setControlPorts(valueControlPorts: MessageDpmOpenPortInputControlPortsElement[]): boolean
    setHardwareDataPorts(valueHardwareDataPorts: MessageDpmOpenPortInputHardwareDataPortsElement[]): boolean
    setSoftwareDataPorts(valueSoftwareDataPorts: MessageDpmOpenPortInputSoftwareDataPortsElement[]): boolean
    unref(): void
    static name: string
    static new(): MessageDpmOpenPortInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDpmOpenPortInput
}
export class MessageDpmOpenPortInputControlPortsElement {
    /* Fields of Qmi-1.0.Qmi.MessageDpmOpenPortInputControlPortsElement */
    portName: string
    endpointType: DataEndpointType
    interfaceNumber: number
    static name: string
}
export class MessageDpmOpenPortInputHardwareDataPortsElement {
    /* Fields of Qmi-1.0.Qmi.MessageDpmOpenPortInputHardwareDataPortsElement */
    endpointType: DataEndpointType
    interfaceNumber: number
    rxEndpointNumber: number
    txEndpointNumber: number
    static name: string
}
export class MessageDpmOpenPortInputSoftwareDataPortsElement {
    /* Fields of Qmi-1.0.Qmi.MessageDpmOpenPortInputSoftwareDataPortsElement */
    endpointType: DataEndpointType
    interfaceNumber: number
    portName: string
    static name: string
}
export class MessageDpmOpenPortOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDpmOpenPortOutput */
    getResult(): boolean
    ref(): MessageDpmOpenPortOutput
    unref(): void
    static name: string
}
export class MessageDsdGetApnInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdGetApnInfoInput */
    getApnType(): { returnType: boolean, valueApnType: DsdApnType | null }
    ref(): MessageDsdGetApnInfoInput
    setApnType(valueApnType: DsdApnType): boolean
    unref(): void
    static name: string
    static new(): MessageDsdGetApnInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDsdGetApnInfoInput
}
export class MessageDsdGetApnInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdGetApnInfoOutput */
    getApnName(): { returnType: boolean, valueApnName: string | null }
    getResult(): boolean
    ref(): MessageDsdGetApnInfoOutput
    unref(): void
    static name: string
}
export class MessageDsdSetApnTypeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdSetApnTypeInput */
    getApnType(): { returnType: boolean, valueApnTypeName: string | null, valueApnTypeType: DsdApnTypePreference | null }
    getApnTypePreferenceMask(): { returnType: boolean, valueApnTypePreferenceMask: DsdApnTypePreference | null }
    ref(): MessageDsdSetApnTypeInput
    setApnType(valueApnTypeName: string, valueApnTypeType: DsdApnTypePreference): boolean
    setApnTypePreferenceMask(valueApnTypePreferenceMask: DsdApnTypePreference): boolean
    unref(): void
    static name: string
    static new(): MessageDsdSetApnTypeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDsdSetApnTypeInput
}
export class MessageDsdSetApnTypeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdSetApnTypeOutput */
    getResult(): boolean
    ref(): MessageDsdSetApnTypeOutput
    unref(): void
    static name: string
}
export class MessageGasDmsGetFirmwareListInput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsGetFirmwareListInput */
    getMode(): { returnType: boolean, valueMode: GasFirmwareListingMode | null }
    getName(): { returnType: boolean, valueName: string | null }
    getSlotIndex(): { returnType: boolean, valueSlotIndex: number | null }
    getVersion(): { returnType: boolean, valueVersion: string | null }
    ref(): MessageGasDmsGetFirmwareListInput
    setMode(valueMode: GasFirmwareListingMode): boolean
    setName(valueName: string): boolean
    setSlotIndex(valueSlotIndex: number): boolean
    setVersion(valueVersion: string): boolean
    unref(): void
    static name: string
    static new(): MessageGasDmsGetFirmwareListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGasDmsGetFirmwareListInput
}
export class MessageGasDmsGetFirmwareListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsGetFirmwareListOutput */
    getMode(): { returnType: boolean, valueMode: GasFirmwareListingMode | null }
    getResult(): boolean
    getStoredFirmware1(): { returnType: boolean, valueStoredFirmware1Index: number | null, valueStoredFirmware1Name: string | null, valueStoredFirmware1Version: string | null, valueStoredFirmware1PriRevision: string | null }
    getStoredFirmware2(): { returnType: boolean, valueStoredFirmware2Index: number | null, valueStoredFirmware2Name: string | null, valueStoredFirmware2Version: string | null, valueStoredFirmware2PriRevision: string | null }
    getStoredFirmware3(): { returnType: boolean, valueStoredFirmware3Index: number | null, valueStoredFirmware3Name: string | null, valueStoredFirmware3Version: string | null, valueStoredFirmware3PriRevision: string | null }
    getStoredFirmware4(): { returnType: boolean, valueStoredFirmware4Index: number | null, valueStoredFirmware4Name: string | null, valueStoredFirmware4Version: string | null, valueStoredFirmware4PriRevision: string | null }
    ref(): MessageGasDmsGetFirmwareListOutput
    unref(): void
    static name: string
}
export class MessageGasDmsGetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsGetUsbCompositionOutput */
    getCompositionPersistence(): { returnType: boolean, valueCompositionPersistence: boolean | null }
    getEndpointType(): { returnType: boolean, valueEndpointType: GasUsbCompositionEndpointType | null }
    getImmediateSetting(): { returnType: boolean, valueImmediateSetting: boolean | null }
    getRebootAfterSetting(): { returnType: boolean, valueRebootAfterSetting: boolean | null }
    getResult(): boolean
    getUsbComposition(): { returnType: boolean, valueUsbComposition: number | null }
    ref(): MessageGasDmsGetUsbCompositionOutput
    unref(): void
    static name: string
}
export class MessageGasDmsSetActiveFirmwareInput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetActiveFirmwareInput */
    getCarrierName(): { returnType: boolean, valueCarrierName: string | null }
    getSlotIndex(): { returnType: boolean, valueSlotIndex: number | null }
    getVersion(): { returnType: boolean, valueVersion: string | null }
    ref(): MessageGasDmsSetActiveFirmwareInput
    setCarrierName(valueCarrierName: string): boolean
    setSlotIndex(valueSlotIndex: number): boolean
    setVersion(valueVersion: string): boolean
    unref(): void
    static name: string
    static new(): MessageGasDmsSetActiveFirmwareInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGasDmsSetActiveFirmwareInput
}
export class MessageGasDmsSetActiveFirmwareOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetActiveFirmwareOutput */
    getResult(): boolean
    ref(): MessageGasDmsSetActiveFirmwareOutput
    unref(): void
    static name: string
}
export class MessageGasDmsSetUsbCompositionInput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetUsbCompositionInput */
    getCompositionPersistence(): { returnType: boolean, valueCompositionPersistence: boolean | null }
    getEndpointType(): { returnType: boolean, valueEndpointType: GasUsbCompositionEndpointType | null }
    getImmediateSetting(): { returnType: boolean, valueImmediateSetting: boolean | null }
    getRebootAfterSetting(): { returnType: boolean, valueRebootAfterSetting: boolean | null }
    getUsbComposition(): { returnType: boolean, valueUsbComposition: number | null }
    ref(): MessageGasDmsSetUsbCompositionInput
    setCompositionPersistence(valueCompositionPersistence: boolean): boolean
    setEndpointType(valueEndpointType: GasUsbCompositionEndpointType): boolean
    setImmediateSetting(valueImmediateSetting: boolean): boolean
    setRebootAfterSetting(valueRebootAfterSetting: boolean): boolean
    setUsbComposition(valueUsbComposition: number): boolean
    unref(): void
    static name: string
    static new(): MessageGasDmsSetUsbCompositionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGasDmsSetUsbCompositionInput
}
export class MessageGasDmsSetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetUsbCompositionOutput */
    getResult(): boolean
    ref(): MessageGasDmsSetUsbCompositionOutput
    unref(): void
    static name: string
}
export class MessageGmsTestGetValueOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGmsTestGetValueOutput */
    getResult(): boolean
    getTestMandatoryValue(): { returnType: boolean, valueTestMandatoryValue: number | null }
    getTestOptionalValue(): { returnType: boolean, valueTestOptionalValue: number | null }
    ref(): MessageGmsTestGetValueOutput
    unref(): void
    static name: string
}
export class MessageGmsTestSetValueInput {
    /* Methods of Qmi-1.0.Qmi.MessageGmsTestSetValueInput */
    getTestMandatoryValue(): { returnType: boolean, valueTestMandatoryValue: number | null }
    getTestOptionalValue(): { returnType: boolean, valueTestOptionalValue: number | null }
    ref(): MessageGmsTestSetValueInput
    setTestMandatoryValue(valueTestMandatoryValue: number): boolean
    setTestOptionalValue(valueTestOptionalValue: number): boolean
    unref(): void
    static name: string
    static new(): MessageGmsTestSetValueInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGmsTestSetValueInput
}
export class MessageGmsTestSetValueOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGmsTestSetValueOutput */
    getResult(): boolean
    ref(): MessageGmsTestSetValueOutput
    unref(): void
    static name: string
}
export class MessageLocDeleteAssistanceDataInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocDeleteAssistanceDataInput */
    getDeleteAll(): { returnType: boolean, valueDeleteAll: boolean | null }
    getDeleteCellDatabaseMask(): { returnType: boolean, valueDeleteCellDatabaseMask: LocDeleteCellDatabase | null }
    getDeleteClockInfoMask(): { returnType: boolean, valueDeleteClockInfoMask: LocDeleteClockInfo | null }
    getDeleteGnssDataMask(): { returnType: boolean, valueDeleteGnssDataMask: LocDeleteGnssData | null }
    getDeleteSvInfo(): { returnType: boolean, valueDeleteSvInfo: MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[] | null }
    ref(): MessageLocDeleteAssistanceDataInput
    setDeleteAll(valueDeleteAll: boolean): boolean
    setDeleteCellDatabaseMask(valueDeleteCellDatabaseMask: LocDeleteCellDatabase): boolean
    setDeleteClockInfoMask(valueDeleteClockInfoMask: LocDeleteClockInfo): boolean
    setDeleteGnssDataMask(valueDeleteGnssDataMask: LocDeleteGnssData): boolean
    setDeleteSvInfo(valueDeleteSvInfo: MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[]): boolean
    unref(): void
    static name: string
    static new(): MessageLocDeleteAssistanceDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocDeleteAssistanceDataInput
}
export class MessageLocDeleteAssistanceDataInputDeleteSvInfoElement {
    /* Fields of Qmi-1.0.Qmi.MessageLocDeleteAssistanceDataInputDeleteSvInfoElement */
    gnssSvId: number
    system: LocSystem
    deleteSvInfoMask: LocDeleteSvInfo
    static name: string
}
export class MessageLocDeleteAssistanceDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocDeleteAssistanceDataOutput */
    getResult(): boolean
    ref(): MessageLocDeleteAssistanceDataOutput
    unref(): void
    static name: string
}
export class MessageLocGetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetEngineLockOutput */
    getResult(): boolean
    ref(): MessageLocGetEngineLockOutput
    unref(): void
    static name: string
}
export class MessageLocGetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetNmeaTypesOutput */
    getResult(): boolean
    ref(): MessageLocGetNmeaTypesOutput
    unref(): void
    static name: string
}
export class MessageLocGetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetOperationModeOutput */
    getResult(): boolean
    ref(): MessageLocGetOperationModeOutput
    unref(): void
    static name: string
}
export class MessageLocGetPredictedOrbitsDataSourceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetPredictedOrbitsDataSourceOutput */
    getResult(): boolean
    ref(): MessageLocGetPredictedOrbitsDataSourceOutput
    unref(): void
    static name: string
}
export class MessageLocGetServerInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetServerInput */
    getServerAddressType(): { returnType: boolean, valueServerAddressType: LocServerAddressType | null }
    getServerType(): { returnType: boolean, valueServerType: LocServerType | null }
    ref(): MessageLocGetServerInput
    setServerAddressType(valueServerAddressType: LocServerAddressType): boolean
    setServerType(valueServerType: LocServerType): boolean
    unref(): void
    static name: string
    static new(): MessageLocGetServerInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocGetServerInput
}
export class MessageLocGetServerOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetServerOutput */
    getResult(): boolean
    ref(): MessageLocGetServerOutput
    unref(): void
    static name: string
}
export class MessageLocInjectPredictedOrbitsDataInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocInjectPredictedOrbitsDataInput */
    getFormatType(): { returnType: boolean, valueFormatType: LocPredictedOrbitsDataFormat | null }
    getPartData(): { returnType: boolean, valuePartData: any[] | null }
    getPartNumber(): { returnType: boolean, valuePartNumber: number | null }
    getTotalParts(): { returnType: boolean, valueTotalParts: number | null }
    getTotalSize(): { returnType: boolean, valueTotalSize: number | null }
    ref(): MessageLocInjectPredictedOrbitsDataInput
    setFormatType(valueFormatType: LocPredictedOrbitsDataFormat): boolean
    setPartData(valuePartData: any[]): boolean
    setPartNumber(valuePartNumber: number): boolean
    setTotalParts(valueTotalParts: number): boolean
    setTotalSize(valueTotalSize: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocInjectPredictedOrbitsDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocInjectPredictedOrbitsDataInput
}
export class MessageLocInjectPredictedOrbitsDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocInjectPredictedOrbitsDataOutput */
    getResult(): boolean
    ref(): MessageLocInjectPredictedOrbitsDataOutput
    unref(): void
    static name: string
}
export class MessageLocInjectXtraDataInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocInjectXtraDataInput */
    getPartData(): { returnType: boolean, valuePartData: any[] | null }
    getPartNumber(): { returnType: boolean, valuePartNumber: number | null }
    getTotalParts(): { returnType: boolean, valueTotalParts: number | null }
    getTotalSize(): { returnType: boolean, valueTotalSize: number | null }
    ref(): MessageLocInjectXtraDataInput
    setPartData(valuePartData: any[]): boolean
    setPartNumber(valuePartNumber: number): boolean
    setTotalParts(valueTotalParts: number): boolean
    setTotalSize(valueTotalSize: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocInjectXtraDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocInjectXtraDataInput
}
export class MessageLocInjectXtraDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocInjectXtraDataOutput */
    getResult(): boolean
    ref(): MessageLocInjectXtraDataOutput
    unref(): void
    static name: string
}
export class MessageLocRegisterEventsInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocRegisterEventsInput */
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: LocEventRegistrationFlag | null }
    ref(): MessageLocRegisterEventsInput
    setEventRegistrationMask(valueEventRegistrationMask: LocEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessageLocRegisterEventsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocRegisterEventsInput
}
export class MessageLocRegisterEventsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocRegisterEventsOutput */
    getResult(): boolean
    ref(): MessageLocRegisterEventsOutput
    unref(): void
    static name: string
}
export class MessageLocSetEngineLockInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetEngineLockInput */
    getLockType(): { returnType: boolean, valueLockType: LocLockType | null }
    ref(): MessageLocSetEngineLockInput
    setLockType(valueLockType: LocLockType): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetEngineLockInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetEngineLockInput
}
export class MessageLocSetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetEngineLockOutput */
    getResult(): boolean
    ref(): MessageLocSetEngineLockOutput
    unref(): void
    static name: string
}
export class MessageLocSetNmeaTypesInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetNmeaTypesInput */
    getNmeaTypes(): { returnType: boolean, valueNmeaTypes: LocNmeaType | null }
    ref(): MessageLocSetNmeaTypesInput
    setNmeaTypes(valueNmeaTypes: LocNmeaType): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetNmeaTypesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetNmeaTypesInput
}
export class MessageLocSetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetNmeaTypesOutput */
    getResult(): boolean
    ref(): MessageLocSetNmeaTypesOutput
    unref(): void
    static name: string
}
export class MessageLocSetOperationModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetOperationModeInput */
    getOperationMode(): { returnType: boolean, valueOperationMode: LocOperationMode | null }
    ref(): MessageLocSetOperationModeInput
    setOperationMode(valueOperationMode: LocOperationMode): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetOperationModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetOperationModeInput
}
export class MessageLocSetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetOperationModeOutput */
    getResult(): boolean
    ref(): MessageLocSetOperationModeOutput
    unref(): void
    static name: string
}
export class MessageLocSetServerInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetServerInput */
    getIpv4(): { returnType: boolean, valueIpv4Ipv4Address: number | null, valueIpv4Ipv4Port: number | null }
    getIpv6(): { returnType: boolean, valueIpv6Ipv6Address: number[] | null, valueIpv6Ipv6Port: number | null }
    getServerType(): { returnType: boolean, valueServerType: LocServerType | null }
    getUrl(): { returnType: boolean, valueUrl: string | null }
    ref(): MessageLocSetServerInput
    setIpv4(valueIpv4Ipv4Address: number, valueIpv4Ipv4Port: number): boolean
    setIpv6(valueIpv6Ipv6Address: number[], valueIpv6Ipv6Port: number): boolean
    setServerType(valueServerType: LocServerType): boolean
    setUrl(valueUrl: string): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetServerInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetServerInput
}
export class MessageLocSetServerOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetServerOutput */
    getResult(): boolean
    ref(): MessageLocSetServerOutput
    unref(): void
    static name: string
}
export class MessageLocStartInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocStartInput */
    getFixRecurrenceType(): { returnType: boolean, valueFixRecurrenceType: LocFixRecurrenceType | null }
    getIntermediateReportState(): { returnType: boolean, valueIntermediateReportState: LocIntermediateReportState | null }
    getMinimumIntervalBetweenPositionReports(): { returnType: boolean, valueMinimumIntervalBetweenPositionReports: number | null }
    getSessionId(): { returnType: boolean, valueSessionId: number | null }
    ref(): MessageLocStartInput
    setFixRecurrenceType(valueFixRecurrenceType: LocFixRecurrenceType): boolean
    setIntermediateReportState(valueIntermediateReportState: LocIntermediateReportState): boolean
    setMinimumIntervalBetweenPositionReports(valueMinimumIntervalBetweenPositionReports: number): boolean
    setSessionId(valueSessionId: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocStartInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocStartInput
}
export class MessageLocStartOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocStartOutput */
    getResult(): boolean
    ref(): MessageLocStartOutput
    unref(): void
    static name: string
}
export class MessageLocStopInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocStopInput */
    getSessionId(): { returnType: boolean, valueSessionId: number | null }
    ref(): MessageLocStopInput
    setSessionId(valueSessionId: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocStopInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocStopInput
}
export class MessageLocStopOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocStopOutput */
    getResult(): boolean
    ref(): MessageLocStopOutput
    unref(): void
    static name: string
}
export class MessageNasAttachDetachInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasAttachDetachInput */
    getAction(): { returnType: boolean, valueAction: NasPsAttachAction | null }
    ref(): MessageNasAttachDetachInput
    setAction(valueAction: NasPsAttachAction): boolean
    unref(): void
    static name: string
    static new(): MessageNasAttachDetachInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasAttachDetachInput
}
export class MessageNasAttachDetachOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasAttachDetachOutput */
    getResult(): boolean
    ref(): MessageNasAttachDetachOutput
    unref(): void
    static name: string
}
export class MessageNasConfigSignalInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasConfigSignalInfoInput */
    getEcioThreshold(): { returnType: boolean, valueEcioThreshold: number[] | null }
    getIoThreshold(): { returnType: boolean, valueIoThreshold: number[] | null }
    getLteReport(): { returnType: boolean, valueLteReportRate: number | null, valueLteReportAveragePeriod: number | null }
    getLteSnrThreshold(): { returnType: boolean, valueLteSnrThreshold: number[] | null }
    getRscpThreshold(): { returnType: boolean, valueRscpThreshold: any[] | null }
    getRsrpThreshold(): { returnType: boolean, valueRsrpThreshold: number[] | null }
    getRsrqThreshold(): { returnType: boolean, valueRsrqThreshold: any[] | null }
    getRssiThreshold(): { returnType: boolean, valueRssiThreshold: any[] | null }
    getSinrThreshold(): { returnType: boolean, valueSinrThreshold: any[] | null }
    ref(): MessageNasConfigSignalInfoInput
    setEcioThreshold(valueEcioThreshold: number[]): boolean
    setIoThreshold(valueIoThreshold: number[]): boolean
    setLteReport(valueLteReportRate: number, valueLteReportAveragePeriod: number): boolean
    setLteSnrThreshold(valueLteSnrThreshold: number[]): boolean
    setRscpThreshold(valueRscpThreshold: any[]): boolean
    setRsrpThreshold(valueRsrpThreshold: number[]): boolean
    setRsrqThreshold(valueRsrqThreshold: any[]): boolean
    setRssiThreshold(valueRssiThreshold: any[]): boolean
    setSinrThreshold(valueSinrThreshold: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageNasConfigSignalInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasConfigSignalInfoInput
}
export class MessageNasConfigSignalInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasConfigSignalInfoOutput */
    getResult(): boolean
    ref(): MessageNasConfigSignalInfoOutput
    unref(): void
    static name: string
}
export class MessageNasForceNetworkSearchOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasForceNetworkSearchOutput */
    getResult(): boolean
    ref(): MessageNasForceNetworkSearchOutput
    unref(): void
    static name: string
}
export class MessageNasGetCdmaPositionInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetCdmaPositionInfoOutput */
    getCdmaPositionInfo(): { returnType: boolean, valueCdmaPositionInfoUiInIdleMode: number | null, valueCdmaPositionInfoBasestations: MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation[] | null }
    getResult(): boolean
    ref(): MessageNasGetCdmaPositionInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation */
    pilotType: NasCdmaPilotType
    systemId: number
    networkId: number
    baseStationId: number
    pilotPn: number
    pilotStrength: number
    latitude: number
    longitude: number
    gpsTimeInMilliseconds: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutput */
    getCdmaInfo(): { returnType: boolean, valueCdmaInfoSystemId: number | null, valueCdmaInfoNetworkId: number | null, valueCdmaInfoBaseStationId: number | null, valueCdmaInfoReferencePn: number | null, valueCdmaInfoLatitude: number | null, valueCdmaInfoLongitude: number | null }
    getGeranInfoV2(): { returnType: boolean, valueGeranInfoV2CellId: number | null, valueGeranInfoV2Plmn: any[] | null, valueGeranInfoV2Lac: number | null, valueGeranInfoV2GeranAbsoluteRfChannelNumber: number | null, valueGeranInfoV2BaseStationIdentityCode: number | null, valueGeranInfoV2TimingAdvance: number | null, valueGeranInfoV2RxLevel: number | null, valueGeranInfoV2Cell: MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement[] | null }
    getInterfrequencyLteInfo(): { returnType: boolean, valueInterfrequencyLteInfoUeInIdle: boolean | null, valueInterfrequencyLteInfoFrequency: MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement[] | null }
    getIntrafrequencyLteInfoV2(): { returnType: boolean, valueIntrafrequencyLteInfoV2UeInIdle: boolean | null, valueIntrafrequencyLteInfoV2Plmn: any[] | null, valueIntrafrequencyLteInfoV2TrackingAreaCode: number | null, valueIntrafrequencyLteInfoV2GlobalCellId: number | null, valueIntrafrequencyLteInfoV2EutraAbsoluteRfChannelNumber: number | null, valueIntrafrequencyLteInfoV2ServingCellId: number | null, valueIntrafrequencyLteInfoV2CellReselectionPriority: number | null, valueIntrafrequencyLteInfoV2SNonIntraSearchThreshold: number | null, valueIntrafrequencyLteInfoV2ServingCellLowThreshold: number | null, valueIntrafrequencyLteInfoV2SIntraSearchThreshold: number | null, valueIntrafrequencyLteInfoV2Cell: MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement[] | null }
    getLteInfoNeighboringGsm(): { returnType: boolean, valueLteInfoNeighboringGsmUeInIdle: boolean | null, valueLteInfoNeighboringGsmFrequency: MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement[] | null }
    getLteInfoNeighboringWcdma(): { returnType: boolean, valueLteInfoNeighboringWcdmaUeInIdle: boolean | null, valueLteInfoNeighboringWcdmaFrequency: MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement[] | null }
    getLteInfoTimingAdvance(): { returnType: boolean, valueLteInfoTimingAdvance: number | null }
    getNr5gArfcn(): { returnType: boolean, valueNr5gArfcn: number | null }
    getNr5gCellInformation(): { returnType: boolean, valueNr5gCellInformationPlmn: any[] | null, valueNr5gCellInformationTrackingAreaCode: any[] | null, valueNr5gCellInformationGlobalCellId: number | null, valueNr5gCellInformationPhysicalCellId: number | null, valueNr5gCellInformationRsrq: number | null, valueNr5gCellInformationRsrp: number | null, valueNr5gCellInformationSnr: number | null }
    getResult(): boolean
    getUmtsCellId(): { returnType: boolean, valueUmtsCellId: number | null }
    getUmtsInfoNeighboringLte(): { returnType: boolean, valueUmtsInfoNeighboringLteRrcState: NasWcdmaRrcState | null, valueUmtsInfoNeighboringLteFrequency: MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement[] | null }
    getUmtsInfoV2(): { returnType: boolean, valueUmtsInfoV2CellId: number | null, valueUmtsInfoV2Plmn: any[] | null, valueUmtsInfoV2Lac: number | null, valueUmtsInfoV2UtraAbsoluteRfChannelNumber: number | null, valueUmtsInfoV2PrimaryScramblingCode: number | null, valueUmtsInfoV2Rscp: number | null, valueUmtsInfoV2Ecio: number | null, valueUmtsInfoV2Cell: MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement[] | null, valueUmtsInfoV2NeighboringGeran: MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement[] | null }
    ref(): MessageNasGetCellLocationInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement */
    cellId: number
    plmn: object[]
    lac: number
    geranAbsoluteRfChannelNumber: number
    baseStationIdentityCode: number
    rxLevel: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement */
    eutraAbsoluteRfChannelNumber: number
    cellSelectionRxLevelLowThreshold: number
    cellSelectionRxLevelHighThreshold: number
    cellReselectionPriority: number
    cell: object[]
    static name: string
}
export class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement */
    physicalCellId: number
    rsrq: number
    rsrp: number
    rssi: number
    cellSelectionRxLevel: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement */
    physicalCellId: number
    rsrq: number
    rsrp: number
    rssi: number
    cellSelectionRxLevel: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement */
    cellReselectionPriority: number
    cellReselectionHighThreshold: number
    cellReselectionLowThreshold: number
    nccPermitted: number
    cell: object[]
    static name: string
}
export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement */
    geranAbsoluteRfChannelNumber: number
    bandIs1900: boolean
    cellIdValid: boolean
    baseStationIdentityCode: number
    rssi: number
    cellSelectionRxLevel: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement */
    utraAbsoluteRfChannelNumber: number
    cellReselectionPriority: number
    cellReselectionHighThreshold: number
    cellReselectionLowThreshold: number
    cell: object[]
    static name: string
}
export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement */
    primaryScramblingCode: number
    cpichRscp: number
    cpichEcno: number
    cellSelectionRxLevel: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement */
    eutraAbsoluteRfChannelNumber: number
    physicalCellId: number
    rsrp: number
    rsrq: number
    cellSelectionRxLevel: number
    isTdd: boolean
    static name: string
}
export class MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement */
    utraAbsoluteRfChannelNumber: number
    primaryScramblingCode: number
    rscp: number
    ecio: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement */
    geranAbsoluteRfChannelNumber: number
    networkColorCode: number
    baseStationColorCode: number
    rssi: number
    static name: string
}
export class MessageNasGetDrxOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetDrxOutput */
    getInfo(): { returnType: boolean, valueInfo: NasDrx | null }
    getResult(): boolean
    ref(): MessageNasGetDrxOutput
    unref(): void
    static name: string
}
export class MessageNasGetHomeNetworkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetHomeNetworkOutput */
    getHomeNetwork(): { returnType: boolean, valueHomeNetworkMcc: number | null, valueHomeNetworkMnc: number | null, valueHomeNetworkDescription: string | null }
    getHomeNetwork3gpp2Ext(): { returnType: boolean, valueHomeNetwork3gpp2ExtMcc: number | null, valueHomeNetwork3gpp2ExtMnc: number | null, valueHomeNetwork3gpp2ExtDisplayDescription: NasNetworkDescriptionDisplay | null, valueHomeNetwork3gpp2ExtDescriptionEncoding: NasNetworkDescriptionEncoding | null, valueHomeNetwork3gpp2ExtDescription: any[] | null }
    getHomeNetwork3gppMnc(): { returnType: boolean, valueHomeNetwork3gppMncIs3gpp: boolean | null, valueHomeNetwork3gppMncIncludesPcsDigit: boolean | null }
    getHomeSystemId(): { returnType: boolean, valueHomeSystemIdSid: number | null, valueHomeSystemIdNid: number | null }
    getNetworkNameSource(): { returnType: boolean, valueNetworkNameSource: NasNetworkNameSource | null }
    getResult(): boolean
    ref(): MessageNasGetHomeNetworkOutput
    unref(): void
    static name: string
}
export class MessageNasGetLteCphyCaInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetLteCphyCaInfoOutput */
    getDlBandwidth(): { returnType: boolean, valueDlBandwidth: NasDLBandwidth | null }
    getPhyCaAggPcellInfo(): { returnType: boolean, valuePhyCaAggPcellInfoPhysicalCellId: number | null, valuePhyCaAggPcellInfoRxChannel: number | null, valuePhyCaAggPcellInfoDlBandwidth: NasDLBandwidth | null, valuePhyCaAggPcellInfoLteBand: NasActiveBand | null }
    getPhyCaAggScellInfo(): { returnType: boolean, valuePhyCaAggScellInfoPhysicalCellId: number | null, valuePhyCaAggScellInfoRxChannel: number | null, valuePhyCaAggScellInfoDlBandwidth: NasDLBandwidth | null, valuePhyCaAggScellInfoLteBand: NasActiveBand | null, valuePhyCaAggScellInfoState: NasScellState | null }
    getPhyCaAggSecondaryCells(): { returnType: boolean, valuePhyCaAggSecondaryCells: MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc[] | null }
    getResult(): boolean
    getScellIndex(): { returnType: boolean, valueScellIndex: number | null }
    ref(): MessageNasGetLteCphyCaInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc */
    physicalCellId: number
    rxChannel: number
    dlBandwidth: NasDLBandwidth
    lteBand: NasActiveBand
    state: NasScellState
    cellIndex: number
    static name: string
}
export class MessageNasGetOperatorNameOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetOperatorNameOutput */
    getNitzInformation(): { returnType: boolean, valueNitzInformationNameEncoding: NasPlmnEncodingScheme | null, valueNitzInformationShortCountryInitials: NasPlmnNameCountryInitials | null, valueNitzInformationLongNameSpareBits: NasPlmnNameSpareBits | null, valueNitzInformationShortNameSpareBits: NasPlmnNameSpareBits | null, valueNitzInformationLongName: any[] | null, valueNitzInformationShortName: any[] | null }
    getOperatorPlmnList(): { returnType: boolean, valueOperatorPlmnList: MessageNasGetOperatorNameOutputOperatorPlmnListElement[] | null }
    getOperatorPlmnName(): { returnType: boolean, valueOperatorPlmnName: MessageNasGetOperatorNameOutputOperatorPlmnNameElement[] | null }
    getOperatorStringName(): { returnType: boolean, valueOperatorStringName: string | null }
    getResult(): boolean
    getServiceProviderName(): { returnType: boolean, valueServiceProviderNameNameDisplayCondition: NasNetworkNameDisplayCondition | null, valueServiceProviderNameName: string | null }
    ref(): MessageNasGetOperatorNameOutput
    unref(): void
    static name: string
}
export class MessageNasGetOperatorNameOutputOperatorPlmnListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetOperatorNameOutputOperatorPlmnListElement */
    mcc: string
    mnc: string
    lac1: number
    lac2: number
    plmnNameRecordIdentifier: number
    static name: string
}
export class MessageNasGetOperatorNameOutputOperatorPlmnNameElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetOperatorNameOutputOperatorPlmnNameElement */
    nameEncoding: NasPlmnEncodingScheme
    shortCountryInitials: NasPlmnNameCountryInitials
    longNameSpareBits: NasPlmnNameSpareBits
    shortNameSpareBits: NasPlmnNameSpareBits
    longName: object[]
    shortName: object[]
    static name: string
}
export class MessageNasGetPlmnNameInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetPlmnNameInput */
    getAlwaysSendPlmnName(): { returnType: boolean, valueAlwaysSendPlmnName: boolean | null }
    getCsgId(): { returnType: boolean, valueCsgId: number | null }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: boolean | null }
    getPlmn(): { returnType: boolean, valuePlmnMcc: number | null, valuePlmnMnc: number | null }
    getRadioAccessTechnology(): { returnType: boolean, valueRadioAccessTechnology: NasRadioInterface | null }
    getSendAllInformation(): { returnType: boolean, valueSendAllInformation: boolean | null }
    getSuppressSimError(): { returnType: boolean, valueSuppressSimError: boolean | null }
    getUseStaticTableOnly(): { returnType: boolean, valueUseStaticTableOnly: boolean | null }
    ref(): MessageNasGetPlmnNameInput
    setAlwaysSendPlmnName(valueAlwaysSendPlmnName: boolean): boolean
    setCsgId(valueCsgId: number): boolean
    setMncPcsDigitIncludeStatus(valueMncPcsDigitIncludeStatus: boolean): boolean
    setPlmn(valuePlmnMcc: number, valuePlmnMnc: number): boolean
    setRadioAccessTechnology(valueRadioAccessTechnology: NasRadioInterface): boolean
    setSendAllInformation(valueSendAllInformation: boolean): boolean
    setSuppressSimError(valueSuppressSimError: boolean): boolean
    setUseStaticTableOnly(valueUseStaticTableOnly: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetPlmnNameInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetPlmnNameInput
}
export class MessageNasGetPlmnNameOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetPlmnNameOutput */
    get3gppEonsPlmnName(): { returnType: boolean, value3gppEonsPlmnNameServiceProviderNameEncoding: NasNetworkDescriptionEncoding | null, value3gppEonsPlmnNameServiceProviderName: any[] | null, value3gppEonsPlmnNameShortNameEncoding: NasNetworkDescriptionEncoding | null, value3gppEonsPlmnNameShortNameCountryInitials: NasPlmnNameCountryInitials | null, value3gppEonsPlmnNameShortNameSpareBits: NasPlmnNameSpareBits | null, value3gppEonsPlmnNameShortName: any[] | null, value3gppEonsPlmnNameLongNameEncoding: NasNetworkDescriptionEncoding | null, value3gppEonsPlmnNameLongNameCountryInitials: NasPlmnNameCountryInitials | null, value3gppEonsPlmnNameLongNameSpareBits: NasPlmnNameSpareBits | null, value3gppEonsPlmnNameLongName: any[] | null }
    getAdditionalInformation(): { returnType: boolean, valueAdditionalInformation: number[] | null }
    getDisplayBitInformation(): { returnType: boolean, valueDisplayBitInformationServiceProviderNameSet: NasBoolean | null, valueDisplayBitInformationPlmnNameSet: NasBoolean | null }
    getNetworkInformation(): { returnType: boolean, valueNetworkInformation: NasBoolean | null }
    getNetworkNameSource(): { returnType: boolean, valueNetworkNameSource: NasNetworkNameSource | null }
    getPlmnNameWithLanguageId(): { returnType: boolean, valuePlmnNameWithLanguageId: MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement[] | null }
    getResult(): boolean
    ref(): MessageNasGetPlmnNameOutput
    unref(): void
    static name: string
}
export class MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement */
    longName: object[]
    shortName: object[]
    languageId: NasPlmnLanguageId
    static name: string
}
export class MessageNasGetPreferredNetworksOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetPreferredNetworksOutput */
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement[] | null }
    getPreferredNetworks(): { returnType: boolean, valuePreferredNetworks: MessageNasGetPreferredNetworksOutputPreferredNetworksElement[] | null }
    getResult(): boolean
    ref(): MessageNasGetPreferredNetworksOutput
    unref(): void
    static name: string
}
export class MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement */
    mcc: number
    mnc: number
    includesPcsDigit: boolean
    static name: string
}
export class MessageNasGetPreferredNetworksOutputPreferredNetworksElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetPreferredNetworksOutputPreferredNetworksElement */
    mcc: number
    mnc: number
    radioAccessTechnology: NasPlmnAccessTechnologyIdentifier
    static name: string
}
export class MessageNasGetRfBandInformationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutput */
    getBandwidthList(): { returnType: boolean, valueBandwidthList: MessageNasGetRfBandInformationOutputBandwidthListElement[] | null }
    getExtendedList(): { returnType: boolean, valueExtendedList: MessageNasGetRfBandInformationOutputExtendedListElement[] | null }
    getList(): { returnType: boolean, valueList: MessageNasGetRfBandInformationOutputListElement[] | null }
    getResult(): boolean
    ref(): MessageNasGetRfBandInformationOutput
    unref(): void
    static name: string
}
export class MessageNasGetRfBandInformationOutputBandwidthListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutputBandwidthListElement */
    radioInterface: NasRadioInterface
    bandwidth: NasDLBandwidth
    static name: string
}
export class MessageNasGetRfBandInformationOutputExtendedListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutputExtendedListElement */
    radioInterface: NasRadioInterface
    activeBandClass: NasActiveBand
    activeChannel: number
    static name: string
}
export class MessageNasGetRfBandInformationOutputListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutputListElement */
    radioInterface: NasRadioInterface
    activeBandClass: NasActiveBand
    activeChannel: number
    static name: string
}
export class MessageNasGetServingSystemOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetServingSystemOutput */
    getCallBarringStatus(): { returnType: boolean, valueCallBarringStatusCsStatus: NasCallBarringStatus | null, valueCallBarringStatusPsStatus: NasCallBarringStatus | null }
    getCdmaBaseStationInfo(): { returnType: boolean, valueCdmaBaseStationInfoBaseStationId: number | null, valueCdmaBaseStationInfoBaseStationLatitude: number | null, valueCdmaBaseStationInfoBaseStationLongitude: number | null }
    getCdmaPRev(): { returnType: boolean, valueCdmaPRev: number | null }
    getCdmaSystemId(): { returnType: boolean, valueCdmaSystemIdSid: number | null, valueCdmaSystemIdNid: number | null }
    getCdmaSystemInfo(): { returnType: boolean, valueCdmaSystemInfoMcc: number | null, valueCdmaSystemInfoImsi1112: number | null }
    getCid3gpp(): { returnType: boolean, valueCid3gpp: number | null }
    getConcurrentServiceInfo3gpp2(): { returnType: boolean, valueConcurrentServiceInfo3gpp2: boolean | null }
    getCurrentPlmn(): { returnType: boolean, valueCurrentPlmnMcc: number | null, valueCurrentPlmnMnc: number | null, valueCurrentPlmnDescription: string | null }
    getDataServiceCapability(): { returnType: boolean, valueDataServiceCapability: NasDataCapability[] | null }
    getDaylightSavingTimeAdjustment3gpp(): { returnType: boolean, valueDaylightSavingTimeAdjustment3gpp: number | null }
    getDefaultRoamingIndicator(): { returnType: boolean, valueDefaultRoamingIndicator: NasRoamingIndicatorStatus | null }
    getDetailedServiceStatus(): { returnType: boolean, valueDetailedServiceStatusStatus: NasServiceStatus | null, valueDetailedServiceStatusCapability: NasNetworkServiceDomain | null, valueDetailedServiceStatusHdrStatus: NasServiceStatus | null, valueDetailedServiceStatusHdrHybrid: boolean | null, valueDetailedServiceStatusForbidden: boolean | null }
    getDtmSupport(): { returnType: boolean, valueDtmSupport: boolean | null }
    getHdrPersonality(): { returnType: boolean, valueHdrPersonality: NasHdrPersonality | null }
    getLac3gpp(): { returnType: boolean, valueLac3gpp: number | null }
    getLteTac(): { returnType: boolean, valueLteTac: number | null }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatusMcc: number | null, valueMncPcsDigitIncludeStatusMnc: number | null, valueMncPcsDigitIncludeStatusIncludesPcsDigit: boolean | null }
    getNetworkNameSource(): { returnType: boolean, valueNetworkNameSource: NasNetworkNameSource | null }
    getPrlIndicator3gpp2(): { returnType: boolean, valuePrlIndicator3gpp2: boolean | null }
    getResult(): boolean
    getRoamingIndicator(): { returnType: boolean, valueRoamingIndicator: NasRoamingIndicatorStatus | null }
    getRoamingIndicatorList(): { returnType: boolean, valueRoamingIndicatorList: MessageNasGetServingSystemOutputRoamingIndicatorListElement[] | null }
    getServingSystem(): { returnType: boolean, valueServingSystemRegistrationState: NasRegistrationState | null, valueServingSystemCsAttachState: NasAttachState | null, valueServingSystemPsAttachState: NasAttachState | null, valueServingSystemSelectedNetwork: NasNetworkType | null, valueServingSystemRadioInterfaces: NasRadioInterface[] | null }
    getTimeZone3gpp(): { returnType: boolean, valueTimeZone3gpp: number | null }
    getTimeZone3gpp2(): { returnType: boolean, valueTimeZone3gpp2LeapSeconds: number | null, valueTimeZone3gpp2LocalTimeOffset: number | null, valueTimeZone3gpp2DaylightSavingTime: boolean | null }
    getUmtsPrimaryScramblingCode(): { returnType: boolean, valueUmtsPrimaryScramblingCode: number | null }
    ref(): MessageNasGetServingSystemOutput
    unref(): void
    static name: string
}
export class MessageNasGetServingSystemOutputRoamingIndicatorListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetServingSystemOutputRoamingIndicatorListElement */
    radioInterface: NasRadioInterface
    roamingIndicator: NasRoamingIndicatorStatus
    static name: string
}
export class MessageNasGetSignalInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSignalInfoOutput */
    get5gSignalStrength(): { returnType: boolean, value5gSignalStrengthRsrp: number | null, value5gSignalStrengthSnr: number | null }
    get5gSignalStrengthExtended(): { returnType: boolean, value5gSignalStrengthExtended: number | null }
    getCdmaSignalStrength(): { returnType: boolean, valueCdmaSignalStrengthRssi: number | null, valueCdmaSignalStrengthEcio: number | null }
    getGsmSignalStrength(): { returnType: boolean, valueGsmSignalStrength: number | null }
    getHdrSignalStrength(): { returnType: boolean, valueHdrSignalStrengthRssi: number | null, valueHdrSignalStrengthEcio: number | null, valueHdrSignalStrengthSinr: NasEvdoSinrLevel | null, valueHdrSignalStrengthIo: number | null }
    getLteSignalStrength(): { returnType: boolean, valueLteSignalStrengthRssi: number | null, valueLteSignalStrengthRsrq: number | null, valueLteSignalStrengthRsrp: number | null, valueLteSignalStrengthSnr: number | null }
    getResult(): boolean
    getTdmaSignalStrength(): { returnType: boolean, valueTdmaSignalStrength: number | null }
    getTdmaSignalStrengthExtended(): { returnType: boolean, valueTdmaSignalStrengthExtendedRssi: number | null, valueTdmaSignalStrengthExtendedRscp: number | null, valueTdmaSignalStrengthExtendedEcio: number | null, valueTdmaSignalStrengthExtendedSinr: number | null }
    getWcdmaSignalStrength(): { returnType: boolean, valueWcdmaSignalStrengthRssi: number | null, valueWcdmaSignalStrengthEcio: number | null }
    ref(): MessageNasGetSignalInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetSignalStrengthInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSignalStrengthInput */
    getRequestMask(): { returnType: boolean, valueRequestMask: NasSignalStrengthRequest | null }
    ref(): MessageNasGetSignalStrengthInput
    setRequestMask(valueRequestMask: NasSignalStrengthRequest): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetSignalStrengthInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetSignalStrengthInput
}
export class MessageNasGetSignalStrengthOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutput */
    getEcioList(): { returnType: boolean, valueEcioList: MessageNasGetSignalStrengthOutputEcioListElement[] | null }
    getErrorRateList(): { returnType: boolean, valueErrorRateList: MessageNasGetSignalStrengthOutputErrorRateListElement[] | null }
    getIo(): { returnType: boolean, valueIo: number | null }
    getLteRsrp(): { returnType: boolean, valueLteRsrp: number | null }
    getLteSnr(): { returnType: boolean, valueLteSnr: number | null }
    getResult(): boolean
    getRsrq(): { returnType: boolean, valueRsrqRsrq: number | null, valueRsrqRadioInterface: NasRadioInterface | null }
    getRssiList(): { returnType: boolean, valueRssiList: MessageNasGetSignalStrengthOutputRssiListElement[] | null }
    getSignalStrength(): { returnType: boolean, valueSignalStrengthStrength: number | null, valueSignalStrengthRadioInterface: NasRadioInterface | null }
    getSinr(): { returnType: boolean, valueSinr: NasEvdoSinrLevel | null }
    getStrengthList(): { returnType: boolean, valueStrengthList: MessageNasGetSignalStrengthOutputStrengthListElement[] | null }
    ref(): MessageNasGetSignalStrengthOutput
    unref(): void
    static name: string
}
export class MessageNasGetSignalStrengthOutputEcioListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutputEcioListElement */
    ecio: number
    radioInterface: NasRadioInterface
    static name: string
}
export class MessageNasGetSignalStrengthOutputErrorRateListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutputErrorRateListElement */
    rate: number
    radioInterface: NasRadioInterface
    static name: string
}
export class MessageNasGetSignalStrengthOutputRssiListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutputRssiListElement */
    rssi: number
    radioInterface: NasRadioInterface
    static name: string
}
export class MessageNasGetSignalStrengthOutputStrengthListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutputStrengthListElement */
    strength: number
    radioInterface: NasRadioInterface
    static name: string
}
export class MessageNasGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] | null }
    getResult(): boolean
    ref(): MessageNasGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageNasGetSystemInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSystemInfoOutput */
    getAdditionalCdmaSystemInfo(): { returnType: boolean, valueAdditionalCdmaSystemInfoGeoSystemIndex: number | null, valueAdditionalCdmaSystemInfoRegistrationPeriod: number | null }
    getAdditionalGsmSystemInfo(): { returnType: boolean, valueAdditionalGsmSystemInfoGeoSystemIndex: number | null, valueAdditionalGsmSystemInfoCellBroadcastSupport: NasCellBroadcastCapability | null }
    getAdditionalHdrSystemInfo(): { returnType: boolean, valueAdditionalHdrSystemInfoGeoSystemIndex: number | null }
    getAdditionalLteSystemInfo(): { returnType: boolean, valueAdditionalLteSystemInfoGeoSystemIndex: number | null }
    getAdditionalWcdmaSystemInfo(): { returnType: boolean, valueAdditionalWcdmaSystemInfoGeoSystemIndex: number | null, valueAdditionalWcdmaSystemInfoCellBroadcastSupport: NasCellBroadcastCapability | null }
    getCdmaRegistrationZoneId(): { returnType: boolean, valueCdmaRegistrationZoneId: number | null }
    getCdmaResolvedMcc(): { returnType: boolean, valueCdmaResolvedMcc: number | null }
    getCdmaServiceStatus(): { returnType: boolean, valueCdmaServiceStatusServiceStatus: NasServiceStatus | null, valueCdmaServiceStatusPreferredDataPath: boolean | null }
    getCdmaSystemInfo(): { returnType: boolean, valueCdmaSystemInfoDomainValid: boolean | null, valueCdmaSystemInfoDomain: NasNetworkServiceDomain | null, valueCdmaSystemInfoServiceCapabilityValid: boolean | null, valueCdmaSystemInfoServiceCapability: NasNetworkServiceDomain | null, valueCdmaSystemInfoRoamingStatusValid: boolean | null, valueCdmaSystemInfoRoamingStatus: NasRoamingStatus | null, valueCdmaSystemInfoForbiddenValid: boolean | null, valueCdmaSystemInfoForbidden: boolean | null, valueCdmaSystemInfoPrlMatchValid: boolean | null, valueCdmaSystemInfoPrlMatch: boolean | null, valueCdmaSystemInfoPRevValid: boolean | null, valueCdmaSystemInfoPRev: number | null, valueCdmaSystemInfoBaseStationPRevValid: boolean | null, valueCdmaSystemInfoBaseStationPRev: number | null, valueCdmaSystemInfoConcurrentServiceSupportValid: boolean | null, valueCdmaSystemInfoConcurrentServiceSupport: boolean | null, valueCdmaSystemInfoCdmaSystemIdValid: boolean | null, valueCdmaSystemInfoSid: number | null, valueCdmaSystemInfoNid: number | null, valueCdmaSystemInfoBaseStationInfoValid: boolean | null, valueCdmaSystemInfoBaseStationId: number | null, valueCdmaSystemInfoBaseStationLatitude: number | null, valueCdmaSystemInfoBaseStationLongitude: number | null, valueCdmaSystemInfoPacketZoneValid: boolean | null, valueCdmaSystemInfoPacketZone: number | null, valueCdmaSystemInfoNetworkIdValid: boolean | null, valueCdmaSystemInfoMcc: string | null, valueCdmaSystemInfoMnc: string | null }
    getDcnrRestrictionInfo(): { returnType: boolean, valueDcnrRestrictionInfo: boolean | null }
    getEutraWithNr5gAvailability(): { returnType: boolean, valueEutraWithNr5gAvailability: boolean | null }
    getGsmCallBarringStatus(): { returnType: boolean, valueGsmCallBarringStatusCsStatus: NasCallBarringStatus | null, valueGsmCallBarringStatusPsStatus: NasCallBarringStatus | null }
    getGsmCipherDomain(): { returnType: boolean, valueGsmCipherDomain: NasNetworkServiceDomain | null }
    getGsmRoutingAreaCode(): { returnType: boolean, valueGsmRoutingAreaCode: number | null }
    getGsmServiceStatus(): { returnType: boolean, valueGsmServiceStatusServiceStatus: NasServiceStatus | null, valueGsmServiceStatusTrueServiceStatus: NasServiceStatus | null, valueGsmServiceStatusPreferredDataPath: boolean | null }
    getGsmSystemInfoV2(): { returnType: boolean, valueGsmSystemInfoV2DomainValid: boolean | null, valueGsmSystemInfoV2Domain: NasNetworkServiceDomain | null, valueGsmSystemInfoV2ServiceCapabilityValid: boolean | null, valueGsmSystemInfoV2ServiceCapability: NasNetworkServiceDomain | null, valueGsmSystemInfoV2RoamingStatusValid: boolean | null, valueGsmSystemInfoV2RoamingStatus: NasRoamingStatus | null, valueGsmSystemInfoV2ForbiddenValid: boolean | null, valueGsmSystemInfoV2Forbidden: boolean | null, valueGsmSystemInfoV2LacValid: boolean | null, valueGsmSystemInfoV2Lac: number | null, valueGsmSystemInfoV2CidValid: boolean | null, valueGsmSystemInfoV2Cid: number | null, valueGsmSystemInfoV2RegistrationRejectInfoValid: boolean | null, valueGsmSystemInfoV2RegistrationRejectDomain: NasNetworkServiceDomain | null, valueGsmSystemInfoV2RegistrationRejectCause: NasRejectCause | null, valueGsmSystemInfoV2NetworkIdValid: boolean | null, valueGsmSystemInfoV2Mcc: string | null, valueGsmSystemInfoV2Mnc: string | null, valueGsmSystemInfoV2EgprsSupportValid: boolean | null, valueGsmSystemInfoV2EgprsSupport: boolean | null, valueGsmSystemInfoV2DtmSupportValid: boolean | null, valueGsmSystemInfoV2DtmSupport: boolean | null }
    getHdrServiceStatus(): { returnType: boolean, valueHdrServiceStatusServiceStatus: NasServiceStatus | null, valueHdrServiceStatusPreferredDataPath: boolean | null }
    getHdrSystemInfo(): { returnType: boolean, valueHdrSystemInfoDomainValid: boolean | null, valueHdrSystemInfoDomain: NasNetworkServiceDomain | null, valueHdrSystemInfoServiceCapabilityValid: boolean | null, valueHdrSystemInfoServiceCapability: NasNetworkServiceDomain | null, valueHdrSystemInfoRoamingStatusValid: boolean | null, valueHdrSystemInfoRoamingStatus: NasRoamingStatus | null, valueHdrSystemInfoForbiddenValid: boolean | null, valueHdrSystemInfoForbidden: boolean | null, valueHdrSystemInfoPrlMatchValid: boolean | null, valueHdrSystemInfoPrlMatch: boolean | null, valueHdrSystemInfoPersonalityValid: boolean | null, valueHdrSystemInfoPersonality: NasHdrPersonality | null, valueHdrSystemInfoProtocolRevisionValid: boolean | null, valueHdrSystemInfoProtocolRevision: NasHdrProtocolRevision | null, valueHdrSystemInfoIs856SystemIdValid: boolean | null, valueHdrSystemInfoIs856SystemId: string | null }
    getImsVoiceSupport(): { returnType: boolean, valueImsVoiceSupport: boolean | null }
    getLteCellAccessStatus(): { returnType: boolean, valueLteCellAccessStatus: NasLteCellAccessStatus | null }
    getLteEmbmsCoverageInfoSupport(): { returnType: boolean, valueLteEmbmsCoverageInfoSupport: boolean | null }
    getLteEmbmsCoverageInfoTraceId(): { returnType: boolean, valueLteEmbmsCoverageInfoTraceId: number | null }
    getLteRegistrationDomain(): { returnType: boolean, valueLteRegistrationDomain: NasLteRegistrationDomain | null }
    getLteServiceStatus(): { returnType: boolean, valueLteServiceStatusServiceStatus: NasServiceStatus | null, valueLteServiceStatusTrueServiceStatus: NasServiceStatus | null, valueLteServiceStatusPreferredDataPath: boolean | null }
    getLteSystemInfoV2(): { returnType: boolean, valueLteSystemInfoV2DomainValid: boolean | null, valueLteSystemInfoV2Domain: NasNetworkServiceDomain | null, valueLteSystemInfoV2ServiceCapabilityValid: boolean | null, valueLteSystemInfoV2ServiceCapability: NasNetworkServiceDomain | null, valueLteSystemInfoV2RoamingStatusValid: boolean | null, valueLteSystemInfoV2RoamingStatus: NasRoamingStatus | null, valueLteSystemInfoV2ForbiddenValid: boolean | null, valueLteSystemInfoV2Forbidden: boolean | null, valueLteSystemInfoV2LacValid: boolean | null, valueLteSystemInfoV2Lac: number | null, valueLteSystemInfoV2CidValid: boolean | null, valueLteSystemInfoV2Cid: number | null, valueLteSystemInfoV2RegistrationRejectInfoValid: boolean | null, valueLteSystemInfoV2RegistrationRejectDomain: NasNetworkServiceDomain | null, valueLteSystemInfoV2RegistrationRejectCause: NasRejectCause | null, valueLteSystemInfoV2NetworkIdValid: boolean | null, valueLteSystemInfoV2Mcc: string | null, valueLteSystemInfoV2Mnc: string | null, valueLteSystemInfoV2TacValid: boolean | null, valueLteSystemInfoV2Tac: number | null }
    getLteVoiceDomain(): { returnType: boolean, valueLteVoiceDomain: NasLteVoiceDomain | null }
    getLteVoiceSupport(): { returnType: boolean, valueLteVoiceSupport: boolean | null }
    getNetworkSelectionRegistrationRestriction(): { returnType: boolean, valueNetworkSelectionRegistrationRestriction: NasNetworkSelectionRegistrationRestriction | null }
    getNr5gServiceStatusInfo(): { returnType: boolean, valueNr5gServiceStatusInfoServiceStatus: NasServiceStatus | null, valueNr5gServiceStatusInfoTrueServiceStatus: NasServiceStatus | null, valueNr5gServiceStatusInfoPreferredDataPath: boolean | null }
    getNr5gSystemInfo(): { returnType: boolean, valueNr5gSystemInfoDomainValid: boolean | null, valueNr5gSystemInfoDomain: NasNetworkServiceDomain | null, valueNr5gSystemInfoServiceCapabilityValid: boolean | null, valueNr5gSystemInfoServiceCapability: NasNetworkServiceDomain | null, valueNr5gSystemInfoRoamingStatusValid: boolean | null, valueNr5gSystemInfoRoamingStatus: NasRoamingStatus | null, valueNr5gSystemInfoForbiddenValid: boolean | null, valueNr5gSystemInfoForbidden: boolean | null, valueNr5gSystemInfoLacValid: boolean | null, valueNr5gSystemInfoLac: number | null, valueNr5gSystemInfoCidValid: boolean | null, valueNr5gSystemInfoCid: number | null, valueNr5gSystemInfoRegistrationRejectInfoValid: boolean | null, valueNr5gSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain | null, valueNr5gSystemInfoRegistrationRejectCause: number | null, valueNr5gSystemInfoNetworkIdValid: boolean | null, valueNr5gSystemInfoMcc: string | null, valueNr5gSystemInfoMnc: string | null, valueNr5gSystemInfoTacValid: boolean | null, valueNr5gSystemInfoTac: number | null }
    getNr5gTrackingAreaCode(): { returnType: boolean, valueNr5gTrackingAreaCode: any[] | null }
    getResult(): boolean
    getSimRejectInfo(): { returnType: boolean, valueSimRejectInfo: NasSimRejectState | null }
    getTdScdmaServiceStatus(): { returnType: boolean, valueTdScdmaServiceStatusServiceStatus: NasServiceStatus | null, valueTdScdmaServiceStatusTrueServiceStatus: NasServiceStatus | null, valueTdScdmaServiceStatusPreferredDataPath: boolean | null }
    getTdScdmaSystemInfoV2(): { returnType: boolean, valueTdScdmaSystemInfoV2DomainValid: boolean | null, valueTdScdmaSystemInfoV2Domain: NasNetworkServiceDomain | null, valueTdScdmaSystemInfoV2ServiceCapabilityValid: boolean | null, valueTdScdmaSystemInfoV2ServiceCapability: NasNetworkServiceDomain | null, valueTdScdmaSystemInfoV2RoamingStatusValid: boolean | null, valueTdScdmaSystemInfoV2RoamingStatus: NasRoamingStatus | null, valueTdScdmaSystemInfoV2ForbiddenValid: boolean | null, valueTdScdmaSystemInfoV2Forbidden: boolean | null, valueTdScdmaSystemInfoV2LacValid: boolean | null, valueTdScdmaSystemInfoV2Lac: number | null, valueTdScdmaSystemInfoV2CidValid: boolean | null, valueTdScdmaSystemInfoV2Cid: number | null, valueTdScdmaSystemInfoV2RegistrationRejectInfoValid: boolean | null, valueTdScdmaSystemInfoV2RegistrationRejectDomain: NasNetworkServiceDomain | null, valueTdScdmaSystemInfoV2RegistrationRejectCause: NasRejectCause | null, valueTdScdmaSystemInfoV2NetworkIdValid: boolean | null, valueTdScdmaSystemInfoV2Mcc: string | null, valueTdScdmaSystemInfoV2Mnc: string | null, valueTdScdmaSystemInfoV2HsCallStatusValid: boolean | null, valueTdScdmaSystemInfoV2HsCallStatus: NasWcdmaHsService | null, valueTdScdmaSystemInfoV2HsServiceValid: boolean | null, valueTdScdmaSystemInfoV2HsService: NasWcdmaHsService | null, valueTdScdmaSystemInfoV2CellParameterIdValid: boolean | null, valueTdScdmaSystemInfoV2CellParameterId: number | null, valueTdScdmaSystemInfoV2CellBroadcastSupportValid: boolean | null, valueTdScdmaSystemInfoV2CellBroadcastSupport: NasCellBroadcastCapability | null, valueTdScdmaSystemInfoV2CsCallBarringStatusValid: boolean | null, valueTdScdmaSystemInfoV2CsCallBarringStatus: NasCallBarringStatus | null, valueTdScdmaSystemInfoV2PsCallBarringStatusValid: boolean | null, valueTdScdmaSystemInfoV2PsCallBarringStatus: NasCallBarringStatus | null, valueTdScdmaSystemInfoV2CipherDomainValid: boolean | null, valueTdScdmaSystemInfoV2CipherDomain: NasNetworkServiceDomain | null }
    getWcdmaCallBarringStatus(): { returnType: boolean, valueWcdmaCallBarringStatusCsStatus: NasCallBarringStatus | null, valueWcdmaCallBarringStatusPsStatus: NasCallBarringStatus | null }
    getWcdmaCipherDomain(): { returnType: boolean, valueWcdmaCipherDomain: NasNetworkServiceDomain | null }
    getWcdmaRoutingAreaCode(): { returnType: boolean, valueWcdmaRoutingAreaCode: number | null }
    getWcdmaServiceStatus(): { returnType: boolean, valueWcdmaServiceStatusServiceStatus: NasServiceStatus | null, valueWcdmaServiceStatusTrueServiceStatus: NasServiceStatus | null, valueWcdmaServiceStatusPreferredDataPath: boolean | null }
    getWcdmaSystemInfoV2(): { returnType: boolean, valueWcdmaSystemInfoV2DomainValid: boolean | null, valueWcdmaSystemInfoV2Domain: NasNetworkServiceDomain | null, valueWcdmaSystemInfoV2ServiceCapabilityValid: boolean | null, valueWcdmaSystemInfoV2ServiceCapability: NasNetworkServiceDomain | null, valueWcdmaSystemInfoV2RoamingStatusValid: boolean | null, valueWcdmaSystemInfoV2RoamingStatus: NasRoamingStatus | null, valueWcdmaSystemInfoV2ForbiddenValid: boolean | null, valueWcdmaSystemInfoV2Forbidden: boolean | null, valueWcdmaSystemInfoV2LacValid: boolean | null, valueWcdmaSystemInfoV2Lac: number | null, valueWcdmaSystemInfoV2CidValid: boolean | null, valueWcdmaSystemInfoV2Cid: number | null, valueWcdmaSystemInfoV2RegistrationRejectInfoValid: boolean | null, valueWcdmaSystemInfoV2RegistrationRejectDomain: NasNetworkServiceDomain | null, valueWcdmaSystemInfoV2RegistrationRejectCause: NasRejectCause | null, valueWcdmaSystemInfoV2NetworkIdValid: boolean | null, valueWcdmaSystemInfoV2Mcc: string | null, valueWcdmaSystemInfoV2Mnc: string | null, valueWcdmaSystemInfoV2HsCallStatusValid: boolean | null, valueWcdmaSystemInfoV2HsCallStatus: NasWcdmaHsService | null, valueWcdmaSystemInfoV2HsServiceValid: boolean | null, valueWcdmaSystemInfoV2HsService: NasWcdmaHsService | null, valueWcdmaSystemInfoV2PrimaryScramblingCodeValid: boolean | null, valueWcdmaSystemInfoV2PrimaryScramblingCode: number | null }
    ref(): MessageNasGetSystemInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetSystemSelectionPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSystemSelectionPreferenceOutput */
    getAcquisitionOrderPreference(): { returnType: boolean, valueAcquisitionOrderPreference: NasRadioInterface[] | null }
    getBandPreference(): { returnType: boolean, valueBandPreference: NasBandPreference | null }
    getCdmaPrlPreference(): { returnType: boolean, valueCdmaPrlPreference: NasCdmaPrlPreference | null }
    getDisabledModes(): { returnType: boolean, valueDisabledModes: NasRatModePreference | null }
    getEmergencyMode(): { returnType: boolean, valueEmergencyMode: boolean | null }
    getExtendedLteBandPreference(): { returnType: boolean, valueExtendedLteBandPreferenceMaskLow: number | null, valueExtendedLteBandPreferenceMaskMidLow: number | null, valueExtendedLteBandPreferenceMaskMidHigh: number | null, valueExtendedLteBandPreferenceMaskHigh: number | null }
    getGsmWcdmaAcquisitionOrderPreference(): { returnType: boolean, valueGsmWcdmaAcquisitionOrderPreference: NasGsmWcdmaAcquisitionOrderPreference | null }
    getLteBandPreference(): { returnType: boolean, valueLteBandPreference: NasLteBandPreference | null }
    getManualNetworkSelection(): { returnType: boolean, valueManualNetworkSelectionMcc: number | null, valueManualNetworkSelectionMnc: number | null, valueManualNetworkSelectionIncludesPcsDigit: boolean | null }
    getModePreference(): { returnType: boolean, valueModePreference: NasRatModePreference | null }
    getNetworkSelectionPreference(): { returnType: boolean, valueNetworkSelectionPreference: NasNetworkSelectionPreference | null }
    getNetworkSelectionRegistrationRestriction(): { returnType: boolean, valueNetworkSelectionRegistrationRestriction: NasNetworkSelectionRegistrationRestriction | null }
    getNr5gNsaBandPreference(): { returnType: boolean, valueNr5gNsaBandPreferenceMask0: number | null, valueNr5gNsaBandPreferenceMask1: number | null, valueNr5gNsaBandPreferenceMask2: number | null, valueNr5gNsaBandPreferenceMask3: number | null, valueNr5gNsaBandPreferenceMask4: number | null, valueNr5gNsaBandPreferenceMask5: number | null, valueNr5gNsaBandPreferenceMask6: number | null, valueNr5gNsaBandPreferenceMask7: number | null }
    getNr5gSaBandPreference(): { returnType: boolean, valueNr5gSaBandPreferenceMask0: number | null, valueNr5gSaBandPreferenceMask1: number | null, valueNr5gSaBandPreferenceMask2: number | null, valueNr5gSaBandPreferenceMask3: number | null, valueNr5gSaBandPreferenceMask4: number | null, valueNr5gSaBandPreferenceMask5: number | null, valueNr5gSaBandPreferenceMask6: number | null, valueNr5gSaBandPreferenceMask7: number | null }
    getResult(): boolean
    getRoamingPreference(): { returnType: boolean, valueRoamingPreference: NasRoamingPreference | null }
    getServiceDomainPreference(): { returnType: boolean, valueServiceDomainPreference: NasServiceDomainPreference | null }
    getTdScdmaBandPreference(): { returnType: boolean, valueTdScdmaBandPreference: NasTdScdmaBandPreference | null }
    getUsagePreference(): { returnType: boolean, valueUsagePreference: NasUsagePreference | null }
    getVoiceDomainPreference(): { returnType: boolean, valueVoiceDomainPreference: NasVoiceDomainPreference | null }
    ref(): MessageNasGetSystemSelectionPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasGetTechnologyPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetTechnologyPreferenceOutput */
    getActive(): { returnType: boolean, valueActiveTechnologyPreference: NasRadioTechnologyPreference | null, valueActiveTechnologyPreferenceDuration: NasPreferenceDuration | null }
    getPersistent(): { returnType: boolean, valuePersistent: NasRadioTechnologyPreference | null }
    getResult(): boolean
    ref(): MessageNasGetTechnologyPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasGetTxRxInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetTxRxInfoInput */
    getRadioInterface(): { returnType: boolean, valueRadioInterface: NasRadioInterface | null }
    ref(): MessageNasGetTxRxInfoInput
    setRadioInterface(valueRadioInterface: NasRadioInterface): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetTxRxInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetTxRxInfoInput
}
export class MessageNasGetTxRxInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetTxRxInfoOutput */
    getResult(): boolean
    getRxChain0Info(): { returnType: boolean, valueRxChain0InfoIsRadioTuned: boolean | null, valueRxChain0InfoRxPower: number | null, valueRxChain0InfoEcio: number | null, valueRxChain0InfoRscp: number | null, valueRxChain0InfoRsrp: number | null, valueRxChain0InfoPhase: number | null }
    getRxChain1Info(): { returnType: boolean, valueRxChain1InfoIsRadioTuned: boolean | null, valueRxChain1InfoRxPower: number | null, valueRxChain1InfoEcio: number | null, valueRxChain1InfoRscp: number | null, valueRxChain1InfoRsrp: number | null, valueRxChain1InfoPhase: number | null }
    getRxChain2Info(): { returnType: boolean, valueRxChain2InfoIsRadioTuned: boolean | null, valueRxChain2InfoRxPower: number | null, valueRxChain2InfoEcio: number | null, valueRxChain2InfoRscp: number | null, valueRxChain2InfoRsrp: number | null, valueRxChain2InfoPhase: number | null }
    getRxChain3Info(): { returnType: boolean, valueRxChain3InfoIsRadioTuned: boolean | null, valueRxChain3InfoRxPower: number | null, valueRxChain3InfoEcio: number | null, valueRxChain3InfoRscp: number | null, valueRxChain3InfoRsrp: number | null, valueRxChain3InfoPhase: number | null }
    getTxInfo(): { returnType: boolean, valueTxInfoIsInTraffic: boolean | null, valueTxInfoTxPower: number | null }
    ref(): MessageNasGetTxRxInfoOutput
    unref(): void
    static name: string
}
export class MessageNasInitiateNetworkRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasInitiateNetworkRegisterInput */
    getAction(): { returnType: boolean, valueAction: NasNetworkRegisterType | null }
    getChangeDuration(): { returnType: boolean, valueChangeDuration: NasChangeDuration | null }
    getManualRegistrationInfo3gpp(): { returnType: boolean, valueManualRegistrationInfo3gppMcc: number | null, valueManualRegistrationInfo3gppMnc: number | null, valueManualRegistrationInfo3gppRadioInterface: NasRadioInterface | null }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: boolean | null }
    ref(): MessageNasInitiateNetworkRegisterInput
    setAction(valueAction: NasNetworkRegisterType): boolean
    setChangeDuration(valueChangeDuration: NasChangeDuration): boolean
    setManualRegistrationInfo3gpp(valueManualRegistrationInfo3gppMcc: number, valueManualRegistrationInfo3gppMnc: number, valueManualRegistrationInfo3gppRadioInterface: NasRadioInterface): boolean
    setMncPcsDigitIncludeStatus(valueMncPcsDigitIncludeStatus: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasInitiateNetworkRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasInitiateNetworkRegisterInput
}
export class MessageNasInitiateNetworkRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasInitiateNetworkRegisterOutput */
    getResult(): boolean
    ref(): MessageNasInitiateNetworkRegisterOutput
    unref(): void
    static name: string
}
export class MessageNasNetworkScanInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasNetworkScanInput */
    getNetworkType(): { returnType: boolean, valueNetworkType: NasNetworkScanType | null }
    ref(): MessageNasNetworkScanInput
    setNetworkType(valueNetworkType: NasNetworkScanType): boolean
    unref(): void
    static name: string
    static new(): MessageNasNetworkScanInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasNetworkScanInput
}
export class MessageNasNetworkScanOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasNetworkScanOutput */
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement[] | null }
    getNetworkInformation(): { returnType: boolean, valueNetworkInformation: MessageNasNetworkScanOutputNetworkInformationElement[] | null }
    getNetworkScanResult(): { returnType: boolean, valueNetworkScanResult: NasNetworkScanResult | null }
    getRadioAccessTechnology(): { returnType: boolean, valueRadioAccessTechnology: MessageNasNetworkScanOutputRadioAccessTechnologyElement[] | null }
    getResult(): boolean
    ref(): MessageNasNetworkScanOutput
    unref(): void
    static name: string
}
export class MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement */
    mcc: number
    mnc: number
    includesPcsDigit: boolean
    static name: string
}
export class MessageNasNetworkScanOutputNetworkInformationElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasNetworkScanOutputNetworkInformationElement */
    mcc: number
    mnc: number
    networkStatus: NasNetworkStatus
    description: string
    static name: string
}
export class MessageNasNetworkScanOutputRadioAccessTechnologyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasNetworkScanOutputRadioAccessTechnologyElement */
    mcc: number
    mnc: number
    radioInterface: NasRadioInterface
    static name: string
}
export class MessageNasRegisterIndicationsInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasRegisterIndicationsInput */
    getCurrentPlmnName(): { returnType: boolean, valueCurrentPlmnName: boolean | null }
    getDdtmEvents(): { returnType: boolean, valueDdtmEvents: boolean | null }
    getDualStandbyPreference(): { returnType: boolean, valueDualStandbyPreference: boolean | null }
    getEmbmsStatus(): { returnType: boolean, valueEmbmsStatus: boolean | null }
    getErrorRate(): { returnType: boolean, valueErrorRate: boolean | null }
    getHdrNewUatiAssigned(): { returnType: boolean, valueHdrNewUatiAssigned: boolean | null }
    getHdrSessionClosed(): { returnType: boolean, valueHdrSessionClosed: boolean | null }
    getManagedRoaming(): { returnType: boolean, valueManagedRoaming: boolean | null }
    getNetworkRejectInformation(): { returnType: boolean, valueNetworkRejectInformationEnableNetworkRejectIndications: boolean | null, valueNetworkRejectInformationSupressSystemInfoIndications: boolean | null }
    getNetworkTime(): { returnType: boolean, valueNetworkTime: boolean | null }
    getRfBandInformation(): { returnType: boolean, valueRfBandInformation: boolean | null }
    getServingSystemEvents(): { returnType: boolean, valueServingSystemEvents: boolean | null }
    getSignalInfo(): { returnType: boolean, valueSignalInfo: boolean | null }
    getSubscriptionInfo(): { returnType: boolean, valueSubscriptionInfo: boolean | null }
    getSystemInfo(): { returnType: boolean, valueSystemInfo: boolean | null }
    getSystemSelectionPreference(): { returnType: boolean, valueSystemSelectionPreference: boolean | null }
    ref(): MessageNasRegisterIndicationsInput
    setCurrentPlmnName(valueCurrentPlmnName: boolean): boolean
    setDdtmEvents(valueDdtmEvents: boolean): boolean
    setDualStandbyPreference(valueDualStandbyPreference: boolean): boolean
    setEmbmsStatus(valueEmbmsStatus: boolean): boolean
    setErrorRate(valueErrorRate: boolean): boolean
    setHdrNewUatiAssigned(valueHdrNewUatiAssigned: boolean): boolean
    setHdrSessionClosed(valueHdrSessionClosed: boolean): boolean
    setManagedRoaming(valueManagedRoaming: boolean): boolean
    setNetworkRejectInformation(valueNetworkRejectInformationEnableNetworkRejectIndications: boolean, valueNetworkRejectInformationSupressSystemInfoIndications: boolean): boolean
    setNetworkTime(valueNetworkTime: boolean): boolean
    setRfBandInformation(valueRfBandInformation: boolean): boolean
    setServingSystemEvents(valueServingSystemEvents: boolean): boolean
    setSignalInfo(valueSignalInfo: boolean): boolean
    setSubscriptionInfo(valueSubscriptionInfo: boolean): boolean
    setSystemInfo(valueSystemInfo: boolean): boolean
    setSystemSelectionPreference(valueSystemSelectionPreference: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasRegisterIndicationsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasRegisterIndicationsInput
}
export class MessageNasRegisterIndicationsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasRegisterIndicationsOutput */
    getResult(): boolean
    ref(): MessageNasRegisterIndicationsOutput
    unref(): void
    static name: string
}
export class MessageNasResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasResetOutput */
    getResult(): boolean
    ref(): MessageNasResetOutput
    unref(): void
    static name: string
}
export class MessageNasSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetEventReportInput */
    getEcioIndicator(): { returnType: boolean, valueEcioIndicatorReport: boolean | null, valueEcioIndicatorEcioDelta: number | null }
    getEcioThreshold(): { returnType: boolean, valueEcioThresholdReport: boolean | null, valueEcioThresholdThresholds: number[] | null }
    getErrorRateIndicator(): { returnType: boolean, valueErrorRateIndicator: boolean | null }
    getIoIndicator(): { returnType: boolean, valueIoIndicatorReport: boolean | null, valueIoIndicatorIoDelta: number | null }
    getLteRsrpDelta(): { returnType: boolean, valueLteRsrpDeltaReport: boolean | null, valueLteRsrpDeltaRsrpDelta: number | null }
    getLteSnrDelta(): { returnType: boolean, valueLteSnrDeltaReport: boolean | null, valueLteSnrDeltaSnrDelta: number | null }
    getRegistrationRejectReason(): { returnType: boolean, valueRegistrationRejectReason: boolean | null }
    getRfBandInformation(): { returnType: boolean, valueRfBandInformation: boolean | null }
    getRssiIndicator(): { returnType: boolean, valueRssiIndicatorReport: boolean | null, valueRssiIndicatorRssiDelta: number | null }
    getSignalStrengthIndicator(): { returnType: boolean, valueSignalStrengthIndicatorReport: boolean | null, valueSignalStrengthIndicatorThresholds: any[] | null }
    getSinrIndicator(): { returnType: boolean, valueSinrIndicatorReport: boolean | null, valueSinrIndicatorSinrDelta: number | null }
    getSinrThreshold(): { returnType: boolean, valueSinrThresholdReport: boolean | null, valueSinrThresholdThresholds: any[] | null }
    ref(): MessageNasSetEventReportInput
    setEcioIndicator(valueEcioIndicatorReport: boolean, valueEcioIndicatorEcioDelta: number): boolean
    setEcioThreshold(valueEcioThresholdReport: boolean, valueEcioThresholdThresholds: number[]): boolean
    setErrorRateIndicator(valueErrorRateIndicator: boolean): boolean
    setIoIndicator(valueIoIndicatorReport: boolean, valueIoIndicatorIoDelta: number): boolean
    setLteRsrpDelta(valueLteRsrpDeltaReport: boolean, valueLteRsrpDeltaRsrpDelta: number): boolean
    setLteSnrDelta(valueLteSnrDeltaReport: boolean, valueLteSnrDeltaSnrDelta: number): boolean
    setRegistrationRejectReason(valueRegistrationRejectReason: boolean): boolean
    setRfBandInformation(valueRfBandInformation: boolean): boolean
    setRssiIndicator(valueRssiIndicatorReport: boolean, valueRssiIndicatorRssiDelta: number): boolean
    setSignalStrengthIndicator(valueSignalStrengthIndicatorReport: boolean, valueSignalStrengthIndicatorThresholds: any[]): boolean
    setSinrIndicator(valueSinrIndicatorReport: boolean, valueSinrIndicatorSinrDelta: number): boolean
    setSinrThreshold(valueSinrThresholdReport: boolean, valueSinrThresholdThresholds: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetEventReportInput
}
export class MessageNasSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetEventReportOutput */
    getResult(): boolean
    ref(): MessageNasSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageNasSetPreferredNetworksInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetPreferredNetworksInput */
    getClearPreviousPreferredNetworks(): { returnType: boolean, valueClearPreviousPreferredNetworks: boolean | null }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement[] | null }
    getPreferredNetworks(): { returnType: boolean, valuePreferredNetworks: MessageNasSetPreferredNetworksInputPreferredNetworksElement[] | null }
    ref(): MessageNasSetPreferredNetworksInput
    setClearPreviousPreferredNetworks(valueClearPreviousPreferredNetworks: boolean): boolean
    setMncPcsDigitIncludeStatus(valueMncPcsDigitIncludeStatus: MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement[]): boolean
    setPreferredNetworks(valuePreferredNetworks: MessageNasSetPreferredNetworksInputPreferredNetworksElement[]): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetPreferredNetworksInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetPreferredNetworksInput
}
export class MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement */
    mcc: number
    mnc: number
    includesPcsDigit: boolean
    static name: string
}
export class MessageNasSetPreferredNetworksInputPreferredNetworksElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasSetPreferredNetworksInputPreferredNetworksElement */
    mcc: number
    mnc: number
    radioAccessTechnology: NasPlmnAccessTechnologyIdentifier
    static name: string
}
export class MessageNasSetPreferredNetworksOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetPreferredNetworksOutput */
    getResult(): boolean
    ref(): MessageNasSetPreferredNetworksOutput
    unref(): void
    static name: string
}
export class MessageNasSetSystemSelectionPreferenceInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetSystemSelectionPreferenceInput */
    getAcquisitionOrderPreference(): { returnType: boolean, valueAcquisitionOrderPreference: NasRadioInterface[] | null }
    getBandPreference(): { returnType: boolean, valueBandPreference: NasBandPreference | null }
    getCdmaPrlPreference(): { returnType: boolean, valueCdmaPrlPreference: NasCdmaPrlPreference | null }
    getChangeDuration(): { returnType: boolean, valueChangeDuration: NasChangeDuration | null }
    getEmergencyMode(): { returnType: boolean, valueEmergencyMode: boolean | null }
    getExtendedLteBandPreference(): { returnType: boolean, valueExtendedLteBandPreferenceMaskLow: number | null, valueExtendedLteBandPreferenceMaskMidLow: number | null, valueExtendedLteBandPreferenceMaskMidHigh: number | null, valueExtendedLteBandPreferenceMaskHigh: number | null }
    getGsmWcdmaAcquisitionOrderPreference(): { returnType: boolean, valueGsmWcdmaAcquisitionOrderPreference: NasGsmWcdmaAcquisitionOrderPreference | null }
    getLteBandPreference(): { returnType: boolean, valueLteBandPreference: NasLteBandPreference | null }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: boolean | null }
    getModePreference(): { returnType: boolean, valueModePreference: NasRatModePreference | null }
    getNetworkSelectionPreference(): { returnType: boolean, valueNetworkSelectionPreferenceMode: NasNetworkSelectionPreference | null, valueNetworkSelectionPreferenceMcc: number | null, valueNetworkSelectionPreferenceMnc: number | null }
    getNetworkSelectionRegistrationRestriction(): { returnType: boolean, valueNetworkSelectionRegistrationRestriction: NasNetworkSelectionRegistrationRestriction | null }
    getNr5gNsaBandPreference(): { returnType: boolean, valueNr5gNsaBandPreferenceMask0: number | null, valueNr5gNsaBandPreferenceMask1: number | null, valueNr5gNsaBandPreferenceMask2: number | null, valueNr5gNsaBandPreferenceMask3: number | null, valueNr5gNsaBandPreferenceMask4: number | null, valueNr5gNsaBandPreferenceMask5: number | null, valueNr5gNsaBandPreferenceMask6: number | null, valueNr5gNsaBandPreferenceMask7: number | null }
    getNr5gSaBandPreference(): { returnType: boolean, valueNr5gSaBandPreferenceMask0: number | null, valueNr5gSaBandPreferenceMask1: number | null, valueNr5gSaBandPreferenceMask2: number | null, valueNr5gSaBandPreferenceMask3: number | null, valueNr5gSaBandPreferenceMask4: number | null, valueNr5gSaBandPreferenceMask5: number | null, valueNr5gSaBandPreferenceMask6: number | null, valueNr5gSaBandPreferenceMask7: number | null }
    getRoamingPreference(): { returnType: boolean, valueRoamingPreference: NasRoamingPreference | null }
    getServiceDomainPreference(): { returnType: boolean, valueServiceDomainPreference: NasServiceDomainPreference | null }
    getTdScdmaBandPreference(): { returnType: boolean, valueTdScdmaBandPreference: NasTdScdmaBandPreference | null }
    getUsagePreference(): { returnType: boolean, valueUsagePreference: NasUsagePreference | null }
    getVoiceDomainPreference(): { returnType: boolean, valueVoiceDomainPreference: NasVoiceDomainPreference | null }
    ref(): MessageNasSetSystemSelectionPreferenceInput
    setAcquisitionOrderPreference(valueAcquisitionOrderPreference: NasRadioInterface[]): boolean
    setBandPreference(valueBandPreference: NasBandPreference): boolean
    setCdmaPrlPreference(valueCdmaPrlPreference: NasCdmaPrlPreference): boolean
    setChangeDuration(valueChangeDuration: NasChangeDuration): boolean
    setEmergencyMode(valueEmergencyMode: boolean): boolean
    setExtendedLteBandPreference(valueExtendedLteBandPreferenceMaskLow: number, valueExtendedLteBandPreferenceMaskMidLow: number, valueExtendedLteBandPreferenceMaskMidHigh: number, valueExtendedLteBandPreferenceMaskHigh: number): boolean
    setGsmWcdmaAcquisitionOrderPreference(valueGsmWcdmaAcquisitionOrderPreference: NasGsmWcdmaAcquisitionOrderPreference): boolean
    setLteBandPreference(valueLteBandPreference: NasLteBandPreference): boolean
    setMncPcsDigitIncludeStatus(valueMncPcsDigitIncludeStatus: boolean): boolean
    setModePreference(valueModePreference: NasRatModePreference): boolean
    setNetworkSelectionPreference(valueNetworkSelectionPreferenceMode: NasNetworkSelectionPreference, valueNetworkSelectionPreferenceMcc: number, valueNetworkSelectionPreferenceMnc: number): boolean
    setNetworkSelectionRegistrationRestriction(valueNetworkSelectionRegistrationRestriction: NasNetworkSelectionRegistrationRestriction): boolean
    setNr5gNsaBandPreference(valueNr5gNsaBandPreferenceMask0: number, valueNr5gNsaBandPreferenceMask1: number, valueNr5gNsaBandPreferenceMask2: number, valueNr5gNsaBandPreferenceMask3: number, valueNr5gNsaBandPreferenceMask4: number, valueNr5gNsaBandPreferenceMask5: number, valueNr5gNsaBandPreferenceMask6: number, valueNr5gNsaBandPreferenceMask7: number): boolean
    setNr5gSaBandPreference(valueNr5gSaBandPreferenceMask0: number, valueNr5gSaBandPreferenceMask1: number, valueNr5gSaBandPreferenceMask2: number, valueNr5gSaBandPreferenceMask3: number, valueNr5gSaBandPreferenceMask4: number, valueNr5gSaBandPreferenceMask5: number, valueNr5gSaBandPreferenceMask6: number, valueNr5gSaBandPreferenceMask7: number): boolean
    setRoamingPreference(valueRoamingPreference: NasRoamingPreference): boolean
    setServiceDomainPreference(valueServiceDomainPreference: NasServiceDomainPreference): boolean
    setTdScdmaBandPreference(valueTdScdmaBandPreference: NasTdScdmaBandPreference): boolean
    setUsagePreference(valueUsagePreference: NasUsagePreference): boolean
    setVoiceDomainPreference(valueVoiceDomainPreference: NasVoiceDomainPreference): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetSystemSelectionPreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetSystemSelectionPreferenceInput
}
export class MessageNasSetSystemSelectionPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetSystemSelectionPreferenceOutput */
    getResult(): boolean
    ref(): MessageNasSetSystemSelectionPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasSetTechnologyPreferenceInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetTechnologyPreferenceInput */
    getCurrent(): { returnType: boolean, valueCurrentTechnologyPreference: NasRadioTechnologyPreference | null, valueCurrentTechnologyPreferenceDuration: NasPreferenceDuration | null }
    ref(): MessageNasSetTechnologyPreferenceInput
    setCurrent(valueCurrentTechnologyPreference: NasRadioTechnologyPreference, valueCurrentTechnologyPreferenceDuration: NasPreferenceDuration): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetTechnologyPreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetTechnologyPreferenceInput
}
export class MessageNasSetTechnologyPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetTechnologyPreferenceOutput */
    getResult(): boolean
    ref(): MessageNasSetTechnologyPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasSwiGetStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSwiGetStatusOutput */
    getCommonInfoV2(): { returnType: boolean, valueCommonInfoV2Temperature: number | null, valueCommonInfoV2ModemMode: NasSwiModemMode | null, valueCommonInfoV2SystemMode: NasSwiSystemMode | null, valueCommonInfoV2ImsRegistrationState: NasSwiImsRegState | null, valueCommonInfoV2PacketServiceState: NasSwiPsState | null }
    getLteInfo(): { returnType: boolean, valueLteInfoBand: NasActiveBand | null, valueLteInfoBandwidth: NasDLBandwidth | null, valueLteInfoRxChannel: number | null, valueLteInfoTxChannel: number | null, valueLteInfoEmmState: NasSwiEmmState | null, valueLteInfoEmmSubState: number | null, valueLteInfoEmmConnectionState: NasSwiEmmConnectionState | null }
    getResult(): boolean
    ref(): MessageNasSwiGetStatusOutput
    unref(): void
    static name: string
}
export class MessageOmaCancelSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaCancelSessionOutput */
    getResult(): boolean
    ref(): MessageOmaCancelSessionOutput
    unref(): void
    static name: string
}
export class MessageOmaGetFeatureSettingOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaGetFeatureSettingOutput */
    getDeviceProvisioningServiceUpdateConfig(): { returnType: boolean, valueDeviceProvisioningServiceUpdateConfig: boolean | null }
    getHfaFeatureConfig(): { returnType: boolean, valueHfaFeatureConfig: boolean | null }
    getHfaFeatureDoneState(): { returnType: boolean, valueHfaFeatureDoneState: OmaHfaFeatureDoneState | null }
    getPrlUpdateServiceConfig(): { returnType: boolean, valuePrlUpdateServiceConfig: boolean | null }
    getResult(): boolean
    ref(): MessageOmaGetFeatureSettingOutput
    unref(): void
    static name: string
}
export class MessageOmaGetSessionInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaGetSessionInfoOutput */
    getNetworkInitiatedAlert(): { returnType: boolean, valueNetworkInitiatedAlertSessionType: OmaSessionType | null, valueNetworkInitiatedAlertSessionId: number | null }
    getResult(): boolean
    getRetryInfo(): { returnType: boolean, valueRetryInfoRetryCount: number | null, valueRetryInfoRetryPauseTimer: number | null, valueRetryInfoRetryPauseTimerRemaining: number | null }
    getSessionFailedReason(): { returnType: boolean, valueSessionFailedReason: OmaSessionFailedReason | null }
    getSessionInfo(): { returnType: boolean, valueSessionInfoSessionState: OmaSessionState | null, valueSessionInfoSessionType: OmaSessionType | null }
    ref(): MessageOmaGetSessionInfoOutput
    unref(): void
    static name: string
}
export class MessageOmaResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaResetOutput */
    getResult(): boolean
    ref(): MessageOmaResetOutput
    unref(): void
    static name: string
}
export class MessageOmaSendSelectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSendSelectionInput */
    getNetworkInitiatedAlertSelection(): { returnType: boolean, valueNetworkInitiatedAlertSelectionControlPointSelectionAccept: boolean | null, valueNetworkInitiatedAlertSelectionSessionId: number | null }
    ref(): MessageOmaSendSelectionInput
    setNetworkInitiatedAlertSelection(valueNetworkInitiatedAlertSelectionControlPointSelectionAccept: boolean, valueNetworkInitiatedAlertSelectionSessionId: number): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSendSelectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSendSelectionInput
}
export class MessageOmaSendSelectionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSendSelectionOutput */
    getResult(): boolean
    ref(): MessageOmaSendSelectionOutput
    unref(): void
    static name: string
}
export class MessageOmaSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSetEventReportInput */
    getNetworkInitiatedAlertReporting(): { returnType: boolean, valueNetworkInitiatedAlertReporting: boolean | null }
    getSessionStateReporting(): { returnType: boolean, valueSessionStateReporting: boolean | null }
    ref(): MessageOmaSetEventReportInput
    setNetworkInitiatedAlertReporting(valueNetworkInitiatedAlertReporting: boolean): boolean
    setSessionStateReporting(valueSessionStateReporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSetEventReportInput
}
export class MessageOmaSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSetEventReportOutput */
    getResult(): boolean
    ref(): MessageOmaSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageOmaSetFeatureSettingInput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSetFeatureSettingInput */
    getDeviceProvisioningServiceUpdateConfig(): { returnType: boolean, valueDeviceProvisioningServiceUpdateConfig: boolean | null }
    getHfaFeatureConfig(): { returnType: boolean, valueHfaFeatureConfig: boolean | null }
    getPrlUpdateServiceConfig(): { returnType: boolean, valuePrlUpdateServiceConfig: boolean | null }
    ref(): MessageOmaSetFeatureSettingInput
    setDeviceProvisioningServiceUpdateConfig(valueDeviceProvisioningServiceUpdateConfig: boolean): boolean
    setHfaFeatureConfig(valueHfaFeatureConfig: boolean): boolean
    setPrlUpdateServiceConfig(valuePrlUpdateServiceConfig: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSetFeatureSettingInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSetFeatureSettingInput
}
export class MessageOmaSetFeatureSettingOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSetFeatureSettingOutput */
    getResult(): boolean
    ref(): MessageOmaSetFeatureSettingOutput
    unref(): void
    static name: string
}
export class MessageOmaStartSessionInput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaStartSessionInput */
    getSessionType(): { returnType: boolean, valueSessionType: OmaSessionType | null }
    ref(): MessageOmaStartSessionInput
    setSessionType(valueSessionType: OmaSessionType): boolean
    unref(): void
    static name: string
    static new(): MessageOmaStartSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaStartSessionInput
}
export class MessageOmaStartSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaStartSessionOutput */
    getResult(): boolean
    ref(): MessageOmaStartSessionOutput
    unref(): void
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutput */
    getAdditionalNumberAlphaStringCapability(): { returnType: boolean, valueAdditionalNumberAlphaStringCapability: MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement[] | null }
    getAdditionalNumberCapability(): { returnType: boolean, valueAdditionalNumberCapability: MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement[] | null }
    getCapabilityBasicInformation(): { returnType: boolean, valueCapabilityBasicInformation: MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement[] | null }
    getEmailCapability(): { returnType: boolean, valueEmailCapability: MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement[] | null }
    getGroupCapability(): { returnType: boolean, valueGroupCapability: MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement[] | null }
    getGroupingInformationAlphaStringCapability(): { returnType: boolean, valueGroupingInformationAlphaStringCapability: MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement[] | null }
    getHiddenRecordsCapability(): { returnType: boolean, valueHiddenRecordsCapability: MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement[] | null }
    getResult(): boolean
    getSecondNameCapability(): { returnType: boolean, valueSecondNameCapability: MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement[] | null }
    ref(): MessagePbmGetAllCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement */
    sessionType: PbmSessionType
    maximumRecords: number
    usedRecords: number
    maximumStringLength: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement */
    sessionType: PbmSessionType
    maximumAdditionalNumbers: number
    maximumAdditionalNumberLength: number
    maximumAdditionalNumberTagLength: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement */
    sessionType: PbmSessionType
    phonebooks: object[]
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement */
    phonebookType: PbmPhonebookType
    usedRecords: number
    maximumRecords: number
    maximumNumberLength: number
    maximumNameLength: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement */
    sessionType: PbmSessionType
    maximumEmails: number
    maximumEmailAddressLength: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement */
    sessionType: PbmSessionType
    maximumGroups: number
    maximumGroupTagLength: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement */
    sessionType: PbmSessionType
    maximumRecords: number
    usedRecords: number
    maximumStringLength: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement */
    sessionType: PbmSessionType
    supported: boolean
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement */
    sessionType: PbmSessionType
    maximumSecondNameLength: number
    static name: string
}
export class MessagePbmGetCapabilitiesInput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmGetCapabilitiesInput */
    getPhonebookInformation(): { returnType: boolean, valuePhonebookInformationSessionType: PbmSessionType | null, valuePhonebookInformationPhonebookType: PbmPhonebookType | null }
    ref(): MessagePbmGetCapabilitiesInput
    setPhonebookInformation(valuePhonebookInformationSessionType: PbmSessionType, valuePhonebookInformationPhonebookType: PbmPhonebookType): boolean
    unref(): void
    static name: string
    static new(): MessagePbmGetCapabilitiesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePbmGetCapabilitiesInput
}
export class MessagePbmGetCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmGetCapabilitiesOutput */
    getAdditionalNumberAlphaStringCapability(): { returnType: boolean, valueAdditionalNumberAlphaStringCapabilityMaximumRecords: number | null, valueAdditionalNumberAlphaStringCapabilityUsedRecords: number | null, valueAdditionalNumberAlphaStringCapabilityMaximumStringLength: number | null }
    getAdditionalNumberCapability(): { returnType: boolean, valueAdditionalNumberCapabilityMaximumAdditionalNumbers: number | null, valueAdditionalNumberCapabilityMaximumAdditionalNumberLength: number | null, valueAdditionalNumberCapabilityMaximumAdditionalNumberTagLength: number | null }
    getCapabilityBasicInformation(): { returnType: boolean, valueCapabilityBasicInformationSessionType: PbmSessionType | null, valueCapabilityBasicInformationPhonebookType: PbmPhonebookType | null, valueCapabilityBasicInformationUsedRecords: number | null, valueCapabilityBasicInformationMaximumRecords: number | null, valueCapabilityBasicInformationMaximumNumberLength: number | null, valueCapabilityBasicInformationMaximumNameLength: number | null }
    getEmailCapability(): { returnType: boolean, valueEmailCapabilityMaximumEmails: number | null, valueEmailCapabilityMaximumEmailAddressLength: number | null }
    getGroupCapability(): { returnType: boolean, valueGroupCapabilityMaximumGroups: number | null, valueGroupCapabilityMaximumGroupTagLength: number | null }
    getGroupingInformationAlphaStringCapability(): { returnType: boolean, valueGroupingInformationAlphaStringCapabilityMaximumRecords: number | null, valueGroupingInformationAlphaStringCapabilityUsedRecords: number | null, valueGroupingInformationAlphaStringCapabilityMaximumStringLength: number | null }
    getHiddenRecordsCapability(): { returnType: boolean, valueHiddenRecordsCapabilitySupported: boolean | null }
    getResult(): boolean
    getSecondNameCapability(): { returnType: boolean, valueSecondNameCapabilityMaximumSecondNameLength: number | null }
    ref(): MessagePbmGetCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessagePbmIndicationRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmIndicationRegisterInput */
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: PbmEventRegistrationFlag | null }
    ref(): MessagePbmIndicationRegisterInput
    setEventRegistrationMask(valueEventRegistrationMask: PbmEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessagePbmIndicationRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePbmIndicationRegisterInput
}
export class MessagePbmIndicationRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmIndicationRegisterOutput */
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: PbmEventRegistrationFlag | null }
    getResult(): boolean
    ref(): MessagePbmIndicationRegisterOutput
    unref(): void
    static name: string
}
export class MessagePdcActivateConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcActivateConfigInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcActivateConfigInput
    setConfigType(valueConfigType: PdcConfigurationType): boolean
    setToken(valueToken: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcActivateConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcActivateConfigInput
}
export class MessagePdcActivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcActivateConfigOutput */
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcActivateConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcConfigChangeInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcConfigChangeInput */
    getTypeWithId(): { returnType: boolean, valueTypeWithId: ConfigTypeAndId | null }
    ref(): MessagePdcConfigChangeInput
    setTypeWithId(valueTypeWithId: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcConfigChangeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcConfigChangeInput
}
export class MessagePdcConfigChangeOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcConfigChangeOutput */
    getResult(): boolean
    getTypeWithId(): { returnType: boolean, valueTypeWithId: ConfigTypeAndId | null }
    ref(): MessagePdcConfigChangeOutput
    unref(): void
    static name: string
}
export class MessagePdcDeactivateConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeactivateConfigInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcDeactivateConfigInput
    setConfigType(valueConfigType: PdcConfigurationType): boolean
    setToken(valueToken: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcDeactivateConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcDeactivateConfigInput
}
export class MessagePdcDeactivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeactivateConfigOutput */
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcDeactivateConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcDeleteConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeleteConfigInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType | null }
    getId(): { returnType: boolean, valueId: any[] | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcDeleteConfigInput
    setConfigType(valueConfigType: PdcConfigurationType): boolean
    setId(valueId: any[]): boolean
    setToken(valueToken: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcDeleteConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcDeleteConfigInput
}
export class MessagePdcDeleteConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeleteConfigOutput */
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcDeleteConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcGetConfigInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigInfoInput */
    getToken(): { returnType: boolean, valueToken: number | null }
    getTypeWithId(): { returnType: boolean, valueTypeWithId: ConfigTypeAndId | null }
    ref(): MessagePdcGetConfigInfoInput
    setToken(valueToken: number): boolean
    setTypeWithId(valueTypeWithId: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetConfigInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetConfigInfoInput
}
export class MessagePdcGetConfigInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigInfoOutput */
    getResult(): boolean
    ref(): MessagePdcGetConfigInfoOutput
    unref(): void
    static name: string
}
export class MessagePdcGetConfigLimitsInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigLimitsInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcGetConfigLimitsInput
    setConfigType(valueConfigType: PdcConfigurationType): boolean
    setToken(valueToken: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetConfigLimitsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetConfigLimitsInput
}
export class MessagePdcGetConfigLimitsOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigLimitsOutput */
    getCurrentSize(): { returnType: boolean, valueCurrentSize: number | null }
    getMaximumSize(): { returnType: boolean, valueMaximumSize: number | null }
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcGetConfigLimitsOutput
    unref(): void
    static name: string
}
export class MessagePdcGetDefaultConfigInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetDefaultConfigInfoInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcGetDefaultConfigInfoInput
    setConfigType(valueConfigType: PdcConfigurationType): boolean
    setToken(valueToken: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetDefaultConfigInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetDefaultConfigInfoInput
}
export class MessagePdcGetDefaultConfigInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetDefaultConfigInfoOutput */
    getDescription(): { returnType: boolean, valueDescription: string | null }
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number | null }
    getTotalSize(): { returnType: boolean, valueTotalSize: number | null }
    getVersion(): { returnType: boolean, valueVersion: number | null }
    ref(): MessagePdcGetDefaultConfigInfoOutput
    unref(): void
    static name: string
}
export class MessagePdcGetSelectedConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetSelectedConfigInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcGetSelectedConfigInput
    setConfigType(valueConfigType: PdcConfigurationType): boolean
    setToken(valueToken: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetSelectedConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetSelectedConfigInput
}
export class MessagePdcGetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetSelectedConfigOutput */
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcGetSelectedConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcListConfigsInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcListConfigsInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcListConfigsInput
    setConfigType(valueConfigType: PdcConfigurationType): boolean
    setToken(valueToken: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcListConfigsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcListConfigsInput
}
export class MessagePdcListConfigsOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcListConfigsOutput */
    getResult(): boolean
    ref(): MessagePdcListConfigsOutput
    unref(): void
    static name: string
}
export class MessagePdcLoadConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcLoadConfigInput */
    getConfigChunk(): { returnType: boolean, valueConfigChunkType: PdcConfigurationType | null, valueConfigChunkId: any[] | null, valueConfigChunkTotalSize: number | null, valueConfigChunkChunk: any[] | null }
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcLoadConfigInput
    setConfigChunk(valueConfigChunkType: PdcConfigurationType, valueConfigChunkId: any[], valueConfigChunkTotalSize: number, valueConfigChunkChunk: any[]): boolean
    setToken(valueToken: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcLoadConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcLoadConfigInput
}
export class MessagePdcLoadConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcLoadConfigOutput */
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcLoadConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcRegisterInput */
    getEnableRefresh(): { returnType: boolean, valueEnableRefresh: boolean | null }
    getEnableReporting(): { returnType: boolean, valueEnableReporting: boolean | null }
    ref(): MessagePdcRegisterInput
    setEnableRefresh(valueEnableRefresh: boolean): boolean
    setEnableReporting(valueEnableReporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdcRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcRegisterInput
}
export class MessagePdcRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcRegisterOutput */
    getResult(): boolean
    ref(): MessagePdcRegisterOutput
    unref(): void
    static name: string
}
export class MessagePdcResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcResetOutput */
    getResult(): boolean
    ref(): MessagePdcResetOutput
    unref(): void
    static name: string
}
export class MessagePdcSetSelectedConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcSetSelectedConfigInput */
    getToken(): { returnType: boolean, valueToken: number | null }
    getTypeWithId(): { returnType: boolean, valueTypeWithId: ConfigTypeAndId | null }
    ref(): MessagePdcSetSelectedConfigInput
    setToken(valueToken: number): boolean
    setTypeWithId(valueTypeWithId: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcSetSelectedConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcSetSelectedConfigInput
}
export class MessagePdcSetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcSetSelectedConfigOutput */
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number | null }
    ref(): MessagePdcSetSelectedConfigOutput
    unref(): void
    static name: string
}
export class MessagePdsGetAgpsConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetAgpsConfigInput */
    getNetworkMode(): { returnType: boolean, valueNetworkMode: PdsNetworkMode | null }
    ref(): MessagePdsGetAgpsConfigInput
    setNetworkMode(valueNetworkMode: PdsNetworkMode): boolean
    unref(): void
    static name: string
    static new(): MessagePdsGetAgpsConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsGetAgpsConfigInput
}
export class MessagePdsGetAgpsConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetAgpsConfigOutput */
    getLocationServerAddress(): { returnType: boolean, valueLocationServerAddressIp: number | null, valueLocationServerAddressPort: number | null }
    getLocationServerUrl(): { returnType: boolean, valueLocationServerUrl: any[] | null }
    getResult(): boolean
    ref(): MessagePdsGetAgpsConfigOutput
    unref(): void
    static name: string
}
export class MessagePdsGetAutoTrackingStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetAutoTrackingStateOutput */
    getResult(): boolean
    getState(): { returnType: boolean, valueStateAutoTrackingState: boolean | null }
    ref(): MessagePdsGetAutoTrackingStateOutput
    unref(): void
    static name: string
}
export class MessagePdsGetDefaultTrackingSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetDefaultTrackingSessionOutput */
    getInfo(): { returnType: boolean, valueInfoSessionOperation: PdsOperatingMode | null, valueInfoPositionDataTimeout: number | null, valueInfoInterval: number | null, valueInfoAccuracyThreshold: number | null }
    getResult(): boolean
    ref(): MessagePdsGetDefaultTrackingSessionOutput
    unref(): void
    static name: string
}
export class MessagePdsGetGpsServiceStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetGpsServiceStateOutput */
    getResult(): boolean
    getState(): { returnType: boolean, valueStateGpsServiceState: boolean | null, valueStateTrackingSessionState: PdsTrackingSessionState | null }
    ref(): MessagePdsGetGpsServiceStateOutput
    unref(): void
    static name: string
}
export class MessagePdsResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsResetOutput */
    getResult(): boolean
    ref(): MessagePdsResetOutput
    unref(): void
    static name: string
}
export class MessagePdsSetAgpsConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetAgpsConfigInput */
    getLocationServerAddress(): { returnType: boolean, valueLocationServerAddressIp: number | null, valueLocationServerAddressPort: number | null }
    getLocationServerUrl(): { returnType: boolean, valueLocationServerUrl: any[] | null }
    getNetworkMode(): { returnType: boolean, valueNetworkMode: PdsNetworkMode | null }
    ref(): MessagePdsSetAgpsConfigInput
    setLocationServerAddress(valueLocationServerAddressIp: number, valueLocationServerAddressPort: number): boolean
    setLocationServerUrl(valueLocationServerUrl: any[]): boolean
    setNetworkMode(valueNetworkMode: PdsNetworkMode): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetAgpsConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetAgpsConfigInput
}
export class MessagePdsSetAgpsConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetAgpsConfigOutput */
    getResult(): boolean
    ref(): MessagePdsSetAgpsConfigOutput
    unref(): void
    static name: string
}
export class MessagePdsSetAutoTrackingStateInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetAutoTrackingStateInput */
    getState(): { returnType: boolean, valueStateAutoTrackingState: boolean | null }
    ref(): MessagePdsSetAutoTrackingStateInput
    setState(valueStateAutoTrackingState: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetAutoTrackingStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetAutoTrackingStateInput
}
export class MessagePdsSetAutoTrackingStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetAutoTrackingStateOutput */
    getResult(): boolean
    ref(): MessagePdsSetAutoTrackingStateOutput
    unref(): void
    static name: string
}
export class MessagePdsSetDefaultTrackingSessionInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetDefaultTrackingSessionInput */
    getInfo(): { returnType: boolean, valueInfoSessionOperation: PdsOperatingMode | null, valueInfoPositionDataTimeout: number | null, valueInfoInterval: number | null, valueInfoAccuracyThreshold: number | null }
    ref(): MessagePdsSetDefaultTrackingSessionInput
    setInfo(valueInfoSessionOperation: PdsOperatingMode, valueInfoPositionDataTimeout: number, valueInfoInterval: number, valueInfoAccuracyThreshold: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetDefaultTrackingSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetDefaultTrackingSessionInput
}
export class MessagePdsSetDefaultTrackingSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetDefaultTrackingSessionOutput */
    getResult(): boolean
    ref(): MessagePdsSetDefaultTrackingSessionOutput
    unref(): void
    static name: string
}
export class MessagePdsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetEventReportInput */
    getAccelerometerDataStreamingReadyReporting(): { returnType: boolean, valueAccelerometerDataStreamingReadyReporting: boolean | null }
    getExtendedExternalXtraDataRequestReporting(): { returnType: boolean, valueExtendedExternalXtraDataRequestReporting: boolean | null }
    getExtendedNmeaPositionReporting(): { returnType: boolean, valueExtendedNmeaPositionReporting: boolean | null }
    getExternalTimeInjectionRequestReporting(): { returnType: boolean, valueExternalTimeInjectionRequestReporting: boolean | null }
    getExternalWifiPositionRequestReporting(): { returnType: boolean, valueExternalWifiPositionRequestReporting: boolean | null }
    getExternalXtraDataRequestReporting(): { returnType: boolean, valueExternalXtraDataRequestReporting: boolean | null }
    getGyroDataStreamingReadyReporting(): { returnType: boolean, valueGyroDataStreamingReadyReporting: boolean | null }
    getHeadingUncertaintyReporting(): { returnType: boolean, valueHeadingUncertaintyReporting: boolean | null }
    getNmeaDebugStringsReporting(): { returnType: boolean, valueNmeaDebugStringsReporting: boolean | null }
    getNmeaPositionReporting(): { returnType: boolean, valueNmeaPositionReporting: boolean | null }
    getParsedPositionReporting(): { returnType: boolean, valueParsedPositionReporting: boolean | null }
    getPdsCommEventReporting(): { returnType: boolean, valuePdsCommEventReporting: boolean | null }
    getPositionReliabilityIndicatorReporting(): { returnType: boolean, valuePositionReliabilityIndicatorReporting: boolean | null }
    getSatelliteInformationReporting(): { returnType: boolean, valueSatelliteInformationReporting: boolean | null }
    getSensorDataUsageIndicatorReporting(): { returnType: boolean, valueSensorDataUsageIndicatorReporting: boolean | null }
    getSuplNetworkInitiatedPromptReporting(): { returnType: boolean, valueSuplNetworkInitiatedPromptReporting: boolean | null }
    getTimeSourceInformationReporting(): { returnType: boolean, valueTimeSourceInformationReporting: boolean | null }
    getTimeSyncRequestReporting(): { returnType: boolean, valueTimeSyncRequestReporting: boolean | null }
    getUmtsCpNetworkInitiatedPromptReporting(): { returnType: boolean, valueUmtsCpNetworkInitiatedPromptReporting: boolean | null }
    getVxNetworkInitiatedRequestReporting(): { returnType: boolean, valueVxNetworkInitiatedRequestReporting: boolean | null }
    ref(): MessagePdsSetEventReportInput
    setAccelerometerDataStreamingReadyReporting(valueAccelerometerDataStreamingReadyReporting: boolean): boolean
    setExtendedExternalXtraDataRequestReporting(valueExtendedExternalXtraDataRequestReporting: boolean): boolean
    setExtendedNmeaPositionReporting(valueExtendedNmeaPositionReporting: boolean): boolean
    setExternalTimeInjectionRequestReporting(valueExternalTimeInjectionRequestReporting: boolean): boolean
    setExternalWifiPositionRequestReporting(valueExternalWifiPositionRequestReporting: boolean): boolean
    setExternalXtraDataRequestReporting(valueExternalXtraDataRequestReporting: boolean): boolean
    setGyroDataStreamingReadyReporting(valueGyroDataStreamingReadyReporting: boolean): boolean
    setHeadingUncertaintyReporting(valueHeadingUncertaintyReporting: boolean): boolean
    setNmeaDebugStringsReporting(valueNmeaDebugStringsReporting: boolean): boolean
    setNmeaPositionReporting(valueNmeaPositionReporting: boolean): boolean
    setParsedPositionReporting(valueParsedPositionReporting: boolean): boolean
    setPdsCommEventReporting(valuePdsCommEventReporting: boolean): boolean
    setPositionReliabilityIndicatorReporting(valuePositionReliabilityIndicatorReporting: boolean): boolean
    setSatelliteInformationReporting(valueSatelliteInformationReporting: boolean): boolean
    setSensorDataUsageIndicatorReporting(valueSensorDataUsageIndicatorReporting: boolean): boolean
    setSuplNetworkInitiatedPromptReporting(valueSuplNetworkInitiatedPromptReporting: boolean): boolean
    setTimeSourceInformationReporting(valueTimeSourceInformationReporting: boolean): boolean
    setTimeSyncRequestReporting(valueTimeSyncRequestReporting: boolean): boolean
    setUmtsCpNetworkInitiatedPromptReporting(valueUmtsCpNetworkInitiatedPromptReporting: boolean): boolean
    setVxNetworkInitiatedRequestReporting(valueVxNetworkInitiatedRequestReporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetEventReportInput
}
export class MessagePdsSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetEventReportOutput */
    getResult(): boolean
    ref(): MessagePdsSetEventReportOutput
    unref(): void
    static name: string
}
export class MessagePdsSetGpsServiceStateInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetGpsServiceStateInput */
    getState(): { returnType: boolean, valueStateGpsServiceState: boolean | null }
    ref(): MessagePdsSetGpsServiceStateInput
    setState(valueStateGpsServiceState: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetGpsServiceStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetGpsServiceStateInput
}
export class MessagePdsSetGpsServiceStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetGpsServiceStateOutput */
    getResult(): boolean
    ref(): MessagePdsSetGpsServiceStateOutput
    unref(): void
    static name: string
}
export class MessageQosGetFlowStatusInput {
    /* Methods of Qmi-1.0.Qmi.MessageQosGetFlowStatusInput */
    getQosId(): { returnType: boolean, valueQosId: number | null }
    ref(): MessageQosGetFlowStatusInput
    setQosId(valueQosId: number): boolean
    unref(): void
    static name: string
    static new(): MessageQosGetFlowStatusInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageQosGetFlowStatusInput
}
export class MessageQosGetFlowStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosGetFlowStatusOutput */
    getResult(): boolean
    getValue(): { returnType: boolean, valueValue: QosStatus | null }
    ref(): MessageQosGetFlowStatusOutput
    unref(): void
    static name: string
}
export class MessageQosGetNetworkStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosGetNetworkStatusOutput */
    getQosSupported(): { returnType: boolean, valueQosSupported: boolean | null }
    getResult(): boolean
    ref(): MessageQosGetNetworkStatusOutput
    unref(): void
    static name: string
}
export class MessageQosResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosResetOutput */
    getResult(): boolean
    ref(): MessageQosResetOutput
    unref(): void
    static name: string
}
export class MessageQosSwiReadDataStatsInput {
    /* Methods of Qmi-1.0.Qmi.MessageQosSwiReadDataStatsInput */
    getApnId(): { returnType: boolean, valueApnId: number | null }
    ref(): MessageQosSwiReadDataStatsInput
    setApnId(valueApnId: number): boolean
    unref(): void
    static name: string
    static new(): MessageQosSwiReadDataStatsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageQosSwiReadDataStatsInput
}
export class MessageQosSwiReadDataStatsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosSwiReadDataStatsOutput */
    getApn(): { returnType: boolean, valueApnApnId: number | null, valueApnTxPackets: number | null, valueApnTxPacketsDropped: number | null, valueApnRxPackets: number | null, valueApnTxBytes: number | null, valueApnTxBytesDropped: number | null, valueApnRxBytes: number | null }
    getFlow(): { returnType: boolean, valueFlow: MessageQosSwiReadDataStatsOutputFlowElement[] | null }
    getResult(): boolean
    ref(): MessageQosSwiReadDataStatsOutput
    unref(): void
    static name: string
}
export class MessageQosSwiReadDataStatsOutputFlowElement {
    /* Fields of Qmi-1.0.Qmi.MessageQosSwiReadDataStatsOutputFlowElement */
    bearerId: number
    txPackets: number
    txPacketsDropped: number
    txBytes: number
    txBytesDropped: number
    static name: string
}
export class MessageSarRfGetStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageSarRfGetStateOutput */
    getResult(): boolean
    getState(): { returnType: boolean, valueState: SarRfState | null }
    ref(): MessageSarRfGetStateOutput
    unref(): void
    static name: string
}
export class MessageSarRfSetStateInput {
    /* Methods of Qmi-1.0.Qmi.MessageSarRfSetStateInput */
    getState(): { returnType: boolean, valueState: SarRfState | null }
    ref(): MessageSarRfSetStateInput
    setState(valueState: SarRfState): boolean
    unref(): void
    static name: string
    static new(): MessageSarRfSetStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageSarRfSetStateInput
}
export class MessageSarRfSetStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageSarRfSetStateOutput */
    getResult(): boolean
    ref(): MessageSarRfSetStateOutput
    unref(): void
    static name: string
}
export class MessageUimChangePinInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangePinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: UimPinId | null, valueInfoOldPin: string | null, valueInfoNewPin: string | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimChangePinInput
    setInfo(valueInfoPinId: UimPinId, valueInfoOldPin: string, valueInfoNewPin: string): boolean
    setResponseInIndicationToken(valueResponseInIndicationToken: number): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimChangePinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimChangePinInput
}
export class MessageUimChangePinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangePinOutput */
    getCardResult(): { returnType: boolean, valueCardResultSw1: number | null, valueCardResultSw2: number | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyRetriesLeft: number | null, valueRetriesRemainingUnblockRetriesLeft: number | null }
    ref(): MessageUimChangePinOutput
    unref(): void
    static name: string
}
export class MessageUimChangeProvisioningSessionInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangeProvisioningSessionInput */
    getApplicationInformation(): { returnType: boolean, valueApplicationInformationSlot: number | null, valueApplicationInformationApplicationIdentifier: any[] | null }
    getSessionChange(): { returnType: boolean, valueSessionChangeSessionType: UimSessionType | null, valueSessionChangeActivate: boolean | null }
    ref(): MessageUimChangeProvisioningSessionInput
    setApplicationInformation(valueApplicationInformationSlot: number, valueApplicationInformationApplicationIdentifier: any[]): boolean
    setSessionChange(valueSessionChangeSessionType: UimSessionType, valueSessionChangeActivate: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageUimChangeProvisioningSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimChangeProvisioningSessionInput
}
export class MessageUimChangeProvisioningSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangeProvisioningSessionOutput */
    getResult(): boolean
    ref(): MessageUimChangeProvisioningSessionOutput
    unref(): void
    static name: string
}
export class MessageUimDepersonalizationInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimDepersonalizationInput */
    getInfo(): { returnType: boolean, valueInfoFeature: UimCardApplicationPersonalizationFeature | null, valueInfoOperation: UimDepersonalizationOperation | null, valueInfoControlKey: string | null }
    getSlot(): { returnType: boolean, valueSlot: number | null }
    ref(): MessageUimDepersonalizationInput
    setInfo(valueInfoFeature: UimCardApplicationPersonalizationFeature, valueInfoOperation: UimDepersonalizationOperation, valueInfoControlKey: string): boolean
    setSlot(valueSlot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimDepersonalizationInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimDepersonalizationInput
}
export class MessageUimDepersonalizationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimDepersonalizationOutput */
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyLeft: number | null, valueRetriesRemainingUnblockLeft: number | null }
    ref(): MessageUimDepersonalizationOutput
    unref(): void
    static name: string
}
export class MessageUimGetCardStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetCardStatusOutput */
    getCardStatus(): { returnType: boolean, valueCardStatusIndexGwPrimary: number | null, valueCardStatusIndex1xPrimary: number | null, valueCardStatusIndexGwSecondary: number | null, valueCardStatusIndex1xSecondary: number | null, valueCardStatusCards: MessageUimGetCardStatusOutputCardStatusCardsElement[] | null }
    getResult(): boolean
    ref(): MessageUimGetCardStatusOutput
    unref(): void
    static name: string
}
export class MessageUimGetCardStatusOutputCardStatusCardsElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimGetCardStatusOutputCardStatusCardsElement */
    cardState: UimCardState
    upinState: UimPinState
    upinRetries: number
    upukRetries: number
    errorCode: UimCardError
    applications: object[]
    static name: string
}
export class MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement */
    type: UimCardApplicationType
    state: UimCardApplicationState
    personalizationState: UimCardApplicationPersonalizationState
    personalizationFeature: UimCardApplicationPersonalizationFeature
    personalizationRetries: number
    personalizationUnblockRetries: number
    applicationIdentifierValue: object[]
    upinReplacesPin1: boolean
    pin1State: UimPinState
    pin1Retries: number
    puk1Retries: number
    pin2State: UimPinState
    pin2Retries: number
    puk2Retries: number
    static name: string
}
export class MessageUimGetConfigurationInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetConfigurationInput */
    getConfigurationMask(): { returnType: boolean, valueConfigurationMask: UimConfiguration | null }
    ref(): MessageUimGetConfigurationInput
    setConfigurationMask(valueConfigurationMask: UimConfiguration): boolean
    unref(): void
    static name: string
    static new(): MessageUimGetConfigurationInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimGetConfigurationInput
}
export class MessageUimGetConfigurationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetConfigurationOutput */
    getAutomaticSelection(): { returnType: boolean, valueAutomaticSelection: boolean | null }
    getHaltSubscription(): { returnType: boolean, valueHaltSubscription: boolean | null }
    getPersonalizationStatus(): { returnType: boolean, valuePersonalizationStatus: MessageUimGetConfigurationOutputPersonalizationStatusElement[] | null }
    getPersonalizationStatusOtherSlots(): { returnType: boolean, valuePersonalizationStatusOtherSlots: any[] | null }
    getResult(): boolean
    ref(): MessageUimGetConfigurationOutput
    unref(): void
    static name: string
}
export class MessageUimGetConfigurationOutputPersonalizationStatusElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimGetConfigurationOutputPersonalizationStatusElement */
    feature: UimCardApplicationPersonalizationFeature
    verifyLeft: number
    unblockLeft: number
    static name: string
}
export class MessageUimGetConfigurationOutputPersonalizationStatusOtherSlotsSlotsElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimGetConfigurationOutputPersonalizationStatusOtherSlotsSlotsElement */
    feature: UimCardApplicationPersonalizationFeature
    verifyLeft: number
    unblockLeft: number
    static name: string
}
export class MessageUimGetFileAttributesInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetFileAttributesInput */
    getFile(): { returnType: boolean, valueFileFileId: number | null, valueFileFilePath: any[] | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimGetFileAttributesInput
    setFile(valueFileFileId: number, valueFileFilePath: any[]): boolean
    setResponseInIndicationToken(valueResponseInIndicationToken: number): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimGetFileAttributesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimGetFileAttributesInput
}
export class MessageUimGetFileAttributesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetFileAttributesOutput */
    getCardResult(): { returnType: boolean, valueCardResultSw1: number | null, valueCardResultSw2: number | null }
    getFileAttributes(): { returnType: boolean, valueFileAttributesFileSize: number | null, valueFileAttributesFileId: number | null, valueFileAttributesFileType: UimFileType | null, valueFileAttributesRecordSize: number | null, valueFileAttributesRecordCount: number | null, valueFileAttributesReadSecurityAttributesLogic: UimSecurityAttributeLogic | null, valueFileAttributesReadSecurityAttributes: UimSecurityAttribute | null, valueFileAttributesWriteSecurityAttributesLogic: UimSecurityAttributeLogic | null, valueFileAttributesWriteSecurityAttributes: UimSecurityAttribute | null, valueFileAttributesIncreaseSecurityAttributesLogic: UimSecurityAttributeLogic | null, valueFileAttributesIncreaseSecurityAttributes: UimSecurityAttribute | null, valueFileAttributesDeactivateSecurityAttributesLogic: UimSecurityAttributeLogic | null, valueFileAttributesDeactivateSecurityAttributes: UimSecurityAttribute | null, valueFileAttributesActivateSecurityAttributesLogic: UimSecurityAttributeLogic | null, valueFileAttributesActivateSecurityAttributes: UimSecurityAttribute | null, valueFileAttributesRawData: any[] | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getResult(): boolean
    ref(): MessageUimGetFileAttributesOutput
    unref(): void
    static name: string
}
export class MessageUimGetSlotStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetSlotStatusOutput */
    getPhysicalSlotInformation(): { returnType: boolean, valuePhysicalSlotInformation: PhysicalSlotInformationSlot[] | null }
    getPhysicalSlotStatus(): { returnType: boolean, valuePhysicalSlotStatus: PhysicalSlotStatusSlot[] | null }
    getResult(): boolean
    getSlotEidInformation(): { returnType: boolean, valueSlotEidInformation: any[] | null }
    ref(): MessageUimGetSlotStatusOutput
    unref(): void
    static name: string
}
export class MessageUimGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] | null }
    getResult(): boolean
    ref(): MessageUimGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageUimPowerOffSimInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOffSimInput */
    getSlot(): { returnType: boolean, valueSlot: number | null }
    ref(): MessageUimPowerOffSimInput
    setSlot(valueSlot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimPowerOffSimInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimPowerOffSimInput
}
export class MessageUimPowerOffSimOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOffSimOutput */
    getResult(): boolean
    ref(): MessageUimPowerOffSimOutput
    unref(): void
    static name: string
}
export class MessageUimPowerOnSimInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOnSimInput */
    getSlot(): { returnType: boolean, valueSlot: number | null }
    ref(): MessageUimPowerOnSimInput
    setSlot(valueSlot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimPowerOnSimInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimPowerOnSimInput
}
export class MessageUimPowerOnSimOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOnSimOutput */
    getResult(): boolean
    ref(): MessageUimPowerOnSimOutput
    unref(): void
    static name: string
}
export class MessageUimReadRecordInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadRecordInput */
    getFile(): { returnType: boolean, valueFileFileId: number | null, valueFileFilePath: any[] | null }
    getLastRecord(): { returnType: boolean, valueLastRecord: number | null }
    getRecord(): { returnType: boolean, valueRecordRecordNumber: number | null, valueRecordRecordLength: number | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimReadRecordInput
    setFile(valueFileFileId: number, valueFileFilePath: any[]): boolean
    setLastRecord(valueLastRecord: number): boolean
    setRecord(valueRecordRecordNumber: number, valueRecordRecordLength: number): boolean
    setResponseInIndicationToken(valueResponseInIndicationToken: number): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimReadRecordInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimReadRecordInput
}
export class MessageUimReadRecordOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadRecordOutput */
    getAdditionalReadResult(): { returnType: boolean, valueAdditionalReadResult: any[] | null }
    getCardResult(): { returnType: boolean, valueCardResultSw1: number | null, valueCardResultSw2: number | null }
    getReadResult(): { returnType: boolean, valueReadResult: any[] | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getResult(): boolean
    ref(): MessageUimReadRecordOutput
    unref(): void
    static name: string
}
export class MessageUimReadTransparentInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadTransparentInput */
    getEncryptData(): { returnType: boolean, valueEncryptData: boolean | null }
    getFile(): { returnType: boolean, valueFileFileId: number | null, valueFileFilePath: any[] | null }
    getReadInformation(): { returnType: boolean, valueReadInformationOffset: number | null, valueReadInformationLength: number | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimReadTransparentInput
    setEncryptData(valueEncryptData: boolean): boolean
    setFile(valueFileFileId: number, valueFileFilePath: any[]): boolean
    setReadInformation(valueReadInformationOffset: number, valueReadInformationLength: number): boolean
    setResponseInIndicationToken(valueResponseInIndicationToken: number): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimReadTransparentInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimReadTransparentInput
}
export class MessageUimReadTransparentOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadTransparentOutput */
    getCardResult(): { returnType: boolean, valueCardResultSw1: number | null, valueCardResultSw2: number | null }
    getEncryptedData(): { returnType: boolean, valueEncryptedData: boolean | null }
    getReadResult(): { returnType: boolean, valueReadResult: any[] | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getResult(): boolean
    ref(): MessageUimReadTransparentOutput
    unref(): void
    static name: string
}
export class MessageUimRefreshCompleteInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshCompleteInput */
    getInfo(): { returnType: boolean, valueInfoRefreshSuccess: boolean | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimRefreshCompleteInput
    setInfo(valueInfoRefreshSuccess: boolean): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshCompleteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshCompleteInput
}
export class MessageUimRefreshCompleteOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshCompleteOutput */
    getResult(): boolean
    ref(): MessageUimRefreshCompleteOutput
    unref(): void
    static name: string
}
export class MessageUimRefreshRegisterAllInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshRegisterAllInput */
    getInfo(): { returnType: boolean, valueInfoRegisterFlag: boolean | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimRefreshRegisterAllInput
    setInfo(valueInfoRegisterFlag: boolean): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshRegisterAllInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshRegisterAllInput
}
export class MessageUimRefreshRegisterAllOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshRegisterAllOutput */
    getResult(): boolean
    ref(): MessageUimRefreshRegisterAllOutput
    unref(): void
    static name: string
}
export class MessageUimRefreshRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshRegisterInput */
    getInfo(): { returnType: boolean, valueInfoRegisterFlag: boolean | null, valueInfoVoteForInit: boolean | null, valueInfoFiles: MessageUimRefreshRegisterInputInfoFilesElement[] | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimRefreshRegisterInput
    setInfo(valueInfoRegisterFlag: boolean, valueInfoVoteForInit: boolean, valueInfoFiles: MessageUimRefreshRegisterInputInfoFilesElement[]): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshRegisterInput
}
export class MessageUimRefreshRegisterInputInfoFilesElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimRefreshRegisterInputInfoFilesElement */
    fileId: number
    path: object[]
    static name: string
}
export class MessageUimRefreshRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshRegisterOutput */
    getResult(): boolean
    ref(): MessageUimRefreshRegisterOutput
    unref(): void
    static name: string
}
export class MessageUimRegisterEventsInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRegisterEventsInput */
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: UimEventRegistrationFlag | null }
    ref(): MessageUimRegisterEventsInput
    setEventRegistrationMask(valueEventRegistrationMask: UimEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessageUimRegisterEventsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRegisterEventsInput
}
export class MessageUimRegisterEventsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRegisterEventsOutput */
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: UimEventRegistrationFlag | null }
    getResult(): boolean
    ref(): MessageUimRegisterEventsOutput
    unref(): void
    static name: string
}
export class MessageUimResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimResetOutput */
    getResult(): boolean
    ref(): MessageUimResetOutput
    unref(): void
    static name: string
}
export class MessageUimSetPinProtectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSetPinProtectionInput */
    getInfo(): { returnType: boolean, valueInfoPinId: UimPinId | null, valueInfoPinEnabled: boolean | null, valueInfoPinValue: string | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimSetPinProtectionInput
    setInfo(valueInfoPinId: UimPinId, valueInfoPinEnabled: boolean, valueInfoPinValue: string): boolean
    setResponseInIndicationToken(valueResponseInIndicationToken: number): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimSetPinProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimSetPinProtectionInput
}
export class MessageUimSetPinProtectionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSetPinProtectionOutput */
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyRetriesLeft: number | null, valueRetriesRemainingUnblockRetriesLeft: number | null }
    ref(): MessageUimSetPinProtectionOutput
    unref(): void
    static name: string
}
export class MessageUimSwitchSlotInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSwitchSlotInput */
    getLogicalSlot(): { returnType: boolean, valueLogicalSlot: number | null }
    getPhysicalSlot(): { returnType: boolean, valuePhysicalSlot: number | null }
    ref(): MessageUimSwitchSlotInput
    setLogicalSlot(valueLogicalSlot: number): boolean
    setPhysicalSlot(valuePhysicalSlot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimSwitchSlotInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimSwitchSlotInput
}
export class MessageUimSwitchSlotOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSwitchSlotOutput */
    getResult(): boolean
    ref(): MessageUimSwitchSlotOutput
    unref(): void
    static name: string
}
export class MessageUimUnblockPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimUnblockPinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: UimPinId | null, valueInfoPuk: string | null, valueInfoNewPin: string | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimUnblockPinInput
    setInfo(valueInfoPinId: UimPinId, valueInfoPuk: string, valueInfoNewPin: string): boolean
    setResponseInIndicationToken(valueResponseInIndicationToken: number): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimUnblockPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimUnblockPinInput
}
export class MessageUimUnblockPinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimUnblockPinOutput */
    getCardResult(): { returnType: boolean, valueCardResultSw1: number | null, valueCardResultSw2: number | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyRetriesLeft: number | null, valueRetriesRemainingUnblockRetriesLeft: number | null }
    ref(): MessageUimUnblockPinOutput
    unref(): void
    static name: string
}
export class MessageUimVerifyPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimVerifyPinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: UimPinId | null, valueInfoPinValue: string | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType | null, valueSessionApplicationIdentifier: any[] | null }
    ref(): MessageUimVerifyPinInput
    setInfo(valueInfoPinId: UimPinId, valueInfoPinValue: string): boolean
    setResponseInIndicationToken(valueResponseInIndicationToken: number): boolean
    setSession(valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimVerifyPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimVerifyPinInput
}
export class MessageUimVerifyPinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimVerifyPinOutput */
    getCardResult(): { returnType: boolean, valueCardResultSw1: number | null, valueCardResultSw2: number | null }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number | null }
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyRetriesLeft: number | null, valueRetriesRemainingUnblockRetriesLeft: number | null }
    ref(): MessageUimVerifyPinOutput
    unref(): void
    static name: string
}
export class MessageVoiceAnswerCallInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerCallInput */
    getCallId(): { returnType: boolean, valueCallId: number | null }
    ref(): MessageVoiceAnswerCallInput
    setCallId(valueCallId: number): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceAnswerCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceAnswerCallInput
}
export class MessageVoiceAnswerCallOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerCallOutput */
    getCallId(): { returnType: boolean, valueCallId: number | null }
    getResult(): boolean
    ref(): MessageVoiceAnswerCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceAnswerUssdInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerUssdInput */
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme | null, valueUssDataData: any[] | null }
    ref(): MessageVoiceAnswerUssdInput
    setUssData(valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceAnswerUssdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceAnswerUssdInput
}
export class MessageVoiceAnswerUssdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerUssdOutput */
    getResult(): boolean
    ref(): MessageVoiceAnswerUssdOutput
    unref(): void
    static name: string
}
export class MessageVoiceCancelUssdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceCancelUssdOutput */
    getResult(): boolean
    ref(): MessageVoiceCancelUssdOutput
    unref(): void
    static name: string
}
export class MessageVoiceDialCallInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceDialCallInput */
    getCallingNumber(): { returnType: boolean, valueCallingNumber: string | null }
    ref(): MessageVoiceDialCallInput
    setCallingNumber(valueCallingNumber: string): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceDialCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceDialCallInput
}
export class MessageVoiceDialCallOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceDialCallOutput */
    getCallId(): { returnType: boolean, valueCallId: number | null }
    getResult(): boolean
    ref(): MessageVoiceDialCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceEndCallInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceEndCallInput */
    getCallId(): { returnType: boolean, valueCallId: number | null }
    ref(): MessageVoiceEndCallInput
    setCallId(valueCallId: number): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceEndCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceEndCallInput
}
export class MessageVoiceEndCallOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceEndCallOutput */
    getCallId(): { returnType: boolean, valueCallId: number | null }
    getResult(): boolean
    ref(): MessageVoiceEndCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceGetAllCallInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetAllCallInfoOutput */
    getCallInformation(): { returnType: boolean, valueCallInformation: MessageVoiceGetAllCallInfoOutputCallInformationCall[] | null }
    getRemotePartyNumber(): { returnType: boolean, valueRemotePartyNumber: MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall[] | null }
    getResult(): boolean
    ref(): MessageVoiceGetAllCallInfoOutput
    unref(): void
    static name: string
}
export class MessageVoiceGetAllCallInfoOutputCallInformationCall {
    /* Fields of Qmi-1.0.Qmi.MessageVoiceGetAllCallInfoOutputCallInformationCall */
    id: number
    state: VoiceCallState
    type: VoiceCallType
    direction: VoiceCallDirection
    mode: VoiceCallMode
    multipartIndicator: boolean
    als: VoiceAls
    static name: string
}
export class MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall {
    /* Fields of Qmi-1.0.Qmi.MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall */
    id: number
    presentationIndicator: VoicePresentation
    type: string
    static name: string
}
export class MessageVoiceGetCallWaitingInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetCallWaitingInput */
    getServiceClass(): { returnType: boolean, valueServiceClass: number | null }
    ref(): MessageVoiceGetCallWaitingInput
    setServiceClass(valueServiceClass: number): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceGetCallWaitingInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceGetCallWaitingInput
}
export class MessageVoiceGetCallWaitingOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetCallWaitingOutput */
    getResult(): boolean
    getServiceClass(): { returnType: boolean, valueServiceClass: number | null }
    ref(): MessageVoiceGetCallWaitingOutput
    unref(): void
    static name: string
}
export class MessageVoiceGetConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetConfigInput */
    getAirTimer(): { returnType: boolean, valueAirTimer: boolean | null }
    getAmrStatus(): { returnType: boolean, valueAmrStatus: boolean | null }
    getAutoAnswer(): { returnType: boolean, valueAutoAnswer: boolean | null }
    getNamIndex(): { returnType: boolean, valueNamIndex: boolean | null }
    getPreferredVoicePrivacy(): { returnType: boolean, valuePreferredVoicePrivacy: boolean | null }
    getPreferredVoiceServiceOption(): { returnType: boolean, valuePreferredVoiceServiceOption: boolean | null }
    getRoamTimer(): { returnType: boolean, valueRoamTimer: boolean | null }
    getTtyMode(): { returnType: boolean, valueTtyMode: boolean | null }
    getVoiceDomainPreference(): { returnType: boolean, valueVoiceDomainPreference: boolean | null }
    ref(): MessageVoiceGetConfigInput
    setAirTimer(valueAirTimer: boolean): boolean
    setAmrStatus(valueAmrStatus: boolean): boolean
    setAutoAnswer(valueAutoAnswer: boolean): boolean
    setNamIndex(valueNamIndex: boolean): boolean
    setPreferredVoicePrivacy(valuePreferredVoicePrivacy: boolean): boolean
    setPreferredVoiceServiceOption(valuePreferredVoiceServiceOption: boolean): boolean
    setRoamTimer(valueRoamTimer: boolean): boolean
    setTtyMode(valueTtyMode: boolean): boolean
    setVoiceDomainPreference(valueVoiceDomainPreference: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceGetConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceGetConfigInput
}
export class MessageVoiceGetConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetConfigOutput */
    getAirTimerCount(): { returnType: boolean, valueAirTimerCountNamId: number | null, valueAirTimerCountAirTimer: number | null }
    getAutoAnswerStatus(): { returnType: boolean, valueAutoAnswerStatus: boolean | null }
    getCurrentAmrStatus(): { returnType: boolean, valueCurrentAmrStatusGsm: boolean | null, valueCurrentAmrStatusWcdma: VoiceWcdmaAmrStatus | null }
    getCurrentPreferredVoiceSo(): { returnType: boolean, valueCurrentPreferredVoiceSoNamId: number | null, valueCurrentPreferredVoiceSoEvrcCapability: boolean | null, valueCurrentPreferredVoiceSoHomePageVoiceServiceOption: VoiceServiceOption | null, valueCurrentPreferredVoiceSoHomeOriginationVoiceServiceOption: VoiceServiceOption | null, valueCurrentPreferredVoiceSoRoamingOriginationVoiceServiceOption: VoiceServiceOption | null }
    getCurrentTtyMode(): { returnType: boolean, valueCurrentTtyMode: VoiceTtyMode | null }
    getCurrentVoiceDomainPreference(): { returnType: boolean, valueCurrentVoiceDomainPreference: VoiceDomain | null }
    getCurrentVoicePrivacyPreference(): { returnType: boolean, valueCurrentVoicePrivacyPreference: VoicePrivacy | null }
    getResult(): boolean
    getRoamTimerCount(): { returnType: boolean, valueRoamTimerCountNamId: number | null, valueRoamTimerCountRoamTimer: number | null }
    ref(): MessageVoiceGetConfigOutput
    unref(): void
    static name: string
}
export class MessageVoiceGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] | null }
    getResult(): boolean
    ref(): MessageVoiceGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageVoiceIndicationRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceIndicationRegisterInput */
    getAocEvents(): { returnType: boolean, valueAocEvents: boolean | null }
    getCallNotificationEvents(): { returnType: boolean, valueCallNotificationEvents: boolean | null }
    getConferenceEvents(): { returnType: boolean, valueConferenceEvents: boolean | null }
    getDtmfEvents(): { returnType: boolean, valueDtmfEvents: boolean | null }
    getExtendedBurstTypeInternationalInformationEvents(): { returnType: boolean, valueExtendedBurstTypeInternationalInformationEvents: boolean | null }
    getHandoverEvents(): { returnType: boolean, valueHandoverEvents: boolean | null }
    getModificationEvents(): { returnType: boolean, valueModificationEvents: boolean | null }
    getMtPageMissInformationEvents(): { returnType: boolean, valueMtPageMissInformationEvents: boolean | null }
    getSpeechCodecEvents(): { returnType: boolean, valueSpeechCodecEvents: boolean | null }
    getSupplementaryServiceNotificationEvents(): { returnType: boolean, valueSupplementaryServiceNotificationEvents: boolean | null }
    getUssdNotificationEvents(): { returnType: boolean, valueUssdNotificationEvents: boolean | null }
    getUusEvents(): { returnType: boolean, valueUusEvents: boolean | null }
    getVoicePrivacyEvents(): { returnType: boolean, valueVoicePrivacyEvents: boolean | null }
    ref(): MessageVoiceIndicationRegisterInput
    setAocEvents(valueAocEvents: boolean): boolean
    setCallNotificationEvents(valueCallNotificationEvents: boolean): boolean
    setConferenceEvents(valueConferenceEvents: boolean): boolean
    setDtmfEvents(valueDtmfEvents: boolean): boolean
    setExtendedBurstTypeInternationalInformationEvents(valueExtendedBurstTypeInternationalInformationEvents: boolean): boolean
    setHandoverEvents(valueHandoverEvents: boolean): boolean
    setModificationEvents(valueModificationEvents: boolean): boolean
    setMtPageMissInformationEvents(valueMtPageMissInformationEvents: boolean): boolean
    setSpeechCodecEvents(valueSpeechCodecEvents: boolean): boolean
    setSupplementaryServiceNotificationEvents(valueSupplementaryServiceNotificationEvents: boolean): boolean
    setUssdNotificationEvents(valueUssdNotificationEvents: boolean): boolean
    setUusEvents(valueUusEvents: boolean): boolean
    setVoicePrivacyEvents(valueVoicePrivacyEvents: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceIndicationRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceIndicationRegisterInput
}
export class MessageVoiceIndicationRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceIndicationRegisterOutput */
    getResult(): boolean
    ref(): MessageVoiceIndicationRegisterOutput
    unref(): void
    static name: string
}
export class MessageVoiceManageCallsInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceManageCallsInput */
    getCallId(): { returnType: boolean, valueCallId: number | null }
    getServiceType(): { returnType: boolean, valueServiceType: VoiceSupplementaryServiceType | null }
    ref(): MessageVoiceManageCallsInput
    setCallId(valueCallId: number): boolean
    setServiceType(valueServiceType: VoiceSupplementaryServiceType): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceManageCallsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceManageCallsInput
}
export class MessageVoiceManageCallsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceManageCallsOutput */
    getResult(): boolean
    ref(): MessageVoiceManageCallsOutput
    unref(): void
    static name: string
}
export class MessageVoiceOriginateUssdInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdInput */
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme | null, valueUssDataData: any[] | null }
    ref(): MessageVoiceOriginateUssdInput
    setUssData(valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceOriginateUssdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceOriginateUssdInput
}
export class MessageVoiceOriginateUssdNoWaitInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdNoWaitInput */
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme | null, valueUssDataData: any[] | null }
    ref(): MessageVoiceOriginateUssdNoWaitInput
    setUssData(valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceOriginateUssdNoWaitInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceOriginateUssdNoWaitInput
}
export class MessageVoiceOriginateUssdNoWaitOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdNoWaitOutput */
    getResult(): boolean
    ref(): MessageVoiceOriginateUssdNoWaitOutput
    unref(): void
    static name: string
}
export class MessageVoiceOriginateUssdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdOutput */
    getAlphaIdentifier(): { returnType: boolean, valueAlphaIdentifierDataCodingScheme: VoiceAlphaDataCodingScheme | null, valueAlphaIdentifierAlpha: any[] | null }
    getCallControlResultType(): { returnType: boolean, valueCallControlResultType: VoiceCallControlResultType | null }
    getCallControlSupplementaryServiceType(): { returnType: boolean, valueCallControlSupplementaryServiceType: VoiceCallControlSupplementaryServiceType | null }
    getCallId(): { returnType: boolean, valueCallId: number | null }
    getFailureCause(): { returnType: boolean, valueFailureCause: VoiceCallEndReason | null }
    getResult(): boolean
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme | null, valueUssDataData: any[] | null }
    getUssDataUtf16(): { returnType: boolean, valueUssDataUtf16: number[] | null }
    ref(): MessageVoiceOriginateUssdOutput
    unref(): void
    static name: string
}
export class MessageVoiceSetSupplementaryServiceInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceSetSupplementaryServiceInput */
    getSupplementaryServiceInformation(): { returnType: boolean, valueSupplementaryServiceInformationSupplementaryServiceAction: VoiceSupplementaryServiceAction | null, valueSupplementaryServiceInformationSupplementaryServiceReason: VoiceSupplementaryServiceReason | null }
    ref(): MessageVoiceSetSupplementaryServiceInput
    setSupplementaryServiceInformation(valueSupplementaryServiceInformationSupplementaryServiceAction: VoiceSupplementaryServiceAction, valueSupplementaryServiceInformationSupplementaryServiceReason: VoiceSupplementaryServiceReason): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceSetSupplementaryServiceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceSetSupplementaryServiceInput
}
export class MessageVoiceSetSupplementaryServiceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceSetSupplementaryServiceOutput */
    getResult(): boolean
    getServiceStatus(): { returnType: boolean, valueServiceStatusActive: boolean | null, valueServiceStatusProvisioned: boolean | null }
    ref(): MessageVoiceSetSupplementaryServiceOutput
    unref(): void
    static name: string
}
export class MessageWdaGetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaGetDataFormatInput */
    getEndpointInfo(): { returnType: boolean, valueEndpointInfoEndpointType: DataEndpointType | null, valueEndpointInfoInterfaceNumber: number | null }
    ref(): MessageWdaGetDataFormatInput
    setEndpointInfo(valueEndpointInfoEndpointType: DataEndpointType, valueEndpointInfoInterfaceNumber: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdaGetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdaGetDataFormatInput
}
export class MessageWdaGetDataFormatOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaGetDataFormatOutput */
    getDownlinkDataAggregationMaxDatagrams(): { returnType: boolean, valueDownlinkDataAggregationMaxDatagrams: number | null }
    getDownlinkDataAggregationMaxSize(): { returnType: boolean, valueDownlinkDataAggregationMaxSize: number | null }
    getDownlinkDataAggregationProtocol(): { returnType: boolean, valueDownlinkDataAggregationProtocol: WdaDataAggregationProtocol | null }
    getDownloadMinimumPadding(): { returnType: boolean, valueDownloadMinimumPadding: number | null }
    getFlowControl(): { returnType: boolean, valueFlowControl: number | null }
    getLinkLayerProtocol(): { returnType: boolean, valueLinkLayerProtocol: WdaLinkLayerProtocol | null }
    getNdpSignature(): { returnType: boolean, valueNdpSignature: number | null }
    getQosFormat(): { returnType: boolean, valueQosFormat: boolean | null }
    getResult(): boolean
    getUplinkDataAggregationMaxDatagrams(): { returnType: boolean, valueUplinkDataAggregationMaxDatagrams: number | null }
    getUplinkDataAggregationMaxSize(): { returnType: boolean, valueUplinkDataAggregationMaxSize: number | null }
    getUplinkDataAggregationProtocol(): { returnType: boolean, valueUplinkDataAggregationProtocol: WdaDataAggregationProtocol | null }
    ref(): MessageWdaGetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageWdaGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] | null }
    getResult(): boolean
    ref(): MessageWdaGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageWdaSetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaSetDataFormatInput */
    getDownlinkDataAggregationMaxDatagrams(): { returnType: boolean, valueDownlinkDataAggregationMaxDatagrams: number | null }
    getDownlinkDataAggregationMaxSize(): { returnType: boolean, valueDownlinkDataAggregationMaxSize: number | null }
    getDownlinkDataAggregationProtocol(): { returnType: boolean, valueDownlinkDataAggregationProtocol: WdaDataAggregationProtocol | null }
    getEndpointInfo(): { returnType: boolean, valueEndpointInfoEndpointType: DataEndpointType | null, valueEndpointInfoInterfaceNumber: number | null }
    getLinkLayerProtocol(): { returnType: boolean, valueLinkLayerProtocol: WdaLinkLayerProtocol | null }
    getNdpSignature(): { returnType: boolean, valueNdpSignature: number | null }
    getQosFormat(): { returnType: boolean, valueQosFormat: boolean | null }
    getUplinkDataAggregationProtocol(): { returnType: boolean, valueUplinkDataAggregationProtocol: WdaDataAggregationProtocol | null }
    ref(): MessageWdaSetDataFormatInput
    setDownlinkDataAggregationMaxDatagrams(valueDownlinkDataAggregationMaxDatagrams: number): boolean
    setDownlinkDataAggregationMaxSize(valueDownlinkDataAggregationMaxSize: number): boolean
    setDownlinkDataAggregationProtocol(valueDownlinkDataAggregationProtocol: WdaDataAggregationProtocol): boolean
    setEndpointInfo(valueEndpointInfoEndpointType: DataEndpointType, valueEndpointInfoInterfaceNumber: number): boolean
    setLinkLayerProtocol(valueLinkLayerProtocol: WdaLinkLayerProtocol): boolean
    setNdpSignature(valueNdpSignature: number): boolean
    setQosFormat(valueQosFormat: boolean): boolean
    setUplinkDataAggregationProtocol(valueUplinkDataAggregationProtocol: WdaDataAggregationProtocol): boolean
    unref(): void
    static name: string
    static new(): MessageWdaSetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdaSetDataFormatInput
}
export class MessageWdaSetDataFormatOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaSetDataFormatOutput */
    getDownlinkDataAggregationMaxDatagrams(): { returnType: boolean, valueDownlinkDataAggregationMaxDatagrams: number | null }
    getDownlinkDataAggregationMaxSize(): { returnType: boolean, valueDownlinkDataAggregationMaxSize: number | null }
    getDownlinkDataAggregationProtocol(): { returnType: boolean, valueDownlinkDataAggregationProtocol: WdaDataAggregationProtocol | null }
    getDownloadMinimumPadding(): { returnType: boolean, valueDownloadMinimumPadding: number | null }
    getFlowControl(): { returnType: boolean, valueFlowControl: number | null }
    getLinkLayerProtocol(): { returnType: boolean, valueLinkLayerProtocol: WdaLinkLayerProtocol | null }
    getNdpSignature(): { returnType: boolean, valueNdpSignature: number | null }
    getQosFormat(): { returnType: boolean, valueQosFormat: boolean | null }
    getResult(): boolean
    getUplinkDataAggregationMaxDatagrams(): { returnType: boolean, valueUplinkDataAggregationMaxDatagrams: number | null }
    getUplinkDataAggregationMaxSize(): { returnType: boolean, valueUplinkDataAggregationMaxSize: number | null }
    getUplinkDataAggregationProtocol(): { returnType: boolean, valueUplinkDataAggregationProtocol: WdaDataAggregationProtocol | null }
    ref(): MessageWdaSetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageWdsBindDataPortInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindDataPortInput */
    getDataPort(): { returnType: boolean, valueDataPort: SioPort | null }
    ref(): MessageWdsBindDataPortInput
    setDataPort(valueDataPort: SioPort): boolean
    unref(): void
    static name: string
    static new(): MessageWdsBindDataPortInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsBindDataPortInput
}
export class MessageWdsBindDataPortOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindDataPortOutput */
    getResult(): boolean
    ref(): MessageWdsBindDataPortOutput
    unref(): void
    static name: string
}
export class MessageWdsBindMuxDataPortInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindMuxDataPortInput */
    getClientType(): { returnType: boolean, valueClientType: WdsClientType | null }
    getEndpointInfo(): { returnType: boolean, valueEndpointInfoEndpointType: DataEndpointType | null, valueEndpointInfoInterfaceNumber: number | null }
    getMuxId(): { returnType: boolean, valueMuxId: number | null }
    ref(): MessageWdsBindMuxDataPortInput
    setClientType(valueClientType: WdsClientType): boolean
    setEndpointInfo(valueEndpointInfoEndpointType: DataEndpointType, valueEndpointInfoInterfaceNumber: number): boolean
    setMuxId(valueMuxId: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsBindMuxDataPortInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsBindMuxDataPortInput
}
export class MessageWdsBindMuxDataPortOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindMuxDataPortOutput */
    getResult(): boolean
    ref(): MessageWdsBindMuxDataPortOutput
    unref(): void
    static name: string
}
export class MessageWdsCreateProfileInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsCreateProfileInput */
    getApnDisabledFlag(): { returnType: boolean, valueApnDisabledFlag: boolean | null }
    getApnName(): { returnType: boolean, valueApnName: string | null }
    getApnTypeMask(): { returnType: boolean, valueApnTypeMask: WdsApnTypeMask | null }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication | null }
    getGprsMinimumQos(): { returnType: boolean, valueGprsMinimumQosPrecedenceClass: number | null, valueGprsMinimumQosDelayClass: number | null, valueGprsMinimumQosReliabilityClass: number | null, valueGprsMinimumQosPeakThroughputClass: number | null, valueGprsMinimumQosMeanThroughputClass: number | null }
    getGprsRequestedQos(): { returnType: boolean, valueGprsRequestedQosPrecedenceClass: number | null, valueGprsRequestedQosDelayClass: number | null, valueGprsRequestedQosReliabilityClass: number | null, valueGprsRequestedQosPeakThroughputClass: number | null, valueGprsRequestedQosMeanThroughputClass: number | null }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: boolean | null }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number | null }
    getIpv6AddressPreference(): { returnType: boolean, valueIpv6AddressPreferenceAddress: number[] | null }
    getIpv6PrimaryDnsAddressPreference(): { returnType: boolean, valueIpv6PrimaryDnsAddressPreference: number[] | null }
    getIpv6SecondaryDnsAddressPreference(): { returnType: boolean, valueIpv6SecondaryDnsAddressPreference: number[] | null }
    getLteQosParameters(): { returnType: boolean, valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier | null, valueLteQosParametersGuaranteedDownlinkBitrate: number | null, valueLteQosParametersMaxDownlinkBitrate: number | null, valueLteQosParametersGuaranteedUplinkBitrate: number | null, valueLteQosParametersMaxUplinkBitrate: number | null }
    getPassword(): { returnType: boolean, valuePassword: string | null }
    getPcscfAddressUsingDhcp(): { returnType: boolean, valuePcscfAddressUsingDhcp: boolean | null }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: boolean | null }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number | null }
    getPdpContextPrimaryId(): { returnType: boolean, valuePdpContextPrimaryId: number | null }
    getPdpContextSecondaryFlag(): { returnType: boolean, valuePdpContextSecondaryFlag: boolean | null }
    getPdpDataCompressionType(): { returnType: boolean, valuePdpDataCompressionType: WdsPdpDataCompressionType | null }
    getPdpHeaderCompressionType(): { returnType: boolean, valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType | null }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType | null }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number | null }
    getProfileName(): { returnType: boolean, valueProfileName: string | null }
    getProfileType(): { returnType: boolean, valueProfileType: WdsProfileType | null }
    getRoamingDisallowedFlag(): { returnType: boolean, valueRoamingDisallowedFlag: boolean | null }
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number | null }
    getUmtsMinimumQos(): { returnType: boolean, valueUmtsMinimumQosTrafficClass: WdsTrafficClass | null, valueUmtsMinimumQosMaxUplinkBitrate: number | null, valueUmtsMinimumQosMaxDownlinkBitrate: number | null, valueUmtsMinimumQosGuaranteedUplinkBitrate: number | null, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number | null, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsMinimumQosMaximumSduSize: number | null, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsMinimumQosTransferDelay: number | null, valueUmtsMinimumQosTrafficHandlingPriority: number | null }
    getUmtsMinimumQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio | null, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number | null }
    getUmtsRequestedQos(): { returnType: boolean, valueUmtsRequestedQosTrafficClass: WdsTrafficClass | null, valueUmtsRequestedQosMaxUplinkBitrate: number | null, valueUmtsRequestedQosMaxDownlinkBitrate: number | null, valueUmtsRequestedQosGuaranteedUplinkBitrate: number | null, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number | null, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsRequestedQosMaximumSduSize: number | null, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsRequestedQosTransferDelay: number | null, valueUmtsRequestedQosTrafficHandlingPriority: number | null }
    getUmtsRequestedQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio | null, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number | null }
    getUsername(): { returnType: boolean, valueUsername: string | null }
    ref(): MessageWdsCreateProfileInput
    setApnDisabledFlag(valueApnDisabledFlag: boolean): boolean
    setApnName(valueApnName: string): boolean
    setApnTypeMask(valueApnTypeMask: WdsApnTypeMask): boolean
    setAuthentication(valueAuthentication: WdsAuthentication): boolean
    setGprsMinimumQos(valueGprsMinimumQosPrecedenceClass: number, valueGprsMinimumQosDelayClass: number, valueGprsMinimumQosReliabilityClass: number, valueGprsMinimumQosPeakThroughputClass: number, valueGprsMinimumQosMeanThroughputClass: number): boolean
    setGprsRequestedQos(valueGprsRequestedQosPrecedenceClass: number, valueGprsRequestedQosDelayClass: number, valueGprsRequestedQosReliabilityClass: number, valueGprsRequestedQosPeakThroughputClass: number, valueGprsRequestedQosMeanThroughputClass: number): boolean
    setImcnFlag(valueImcnFlag: boolean): boolean
    setIpv4AddressPreference(valueIpv4AddressPreference: number): boolean
    setIpv6AddressPreference(valueIpv6AddressPreferenceAddress: number[]): boolean
    setIpv6PrimaryDnsAddressPreference(valueIpv6PrimaryDnsAddressPreference: number[]): boolean
    setIpv6SecondaryDnsAddressPreference(valueIpv6SecondaryDnsAddressPreference: number[]): boolean
    setLteQosParameters(valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier, valueLteQosParametersGuaranteedDownlinkBitrate: number, valueLteQosParametersMaxDownlinkBitrate: number, valueLteQosParametersGuaranteedUplinkBitrate: number, valueLteQosParametersMaxUplinkBitrate: number): boolean
    setPassword(valuePassword: string): boolean
    setPcscfAddressUsingDhcp(valuePcscfAddressUsingDhcp: boolean): boolean
    setPcscfAddressUsingPco(valuePcscfAddressUsingPco: boolean): boolean
    setPdpContextNumber(valuePdpContextNumber: number): boolean
    setPdpContextPrimaryId(valuePdpContextPrimaryId: number): boolean
    setPdpContextSecondaryFlag(valuePdpContextSecondaryFlag: boolean): boolean
    setPdpDataCompressionType(valuePdpDataCompressionType: WdsPdpDataCompressionType): boolean
    setPdpHeaderCompressionType(valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType): boolean
    setPdpType(valuePdpType: WdsPdpType): boolean
    setPrimaryIpv4DnsAddress(valuePrimaryIpv4DnsAddress: number): boolean
    setProfileName(valueProfileName: string): boolean
    setProfileType(valueProfileType: WdsProfileType): boolean
    setRoamingDisallowedFlag(valueRoamingDisallowedFlag: boolean): boolean
    setSecondaryIpv4DnsAddress(valueSecondaryIpv4DnsAddress: number): boolean
    setUmtsMinimumQos(valueUmtsMinimumQosTrafficClass: WdsTrafficClass, valueUmtsMinimumQosMaxUplinkBitrate: number, valueUmtsMinimumQosMaxDownlinkBitrate: number, valueUmtsMinimumQosGuaranteedUplinkBitrate: number, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosMaximumSduSize: number, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosTransferDelay: number, valueUmtsMinimumQosTrafficHandlingPriority: number): boolean
    setUmtsMinimumQosWithSignalingIndicationFlag(valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number): boolean
    setUmtsRequestedQos(valueUmtsRequestedQosTrafficClass: WdsTrafficClass, valueUmtsRequestedQosMaxUplinkBitrate: number, valueUmtsRequestedQosMaxDownlinkBitrate: number, valueUmtsRequestedQosGuaranteedUplinkBitrate: number, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosMaximumSduSize: number, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosTransferDelay: number, valueUmtsRequestedQosTrafficHandlingPriority: number): boolean
    setUmtsRequestedQosWithSignalingIndicationFlag(valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number): boolean
    setUsername(valueUsername: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsCreateProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsCreateProfileInput
}
export class MessageWdsCreateProfileOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsCreateProfileOutput */
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError | null }
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType | null, valueProfileIdentifierProfileIndex: number | null }
    getResult(): boolean
    ref(): MessageWdsCreateProfileOutput
    unref(): void
    static name: string
}
export class MessageWdsDeleteProfileInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsDeleteProfileInput */
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType | null, valueProfileIdentifierProfileIndex: number | null }
    ref(): MessageWdsDeleteProfileInput
    setProfileIdentifier(valueProfileIdentifierProfileType: WdsProfileType, valueProfileIdentifierProfileIndex: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsDeleteProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsDeleteProfileInput
}
export class MessageWdsDeleteProfileOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsDeleteProfileOutput */
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError | null }
    getResult(): boolean
    ref(): MessageWdsDeleteProfileOutput
    unref(): void
    static name: string
}
export class MessageWdsGetAutoconnectSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetAutoconnectSettingsOutput */
    getResult(): boolean
    getRoaming(): { returnType: boolean, valueRoaming: WdsAutoconnectSettingRoaming | null }
    getStatus(): { returnType: boolean, valueStatus: WdsAutoconnectSetting | null }
    ref(): MessageWdsGetAutoconnectSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetChannelRatesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetChannelRatesOutput */
    getChannelRates(): { returnType: boolean, valueChannelRatesChannelTxRateBps: number | null, valueChannelRatesChannelRxRateBps: number | null, valueChannelRatesMaxChannelTxRateBps: number | null, valueChannelRatesMaxChannelRxRateBps: number | null }
    getResult(): boolean
    ref(): MessageWdsGetChannelRatesOutput
    unref(): void
    static name: string
}
export class MessageWdsGetCurrentDataBearerTechnologyOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetCurrentDataBearerTechnologyOutput */
    getCurrent(): { returnType: boolean, valueCurrentNetworkType: WdsNetworkType | null, valueCurrentRatMask: number | null, valueCurrentSoMask: number | null }
    getLast(): { returnType: boolean, valueLastNetworkType: WdsNetworkType | null, valueLastRatMask: number | null, valueLastSoMask: number | null }
    getResult(): boolean
    ref(): MessageWdsGetCurrentDataBearerTechnologyOutput
    unref(): void
    static name: string
}
export class MessageWdsGetCurrentSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetCurrentSettingsInput */
    getRequestedSettings(): { returnType: boolean, valueRequestedSettings: WdsGetCurrentSettingsRequestedSettings | null }
    ref(): MessageWdsGetCurrentSettingsInput
    setRequestedSettings(valueRequestedSettings: WdsGetCurrentSettingsRequestedSettings): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetCurrentSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetCurrentSettingsInput
}
export class MessageWdsGetCurrentSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetCurrentSettingsOutput */
    getApnName(): { returnType: boolean, valueApnName: string | null }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication | null }
    getDomainNameList(): { returnType: boolean, valueDomainNameList: string[] | null }
    getExtendedTechnologyPreference(): { returnType: boolean, valueExtendedTechnologyPreference: WdsExtendedTechnologyPreference | null }
    getGprsGrantedQos(): { returnType: boolean, valueGprsGrantedQosPrecedenceClass: number | null, valueGprsGrantedQosDelayClass: number | null, valueGprsGrantedQosReliabilityClass: number | null, valueGprsGrantedQosPeakThroughputClass: number | null, valueGprsGrantedQosMeanThroughputClass: number | null }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: number | null }
    getIpFamily(): { returnType: boolean, valueIpFamily: WdsIpFamily | null }
    getIpv4Address(): { returnType: boolean, valueIpv4Address: number | null }
    getIpv4GatewayAddress(): { returnType: boolean, valueIpv4GatewayAddress: number | null }
    getIpv4GatewaySubnetMask(): { returnType: boolean, valueIpv4GatewaySubnetMask: number | null }
    getIpv6Address(): { returnType: boolean, valueIpv6AddressAddress: number[] | null, valueIpv6AddressPrefixLength: number | null }
    getIpv6GatewayAddress(): { returnType: boolean, valueIpv6GatewayAddressAddress: number[] | null, valueIpv6GatewayAddressPrefixLength: number | null }
    getIpv6PrimaryDnsAddress(): { returnType: boolean, valueIpv6PrimaryDnsAddress: number[] | null }
    getIpv6SecondaryDnsAddress(): { returnType: boolean, valueIpv6SecondaryDnsAddress: number[] | null }
    getMtu(): { returnType: boolean, valueMtu: number | null }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: number | null }
    getPcscfDomainNameList(): { returnType: boolean, valuePcscfDomainNameList: string[] | null }
    getPcscfServerAddressList(): { returnType: boolean, valuePcscfServerAddressList: number[] | null }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType | null }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number | null }
    getProfileId(): { returnType: boolean, valueProfileIdProfileType: WdsProfileType | null, valueProfileIdProfileIndex: number | null }
    getProfileName(): { returnType: boolean, valueProfileName: string | null }
    getResult(): boolean
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number | null }
    getUmtsGrantedQos(): { returnType: boolean, valueUmtsGrantedQosTrafficClass: WdsTrafficClass | null, valueUmtsGrantedQosMaxUplinkBitrate: number | null, valueUmtsGrantedQosMaxDownlinkBitrate: number | null, valueUmtsGrantedQosGuaranteedUplinkBitrate: number | null, valueUmtsGrantedQosGuaranteedDownlinkBitrate: number | null, valueUmtsGrantedQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsGrantedQosMaximumSduSize: number | null, valueUmtsGrantedQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsGrantedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsGrantedQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsGrantedQosTransferDelay: number | null, valueUmtsGrantedQosTrafficHandlingPriority: number | null }
    getUsername(): { returnType: boolean, valueUsername: string | null }
    ref(): MessageWdsGetCurrentSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDataBearerTechnologyOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDataBearerTechnologyOutput */
    getCurrent(): { returnType: boolean, valueCurrent: WdsDataBearerTechnology | null }
    getLast(): { returnType: boolean, valueLast: WdsDataBearerTechnology | null }
    getResult(): boolean
    ref(): MessageWdsGetDataBearerTechnologyOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDefaultProfileNumberInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultProfileNumberInput */
    getProfileType(): { returnType: boolean, valueProfileTypeType: WdsProfileType | null, valueProfileTypeFamily: WdsProfileFamily | null }
    ref(): MessageWdsGetDefaultProfileNumberInput
    setProfileType(valueProfileTypeType: WdsProfileType, valueProfileTypeFamily: WdsProfileFamily): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetDefaultProfileNumberInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetDefaultProfileNumberInput
}
export class MessageWdsGetDefaultProfileNumberOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultProfileNumberOutput */
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError | null }
    getIndex(): { returnType: boolean, valueIndex: number | null }
    getResult(): boolean
    ref(): MessageWdsGetDefaultProfileNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDefaultSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultSettingsInput */
    getProfileType(): { returnType: boolean, valueProfileType: WdsProfileType | null }
    ref(): MessageWdsGetDefaultSettingsInput
    setProfileType(valueProfileType: WdsProfileType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetDefaultSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetDefaultSettingsInput
}
export class MessageWdsGetDefaultSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultSettingsOutput */
    getApnName(): { returnType: boolean, valueApnName: string | null }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication | null }
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError | null }
    getGprsMinimumQos(): { returnType: boolean, valueGprsMinimumQosPrecedenceClass: number | null, valueGprsMinimumQosDelayClass: number | null, valueGprsMinimumQosReliabilityClass: number | null, valueGprsMinimumQosPeakThroughputClass: number | null, valueGprsMinimumQosMeanThroughputClass: number | null }
    getGprsRequestedQos(): { returnType: boolean, valueGprsRequestedQosPrecedenceClass: number | null, valueGprsRequestedQosDelayClass: number | null, valueGprsRequestedQosReliabilityClass: number | null, valueGprsRequestedQosPeakThroughputClass: number | null, valueGprsRequestedQosMeanThroughputClass: number | null }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: boolean | null }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number | null }
    getIpv6AddressPreference(): { returnType: boolean, valueIpv6AddressPreferenceAddress: number[] | null }
    getIpv6PrimaryDnsAddressPreference(): { returnType: boolean, valueIpv6PrimaryDnsAddressPreference: number[] | null }
    getIpv6SecondaryDnsAddressPreference(): { returnType: boolean, valueIpv6SecondaryDnsAddressPreference: number[] | null }
    getLteQosParameters(): { returnType: boolean, valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier | null, valueLteQosParametersGuaranteedDownlinkBitrate: number | null, valueLteQosParametersMaxDownlinkBitrate: number | null, valueLteQosParametersGuaranteedUplinkBitrate: number | null, valueLteQosParametersMaxUplinkBitrate: number | null }
    getPassword(): { returnType: boolean, valuePassword: string | null }
    getPcscfAddressUsingDhcp(): { returnType: boolean, valuePcscfAddressUsingDhcp: boolean | null }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: boolean | null }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number | null }
    getPdpContextPrimaryId(): { returnType: boolean, valuePdpContextPrimaryId: number | null }
    getPdpContextSecondaryFlag(): { returnType: boolean, valuePdpContextSecondaryFlag: boolean | null }
    getPdpDataCompressionType(): { returnType: boolean, valuePdpDataCompressionType: WdsPdpDataCompressionType | null }
    getPdpHeaderCompressionType(): { returnType: boolean, valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType | null }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType | null }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number | null }
    getProfileName(): { returnType: boolean, valueProfileName: string | null }
    getResult(): boolean
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number | null }
    getUmtsMinimumQos(): { returnType: boolean, valueUmtsMinimumQosTrafficClass: WdsTrafficClass | null, valueUmtsMinimumQosMaxUplinkBitrate: number | null, valueUmtsMinimumQosMaxDownlinkBitrate: number | null, valueUmtsMinimumQosGuaranteedUplinkBitrate: number | null, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number | null, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsMinimumQosMaximumSduSize: number | null, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsMinimumQosTransferDelay: number | null, valueUmtsMinimumQosTrafficHandlingPriority: number | null }
    getUmtsMinimumQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio | null, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number | null }
    getUmtsRequestedQos(): { returnType: boolean, valueUmtsRequestedQosTrafficClass: WdsTrafficClass | null, valueUmtsRequestedQosMaxUplinkBitrate: number | null, valueUmtsRequestedQosMaxDownlinkBitrate: number | null, valueUmtsRequestedQosGuaranteedUplinkBitrate: number | null, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number | null, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsRequestedQosMaximumSduSize: number | null, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsRequestedQosTransferDelay: number | null, valueUmtsRequestedQosTrafficHandlingPriority: number | null }
    getUmtsRequestedQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio | null, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number | null }
    getUsername(): { returnType: boolean, valueUsername: string | null }
    ref(): MessageWdsGetDefaultSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDormancyStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDormancyStatusOutput */
    getDormancyStatus(): { returnType: boolean, valueDormancyStatus: WdsDormancyStatus | null }
    getResult(): boolean
    ref(): MessageWdsGetDormancyStatusOutput
    unref(): void
    static name: string
}
export class MessageWdsGetLteAttachParametersOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetLteAttachParametersOutput */
    getApn(): { returnType: boolean, valueApn: string | null }
    getIpSupportType(): { returnType: boolean, valueIpSupportType: WdsIpSupportType | null }
    getOtaAttachPerformed(): { returnType: boolean, valueOtaAttachPerformed: boolean | null }
    getResult(): boolean
    ref(): MessageWdsGetLteAttachParametersOutput
    unref(): void
    static name: string
}
export class MessageWdsGetLteAttachPdnListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetLteAttachPdnListOutput */
    getCurrentList(): { returnType: boolean, valueCurrentList: number[] | null }
    getPendingList(): { returnType: boolean, valuePendingList: number[] | null }
    getResult(): boolean
    ref(): MessageWdsGetLteAttachPdnListOutput
    unref(): void
    static name: string
}
export class MessageWdsGetMaxLteAttachPdnNumberOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetMaxLteAttachPdnNumberOutput */
    getInfo(): { returnType: boolean, valueInfo: number | null }
    getResult(): boolean
    ref(): MessageWdsGetMaxLteAttachPdnNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPacketServiceStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPacketServiceStatusOutput */
    getConnectionStatus(): { returnType: boolean, valueConnectionStatus: WdsConnectionStatus | null }
    getResult(): boolean
    ref(): MessageWdsGetPacketServiceStatusOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPacketStatisticsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPacketStatisticsInput */
    getMask(): { returnType: boolean, valueMask: WdsPacketStatisticsMaskFlag | null }
    ref(): MessageWdsGetPacketStatisticsInput
    setMask(valueMask: WdsPacketStatisticsMaskFlag): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetPacketStatisticsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetPacketStatisticsInput
}
export class MessageWdsGetPacketStatisticsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPacketStatisticsOutput */
    getLastCallRxBytesOk(): { returnType: boolean, valueLastCallRxBytesOk: number | null }
    getLastCallTxBytesOk(): { returnType: boolean, valueLastCallTxBytesOk: number | null }
    getResult(): boolean
    getRxBytesOk(): { returnType: boolean, valueRxBytesOk: number | null }
    getRxOverflows(): { returnType: boolean, valueRxOverflows: number | null }
    getRxPacketsDropped(): { returnType: boolean, valueRxPacketsDropped: number | null }
    getRxPacketsError(): { returnType: boolean, valueRxPacketsError: number | null }
    getRxPacketsOk(): { returnType: boolean, valueRxPacketsOk: number | null }
    getTxBytesOk(): { returnType: boolean, valueTxBytesOk: number | null }
    getTxOverflows(): { returnType: boolean, valueTxOverflows: number | null }
    getTxPacketsDropped(): { returnType: boolean, valueTxPacketsDropped: number | null }
    getTxPacketsError(): { returnType: boolean, valueTxPacketsError: number | null }
    getTxPacketsOk(): { returnType: boolean, valueTxPacketsOk: number | null }
    ref(): MessageWdsGetPacketStatisticsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPdnThrottleInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPdnThrottleInfoInput */
    getNetworkType(): { returnType: boolean, valueNetworkType: WdsDataSystemNetworkType | null }
    ref(): MessageWdsGetPdnThrottleInfoInput
    setNetworkType(valueNetworkType: WdsDataSystemNetworkType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetPdnThrottleInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetPdnThrottleInfoInput
}
export class MessageWdsGetPdnThrottleInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPdnThrottleInfoOutput */
    getInfo(): { returnType: boolean, valueInfo: MessageWdsGetPdnThrottleInfoOutputInfoElement[] | null }
    getResult(): boolean
    ref(): MessageWdsGetPdnThrottleInfoOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPdnThrottleInfoOutputInfoElement {
    /* Fields of Qmi-1.0.Qmi.MessageWdsGetPdnThrottleInfoOutputInfoElement */
    ipv4Throttled: boolean
    ipv6Throttled: boolean
    ipv4ThrottleTimeLeftMs: number
    ipv6ThrottleTimeLeftMs: number
    apn: string
    static name: string
}
export class MessageWdsGetProfileListInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetProfileListInput */
    getProfileType(): { returnType: boolean, valueProfileType: WdsProfileType | null }
    ref(): MessageWdsGetProfileListInput
    setProfileType(valueProfileType: WdsProfileType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetProfileListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetProfileListInput
}
export class MessageWdsGetProfileListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetProfileListOutput */
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError | null }
    getProfileList(): { returnType: boolean, valueProfileList: MessageWdsGetProfileListOutputProfileListProfile[] | null }
    getResult(): boolean
    ref(): MessageWdsGetProfileListOutput
    unref(): void
    static name: string
}
export class MessageWdsGetProfileListOutputProfileListProfile {
    /* Fields of Qmi-1.0.Qmi.MessageWdsGetProfileListOutputProfileListProfile */
    profileType: WdsProfileType
    profileIndex: number
    profileName: string
    static name: string
}
export class MessageWdsGetProfileSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetProfileSettingsInput */
    getProfileId(): { returnType: boolean, valueProfileIdProfileType: WdsProfileType | null, valueProfileIdProfileIndex: number | null }
    ref(): MessageWdsGetProfileSettingsInput
    setProfileId(valueProfileIdProfileType: WdsProfileType, valueProfileIdProfileIndex: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetProfileSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetProfileSettingsInput
}
export class MessageWdsGetProfileSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetProfileSettingsOutput */
    getApnDisabledFlag(): { returnType: boolean, valueApnDisabledFlag: boolean | null }
    getApnName(): { returnType: boolean, valueApnName: string | null }
    getApnTypeMask(): { returnType: boolean, valueApnTypeMask: WdsApnTypeMask | null }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication | null }
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError | null }
    getGprsMinimumQos(): { returnType: boolean, valueGprsMinimumQosPrecedenceClass: number | null, valueGprsMinimumQosDelayClass: number | null, valueGprsMinimumQosReliabilityClass: number | null, valueGprsMinimumQosPeakThroughputClass: number | null, valueGprsMinimumQosMeanThroughputClass: number | null }
    getGprsRequestedQos(): { returnType: boolean, valueGprsRequestedQosPrecedenceClass: number | null, valueGprsRequestedQosDelayClass: number | null, valueGprsRequestedQosReliabilityClass: number | null, valueGprsRequestedQosPeakThroughputClass: number | null, valueGprsRequestedQosMeanThroughputClass: number | null }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: boolean | null }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number | null }
    getIpv6AddressPreference(): { returnType: boolean, valueIpv6AddressPreferenceAddress: number[] | null }
    getIpv6PrimaryDnsAddressPreference(): { returnType: boolean, valueIpv6PrimaryDnsAddressPreference: number[] | null }
    getIpv6SecondaryDnsAddressPreference(): { returnType: boolean, valueIpv6SecondaryDnsAddressPreference: number[] | null }
    getLteQosParameters(): { returnType: boolean, valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier | null, valueLteQosParametersGuaranteedDownlinkBitrate: number | null, valueLteQosParametersMaxDownlinkBitrate: number | null, valueLteQosParametersGuaranteedUplinkBitrate: number | null, valueLteQosParametersMaxUplinkBitrate: number | null }
    getPassword(): { returnType: boolean, valuePassword: string | null }
    getPcscfAddressUsingDhcp(): { returnType: boolean, valuePcscfAddressUsingDhcp: boolean | null }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: boolean | null }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number | null }
    getPdpContextPrimaryId(): { returnType: boolean, valuePdpContextPrimaryId: number | null }
    getPdpContextSecondaryFlag(): { returnType: boolean, valuePdpContextSecondaryFlag: boolean | null }
    getPdpDataCompressionType(): { returnType: boolean, valuePdpDataCompressionType: WdsPdpDataCompressionType | null }
    getPdpHeaderCompressionType(): { returnType: boolean, valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType | null }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType | null }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number | null }
    getProfileName(): { returnType: boolean, valueProfileName: string | null }
    getResult(): boolean
    getRoamingDisallowedFlag(): { returnType: boolean, valueRoamingDisallowedFlag: boolean | null }
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number | null }
    getUmtsMinimumQos(): { returnType: boolean, valueUmtsMinimumQosTrafficClass: WdsTrafficClass | null, valueUmtsMinimumQosMaxUplinkBitrate: number | null, valueUmtsMinimumQosMaxDownlinkBitrate: number | null, valueUmtsMinimumQosGuaranteedUplinkBitrate: number | null, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number | null, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsMinimumQosMaximumSduSize: number | null, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsMinimumQosTransferDelay: number | null, valueUmtsMinimumQosTrafficHandlingPriority: number | null }
    getUmtsMinimumQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio | null, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number | null }
    getUmtsRequestedQos(): { returnType: boolean, valueUmtsRequestedQosTrafficClass: WdsTrafficClass | null, valueUmtsRequestedQosMaxUplinkBitrate: number | null, valueUmtsRequestedQosMaxDownlinkBitrate: number | null, valueUmtsRequestedQosGuaranteedUplinkBitrate: number | null, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number | null, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsRequestedQosMaximumSduSize: number | null, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsRequestedQosTransferDelay: number | null, valueUmtsRequestedQosTrafficHandlingPriority: number | null }
    getUmtsRequestedQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio | null, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number | null }
    getUsername(): { returnType: boolean, valueUsername: string | null }
    ref(): MessageWdsGetProfileSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] | null }
    getResult(): boolean
    ref(): MessageWdsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageWdsGoActiveOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGoActiveOutput */
    getResult(): boolean
    ref(): MessageWdsGoActiveOutput
    unref(): void
    static name: string
}
export class MessageWdsGoDormantOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGoDormantOutput */
    getResult(): boolean
    ref(): MessageWdsGoDormantOutput
    unref(): void
    static name: string
}
export class MessageWdsModifyProfileInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsModifyProfileInput */
    getApnDisabledFlag(): { returnType: boolean, valueApnDisabledFlag: boolean | null }
    getApnName(): { returnType: boolean, valueApnName: string | null }
    getApnTypeMask(): { returnType: boolean, valueApnTypeMask: WdsApnTypeMask | null }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication | null }
    getGprsMinimumQos(): { returnType: boolean, valueGprsMinimumQosPrecedenceClass: number | null, valueGprsMinimumQosDelayClass: number | null, valueGprsMinimumQosReliabilityClass: number | null, valueGprsMinimumQosPeakThroughputClass: number | null, valueGprsMinimumQosMeanThroughputClass: number | null }
    getGprsRequestedQos(): { returnType: boolean, valueGprsRequestedQosPrecedenceClass: number | null, valueGprsRequestedQosDelayClass: number | null, valueGprsRequestedQosReliabilityClass: number | null, valueGprsRequestedQosPeakThroughputClass: number | null, valueGprsRequestedQosMeanThroughputClass: number | null }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: boolean | null }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number | null }
    getIpv6AddressPreference(): { returnType: boolean, valueIpv6AddressPreferenceAddress: number[] | null }
    getIpv6PrimaryDnsAddressPreference(): { returnType: boolean, valueIpv6PrimaryDnsAddressPreference: number[] | null }
    getIpv6SecondaryDnsAddressPreference(): { returnType: boolean, valueIpv6SecondaryDnsAddressPreference: number[] | null }
    getLteQosParameters(): { returnType: boolean, valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier | null, valueLteQosParametersGuaranteedDownlinkBitrate: number | null, valueLteQosParametersMaxDownlinkBitrate: number | null, valueLteQosParametersGuaranteedUplinkBitrate: number | null, valueLteQosParametersMaxUplinkBitrate: number | null }
    getPassword(): { returnType: boolean, valuePassword: string | null }
    getPcscfAddressUsingDhcp(): { returnType: boolean, valuePcscfAddressUsingDhcp: boolean | null }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: boolean | null }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number | null }
    getPdpContextPrimaryId(): { returnType: boolean, valuePdpContextPrimaryId: number | null }
    getPdpContextSecondaryFlag(): { returnType: boolean, valuePdpContextSecondaryFlag: boolean | null }
    getPdpDataCompressionType(): { returnType: boolean, valuePdpDataCompressionType: WdsPdpDataCompressionType | null }
    getPdpHeaderCompressionType(): { returnType: boolean, valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType | null }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType | null }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number | null }
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType | null, valueProfileIdentifierProfileIndex: number | null }
    getProfileName(): { returnType: boolean, valueProfileName: string | null }
    getRoamingDisallowedFlag(): { returnType: boolean, valueRoamingDisallowedFlag: boolean | null }
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number | null }
    getUmtsMinimumQos(): { returnType: boolean, valueUmtsMinimumQosTrafficClass: WdsTrafficClass | null, valueUmtsMinimumQosMaxUplinkBitrate: number | null, valueUmtsMinimumQosMaxDownlinkBitrate: number | null, valueUmtsMinimumQosGuaranteedUplinkBitrate: number | null, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number | null, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsMinimumQosMaximumSduSize: number | null, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsMinimumQosTransferDelay: number | null, valueUmtsMinimumQosTrafficHandlingPriority: number | null }
    getUmtsMinimumQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio | null, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number | null, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number | null }
    getUmtsRequestedQos(): { returnType: boolean, valueUmtsRequestedQosTrafficClass: WdsTrafficClass | null, valueUmtsRequestedQosMaxUplinkBitrate: number | null, valueUmtsRequestedQosMaxDownlinkBitrate: number | null, valueUmtsRequestedQosGuaranteedUplinkBitrate: number | null, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number | null, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsRequestedQosMaximumSduSize: number | null, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio | null, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsRequestedQosTransferDelay: number | null, valueUmtsRequestedQosTrafficHandlingPriority: number | null }
    getUmtsRequestedQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder | null, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio | null, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio | null, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery | null, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number | null, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number | null }
    getUsername(): { returnType: boolean, valueUsername: string | null }
    ref(): MessageWdsModifyProfileInput
    setApnDisabledFlag(valueApnDisabledFlag: boolean): boolean
    setApnName(valueApnName: string): boolean
    setApnTypeMask(valueApnTypeMask: WdsApnTypeMask): boolean
    setAuthentication(valueAuthentication: WdsAuthentication): boolean
    setGprsMinimumQos(valueGprsMinimumQosPrecedenceClass: number, valueGprsMinimumQosDelayClass: number, valueGprsMinimumQosReliabilityClass: number, valueGprsMinimumQosPeakThroughputClass: number, valueGprsMinimumQosMeanThroughputClass: number): boolean
    setGprsRequestedQos(valueGprsRequestedQosPrecedenceClass: number, valueGprsRequestedQosDelayClass: number, valueGprsRequestedQosReliabilityClass: number, valueGprsRequestedQosPeakThroughputClass: number, valueGprsRequestedQosMeanThroughputClass: number): boolean
    setImcnFlag(valueImcnFlag: boolean): boolean
    setIpv4AddressPreference(valueIpv4AddressPreference: number): boolean
    setIpv6AddressPreference(valueIpv6AddressPreferenceAddress: number[]): boolean
    setIpv6PrimaryDnsAddressPreference(valueIpv6PrimaryDnsAddressPreference: number[]): boolean
    setIpv6SecondaryDnsAddressPreference(valueIpv6SecondaryDnsAddressPreference: number[]): boolean
    setLteQosParameters(valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier, valueLteQosParametersGuaranteedDownlinkBitrate: number, valueLteQosParametersMaxDownlinkBitrate: number, valueLteQosParametersGuaranteedUplinkBitrate: number, valueLteQosParametersMaxUplinkBitrate: number): boolean
    setPassword(valuePassword: string): boolean
    setPcscfAddressUsingDhcp(valuePcscfAddressUsingDhcp: boolean): boolean
    setPcscfAddressUsingPco(valuePcscfAddressUsingPco: boolean): boolean
    setPdpContextNumber(valuePdpContextNumber: number): boolean
    setPdpContextPrimaryId(valuePdpContextPrimaryId: number): boolean
    setPdpContextSecondaryFlag(valuePdpContextSecondaryFlag: boolean): boolean
    setPdpDataCompressionType(valuePdpDataCompressionType: WdsPdpDataCompressionType): boolean
    setPdpHeaderCompressionType(valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType): boolean
    setPdpType(valuePdpType: WdsPdpType): boolean
    setPrimaryIpv4DnsAddress(valuePrimaryIpv4DnsAddress: number): boolean
    setProfileIdentifier(valueProfileIdentifierProfileType: WdsProfileType, valueProfileIdentifierProfileIndex: number): boolean
    setProfileName(valueProfileName: string): boolean
    setRoamingDisallowedFlag(valueRoamingDisallowedFlag: boolean): boolean
    setSecondaryIpv4DnsAddress(valueSecondaryIpv4DnsAddress: number): boolean
    setUmtsMinimumQos(valueUmtsMinimumQosTrafficClass: WdsTrafficClass, valueUmtsMinimumQosMaxUplinkBitrate: number, valueUmtsMinimumQosMaxDownlinkBitrate: number, valueUmtsMinimumQosGuaranteedUplinkBitrate: number, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosMaximumSduSize: number, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosTransferDelay: number, valueUmtsMinimumQosTrafficHandlingPriority: number): boolean
    setUmtsMinimumQosWithSignalingIndicationFlag(valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number): boolean
    setUmtsRequestedQos(valueUmtsRequestedQosTrafficClass: WdsTrafficClass, valueUmtsRequestedQosMaxUplinkBitrate: number, valueUmtsRequestedQosMaxDownlinkBitrate: number, valueUmtsRequestedQosGuaranteedUplinkBitrate: number, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosMaximumSduSize: number, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosTransferDelay: number, valueUmtsRequestedQosTrafficHandlingPriority: number): boolean
    setUmtsRequestedQosWithSignalingIndicationFlag(valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number): boolean
    setUsername(valueUsername: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsModifyProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsModifyProfileInput
}
export class MessageWdsModifyProfileOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsModifyProfileOutput */
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError | null }
    getResult(): boolean
    ref(): MessageWdsModifyProfileOutput
    unref(): void
    static name: string
}
export class MessageWdsResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsResetOutput */
    getResult(): boolean
    ref(): MessageWdsResetOutput
    unref(): void
    static name: string
}
export class MessageWdsSetAutoconnectSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetAutoconnectSettingsInput */
    getRoaming(): { returnType: boolean, valueRoaming: WdsAutoconnectSettingRoaming | null }
    getStatus(): { returnType: boolean, valueStatus: WdsAutoconnectSetting | null }
    ref(): MessageWdsSetAutoconnectSettingsInput
    setRoaming(valueRoaming: WdsAutoconnectSettingRoaming): boolean
    setStatus(valueStatus: WdsAutoconnectSetting): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetAutoconnectSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetAutoconnectSettingsInput
}
export class MessageWdsSetAutoconnectSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetAutoconnectSettingsOutput */
    getResult(): boolean
    ref(): MessageWdsSetAutoconnectSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsSetDefaultProfileNumberInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetDefaultProfileNumberInput */
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierType: WdsProfileType | null, valueProfileIdentifierFamily: WdsProfileFamily | null, valueProfileIdentifierIndex: number | null }
    ref(): MessageWdsSetDefaultProfileNumberInput
    setProfileIdentifier(valueProfileIdentifierType: WdsProfileType, valueProfileIdentifierFamily: WdsProfileFamily, valueProfileIdentifierIndex: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetDefaultProfileNumberInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetDefaultProfileNumberInput
}
export class MessageWdsSetDefaultProfileNumberOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetDefaultProfileNumberOutput */
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError | null }
    getResult(): boolean
    ref(): MessageWdsSetDefaultProfileNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetEventReportInput */
    getChannelRate(): { returnType: boolean, valueChannelRate: boolean | null }
    getCurrentDataBearerTechnology(): { returnType: boolean, valueCurrentDataBearerTechnology: boolean | null }
    getDataBearerTechnology(): { returnType: boolean, valueDataBearerTechnology: boolean | null }
    getDataCallStatus(): { returnType: boolean, valueDataCallStatus: boolean | null }
    getDataSystems(): { returnType: boolean, valueDataSystems: boolean | null }
    getDormancyStatus(): { returnType: boolean, valueDormancyStatus: boolean | null }
    getEvdoPmChange(): { returnType: boolean, valueEvdoPmChange: boolean | null }
    getExtendedDataBearerTechnology(): { returnType: boolean, valueExtendedDataBearerTechnology: boolean | null }
    getLimitedDataSystemStatus(): { returnType: boolean, valueLimitedDataSystemStatus: boolean | null }
    getMipStatus(): { returnType: boolean, valueMipStatus: number | null }
    getPdnFilterRemovals(): { returnType: boolean, valuePdnFilterRemovals: boolean | null }
    getPreferredDataSystem(): { returnType: boolean, valuePreferredDataSystem: boolean | null }
    getTransferStatistics(): { returnType: boolean, valueTransferStatisticsIntervalSeconds: number | null, valueTransferStatisticsIndicators: WdsSetEventReportTransferStatistics | null }
    getUplinkFlowControl(): { returnType: boolean, valueUplinkFlowControl: boolean | null }
    ref(): MessageWdsSetEventReportInput
    setChannelRate(valueChannelRate: boolean): boolean
    setCurrentDataBearerTechnology(valueCurrentDataBearerTechnology: boolean): boolean
    setDataBearerTechnology(valueDataBearerTechnology: boolean): boolean
    setDataCallStatus(valueDataCallStatus: boolean): boolean
    setDataSystems(valueDataSystems: boolean): boolean
    setDormancyStatus(valueDormancyStatus: boolean): boolean
    setEvdoPmChange(valueEvdoPmChange: boolean): boolean
    setExtendedDataBearerTechnology(valueExtendedDataBearerTechnology: boolean): boolean
    setLimitedDataSystemStatus(valueLimitedDataSystemStatus: boolean): boolean
    setMipStatus(valueMipStatus: number): boolean
    setPdnFilterRemovals(valuePdnFilterRemovals: boolean): boolean
    setPreferredDataSystem(valuePreferredDataSystem: boolean): boolean
    setTransferStatistics(valueTransferStatisticsIntervalSeconds: number, valueTransferStatisticsIndicators: WdsSetEventReportTransferStatistics): boolean
    setUplinkFlowControl(valueUplinkFlowControl: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetEventReportInput
}
export class MessageWdsSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetEventReportOutput */
    getResult(): boolean
    ref(): MessageWdsSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageWdsSetIpFamilyInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetIpFamilyInput */
    getPreference(): { returnType: boolean, valuePreference: WdsIpFamily | null }
    ref(): MessageWdsSetIpFamilyInput
    setPreference(valuePreference: WdsIpFamily): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetIpFamilyInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetIpFamilyInput
}
export class MessageWdsSetIpFamilyOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetIpFamilyOutput */
    getResult(): boolean
    ref(): MessageWdsSetIpFamilyOutput
    unref(): void
    static name: string
}
export class MessageWdsSetLteAttachPdnListInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetLteAttachPdnListInput */
    getAction(): { returnType: boolean, valueAction: WdsAttachPdnListAction | null }
    getList(): { returnType: boolean, valueList: number[] | null }
    ref(): MessageWdsSetLteAttachPdnListInput
    setAction(valueAction: WdsAttachPdnListAction): boolean
    setList(valueList: number[]): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetLteAttachPdnListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetLteAttachPdnListInput
}
export class MessageWdsSetLteAttachPdnListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetLteAttachPdnListOutput */
    getResult(): boolean
    ref(): MessageWdsSetLteAttachPdnListOutput
    unref(): void
    static name: string
}
export class MessageWdsStartNetworkInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStartNetworkInput */
    getApn(): { returnType: boolean, valueApn: string | null }
    getAuthenticationPreference(): { returnType: boolean, valueAuthenticationPreference: WdsAuthentication | null }
    getCallType(): { returnType: boolean, valueCallType: WdsCallType | null }
    getEnableAutoconnect(): { returnType: boolean, valueEnableAutoconnect: boolean | null }
    getExtendedTechnologyPreference(): { returnType: boolean, valueExtendedTechnologyPreference: WdsExtendedTechnologyPreference | null }
    getIpFamilyPreference(): { returnType: boolean, valueIpFamilyPreference: WdsIpFamily | null }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number | null }
    getPassword(): { returnType: boolean, valuePassword: string | null }
    getPrimaryDnsAddressPreference(): { returnType: boolean, valuePrimaryDnsAddressPreference: number | null }
    getPrimaryNbnsAddressPreference(): { returnType: boolean, valuePrimaryNbnsAddressPreference: number | null }
    getProfileIndex3gpp(): { returnType: boolean, valueProfileIndex3gpp: number | null }
    getProfileIndex3gpp2(): { returnType: boolean, valueProfileIndex3gpp2: number | null }
    getSecondaryDnsAddressPreference(): { returnType: boolean, valueSecondaryDnsAddressPreference: number | null }
    getSecondaryNbnsAddressPreference(): { returnType: boolean, valueSecondaryNbnsAddressPreference: number | null }
    getTechnologyPreference(): { returnType: boolean, valueTechnologyPreference: WdsTechnologyPreference | null }
    getUsername(): { returnType: boolean, valueUsername: string | null }
    ref(): MessageWdsStartNetworkInput
    setApn(valueApn: string): boolean
    setAuthenticationPreference(valueAuthenticationPreference: WdsAuthentication): boolean
    setCallType(valueCallType: WdsCallType): boolean
    setEnableAutoconnect(valueEnableAutoconnect: boolean): boolean
    setExtendedTechnologyPreference(valueExtendedTechnologyPreference: WdsExtendedTechnologyPreference): boolean
    setIpFamilyPreference(valueIpFamilyPreference: WdsIpFamily): boolean
    setIpv4AddressPreference(valueIpv4AddressPreference: number): boolean
    setPassword(valuePassword: string): boolean
    setPrimaryDnsAddressPreference(valuePrimaryDnsAddressPreference: number): boolean
    setPrimaryNbnsAddressPreference(valuePrimaryNbnsAddressPreference: number): boolean
    setProfileIndex3gpp(valueProfileIndex3gpp: number): boolean
    setProfileIndex3gpp2(valueProfileIndex3gpp2: number): boolean
    setSecondaryDnsAddressPreference(valueSecondaryDnsAddressPreference: number): boolean
    setSecondaryNbnsAddressPreference(valueSecondaryNbnsAddressPreference: number): boolean
    setTechnologyPreference(valueTechnologyPreference: WdsTechnologyPreference): boolean
    setUsername(valueUsername: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsStartNetworkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsStartNetworkInput
}
export class MessageWdsStartNetworkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStartNetworkOutput */
    getCallEndReason(): { returnType: boolean, valueCallEndReason: WdsCallEndReason | null }
    getPacketDataHandle(): { returnType: boolean, valuePacketDataHandle: number | null }
    getResult(): boolean
    getVerboseCallEndReason(): { returnType: boolean, valueVerboseCallEndReasonType: WdsVerboseCallEndReasonType | null, valueVerboseCallEndReasonReason: number | null }
    ref(): MessageWdsStartNetworkOutput
    unref(): void
    static name: string
}
export class MessageWdsStopNetworkInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStopNetworkInput */
    getDisableAutoconnect(): { returnType: boolean, valueDisableAutoconnect: boolean | null }
    getPacketDataHandle(): { returnType: boolean, valuePacketDataHandle: number | null }
    ref(): MessageWdsStopNetworkInput
    setDisableAutoconnect(valueDisableAutoconnect: boolean): boolean
    setPacketDataHandle(valuePacketDataHandle: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsStopNetworkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsStopNetworkInput
}
export class MessageWdsStopNetworkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStopNetworkOutput */
    getResult(): boolean
    ref(): MessageWdsStopNetworkOutput
    unref(): void
    static name: string
}
export class MessageWdsSwiCreateProfileIndexedInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSwiCreateProfileIndexedInput */
    getApnDisabledFlag(): { returnType: boolean, valueApnDisabledFlag: boolean | null }
    getApnName(): { returnType: boolean, valueApnName: string | null }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication | null }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number | null }
    getPassword(): { returnType: boolean, valuePassword: string | null }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number | null }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType | null }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number | null }
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType | null, valueProfileIdentifierProfileIndex: number | null }
    getProfileName(): { returnType: boolean, valueProfileName: string | null }
    getRoamingDisallowedFlag(): { returnType: boolean, valueRoamingDisallowedFlag: boolean | null }
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number | null }
    getUsername(): { returnType: boolean, valueUsername: string | null }
    ref(): MessageWdsSwiCreateProfileIndexedInput
    setApnDisabledFlag(valueApnDisabledFlag: boolean): boolean
    setApnName(valueApnName: string): boolean
    setAuthentication(valueAuthentication: WdsAuthentication): boolean
    setIpv4AddressPreference(valueIpv4AddressPreference: number): boolean
    setPassword(valuePassword: string): boolean
    setPdpContextNumber(valuePdpContextNumber: number): boolean
    setPdpType(valuePdpType: WdsPdpType): boolean
    setPrimaryIpv4DnsAddress(valuePrimaryIpv4DnsAddress: number): boolean
    setProfileIdentifier(valueProfileIdentifierProfileType: WdsProfileType, valueProfileIdentifierProfileIndex: number): boolean
    setProfileName(valueProfileName: string): boolean
    setRoamingDisallowedFlag(valueRoamingDisallowedFlag: boolean): boolean
    setSecondaryIpv4DnsAddress(valueSecondaryIpv4DnsAddress: number): boolean
    setUsername(valueUsername: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSwiCreateProfileIndexedInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSwiCreateProfileIndexedInput
}
export class MessageWdsSwiCreateProfileIndexedOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSwiCreateProfileIndexedOutput */
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType | null, valueProfileIdentifierProfileIndex: number | null }
    getResult(): boolean
    ref(): MessageWdsSwiCreateProfileIndexedOutput
    unref(): void
    static name: string
}
export class MessageWmsDeleteInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsDeleteInput */
    getMemoryIndex(): { returnType: boolean, valueMemoryIndex: number | null }
    getMemoryStorage(): { returnType: boolean, valueMemoryStorage: WmsStorageType | null }
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode | null }
    getMessageTag(): { returnType: boolean, valueMessageTag: WmsMessageTagType | null }
    ref(): MessageWmsDeleteInput
    setMemoryIndex(valueMemoryIndex: number): boolean
    setMemoryStorage(valueMemoryStorage: WmsStorageType): boolean
    setMessageMode(valueMessageMode: WmsMessageMode): boolean
    setMessageTag(valueMessageTag: WmsMessageTagType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsDeleteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsDeleteInput
}
export class MessageWmsDeleteOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsDeleteOutput */
    getResult(): boolean
    ref(): MessageWmsDeleteOutput
    unref(): void
    static name: string
}
export class MessageWmsGetMessageProtocolOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsGetMessageProtocolOutput */
    getMessageProtocol(): { returnType: boolean, valueMessageProtocol: WmsMessageProtocol | null }
    getResult(): boolean
    ref(): MessageWmsGetMessageProtocolOutput
    unref(): void
    static name: string
}
export class MessageWmsGetRoutesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsGetRoutesOutput */
    getResult(): boolean
    getRouteList(): { returnType: boolean, valueRouteList: MessageWmsGetRoutesOutputRouteListElement[] | null }
    getTransferStatusReport(): { returnType: boolean, valueTransferStatusReport: WmsTransferIndication | null }
    ref(): MessageWmsGetRoutesOutput
    unref(): void
    static name: string
}
export class MessageWmsGetRoutesOutputRouteListElement {
    /* Fields of Qmi-1.0.Qmi.MessageWmsGetRoutesOutputRouteListElement */
    messageType: WmsMessageType
    messageClass: WmsMessageClass
    storage: WmsStorageType
    receiptAction: WmsReceiptAction
    static name: string
}
export class MessageWmsGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] | null }
    getResult(): boolean
    ref(): MessageWmsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageWmsListMessagesInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsListMessagesInput */
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode | null }
    getMessageTag(): { returnType: boolean, valueMessageTag: WmsMessageTagType | null }
    getStorageType(): { returnType: boolean, valueStorageType: WmsStorageType | null }
    ref(): MessageWmsListMessagesInput
    setMessageMode(valueMessageMode: WmsMessageMode): boolean
    setMessageTag(valueMessageTag: WmsMessageTagType): boolean
    setStorageType(valueStorageType: WmsStorageType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsListMessagesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsListMessagesInput
}
export class MessageWmsListMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsListMessagesOutput */
    getMessageList(): { returnType: boolean, valueMessageList: MessageWmsListMessagesOutputMessageListElement[] | null }
    getResult(): boolean
    ref(): MessageWmsListMessagesOutput
    unref(): void
    static name: string
}
export class MessageWmsListMessagesOutputMessageListElement {
    /* Fields of Qmi-1.0.Qmi.MessageWmsListMessagesOutputMessageListElement */
    memoryIndex: number
    messageTag: WmsMessageTagType
    static name: string
}
export class MessageWmsModifyTagInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsModifyTagInput */
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode | null }
    getMessageTag(): { returnType: boolean, valueMessageTagStorageType: WmsStorageType | null, valueMessageTagMemoryIndex: number | null, valueMessageTagMessageTag: WmsMessageTagType | null }
    ref(): MessageWmsModifyTagInput
    setMessageMode(valueMessageMode: WmsMessageMode): boolean
    setMessageTag(valueMessageTagStorageType: WmsStorageType, valueMessageTagMemoryIndex: number, valueMessageTagMessageTag: WmsMessageTagType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsModifyTagInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsModifyTagInput
}
export class MessageWmsModifyTagOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsModifyTagOutput */
    getResult(): boolean
    ref(): MessageWmsModifyTagOutput
    unref(): void
    static name: string
}
export class MessageWmsRawReadInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawReadInput */
    getMessageMemoryStorageId(): { returnType: boolean, valueMessageMemoryStorageIdStorageType: WmsStorageType | null, valueMessageMemoryStorageIdMemoryIndex: number | null }
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode | null }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean | null }
    ref(): MessageWmsRawReadInput
    setMessageMemoryStorageId(valueMessageMemoryStorageIdStorageType: WmsStorageType, valueMessageMemoryStorageIdMemoryIndex: number): boolean
    setMessageMode(valueMessageMode: WmsMessageMode): boolean
    setSmsOnIms(valueSmsOnIms: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawReadInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawReadInput
}
export class MessageWmsRawReadOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawReadOutput */
    getRawMessageData(): { returnType: boolean, valueRawMessageDataMessageTag: WmsMessageTagType | null, valueRawMessageDataFormat: WmsMessageFormat | null, valueRawMessageDataRawData: any[] | null }
    getResult(): boolean
    ref(): MessageWmsRawReadOutput
    unref(): void
    static name: string
}
export class MessageWmsRawSendInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawSendInput */
    getCdmaFollowOnDc(): { returnType: boolean, valueCdmaFollowOnDcFollow: boolean | null }
    getCdmaForceOnDc(): { returnType: boolean, valueCdmaForceOnDcForce: boolean | null, valueCdmaForceOnDcServiceOption: WmsCdmaServiceOption | null }
    getGsmWcdmaLinkTimer(): { returnType: boolean, valueGsmWcdmaLinkTimer: number | null }
    getRawMessageData(): { returnType: boolean, valueRawMessageDataFormat: WmsMessageFormat | null, valueRawMessageDataRawData: any[] | null }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean | null }
    ref(): MessageWmsRawSendInput
    setCdmaFollowOnDc(valueCdmaFollowOnDcFollow: boolean): boolean
    setCdmaForceOnDc(valueCdmaForceOnDcForce: boolean, valueCdmaForceOnDcServiceOption: WmsCdmaServiceOption): boolean
    setGsmWcdmaLinkTimer(valueGsmWcdmaLinkTimer: number): boolean
    setRawMessageData(valueRawMessageDataFormat: WmsMessageFormat, valueRawMessageDataRawData: any[]): boolean
    setSmsOnIms(valueSmsOnIms: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawSendInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawSendInput
}
export class MessageWmsRawSendOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawSendOutput */
    getCdmaCauseCode(): { returnType: boolean, valueCdmaCauseCode: WmsCdmaCauseCode | null }
    getCdmaErrorClass(): { returnType: boolean, valueCdmaErrorClass: WmsCdmaErrorClass | null }
    getGsmWcdmaCauseInfo(): { returnType: boolean, valueGsmWcdmaCauseInfoRpCause: WmsGsmUmtsRpCause | null, valueGsmWcdmaCauseInfoTpCause: WmsGsmUmtsTpCause | null }
    getMessageDeliveryFailureType(): { returnType: boolean, valueMessageDeliveryFailureType: WmsMessageDeliveryFailureType | null }
    getMessageId(): { returnType: boolean, valueMessageId: number | null }
    getResult(): boolean
    ref(): MessageWmsRawSendOutput
    unref(): void
    static name: string
}
export class MessageWmsRawWriteInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawWriteInput */
    getRawMessageData(): { returnType: boolean, valueRawMessageDataStorageType: WmsStorageType | null, valueRawMessageDataFormat: WmsMessageFormat | null, valueRawMessageDataRawData: any[] | null }
    ref(): MessageWmsRawWriteInput
    setRawMessageData(valueRawMessageDataStorageType: WmsStorageType, valueRawMessageDataFormat: WmsMessageFormat, valueRawMessageDataRawData: any[]): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawWriteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawWriteInput
}
export class MessageWmsRawWriteOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawWriteOutput */
    getMemoryIndex(): { returnType: boolean, valueMemoryIndex: number | null }
    getResult(): boolean
    ref(): MessageWmsRawWriteOutput
    unref(): void
    static name: string
}
export class MessageWmsResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsResetOutput */
    getResult(): boolean
    ref(): MessageWmsResetOutput
    unref(): void
    static name: string
}
export class MessageWmsSendAckInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendAckInput */
    get3gpp2FailureInformation(): { returnType: boolean, value3gpp2FailureInformationErrorClass: WmsCdmaErrorClass | null, value3gpp2FailureInformationCauseCode: WmsCdmaCauseCode | null }
    get3gppFailureInformation(): { returnType: boolean, value3gppFailureInformationRpCause: WmsGsmUmtsRpCause | null, value3gppFailureInformationTpCause: WmsGsmUmtsTpCause | null }
    getInformation(): { returnType: boolean, valueInformationTransactionId: number | null, valueInformationMessageProtocol: WmsMessageProtocol | null, valueInformationSuccess: boolean | null }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean | null }
    ref(): MessageWmsSendAckInput
    set3gpp2FailureInformation(value3gpp2FailureInformationErrorClass: WmsCdmaErrorClass, value3gpp2FailureInformationCauseCode: WmsCdmaCauseCode): boolean
    set3gppFailureInformation(value3gppFailureInformationRpCause: WmsGsmUmtsRpCause, value3gppFailureInformationTpCause: WmsGsmUmtsTpCause): boolean
    setInformation(valueInformationTransactionId: number, valueInformationMessageProtocol: WmsMessageProtocol, valueInformationSuccess: boolean): boolean
    setSmsOnIms(valueSmsOnIms: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSendAckInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSendAckInput
}
export class MessageWmsSendAckOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendAckOutput */
    getFailureCause(): { returnType: boolean, valueFailureCause: WmsAckFailureCause | null }
    getResult(): boolean
    ref(): MessageWmsSendAckOutput
    unref(): void
    static name: string
}
export class MessageWmsSendFromMemoryStorageInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendFromMemoryStorageInput */
    getInformation(): { returnType: boolean, valueInformationStorageType: WmsStorageType | null, valueInformationMemoryIndex: number | null, valueInformationMessageMode: WmsMessageMode | null }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean | null }
    ref(): MessageWmsSendFromMemoryStorageInput
    setInformation(valueInformationStorageType: WmsStorageType, valueInformationMemoryIndex: number, valueInformationMessageMode: WmsMessageMode): boolean
    setSmsOnIms(valueSmsOnIms: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSendFromMemoryStorageInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSendFromMemoryStorageInput
}
export class MessageWmsSendFromMemoryStorageOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendFromMemoryStorageOutput */
    getCdmaCauseCode(): { returnType: boolean, valueCdmaCauseCode: WmsCdmaCauseCode | null }
    getCdmaErrorClass(): { returnType: boolean, valueCdmaErrorClass: WmsCdmaErrorClass | null }
    getGsmWcdmaCauseInfo(): { returnType: boolean, valueGsmWcdmaCauseInfoRpCause: WmsGsmUmtsRpCause | null, valueGsmWcdmaCauseInfoTpCause: WmsGsmUmtsTpCause | null }
    getMessageDeliveryFailureType(): { returnType: boolean, valueMessageDeliveryFailureType: WmsMessageDeliveryFailureType | null }
    getMessageId(): { returnType: boolean, valueMessageId: number | null }
    getResult(): boolean
    ref(): MessageWmsSendFromMemoryStorageOutput
    unref(): void
    static name: string
}
export class MessageWmsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetEventReportInput */
    getNewMtMessageIndicator(): { returnType: boolean, valueNewMtMessageIndicatorReport: boolean | null }
    ref(): MessageWmsSetEventReportInput
    setNewMtMessageIndicator(valueNewMtMessageIndicatorReport: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSetEventReportInput
}
export class MessageWmsSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetEventReportOutput */
    getResult(): boolean
    ref(): MessageWmsSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageWmsSetRoutesInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetRoutesInput */
    getRouteList(): { returnType: boolean, valueRouteList: MessageWmsSetRoutesInputRouteListElement[] | null }
    getTransferStatusReport(): { returnType: boolean, valueTransferStatusReport: WmsTransferIndication | null }
    ref(): MessageWmsSetRoutesInput
    setRouteList(valueRouteList: MessageWmsSetRoutesInputRouteListElement[]): boolean
    setTransferStatusReport(valueTransferStatusReport: WmsTransferIndication): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSetRoutesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSetRoutesInput
}
export class MessageWmsSetRoutesInputRouteListElement {
    /* Fields of Qmi-1.0.Qmi.MessageWmsSetRoutesInputRouteListElement */
    messageType: WmsMessageType
    messageClass: WmsMessageClass
    storage: WmsStorageType
    receiptAction: WmsReceiptAction
    static name: string
}
export class MessageWmsSetRoutesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetRoutesOutput */
    getResult(): boolean
    ref(): MessageWmsSetRoutesOutput
    unref(): void
    static name: string
}
export class PhysicalSlotInformationSlot {
    /* Fields of Qmi-1.0.Qmi.PhysicalSlotInformationSlot */
    cardProtocol: UimCardProtocol
    validApplications: number
    atrValue: object[]
    isEuicc: boolean
    static name: string
}
export class PhysicalSlotStatusSlot {
    /* Fields of Qmi-1.0.Qmi.PhysicalSlotStatusSlot */
    physicalCardStatus: UimPhysicalCardState
    physicalSlotStatus: UimSlotState
    logicalSlot: number
    iccid: object[]
    static name: string
}
export abstract class ProxyClass {
    /* Fields of Qmi-1.0.Qmi.ProxyClass */
    parent: GObject.ObjectClass
    static name: string
}
export class ProxyPrivate {
    static name: string
}
export type Message = any
}