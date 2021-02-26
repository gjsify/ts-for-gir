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
    HSUSB,
    PCIE,
    EMBEDDED,
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
export function voiceTtyModeGetString(val: VoiceTtyMode): string
export function voiceUserActionGetString(val: VoiceUserAction): string
export function voiceUssDataCodingSchemeGetString(val: VoiceUssDataCodingScheme): string
export function voiceWcdmaAmrStatusBuildStringFromMask(mask: VoiceWcdmaAmrStatus): string
export function wdaDataAggregationProtocolGetString(val: WdaDataAggregationProtocol): string
export function wdaLinkLayerProtocolGetString(val: WdaLinkLayerProtocol): string
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
    dmsSetActiveFirmware(input: MessageGasDmsSetActiveFirmwareInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dmsSetActiveFirmwareFinish(res: Gio.AsyncResult): MessageGasDmsSetActiveFirmwareOutput
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
    getCardStatus(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCardStatusFinish(res: Gio.AsyncResult): MessageUimGetCardStatusOutput
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
    getConfig(input: MessageVoiceGetConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConfigFinish(res: Gio.AsyncResult): MessageVoiceGetConfigOutput
    getSupportedMessages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSupportedMessagesFinish(res: Gio.AsyncResult): MessageVoiceGetSupportedMessagesOutput
    indicationRegister(input: MessageVoiceIndicationRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indicationRegisterFinish(res: Gio.AsyncResult): MessageVoiceIndicationRegisterOutput
    originateUssd(input: MessageVoiceOriginateUssdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    originateUssdFinish(res: Gio.AsyncResult): MessageVoiceOriginateUssdOutput
    originateUssdNoWait(input: MessageVoiceOriginateUssdNoWaitInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    originateUssdNoWaitFinish(res: Gio.AsyncResult): MessageVoiceOriginateUssdNoWaitOutput
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
    getActivationState(): { returnType: boolean, valueActivationState: DmsActivationState }
    getOperatingMode(): { returnType: boolean, valueOperatingMode: DmsOperatingMode }
    getPin1Status(): { returnType: boolean, valuePin1StatusCurrentStatus: DmsUimPinStatus, valuePin1StatusVerifyRetriesLeft: number, valuePin1StatusUnblockRetriesLeft: number }
    getPin2Status(): { returnType: boolean, valuePin2StatusCurrentStatus: DmsUimPinStatus, valuePin2StatusVerifyRetriesLeft: number, valuePin2StatusUnblockRetriesLeft: number }
    getPowerState(): { returnType: boolean, valuePowerStatePowerStateFlags: number, valuePowerStateBatteryLevel: number }
    getPrlInitNotification(): { returnType: boolean, valuePrlInitNotification: boolean }
    getUimState(): { returnType: boolean, valueUimState: DmsUimState }
    getWirelessDisableState(): { returnType: boolean, valueWirelessDisableState: boolean }
    ref(): IndicationDmsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationLocDeleteAssistanceDataOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocDeleteAssistanceDataOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    ref(): IndicationLocDeleteAssistanceDataOutput
    unref(): void
    static name: string
}
export class IndicationLocEngineStateOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocEngineStateOutput */
    getEngineState(): { returnType: boolean, valueEngineState: LocEngineState }
    ref(): IndicationLocEngineStateOutput
    unref(): void
    static name: string
}
export class IndicationLocFixRecurrenceTypeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocFixRecurrenceTypeOutput */
    getFixRecurrenceType(): { returnType: boolean, valueFixRecurrenceType: LocFixRecurrenceType }
    ref(): IndicationLocFixRecurrenceTypeOutput
    unref(): void
    static name: string
}
export class IndicationLocGetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetEngineLockOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    getLockType(): { returnType: boolean, valueLockType: LocLockType }
    ref(): IndicationLocGetEngineLockOutput
    unref(): void
    static name: string
}
export class IndicationLocGetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetNmeaTypesOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    getNmeaTypes(): { returnType: boolean, valueNmeaTypes: LocNmeaType }
    ref(): IndicationLocGetNmeaTypesOutput
    unref(): void
    static name: string
}
export class IndicationLocGetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetOperationModeOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    getOperationMode(): { returnType: boolean, valueOperationMode: LocOperationMode }
    ref(): IndicationLocGetOperationModeOutput
    unref(): void
    static name: string
}
export class IndicationLocGetPredictedOrbitsDataSourceOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetPredictedOrbitsDataSourceOutput */
    getAllowedSizes(): { returnType: boolean, valueAllowedSizesMaxFileSize: number, valueAllowedSizesMaxPartSize: number }
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    getServerList(): { returnType: boolean, valueServerList: string[] }
    ref(): IndicationLocGetPredictedOrbitsDataSourceOutput
    unref(): void
    static name: string
}
export class IndicationLocGetServerOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetServerOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    getIpv4(): { returnType: boolean, valueIpv4Ipv4Address: number, valueIpv4Ipv4Port: number }
    getIpv6(): { returnType: boolean, valueIpv6Ipv6Address: number[], valueIpv6Ipv6Port: number }
    getServerType(): { returnType: boolean, valueServerType: LocServerType }
    getUrl(): { returnType: boolean, valueUrl: string }
    ref(): IndicationLocGetServerOutput
    unref(): void
    static name: string
}
export class IndicationLocGnssSvInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGnssSvInfoOutput */
    getAltitudeAssumed(): { returnType: boolean, valueAltitudeAssumed: boolean }
    getList(): { returnType: boolean, valueList: IndicationLocGnssSvInfoOutputListElement[] }
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
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    getPartNumber(): { returnType: boolean, valuePartNumber: number }
    ref(): IndicationLocInjectPredictedOrbitsDataOutput
    unref(): void
    static name: string
}
export class IndicationLocInjectXtraDataOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocInjectXtraDataOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    getPartNumber(): { returnType: boolean, valuePartNumber: number }
    ref(): IndicationLocInjectXtraDataOutput
    unref(): void
    static name: string
}
export class IndicationLocNmeaOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocNmeaOutput */
    getNmeaString(): { returnType: boolean, valueNmeaString: string }
    ref(): IndicationLocNmeaOutput
    unref(): void
    static name: string
}
export class IndicationLocPositionReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocPositionReportOutput */
    getAltitudeAssumed(): { returnType: boolean, valueAltitudeAssumed: boolean }
    getAltitudeFromEllipsoid(): { returnType: boolean, valueAltitudeFromEllipsoid: number }
    getAltitudeFromSealevel(): { returnType: boolean, valueAltitudeFromSealevel: number }
    getDilutionOfPrecision(): { returnType: boolean, valueDilutionOfPrecision: IndicationLocPositionReportOutputDilutionOfPrecision }
    getGpsTime(): { returnType: boolean, valueGpsTime: IndicationLocPositionReportOutputGpsTime }
    getHeading(): { returnType: boolean, valueHeading: number }
    getHeadingUncertainty(): { returnType: boolean, valueHeadingUncertainty: number }
    getHorizontalConfidence(): { returnType: boolean, valueHorizontalConfidence: number }
    getHorizontalReliability(): { returnType: boolean, valueHorizontalReliability: LocReliability }
    getHorizontalSpeed(): { returnType: boolean, valueHorizontalSpeed: number }
    getHorizontalUncertaintyCircular(): { returnType: boolean, valueHorizontalUncertaintyCircular: number }
    getHorizontalUncertaintyEllipticalAzimuth(): { returnType: boolean, valueHorizontalUncertaintyEllipticalAzimuth: number }
    getHorizontalUncertaintyEllipticalMajor(): { returnType: boolean, valueHorizontalUncertaintyEllipticalMajor: number }
    getHorizontalUncertaintyEllipticalMinor(): { returnType: boolean, valueHorizontalUncertaintyEllipticalMinor: number }
    getLatitude(): { returnType: boolean, valueLatitude: number }
    getLeapSeconds(): { returnType: boolean, valueLeapSeconds: number }
    getLongitude(): { returnType: boolean, valueLongitude: number }
    getMagneticDeviation(): { returnType: boolean, valueMagneticDeviation: number }
    getSatellitesUsed(): { returnType: boolean, valueSatellitesUsed: number[] }
    getSensorDataUsage(): { returnType: boolean, valueSensorDataUsage: LocSensorDataUsage }
    getSessionFixCount(): { returnType: boolean, valueSessionFixCount: number }
    getSessionId(): { returnType: boolean, valueSessionId: number }
    getSessionStatus(): { returnType: boolean, valueSessionStatus: LocSessionStatus }
    getSpeedUncertainty(): { returnType: boolean, valueSpeedUncertainty: number }
    getTechnologyUsed(): { returnType: boolean, valueTechnologyUsed: LocTechnologyUsed }
    getTimeSource(): { returnType: boolean, valueTimeSource: LocTimeSource }
    getTimeUncertainty(): { returnType: boolean, valueTimeUncertainty: number }
    getUtcTimestamp(): { returnType: boolean, valueUtcTimestamp: number }
    getVerticalConfidence(): { returnType: boolean, valueVerticalConfidence: number }
    getVerticalReliability(): { returnType: boolean, valueVerticalReliability: number }
    getVerticalSpeed(): { returnType: boolean, valueVerticalSpeed: number }
    getVerticalUncertainty(): { returnType: boolean, valueVerticalUncertainty: number }
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
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    ref(): IndicationLocSetEngineLockOutput
    unref(): void
    static name: string
}
export class IndicationLocSetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetNmeaTypesOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    ref(): IndicationLocSetNmeaTypesOutput
    unref(): void
    static name: string
}
export class IndicationLocSetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetOperationModeOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    ref(): IndicationLocSetOperationModeOutput
    unref(): void
    static name: string
}
export class IndicationLocSetServerOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetServerOutput */
    getIndicationStatus(): { returnType: boolean, valueIndicationStatus: LocIndicationStatus }
    ref(): IndicationLocSetServerOutput
    unref(): void
    static name: string
}
export class IndicationNasEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasEventReportOutput */
    getEcio(): { returnType: boolean, valueEcioEcio: number, valueEcioRadioInterface: NasRadioInterface }
    getErrorRate(): { returnType: boolean, valueErrorRateRate: number, valueErrorRateRadioInterface: NasRadioInterface }
    getIo(): { returnType: boolean, valueIo: number }
    getLteRsrp(): { returnType: boolean, valueLteRsrp: number }
    getLteSnr(): { returnType: boolean, valueLteSnr: number }
    getRegistrationRejectReason(): { returnType: boolean, valueRegistrationRejectReasonServiceDomain: NasNetworkServiceDomain, valueRegistrationRejectReasonRejectCause: number }
    getRfBandInformation(): { returnType: boolean, valueRfBandInformation: IndicationNasEventReportOutputRfBandInformationElement[] }
    getRsrq(): { returnType: boolean, valueRsrqRsrq: number, valueRsrqRadioInterface: NasRadioInterface }
    getRssi(): { returnType: boolean, valueRssiRssi: number, valueRssiRadioInterface: NasRadioInterface }
    getSignalStrength(): { returnType: boolean, valueSignalStrengthStrength: number, valueSignalStrengthRadioInterface: NasRadioInterface }
    getSinr(): { returnType: boolean, valueSinr: NasEvdoSinrLevel }
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
export class IndicationNasNetworkTimeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasNetworkTimeOutput */
    getDaylightSavingsAdjustment(): { returnType: boolean, valueDaylightSavingsAdjustment: NasDaylightSavingsAdjustment }
    getRadioInterface(): { returnType: boolean, valueRadioInterface: NasRadioInterface }
    getTimezoneOffset(): { returnType: boolean, valueTimezoneOffset: number }
    getUniversalTime(): { returnType: boolean, valueUniversalTimeYear: number, valueUniversalTimeMonth: number, valueUniversalTimeDay: number, valueUniversalTimeHour: number, valueUniversalTimeMinute: number, valueUniversalTimeSecond: number, valueUniversalTimeDayOfWeek: NasDayOfWeek }
    ref(): IndicationNasNetworkTimeOutput
    unref(): void
    static name: string
}
export class IndicationNasOperatorNameOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasOperatorNameOutput */
    getNitzInformation(): { returnType: boolean, valueNitzInformationNameEncoding: NasPlmnEncodingScheme, valueNitzInformationShortCountryInitials: NasPlmnNameCountryInitials, valueNitzInformationLongNameSpareBits: NasPlmnNameSpareBits, valueNitzInformationShortNameSpareBits: NasPlmnNameSpareBits, valueNitzInformationLongName: any[], valueNitzInformationShortName: any[] }
    getOperatorPlmnList(): { returnType: boolean, valueOperatorPlmnList: IndicationNasOperatorNameOutputOperatorPlmnListElement[] }
    getOperatorPlmnName(): { returnType: boolean, valueOperatorPlmnName: IndicationNasOperatorNameOutputOperatorPlmnNameElement[] }
    getOperatorStringName(): { returnType: boolean, valueOperatorStringName: string }
    getServiceProviderName(): { returnType: boolean, valueServiceProviderNameNameDisplayCondition: NasNetworkNameDisplayCondition, valueServiceProviderNameName: string }
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
    getCallBarringStatus(): { returnType: boolean, valueCallBarringStatusCsStatus: NasCallBarringStatus, valueCallBarringStatusPsStatus: NasCallBarringStatus }
    getCdmaBaseStationInfo(): { returnType: boolean, valueCdmaBaseStationInfoBaseStationId: number, valueCdmaBaseStationInfoBaseStationLatitude: number, valueCdmaBaseStationInfoBaseStationLongitude: number }
    getCdmaPRev(): { returnType: boolean, valueCdmaPRev: number }
    getCdmaSystemId(): { returnType: boolean, valueCdmaSystemIdSid: number, valueCdmaSystemIdNid: number }
    getCdmaSystemInfo(): { returnType: boolean, valueCdmaSystemInfoMcc: number, valueCdmaSystemInfoImsi1112: number }
    getCid3gpp(): { returnType: boolean, valueCid3gpp: number }
    getConcurrentServiceInfo3gpp2(): { returnType: boolean, valueConcurrentServiceInfo3gpp2: boolean }
    getCurrentPlmn(): { returnType: boolean, valueCurrentPlmnMcc: number, valueCurrentPlmnMnc: number, valueCurrentPlmnDescription: string }
    getDataServiceCapability(): { returnType: boolean, valueDataServiceCapability: NasDataCapability[] }
    getDaylightSavingTimeAdjustment3gpp(): { returnType: boolean, valueDaylightSavingTimeAdjustment3gpp: number }
    getDefaultRoamingIndicator(): { returnType: boolean, valueDefaultRoamingIndicator: NasRoamingIndicatorStatus }
    getDetailedServiceStatus(): { returnType: boolean, valueDetailedServiceStatusStatus: NasServiceStatus, valueDetailedServiceStatusCapability: NasNetworkServiceDomain, valueDetailedServiceStatusHdrStatus: NasServiceStatus, valueDetailedServiceStatusHdrHybrid: boolean, valueDetailedServiceStatusForbidden: boolean }
    getDtmSupport(): { returnType: boolean, valueDtmSupport: boolean }
    getHdrPersonality(): { returnType: boolean, valueHdrPersonality: NasHdrPersonality }
    getLac3gpp(): { returnType: boolean, valueLac3gpp: number }
    getLteTac(): { returnType: boolean, valueLteTac: number }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatusMcc: number, valueMncPcsDigitIncludeStatusMnc: number, valueMncPcsDigitIncludeStatusIncludesPcsDigit: boolean }
    getNetworkNameSource(): { returnType: boolean, valueNetworkNameSource: NasNetworkNameSource }
    getPlmnNameFlag3gpp(): { returnType: boolean, valuePlmnNameFlag3gpp: boolean }
    getPlmnNotChangedIndication(): { returnType: boolean, valuePlmnNotChangedIndication: boolean }
    getPrlIndicator3gpp2(): { returnType: boolean, valuePrlIndicator3gpp2: boolean }
    getRoamingIndicator(): { returnType: boolean, valueRoamingIndicator: NasRoamingIndicatorStatus }
    getRoamingIndicatorList(): { returnType: boolean, valueRoamingIndicatorList: IndicationNasServingSystemOutputRoamingIndicatorListElement[] }
    getServingSystem(): { returnType: boolean, valueServingSystemRegistrationState: NasRegistrationState, valueServingSystemCsAttachState: NasAttachState, valueServingSystemPsAttachState: NasAttachState, valueServingSystemSelectedNetwork: NasNetworkType, valueServingSystemRadioInterfaces: NasRadioInterface[] }
    getTimeZone3gpp(): { returnType: boolean, valueTimeZone3gpp: number }
    getTimeZone3gpp2(): { returnType: boolean, valueTimeZone3gpp2LeapSeconds: number, valueTimeZone3gpp2LocalTimeOffset: number, valueTimeZone3gpp2DaylightSavingTime: boolean }
    getUmtsPrimaryScramblingCode(): { returnType: boolean, valueUmtsPrimaryScramblingCode: number }
    getUniversalTimeAndLocalTimeZone3gpp(): { returnType: boolean, valueUniversalTimeAndLocalTimeZone3gppYear: number, valueUniversalTimeAndLocalTimeZone3gppMonth: number, valueUniversalTimeAndLocalTimeZone3gppDay: number, valueUniversalTimeAndLocalTimeZone3gppHour: number, valueUniversalTimeAndLocalTimeZone3gppMinute: number, valueUniversalTimeAndLocalTimeZone3gppSecond: number, valueUniversalTimeAndLocalTimeZone3gppTimeZone: number }
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
    getCdmaSignalStrength(): { returnType: boolean, valueCdmaSignalStrengthRssi: number, valueCdmaSignalStrengthEcio: number }
    getGsmSignalStrength(): { returnType: boolean, valueGsmSignalStrength: number }
    getHdrSignalStrength(): { returnType: boolean, valueHdrSignalStrengthRssi: number, valueHdrSignalStrengthEcio: number, valueHdrSignalStrengthSinr: NasEvdoSinrLevel, valueHdrSignalStrengthIo: number }
    getLteSignalStrength(): { returnType: boolean, valueLteSignalStrengthRssi: number, valueLteSignalStrengthRsrq: number, valueLteSignalStrengthRsrp: number, valueLteSignalStrengthSnr: number }
    getTdmaSignalStrength(): { returnType: boolean, valueTdmaSignalStrength: number }
    getWcdmaSignalStrength(): { returnType: boolean, valueWcdmaSignalStrengthRssi: number, valueWcdmaSignalStrengthEcio: number }
    ref(): IndicationNasSignalInfoOutput
    unref(): void
    static name: string
}
export class IndicationNasSystemInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasSystemInfoOutput */
    getAdditionalCdmaSystemInfo(): { returnType: boolean, valueAdditionalCdmaSystemInfoGeoSystemIndex: number, valueAdditionalCdmaSystemInfoRegistrationPeriod: number }
    getAdditionalGsmSystemInfo(): { returnType: boolean, valueAdditionalGsmSystemInfoGeoSystemIndex: number, valueAdditionalGsmSystemInfoCellBroadcastSupport: NasCellBroadcastCapability }
    getAdditionalHdrSystemInfo(): { returnType: boolean, valueAdditionalHdrSystemInfoGeoSystemIndex: number }
    getAdditionalLteSystemInfo(): { returnType: boolean, valueAdditionalLteSystemInfoGeoSystemIndex: number }
    getAdditionalWcdmaSystemInfo(): { returnType: boolean, valueAdditionalWcdmaSystemInfoGeoSystemIndex: number, valueAdditionalWcdmaSystemInfoCellBroadcastSupport: NasCellBroadcastCapability }
    getCdmaServiceStatus(): { returnType: boolean, valueCdmaServiceStatusServiceStatus: NasServiceStatus, valueCdmaServiceStatusPreferredDataPath: boolean }
    getCdmaSystemInfo(): { returnType: boolean, valueCdmaSystemInfoDomainValid: boolean, valueCdmaSystemInfoDomain: NasNetworkServiceDomain, valueCdmaSystemInfoServiceCapabilityValid: boolean, valueCdmaSystemInfoServiceCapability: NasNetworkServiceDomain, valueCdmaSystemInfoRoamingStatusValid: boolean, valueCdmaSystemInfoRoamingStatus: NasRoamingStatus, valueCdmaSystemInfoForbiddenValid: boolean, valueCdmaSystemInfoForbidden: boolean, valueCdmaSystemInfoPrlMatchValid: boolean, valueCdmaSystemInfoPrlMatch: boolean, valueCdmaSystemInfoPRevValid: boolean, valueCdmaSystemInfoPRev: number, valueCdmaSystemInfoBaseStationPRevValid: boolean, valueCdmaSystemInfoBaseStationPRev: number, valueCdmaSystemInfoConcurrentServiceSupportValid: boolean, valueCdmaSystemInfoConcurrentServiceSupport: boolean, valueCdmaSystemInfoCdmaSystemIdValid: boolean, valueCdmaSystemInfoSid: number, valueCdmaSystemInfoNid: number, valueCdmaSystemInfoBaseStationInfoValid: boolean, valueCdmaSystemInfoBaseStationId: number, valueCdmaSystemInfoBaseStationLatitude: number, valueCdmaSystemInfoBaseStationLongitude: number, valueCdmaSystemInfoPacketZoneValid: boolean, valueCdmaSystemInfoPacketZone: number, valueCdmaSystemInfoNetworkIdValid: boolean, valueCdmaSystemInfoMcc: string, valueCdmaSystemInfoMnc: string }
    getGsmCallBarringStatus(): { returnType: boolean, valueGsmCallBarringStatusCsStatus: NasCallBarringStatus, valueGsmCallBarringStatusPsStatus: NasCallBarringStatus }
    getGsmCipherDomain(): { returnType: boolean, valueGsmCipherDomain: NasNetworkServiceDomain }
    getGsmServiceStatus(): { returnType: boolean, valueGsmServiceStatusServiceStatus: NasServiceStatus, valueGsmServiceStatusTrueServiceStatus: NasServiceStatus, valueGsmServiceStatusPreferredDataPath: boolean }
    getGsmSystemInfo(): { returnType: boolean, valueGsmSystemInfoDomainValid: boolean, valueGsmSystemInfoDomain: NasNetworkServiceDomain, valueGsmSystemInfoServiceCapabilityValid: boolean, valueGsmSystemInfoServiceCapability: NasNetworkServiceDomain, valueGsmSystemInfoRoamingStatusValid: boolean, valueGsmSystemInfoRoamingStatus: NasRoamingStatus, valueGsmSystemInfoForbiddenValid: boolean, valueGsmSystemInfoForbidden: boolean, valueGsmSystemInfoLacValid: boolean, valueGsmSystemInfoLac: number, valueGsmSystemInfoCidValid: boolean, valueGsmSystemInfoCid: number, valueGsmSystemInfoRegistrationRejectInfoValid: boolean, valueGsmSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain, valueGsmSystemInfoRegistrationRejectCause: number, valueGsmSystemInfoNetworkIdValid: boolean, valueGsmSystemInfoMcc: string, valueGsmSystemInfoMnc: string, valueGsmSystemInfoEgprsSupportValid: boolean, valueGsmSystemInfoEgprsSupport: boolean, valueGsmSystemInfoDtmSupportValid: boolean, valueGsmSystemInfoDtmSupport: boolean }
    getHdrServiceStatus(): { returnType: boolean, valueHdrServiceStatusServiceStatus: NasServiceStatus, valueHdrServiceStatusPreferredDataPath: boolean }
    getHdrSystemInfo(): { returnType: boolean, valueHdrSystemInfoDomainValid: boolean, valueHdrSystemInfoDomain: NasNetworkServiceDomain, valueHdrSystemInfoServiceCapabilityValid: boolean, valueHdrSystemInfoServiceCapability: NasNetworkServiceDomain, valueHdrSystemInfoRoamingStatusValid: boolean, valueHdrSystemInfoRoamingStatus: NasRoamingStatus, valueHdrSystemInfoForbiddenValid: boolean, valueHdrSystemInfoForbidden: boolean, valueHdrSystemInfoPrlMatchValid: boolean, valueHdrSystemInfoPrlMatch: boolean, valueHdrSystemInfoPersonalityValid: boolean, valueHdrSystemInfoPersonality: NasHdrPersonality, valueHdrSystemInfoProtocolRevisionValid: boolean, valueHdrSystemInfoProtocolRevision: NasHdrProtocolRevision, valueHdrSystemInfoIs856SystemIdValid: boolean, valueHdrSystemInfoIs856SystemId: string }
    getLteEmbmsCoverageInfoSupport(): { returnType: boolean, valueLteEmbmsCoverageInfoSupport: boolean }
    getLteServiceStatus(): { returnType: boolean, valueLteServiceStatusServiceStatus: NasServiceStatus, valueLteServiceStatusTrueServiceStatus: NasServiceStatus, valueLteServiceStatusPreferredDataPath: boolean }
    getLteSystemInfo(): { returnType: boolean, valueLteSystemInfoDomainValid: boolean, valueLteSystemInfoDomain: NasNetworkServiceDomain, valueLteSystemInfoServiceCapabilityValid: boolean, valueLteSystemInfoServiceCapability: NasNetworkServiceDomain, valueLteSystemInfoRoamingStatusValid: boolean, valueLteSystemInfoRoamingStatus: NasRoamingStatus, valueLteSystemInfoForbiddenValid: boolean, valueLteSystemInfoForbidden: boolean, valueLteSystemInfoLacValid: boolean, valueLteSystemInfoLac: number, valueLteSystemInfoCidValid: boolean, valueLteSystemInfoCid: number, valueLteSystemInfoRegistrationRejectInfoValid: boolean, valueLteSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain, valueLteSystemInfoRegistrationRejectCause: number, valueLteSystemInfoNetworkIdValid: boolean, valueLteSystemInfoMcc: string, valueLteSystemInfoMnc: string, valueLteSystemInfoTacValid: boolean, valueLteSystemInfoTac: number }
    getLteVoiceSupport(): { returnType: boolean, valueLteVoiceSupport: boolean }
    getPlmnNotChangedIndication(): { returnType: boolean, valuePlmnNotChangedIndication: boolean }
    getSimRejectInfo(): { returnType: boolean, valueSimRejectInfo: NasSimRejectState }
    getTdScdmaServiceStatus(): { returnType: boolean, valueTdScdmaServiceStatusServiceStatus: NasServiceStatus, valueTdScdmaServiceStatusTrueServiceStatus: NasServiceStatus, valueTdScdmaServiceStatusPreferredDataPath: boolean }
    getTdScmaSystemInfo(): { returnType: boolean, valueTdScmaSystemInfoDomainValid: boolean, valueTdScmaSystemInfoDomain: NasNetworkServiceDomain, valueTdScmaSystemInfoServiceCapabilityValid: boolean, valueTdScmaSystemInfoServiceCapability: NasNetworkServiceDomain, valueTdScmaSystemInfoRoamingStatusValid: boolean, valueTdScmaSystemInfoRoamingStatus: NasRoamingStatus, valueTdScmaSystemInfoForbiddenValid: boolean, valueTdScmaSystemInfoForbidden: boolean, valueTdScmaSystemInfoLacValid: boolean, valueTdScmaSystemInfoLac: number, valueTdScmaSystemInfoCidValid: boolean, valueTdScmaSystemInfoCid: number, valueTdScmaSystemInfoRegistrationRejectInfoValid: boolean, valueTdScmaSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain, valueTdScmaSystemInfoRegistrationRejectCause: number, valueTdScmaSystemInfoNetworkIdValid: boolean, valueTdScmaSystemInfoMcc: string, valueTdScmaSystemInfoMnc: string, valueTdScmaSystemInfoHsCallStatusValid: boolean, valueTdScmaSystemInfoHsCallStatus: NasWcdmaHsService, valueTdScmaSystemInfoHsServiceValid: boolean, valueTdScmaSystemInfoHsService: NasWcdmaHsService, valueTdScmaSystemInfoCellParameterIdValid: boolean, valueTdScmaSystemInfoCellParameterId: number, valueTdScmaSystemInfoCellBroadcastSupportValid: boolean, valueTdScmaSystemInfoCellBroadcastSupport: NasCellBroadcastCapability, valueTdScmaSystemInfoCsCallBarringStatusValid: boolean, valueTdScmaSystemInfoCsCallBarringStatus: NasCallBarringStatus, valueTdScmaSystemInfoPsCallBarringStatusValid: boolean, valueTdScmaSystemInfoPsCallBarringStatus: NasCallBarringStatus, valueTdScmaSystemInfoCipherDomainValid: boolean, valueTdScmaSystemInfoCipherDomain: NasNetworkServiceDomain }
    getWcdmaCallBarringStatus(): { returnType: boolean, valueWcdmaCallBarringStatusCsStatus: NasCallBarringStatus, valueWcdmaCallBarringStatusPsStatus: NasCallBarringStatus }
    getWcdmaCipherDomain(): { returnType: boolean, valueWcdmaCipherDomain: NasNetworkServiceDomain }
    getWcdmaServiceStatus(): { returnType: boolean, valueWcdmaServiceStatusServiceStatus: NasServiceStatus, valueWcdmaServiceStatusTrueServiceStatus: NasServiceStatus, valueWcdmaServiceStatusPreferredDataPath: boolean }
    getWcdmaSystemInfo(): { returnType: boolean, valueWcdmaSystemInfoDomainValid: boolean, valueWcdmaSystemInfoDomain: NasNetworkServiceDomain, valueWcdmaSystemInfoServiceCapabilityValid: boolean, valueWcdmaSystemInfoServiceCapability: NasNetworkServiceDomain, valueWcdmaSystemInfoRoamingStatusValid: boolean, valueWcdmaSystemInfoRoamingStatus: NasRoamingStatus, valueWcdmaSystemInfoForbiddenValid: boolean, valueWcdmaSystemInfoForbidden: boolean, valueWcdmaSystemInfoLacValid: boolean, valueWcdmaSystemInfoLac: number, valueWcdmaSystemInfoCidValid: boolean, valueWcdmaSystemInfoCid: number, valueWcdmaSystemInfoRegistrationRejectInfoValid: boolean, valueWcdmaSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain, valueWcdmaSystemInfoRegistrationRejectCause: number, valueWcdmaSystemInfoNetworkIdValid: boolean, valueWcdmaSystemInfoMcc: string, valueWcdmaSystemInfoMnc: string, valueWcdmaSystemInfoHsCallStatusValid: boolean, valueWcdmaSystemInfoHsCallStatus: NasWcdmaHsService, valueWcdmaSystemInfoHsServiceValid: boolean, valueWcdmaSystemInfoHsService: NasWcdmaHsService, valueWcdmaSystemInfoPrimaryScramblingCodeValid: boolean, valueWcdmaSystemInfoPrimaryScramblingCode: number }
    ref(): IndicationNasSystemInfoOutput
    unref(): void
    static name: string
}
export class IndicationOmaEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationOmaEventReportOutput */
    getNetworkInitiatedAlert(): { returnType: boolean, valueNetworkInitiatedAlertSessionType: OmaSessionType, valueNetworkInitiatedAlertSessionId: number }
    getSessionFailReason(): { returnType: boolean, valueSessionFailReason: OmaSessionFailedReason }
    getSessionState(): { returnType: boolean, valueSessionState: OmaSessionState }
    ref(): IndicationOmaEventReportOutput
    unref(): void
    static name: string
}
export class IndicationPdcActivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcActivateConfigOutput */
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number }
    getToken(): { returnType: boolean, valueToken: number }
    ref(): IndicationPdcActivateConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcDeactivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcDeactivateConfigOutput */
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number }
    getToken(): { returnType: boolean, valueToken: number }
    ref(): IndicationPdcDeactivateConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcGetConfigInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcGetConfigInfoOutput */
    getDescription(): { returnType: boolean, valueDescription: string }
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number }
    getToken(): { returnType: boolean, valueToken: number }
    getTotalSize(): { returnType: boolean, valueTotalSize: number }
    getVersion(): { returnType: boolean, valueVersion: number }
    ref(): IndicationPdcGetConfigInfoOutput
    unref(): void
    static name: string
}
export class IndicationPdcGetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcGetSelectedConfigOutput */
    getActiveId(): { returnType: boolean, valueActiveId: any[] }
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number }
    getPendingId(): { returnType: boolean, valuePendingId: any[] }
    getToken(): { returnType: boolean, valueToken: number }
    ref(): IndicationPdcGetSelectedConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcListConfigsOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcListConfigsOutput */
    getConfigs(): { returnType: boolean, valueConfigs: IndicationPdcListConfigsOutputConfigsElement[] }
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number }
    getToken(): { returnType: boolean, valueToken: number }
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
    getFrameReset(): { returnType: boolean, valueFrameReset: boolean }
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number }
    getReceived(): { returnType: boolean, valueReceived: number }
    getRemainingSize(): { returnType: boolean, valueRemainingSize: number }
    getToken(): { returnType: boolean, valueToken: number }
    ref(): IndicationPdcLoadConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcSetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcSetSelectedConfigOutput */
    getIndicationResult(): { returnType: boolean, valueIndicationResult: number }
    getToken(): { returnType: boolean, valueToken: number }
    ref(): IndicationPdcSetSelectedConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdsEventReportOutput */
    getExtendedNmeaPosition(): { returnType: boolean, valueExtendedNmeaPositionOperationMode: PdsOperationMode, valueExtendedNmeaPositionNmea: string }
    getNmeaPosition(): { returnType: boolean, valueNmeaPosition: string }
    getPositionSessionStatus(): { returnType: boolean, valuePositionSessionStatus: PdsPositionSessionStatus }
    ref(): IndicationPdsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationQosFlowStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationQosFlowStatusOutput */
    getValue(): { returnType: boolean, valueValueQosId: number, valueValueStatus: QosStatus, valueValueEvent: QosEvent }
    ref(): IndicationQosFlowStatusOutput
    unref(): void
    static name: string
}
export class IndicationQosNetworkStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationQosNetworkStatusOutput */
    getQosSupported(): { returnType: boolean, valueQosSupported: boolean }
    ref(): IndicationQosNetworkStatusOutput
    unref(): void
    static name: string
}
export class IndicationUimCardStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationUimCardStatusOutput */
    getCardStatus(): { returnType: boolean, valueCardStatusIndexGwPrimary: number, valueCardStatusIndex1xPrimary: number, valueCardStatusIndexGwSecondary: number, valueCardStatusIndex1xSecondary: number, valueCardStatusCards: IndicationUimCardStatusOutputCardStatusCardsElement[] }
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
    getEvent(): { returnType: boolean, valueEventStage: UimRefreshStage, valueEventMode: UimRefreshMode, valueEventSessionType: UimSessionType, valueEventApplicationIdentifier: any[], valueEventFiles: IndicationUimRefreshOutputEventFilesElement[] }
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
    getPhysicalSlotInformation(): { returnType: boolean, valuePhysicalSlotInformation: PhysicalSlotInformationSlot[] }
    getPhysicalSlotStatus(): { returnType: boolean, valuePhysicalSlotStatus: PhysicalSlotStatusSlot[] }
    getSlotEidInformation(): { returnType: boolean, valueSlotEidInformation: any[] }
    ref(): IndicationUimSlotStatusOutput
    unref(): void
    static name: string
}
export class IndicationVoiceAllCallStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceAllCallStatusOutput */
    getCallInformation(): { returnType: boolean, valueCallInformation: IndicationVoiceAllCallStatusOutputCallInformationCall[] }
    getRemotePartyNumber(): { returnType: boolean, valueRemotePartyNumber: IndicationVoiceAllCallStatusOutputRemotePartyNumberCall[] }
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
    getAlphaIdentifier(): { returnType: boolean, valueAlphaIdentifierDataCodingScheme: VoiceAlphaDataCodingScheme, valueAlphaIdentifierAlpha: any[] }
    getErrorCode(): { returnType: boolean, valueErrorCode: number }
    getFailureCause(): { returnType: boolean, valueFailureCause: VoiceCallEndReason }
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[] }
    getUssDataUtf16(): { returnType: boolean, valueUssDataUtf16: number[] }
    ref(): IndicationVoiceOriginateUssdNoWaitOutput
    unref(): void
    static name: string
}
export class IndicationVoiceUssdOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceUssdOutput */
    getUserAction(): { returnType: boolean, valueUserAction: VoiceUserAction }
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[] }
    getUssDataUtf16(): { returnType: boolean, valueUssDataUtf16: number[] }
    ref(): IndicationVoiceUssdOutput
    unref(): void
    static name: string
}
export class IndicationWdsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWdsEventReportOutput */
    getChannelRates(): { returnType: boolean, valueChannelRatesTxRateBps: number, valueChannelRatesRxRateBps: number }
    getCurrentDataBearerTechnology(): { returnType: boolean, valueCurrentDataBearerTechnologyNetworkType: WdsNetworkType, valueCurrentDataBearerTechnologyRatMask: number, valueCurrentDataBearerTechnologySoMask: number }
    getDataBearerTechnology(): { returnType: boolean, valueDataBearerTechnology: WdsDataBearerTechnology }
    getDataCallAddressFamily(): { returnType: boolean, valueDataCallAddressFamily: WdsIpFamily }
    getDataCallStatus(): { returnType: boolean, valueDataCallStatus: WdsDataCallStatus }
    getDataCallType(): { returnType: boolean, valueDataCallTypeDataCallType: WdsDataCallType, valueDataCallTypeTetheredCallType: WdsTetheredCallType }
    getDataSystems(): { returnType: boolean, valueDataSystemsPreferredNetworkType: WdsDataSystemNetworkType, valueDataSystemsNetworks: IndicationWdsEventReportOutputDataSystemsNetworksNetwork[] }
    getDormancyStatus(): { returnType: boolean, valueDormancyStatus: WdsDormancyStatus }
    getEvdoPageMonitorPeriodChange(): { returnType: boolean, valueEvdoPageMonitorPeriodChangePeriodChange: number, valueEvdoPageMonitorPeriodChangeForceLongSleep: boolean }
    getExtendedDataBearerTechnology(): { returnType: boolean, valueExtendedDataBearerTechnologyDataBearerTechnology: WdsDataSystemNetworkType, valueExtendedDataBearerTechnologyRadioAccessTechnology: WdsRadioAccessTechnology, valueExtendedDataBearerTechnologyExtendedDataBearerTechnology3gpp: WdsExtendedDataBearerTechnology3gpp, valueExtendedDataBearerTechnologyExtendedDataBearerTechnology3gpp2: WdsExtendedDataBearerTechnology3gpp2 }
    getMipStatus(): { returnType: boolean, valueMipStatus: boolean }
    getPdnFiltersRemoved(): { returnType: boolean, valuePdnFiltersRemovedPdnFilterHandler: number[] }
    getPreferredDataSystem(): { returnType: boolean, valuePreferredDataSystem: WdsDataSystem }
    getRxBytesOk(): { returnType: boolean, valueRxBytesOk: number }
    getRxOverflows(): { returnType: boolean, valueRxOverflows: number }
    getRxPacketsDropped(): { returnType: boolean, valueRxPacketsDropped: number }
    getRxPacketsError(): { returnType: boolean, valueRxPacketsError: number }
    getRxPacketsOk(): { returnType: boolean, valueRxPacketsOk: number }
    getTxBytesOk(): { returnType: boolean, valueTxBytesOk: number }
    getTxOverflows(): { returnType: boolean, valueTxOverflows: number }
    getTxPacketsDropped(): { returnType: boolean, valueTxPacketsDropped: number }
    getTxPacketsError(): { returnType: boolean, valueTxPacketsError: number }
    getTxPacketsOk(): { returnType: boolean, valueTxPacketsOk: number }
    getUplinkFlowControlEnabled(): { returnType: boolean, valueUplinkFlowControlEnabled: boolean }
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
    getCallEndReason(): { returnType: boolean, valueCallEndReason: WdsCallEndReason }
    getConnectionStatus(): { returnType: boolean, valueConnectionStatusStatus: WdsConnectionStatus, valueConnectionStatusReconfigurationRequired: boolean }
    getExtendedTechnologyPreference(): { returnType: boolean, valueExtendedTechnologyPreference: WdsExtendedTechnologyPreference }
    getIpFamily(): { returnType: boolean, valueIpFamily: WdsIpFamily }
    getVerboseCallEndReason(): { returnType: boolean, valueVerboseCallEndReasonType: WdsVerboseCallEndReasonType, valueVerboseCallEndReasonReason: number }
    ref(): IndicationWdsPacketServiceStatusOutput
    unref(): void
    static name: string
}
export class IndicationWdsSetLteAttachPdnListOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWdsSetLteAttachPdnListOutput */
    getActionResult(): { returnType: boolean, valueActionResult: boolean }
    getResult(): boolean
    ref(): IndicationWdsSetLteAttachPdnListOutput
    unref(): void
    static name: string
}
export class IndicationWmsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWmsEventReportOutput */
    getEtwsMessage(): { returnType: boolean, valueEtwsMessageNotificationType: WmsNotificationType, valueEtwsMessageRawData: any[] }
    getEtwsPlmnInformation(): { returnType: boolean, valueEtwsPlmnInformationMcc: number, valueEtwsPlmnInformationMnc: number }
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode }
    getMtMessage(): { returnType: boolean, valueMtMessageStorageType: WmsStorageType, valueMtMessageMemoryIndex: number }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean }
    getSmscAddress(): { returnType: boolean, valueSmscAddress: string }
    getTransferRouteMtMessage(): { returnType: boolean, valueTransferRouteMtMessageAckIndicator: WmsAckIndicator, valueTransferRouteMtMessageTransactionId: number, valueTransferRouteMtMessageFormat: WmsMessageFormat, valueTransferRouteMtMessageRawData: any[] }
    ref(): IndicationWmsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationWmsSmscAddressOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWmsSmscAddressOutput */
    getAddress(): { returnType: boolean, valueAddressType: string, valueAddressDigits: string }
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
    getService(): { returnType: boolean, valueService: Service }
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
    getAllocationInfo(): { returnType: boolean, valueAllocationInfoService: Service, valueAllocationInfoCid: number }
    getResult(): boolean
    ref(): MessageCtlAllocateCidOutput
    unref(): void
    static name: string
}
export class MessageCtlGetVersionInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlGetVersionInfoOutput */
    getResult(): boolean
    getServiceList(): { returnType: boolean, valueServiceList: MessageCtlGetVersionInfoOutputServiceListService[] }
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
    getDevicePath(): { returnType: boolean, valueDevicePath: string }
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
    getReleaseInfo(): { returnType: boolean, valueReleaseInfoService: Service, valueReleaseInfoCid: number }
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
    getReleaseInfo(): { returnType: boolean, valueReleaseInfoService: Service, valueReleaseInfoCid: number }
    getResult(): boolean
    ref(): MessageCtlReleaseCidOutput
    unref(): void
    static name: string
}
export class MessageCtlSetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetDataFormatInput */
    getFormat(): { returnType: boolean, valueFormat: CtlDataFormat }
    getProtocol(): { returnType: boolean, valueProtocol: CtlDataLinkProtocol }
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
    getProtocol(): { returnType: boolean, valueProtocol: CtlDataLinkProtocol }
    getResult(): boolean
    ref(): MessageCtlSetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageCtlSetInstanceIdInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetInstanceIdInput */
    getId(): { returnType: boolean, valueId: number }
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
    getLinkId(): { returnType: boolean, valueLinkId: number }
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
    getActivationCode(): { returnType: boolean, valueActivationCode: string }
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
    getInfo(): { returnType: boolean, valueInfoServiceProgrammingCode: string, valueInfoSystemIdentificationNumber: number, valueInfoMobileDirectoryNumber: string, valueInfoMobileIdentificationNumber: string }
    getMnAaaKey(): { returnType: boolean, valueMnAaaKey: string }
    getMnHaKey(): { returnType: boolean, valueMnHaKey: string }
    getPrl(): { returnType: boolean, valuePrlPrlTotalLength: number, valuePrlPrlSegmentSequence: number, valuePrlPrlSegment: any[] }
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
    getImage(): { returnType: boolean, valueImage: MessageDmsDeleteStoredImageInputImage }
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
    getMode(): { returnType: boolean, valueMode: DmsFoxconnDeviceMode }
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
    getVersionType(): { returnType: boolean, valueVersionType: DmsFoxconnFirmwareVersionType }
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
    getVersion(): { returnType: boolean, valueVersion: string }
    ref(): MessageDmsFoxconnGetFirmwareVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetActivationStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetActivationStateOutput */
    getInfo(): { returnType: boolean, valueInfo: DmsActivationState }
    getResult(): boolean
    ref(): MessageDmsGetActivationStateOutput
    unref(): void
    static name: string
}
export class MessageDmsGetAltNetConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetAltNetConfigOutput */
    getConfig(): { returnType: boolean, valueConfig: boolean }
    getResult(): boolean
    ref(): MessageDmsGetAltNetConfigOutput
    unref(): void
    static name: string
}
export class MessageDmsGetBandCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetBandCapabilitiesOutput */
    getBandCapability(): { returnType: boolean, valueBandCapability: DmsBandCapability }
    getExtendedLteBandCapability(): { returnType: boolean, valueExtendedLteBandCapability: number[] }
    getLteBandCapability(): { returnType: boolean, valueLteBandCapability: DmsLteBandCapability }
    getResult(): boolean
    ref(): MessageDmsGetBandCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetBootImageDownloadModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetBootImageDownloadModeOutput */
    getMode(): { returnType: boolean, valueMode: DmsBootImageDownloadMode }
    getResult(): boolean
    ref(): MessageDmsGetBootImageDownloadModeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetCapabilitiesOutput */
    getInfo(): { returnType: boolean, valueInfoMaxTxChannelRate: number, valueInfoMaxRxChannelRate: number, valueInfoDataServiceCapability: DmsDataServiceCapability, valueInfoSimCapability: DmsSimCapability, valueInfoRadioInterfaceList: DmsRadioInterface[] }
    getResult(): boolean
    ref(): MessageDmsGetCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetFactorySkuOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetFactorySkuOutput */
    getResult(): boolean
    getSku(): { returnType: boolean, valueSku: string }
    ref(): MessageDmsGetFactorySkuOutput
    unref(): void
    static name: string
}
export class MessageDmsGetFirmwarePreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetFirmwarePreferenceOutput */
    getList(): { returnType: boolean, valueList: MessageDmsGetFirmwarePreferenceOutputListImage[] }
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
    getRevision(): { returnType: boolean, valueRevision: string }
    ref(): MessageDmsGetHardwareRevisionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetIdsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetIdsOutput */
    getEsn(): { returnType: boolean, valueEsn: string }
    getImei(): { returnType: boolean, valueImei: string }
    getImeiSoftwareVersion(): { returnType: boolean, valueImeiSoftwareVersion: string }
    getMeid(): { returnType: boolean, valueMeid: string }
    getResult(): boolean
    ref(): MessageDmsGetIdsOutput
    unref(): void
    static name: string
}
export class MessageDmsGetMacAddressInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetMacAddressInput */
    getDevice(): { returnType: boolean, valueDevice: DmsMacType }
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
    getMacAddress(): { returnType: boolean, valueMacAddress: any[] }
    getResult(): boolean
    ref(): MessageDmsGetMacAddressOutput
    unref(): void
    static name: string
}
export class MessageDmsGetManufacturerOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetManufacturerOutput */
    getManufacturer(): { returnType: boolean, valueManufacturer: string }
    getResult(): boolean
    ref(): MessageDmsGetManufacturerOutput
    unref(): void
    static name: string
}
export class MessageDmsGetModelOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetModelOutput */
    getModel(): { returnType: boolean, valueModel: string }
    getResult(): boolean
    ref(): MessageDmsGetModelOutput
    unref(): void
    static name: string
}
export class MessageDmsGetMsisdnOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetMsisdnOutput */
    getMsisdn(): { returnType: boolean, valueMsisdn: string }
    getResult(): boolean
    ref(): MessageDmsGetMsisdnOutput
    unref(): void
    static name: string
}
export class MessageDmsGetOperatingModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetOperatingModeOutput */
    getHardwareRestrictedMode(): { returnType: boolean, valueHardwareRestrictedMode: boolean }
    getMode(): { returnType: boolean, valueMode: DmsOperatingMode }
    getOfflineReason(): { returnType: boolean, valueOfflineReason: DmsOfflineReason }
    getResult(): boolean
    ref(): MessageDmsGetOperatingModeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetPowerStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetPowerStateOutput */
    getInfo(): { returnType: boolean, valueInfoPowerStateFlags: number, valueInfoBatteryLevel: number }
    getResult(): boolean
    ref(): MessageDmsGetPowerStateOutput
    unref(): void
    static name: string
}
export class MessageDmsGetPrlVersionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetPrlVersionOutput */
    getPrlOnlyPreference(): { returnType: boolean, valuePrlOnlyPreference: boolean }
    getResult(): boolean
    getVersion(): { returnType: boolean, valueVersion: number }
    ref(): MessageDmsGetPrlVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetRevisionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetRevisionOutput */
    getResult(): boolean
    getRevision(): { returnType: boolean, valueRevision: string }
    ref(): MessageDmsGetRevisionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetSoftwareVersionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetSoftwareVersionOutput */
    getResult(): boolean
    getVersion(): { returnType: boolean, valueVersion: string }
    ref(): MessageDmsGetSoftwareVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetStoredImageInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetStoredImageInfoInput */
    getImage(): { returnType: boolean, valueImage: MessageDmsGetStoredImageInfoInputImage }
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
    getBootVersion(): { returnType: boolean, valueBootVersionMajorVersion: number, valueBootVersionMinorVersion: number }
    getOemLockId(): { returnType: boolean, valueOemLockId: number }
    getPriVersion(): { returnType: boolean, valuePriVersionPriVersion: number, valuePriVersionPriInfo: string }
    getResult(): boolean
    ref(): MessageDmsGetStoredImageInfoOutput
    unref(): void
    static name: string
}
export class MessageDmsGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] }
    getResult(): boolean
    ref(): MessageDmsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetTimeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetTimeOutput */
    getDeviceTime(): { returnType: boolean, valueDeviceTimeTimeCount: number, valueDeviceTimeTimeSource: DmsTimeSource }
    getResult(): boolean
    getSystemTime(): { returnType: boolean, valueSystemTime: number }
    getUserTime(): { returnType: boolean, valueUserTime: number }
    ref(): MessageDmsGetTimeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetUserLockStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetUserLockStateOutput */
    getEnabled(): { returnType: boolean, valueEnabled: boolean }
    getResult(): boolean
    ref(): MessageDmsGetUserLockStateOutput
    unref(): void
    static name: string
}
export class MessageDmsHpChangeDeviceModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsHpChangeDeviceModeInput */
    getMode(): { returnType: boolean, valueMode: DmsHpDeviceMode }
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
    getList(): { returnType: boolean, valueList: MessageDmsListStoredImagesOutputListImage[] }
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
    getEriFile(): { returnType: boolean, valueEriFile: any[] }
    getResult(): boolean
    ref(): MessageDmsReadEriFileOutput
    unref(): void
    static name: string
}
export class MessageDmsReadUserDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsReadUserDataOutput */
    getResult(): boolean
    getUserData(): { returnType: boolean, valueUserData: any[] }
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
    getServiceProgrammingCode(): { returnType: boolean, valueServiceProgrammingCode: string }
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
    getConfig(): { returnType: boolean, valueConfig: boolean }
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
    getMode(): { returnType: boolean, valueMode: DmsBootImageDownloadMode }
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
    getActivationStateReporting(): { returnType: boolean, valueActivationStateReporting: boolean }
    getBatteryLevelReportLimits(): { returnType: boolean, valueBatteryLevelReportLimitsLowerLimit: number, valueBatteryLevelReportLimitsUpperLimit: number }
    getOperatingModeReporting(): { returnType: boolean, valueOperatingModeReporting: boolean }
    getPinStateReporting(): { returnType: boolean, valuePinStateReporting: boolean }
    getPowerStateReporting(): { returnType: boolean, valuePowerStateReporting: boolean }
    getPrlInitReporting(): { returnType: boolean, valuePrlInitReporting: boolean }
    getUimStateReporting(): { returnType: boolean, valueUimStateReporting: boolean }
    getWirelessDisableStateReporting(): { returnType: boolean, valueWirelessDisableStateReporting: boolean }
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
    getDownloadOverride(): { returnType: boolean, valueDownloadOverride: boolean }
    getList(): { returnType: boolean, valueList: MessageDmsSetFirmwarePreferenceInputListImage[] }
    getModemStorageIndex(): { returnType: boolean, valueModemStorageIndex: number }
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
    getImageDownloadList(): { returnType: boolean, valueImageDownloadList: DmsFirmwareImageType[] }
    getResult(): boolean
    ref(): MessageDmsSetFirmwarePreferenceOutput
    unref(): void
    static name: string
}
export class MessageDmsSetOperatingModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetOperatingModeInput */
    getMode(): { returnType: boolean, valueMode: DmsOperatingMode }
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
    getCurrentCode(): { returnType: boolean, valueCurrentCode: string }
    getNewCode(): { returnType: boolean, valueNewCode: string }
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
    getTimeReferenceType(): { returnType: boolean, valueTimeReferenceType: DmsTimeReferenceType }
    getTimeValue(): { returnType: boolean, valueTimeValue: number }
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
    getInfo(): { returnType: boolean, valueInfoOldCode: string, valueInfoNewCode: string }
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
    getInfo(): { returnType: boolean, valueInfoEnabled: boolean, valueInfoLockCode: string }
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
    getAmssVersion(): { returnType: boolean, valueAmssVersion: string }
    getBootVersion(): { returnType: boolean, valueBootVersion: string }
    getCarrier(): { returnType: boolean, valueCarrier: string }
    getCarrierId(): { returnType: boolean, valueCarrierId: string }
    getConfigVersion(): { returnType: boolean, valueConfigVersion: string }
    getModel(): { returnType: boolean, valueModel: string }
    getPackageId(): { returnType: boolean, valuePackageId: string }
    getPriVersion(): { returnType: boolean, valuePriVersion: string }
    getResult(): boolean
    getSkuId(): { returnType: boolean, valueSkuId: string }
    ref(): MessageDmsSwiGetCurrentFirmwareOutput
    unref(): void
    static name: string
}
export class MessageDmsSwiGetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiGetUsbCompositionOutput */
    getCurrent(): { returnType: boolean, valueCurrent: DmsSwiUsbComposition }
    getResult(): boolean
    getSupported(): { returnType: boolean, valueSupported: DmsSwiUsbComposition[] }
    ref(): MessageDmsSwiGetUsbCompositionOutput
    unref(): void
    static name: string
}
export class MessageDmsSwiSetUsbCompositionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiSetUsbCompositionInput */
    getCurrent(): { returnType: boolean, valueCurrent: DmsSwiUsbComposition }
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
    getInfo(): { returnType: boolean, valueInfoPinId: DmsUimPinId, valueInfoOldPin: string, valueInfoNewPin: string }
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
    getPinRetriesStatus(): { returnType: boolean, valuePinRetriesStatusVerifyRetriesLeft: number, valuePinRetriesStatusUnblockRetriesLeft: number }
    getResult(): boolean
    ref(): MessageDmsUimChangePinOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetCkStatusInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetCkStatusInput */
    getFacility(): { returnType: boolean, valueFacility: DmsUimFacility }
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
    getCkStatus(): { returnType: boolean, valueCkStatusFacilityState: DmsUimFacilityState, valueCkStatusVerifyRetriesLeft: number, valueCkStatusUnblockRetriesLeft: number }
    getOperationBlockingFacility(): { returnType: boolean, valueOperationBlockingFacility: boolean }
    getResult(): boolean
    ref(): MessageDmsUimGetCkStatusOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetIccidOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetIccidOutput */
    getIccid(): { returnType: boolean, valueIccid: string }
    getResult(): boolean
    ref(): MessageDmsUimGetIccidOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetImsiOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetImsiOutput */
    getImsi(): { returnType: boolean, valueImsi: string }
    getResult(): boolean
    ref(): MessageDmsUimGetImsiOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetPinStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetPinStatusOutput */
    getPin1Status(): { returnType: boolean, valuePin1StatusCurrentStatus: DmsUimPinStatus, valuePin1StatusVerifyRetriesLeft: number, valuePin1StatusUnblockRetriesLeft: number }
    getPin2Status(): { returnType: boolean, valuePin2StatusCurrentStatus: DmsUimPinStatus, valuePin2StatusVerifyRetriesLeft: number, valuePin2StatusUnblockRetriesLeft: number }
    getResult(): boolean
    ref(): MessageDmsUimGetPinStatusOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetStateOutput */
    getResult(): boolean
    getState(): { returnType: boolean, valueState: DmsUimState }
    ref(): MessageDmsUimGetStateOutput
    unref(): void
    static name: string
}
export class MessageDmsUimSetCkProtectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetCkProtectionInput */
    getFacility(): { returnType: boolean, valueFacilityFacility: DmsUimFacility, valueFacilityFacilityState: DmsUimFacilityState, valueFacilityFacilityDepersonalizationControlKey: string }
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
    getVerifyRetriesLeft(): { returnType: boolean, valueVerifyRetriesLeft: number }
    ref(): MessageDmsUimSetCkProtectionOutput
    unref(): void
    static name: string
}
export class MessageDmsUimSetPinProtectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetPinProtectionInput */
    getInfo(): { returnType: boolean, valueInfoPinId: DmsUimPinId, valueInfoProtectionEnabled: boolean, valueInfoPin: string }
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
    getPinRetriesStatus(): { returnType: boolean, valuePinRetriesStatusVerifyRetriesLeft: number, valuePinRetriesStatusUnblockRetriesLeft: number }
    getResult(): boolean
    ref(): MessageDmsUimSetPinProtectionOutput
    unref(): void
    static name: string
}
export class MessageDmsUimUnblockCkInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockCkInput */
    getFacility(): { returnType: boolean, valueFacilityFacility: DmsUimFacility, valueFacilityFacilityControlKey: string }
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
    getUnblockRetriesLeft(): { returnType: boolean, valueUnblockRetriesLeft: number }
    ref(): MessageDmsUimUnblockCkOutput
    unref(): void
    static name: string
}
export class MessageDmsUimUnblockPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockPinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: DmsUimPinId, valueInfoPuk: string, valueInfoNewPin: string }
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
    getPinRetriesStatus(): { returnType: boolean, valuePinRetriesStatusVerifyRetriesLeft: number, valuePinRetriesStatusUnblockRetriesLeft: number }
    getResult(): boolean
    ref(): MessageDmsUimUnblockPinOutput
    unref(): void
    static name: string
}
export class MessageDmsUimVerifyPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimVerifyPinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: DmsUimPinId, valueInfoPin: string }
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
    getPinRetriesStatus(): { returnType: boolean, valuePinRetriesStatusVerifyRetriesLeft: number, valuePinRetriesStatusUnblockRetriesLeft: number }
    getResult(): boolean
    ref(): MessageDmsUimVerifyPinOutput
    unref(): void
    static name: string
}
export class MessageDmsValidateServiceProgrammingCodeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsValidateServiceProgrammingCodeInput */
    getServiceProgrammingCode(): { returnType: boolean, valueServiceProgrammingCode: string }
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
    getUserData(): { returnType: boolean, valueUserData: any[] }
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
export class MessageDsdGetApnInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdGetApnInfoInput */
    getApnType(): { returnType: boolean, valueApnType: DsdApnType }
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
    getApnName(): { returnType: boolean, valueApnName: string }
    getResult(): boolean
    ref(): MessageDsdGetApnInfoOutput
    unref(): void
    static name: string
}
export class MessageDsdSetApnTypeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdSetApnTypeInput */
    getApnType(): { returnType: boolean, valueApnTypeName: string, valueApnTypeType: DsdApnTypePreference }
    getApnTypePreferenceMask(): { returnType: boolean, valueApnTypePreferenceMask: DsdApnTypePreference }
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
    getMode(): { returnType: boolean, valueMode: GasFirmwareListingMode }
    getName(): { returnType: boolean, valueName: string }
    getSlotIndex(): { returnType: boolean, valueSlotIndex: number }
    getVersion(): { returnType: boolean, valueVersion: string }
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
    getMode(): { returnType: boolean, valueMode: GasFirmwareListingMode }
    getResult(): boolean
    getStoredFirmware1(): { returnType: boolean, valueStoredFirmware1Index: number, valueStoredFirmware1Name: string, valueStoredFirmware1Version: string, valueStoredFirmware1PriRevision: string }
    getStoredFirmware2(): { returnType: boolean, valueStoredFirmware2Index: number, valueStoredFirmware2Name: string, valueStoredFirmware2Version: string, valueStoredFirmware2PriRevision: string }
    getStoredFirmware3(): { returnType: boolean, valueStoredFirmware3Index: number, valueStoredFirmware3Name: string, valueStoredFirmware3Version: string, valueStoredFirmware3PriRevision: string }
    getStoredFirmware4(): { returnType: boolean, valueStoredFirmware4Index: number, valueStoredFirmware4Name: string, valueStoredFirmware4Version: string, valueStoredFirmware4PriRevision: string }
    ref(): MessageGasDmsGetFirmwareListOutput
    unref(): void
    static name: string
}
export class MessageGasDmsSetActiveFirmwareInput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetActiveFirmwareInput */
    getCarrierName(): { returnType: boolean, valueCarrierName: string }
    getSlotIndex(): { returnType: boolean, valueSlotIndex: number }
    getVersion(): { returnType: boolean, valueVersion: string }
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
export class MessageGmsTestGetValueOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGmsTestGetValueOutput */
    getResult(): boolean
    getTestMandatoryValue(): { returnType: boolean, valueTestMandatoryValue: number }
    getTestOptionalValue(): { returnType: boolean, valueTestOptionalValue: number }
    ref(): MessageGmsTestGetValueOutput
    unref(): void
    static name: string
}
export class MessageGmsTestSetValueInput {
    /* Methods of Qmi-1.0.Qmi.MessageGmsTestSetValueInput */
    getTestMandatoryValue(): { returnType: boolean, valueTestMandatoryValue: number }
    getTestOptionalValue(): { returnType: boolean, valueTestOptionalValue: number }
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
    getDeleteAll(): { returnType: boolean, valueDeleteAll: boolean }
    getDeleteCellDatabaseMask(): { returnType: boolean, valueDeleteCellDatabaseMask: LocDeleteCellDatabase }
    getDeleteClockInfoMask(): { returnType: boolean, valueDeleteClockInfoMask: LocDeleteClockInfo }
    getDeleteGnssDataMask(): { returnType: boolean, valueDeleteGnssDataMask: LocDeleteGnssData }
    getDeleteSvInfo(): { returnType: boolean, valueDeleteSvInfo: MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[] }
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
    getServerAddressType(): { returnType: boolean, valueServerAddressType: LocServerAddressType }
    getServerType(): { returnType: boolean, valueServerType: LocServerType }
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
    getFormatType(): { returnType: boolean, valueFormatType: LocPredictedOrbitsDataFormat }
    getPartData(): { returnType: boolean, valuePartData: any[] }
    getPartNumber(): { returnType: boolean, valuePartNumber: number }
    getTotalParts(): { returnType: boolean, valueTotalParts: number }
    getTotalSize(): { returnType: boolean, valueTotalSize: number }
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
    getPartData(): { returnType: boolean, valuePartData: any[] }
    getPartNumber(): { returnType: boolean, valuePartNumber: number }
    getTotalParts(): { returnType: boolean, valueTotalParts: number }
    getTotalSize(): { returnType: boolean, valueTotalSize: number }
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
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: LocEventRegistrationFlag }
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
    getLockType(): { returnType: boolean, valueLockType: LocLockType }
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
    getNmeaTypes(): { returnType: boolean, valueNmeaTypes: LocNmeaType }
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
    getOperationMode(): { returnType: boolean, valueOperationMode: LocOperationMode }
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
    getIpv4(): { returnType: boolean, valueIpv4Ipv4Address: number, valueIpv4Ipv4Port: number }
    getIpv6(): { returnType: boolean, valueIpv6Ipv6Address: number[], valueIpv6Ipv6Port: number }
    getServerType(): { returnType: boolean, valueServerType: LocServerType }
    getUrl(): { returnType: boolean, valueUrl: string }
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
    getFixRecurrenceType(): { returnType: boolean, valueFixRecurrenceType: LocFixRecurrenceType }
    getIntermediateReportState(): { returnType: boolean, valueIntermediateReportState: LocIntermediateReportState }
    getMinimumIntervalBetweenPositionReports(): { returnType: boolean, valueMinimumIntervalBetweenPositionReports: number }
    getSessionId(): { returnType: boolean, valueSessionId: number }
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
    getSessionId(): { returnType: boolean, valueSessionId: number }
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
    getAction(): { returnType: boolean, valueAction: NasPsAttachAction }
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
    getEcioThreshold(): { returnType: boolean, valueEcioThreshold: number[] }
    getIoThreshold(): { returnType: boolean, valueIoThreshold: number[] }
    getLteReport(): { returnType: boolean, valueLteReportRate: number, valueLteReportAveragePeriod: number }
    getLteSnrThreshold(): { returnType: boolean, valueLteSnrThreshold: number[] }
    getRscpThreshold(): { returnType: boolean, valueRscpThreshold: any[] }
    getRsrpThreshold(): { returnType: boolean, valueRsrpThreshold: number[] }
    getRsrqThreshold(): { returnType: boolean, valueRsrqThreshold: any[] }
    getRssiThreshold(): { returnType: boolean, valueRssiThreshold: any[] }
    getSinrThreshold(): { returnType: boolean, valueSinrThreshold: any[] }
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
    getCdmaPositionInfo(): { returnType: boolean, valueCdmaPositionInfoUiInIdleMode: number, valueCdmaPositionInfoBasestations: MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation[] }
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
    getCdmaInfo(): { returnType: boolean, valueCdmaInfoSystemId: number, valueCdmaInfoNetworkId: number, valueCdmaInfoBaseStationId: number, valueCdmaInfoReferencePn: number, valueCdmaInfoLatitude: number, valueCdmaInfoLongitude: number }
    getGeranInfoV2(): { returnType: boolean, valueGeranInfoV2CellId: number, valueGeranInfoV2Plmn: any[], valueGeranInfoV2Lac: number, valueGeranInfoV2GeranAbsoluteRfChannelNumber: number, valueGeranInfoV2BaseStationIdentityCode: number, valueGeranInfoV2TimingAdvance: number, valueGeranInfoV2RxLevel: number, valueGeranInfoV2Cell: MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement[] }
    getInterfrequencyLteInfo(): { returnType: boolean, valueInterfrequencyLteInfoUeInIdle: boolean, valueInterfrequencyLteInfoFrequency: MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement[] }
    getIntrafrequencyLteInfoV2(): { returnType: boolean, valueIntrafrequencyLteInfoV2UeInIdle: boolean, valueIntrafrequencyLteInfoV2Plmn: any[], valueIntrafrequencyLteInfoV2TrackingAreaCode: number, valueIntrafrequencyLteInfoV2GlobalCellId: number, valueIntrafrequencyLteInfoV2EutraAbsoluteRfChannelNumber: number, valueIntrafrequencyLteInfoV2ServingCellId: number, valueIntrafrequencyLteInfoV2CellReselectionPriority: number, valueIntrafrequencyLteInfoV2SNonIntraSearchThreshold: number, valueIntrafrequencyLteInfoV2ServingCellLowThreshold: number, valueIntrafrequencyLteInfoV2SIntraSearchThreshold: number, valueIntrafrequencyLteInfoV2Cell: MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement[] }
    getLteInfoNeighboringGsm(): { returnType: boolean, valueLteInfoNeighboringGsmUeInIdle: boolean, valueLteInfoNeighboringGsmFrequency: MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement[] }
    getLteInfoNeighboringWcdma(): { returnType: boolean, valueLteInfoNeighboringWcdmaUeInIdle: boolean, valueLteInfoNeighboringWcdmaFrequency: MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement[] }
    getLteInfoTimingAdvance(): { returnType: boolean, valueLteInfoTimingAdvance: number }
    getResult(): boolean
    getUmtsCellId(): { returnType: boolean, valueUmtsCellId: number }
    getUmtsInfoNeighboringLte(): { returnType: boolean, valueUmtsInfoNeighboringLteRrcState: NasWcdmaRrcState, valueUmtsInfoNeighboringLteFrequency: MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement[] }
    getUmtsInfoV2(): { returnType: boolean, valueUmtsInfoV2CellId: number, valueUmtsInfoV2Plmn: any[], valueUmtsInfoV2Lac: number, valueUmtsInfoV2UtraAbsoluteRfChannelNumber: number, valueUmtsInfoV2PrimaryScramblingCode: number, valueUmtsInfoV2Rscp: number, valueUmtsInfoV2Ecio: number, valueUmtsInfoV2Cell: MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement[], valueUmtsInfoV2NeighboringGeran: MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement[] }
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
    getInfo(): { returnType: boolean, valueInfo: NasDrx }
    getResult(): boolean
    ref(): MessageNasGetDrxOutput
    unref(): void
    static name: string
}
export class MessageNasGetHomeNetworkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetHomeNetworkOutput */
    getHomeNetwork(): { returnType: boolean, valueHomeNetworkMcc: number, valueHomeNetworkMnc: number, valueHomeNetworkDescription: string }
    getHomeNetwork3gpp2Ext(): { returnType: boolean, valueHomeNetwork3gpp2ExtMcc: number, valueHomeNetwork3gpp2ExtMnc: number, valueHomeNetwork3gpp2ExtDisplayDescription: NasNetworkDescriptionDisplay, valueHomeNetwork3gpp2ExtDescriptionEncoding: NasNetworkDescriptionEncoding, valueHomeNetwork3gpp2ExtDescription: any[] }
    getHomeNetwork3gppMnc(): { returnType: boolean, valueHomeNetwork3gppMncIs3gpp: boolean, valueHomeNetwork3gppMncIncludesPcsDigit: boolean }
    getHomeSystemId(): { returnType: boolean, valueHomeSystemIdSid: number, valueHomeSystemIdNid: number }
    getNetworkNameSource(): { returnType: boolean, valueNetworkNameSource: NasNetworkNameSource }
    getResult(): boolean
    ref(): MessageNasGetHomeNetworkOutput
    unref(): void
    static name: string
}
export class MessageNasGetLteCphyCaInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetLteCphyCaInfoOutput */
    getDlBandwidth(): { returnType: boolean, valueDlBandwidth: NasDLBandwidth }
    getPhyCaAggPcellInfo(): { returnType: boolean, valuePhyCaAggPcellInfoPhysicalCellId: number, valuePhyCaAggPcellInfoRxChannel: number, valuePhyCaAggPcellInfoDlBandwidth: NasDLBandwidth, valuePhyCaAggPcellInfoLteBand: NasActiveBand }
    getPhyCaAggScellInfo(): { returnType: boolean, valuePhyCaAggScellInfoPhysicalCellId: number, valuePhyCaAggScellInfoRxChannel: number, valuePhyCaAggScellInfoDlBandwidth: NasDLBandwidth, valuePhyCaAggScellInfoLteBand: NasActiveBand, valuePhyCaAggScellInfoState: NasScellState }
    getPhyCaAggSecondaryCells(): { returnType: boolean, valuePhyCaAggSecondaryCells: MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc[] }
    getResult(): boolean
    getScellIndex(): { returnType: boolean, valueScellIndex: number }
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
    getNitzInformation(): { returnType: boolean, valueNitzInformationNameEncoding: NasPlmnEncodingScheme, valueNitzInformationShortCountryInitials: NasPlmnNameCountryInitials, valueNitzInformationLongNameSpareBits: NasPlmnNameSpareBits, valueNitzInformationShortNameSpareBits: NasPlmnNameSpareBits, valueNitzInformationLongName: any[], valueNitzInformationShortName: any[] }
    getOperatorPlmnList(): { returnType: boolean, valueOperatorPlmnList: MessageNasGetOperatorNameOutputOperatorPlmnListElement[] }
    getOperatorPlmnName(): { returnType: boolean, valueOperatorPlmnName: MessageNasGetOperatorNameOutputOperatorPlmnNameElement[] }
    getOperatorStringName(): { returnType: boolean, valueOperatorStringName: string }
    getResult(): boolean
    getServiceProviderName(): { returnType: boolean, valueServiceProviderNameNameDisplayCondition: NasNetworkNameDisplayCondition, valueServiceProviderNameName: string }
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
    getAlwaysSendPlmnName(): { returnType: boolean, valueAlwaysSendPlmnName: boolean }
    getCsgId(): { returnType: boolean, valueCsgId: number }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: boolean }
    getPlmn(): { returnType: boolean, valuePlmnMcc: number, valuePlmnMnc: number }
    getRadioAccessTechnology(): { returnType: boolean, valueRadioAccessTechnology: NasRadioInterface }
    getSendAllInformation(): { returnType: boolean, valueSendAllInformation: boolean }
    getSuppressSimError(): { returnType: boolean, valueSuppressSimError: boolean }
    getUseStaticTableOnly(): { returnType: boolean, valueUseStaticTableOnly: boolean }
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
    get3gppEonsPlmnName(): { returnType: boolean, value3gppEonsPlmnNameServiceProviderNameEncoding: NasNetworkDescriptionEncoding, value3gppEonsPlmnNameServiceProviderName: any[], value3gppEonsPlmnNameShortNameEncoding: NasNetworkDescriptionEncoding, value3gppEonsPlmnNameShortNameCountryInitials: NasPlmnNameCountryInitials, value3gppEonsPlmnNameShortNameSpareBits: NasPlmnNameSpareBits, value3gppEonsPlmnNameShortName: any[], value3gppEonsPlmnNameLongNameEncoding: NasNetworkDescriptionEncoding, value3gppEonsPlmnNameLongNameCountryInitials: NasPlmnNameCountryInitials, value3gppEonsPlmnNameLongNameSpareBits: NasPlmnNameSpareBits, value3gppEonsPlmnNameLongName: any[] }
    getAdditionalInformation(): { returnType: boolean, valueAdditionalInformation: number[] }
    getDisplayBitInformation(): { returnType: boolean, valueDisplayBitInformationServiceProviderNameSet: NasBoolean, valueDisplayBitInformationPlmnNameSet: NasBoolean }
    getNetworkInformation(): { returnType: boolean, valueNetworkInformation: NasBoolean }
    getNetworkNameSource(): { returnType: boolean, valueNetworkNameSource: NasNetworkNameSource }
    getPlmnNameWithLanguageId(): { returnType: boolean, valuePlmnNameWithLanguageId: MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement[] }
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
export class MessageNasGetRfBandInformationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutput */
    getBandwidthList(): { returnType: boolean, valueBandwidthList: MessageNasGetRfBandInformationOutputBandwidthListElement[] }
    getExtendedList(): { returnType: boolean, valueExtendedList: MessageNasGetRfBandInformationOutputExtendedListElement[] }
    getList(): { returnType: boolean, valueList: MessageNasGetRfBandInformationOutputListElement[] }
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
    getCallBarringStatus(): { returnType: boolean, valueCallBarringStatusCsStatus: NasCallBarringStatus, valueCallBarringStatusPsStatus: NasCallBarringStatus }
    getCdmaBaseStationInfo(): { returnType: boolean, valueCdmaBaseStationInfoBaseStationId: number, valueCdmaBaseStationInfoBaseStationLatitude: number, valueCdmaBaseStationInfoBaseStationLongitude: number }
    getCdmaPRev(): { returnType: boolean, valueCdmaPRev: number }
    getCdmaSystemId(): { returnType: boolean, valueCdmaSystemIdSid: number, valueCdmaSystemIdNid: number }
    getCdmaSystemInfo(): { returnType: boolean, valueCdmaSystemInfoMcc: number, valueCdmaSystemInfoImsi1112: number }
    getCid3gpp(): { returnType: boolean, valueCid3gpp: number }
    getConcurrentServiceInfo3gpp2(): { returnType: boolean, valueConcurrentServiceInfo3gpp2: boolean }
    getCurrentPlmn(): { returnType: boolean, valueCurrentPlmnMcc: number, valueCurrentPlmnMnc: number, valueCurrentPlmnDescription: string }
    getDataServiceCapability(): { returnType: boolean, valueDataServiceCapability: NasDataCapability[] }
    getDaylightSavingTimeAdjustment3gpp(): { returnType: boolean, valueDaylightSavingTimeAdjustment3gpp: number }
    getDefaultRoamingIndicator(): { returnType: boolean, valueDefaultRoamingIndicator: NasRoamingIndicatorStatus }
    getDetailedServiceStatus(): { returnType: boolean, valueDetailedServiceStatusStatus: NasServiceStatus, valueDetailedServiceStatusCapability: NasNetworkServiceDomain, valueDetailedServiceStatusHdrStatus: NasServiceStatus, valueDetailedServiceStatusHdrHybrid: boolean, valueDetailedServiceStatusForbidden: boolean }
    getDtmSupport(): { returnType: boolean, valueDtmSupport: boolean }
    getHdrPersonality(): { returnType: boolean, valueHdrPersonality: NasHdrPersonality }
    getLac3gpp(): { returnType: boolean, valueLac3gpp: number }
    getLteTac(): { returnType: boolean, valueLteTac: number }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatusMcc: number, valueMncPcsDigitIncludeStatusMnc: number, valueMncPcsDigitIncludeStatusIncludesPcsDigit: boolean }
    getNetworkNameSource(): { returnType: boolean, valueNetworkNameSource: NasNetworkNameSource }
    getPrlIndicator3gpp2(): { returnType: boolean, valuePrlIndicator3gpp2: boolean }
    getResult(): boolean
    getRoamingIndicator(): { returnType: boolean, valueRoamingIndicator: NasRoamingIndicatorStatus }
    getRoamingIndicatorList(): { returnType: boolean, valueRoamingIndicatorList: MessageNasGetServingSystemOutputRoamingIndicatorListElement[] }
    getServingSystem(): { returnType: boolean, valueServingSystemRegistrationState: NasRegistrationState, valueServingSystemCsAttachState: NasAttachState, valueServingSystemPsAttachState: NasAttachState, valueServingSystemSelectedNetwork: NasNetworkType, valueServingSystemRadioInterfaces: NasRadioInterface[] }
    getTimeZone3gpp(): { returnType: boolean, valueTimeZone3gpp: number }
    getTimeZone3gpp2(): { returnType: boolean, valueTimeZone3gpp2LeapSeconds: number, valueTimeZone3gpp2LocalTimeOffset: number, valueTimeZone3gpp2DaylightSavingTime: boolean }
    getUmtsPrimaryScramblingCode(): { returnType: boolean, valueUmtsPrimaryScramblingCode: number }
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
    get5gSignalStrength(): { returnType: boolean, value5gSignalStrengthRsrp: number, value5gSignalStrengthSnr: number }
    get5gSignalStrengthExtended(): { returnType: boolean, value5gSignalStrengthExtended: number }
    getCdmaSignalStrength(): { returnType: boolean, valueCdmaSignalStrengthRssi: number, valueCdmaSignalStrengthEcio: number }
    getGsmSignalStrength(): { returnType: boolean, valueGsmSignalStrength: number }
    getHdrSignalStrength(): { returnType: boolean, valueHdrSignalStrengthRssi: number, valueHdrSignalStrengthEcio: number, valueHdrSignalStrengthSinr: NasEvdoSinrLevel, valueHdrSignalStrengthIo: number }
    getLteSignalStrength(): { returnType: boolean, valueLteSignalStrengthRssi: number, valueLteSignalStrengthRsrq: number, valueLteSignalStrengthRsrp: number, valueLteSignalStrengthSnr: number }
    getResult(): boolean
    getTdmaSignalStrength(): { returnType: boolean, valueTdmaSignalStrength: number }
    getTdmaSignalStrengthExtended(): { returnType: boolean, valueTdmaSignalStrengthExtendedRssi: number, valueTdmaSignalStrengthExtendedRscp: number, valueTdmaSignalStrengthExtendedEcio: number, valueTdmaSignalStrengthExtendedSinr: number }
    getWcdmaSignalStrength(): { returnType: boolean, valueWcdmaSignalStrengthRssi: number, valueWcdmaSignalStrengthEcio: number }
    ref(): MessageNasGetSignalInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetSignalStrengthInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSignalStrengthInput */
    getRequestMask(): { returnType: boolean, valueRequestMask: NasSignalStrengthRequest }
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
    getEcioList(): { returnType: boolean, valueEcioList: MessageNasGetSignalStrengthOutputEcioListElement[] }
    getErrorRateList(): { returnType: boolean, valueErrorRateList: MessageNasGetSignalStrengthOutputErrorRateListElement[] }
    getIo(): { returnType: boolean, valueIo: number }
    getLteRsrp(): { returnType: boolean, valueLteRsrp: number }
    getLteSnr(): { returnType: boolean, valueLteSnr: number }
    getResult(): boolean
    getRsrq(): { returnType: boolean, valueRsrqRsrq: number, valueRsrqRadioInterface: NasRadioInterface }
    getRssiList(): { returnType: boolean, valueRssiList: MessageNasGetSignalStrengthOutputRssiListElement[] }
    getSignalStrength(): { returnType: boolean, valueSignalStrengthStrength: number, valueSignalStrengthRadioInterface: NasRadioInterface }
    getSinr(): { returnType: boolean, valueSinr: NasEvdoSinrLevel }
    getStrengthList(): { returnType: boolean, valueStrengthList: MessageNasGetSignalStrengthOutputStrengthListElement[] }
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
    getList(): { returnType: boolean, valueList: any[] }
    getResult(): boolean
    ref(): MessageNasGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageNasGetSystemInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSystemInfoOutput */
    getAdditionalCdmaSystemInfo(): { returnType: boolean, valueAdditionalCdmaSystemInfoGeoSystemIndex: number, valueAdditionalCdmaSystemInfoRegistrationPeriod: number }
    getAdditionalGsmSystemInfo(): { returnType: boolean, valueAdditionalGsmSystemInfoGeoSystemIndex: number, valueAdditionalGsmSystemInfoCellBroadcastSupport: NasCellBroadcastCapability }
    getAdditionalHdrSystemInfo(): { returnType: boolean, valueAdditionalHdrSystemInfoGeoSystemIndex: number }
    getAdditionalLteSystemInfo(): { returnType: boolean, valueAdditionalLteSystemInfoGeoSystemIndex: number }
    getAdditionalWcdmaSystemInfo(): { returnType: boolean, valueAdditionalWcdmaSystemInfoGeoSystemIndex: number, valueAdditionalWcdmaSystemInfoCellBroadcastSupport: NasCellBroadcastCapability }
    getCdmaRegistrationZoneId(): { returnType: boolean, valueCdmaRegistrationZoneId: number }
    getCdmaResolvedMcc(): { returnType: boolean, valueCdmaResolvedMcc: number }
    getCdmaServiceStatus(): { returnType: boolean, valueCdmaServiceStatusServiceStatus: NasServiceStatus, valueCdmaServiceStatusPreferredDataPath: boolean }
    getCdmaSystemInfo(): { returnType: boolean, valueCdmaSystemInfoDomainValid: boolean, valueCdmaSystemInfoDomain: NasNetworkServiceDomain, valueCdmaSystemInfoServiceCapabilityValid: boolean, valueCdmaSystemInfoServiceCapability: NasNetworkServiceDomain, valueCdmaSystemInfoRoamingStatusValid: boolean, valueCdmaSystemInfoRoamingStatus: NasRoamingStatus, valueCdmaSystemInfoForbiddenValid: boolean, valueCdmaSystemInfoForbidden: boolean, valueCdmaSystemInfoPrlMatchValid: boolean, valueCdmaSystemInfoPrlMatch: boolean, valueCdmaSystemInfoPRevValid: boolean, valueCdmaSystemInfoPRev: number, valueCdmaSystemInfoBaseStationPRevValid: boolean, valueCdmaSystemInfoBaseStationPRev: number, valueCdmaSystemInfoConcurrentServiceSupportValid: boolean, valueCdmaSystemInfoConcurrentServiceSupport: boolean, valueCdmaSystemInfoCdmaSystemIdValid: boolean, valueCdmaSystemInfoSid: number, valueCdmaSystemInfoNid: number, valueCdmaSystemInfoBaseStationInfoValid: boolean, valueCdmaSystemInfoBaseStationId: number, valueCdmaSystemInfoBaseStationLatitude: number, valueCdmaSystemInfoBaseStationLongitude: number, valueCdmaSystemInfoPacketZoneValid: boolean, valueCdmaSystemInfoPacketZone: number, valueCdmaSystemInfoNetworkIdValid: boolean, valueCdmaSystemInfoMcc: string, valueCdmaSystemInfoMnc: string }
    getGsmCallBarringStatus(): { returnType: boolean, valueGsmCallBarringStatusCsStatus: NasCallBarringStatus, valueGsmCallBarringStatusPsStatus: NasCallBarringStatus }
    getGsmCipherDomain(): { returnType: boolean, valueGsmCipherDomain: NasNetworkServiceDomain }
    getGsmRoutingAreaCode(): { returnType: boolean, valueGsmRoutingAreaCode: number }
    getGsmServiceStatus(): { returnType: boolean, valueGsmServiceStatusServiceStatus: NasServiceStatus, valueGsmServiceStatusTrueServiceStatus: NasServiceStatus, valueGsmServiceStatusPreferredDataPath: boolean }
    getGsmSystemInfo(): { returnType: boolean, valueGsmSystemInfoDomainValid: boolean, valueGsmSystemInfoDomain: NasNetworkServiceDomain, valueGsmSystemInfoServiceCapabilityValid: boolean, valueGsmSystemInfoServiceCapability: NasNetworkServiceDomain, valueGsmSystemInfoRoamingStatusValid: boolean, valueGsmSystemInfoRoamingStatus: NasRoamingStatus, valueGsmSystemInfoForbiddenValid: boolean, valueGsmSystemInfoForbidden: boolean, valueGsmSystemInfoLacValid: boolean, valueGsmSystemInfoLac: number, valueGsmSystemInfoCidValid: boolean, valueGsmSystemInfoCid: number, valueGsmSystemInfoRegistrationRejectInfoValid: boolean, valueGsmSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain, valueGsmSystemInfoRegistrationRejectCause: number, valueGsmSystemInfoNetworkIdValid: boolean, valueGsmSystemInfoMcc: string, valueGsmSystemInfoMnc: string, valueGsmSystemInfoEgprsSupportValid: boolean, valueGsmSystemInfoEgprsSupport: boolean, valueGsmSystemInfoDtmSupportValid: boolean, valueGsmSystemInfoDtmSupport: boolean }
    getHdrServiceStatus(): { returnType: boolean, valueHdrServiceStatusServiceStatus: NasServiceStatus, valueHdrServiceStatusPreferredDataPath: boolean }
    getHdrSystemInfo(): { returnType: boolean, valueHdrSystemInfoDomainValid: boolean, valueHdrSystemInfoDomain: NasNetworkServiceDomain, valueHdrSystemInfoServiceCapabilityValid: boolean, valueHdrSystemInfoServiceCapability: NasNetworkServiceDomain, valueHdrSystemInfoRoamingStatusValid: boolean, valueHdrSystemInfoRoamingStatus: NasRoamingStatus, valueHdrSystemInfoForbiddenValid: boolean, valueHdrSystemInfoForbidden: boolean, valueHdrSystemInfoPrlMatchValid: boolean, valueHdrSystemInfoPrlMatch: boolean, valueHdrSystemInfoPersonalityValid: boolean, valueHdrSystemInfoPersonality: NasHdrPersonality, valueHdrSystemInfoProtocolRevisionValid: boolean, valueHdrSystemInfoProtocolRevision: NasHdrProtocolRevision, valueHdrSystemInfoIs856SystemIdValid: boolean, valueHdrSystemInfoIs856SystemId: string }
    getImsVoiceSupport(): { returnType: boolean, valueImsVoiceSupport: boolean }
    getLteCellAccessStatus(): { returnType: boolean, valueLteCellAccessStatus: NasLteCellAccessStatus }
    getLteEmbmsCoverageInfoSupport(): { returnType: boolean, valueLteEmbmsCoverageInfoSupport: boolean }
    getLteEmbmsCoverageInfoTraceId(): { returnType: boolean, valueLteEmbmsCoverageInfoTraceId: number }
    getLteRegistrationDomain(): { returnType: boolean, valueLteRegistrationDomain: NasLteRegistrationDomain }
    getLteServiceStatus(): { returnType: boolean, valueLteServiceStatusServiceStatus: NasServiceStatus, valueLteServiceStatusTrueServiceStatus: NasServiceStatus, valueLteServiceStatusPreferredDataPath: boolean }
    getLteSystemInfo(): { returnType: boolean, valueLteSystemInfoDomainValid: boolean, valueLteSystemInfoDomain: NasNetworkServiceDomain, valueLteSystemInfoServiceCapabilityValid: boolean, valueLteSystemInfoServiceCapability: NasNetworkServiceDomain, valueLteSystemInfoRoamingStatusValid: boolean, valueLteSystemInfoRoamingStatus: NasRoamingStatus, valueLteSystemInfoForbiddenValid: boolean, valueLteSystemInfoForbidden: boolean, valueLteSystemInfoLacValid: boolean, valueLteSystemInfoLac: number, valueLteSystemInfoCidValid: boolean, valueLteSystemInfoCid: number, valueLteSystemInfoRegistrationRejectInfoValid: boolean, valueLteSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain, valueLteSystemInfoRegistrationRejectCause: number, valueLteSystemInfoNetworkIdValid: boolean, valueLteSystemInfoMcc: string, valueLteSystemInfoMnc: string, valueLteSystemInfoTacValid: boolean, valueLteSystemInfoTac: number }
    getLteVoiceDomain(): { returnType: boolean, valueLteVoiceDomain: NasLteVoiceDomain }
    getLteVoiceSupport(): { returnType: boolean, valueLteVoiceSupport: boolean }
    getNetworkSelectionRegistrationRestriction(): { returnType: boolean, valueNetworkSelectionRegistrationRestriction: NasNetworkSelectionRegistrationRestriction }
    getResult(): boolean
    getSimRejectInfo(): { returnType: boolean, valueSimRejectInfo: NasSimRejectState }
    getTdScdmaServiceStatus(): { returnType: boolean, valueTdScdmaServiceStatusServiceStatus: NasServiceStatus, valueTdScdmaServiceStatusTrueServiceStatus: NasServiceStatus, valueTdScdmaServiceStatusPreferredDataPath: boolean }
    getTdScdmaSystemInfo(): { returnType: boolean, valueTdScdmaSystemInfoDomainValid: boolean, valueTdScdmaSystemInfoDomain: NasNetworkServiceDomain, valueTdScdmaSystemInfoServiceCapabilityValid: boolean, valueTdScdmaSystemInfoServiceCapability: NasNetworkServiceDomain, valueTdScdmaSystemInfoRoamingStatusValid: boolean, valueTdScdmaSystemInfoRoamingStatus: NasRoamingStatus, valueTdScdmaSystemInfoForbiddenValid: boolean, valueTdScdmaSystemInfoForbidden: boolean, valueTdScdmaSystemInfoLacValid: boolean, valueTdScdmaSystemInfoLac: number, valueTdScdmaSystemInfoCidValid: boolean, valueTdScdmaSystemInfoCid: number, valueTdScdmaSystemInfoRegistrationRejectInfoValid: boolean, valueTdScdmaSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain, valueTdScdmaSystemInfoRegistrationRejectCause: number, valueTdScdmaSystemInfoNetworkIdValid: boolean, valueTdScdmaSystemInfoMcc: string, valueTdScdmaSystemInfoMnc: string, valueTdScdmaSystemInfoHsCallStatusValid: boolean, valueTdScdmaSystemInfoHsCallStatus: NasWcdmaHsService, valueTdScdmaSystemInfoHsServiceValid: boolean, valueTdScdmaSystemInfoHsService: NasWcdmaHsService, valueTdScdmaSystemInfoCellParameterIdValid: boolean, valueTdScdmaSystemInfoCellParameterId: number, valueTdScdmaSystemInfoCellBroadcastSupportValid: boolean, valueTdScdmaSystemInfoCellBroadcastSupport: NasCellBroadcastCapability, valueTdScdmaSystemInfoCsCallBarringStatusValid: boolean, valueTdScdmaSystemInfoCsCallBarringStatus: NasCallBarringStatus, valueTdScdmaSystemInfoPsCallBarringStatusValid: boolean, valueTdScdmaSystemInfoPsCallBarringStatus: NasCallBarringStatus, valueTdScdmaSystemInfoCipherDomainValid: boolean, valueTdScdmaSystemInfoCipherDomain: NasNetworkServiceDomain }
    getWcdmaCallBarringStatus(): { returnType: boolean, valueWcdmaCallBarringStatusCsStatus: NasCallBarringStatus, valueWcdmaCallBarringStatusPsStatus: NasCallBarringStatus }
    getWcdmaCipherDomain(): { returnType: boolean, valueWcdmaCipherDomain: NasNetworkServiceDomain }
    getWcdmaRoutingAreaCode(): { returnType: boolean, valueWcdmaRoutingAreaCode: number }
    getWcdmaServiceStatus(): { returnType: boolean, valueWcdmaServiceStatusServiceStatus: NasServiceStatus, valueWcdmaServiceStatusTrueServiceStatus: NasServiceStatus, valueWcdmaServiceStatusPreferredDataPath: boolean }
    getWcdmaSystemInfo(): { returnType: boolean, valueWcdmaSystemInfoDomainValid: boolean, valueWcdmaSystemInfoDomain: NasNetworkServiceDomain, valueWcdmaSystemInfoServiceCapabilityValid: boolean, valueWcdmaSystemInfoServiceCapability: NasNetworkServiceDomain, valueWcdmaSystemInfoRoamingStatusValid: boolean, valueWcdmaSystemInfoRoamingStatus: NasRoamingStatus, valueWcdmaSystemInfoForbiddenValid: boolean, valueWcdmaSystemInfoForbidden: boolean, valueWcdmaSystemInfoLacValid: boolean, valueWcdmaSystemInfoLac: number, valueWcdmaSystemInfoCidValid: boolean, valueWcdmaSystemInfoCid: number, valueWcdmaSystemInfoRegistrationRejectInfoValid: boolean, valueWcdmaSystemInfoRegistrationRejectDomain: NasNetworkServiceDomain, valueWcdmaSystemInfoRegistrationRejectCause: number, valueWcdmaSystemInfoNetworkIdValid: boolean, valueWcdmaSystemInfoMcc: string, valueWcdmaSystemInfoMnc: string, valueWcdmaSystemInfoHsCallStatusValid: boolean, valueWcdmaSystemInfoHsCallStatus: NasWcdmaHsService, valueWcdmaSystemInfoHsServiceValid: boolean, valueWcdmaSystemInfoHsService: NasWcdmaHsService, valueWcdmaSystemInfoPrimaryScramblingCodeValid: boolean, valueWcdmaSystemInfoPrimaryScramblingCode: number }
    ref(): MessageNasGetSystemInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetSystemSelectionPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSystemSelectionPreferenceOutput */
    getAcquisitionOrderPreference(): { returnType: boolean, valueAcquisitionOrderPreference: NasRadioInterface[] }
    getBandPreference(): { returnType: boolean, valueBandPreference: NasBandPreference }
    getCdmaPrlPreference(): { returnType: boolean, valueCdmaPrlPreference: NasCdmaPrlPreference }
    getDisabledModes(): { returnType: boolean, valueDisabledModes: NasRatModePreference }
    getEmergencyMode(): { returnType: boolean, valueEmergencyMode: boolean }
    getExtendedLteBandPreference(): { returnType: boolean, valueExtendedLteBandPreferenceMaskLow: number, valueExtendedLteBandPreferenceMaskMidLow: number, valueExtendedLteBandPreferenceMaskMidHigh: number, valueExtendedLteBandPreferenceMaskHigh: number }
    getGsmWcdmaAcquisitionOrderPreference(): { returnType: boolean, valueGsmWcdmaAcquisitionOrderPreference: NasGsmWcdmaAcquisitionOrderPreference }
    getLteBandPreference(): { returnType: boolean, valueLteBandPreference: NasLteBandPreference }
    getManualNetworkSelection(): { returnType: boolean, valueManualNetworkSelectionMcc: number, valueManualNetworkSelectionMnc: number, valueManualNetworkSelectionIncludesPcsDigit: boolean }
    getModePreference(): { returnType: boolean, valueModePreference: NasRatModePreference }
    getNetworkSelectionPreference(): { returnType: boolean, valueNetworkSelectionPreference: NasNetworkSelectionPreference }
    getNetworkSelectionRegistrationRestriction(): { returnType: boolean, valueNetworkSelectionRegistrationRestriction: NasNetworkSelectionRegistrationRestriction }
    getResult(): boolean
    getRoamingPreference(): { returnType: boolean, valueRoamingPreference: NasRoamingPreference }
    getServiceDomainPreference(): { returnType: boolean, valueServiceDomainPreference: NasServiceDomainPreference }
    getTdScdmaBandPreference(): { returnType: boolean, valueTdScdmaBandPreference: NasTdScdmaBandPreference }
    getUsagePreference(): { returnType: boolean, valueUsagePreference: NasUsagePreference }
    getVoiceDomainPreference(): { returnType: boolean, valueVoiceDomainPreference: NasVoiceDomainPreference }
    ref(): MessageNasGetSystemSelectionPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasGetTechnologyPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetTechnologyPreferenceOutput */
    getActive(): { returnType: boolean, valueActiveTechnologyPreference: NasRadioTechnologyPreference, valueActiveTechnologyPreferenceDuration: NasPreferenceDuration }
    getPersistent(): { returnType: boolean, valuePersistent: NasRadioTechnologyPreference }
    getResult(): boolean
    ref(): MessageNasGetTechnologyPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasGetTxRxInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetTxRxInfoInput */
    getRadioInterface(): { returnType: boolean, valueRadioInterface: NasRadioInterface }
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
    getRxChain0Info(): { returnType: boolean, valueRxChain0InfoIsRadioTuned: boolean, valueRxChain0InfoRxPower: number, valueRxChain0InfoEcio: number, valueRxChain0InfoRscp: number, valueRxChain0InfoRsrp: number, valueRxChain0InfoPhase: number }
    getRxChain1Info(): { returnType: boolean, valueRxChain1InfoIsRadioTuned: boolean, valueRxChain1InfoRxPower: number, valueRxChain1InfoEcio: number, valueRxChain1InfoRscp: number, valueRxChain1InfoRsrp: number, valueRxChain1InfoPhase: number }
    getRxChain2Info(): { returnType: boolean, valueRxChain2InfoIsRadioTuned: boolean, valueRxChain2InfoRxPower: number, valueRxChain2InfoEcio: number, valueRxChain2InfoRscp: number, valueRxChain2InfoRsrp: number, valueRxChain2InfoPhase: number }
    getRxChain3Info(): { returnType: boolean, valueRxChain3InfoIsRadioTuned: boolean, valueRxChain3InfoRxPower: number, valueRxChain3InfoEcio: number, valueRxChain3InfoRscp: number, valueRxChain3InfoRsrp: number, valueRxChain3InfoPhase: number }
    getTxInfo(): { returnType: boolean, valueTxInfoIsInTraffic: boolean, valueTxInfoTxPower: number }
    ref(): MessageNasGetTxRxInfoOutput
    unref(): void
    static name: string
}
export class MessageNasInitiateNetworkRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasInitiateNetworkRegisterInput */
    getAction(): { returnType: boolean, valueAction: NasNetworkRegisterType }
    getChangeDuration(): { returnType: boolean, valueChangeDuration: NasChangeDuration }
    getManualRegistrationInfo3gpp(): { returnType: boolean, valueManualRegistrationInfo3gppMcc: number, valueManualRegistrationInfo3gppMnc: number, valueManualRegistrationInfo3gppRadioInterface: NasRadioInterface }
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: boolean }
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
    getNetworkType(): { returnType: boolean, valueNetworkType: NasNetworkScanType }
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
    getMncPcsDigitIncludeStatus(): { returnType: boolean, valueMncPcsDigitIncludeStatus: MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement[] }
    getNetworkInformation(): { returnType: boolean, valueNetworkInformation: MessageNasNetworkScanOutputNetworkInformationElement[] }
    getNetworkScanResult(): { returnType: boolean, valueNetworkScanResult: NasNetworkScanResult }
    getRadioAccessTechnology(): { returnType: boolean, valueRadioAccessTechnology: MessageNasNetworkScanOutputRadioAccessTechnologyElement[] }
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
    getCurrentPlmnName(): { returnType: boolean, valueCurrentPlmnName: boolean }
    getDdtmEvents(): { returnType: boolean, valueDdtmEvents: boolean }
    getDualStandbyPreference(): { returnType: boolean, valueDualStandbyPreference: boolean }
    getEmbmsStatus(): { returnType: boolean, valueEmbmsStatus: boolean }
    getErrorRate(): { returnType: boolean, valueErrorRate: boolean }
    getHdrNewUatiAssigned(): { returnType: boolean, valueHdrNewUatiAssigned: boolean }
    getHdrSessionClosed(): { returnType: boolean, valueHdrSessionClosed: boolean }
    getManagedRoaming(): { returnType: boolean, valueManagedRoaming: boolean }
    getNetworkTime(): { returnType: boolean, valueNetworkTime: boolean }
    getRfBandInformation(): { returnType: boolean, valueRfBandInformation: boolean }
    getServingSystemEvents(): { returnType: boolean, valueServingSystemEvents: boolean }
    getSignalInfo(): { returnType: boolean, valueSignalInfo: boolean }
    getSubscriptionInfo(): { returnType: boolean, valueSubscriptionInfo: boolean }
    getSystemInfo(): { returnType: boolean, valueSystemInfo: boolean }
    getSystemSelectionPreference(): { returnType: boolean, valueSystemSelectionPreference: boolean }
    ref(): MessageNasRegisterIndicationsInput
    setCurrentPlmnName(valueCurrentPlmnName: boolean): boolean
    setDdtmEvents(valueDdtmEvents: boolean): boolean
    setDualStandbyPreference(valueDualStandbyPreference: boolean): boolean
    setEmbmsStatus(valueEmbmsStatus: boolean): boolean
    setErrorRate(valueErrorRate: boolean): boolean
    setHdrNewUatiAssigned(valueHdrNewUatiAssigned: boolean): boolean
    setHdrSessionClosed(valueHdrSessionClosed: boolean): boolean
    setManagedRoaming(valueManagedRoaming: boolean): boolean
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
    getEcioIndicator(): { returnType: boolean, valueEcioIndicatorReport: boolean, valueEcioIndicatorEcioDelta: number }
    getEcioThreshold(): { returnType: boolean, valueEcioThresholdReport: boolean, valueEcioThresholdThresholds: number[] }
    getErrorRateIndicator(): { returnType: boolean, valueErrorRateIndicator: boolean }
    getIoIndicator(): { returnType: boolean, valueIoIndicatorReport: boolean, valueIoIndicatorIoDelta: number }
    getLteRsrpDelta(): { returnType: boolean, valueLteRsrpDeltaReport: boolean, valueLteRsrpDeltaRsrpDelta: number }
    getLteSnrDelta(): { returnType: boolean, valueLteSnrDeltaReport: boolean, valueLteSnrDeltaSnrDelta: number }
    getRegistrationRejectReason(): { returnType: boolean, valueRegistrationRejectReason: boolean }
    getRfBandInformation(): { returnType: boolean, valueRfBandInformation: boolean }
    getRssiIndicator(): { returnType: boolean, valueRssiIndicatorReport: boolean, valueRssiIndicatorRssiDelta: number }
    getSignalStrengthIndicator(): { returnType: boolean, valueSignalStrengthIndicatorReport: boolean, valueSignalStrengthIndicatorThresholds: any[] }
    getSinrIndicator(): { returnType: boolean, valueSinrIndicatorReport: boolean, valueSinrIndicatorSinrDelta: number }
    getSinrThreshold(): { returnType: boolean, valueSinrThresholdReport: boolean, valueSinrThresholdThresholds: any[] }
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
export class MessageNasSetSystemSelectionPreferenceInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetSystemSelectionPreferenceInput */
    getAcquisitionOrderPreference(): { returnType: boolean, valueAcquisitionOrderPreference: NasRadioInterface[] }
    getBandPreference(): { returnType: boolean, valueBandPreference: NasBandPreference }
    getCdmaPrlPreference(): { returnType: boolean, valueCdmaPrlPreference: NasCdmaPrlPreference }
    getChangeDuration(): { returnType: boolean, valueChangeDuration: NasChangeDuration }
    getEmergencyMode(): { returnType: boolean, valueEmergencyMode: boolean }
    getExtendedLteBandPreference(): { returnType: boolean, valueExtendedLteBandPreferenceMaskLow: number, valueExtendedLteBandPreferenceMaskMidLow: number, valueExtendedLteBandPreferenceMaskMidHigh: number, valueExtendedLteBandPreferenceMaskHigh: number }
    getGsmWcdmaAcquisitionOrderPreference(): { returnType: boolean, valueGsmWcdmaAcquisitionOrderPreference: NasGsmWcdmaAcquisitionOrderPreference }
    getLteBandPreference(): { returnType: boolean, valueLteBandPreference: NasLteBandPreference }
    getMncPdsDigitIncludeStatus(): { returnType: boolean, valueMncPdsDigitIncludeStatus: boolean }
    getModePreference(): { returnType: boolean, valueModePreference: NasRatModePreference }
    getNetworkSelectionPreference(): { returnType: boolean, valueNetworkSelectionPreferenceMode: NasNetworkSelectionPreference, valueNetworkSelectionPreferenceMcc: number, valueNetworkSelectionPreferenceMnc: number }
    getNetworkSelectionRegistrationRestriction(): { returnType: boolean, valueNetworkSelectionRegistrationRestriction: NasNetworkSelectionRegistrationRestriction }
    getRoamingPreference(): { returnType: boolean, valueRoamingPreference: NasRoamingPreference }
    getServiceDomainPreference(): { returnType: boolean, valueServiceDomainPreference: NasServiceDomainPreference }
    getTdScdmaBandPreference(): { returnType: boolean, valueTdScdmaBandPreference: NasTdScdmaBandPreference }
    getUsagePreference(): { returnType: boolean, valueUsagePreference: NasUsagePreference }
    getVoiceDomainPreference(): { returnType: boolean, valueVoiceDomainPreference: NasVoiceDomainPreference }
    ref(): MessageNasSetSystemSelectionPreferenceInput
    setAcquisitionOrderPreference(valueAcquisitionOrderPreference: NasRadioInterface[]): boolean
    setBandPreference(valueBandPreference: NasBandPreference): boolean
    setCdmaPrlPreference(valueCdmaPrlPreference: NasCdmaPrlPreference): boolean
    setChangeDuration(valueChangeDuration: NasChangeDuration): boolean
    setEmergencyMode(valueEmergencyMode: boolean): boolean
    setExtendedLteBandPreference(valueExtendedLteBandPreferenceMaskLow: number, valueExtendedLteBandPreferenceMaskMidLow: number, valueExtendedLteBandPreferenceMaskMidHigh: number, valueExtendedLteBandPreferenceMaskHigh: number): boolean
    setGsmWcdmaAcquisitionOrderPreference(valueGsmWcdmaAcquisitionOrderPreference: NasGsmWcdmaAcquisitionOrderPreference): boolean
    setLteBandPreference(valueLteBandPreference: NasLteBandPreference): boolean
    setMncPdsDigitIncludeStatus(valueMncPdsDigitIncludeStatus: boolean): boolean
    setModePreference(valueModePreference: NasRatModePreference): boolean
    setNetworkSelectionPreference(valueNetworkSelectionPreferenceMode: NasNetworkSelectionPreference, valueNetworkSelectionPreferenceMcc: number, valueNetworkSelectionPreferenceMnc: number): boolean
    setNetworkSelectionRegistrationRestriction(valueNetworkSelectionRegistrationRestriction: NasNetworkSelectionRegistrationRestriction): boolean
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
    getCurrent(): { returnType: boolean, valueCurrentTechnologyPreference: NasRadioTechnologyPreference, valueCurrentTechnologyPreferenceDuration: NasPreferenceDuration }
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
    getCommonInfo(): { returnType: boolean, valueCommonInfoTemperature: number, valueCommonInfoModemMode: NasSwiModemMode, valueCommonInfoSystemMode: NasSwiSystemMode, valueCommonInfoImsRegistrationState: NasSwiImsRegState, valueCommonInfoPacketServiceState: NasSwiPsState }
    getLteInfo(): { returnType: boolean, valueLteInfoBand: NasActiveBand, valueLteInfoBandwidth: NasDLBandwidth, valueLteInfoRxChannel: number, valueLteInfoTxChannel: number, valueLteInfoEmmState: NasSwiEmmState, valueLteInfoEmmSubState: number, valueLteInfoEmmConnectionState: NasSwiEmmConnectionState }
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
    getDeviceProvisioningServiceUpdateConfig(): { returnType: boolean, valueDeviceProvisioningServiceUpdateConfig: boolean }
    getHfaFeatureConfig(): { returnType: boolean, valueHfaFeatureConfig: boolean }
    getHfaFeatureDoneState(): { returnType: boolean, valueHfaFeatureDoneState: OmaHfaFeatureDoneState }
    getPrlUpdateServiceConfig(): { returnType: boolean, valuePrlUpdateServiceConfig: boolean }
    getResult(): boolean
    ref(): MessageOmaGetFeatureSettingOutput
    unref(): void
    static name: string
}
export class MessageOmaGetSessionInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaGetSessionInfoOutput */
    getNetworkInitiatedAlert(): { returnType: boolean, valueNetworkInitiatedAlertSessionType: OmaSessionType, valueNetworkInitiatedAlertSessionId: number }
    getResult(): boolean
    getRetryInfo(): { returnType: boolean, valueRetryInfoRetryCount: number, valueRetryInfoRetryPauseTimer: number, valueRetryInfoRetryPauseTimerRemaining: number }
    getSessionFailedReason(): { returnType: boolean, valueSessionFailedReason: OmaSessionFailedReason }
    getSessionInfo(): { returnType: boolean, valueSessionInfoSessionState: OmaSessionState, valueSessionInfoSessionType: OmaSessionType }
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
    getNetworkInitiatedAlertSelection(): { returnType: boolean, valueNetworkInitiatedAlertSelectionControlPointSelectionAccept: boolean, valueNetworkInitiatedAlertSelectionSessionId: number }
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
    getNetworkInitiatedAlertReporting(): { returnType: boolean, valueNetworkInitiatedAlertReporting: boolean }
    getSessionStateReporting(): { returnType: boolean, valueSessionStateReporting: boolean }
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
    getDeviceProvisioningServiceUpdateConfig(): { returnType: boolean, valueDeviceProvisioningServiceUpdateConfig: boolean }
    getHfaFeatureConfig(): { returnType: boolean, valueHfaFeatureConfig: boolean }
    getPrlUpdateServiceConfig(): { returnType: boolean, valuePrlUpdateServiceConfig: boolean }
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
    getSessionType(): { returnType: boolean, valueSessionType: OmaSessionType }
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
    getAdditionalNumberAlphaStringCapability(): { returnType: boolean, valueAdditionalNumberAlphaStringCapability: MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement[] }
    getAdditionalNumberCapability(): { returnType: boolean, valueAdditionalNumberCapability: MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement[] }
    getCapabilityBasicInformation(): { returnType: boolean, valueCapabilityBasicInformation: MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement[] }
    getEmailCapability(): { returnType: boolean, valueEmailCapability: MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement[] }
    getGroupCapability(): { returnType: boolean, valueGroupCapability: MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement[] }
    getGroupingInformationAlphaStringCapability(): { returnType: boolean, valueGroupingInformationAlphaStringCapability: MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement[] }
    getHiddenRecordsCapability(): { returnType: boolean, valueHiddenRecordsCapability: MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement[] }
    getResult(): boolean
    getSecondNameCapability(): { returnType: boolean, valueSecondNameCapability: MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement[] }
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
    getPhonebookInformation(): { returnType: boolean, valuePhonebookInformationSessionType: PbmSessionType, valuePhonebookInformationPhonebookType: PbmPhonebookType }
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
    getAdditionalNumberAlphaStringCapability(): { returnType: boolean, valueAdditionalNumberAlphaStringCapabilityMaximumRecords: number, valueAdditionalNumberAlphaStringCapabilityUsedRecords: number, valueAdditionalNumberAlphaStringCapabilityMaximumStringLength: number }
    getAdditionalNumberCapability(): { returnType: boolean, valueAdditionalNumberCapabilityMaximumAdditionalNumbers: number, valueAdditionalNumberCapabilityMaximumAdditionalNumberLength: number, valueAdditionalNumberCapabilityMaximumAdditionalNumberTagLength: number }
    getCapabilityBasicInformation(): { returnType: boolean, valueCapabilityBasicInformationSessionType: PbmSessionType, valueCapabilityBasicInformationPhonebookType: PbmPhonebookType, valueCapabilityBasicInformationUsedRecords: number, valueCapabilityBasicInformationMaximumRecords: number, valueCapabilityBasicInformationMaximumNumberLength: number, valueCapabilityBasicInformationMaximumNameLength: number }
    getEmailCapability(): { returnType: boolean, valueEmailCapabilityMaximumEmails: number, valueEmailCapabilityMaximumEmailAddressLength: number }
    getGroupCapability(): { returnType: boolean, valueGroupCapabilityMaximumGroups: number, valueGroupCapabilityMaximumGroupTagLength: number }
    getGroupingInformationAlphaStringCapability(): { returnType: boolean, valueGroupingInformationAlphaStringCapabilityMaximumRecords: number, valueGroupingInformationAlphaStringCapabilityUsedRecords: number, valueGroupingInformationAlphaStringCapabilityMaximumStringLength: number }
    getHiddenRecordsCapability(): { returnType: boolean, valueHiddenRecordsCapabilitySupported: boolean }
    getResult(): boolean
    getSecondNameCapability(): { returnType: boolean, valueSecondNameCapabilityMaximumSecondNameLength: number }
    ref(): MessagePbmGetCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessagePbmIndicationRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmIndicationRegisterInput */
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: PbmEventRegistrationFlag }
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
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: PbmEventRegistrationFlag }
    getResult(): boolean
    ref(): MessagePbmIndicationRegisterOutput
    unref(): void
    static name: string
}
export class MessagePdcActivateConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcActivateConfigInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType }
    getToken(): { returnType: boolean, valueToken: number }
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
    getToken(): { returnType: boolean, valueToken: number }
    ref(): MessagePdcActivateConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcConfigChangeInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcConfigChangeInput */
    getTypeWithId(): { returnType: boolean, valueTypeWithId: ConfigTypeAndId }
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
    getTypeWithId(): { returnType: boolean, valueTypeWithId: ConfigTypeAndId }
    ref(): MessagePdcConfigChangeOutput
    unref(): void
    static name: string
}
export class MessagePdcDeactivateConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeactivateConfigInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType }
    getToken(): { returnType: boolean, valueToken: number }
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
    getToken(): { returnType: boolean, valueToken: number }
    ref(): MessagePdcDeactivateConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcDeleteConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeleteConfigInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType }
    getId(): { returnType: boolean, valueId: any[] }
    getToken(): { returnType: boolean, valueToken: number }
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
    getToken(): { returnType: boolean, valueToken: number }
    ref(): MessagePdcDeleteConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcGetConfigInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigInfoInput */
    getToken(): { returnType: boolean, valueToken: number }
    getTypeWithId(): { returnType: boolean, valueTypeWithId: ConfigTypeAndId }
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
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType }
    getToken(): { returnType: boolean, valueToken: number }
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
    getCurrentSize(): { returnType: boolean, valueCurrentSize: number }
    getMaximumSize(): { returnType: boolean, valueMaximumSize: number }
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number }
    ref(): MessagePdcGetConfigLimitsOutput
    unref(): void
    static name: string
}
export class MessagePdcGetDefaultConfigInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetDefaultConfigInfoInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType }
    getToken(): { returnType: boolean, valueToken: number }
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
    getDescription(): { returnType: boolean, valueDescription: string }
    getResult(): boolean
    getToken(): { returnType: boolean, valueToken: number }
    getTotalSize(): { returnType: boolean, valueTotalSize: number }
    getVersion(): { returnType: boolean, valueVersion: number }
    ref(): MessagePdcGetDefaultConfigInfoOutput
    unref(): void
    static name: string
}
export class MessagePdcGetSelectedConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetSelectedConfigInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType }
    getToken(): { returnType: boolean, valueToken: number }
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
    getToken(): { returnType: boolean, valueToken: number }
    ref(): MessagePdcGetSelectedConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcListConfigsInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcListConfigsInput */
    getConfigType(): { returnType: boolean, valueConfigType: PdcConfigurationType }
    getToken(): { returnType: boolean, valueToken: number }
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
    getConfigChunk(): { returnType: boolean, valueConfigChunkType: PdcConfigurationType, valueConfigChunkId: any[], valueConfigChunkTotalSize: number, valueConfigChunkChunk: any[] }
    getToken(): { returnType: boolean, valueToken: number }
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
    getToken(): { returnType: boolean, valueToken: number }
    ref(): MessagePdcLoadConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcRegisterInput */
    getEnableReporting(): { returnType: boolean, valueEnableReporting: boolean }
    ref(): MessagePdcRegisterInput
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
    getToken(): { returnType: boolean, valueToken: number }
    getTypeWithId(): { returnType: boolean, valueTypeWithId: ConfigTypeAndId }
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
    getToken(): { returnType: boolean, valueToken: number }
    ref(): MessagePdcSetSelectedConfigOutput
    unref(): void
    static name: string
}
export class MessagePdsGetAgpsConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetAgpsConfigInput */
    getNetworkMode(): { returnType: boolean, valueNetworkMode: PdsNetworkMode }
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
    getLocationServerAddress(): { returnType: boolean, valueLocationServerAddressIp: number, valueLocationServerAddressPort: number }
    getLocationServerUrl(): { returnType: boolean, valueLocationServerUrl: any[] }
    getResult(): boolean
    ref(): MessagePdsGetAgpsConfigOutput
    unref(): void
    static name: string
}
export class MessagePdsGetAutoTrackingStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetAutoTrackingStateOutput */
    getResult(): boolean
    getState(): { returnType: boolean, valueStateAutoTrackingState: boolean }
    ref(): MessagePdsGetAutoTrackingStateOutput
    unref(): void
    static name: string
}
export class MessagePdsGetDefaultTrackingSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetDefaultTrackingSessionOutput */
    getInfo(): { returnType: boolean, valueInfoSessionOperation: PdsOperatingMode, valueInfoPositionDataTimeout: number, valueInfoInterval: number, valueInfoAccuracyThreshold: number }
    getResult(): boolean
    ref(): MessagePdsGetDefaultTrackingSessionOutput
    unref(): void
    static name: string
}
export class MessagePdsGetGpsServiceStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetGpsServiceStateOutput */
    getResult(): boolean
    getState(): { returnType: boolean, valueStateGpsServiceState: boolean, valueStateTrackingSessionState: PdsTrackingSessionState }
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
    getLocationServerAddress(): { returnType: boolean, valueLocationServerAddressIp: number, valueLocationServerAddressPort: number }
    getLocationServerUrl(): { returnType: boolean, valueLocationServerUrl: any[] }
    getNetworkMode(): { returnType: boolean, valueNetworkMode: PdsNetworkMode }
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
    getState(): { returnType: boolean, valueStateAutoTrackingState: boolean }
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
    getInfo(): { returnType: boolean, valueInfoSessionOperation: PdsOperatingMode, valueInfoPositionDataTimeout: number, valueInfoInterval: number, valueInfoAccuracyThreshold: number }
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
    getAccelerometerDataStreamingReadyReporting(): { returnType: boolean, valueAccelerometerDataStreamingReadyReporting: boolean }
    getExtendedExternalXtraDataRequestReporting(): { returnType: boolean, valueExtendedExternalXtraDataRequestReporting: boolean }
    getExtendedNmeaPositionReporting(): { returnType: boolean, valueExtendedNmeaPositionReporting: boolean }
    getExternalTimeInjectionRequestReporting(): { returnType: boolean, valueExternalTimeInjectionRequestReporting: boolean }
    getExternalWifiPositionRequestReporting(): { returnType: boolean, valueExternalWifiPositionRequestReporting: boolean }
    getExternalXtraDataRequestReporting(): { returnType: boolean, valueExternalXtraDataRequestReporting: boolean }
    getGyroDataStreamingReadyReporting(): { returnType: boolean, valueGyroDataStreamingReadyReporting: boolean }
    getHeadingUncertaintyReporting(): { returnType: boolean, valueHeadingUncertaintyReporting: boolean }
    getNmeaDebugStringsReporting(): { returnType: boolean, valueNmeaDebugStringsReporting: boolean }
    getNmeaPositionReporting(): { returnType: boolean, valueNmeaPositionReporting: boolean }
    getParsedPositionReporting(): { returnType: boolean, valueParsedPositionReporting: boolean }
    getPdsCommEventReporting(): { returnType: boolean, valuePdsCommEventReporting: boolean }
    getPositionReliabilityIndicatorReporting(): { returnType: boolean, valuePositionReliabilityIndicatorReporting: boolean }
    getSatelliteInformationReporting(): { returnType: boolean, valueSatelliteInformationReporting: boolean }
    getSensorDataUsageIndicatorReporting(): { returnType: boolean, valueSensorDataUsageIndicatorReporting: boolean }
    getSuplNetworkInitiatedPromptReporting(): { returnType: boolean, valueSuplNetworkInitiatedPromptReporting: boolean }
    getTimeSourceInformationReporting(): { returnType: boolean, valueTimeSourceInformationReporting: boolean }
    getTimeSyncRequestReporting(): { returnType: boolean, valueTimeSyncRequestReporting: boolean }
    getUmtsCpNetworkInitiatedPromptReporting(): { returnType: boolean, valueUmtsCpNetworkInitiatedPromptReporting: boolean }
    getVxNetworkInitiatedRequestReporting(): { returnType: boolean, valueVxNetworkInitiatedRequestReporting: boolean }
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
    getState(): { returnType: boolean, valueStateGpsServiceState: boolean }
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
    getQosId(): { returnType: boolean, valueQosId: number }
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
    getValue(): { returnType: boolean, valueValue: QosStatus }
    ref(): MessageQosGetFlowStatusOutput
    unref(): void
    static name: string
}
export class MessageQosGetNetworkStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosGetNetworkStatusOutput */
    getQosSupported(): { returnType: boolean, valueQosSupported: boolean }
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
    getApnId(): { returnType: boolean, valueApnId: number }
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
    getApn(): { returnType: boolean, valueApnApnId: number, valueApnTxPackets: number, valueApnTxPacketsDropped: number, valueApnRxPackets: number, valueApnTxBytes: number, valueApnTxBytesDropped: number, valueApnRxBytes: number }
    getFlow(): { returnType: boolean, valueFlow: MessageQosSwiReadDataStatsOutputFlowElement[] }
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
    getState(): { returnType: boolean, valueState: SarRfState }
    ref(): MessageSarRfGetStateOutput
    unref(): void
    static name: string
}
export class MessageSarRfSetStateInput {
    /* Methods of Qmi-1.0.Qmi.MessageSarRfSetStateInput */
    getState(): { returnType: boolean, valueState: SarRfState }
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
    getInfo(): { returnType: boolean, valueInfoPinId: UimPinId, valueInfoOldPin: string, valueInfoNewPin: string }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getCardResult(): { returnType: boolean, valueCardResultSw1: number, valueCardResultSw2: number }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyRetriesLeft: number, valueRetriesRemainingUnblockRetriesLeft: number }
    ref(): MessageUimChangePinOutput
    unref(): void
    static name: string
}
export class MessageUimChangeProvisioningSessionInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangeProvisioningSessionInput */
    getApplicationInformation(): { returnType: boolean, valueApplicationInformationSlot: number, valueApplicationInformationApplicationIdentifier: any[] }
    getSessionChange(): { returnType: boolean, valueSessionChangeSessionType: UimSessionType, valueSessionChangeActivate: boolean }
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
export class MessageUimGetCardStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetCardStatusOutput */
    getCardStatus(): { returnType: boolean, valueCardStatusIndexGwPrimary: number, valueCardStatusIndex1xPrimary: number, valueCardStatusIndexGwSecondary: number, valueCardStatusIndex1xSecondary: number, valueCardStatusCards: MessageUimGetCardStatusOutputCardStatusCardsElement[] }
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
export class MessageUimGetFileAttributesInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetFileAttributesInput */
    getFile(): { returnType: boolean, valueFileFileId: number, valueFileFilePath: any[] }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getCardResult(): { returnType: boolean, valueCardResultSw1: number, valueCardResultSw2: number }
    getFileAttributes(): { returnType: boolean, valueFileAttributesFileSize: number, valueFileAttributesFileId: number, valueFileAttributesFileType: UimFileType, valueFileAttributesRecordSize: number, valueFileAttributesRecordCount: number, valueFileAttributesReadSecurityAttributesLogic: UimSecurityAttributeLogic, valueFileAttributesReadSecurityAttributes: UimSecurityAttribute, valueFileAttributesWriteSecurityAttributesLogic: UimSecurityAttributeLogic, valueFileAttributesWriteSecurityAttributes: UimSecurityAttribute, valueFileAttributesIncreaseSecurityAttributesLogic: UimSecurityAttributeLogic, valueFileAttributesIncreaseSecurityAttributes: UimSecurityAttribute, valueFileAttributesDeactivateSecurityAttributesLogic: UimSecurityAttributeLogic, valueFileAttributesDeactivateSecurityAttributes: UimSecurityAttribute, valueFileAttributesActivateSecurityAttributesLogic: UimSecurityAttributeLogic, valueFileAttributesActivateSecurityAttributes: UimSecurityAttribute, valueFileAttributesRawData: any[] }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getResult(): boolean
    ref(): MessageUimGetFileAttributesOutput
    unref(): void
    static name: string
}
export class MessageUimGetSlotStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetSlotStatusOutput */
    getPhysicalSlotInformation(): { returnType: boolean, valuePhysicalSlotInformation: PhysicalSlotInformationSlot[] }
    getPhysicalSlotStatus(): { returnType: boolean, valuePhysicalSlotStatus: PhysicalSlotStatusSlot[] }
    getResult(): boolean
    getSlotEidInformation(): { returnType: boolean, valueSlotEidInformation: any[] }
    ref(): MessageUimGetSlotStatusOutput
    unref(): void
    static name: string
}
export class MessageUimGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] }
    getResult(): boolean
    ref(): MessageUimGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageUimPowerOffSimInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOffSimInput */
    getSlot(): { returnType: boolean, valueSlot: number }
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
    getSlot(): { returnType: boolean, valueSlot: number }
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
    getFile(): { returnType: boolean, valueFileFileId: number, valueFileFilePath: any[] }
    getLastRecord(): { returnType: boolean, valueLastRecord: number }
    getRecord(): { returnType: boolean, valueRecordRecordNumber: number, valueRecordRecordLength: number }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getAdditionalReadResult(): { returnType: boolean, valueAdditionalReadResult: any[] }
    getCardResult(): { returnType: boolean, valueCardResultSw1: number, valueCardResultSw2: number }
    getReadResult(): { returnType: boolean, valueReadResult: any[] }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getResult(): boolean
    ref(): MessageUimReadRecordOutput
    unref(): void
    static name: string
}
export class MessageUimReadTransparentInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadTransparentInput */
    getEncryptData(): { returnType: boolean, valueEncryptData: boolean }
    getFile(): { returnType: boolean, valueFileFileId: number, valueFileFilePath: any[] }
    getReadInformation(): { returnType: boolean, valueReadInformationOffset: number, valueReadInformationLength: number }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getCardResult(): { returnType: boolean, valueCardResultSw1: number, valueCardResultSw2: number }
    getEncryptedData(): { returnType: boolean, valueEncryptedData: boolean }
    getReadResult(): { returnType: boolean, valueReadResult: any[] }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getResult(): boolean
    ref(): MessageUimReadTransparentOutput
    unref(): void
    static name: string
}
export class MessageUimRefreshCompleteInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshCompleteInput */
    getInfo(): { returnType: boolean, valueInfoRefreshSuccess: boolean }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getInfo(): { returnType: boolean, valueInfoRegisterFlag: boolean }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getInfo(): { returnType: boolean, valueInfoRegisterFlag: boolean, valueInfoVoteForInit: boolean, valueInfoFiles: MessageUimRefreshRegisterInputInfoFilesElement[] }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: UimEventRegistrationFlag }
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
    getEventRegistrationMask(): { returnType: boolean, valueEventRegistrationMask: UimEventRegistrationFlag }
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
    getInfo(): { returnType: boolean, valueInfoPinId: UimPinId, valueInfoPinEnabled: boolean, valueInfoPinValue: string }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyRetriesLeft: number, valueRetriesRemainingUnblockRetriesLeft: number }
    ref(): MessageUimSetPinProtectionOutput
    unref(): void
    static name: string
}
export class MessageUimSwitchSlotInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSwitchSlotInput */
    getLogicalSlot(): { returnType: boolean, valueLogicalSlot: number }
    getPhysicalSlot(): { returnType: boolean, valuePhysicalSlot: number }
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
    getInfo(): { returnType: boolean, valueInfoPinId: UimPinId, valueInfoPuk: string, valueInfoNewPin: string }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getCardResult(): { returnType: boolean, valueCardResultSw1: number, valueCardResultSw2: number }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyRetriesLeft: number, valueRetriesRemainingUnblockRetriesLeft: number }
    ref(): MessageUimUnblockPinOutput
    unref(): void
    static name: string
}
export class MessageUimVerifyPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimVerifyPinInput */
    getInfo(): { returnType: boolean, valueInfoPinId: UimPinId, valueInfoPinValue: string }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getSession(): { returnType: boolean, valueSessionSessionType: UimSessionType, valueSessionApplicationIdentifier: any[] }
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
    getCardResult(): { returnType: boolean, valueCardResultSw1: number, valueCardResultSw2: number }
    getResponseInIndicationToken(): { returnType: boolean, valueResponseInIndicationToken: number }
    getResult(): boolean
    getRetriesRemaining(): { returnType: boolean, valueRetriesRemainingVerifyRetriesLeft: number, valueRetriesRemainingUnblockRetriesLeft: number }
    ref(): MessageUimVerifyPinOutput
    unref(): void
    static name: string
}
export class MessageVoiceAnswerCallInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerCallInput */
    getCallId(): { returnType: boolean, valueCallId: number }
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
    getCallId(): { returnType: boolean, valueCallId: number }
    getResult(): boolean
    ref(): MessageVoiceAnswerCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceAnswerUssdInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerUssdInput */
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[] }
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
    getCallingNumber(): { returnType: boolean, valueCallingNumber: string }
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
    getCallId(): { returnType: boolean, valueCallId: number }
    getResult(): boolean
    ref(): MessageVoiceDialCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceEndCallInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceEndCallInput */
    getCallId(): { returnType: boolean, valueCallId: number }
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
    getCallId(): { returnType: boolean, valueCallId: number }
    getResult(): boolean
    ref(): MessageVoiceEndCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceGetConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetConfigInput */
    getAirTimer(): { returnType: boolean, valueAirTimer: boolean }
    getAmrStatus(): { returnType: boolean, valueAmrStatus: boolean }
    getAutoAnswer(): { returnType: boolean, valueAutoAnswer: boolean }
    getNamIndex(): { returnType: boolean, valueNamIndex: boolean }
    getPreferredVoicePrivacy(): { returnType: boolean, valuePreferredVoicePrivacy: boolean }
    getPreferredVoiceServiceOption(): { returnType: boolean, valuePreferredVoiceServiceOption: boolean }
    getRoamTimer(): { returnType: boolean, valueRoamTimer: boolean }
    getTtyMode(): { returnType: boolean, valueTtyMode: boolean }
    getVoiceDomainPreference(): { returnType: boolean, valueVoiceDomainPreference: boolean }
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
    getAirTimerCount(): { returnType: boolean, valueAirTimerCountNamId: number, valueAirTimerCountAirTimer: number }
    getAutoAnswerStatus(): { returnType: boolean, valueAutoAnswerStatus: boolean }
    getCurrentAmrStatus(): { returnType: boolean, valueCurrentAmrStatusGsm: boolean, valueCurrentAmrStatusWcdma: VoiceWcdmaAmrStatus }
    getCurrentPreferredVoiceSo(): { returnType: boolean, valueCurrentPreferredVoiceSoNamId: number, valueCurrentPreferredVoiceSoEvrcCapability: boolean, valueCurrentPreferredVoiceSoHomePageVoiceServiceOption: VoiceServiceOption, valueCurrentPreferredVoiceSoHomeOriginationVoiceServiceOption: VoiceServiceOption, valueCurrentPreferredVoiceSoRoamingOriginationVoiceServiceOption: VoiceServiceOption }
    getCurrentTtyMode(): { returnType: boolean, valueCurrentTtyMode: VoiceTtyMode }
    getCurrentVoiceDomainPreference(): { returnType: boolean, valueCurrentVoiceDomainPreference: VoiceDomain }
    getCurrentVoicePrivacyPreference(): { returnType: boolean, valueCurrentVoicePrivacyPreference: VoicePrivacy }
    getResult(): boolean
    getRoamTimerCount(): { returnType: boolean, valueRoamTimerCountNamId: number, valueRoamTimerCountRoamTimer: number }
    ref(): MessageVoiceGetConfigOutput
    unref(): void
    static name: string
}
export class MessageVoiceGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] }
    getResult(): boolean
    ref(): MessageVoiceGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageVoiceIndicationRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceIndicationRegisterInput */
    getAocEvents(): { returnType: boolean, valueAocEvents: boolean }
    getCallNotificationEvents(): { returnType: boolean, valueCallNotificationEvents: boolean }
    getConferenceEvents(): { returnType: boolean, valueConferenceEvents: boolean }
    getDtmfEvents(): { returnType: boolean, valueDtmfEvents: boolean }
    getExtendedBurstTypeInternationalInformationEvents(): { returnType: boolean, valueExtendedBurstTypeInternationalInformationEvents: boolean }
    getHandoverEvents(): { returnType: boolean, valueHandoverEvents: boolean }
    getModificationEvents(): { returnType: boolean, valueModificationEvents: boolean }
    getMtPageMissInformationEvents(): { returnType: boolean, valueMtPageMissInformationEvents: boolean }
    getSpeechCodecEvents(): { returnType: boolean, valueSpeechCodecEvents: boolean }
    getSupplementaryServiceNotificationEvents(): { returnType: boolean, valueSupplementaryServiceNotificationEvents: boolean }
    getUssdNotificationEvents(): { returnType: boolean, valueUssdNotificationEvents: boolean }
    getUusEvents(): { returnType: boolean, valueUusEvents: boolean }
    getVoicePrivacyEvents(): { returnType: boolean, valueVoicePrivacyEvents: boolean }
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
export class MessageVoiceOriginateUssdInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdInput */
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[] }
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
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[] }
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
    getAlphaIdentifier(): { returnType: boolean, valueAlphaIdentifierDataCodingScheme: VoiceAlphaDataCodingScheme, valueAlphaIdentifierAlpha: any[] }
    getCallControlResultType(): { returnType: boolean, valueCallControlResultType: VoiceCallControlResultType }
    getCallControlSupplementaryServiceType(): { returnType: boolean, valueCallControlSupplementaryServiceType: VoiceCallControlSupplementaryServiceType }
    getCallId(): { returnType: boolean, valueCallId: number }
    getFailureCause(): { returnType: boolean, valueFailureCause: VoiceCallEndReason }
    getResult(): boolean
    getUssData(): { returnType: boolean, valueUssDataDataCodingScheme: VoiceUssDataCodingScheme, valueUssDataData: any[] }
    getUssDataUtf16(): { returnType: boolean, valueUssDataUtf16: number[] }
    ref(): MessageVoiceOriginateUssdOutput
    unref(): void
    static name: string
}
export class MessageWdaGetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaGetDataFormatInput */
    getEndpointInfo(): { returnType: boolean, valueEndpointInfoEndpointType: DataEndpointType, valueEndpointInfoInterfaceNumber: number }
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
    getDownlinkDataAggregationMaxDatagrams(): { returnType: boolean, valueDownlinkDataAggregationMaxDatagrams: number }
    getDownlinkDataAggregationMaxSize(): { returnType: boolean, valueDownlinkDataAggregationMaxSize: number }
    getDownlinkDataAggregationProtocol(): { returnType: boolean, valueDownlinkDataAggregationProtocol: WdaDataAggregationProtocol }
    getLinkLayerProtocol(): { returnType: boolean, valueLinkLayerProtocol: WdaLinkLayerProtocol }
    getNdpSignature(): { returnType: boolean, valueNdpSignature: number }
    getQosFormat(): { returnType: boolean, valueQosFormat: boolean }
    getResult(): boolean
    getUplinkDataAggregationProtocol(): { returnType: boolean, valueUplinkDataAggregationProtocol: WdaDataAggregationProtocol }
    ref(): MessageWdaGetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageWdaGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] }
    getResult(): boolean
    ref(): MessageWdaGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageWdaSetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaSetDataFormatInput */
    getDownlinkDataAggregationMaxDatagrams(): { returnType: boolean, valueDownlinkDataAggregationMaxDatagrams: number }
    getDownlinkDataAggregationMaxSize(): { returnType: boolean, valueDownlinkDataAggregationMaxSize: number }
    getDownlinkDataAggregationProtocol(): { returnType: boolean, valueDownlinkDataAggregationProtocol: WdaDataAggregationProtocol }
    getEndpointInfo(): { returnType: boolean, valueEndpointInfoEndpointType: DataEndpointType, valueEndpointInfoInterfaceNumber: number }
    getLinkLayerProtocol(): { returnType: boolean, valueLinkLayerProtocol: WdaLinkLayerProtocol }
    getNdpSignature(): { returnType: boolean, valueNdpSignature: number }
    getQosFormat(): { returnType: boolean, valueQosFormat: boolean }
    getUplinkDataAggregationProtocol(): { returnType: boolean, valueUplinkDataAggregationProtocol: WdaDataAggregationProtocol }
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
    getDownlinkDataAggregationMaxDatagrams(): { returnType: boolean, valueDownlinkDataAggregationMaxDatagrams: number }
    getDownlinkDataAggregationMaxSize(): { returnType: boolean, valueDownlinkDataAggregationMaxSize: number }
    getDownlinkDataAggregationProtocol(): { returnType: boolean, valueDownlinkDataAggregationProtocol: WdaDataAggregationProtocol }
    getLinkLayerProtocol(): { returnType: boolean, valueLinkLayerProtocol: WdaLinkLayerProtocol }
    getNdpSignature(): { returnType: boolean, valueNdpSignature: number }
    getQosFormat(): { returnType: boolean, valueQosFormat: boolean }
    getResult(): boolean
    getUplinkDataAggregationProtocol(): { returnType: boolean, valueUplinkDataAggregationProtocol: WdaDataAggregationProtocol }
    ref(): MessageWdaSetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageWdsBindDataPortInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindDataPortInput */
    getDataPort(): { returnType: boolean, valueDataPort: SioPort }
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
    getClientType(): { returnType: boolean, valueClientType: WdsClientType }
    getEndpointInfo(): { returnType: boolean, valueEndpointInfoEndpointType: DataEndpointType, valueEndpointInfoInterfaceNumber: number }
    getMuxId(): { returnType: boolean, valueMuxId: number }
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
    getApnDisabledFlag(): { returnType: boolean, valueApnDisabledFlag: boolean }
    getApnName(): { returnType: boolean, valueApnName: string }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication }
    getGprsMinimumQos(): { returnType: boolean, valueGprsMinimumQosPrecedenceClass: number, valueGprsMinimumQosDelayClass: number, valueGprsMinimumQosReliabilityClass: number, valueGprsMinimumQosPeakThroughputClass: number, valueGprsMinimumQosMeanThroughputClass: number }
    getGprsRequestedQos(): { returnType: boolean, valueGprsRequestedQosPrecedenceClass: number, valueGprsRequestedQosDelayClass: number, valueGprsRequestedQosReliabilityClass: number, valueGprsRequestedQosPeakThroughputClass: number, valueGprsRequestedQosMeanThroughputClass: number }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: boolean }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number }
    getIpv6AddressPreference(): { returnType: boolean, valueIpv6AddressPreferenceAddress: number[] }
    getIpv6PrimaryDnsAddressPreference(): { returnType: boolean, valueIpv6PrimaryDnsAddressPreference: number[] }
    getIpv6SecondaryDnsAddressPreference(): { returnType: boolean, valueIpv6SecondaryDnsAddressPreference: number[] }
    getLteQosParameters(): { returnType: boolean, valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier, valueLteQosParametersGuaranteedDownlinkBitrate: number, valueLteQosParametersMaxDownlinkBitrate: number, valueLteQosParametersGuaranteedUplinkBitrate: number, valueLteQosParametersMaxUplinkBitrate: number }
    getPassword(): { returnType: boolean, valuePassword: string }
    getPcscfAddressUsingDhcp(): { returnType: boolean, valuePcscfAddressUsingDhcp: boolean }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: boolean }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number }
    getPdpContextPrimaryId(): { returnType: boolean, valuePdpContextPrimaryId: number }
    getPdpContextSecondaryFlag(): { returnType: boolean, valuePdpContextSecondaryFlag: boolean }
    getPdpDataCompressionType(): { returnType: boolean, valuePdpDataCompressionType: WdsPdpDataCompressionType }
    getPdpHeaderCompressionType(): { returnType: boolean, valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number }
    getProfileName(): { returnType: boolean, valueProfileName: string }
    getProfileType(): { returnType: boolean, valueProfileType: WdsProfileType }
    getRoamingDisallowedFlag(): { returnType: boolean, valueRoamingDisallowedFlag: boolean }
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number }
    getUmtsMinimumQos(): { returnType: boolean, valueUmtsMinimumQosTrafficClass: WdsTrafficClass, valueUmtsMinimumQosMaxUplinkBitrate: number, valueUmtsMinimumQosMaxDownlinkBitrate: number, valueUmtsMinimumQosGuaranteedUplinkBitrate: number, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosMaximumSduSize: number, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosTransferDelay: number, valueUmtsMinimumQosTrafficHandlingPriority: number }
    getUmtsMinimumQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number }
    getUmtsRequestedQos(): { returnType: boolean, valueUmtsRequestedQosTrafficClass: WdsTrafficClass, valueUmtsRequestedQosMaxUplinkBitrate: number, valueUmtsRequestedQosMaxDownlinkBitrate: number, valueUmtsRequestedQosGuaranteedUplinkBitrate: number, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosMaximumSduSize: number, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosTransferDelay: number, valueUmtsRequestedQosTrafficHandlingPriority: number }
    getUmtsRequestedQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number }
    getUsername(): { returnType: boolean, valueUsername: string }
    ref(): MessageWdsCreateProfileInput
    setApnDisabledFlag(valueApnDisabledFlag: boolean): boolean
    setApnName(valueApnName: string): boolean
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
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError }
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType, valueProfileIdentifierProfileIndex: number }
    getResult(): boolean
    ref(): MessageWdsCreateProfileOutput
    unref(): void
    static name: string
}
export class MessageWdsDeleteProfileInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsDeleteProfileInput */
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType, valueProfileIdentifierProfileIndex: number }
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
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError }
    getResult(): boolean
    ref(): MessageWdsDeleteProfileOutput
    unref(): void
    static name: string
}
export class MessageWdsGetAutoconnectSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetAutoconnectSettingsOutput */
    getResult(): boolean
    getRoaming(): { returnType: boolean, valueRoaming: WdsAutoconnectSettingRoaming }
    getStatus(): { returnType: boolean, valueStatus: WdsAutoconnectSetting }
    ref(): MessageWdsGetAutoconnectSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetChannelRatesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetChannelRatesOutput */
    getChannelRates(): { returnType: boolean, valueChannelRatesChannelTxRateBps: number, valueChannelRatesChannelRxRateBps: number, valueChannelRatesMaxChannelTxRateBps: number, valueChannelRatesMaxChannelRxRateBps: number }
    getResult(): boolean
    ref(): MessageWdsGetChannelRatesOutput
    unref(): void
    static name: string
}
export class MessageWdsGetCurrentDataBearerTechnologyOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetCurrentDataBearerTechnologyOutput */
    getCurrent(): { returnType: boolean, valueCurrentNetworkType: WdsNetworkType, valueCurrentRatMask: number, valueCurrentSoMask: number }
    getLast(): { returnType: boolean, valueLastNetworkType: WdsNetworkType, valueLastRatMask: number, valueLastSoMask: number }
    getResult(): boolean
    ref(): MessageWdsGetCurrentDataBearerTechnologyOutput
    unref(): void
    static name: string
}
export class MessageWdsGetCurrentSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetCurrentSettingsInput */
    getRequestedSettings(): { returnType: boolean, valueRequestedSettings: WdsGetCurrentSettingsRequestedSettings }
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
    getApnName(): { returnType: boolean, valueApnName: string }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication }
    getDomainNameList(): { returnType: boolean, valueDomainNameList: string[] }
    getExtendedTechnologyPreference(): { returnType: boolean, valueExtendedTechnologyPreference: WdsExtendedTechnologyPreference }
    getGprsGrantedQos(): { returnType: boolean, valueGprsGrantedQosPrecedenceClass: number, valueGprsGrantedQosDelayClass: number, valueGprsGrantedQosReliabilityClass: number, valueGprsGrantedQosPeakThroughputClass: number, valueGprsGrantedQosMeanThroughputClass: number }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: number }
    getIpFamily(): { returnType: boolean, valueIpFamily: WdsIpFamily }
    getIpv4Address(): { returnType: boolean, valueIpv4Address: number }
    getIpv4GatewayAddress(): { returnType: boolean, valueIpv4GatewayAddress: number }
    getIpv4GatewaySubnetMask(): { returnType: boolean, valueIpv4GatewaySubnetMask: number }
    getIpv6Address(): { returnType: boolean, valueIpv6AddressAddress: number[], valueIpv6AddressPrefixLength: number }
    getIpv6GatewayAddress(): { returnType: boolean, valueIpv6GatewayAddressAddress: number[], valueIpv6GatewayAddressPrefixLength: number }
    getIpv6PrimaryDnsAddress(): { returnType: boolean, valueIpv6PrimaryDnsAddress: number[] }
    getIpv6SecondaryDnsAddress(): { returnType: boolean, valueIpv6SecondaryDnsAddress: number[] }
    getMtu(): { returnType: boolean, valueMtu: number }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: number }
    getPcscfDomainNameList(): { returnType: boolean, valuePcscfDomainNameList: string[] }
    getPcscfServerAddressList(): { returnType: boolean, valuePcscfServerAddressList: number[] }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number }
    getProfileId(): { returnType: boolean, valueProfileIdProfileType: WdsProfileType, valueProfileIdProfileIndex: number }
    getProfileName(): { returnType: boolean, valueProfileName: string }
    getResult(): boolean
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number }
    getUmtsGrantedQos(): { returnType: boolean, valueUmtsGrantedQosTrafficClass: WdsTrafficClass, valueUmtsGrantedQosMaxUplinkBitrate: number, valueUmtsGrantedQosMaxDownlinkBitrate: number, valueUmtsGrantedQosGuaranteedUplinkBitrate: number, valueUmtsGrantedQosGuaranteedDownlinkBitrate: number, valueUmtsGrantedQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsGrantedQosMaximumSduSize: number, valueUmtsGrantedQosSduErrorRatio: WdsSduErrorRatio, valueUmtsGrantedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsGrantedQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsGrantedQosTransferDelay: number, valueUmtsGrantedQosTrafficHandlingPriority: number }
    getUsername(): { returnType: boolean, valueUsername: string }
    ref(): MessageWdsGetCurrentSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDataBearerTechnologyOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDataBearerTechnologyOutput */
    getCurrent(): { returnType: boolean, valueCurrent: WdsDataBearerTechnology }
    getLast(): { returnType: boolean, valueLast: WdsDataBearerTechnology }
    getResult(): boolean
    ref(): MessageWdsGetDataBearerTechnologyOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDefaultProfileNumberInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultProfileNumberInput */
    getProfileType(): { returnType: boolean, valueProfileTypeType: WdsProfileType, valueProfileTypeFamily: WdsProfileFamily }
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
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError }
    getIndex(): { returnType: boolean, valueIndex: number }
    getResult(): boolean
    ref(): MessageWdsGetDefaultProfileNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDefaultSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultSettingsInput */
    getProfileType(): { returnType: boolean, valueProfileType: WdsProfileType }
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
    getApnName(): { returnType: boolean, valueApnName: string }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication }
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError }
    getGprsMinimumQos(): { returnType: boolean, valueGprsMinimumQosPrecedenceClass: number, valueGprsMinimumQosDelayClass: number, valueGprsMinimumQosReliabilityClass: number, valueGprsMinimumQosPeakThroughputClass: number, valueGprsMinimumQosMeanThroughputClass: number }
    getGprsRequestedQos(): { returnType: boolean, valueGprsRequestedQosPrecedenceClass: number, valueGprsRequestedQosDelayClass: number, valueGprsRequestedQosReliabilityClass: number, valueGprsRequestedQosPeakThroughputClass: number, valueGprsRequestedQosMeanThroughputClass: number }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: boolean }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number }
    getIpv6AddressPreference(): { returnType: boolean, valueIpv6AddressPreferenceAddress: number[] }
    getIpv6PrimaryDnsAddressPreference(): { returnType: boolean, valueIpv6PrimaryDnsAddressPreference: number[] }
    getIpv6SecondaryDnsAddressPreference(): { returnType: boolean, valueIpv6SecondaryDnsAddressPreference: number[] }
    getLteQosParameters(): { returnType: boolean, valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier, valueLteQosParametersGuaranteedDownlinkBitrate: number, valueLteQosParametersMaxDownlinkBitrate: number, valueLteQosParametersGuaranteedUplinkBitrate: number, valueLteQosParametersMaxUplinkBitrate: number }
    getPassword(): { returnType: boolean, valuePassword: string }
    getPcscfAddressUsingDhcp(): { returnType: boolean, valuePcscfAddressUsingDhcp: boolean }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: boolean }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number }
    getPdpContextPrimaryId(): { returnType: boolean, valuePdpContextPrimaryId: number }
    getPdpContextSecondaryFlag(): { returnType: boolean, valuePdpContextSecondaryFlag: boolean }
    getPdpDataCompressionType(): { returnType: boolean, valuePdpDataCompressionType: WdsPdpDataCompressionType }
    getPdpHeaderCompressionType(): { returnType: boolean, valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number }
    getProfileName(): { returnType: boolean, valueProfileName: string }
    getResult(): boolean
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number }
    getUmtsMinimumQos(): { returnType: boolean, valueUmtsMinimumQosTrafficClass: WdsTrafficClass, valueUmtsMinimumQosMaxUplinkBitrate: number, valueUmtsMinimumQosMaxDownlinkBitrate: number, valueUmtsMinimumQosGuaranteedUplinkBitrate: number, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosMaximumSduSize: number, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosTransferDelay: number, valueUmtsMinimumQosTrafficHandlingPriority: number }
    getUmtsMinimumQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number }
    getUmtsRequestedQos(): { returnType: boolean, valueUmtsRequestedQosTrafficClass: WdsTrafficClass, valueUmtsRequestedQosMaxUplinkBitrate: number, valueUmtsRequestedQosMaxDownlinkBitrate: number, valueUmtsRequestedQosGuaranteedUplinkBitrate: number, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosMaximumSduSize: number, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosTransferDelay: number, valueUmtsRequestedQosTrafficHandlingPriority: number }
    getUmtsRequestedQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number }
    getUsername(): { returnType: boolean, valueUsername: string }
    ref(): MessageWdsGetDefaultSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDormancyStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDormancyStatusOutput */
    getDormancyStatus(): { returnType: boolean, valueDormancyStatus: WdsDormancyStatus }
    getResult(): boolean
    ref(): MessageWdsGetDormancyStatusOutput
    unref(): void
    static name: string
}
export class MessageWdsGetLteAttachParametersOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetLteAttachParametersOutput */
    getApn(): { returnType: boolean, valueApn: string }
    getIpSupportType(): { returnType: boolean, valueIpSupportType: WdsIpSupportType }
    getOtaAttachPerformed(): { returnType: boolean, valueOtaAttachPerformed: boolean }
    getResult(): boolean
    ref(): MessageWdsGetLteAttachParametersOutput
    unref(): void
    static name: string
}
export class MessageWdsGetLteAttachPdnListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetLteAttachPdnListOutput */
    getCurrentList(): { returnType: boolean, valueCurrentList: number[] }
    getPendingList(): { returnType: boolean, valuePendingList: number[] }
    getResult(): boolean
    ref(): MessageWdsGetLteAttachPdnListOutput
    unref(): void
    static name: string
}
export class MessageWdsGetMaxLteAttachPdnNumberOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetMaxLteAttachPdnNumberOutput */
    getInfo(): { returnType: boolean, valueInfo: number }
    getResult(): boolean
    ref(): MessageWdsGetMaxLteAttachPdnNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPacketServiceStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPacketServiceStatusOutput */
    getConnectionStatus(): { returnType: boolean, valueConnectionStatus: WdsConnectionStatus }
    getResult(): boolean
    ref(): MessageWdsGetPacketServiceStatusOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPacketStatisticsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPacketStatisticsInput */
    getMask(): { returnType: boolean, valueMask: WdsPacketStatisticsMaskFlag }
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
    getLastCallRxBytesOk(): { returnType: boolean, valueLastCallRxBytesOk: number }
    getLastCallTxBytesOk(): { returnType: boolean, valueLastCallTxBytesOk: number }
    getResult(): boolean
    getRxBytesOk(): { returnType: boolean, valueRxBytesOk: number }
    getRxOverflows(): { returnType: boolean, valueRxOverflows: number }
    getRxPacketsDropped(): { returnType: boolean, valueRxPacketsDropped: number }
    getRxPacketsError(): { returnType: boolean, valueRxPacketsError: number }
    getRxPacketsOk(): { returnType: boolean, valueRxPacketsOk: number }
    getTxBytesOk(): { returnType: boolean, valueTxBytesOk: number }
    getTxOverflows(): { returnType: boolean, valueTxOverflows: number }
    getTxPacketsDropped(): { returnType: boolean, valueTxPacketsDropped: number }
    getTxPacketsError(): { returnType: boolean, valueTxPacketsError: number }
    getTxPacketsOk(): { returnType: boolean, valueTxPacketsOk: number }
    ref(): MessageWdsGetPacketStatisticsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPdnThrottleInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPdnThrottleInfoInput */
    getNetworkType(): { returnType: boolean, valueNetworkType: WdsDataSystemNetworkType }
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
    getInfo(): { returnType: boolean, valueInfo: MessageWdsGetPdnThrottleInfoOutputInfoElement[] }
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
    getProfileType(): { returnType: boolean, valueProfileType: WdsProfileType }
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
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError }
    getProfileList(): { returnType: boolean, valueProfileList: MessageWdsGetProfileListOutputProfileListProfile[] }
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
    getProfileId(): { returnType: boolean, valueProfileIdProfileType: WdsProfileType, valueProfileIdProfileIndex: number }
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
    getApnDisabledFlag(): { returnType: boolean, valueApnDisabledFlag: boolean }
    getApnName(): { returnType: boolean, valueApnName: string }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication }
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError }
    getGprsMinimumQos(): { returnType: boolean, valueGprsMinimumQosPrecedenceClass: number, valueGprsMinimumQosDelayClass: number, valueGprsMinimumQosReliabilityClass: number, valueGprsMinimumQosPeakThroughputClass: number, valueGprsMinimumQosMeanThroughputClass: number }
    getGprsRequestedQos(): { returnType: boolean, valueGprsRequestedQosPrecedenceClass: number, valueGprsRequestedQosDelayClass: number, valueGprsRequestedQosReliabilityClass: number, valueGprsRequestedQosPeakThroughputClass: number, valueGprsRequestedQosMeanThroughputClass: number }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: boolean }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number }
    getIpv6AddressPreference(): { returnType: boolean, valueIpv6AddressPreferenceAddress: number[] }
    getIpv6PrimaryDnsAddressPreference(): { returnType: boolean, valueIpv6PrimaryDnsAddressPreference: number[] }
    getIpv6SecondaryDnsAddressPreference(): { returnType: boolean, valueIpv6SecondaryDnsAddressPreference: number[] }
    getLteQosParameters(): { returnType: boolean, valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier, valueLteQosParametersGuaranteedDownlinkBitrate: number, valueLteQosParametersMaxDownlinkBitrate: number, valueLteQosParametersGuaranteedUplinkBitrate: number, valueLteQosParametersMaxUplinkBitrate: number }
    getPassword(): { returnType: boolean, valuePassword: string }
    getPcscfAddressUsingDhcp(): { returnType: boolean, valuePcscfAddressUsingDhcp: boolean }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: boolean }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number }
    getPdpContextPrimaryId(): { returnType: boolean, valuePdpContextPrimaryId: number }
    getPdpContextSecondaryFlag(): { returnType: boolean, valuePdpContextSecondaryFlag: boolean }
    getPdpDataCompressionType(): { returnType: boolean, valuePdpDataCompressionType: WdsPdpDataCompressionType }
    getPdpHeaderCompressionType(): { returnType: boolean, valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number }
    getProfileName(): { returnType: boolean, valueProfileName: string }
    getResult(): boolean
    getRoamingDisallowedFlag(): { returnType: boolean, valueRoamingDisallowedFlag: boolean }
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number }
    getUmtsMinimumQos(): { returnType: boolean, valueUmtsMinimumQosTrafficClass: WdsTrafficClass, valueUmtsMinimumQosMaxUplinkBitrate: number, valueUmtsMinimumQosMaxDownlinkBitrate: number, valueUmtsMinimumQosGuaranteedUplinkBitrate: number, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosMaximumSduSize: number, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosTransferDelay: number, valueUmtsMinimumQosTrafficHandlingPriority: number }
    getUmtsMinimumQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number }
    getUmtsRequestedQos(): { returnType: boolean, valueUmtsRequestedQosTrafficClass: WdsTrafficClass, valueUmtsRequestedQosMaxUplinkBitrate: number, valueUmtsRequestedQosMaxDownlinkBitrate: number, valueUmtsRequestedQosGuaranteedUplinkBitrate: number, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosMaximumSduSize: number, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosTransferDelay: number, valueUmtsRequestedQosTrafficHandlingPriority: number }
    getUmtsRequestedQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number }
    getUsername(): { returnType: boolean, valueUsername: string }
    ref(): MessageWdsGetProfileSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetSupportedMessagesOutput */
    getList(): { returnType: boolean, valueList: any[] }
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
    getApnDisabledFlag(): { returnType: boolean, valueApnDisabledFlag: boolean }
    getApnName(): { returnType: boolean, valueApnName: string }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication }
    getGprsMinimumQos(): { returnType: boolean, valueGprsMinimumQosPrecedenceClass: number, valueGprsMinimumQosDelayClass: number, valueGprsMinimumQosReliabilityClass: number, valueGprsMinimumQosPeakThroughputClass: number, valueGprsMinimumQosMeanThroughputClass: number }
    getGprsRequestedQos(): { returnType: boolean, valueGprsRequestedQosPrecedenceClass: number, valueGprsRequestedQosDelayClass: number, valueGprsRequestedQosReliabilityClass: number, valueGprsRequestedQosPeakThroughputClass: number, valueGprsRequestedQosMeanThroughputClass: number }
    getImcnFlag(): { returnType: boolean, valueImcnFlag: boolean }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number }
    getIpv6AddressPreference(): { returnType: boolean, valueIpv6AddressPreferenceAddress: number[] }
    getIpv6PrimaryDnsAddressPreference(): { returnType: boolean, valueIpv6PrimaryDnsAddressPreference: number[] }
    getIpv6SecondaryDnsAddressPreference(): { returnType: boolean, valueIpv6SecondaryDnsAddressPreference: number[] }
    getLteQosParameters(): { returnType: boolean, valueLteQosParametersQosClassIdentifier: WdsQosClassIdentifier, valueLteQosParametersGuaranteedDownlinkBitrate: number, valueLteQosParametersMaxDownlinkBitrate: number, valueLteQosParametersGuaranteedUplinkBitrate: number, valueLteQosParametersMaxUplinkBitrate: number }
    getPassword(): { returnType: boolean, valuePassword: string }
    getPcscfAddressUsingDhcp(): { returnType: boolean, valuePcscfAddressUsingDhcp: boolean }
    getPcscfAddressUsingPco(): { returnType: boolean, valuePcscfAddressUsingPco: boolean }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number }
    getPdpContextPrimaryId(): { returnType: boolean, valuePdpContextPrimaryId: number }
    getPdpContextSecondaryFlag(): { returnType: boolean, valuePdpContextSecondaryFlag: boolean }
    getPdpDataCompressionType(): { returnType: boolean, valuePdpDataCompressionType: WdsPdpDataCompressionType }
    getPdpHeaderCompressionType(): { returnType: boolean, valuePdpHeaderCompressionType: WdsPdpHeaderCompressionType }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number }
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType, valueProfileIdentifierProfileIndex: number }
    getProfileName(): { returnType: boolean, valueProfileName: string }
    getRoamingDisallowedFlag(): { returnType: boolean, valueRoamingDisallowedFlag: boolean }
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number }
    getUmtsMinimumQos(): { returnType: boolean, valueUmtsMinimumQosTrafficClass: WdsTrafficClass, valueUmtsMinimumQosMaxUplinkBitrate: number, valueUmtsMinimumQosMaxDownlinkBitrate: number, valueUmtsMinimumQosGuaranteedUplinkBitrate: number, valueUmtsMinimumQosGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosMaximumSduSize: number, valueUmtsMinimumQosSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosTransferDelay: number, valueUmtsMinimumQosTrafficHandlingPriority: number }
    getUmtsMinimumQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsMinimumQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsMinimumQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsMinimumQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsMinimumQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsMinimumQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsMinimumQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsMinimumQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsMinimumQosWithSignalingIndicationFlagSignalingIndication: number }
    getUmtsRequestedQos(): { returnType: boolean, valueUmtsRequestedQosTrafficClass: WdsTrafficClass, valueUmtsRequestedQosMaxUplinkBitrate: number, valueUmtsRequestedQosMaxDownlinkBitrate: number, valueUmtsRequestedQosGuaranteedUplinkBitrate: number, valueUmtsRequestedQosGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosMaximumSduSize: number, valueUmtsRequestedQosSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosTransferDelay: number, valueUmtsRequestedQosTrafficHandlingPriority: number }
    getUmtsRequestedQosWithSignalingIndicationFlag(): { returnType: boolean, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficClass: WdsTrafficClass, valueUmtsRequestedQosWithSignalingIndicationFlagMaxUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagMaxDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedUplinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagGuaranteedDownlinkBitrate: number, valueUmtsRequestedQosWithSignalingIndicationFlagQosDeliveryOrder: WdsDeliveryOrder, valueUmtsRequestedQosWithSignalingIndicationFlagMaximumSduSize: number, valueUmtsRequestedQosWithSignalingIndicationFlagSduErrorRatio: WdsSduErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagResidualBitErrorRatio: WdsSduResidualBitErrorRatio, valueUmtsRequestedQosWithSignalingIndicationFlagDeliveryErroneousSdu: WdsSduErroneousDelivery, valueUmtsRequestedQosWithSignalingIndicationFlagTransferDelay: number, valueUmtsRequestedQosWithSignalingIndicationFlagTrafficHandlingPriority: number, valueUmtsRequestedQosWithSignalingIndicationFlagSignalingIndication: number }
    getUsername(): { returnType: boolean, valueUsername: string }
    ref(): MessageWdsModifyProfileInput
    setApnDisabledFlag(valueApnDisabledFlag: boolean): boolean
    setApnName(valueApnName: string): boolean
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
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError }
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
    getRoaming(): { returnType: boolean, valueRoaming: WdsAutoconnectSettingRoaming }
    getStatus(): { returnType: boolean, valueStatus: WdsAutoconnectSetting }
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
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierType: WdsProfileType, valueProfileIdentifierFamily: WdsProfileFamily, valueProfileIdentifierIndex: number }
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
    getExtendedErrorCode(): { returnType: boolean, valueExtendedErrorCode: WdsDsProfileError }
    getResult(): boolean
    ref(): MessageWdsSetDefaultProfileNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetEventReportInput */
    getChannelRate(): { returnType: boolean, valueChannelRate: boolean }
    getCurrentDataBearerTechnology(): { returnType: boolean, valueCurrentDataBearerTechnology: boolean }
    getDataBearerTechnology(): { returnType: boolean, valueDataBearerTechnology: boolean }
    getDataCallStatus(): { returnType: boolean, valueDataCallStatus: boolean }
    getDataSystems(): { returnType: boolean, valueDataSystems: boolean }
    getDormancyStatus(): { returnType: boolean, valueDormancyStatus: boolean }
    getEvdoPmChange(): { returnType: boolean, valueEvdoPmChange: boolean }
    getExtendedDataBearerTechnology(): { returnType: boolean, valueExtendedDataBearerTechnology: boolean }
    getLimitedDataSystemStatus(): { returnType: boolean, valueLimitedDataSystemStatus: boolean }
    getMipStatus(): { returnType: boolean, valueMipStatus: number }
    getPdnFilterRemovals(): { returnType: boolean, valuePdnFilterRemovals: boolean }
    getPreferredDataSystem(): { returnType: boolean, valuePreferredDataSystem: boolean }
    getTransferStatistics(): { returnType: boolean, valueTransferStatisticsIntervalSeconds: number, valueTransferStatisticsIndicators: WdsSetEventReportTransferStatistics }
    getUplinkFlowControl(): { returnType: boolean, valueUplinkFlowControl: boolean }
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
    getPreference(): { returnType: boolean, valuePreference: WdsIpFamily }
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
    getAction(): { returnType: boolean, valueAction: WdsAttachPdnListAction }
    getList(): { returnType: boolean, valueList: number[] }
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
    getApn(): { returnType: boolean, valueApn: string }
    getAuthenticationPreference(): { returnType: boolean, valueAuthenticationPreference: WdsAuthentication }
    getCallType(): { returnType: boolean, valueCallType: WdsCallType }
    getEnableAutoconnect(): { returnType: boolean, valueEnableAutoconnect: boolean }
    getExtendedTechnologyPreference(): { returnType: boolean, valueExtendedTechnologyPreference: WdsExtendedTechnologyPreference }
    getIpFamilyPreference(): { returnType: boolean, valueIpFamilyPreference: WdsIpFamily }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number }
    getPassword(): { returnType: boolean, valuePassword: string }
    getPrimaryDnsAddressPreference(): { returnType: boolean, valuePrimaryDnsAddressPreference: number }
    getPrimaryNbnsAddressPreference(): { returnType: boolean, valuePrimaryNbnsAddressPreference: number }
    getProfileIndex3gpp(): { returnType: boolean, valueProfileIndex3gpp: number }
    getProfileIndex3gpp2(): { returnType: boolean, valueProfileIndex3gpp2: number }
    getSecondaryDnsAddressPreference(): { returnType: boolean, valueSecondaryDnsAddressPreference: number }
    getSecondaryNbnsAddressPreference(): { returnType: boolean, valueSecondaryNbnsAddressPreference: number }
    getTechnologyPreference(): { returnType: boolean, valueTechnologyPreference: WdsTechnologyPreference }
    getUsername(): { returnType: boolean, valueUsername: string }
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
    getCallEndReason(): { returnType: boolean, valueCallEndReason: WdsCallEndReason }
    getPacketDataHandle(): { returnType: boolean, valuePacketDataHandle: number }
    getResult(): boolean
    getVerboseCallEndReason(): { returnType: boolean, valueVerboseCallEndReasonType: WdsVerboseCallEndReasonType, valueVerboseCallEndReasonReason: number }
    ref(): MessageWdsStartNetworkOutput
    unref(): void
    static name: string
}
export class MessageWdsStopNetworkInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStopNetworkInput */
    getDisableAutoconnect(): { returnType: boolean, valueDisableAutoconnect: boolean }
    getPacketDataHandle(): { returnType: boolean, valuePacketDataHandle: number }
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
    getApnDisabledFlag(): { returnType: boolean, valueApnDisabledFlag: boolean }
    getApnName(): { returnType: boolean, valueApnName: string }
    getAuthentication(): { returnType: boolean, valueAuthentication: WdsAuthentication }
    getIpv4AddressPreference(): { returnType: boolean, valueIpv4AddressPreference: number }
    getPassword(): { returnType: boolean, valuePassword: string }
    getPdpContextNumber(): { returnType: boolean, valuePdpContextNumber: number }
    getPdpType(): { returnType: boolean, valuePdpType: WdsPdpType }
    getPrimaryIpv4DnsAddress(): { returnType: boolean, valuePrimaryIpv4DnsAddress: number }
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType, valueProfileIdentifierProfileIndex: number }
    getProfileName(): { returnType: boolean, valueProfileName: string }
    getRoamingDisallowedFlag(): { returnType: boolean, valueRoamingDisallowedFlag: boolean }
    getSecondaryIpv4DnsAddress(): { returnType: boolean, valueSecondaryIpv4DnsAddress: number }
    getUsername(): { returnType: boolean, valueUsername: string }
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
    getProfileIdentifier(): { returnType: boolean, valueProfileIdentifierProfileType: WdsProfileType, valueProfileIdentifierProfileIndex: number }
    getResult(): boolean
    ref(): MessageWdsSwiCreateProfileIndexedOutput
    unref(): void
    static name: string
}
export class MessageWmsDeleteInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsDeleteInput */
    getMemoryIndex(): { returnType: boolean, valueMemoryIndex: number }
    getMemoryStorage(): { returnType: boolean, valueMemoryStorage: WmsStorageType }
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode }
    getMessageTag(): { returnType: boolean, valueMessageTag: WmsMessageTagType }
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
    getMessageProtocol(): { returnType: boolean, valueMessageProtocol: WmsMessageProtocol }
    getResult(): boolean
    ref(): MessageWmsGetMessageProtocolOutput
    unref(): void
    static name: string
}
export class MessageWmsGetRoutesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsGetRoutesOutput */
    getResult(): boolean
    getRouteList(): { returnType: boolean, valueRouteList: MessageWmsGetRoutesOutputRouteListElement[] }
    getTransferStatusReport(): { returnType: boolean, valueTransferStatusReport: WmsTransferIndication }
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
    getList(): { returnType: boolean, valueList: any[] }
    getResult(): boolean
    ref(): MessageWmsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageWmsListMessagesInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsListMessagesInput */
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode }
    getMessageTag(): { returnType: boolean, valueMessageTag: WmsMessageTagType }
    getStorageType(): { returnType: boolean, valueStorageType: WmsStorageType }
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
    getMessageList(): { returnType: boolean, valueMessageList: MessageWmsListMessagesOutputMessageListElement[] }
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
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode }
    getMessageTag(): { returnType: boolean, valueMessageTagStorageType: WmsStorageType, valueMessageTagMemoryIndex: number, valueMessageTagMessageTag: WmsMessageTagType }
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
    getMessageMemoryStorageId(): { returnType: boolean, valueMessageMemoryStorageIdStorageType: WmsStorageType, valueMessageMemoryStorageIdMemoryIndex: number }
    getMessageMode(): { returnType: boolean, valueMessageMode: WmsMessageMode }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean }
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
    getRawMessageData(): { returnType: boolean, valueRawMessageDataMessageTag: WmsMessageTagType, valueRawMessageDataFormat: WmsMessageFormat, valueRawMessageDataRawData: any[] }
    getResult(): boolean
    ref(): MessageWmsRawReadOutput
    unref(): void
    static name: string
}
export class MessageWmsRawSendInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawSendInput */
    getCdmaFollowOnDc(): { returnType: boolean, valueCdmaFollowOnDcFollow: boolean }
    getCdmaForceOnDc(): { returnType: boolean, valueCdmaForceOnDcForce: boolean, valueCdmaForceOnDcServiceOption: WmsCdmaServiceOption }
    getGsmWcdmaLinkTimer(): { returnType: boolean, valueGsmWcdmaLinkTimer: number }
    getRawMessageData(): { returnType: boolean, valueRawMessageDataFormat: WmsMessageFormat, valueRawMessageDataRawData: any[] }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean }
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
    getCdmaCauseCode(): { returnType: boolean, valueCdmaCauseCode: WmsCdmaCauseCode }
    getCdmaErrorClass(): { returnType: boolean, valueCdmaErrorClass: WmsCdmaErrorClass }
    getGsmWcdmaCauseInfo(): { returnType: boolean, valueGsmWcdmaCauseInfoRpCause: WmsGsmUmtsRpCause, valueGsmWcdmaCauseInfoTpCause: WmsGsmUmtsTpCause }
    getMessageDeliveryFailureType(): { returnType: boolean, valueMessageDeliveryFailureType: WmsMessageDeliveryFailureType }
    getMessageId(): { returnType: boolean, valueMessageId: number }
    getResult(): boolean
    ref(): MessageWmsRawSendOutput
    unref(): void
    static name: string
}
export class MessageWmsRawWriteInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawWriteInput */
    getRawMessageData(): { returnType: boolean, valueRawMessageDataStorageType: WmsStorageType, valueRawMessageDataFormat: WmsMessageFormat, valueRawMessageDataRawData: any[] }
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
    getMemoryIndex(): { returnType: boolean, valueMemoryIndex: number }
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
    get3gpp2FailureInformation(): { returnType: boolean, value3gpp2FailureInformationErrorClass: WmsCdmaErrorClass, value3gpp2FailureInformationCauseCode: WmsCdmaCauseCode }
    get3gppFailureInformation(): { returnType: boolean, value3gppFailureInformationRpCause: WmsGsmUmtsRpCause, value3gppFailureInformationTpCause: WmsGsmUmtsTpCause }
    getInformation(): { returnType: boolean, valueInformationTransactionId: number, valueInformationMessageProtocol: WmsMessageProtocol, valueInformationSuccess: boolean }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean }
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
    getFailureCause(): { returnType: boolean, valueFailureCause: WmsAckFailureCause }
    getResult(): boolean
    ref(): MessageWmsSendAckOutput
    unref(): void
    static name: string
}
export class MessageWmsSendFromMemoryStorageInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendFromMemoryStorageInput */
    getInformation(): { returnType: boolean, valueInformationStorageType: WmsStorageType, valueInformationMemoryIndex: number, valueInformationMessageMode: WmsMessageMode }
    getSmsOnIms(): { returnType: boolean, valueSmsOnIms: boolean }
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
    getCdmaCauseCode(): { returnType: boolean, valueCdmaCauseCode: WmsCdmaCauseCode }
    getCdmaErrorClass(): { returnType: boolean, valueCdmaErrorClass: WmsCdmaErrorClass }
    getGsmWcdmaCauseInfo(): { returnType: boolean, valueGsmWcdmaCauseInfoRpCause: WmsGsmUmtsRpCause, valueGsmWcdmaCauseInfoTpCause: WmsGsmUmtsTpCause }
    getMessageDeliveryFailureType(): { returnType: boolean, valueMessageDeliveryFailureType: WmsMessageDeliveryFailureType }
    getMessageId(): { returnType: boolean, valueMessageId: number }
    getResult(): boolean
    ref(): MessageWmsSendFromMemoryStorageOutput
    unref(): void
    static name: string
}
export class MessageWmsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetEventReportInput */
    getNewMtMessageIndicator(): { returnType: boolean, valueNewMtMessageIndicatorReport: boolean }
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
    getRouteList(): { returnType: boolean, valueRouteList: MessageWmsSetRoutesInputRouteListElement[] }
    getTransferStatusReport(): { returnType: boolean, valueTransferStatusReport: WmsTransferIndication }
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