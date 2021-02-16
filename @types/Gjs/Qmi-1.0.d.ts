/**
 * Qmi-1.0
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

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
export function core_error_get_string(val: CoreError): string
export function core_error_quark(): GLib.Quark
export function ctl_data_format_get_string(val: CtlDataFormat): string
export function ctl_data_link_protocol_get_string(val: CtlDataLinkProtocol): string
export function ctl_flag_build_string_from_mask(mask: CtlFlag): string
export function data_endpoint_type_get_string(val: DataEndpointType): string
export function device_expected_data_format_get_string(val: DeviceExpectedDataFormat): string
export function device_open_flags_build_string_from_mask(mask: DeviceOpenFlags): string
export function device_release_client_flags_build_string_from_mask(mask: DeviceReleaseClientFlags): string
export function dms_activation_state_get_string(val: DmsActivationState): string
export function dms_band_capability_build_string_from_mask(mask: DmsBandCapability): string
export function dms_boot_image_download_mode_get_string(val: DmsBootImageDownloadMode): string
export function dms_data_service_capability_get_string(val: DmsDataServiceCapability): string
export function dms_firmware_image_type_get_string(val: DmsFirmwareImageType): string
export function dms_foxconn_device_mode_get_string(val: DmsFoxconnDeviceMode): string
export function dms_foxconn_firmware_version_type_get_string(val: DmsFoxconnFirmwareVersionType): string
export function dms_hp_device_mode_get_string(val: DmsHpDeviceMode): string
export function dms_lte_band_capability_build_string_from_mask(mask: DmsLteBandCapability): string
export function dms_mac_type_get_string(val: DmsMacType): string
export function dms_offline_reason_build_string_from_mask(mask: DmsOfflineReason): string
export function dms_operating_mode_get_string(val: DmsOperatingMode): string
export function dms_power_state_build_string_from_mask(mask: DmsPowerState): string
export function dms_radio_interface_get_string(val: DmsRadioInterface): string
export function dms_sim_capability_get_string(val: DmsSimCapability): string
export function dms_swi_usb_composition_get_description(value: DmsSwiUsbComposition): string
export function dms_swi_usb_composition_get_string(val: DmsSwiUsbComposition): string
export function dms_time_reference_type_get_string(val: DmsTimeReferenceType): string
export function dms_time_source_get_string(val: DmsTimeSource): string
export function dms_uim_facility_get_string(val: DmsUimFacility): string
export function dms_uim_facility_state_get_string(val: DmsUimFacilityState): string
export function dms_uim_pin_id_get_string(val: DmsUimPinId): string
export function dms_uim_pin_status_get_string(val: DmsUimPinStatus): string
export function dms_uim_state_get_string(val: DmsUimState): string
export function dsd_apn_type_get_string(val: DsdApnType): string
export function dsd_apn_type_preference_build_string_from_mask(mask: DsdApnTypePreference): string
export function endian_get_string(val: Endian): string
export function gas_firmware_listing_mode_get_string(val: GasFirmwareListingMode): string
export function loc_delete_cell_database_build_string_from_mask(mask: LocDeleteCellDatabase): string
export function loc_delete_clock_info_build_string_from_mask(mask: LocDeleteClockInfo): string
export function loc_delete_gnss_data_build_string_from_mask(mask: LocDeleteGnssData): string
export function loc_delete_sv_info_build_string_from_mask(mask: LocDeleteSvInfo): string
export function loc_engine_state_get_string(val: LocEngineState): string
export function loc_event_registration_flag_build_string_from_mask(mask: LocEventRegistrationFlag): string
export function loc_fix_recurrence_type_get_string(val: LocFixRecurrenceType): string
export function loc_health_status_get_string(val: LocHealthStatus): string
export function loc_indication_status_get_string(val: LocIndicationStatus): string
export function loc_intermediate_report_state_get_string(val: LocIntermediateReportState): string
export function loc_lock_type_get_string(val: LocLockType): string
export function loc_navigation_data_get_string(val: LocNavigationData): string
export function loc_nmea_type_build_string_from_mask(mask: LocNmeaType): string
export function loc_operation_mode_get_string(val: LocOperationMode): string
export function loc_predicted_orbits_data_format_get_string(val: LocPredictedOrbitsDataFormat): string
export function loc_reliability_get_string(val: LocReliability): string
export function loc_satellite_status_get_string(val: LocSatelliteStatus): string
export function loc_satellite_valid_information_build_string_from_mask(mask: LocSatelliteValidInformation): string
export function loc_sensor_data_usage_build_string_from_mask(mask: LocSensorDataUsage): string
export function loc_server_address_type_build_string_from_mask(mask: LocServerAddressType): string
export function loc_server_type_get_string(val: LocServerType): string
export function loc_session_status_get_string(val: LocSessionStatus): string
export function loc_system_get_string(val: LocSystem): string
export function loc_technology_used_build_string_from_mask(mask: LocTechnologyUsed): string
export function loc_time_source_get_string(val: LocTimeSource): string
export function message_add_raw_tlv(self: Message, type: number, raw: number, length: number): boolean
export function message_foreach_raw_tlv(self: Message): void
export function message_get_client_id(self: Message): number
export function message_get_data(self: Message): [ /* returnType */ number, /* length */ number ]
export function message_get_length(self: Message): number
export function message_get_message_id(self: Message): number
export function message_get_printable_full(self: Message, context: MessageContext, line_prefix: string): string
export function message_get_raw(self: Message): [ /* returnType */ number, /* length */ number ]
export function message_get_raw_tlv(self: Message, type: number): [ /* returnType */ number, /* length */ number ]
export function message_get_service(self: Message): Service
export function message_get_tlv_printable(self: Message, line_prefix: string, type: number, raw: number, raw_length: number): string
export function message_get_transaction_id(self: Message): number
export function message_is_indication(self: Message): boolean
export function message_is_request(self: Message): boolean
export function message_is_response(self: Message): boolean
export function message_new(service: Service, client_id: number, transaction_id: number, message_id: number): Message
export function message_new_from_data(service: Service, client_id: number, qmi_data: Uint8Array): [ /* returnType */ Message, /* qmi_data */ Uint8Array ]
export function message_new_from_raw(raw: Uint8Array): [ /* returnType */ Message, /* raw */ Uint8Array ]
export function message_ref(self: Message): Message
export function message_response_new(request: Message, error: ProtocolError): Message
export function message_set_transaction_id(self: Message, transaction_id: number): void
export function message_tlv_read_fixed_size_string(self: Message, tlv_offset: number, offset: number, string_length: number): [ /* returnType */ boolean, /* offset */ number, /* out */ string ]
export function message_tlv_read_gdouble(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_gfloat_endian(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_gint16(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_gint32(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_gint64(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_gint8(self: Message, tlv_offset: number, offset: number): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_guint16(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_guint32(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_guint64(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_guint8(self: Message, tlv_offset: number, offset: number): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_init(self: Message, type: number): [ /* returnType */ number, /* out_tlv_length */ number ]
export function message_tlv_read_remaining_size(self: Message, tlv_offset: number, offset: number): number
export function message_tlv_read_sized_guint(self: Message, tlv_offset: number, offset: number, n_bytes: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
export function message_tlv_read_string(self: Message, tlv_offset: number, offset: number, n_size_prefix_bytes: number, max_size: number): [ /* returnType */ boolean, /* offset */ number, /* out */ string ]
export function message_tlv_write_complete(self: Message, tlv_offset: number): boolean
export function message_tlv_write_gint16(self: Message, endian: Endian, in_: number): boolean
export function message_tlv_write_gint32(self: Message, endian: Endian, in_: number): boolean
export function message_tlv_write_gint64(self: Message, endian: Endian, in_: number): boolean
export function message_tlv_write_gint8(self: Message, in_: number): boolean
export function message_tlv_write_guint16(self: Message, endian: Endian, in_: number): boolean
export function message_tlv_write_guint32(self: Message, endian: Endian, in_: number): boolean
export function message_tlv_write_guint64(self: Message, endian: Endian, in_: number): boolean
export function message_tlv_write_guint8(self: Message, in_: number): boolean
export function message_tlv_write_init(self: Message, type: number): number
export function message_tlv_write_reset(self: Message, tlv_offset: number): void
export function message_tlv_write_sized_guint(self: Message, n_bytes: number, endian: Endian, in_: number): boolean
export function message_tlv_write_string(self: Message, n_size_prefix_bytes: number, in_: string, in_length: number): boolean
export function message_unref(self: Message): void
export function nas_active_band_get_string(val: NasActiveBand): string
export function nas_attach_state_get_string(val: NasAttachState): string
export function nas_band_preference_build_string_from_mask(mask: NasBandPreference): string
export function nas_boolean_get_string(val: NasBoolean): string
export function nas_call_barring_status_get_string(val: NasCallBarringStatus): string
export function nas_cdma_pilot_type_get_string(val: NasCdmaPilotType): string
export function nas_cdma_prl_preference_get_string(val: NasCdmaPrlPreference): string
export function nas_cell_broadcast_capability_get_string(val: NasCellBroadcastCapability): string
export function nas_change_duration_get_string(val: NasChangeDuration): string
export function nas_data_capability_get_string(val: NasDataCapability): string
export function nas_day_of_week_get_string(val: NasDayOfWeek): string
export function nas_daylight_savings_adjustment_get_string(val: NasDaylightSavingsAdjustment): string
export function nas_dl_bandwidth_get_string(val: NasDLBandwidth): string
export function nas_drx_get_string(val: NasDrx): string
export function nas_evdo_sinr_level_get_string(val: NasEvdoSinrLevel): string
export function nas_gsm_wcdma_acquisition_order_preference_get_string(val: NasGsmWcdmaAcquisitionOrderPreference): string
export function nas_hdr_personality_get_string(val: NasHdrPersonality): string
export function nas_hdr_protocol_revision_get_string(val: NasHdrProtocolRevision): string
export function nas_lte_band_preference_build_string_from_mask(mask: NasLteBandPreference): string
export function nas_lte_cell_access_status_get_string(val: NasLteCellAccessStatus): string
export function nas_lte_registration_domain_get_string(val: NasLteRegistrationDomain): string
export function nas_lte_voice_domain_get_string(val: NasLteVoiceDomain): string
export function nas_network_description_display_get_string(val: NasNetworkDescriptionDisplay): string
export function nas_network_description_encoding_get_string(val: NasNetworkDescriptionEncoding): string
export function nas_network_name_display_condition_build_string_from_mask(mask: NasNetworkNameDisplayCondition): string
export function nas_network_name_source_get_string(val: NasNetworkNameSource): string
export function nas_network_register_type_get_string(val: NasNetworkRegisterType): string
export function nas_network_scan_result_get_string(val: NasNetworkScanResult): string
export function nas_network_scan_type_build_string_from_mask(mask: NasNetworkScanType): string
export function nas_network_selection_preference_get_string(val: NasNetworkSelectionPreference): string
export function nas_network_selection_registration_restriction_get_string(val: NasNetworkSelectionRegistrationRestriction): string
export function nas_network_service_domain_get_string(val: NasNetworkServiceDomain): string
export function nas_network_status_build_string_from_mask(mask: NasNetworkStatus): string
export function nas_network_type_get_string(val: NasNetworkType): string
export function nas_plmn_encoding_scheme_get_string(val: NasPlmnEncodingScheme): string
export function nas_plmn_language_id_get_string(val: NasPlmnLanguageId): string
export function nas_plmn_name_country_initials_get_string(val: NasPlmnNameCountryInitials): string
export function nas_plmn_name_spare_bits_get_string(val: NasPlmnNameSpareBits): string
export function nas_preference_duration_get_string(val: NasPreferenceDuration): string
export function nas_ps_attach_action_get_string(val: NasPsAttachAction): string
export function nas_radio_interface_get_string(val: NasRadioInterface): string
export function nas_radio_technology_preference_build_string_from_mask(mask: NasRadioTechnologyPreference): string
export function nas_rat_mode_preference_build_string_from_mask(mask: NasRatModePreference): string
export function nas_read_string_from_network_description_encoded_array(encoding: NasNetworkDescriptionEncoding, array: Uint8Array): string
export function nas_read_string_from_plmn_encoded_array(encoding: NasPlmnEncodingScheme, array: Uint8Array): string
export function nas_registration_state_get_string(val: NasRegistrationState): string
export function nas_roaming_indicator_status_get_string(val: NasRoamingIndicatorStatus): string
export function nas_roaming_preference_get_string(val: NasRoamingPreference): string
export function nas_roaming_status_get_string(val: NasRoamingStatus): string
export function nas_scell_state_get_string(val: NasScellState): string
export function nas_service_domain_preference_get_string(val: NasServiceDomainPreference): string
export function nas_service_status_get_string(val: NasServiceStatus): string
export function nas_signal_strength_request_build_string_from_mask(mask: NasSignalStrengthRequest): string
export function nas_sim_reject_state_get_string(val: NasSimRejectState): string
export function nas_swi_emm_connection_state_get_string(val: NasSwiEmmConnectionState): string
export function nas_swi_emm_state_get_string(val: NasSwiEmmState): string
export function nas_swi_ims_reg_state_get_string(val: NasSwiImsRegState): string
export function nas_swi_modem_mode_get_string(val: NasSwiModemMode): string
export function nas_swi_ps_state_get_string(val: NasSwiPsState): string
export function nas_swi_system_mode_get_string(val: NasSwiSystemMode): string
export function nas_td_scdma_band_preference_build_string_from_mask(mask: NasTdScdmaBandPreference): string
export function nas_usage_preference_get_string(val: NasUsagePreference): string
export function nas_voice_domain_preference_get_string(val: NasVoiceDomainPreference): string
export function nas_wcdma_hs_service_get_string(val: NasWcdmaHsService): string
export function nas_wcdma_rrc_state_get_string(val: NasWcdmaRrcState): string
export function oma_hfa_feature_done_state_get_string(val: OmaHfaFeatureDoneState): string
export function oma_session_failed_reason_get_string(val: OmaSessionFailedReason): string
export function oma_session_state_get_string(val: OmaSessionState): string
export function oma_session_type_get_string(val: OmaSessionType): string
export function pbm_event_registration_flag_build_string_from_mask(mask: PbmEventRegistrationFlag): string
export function pbm_phonebook_type_build_string_from_mask(mask: PbmPhonebookType): string
export function pbm_session_type_get_string(val: PbmSessionType): string
export function pdc_configuration_type_get_string(val: PdcConfigurationType): string
export function pds_data_valid_build_string_from_mask(mask: PdsDataValid): string
export function pds_network_mode_get_string(val: PdsNetworkMode): string
export function pds_operating_mode_get_string(val: PdsOperatingMode): string
export function pds_operation_mode_get_string(val: PdsOperationMode): string
export function pds_position_session_status_get_string(val: PdsPositionSessionStatus): string
export function pds_tracking_session_state_get_string(val: PdsTrackingSessionState): string
export function protocol_error_get_string(val: ProtocolError): string
export function protocol_error_quark(): GLib.Quark
export function qos_event_get_string(val: QosEvent): string
export function qos_status_get_string(val: QosStatus): string
export function sar_rf_state_get_string(val: SarRfState): string
export function service_flag_build_string_from_mask(mask: ServiceFlag): string
export function service_get_string(val: Service): string
export function sio_port_get_string(val: SioPort): string
export function uim_card_application_personalization_feature_get_string(val: UimCardApplicationPersonalizationFeature): string
export function uim_card_application_personalization_state_get_string(val: UimCardApplicationPersonalizationState): string
export function uim_card_application_state_get_string(val: UimCardApplicationState): string
export function uim_card_application_type_get_string(val: UimCardApplicationType): string
export function uim_card_error_get_string(val: UimCardError): string
export function uim_card_protocol_get_string(val: UimCardProtocol): string
export function uim_card_state_get_string(val: UimCardState): string
export function uim_event_registration_flag_build_string_from_mask(mask: UimEventRegistrationFlag): string
export function uim_file_type_get_string(val: UimFileType): string
export function uim_physical_card_state_get_string(val: UimPhysicalCardState): string
export function uim_pin_id_get_string(val: UimPinId): string
export function uim_pin_state_get_string(val: UimPinState): string
export function uim_refresh_mode_get_string(val: UimRefreshMode): string
export function uim_refresh_stage_get_string(val: UimRefreshStage): string
export function uim_security_attribute_build_string_from_mask(mask: UimSecurityAttribute): string
export function uim_security_attribute_logic_get_string(val: UimSecurityAttributeLogic): string
export function uim_session_type_get_string(val: UimSessionType): string
export function uim_slot_state_get_string(val: UimSlotState): string
export function utils_get_traces_enabled(): boolean
export function utils_set_traces_enabled(enabled: boolean): void
export function voice_alpha_data_coding_scheme_get_string(val: VoiceAlphaDataCodingScheme): string
export function voice_als_get_string(val: VoiceAls): string
export function voice_call_control_result_type_get_string(val: VoiceCallControlResultType): string
export function voice_call_control_supplementary_service_type_get_string(val: VoiceCallControlSupplementaryServiceType): string
export function voice_call_direction_get_string(val: VoiceCallDirection): string
export function voice_call_end_reason_get_string(val: VoiceCallEndReason): string
export function voice_call_mode_get_string(val: VoiceCallMode): string
export function voice_call_state_get_string(val: VoiceCallState): string
export function voice_call_type_get_string(val: VoiceCallType): string
export function voice_domain_get_string(val: VoiceDomain): string
export function voice_presentation_get_string(val: VoicePresentation): string
export function voice_privacy_get_string(val: VoicePrivacy): string
export function voice_service_option_get_string(val: VoiceServiceOption): string
export function voice_tty_mode_get_string(val: VoiceTtyMode): string
export function voice_user_action_get_string(val: VoiceUserAction): string
export function voice_uss_data_coding_scheme_get_string(val: VoiceUssDataCodingScheme): string
export function voice_wcdma_amr_status_build_string_from_mask(mask: VoiceWcdmaAmrStatus): string
export function wda_data_aggregation_protocol_get_string(val: WdaDataAggregationProtocol): string
export function wda_link_layer_protocol_get_string(val: WdaLinkLayerProtocol): string
export function wds_attach_pdn_list_action_get_string(val: WdsAttachPdnListAction): string
export function wds_authentication_build_string_from_mask(mask: WdsAuthentication): string
export function wds_autoconnect_setting_get_string(val: WdsAutoconnectSetting): string
export function wds_autoconnect_setting_roaming_get_string(val: WdsAutoconnectSettingRoaming): string
export function wds_call_end_reason_get_string(val: WdsCallEndReason): string
export function wds_call_type_get_string(val: WdsCallType): string
export function wds_client_type_get_string(val: WdsClientType): string
export function wds_connection_status_get_string(val: WdsConnectionStatus): string
export function wds_data_bearer_technology_get_string(val: WdsDataBearerTechnology): string
export function wds_data_call_status_get_string(val: WdsDataCallStatus): string
export function wds_data_call_type_get_string(val: WdsDataCallType): string
export function wds_data_system_get_string(val: WdsDataSystem): string
export function wds_data_system_network_type_get_string(val: WdsDataSystemNetworkType): string
export function wds_delivery_order_get_string(val: WdsDeliveryOrder): string
export function wds_dormancy_status_get_string(val: WdsDormancyStatus): string
export function wds_ds_profile_error_get_string(val: WdsDsProfileError): string
export function wds_extended_data_bearer_technology_3gpp2_build_string_from_mask(mask: WdsExtendedDataBearerTechnology3gpp2): string
export function wds_extended_data_bearer_technology_3gpp_build_string_from_mask(mask: WdsExtendedDataBearerTechnology3gpp): string
export function wds_extended_technology_preference_get_string(val: WdsExtendedTechnologyPreference): string
export function wds_get_current_settings_requested_settings_build_string_from_mask(mask: WdsGetCurrentSettingsRequestedSettings): string
export function wds_ip_family_get_string(val: WdsIpFamily): string
export function wds_ip_support_type_get_string(val: WdsIpSupportType): string
export function wds_network_type_get_string(val: WdsNetworkType): string
export function wds_packet_statistics_mask_flag_build_string_from_mask(mask: WdsPacketStatisticsMaskFlag): string
export function wds_pdp_data_compression_type_get_string(val: WdsPdpDataCompressionType): string
export function wds_pdp_header_compression_type_get_string(val: WdsPdpHeaderCompressionType): string
export function wds_pdp_type_get_string(val: WdsPdpType): string
export function wds_profile_family_get_string(val: WdsProfileFamily): string
export function wds_profile_type_get_string(val: WdsProfileType): string
export function wds_qos_class_identifier_get_string(val: WdsQosClassIdentifier): string
export function wds_radio_access_technology_get_string(val: WdsRadioAccessTechnology): string
export function wds_rat_3gpp2_build_string_from_mask(mask: WdsRat3gpp2): string
export function wds_rat_3gpp_build_string_from_mask(mask: WdsRat3gpp): string
export function wds_sdu_erroneous_delivery_get_string(val: WdsSduErroneousDelivery): string
export function wds_sdu_error_ratio_get_string(val: WdsSduErrorRatio): string
export function wds_sdu_residual_bit_error_ratio_get_string(val: WdsSduResidualBitErrorRatio): string
export function wds_set_event_report_transfer_statistics_build_string_from_mask(mask: WdsSetEventReportTransferStatistics): string
export function wds_so_cdma1x_build_string_from_mask(mask: WdsSoCdma1x): string
export function wds_so_evdo_rev0_build_string_from_mask(mask: WdsSoEvdoRev0): string
export function wds_so_evdo_reva_build_string_from_mask(mask: WdsSoEvdoRevA): string
export function wds_so_evdo_revb_build_string_from_mask(mask: WdsSoEvdoRevB): string
export function wds_technology_preference_build_string_from_mask(mask: WdsTechnologyPreference): string
export function wds_tethered_call_type_get_string(val: WdsTetheredCallType): string
export function wds_traffic_class_get_string(val: WdsTrafficClass): string
export function wds_verbose_call_end_reason_3gpp_get_string(val: WdsVerboseCallEndReason3gpp): string
export function wds_verbose_call_end_reason_cm_get_string(val: WdsVerboseCallEndReasonCm): string
export function wds_verbose_call_end_reason_ehrpd_get_string(val: WdsVerboseCallEndReasonEhrpd): string
export function wds_verbose_call_end_reason_get_string(type: WdsVerboseCallEndReasonType, reason: number): string
export function wds_verbose_call_end_reason_internal_get_string(val: WdsVerboseCallEndReasonInternal): string
export function wds_verbose_call_end_reason_ipv6_get_string(val: WdsVerboseCallEndReasonIpv6): string
export function wds_verbose_call_end_reason_mip_get_string(val: WdsVerboseCallEndReasonMip): string
export function wds_verbose_call_end_reason_ppp_get_string(val: WdsVerboseCallEndReasonPpp): string
export function wds_verbose_call_end_reason_type_get_string(val: WdsVerboseCallEndReasonType): string
export function wms_ack_failure_cause_get_string(val: WmsAckFailureCause): string
export function wms_ack_indicator_get_string(val: WmsAckIndicator): string
export function wms_cdma_cause_code_get_string(val: WmsCdmaCauseCode): string
export function wms_cdma_error_class_get_string(val: WmsCdmaErrorClass): string
export function wms_cdma_service_option_get_string(val: WmsCdmaServiceOption): string
export function wms_gsm_umts_rp_cause_get_string(val: WmsGsmUmtsRpCause): string
export function wms_gsm_umts_tp_cause_get_string(val: WmsGsmUmtsTpCause): string
export function wms_message_class_get_string(val: WmsMessageClass): string
export function wms_message_delivery_failure_type_get_string(val: WmsMessageDeliveryFailureType): string
export function wms_message_format_get_string(val: WmsMessageFormat): string
export function wms_message_mode_get_string(val: WmsMessageMode): string
export function wms_message_protocol_get_string(val: WmsMessageProtocol): string
export function wms_message_tag_type_get_string(val: WmsMessageTagType): string
export function wms_message_type_get_string(val: WmsMessageType): string
export function wms_notification_type_get_string(val: WmsNotificationType): string
export function wms_receipt_action_get_string(val: WmsReceiptAction): string
export function wms_storage_type_get_string(val: WmsStorageType): string
export function wms_transfer_indication_get_string(val: WmsTransferIndication): string
export interface DeviceCommandAbortableParseResponseFn {
    (self: Device, abort_response: Message): boolean
}
export interface MessageForeachRawTlvFn {
    (type: number, value: number, length: number): void
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    client_cid?: number
    client_device?: Device
    client_service?: Service
    client_version_major?: number
    client_version_minor?: number
}
export class Client {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientCtl_ConstructProps extends Client_ConstructProps {
}
export class ClientCtl {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientCtl */
    allocate_cid(input: MessageCtlAllocateCidInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    allocate_cid_finish(res: Gio.AsyncResult): MessageCtlAllocateCidOutput
    get_version_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_version_info_finish(res: Gio.AsyncResult): MessageCtlGetVersionInfoOutput
    internal_proxy_open(input: MessageCtlInternalProxyOpenInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    internal_proxy_open_finish(res: Gio.AsyncResult): MessageCtlInternalProxyOpenOutput
    release_cid(input: MessageCtlReleaseCidInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    release_cid_finish(res: Gio.AsyncResult): MessageCtlReleaseCidOutput
    set_data_format(input: MessageCtlSetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_data_format_finish(res: Gio.AsyncResult): MessageCtlSetDataFormatOutput
    set_instance_id(input: MessageCtlSetInstanceIdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_instance_id_finish(res: Gio.AsyncResult): MessageCtlSetInstanceIdOutput
    sync(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sync_finish(res: Gio.AsyncResult): MessageCtlSyncOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientCtl */
    connect(sigName: "sync", callback: (($obj: ClientCtl) => void)): number
    connect_after(sigName: "sync", callback: (($obj: ClientCtl) => void)): number
    emit(sigName: "sync"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientCtl_ConstructProps)
    _init (config?: ClientCtl_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientDms_ConstructProps extends Client_ConstructProps {
}
export class ClientDms {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientDms */
    activate_automatic(input: MessageDmsActivateAutomaticInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_automatic_finish(res: Gio.AsyncResult): MessageDmsActivateAutomaticOutput
    activate_manual(input: MessageDmsActivateManualInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_manual_finish(res: Gio.AsyncResult): MessageDmsActivateManualOutput
    delete_stored_image(input: MessageDmsDeleteStoredImageInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_stored_image_finish(res: Gio.AsyncResult): MessageDmsDeleteStoredImageOutput
    foxconn_change_device_mode(input: MessageDmsFoxconnChangeDeviceModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    foxconn_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsFoxconnChangeDeviceModeOutput
    foxconn_get_firmware_version(input: MessageDmsFoxconnGetFirmwareVersionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    foxconn_get_firmware_version_finish(res: Gio.AsyncResult): MessageDmsFoxconnGetFirmwareVersionOutput
    get_activation_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_activation_state_finish(res: Gio.AsyncResult): MessageDmsGetActivationStateOutput
    get_alt_net_config(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_alt_net_config_finish(res: Gio.AsyncResult): MessageDmsGetAltNetConfigOutput
    get_band_capabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_band_capabilities_finish(res: Gio.AsyncResult): MessageDmsGetBandCapabilitiesOutput
    get_boot_image_download_mode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_boot_image_download_mode_finish(res: Gio.AsyncResult): MessageDmsGetBootImageDownloadModeOutput
    get_capabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_capabilities_finish(res: Gio.AsyncResult): MessageDmsGetCapabilitiesOutput
    get_factory_sku(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_factory_sku_finish(res: Gio.AsyncResult): MessageDmsGetFactorySkuOutput
    get_firmware_preference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_firmware_preference_finish(res: Gio.AsyncResult): MessageDmsGetFirmwarePreferenceOutput
    get_hardware_revision(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_hardware_revision_finish(res: Gio.AsyncResult): MessageDmsGetHardwareRevisionOutput
    get_ids(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_ids_finish(res: Gio.AsyncResult): MessageDmsGetIdsOutput
    get_mac_address(input: MessageDmsGetMacAddressInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_mac_address_finish(res: Gio.AsyncResult): MessageDmsGetMacAddressOutput
    get_manufacturer(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_manufacturer_finish(res: Gio.AsyncResult): MessageDmsGetManufacturerOutput
    get_model(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_model_finish(res: Gio.AsyncResult): MessageDmsGetModelOutput
    get_msisdn(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_msisdn_finish(res: Gio.AsyncResult): MessageDmsGetMsisdnOutput
    get_operating_mode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_operating_mode_finish(res: Gio.AsyncResult): MessageDmsGetOperatingModeOutput
    get_power_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_power_state_finish(res: Gio.AsyncResult): MessageDmsGetPowerStateOutput
    get_prl_version(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_prl_version_finish(res: Gio.AsyncResult): MessageDmsGetPrlVersionOutput
    get_revision(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_revision_finish(res: Gio.AsyncResult): MessageDmsGetRevisionOutput
    get_software_version(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_software_version_finish(res: Gio.AsyncResult): MessageDmsGetSoftwareVersionOutput
    get_stored_image_info(input: MessageDmsGetStoredImageInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_stored_image_info_finish(res: Gio.AsyncResult): MessageDmsGetStoredImageInfoOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageDmsGetSupportedMessagesOutput
    get_time(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_time_finish(res: Gio.AsyncResult): MessageDmsGetTimeOutput
    get_user_lock_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_user_lock_state_finish(res: Gio.AsyncResult): MessageDmsGetUserLockStateOutput
    hp_change_device_mode(input: MessageDmsHpChangeDeviceModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    hp_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsHpChangeDeviceModeOutput
    list_stored_images(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_stored_images_finish(res: Gio.AsyncResult): MessageDmsListStoredImagesOutput
    read_eri_file(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_eri_file_finish(res: Gio.AsyncResult): MessageDmsReadEriFileOutput
    read_user_data(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_user_data_finish(res: Gio.AsyncResult): MessageDmsReadUserDataOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageDmsResetOutput
    restore_factory_defaults(input: MessageDmsRestoreFactoryDefaultsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    restore_factory_defaults_finish(res: Gio.AsyncResult): MessageDmsRestoreFactoryDefaultsOutput
    set_alt_net_config(input: MessageDmsSetAltNetConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_alt_net_config_finish(res: Gio.AsyncResult): MessageDmsSetAltNetConfigOutput
    set_boot_image_download_mode(input: MessageDmsSetBootImageDownloadModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_boot_image_download_mode_finish(res: Gio.AsyncResult): MessageDmsSetBootImageDownloadModeOutput
    set_event_report(input: MessageDmsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageDmsSetEventReportOutput
    set_fcc_authentication(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_fcc_authentication_finish(res: Gio.AsyncResult): MessageDmsSetFccAuthenticationOutput
    set_firmware_id(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_firmware_id_finish(res: Gio.AsyncResult): MessageDmsSetFirmwareIdOutput
    set_firmware_preference(input: MessageDmsSetFirmwarePreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_firmware_preference_finish(res: Gio.AsyncResult): MessageDmsSetFirmwarePreferenceOutput
    set_operating_mode(input: MessageDmsSetOperatingModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_operating_mode_finish(res: Gio.AsyncResult): MessageDmsSetOperatingModeOutput
    set_service_programming_code(input: MessageDmsSetServiceProgrammingCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_service_programming_code_finish(res: Gio.AsyncResult): MessageDmsSetServiceProgrammingCodeOutput
    set_time(input: MessageDmsSetTimeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_time_finish(res: Gio.AsyncResult): MessageDmsSetTimeOutput
    set_user_lock_code(input: MessageDmsSetUserLockCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_user_lock_code_finish(res: Gio.AsyncResult): MessageDmsSetUserLockCodeOutput
    set_user_lock_state(input: MessageDmsSetUserLockStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_user_lock_state_finish(res: Gio.AsyncResult): MessageDmsSetUserLockStateOutput
    swi_get_current_firmware(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_get_current_firmware_finish(res: Gio.AsyncResult): MessageDmsSwiGetCurrentFirmwareOutput
    swi_get_usb_composition(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_get_usb_composition_finish(res: Gio.AsyncResult): MessageDmsSwiGetUsbCompositionOutput
    swi_set_usb_composition(input: MessageDmsSwiSetUsbCompositionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_set_usb_composition_finish(res: Gio.AsyncResult): MessageDmsSwiSetUsbCompositionOutput
    uim_change_pin(input: MessageDmsUimChangePinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_change_pin_finish(res: Gio.AsyncResult): MessageDmsUimChangePinOutput
    uim_get_ck_status(input: MessageDmsUimGetCkStatusInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_ck_status_finish(res: Gio.AsyncResult): MessageDmsUimGetCkStatusOutput
    uim_get_iccid(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_iccid_finish(res: Gio.AsyncResult): MessageDmsUimGetIccidOutput
    uim_get_imsi(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_imsi_finish(res: Gio.AsyncResult): MessageDmsUimGetImsiOutput
    uim_get_pin_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_pin_status_finish(res: Gio.AsyncResult): MessageDmsUimGetPinStatusOutput
    uim_get_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_state_finish(res: Gio.AsyncResult): MessageDmsUimGetStateOutput
    uim_set_ck_protection(input: MessageDmsUimSetCkProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_set_ck_protection_finish(res: Gio.AsyncResult): MessageDmsUimSetCkProtectionOutput
    uim_set_pin_protection(input: MessageDmsUimSetPinProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_set_pin_protection_finish(res: Gio.AsyncResult): MessageDmsUimSetPinProtectionOutput
    uim_unblock_ck(input: MessageDmsUimUnblockCkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_unblock_ck_finish(res: Gio.AsyncResult): MessageDmsUimUnblockCkOutput
    uim_unblock_pin(input: MessageDmsUimUnblockPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_unblock_pin_finish(res: Gio.AsyncResult): MessageDmsUimUnblockPinOutput
    uim_verify_pin(input: MessageDmsUimVerifyPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_verify_pin_finish(res: Gio.AsyncResult): MessageDmsUimVerifyPinOutput
    validate_service_programming_code(input: MessageDmsValidateServiceProgrammingCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    validate_service_programming_code_finish(res: Gio.AsyncResult): MessageDmsValidateServiceProgrammingCodeOutput
    write_user_data(input: MessageDmsWriteUserDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_user_data_finish(res: Gio.AsyncResult): MessageDmsWriteUserDataOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientDms */
    connect(sigName: "event-report", callback: (($obj: ClientDms, output: IndicationDmsEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientDms, output: IndicationDmsEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationDmsEventReportOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientDms_ConstructProps)
    _init (config?: ClientDms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientDsd_ConstructProps extends Client_ConstructProps {
}
export class ClientDsd {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientDsd */
    get_apn_info(input: MessageDsdGetApnInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_apn_info_finish(res: Gio.AsyncResult): MessageDsdGetApnInfoOutput
    set_apn_type(input: MessageDsdSetApnTypeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_apn_type_finish(res: Gio.AsyncResult): MessageDsdSetApnTypeOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientDsd_ConstructProps)
    _init (config?: ClientDsd_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientGas_ConstructProps extends Client_ConstructProps {
}
export class ClientGas {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientGas */
    dms_get_firmware_list(input: MessageGasDmsGetFirmwareListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dms_get_firmware_list_finish(res: Gio.AsyncResult): MessageGasDmsGetFirmwareListOutput
    dms_set_active_firmware(input: MessageGasDmsSetActiveFirmwareInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dms_set_active_firmware_finish(res: Gio.AsyncResult): MessageGasDmsSetActiveFirmwareOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientGas_ConstructProps)
    _init (config?: ClientGas_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientGms_ConstructProps extends Client_ConstructProps {
}
export class ClientGms {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientGms */
    test_get_value(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    test_get_value_finish(res: Gio.AsyncResult): MessageGmsTestGetValueOutput
    test_set_value(input: MessageGmsTestSetValueInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    test_set_value_finish(res: Gio.AsyncResult): MessageGmsTestSetValueOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientGms_ConstructProps)
    _init (config?: ClientGms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientLoc_ConstructProps extends Client_ConstructProps {
}
export class ClientLoc {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientLoc */
    delete_assistance_data(input: MessageLocDeleteAssistanceDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_assistance_data_finish(res: Gio.AsyncResult): MessageLocDeleteAssistanceDataOutput
    get_engine_lock(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_engine_lock_finish(res: Gio.AsyncResult): MessageLocGetEngineLockOutput
    get_nmea_types(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_nmea_types_finish(res: Gio.AsyncResult): MessageLocGetNmeaTypesOutput
    get_operation_mode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_operation_mode_finish(res: Gio.AsyncResult): MessageLocGetOperationModeOutput
    get_predicted_orbits_data_source(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_predicted_orbits_data_source_finish(res: Gio.AsyncResult): MessageLocGetPredictedOrbitsDataSourceOutput
    get_server(input: MessageLocGetServerInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_server_finish(res: Gio.AsyncResult): MessageLocGetServerOutput
    inject_predicted_orbits_data(input: MessageLocInjectPredictedOrbitsDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    inject_predicted_orbits_data_finish(res: Gio.AsyncResult): MessageLocInjectPredictedOrbitsDataOutput
    inject_xtra_data(input: MessageLocInjectXtraDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    inject_xtra_data_finish(res: Gio.AsyncResult): MessageLocInjectXtraDataOutput
    register_events(input: MessageLocRegisterEventsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_events_finish(res: Gio.AsyncResult): MessageLocRegisterEventsOutput
    set_engine_lock(input: MessageLocSetEngineLockInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_engine_lock_finish(res: Gio.AsyncResult): MessageLocSetEngineLockOutput
    set_nmea_types(input: MessageLocSetNmeaTypesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_nmea_types_finish(res: Gio.AsyncResult): MessageLocSetNmeaTypesOutput
    set_operation_mode(input: MessageLocSetOperationModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_operation_mode_finish(res: Gio.AsyncResult): MessageLocSetOperationModeOutput
    set_server(input: MessageLocSetServerInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_server_finish(res: Gio.AsyncResult): MessageLocSetServerOutput
    start(input: MessageLocStartInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_finish(res: Gio.AsyncResult): MessageLocStartOutput
    stop(input: MessageLocStopInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stop_finish(res: Gio.AsyncResult): MessageLocStopOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientLoc */
    connect(sigName: "delete-assistance-data", callback: (($obj: ClientLoc, output: IndicationLocDeleteAssistanceDataOutput) => void)): number
    connect_after(sigName: "delete-assistance-data", callback: (($obj: ClientLoc, output: IndicationLocDeleteAssistanceDataOutput) => void)): number
    emit(sigName: "delete-assistance-data", output: IndicationLocDeleteAssistanceDataOutput): void
    connect(sigName: "engine-state", callback: (($obj: ClientLoc, output: IndicationLocEngineStateOutput) => void)): number
    connect_after(sigName: "engine-state", callback: (($obj: ClientLoc, output: IndicationLocEngineStateOutput) => void)): number
    emit(sigName: "engine-state", output: IndicationLocEngineStateOutput): void
    connect(sigName: "fix-recurrence-type", callback: (($obj: ClientLoc, output: IndicationLocFixRecurrenceTypeOutput) => void)): number
    connect_after(sigName: "fix-recurrence-type", callback: (($obj: ClientLoc, output: IndicationLocFixRecurrenceTypeOutput) => void)): number
    emit(sigName: "fix-recurrence-type", output: IndicationLocFixRecurrenceTypeOutput): void
    connect(sigName: "get-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocGetEngineLockOutput) => void)): number
    connect_after(sigName: "get-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocGetEngineLockOutput) => void)): number
    emit(sigName: "get-engine-lock", output: IndicationLocGetEngineLockOutput): void
    connect(sigName: "get-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocGetNmeaTypesOutput) => void)): number
    connect_after(sigName: "get-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocGetNmeaTypesOutput) => void)): number
    emit(sigName: "get-nmea-types", output: IndicationLocGetNmeaTypesOutput): void
    connect(sigName: "get-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocGetOperationModeOutput) => void)): number
    connect_after(sigName: "get-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocGetOperationModeOutput) => void)): number
    emit(sigName: "get-operation-mode", output: IndicationLocGetOperationModeOutput): void
    connect(sigName: "get-predicted-orbits-data-source", callback: (($obj: ClientLoc, output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void)): number
    connect_after(sigName: "get-predicted-orbits-data-source", callback: (($obj: ClientLoc, output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void)): number
    emit(sigName: "get-predicted-orbits-data-source", output: IndicationLocGetPredictedOrbitsDataSourceOutput): void
    connect(sigName: "get-server", callback: (($obj: ClientLoc, output: IndicationLocGetServerOutput) => void)): number
    connect_after(sigName: "get-server", callback: (($obj: ClientLoc, output: IndicationLocGetServerOutput) => void)): number
    emit(sigName: "get-server", output: IndicationLocGetServerOutput): void
    connect(sigName: "gnss-sv-info", callback: (($obj: ClientLoc, output: IndicationLocGnssSvInfoOutput) => void)): number
    connect_after(sigName: "gnss-sv-info", callback: (($obj: ClientLoc, output: IndicationLocGnssSvInfoOutput) => void)): number
    emit(sigName: "gnss-sv-info", output: IndicationLocGnssSvInfoOutput): void
    connect(sigName: "inject-predicted-orbits-data", callback: (($obj: ClientLoc, output: IndicationLocInjectPredictedOrbitsDataOutput) => void)): number
    connect_after(sigName: "inject-predicted-orbits-data", callback: (($obj: ClientLoc, output: IndicationLocInjectPredictedOrbitsDataOutput) => void)): number
    emit(sigName: "inject-predicted-orbits-data", output: IndicationLocInjectPredictedOrbitsDataOutput): void
    connect(sigName: "inject-xtra-data", callback: (($obj: ClientLoc, output: IndicationLocInjectXtraDataOutput) => void)): number
    connect_after(sigName: "inject-xtra-data", callback: (($obj: ClientLoc, output: IndicationLocInjectXtraDataOutput) => void)): number
    emit(sigName: "inject-xtra-data", output: IndicationLocInjectXtraDataOutput): void
    connect(sigName: "nmea", callback: (($obj: ClientLoc, output: IndicationLocNmeaOutput) => void)): number
    connect_after(sigName: "nmea", callback: (($obj: ClientLoc, output: IndicationLocNmeaOutput) => void)): number
    emit(sigName: "nmea", output: IndicationLocNmeaOutput): void
    connect(sigName: "position-report", callback: (($obj: ClientLoc, output: IndicationLocPositionReportOutput) => void)): number
    connect_after(sigName: "position-report", callback: (($obj: ClientLoc, output: IndicationLocPositionReportOutput) => void)): number
    emit(sigName: "position-report", output: IndicationLocPositionReportOutput): void
    connect(sigName: "set-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocSetEngineLockOutput) => void)): number
    connect_after(sigName: "set-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocSetEngineLockOutput) => void)): number
    emit(sigName: "set-engine-lock", output: IndicationLocSetEngineLockOutput): void
    connect(sigName: "set-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocSetNmeaTypesOutput) => void)): number
    connect_after(sigName: "set-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocSetNmeaTypesOutput) => void)): number
    emit(sigName: "set-nmea-types", output: IndicationLocSetNmeaTypesOutput): void
    connect(sigName: "set-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocSetOperationModeOutput) => void)): number
    connect_after(sigName: "set-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocSetOperationModeOutput) => void)): number
    emit(sigName: "set-operation-mode", output: IndicationLocSetOperationModeOutput): void
    connect(sigName: "set-server", callback: (($obj: ClientLoc, output: IndicationLocSetServerOutput) => void)): number
    connect_after(sigName: "set-server", callback: (($obj: ClientLoc, output: IndicationLocSetServerOutput) => void)): number
    emit(sigName: "set-server", output: IndicationLocSetServerOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientLoc_ConstructProps)
    _init (config?: ClientLoc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientNas_ConstructProps extends Client_ConstructProps {
}
export class ClientNas {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientNas */
    attach_detach(input: MessageNasAttachDetachInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    attach_detach_finish(res: Gio.AsyncResult): MessageNasAttachDetachOutput
    config_signal_info(input: MessageNasConfigSignalInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    config_signal_info_finish(res: Gio.AsyncResult): MessageNasConfigSignalInfoOutput
    force_network_search(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    force_network_search_finish(res: Gio.AsyncResult): MessageNasForceNetworkSearchOutput
    get_cdma_position_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_cdma_position_info_finish(res: Gio.AsyncResult): MessageNasGetCdmaPositionInfoOutput
    get_cell_location_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_cell_location_info_finish(res: Gio.AsyncResult): MessageNasGetCellLocationInfoOutput
    get_drx(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_drx_finish(res: Gio.AsyncResult): MessageNasGetDrxOutput
    get_home_network(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_home_network_finish(res: Gio.AsyncResult): MessageNasGetHomeNetworkOutput
    get_lte_cphy_ca_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_lte_cphy_ca_info_finish(res: Gio.AsyncResult): MessageNasGetLteCphyCaInfoOutput
    get_operator_name(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_operator_name_finish(res: Gio.AsyncResult): MessageNasGetOperatorNameOutput
    get_plmn_name(input: MessageNasGetPlmnNameInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_plmn_name_finish(res: Gio.AsyncResult): MessageNasGetPlmnNameOutput
    get_rf_band_information(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_rf_band_information_finish(res: Gio.AsyncResult): MessageNasGetRfBandInformationOutput
    get_serving_system(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_serving_system_finish(res: Gio.AsyncResult): MessageNasGetServingSystemOutput
    get_signal_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_signal_info_finish(res: Gio.AsyncResult): MessageNasGetSignalInfoOutput
    get_signal_strength(input: MessageNasGetSignalStrengthInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_signal_strength_finish(res: Gio.AsyncResult): MessageNasGetSignalStrengthOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageNasGetSupportedMessagesOutput
    get_system_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_system_info_finish(res: Gio.AsyncResult): MessageNasGetSystemInfoOutput
    get_system_selection_preference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_system_selection_preference_finish(res: Gio.AsyncResult): MessageNasGetSystemSelectionPreferenceOutput
    get_technology_preference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_technology_preference_finish(res: Gio.AsyncResult): MessageNasGetTechnologyPreferenceOutput
    get_tx_rx_info(input: MessageNasGetTxRxInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_tx_rx_info_finish(res: Gio.AsyncResult): MessageNasGetTxRxInfoOutput
    initiate_network_register(input: MessageNasInitiateNetworkRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiate_network_register_finish(res: Gio.AsyncResult): MessageNasInitiateNetworkRegisterOutput
    network_scan(input: MessageNasNetworkScanInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    network_scan_finish(res: Gio.AsyncResult): MessageNasNetworkScanOutput
    register_indications(input: MessageNasRegisterIndicationsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_indications_finish(res: Gio.AsyncResult): MessageNasRegisterIndicationsOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageNasResetOutput
    set_event_report(input: MessageNasSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageNasSetEventReportOutput
    set_system_selection_preference(input: MessageNasSetSystemSelectionPreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_system_selection_preference_finish(res: Gio.AsyncResult): MessageNasSetSystemSelectionPreferenceOutput
    set_technology_preference(input: MessageNasSetTechnologyPreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_technology_preference_finish(res: Gio.AsyncResult): MessageNasSetTechnologyPreferenceOutput
    swi_get_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_get_status_finish(res: Gio.AsyncResult): MessageNasSwiGetStatusOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientNas */
    connect(sigName: "event-report", callback: (($obj: ClientNas, output: IndicationNasEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientNas, output: IndicationNasEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationNasEventReportOutput): void
    connect(sigName: "network-time", callback: (($obj: ClientNas, output: IndicationNasNetworkTimeOutput) => void)): number
    connect_after(sigName: "network-time", callback: (($obj: ClientNas, output: IndicationNasNetworkTimeOutput) => void)): number
    emit(sigName: "network-time", output: IndicationNasNetworkTimeOutput): void
    connect(sigName: "operator-name", callback: (($obj: ClientNas, output: IndicationNasOperatorNameOutput) => void)): number
    connect_after(sigName: "operator-name", callback: (($obj: ClientNas, output: IndicationNasOperatorNameOutput) => void)): number
    emit(sigName: "operator-name", output: IndicationNasOperatorNameOutput): void
    connect(sigName: "serving-system", callback: (($obj: ClientNas, output: IndicationNasServingSystemOutput) => void)): number
    connect_after(sigName: "serving-system", callback: (($obj: ClientNas, output: IndicationNasServingSystemOutput) => void)): number
    emit(sigName: "serving-system", output: IndicationNasServingSystemOutput): void
    connect(sigName: "signal-info", callback: (($obj: ClientNas, output: IndicationNasSignalInfoOutput) => void)): number
    connect_after(sigName: "signal-info", callback: (($obj: ClientNas, output: IndicationNasSignalInfoOutput) => void)): number
    emit(sigName: "signal-info", output: IndicationNasSignalInfoOutput): void
    connect(sigName: "system-info", callback: (($obj: ClientNas, output: IndicationNasSystemInfoOutput) => void)): number
    connect_after(sigName: "system-info", callback: (($obj: ClientNas, output: IndicationNasSystemInfoOutput) => void)): number
    emit(sigName: "system-info", output: IndicationNasSystemInfoOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientNas_ConstructProps)
    _init (config?: ClientNas_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientOma_ConstructProps extends Client_ConstructProps {
}
export class ClientOma {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientOma */
    cancel_session(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cancel_session_finish(res: Gio.AsyncResult): MessageOmaCancelSessionOutput
    get_feature_setting(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_feature_setting_finish(res: Gio.AsyncResult): MessageOmaGetFeatureSettingOutput
    get_session_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_session_info_finish(res: Gio.AsyncResult): MessageOmaGetSessionInfoOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageOmaResetOutput
    send_selection(input: MessageOmaSendSelectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_selection_finish(res: Gio.AsyncResult): MessageOmaSendSelectionOutput
    set_event_report(input: MessageOmaSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageOmaSetEventReportOutput
    set_feature_setting(input: MessageOmaSetFeatureSettingInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_feature_setting_finish(res: Gio.AsyncResult): MessageOmaSetFeatureSettingOutput
    start_session(input: MessageOmaStartSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_session_finish(res: Gio.AsyncResult): MessageOmaStartSessionOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientOma */
    connect(sigName: "event-report", callback: (($obj: ClientOma, output: IndicationOmaEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientOma, output: IndicationOmaEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationOmaEventReportOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientOma_ConstructProps)
    _init (config?: ClientOma_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPbm_ConstructProps extends Client_ConstructProps {
}
export class ClientPbm {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientPbm */
    get_all_capabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_all_capabilities_finish(res: Gio.AsyncResult): MessagePbmGetAllCapabilitiesOutput
    get_capabilities(input: MessagePbmGetCapabilitiesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_capabilities_finish(res: Gio.AsyncResult): MessagePbmGetCapabilitiesOutput
    indication_register(input: MessagePbmIndicationRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indication_register_finish(res: Gio.AsyncResult): MessagePbmIndicationRegisterOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientPbm_ConstructProps)
    _init (config?: ClientPbm_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPdc_ConstructProps extends Client_ConstructProps {
}
export class ClientPdc {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientPdc */
    activate_config(input: MessagePdcActivateConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_config_finish(res: Gio.AsyncResult): MessagePdcActivateConfigOutput
    config_change(input: MessagePdcConfigChangeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    config_change_finish(res: Gio.AsyncResult): MessagePdcConfigChangeOutput
    deactivate_config(input: MessagePdcDeactivateConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deactivate_config_finish(res: Gio.AsyncResult): MessagePdcDeactivateConfigOutput
    delete_config(input: MessagePdcDeleteConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_config_finish(res: Gio.AsyncResult): MessagePdcDeleteConfigOutput
    get_config_info(input: MessagePdcGetConfigInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_config_info_finish(res: Gio.AsyncResult): MessagePdcGetConfigInfoOutput
    get_config_limits(input: MessagePdcGetConfigLimitsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_config_limits_finish(res: Gio.AsyncResult): MessagePdcGetConfigLimitsOutput
    get_default_config_info(input: MessagePdcGetDefaultConfigInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_config_info_finish(res: Gio.AsyncResult): MessagePdcGetDefaultConfigInfoOutput
    get_selected_config(input: MessagePdcGetSelectedConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_selected_config_finish(res: Gio.AsyncResult): MessagePdcGetSelectedConfigOutput
    list_configs(input: MessagePdcListConfigsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_configs_finish(res: Gio.AsyncResult): MessagePdcListConfigsOutput
    load_config(input: MessagePdcLoadConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_config_finish(res: Gio.AsyncResult): MessagePdcLoadConfigOutput
    register(input: MessagePdcRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_finish(res: Gio.AsyncResult): MessagePdcRegisterOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessagePdcResetOutput
    set_selected_config(input: MessagePdcSetSelectedConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_selected_config_finish(res: Gio.AsyncResult): MessagePdcSetSelectedConfigOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientPdc */
    connect(sigName: "activate-config", callback: (($obj: ClientPdc, output: IndicationPdcActivateConfigOutput) => void)): number
    connect_after(sigName: "activate-config", callback: (($obj: ClientPdc, output: IndicationPdcActivateConfigOutput) => void)): number
    emit(sigName: "activate-config", output: IndicationPdcActivateConfigOutput): void
    connect(sigName: "deactivate-config", callback: (($obj: ClientPdc, output: IndicationPdcDeactivateConfigOutput) => void)): number
    connect_after(sigName: "deactivate-config", callback: (($obj: ClientPdc, output: IndicationPdcDeactivateConfigOutput) => void)): number
    emit(sigName: "deactivate-config", output: IndicationPdcDeactivateConfigOutput): void
    connect(sigName: "get-config-info", callback: (($obj: ClientPdc, output: IndicationPdcGetConfigInfoOutput) => void)): number
    connect_after(sigName: "get-config-info", callback: (($obj: ClientPdc, output: IndicationPdcGetConfigInfoOutput) => void)): number
    emit(sigName: "get-config-info", output: IndicationPdcGetConfigInfoOutput): void
    connect(sigName: "get-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcGetSelectedConfigOutput) => void)): number
    connect_after(sigName: "get-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcGetSelectedConfigOutput) => void)): number
    emit(sigName: "get-selected-config", output: IndicationPdcGetSelectedConfigOutput): void
    connect(sigName: "list-configs", callback: (($obj: ClientPdc, output: IndicationPdcListConfigsOutput) => void)): number
    connect_after(sigName: "list-configs", callback: (($obj: ClientPdc, output: IndicationPdcListConfigsOutput) => void)): number
    emit(sigName: "list-configs", output: IndicationPdcListConfigsOutput): void
    connect(sigName: "load-config", callback: (($obj: ClientPdc, output: IndicationPdcLoadConfigOutput) => void)): number
    connect_after(sigName: "load-config", callback: (($obj: ClientPdc, output: IndicationPdcLoadConfigOutput) => void)): number
    emit(sigName: "load-config", output: IndicationPdcLoadConfigOutput): void
    connect(sigName: "set-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcSetSelectedConfigOutput) => void)): number
    connect_after(sigName: "set-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcSetSelectedConfigOutput) => void)): number
    emit(sigName: "set-selected-config", output: IndicationPdcSetSelectedConfigOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientPdc_ConstructProps)
    _init (config?: ClientPdc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPds_ConstructProps extends Client_ConstructProps {
}
export class ClientPds {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientPds */
    get_agps_config(input: MessagePdsGetAgpsConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_agps_config_finish(res: Gio.AsyncResult): MessagePdsGetAgpsConfigOutput
    get_auto_tracking_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_auto_tracking_state_finish(res: Gio.AsyncResult): MessagePdsGetAutoTrackingStateOutput
    get_default_tracking_session(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_tracking_session_finish(res: Gio.AsyncResult): MessagePdsGetDefaultTrackingSessionOutput
    get_gps_service_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_gps_service_state_finish(res: Gio.AsyncResult): MessagePdsGetGpsServiceStateOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessagePdsResetOutput
    set_agps_config(input: MessagePdsSetAgpsConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_agps_config_finish(res: Gio.AsyncResult): MessagePdsSetAgpsConfigOutput
    set_auto_tracking_state(input: MessagePdsSetAutoTrackingStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_auto_tracking_state_finish(res: Gio.AsyncResult): MessagePdsSetAutoTrackingStateOutput
    set_default_tracking_session(input: MessagePdsSetDefaultTrackingSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_default_tracking_session_finish(res: Gio.AsyncResult): MessagePdsSetDefaultTrackingSessionOutput
    set_event_report(input: MessagePdsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessagePdsSetEventReportOutput
    set_gps_service_state(input: MessagePdsSetGpsServiceStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_gps_service_state_finish(res: Gio.AsyncResult): MessagePdsSetGpsServiceStateOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientPds */
    connect(sigName: "event-report", callback: (($obj: ClientPds, output: IndicationPdsEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientPds, output: IndicationPdsEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationPdsEventReportOutput): void
    connect(sigName: "gps-ready", callback: (($obj: ClientPds) => void)): number
    connect_after(sigName: "gps-ready", callback: (($obj: ClientPds) => void)): number
    emit(sigName: "gps-ready"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientPds_ConstructProps)
    _init (config?: ClientPds_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientQos_ConstructProps extends Client_ConstructProps {
}
export class ClientQos {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientQos */
    get_flow_status(input: MessageQosGetFlowStatusInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_flow_status_finish(res: Gio.AsyncResult): MessageQosGetFlowStatusOutput
    get_network_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_network_status_finish(res: Gio.AsyncResult): MessageQosGetNetworkStatusOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageQosResetOutput
    swi_read_data_stats(input: MessageQosSwiReadDataStatsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_read_data_stats_finish(res: Gio.AsyncResult): MessageQosSwiReadDataStatsOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientQos */
    connect(sigName: "flow-status", callback: (($obj: ClientQos, output: IndicationQosFlowStatusOutput) => void)): number
    connect_after(sigName: "flow-status", callback: (($obj: ClientQos, output: IndicationQosFlowStatusOutput) => void)): number
    emit(sigName: "flow-status", output: IndicationQosFlowStatusOutput): void
    connect(sigName: "network-status", callback: (($obj: ClientQos, output: IndicationQosNetworkStatusOutput) => void)): number
    connect_after(sigName: "network-status", callback: (($obj: ClientQos, output: IndicationQosNetworkStatusOutput) => void)): number
    emit(sigName: "network-status", output: IndicationQosNetworkStatusOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientQos_ConstructProps)
    _init (config?: ClientQos_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientSar_ConstructProps extends Client_ConstructProps {
}
export class ClientSar {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientSar */
    rf_get_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rf_get_state_finish(res: Gio.AsyncResult): MessageSarRfGetStateOutput
    rf_set_state(input: MessageSarRfSetStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rf_set_state_finish(res: Gio.AsyncResult): MessageSarRfSetStateOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientSar_ConstructProps)
    _init (config?: ClientSar_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientUim_ConstructProps extends Client_ConstructProps {
}
export class ClientUim {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientUim */
    change_pin(input: MessageUimChangePinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    change_pin_finish(res: Gio.AsyncResult): MessageUimChangePinOutput
    change_provisioning_session(input: MessageUimChangeProvisioningSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    change_provisioning_session_finish(res: Gio.AsyncResult): MessageUimChangeProvisioningSessionOutput
    get_card_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_card_status_finish(res: Gio.AsyncResult): MessageUimGetCardStatusOutput
    get_file_attributes(input: MessageUimGetFileAttributesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_file_attributes_finish(res: Gio.AsyncResult): MessageUimGetFileAttributesOutput
    get_slot_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_slot_status_finish(res: Gio.AsyncResult): MessageUimGetSlotStatusOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageUimGetSupportedMessagesOutput
    power_off_sim(input: MessageUimPowerOffSimInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    power_off_sim_finish(res: Gio.AsyncResult): MessageUimPowerOffSimOutput
    power_on_sim(input: MessageUimPowerOnSimInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    power_on_sim_finish(res: Gio.AsyncResult): MessageUimPowerOnSimOutput
    read_record(input: MessageUimReadRecordInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_record_finish(res: Gio.AsyncResult): MessageUimReadRecordOutput
    read_transparent(input: MessageUimReadTransparentInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_transparent_finish(res: Gio.AsyncResult): MessageUimReadTransparentOutput
    refresh_complete(input: MessageUimRefreshCompleteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_complete_finish(res: Gio.AsyncResult): MessageUimRefreshCompleteOutput
    refresh_register(input: MessageUimRefreshRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_register_all(input: MessageUimRefreshRegisterAllInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_register_all_finish(res: Gio.AsyncResult): MessageUimRefreshRegisterAllOutput
    refresh_register_finish(res: Gio.AsyncResult): MessageUimRefreshRegisterOutput
    register_events(input: MessageUimRegisterEventsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_events_finish(res: Gio.AsyncResult): MessageUimRegisterEventsOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageUimResetOutput
    set_pin_protection(input: MessageUimSetPinProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_pin_protection_finish(res: Gio.AsyncResult): MessageUimSetPinProtectionOutput
    switch_slot(input: MessageUimSwitchSlotInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    switch_slot_finish(res: Gio.AsyncResult): MessageUimSwitchSlotOutput
    unblock_pin(input: MessageUimUnblockPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unblock_pin_finish(res: Gio.AsyncResult): MessageUimUnblockPinOutput
    verify_pin(input: MessageUimVerifyPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_pin_finish(res: Gio.AsyncResult): MessageUimVerifyPinOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientUim */
    connect(sigName: "card-status", callback: (($obj: ClientUim, output: IndicationUimCardStatusOutput) => void)): number
    connect_after(sigName: "card-status", callback: (($obj: ClientUim, output: IndicationUimCardStatusOutput) => void)): number
    emit(sigName: "card-status", output: IndicationUimCardStatusOutput): void
    connect(sigName: "refresh", callback: (($obj: ClientUim, output: IndicationUimRefreshOutput) => void)): number
    connect_after(sigName: "refresh", callback: (($obj: ClientUim, output: IndicationUimRefreshOutput) => void)): number
    emit(sigName: "refresh", output: IndicationUimRefreshOutput): void
    connect(sigName: "slot-status", callback: (($obj: ClientUim, output: IndicationUimSlotStatusOutput) => void)): number
    connect_after(sigName: "slot-status", callback: (($obj: ClientUim, output: IndicationUimSlotStatusOutput) => void)): number
    emit(sigName: "slot-status", output: IndicationUimSlotStatusOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientUim_ConstructProps)
    _init (config?: ClientUim_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientVoice_ConstructProps extends Client_ConstructProps {
}
export class ClientVoice {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientVoice */
    answer_call(input: MessageVoiceAnswerCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    answer_call_finish(res: Gio.AsyncResult): MessageVoiceAnswerCallOutput
    answer_ussd(input: MessageVoiceAnswerUssdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    answer_ussd_finish(res: Gio.AsyncResult): MessageVoiceAnswerUssdOutput
    cancel_ussd(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cancel_ussd_finish(res: Gio.AsyncResult): MessageVoiceCancelUssdOutput
    dial_call(input: MessageVoiceDialCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dial_call_finish(res: Gio.AsyncResult): MessageVoiceDialCallOutput
    end_call(input: MessageVoiceEndCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    end_call_finish(res: Gio.AsyncResult): MessageVoiceEndCallOutput
    get_config(input: MessageVoiceGetConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_config_finish(res: Gio.AsyncResult): MessageVoiceGetConfigOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageVoiceGetSupportedMessagesOutput
    indication_register(input: MessageVoiceIndicationRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indication_register_finish(res: Gio.AsyncResult): MessageVoiceIndicationRegisterOutput
    originate_ussd(input: MessageVoiceOriginateUssdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    originate_ussd_finish(res: Gio.AsyncResult): MessageVoiceOriginateUssdOutput
    originate_ussd_no_wait(input: MessageVoiceOriginateUssdNoWaitInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    originate_ussd_no_wait_finish(res: Gio.AsyncResult): MessageVoiceOriginateUssdNoWaitOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientVoice */
    connect(sigName: "all-call-status", callback: (($obj: ClientVoice, output: IndicationVoiceAllCallStatusOutput) => void)): number
    connect_after(sigName: "all-call-status", callback: (($obj: ClientVoice, output: IndicationVoiceAllCallStatusOutput) => void)): number
    emit(sigName: "all-call-status", output: IndicationVoiceAllCallStatusOutput): void
    connect(sigName: "originate-ussd-no-wait", callback: (($obj: ClientVoice, output: IndicationVoiceOriginateUssdNoWaitOutput) => void)): number
    connect_after(sigName: "originate-ussd-no-wait", callback: (($obj: ClientVoice, output: IndicationVoiceOriginateUssdNoWaitOutput) => void)): number
    emit(sigName: "originate-ussd-no-wait", output: IndicationVoiceOriginateUssdNoWaitOutput): void
    connect(sigName: "release-ussd", callback: (($obj: ClientVoice) => void)): number
    connect_after(sigName: "release-ussd", callback: (($obj: ClientVoice) => void)): number
    emit(sigName: "release-ussd"): void
    connect(sigName: "ussd", callback: (($obj: ClientVoice, output: IndicationVoiceUssdOutput) => void)): number
    connect_after(sigName: "ussd", callback: (($obj: ClientVoice, output: IndicationVoiceUssdOutput) => void)): number
    emit(sigName: "ussd", output: IndicationVoiceUssdOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientVoice_ConstructProps)
    _init (config?: ClientVoice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWda_ConstructProps extends Client_ConstructProps {
}
export class ClientWda {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientWda */
    get_data_format(input: MessageWdaGetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data_format_finish(res: Gio.AsyncResult): MessageWdaGetDataFormatOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageWdaGetSupportedMessagesOutput
    set_data_format(input: MessageWdaSetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_data_format_finish(res: Gio.AsyncResult): MessageWdaSetDataFormatOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientWda_ConstructProps)
    _init (config?: ClientWda_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWds_ConstructProps extends Client_ConstructProps {
}
export class ClientWds {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientWds */
    bind_data_port(input: MessageWdsBindDataPortInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bind_data_port_finish(res: Gio.AsyncResult): MessageWdsBindDataPortOutput
    bind_mux_data_port(input: MessageWdsBindMuxDataPortInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bind_mux_data_port_finish(res: Gio.AsyncResult): MessageWdsBindMuxDataPortOutput
    create_profile(input: MessageWdsCreateProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_profile_finish(res: Gio.AsyncResult): MessageWdsCreateProfileOutput
    delete_profile(input: MessageWdsDeleteProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_profile_finish(res: Gio.AsyncResult): MessageWdsDeleteProfileOutput
    get_autoconnect_settings(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_autoconnect_settings_finish(res: Gio.AsyncResult): MessageWdsGetAutoconnectSettingsOutput
    get_channel_rates(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_channel_rates_finish(res: Gio.AsyncResult): MessageWdsGetChannelRatesOutput
    get_current_data_bearer_technology(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_current_data_bearer_technology_finish(res: Gio.AsyncResult): MessageWdsGetCurrentDataBearerTechnologyOutput
    get_current_settings(input: MessageWdsGetCurrentSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_current_settings_finish(res: Gio.AsyncResult): MessageWdsGetCurrentSettingsOutput
    get_data_bearer_technology(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data_bearer_technology_finish(res: Gio.AsyncResult): MessageWdsGetDataBearerTechnologyOutput
    get_default_profile_number(input: MessageWdsGetDefaultProfileNumberInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_profile_number_finish(res: Gio.AsyncResult): MessageWdsGetDefaultProfileNumberOutput
    get_default_settings(input: MessageWdsGetDefaultSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_settings_finish(res: Gio.AsyncResult): MessageWdsGetDefaultSettingsOutput
    get_dormancy_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_dormancy_status_finish(res: Gio.AsyncResult): MessageWdsGetDormancyStatusOutput
    get_lte_attach_parameters(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_lte_attach_parameters_finish(res: Gio.AsyncResult): MessageWdsGetLteAttachParametersOutput
    get_lte_attach_pdn_list(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_lte_attach_pdn_list_finish(res: Gio.AsyncResult): MessageWdsGetLteAttachPdnListOutput
    get_max_lte_attach_pdn_number(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_max_lte_attach_pdn_number_finish(res: Gio.AsyncResult): MessageWdsGetMaxLteAttachPdnNumberOutput
    get_packet_service_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_packet_service_status_finish(res: Gio.AsyncResult): MessageWdsGetPacketServiceStatusOutput
    get_packet_statistics(input: MessageWdsGetPacketStatisticsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_packet_statistics_finish(res: Gio.AsyncResult): MessageWdsGetPacketStatisticsOutput
    get_pdn_throttle_info(input: MessageWdsGetPdnThrottleInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_pdn_throttle_info_finish(res: Gio.AsyncResult): MessageWdsGetPdnThrottleInfoOutput
    get_profile_list(input: MessageWdsGetProfileListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_profile_list_finish(res: Gio.AsyncResult): MessageWdsGetProfileListOutput
    get_profile_settings(input: MessageWdsGetProfileSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_profile_settings_finish(res: Gio.AsyncResult): MessageWdsGetProfileSettingsOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageWdsGetSupportedMessagesOutput
    go_active(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    go_active_finish(res: Gio.AsyncResult): MessageWdsGoActiveOutput
    go_dormant(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    go_dormant_finish(res: Gio.AsyncResult): MessageWdsGoDormantOutput
    modify_profile(input: MessageWdsModifyProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_profile_finish(res: Gio.AsyncResult): MessageWdsModifyProfileOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageWdsResetOutput
    set_autoconnect_settings(input: MessageWdsSetAutoconnectSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_autoconnect_settings_finish(res: Gio.AsyncResult): MessageWdsSetAutoconnectSettingsOutput
    set_default_profile_number(input: MessageWdsSetDefaultProfileNumberInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_default_profile_number_finish(res: Gio.AsyncResult): MessageWdsSetDefaultProfileNumberOutput
    set_event_report(input: MessageWdsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageWdsSetEventReportOutput
    set_ip_family(input: MessageWdsSetIpFamilyInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_ip_family_finish(res: Gio.AsyncResult): MessageWdsSetIpFamilyOutput
    set_lte_attach_pdn_list(input: MessageWdsSetLteAttachPdnListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_lte_attach_pdn_list_finish(res: Gio.AsyncResult): MessageWdsSetLteAttachPdnListOutput
    start_network(input: MessageWdsStartNetworkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_network_finish(res: Gio.AsyncResult): MessageWdsStartNetworkOutput
    stop_network(input: MessageWdsStopNetworkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stop_network_finish(res: Gio.AsyncResult): MessageWdsStopNetworkOutput
    swi_create_profile_indexed(input: MessageWdsSwiCreateProfileIndexedInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_create_profile_indexed_finish(res: Gio.AsyncResult): MessageWdsSwiCreateProfileIndexedOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientWds */
    connect(sigName: "event-report", callback: (($obj: ClientWds, output: IndicationWdsEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientWds, output: IndicationWdsEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationWdsEventReportOutput): void
    connect(sigName: "packet-service-status", callback: (($obj: ClientWds, output: IndicationWdsPacketServiceStatusOutput) => void)): number
    connect_after(sigName: "packet-service-status", callback: (($obj: ClientWds, output: IndicationWdsPacketServiceStatusOutput) => void)): number
    emit(sigName: "packet-service-status", output: IndicationWdsPacketServiceStatusOutput): void
    connect(sigName: "set-lte-attach-pdn-list", callback: (($obj: ClientWds, output: IndicationWdsSetLteAttachPdnListOutput) => void)): number
    connect_after(sigName: "set-lte-attach-pdn-list", callback: (($obj: ClientWds, output: IndicationWdsSetLteAttachPdnListOutput) => void)): number
    emit(sigName: "set-lte-attach-pdn-list", output: IndicationWdsSetLteAttachPdnListOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientWds_ConstructProps)
    _init (config?: ClientWds_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWms_ConstructProps extends Client_ConstructProps {
}
export class ClientWms {
    /* Properties of Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.ClientWms */
    delete(input: MessageWmsDeleteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(res: Gio.AsyncResult): MessageWmsDeleteOutput
    get_message_protocol(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_protocol_finish(res: Gio.AsyncResult): MessageWmsGetMessageProtocolOutput
    get_routes(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_routes_finish(res: Gio.AsyncResult): MessageWmsGetRoutesOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageWmsGetSupportedMessagesOutput
    list_messages(input: MessageWmsListMessagesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_messages_finish(res: Gio.AsyncResult): MessageWmsListMessagesOutput
    modify_tag(input: MessageWmsModifyTagInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_tag_finish(res: Gio.AsyncResult): MessageWmsModifyTagOutput
    raw_read(input: MessageWmsRawReadInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    raw_read_finish(res: Gio.AsyncResult): MessageWmsRawReadOutput
    raw_send(input: MessageWmsRawSendInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    raw_send_finish(res: Gio.AsyncResult): MessageWmsRawSendOutput
    raw_write(input: MessageWmsRawWriteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    raw_write_finish(res: Gio.AsyncResult): MessageWmsRawWriteOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageWmsResetOutput
    send_ack(input: MessageWmsSendAckInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_ack_finish(res: Gio.AsyncResult): MessageWmsSendAckOutput
    send_from_memory_storage(input: MessageWmsSendFromMemoryStorageInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_from_memory_storage_finish(res: Gio.AsyncResult): MessageWmsSendFromMemoryStorageOutput
    set_event_report(input: MessageWmsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageWmsSetEventReportOutput
    set_routes(input: MessageWmsSetRoutesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_routes_finish(res: Gio.AsyncResult): MessageWmsSetRoutesOutput
    /* Methods of Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.ClientWms */
    connect(sigName: "event-report", callback: (($obj: ClientWms, output: IndicationWmsEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientWms, output: IndicationWmsEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationWmsEventReportOutput): void
    connect(sigName: "smsc-address", callback: (($obj: ClientWms, output: IndicationWmsSmscAddressOutput) => void)): number
    connect_after(sigName: "smsc-address", callback: (($obj: ClientWms, output: IndicationWmsSmscAddressOutput) => void)): number
    emit(sigName: "smsc-address", output: IndicationWmsSmscAddressOutput): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientWms_ConstructProps)
    _init (config?: ClientWms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    device_file?: Gio.File
    device_no_file_check?: boolean
    device_proxy_path?: string
}
export class Device {
    /* Properties of Qmi.Device */
    readonly device_wwan_iface: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.Device */
    add_link(mux_id: number, base_ifname: string, ifname_prefix: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_link_finish(res: Gio.AsyncResult, mux_id: number): string
    allocate_client(service: Service, cid: number, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    allocate_client_finish(res: Gio.AsyncResult): Client
    close_async(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(res: Gio.AsyncResult): boolean
    command_abortable_finish(res: Gio.AsyncResult): Message
    command_full(message: Message, message_context: MessageContext, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    command_full_finish(res: Gio.AsyncResult): Message
    del_link(ifname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    del_link_finish(res: Gio.AsyncResult): boolean
    get_expected_data_format(): DeviceExpectedDataFormat
    get_file(): Gio.File
    get_path(): string
    get_path_display(): string
    get_service_version_info(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_service_version_info_finish(res: Gio.AsyncResult): DeviceServiceVersionInfo[]
    get_wwan_iface(): string
    is_open(): boolean
    open(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(res: Gio.AsyncResult): boolean
    peek_file(): Gio.File
    release_client(client: Client, flags: DeviceReleaseClientFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    release_client_finish(res: Gio.AsyncResult): boolean
    set_expected_data_format(format: DeviceExpectedDataFormat): boolean
    set_instance_id(instance_id: number, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_instance_id_finish(res: Gio.AsyncResult, link_id: number): boolean
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
    /* Virtual methods of Qmi.Device */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Qmi.Device */
    connect(sigName: "device-removed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Device) => void)): number
    emit(sigName: "device-removed"): void
    connect(sigName: "indication", callback: (($obj: Device, output: Uint8Array) => void)): number
    connect_after(sigName: "indication", callback: (($obj: Device, output: Uint8Array) => void)): number
    emit(sigName: "indication", output: Uint8Array): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-wwan-iface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-wwan-iface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
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
export class Proxy {
    /* Properties of Qmi.Proxy */
    readonly qmi_proxy_n_clients: number
    /* Fields of Qmi.Proxy */
    parent: GObject.Object
    priv: ProxyPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi.Proxy */
    get_n_clients(): number
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qmi-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qmi-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
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
export abstract class ClientClass {
    /* Fields of Qmi.ClientClass */
    process_indication: (self: Client, message: Message) => void
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
    /* Fields of Qmi.ConfigTypeAndId */
    config_type: PdcConfigurationType
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
    /* Fields of Qmi.DeviceServiceVersionInfo */
    service: Service
    major_version: number
    minor_version: number
    static name: string
}
export class IndicationDmsEventReportOutput {
    /* Methods of Qmi.IndicationDmsEventReportOutput */
    get_activation_state(): [ /* returnType */ boolean, /* value_activation_state */ DmsActivationState ]
    get_operating_mode(): [ /* returnType */ boolean, /* value_operating_mode */ DmsOperatingMode ]
    get_pin1_status(): [ /* returnType */ boolean, /* value_pin1_status_current_status */ DmsUimPinStatus, /* value_pin1_status_verify_retries_left */ number, /* value_pin1_status_unblock_retries_left */ number ]
    get_pin2_status(): [ /* returnType */ boolean, /* value_pin2_status_current_status */ DmsUimPinStatus, /* value_pin2_status_verify_retries_left */ number, /* value_pin2_status_unblock_retries_left */ number ]
    get_power_state(): [ /* returnType */ boolean, /* value_power_state_power_state_flags */ number, /* value_power_state_battery_level */ number ]
    get_prl_init_notification(): [ /* returnType */ boolean, /* value_prl_init_notification */ boolean ]
    get_uim_state(): [ /* returnType */ boolean, /* value_uim_state */ DmsUimState ]
    get_wireless_disable_state(): [ /* returnType */ boolean, /* value_wireless_disable_state */ boolean ]
    ref(): IndicationDmsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationLocDeleteAssistanceDataOutput {
    /* Methods of Qmi.IndicationLocDeleteAssistanceDataOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    ref(): IndicationLocDeleteAssistanceDataOutput
    unref(): void
    static name: string
}
export class IndicationLocEngineStateOutput {
    /* Methods of Qmi.IndicationLocEngineStateOutput */
    get_engine_state(): [ /* returnType */ boolean, /* value_engine_state */ LocEngineState ]
    ref(): IndicationLocEngineStateOutput
    unref(): void
    static name: string
}
export class IndicationLocFixRecurrenceTypeOutput {
    /* Methods of Qmi.IndicationLocFixRecurrenceTypeOutput */
    get_fix_recurrence_type(): [ /* returnType */ boolean, /* value_fix_recurrence_type */ LocFixRecurrenceType ]
    ref(): IndicationLocFixRecurrenceTypeOutput
    unref(): void
    static name: string
}
export class IndicationLocGetEngineLockOutput {
    /* Methods of Qmi.IndicationLocGetEngineLockOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    get_lock_type(): [ /* returnType */ boolean, /* value_lock_type */ LocLockType ]
    ref(): IndicationLocGetEngineLockOutput
    unref(): void
    static name: string
}
export class IndicationLocGetNmeaTypesOutput {
    /* Methods of Qmi.IndicationLocGetNmeaTypesOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    get_nmea_types(): [ /* returnType */ boolean, /* value_nmea_types */ LocNmeaType ]
    ref(): IndicationLocGetNmeaTypesOutput
    unref(): void
    static name: string
}
export class IndicationLocGetOperationModeOutput {
    /* Methods of Qmi.IndicationLocGetOperationModeOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    get_operation_mode(): [ /* returnType */ boolean, /* value_operation_mode */ LocOperationMode ]
    ref(): IndicationLocGetOperationModeOutput
    unref(): void
    static name: string
}
export class IndicationLocGetPredictedOrbitsDataSourceOutput {
    /* Methods of Qmi.IndicationLocGetPredictedOrbitsDataSourceOutput */
    get_allowed_sizes(): [ /* returnType */ boolean, /* value_allowed_sizes_max_file_size */ number, /* value_allowed_sizes_max_part_size */ number ]
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    get_server_list(): [ /* returnType */ boolean, /* value_server_list */ string[] ]
    ref(): IndicationLocGetPredictedOrbitsDataSourceOutput
    unref(): void
    static name: string
}
export class IndicationLocGetServerOutput {
    /* Methods of Qmi.IndicationLocGetServerOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    get_ipv4(): [ /* returnType */ boolean, /* value_ipv4_ipv4_address */ number, /* value_ipv4_ipv4_port */ number ]
    get_ipv6(): [ /* returnType */ boolean, /* value_ipv6_ipv6_address */ number[], /* value_ipv6_ipv6_port */ number ]
    get_server_type(): [ /* returnType */ boolean, /* value_server_type */ LocServerType ]
    get_url(): [ /* returnType */ boolean, /* value_url */ string ]
    ref(): IndicationLocGetServerOutput
    unref(): void
    static name: string
}
export class IndicationLocGnssSvInfoOutput {
    /* Methods of Qmi.IndicationLocGnssSvInfoOutput */
    get_altitude_assumed(): [ /* returnType */ boolean, /* value_altitude_assumed */ boolean ]
    get_list(): [ /* returnType */ boolean, /* value_list */ IndicationLocGnssSvInfoOutputListElement[] ]
    ref(): IndicationLocGnssSvInfoOutput
    unref(): void
    static name: string
}
export class IndicationLocGnssSvInfoOutputListElement {
    /* Fields of Qmi.IndicationLocGnssSvInfoOutputListElement */
    valid_information: LocSatelliteValidInformation
    system: LocSystem
    gnss_satellite_id: number
    health_status: LocHealthStatus
    satellite_status: LocSatelliteStatus
    navigation_data: LocNavigationData
    elevation_degrees: number
    azimuth_degrees: number
    signal_to_noise_ratio_bhz: number
    static name: string
}
export class IndicationLocInjectPredictedOrbitsDataOutput {
    /* Methods of Qmi.IndicationLocInjectPredictedOrbitsDataOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    get_part_number(): [ /* returnType */ boolean, /* value_part_number */ number ]
    ref(): IndicationLocInjectPredictedOrbitsDataOutput
    unref(): void
    static name: string
}
export class IndicationLocInjectXtraDataOutput {
    /* Methods of Qmi.IndicationLocInjectXtraDataOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    get_part_number(): [ /* returnType */ boolean, /* value_part_number */ number ]
    ref(): IndicationLocInjectXtraDataOutput
    unref(): void
    static name: string
}
export class IndicationLocNmeaOutput {
    /* Methods of Qmi.IndicationLocNmeaOutput */
    get_nmea_string(): [ /* returnType */ boolean, /* value_nmea_string */ string ]
    ref(): IndicationLocNmeaOutput
    unref(): void
    static name: string
}
export class IndicationLocPositionReportOutput {
    /* Methods of Qmi.IndicationLocPositionReportOutput */
    get_altitude_assumed(): [ /* returnType */ boolean, /* value_altitude_assumed */ boolean ]
    get_altitude_from_ellipsoid(): [ /* returnType */ boolean, /* value_altitude_from_ellipsoid */ number ]
    get_altitude_from_sealevel(): [ /* returnType */ boolean, /* value_altitude_from_sealevel */ number ]
    get_dilution_of_precision(): [ /* returnType */ boolean, /* value_dilution_of_precision */ IndicationLocPositionReportOutputDilutionOfPrecision ]
    get_gps_time(): [ /* returnType */ boolean, /* value_gps_time */ IndicationLocPositionReportOutputGpsTime ]
    get_heading(): [ /* returnType */ boolean, /* value_heading */ number ]
    get_heading_uncertainty(): [ /* returnType */ boolean, /* value_heading_uncertainty */ number ]
    get_horizontal_confidence(): [ /* returnType */ boolean, /* value_horizontal_confidence */ number ]
    get_horizontal_reliability(): [ /* returnType */ boolean, /* value_horizontal_reliability */ LocReliability ]
    get_horizontal_speed(): [ /* returnType */ boolean, /* value_horizontal_speed */ number ]
    get_horizontal_uncertainty_circular(): [ /* returnType */ boolean, /* value_horizontal_uncertainty_circular */ number ]
    get_horizontal_uncertainty_elliptical_azimuth(): [ /* returnType */ boolean, /* value_horizontal_uncertainty_elliptical_azimuth */ number ]
    get_horizontal_uncertainty_elliptical_major(): [ /* returnType */ boolean, /* value_horizontal_uncertainty_elliptical_major */ number ]
    get_horizontal_uncertainty_elliptical_minor(): [ /* returnType */ boolean, /* value_horizontal_uncertainty_elliptical_minor */ number ]
    get_latitude(): [ /* returnType */ boolean, /* value_latitude */ number ]
    get_leap_seconds(): [ /* returnType */ boolean, /* value_leap_seconds */ number ]
    get_longitude(): [ /* returnType */ boolean, /* value_longitude */ number ]
    get_magnetic_deviation(): [ /* returnType */ boolean, /* value_magnetic_deviation */ number ]
    get_satellites_used(): [ /* returnType */ boolean, /* value_satellites_used */ number[] ]
    get_sensor_data_usage(): [ /* returnType */ boolean, /* value_sensor_data_usage */ LocSensorDataUsage ]
    get_session_fix_count(): [ /* returnType */ boolean, /* value_session_fix_count */ number ]
    get_session_id(): [ /* returnType */ boolean, /* value_session_id */ number ]
    get_session_status(): [ /* returnType */ boolean, /* value_session_status */ LocSessionStatus ]
    get_speed_uncertainty(): [ /* returnType */ boolean, /* value_speed_uncertainty */ number ]
    get_technology_used(): [ /* returnType */ boolean, /* value_technology_used */ LocTechnologyUsed ]
    get_time_source(): [ /* returnType */ boolean, /* value_time_source */ LocTimeSource ]
    get_time_uncertainty(): [ /* returnType */ boolean, /* value_time_uncertainty */ number ]
    get_utc_timestamp(): [ /* returnType */ boolean, /* value_utc_timestamp */ number ]
    get_vertical_confidence(): [ /* returnType */ boolean, /* value_vertical_confidence */ number ]
    get_vertical_reliability(): [ /* returnType */ boolean, /* value_vertical_reliability */ number ]
    get_vertical_speed(): [ /* returnType */ boolean, /* value_vertical_speed */ number ]
    get_vertical_uncertainty(): [ /* returnType */ boolean, /* value_vertical_uncertainty */ number ]
    ref(): IndicationLocPositionReportOutput
    unref(): void
    static name: string
}
export class IndicationLocPositionReportOutputDilutionOfPrecision {
    /* Fields of Qmi.IndicationLocPositionReportOutputDilutionOfPrecision */
    position_dilution_of_precision: number
    horizontal_dilution_of_precision: number
    vertical_dilution_of_precision: number
    static name: string
}
export class IndicationLocPositionReportOutputGpsTime {
    /* Fields of Qmi.IndicationLocPositionReportOutputGpsTime */
    gps_weeks: number
    gps_time_of_week_milliseconds: number
    static name: string
}
export class IndicationLocSetEngineLockOutput {
    /* Methods of Qmi.IndicationLocSetEngineLockOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    ref(): IndicationLocSetEngineLockOutput
    unref(): void
    static name: string
}
export class IndicationLocSetNmeaTypesOutput {
    /* Methods of Qmi.IndicationLocSetNmeaTypesOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    ref(): IndicationLocSetNmeaTypesOutput
    unref(): void
    static name: string
}
export class IndicationLocSetOperationModeOutput {
    /* Methods of Qmi.IndicationLocSetOperationModeOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    ref(): IndicationLocSetOperationModeOutput
    unref(): void
    static name: string
}
export class IndicationLocSetServerOutput {
    /* Methods of Qmi.IndicationLocSetServerOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus ]
    ref(): IndicationLocSetServerOutput
    unref(): void
    static name: string
}
export class IndicationNasEventReportOutput {
    /* Methods of Qmi.IndicationNasEventReportOutput */
    get_ecio(): [ /* returnType */ boolean, /* value_ecio_ecio */ number, /* value_ecio_radio_interface */ NasRadioInterface ]
    get_error_rate(): [ /* returnType */ boolean, /* value_error_rate_rate */ number, /* value_error_rate_radio_interface */ NasRadioInterface ]
    get_io(): [ /* returnType */ boolean, /* value_io */ number ]
    get_lte_rsrp(): [ /* returnType */ boolean, /* value_lte_rsrp */ number ]
    get_lte_snr(): [ /* returnType */ boolean, /* value_lte_snr */ number ]
    get_registration_reject_reason(): [ /* returnType */ boolean, /* value_registration_reject_reason_service_domain */ NasNetworkServiceDomain, /* value_registration_reject_reason_reject_cause */ number ]
    get_rf_band_information(): [ /* returnType */ boolean, /* value_rf_band_information */ IndicationNasEventReportOutputRfBandInformationElement[] ]
    get_rsrq(): [ /* returnType */ boolean, /* value_rsrq_rsrq */ number, /* value_rsrq_radio_interface */ NasRadioInterface ]
    get_rssi(): [ /* returnType */ boolean, /* value_rssi_rssi */ number, /* value_rssi_radio_interface */ NasRadioInterface ]
    get_signal_strength(): [ /* returnType */ boolean, /* value_signal_strength_strength */ number, /* value_signal_strength_radio_interface */ NasRadioInterface ]
    get_sinr(): [ /* returnType */ boolean, /* value_sinr */ NasEvdoSinrLevel ]
    ref(): IndicationNasEventReportOutput
    unref(): void
    static name: string
}
export class IndicationNasEventReportOutputRfBandInformationElement {
    /* Fields of Qmi.IndicationNasEventReportOutputRfBandInformationElement */
    radio_interface: NasRadioInterface
    active_band_class: NasActiveBand
    active_channel: number
    static name: string
}
export class IndicationNasNetworkTimeOutput {
    /* Methods of Qmi.IndicationNasNetworkTimeOutput */
    get_daylight_savings_adjustment(): [ /* returnType */ boolean, /* value_daylight_savings_adjustment */ NasDaylightSavingsAdjustment ]
    get_radio_interface(): [ /* returnType */ boolean, /* value_radio_interface */ NasRadioInterface ]
    get_timezone_offset(): [ /* returnType */ boolean, /* value_timezone_offset */ number ]
    get_universal_time(): [ /* returnType */ boolean, /* value_universal_time_year */ number, /* value_universal_time_month */ number, /* value_universal_time_day */ number, /* value_universal_time_hour */ number, /* value_universal_time_minute */ number, /* value_universal_time_second */ number, /* value_universal_time_day_of_week */ NasDayOfWeek ]
    ref(): IndicationNasNetworkTimeOutput
    unref(): void
    static name: string
}
export class IndicationNasOperatorNameOutput {
    /* Methods of Qmi.IndicationNasOperatorNameOutput */
    get_nitz_information(): [ /* returnType */ boolean, /* value_nitz_information_name_encoding */ NasPlmnEncodingScheme, /* value_nitz_information_short_country_initials */ NasPlmnNameCountryInitials, /* value_nitz_information_long_name_spare_bits */ NasPlmnNameSpareBits, /* value_nitz_information_short_name_spare_bits */ NasPlmnNameSpareBits, /* value_nitz_information_long_name */ Uint8Array, /* value_nitz_information_short_name */ Uint8Array ]
    get_operator_plmn_list(): [ /* returnType */ boolean, /* value_operator_plmn_list */ IndicationNasOperatorNameOutputOperatorPlmnListElement[] ]
    get_operator_plmn_name(): [ /* returnType */ boolean, /* value_operator_plmn_name */ IndicationNasOperatorNameOutputOperatorPlmnNameElement[] ]
    get_operator_string_name(): [ /* returnType */ boolean, /* value_operator_string_name */ string ]
    get_service_provider_name(): [ /* returnType */ boolean, /* value_service_provider_name_name_display_condition */ NasNetworkNameDisplayCondition, /* value_service_provider_name_name */ string ]
    ref(): IndicationNasOperatorNameOutput
    unref(): void
    static name: string
}
export class IndicationNasOperatorNameOutputOperatorPlmnListElement {
    /* Fields of Qmi.IndicationNasOperatorNameOutputOperatorPlmnListElement */
    mcc: string
    mnc: string
    lac1: number
    lac2: number
    plmn_name_record_identifier: number
    static name: string
}
export class IndicationNasOperatorNameOutputOperatorPlmnNameElement {
    /* Fields of Qmi.IndicationNasOperatorNameOutputOperatorPlmnNameElement */
    name_encoding: NasPlmnEncodingScheme
    short_country_initials: NasPlmnNameCountryInitials
    long_name_spare_bits: NasPlmnNameSpareBits
    short_name_spare_bits: NasPlmnNameSpareBits
    long_name: object[]
    short_name: object[]
    static name: string
}
export class IndicationNasServingSystemOutput {
    /* Methods of Qmi.IndicationNasServingSystemOutput */
    get_call_barring_status(): [ /* returnType */ boolean, /* value_call_barring_status_cs_status */ NasCallBarringStatus, /* value_call_barring_status_ps_status */ NasCallBarringStatus ]
    get_cdma_base_station_info(): [ /* returnType */ boolean, /* value_cdma_base_station_info_base_station_id */ number, /* value_cdma_base_station_info_base_station_latitude */ number, /* value_cdma_base_station_info_base_station_longitude */ number ]
    get_cdma_p_rev(): [ /* returnType */ boolean, /* value_cdma_p_rev */ number ]
    get_cdma_system_id(): [ /* returnType */ boolean, /* value_cdma_system_id_sid */ number, /* value_cdma_system_id_nid */ number ]
    get_cdma_system_info(): [ /* returnType */ boolean, /* value_cdma_system_info_mcc */ number, /* value_cdma_system_info_imsi_11_12 */ number ]
    get_cid_3gpp(): [ /* returnType */ boolean, /* value_cid_3gpp */ number ]
    get_concurrent_service_info_3gpp2(): [ /* returnType */ boolean, /* value_concurrent_service_info_3gpp2 */ boolean ]
    get_current_plmn(): [ /* returnType */ boolean, /* value_current_plmn_mcc */ number, /* value_current_plmn_mnc */ number, /* value_current_plmn_description */ string ]
    get_data_service_capability(): [ /* returnType */ boolean, /* value_data_service_capability */ NasDataCapability[] ]
    get_daylight_saving_time_adjustment_3gpp(): [ /* returnType */ boolean, /* value_daylight_saving_time_adjustment_3gpp */ number ]
    get_default_roaming_indicator(): [ /* returnType */ boolean, /* value_default_roaming_indicator */ NasRoamingIndicatorStatus ]
    get_detailed_service_status(): [ /* returnType */ boolean, /* value_detailed_service_status_status */ NasServiceStatus, /* value_detailed_service_status_capability */ NasNetworkServiceDomain, /* value_detailed_service_status_hdr_status */ NasServiceStatus, /* value_detailed_service_status_hdr_hybrid */ boolean, /* value_detailed_service_status_forbidden */ boolean ]
    get_dtm_support(): [ /* returnType */ boolean, /* value_dtm_support */ boolean ]
    get_hdr_personality(): [ /* returnType */ boolean, /* value_hdr_personality */ NasHdrPersonality ]
    get_lac_3gpp(): [ /* returnType */ boolean, /* value_lac_3gpp */ number ]
    get_lte_tac(): [ /* returnType */ boolean, /* value_lte_tac */ number ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status_mcc */ number, /* value_mnc_pcs_digit_include_status_mnc */ number, /* value_mnc_pcs_digit_include_status_includes_pcs_digit */ boolean ]
    get_network_name_source(): [ /* returnType */ boolean, /* value_network_name_source */ NasNetworkNameSource ]
    get_plmn_name_flag_3gpp(): [ /* returnType */ boolean, /* value_plmn_name_flag_3gpp */ boolean ]
    get_plmn_not_changed_indication(): [ /* returnType */ boolean, /* value_plmn_not_changed_indication */ boolean ]
    get_prl_indicator_3gpp2(): [ /* returnType */ boolean, /* value_prl_indicator_3gpp2 */ boolean ]
    get_roaming_indicator(): [ /* returnType */ boolean, /* value_roaming_indicator */ NasRoamingIndicatorStatus ]
    get_roaming_indicator_list(): [ /* returnType */ boolean, /* value_roaming_indicator_list */ IndicationNasServingSystemOutputRoamingIndicatorListElement[] ]
    get_serving_system(): [ /* returnType */ boolean, /* value_serving_system_registration_state */ NasRegistrationState, /* value_serving_system_cs_attach_state */ NasAttachState, /* value_serving_system_ps_attach_state */ NasAttachState, /* value_serving_system_selected_network */ NasNetworkType, /* value_serving_system_radio_interfaces */ NasRadioInterface[] ]
    get_time_zone_3gpp(): [ /* returnType */ boolean, /* value_time_zone_3gpp */ number ]
    get_time_zone_3gpp2(): [ /* returnType */ boolean, /* value_time_zone_3gpp2_leap_seconds */ number, /* value_time_zone_3gpp2_local_time_offset */ number, /* value_time_zone_3gpp2_daylight_saving_time */ boolean ]
    get_umts_primary_scrambling_code(): [ /* returnType */ boolean, /* value_umts_primary_scrambling_code */ number ]
    get_universal_time_and_local_time_zone_3gpp(): [ /* returnType */ boolean, /* value_universal_time_and_local_time_zone_3gpp_year */ number, /* value_universal_time_and_local_time_zone_3gpp_month */ number, /* value_universal_time_and_local_time_zone_3gpp_day */ number, /* value_universal_time_and_local_time_zone_3gpp_hour */ number, /* value_universal_time_and_local_time_zone_3gpp_minute */ number, /* value_universal_time_and_local_time_zone_3gpp_second */ number, /* value_universal_time_and_local_time_zone_3gpp_time_zone */ number ]
    ref(): IndicationNasServingSystemOutput
    unref(): void
    static name: string
}
export class IndicationNasServingSystemOutputRoamingIndicatorListElement {
    /* Fields of Qmi.IndicationNasServingSystemOutputRoamingIndicatorListElement */
    radio_interface: NasRadioInterface
    roaming_indicator: NasRoamingIndicatorStatus
    static name: string
}
export class IndicationNasSignalInfoOutput {
    /* Methods of Qmi.IndicationNasSignalInfoOutput */
    get_cdma_signal_strength(): [ /* returnType */ boolean, /* value_cdma_signal_strength_rssi */ number, /* value_cdma_signal_strength_ecio */ number ]
    get_gsm_signal_strength(): [ /* returnType */ boolean, /* value_gsm_signal_strength */ number ]
    get_hdr_signal_strength(): [ /* returnType */ boolean, /* value_hdr_signal_strength_rssi */ number, /* value_hdr_signal_strength_ecio */ number, /* value_hdr_signal_strength_sinr */ NasEvdoSinrLevel, /* value_hdr_signal_strength_io */ number ]
    get_lte_signal_strength(): [ /* returnType */ boolean, /* value_lte_signal_strength_rssi */ number, /* value_lte_signal_strength_rsrq */ number, /* value_lte_signal_strength_rsrp */ number, /* value_lte_signal_strength_snr */ number ]
    get_tdma_signal_strength(): [ /* returnType */ boolean, /* value_tdma_signal_strength */ number ]
    get_wcdma_signal_strength(): [ /* returnType */ boolean, /* value_wcdma_signal_strength_rssi */ number, /* value_wcdma_signal_strength_ecio */ number ]
    ref(): IndicationNasSignalInfoOutput
    unref(): void
    static name: string
}
export class IndicationNasSystemInfoOutput {
    /* Methods of Qmi.IndicationNasSystemInfoOutput */
    get_additional_cdma_system_info(): [ /* returnType */ boolean, /* value_additional_cdma_system_info_geo_system_index */ number, /* value_additional_cdma_system_info_registration_period */ number ]
    get_additional_gsm_system_info(): [ /* returnType */ boolean, /* value_additional_gsm_system_info_geo_system_index */ number, /* value_additional_gsm_system_info_cell_broadcast_support */ NasCellBroadcastCapability ]
    get_additional_hdr_system_info(): [ /* returnType */ boolean, /* value_additional_hdr_system_info_geo_system_index */ number ]
    get_additional_lte_system_info(): [ /* returnType */ boolean, /* value_additional_lte_system_info_geo_system_index */ number ]
    get_additional_wcdma_system_info(): [ /* returnType */ boolean, /* value_additional_wcdma_system_info_geo_system_index */ number, /* value_additional_wcdma_system_info_cell_broadcast_support */ NasCellBroadcastCapability ]
    get_cdma_service_status(): [ /* returnType */ boolean, /* value_cdma_service_status_service_status */ NasServiceStatus, /* value_cdma_service_status_preferred_data_path */ boolean ]
    get_cdma_system_info(): [ /* returnType */ boolean, /* value_cdma_system_info_domain_valid */ boolean, /* value_cdma_system_info_domain */ NasNetworkServiceDomain, /* value_cdma_system_info_service_capability_valid */ boolean, /* value_cdma_system_info_service_capability */ NasNetworkServiceDomain, /* value_cdma_system_info_roaming_status_valid */ boolean, /* value_cdma_system_info_roaming_status */ NasRoamingStatus, /* value_cdma_system_info_forbidden_valid */ boolean, /* value_cdma_system_info_forbidden */ boolean, /* value_cdma_system_info_prl_match_valid */ boolean, /* value_cdma_system_info_prl_match */ boolean, /* value_cdma_system_info_p_rev_valid */ boolean, /* value_cdma_system_info_p_rev */ number, /* value_cdma_system_info_base_station_p_rev_valid */ boolean, /* value_cdma_system_info_base_station_p_rev */ number, /* value_cdma_system_info_concurrent_service_support_valid */ boolean, /* value_cdma_system_info_concurrent_service_support */ boolean, /* value_cdma_system_info_cdma_system_id_valid */ boolean, /* value_cdma_system_info_sid */ number, /* value_cdma_system_info_nid */ number, /* value_cdma_system_info_base_station_info_valid */ boolean, /* value_cdma_system_info_base_station_id */ number, /* value_cdma_system_info_base_station_latitude */ number, /* value_cdma_system_info_base_station_longitude */ number, /* value_cdma_system_info_packet_zone_valid */ boolean, /* value_cdma_system_info_packet_zone */ number, /* value_cdma_system_info_network_id_valid */ boolean, /* value_cdma_system_info_mcc */ string, /* value_cdma_system_info_mnc */ string ]
    get_gsm_call_barring_status(): [ /* returnType */ boolean, /* value_gsm_call_barring_status_cs_status */ NasCallBarringStatus, /* value_gsm_call_barring_status_ps_status */ NasCallBarringStatus ]
    get_gsm_cipher_domain(): [ /* returnType */ boolean, /* value_gsm_cipher_domain */ NasNetworkServiceDomain ]
    get_gsm_service_status(): [ /* returnType */ boolean, /* value_gsm_service_status_service_status */ NasServiceStatus, /* value_gsm_service_status_true_service_status */ NasServiceStatus, /* value_gsm_service_status_preferred_data_path */ boolean ]
    get_gsm_system_info(): [ /* returnType */ boolean, /* value_gsm_system_info_domain_valid */ boolean, /* value_gsm_system_info_domain */ NasNetworkServiceDomain, /* value_gsm_system_info_service_capability_valid */ boolean, /* value_gsm_system_info_service_capability */ NasNetworkServiceDomain, /* value_gsm_system_info_roaming_status_valid */ boolean, /* value_gsm_system_info_roaming_status */ NasRoamingStatus, /* value_gsm_system_info_forbidden_valid */ boolean, /* value_gsm_system_info_forbidden */ boolean, /* value_gsm_system_info_lac_valid */ boolean, /* value_gsm_system_info_lac */ number, /* value_gsm_system_info_cid_valid */ boolean, /* value_gsm_system_info_cid */ number, /* value_gsm_system_info_registration_reject_info_valid */ boolean, /* value_gsm_system_info_registration_reject_domain */ NasNetworkServiceDomain, /* value_gsm_system_info_registration_reject_cause */ number, /* value_gsm_system_info_network_id_valid */ boolean, /* value_gsm_system_info_mcc */ string, /* value_gsm_system_info_mnc */ string, /* value_gsm_system_info_egprs_support_valid */ boolean, /* value_gsm_system_info_egprs_support */ boolean, /* value_gsm_system_info_dtm_support_valid */ boolean, /* value_gsm_system_info_dtm_support */ boolean ]
    get_hdr_service_status(): [ /* returnType */ boolean, /* value_hdr_service_status_service_status */ NasServiceStatus, /* value_hdr_service_status_preferred_data_path */ boolean ]
    get_hdr_system_info(): [ /* returnType */ boolean, /* value_hdr_system_info_domain_valid */ boolean, /* value_hdr_system_info_domain */ NasNetworkServiceDomain, /* value_hdr_system_info_service_capability_valid */ boolean, /* value_hdr_system_info_service_capability */ NasNetworkServiceDomain, /* value_hdr_system_info_roaming_status_valid */ boolean, /* value_hdr_system_info_roaming_status */ NasRoamingStatus, /* value_hdr_system_info_forbidden_valid */ boolean, /* value_hdr_system_info_forbidden */ boolean, /* value_hdr_system_info_prl_match_valid */ boolean, /* value_hdr_system_info_prl_match */ boolean, /* value_hdr_system_info_personality_valid */ boolean, /* value_hdr_system_info_personality */ NasHdrPersonality, /* value_hdr_system_info_protocol_revision_valid */ boolean, /* value_hdr_system_info_protocol_revision */ NasHdrProtocolRevision, /* value_hdr_system_info_is_856_system_id_valid */ boolean, /* value_hdr_system_info_is_856_system_id */ string ]
    get_lte_embms_coverage_info_support(): [ /* returnType */ boolean, /* value_lte_embms_coverage_info_support */ boolean ]
    get_lte_service_status(): [ /* returnType */ boolean, /* value_lte_service_status_service_status */ NasServiceStatus, /* value_lte_service_status_true_service_status */ NasServiceStatus, /* value_lte_service_status_preferred_data_path */ boolean ]
    get_lte_system_info(): [ /* returnType */ boolean, /* value_lte_system_info_domain_valid */ boolean, /* value_lte_system_info_domain */ NasNetworkServiceDomain, /* value_lte_system_info_service_capability_valid */ boolean, /* value_lte_system_info_service_capability */ NasNetworkServiceDomain, /* value_lte_system_info_roaming_status_valid */ boolean, /* value_lte_system_info_roaming_status */ NasRoamingStatus, /* value_lte_system_info_forbidden_valid */ boolean, /* value_lte_system_info_forbidden */ boolean, /* value_lte_system_info_lac_valid */ boolean, /* value_lte_system_info_lac */ number, /* value_lte_system_info_cid_valid */ boolean, /* value_lte_system_info_cid */ number, /* value_lte_system_info_registration_reject_info_valid */ boolean, /* value_lte_system_info_registration_reject_domain */ NasNetworkServiceDomain, /* value_lte_system_info_registration_reject_cause */ number, /* value_lte_system_info_network_id_valid */ boolean, /* value_lte_system_info_mcc */ string, /* value_lte_system_info_mnc */ string, /* value_lte_system_info_tac_valid */ boolean, /* value_lte_system_info_tac */ number ]
    get_lte_voice_support(): [ /* returnType */ boolean, /* value_lte_voice_support */ boolean ]
    get_plmn_not_changed_indication(): [ /* returnType */ boolean, /* value_plmn_not_changed_indication */ boolean ]
    get_sim_reject_info(): [ /* returnType */ boolean, /* value_sim_reject_info */ NasSimRejectState ]
    get_td_scdma_service_status(): [ /* returnType */ boolean, /* value_td_scdma_service_status_service_status */ NasServiceStatus, /* value_td_scdma_service_status_true_service_status */ NasServiceStatus, /* value_td_scdma_service_status_preferred_data_path */ boolean ]
    get_td_scma_system_info(): [ /* returnType */ boolean, /* value_td_scma_system_info_domain_valid */ boolean, /* value_td_scma_system_info_domain */ NasNetworkServiceDomain, /* value_td_scma_system_info_service_capability_valid */ boolean, /* value_td_scma_system_info_service_capability */ NasNetworkServiceDomain, /* value_td_scma_system_info_roaming_status_valid */ boolean, /* value_td_scma_system_info_roaming_status */ NasRoamingStatus, /* value_td_scma_system_info_forbidden_valid */ boolean, /* value_td_scma_system_info_forbidden */ boolean, /* value_td_scma_system_info_lac_valid */ boolean, /* value_td_scma_system_info_lac */ number, /* value_td_scma_system_info_cid_valid */ boolean, /* value_td_scma_system_info_cid */ number, /* value_td_scma_system_info_registration_reject_info_valid */ boolean, /* value_td_scma_system_info_registration_reject_domain */ NasNetworkServiceDomain, /* value_td_scma_system_info_registration_reject_cause */ number, /* value_td_scma_system_info_network_id_valid */ boolean, /* value_td_scma_system_info_mcc */ string, /* value_td_scma_system_info_mnc */ string, /* value_td_scma_system_info_hs_call_status_valid */ boolean, /* value_td_scma_system_info_hs_call_status */ NasWcdmaHsService, /* value_td_scma_system_info_hs_service_valid */ boolean, /* value_td_scma_system_info_hs_service */ NasWcdmaHsService, /* value_td_scma_system_info_cell_parameter_id_valid */ boolean, /* value_td_scma_system_info_cell_parameter_id */ number, /* value_td_scma_system_info_cell_broadcast_support_valid */ boolean, /* value_td_scma_system_info_cell_broadcast_support */ NasCellBroadcastCapability, /* value_td_scma_system_info_cs_call_barring_status_valid */ boolean, /* value_td_scma_system_info_cs_call_barring_status */ NasCallBarringStatus, /* value_td_scma_system_info_ps_call_barring_status_valid */ boolean, /* value_td_scma_system_info_ps_call_barring_status */ NasCallBarringStatus, /* value_td_scma_system_info_cipher_domain_valid */ boolean, /* value_td_scma_system_info_cipher_domain */ NasNetworkServiceDomain ]
    get_wcdma_call_barring_status(): [ /* returnType */ boolean, /* value_wcdma_call_barring_status_cs_status */ NasCallBarringStatus, /* value_wcdma_call_barring_status_ps_status */ NasCallBarringStatus ]
    get_wcdma_cipher_domain(): [ /* returnType */ boolean, /* value_wcdma_cipher_domain */ NasNetworkServiceDomain ]
    get_wcdma_service_status(): [ /* returnType */ boolean, /* value_wcdma_service_status_service_status */ NasServiceStatus, /* value_wcdma_service_status_true_service_status */ NasServiceStatus, /* value_wcdma_service_status_preferred_data_path */ boolean ]
    get_wcdma_system_info(): [ /* returnType */ boolean, /* value_wcdma_system_info_domain_valid */ boolean, /* value_wcdma_system_info_domain */ NasNetworkServiceDomain, /* value_wcdma_system_info_service_capability_valid */ boolean, /* value_wcdma_system_info_service_capability */ NasNetworkServiceDomain, /* value_wcdma_system_info_roaming_status_valid */ boolean, /* value_wcdma_system_info_roaming_status */ NasRoamingStatus, /* value_wcdma_system_info_forbidden_valid */ boolean, /* value_wcdma_system_info_forbidden */ boolean, /* value_wcdma_system_info_lac_valid */ boolean, /* value_wcdma_system_info_lac */ number, /* value_wcdma_system_info_cid_valid */ boolean, /* value_wcdma_system_info_cid */ number, /* value_wcdma_system_info_registration_reject_info_valid */ boolean, /* value_wcdma_system_info_registration_reject_domain */ NasNetworkServiceDomain, /* value_wcdma_system_info_registration_reject_cause */ number, /* value_wcdma_system_info_network_id_valid */ boolean, /* value_wcdma_system_info_mcc */ string, /* value_wcdma_system_info_mnc */ string, /* value_wcdma_system_info_hs_call_status_valid */ boolean, /* value_wcdma_system_info_hs_call_status */ NasWcdmaHsService, /* value_wcdma_system_info_hs_service_valid */ boolean, /* value_wcdma_system_info_hs_service */ NasWcdmaHsService, /* value_wcdma_system_info_primary_scrambling_code_valid */ boolean, /* value_wcdma_system_info_primary_scrambling_code */ number ]
    ref(): IndicationNasSystemInfoOutput
    unref(): void
    static name: string
}
export class IndicationOmaEventReportOutput {
    /* Methods of Qmi.IndicationOmaEventReportOutput */
    get_network_initiated_alert(): [ /* returnType */ boolean, /* value_network_initiated_alert_session_type */ OmaSessionType, /* value_network_initiated_alert_session_id */ number ]
    get_session_fail_reason(): [ /* returnType */ boolean, /* value_session_fail_reason */ OmaSessionFailedReason ]
    get_session_state(): [ /* returnType */ boolean, /* value_session_state */ OmaSessionState ]
    ref(): IndicationOmaEventReportOutput
    unref(): void
    static name: string
}
export class IndicationPdcActivateConfigOutput {
    /* Methods of Qmi.IndicationPdcActivateConfigOutput */
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): IndicationPdcActivateConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcDeactivateConfigOutput {
    /* Methods of Qmi.IndicationPdcDeactivateConfigOutput */
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): IndicationPdcDeactivateConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcGetConfigInfoOutput {
    /* Methods of Qmi.IndicationPdcGetConfigInfoOutput */
    get_description(): [ /* returnType */ boolean, /* value_description */ string ]
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    get_total_size(): [ /* returnType */ boolean, /* value_total_size */ number ]
    get_version(): [ /* returnType */ boolean, /* value_version */ number ]
    ref(): IndicationPdcGetConfigInfoOutput
    unref(): void
    static name: string
}
export class IndicationPdcGetSelectedConfigOutput {
    /* Methods of Qmi.IndicationPdcGetSelectedConfigOutput */
    get_active_id(): [ /* returnType */ boolean, /* value_active_id */ Uint8Array ]
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number ]
    get_pending_id(): [ /* returnType */ boolean, /* value_pending_id */ Uint8Array ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): IndicationPdcGetSelectedConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcListConfigsOutput {
    /* Methods of Qmi.IndicationPdcListConfigsOutput */
    get_configs(): [ /* returnType */ boolean, /* value_configs */ IndicationPdcListConfigsOutputConfigsElement[] ]
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): IndicationPdcListConfigsOutput
    unref(): void
    static name: string
}
export class IndicationPdcListConfigsOutputConfigsElement {
    /* Fields of Qmi.IndicationPdcListConfigsOutputConfigsElement */
    config_type: PdcConfigurationType
    id: object[]
    static name: string
}
export class IndicationPdcLoadConfigOutput {
    /* Methods of Qmi.IndicationPdcLoadConfigOutput */
    get_frame_reset(): [ /* returnType */ boolean, /* value_frame_reset */ boolean ]
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number ]
    get_received(): [ /* returnType */ boolean, /* value_received */ number ]
    get_remaining_size(): [ /* returnType */ boolean, /* value_remaining_size */ number ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): IndicationPdcLoadConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdcSetSelectedConfigOutput {
    /* Methods of Qmi.IndicationPdcSetSelectedConfigOutput */
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): IndicationPdcSetSelectedConfigOutput
    unref(): void
    static name: string
}
export class IndicationPdsEventReportOutput {
    /* Methods of Qmi.IndicationPdsEventReportOutput */
    get_extended_nmea_position(): [ /* returnType */ boolean, /* value_extended_nmea_position_operation_mode */ PdsOperationMode, /* value_extended_nmea_position_nmea */ string ]
    get_nmea_position(): [ /* returnType */ boolean, /* value_nmea_position */ string ]
    get_position_session_status(): [ /* returnType */ boolean, /* value_position_session_status */ PdsPositionSessionStatus ]
    ref(): IndicationPdsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationQosFlowStatusOutput {
    /* Methods of Qmi.IndicationQosFlowStatusOutput */
    get_value(): [ /* returnType */ boolean, /* value_value_qos_id */ number, /* value_value_status */ QosStatus, /* value_value_event */ QosEvent ]
    ref(): IndicationQosFlowStatusOutput
    unref(): void
    static name: string
}
export class IndicationQosNetworkStatusOutput {
    /* Methods of Qmi.IndicationQosNetworkStatusOutput */
    get_qos_supported(): [ /* returnType */ boolean, /* value_qos_supported */ boolean ]
    ref(): IndicationQosNetworkStatusOutput
    unref(): void
    static name: string
}
export class IndicationUimCardStatusOutput {
    /* Methods of Qmi.IndicationUimCardStatusOutput */
    get_card_status(): [ /* returnType */ boolean, /* value_card_status_index_gw_primary */ number, /* value_card_status_index_1x_primary */ number, /* value_card_status_index_gw_secondary */ number, /* value_card_status_index_1x_secondary */ number, /* value_card_status_cards */ IndicationUimCardStatusOutputCardStatusCardsElement[] ]
    ref(): IndicationUimCardStatusOutput
    unref(): void
    static name: string
}
export class IndicationUimCardStatusOutputCardStatusCardsElement {
    /* Fields of Qmi.IndicationUimCardStatusOutputCardStatusCardsElement */
    card_state: UimCardState
    upin_state: UimPinState
    upin_retries: number
    upuk_retries: number
    error_code: UimCardError
    applications: object[]
    static name: string
}
export class IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement {
    /* Fields of Qmi.IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement */
    type: UimCardApplicationType
    state: UimCardApplicationState
    personalization_state: UimCardApplicationPersonalizationState
    personalization_feature: UimCardApplicationPersonalizationFeature
    personalization_retries: number
    personalization_unblock_retries: number
    application_identifier_value: object[]
    upin_replaces_pin1: boolean
    pin1_state: UimPinState
    pin1_retries: number
    puk1_retries: number
    pin2_state: UimPinState
    pin2_retries: number
    puk2_retries: number
    static name: string
}
export class IndicationUimRefreshOutput {
    /* Methods of Qmi.IndicationUimRefreshOutput */
    get_event(): [ /* returnType */ boolean, /* value_event_stage */ UimRefreshStage, /* value_event_mode */ UimRefreshMode, /* value_event_session_type */ UimSessionType, /* value_event_application_identifier */ Uint8Array, /* value_event_files */ IndicationUimRefreshOutputEventFilesElement[] ]
    ref(): IndicationUimRefreshOutput
    unref(): void
    static name: string
}
export class IndicationUimRefreshOutputEventFilesElement {
    /* Fields of Qmi.IndicationUimRefreshOutputEventFilesElement */
    file_id: number
    path: object[]
    static name: string
}
export class IndicationUimSlotStatusOutput {
    /* Methods of Qmi.IndicationUimSlotStatusOutput */
    get_physical_slot_information(): [ /* returnType */ boolean, /* value_physical_slot_information */ PhysicalSlotInformationSlot[] ]
    get_physical_slot_status(): [ /* returnType */ boolean, /* value_physical_slot_status */ PhysicalSlotStatusSlot[] ]
    get_slot_eid_information(): [ /* returnType */ boolean, /* value_slot_eid_information */ any ]
    ref(): IndicationUimSlotStatusOutput
    unref(): void
    static name: string
}
export class IndicationVoiceAllCallStatusOutput {
    /* Methods of Qmi.IndicationVoiceAllCallStatusOutput */
    get_call_information(): [ /* returnType */ boolean, /* value_call_information */ IndicationVoiceAllCallStatusOutputCallInformationCall[] ]
    get_remote_party_number(): [ /* returnType */ boolean, /* value_remote_party_number */ IndicationVoiceAllCallStatusOutputRemotePartyNumberCall[] ]
    ref(): IndicationVoiceAllCallStatusOutput
    unref(): void
    static name: string
}
export class IndicationVoiceAllCallStatusOutputCallInformationCall {
    /* Fields of Qmi.IndicationVoiceAllCallStatusOutputCallInformationCall */
    id: number
    state: VoiceCallState
    type: VoiceCallType
    direction: VoiceCallDirection
    mode: VoiceCallMode
    multipart_indicator: boolean
    als: VoiceAls
    static name: string
}
export class IndicationVoiceAllCallStatusOutputRemotePartyNumberCall {
    /* Fields of Qmi.IndicationVoiceAllCallStatusOutputRemotePartyNumberCall */
    id: number
    presentation_indicator: VoicePresentation
    type: string
    static name: string
}
export class IndicationVoiceOriginateUssdNoWaitOutput {
    /* Methods of Qmi.IndicationVoiceOriginateUssdNoWaitOutput */
    get_alpha_identifier(): [ /* returnType */ boolean, /* value_alpha_identifier_data_coding_scheme */ VoiceAlphaDataCodingScheme, /* value_alpha_identifier_alpha */ Uint8Array ]
    get_error_code(): [ /* returnType */ boolean, /* value_error_code */ number ]
    get_failure_cause(): [ /* returnType */ boolean, /* value_failure_cause */ VoiceCallEndReason ]
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme, /* value_uss_data_data */ Uint8Array ]
    get_uss_data_utf16(): [ /* returnType */ boolean, /* value_uss_data_utf16 */ number[] ]
    ref(): IndicationVoiceOriginateUssdNoWaitOutput
    unref(): void
    static name: string
}
export class IndicationVoiceUssdOutput {
    /* Methods of Qmi.IndicationVoiceUssdOutput */
    get_user_action(): [ /* returnType */ boolean, /* value_user_action */ VoiceUserAction ]
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme, /* value_uss_data_data */ Uint8Array ]
    get_uss_data_utf16(): [ /* returnType */ boolean, /* value_uss_data_utf16 */ number[] ]
    ref(): IndicationVoiceUssdOutput
    unref(): void
    static name: string
}
export class IndicationWdsEventReportOutput {
    /* Methods of Qmi.IndicationWdsEventReportOutput */
    get_channel_rates(): [ /* returnType */ boolean, /* value_channel_rates_tx_rate_bps */ number, /* value_channel_rates_rx_rate_bps */ number ]
    get_current_data_bearer_technology(): [ /* returnType */ boolean, /* value_current_data_bearer_technology_network_type */ WdsNetworkType, /* value_current_data_bearer_technology_rat_mask */ number, /* value_current_data_bearer_technology_so_mask */ number ]
    get_data_bearer_technology(): [ /* returnType */ boolean, /* value_data_bearer_technology */ WdsDataBearerTechnology ]
    get_data_call_address_family(): [ /* returnType */ boolean, /* value_data_call_address_family */ WdsIpFamily ]
    get_data_call_status(): [ /* returnType */ boolean, /* value_data_call_status */ WdsDataCallStatus ]
    get_data_call_type(): [ /* returnType */ boolean, /* value_data_call_type_data_call_type */ WdsDataCallType, /* value_data_call_type_tethered_call_type */ WdsTetheredCallType ]
    get_data_systems(): [ /* returnType */ boolean, /* value_data_systems_preferred_network_type */ WdsDataSystemNetworkType, /* value_data_systems_networks */ IndicationWdsEventReportOutputDataSystemsNetworksNetwork[] ]
    get_dormancy_status(): [ /* returnType */ boolean, /* value_dormancy_status */ WdsDormancyStatus ]
    get_evdo_page_monitor_period_change(): [ /* returnType */ boolean, /* value_evdo_page_monitor_period_change_period_change */ number, /* value_evdo_page_monitor_period_change_force_long_sleep */ boolean ]
    get_extended_data_bearer_technology(): [ /* returnType */ boolean, /* value_extended_data_bearer_technology_data_bearer_technology */ WdsDataSystemNetworkType, /* value_extended_data_bearer_technology_radio_access_technology */ WdsRadioAccessTechnology, /* value_extended_data_bearer_technology_extended_data_bearer_technology_3gpp */ WdsExtendedDataBearerTechnology3gpp, /* value_extended_data_bearer_technology_extended_data_bearer_technology_3gpp2 */ WdsExtendedDataBearerTechnology3gpp2 ]
    get_mip_status(): [ /* returnType */ boolean, /* value_mip_status */ boolean ]
    get_pdn_filters_removed(): [ /* returnType */ boolean, /* value_pdn_filters_removed_pdn_filter_handler */ number[] ]
    get_preferred_data_system(): [ /* returnType */ boolean, /* value_preferred_data_system */ WdsDataSystem ]
    get_rx_bytes_ok(): [ /* returnType */ boolean, /* value_rx_bytes_ok */ number ]
    get_rx_overflows(): [ /* returnType */ boolean, /* value_rx_overflows */ number ]
    get_rx_packets_dropped(): [ /* returnType */ boolean, /* value_rx_packets_dropped */ number ]
    get_rx_packets_error(): [ /* returnType */ boolean, /* value_rx_packets_error */ number ]
    get_rx_packets_ok(): [ /* returnType */ boolean, /* value_rx_packets_ok */ number ]
    get_tx_bytes_ok(): [ /* returnType */ boolean, /* value_tx_bytes_ok */ number ]
    get_tx_overflows(): [ /* returnType */ boolean, /* value_tx_overflows */ number ]
    get_tx_packets_dropped(): [ /* returnType */ boolean, /* value_tx_packets_dropped */ number ]
    get_tx_packets_error(): [ /* returnType */ boolean, /* value_tx_packets_error */ number ]
    get_tx_packets_ok(): [ /* returnType */ boolean, /* value_tx_packets_ok */ number ]
    get_uplink_flow_control_enabled(): [ /* returnType */ boolean, /* value_uplink_flow_control_enabled */ boolean ]
    ref(): IndicationWdsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationWdsEventReportOutputDataSystemsNetworksNetwork {
    /* Fields of Qmi.IndicationWdsEventReportOutputDataSystemsNetworksNetwork */
    network_type: WdsDataSystemNetworkType
    rat_mask: number
    so_mask: number
    static name: string
}
export class IndicationWdsPacketServiceStatusOutput {
    /* Methods of Qmi.IndicationWdsPacketServiceStatusOutput */
    get_call_end_reason(): [ /* returnType */ boolean, /* value_call_end_reason */ WdsCallEndReason ]
    get_connection_status(): [ /* returnType */ boolean, /* value_connection_status_status */ WdsConnectionStatus, /* value_connection_status_reconfiguration_required */ boolean ]
    get_extended_technology_preference(): [ /* returnType */ boolean, /* value_extended_technology_preference */ WdsExtendedTechnologyPreference ]
    get_ip_family(): [ /* returnType */ boolean, /* value_ip_family */ WdsIpFamily ]
    get_verbose_call_end_reason(): [ /* returnType */ boolean, /* value_verbose_call_end_reason_type */ WdsVerboseCallEndReasonType, /* value_verbose_call_end_reason_reason */ number ]
    ref(): IndicationWdsPacketServiceStatusOutput
    unref(): void
    static name: string
}
export class IndicationWdsSetLteAttachPdnListOutput {
    /* Methods of Qmi.IndicationWdsSetLteAttachPdnListOutput */
    get_action_result(): [ /* returnType */ boolean, /* value_action_result */ boolean ]
    get_result(): boolean
    ref(): IndicationWdsSetLteAttachPdnListOutput
    unref(): void
    static name: string
}
export class IndicationWmsEventReportOutput {
    /* Methods of Qmi.IndicationWmsEventReportOutput */
    get_etws_message(): [ /* returnType */ boolean, /* value_etws_message_notification_type */ WmsNotificationType, /* value_etws_message_raw_data */ Uint8Array ]
    get_etws_plmn_information(): [ /* returnType */ boolean, /* value_etws_plmn_information_mcc */ number, /* value_etws_plmn_information_mnc */ number ]
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode ]
    get_mt_message(): [ /* returnType */ boolean, /* value_mt_message_storage_type */ WmsStorageType, /* value_mt_message_memory_index */ number ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean ]
    get_smsc_address(): [ /* returnType */ boolean, /* value_smsc_address */ string ]
    get_transfer_route_mt_message(): [ /* returnType */ boolean, /* value_transfer_route_mt_message_ack_indicator */ WmsAckIndicator, /* value_transfer_route_mt_message_transaction_id */ number, /* value_transfer_route_mt_message_format */ WmsMessageFormat, /* value_transfer_route_mt_message_raw_data */ Uint8Array ]
    ref(): IndicationWmsEventReportOutput
    unref(): void
    static name: string
}
export class IndicationWmsSmscAddressOutput {
    /* Methods of Qmi.IndicationWmsSmscAddressOutput */
    get_address(): [ /* returnType */ boolean, /* value_address_type */ string, /* value_address_digits */ string ]
    ref(): IndicationWmsSmscAddressOutput
    unref(): void
    static name: string
}
export class MessageContext {
    /* Methods of Qmi.MessageContext */
    get_vendor_id(): number
    ref(): MessageContext
    set_vendor_id(vendor_id: number): void
    unref(): void
    static name: string
    static new(): MessageContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageContext
}
export class MessageCtlAllocateCidInput {
    /* Methods of Qmi.MessageCtlAllocateCidInput */
    get_service(): [ /* returnType */ boolean, /* value_service */ Service ]
    ref(): MessageCtlAllocateCidInput
    set_service(value_service: Service): boolean
    unref(): void
    static name: string
    static new(): MessageCtlAllocateCidInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlAllocateCidInput
}
export class MessageCtlAllocateCidOutput {
    /* Methods of Qmi.MessageCtlAllocateCidOutput */
    get_allocation_info(): [ /* returnType */ boolean, /* value_allocation_info_service */ Service, /* value_allocation_info_cid */ number ]
    get_result(): boolean
    ref(): MessageCtlAllocateCidOutput
    unref(): void
    static name: string
}
export class MessageCtlGetVersionInfoOutput {
    /* Methods of Qmi.MessageCtlGetVersionInfoOutput */
    get_result(): boolean
    get_service_list(): [ /* returnType */ boolean, /* value_service_list */ MessageCtlGetVersionInfoOutputServiceListService[] ]
    ref(): MessageCtlGetVersionInfoOutput
    unref(): void
    static name: string
}
export class MessageCtlGetVersionInfoOutputServiceListService {
    /* Fields of Qmi.MessageCtlGetVersionInfoOutputServiceListService */
    service: Service
    major_version: number
    minor_version: number
    static name: string
}
export class MessageCtlInternalProxyOpenInput {
    /* Methods of Qmi.MessageCtlInternalProxyOpenInput */
    get_device_path(): [ /* returnType */ boolean, /* value_device_path */ string ]
    ref(): MessageCtlInternalProxyOpenInput
    set_device_path(value_device_path: string): boolean
    unref(): void
    static name: string
    static new(): MessageCtlInternalProxyOpenInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlInternalProxyOpenInput
}
export class MessageCtlInternalProxyOpenOutput {
    /* Methods of Qmi.MessageCtlInternalProxyOpenOutput */
    get_result(): boolean
    ref(): MessageCtlInternalProxyOpenOutput
    unref(): void
    static name: string
}
export class MessageCtlReleaseCidInput {
    /* Methods of Qmi.MessageCtlReleaseCidInput */
    get_release_info(): [ /* returnType */ boolean, /* value_release_info_service */ Service, /* value_release_info_cid */ number ]
    ref(): MessageCtlReleaseCidInput
    set_release_info(value_release_info_service: Service, value_release_info_cid: number): boolean
    unref(): void
    static name: string
    static new(): MessageCtlReleaseCidInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlReleaseCidInput
}
export class MessageCtlReleaseCidOutput {
    /* Methods of Qmi.MessageCtlReleaseCidOutput */
    get_release_info(): [ /* returnType */ boolean, /* value_release_info_service */ Service, /* value_release_info_cid */ number ]
    get_result(): boolean
    ref(): MessageCtlReleaseCidOutput
    unref(): void
    static name: string
}
export class MessageCtlSetDataFormatInput {
    /* Methods of Qmi.MessageCtlSetDataFormatInput */
    get_format(): [ /* returnType */ boolean, /* value_format */ CtlDataFormat ]
    get_protocol(): [ /* returnType */ boolean, /* value_protocol */ CtlDataLinkProtocol ]
    ref(): MessageCtlSetDataFormatInput
    set_format(value_format: CtlDataFormat): boolean
    set_protocol(value_protocol: CtlDataLinkProtocol): boolean
    unref(): void
    static name: string
    static new(): MessageCtlSetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlSetDataFormatInput
}
export class MessageCtlSetDataFormatOutput {
    /* Methods of Qmi.MessageCtlSetDataFormatOutput */
    get_protocol(): [ /* returnType */ boolean, /* value_protocol */ CtlDataLinkProtocol ]
    get_result(): boolean
    ref(): MessageCtlSetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageCtlSetInstanceIdInput {
    /* Methods of Qmi.MessageCtlSetInstanceIdInput */
    get_id(): [ /* returnType */ boolean, /* value_id */ number ]
    ref(): MessageCtlSetInstanceIdInput
    set_id(value_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageCtlSetInstanceIdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlSetInstanceIdInput
}
export class MessageCtlSetInstanceIdOutput {
    /* Methods of Qmi.MessageCtlSetInstanceIdOutput */
    get_link_id(): [ /* returnType */ boolean, /* value_link_id */ number ]
    get_result(): boolean
    ref(): MessageCtlSetInstanceIdOutput
    unref(): void
    static name: string
}
export class MessageCtlSyncOutput {
    /* Methods of Qmi.MessageCtlSyncOutput */
    get_result(): boolean
    ref(): MessageCtlSyncOutput
    unref(): void
    static name: string
}
export class MessageDmsActivateAutomaticInput {
    /* Methods of Qmi.MessageDmsActivateAutomaticInput */
    get_activation_code(): [ /* returnType */ boolean, /* value_activation_code */ string ]
    ref(): MessageDmsActivateAutomaticInput
    set_activation_code(value_activation_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsActivateAutomaticInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsActivateAutomaticInput
}
export class MessageDmsActivateAutomaticOutput {
    /* Methods of Qmi.MessageDmsActivateAutomaticOutput */
    get_result(): boolean
    ref(): MessageDmsActivateAutomaticOutput
    unref(): void
    static name: string
}
export class MessageDmsActivateManualInput {
    /* Methods of Qmi.MessageDmsActivateManualInput */
    get_info(): [ /* returnType */ boolean, /* value_info_service_programming_code */ string, /* value_info_system_identification_number */ number, /* value_info_mobile_directory_number */ string, /* value_info_mobile_identification_number */ string ]
    get_mn_aaa_key(): [ /* returnType */ boolean, /* value_mn_aaa_key */ string ]
    get_mn_ha_key(): [ /* returnType */ boolean, /* value_mn_ha_key */ string ]
    get_prl(): [ /* returnType */ boolean, /* value_prl_prl_total_length */ number, /* value_prl_prl_segment_sequence */ number, /* value_prl_prl_segment */ Uint8Array ]
    ref(): MessageDmsActivateManualInput
    set_info(value_info_service_programming_code: string, value_info_system_identification_number: number, value_info_mobile_directory_number: string, value_info_mobile_identification_number: string): boolean
    set_mn_aaa_key(value_mn_aaa_key: string): boolean
    set_mn_ha_key(value_mn_ha_key: string): boolean
    set_prl(value_prl_prl_total_length: number, value_prl_prl_segment_sequence: number, value_prl_prl_segment: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageDmsActivateManualInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsActivateManualInput
}
export class MessageDmsActivateManualOutput {
    /* Methods of Qmi.MessageDmsActivateManualOutput */
    get_result(): boolean
    ref(): MessageDmsActivateManualOutput
    unref(): void
    static name: string
}
export class MessageDmsDeleteStoredImageInput {
    /* Methods of Qmi.MessageDmsDeleteStoredImageInput */
    get_image(): [ /* returnType */ boolean, /* value_image */ MessageDmsDeleteStoredImageInputImage ]
    ref(): MessageDmsDeleteStoredImageInput
    set_image(value_image: MessageDmsDeleteStoredImageInputImage): boolean
    unref(): void
    static name: string
    static new(): MessageDmsDeleteStoredImageInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsDeleteStoredImageInput
}
export class MessageDmsDeleteStoredImageInputImage {
    /* Fields of Qmi.MessageDmsDeleteStoredImageInputImage */
    type: DmsFirmwareImageType
    unique_id: object[]
    build_id: string
    static name: string
}
export class MessageDmsDeleteStoredImageOutput {
    /* Methods of Qmi.MessageDmsDeleteStoredImageOutput */
    get_result(): boolean
    ref(): MessageDmsDeleteStoredImageOutput
    unref(): void
    static name: string
}
export class MessageDmsFoxconnChangeDeviceModeInput {
    /* Methods of Qmi.MessageDmsFoxconnChangeDeviceModeInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsFoxconnDeviceMode ]
    ref(): MessageDmsFoxconnChangeDeviceModeInput
    set_mode(value_mode: DmsFoxconnDeviceMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsFoxconnChangeDeviceModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsFoxconnChangeDeviceModeInput
}
export class MessageDmsFoxconnChangeDeviceModeOutput {
    /* Methods of Qmi.MessageDmsFoxconnChangeDeviceModeOutput */
    get_result(): boolean
    ref(): MessageDmsFoxconnChangeDeviceModeOutput
    unref(): void
    static name: string
}
export class MessageDmsFoxconnGetFirmwareVersionInput {
    /* Methods of Qmi.MessageDmsFoxconnGetFirmwareVersionInput */
    get_version_type(): [ /* returnType */ boolean, /* value_version_type */ DmsFoxconnFirmwareVersionType ]
    ref(): MessageDmsFoxconnGetFirmwareVersionInput
    set_version_type(value_version_type: DmsFoxconnFirmwareVersionType): boolean
    unref(): void
    static name: string
    static new(): MessageDmsFoxconnGetFirmwareVersionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsFoxconnGetFirmwareVersionInput
}
export class MessageDmsFoxconnGetFirmwareVersionOutput {
    /* Methods of Qmi.MessageDmsFoxconnGetFirmwareVersionOutput */
    get_result(): boolean
    get_version(): [ /* returnType */ boolean, /* value_version */ string ]
    ref(): MessageDmsFoxconnGetFirmwareVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetActivationStateOutput {
    /* Methods of Qmi.MessageDmsGetActivationStateOutput */
    get_info(): [ /* returnType */ boolean, /* value_info */ DmsActivationState ]
    get_result(): boolean
    ref(): MessageDmsGetActivationStateOutput
    unref(): void
    static name: string
}
export class MessageDmsGetAltNetConfigOutput {
    /* Methods of Qmi.MessageDmsGetAltNetConfigOutput */
    get_config(): [ /* returnType */ boolean, /* value_config */ boolean ]
    get_result(): boolean
    ref(): MessageDmsGetAltNetConfigOutput
    unref(): void
    static name: string
}
export class MessageDmsGetBandCapabilitiesOutput {
    /* Methods of Qmi.MessageDmsGetBandCapabilitiesOutput */
    get_band_capability(): [ /* returnType */ boolean, /* value_band_capability */ DmsBandCapability ]
    get_extended_lte_band_capability(): [ /* returnType */ boolean, /* value_extended_lte_band_capability */ number[] ]
    get_lte_band_capability(): [ /* returnType */ boolean, /* value_lte_band_capability */ DmsLteBandCapability ]
    get_result(): boolean
    ref(): MessageDmsGetBandCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetBootImageDownloadModeOutput {
    /* Methods of Qmi.MessageDmsGetBootImageDownloadModeOutput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsBootImageDownloadMode ]
    get_result(): boolean
    ref(): MessageDmsGetBootImageDownloadModeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetCapabilitiesOutput {
    /* Methods of Qmi.MessageDmsGetCapabilitiesOutput */
    get_info(): [ /* returnType */ boolean, /* value_info_max_tx_channel_rate */ number, /* value_info_max_rx_channel_rate */ number, /* value_info_data_service_capability */ DmsDataServiceCapability, /* value_info_sim_capability */ DmsSimCapability, /* value_info_radio_interface_list */ DmsRadioInterface[] ]
    get_result(): boolean
    ref(): MessageDmsGetCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetFactorySkuOutput {
    /* Methods of Qmi.MessageDmsGetFactorySkuOutput */
    get_result(): boolean
    get_sku(): [ /* returnType */ boolean, /* value_sku */ string ]
    ref(): MessageDmsGetFactorySkuOutput
    unref(): void
    static name: string
}
export class MessageDmsGetFirmwarePreferenceOutput {
    /* Methods of Qmi.MessageDmsGetFirmwarePreferenceOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ MessageDmsGetFirmwarePreferenceOutputListImage[] ]
    get_result(): boolean
    ref(): MessageDmsGetFirmwarePreferenceOutput
    unref(): void
    static name: string
}
export class MessageDmsGetFirmwarePreferenceOutputListImage {
    /* Fields of Qmi.MessageDmsGetFirmwarePreferenceOutputListImage */
    type: DmsFirmwareImageType
    unique_id: object[]
    build_id: string
    static name: string
}
export class MessageDmsGetHardwareRevisionOutput {
    /* Methods of Qmi.MessageDmsGetHardwareRevisionOutput */
    get_result(): boolean
    get_revision(): [ /* returnType */ boolean, /* value_revision */ string ]
    ref(): MessageDmsGetHardwareRevisionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetIdsOutput {
    /* Methods of Qmi.MessageDmsGetIdsOutput */
    get_esn(): [ /* returnType */ boolean, /* value_esn */ string ]
    get_imei(): [ /* returnType */ boolean, /* value_imei */ string ]
    get_imei_software_version(): [ /* returnType */ boolean, /* value_imei_software_version */ string ]
    get_meid(): [ /* returnType */ boolean, /* value_meid */ string ]
    get_result(): boolean
    ref(): MessageDmsGetIdsOutput
    unref(): void
    static name: string
}
export class MessageDmsGetMacAddressInput {
    /* Methods of Qmi.MessageDmsGetMacAddressInput */
    get_device(): [ /* returnType */ boolean, /* value_device */ DmsMacType ]
    ref(): MessageDmsGetMacAddressInput
    set_device(value_device: DmsMacType): boolean
    unref(): void
    static name: string
    static new(): MessageDmsGetMacAddressInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsGetMacAddressInput
}
export class MessageDmsGetMacAddressOutput {
    /* Methods of Qmi.MessageDmsGetMacAddressOutput */
    get_mac_address(): [ /* returnType */ boolean, /* value_mac_address */ Uint8Array ]
    get_result(): boolean
    ref(): MessageDmsGetMacAddressOutput
    unref(): void
    static name: string
}
export class MessageDmsGetManufacturerOutput {
    /* Methods of Qmi.MessageDmsGetManufacturerOutput */
    get_manufacturer(): [ /* returnType */ boolean, /* value_manufacturer */ string ]
    get_result(): boolean
    ref(): MessageDmsGetManufacturerOutput
    unref(): void
    static name: string
}
export class MessageDmsGetModelOutput {
    /* Methods of Qmi.MessageDmsGetModelOutput */
    get_model(): [ /* returnType */ boolean, /* value_model */ string ]
    get_result(): boolean
    ref(): MessageDmsGetModelOutput
    unref(): void
    static name: string
}
export class MessageDmsGetMsisdnOutput {
    /* Methods of Qmi.MessageDmsGetMsisdnOutput */
    get_msisdn(): [ /* returnType */ boolean, /* value_msisdn */ string ]
    get_result(): boolean
    ref(): MessageDmsGetMsisdnOutput
    unref(): void
    static name: string
}
export class MessageDmsGetOperatingModeOutput {
    /* Methods of Qmi.MessageDmsGetOperatingModeOutput */
    get_hardware_restricted_mode(): [ /* returnType */ boolean, /* value_hardware_restricted_mode */ boolean ]
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsOperatingMode ]
    get_offline_reason(): [ /* returnType */ boolean, /* value_offline_reason */ DmsOfflineReason ]
    get_result(): boolean
    ref(): MessageDmsGetOperatingModeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetPowerStateOutput {
    /* Methods of Qmi.MessageDmsGetPowerStateOutput */
    get_info(): [ /* returnType */ boolean, /* value_info_power_state_flags */ number, /* value_info_battery_level */ number ]
    get_result(): boolean
    ref(): MessageDmsGetPowerStateOutput
    unref(): void
    static name: string
}
export class MessageDmsGetPrlVersionOutput {
    /* Methods of Qmi.MessageDmsGetPrlVersionOutput */
    get_prl_only_preference(): [ /* returnType */ boolean, /* value_prl_only_preference */ boolean ]
    get_result(): boolean
    get_version(): [ /* returnType */ boolean, /* value_version */ number ]
    ref(): MessageDmsGetPrlVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetRevisionOutput {
    /* Methods of Qmi.MessageDmsGetRevisionOutput */
    get_result(): boolean
    get_revision(): [ /* returnType */ boolean, /* value_revision */ string ]
    ref(): MessageDmsGetRevisionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetSoftwareVersionOutput {
    /* Methods of Qmi.MessageDmsGetSoftwareVersionOutput */
    get_result(): boolean
    get_version(): [ /* returnType */ boolean, /* value_version */ string ]
    ref(): MessageDmsGetSoftwareVersionOutput
    unref(): void
    static name: string
}
export class MessageDmsGetStoredImageInfoInput {
    /* Methods of Qmi.MessageDmsGetStoredImageInfoInput */
    get_image(): [ /* returnType */ boolean, /* value_image */ MessageDmsGetStoredImageInfoInputImage ]
    ref(): MessageDmsGetStoredImageInfoInput
    set_image(value_image: MessageDmsGetStoredImageInfoInputImage): boolean
    unref(): void
    static name: string
    static new(): MessageDmsGetStoredImageInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsGetStoredImageInfoInput
}
export class MessageDmsGetStoredImageInfoInputImage {
    /* Fields of Qmi.MessageDmsGetStoredImageInfoInputImage */
    type: DmsFirmwareImageType
    unique_id: object[]
    build_id: string
    static name: string
}
export class MessageDmsGetStoredImageInfoOutput {
    /* Methods of Qmi.MessageDmsGetStoredImageInfoOutput */
    get_boot_version(): [ /* returnType */ boolean, /* value_boot_version_major_version */ number, /* value_boot_version_minor_version */ number ]
    get_oem_lock_id(): [ /* returnType */ boolean, /* value_oem_lock_id */ number ]
    get_pri_version(): [ /* returnType */ boolean, /* value_pri_version_pri_version */ number, /* value_pri_version_pri_info */ string ]
    get_result(): boolean
    ref(): MessageDmsGetStoredImageInfoOutput
    unref(): void
    static name: string
}
export class MessageDmsGetSupportedMessagesOutput {
    /* Methods of Qmi.MessageDmsGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array ]
    get_result(): boolean
    ref(): MessageDmsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageDmsGetTimeOutput {
    /* Methods of Qmi.MessageDmsGetTimeOutput */
    get_device_time(): [ /* returnType */ boolean, /* value_device_time_time_count */ number, /* value_device_time_time_source */ DmsTimeSource ]
    get_result(): boolean
    get_system_time(): [ /* returnType */ boolean, /* value_system_time */ number ]
    get_user_time(): [ /* returnType */ boolean, /* value_user_time */ number ]
    ref(): MessageDmsGetTimeOutput
    unref(): void
    static name: string
}
export class MessageDmsGetUserLockStateOutput {
    /* Methods of Qmi.MessageDmsGetUserLockStateOutput */
    get_enabled(): [ /* returnType */ boolean, /* value_enabled */ boolean ]
    get_result(): boolean
    ref(): MessageDmsGetUserLockStateOutput
    unref(): void
    static name: string
}
export class MessageDmsHpChangeDeviceModeInput {
    /* Methods of Qmi.MessageDmsHpChangeDeviceModeInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsHpDeviceMode ]
    ref(): MessageDmsHpChangeDeviceModeInput
    set_mode(value_mode: DmsHpDeviceMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsHpChangeDeviceModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsHpChangeDeviceModeInput
}
export class MessageDmsHpChangeDeviceModeOutput {
    /* Methods of Qmi.MessageDmsHpChangeDeviceModeOutput */
    get_result(): boolean
    ref(): MessageDmsHpChangeDeviceModeOutput
    unref(): void
    static name: string
}
export class MessageDmsListStoredImagesOutput {
    /* Methods of Qmi.MessageDmsListStoredImagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ MessageDmsListStoredImagesOutputListImage[] ]
    get_result(): boolean
    ref(): MessageDmsListStoredImagesOutput
    unref(): void
    static name: string
}
export class MessageDmsListStoredImagesOutputListImage {
    /* Fields of Qmi.MessageDmsListStoredImagesOutputListImage */
    type: DmsFirmwareImageType
    maximum_images: number
    index_of_running_image: number
    sublist: object[]
    static name: string
}
export class MessageDmsListStoredImagesOutputListImageSublistSublistElement {
    /* Fields of Qmi.MessageDmsListStoredImagesOutputListImageSublistSublistElement */
    storage_index: number
    failure_count: number
    unique_id: object[]
    build_id: string
    static name: string
}
export class MessageDmsReadEriFileOutput {
    /* Methods of Qmi.MessageDmsReadEriFileOutput */
    get_eri_file(): [ /* returnType */ boolean, /* value_eri_file */ Uint8Array ]
    get_result(): boolean
    ref(): MessageDmsReadEriFileOutput
    unref(): void
    static name: string
}
export class MessageDmsReadUserDataOutput {
    /* Methods of Qmi.MessageDmsReadUserDataOutput */
    get_result(): boolean
    get_user_data(): [ /* returnType */ boolean, /* value_user_data */ Uint8Array ]
    ref(): MessageDmsReadUserDataOutput
    unref(): void
    static name: string
}
export class MessageDmsResetOutput {
    /* Methods of Qmi.MessageDmsResetOutput */
    get_result(): boolean
    ref(): MessageDmsResetOutput
    unref(): void
    static name: string
}
export class MessageDmsRestoreFactoryDefaultsInput {
    /* Methods of Qmi.MessageDmsRestoreFactoryDefaultsInput */
    get_service_programming_code(): [ /* returnType */ boolean, /* value_service_programming_code */ string ]
    ref(): MessageDmsRestoreFactoryDefaultsInput
    set_service_programming_code(value_service_programming_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsRestoreFactoryDefaultsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsRestoreFactoryDefaultsInput
}
export class MessageDmsRestoreFactoryDefaultsOutput {
    /* Methods of Qmi.MessageDmsRestoreFactoryDefaultsOutput */
    get_result(): boolean
    ref(): MessageDmsRestoreFactoryDefaultsOutput
    unref(): void
    static name: string
}
export class MessageDmsSetAltNetConfigInput {
    /* Methods of Qmi.MessageDmsSetAltNetConfigInput */
    get_config(): [ /* returnType */ boolean, /* value_config */ boolean ]
    ref(): MessageDmsSetAltNetConfigInput
    set_config(value_config: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetAltNetConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetAltNetConfigInput
}
export class MessageDmsSetAltNetConfigOutput {
    /* Methods of Qmi.MessageDmsSetAltNetConfigOutput */
    get_result(): boolean
    ref(): MessageDmsSetAltNetConfigOutput
    unref(): void
    static name: string
}
export class MessageDmsSetBootImageDownloadModeInput {
    /* Methods of Qmi.MessageDmsSetBootImageDownloadModeInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsBootImageDownloadMode ]
    ref(): MessageDmsSetBootImageDownloadModeInput
    set_mode(value_mode: DmsBootImageDownloadMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetBootImageDownloadModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetBootImageDownloadModeInput
}
export class MessageDmsSetBootImageDownloadModeOutput {
    /* Methods of Qmi.MessageDmsSetBootImageDownloadModeOutput */
    get_result(): boolean
    ref(): MessageDmsSetBootImageDownloadModeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetEventReportInput {
    /* Methods of Qmi.MessageDmsSetEventReportInput */
    get_activation_state_reporting(): [ /* returnType */ boolean, /* value_activation_state_reporting */ boolean ]
    get_battery_level_report_limits(): [ /* returnType */ boolean, /* value_battery_level_report_limits_lower_limit */ number, /* value_battery_level_report_limits_upper_limit */ number ]
    get_operating_mode_reporting(): [ /* returnType */ boolean, /* value_operating_mode_reporting */ boolean ]
    get_pin_state_reporting(): [ /* returnType */ boolean, /* value_pin_state_reporting */ boolean ]
    get_power_state_reporting(): [ /* returnType */ boolean, /* value_power_state_reporting */ boolean ]
    get_prl_init_reporting(): [ /* returnType */ boolean, /* value_prl_init_reporting */ boolean ]
    get_uim_state_reporting(): [ /* returnType */ boolean, /* value_uim_state_reporting */ boolean ]
    get_wireless_disable_state_reporting(): [ /* returnType */ boolean, /* value_wireless_disable_state_reporting */ boolean ]
    ref(): MessageDmsSetEventReportInput
    set_activation_state_reporting(value_activation_state_reporting: boolean): boolean
    set_battery_level_report_limits(value_battery_level_report_limits_lower_limit: number, value_battery_level_report_limits_upper_limit: number): boolean
    set_operating_mode_reporting(value_operating_mode_reporting: boolean): boolean
    set_pin_state_reporting(value_pin_state_reporting: boolean): boolean
    set_power_state_reporting(value_power_state_reporting: boolean): boolean
    set_prl_init_reporting(value_prl_init_reporting: boolean): boolean
    set_uim_state_reporting(value_uim_state_reporting: boolean): boolean
    set_wireless_disable_state_reporting(value_wireless_disable_state_reporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetEventReportInput
}
export class MessageDmsSetEventReportOutput {
    /* Methods of Qmi.MessageDmsSetEventReportOutput */
    get_result(): boolean
    ref(): MessageDmsSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageDmsSetFccAuthenticationOutput {
    /* Methods of Qmi.MessageDmsSetFccAuthenticationOutput */
    get_result(): boolean
    ref(): MessageDmsSetFccAuthenticationOutput
    unref(): void
    static name: string
}
export class MessageDmsSetFirmwareIdOutput {
    /* Methods of Qmi.MessageDmsSetFirmwareIdOutput */
    get_result(): boolean
    ref(): MessageDmsSetFirmwareIdOutput
    unref(): void
    static name: string
}
export class MessageDmsSetFirmwarePreferenceInput {
    /* Methods of Qmi.MessageDmsSetFirmwarePreferenceInput */
    get_download_override(): [ /* returnType */ boolean, /* value_download_override */ boolean ]
    get_list(): [ /* returnType */ boolean, /* value_list */ MessageDmsSetFirmwarePreferenceInputListImage[] ]
    get_modem_storage_index(): [ /* returnType */ boolean, /* value_modem_storage_index */ number ]
    ref(): MessageDmsSetFirmwarePreferenceInput
    set_download_override(value_download_override: boolean): boolean
    set_list(value_list: MessageDmsSetFirmwarePreferenceInputListImage[]): boolean
    set_modem_storage_index(value_modem_storage_index: number): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetFirmwarePreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetFirmwarePreferenceInput
}
export class MessageDmsSetFirmwarePreferenceInputListImage {
    /* Fields of Qmi.MessageDmsSetFirmwarePreferenceInputListImage */
    type: DmsFirmwareImageType
    unique_id: object[]
    build_id: string
    static name: string
}
export class MessageDmsSetFirmwarePreferenceOutput {
    /* Methods of Qmi.MessageDmsSetFirmwarePreferenceOutput */
    get_image_download_list(): [ /* returnType */ boolean, /* value_image_download_list */ DmsFirmwareImageType[] ]
    get_result(): boolean
    ref(): MessageDmsSetFirmwarePreferenceOutput
    unref(): void
    static name: string
}
export class MessageDmsSetOperatingModeInput {
    /* Methods of Qmi.MessageDmsSetOperatingModeInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsOperatingMode ]
    ref(): MessageDmsSetOperatingModeInput
    set_mode(value_mode: DmsOperatingMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetOperatingModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetOperatingModeInput
}
export class MessageDmsSetOperatingModeOutput {
    /* Methods of Qmi.MessageDmsSetOperatingModeOutput */
    get_result(): boolean
    ref(): MessageDmsSetOperatingModeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetServiceProgrammingCodeInput {
    /* Methods of Qmi.MessageDmsSetServiceProgrammingCodeInput */
    get_current_code(): [ /* returnType */ boolean, /* value_current_code */ string ]
    get_new_code(): [ /* returnType */ boolean, /* value_new_code */ string ]
    ref(): MessageDmsSetServiceProgrammingCodeInput
    set_current_code(value_current_code: string): boolean
    set_new_code(value_new_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetServiceProgrammingCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetServiceProgrammingCodeInput
}
export class MessageDmsSetServiceProgrammingCodeOutput {
    /* Methods of Qmi.MessageDmsSetServiceProgrammingCodeOutput */
    get_result(): boolean
    ref(): MessageDmsSetServiceProgrammingCodeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetTimeInput {
    /* Methods of Qmi.MessageDmsSetTimeInput */
    get_time_reference_type(): [ /* returnType */ boolean, /* value_time_reference_type */ DmsTimeReferenceType ]
    get_time_value(): [ /* returnType */ boolean, /* value_time_value */ number ]
    ref(): MessageDmsSetTimeInput
    set_time_reference_type(value_time_reference_type: DmsTimeReferenceType): boolean
    set_time_value(value_time_value: number): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetTimeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetTimeInput
}
export class MessageDmsSetTimeOutput {
    /* Methods of Qmi.MessageDmsSetTimeOutput */
    get_result(): boolean
    ref(): MessageDmsSetTimeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetUserLockCodeInput {
    /* Methods of Qmi.MessageDmsSetUserLockCodeInput */
    get_info(): [ /* returnType */ boolean, /* value_info_old_code */ string, /* value_info_new_code */ string ]
    ref(): MessageDmsSetUserLockCodeInput
    set_info(value_info_old_code: string, value_info_new_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetUserLockCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetUserLockCodeInput
}
export class MessageDmsSetUserLockCodeOutput {
    /* Methods of Qmi.MessageDmsSetUserLockCodeOutput */
    get_result(): boolean
    ref(): MessageDmsSetUserLockCodeOutput
    unref(): void
    static name: string
}
export class MessageDmsSetUserLockStateInput {
    /* Methods of Qmi.MessageDmsSetUserLockStateInput */
    get_info(): [ /* returnType */ boolean, /* value_info_enabled */ boolean, /* value_info_lock_code */ string ]
    ref(): MessageDmsSetUserLockStateInput
    set_info(value_info_enabled: boolean, value_info_lock_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetUserLockStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetUserLockStateInput
}
export class MessageDmsSetUserLockStateOutput {
    /* Methods of Qmi.MessageDmsSetUserLockStateOutput */
    get_result(): boolean
    ref(): MessageDmsSetUserLockStateOutput
    unref(): void
    static name: string
}
export class MessageDmsSwiGetCurrentFirmwareOutput {
    /* Methods of Qmi.MessageDmsSwiGetCurrentFirmwareOutput */
    get_amss_version(): [ /* returnType */ boolean, /* value_amss_version */ string ]
    get_boot_version(): [ /* returnType */ boolean, /* value_boot_version */ string ]
    get_carrier(): [ /* returnType */ boolean, /* value_carrier */ string ]
    get_carrier_id(): [ /* returnType */ boolean, /* value_carrier_id */ string ]
    get_config_version(): [ /* returnType */ boolean, /* value_config_version */ string ]
    get_model(): [ /* returnType */ boolean, /* value_model */ string ]
    get_package_id(): [ /* returnType */ boolean, /* value_package_id */ string ]
    get_pri_version(): [ /* returnType */ boolean, /* value_pri_version */ string ]
    get_result(): boolean
    get_sku_id(): [ /* returnType */ boolean, /* value_sku_id */ string ]
    ref(): MessageDmsSwiGetCurrentFirmwareOutput
    unref(): void
    static name: string
}
export class MessageDmsSwiGetUsbCompositionOutput {
    /* Methods of Qmi.MessageDmsSwiGetUsbCompositionOutput */
    get_current(): [ /* returnType */ boolean, /* value_current */ DmsSwiUsbComposition ]
    get_result(): boolean
    get_supported(): [ /* returnType */ boolean, /* value_supported */ DmsSwiUsbComposition[] ]
    ref(): MessageDmsSwiGetUsbCompositionOutput
    unref(): void
    static name: string
}
export class MessageDmsSwiSetUsbCompositionInput {
    /* Methods of Qmi.MessageDmsSwiSetUsbCompositionInput */
    get_current(): [ /* returnType */ boolean, /* value_current */ DmsSwiUsbComposition ]
    ref(): MessageDmsSwiSetUsbCompositionInput
    set_current(value_current: DmsSwiUsbComposition): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSwiSetUsbCompositionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSwiSetUsbCompositionInput
}
export class MessageDmsSwiSetUsbCompositionOutput {
    /* Methods of Qmi.MessageDmsSwiSetUsbCompositionOutput */
    get_result(): boolean
    ref(): MessageDmsSwiSetUsbCompositionOutput
    unref(): void
    static name: string
}
export class MessageDmsUimChangePinInput {
    /* Methods of Qmi.MessageDmsUimChangePinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ DmsUimPinId, /* value_info_old_pin */ string, /* value_info_new_pin */ string ]
    ref(): MessageDmsUimChangePinInput
    set_info(value_info_pin_id: DmsUimPinId, value_info_old_pin: string, value_info_new_pin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimChangePinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimChangePinInput
}
export class MessageDmsUimChangePinOutput {
    /* Methods of Qmi.MessageDmsUimChangePinOutput */
    get_pin_retries_status(): [ /* returnType */ boolean, /* value_pin_retries_status_verify_retries_left */ number, /* value_pin_retries_status_unblock_retries_left */ number ]
    get_result(): boolean
    ref(): MessageDmsUimChangePinOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetCkStatusInput {
    /* Methods of Qmi.MessageDmsUimGetCkStatusInput */
    get_facility(): [ /* returnType */ boolean, /* value_facility */ DmsUimFacility ]
    ref(): MessageDmsUimGetCkStatusInput
    set_facility(value_facility: DmsUimFacility): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimGetCkStatusInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimGetCkStatusInput
}
export class MessageDmsUimGetCkStatusOutput {
    /* Methods of Qmi.MessageDmsUimGetCkStatusOutput */
    get_ck_status(): [ /* returnType */ boolean, /* value_ck_status_facility_state */ DmsUimFacilityState, /* value_ck_status_verify_retries_left */ number, /* value_ck_status_unblock_retries_left */ number ]
    get_operation_blocking_facility(): [ /* returnType */ boolean, /* value_operation_blocking_facility */ boolean ]
    get_result(): boolean
    ref(): MessageDmsUimGetCkStatusOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetIccidOutput {
    /* Methods of Qmi.MessageDmsUimGetIccidOutput */
    get_iccid(): [ /* returnType */ boolean, /* value_iccid */ string ]
    get_result(): boolean
    ref(): MessageDmsUimGetIccidOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetImsiOutput {
    /* Methods of Qmi.MessageDmsUimGetImsiOutput */
    get_imsi(): [ /* returnType */ boolean, /* value_imsi */ string ]
    get_result(): boolean
    ref(): MessageDmsUimGetImsiOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetPinStatusOutput {
    /* Methods of Qmi.MessageDmsUimGetPinStatusOutput */
    get_pin1_status(): [ /* returnType */ boolean, /* value_pin1_status_current_status */ DmsUimPinStatus, /* value_pin1_status_verify_retries_left */ number, /* value_pin1_status_unblock_retries_left */ number ]
    get_pin2_status(): [ /* returnType */ boolean, /* value_pin2_status_current_status */ DmsUimPinStatus, /* value_pin2_status_verify_retries_left */ number, /* value_pin2_status_unblock_retries_left */ number ]
    get_result(): boolean
    ref(): MessageDmsUimGetPinStatusOutput
    unref(): void
    static name: string
}
export class MessageDmsUimGetStateOutput {
    /* Methods of Qmi.MessageDmsUimGetStateOutput */
    get_result(): boolean
    get_state(): [ /* returnType */ boolean, /* value_state */ DmsUimState ]
    ref(): MessageDmsUimGetStateOutput
    unref(): void
    static name: string
}
export class MessageDmsUimSetCkProtectionInput {
    /* Methods of Qmi.MessageDmsUimSetCkProtectionInput */
    get_facility(): [ /* returnType */ boolean, /* value_facility_facility */ DmsUimFacility, /* value_facility_facility_state */ DmsUimFacilityState, /* value_facility_facility_depersonalization_control_key */ string ]
    ref(): MessageDmsUimSetCkProtectionInput
    set_facility(value_facility_facility: DmsUimFacility, value_facility_facility_state: DmsUimFacilityState, value_facility_facility_depersonalization_control_key: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimSetCkProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimSetCkProtectionInput
}
export class MessageDmsUimSetCkProtectionOutput {
    /* Methods of Qmi.MessageDmsUimSetCkProtectionOutput */
    get_result(): boolean
    get_verify_retries_left(): [ /* returnType */ boolean, /* value_verify_retries_left */ number ]
    ref(): MessageDmsUimSetCkProtectionOutput
    unref(): void
    static name: string
}
export class MessageDmsUimSetPinProtectionInput {
    /* Methods of Qmi.MessageDmsUimSetPinProtectionInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ DmsUimPinId, /* value_info_protection_enabled */ boolean, /* value_info_pin */ string ]
    ref(): MessageDmsUimSetPinProtectionInput
    set_info(value_info_pin_id: DmsUimPinId, value_info_protection_enabled: boolean, value_info_pin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimSetPinProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimSetPinProtectionInput
}
export class MessageDmsUimSetPinProtectionOutput {
    /* Methods of Qmi.MessageDmsUimSetPinProtectionOutput */
    get_pin_retries_status(): [ /* returnType */ boolean, /* value_pin_retries_status_verify_retries_left */ number, /* value_pin_retries_status_unblock_retries_left */ number ]
    get_result(): boolean
    ref(): MessageDmsUimSetPinProtectionOutput
    unref(): void
    static name: string
}
export class MessageDmsUimUnblockCkInput {
    /* Methods of Qmi.MessageDmsUimUnblockCkInput */
    get_facility(): [ /* returnType */ boolean, /* value_facility_facility */ DmsUimFacility, /* value_facility_facility_control_key */ string ]
    ref(): MessageDmsUimUnblockCkInput
    set_facility(value_facility_facility: DmsUimFacility, value_facility_facility_control_key: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimUnblockCkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimUnblockCkInput
}
export class MessageDmsUimUnblockCkOutput {
    /* Methods of Qmi.MessageDmsUimUnblockCkOutput */
    get_result(): boolean
    get_unblock_retries_left(): [ /* returnType */ boolean, /* value_unblock_retries_left */ number ]
    ref(): MessageDmsUimUnblockCkOutput
    unref(): void
    static name: string
}
export class MessageDmsUimUnblockPinInput {
    /* Methods of Qmi.MessageDmsUimUnblockPinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ DmsUimPinId, /* value_info_puk */ string, /* value_info_new_pin */ string ]
    ref(): MessageDmsUimUnblockPinInput
    set_info(value_info_pin_id: DmsUimPinId, value_info_puk: string, value_info_new_pin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimUnblockPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimUnblockPinInput
}
export class MessageDmsUimUnblockPinOutput {
    /* Methods of Qmi.MessageDmsUimUnblockPinOutput */
    get_pin_retries_status(): [ /* returnType */ boolean, /* value_pin_retries_status_verify_retries_left */ number, /* value_pin_retries_status_unblock_retries_left */ number ]
    get_result(): boolean
    ref(): MessageDmsUimUnblockPinOutput
    unref(): void
    static name: string
}
export class MessageDmsUimVerifyPinInput {
    /* Methods of Qmi.MessageDmsUimVerifyPinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ DmsUimPinId, /* value_info_pin */ string ]
    ref(): MessageDmsUimVerifyPinInput
    set_info(value_info_pin_id: DmsUimPinId, value_info_pin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimVerifyPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimVerifyPinInput
}
export class MessageDmsUimVerifyPinOutput {
    /* Methods of Qmi.MessageDmsUimVerifyPinOutput */
    get_pin_retries_status(): [ /* returnType */ boolean, /* value_pin_retries_status_verify_retries_left */ number, /* value_pin_retries_status_unblock_retries_left */ number ]
    get_result(): boolean
    ref(): MessageDmsUimVerifyPinOutput
    unref(): void
    static name: string
}
export class MessageDmsValidateServiceProgrammingCodeInput {
    /* Methods of Qmi.MessageDmsValidateServiceProgrammingCodeInput */
    get_service_programming_code(): [ /* returnType */ boolean, /* value_service_programming_code */ string ]
    ref(): MessageDmsValidateServiceProgrammingCodeInput
    set_service_programming_code(value_service_programming_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsValidateServiceProgrammingCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsValidateServiceProgrammingCodeInput
}
export class MessageDmsValidateServiceProgrammingCodeOutput {
    /* Methods of Qmi.MessageDmsValidateServiceProgrammingCodeOutput */
    get_result(): boolean
    ref(): MessageDmsValidateServiceProgrammingCodeOutput
    unref(): void
    static name: string
}
export class MessageDmsWriteUserDataInput {
    /* Methods of Qmi.MessageDmsWriteUserDataInput */
    get_user_data(): [ /* returnType */ boolean, /* value_user_data */ Uint8Array ]
    ref(): MessageDmsWriteUserDataInput
    set_user_data(value_user_data: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageDmsWriteUserDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsWriteUserDataInput
}
export class MessageDmsWriteUserDataOutput {
    /* Methods of Qmi.MessageDmsWriteUserDataOutput */
    get_result(): boolean
    ref(): MessageDmsWriteUserDataOutput
    unref(): void
    static name: string
}
export class MessageDsdGetApnInfoInput {
    /* Methods of Qmi.MessageDsdGetApnInfoInput */
    get_apn_type(): [ /* returnType */ boolean, /* value_apn_type */ DsdApnType ]
    ref(): MessageDsdGetApnInfoInput
    set_apn_type(value_apn_type: DsdApnType): boolean
    unref(): void
    static name: string
    static new(): MessageDsdGetApnInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDsdGetApnInfoInput
}
export class MessageDsdGetApnInfoOutput {
    /* Methods of Qmi.MessageDsdGetApnInfoOutput */
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string ]
    get_result(): boolean
    ref(): MessageDsdGetApnInfoOutput
    unref(): void
    static name: string
}
export class MessageDsdSetApnTypeInput {
    /* Methods of Qmi.MessageDsdSetApnTypeInput */
    get_apn_type(): [ /* returnType */ boolean, /* value_apn_type_name */ string, /* value_apn_type_type */ DsdApnTypePreference ]
    get_apn_type_preference_mask(): [ /* returnType */ boolean, /* value_apn_type_preference_mask */ DsdApnTypePreference ]
    ref(): MessageDsdSetApnTypeInput
    set_apn_type(value_apn_type_name: string, value_apn_type_type: DsdApnTypePreference): boolean
    set_apn_type_preference_mask(value_apn_type_preference_mask: DsdApnTypePreference): boolean
    unref(): void
    static name: string
    static new(): MessageDsdSetApnTypeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDsdSetApnTypeInput
}
export class MessageDsdSetApnTypeOutput {
    /* Methods of Qmi.MessageDsdSetApnTypeOutput */
    get_result(): boolean
    ref(): MessageDsdSetApnTypeOutput
    unref(): void
    static name: string
}
export class MessageGasDmsGetFirmwareListInput {
    /* Methods of Qmi.MessageGasDmsGetFirmwareListInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ GasFirmwareListingMode ]
    get_name(): [ /* returnType */ boolean, /* value_name */ string ]
    get_slot_index(): [ /* returnType */ boolean, /* value_slot_index */ number ]
    get_version(): [ /* returnType */ boolean, /* value_version */ string ]
    ref(): MessageGasDmsGetFirmwareListInput
    set_mode(value_mode: GasFirmwareListingMode): boolean
    set_name(value_name: string): boolean
    set_slot_index(value_slot_index: number): boolean
    set_version(value_version: string): boolean
    unref(): void
    static name: string
    static new(): MessageGasDmsGetFirmwareListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGasDmsGetFirmwareListInput
}
export class MessageGasDmsGetFirmwareListOutput {
    /* Methods of Qmi.MessageGasDmsGetFirmwareListOutput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ GasFirmwareListingMode ]
    get_result(): boolean
    get_stored_firmware_1(): [ /* returnType */ boolean, /* value_stored_firmware_1_index */ number, /* value_stored_firmware_1_name */ string, /* value_stored_firmware_1_version */ string, /* value_stored_firmware_1_pri_revision */ string ]
    get_stored_firmware_2(): [ /* returnType */ boolean, /* value_stored_firmware_2_index */ number, /* value_stored_firmware_2_name */ string, /* value_stored_firmware_2_version */ string, /* value_stored_firmware_2_pri_revision */ string ]
    get_stored_firmware_3(): [ /* returnType */ boolean, /* value_stored_firmware_3_index */ number, /* value_stored_firmware_3_name */ string, /* value_stored_firmware_3_version */ string, /* value_stored_firmware_3_pri_revision */ string ]
    get_stored_firmware_4(): [ /* returnType */ boolean, /* value_stored_firmware_4_index */ number, /* value_stored_firmware_4_name */ string, /* value_stored_firmware_4_version */ string, /* value_stored_firmware_4_pri_revision */ string ]
    ref(): MessageGasDmsGetFirmwareListOutput
    unref(): void
    static name: string
}
export class MessageGasDmsSetActiveFirmwareInput {
    /* Methods of Qmi.MessageGasDmsSetActiveFirmwareInput */
    get_carrier_name(): [ /* returnType */ boolean, /* value_carrier_name */ string ]
    get_slot_index(): [ /* returnType */ boolean, /* value_slot_index */ number ]
    get_version(): [ /* returnType */ boolean, /* value_version */ string ]
    ref(): MessageGasDmsSetActiveFirmwareInput
    set_carrier_name(value_carrier_name: string): boolean
    set_slot_index(value_slot_index: number): boolean
    set_version(value_version: string): boolean
    unref(): void
    static name: string
    static new(): MessageGasDmsSetActiveFirmwareInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGasDmsSetActiveFirmwareInput
}
export class MessageGasDmsSetActiveFirmwareOutput {
    /* Methods of Qmi.MessageGasDmsSetActiveFirmwareOutput */
    get_result(): boolean
    ref(): MessageGasDmsSetActiveFirmwareOutput
    unref(): void
    static name: string
}
export class MessageGmsTestGetValueOutput {
    /* Methods of Qmi.MessageGmsTestGetValueOutput */
    get_result(): boolean
    get_test_mandatory_value(): [ /* returnType */ boolean, /* value_test_mandatory_value */ number ]
    get_test_optional_value(): [ /* returnType */ boolean, /* value_test_optional_value */ number ]
    ref(): MessageGmsTestGetValueOutput
    unref(): void
    static name: string
}
export class MessageGmsTestSetValueInput {
    /* Methods of Qmi.MessageGmsTestSetValueInput */
    get_test_mandatory_value(): [ /* returnType */ boolean, /* value_test_mandatory_value */ number ]
    get_test_optional_value(): [ /* returnType */ boolean, /* value_test_optional_value */ number ]
    ref(): MessageGmsTestSetValueInput
    set_test_mandatory_value(value_test_mandatory_value: number): boolean
    set_test_optional_value(value_test_optional_value: number): boolean
    unref(): void
    static name: string
    static new(): MessageGmsTestSetValueInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGmsTestSetValueInput
}
export class MessageGmsTestSetValueOutput {
    /* Methods of Qmi.MessageGmsTestSetValueOutput */
    get_result(): boolean
    ref(): MessageGmsTestSetValueOutput
    unref(): void
    static name: string
}
export class MessageLocDeleteAssistanceDataInput {
    /* Methods of Qmi.MessageLocDeleteAssistanceDataInput */
    get_delete_all(): [ /* returnType */ boolean, /* value_delete_all */ boolean ]
    get_delete_cell_database_mask(): [ /* returnType */ boolean, /* value_delete_cell_database_mask */ LocDeleteCellDatabase ]
    get_delete_clock_info_mask(): [ /* returnType */ boolean, /* value_delete_clock_info_mask */ LocDeleteClockInfo ]
    get_delete_gnss_data_mask(): [ /* returnType */ boolean, /* value_delete_gnss_data_mask */ LocDeleteGnssData ]
    get_delete_sv_info(): [ /* returnType */ boolean, /* value_delete_sv_info */ MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[] ]
    ref(): MessageLocDeleteAssistanceDataInput
    set_delete_all(value_delete_all: boolean): boolean
    set_delete_cell_database_mask(value_delete_cell_database_mask: LocDeleteCellDatabase): boolean
    set_delete_clock_info_mask(value_delete_clock_info_mask: LocDeleteClockInfo): boolean
    set_delete_gnss_data_mask(value_delete_gnss_data_mask: LocDeleteGnssData): boolean
    set_delete_sv_info(value_delete_sv_info: MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[]): boolean
    unref(): void
    static name: string
    static new(): MessageLocDeleteAssistanceDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocDeleteAssistanceDataInput
}
export class MessageLocDeleteAssistanceDataInputDeleteSvInfoElement {
    /* Fields of Qmi.MessageLocDeleteAssistanceDataInputDeleteSvInfoElement */
    gnss_sv_id: number
    system: LocSystem
    delete_sv_info_mask: LocDeleteSvInfo
    static name: string
}
export class MessageLocDeleteAssistanceDataOutput {
    /* Methods of Qmi.MessageLocDeleteAssistanceDataOutput */
    get_result(): boolean
    ref(): MessageLocDeleteAssistanceDataOutput
    unref(): void
    static name: string
}
export class MessageLocGetEngineLockOutput {
    /* Methods of Qmi.MessageLocGetEngineLockOutput */
    get_result(): boolean
    ref(): MessageLocGetEngineLockOutput
    unref(): void
    static name: string
}
export class MessageLocGetNmeaTypesOutput {
    /* Methods of Qmi.MessageLocGetNmeaTypesOutput */
    get_result(): boolean
    ref(): MessageLocGetNmeaTypesOutput
    unref(): void
    static name: string
}
export class MessageLocGetOperationModeOutput {
    /* Methods of Qmi.MessageLocGetOperationModeOutput */
    get_result(): boolean
    ref(): MessageLocGetOperationModeOutput
    unref(): void
    static name: string
}
export class MessageLocGetPredictedOrbitsDataSourceOutput {
    /* Methods of Qmi.MessageLocGetPredictedOrbitsDataSourceOutput */
    get_result(): boolean
    ref(): MessageLocGetPredictedOrbitsDataSourceOutput
    unref(): void
    static name: string
}
export class MessageLocGetServerInput {
    /* Methods of Qmi.MessageLocGetServerInput */
    get_server_address_type(): [ /* returnType */ boolean, /* value_server_address_type */ LocServerAddressType ]
    get_server_type(): [ /* returnType */ boolean, /* value_server_type */ LocServerType ]
    ref(): MessageLocGetServerInput
    set_server_address_type(value_server_address_type: LocServerAddressType): boolean
    set_server_type(value_server_type: LocServerType): boolean
    unref(): void
    static name: string
    static new(): MessageLocGetServerInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocGetServerInput
}
export class MessageLocGetServerOutput {
    /* Methods of Qmi.MessageLocGetServerOutput */
    get_result(): boolean
    ref(): MessageLocGetServerOutput
    unref(): void
    static name: string
}
export class MessageLocInjectPredictedOrbitsDataInput {
    /* Methods of Qmi.MessageLocInjectPredictedOrbitsDataInput */
    get_format_type(): [ /* returnType */ boolean, /* value_format_type */ LocPredictedOrbitsDataFormat ]
    get_part_data(): [ /* returnType */ boolean, /* value_part_data */ Uint8Array ]
    get_part_number(): [ /* returnType */ boolean, /* value_part_number */ number ]
    get_total_parts(): [ /* returnType */ boolean, /* value_total_parts */ number ]
    get_total_size(): [ /* returnType */ boolean, /* value_total_size */ number ]
    ref(): MessageLocInjectPredictedOrbitsDataInput
    set_format_type(value_format_type: LocPredictedOrbitsDataFormat): boolean
    set_part_data(value_part_data: Uint8Array): boolean
    set_part_number(value_part_number: number): boolean
    set_total_parts(value_total_parts: number): boolean
    set_total_size(value_total_size: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocInjectPredictedOrbitsDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocInjectPredictedOrbitsDataInput
}
export class MessageLocInjectPredictedOrbitsDataOutput {
    /* Methods of Qmi.MessageLocInjectPredictedOrbitsDataOutput */
    get_result(): boolean
    ref(): MessageLocInjectPredictedOrbitsDataOutput
    unref(): void
    static name: string
}
export class MessageLocInjectXtraDataInput {
    /* Methods of Qmi.MessageLocInjectXtraDataInput */
    get_part_data(): [ /* returnType */ boolean, /* value_part_data */ Uint8Array ]
    get_part_number(): [ /* returnType */ boolean, /* value_part_number */ number ]
    get_total_parts(): [ /* returnType */ boolean, /* value_total_parts */ number ]
    get_total_size(): [ /* returnType */ boolean, /* value_total_size */ number ]
    ref(): MessageLocInjectXtraDataInput
    set_part_data(value_part_data: Uint8Array): boolean
    set_part_number(value_part_number: number): boolean
    set_total_parts(value_total_parts: number): boolean
    set_total_size(value_total_size: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocInjectXtraDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocInjectXtraDataInput
}
export class MessageLocInjectXtraDataOutput {
    /* Methods of Qmi.MessageLocInjectXtraDataOutput */
    get_result(): boolean
    ref(): MessageLocInjectXtraDataOutput
    unref(): void
    static name: string
}
export class MessageLocRegisterEventsInput {
    /* Methods of Qmi.MessageLocRegisterEventsInput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ LocEventRegistrationFlag ]
    ref(): MessageLocRegisterEventsInput
    set_event_registration_mask(value_event_registration_mask: LocEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessageLocRegisterEventsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocRegisterEventsInput
}
export class MessageLocRegisterEventsOutput {
    /* Methods of Qmi.MessageLocRegisterEventsOutput */
    get_result(): boolean
    ref(): MessageLocRegisterEventsOutput
    unref(): void
    static name: string
}
export class MessageLocSetEngineLockInput {
    /* Methods of Qmi.MessageLocSetEngineLockInput */
    get_lock_type(): [ /* returnType */ boolean, /* value_lock_type */ LocLockType ]
    ref(): MessageLocSetEngineLockInput
    set_lock_type(value_lock_type: LocLockType): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetEngineLockInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetEngineLockInput
}
export class MessageLocSetEngineLockOutput {
    /* Methods of Qmi.MessageLocSetEngineLockOutput */
    get_result(): boolean
    ref(): MessageLocSetEngineLockOutput
    unref(): void
    static name: string
}
export class MessageLocSetNmeaTypesInput {
    /* Methods of Qmi.MessageLocSetNmeaTypesInput */
    get_nmea_types(): [ /* returnType */ boolean, /* value_nmea_types */ LocNmeaType ]
    ref(): MessageLocSetNmeaTypesInput
    set_nmea_types(value_nmea_types: LocNmeaType): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetNmeaTypesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetNmeaTypesInput
}
export class MessageLocSetNmeaTypesOutput {
    /* Methods of Qmi.MessageLocSetNmeaTypesOutput */
    get_result(): boolean
    ref(): MessageLocSetNmeaTypesOutput
    unref(): void
    static name: string
}
export class MessageLocSetOperationModeInput {
    /* Methods of Qmi.MessageLocSetOperationModeInput */
    get_operation_mode(): [ /* returnType */ boolean, /* value_operation_mode */ LocOperationMode ]
    ref(): MessageLocSetOperationModeInput
    set_operation_mode(value_operation_mode: LocOperationMode): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetOperationModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetOperationModeInput
}
export class MessageLocSetOperationModeOutput {
    /* Methods of Qmi.MessageLocSetOperationModeOutput */
    get_result(): boolean
    ref(): MessageLocSetOperationModeOutput
    unref(): void
    static name: string
}
export class MessageLocSetServerInput {
    /* Methods of Qmi.MessageLocSetServerInput */
    get_ipv4(): [ /* returnType */ boolean, /* value_ipv4_ipv4_address */ number, /* value_ipv4_ipv4_port */ number ]
    get_ipv6(): [ /* returnType */ boolean, /* value_ipv6_ipv6_address */ number[], /* value_ipv6_ipv6_port */ number ]
    get_server_type(): [ /* returnType */ boolean, /* value_server_type */ LocServerType ]
    get_url(): [ /* returnType */ boolean, /* value_url */ string ]
    ref(): MessageLocSetServerInput
    set_ipv4(value_ipv4_ipv4_address: number, value_ipv4_ipv4_port: number): boolean
    set_ipv6(value_ipv6_ipv6_address: number[], value_ipv6_ipv6_port: number): boolean
    set_server_type(value_server_type: LocServerType): boolean
    set_url(value_url: string): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetServerInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetServerInput
}
export class MessageLocSetServerOutput {
    /* Methods of Qmi.MessageLocSetServerOutput */
    get_result(): boolean
    ref(): MessageLocSetServerOutput
    unref(): void
    static name: string
}
export class MessageLocStartInput {
    /* Methods of Qmi.MessageLocStartInput */
    get_fix_recurrence_type(): [ /* returnType */ boolean, /* value_fix_recurrence_type */ LocFixRecurrenceType ]
    get_intermediate_report_state(): [ /* returnType */ boolean, /* value_intermediate_report_state */ LocIntermediateReportState ]
    get_minimum_interval_between_position_reports(): [ /* returnType */ boolean, /* value_minimum_interval_between_position_reports */ number ]
    get_session_id(): [ /* returnType */ boolean, /* value_session_id */ number ]
    ref(): MessageLocStartInput
    set_fix_recurrence_type(value_fix_recurrence_type: LocFixRecurrenceType): boolean
    set_intermediate_report_state(value_intermediate_report_state: LocIntermediateReportState): boolean
    set_minimum_interval_between_position_reports(value_minimum_interval_between_position_reports: number): boolean
    set_session_id(value_session_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocStartInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocStartInput
}
export class MessageLocStartOutput {
    /* Methods of Qmi.MessageLocStartOutput */
    get_result(): boolean
    ref(): MessageLocStartOutput
    unref(): void
    static name: string
}
export class MessageLocStopInput {
    /* Methods of Qmi.MessageLocStopInput */
    get_session_id(): [ /* returnType */ boolean, /* value_session_id */ number ]
    ref(): MessageLocStopInput
    set_session_id(value_session_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocStopInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocStopInput
}
export class MessageLocStopOutput {
    /* Methods of Qmi.MessageLocStopOutput */
    get_result(): boolean
    ref(): MessageLocStopOutput
    unref(): void
    static name: string
}
export class MessageNasAttachDetachInput {
    /* Methods of Qmi.MessageNasAttachDetachInput */
    get_action(): [ /* returnType */ boolean, /* value_action */ NasPsAttachAction ]
    ref(): MessageNasAttachDetachInput
    set_action(value_action: NasPsAttachAction): boolean
    unref(): void
    static name: string
    static new(): MessageNasAttachDetachInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasAttachDetachInput
}
export class MessageNasAttachDetachOutput {
    /* Methods of Qmi.MessageNasAttachDetachOutput */
    get_result(): boolean
    ref(): MessageNasAttachDetachOutput
    unref(): void
    static name: string
}
export class MessageNasConfigSignalInfoInput {
    /* Methods of Qmi.MessageNasConfigSignalInfoInput */
    get_ecio_threshold(): [ /* returnType */ boolean, /* value_ecio_threshold */ number[] ]
    get_io_threshold(): [ /* returnType */ boolean, /* value_io_threshold */ number[] ]
    get_lte_report(): [ /* returnType */ boolean, /* value_lte_report_rate */ number, /* value_lte_report_average_period */ number ]
    get_lte_snr_threshold(): [ /* returnType */ boolean, /* value_lte_snr_threshold */ number[] ]
    get_rscp_threshold(): [ /* returnType */ boolean, /* value_rscp_threshold */ Uint8Array ]
    get_rsrp_threshold(): [ /* returnType */ boolean, /* value_rsrp_threshold */ number[] ]
    get_rsrq_threshold(): [ /* returnType */ boolean, /* value_rsrq_threshold */ Uint8Array ]
    get_rssi_threshold(): [ /* returnType */ boolean, /* value_rssi_threshold */ Uint8Array ]
    get_sinr_threshold(): [ /* returnType */ boolean, /* value_sinr_threshold */ Uint8Array ]
    ref(): MessageNasConfigSignalInfoInput
    set_ecio_threshold(value_ecio_threshold: number[]): boolean
    set_io_threshold(value_io_threshold: number[]): boolean
    set_lte_report(value_lte_report_rate: number, value_lte_report_average_period: number): boolean
    set_lte_snr_threshold(value_lte_snr_threshold: number[]): boolean
    set_rscp_threshold(value_rscp_threshold: Uint8Array): boolean
    set_rsrp_threshold(value_rsrp_threshold: number[]): boolean
    set_rsrq_threshold(value_rsrq_threshold: Uint8Array): boolean
    set_rssi_threshold(value_rssi_threshold: Uint8Array): boolean
    set_sinr_threshold(value_sinr_threshold: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageNasConfigSignalInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasConfigSignalInfoInput
}
export class MessageNasConfigSignalInfoOutput {
    /* Methods of Qmi.MessageNasConfigSignalInfoOutput */
    get_result(): boolean
    ref(): MessageNasConfigSignalInfoOutput
    unref(): void
    static name: string
}
export class MessageNasForceNetworkSearchOutput {
    /* Methods of Qmi.MessageNasForceNetworkSearchOutput */
    get_result(): boolean
    ref(): MessageNasForceNetworkSearchOutput
    unref(): void
    static name: string
}
export class MessageNasGetCdmaPositionInfoOutput {
    /* Methods of Qmi.MessageNasGetCdmaPositionInfoOutput */
    get_cdma_position_info(): [ /* returnType */ boolean, /* value_cdma_position_info_ui_in_idle_mode */ number, /* value_cdma_position_info_basestations */ MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation[] ]
    get_result(): boolean
    ref(): MessageNasGetCdmaPositionInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation {
    /* Fields of Qmi.MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation */
    pilot_type: NasCdmaPilotType
    system_id: number
    network_id: number
    base_station_id: number
    pilot_pn: number
    pilot_strength: number
    latitude: number
    longitude: number
    gps_time_in_milliseconds: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutput {
    /* Methods of Qmi.MessageNasGetCellLocationInfoOutput */
    get_cdma_info(): [ /* returnType */ boolean, /* value_cdma_info_system_id */ number, /* value_cdma_info_network_id */ number, /* value_cdma_info_base_station_id */ number, /* value_cdma_info_reference_pn */ number, /* value_cdma_info_latitude */ number, /* value_cdma_info_longitude */ number ]
    get_geran_info_v2(): [ /* returnType */ boolean, /* value_geran_info_v2_cell_id */ number, /* value_geran_info_v2_plmn */ Uint8Array, /* value_geran_info_v2_lac */ number, /* value_geran_info_v2_geran_absolute_rf_channel_number */ number, /* value_geran_info_v2_base_station_identity_code */ number, /* value_geran_info_v2_timing_advance */ number, /* value_geran_info_v2_rx_level */ number, /* value_geran_info_v2_cell */ MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement[] ]
    get_interfrequency_lte_info(): [ /* returnType */ boolean, /* value_interfrequency_lte_info_ue_in_idle */ boolean, /* value_interfrequency_lte_info_frequency */ MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement[] ]
    get_intrafrequency_lte_info_v2(): [ /* returnType */ boolean, /* value_intrafrequency_lte_info_v2_ue_in_idle */ boolean, /* value_intrafrequency_lte_info_v2_plmn */ Uint8Array, /* value_intrafrequency_lte_info_v2_tracking_area_code */ number, /* value_intrafrequency_lte_info_v2_global_cell_id */ number, /* value_intrafrequency_lte_info_v2_eutra_absolute_rf_channel_number */ number, /* value_intrafrequency_lte_info_v2_serving_cell_id */ number, /* value_intrafrequency_lte_info_v2_cell_reselection_priority */ number, /* value_intrafrequency_lte_info_v2_s_non_intra_search_threshold */ number, /* value_intrafrequency_lte_info_v2_serving_cell_low_threshold */ number, /* value_intrafrequency_lte_info_v2_s_intra_search_threshold */ number, /* value_intrafrequency_lte_info_v2_cell */ MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement[] ]
    get_lte_info_neighboring_gsm(): [ /* returnType */ boolean, /* value_lte_info_neighboring_gsm_ue_in_idle */ boolean, /* value_lte_info_neighboring_gsm_frequency */ MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement[] ]
    get_lte_info_neighboring_wcdma(): [ /* returnType */ boolean, /* value_lte_info_neighboring_wcdma_ue_in_idle */ boolean, /* value_lte_info_neighboring_wcdma_frequency */ MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement[] ]
    get_lte_info_timing_advance(): [ /* returnType */ boolean, /* value_lte_info_timing_advance */ number ]
    get_result(): boolean
    get_umts_cell_id(): [ /* returnType */ boolean, /* value_umts_cell_id */ number ]
    get_umts_info_neighboring_lte(): [ /* returnType */ boolean, /* value_umts_info_neighboring_lte_rrc_state */ NasWcdmaRrcState, /* value_umts_info_neighboring_lte_frequency */ MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement[] ]
    get_umts_info_v2(): [ /* returnType */ boolean, /* value_umts_info_v2_cell_id */ number, /* value_umts_info_v2_plmn */ Uint8Array, /* value_umts_info_v2_lac */ number, /* value_umts_info_v2_utra_absolute_rf_channel_number */ number, /* value_umts_info_v2_primary_scrambling_code */ number, /* value_umts_info_v2_rscp */ number, /* value_umts_info_v2_ecio */ number, /* value_umts_info_v2_cell */ MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement[], /* value_umts_info_v2_neighboring_geran */ MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement[] ]
    ref(): MessageNasGetCellLocationInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement */
    cell_id: number
    plmn: object[]
    lac: number
    geran_absolute_rf_channel_number: number
    base_station_identity_code: number
    rx_level: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement */
    eutra_absolute_rf_channel_number: number
    cell_selection_rx_level_low_threshold: number
    cell_selection_rx_level_high_threshold: number
    cell_reselection_priority: number
    cell: object[]
    static name: string
}
export class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement */
    physical_cell_id: number
    rsrq: number
    rsrp: number
    rssi: number
    cell_selection_rx_level: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement */
    physical_cell_id: number
    rsrq: number
    rsrp: number
    rssi: number
    cell_selection_rx_level: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement */
    cell_reselection_priority: number
    cell_reselection_high_threshold: number
    cell_reselection_low_threshold: number
    ncc_permitted: number
    cell: object[]
    static name: string
}
export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement */
    geran_absolute_rf_channel_number: number
    band_is_1900: boolean
    cell_id_valid: boolean
    base_station_identity_code: number
    rssi: number
    cell_selection_rx_level: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement */
    utra_absolute_rf_channel_number: number
    cell_reselection_priority: number
    cell_reselection_high_threshold: number
    cell_reselection_low_threshold: number
    cell: object[]
    static name: string
}
export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement */
    primary_scrambling_code: number
    cpich_rscp: number
    cpich_ecno: number
    cell_selection_rx_level: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement */
    eutra_absolute_rf_channel_number: number
    physical_cell_id: number
    rsrp: number
    rsrq: number
    cell_selection_rx_level: number
    is_tdd: boolean
    static name: string
}
export class MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement */
    utra_absolute_rf_channel_number: number
    primary_scrambling_code: number
    rscp: number
    ecio: number
    static name: string
}
export class MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement {
    /* Fields of Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement */
    geran_absolute_rf_channel_number: number
    network_color_code: number
    base_station_color_code: number
    rssi: number
    static name: string
}
export class MessageNasGetDrxOutput {
    /* Methods of Qmi.MessageNasGetDrxOutput */
    get_info(): [ /* returnType */ boolean, /* value_info */ NasDrx ]
    get_result(): boolean
    ref(): MessageNasGetDrxOutput
    unref(): void
    static name: string
}
export class MessageNasGetHomeNetworkOutput {
    /* Methods of Qmi.MessageNasGetHomeNetworkOutput */
    get_home_network(): [ /* returnType */ boolean, /* value_home_network_mcc */ number, /* value_home_network_mnc */ number, /* value_home_network_description */ string ]
    get_home_network_3gpp2_ext(): [ /* returnType */ boolean, /* value_home_network_3gpp2_ext_mcc */ number, /* value_home_network_3gpp2_ext_mnc */ number, /* value_home_network_3gpp2_ext_display_description */ NasNetworkDescriptionDisplay, /* value_home_network_3gpp2_ext_description_encoding */ NasNetworkDescriptionEncoding, /* value_home_network_3gpp2_ext_description */ Uint8Array ]
    get_home_network_3gpp_mnc(): [ /* returnType */ boolean, /* value_home_network_3gpp_mnc_is_3gpp */ boolean, /* value_home_network_3gpp_mnc_includes_pcs_digit */ boolean ]
    get_home_system_id(): [ /* returnType */ boolean, /* value_home_system_id_sid */ number, /* value_home_system_id_nid */ number ]
    get_network_name_source(): [ /* returnType */ boolean, /* value_network_name_source */ NasNetworkNameSource ]
    get_result(): boolean
    ref(): MessageNasGetHomeNetworkOutput
    unref(): void
    static name: string
}
export class MessageNasGetLteCphyCaInfoOutput {
    /* Methods of Qmi.MessageNasGetLteCphyCaInfoOutput */
    get_dl_bandwidth(): [ /* returnType */ boolean, /* value_dl_bandwidth */ NasDLBandwidth ]
    get_phy_ca_agg_pcell_info(): [ /* returnType */ boolean, /* value_phy_ca_agg_pcell_info_physical_cell_id */ number, /* value_phy_ca_agg_pcell_info_rx_channel */ number, /* value_phy_ca_agg_pcell_info_dl_bandwidth */ NasDLBandwidth, /* value_phy_ca_agg_pcell_info_lte_band */ NasActiveBand ]
    get_phy_ca_agg_scell_info(): [ /* returnType */ boolean, /* value_phy_ca_agg_scell_info_physical_cell_id */ number, /* value_phy_ca_agg_scell_info_rx_channel */ number, /* value_phy_ca_agg_scell_info_dl_bandwidth */ NasDLBandwidth, /* value_phy_ca_agg_scell_info_lte_band */ NasActiveBand, /* value_phy_ca_agg_scell_info_state */ NasScellState ]
    get_phy_ca_agg_secondary_cells(): [ /* returnType */ boolean, /* value_phy_ca_agg_secondary_cells */ MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc[] ]
    get_result(): boolean
    get_scell_index(): [ /* returnType */ boolean, /* value_scell_index */ number ]
    ref(): MessageNasGetLteCphyCaInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc {
    /* Fields of Qmi.MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc */
    physical_cell_id: number
    rx_channel: number
    dl_bandwidth: NasDLBandwidth
    lte_band: NasActiveBand
    state: NasScellState
    cell_index: number
    static name: string
}
export class MessageNasGetOperatorNameOutput {
    /* Methods of Qmi.MessageNasGetOperatorNameOutput */
    get_nitz_information(): [ /* returnType */ boolean, /* value_nitz_information_name_encoding */ NasPlmnEncodingScheme, /* value_nitz_information_short_country_initials */ NasPlmnNameCountryInitials, /* value_nitz_information_long_name_spare_bits */ NasPlmnNameSpareBits, /* value_nitz_information_short_name_spare_bits */ NasPlmnNameSpareBits, /* value_nitz_information_long_name */ Uint8Array, /* value_nitz_information_short_name */ Uint8Array ]
    get_operator_plmn_list(): [ /* returnType */ boolean, /* value_operator_plmn_list */ MessageNasGetOperatorNameOutputOperatorPlmnListElement[] ]
    get_operator_plmn_name(): [ /* returnType */ boolean, /* value_operator_plmn_name */ MessageNasGetOperatorNameOutputOperatorPlmnNameElement[] ]
    get_operator_string_name(): [ /* returnType */ boolean, /* value_operator_string_name */ string ]
    get_result(): boolean
    get_service_provider_name(): [ /* returnType */ boolean, /* value_service_provider_name_name_display_condition */ NasNetworkNameDisplayCondition, /* value_service_provider_name_name */ string ]
    ref(): MessageNasGetOperatorNameOutput
    unref(): void
    static name: string
}
export class MessageNasGetOperatorNameOutputOperatorPlmnListElement {
    /* Fields of Qmi.MessageNasGetOperatorNameOutputOperatorPlmnListElement */
    mcc: string
    mnc: string
    lac1: number
    lac2: number
    plmn_name_record_identifier: number
    static name: string
}
export class MessageNasGetOperatorNameOutputOperatorPlmnNameElement {
    /* Fields of Qmi.MessageNasGetOperatorNameOutputOperatorPlmnNameElement */
    name_encoding: NasPlmnEncodingScheme
    short_country_initials: NasPlmnNameCountryInitials
    long_name_spare_bits: NasPlmnNameSpareBits
    short_name_spare_bits: NasPlmnNameSpareBits
    long_name: object[]
    short_name: object[]
    static name: string
}
export class MessageNasGetPlmnNameInput {
    /* Methods of Qmi.MessageNasGetPlmnNameInput */
    get_always_send_plmn_name(): [ /* returnType */ boolean, /* value_always_send_plmn_name */ boolean ]
    get_csg_id(): [ /* returnType */ boolean, /* value_csg_id */ number ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ boolean ]
    get_plmn(): [ /* returnType */ boolean, /* value_plmn_mcc */ number, /* value_plmn_mnc */ number ]
    get_radio_access_technology(): [ /* returnType */ boolean, /* value_radio_access_technology */ NasRadioInterface ]
    get_send_all_information(): [ /* returnType */ boolean, /* value_send_all_information */ boolean ]
    get_suppress_sim_error(): [ /* returnType */ boolean, /* value_suppress_sim_error */ boolean ]
    get_use_static_table_only(): [ /* returnType */ boolean, /* value_use_static_table_only */ boolean ]
    ref(): MessageNasGetPlmnNameInput
    set_always_send_plmn_name(value_always_send_plmn_name: boolean): boolean
    set_csg_id(value_csg_id: number): boolean
    set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean
    set_plmn(value_plmn_mcc: number, value_plmn_mnc: number): boolean
    set_radio_access_technology(value_radio_access_technology: NasRadioInterface): boolean
    set_send_all_information(value_send_all_information: boolean): boolean
    set_suppress_sim_error(value_suppress_sim_error: boolean): boolean
    set_use_static_table_only(value_use_static_table_only: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetPlmnNameInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetPlmnNameInput
}
export class MessageNasGetPlmnNameOutput {
    /* Methods of Qmi.MessageNasGetPlmnNameOutput */
    get_3gpp_eons_plmn_name(): [ /* returnType */ boolean, /* value_3gpp_eons_plmn_name_service_provider_name_encoding */ NasNetworkDescriptionEncoding, /* value_3gpp_eons_plmn_name_service_provider_name */ Uint8Array, /* value_3gpp_eons_plmn_name_short_name_encoding */ NasNetworkDescriptionEncoding, /* value_3gpp_eons_plmn_name_short_name_country_initials */ NasPlmnNameCountryInitials, /* value_3gpp_eons_plmn_name_short_name_spare_bits */ NasPlmnNameSpareBits, /* value_3gpp_eons_plmn_name_short_name */ Uint8Array, /* value_3gpp_eons_plmn_name_long_name_encoding */ NasNetworkDescriptionEncoding, /* value_3gpp_eons_plmn_name_long_name_country_initials */ NasPlmnNameCountryInitials, /* value_3gpp_eons_plmn_name_long_name_spare_bits */ NasPlmnNameSpareBits, /* value_3gpp_eons_plmn_name_long_name */ Uint8Array ]
    get_additional_information(): [ /* returnType */ boolean, /* value_additional_information */ number[] ]
    get_display_bit_information(): [ /* returnType */ boolean, /* value_display_bit_information_service_provider_name_set */ NasBoolean, /* value_display_bit_information_plmn_name_set */ NasBoolean ]
    get_network_information(): [ /* returnType */ boolean, /* value_network_information */ NasBoolean ]
    get_network_name_source(): [ /* returnType */ boolean, /* value_network_name_source */ NasNetworkNameSource ]
    get_plmn_name_with_language_id(): [ /* returnType */ boolean, /* value_plmn_name_with_language_id */ MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement[] ]
    get_result(): boolean
    ref(): MessageNasGetPlmnNameOutput
    unref(): void
    static name: string
}
export class MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement {
    /* Fields of Qmi.MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement */
    long_name: object[]
    short_name: object[]
    language_id: NasPlmnLanguageId
    static name: string
}
export class MessageNasGetRfBandInformationOutput {
    /* Methods of Qmi.MessageNasGetRfBandInformationOutput */
    get_bandwidth_list(): [ /* returnType */ boolean, /* value_bandwidth_list */ MessageNasGetRfBandInformationOutputBandwidthListElement[] ]
    get_extended_list(): [ /* returnType */ boolean, /* value_extended_list */ MessageNasGetRfBandInformationOutputExtendedListElement[] ]
    get_list(): [ /* returnType */ boolean, /* value_list */ MessageNasGetRfBandInformationOutputListElement[] ]
    get_result(): boolean
    ref(): MessageNasGetRfBandInformationOutput
    unref(): void
    static name: string
}
export class MessageNasGetRfBandInformationOutputBandwidthListElement {
    /* Fields of Qmi.MessageNasGetRfBandInformationOutputBandwidthListElement */
    radio_interface: NasRadioInterface
    bandwidth: NasDLBandwidth
    static name: string
}
export class MessageNasGetRfBandInformationOutputExtendedListElement {
    /* Fields of Qmi.MessageNasGetRfBandInformationOutputExtendedListElement */
    radio_interface: NasRadioInterface
    active_band_class: NasActiveBand
    active_channel: number
    static name: string
}
export class MessageNasGetRfBandInformationOutputListElement {
    /* Fields of Qmi.MessageNasGetRfBandInformationOutputListElement */
    radio_interface: NasRadioInterface
    active_band_class: NasActiveBand
    active_channel: number
    static name: string
}
export class MessageNasGetServingSystemOutput {
    /* Methods of Qmi.MessageNasGetServingSystemOutput */
    get_call_barring_status(): [ /* returnType */ boolean, /* value_call_barring_status_cs_status */ NasCallBarringStatus, /* value_call_barring_status_ps_status */ NasCallBarringStatus ]
    get_cdma_base_station_info(): [ /* returnType */ boolean, /* value_cdma_base_station_info_base_station_id */ number, /* value_cdma_base_station_info_base_station_latitude */ number, /* value_cdma_base_station_info_base_station_longitude */ number ]
    get_cdma_p_rev(): [ /* returnType */ boolean, /* value_cdma_p_rev */ number ]
    get_cdma_system_id(): [ /* returnType */ boolean, /* value_cdma_system_id_sid */ number, /* value_cdma_system_id_nid */ number ]
    get_cdma_system_info(): [ /* returnType */ boolean, /* value_cdma_system_info_mcc */ number, /* value_cdma_system_info_imsi_11_12 */ number ]
    get_cid_3gpp(): [ /* returnType */ boolean, /* value_cid_3gpp */ number ]
    get_concurrent_service_info_3gpp2(): [ /* returnType */ boolean, /* value_concurrent_service_info_3gpp2 */ boolean ]
    get_current_plmn(): [ /* returnType */ boolean, /* value_current_plmn_mcc */ number, /* value_current_plmn_mnc */ number, /* value_current_plmn_description */ string ]
    get_data_service_capability(): [ /* returnType */ boolean, /* value_data_service_capability */ NasDataCapability[] ]
    get_daylight_saving_time_adjustment_3gpp(): [ /* returnType */ boolean, /* value_daylight_saving_time_adjustment_3gpp */ number ]
    get_default_roaming_indicator(): [ /* returnType */ boolean, /* value_default_roaming_indicator */ NasRoamingIndicatorStatus ]
    get_detailed_service_status(): [ /* returnType */ boolean, /* value_detailed_service_status_status */ NasServiceStatus, /* value_detailed_service_status_capability */ NasNetworkServiceDomain, /* value_detailed_service_status_hdr_status */ NasServiceStatus, /* value_detailed_service_status_hdr_hybrid */ boolean, /* value_detailed_service_status_forbidden */ boolean ]
    get_dtm_support(): [ /* returnType */ boolean, /* value_dtm_support */ boolean ]
    get_hdr_personality(): [ /* returnType */ boolean, /* value_hdr_personality */ NasHdrPersonality ]
    get_lac_3gpp(): [ /* returnType */ boolean, /* value_lac_3gpp */ number ]
    get_lte_tac(): [ /* returnType */ boolean, /* value_lte_tac */ number ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status_mcc */ number, /* value_mnc_pcs_digit_include_status_mnc */ number, /* value_mnc_pcs_digit_include_status_includes_pcs_digit */ boolean ]
    get_network_name_source(): [ /* returnType */ boolean, /* value_network_name_source */ NasNetworkNameSource ]
    get_prl_indicator_3gpp2(): [ /* returnType */ boolean, /* value_prl_indicator_3gpp2 */ boolean ]
    get_result(): boolean
    get_roaming_indicator(): [ /* returnType */ boolean, /* value_roaming_indicator */ NasRoamingIndicatorStatus ]
    get_roaming_indicator_list(): [ /* returnType */ boolean, /* value_roaming_indicator_list */ MessageNasGetServingSystemOutputRoamingIndicatorListElement[] ]
    get_serving_system(): [ /* returnType */ boolean, /* value_serving_system_registration_state */ NasRegistrationState, /* value_serving_system_cs_attach_state */ NasAttachState, /* value_serving_system_ps_attach_state */ NasAttachState, /* value_serving_system_selected_network */ NasNetworkType, /* value_serving_system_radio_interfaces */ NasRadioInterface[] ]
    get_time_zone_3gpp(): [ /* returnType */ boolean, /* value_time_zone_3gpp */ number ]
    get_time_zone_3gpp2(): [ /* returnType */ boolean, /* value_time_zone_3gpp2_leap_seconds */ number, /* value_time_zone_3gpp2_local_time_offset */ number, /* value_time_zone_3gpp2_daylight_saving_time */ boolean ]
    get_umts_primary_scrambling_code(): [ /* returnType */ boolean, /* value_umts_primary_scrambling_code */ number ]
    ref(): MessageNasGetServingSystemOutput
    unref(): void
    static name: string
}
export class MessageNasGetServingSystemOutputRoamingIndicatorListElement {
    /* Fields of Qmi.MessageNasGetServingSystemOutputRoamingIndicatorListElement */
    radio_interface: NasRadioInterface
    roaming_indicator: NasRoamingIndicatorStatus
    static name: string
}
export class MessageNasGetSignalInfoOutput {
    /* Methods of Qmi.MessageNasGetSignalInfoOutput */
    get_5g_signal_strength(): [ /* returnType */ boolean, /* value_5g_signal_strength_rsrp */ number, /* value_5g_signal_strength_snr */ number ]
    get_5g_signal_strength_extended(): [ /* returnType */ boolean, /* value_5g_signal_strength_extended */ number ]
    get_cdma_signal_strength(): [ /* returnType */ boolean, /* value_cdma_signal_strength_rssi */ number, /* value_cdma_signal_strength_ecio */ number ]
    get_gsm_signal_strength(): [ /* returnType */ boolean, /* value_gsm_signal_strength */ number ]
    get_hdr_signal_strength(): [ /* returnType */ boolean, /* value_hdr_signal_strength_rssi */ number, /* value_hdr_signal_strength_ecio */ number, /* value_hdr_signal_strength_sinr */ NasEvdoSinrLevel, /* value_hdr_signal_strength_io */ number ]
    get_lte_signal_strength(): [ /* returnType */ boolean, /* value_lte_signal_strength_rssi */ number, /* value_lte_signal_strength_rsrq */ number, /* value_lte_signal_strength_rsrp */ number, /* value_lte_signal_strength_snr */ number ]
    get_result(): boolean
    get_tdma_signal_strength(): [ /* returnType */ boolean, /* value_tdma_signal_strength */ number ]
    get_tdma_signal_strength_extended(): [ /* returnType */ boolean, /* value_tdma_signal_strength_extended_rssi */ number, /* value_tdma_signal_strength_extended_rscp */ number, /* value_tdma_signal_strength_extended_ecio */ number, /* value_tdma_signal_strength_extended_sinr */ number ]
    get_wcdma_signal_strength(): [ /* returnType */ boolean, /* value_wcdma_signal_strength_rssi */ number, /* value_wcdma_signal_strength_ecio */ number ]
    ref(): MessageNasGetSignalInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetSignalStrengthInput {
    /* Methods of Qmi.MessageNasGetSignalStrengthInput */
    get_request_mask(): [ /* returnType */ boolean, /* value_request_mask */ NasSignalStrengthRequest ]
    ref(): MessageNasGetSignalStrengthInput
    set_request_mask(value_request_mask: NasSignalStrengthRequest): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetSignalStrengthInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetSignalStrengthInput
}
export class MessageNasGetSignalStrengthOutput {
    /* Methods of Qmi.MessageNasGetSignalStrengthOutput */
    get_ecio_list(): [ /* returnType */ boolean, /* value_ecio_list */ MessageNasGetSignalStrengthOutputEcioListElement[] ]
    get_error_rate_list(): [ /* returnType */ boolean, /* value_error_rate_list */ MessageNasGetSignalStrengthOutputErrorRateListElement[] ]
    get_io(): [ /* returnType */ boolean, /* value_io */ number ]
    get_lte_rsrp(): [ /* returnType */ boolean, /* value_lte_rsrp */ number ]
    get_lte_snr(): [ /* returnType */ boolean, /* value_lte_snr */ number ]
    get_result(): boolean
    get_rsrq(): [ /* returnType */ boolean, /* value_rsrq_rsrq */ number, /* value_rsrq_radio_interface */ NasRadioInterface ]
    get_rssi_list(): [ /* returnType */ boolean, /* value_rssi_list */ MessageNasGetSignalStrengthOutputRssiListElement[] ]
    get_signal_strength(): [ /* returnType */ boolean, /* value_signal_strength_strength */ number, /* value_signal_strength_radio_interface */ NasRadioInterface ]
    get_sinr(): [ /* returnType */ boolean, /* value_sinr */ NasEvdoSinrLevel ]
    get_strength_list(): [ /* returnType */ boolean, /* value_strength_list */ MessageNasGetSignalStrengthOutputStrengthListElement[] ]
    ref(): MessageNasGetSignalStrengthOutput
    unref(): void
    static name: string
}
export class MessageNasGetSignalStrengthOutputEcioListElement {
    /* Fields of Qmi.MessageNasGetSignalStrengthOutputEcioListElement */
    ecio: number
    radio_interface: NasRadioInterface
    static name: string
}
export class MessageNasGetSignalStrengthOutputErrorRateListElement {
    /* Fields of Qmi.MessageNasGetSignalStrengthOutputErrorRateListElement */
    rate: number
    radio_interface: NasRadioInterface
    static name: string
}
export class MessageNasGetSignalStrengthOutputRssiListElement {
    /* Fields of Qmi.MessageNasGetSignalStrengthOutputRssiListElement */
    rssi: number
    radio_interface: NasRadioInterface
    static name: string
}
export class MessageNasGetSignalStrengthOutputStrengthListElement {
    /* Fields of Qmi.MessageNasGetSignalStrengthOutputStrengthListElement */
    strength: number
    radio_interface: NasRadioInterface
    static name: string
}
export class MessageNasGetSupportedMessagesOutput {
    /* Methods of Qmi.MessageNasGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array ]
    get_result(): boolean
    ref(): MessageNasGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageNasGetSystemInfoOutput {
    /* Methods of Qmi.MessageNasGetSystemInfoOutput */
    get_additional_cdma_system_info(): [ /* returnType */ boolean, /* value_additional_cdma_system_info_geo_system_index */ number, /* value_additional_cdma_system_info_registration_period */ number ]
    get_additional_gsm_system_info(): [ /* returnType */ boolean, /* value_additional_gsm_system_info_geo_system_index */ number, /* value_additional_gsm_system_info_cell_broadcast_support */ NasCellBroadcastCapability ]
    get_additional_hdr_system_info(): [ /* returnType */ boolean, /* value_additional_hdr_system_info_geo_system_index */ number ]
    get_additional_lte_system_info(): [ /* returnType */ boolean, /* value_additional_lte_system_info_geo_system_index */ number ]
    get_additional_wcdma_system_info(): [ /* returnType */ boolean, /* value_additional_wcdma_system_info_geo_system_index */ number, /* value_additional_wcdma_system_info_cell_broadcast_support */ NasCellBroadcastCapability ]
    get_cdma_registration_zone_id(): [ /* returnType */ boolean, /* value_cdma_registration_zone_id */ number ]
    get_cdma_resolved_mcc(): [ /* returnType */ boolean, /* value_cdma_resolved_mcc */ number ]
    get_cdma_service_status(): [ /* returnType */ boolean, /* value_cdma_service_status_service_status */ NasServiceStatus, /* value_cdma_service_status_preferred_data_path */ boolean ]
    get_cdma_system_info(): [ /* returnType */ boolean, /* value_cdma_system_info_domain_valid */ boolean, /* value_cdma_system_info_domain */ NasNetworkServiceDomain, /* value_cdma_system_info_service_capability_valid */ boolean, /* value_cdma_system_info_service_capability */ NasNetworkServiceDomain, /* value_cdma_system_info_roaming_status_valid */ boolean, /* value_cdma_system_info_roaming_status */ NasRoamingStatus, /* value_cdma_system_info_forbidden_valid */ boolean, /* value_cdma_system_info_forbidden */ boolean, /* value_cdma_system_info_prl_match_valid */ boolean, /* value_cdma_system_info_prl_match */ boolean, /* value_cdma_system_info_p_rev_valid */ boolean, /* value_cdma_system_info_p_rev */ number, /* value_cdma_system_info_base_station_p_rev_valid */ boolean, /* value_cdma_system_info_base_station_p_rev */ number, /* value_cdma_system_info_concurrent_service_support_valid */ boolean, /* value_cdma_system_info_concurrent_service_support */ boolean, /* value_cdma_system_info_cdma_system_id_valid */ boolean, /* value_cdma_system_info_sid */ number, /* value_cdma_system_info_nid */ number, /* value_cdma_system_info_base_station_info_valid */ boolean, /* value_cdma_system_info_base_station_id */ number, /* value_cdma_system_info_base_station_latitude */ number, /* value_cdma_system_info_base_station_longitude */ number, /* value_cdma_system_info_packet_zone_valid */ boolean, /* value_cdma_system_info_packet_zone */ number, /* value_cdma_system_info_network_id_valid */ boolean, /* value_cdma_system_info_mcc */ string, /* value_cdma_system_info_mnc */ string ]
    get_gsm_call_barring_status(): [ /* returnType */ boolean, /* value_gsm_call_barring_status_cs_status */ NasCallBarringStatus, /* value_gsm_call_barring_status_ps_status */ NasCallBarringStatus ]
    get_gsm_cipher_domain(): [ /* returnType */ boolean, /* value_gsm_cipher_domain */ NasNetworkServiceDomain ]
    get_gsm_routing_area_code(): [ /* returnType */ boolean, /* value_gsm_routing_area_code */ number ]
    get_gsm_service_status(): [ /* returnType */ boolean, /* value_gsm_service_status_service_status */ NasServiceStatus, /* value_gsm_service_status_true_service_status */ NasServiceStatus, /* value_gsm_service_status_preferred_data_path */ boolean ]
    get_gsm_system_info(): [ /* returnType */ boolean, /* value_gsm_system_info_domain_valid */ boolean, /* value_gsm_system_info_domain */ NasNetworkServiceDomain, /* value_gsm_system_info_service_capability_valid */ boolean, /* value_gsm_system_info_service_capability */ NasNetworkServiceDomain, /* value_gsm_system_info_roaming_status_valid */ boolean, /* value_gsm_system_info_roaming_status */ NasRoamingStatus, /* value_gsm_system_info_forbidden_valid */ boolean, /* value_gsm_system_info_forbidden */ boolean, /* value_gsm_system_info_lac_valid */ boolean, /* value_gsm_system_info_lac */ number, /* value_gsm_system_info_cid_valid */ boolean, /* value_gsm_system_info_cid */ number, /* value_gsm_system_info_registration_reject_info_valid */ boolean, /* value_gsm_system_info_registration_reject_domain */ NasNetworkServiceDomain, /* value_gsm_system_info_registration_reject_cause */ number, /* value_gsm_system_info_network_id_valid */ boolean, /* value_gsm_system_info_mcc */ string, /* value_gsm_system_info_mnc */ string, /* value_gsm_system_info_egprs_support_valid */ boolean, /* value_gsm_system_info_egprs_support */ boolean, /* value_gsm_system_info_dtm_support_valid */ boolean, /* value_gsm_system_info_dtm_support */ boolean ]
    get_hdr_service_status(): [ /* returnType */ boolean, /* value_hdr_service_status_service_status */ NasServiceStatus, /* value_hdr_service_status_preferred_data_path */ boolean ]
    get_hdr_system_info(): [ /* returnType */ boolean, /* value_hdr_system_info_domain_valid */ boolean, /* value_hdr_system_info_domain */ NasNetworkServiceDomain, /* value_hdr_system_info_service_capability_valid */ boolean, /* value_hdr_system_info_service_capability */ NasNetworkServiceDomain, /* value_hdr_system_info_roaming_status_valid */ boolean, /* value_hdr_system_info_roaming_status */ NasRoamingStatus, /* value_hdr_system_info_forbidden_valid */ boolean, /* value_hdr_system_info_forbidden */ boolean, /* value_hdr_system_info_prl_match_valid */ boolean, /* value_hdr_system_info_prl_match */ boolean, /* value_hdr_system_info_personality_valid */ boolean, /* value_hdr_system_info_personality */ NasHdrPersonality, /* value_hdr_system_info_protocol_revision_valid */ boolean, /* value_hdr_system_info_protocol_revision */ NasHdrProtocolRevision, /* value_hdr_system_info_is_856_system_id_valid */ boolean, /* value_hdr_system_info_is_856_system_id */ string ]
    get_ims_voice_support(): [ /* returnType */ boolean, /* value_ims_voice_support */ boolean ]
    get_lte_cell_access_status(): [ /* returnType */ boolean, /* value_lte_cell_access_status */ NasLteCellAccessStatus ]
    get_lte_embms_coverage_info_support(): [ /* returnType */ boolean, /* value_lte_embms_coverage_info_support */ boolean ]
    get_lte_embms_coverage_info_trace_id(): [ /* returnType */ boolean, /* value_lte_embms_coverage_info_trace_id */ number ]
    get_lte_registration_domain(): [ /* returnType */ boolean, /* value_lte_registration_domain */ NasLteRegistrationDomain ]
    get_lte_service_status(): [ /* returnType */ boolean, /* value_lte_service_status_service_status */ NasServiceStatus, /* value_lte_service_status_true_service_status */ NasServiceStatus, /* value_lte_service_status_preferred_data_path */ boolean ]
    get_lte_system_info(): [ /* returnType */ boolean, /* value_lte_system_info_domain_valid */ boolean, /* value_lte_system_info_domain */ NasNetworkServiceDomain, /* value_lte_system_info_service_capability_valid */ boolean, /* value_lte_system_info_service_capability */ NasNetworkServiceDomain, /* value_lte_system_info_roaming_status_valid */ boolean, /* value_lte_system_info_roaming_status */ NasRoamingStatus, /* value_lte_system_info_forbidden_valid */ boolean, /* value_lte_system_info_forbidden */ boolean, /* value_lte_system_info_lac_valid */ boolean, /* value_lte_system_info_lac */ number, /* value_lte_system_info_cid_valid */ boolean, /* value_lte_system_info_cid */ number, /* value_lte_system_info_registration_reject_info_valid */ boolean, /* value_lte_system_info_registration_reject_domain */ NasNetworkServiceDomain, /* value_lte_system_info_registration_reject_cause */ number, /* value_lte_system_info_network_id_valid */ boolean, /* value_lte_system_info_mcc */ string, /* value_lte_system_info_mnc */ string, /* value_lte_system_info_tac_valid */ boolean, /* value_lte_system_info_tac */ number ]
    get_lte_voice_domain(): [ /* returnType */ boolean, /* value_lte_voice_domain */ NasLteVoiceDomain ]
    get_lte_voice_support(): [ /* returnType */ boolean, /* value_lte_voice_support */ boolean ]
    get_network_selection_registration_restriction(): [ /* returnType */ boolean, /* value_network_selection_registration_restriction */ NasNetworkSelectionRegistrationRestriction ]
    get_result(): boolean
    get_sim_reject_info(): [ /* returnType */ boolean, /* value_sim_reject_info */ NasSimRejectState ]
    get_td_scdma_service_status(): [ /* returnType */ boolean, /* value_td_scdma_service_status_service_status */ NasServiceStatus, /* value_td_scdma_service_status_true_service_status */ NasServiceStatus, /* value_td_scdma_service_status_preferred_data_path */ boolean ]
    get_td_scdma_system_info(): [ /* returnType */ boolean, /* value_td_scdma_system_info_domain_valid */ boolean, /* value_td_scdma_system_info_domain */ NasNetworkServiceDomain, /* value_td_scdma_system_info_service_capability_valid */ boolean, /* value_td_scdma_system_info_service_capability */ NasNetworkServiceDomain, /* value_td_scdma_system_info_roaming_status_valid */ boolean, /* value_td_scdma_system_info_roaming_status */ NasRoamingStatus, /* value_td_scdma_system_info_forbidden_valid */ boolean, /* value_td_scdma_system_info_forbidden */ boolean, /* value_td_scdma_system_info_lac_valid */ boolean, /* value_td_scdma_system_info_lac */ number, /* value_td_scdma_system_info_cid_valid */ boolean, /* value_td_scdma_system_info_cid */ number, /* value_td_scdma_system_info_registration_reject_info_valid */ boolean, /* value_td_scdma_system_info_registration_reject_domain */ NasNetworkServiceDomain, /* value_td_scdma_system_info_registration_reject_cause */ number, /* value_td_scdma_system_info_network_id_valid */ boolean, /* value_td_scdma_system_info_mcc */ string, /* value_td_scdma_system_info_mnc */ string, /* value_td_scdma_system_info_hs_call_status_valid */ boolean, /* value_td_scdma_system_info_hs_call_status */ NasWcdmaHsService, /* value_td_scdma_system_info_hs_service_valid */ boolean, /* value_td_scdma_system_info_hs_service */ NasWcdmaHsService, /* value_td_scdma_system_info_cell_parameter_id_valid */ boolean, /* value_td_scdma_system_info_cell_parameter_id */ number, /* value_td_scdma_system_info_cell_broadcast_support_valid */ boolean, /* value_td_scdma_system_info_cell_broadcast_support */ NasCellBroadcastCapability, /* value_td_scdma_system_info_cs_call_barring_status_valid */ boolean, /* value_td_scdma_system_info_cs_call_barring_status */ NasCallBarringStatus, /* value_td_scdma_system_info_ps_call_barring_status_valid */ boolean, /* value_td_scdma_system_info_ps_call_barring_status */ NasCallBarringStatus, /* value_td_scdma_system_info_cipher_domain_valid */ boolean, /* value_td_scdma_system_info_cipher_domain */ NasNetworkServiceDomain ]
    get_wcdma_call_barring_status(): [ /* returnType */ boolean, /* value_wcdma_call_barring_status_cs_status */ NasCallBarringStatus, /* value_wcdma_call_barring_status_ps_status */ NasCallBarringStatus ]
    get_wcdma_cipher_domain(): [ /* returnType */ boolean, /* value_wcdma_cipher_domain */ NasNetworkServiceDomain ]
    get_wcdma_routing_area_code(): [ /* returnType */ boolean, /* value_wcdma_routing_area_code */ number ]
    get_wcdma_service_status(): [ /* returnType */ boolean, /* value_wcdma_service_status_service_status */ NasServiceStatus, /* value_wcdma_service_status_true_service_status */ NasServiceStatus, /* value_wcdma_service_status_preferred_data_path */ boolean ]
    get_wcdma_system_info(): [ /* returnType */ boolean, /* value_wcdma_system_info_domain_valid */ boolean, /* value_wcdma_system_info_domain */ NasNetworkServiceDomain, /* value_wcdma_system_info_service_capability_valid */ boolean, /* value_wcdma_system_info_service_capability */ NasNetworkServiceDomain, /* value_wcdma_system_info_roaming_status_valid */ boolean, /* value_wcdma_system_info_roaming_status */ NasRoamingStatus, /* value_wcdma_system_info_forbidden_valid */ boolean, /* value_wcdma_system_info_forbidden */ boolean, /* value_wcdma_system_info_lac_valid */ boolean, /* value_wcdma_system_info_lac */ number, /* value_wcdma_system_info_cid_valid */ boolean, /* value_wcdma_system_info_cid */ number, /* value_wcdma_system_info_registration_reject_info_valid */ boolean, /* value_wcdma_system_info_registration_reject_domain */ NasNetworkServiceDomain, /* value_wcdma_system_info_registration_reject_cause */ number, /* value_wcdma_system_info_network_id_valid */ boolean, /* value_wcdma_system_info_mcc */ string, /* value_wcdma_system_info_mnc */ string, /* value_wcdma_system_info_hs_call_status_valid */ boolean, /* value_wcdma_system_info_hs_call_status */ NasWcdmaHsService, /* value_wcdma_system_info_hs_service_valid */ boolean, /* value_wcdma_system_info_hs_service */ NasWcdmaHsService, /* value_wcdma_system_info_primary_scrambling_code_valid */ boolean, /* value_wcdma_system_info_primary_scrambling_code */ number ]
    ref(): MessageNasGetSystemInfoOutput
    unref(): void
    static name: string
}
export class MessageNasGetSystemSelectionPreferenceOutput {
    /* Methods of Qmi.MessageNasGetSystemSelectionPreferenceOutput */
    get_acquisition_order_preference(): [ /* returnType */ boolean, /* value_acquisition_order_preference */ NasRadioInterface[] ]
    get_band_preference(): [ /* returnType */ boolean, /* value_band_preference */ NasBandPreference ]
    get_cdma_prl_preference(): [ /* returnType */ boolean, /* value_cdma_prl_preference */ NasCdmaPrlPreference ]
    get_disabled_modes(): [ /* returnType */ boolean, /* value_disabled_modes */ NasRatModePreference ]
    get_emergency_mode(): [ /* returnType */ boolean, /* value_emergency_mode */ boolean ]
    get_extended_lte_band_preference(): [ /* returnType */ boolean, /* value_extended_lte_band_preference_mask_low */ number, /* value_extended_lte_band_preference_mask_mid_low */ number, /* value_extended_lte_band_preference_mask_mid_high */ number, /* value_extended_lte_band_preference_mask_high */ number ]
    get_gsm_wcdma_acquisition_order_preference(): [ /* returnType */ boolean, /* value_gsm_wcdma_acquisition_order_preference */ NasGsmWcdmaAcquisitionOrderPreference ]
    get_lte_band_preference(): [ /* returnType */ boolean, /* value_lte_band_preference */ NasLteBandPreference ]
    get_manual_network_selection(): [ /* returnType */ boolean, /* value_manual_network_selection_mcc */ number, /* value_manual_network_selection_mnc */ number, /* value_manual_network_selection_includes_pcs_digit */ boolean ]
    get_mode_preference(): [ /* returnType */ boolean, /* value_mode_preference */ NasRatModePreference ]
    get_network_selection_preference(): [ /* returnType */ boolean, /* value_network_selection_preference */ NasNetworkSelectionPreference ]
    get_network_selection_registration_restriction(): [ /* returnType */ boolean, /* value_network_selection_registration_restriction */ NasNetworkSelectionRegistrationRestriction ]
    get_result(): boolean
    get_roaming_preference(): [ /* returnType */ boolean, /* value_roaming_preference */ NasRoamingPreference ]
    get_service_domain_preference(): [ /* returnType */ boolean, /* value_service_domain_preference */ NasServiceDomainPreference ]
    get_td_scdma_band_preference(): [ /* returnType */ boolean, /* value_td_scdma_band_preference */ NasTdScdmaBandPreference ]
    get_usage_preference(): [ /* returnType */ boolean, /* value_usage_preference */ NasUsagePreference ]
    get_voice_domain_preference(): [ /* returnType */ boolean, /* value_voice_domain_preference */ NasVoiceDomainPreference ]
    ref(): MessageNasGetSystemSelectionPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasGetTechnologyPreferenceOutput {
    /* Methods of Qmi.MessageNasGetTechnologyPreferenceOutput */
    get_active(): [ /* returnType */ boolean, /* value_active_technology_preference */ NasRadioTechnologyPreference, /* value_active_technology_preference_duration */ NasPreferenceDuration ]
    get_persistent(): [ /* returnType */ boolean, /* value_persistent */ NasRadioTechnologyPreference ]
    get_result(): boolean
    ref(): MessageNasGetTechnologyPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasGetTxRxInfoInput {
    /* Methods of Qmi.MessageNasGetTxRxInfoInput */
    get_radio_interface(): [ /* returnType */ boolean, /* value_radio_interface */ NasRadioInterface ]
    ref(): MessageNasGetTxRxInfoInput
    set_radio_interface(value_radio_interface: NasRadioInterface): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetTxRxInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetTxRxInfoInput
}
export class MessageNasGetTxRxInfoOutput {
    /* Methods of Qmi.MessageNasGetTxRxInfoOutput */
    get_result(): boolean
    get_rx_chain_0_info(): [ /* returnType */ boolean, /* value_rx_chain_0_info_is_radio_tuned */ boolean, /* value_rx_chain_0_info_rx_power */ number, /* value_rx_chain_0_info_ecio */ number, /* value_rx_chain_0_info_rscp */ number, /* value_rx_chain_0_info_rsrp */ number, /* value_rx_chain_0_info_phase */ number ]
    get_rx_chain_1_info(): [ /* returnType */ boolean, /* value_rx_chain_1_info_is_radio_tuned */ boolean, /* value_rx_chain_1_info_rx_power */ number, /* value_rx_chain_1_info_ecio */ number, /* value_rx_chain_1_info_rscp */ number, /* value_rx_chain_1_info_rsrp */ number, /* value_rx_chain_1_info_phase */ number ]
    get_rx_chain_2_info(): [ /* returnType */ boolean, /* value_rx_chain_2_info_is_radio_tuned */ boolean, /* value_rx_chain_2_info_rx_power */ number, /* value_rx_chain_2_info_ecio */ number, /* value_rx_chain_2_info_rscp */ number, /* value_rx_chain_2_info_rsrp */ number, /* value_rx_chain_2_info_phase */ number ]
    get_rx_chain_3_info(): [ /* returnType */ boolean, /* value_rx_chain_3_info_is_radio_tuned */ boolean, /* value_rx_chain_3_info_rx_power */ number, /* value_rx_chain_3_info_ecio */ number, /* value_rx_chain_3_info_rscp */ number, /* value_rx_chain_3_info_rsrp */ number, /* value_rx_chain_3_info_phase */ number ]
    get_tx_info(): [ /* returnType */ boolean, /* value_tx_info_is_in_traffic */ boolean, /* value_tx_info_tx_power */ number ]
    ref(): MessageNasGetTxRxInfoOutput
    unref(): void
    static name: string
}
export class MessageNasInitiateNetworkRegisterInput {
    /* Methods of Qmi.MessageNasInitiateNetworkRegisterInput */
    get_action(): [ /* returnType */ boolean, /* value_action */ NasNetworkRegisterType ]
    get_change_duration(): [ /* returnType */ boolean, /* value_change_duration */ NasChangeDuration ]
    get_manual_registration_info_3gpp(): [ /* returnType */ boolean, /* value_manual_registration_info_3gpp_mcc */ number, /* value_manual_registration_info_3gpp_mnc */ number, /* value_manual_registration_info_3gpp_radio_interface */ NasRadioInterface ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ boolean ]
    ref(): MessageNasInitiateNetworkRegisterInput
    set_action(value_action: NasNetworkRegisterType): boolean
    set_change_duration(value_change_duration: NasChangeDuration): boolean
    set_manual_registration_info_3gpp(value_manual_registration_info_3gpp_mcc: number, value_manual_registration_info_3gpp_mnc: number, value_manual_registration_info_3gpp_radio_interface: NasRadioInterface): boolean
    set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasInitiateNetworkRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasInitiateNetworkRegisterInput
}
export class MessageNasInitiateNetworkRegisterOutput {
    /* Methods of Qmi.MessageNasInitiateNetworkRegisterOutput */
    get_result(): boolean
    ref(): MessageNasInitiateNetworkRegisterOutput
    unref(): void
    static name: string
}
export class MessageNasNetworkScanInput {
    /* Methods of Qmi.MessageNasNetworkScanInput */
    get_network_type(): [ /* returnType */ boolean, /* value_network_type */ NasNetworkScanType ]
    ref(): MessageNasNetworkScanInput
    set_network_type(value_network_type: NasNetworkScanType): boolean
    unref(): void
    static name: string
    static new(): MessageNasNetworkScanInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasNetworkScanInput
}
export class MessageNasNetworkScanOutput {
    /* Methods of Qmi.MessageNasNetworkScanOutput */
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement[] ]
    get_network_information(): [ /* returnType */ boolean, /* value_network_information */ MessageNasNetworkScanOutputNetworkInformationElement[] ]
    get_network_scan_result(): [ /* returnType */ boolean, /* value_network_scan_result */ NasNetworkScanResult ]
    get_radio_access_technology(): [ /* returnType */ boolean, /* value_radio_access_technology */ MessageNasNetworkScanOutputRadioAccessTechnologyElement[] ]
    get_result(): boolean
    ref(): MessageNasNetworkScanOutput
    unref(): void
    static name: string
}
export class MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement {
    /* Fields of Qmi.MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement */
    mcc: number
    mnc: number
    includes_pcs_digit: boolean
    static name: string
}
export class MessageNasNetworkScanOutputNetworkInformationElement {
    /* Fields of Qmi.MessageNasNetworkScanOutputNetworkInformationElement */
    mcc: number
    mnc: number
    network_status: NasNetworkStatus
    description: string
    static name: string
}
export class MessageNasNetworkScanOutputRadioAccessTechnologyElement {
    /* Fields of Qmi.MessageNasNetworkScanOutputRadioAccessTechnologyElement */
    mcc: number
    mnc: number
    radio_interface: NasRadioInterface
    static name: string
}
export class MessageNasRegisterIndicationsInput {
    /* Methods of Qmi.MessageNasRegisterIndicationsInput */
    get_current_plmn_name(): [ /* returnType */ boolean, /* value_current_plmn_name */ boolean ]
    get_ddtm_events(): [ /* returnType */ boolean, /* value_ddtm_events */ boolean ]
    get_dual_standby_preference(): [ /* returnType */ boolean, /* value_dual_standby_preference */ boolean ]
    get_embms_status(): [ /* returnType */ boolean, /* value_embms_status */ boolean ]
    get_error_rate(): [ /* returnType */ boolean, /* value_error_rate */ boolean ]
    get_hdr_new_uati_assigned(): [ /* returnType */ boolean, /* value_hdr_new_uati_assigned */ boolean ]
    get_hdr_session_closed(): [ /* returnType */ boolean, /* value_hdr_session_closed */ boolean ]
    get_managed_roaming(): [ /* returnType */ boolean, /* value_managed_roaming */ boolean ]
    get_network_time(): [ /* returnType */ boolean, /* value_network_time */ boolean ]
    get_rf_band_information(): [ /* returnType */ boolean, /* value_rf_band_information */ boolean ]
    get_serving_system_events(): [ /* returnType */ boolean, /* value_serving_system_events */ boolean ]
    get_signal_info(): [ /* returnType */ boolean, /* value_signal_info */ boolean ]
    get_subscription_info(): [ /* returnType */ boolean, /* value_subscription_info */ boolean ]
    get_system_info(): [ /* returnType */ boolean, /* value_system_info */ boolean ]
    get_system_selection_preference(): [ /* returnType */ boolean, /* value_system_selection_preference */ boolean ]
    ref(): MessageNasRegisterIndicationsInput
    set_current_plmn_name(value_current_plmn_name: boolean): boolean
    set_ddtm_events(value_ddtm_events: boolean): boolean
    set_dual_standby_preference(value_dual_standby_preference: boolean): boolean
    set_embms_status(value_embms_status: boolean): boolean
    set_error_rate(value_error_rate: boolean): boolean
    set_hdr_new_uati_assigned(value_hdr_new_uati_assigned: boolean): boolean
    set_hdr_session_closed(value_hdr_session_closed: boolean): boolean
    set_managed_roaming(value_managed_roaming: boolean): boolean
    set_network_time(value_network_time: boolean): boolean
    set_rf_band_information(value_rf_band_information: boolean): boolean
    set_serving_system_events(value_serving_system_events: boolean): boolean
    set_signal_info(value_signal_info: boolean): boolean
    set_subscription_info(value_subscription_info: boolean): boolean
    set_system_info(value_system_info: boolean): boolean
    set_system_selection_preference(value_system_selection_preference: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasRegisterIndicationsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasRegisterIndicationsInput
}
export class MessageNasRegisterIndicationsOutput {
    /* Methods of Qmi.MessageNasRegisterIndicationsOutput */
    get_result(): boolean
    ref(): MessageNasRegisterIndicationsOutput
    unref(): void
    static name: string
}
export class MessageNasResetOutput {
    /* Methods of Qmi.MessageNasResetOutput */
    get_result(): boolean
    ref(): MessageNasResetOutput
    unref(): void
    static name: string
}
export class MessageNasSetEventReportInput {
    /* Methods of Qmi.MessageNasSetEventReportInput */
    get_ecio_indicator(): [ /* returnType */ boolean, /* value_ecio_indicator_report */ boolean, /* value_ecio_indicator_ecio_delta */ number ]
    get_ecio_threshold(): [ /* returnType */ boolean, /* value_ecio_threshold_report */ boolean, /* value_ecio_threshold_thresholds */ number[] ]
    get_error_rate_indicator(): [ /* returnType */ boolean, /* value_error_rate_indicator */ boolean ]
    get_io_indicator(): [ /* returnType */ boolean, /* value_io_indicator_report */ boolean, /* value_io_indicator_io_delta */ number ]
    get_lte_rsrp_delta(): [ /* returnType */ boolean, /* value_lte_rsrp_delta_report */ boolean, /* value_lte_rsrp_delta_rsrp_delta */ number ]
    get_lte_snr_delta(): [ /* returnType */ boolean, /* value_lte_snr_delta_report */ boolean, /* value_lte_snr_delta_snr_delta */ number ]
    get_registration_reject_reason(): [ /* returnType */ boolean, /* value_registration_reject_reason */ boolean ]
    get_rf_band_information(): [ /* returnType */ boolean, /* value_rf_band_information */ boolean ]
    get_rssi_indicator(): [ /* returnType */ boolean, /* value_rssi_indicator_report */ boolean, /* value_rssi_indicator_rssi_delta */ number ]
    get_signal_strength_indicator(): [ /* returnType */ boolean, /* value_signal_strength_indicator_report */ boolean, /* value_signal_strength_indicator_thresholds */ Uint8Array ]
    get_sinr_indicator(): [ /* returnType */ boolean, /* value_sinr_indicator_report */ boolean, /* value_sinr_indicator_sinr_delta */ number ]
    get_sinr_threshold(): [ /* returnType */ boolean, /* value_sinr_threshold_report */ boolean, /* value_sinr_threshold_thresholds */ Uint8Array ]
    ref(): MessageNasSetEventReportInput
    set_ecio_indicator(value_ecio_indicator_report: boolean, value_ecio_indicator_ecio_delta: number): boolean
    set_ecio_threshold(value_ecio_threshold_report: boolean, value_ecio_threshold_thresholds: number[]): boolean
    set_error_rate_indicator(value_error_rate_indicator: boolean): boolean
    set_io_indicator(value_io_indicator_report: boolean, value_io_indicator_io_delta: number): boolean
    set_lte_rsrp_delta(value_lte_rsrp_delta_report: boolean, value_lte_rsrp_delta_rsrp_delta: number): boolean
    set_lte_snr_delta(value_lte_snr_delta_report: boolean, value_lte_snr_delta_snr_delta: number): boolean
    set_registration_reject_reason(value_registration_reject_reason: boolean): boolean
    set_rf_band_information(value_rf_band_information: boolean): boolean
    set_rssi_indicator(value_rssi_indicator_report: boolean, value_rssi_indicator_rssi_delta: number): boolean
    set_signal_strength_indicator(value_signal_strength_indicator_report: boolean, value_signal_strength_indicator_thresholds: Uint8Array): boolean
    set_sinr_indicator(value_sinr_indicator_report: boolean, value_sinr_indicator_sinr_delta: number): boolean
    set_sinr_threshold(value_sinr_threshold_report: boolean, value_sinr_threshold_thresholds: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetEventReportInput
}
export class MessageNasSetEventReportOutput {
    /* Methods of Qmi.MessageNasSetEventReportOutput */
    get_result(): boolean
    ref(): MessageNasSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageNasSetSystemSelectionPreferenceInput {
    /* Methods of Qmi.MessageNasSetSystemSelectionPreferenceInput */
    get_acquisition_order_preference(): [ /* returnType */ boolean, /* value_acquisition_order_preference */ NasRadioInterface[] ]
    get_band_preference(): [ /* returnType */ boolean, /* value_band_preference */ NasBandPreference ]
    get_cdma_prl_preference(): [ /* returnType */ boolean, /* value_cdma_prl_preference */ NasCdmaPrlPreference ]
    get_change_duration(): [ /* returnType */ boolean, /* value_change_duration */ NasChangeDuration ]
    get_emergency_mode(): [ /* returnType */ boolean, /* value_emergency_mode */ boolean ]
    get_extended_lte_band_preference(): [ /* returnType */ boolean, /* value_extended_lte_band_preference_mask_low */ number, /* value_extended_lte_band_preference_mask_mid_low */ number, /* value_extended_lte_band_preference_mask_mid_high */ number, /* value_extended_lte_band_preference_mask_high */ number ]
    get_gsm_wcdma_acquisition_order_preference(): [ /* returnType */ boolean, /* value_gsm_wcdma_acquisition_order_preference */ NasGsmWcdmaAcquisitionOrderPreference ]
    get_lte_band_preference(): [ /* returnType */ boolean, /* value_lte_band_preference */ NasLteBandPreference ]
    get_mnc_pds_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pds_digit_include_status */ boolean ]
    get_mode_preference(): [ /* returnType */ boolean, /* value_mode_preference */ NasRatModePreference ]
    get_network_selection_preference(): [ /* returnType */ boolean, /* value_network_selection_preference_mode */ NasNetworkSelectionPreference, /* value_network_selection_preference_mcc */ number, /* value_network_selection_preference_mnc */ number ]
    get_network_selection_registration_restriction(): [ /* returnType */ boolean, /* value_network_selection_registration_restriction */ NasNetworkSelectionRegistrationRestriction ]
    get_roaming_preference(): [ /* returnType */ boolean, /* value_roaming_preference */ NasRoamingPreference ]
    get_service_domain_preference(): [ /* returnType */ boolean, /* value_service_domain_preference */ NasServiceDomainPreference ]
    get_td_scdma_band_preference(): [ /* returnType */ boolean, /* value_td_scdma_band_preference */ NasTdScdmaBandPreference ]
    get_usage_preference(): [ /* returnType */ boolean, /* value_usage_preference */ NasUsagePreference ]
    get_voice_domain_preference(): [ /* returnType */ boolean, /* value_voice_domain_preference */ NasVoiceDomainPreference ]
    ref(): MessageNasSetSystemSelectionPreferenceInput
    set_acquisition_order_preference(value_acquisition_order_preference: NasRadioInterface[]): boolean
    set_band_preference(value_band_preference: NasBandPreference): boolean
    set_cdma_prl_preference(value_cdma_prl_preference: NasCdmaPrlPreference): boolean
    set_change_duration(value_change_duration: NasChangeDuration): boolean
    set_emergency_mode(value_emergency_mode: boolean): boolean
    set_extended_lte_band_preference(value_extended_lte_band_preference_mask_low: number, value_extended_lte_band_preference_mask_mid_low: number, value_extended_lte_band_preference_mask_mid_high: number, value_extended_lte_band_preference_mask_high: number): boolean
    set_gsm_wcdma_acquisition_order_preference(value_gsm_wcdma_acquisition_order_preference: NasGsmWcdmaAcquisitionOrderPreference): boolean
    set_lte_band_preference(value_lte_band_preference: NasLteBandPreference): boolean
    set_mnc_pds_digit_include_status(value_mnc_pds_digit_include_status: boolean): boolean
    set_mode_preference(value_mode_preference: NasRatModePreference): boolean
    set_network_selection_preference(value_network_selection_preference_mode: NasNetworkSelectionPreference, value_network_selection_preference_mcc: number, value_network_selection_preference_mnc: number): boolean
    set_network_selection_registration_restriction(value_network_selection_registration_restriction: NasNetworkSelectionRegistrationRestriction): boolean
    set_roaming_preference(value_roaming_preference: NasRoamingPreference): boolean
    set_service_domain_preference(value_service_domain_preference: NasServiceDomainPreference): boolean
    set_td_scdma_band_preference(value_td_scdma_band_preference: NasTdScdmaBandPreference): boolean
    set_usage_preference(value_usage_preference: NasUsagePreference): boolean
    set_voice_domain_preference(value_voice_domain_preference: NasVoiceDomainPreference): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetSystemSelectionPreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetSystemSelectionPreferenceInput
}
export class MessageNasSetSystemSelectionPreferenceOutput {
    /* Methods of Qmi.MessageNasSetSystemSelectionPreferenceOutput */
    get_result(): boolean
    ref(): MessageNasSetSystemSelectionPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasSetTechnologyPreferenceInput {
    /* Methods of Qmi.MessageNasSetTechnologyPreferenceInput */
    get_current(): [ /* returnType */ boolean, /* value_current_technology_preference */ NasRadioTechnologyPreference, /* value_current_technology_preference_duration */ NasPreferenceDuration ]
    ref(): MessageNasSetTechnologyPreferenceInput
    set_current(value_current_technology_preference: NasRadioTechnologyPreference, value_current_technology_preference_duration: NasPreferenceDuration): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetTechnologyPreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetTechnologyPreferenceInput
}
export class MessageNasSetTechnologyPreferenceOutput {
    /* Methods of Qmi.MessageNasSetTechnologyPreferenceOutput */
    get_result(): boolean
    ref(): MessageNasSetTechnologyPreferenceOutput
    unref(): void
    static name: string
}
export class MessageNasSwiGetStatusOutput {
    /* Methods of Qmi.MessageNasSwiGetStatusOutput */
    get_common_info(): [ /* returnType */ boolean, /* value_common_info_temperature */ number, /* value_common_info_modem_mode */ NasSwiModemMode, /* value_common_info_system_mode */ NasSwiSystemMode, /* value_common_info_ims_registration_state */ NasSwiImsRegState, /* value_common_info_packet_service_state */ NasSwiPsState ]
    get_lte_info(): [ /* returnType */ boolean, /* value_lte_info_band */ NasActiveBand, /* value_lte_info_bandwidth */ NasDLBandwidth, /* value_lte_info_rx_channel */ number, /* value_lte_info_tx_channel */ number, /* value_lte_info_emm_state */ NasSwiEmmState, /* value_lte_info_emm_sub_state */ number, /* value_lte_info_emm_connection_state */ NasSwiEmmConnectionState ]
    get_result(): boolean
    ref(): MessageNasSwiGetStatusOutput
    unref(): void
    static name: string
}
export class MessageOmaCancelSessionOutput {
    /* Methods of Qmi.MessageOmaCancelSessionOutput */
    get_result(): boolean
    ref(): MessageOmaCancelSessionOutput
    unref(): void
    static name: string
}
export class MessageOmaGetFeatureSettingOutput {
    /* Methods of Qmi.MessageOmaGetFeatureSettingOutput */
    get_device_provisioning_service_update_config(): [ /* returnType */ boolean, /* value_device_provisioning_service_update_config */ boolean ]
    get_hfa_feature_config(): [ /* returnType */ boolean, /* value_hfa_feature_config */ boolean ]
    get_hfa_feature_done_state(): [ /* returnType */ boolean, /* value_hfa_feature_done_state */ OmaHfaFeatureDoneState ]
    get_prl_update_service_config(): [ /* returnType */ boolean, /* value_prl_update_service_config */ boolean ]
    get_result(): boolean
    ref(): MessageOmaGetFeatureSettingOutput
    unref(): void
    static name: string
}
export class MessageOmaGetSessionInfoOutput {
    /* Methods of Qmi.MessageOmaGetSessionInfoOutput */
    get_network_initiated_alert(): [ /* returnType */ boolean, /* value_network_initiated_alert_session_type */ OmaSessionType, /* value_network_initiated_alert_session_id */ number ]
    get_result(): boolean
    get_retry_info(): [ /* returnType */ boolean, /* value_retry_info_retry_count */ number, /* value_retry_info_retry_pause_timer */ number, /* value_retry_info_retry_pause_timer_remaining */ number ]
    get_session_failed_reason(): [ /* returnType */ boolean, /* value_session_failed_reason */ OmaSessionFailedReason ]
    get_session_info(): [ /* returnType */ boolean, /* value_session_info_session_state */ OmaSessionState, /* value_session_info_session_type */ OmaSessionType ]
    ref(): MessageOmaGetSessionInfoOutput
    unref(): void
    static name: string
}
export class MessageOmaResetOutput {
    /* Methods of Qmi.MessageOmaResetOutput */
    get_result(): boolean
    ref(): MessageOmaResetOutput
    unref(): void
    static name: string
}
export class MessageOmaSendSelectionInput {
    /* Methods of Qmi.MessageOmaSendSelectionInput */
    get_network_initiated_alert_selection(): [ /* returnType */ boolean, /* value_network_initiated_alert_selection_control_point_selection_accept */ boolean, /* value_network_initiated_alert_selection_session_id */ number ]
    ref(): MessageOmaSendSelectionInput
    set_network_initiated_alert_selection(value_network_initiated_alert_selection_control_point_selection_accept: boolean, value_network_initiated_alert_selection_session_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSendSelectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSendSelectionInput
}
export class MessageOmaSendSelectionOutput {
    /* Methods of Qmi.MessageOmaSendSelectionOutput */
    get_result(): boolean
    ref(): MessageOmaSendSelectionOutput
    unref(): void
    static name: string
}
export class MessageOmaSetEventReportInput {
    /* Methods of Qmi.MessageOmaSetEventReportInput */
    get_network_initiated_alert_reporting(): [ /* returnType */ boolean, /* value_network_initiated_alert_reporting */ boolean ]
    get_session_state_reporting(): [ /* returnType */ boolean, /* value_session_state_reporting */ boolean ]
    ref(): MessageOmaSetEventReportInput
    set_network_initiated_alert_reporting(value_network_initiated_alert_reporting: boolean): boolean
    set_session_state_reporting(value_session_state_reporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSetEventReportInput
}
export class MessageOmaSetEventReportOutput {
    /* Methods of Qmi.MessageOmaSetEventReportOutput */
    get_result(): boolean
    ref(): MessageOmaSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageOmaSetFeatureSettingInput {
    /* Methods of Qmi.MessageOmaSetFeatureSettingInput */
    get_device_provisioning_service_update_config(): [ /* returnType */ boolean, /* value_device_provisioning_service_update_config */ boolean ]
    get_hfa_feature_config(): [ /* returnType */ boolean, /* value_hfa_feature_config */ boolean ]
    get_prl_update_service_config(): [ /* returnType */ boolean, /* value_prl_update_service_config */ boolean ]
    ref(): MessageOmaSetFeatureSettingInput
    set_device_provisioning_service_update_config(value_device_provisioning_service_update_config: boolean): boolean
    set_hfa_feature_config(value_hfa_feature_config: boolean): boolean
    set_prl_update_service_config(value_prl_update_service_config: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSetFeatureSettingInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSetFeatureSettingInput
}
export class MessageOmaSetFeatureSettingOutput {
    /* Methods of Qmi.MessageOmaSetFeatureSettingOutput */
    get_result(): boolean
    ref(): MessageOmaSetFeatureSettingOutput
    unref(): void
    static name: string
}
export class MessageOmaStartSessionInput {
    /* Methods of Qmi.MessageOmaStartSessionInput */
    get_session_type(): [ /* returnType */ boolean, /* value_session_type */ OmaSessionType ]
    ref(): MessageOmaStartSessionInput
    set_session_type(value_session_type: OmaSessionType): boolean
    unref(): void
    static name: string
    static new(): MessageOmaStartSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaStartSessionInput
}
export class MessageOmaStartSessionOutput {
    /* Methods of Qmi.MessageOmaStartSessionOutput */
    get_result(): boolean
    ref(): MessageOmaStartSessionOutput
    unref(): void
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutput {
    /* Methods of Qmi.MessagePbmGetAllCapabilitiesOutput */
    get_additional_number_alpha_string_capability(): [ /* returnType */ boolean, /* value_additional_number_alpha_string_capability */ MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement[] ]
    get_additional_number_capability(): [ /* returnType */ boolean, /* value_additional_number_capability */ MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement[] ]
    get_capability_basic_information(): [ /* returnType */ boolean, /* value_capability_basic_information */ MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement[] ]
    get_email_capability(): [ /* returnType */ boolean, /* value_email_capability */ MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement[] ]
    get_group_capability(): [ /* returnType */ boolean, /* value_group_capability */ MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement[] ]
    get_grouping_information_alpha_string_capability(): [ /* returnType */ boolean, /* value_grouping_information_alpha_string_capability */ MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement[] ]
    get_hidden_records_capability(): [ /* returnType */ boolean, /* value_hidden_records_capability */ MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement[] ]
    get_result(): boolean
    get_second_name_capability(): [ /* returnType */ boolean, /* value_second_name_capability */ MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement[] ]
    ref(): MessagePbmGetAllCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement */
    session_type: PbmSessionType
    maximum_records: number
    used_records: number
    maximum_string_length: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement */
    session_type: PbmSessionType
    maximum_additional_numbers: number
    maximum_additional_number_length: number
    maximum_additional_number_tag_length: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement */
    session_type: PbmSessionType
    phonebooks: object[]
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement */
    phonebook_type: PbmPhonebookType
    used_records: number
    maximum_records: number
    maximum_number_length: number
    maximum_name_length: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement */
    session_type: PbmSessionType
    maximum_emails: number
    maximum_email_address_length: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement */
    session_type: PbmSessionType
    maximum_groups: number
    maximum_group_tag_length: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement */
    session_type: PbmSessionType
    maximum_records: number
    used_records: number
    maximum_string_length: number
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement */
    session_type: PbmSessionType
    supported: boolean
    static name: string
}
export class MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement {
    /* Fields of Qmi.MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement */
    session_type: PbmSessionType
    maximum_second_name_length: number
    static name: string
}
export class MessagePbmGetCapabilitiesInput {
    /* Methods of Qmi.MessagePbmGetCapabilitiesInput */
    get_phonebook_information(): [ /* returnType */ boolean, /* value_phonebook_information_session_type */ PbmSessionType, /* value_phonebook_information_phonebook_type */ PbmPhonebookType ]
    ref(): MessagePbmGetCapabilitiesInput
    set_phonebook_information(value_phonebook_information_session_type: PbmSessionType, value_phonebook_information_phonebook_type: PbmPhonebookType): boolean
    unref(): void
    static name: string
    static new(): MessagePbmGetCapabilitiesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePbmGetCapabilitiesInput
}
export class MessagePbmGetCapabilitiesOutput {
    /* Methods of Qmi.MessagePbmGetCapabilitiesOutput */
    get_additional_number_alpha_string_capability(): [ /* returnType */ boolean, /* value_additional_number_alpha_string_capability_maximum_records */ number, /* value_additional_number_alpha_string_capability_used_records */ number, /* value_additional_number_alpha_string_capability_maximum_string_length */ number ]
    get_additional_number_capability(): [ /* returnType */ boolean, /* value_additional_number_capability_maximum_additional_numbers */ number, /* value_additional_number_capability_maximum_additional_number_length */ number, /* value_additional_number_capability_maximum_additional_number_tag_length */ number ]
    get_capability_basic_information(): [ /* returnType */ boolean, /* value_capability_basic_information_session_type */ PbmSessionType, /* value_capability_basic_information_phonebook_type */ PbmPhonebookType, /* value_capability_basic_information_used_records */ number, /* value_capability_basic_information_maximum_records */ number, /* value_capability_basic_information_maximum_number_length */ number, /* value_capability_basic_information_maximum_name_length */ number ]
    get_email_capability(): [ /* returnType */ boolean, /* value_email_capability_maximum_emails */ number, /* value_email_capability_maximum_email_address_length */ number ]
    get_group_capability(): [ /* returnType */ boolean, /* value_group_capability_maximum_groups */ number, /* value_group_capability_maximum_group_tag_length */ number ]
    get_grouping_information_alpha_string_capability(): [ /* returnType */ boolean, /* value_grouping_information_alpha_string_capability_maximum_records */ number, /* value_grouping_information_alpha_string_capability_used_records */ number, /* value_grouping_information_alpha_string_capability_maximum_string_length */ number ]
    get_hidden_records_capability(): [ /* returnType */ boolean, /* value_hidden_records_capability_supported */ boolean ]
    get_result(): boolean
    get_second_name_capability(): [ /* returnType */ boolean, /* value_second_name_capability_maximum_second_name_length */ number ]
    ref(): MessagePbmGetCapabilitiesOutput
    unref(): void
    static name: string
}
export class MessagePbmIndicationRegisterInput {
    /* Methods of Qmi.MessagePbmIndicationRegisterInput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ PbmEventRegistrationFlag ]
    ref(): MessagePbmIndicationRegisterInput
    set_event_registration_mask(value_event_registration_mask: PbmEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessagePbmIndicationRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePbmIndicationRegisterInput
}
export class MessagePbmIndicationRegisterOutput {
    /* Methods of Qmi.MessagePbmIndicationRegisterOutput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ PbmEventRegistrationFlag ]
    get_result(): boolean
    ref(): MessagePbmIndicationRegisterOutput
    unref(): void
    static name: string
}
export class MessagePdcActivateConfigInput {
    /* Methods of Qmi.MessagePdcActivateConfigInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcActivateConfigInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcActivateConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcActivateConfigInput
}
export class MessagePdcActivateConfigOutput {
    /* Methods of Qmi.MessagePdcActivateConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcActivateConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcConfigChangeInput {
    /* Methods of Qmi.MessagePdcConfigChangeInput */
    get_type_with_id(): [ /* returnType */ boolean, /* value_type_with_id */ ConfigTypeAndId ]
    ref(): MessagePdcConfigChangeInput
    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcConfigChangeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcConfigChangeInput
}
export class MessagePdcConfigChangeOutput {
    /* Methods of Qmi.MessagePdcConfigChangeOutput */
    get_result(): boolean
    get_type_with_id(): [ /* returnType */ boolean, /* value_type_with_id */ ConfigTypeAndId ]
    ref(): MessagePdcConfigChangeOutput
    unref(): void
    static name: string
}
export class MessagePdcDeactivateConfigInput {
    /* Methods of Qmi.MessagePdcDeactivateConfigInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcDeactivateConfigInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcDeactivateConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcDeactivateConfigInput
}
export class MessagePdcDeactivateConfigOutput {
    /* Methods of Qmi.MessagePdcDeactivateConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcDeactivateConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcDeleteConfigInput {
    /* Methods of Qmi.MessagePdcDeleteConfigInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType ]
    get_id(): [ /* returnType */ boolean, /* value_id */ Uint8Array ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcDeleteConfigInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_id(value_id: Uint8Array): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcDeleteConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcDeleteConfigInput
}
export class MessagePdcDeleteConfigOutput {
    /* Methods of Qmi.MessagePdcDeleteConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcDeleteConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcGetConfigInfoInput {
    /* Methods of Qmi.MessagePdcGetConfigInfoInput */
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    get_type_with_id(): [ /* returnType */ boolean, /* value_type_with_id */ ConfigTypeAndId ]
    ref(): MessagePdcGetConfigInfoInput
    set_token(value_token: number): boolean
    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetConfigInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetConfigInfoInput
}
export class MessagePdcGetConfigInfoOutput {
    /* Methods of Qmi.MessagePdcGetConfigInfoOutput */
    get_result(): boolean
    ref(): MessagePdcGetConfigInfoOutput
    unref(): void
    static name: string
}
export class MessagePdcGetConfigLimitsInput {
    /* Methods of Qmi.MessagePdcGetConfigLimitsInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcGetConfigLimitsInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetConfigLimitsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetConfigLimitsInput
}
export class MessagePdcGetConfigLimitsOutput {
    /* Methods of Qmi.MessagePdcGetConfigLimitsOutput */
    get_current_size(): [ /* returnType */ boolean, /* value_current_size */ number ]
    get_maximum_size(): [ /* returnType */ boolean, /* value_maximum_size */ number ]
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcGetConfigLimitsOutput
    unref(): void
    static name: string
}
export class MessagePdcGetDefaultConfigInfoInput {
    /* Methods of Qmi.MessagePdcGetDefaultConfigInfoInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcGetDefaultConfigInfoInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetDefaultConfigInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetDefaultConfigInfoInput
}
export class MessagePdcGetDefaultConfigInfoOutput {
    /* Methods of Qmi.MessagePdcGetDefaultConfigInfoOutput */
    get_description(): [ /* returnType */ boolean, /* value_description */ string ]
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    get_total_size(): [ /* returnType */ boolean, /* value_total_size */ number ]
    get_version(): [ /* returnType */ boolean, /* value_version */ number ]
    ref(): MessagePdcGetDefaultConfigInfoOutput
    unref(): void
    static name: string
}
export class MessagePdcGetSelectedConfigInput {
    /* Methods of Qmi.MessagePdcGetSelectedConfigInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcGetSelectedConfigInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetSelectedConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetSelectedConfigInput
}
export class MessagePdcGetSelectedConfigOutput {
    /* Methods of Qmi.MessagePdcGetSelectedConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcGetSelectedConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcListConfigsInput {
    /* Methods of Qmi.MessagePdcListConfigsInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcListConfigsInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcListConfigsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcListConfigsInput
}
export class MessagePdcListConfigsOutput {
    /* Methods of Qmi.MessagePdcListConfigsOutput */
    get_result(): boolean
    ref(): MessagePdcListConfigsOutput
    unref(): void
    static name: string
}
export class MessagePdcLoadConfigInput {
    /* Methods of Qmi.MessagePdcLoadConfigInput */
    get_config_chunk(): [ /* returnType */ boolean, /* value_config_chunk_type */ PdcConfigurationType, /* value_config_chunk_id */ Uint8Array, /* value_config_chunk_total_size */ number, /* value_config_chunk_chunk */ Uint8Array ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcLoadConfigInput
    set_config_chunk(value_config_chunk_type: PdcConfigurationType, value_config_chunk_id: Uint8Array, value_config_chunk_total_size: number, value_config_chunk_chunk: Uint8Array): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcLoadConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcLoadConfigInput
}
export class MessagePdcLoadConfigOutput {
    /* Methods of Qmi.MessagePdcLoadConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcLoadConfigOutput
    unref(): void
    static name: string
}
export class MessagePdcRegisterInput {
    /* Methods of Qmi.MessagePdcRegisterInput */
    get_enable_reporting(): [ /* returnType */ boolean, /* value_enable_reporting */ boolean ]
    ref(): MessagePdcRegisterInput
    set_enable_reporting(value_enable_reporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdcRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcRegisterInput
}
export class MessagePdcRegisterOutput {
    /* Methods of Qmi.MessagePdcRegisterOutput */
    get_result(): boolean
    ref(): MessagePdcRegisterOutput
    unref(): void
    static name: string
}
export class MessagePdcResetOutput {
    /* Methods of Qmi.MessagePdcResetOutput */
    get_result(): boolean
    ref(): MessagePdcResetOutput
    unref(): void
    static name: string
}
export class MessagePdcSetSelectedConfigInput {
    /* Methods of Qmi.MessagePdcSetSelectedConfigInput */
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    get_type_with_id(): [ /* returnType */ boolean, /* value_type_with_id */ ConfigTypeAndId ]
    ref(): MessagePdcSetSelectedConfigInput
    set_token(value_token: number): boolean
    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcSetSelectedConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcSetSelectedConfigInput
}
export class MessagePdcSetSelectedConfigOutput {
    /* Methods of Qmi.MessagePdcSetSelectedConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number ]
    ref(): MessagePdcSetSelectedConfigOutput
    unref(): void
    static name: string
}
export class MessagePdsGetAgpsConfigInput {
    /* Methods of Qmi.MessagePdsGetAgpsConfigInput */
    get_network_mode(): [ /* returnType */ boolean, /* value_network_mode */ PdsNetworkMode ]
    ref(): MessagePdsGetAgpsConfigInput
    set_network_mode(value_network_mode: PdsNetworkMode): boolean
    unref(): void
    static name: string
    static new(): MessagePdsGetAgpsConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsGetAgpsConfigInput
}
export class MessagePdsGetAgpsConfigOutput {
    /* Methods of Qmi.MessagePdsGetAgpsConfigOutput */
    get_location_server_address(): [ /* returnType */ boolean, /* value_location_server_address_ip */ number, /* value_location_server_address_port */ number ]
    get_location_server_url(): [ /* returnType */ boolean, /* value_location_server_url */ Uint8Array ]
    get_result(): boolean
    ref(): MessagePdsGetAgpsConfigOutput
    unref(): void
    static name: string
}
export class MessagePdsGetAutoTrackingStateOutput {
    /* Methods of Qmi.MessagePdsGetAutoTrackingStateOutput */
    get_result(): boolean
    get_state(): [ /* returnType */ boolean, /* value_state_auto_tracking_state */ boolean ]
    ref(): MessagePdsGetAutoTrackingStateOutput
    unref(): void
    static name: string
}
export class MessagePdsGetDefaultTrackingSessionOutput {
    /* Methods of Qmi.MessagePdsGetDefaultTrackingSessionOutput */
    get_info(): [ /* returnType */ boolean, /* value_info_session_operation */ PdsOperatingMode, /* value_info_position_data_timeout */ number, /* value_info_interval */ number, /* value_info_accuracy_threshold */ number ]
    get_result(): boolean
    ref(): MessagePdsGetDefaultTrackingSessionOutput
    unref(): void
    static name: string
}
export class MessagePdsGetGpsServiceStateOutput {
    /* Methods of Qmi.MessagePdsGetGpsServiceStateOutput */
    get_result(): boolean
    get_state(): [ /* returnType */ boolean, /* value_state_gps_service_state */ boolean, /* value_state_tracking_session_state */ PdsTrackingSessionState ]
    ref(): MessagePdsGetGpsServiceStateOutput
    unref(): void
    static name: string
}
export class MessagePdsResetOutput {
    /* Methods of Qmi.MessagePdsResetOutput */
    get_result(): boolean
    ref(): MessagePdsResetOutput
    unref(): void
    static name: string
}
export class MessagePdsSetAgpsConfigInput {
    /* Methods of Qmi.MessagePdsSetAgpsConfigInput */
    get_location_server_address(): [ /* returnType */ boolean, /* value_location_server_address_ip */ number, /* value_location_server_address_port */ number ]
    get_location_server_url(): [ /* returnType */ boolean, /* value_location_server_url */ Uint8Array ]
    get_network_mode(): [ /* returnType */ boolean, /* value_network_mode */ PdsNetworkMode ]
    ref(): MessagePdsSetAgpsConfigInput
    set_location_server_address(value_location_server_address_ip: number, value_location_server_address_port: number): boolean
    set_location_server_url(value_location_server_url: Uint8Array): boolean
    set_network_mode(value_network_mode: PdsNetworkMode): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetAgpsConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetAgpsConfigInput
}
export class MessagePdsSetAgpsConfigOutput {
    /* Methods of Qmi.MessagePdsSetAgpsConfigOutput */
    get_result(): boolean
    ref(): MessagePdsSetAgpsConfigOutput
    unref(): void
    static name: string
}
export class MessagePdsSetAutoTrackingStateInput {
    /* Methods of Qmi.MessagePdsSetAutoTrackingStateInput */
    get_state(): [ /* returnType */ boolean, /* value_state_auto_tracking_state */ boolean ]
    ref(): MessagePdsSetAutoTrackingStateInput
    set_state(value_state_auto_tracking_state: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetAutoTrackingStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetAutoTrackingStateInput
}
export class MessagePdsSetAutoTrackingStateOutput {
    /* Methods of Qmi.MessagePdsSetAutoTrackingStateOutput */
    get_result(): boolean
    ref(): MessagePdsSetAutoTrackingStateOutput
    unref(): void
    static name: string
}
export class MessagePdsSetDefaultTrackingSessionInput {
    /* Methods of Qmi.MessagePdsSetDefaultTrackingSessionInput */
    get_info(): [ /* returnType */ boolean, /* value_info_session_operation */ PdsOperatingMode, /* value_info_position_data_timeout */ number, /* value_info_interval */ number, /* value_info_accuracy_threshold */ number ]
    ref(): MessagePdsSetDefaultTrackingSessionInput
    set_info(value_info_session_operation: PdsOperatingMode, value_info_position_data_timeout: number, value_info_interval: number, value_info_accuracy_threshold: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetDefaultTrackingSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetDefaultTrackingSessionInput
}
export class MessagePdsSetDefaultTrackingSessionOutput {
    /* Methods of Qmi.MessagePdsSetDefaultTrackingSessionOutput */
    get_result(): boolean
    ref(): MessagePdsSetDefaultTrackingSessionOutput
    unref(): void
    static name: string
}
export class MessagePdsSetEventReportInput {
    /* Methods of Qmi.MessagePdsSetEventReportInput */
    get_accelerometer_data_streaming_ready_reporting(): [ /* returnType */ boolean, /* value_accelerometer_data_streaming_ready_reporting */ boolean ]
    get_extended_external_xtra_data_request_reporting(): [ /* returnType */ boolean, /* value_extended_external_xtra_data_request_reporting */ boolean ]
    get_extended_nmea_position_reporting(): [ /* returnType */ boolean, /* value_extended_nmea_position_reporting */ boolean ]
    get_external_time_injection_request_reporting(): [ /* returnType */ boolean, /* value_external_time_injection_request_reporting */ boolean ]
    get_external_wifi_position_request_reporting(): [ /* returnType */ boolean, /* value_external_wifi_position_request_reporting */ boolean ]
    get_external_xtra_data_request_reporting(): [ /* returnType */ boolean, /* value_external_xtra_data_request_reporting */ boolean ]
    get_gyro_data_streaming_ready_reporting(): [ /* returnType */ boolean, /* value_gyro_data_streaming_ready_reporting */ boolean ]
    get_heading_uncertainty_reporting(): [ /* returnType */ boolean, /* value_heading_uncertainty_reporting */ boolean ]
    get_nmea_debug_strings_reporting(): [ /* returnType */ boolean, /* value_nmea_debug_strings_reporting */ boolean ]
    get_nmea_position_reporting(): [ /* returnType */ boolean, /* value_nmea_position_reporting */ boolean ]
    get_parsed_position_reporting(): [ /* returnType */ boolean, /* value_parsed_position_reporting */ boolean ]
    get_pds_comm_event_reporting(): [ /* returnType */ boolean, /* value_pds_comm_event_reporting */ boolean ]
    get_position_reliability_indicator_reporting(): [ /* returnType */ boolean, /* value_position_reliability_indicator_reporting */ boolean ]
    get_satellite_information_reporting(): [ /* returnType */ boolean, /* value_satellite_information_reporting */ boolean ]
    get_sensor_data_usage_indicator_reporting(): [ /* returnType */ boolean, /* value_sensor_data_usage_indicator_reporting */ boolean ]
    get_supl_network_initiated_prompt_reporting(): [ /* returnType */ boolean, /* value_supl_network_initiated_prompt_reporting */ boolean ]
    get_time_source_information_reporting(): [ /* returnType */ boolean, /* value_time_source_information_reporting */ boolean ]
    get_time_sync_request_reporting(): [ /* returnType */ boolean, /* value_time_sync_request_reporting */ boolean ]
    get_umts_cp_network_initiated_prompt_reporting(): [ /* returnType */ boolean, /* value_umts_cp_network_initiated_prompt_reporting */ boolean ]
    get_vx_network_initiated_request_reporting(): [ /* returnType */ boolean, /* value_vx_network_initiated_request_reporting */ boolean ]
    ref(): MessagePdsSetEventReportInput
    set_accelerometer_data_streaming_ready_reporting(value_accelerometer_data_streaming_ready_reporting: boolean): boolean
    set_extended_external_xtra_data_request_reporting(value_extended_external_xtra_data_request_reporting: boolean): boolean
    set_extended_nmea_position_reporting(value_extended_nmea_position_reporting: boolean): boolean
    set_external_time_injection_request_reporting(value_external_time_injection_request_reporting: boolean): boolean
    set_external_wifi_position_request_reporting(value_external_wifi_position_request_reporting: boolean): boolean
    set_external_xtra_data_request_reporting(value_external_xtra_data_request_reporting: boolean): boolean
    set_gyro_data_streaming_ready_reporting(value_gyro_data_streaming_ready_reporting: boolean): boolean
    set_heading_uncertainty_reporting(value_heading_uncertainty_reporting: boolean): boolean
    set_nmea_debug_strings_reporting(value_nmea_debug_strings_reporting: boolean): boolean
    set_nmea_position_reporting(value_nmea_position_reporting: boolean): boolean
    set_parsed_position_reporting(value_parsed_position_reporting: boolean): boolean
    set_pds_comm_event_reporting(value_pds_comm_event_reporting: boolean): boolean
    set_position_reliability_indicator_reporting(value_position_reliability_indicator_reporting: boolean): boolean
    set_satellite_information_reporting(value_satellite_information_reporting: boolean): boolean
    set_sensor_data_usage_indicator_reporting(value_sensor_data_usage_indicator_reporting: boolean): boolean
    set_supl_network_initiated_prompt_reporting(value_supl_network_initiated_prompt_reporting: boolean): boolean
    set_time_source_information_reporting(value_time_source_information_reporting: boolean): boolean
    set_time_sync_request_reporting(value_time_sync_request_reporting: boolean): boolean
    set_umts_cp_network_initiated_prompt_reporting(value_umts_cp_network_initiated_prompt_reporting: boolean): boolean
    set_vx_network_initiated_request_reporting(value_vx_network_initiated_request_reporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetEventReportInput
}
export class MessagePdsSetEventReportOutput {
    /* Methods of Qmi.MessagePdsSetEventReportOutput */
    get_result(): boolean
    ref(): MessagePdsSetEventReportOutput
    unref(): void
    static name: string
}
export class MessagePdsSetGpsServiceStateInput {
    /* Methods of Qmi.MessagePdsSetGpsServiceStateInput */
    get_state(): [ /* returnType */ boolean, /* value_state_gps_service_state */ boolean ]
    ref(): MessagePdsSetGpsServiceStateInput
    set_state(value_state_gps_service_state: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetGpsServiceStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetGpsServiceStateInput
}
export class MessagePdsSetGpsServiceStateOutput {
    /* Methods of Qmi.MessagePdsSetGpsServiceStateOutput */
    get_result(): boolean
    ref(): MessagePdsSetGpsServiceStateOutput
    unref(): void
    static name: string
}
export class MessageQosGetFlowStatusInput {
    /* Methods of Qmi.MessageQosGetFlowStatusInput */
    get_qos_id(): [ /* returnType */ boolean, /* value_qos_id */ number ]
    ref(): MessageQosGetFlowStatusInput
    set_qos_id(value_qos_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageQosGetFlowStatusInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageQosGetFlowStatusInput
}
export class MessageQosGetFlowStatusOutput {
    /* Methods of Qmi.MessageQosGetFlowStatusOutput */
    get_result(): boolean
    get_value(): [ /* returnType */ boolean, /* value_value */ QosStatus ]
    ref(): MessageQosGetFlowStatusOutput
    unref(): void
    static name: string
}
export class MessageQosGetNetworkStatusOutput {
    /* Methods of Qmi.MessageQosGetNetworkStatusOutput */
    get_qos_supported(): [ /* returnType */ boolean, /* value_qos_supported */ boolean ]
    get_result(): boolean
    ref(): MessageQosGetNetworkStatusOutput
    unref(): void
    static name: string
}
export class MessageQosResetOutput {
    /* Methods of Qmi.MessageQosResetOutput */
    get_result(): boolean
    ref(): MessageQosResetOutput
    unref(): void
    static name: string
}
export class MessageQosSwiReadDataStatsInput {
    /* Methods of Qmi.MessageQosSwiReadDataStatsInput */
    get_apn_id(): [ /* returnType */ boolean, /* value_apn_id */ number ]
    ref(): MessageQosSwiReadDataStatsInput
    set_apn_id(value_apn_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageQosSwiReadDataStatsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageQosSwiReadDataStatsInput
}
export class MessageQosSwiReadDataStatsOutput {
    /* Methods of Qmi.MessageQosSwiReadDataStatsOutput */
    get_apn(): [ /* returnType */ boolean, /* value_apn_apn_id */ number, /* value_apn_tx_packets */ number, /* value_apn_tx_packets_dropped */ number, /* value_apn_rx_packets */ number, /* value_apn_tx_bytes */ number, /* value_apn_tx_bytes_dropped */ number, /* value_apn_rx_bytes */ number ]
    get_flow(): [ /* returnType */ boolean, /* value_flow */ MessageQosSwiReadDataStatsOutputFlowElement[] ]
    get_result(): boolean
    ref(): MessageQosSwiReadDataStatsOutput
    unref(): void
    static name: string
}
export class MessageQosSwiReadDataStatsOutputFlowElement {
    /* Fields of Qmi.MessageQosSwiReadDataStatsOutputFlowElement */
    bearer_id: number
    tx_packets: number
    tx_packets_dropped: number
    tx_bytes: number
    tx_bytes_dropped: number
    static name: string
}
export class MessageSarRfGetStateOutput {
    /* Methods of Qmi.MessageSarRfGetStateOutput */
    get_result(): boolean
    get_state(): [ /* returnType */ boolean, /* value_state */ SarRfState ]
    ref(): MessageSarRfGetStateOutput
    unref(): void
    static name: string
}
export class MessageSarRfSetStateInput {
    /* Methods of Qmi.MessageSarRfSetStateInput */
    get_state(): [ /* returnType */ boolean, /* value_state */ SarRfState ]
    ref(): MessageSarRfSetStateInput
    set_state(value_state: SarRfState): boolean
    unref(): void
    static name: string
    static new(): MessageSarRfSetStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageSarRfSetStateInput
}
export class MessageSarRfSetStateOutput {
    /* Methods of Qmi.MessageSarRfSetStateOutput */
    get_result(): boolean
    ref(): MessageSarRfSetStateOutput
    unref(): void
    static name: string
}
export class MessageUimChangePinInput {
    /* Methods of Qmi.MessageUimChangePinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ UimPinId, /* value_info_old_pin */ string, /* value_info_new_pin */ string ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimChangePinInput
    set_info(value_info_pin_id: UimPinId, value_info_old_pin: string, value_info_new_pin: string): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimChangePinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimChangePinInput
}
export class MessageUimChangePinOutput {
    /* Methods of Qmi.MessageUimChangePinOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number, /* value_card_result_sw2 */ number ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_retries_left */ number, /* value_retries_remaining_unblock_retries_left */ number ]
    ref(): MessageUimChangePinOutput
    unref(): void
    static name: string
}
export class MessageUimChangeProvisioningSessionInput {
    /* Methods of Qmi.MessageUimChangeProvisioningSessionInput */
    get_application_information(): [ /* returnType */ boolean, /* value_application_information_slot */ number, /* value_application_information_application_identifier */ Uint8Array ]
    get_session_change(): [ /* returnType */ boolean, /* value_session_change_session_type */ UimSessionType, /* value_session_change_activate */ boolean ]
    ref(): MessageUimChangeProvisioningSessionInput
    set_application_information(value_application_information_slot: number, value_application_information_application_identifier: Uint8Array): boolean
    set_session_change(value_session_change_session_type: UimSessionType, value_session_change_activate: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageUimChangeProvisioningSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimChangeProvisioningSessionInput
}
export class MessageUimChangeProvisioningSessionOutput {
    /* Methods of Qmi.MessageUimChangeProvisioningSessionOutput */
    get_result(): boolean
    ref(): MessageUimChangeProvisioningSessionOutput
    unref(): void
    static name: string
}
export class MessageUimGetCardStatusOutput {
    /* Methods of Qmi.MessageUimGetCardStatusOutput */
    get_card_status(): [ /* returnType */ boolean, /* value_card_status_index_gw_primary */ number, /* value_card_status_index_1x_primary */ number, /* value_card_status_index_gw_secondary */ number, /* value_card_status_index_1x_secondary */ number, /* value_card_status_cards */ MessageUimGetCardStatusOutputCardStatusCardsElement[] ]
    get_result(): boolean
    ref(): MessageUimGetCardStatusOutput
    unref(): void
    static name: string
}
export class MessageUimGetCardStatusOutputCardStatusCardsElement {
    /* Fields of Qmi.MessageUimGetCardStatusOutputCardStatusCardsElement */
    card_state: UimCardState
    upin_state: UimPinState
    upin_retries: number
    upuk_retries: number
    error_code: UimCardError
    applications: object[]
    static name: string
}
export class MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement {
    /* Fields of Qmi.MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement */
    type: UimCardApplicationType
    state: UimCardApplicationState
    personalization_state: UimCardApplicationPersonalizationState
    personalization_feature: UimCardApplicationPersonalizationFeature
    personalization_retries: number
    personalization_unblock_retries: number
    application_identifier_value: object[]
    upin_replaces_pin1: boolean
    pin1_state: UimPinState
    pin1_retries: number
    puk1_retries: number
    pin2_state: UimPinState
    pin2_retries: number
    puk2_retries: number
    static name: string
}
export class MessageUimGetFileAttributesInput {
    /* Methods of Qmi.MessageUimGetFileAttributesInput */
    get_file(): [ /* returnType */ boolean, /* value_file_file_id */ number, /* value_file_file_path */ Uint8Array ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimGetFileAttributesInput
    set_file(value_file_file_id: number, value_file_file_path: Uint8Array): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimGetFileAttributesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimGetFileAttributesInput
}
export class MessageUimGetFileAttributesOutput {
    /* Methods of Qmi.MessageUimGetFileAttributesOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number, /* value_card_result_sw2 */ number ]
    get_file_attributes(): [ /* returnType */ boolean, /* value_file_attributes_file_size */ number, /* value_file_attributes_file_id */ number, /* value_file_attributes_file_type */ UimFileType, /* value_file_attributes_record_size */ number, /* value_file_attributes_record_count */ number, /* value_file_attributes_read_security_attributes_logic */ UimSecurityAttributeLogic, /* value_file_attributes_read_security_attributes */ UimSecurityAttribute, /* value_file_attributes_write_security_attributes_logic */ UimSecurityAttributeLogic, /* value_file_attributes_write_security_attributes */ UimSecurityAttribute, /* value_file_attributes_increase_security_attributes_logic */ UimSecurityAttributeLogic, /* value_file_attributes_increase_security_attributes */ UimSecurityAttribute, /* value_file_attributes_deactivate_security_attributes_logic */ UimSecurityAttributeLogic, /* value_file_attributes_deactivate_security_attributes */ UimSecurityAttribute, /* value_file_attributes_activate_security_attributes_logic */ UimSecurityAttributeLogic, /* value_file_attributes_activate_security_attributes */ UimSecurityAttribute, /* value_file_attributes_raw_data */ Uint8Array ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_result(): boolean
    ref(): MessageUimGetFileAttributesOutput
    unref(): void
    static name: string
}
export class MessageUimGetSlotStatusOutput {
    /* Methods of Qmi.MessageUimGetSlotStatusOutput */
    get_physical_slot_information(): [ /* returnType */ boolean, /* value_physical_slot_information */ PhysicalSlotInformationSlot[] ]
    get_physical_slot_status(): [ /* returnType */ boolean, /* value_physical_slot_status */ PhysicalSlotStatusSlot[] ]
    get_result(): boolean
    get_slot_eid_information(): [ /* returnType */ boolean, /* value_slot_eid_information */ any ]
    ref(): MessageUimGetSlotStatusOutput
    unref(): void
    static name: string
}
export class MessageUimGetSupportedMessagesOutput {
    /* Methods of Qmi.MessageUimGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array ]
    get_result(): boolean
    ref(): MessageUimGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageUimPowerOffSimInput {
    /* Methods of Qmi.MessageUimPowerOffSimInput */
    get_slot(): [ /* returnType */ boolean, /* value_slot */ number ]
    ref(): MessageUimPowerOffSimInput
    set_slot(value_slot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimPowerOffSimInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimPowerOffSimInput
}
export class MessageUimPowerOffSimOutput {
    /* Methods of Qmi.MessageUimPowerOffSimOutput */
    get_result(): boolean
    ref(): MessageUimPowerOffSimOutput
    unref(): void
    static name: string
}
export class MessageUimPowerOnSimInput {
    /* Methods of Qmi.MessageUimPowerOnSimInput */
    get_slot(): [ /* returnType */ boolean, /* value_slot */ number ]
    ref(): MessageUimPowerOnSimInput
    set_slot(value_slot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimPowerOnSimInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimPowerOnSimInput
}
export class MessageUimPowerOnSimOutput {
    /* Methods of Qmi.MessageUimPowerOnSimOutput */
    get_result(): boolean
    ref(): MessageUimPowerOnSimOutput
    unref(): void
    static name: string
}
export class MessageUimReadRecordInput {
    /* Methods of Qmi.MessageUimReadRecordInput */
    get_file(): [ /* returnType */ boolean, /* value_file_file_id */ number, /* value_file_file_path */ Uint8Array ]
    get_last_record(): [ /* returnType */ boolean, /* value_last_record */ number ]
    get_record(): [ /* returnType */ boolean, /* value_record_record_number */ number, /* value_record_record_length */ number ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimReadRecordInput
    set_file(value_file_file_id: number, value_file_file_path: Uint8Array): boolean
    set_last_record(value_last_record: number): boolean
    set_record(value_record_record_number: number, value_record_record_length: number): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimReadRecordInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimReadRecordInput
}
export class MessageUimReadRecordOutput {
    /* Methods of Qmi.MessageUimReadRecordOutput */
    get_additional_read_result(): [ /* returnType */ boolean, /* value_additional_read_result */ Uint8Array ]
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number, /* value_card_result_sw2 */ number ]
    get_read_result(): [ /* returnType */ boolean, /* value_read_result */ Uint8Array ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_result(): boolean
    ref(): MessageUimReadRecordOutput
    unref(): void
    static name: string
}
export class MessageUimReadTransparentInput {
    /* Methods of Qmi.MessageUimReadTransparentInput */
    get_encrypt_data(): [ /* returnType */ boolean, /* value_encrypt_data */ boolean ]
    get_file(): [ /* returnType */ boolean, /* value_file_file_id */ number, /* value_file_file_path */ Uint8Array ]
    get_read_information(): [ /* returnType */ boolean, /* value_read_information_offset */ number, /* value_read_information_length */ number ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimReadTransparentInput
    set_encrypt_data(value_encrypt_data: boolean): boolean
    set_file(value_file_file_id: number, value_file_file_path: Uint8Array): boolean
    set_read_information(value_read_information_offset: number, value_read_information_length: number): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimReadTransparentInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimReadTransparentInput
}
export class MessageUimReadTransparentOutput {
    /* Methods of Qmi.MessageUimReadTransparentOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number, /* value_card_result_sw2 */ number ]
    get_encrypted_data(): [ /* returnType */ boolean, /* value_encrypted_data */ boolean ]
    get_read_result(): [ /* returnType */ boolean, /* value_read_result */ Uint8Array ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_result(): boolean
    ref(): MessageUimReadTransparentOutput
    unref(): void
    static name: string
}
export class MessageUimRefreshCompleteInput {
    /* Methods of Qmi.MessageUimRefreshCompleteInput */
    get_info(): [ /* returnType */ boolean, /* value_info_refresh_success */ boolean ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimRefreshCompleteInput
    set_info(value_info_refresh_success: boolean): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshCompleteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshCompleteInput
}
export class MessageUimRefreshCompleteOutput {
    /* Methods of Qmi.MessageUimRefreshCompleteOutput */
    get_result(): boolean
    ref(): MessageUimRefreshCompleteOutput
    unref(): void
    static name: string
}
export class MessageUimRefreshRegisterAllInput {
    /* Methods of Qmi.MessageUimRefreshRegisterAllInput */
    get_info(): [ /* returnType */ boolean, /* value_info_register_flag */ boolean ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimRefreshRegisterAllInput
    set_info(value_info_register_flag: boolean): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshRegisterAllInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshRegisterAllInput
}
export class MessageUimRefreshRegisterAllOutput {
    /* Methods of Qmi.MessageUimRefreshRegisterAllOutput */
    get_result(): boolean
    ref(): MessageUimRefreshRegisterAllOutput
    unref(): void
    static name: string
}
export class MessageUimRefreshRegisterInput {
    /* Methods of Qmi.MessageUimRefreshRegisterInput */
    get_info(): [ /* returnType */ boolean, /* value_info_register_flag */ boolean, /* value_info_vote_for_init */ boolean, /* value_info_files */ MessageUimRefreshRegisterInputInfoFilesElement[] ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimRefreshRegisterInput
    set_info(value_info_register_flag: boolean, value_info_vote_for_init: boolean, value_info_files: MessageUimRefreshRegisterInputInfoFilesElement[]): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshRegisterInput
}
export class MessageUimRefreshRegisterInputInfoFilesElement {
    /* Fields of Qmi.MessageUimRefreshRegisterInputInfoFilesElement */
    file_id: number
    path: object[]
    static name: string
}
export class MessageUimRefreshRegisterOutput {
    /* Methods of Qmi.MessageUimRefreshRegisterOutput */
    get_result(): boolean
    ref(): MessageUimRefreshRegisterOutput
    unref(): void
    static name: string
}
export class MessageUimRegisterEventsInput {
    /* Methods of Qmi.MessageUimRegisterEventsInput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ UimEventRegistrationFlag ]
    ref(): MessageUimRegisterEventsInput
    set_event_registration_mask(value_event_registration_mask: UimEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessageUimRegisterEventsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRegisterEventsInput
}
export class MessageUimRegisterEventsOutput {
    /* Methods of Qmi.MessageUimRegisterEventsOutput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ UimEventRegistrationFlag ]
    get_result(): boolean
    ref(): MessageUimRegisterEventsOutput
    unref(): void
    static name: string
}
export class MessageUimResetOutput {
    /* Methods of Qmi.MessageUimResetOutput */
    get_result(): boolean
    ref(): MessageUimResetOutput
    unref(): void
    static name: string
}
export class MessageUimSetPinProtectionInput {
    /* Methods of Qmi.MessageUimSetPinProtectionInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ UimPinId, /* value_info_pin_enabled */ boolean, /* value_info_pin_value */ string ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimSetPinProtectionInput
    set_info(value_info_pin_id: UimPinId, value_info_pin_enabled: boolean, value_info_pin_value: string): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimSetPinProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimSetPinProtectionInput
}
export class MessageUimSetPinProtectionOutput {
    /* Methods of Qmi.MessageUimSetPinProtectionOutput */
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_retries_left */ number, /* value_retries_remaining_unblock_retries_left */ number ]
    ref(): MessageUimSetPinProtectionOutput
    unref(): void
    static name: string
}
export class MessageUimSwitchSlotInput {
    /* Methods of Qmi.MessageUimSwitchSlotInput */
    get_logical_slot(): [ /* returnType */ boolean, /* value_logical_slot */ number ]
    get_physical_slot(): [ /* returnType */ boolean, /* value_physical_slot */ number ]
    ref(): MessageUimSwitchSlotInput
    set_logical_slot(value_logical_slot: number): boolean
    set_physical_slot(value_physical_slot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimSwitchSlotInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimSwitchSlotInput
}
export class MessageUimSwitchSlotOutput {
    /* Methods of Qmi.MessageUimSwitchSlotOutput */
    get_result(): boolean
    ref(): MessageUimSwitchSlotOutput
    unref(): void
    static name: string
}
export class MessageUimUnblockPinInput {
    /* Methods of Qmi.MessageUimUnblockPinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ UimPinId, /* value_info_puk */ string, /* value_info_new_pin */ string ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimUnblockPinInput
    set_info(value_info_pin_id: UimPinId, value_info_puk: string, value_info_new_pin: string): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimUnblockPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimUnblockPinInput
}
export class MessageUimUnblockPinOutput {
    /* Methods of Qmi.MessageUimUnblockPinOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number, /* value_card_result_sw2 */ number ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_retries_left */ number, /* value_retries_remaining_unblock_retries_left */ number ]
    ref(): MessageUimUnblockPinOutput
    unref(): void
    static name: string
}
export class MessageUimVerifyPinInput {
    /* Methods of Qmi.MessageUimVerifyPinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ UimPinId, /* value_info_pin_value */ string ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType, /* value_session_application_identifier */ Uint8Array ]
    ref(): MessageUimVerifyPinInput
    set_info(value_info_pin_id: UimPinId, value_info_pin_value: string): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageUimVerifyPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimVerifyPinInput
}
export class MessageUimVerifyPinOutput {
    /* Methods of Qmi.MessageUimVerifyPinOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number, /* value_card_result_sw2 */ number ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number ]
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_retries_left */ number, /* value_retries_remaining_unblock_retries_left */ number ]
    ref(): MessageUimVerifyPinOutput
    unref(): void
    static name: string
}
export class MessageVoiceAnswerCallInput {
    /* Methods of Qmi.MessageVoiceAnswerCallInput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number ]
    ref(): MessageVoiceAnswerCallInput
    set_call_id(value_call_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceAnswerCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceAnswerCallInput
}
export class MessageVoiceAnswerCallOutput {
    /* Methods of Qmi.MessageVoiceAnswerCallOutput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number ]
    get_result(): boolean
    ref(): MessageVoiceAnswerCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceAnswerUssdInput {
    /* Methods of Qmi.MessageVoiceAnswerUssdInput */
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme, /* value_uss_data_data */ Uint8Array ]
    ref(): MessageVoiceAnswerUssdInput
    set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceAnswerUssdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceAnswerUssdInput
}
export class MessageVoiceAnswerUssdOutput {
    /* Methods of Qmi.MessageVoiceAnswerUssdOutput */
    get_result(): boolean
    ref(): MessageVoiceAnswerUssdOutput
    unref(): void
    static name: string
}
export class MessageVoiceCancelUssdOutput {
    /* Methods of Qmi.MessageVoiceCancelUssdOutput */
    get_result(): boolean
    ref(): MessageVoiceCancelUssdOutput
    unref(): void
    static name: string
}
export class MessageVoiceDialCallInput {
    /* Methods of Qmi.MessageVoiceDialCallInput */
    get_calling_number(): [ /* returnType */ boolean, /* value_calling_number */ string ]
    ref(): MessageVoiceDialCallInput
    set_calling_number(value_calling_number: string): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceDialCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceDialCallInput
}
export class MessageVoiceDialCallOutput {
    /* Methods of Qmi.MessageVoiceDialCallOutput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number ]
    get_result(): boolean
    ref(): MessageVoiceDialCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceEndCallInput {
    /* Methods of Qmi.MessageVoiceEndCallInput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number ]
    ref(): MessageVoiceEndCallInput
    set_call_id(value_call_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceEndCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceEndCallInput
}
export class MessageVoiceEndCallOutput {
    /* Methods of Qmi.MessageVoiceEndCallOutput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number ]
    get_result(): boolean
    ref(): MessageVoiceEndCallOutput
    unref(): void
    static name: string
}
export class MessageVoiceGetConfigInput {
    /* Methods of Qmi.MessageVoiceGetConfigInput */
    get_air_timer(): [ /* returnType */ boolean, /* value_air_timer */ boolean ]
    get_amr_status(): [ /* returnType */ boolean, /* value_amr_status */ boolean ]
    get_auto_answer(): [ /* returnType */ boolean, /* value_auto_answer */ boolean ]
    get_nam_index(): [ /* returnType */ boolean, /* value_nam_index */ boolean ]
    get_preferred_voice_privacy(): [ /* returnType */ boolean, /* value_preferred_voice_privacy */ boolean ]
    get_preferred_voice_service_option(): [ /* returnType */ boolean, /* value_preferred_voice_service_option */ boolean ]
    get_roam_timer(): [ /* returnType */ boolean, /* value_roam_timer */ boolean ]
    get_tty_mode(): [ /* returnType */ boolean, /* value_tty_mode */ boolean ]
    get_voice_domain_preference(): [ /* returnType */ boolean, /* value_voice_domain_preference */ boolean ]
    ref(): MessageVoiceGetConfigInput
    set_air_timer(value_air_timer: boolean): boolean
    set_amr_status(value_amr_status: boolean): boolean
    set_auto_answer(value_auto_answer: boolean): boolean
    set_nam_index(value_nam_index: boolean): boolean
    set_preferred_voice_privacy(value_preferred_voice_privacy: boolean): boolean
    set_preferred_voice_service_option(value_preferred_voice_service_option: boolean): boolean
    set_roam_timer(value_roam_timer: boolean): boolean
    set_tty_mode(value_tty_mode: boolean): boolean
    set_voice_domain_preference(value_voice_domain_preference: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceGetConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceGetConfigInput
}
export class MessageVoiceGetConfigOutput {
    /* Methods of Qmi.MessageVoiceGetConfigOutput */
    get_air_timer_count(): [ /* returnType */ boolean, /* value_air_timer_count_nam_id */ number, /* value_air_timer_count_air_timer */ number ]
    get_auto_answer_status(): [ /* returnType */ boolean, /* value_auto_answer_status */ boolean ]
    get_current_amr_status(): [ /* returnType */ boolean, /* value_current_amr_status_gsm */ boolean, /* value_current_amr_status_wcdma */ VoiceWcdmaAmrStatus ]
    get_current_preferred_voice_so(): [ /* returnType */ boolean, /* value_current_preferred_voice_so_nam_id */ number, /* value_current_preferred_voice_so_evrc_capability */ boolean, /* value_current_preferred_voice_so_home_page_voice_service_option */ VoiceServiceOption, /* value_current_preferred_voice_so_home_origination_voice_service_option */ VoiceServiceOption, /* value_current_preferred_voice_so_roaming_origination_voice_service_option */ VoiceServiceOption ]
    get_current_tty_mode(): [ /* returnType */ boolean, /* value_current_tty_mode */ VoiceTtyMode ]
    get_current_voice_domain_preference(): [ /* returnType */ boolean, /* value_current_voice_domain_preference */ VoiceDomain ]
    get_current_voice_privacy_preference(): [ /* returnType */ boolean, /* value_current_voice_privacy_preference */ VoicePrivacy ]
    get_result(): boolean
    get_roam_timer_count(): [ /* returnType */ boolean, /* value_roam_timer_count_nam_id */ number, /* value_roam_timer_count_roam_timer */ number ]
    ref(): MessageVoiceGetConfigOutput
    unref(): void
    static name: string
}
export class MessageVoiceGetSupportedMessagesOutput {
    /* Methods of Qmi.MessageVoiceGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array ]
    get_result(): boolean
    ref(): MessageVoiceGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageVoiceIndicationRegisterInput {
    /* Methods of Qmi.MessageVoiceIndicationRegisterInput */
    get_aoc_events(): [ /* returnType */ boolean, /* value_aoc_events */ boolean ]
    get_call_notification_events(): [ /* returnType */ boolean, /* value_call_notification_events */ boolean ]
    get_conference_events(): [ /* returnType */ boolean, /* value_conference_events */ boolean ]
    get_dtmf_events(): [ /* returnType */ boolean, /* value_dtmf_events */ boolean ]
    get_extended_burst_type_international_information_events(): [ /* returnType */ boolean, /* value_extended_burst_type_international_information_events */ boolean ]
    get_handover_events(): [ /* returnType */ boolean, /* value_handover_events */ boolean ]
    get_modification_events(): [ /* returnType */ boolean, /* value_modification_events */ boolean ]
    get_mt_page_miss_information_events(): [ /* returnType */ boolean, /* value_mt_page_miss_information_events */ boolean ]
    get_speech_codec_events(): [ /* returnType */ boolean, /* value_speech_codec_events */ boolean ]
    get_supplementary_service_notification_events(): [ /* returnType */ boolean, /* value_supplementary_service_notification_events */ boolean ]
    get_ussd_notification_events(): [ /* returnType */ boolean, /* value_ussd_notification_events */ boolean ]
    get_uus_events(): [ /* returnType */ boolean, /* value_uus_events */ boolean ]
    get_voice_privacy_events(): [ /* returnType */ boolean, /* value_voice_privacy_events */ boolean ]
    ref(): MessageVoiceIndicationRegisterInput
    set_aoc_events(value_aoc_events: boolean): boolean
    set_call_notification_events(value_call_notification_events: boolean): boolean
    set_conference_events(value_conference_events: boolean): boolean
    set_dtmf_events(value_dtmf_events: boolean): boolean
    set_extended_burst_type_international_information_events(value_extended_burst_type_international_information_events: boolean): boolean
    set_handover_events(value_handover_events: boolean): boolean
    set_modification_events(value_modification_events: boolean): boolean
    set_mt_page_miss_information_events(value_mt_page_miss_information_events: boolean): boolean
    set_speech_codec_events(value_speech_codec_events: boolean): boolean
    set_supplementary_service_notification_events(value_supplementary_service_notification_events: boolean): boolean
    set_ussd_notification_events(value_ussd_notification_events: boolean): boolean
    set_uus_events(value_uus_events: boolean): boolean
    set_voice_privacy_events(value_voice_privacy_events: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceIndicationRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceIndicationRegisterInput
}
export class MessageVoiceIndicationRegisterOutput {
    /* Methods of Qmi.MessageVoiceIndicationRegisterOutput */
    get_result(): boolean
    ref(): MessageVoiceIndicationRegisterOutput
    unref(): void
    static name: string
}
export class MessageVoiceOriginateUssdInput {
    /* Methods of Qmi.MessageVoiceOriginateUssdInput */
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme, /* value_uss_data_data */ Uint8Array ]
    ref(): MessageVoiceOriginateUssdInput
    set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceOriginateUssdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceOriginateUssdInput
}
export class MessageVoiceOriginateUssdNoWaitInput {
    /* Methods of Qmi.MessageVoiceOriginateUssdNoWaitInput */
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme, /* value_uss_data_data */ Uint8Array ]
    ref(): MessageVoiceOriginateUssdNoWaitInput
    set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceOriginateUssdNoWaitInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceOriginateUssdNoWaitInput
}
export class MessageVoiceOriginateUssdNoWaitOutput {
    /* Methods of Qmi.MessageVoiceOriginateUssdNoWaitOutput */
    get_result(): boolean
    ref(): MessageVoiceOriginateUssdNoWaitOutput
    unref(): void
    static name: string
}
export class MessageVoiceOriginateUssdOutput {
    /* Methods of Qmi.MessageVoiceOriginateUssdOutput */
    get_alpha_identifier(): [ /* returnType */ boolean, /* value_alpha_identifier_data_coding_scheme */ VoiceAlphaDataCodingScheme, /* value_alpha_identifier_alpha */ Uint8Array ]
    get_call_control_result_type(): [ /* returnType */ boolean, /* value_call_control_result_type */ VoiceCallControlResultType ]
    get_call_control_supplementary_service_type(): [ /* returnType */ boolean, /* value_call_control_supplementary_service_type */ VoiceCallControlSupplementaryServiceType ]
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number ]
    get_failure_cause(): [ /* returnType */ boolean, /* value_failure_cause */ VoiceCallEndReason ]
    get_result(): boolean
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme, /* value_uss_data_data */ Uint8Array ]
    get_uss_data_utf16(): [ /* returnType */ boolean, /* value_uss_data_utf16 */ number[] ]
    ref(): MessageVoiceOriginateUssdOutput
    unref(): void
    static name: string
}
export class MessageWdaGetDataFormatInput {
    /* Methods of Qmi.MessageWdaGetDataFormatInput */
    get_endpoint_info(): [ /* returnType */ boolean, /* value_endpoint_info_endpoint_type */ DataEndpointType, /* value_endpoint_info_interface_number */ number ]
    ref(): MessageWdaGetDataFormatInput
    set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdaGetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdaGetDataFormatInput
}
export class MessageWdaGetDataFormatOutput {
    /* Methods of Qmi.MessageWdaGetDataFormatOutput */
    get_downlink_data_aggregation_max_datagrams(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_datagrams */ number ]
    get_downlink_data_aggregation_max_size(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_size */ number ]
    get_downlink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_protocol */ WdaDataAggregationProtocol ]
    get_link_layer_protocol(): [ /* returnType */ boolean, /* value_link_layer_protocol */ WdaLinkLayerProtocol ]
    get_ndp_signature(): [ /* returnType */ boolean, /* value_ndp_signature */ number ]
    get_qos_format(): [ /* returnType */ boolean, /* value_qos_format */ boolean ]
    get_result(): boolean
    get_uplink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_protocol */ WdaDataAggregationProtocol ]
    ref(): MessageWdaGetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageWdaGetSupportedMessagesOutput {
    /* Methods of Qmi.MessageWdaGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array ]
    get_result(): boolean
    ref(): MessageWdaGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageWdaSetDataFormatInput {
    /* Methods of Qmi.MessageWdaSetDataFormatInput */
    get_downlink_data_aggregation_max_datagrams(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_datagrams */ number ]
    get_downlink_data_aggregation_max_size(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_size */ number ]
    get_downlink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_protocol */ WdaDataAggregationProtocol ]
    get_endpoint_info(): [ /* returnType */ boolean, /* value_endpoint_info_endpoint_type */ DataEndpointType, /* value_endpoint_info_interface_number */ number ]
    get_link_layer_protocol(): [ /* returnType */ boolean, /* value_link_layer_protocol */ WdaLinkLayerProtocol ]
    get_ndp_signature(): [ /* returnType */ boolean, /* value_ndp_signature */ number ]
    get_qos_format(): [ /* returnType */ boolean, /* value_qos_format */ boolean ]
    get_uplink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_protocol */ WdaDataAggregationProtocol ]
    ref(): MessageWdaSetDataFormatInput
    set_downlink_data_aggregation_max_datagrams(value_downlink_data_aggregation_max_datagrams: number): boolean
    set_downlink_data_aggregation_max_size(value_downlink_data_aggregation_max_size: number): boolean
    set_downlink_data_aggregation_protocol(value_downlink_data_aggregation_protocol: WdaDataAggregationProtocol): boolean
    set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean
    set_link_layer_protocol(value_link_layer_protocol: WdaLinkLayerProtocol): boolean
    set_ndp_signature(value_ndp_signature: number): boolean
    set_qos_format(value_qos_format: boolean): boolean
    set_uplink_data_aggregation_protocol(value_uplink_data_aggregation_protocol: WdaDataAggregationProtocol): boolean
    unref(): void
    static name: string
    static new(): MessageWdaSetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdaSetDataFormatInput
}
export class MessageWdaSetDataFormatOutput {
    /* Methods of Qmi.MessageWdaSetDataFormatOutput */
    get_downlink_data_aggregation_max_datagrams(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_datagrams */ number ]
    get_downlink_data_aggregation_max_size(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_size */ number ]
    get_downlink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_protocol */ WdaDataAggregationProtocol ]
    get_link_layer_protocol(): [ /* returnType */ boolean, /* value_link_layer_protocol */ WdaLinkLayerProtocol ]
    get_ndp_signature(): [ /* returnType */ boolean, /* value_ndp_signature */ number ]
    get_qos_format(): [ /* returnType */ boolean, /* value_qos_format */ boolean ]
    get_result(): boolean
    get_uplink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_protocol */ WdaDataAggregationProtocol ]
    ref(): MessageWdaSetDataFormatOutput
    unref(): void
    static name: string
}
export class MessageWdsBindDataPortInput {
    /* Methods of Qmi.MessageWdsBindDataPortInput */
    get_data_port(): [ /* returnType */ boolean, /* value_data_port */ SioPort ]
    ref(): MessageWdsBindDataPortInput
    set_data_port(value_data_port: SioPort): boolean
    unref(): void
    static name: string
    static new(): MessageWdsBindDataPortInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsBindDataPortInput
}
export class MessageWdsBindDataPortOutput {
    /* Methods of Qmi.MessageWdsBindDataPortOutput */
    get_result(): boolean
    ref(): MessageWdsBindDataPortOutput
    unref(): void
    static name: string
}
export class MessageWdsBindMuxDataPortInput {
    /* Methods of Qmi.MessageWdsBindMuxDataPortInput */
    get_client_type(): [ /* returnType */ boolean, /* value_client_type */ WdsClientType ]
    get_endpoint_info(): [ /* returnType */ boolean, /* value_endpoint_info_endpoint_type */ DataEndpointType, /* value_endpoint_info_interface_number */ number ]
    get_mux_id(): [ /* returnType */ boolean, /* value_mux_id */ number ]
    ref(): MessageWdsBindMuxDataPortInput
    set_client_type(value_client_type: WdsClientType): boolean
    set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean
    set_mux_id(value_mux_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsBindMuxDataPortInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsBindMuxDataPortInput
}
export class MessageWdsBindMuxDataPortOutput {
    /* Methods of Qmi.MessageWdsBindMuxDataPortOutput */
    get_result(): boolean
    ref(): MessageWdsBindMuxDataPortOutput
    unref(): void
    static name: string
}
export class MessageWdsCreateProfileInput {
    /* Methods of Qmi.MessageWdsCreateProfileInput */
    get_apn_disabled_flag(): [ /* returnType */ boolean, /* value_apn_disabled_flag */ boolean ]
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication ]
    get_gprs_minimum_qos(): [ /* returnType */ boolean, /* value_gprs_minimum_qos_precedence_class */ number, /* value_gprs_minimum_qos_delay_class */ number, /* value_gprs_minimum_qos_reliability_class */ number, /* value_gprs_minimum_qos_peak_throughput_class */ number, /* value_gprs_minimum_qos_mean_throughput_class */ number ]
    get_gprs_requested_qos(): [ /* returnType */ boolean, /* value_gprs_requested_qos_precedence_class */ number, /* value_gprs_requested_qos_delay_class */ number, /* value_gprs_requested_qos_reliability_class */ number, /* value_gprs_requested_qos_peak_throughput_class */ number, /* value_gprs_requested_qos_mean_throughput_class */ number ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ boolean ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number ]
    get_ipv6_address_preference(): [ /* returnType */ boolean, /* value_ipv6_address_preference_address */ number[] ]
    get_ipv6_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address_preference */ number[] ]
    get_ipv6_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address_preference */ number[] ]
    get_lte_qos_parameters(): [ /* returnType */ boolean, /* value_lte_qos_parameters_qos_class_identifier */ WdsQosClassIdentifier, /* value_lte_qos_parameters_guaranteed_downlink_bitrate */ number, /* value_lte_qos_parameters_max_downlink_bitrate */ number, /* value_lte_qos_parameters_guaranteed_uplink_bitrate */ number, /* value_lte_qos_parameters_max_uplink_bitrate */ number ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string ]
    get_pcscf_address_using_dhcp(): [ /* returnType */ boolean, /* value_pcscf_address_using_dhcp */ boolean ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ boolean ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number ]
    get_pdp_context_primary_id(): [ /* returnType */ boolean, /* value_pdp_context_primary_id */ number ]
    get_pdp_context_secondary_flag(): [ /* returnType */ boolean, /* value_pdp_context_secondary_flag */ boolean ]
    get_pdp_data_compression_type(): [ /* returnType */ boolean, /* value_pdp_data_compression_type */ WdsPdpDataCompressionType ]
    get_pdp_header_compression_type(): [ /* returnType */ boolean, /* value_pdp_header_compression_type */ WdsPdpHeaderCompressionType ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string ]
    get_profile_type(): [ /* returnType */ boolean, /* value_profile_type */ WdsProfileType ]
    get_roaming_disallowed_flag(): [ /* returnType */ boolean, /* value_roaming_disallowed_flag */ boolean ]
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number ]
    get_umts_minimum_qos(): [ /* returnType */ boolean, /* value_umts_minimum_qos_traffic_class */ WdsTrafficClass, /* value_umts_minimum_qos_max_uplink_bitrate */ number, /* value_umts_minimum_qos_max_downlink_bitrate */ number, /* value_umts_minimum_qos_guaranteed_uplink_bitrate */ number, /* value_umts_minimum_qos_guaranteed_downlink_bitrate */ number, /* value_umts_minimum_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_minimum_qos_maximum_sdu_size */ number, /* value_umts_minimum_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_minimum_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_minimum_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_minimum_qos_transfer_delay */ number, /* value_umts_minimum_qos_traffic_handling_priority */ number ]
    get_umts_minimum_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass, /* value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication */ number ]
    get_umts_requested_qos(): [ /* returnType */ boolean, /* value_umts_requested_qos_traffic_class */ WdsTrafficClass, /* value_umts_requested_qos_max_uplink_bitrate */ number, /* value_umts_requested_qos_max_downlink_bitrate */ number, /* value_umts_requested_qos_guaranteed_uplink_bitrate */ number, /* value_umts_requested_qos_guaranteed_downlink_bitrate */ number, /* value_umts_requested_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_requested_qos_maximum_sdu_size */ number, /* value_umts_requested_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_requested_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_requested_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_requested_qos_transfer_delay */ number, /* value_umts_requested_qos_traffic_handling_priority */ number ]
    get_umts_requested_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass, /* value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size */ number, /* value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_requested_qos_with_signaling_indication_flag_transfer_delay */ number, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority */ number, /* value_umts_requested_qos_with_signaling_indication_flag_signaling_indication */ number ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string ]
    ref(): MessageWdsCreateProfileInput
    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean
    set_apn_name(value_apn_name: string): boolean
    set_authentication(value_authentication: WdsAuthentication): boolean
    set_gprs_minimum_qos(value_gprs_minimum_qos_precedence_class: number, value_gprs_minimum_qos_delay_class: number, value_gprs_minimum_qos_reliability_class: number, value_gprs_minimum_qos_peak_throughput_class: number, value_gprs_minimum_qos_mean_throughput_class: number): boolean
    set_gprs_requested_qos(value_gprs_requested_qos_precedence_class: number, value_gprs_requested_qos_delay_class: number, value_gprs_requested_qos_reliability_class: number, value_gprs_requested_qos_peak_throughput_class: number, value_gprs_requested_qos_mean_throughput_class: number): boolean
    set_imcn_flag(value_imcn_flag: boolean): boolean
    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean
    set_ipv6_address_preference(value_ipv6_address_preference_address: number[]): boolean
    set_ipv6_primary_dns_address_preference(value_ipv6_primary_dns_address_preference: number[]): boolean
    set_ipv6_secondary_dns_address_preference(value_ipv6_secondary_dns_address_preference: number[]): boolean
    set_lte_qos_parameters(value_lte_qos_parameters_qos_class_identifier: WdsQosClassIdentifier, value_lte_qos_parameters_guaranteed_downlink_bitrate: number, value_lte_qos_parameters_max_downlink_bitrate: number, value_lte_qos_parameters_guaranteed_uplink_bitrate: number, value_lte_qos_parameters_max_uplink_bitrate: number): boolean
    set_password(value_password: string): boolean
    set_pcscf_address_using_dhcp(value_pcscf_address_using_dhcp: boolean): boolean
    set_pcscf_address_using_pco(value_pcscf_address_using_pco: boolean): boolean
    set_pdp_context_number(value_pdp_context_number: number): boolean
    set_pdp_context_primary_id(value_pdp_context_primary_id: number): boolean
    set_pdp_context_secondary_flag(value_pdp_context_secondary_flag: boolean): boolean
    set_pdp_data_compression_type(value_pdp_data_compression_type: WdsPdpDataCompressionType): boolean
    set_pdp_header_compression_type(value_pdp_header_compression_type: WdsPdpHeaderCompressionType): boolean
    set_pdp_type(value_pdp_type: WdsPdpType): boolean
    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean
    set_profile_name(value_profile_name: string): boolean
    set_profile_type(value_profile_type: WdsProfileType): boolean
    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean
    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean
    set_umts_minimum_qos(value_umts_minimum_qos_traffic_class: WdsTrafficClass, value_umts_minimum_qos_max_uplink_bitrate: number, value_umts_minimum_qos_max_downlink_bitrate: number, value_umts_minimum_qos_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_maximum_sdu_size: number, value_umts_minimum_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_transfer_delay: number, value_umts_minimum_qos_traffic_handling_priority: number): boolean
    set_umts_minimum_qos_with_signaling_indication_flag(value_umts_minimum_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication: number): boolean
    set_umts_requested_qos(value_umts_requested_qos_traffic_class: WdsTrafficClass, value_umts_requested_qos_max_uplink_bitrate: number, value_umts_requested_qos_max_downlink_bitrate: number, value_umts_requested_qos_guaranteed_uplink_bitrate: number, value_umts_requested_qos_guaranteed_downlink_bitrate: number, value_umts_requested_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_maximum_sdu_size: number, value_umts_requested_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_transfer_delay: number, value_umts_requested_qos_traffic_handling_priority: number): boolean
    set_umts_requested_qos_with_signaling_indication_flag(value_umts_requested_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_requested_qos_with_signaling_indication_flag_signaling_indication: number): boolean
    set_username(value_username: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsCreateProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsCreateProfileInput
}
export class MessageWdsCreateProfileOutput {
    /* Methods of Qmi.MessageWdsCreateProfileOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError ]
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType, /* value_profile_identifier_profile_index */ number ]
    get_result(): boolean
    ref(): MessageWdsCreateProfileOutput
    unref(): void
    static name: string
}
export class MessageWdsDeleteProfileInput {
    /* Methods of Qmi.MessageWdsDeleteProfileInput */
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType, /* value_profile_identifier_profile_index */ number ]
    ref(): MessageWdsDeleteProfileInput
    set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsDeleteProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsDeleteProfileInput
}
export class MessageWdsDeleteProfileOutput {
    /* Methods of Qmi.MessageWdsDeleteProfileOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError ]
    get_result(): boolean
    ref(): MessageWdsDeleteProfileOutput
    unref(): void
    static name: string
}
export class MessageWdsGetAutoconnectSettingsOutput {
    /* Methods of Qmi.MessageWdsGetAutoconnectSettingsOutput */
    get_result(): boolean
    get_roaming(): [ /* returnType */ boolean, /* value_roaming */ WdsAutoconnectSettingRoaming ]
    get_status(): [ /* returnType */ boolean, /* value_status */ WdsAutoconnectSetting ]
    ref(): MessageWdsGetAutoconnectSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetChannelRatesOutput {
    /* Methods of Qmi.MessageWdsGetChannelRatesOutput */
    get_channel_rates(): [ /* returnType */ boolean, /* value_channel_rates_channel_tx_rate_bps */ number, /* value_channel_rates_channel_rx_rate_bps */ number, /* value_channel_rates_max_channel_tx_rate_bps */ number, /* value_channel_rates_max_channel_rx_rate_bps */ number ]
    get_result(): boolean
    ref(): MessageWdsGetChannelRatesOutput
    unref(): void
    static name: string
}
export class MessageWdsGetCurrentDataBearerTechnologyOutput {
    /* Methods of Qmi.MessageWdsGetCurrentDataBearerTechnologyOutput */
    get_current(): [ /* returnType */ boolean, /* value_current_network_type */ WdsNetworkType, /* value_current_rat_mask */ number, /* value_current_so_mask */ number ]
    get_last(): [ /* returnType */ boolean, /* value_last_network_type */ WdsNetworkType, /* value_last_rat_mask */ number, /* value_last_so_mask */ number ]
    get_result(): boolean
    ref(): MessageWdsGetCurrentDataBearerTechnologyOutput
    unref(): void
    static name: string
}
export class MessageWdsGetCurrentSettingsInput {
    /* Methods of Qmi.MessageWdsGetCurrentSettingsInput */
    get_requested_settings(): [ /* returnType */ boolean, /* value_requested_settings */ WdsGetCurrentSettingsRequestedSettings ]
    ref(): MessageWdsGetCurrentSettingsInput
    set_requested_settings(value_requested_settings: WdsGetCurrentSettingsRequestedSettings): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetCurrentSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetCurrentSettingsInput
}
export class MessageWdsGetCurrentSettingsOutput {
    /* Methods of Qmi.MessageWdsGetCurrentSettingsOutput */
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication ]
    get_domain_name_list(): [ /* returnType */ boolean, /* value_domain_name_list */ string[] ]
    get_extended_technology_preference(): [ /* returnType */ boolean, /* value_extended_technology_preference */ WdsExtendedTechnologyPreference ]
    get_gprs_granted_qos(): [ /* returnType */ boolean, /* value_gprs_granted_qos_precedence_class */ number, /* value_gprs_granted_qos_delay_class */ number, /* value_gprs_granted_qos_reliability_class */ number, /* value_gprs_granted_qos_peak_throughput_class */ number, /* value_gprs_granted_qos_mean_throughput_class */ number ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ number ]
    get_ip_family(): [ /* returnType */ boolean, /* value_ip_family */ WdsIpFamily ]
    get_ipv4_address(): [ /* returnType */ boolean, /* value_ipv4_address */ number ]
    get_ipv4_gateway_address(): [ /* returnType */ boolean, /* value_ipv4_gateway_address */ number ]
    get_ipv4_gateway_subnet_mask(): [ /* returnType */ boolean, /* value_ipv4_gateway_subnet_mask */ number ]
    get_ipv6_address(): [ /* returnType */ boolean, /* value_ipv6_address_address */ number[], /* value_ipv6_address_prefix_length */ number ]
    get_ipv6_gateway_address(): [ /* returnType */ boolean, /* value_ipv6_gateway_address_address */ number[], /* value_ipv6_gateway_address_prefix_length */ number ]
    get_ipv6_primary_dns_address(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address */ number[] ]
    get_ipv6_secondary_dns_address(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address */ number[] ]
    get_mtu(): [ /* returnType */ boolean, /* value_mtu */ number ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ number ]
    get_pcscf_domain_name_list(): [ /* returnType */ boolean, /* value_pcscf_domain_name_list */ string[] ]
    get_pcscf_server_address_list(): [ /* returnType */ boolean, /* value_pcscf_server_address_list */ number[] ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number ]
    get_profile_id(): [ /* returnType */ boolean, /* value_profile_id_profile_type */ WdsProfileType, /* value_profile_id_profile_index */ number ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string ]
    get_result(): boolean
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number ]
    get_umts_granted_qos(): [ /* returnType */ boolean, /* value_umts_granted_qos_traffic_class */ WdsTrafficClass, /* value_umts_granted_qos_max_uplink_bitrate */ number, /* value_umts_granted_qos_max_downlink_bitrate */ number, /* value_umts_granted_qos_guaranteed_uplink_bitrate */ number, /* value_umts_granted_qos_guaranteed_downlink_bitrate */ number, /* value_umts_granted_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_granted_qos_maximum_sdu_size */ number, /* value_umts_granted_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_granted_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_granted_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_granted_qos_transfer_delay */ number, /* value_umts_granted_qos_traffic_handling_priority */ number ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string ]
    ref(): MessageWdsGetCurrentSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDataBearerTechnologyOutput {
    /* Methods of Qmi.MessageWdsGetDataBearerTechnologyOutput */
    get_current(): [ /* returnType */ boolean, /* value_current */ WdsDataBearerTechnology ]
    get_last(): [ /* returnType */ boolean, /* value_last */ WdsDataBearerTechnology ]
    get_result(): boolean
    ref(): MessageWdsGetDataBearerTechnologyOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDefaultProfileNumberInput {
    /* Methods of Qmi.MessageWdsGetDefaultProfileNumberInput */
    get_profile_type(): [ /* returnType */ boolean, /* value_profile_type_type */ WdsProfileType, /* value_profile_type_family */ WdsProfileFamily ]
    ref(): MessageWdsGetDefaultProfileNumberInput
    set_profile_type(value_profile_type_type: WdsProfileType, value_profile_type_family: WdsProfileFamily): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetDefaultProfileNumberInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetDefaultProfileNumberInput
}
export class MessageWdsGetDefaultProfileNumberOutput {
    /* Methods of Qmi.MessageWdsGetDefaultProfileNumberOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError ]
    get_index(): [ /* returnType */ boolean, /* value_index */ number ]
    get_result(): boolean
    ref(): MessageWdsGetDefaultProfileNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDefaultSettingsInput {
    /* Methods of Qmi.MessageWdsGetDefaultSettingsInput */
    get_profile_type(): [ /* returnType */ boolean, /* value_profile_type */ WdsProfileType ]
    ref(): MessageWdsGetDefaultSettingsInput
    set_profile_type(value_profile_type: WdsProfileType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetDefaultSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetDefaultSettingsInput
}
export class MessageWdsGetDefaultSettingsOutput {
    /* Methods of Qmi.MessageWdsGetDefaultSettingsOutput */
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication ]
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError ]
    get_gprs_minimum_qos(): [ /* returnType */ boolean, /* value_gprs_minimum_qos_precedence_class */ number, /* value_gprs_minimum_qos_delay_class */ number, /* value_gprs_minimum_qos_reliability_class */ number, /* value_gprs_minimum_qos_peak_throughput_class */ number, /* value_gprs_minimum_qos_mean_throughput_class */ number ]
    get_gprs_requested_qos(): [ /* returnType */ boolean, /* value_gprs_requested_qos_precedence_class */ number, /* value_gprs_requested_qos_delay_class */ number, /* value_gprs_requested_qos_reliability_class */ number, /* value_gprs_requested_qos_peak_throughput_class */ number, /* value_gprs_requested_qos_mean_throughput_class */ number ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ boolean ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number ]
    get_ipv6_address_preference(): [ /* returnType */ boolean, /* value_ipv6_address_preference_address */ number[] ]
    get_ipv6_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address_preference */ number[] ]
    get_ipv6_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address_preference */ number[] ]
    get_lte_qos_parameters(): [ /* returnType */ boolean, /* value_lte_qos_parameters_qos_class_identifier */ WdsQosClassIdentifier, /* value_lte_qos_parameters_guaranteed_downlink_bitrate */ number, /* value_lte_qos_parameters_max_downlink_bitrate */ number, /* value_lte_qos_parameters_guaranteed_uplink_bitrate */ number, /* value_lte_qos_parameters_max_uplink_bitrate */ number ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string ]
    get_pcscf_address_using_dhcp(): [ /* returnType */ boolean, /* value_pcscf_address_using_dhcp */ boolean ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ boolean ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number ]
    get_pdp_context_primary_id(): [ /* returnType */ boolean, /* value_pdp_context_primary_id */ number ]
    get_pdp_context_secondary_flag(): [ /* returnType */ boolean, /* value_pdp_context_secondary_flag */ boolean ]
    get_pdp_data_compression_type(): [ /* returnType */ boolean, /* value_pdp_data_compression_type */ WdsPdpDataCompressionType ]
    get_pdp_header_compression_type(): [ /* returnType */ boolean, /* value_pdp_header_compression_type */ WdsPdpHeaderCompressionType ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string ]
    get_result(): boolean
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number ]
    get_umts_minimum_qos(): [ /* returnType */ boolean, /* value_umts_minimum_qos_traffic_class */ WdsTrafficClass, /* value_umts_minimum_qos_max_uplink_bitrate */ number, /* value_umts_minimum_qos_max_downlink_bitrate */ number, /* value_umts_minimum_qos_guaranteed_uplink_bitrate */ number, /* value_umts_minimum_qos_guaranteed_downlink_bitrate */ number, /* value_umts_minimum_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_minimum_qos_maximum_sdu_size */ number, /* value_umts_minimum_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_minimum_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_minimum_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_minimum_qos_transfer_delay */ number, /* value_umts_minimum_qos_traffic_handling_priority */ number ]
    get_umts_minimum_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass, /* value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication */ number ]
    get_umts_requested_qos(): [ /* returnType */ boolean, /* value_umts_requested_qos_traffic_class */ WdsTrafficClass, /* value_umts_requested_qos_max_uplink_bitrate */ number, /* value_umts_requested_qos_max_downlink_bitrate */ number, /* value_umts_requested_qos_guaranteed_uplink_bitrate */ number, /* value_umts_requested_qos_guaranteed_downlink_bitrate */ number, /* value_umts_requested_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_requested_qos_maximum_sdu_size */ number, /* value_umts_requested_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_requested_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_requested_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_requested_qos_transfer_delay */ number, /* value_umts_requested_qos_traffic_handling_priority */ number ]
    get_umts_requested_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass, /* value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size */ number, /* value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_requested_qos_with_signaling_indication_flag_transfer_delay */ number, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority */ number, /* value_umts_requested_qos_with_signaling_indication_flag_signaling_indication */ number ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string ]
    ref(): MessageWdsGetDefaultSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetDormancyStatusOutput {
    /* Methods of Qmi.MessageWdsGetDormancyStatusOutput */
    get_dormancy_status(): [ /* returnType */ boolean, /* value_dormancy_status */ WdsDormancyStatus ]
    get_result(): boolean
    ref(): MessageWdsGetDormancyStatusOutput
    unref(): void
    static name: string
}
export class MessageWdsGetLteAttachParametersOutput {
    /* Methods of Qmi.MessageWdsGetLteAttachParametersOutput */
    get_apn(): [ /* returnType */ boolean, /* value_apn */ string ]
    get_ip_support_type(): [ /* returnType */ boolean, /* value_ip_support_type */ WdsIpSupportType ]
    get_ota_attach_performed(): [ /* returnType */ boolean, /* value_ota_attach_performed */ boolean ]
    get_result(): boolean
    ref(): MessageWdsGetLteAttachParametersOutput
    unref(): void
    static name: string
}
export class MessageWdsGetLteAttachPdnListOutput {
    /* Methods of Qmi.MessageWdsGetLteAttachPdnListOutput */
    get_current_list(): [ /* returnType */ boolean, /* value_current_list */ number[] ]
    get_pending_list(): [ /* returnType */ boolean, /* value_pending_list */ number[] ]
    get_result(): boolean
    ref(): MessageWdsGetLteAttachPdnListOutput
    unref(): void
    static name: string
}
export class MessageWdsGetMaxLteAttachPdnNumberOutput {
    /* Methods of Qmi.MessageWdsGetMaxLteAttachPdnNumberOutput */
    get_info(): [ /* returnType */ boolean, /* value_info */ number ]
    get_result(): boolean
    ref(): MessageWdsGetMaxLteAttachPdnNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPacketServiceStatusOutput {
    /* Methods of Qmi.MessageWdsGetPacketServiceStatusOutput */
    get_connection_status(): [ /* returnType */ boolean, /* value_connection_status */ WdsConnectionStatus ]
    get_result(): boolean
    ref(): MessageWdsGetPacketServiceStatusOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPacketStatisticsInput {
    /* Methods of Qmi.MessageWdsGetPacketStatisticsInput */
    get_mask(): [ /* returnType */ boolean, /* value_mask */ WdsPacketStatisticsMaskFlag ]
    ref(): MessageWdsGetPacketStatisticsInput
    set_mask(value_mask: WdsPacketStatisticsMaskFlag): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetPacketStatisticsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetPacketStatisticsInput
}
export class MessageWdsGetPacketStatisticsOutput {
    /* Methods of Qmi.MessageWdsGetPacketStatisticsOutput */
    get_last_call_rx_bytes_ok(): [ /* returnType */ boolean, /* value_last_call_rx_bytes_ok */ number ]
    get_last_call_tx_bytes_ok(): [ /* returnType */ boolean, /* value_last_call_tx_bytes_ok */ number ]
    get_result(): boolean
    get_rx_bytes_ok(): [ /* returnType */ boolean, /* value_rx_bytes_ok */ number ]
    get_rx_overflows(): [ /* returnType */ boolean, /* value_rx_overflows */ number ]
    get_rx_packets_dropped(): [ /* returnType */ boolean, /* value_rx_packets_dropped */ number ]
    get_rx_packets_error(): [ /* returnType */ boolean, /* value_rx_packets_error */ number ]
    get_rx_packets_ok(): [ /* returnType */ boolean, /* value_rx_packets_ok */ number ]
    get_tx_bytes_ok(): [ /* returnType */ boolean, /* value_tx_bytes_ok */ number ]
    get_tx_overflows(): [ /* returnType */ boolean, /* value_tx_overflows */ number ]
    get_tx_packets_dropped(): [ /* returnType */ boolean, /* value_tx_packets_dropped */ number ]
    get_tx_packets_error(): [ /* returnType */ boolean, /* value_tx_packets_error */ number ]
    get_tx_packets_ok(): [ /* returnType */ boolean, /* value_tx_packets_ok */ number ]
    ref(): MessageWdsGetPacketStatisticsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPdnThrottleInfoInput {
    /* Methods of Qmi.MessageWdsGetPdnThrottleInfoInput */
    get_network_type(): [ /* returnType */ boolean, /* value_network_type */ WdsDataSystemNetworkType ]
    ref(): MessageWdsGetPdnThrottleInfoInput
    set_network_type(value_network_type: WdsDataSystemNetworkType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetPdnThrottleInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetPdnThrottleInfoInput
}
export class MessageWdsGetPdnThrottleInfoOutput {
    /* Methods of Qmi.MessageWdsGetPdnThrottleInfoOutput */
    get_info(): [ /* returnType */ boolean, /* value_info */ MessageWdsGetPdnThrottleInfoOutputInfoElement[] ]
    get_result(): boolean
    ref(): MessageWdsGetPdnThrottleInfoOutput
    unref(): void
    static name: string
}
export class MessageWdsGetPdnThrottleInfoOutputInfoElement {
    /* Fields of Qmi.MessageWdsGetPdnThrottleInfoOutputInfoElement */
    ipv4_throttled: boolean
    ipv6_throttled: boolean
    ipv4_throttle_time_left_ms: number
    ipv6_throttle_time_left_ms: number
    apn: string
    static name: string
}
export class MessageWdsGetProfileListInput {
    /* Methods of Qmi.MessageWdsGetProfileListInput */
    get_profile_type(): [ /* returnType */ boolean, /* value_profile_type */ WdsProfileType ]
    ref(): MessageWdsGetProfileListInput
    set_profile_type(value_profile_type: WdsProfileType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetProfileListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetProfileListInput
}
export class MessageWdsGetProfileListOutput {
    /* Methods of Qmi.MessageWdsGetProfileListOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError ]
    get_profile_list(): [ /* returnType */ boolean, /* value_profile_list */ MessageWdsGetProfileListOutputProfileListProfile[] ]
    get_result(): boolean
    ref(): MessageWdsGetProfileListOutput
    unref(): void
    static name: string
}
export class MessageWdsGetProfileListOutputProfileListProfile {
    /* Fields of Qmi.MessageWdsGetProfileListOutputProfileListProfile */
    profile_type: WdsProfileType
    profile_index: number
    profile_name: string
    static name: string
}
export class MessageWdsGetProfileSettingsInput {
    /* Methods of Qmi.MessageWdsGetProfileSettingsInput */
    get_profile_id(): [ /* returnType */ boolean, /* value_profile_id_profile_type */ WdsProfileType, /* value_profile_id_profile_index */ number ]
    ref(): MessageWdsGetProfileSettingsInput
    set_profile_id(value_profile_id_profile_type: WdsProfileType, value_profile_id_profile_index: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetProfileSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetProfileSettingsInput
}
export class MessageWdsGetProfileSettingsOutput {
    /* Methods of Qmi.MessageWdsGetProfileSettingsOutput */
    get_apn_disabled_flag(): [ /* returnType */ boolean, /* value_apn_disabled_flag */ boolean ]
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication ]
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError ]
    get_gprs_minimum_qos(): [ /* returnType */ boolean, /* value_gprs_minimum_qos_precedence_class */ number, /* value_gprs_minimum_qos_delay_class */ number, /* value_gprs_minimum_qos_reliability_class */ number, /* value_gprs_minimum_qos_peak_throughput_class */ number, /* value_gprs_minimum_qos_mean_throughput_class */ number ]
    get_gprs_requested_qos(): [ /* returnType */ boolean, /* value_gprs_requested_qos_precedence_class */ number, /* value_gprs_requested_qos_delay_class */ number, /* value_gprs_requested_qos_reliability_class */ number, /* value_gprs_requested_qos_peak_throughput_class */ number, /* value_gprs_requested_qos_mean_throughput_class */ number ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ boolean ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number ]
    get_ipv6_address_preference(): [ /* returnType */ boolean, /* value_ipv6_address_preference_address */ number[] ]
    get_ipv6_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address_preference */ number[] ]
    get_ipv6_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address_preference */ number[] ]
    get_lte_qos_parameters(): [ /* returnType */ boolean, /* value_lte_qos_parameters_qos_class_identifier */ WdsQosClassIdentifier, /* value_lte_qos_parameters_guaranteed_downlink_bitrate */ number, /* value_lte_qos_parameters_max_downlink_bitrate */ number, /* value_lte_qos_parameters_guaranteed_uplink_bitrate */ number, /* value_lte_qos_parameters_max_uplink_bitrate */ number ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string ]
    get_pcscf_address_using_dhcp(): [ /* returnType */ boolean, /* value_pcscf_address_using_dhcp */ boolean ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ boolean ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number ]
    get_pdp_context_primary_id(): [ /* returnType */ boolean, /* value_pdp_context_primary_id */ number ]
    get_pdp_context_secondary_flag(): [ /* returnType */ boolean, /* value_pdp_context_secondary_flag */ boolean ]
    get_pdp_data_compression_type(): [ /* returnType */ boolean, /* value_pdp_data_compression_type */ WdsPdpDataCompressionType ]
    get_pdp_header_compression_type(): [ /* returnType */ boolean, /* value_pdp_header_compression_type */ WdsPdpHeaderCompressionType ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string ]
    get_result(): boolean
    get_roaming_disallowed_flag(): [ /* returnType */ boolean, /* value_roaming_disallowed_flag */ boolean ]
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number ]
    get_umts_minimum_qos(): [ /* returnType */ boolean, /* value_umts_minimum_qos_traffic_class */ WdsTrafficClass, /* value_umts_minimum_qos_max_uplink_bitrate */ number, /* value_umts_minimum_qos_max_downlink_bitrate */ number, /* value_umts_minimum_qos_guaranteed_uplink_bitrate */ number, /* value_umts_minimum_qos_guaranteed_downlink_bitrate */ number, /* value_umts_minimum_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_minimum_qos_maximum_sdu_size */ number, /* value_umts_minimum_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_minimum_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_minimum_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_minimum_qos_transfer_delay */ number, /* value_umts_minimum_qos_traffic_handling_priority */ number ]
    get_umts_minimum_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass, /* value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication */ number ]
    get_umts_requested_qos(): [ /* returnType */ boolean, /* value_umts_requested_qos_traffic_class */ WdsTrafficClass, /* value_umts_requested_qos_max_uplink_bitrate */ number, /* value_umts_requested_qos_max_downlink_bitrate */ number, /* value_umts_requested_qos_guaranteed_uplink_bitrate */ number, /* value_umts_requested_qos_guaranteed_downlink_bitrate */ number, /* value_umts_requested_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_requested_qos_maximum_sdu_size */ number, /* value_umts_requested_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_requested_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_requested_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_requested_qos_transfer_delay */ number, /* value_umts_requested_qos_traffic_handling_priority */ number ]
    get_umts_requested_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass, /* value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size */ number, /* value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_requested_qos_with_signaling_indication_flag_transfer_delay */ number, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority */ number, /* value_umts_requested_qos_with_signaling_indication_flag_signaling_indication */ number ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string ]
    ref(): MessageWdsGetProfileSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsGetSupportedMessagesOutput {
    /* Methods of Qmi.MessageWdsGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array ]
    get_result(): boolean
    ref(): MessageWdsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageWdsGoActiveOutput {
    /* Methods of Qmi.MessageWdsGoActiveOutput */
    get_result(): boolean
    ref(): MessageWdsGoActiveOutput
    unref(): void
    static name: string
}
export class MessageWdsGoDormantOutput {
    /* Methods of Qmi.MessageWdsGoDormantOutput */
    get_result(): boolean
    ref(): MessageWdsGoDormantOutput
    unref(): void
    static name: string
}
export class MessageWdsModifyProfileInput {
    /* Methods of Qmi.MessageWdsModifyProfileInput */
    get_apn_disabled_flag(): [ /* returnType */ boolean, /* value_apn_disabled_flag */ boolean ]
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication ]
    get_gprs_minimum_qos(): [ /* returnType */ boolean, /* value_gprs_minimum_qos_precedence_class */ number, /* value_gprs_minimum_qos_delay_class */ number, /* value_gprs_minimum_qos_reliability_class */ number, /* value_gprs_minimum_qos_peak_throughput_class */ number, /* value_gprs_minimum_qos_mean_throughput_class */ number ]
    get_gprs_requested_qos(): [ /* returnType */ boolean, /* value_gprs_requested_qos_precedence_class */ number, /* value_gprs_requested_qos_delay_class */ number, /* value_gprs_requested_qos_reliability_class */ number, /* value_gprs_requested_qos_peak_throughput_class */ number, /* value_gprs_requested_qos_mean_throughput_class */ number ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ boolean ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number ]
    get_ipv6_address_preference(): [ /* returnType */ boolean, /* value_ipv6_address_preference_address */ number[] ]
    get_ipv6_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address_preference */ number[] ]
    get_ipv6_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address_preference */ number[] ]
    get_lte_qos_parameters(): [ /* returnType */ boolean, /* value_lte_qos_parameters_qos_class_identifier */ WdsQosClassIdentifier, /* value_lte_qos_parameters_guaranteed_downlink_bitrate */ number, /* value_lte_qos_parameters_max_downlink_bitrate */ number, /* value_lte_qos_parameters_guaranteed_uplink_bitrate */ number, /* value_lte_qos_parameters_max_uplink_bitrate */ number ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string ]
    get_pcscf_address_using_dhcp(): [ /* returnType */ boolean, /* value_pcscf_address_using_dhcp */ boolean ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ boolean ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number ]
    get_pdp_context_primary_id(): [ /* returnType */ boolean, /* value_pdp_context_primary_id */ number ]
    get_pdp_context_secondary_flag(): [ /* returnType */ boolean, /* value_pdp_context_secondary_flag */ boolean ]
    get_pdp_data_compression_type(): [ /* returnType */ boolean, /* value_pdp_data_compression_type */ WdsPdpDataCompressionType ]
    get_pdp_header_compression_type(): [ /* returnType */ boolean, /* value_pdp_header_compression_type */ WdsPdpHeaderCompressionType ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number ]
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType, /* value_profile_identifier_profile_index */ number ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string ]
    get_roaming_disallowed_flag(): [ /* returnType */ boolean, /* value_roaming_disallowed_flag */ boolean ]
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number ]
    get_umts_minimum_qos(): [ /* returnType */ boolean, /* value_umts_minimum_qos_traffic_class */ WdsTrafficClass, /* value_umts_minimum_qos_max_uplink_bitrate */ number, /* value_umts_minimum_qos_max_downlink_bitrate */ number, /* value_umts_minimum_qos_guaranteed_uplink_bitrate */ number, /* value_umts_minimum_qos_guaranteed_downlink_bitrate */ number, /* value_umts_minimum_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_minimum_qos_maximum_sdu_size */ number, /* value_umts_minimum_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_minimum_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_minimum_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_minimum_qos_transfer_delay */ number, /* value_umts_minimum_qos_traffic_handling_priority */ number ]
    get_umts_minimum_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass, /* value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority */ number, /* value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication */ number ]
    get_umts_requested_qos(): [ /* returnType */ boolean, /* value_umts_requested_qos_traffic_class */ WdsTrafficClass, /* value_umts_requested_qos_max_uplink_bitrate */ number, /* value_umts_requested_qos_max_downlink_bitrate */ number, /* value_umts_requested_qos_guaranteed_uplink_bitrate */ number, /* value_umts_requested_qos_guaranteed_downlink_bitrate */ number, /* value_umts_requested_qos_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_requested_qos_maximum_sdu_size */ number, /* value_umts_requested_qos_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_requested_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_requested_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_requested_qos_transfer_delay */ number, /* value_umts_requested_qos_traffic_handling_priority */ number ]
    get_umts_requested_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass, /* value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number, /* value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder, /* value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size */ number, /* value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio, /* value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio, /* value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery, /* value_umts_requested_qos_with_signaling_indication_flag_transfer_delay */ number, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority */ number, /* value_umts_requested_qos_with_signaling_indication_flag_signaling_indication */ number ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string ]
    ref(): MessageWdsModifyProfileInput
    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean
    set_apn_name(value_apn_name: string): boolean
    set_authentication(value_authentication: WdsAuthentication): boolean
    set_gprs_minimum_qos(value_gprs_minimum_qos_precedence_class: number, value_gprs_minimum_qos_delay_class: number, value_gprs_minimum_qos_reliability_class: number, value_gprs_minimum_qos_peak_throughput_class: number, value_gprs_minimum_qos_mean_throughput_class: number): boolean
    set_gprs_requested_qos(value_gprs_requested_qos_precedence_class: number, value_gprs_requested_qos_delay_class: number, value_gprs_requested_qos_reliability_class: number, value_gprs_requested_qos_peak_throughput_class: number, value_gprs_requested_qos_mean_throughput_class: number): boolean
    set_imcn_flag(value_imcn_flag: boolean): boolean
    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean
    set_ipv6_address_preference(value_ipv6_address_preference_address: number[]): boolean
    set_ipv6_primary_dns_address_preference(value_ipv6_primary_dns_address_preference: number[]): boolean
    set_ipv6_secondary_dns_address_preference(value_ipv6_secondary_dns_address_preference: number[]): boolean
    set_lte_qos_parameters(value_lte_qos_parameters_qos_class_identifier: WdsQosClassIdentifier, value_lte_qos_parameters_guaranteed_downlink_bitrate: number, value_lte_qos_parameters_max_downlink_bitrate: number, value_lte_qos_parameters_guaranteed_uplink_bitrate: number, value_lte_qos_parameters_max_uplink_bitrate: number): boolean
    set_password(value_password: string): boolean
    set_pcscf_address_using_dhcp(value_pcscf_address_using_dhcp: boolean): boolean
    set_pcscf_address_using_pco(value_pcscf_address_using_pco: boolean): boolean
    set_pdp_context_number(value_pdp_context_number: number): boolean
    set_pdp_context_primary_id(value_pdp_context_primary_id: number): boolean
    set_pdp_context_secondary_flag(value_pdp_context_secondary_flag: boolean): boolean
    set_pdp_data_compression_type(value_pdp_data_compression_type: WdsPdpDataCompressionType): boolean
    set_pdp_header_compression_type(value_pdp_header_compression_type: WdsPdpHeaderCompressionType): boolean
    set_pdp_type(value_pdp_type: WdsPdpType): boolean
    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean
    set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean
    set_profile_name(value_profile_name: string): boolean
    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean
    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean
    set_umts_minimum_qos(value_umts_minimum_qos_traffic_class: WdsTrafficClass, value_umts_minimum_qos_max_uplink_bitrate: number, value_umts_minimum_qos_max_downlink_bitrate: number, value_umts_minimum_qos_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_maximum_sdu_size: number, value_umts_minimum_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_transfer_delay: number, value_umts_minimum_qos_traffic_handling_priority: number): boolean
    set_umts_minimum_qos_with_signaling_indication_flag(value_umts_minimum_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication: number): boolean
    set_umts_requested_qos(value_umts_requested_qos_traffic_class: WdsTrafficClass, value_umts_requested_qos_max_uplink_bitrate: number, value_umts_requested_qos_max_downlink_bitrate: number, value_umts_requested_qos_guaranteed_uplink_bitrate: number, value_umts_requested_qos_guaranteed_downlink_bitrate: number, value_umts_requested_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_maximum_sdu_size: number, value_umts_requested_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_transfer_delay: number, value_umts_requested_qos_traffic_handling_priority: number): boolean
    set_umts_requested_qos_with_signaling_indication_flag(value_umts_requested_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_requested_qos_with_signaling_indication_flag_signaling_indication: number): boolean
    set_username(value_username: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsModifyProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsModifyProfileInput
}
export class MessageWdsModifyProfileOutput {
    /* Methods of Qmi.MessageWdsModifyProfileOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError ]
    get_result(): boolean
    ref(): MessageWdsModifyProfileOutput
    unref(): void
    static name: string
}
export class MessageWdsResetOutput {
    /* Methods of Qmi.MessageWdsResetOutput */
    get_result(): boolean
    ref(): MessageWdsResetOutput
    unref(): void
    static name: string
}
export class MessageWdsSetAutoconnectSettingsInput {
    /* Methods of Qmi.MessageWdsSetAutoconnectSettingsInput */
    get_roaming(): [ /* returnType */ boolean, /* value_roaming */ WdsAutoconnectSettingRoaming ]
    get_status(): [ /* returnType */ boolean, /* value_status */ WdsAutoconnectSetting ]
    ref(): MessageWdsSetAutoconnectSettingsInput
    set_roaming(value_roaming: WdsAutoconnectSettingRoaming): boolean
    set_status(value_status: WdsAutoconnectSetting): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetAutoconnectSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetAutoconnectSettingsInput
}
export class MessageWdsSetAutoconnectSettingsOutput {
    /* Methods of Qmi.MessageWdsSetAutoconnectSettingsOutput */
    get_result(): boolean
    ref(): MessageWdsSetAutoconnectSettingsOutput
    unref(): void
    static name: string
}
export class MessageWdsSetDefaultProfileNumberInput {
    /* Methods of Qmi.MessageWdsSetDefaultProfileNumberInput */
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_type */ WdsProfileType, /* value_profile_identifier_family */ WdsProfileFamily, /* value_profile_identifier_index */ number ]
    ref(): MessageWdsSetDefaultProfileNumberInput
    set_profile_identifier(value_profile_identifier_type: WdsProfileType, value_profile_identifier_family: WdsProfileFamily, value_profile_identifier_index: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetDefaultProfileNumberInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetDefaultProfileNumberInput
}
export class MessageWdsSetDefaultProfileNumberOutput {
    /* Methods of Qmi.MessageWdsSetDefaultProfileNumberOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError ]
    get_result(): boolean
    ref(): MessageWdsSetDefaultProfileNumberOutput
    unref(): void
    static name: string
}
export class MessageWdsSetEventReportInput {
    /* Methods of Qmi.MessageWdsSetEventReportInput */
    get_channel_rate(): [ /* returnType */ boolean, /* value_channel_rate */ boolean ]
    get_current_data_bearer_technology(): [ /* returnType */ boolean, /* value_current_data_bearer_technology */ boolean ]
    get_data_bearer_technology(): [ /* returnType */ boolean, /* value_data_bearer_technology */ boolean ]
    get_data_call_status(): [ /* returnType */ boolean, /* value_data_call_status */ boolean ]
    get_data_systems(): [ /* returnType */ boolean, /* value_data_systems */ boolean ]
    get_dormancy_status(): [ /* returnType */ boolean, /* value_dormancy_status */ boolean ]
    get_evdo_pm_change(): [ /* returnType */ boolean, /* value_evdo_pm_change */ boolean ]
    get_extended_data_bearer_technology(): [ /* returnType */ boolean, /* value_extended_data_bearer_technology */ boolean ]
    get_limited_data_system_status(): [ /* returnType */ boolean, /* value_limited_data_system_status */ boolean ]
    get_mip_status(): [ /* returnType */ boolean, /* value_mip_status */ number ]
    get_pdn_filter_removals(): [ /* returnType */ boolean, /* value_pdn_filter_removals */ boolean ]
    get_preferred_data_system(): [ /* returnType */ boolean, /* value_preferred_data_system */ boolean ]
    get_transfer_statistics(): [ /* returnType */ boolean, /* value_transfer_statistics_interval_seconds */ number, /* value_transfer_statistics_indicators */ WdsSetEventReportTransferStatistics ]
    get_uplink_flow_control(): [ /* returnType */ boolean, /* value_uplink_flow_control */ boolean ]
    ref(): MessageWdsSetEventReportInput
    set_channel_rate(value_channel_rate: boolean): boolean
    set_current_data_bearer_technology(value_current_data_bearer_technology: boolean): boolean
    set_data_bearer_technology(value_data_bearer_technology: boolean): boolean
    set_data_call_status(value_data_call_status: boolean): boolean
    set_data_systems(value_data_systems: boolean): boolean
    set_dormancy_status(value_dormancy_status: boolean): boolean
    set_evdo_pm_change(value_evdo_pm_change: boolean): boolean
    set_extended_data_bearer_technology(value_extended_data_bearer_technology: boolean): boolean
    set_limited_data_system_status(value_limited_data_system_status: boolean): boolean
    set_mip_status(value_mip_status: number): boolean
    set_pdn_filter_removals(value_pdn_filter_removals: boolean): boolean
    set_preferred_data_system(value_preferred_data_system: boolean): boolean
    set_transfer_statistics(value_transfer_statistics_interval_seconds: number, value_transfer_statistics_indicators: WdsSetEventReportTransferStatistics): boolean
    set_uplink_flow_control(value_uplink_flow_control: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetEventReportInput
}
export class MessageWdsSetEventReportOutput {
    /* Methods of Qmi.MessageWdsSetEventReportOutput */
    get_result(): boolean
    ref(): MessageWdsSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageWdsSetIpFamilyInput {
    /* Methods of Qmi.MessageWdsSetIpFamilyInput */
    get_preference(): [ /* returnType */ boolean, /* value_preference */ WdsIpFamily ]
    ref(): MessageWdsSetIpFamilyInput
    set_preference(value_preference: WdsIpFamily): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetIpFamilyInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetIpFamilyInput
}
export class MessageWdsSetIpFamilyOutput {
    /* Methods of Qmi.MessageWdsSetIpFamilyOutput */
    get_result(): boolean
    ref(): MessageWdsSetIpFamilyOutput
    unref(): void
    static name: string
}
export class MessageWdsSetLteAttachPdnListInput {
    /* Methods of Qmi.MessageWdsSetLteAttachPdnListInput */
    get_action(): [ /* returnType */ boolean, /* value_action */ WdsAttachPdnListAction ]
    get_list(): [ /* returnType */ boolean, /* value_list */ number[] ]
    ref(): MessageWdsSetLteAttachPdnListInput
    set_action(value_action: WdsAttachPdnListAction): boolean
    set_list(value_list: number[]): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetLteAttachPdnListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetLteAttachPdnListInput
}
export class MessageWdsSetLteAttachPdnListOutput {
    /* Methods of Qmi.MessageWdsSetLteAttachPdnListOutput */
    get_result(): boolean
    ref(): MessageWdsSetLteAttachPdnListOutput
    unref(): void
    static name: string
}
export class MessageWdsStartNetworkInput {
    /* Methods of Qmi.MessageWdsStartNetworkInput */
    get_apn(): [ /* returnType */ boolean, /* value_apn */ string ]
    get_authentication_preference(): [ /* returnType */ boolean, /* value_authentication_preference */ WdsAuthentication ]
    get_call_type(): [ /* returnType */ boolean, /* value_call_type */ WdsCallType ]
    get_enable_autoconnect(): [ /* returnType */ boolean, /* value_enable_autoconnect */ boolean ]
    get_extended_technology_preference(): [ /* returnType */ boolean, /* value_extended_technology_preference */ WdsExtendedTechnologyPreference ]
    get_ip_family_preference(): [ /* returnType */ boolean, /* value_ip_family_preference */ WdsIpFamily ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string ]
    get_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_primary_dns_address_preference */ number ]
    get_primary_nbns_address_preference(): [ /* returnType */ boolean, /* value_primary_nbns_address_preference */ number ]
    get_profile_index_3gpp(): [ /* returnType */ boolean, /* value_profile_index_3gpp */ number ]
    get_profile_index_3gpp2(): [ /* returnType */ boolean, /* value_profile_index_3gpp2 */ number ]
    get_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_secondary_dns_address_preference */ number ]
    get_secondary_nbns_address_preference(): [ /* returnType */ boolean, /* value_secondary_nbns_address_preference */ number ]
    get_technology_preference(): [ /* returnType */ boolean, /* value_technology_preference */ WdsTechnologyPreference ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string ]
    ref(): MessageWdsStartNetworkInput
    set_apn(value_apn: string): boolean
    set_authentication_preference(value_authentication_preference: WdsAuthentication): boolean
    set_call_type(value_call_type: WdsCallType): boolean
    set_enable_autoconnect(value_enable_autoconnect: boolean): boolean
    set_extended_technology_preference(value_extended_technology_preference: WdsExtendedTechnologyPreference): boolean
    set_ip_family_preference(value_ip_family_preference: WdsIpFamily): boolean
    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean
    set_password(value_password: string): boolean
    set_primary_dns_address_preference(value_primary_dns_address_preference: number): boolean
    set_primary_nbns_address_preference(value_primary_nbns_address_preference: number): boolean
    set_profile_index_3gpp(value_profile_index_3gpp: number): boolean
    set_profile_index_3gpp2(value_profile_index_3gpp2: number): boolean
    set_secondary_dns_address_preference(value_secondary_dns_address_preference: number): boolean
    set_secondary_nbns_address_preference(value_secondary_nbns_address_preference: number): boolean
    set_technology_preference(value_technology_preference: WdsTechnologyPreference): boolean
    set_username(value_username: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsStartNetworkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsStartNetworkInput
}
export class MessageWdsStartNetworkOutput {
    /* Methods of Qmi.MessageWdsStartNetworkOutput */
    get_call_end_reason(): [ /* returnType */ boolean, /* value_call_end_reason */ WdsCallEndReason ]
    get_packet_data_handle(): [ /* returnType */ boolean, /* value_packet_data_handle */ number ]
    get_result(): boolean
    get_verbose_call_end_reason(): [ /* returnType */ boolean, /* value_verbose_call_end_reason_type */ WdsVerboseCallEndReasonType, /* value_verbose_call_end_reason_reason */ number ]
    ref(): MessageWdsStartNetworkOutput
    unref(): void
    static name: string
}
export class MessageWdsStopNetworkInput {
    /* Methods of Qmi.MessageWdsStopNetworkInput */
    get_disable_autoconnect(): [ /* returnType */ boolean, /* value_disable_autoconnect */ boolean ]
    get_packet_data_handle(): [ /* returnType */ boolean, /* value_packet_data_handle */ number ]
    ref(): MessageWdsStopNetworkInput
    set_disable_autoconnect(value_disable_autoconnect: boolean): boolean
    set_packet_data_handle(value_packet_data_handle: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsStopNetworkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsStopNetworkInput
}
export class MessageWdsStopNetworkOutput {
    /* Methods of Qmi.MessageWdsStopNetworkOutput */
    get_result(): boolean
    ref(): MessageWdsStopNetworkOutput
    unref(): void
    static name: string
}
export class MessageWdsSwiCreateProfileIndexedInput {
    /* Methods of Qmi.MessageWdsSwiCreateProfileIndexedInput */
    get_apn_disabled_flag(): [ /* returnType */ boolean, /* value_apn_disabled_flag */ boolean ]
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number ]
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType, /* value_profile_identifier_profile_index */ number ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string ]
    get_roaming_disallowed_flag(): [ /* returnType */ boolean, /* value_roaming_disallowed_flag */ boolean ]
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string ]
    ref(): MessageWdsSwiCreateProfileIndexedInput
    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean
    set_apn_name(value_apn_name: string): boolean
    set_authentication(value_authentication: WdsAuthentication): boolean
    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean
    set_password(value_password: string): boolean
    set_pdp_context_number(value_pdp_context_number: number): boolean
    set_pdp_type(value_pdp_type: WdsPdpType): boolean
    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean
    set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean
    set_profile_name(value_profile_name: string): boolean
    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean
    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean
    set_username(value_username: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSwiCreateProfileIndexedInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSwiCreateProfileIndexedInput
}
export class MessageWdsSwiCreateProfileIndexedOutput {
    /* Methods of Qmi.MessageWdsSwiCreateProfileIndexedOutput */
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType, /* value_profile_identifier_profile_index */ number ]
    get_result(): boolean
    ref(): MessageWdsSwiCreateProfileIndexedOutput
    unref(): void
    static name: string
}
export class MessageWmsDeleteInput {
    /* Methods of Qmi.MessageWmsDeleteInput */
    get_memory_index(): [ /* returnType */ boolean, /* value_memory_index */ number ]
    get_memory_storage(): [ /* returnType */ boolean, /* value_memory_storage */ WmsStorageType ]
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode ]
    get_message_tag(): [ /* returnType */ boolean, /* value_message_tag */ WmsMessageTagType ]
    ref(): MessageWmsDeleteInput
    set_memory_index(value_memory_index: number): boolean
    set_memory_storage(value_memory_storage: WmsStorageType): boolean
    set_message_mode(value_message_mode: WmsMessageMode): boolean
    set_message_tag(value_message_tag: WmsMessageTagType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsDeleteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsDeleteInput
}
export class MessageWmsDeleteOutput {
    /* Methods of Qmi.MessageWmsDeleteOutput */
    get_result(): boolean
    ref(): MessageWmsDeleteOutput
    unref(): void
    static name: string
}
export class MessageWmsGetMessageProtocolOutput {
    /* Methods of Qmi.MessageWmsGetMessageProtocolOutput */
    get_message_protocol(): [ /* returnType */ boolean, /* value_message_protocol */ WmsMessageProtocol ]
    get_result(): boolean
    ref(): MessageWmsGetMessageProtocolOutput
    unref(): void
    static name: string
}
export class MessageWmsGetRoutesOutput {
    /* Methods of Qmi.MessageWmsGetRoutesOutput */
    get_result(): boolean
    get_route_list(): [ /* returnType */ boolean, /* value_route_list */ MessageWmsGetRoutesOutputRouteListElement[] ]
    get_transfer_status_report(): [ /* returnType */ boolean, /* value_transfer_status_report */ WmsTransferIndication ]
    ref(): MessageWmsGetRoutesOutput
    unref(): void
    static name: string
}
export class MessageWmsGetRoutesOutputRouteListElement {
    /* Fields of Qmi.MessageWmsGetRoutesOutputRouteListElement */
    message_type: WmsMessageType
    message_class: WmsMessageClass
    storage: WmsStorageType
    receipt_action: WmsReceiptAction
    static name: string
}
export class MessageWmsGetSupportedMessagesOutput {
    /* Methods of Qmi.MessageWmsGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array ]
    get_result(): boolean
    ref(): MessageWmsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
export class MessageWmsListMessagesInput {
    /* Methods of Qmi.MessageWmsListMessagesInput */
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode ]
    get_message_tag(): [ /* returnType */ boolean, /* value_message_tag */ WmsMessageTagType ]
    get_storage_type(): [ /* returnType */ boolean, /* value_storage_type */ WmsStorageType ]
    ref(): MessageWmsListMessagesInput
    set_message_mode(value_message_mode: WmsMessageMode): boolean
    set_message_tag(value_message_tag: WmsMessageTagType): boolean
    set_storage_type(value_storage_type: WmsStorageType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsListMessagesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsListMessagesInput
}
export class MessageWmsListMessagesOutput {
    /* Methods of Qmi.MessageWmsListMessagesOutput */
    get_message_list(): [ /* returnType */ boolean, /* value_message_list */ MessageWmsListMessagesOutputMessageListElement[] ]
    get_result(): boolean
    ref(): MessageWmsListMessagesOutput
    unref(): void
    static name: string
}
export class MessageWmsListMessagesOutputMessageListElement {
    /* Fields of Qmi.MessageWmsListMessagesOutputMessageListElement */
    memory_index: number
    message_tag: WmsMessageTagType
    static name: string
}
export class MessageWmsModifyTagInput {
    /* Methods of Qmi.MessageWmsModifyTagInput */
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode ]
    get_message_tag(): [ /* returnType */ boolean, /* value_message_tag_storage_type */ WmsStorageType, /* value_message_tag_memory_index */ number, /* value_message_tag_message_tag */ WmsMessageTagType ]
    ref(): MessageWmsModifyTagInput
    set_message_mode(value_message_mode: WmsMessageMode): boolean
    set_message_tag(value_message_tag_storage_type: WmsStorageType, value_message_tag_memory_index: number, value_message_tag_message_tag: WmsMessageTagType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsModifyTagInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsModifyTagInput
}
export class MessageWmsModifyTagOutput {
    /* Methods of Qmi.MessageWmsModifyTagOutput */
    get_result(): boolean
    ref(): MessageWmsModifyTagOutput
    unref(): void
    static name: string
}
export class MessageWmsRawReadInput {
    /* Methods of Qmi.MessageWmsRawReadInput */
    get_message_memory_storage_id(): [ /* returnType */ boolean, /* value_message_memory_storage_id_storage_type */ WmsStorageType, /* value_message_memory_storage_id_memory_index */ number ]
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean ]
    ref(): MessageWmsRawReadInput
    set_message_memory_storage_id(value_message_memory_storage_id_storage_type: WmsStorageType, value_message_memory_storage_id_memory_index: number): boolean
    set_message_mode(value_message_mode: WmsMessageMode): boolean
    set_sms_on_ims(value_sms_on_ims: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawReadInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawReadInput
}
export class MessageWmsRawReadOutput {
    /* Methods of Qmi.MessageWmsRawReadOutput */
    get_raw_message_data(): [ /* returnType */ boolean, /* value_raw_message_data_message_tag */ WmsMessageTagType, /* value_raw_message_data_format */ WmsMessageFormat, /* value_raw_message_data_raw_data */ Uint8Array ]
    get_result(): boolean
    ref(): MessageWmsRawReadOutput
    unref(): void
    static name: string
}
export class MessageWmsRawSendInput {
    /* Methods of Qmi.MessageWmsRawSendInput */
    get_cdma_follow_on_dc(): [ /* returnType */ boolean, /* value_cdma_follow_on_dc_follow */ boolean ]
    get_cdma_force_on_dc(): [ /* returnType */ boolean, /* value_cdma_force_on_dc_force */ boolean, /* value_cdma_force_on_dc_service_option */ WmsCdmaServiceOption ]
    get_gsm_wcdma_link_timer(): [ /* returnType */ boolean, /* value_gsm_wcdma_link_timer */ number ]
    get_raw_message_data(): [ /* returnType */ boolean, /* value_raw_message_data_format */ WmsMessageFormat, /* value_raw_message_data_raw_data */ Uint8Array ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean ]
    ref(): MessageWmsRawSendInput
    set_cdma_follow_on_dc(value_cdma_follow_on_dc_follow: boolean): boolean
    set_cdma_force_on_dc(value_cdma_force_on_dc_force: boolean, value_cdma_force_on_dc_service_option: WmsCdmaServiceOption): boolean
    set_gsm_wcdma_link_timer(value_gsm_wcdma_link_timer: number): boolean
    set_raw_message_data(value_raw_message_data_format: WmsMessageFormat, value_raw_message_data_raw_data: Uint8Array): boolean
    set_sms_on_ims(value_sms_on_ims: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawSendInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawSendInput
}
export class MessageWmsRawSendOutput {
    /* Methods of Qmi.MessageWmsRawSendOutput */
    get_cdma_cause_code(): [ /* returnType */ boolean, /* value_cdma_cause_code */ WmsCdmaCauseCode ]
    get_cdma_error_class(): [ /* returnType */ boolean, /* value_cdma_error_class */ WmsCdmaErrorClass ]
    get_gsm_wcdma_cause_info(): [ /* returnType */ boolean, /* value_gsm_wcdma_cause_info_rp_cause */ WmsGsmUmtsRpCause, /* value_gsm_wcdma_cause_info_tp_cause */ WmsGsmUmtsTpCause ]
    get_message_delivery_failure_type(): [ /* returnType */ boolean, /* value_message_delivery_failure_type */ WmsMessageDeliveryFailureType ]
    get_message_id(): [ /* returnType */ boolean, /* value_message_id */ number ]
    get_result(): boolean
    ref(): MessageWmsRawSendOutput
    unref(): void
    static name: string
}
export class MessageWmsRawWriteInput {
    /* Methods of Qmi.MessageWmsRawWriteInput */
    get_raw_message_data(): [ /* returnType */ boolean, /* value_raw_message_data_storage_type */ WmsStorageType, /* value_raw_message_data_format */ WmsMessageFormat, /* value_raw_message_data_raw_data */ Uint8Array ]
    ref(): MessageWmsRawWriteInput
    set_raw_message_data(value_raw_message_data_storage_type: WmsStorageType, value_raw_message_data_format: WmsMessageFormat, value_raw_message_data_raw_data: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawWriteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawWriteInput
}
export class MessageWmsRawWriteOutput {
    /* Methods of Qmi.MessageWmsRawWriteOutput */
    get_memory_index(): [ /* returnType */ boolean, /* value_memory_index */ number ]
    get_result(): boolean
    ref(): MessageWmsRawWriteOutput
    unref(): void
    static name: string
}
export class MessageWmsResetOutput {
    /* Methods of Qmi.MessageWmsResetOutput */
    get_result(): boolean
    ref(): MessageWmsResetOutput
    unref(): void
    static name: string
}
export class MessageWmsSendAckInput {
    /* Methods of Qmi.MessageWmsSendAckInput */
    get_3gpp2_failure_information(): [ /* returnType */ boolean, /* value_3gpp2_failure_information_error_class */ WmsCdmaErrorClass, /* value_3gpp2_failure_information_cause_code */ WmsCdmaCauseCode ]
    get_3gpp_failure_information(): [ /* returnType */ boolean, /* value_3gpp_failure_information_rp_cause */ WmsGsmUmtsRpCause, /* value_3gpp_failure_information_tp_cause */ WmsGsmUmtsTpCause ]
    get_information(): [ /* returnType */ boolean, /* value_information_transaction_id */ number, /* value_information_message_protocol */ WmsMessageProtocol, /* value_information_success */ boolean ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean ]
    ref(): MessageWmsSendAckInput
    set_3gpp2_failure_information(value_3gpp2_failure_information_error_class: WmsCdmaErrorClass, value_3gpp2_failure_information_cause_code: WmsCdmaCauseCode): boolean
    set_3gpp_failure_information(value_3gpp_failure_information_rp_cause: WmsGsmUmtsRpCause, value_3gpp_failure_information_tp_cause: WmsGsmUmtsTpCause): boolean
    set_information(value_information_transaction_id: number, value_information_message_protocol: WmsMessageProtocol, value_information_success: boolean): boolean
    set_sms_on_ims(value_sms_on_ims: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSendAckInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSendAckInput
}
export class MessageWmsSendAckOutput {
    /* Methods of Qmi.MessageWmsSendAckOutput */
    get_failure_cause(): [ /* returnType */ boolean, /* value_failure_cause */ WmsAckFailureCause ]
    get_result(): boolean
    ref(): MessageWmsSendAckOutput
    unref(): void
    static name: string
}
export class MessageWmsSendFromMemoryStorageInput {
    /* Methods of Qmi.MessageWmsSendFromMemoryStorageInput */
    get_information(): [ /* returnType */ boolean, /* value_information_storage_type */ WmsStorageType, /* value_information_memory_index */ number, /* value_information_message_mode */ WmsMessageMode ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean ]
    ref(): MessageWmsSendFromMemoryStorageInput
    set_information(value_information_storage_type: WmsStorageType, value_information_memory_index: number, value_information_message_mode: WmsMessageMode): boolean
    set_sms_on_ims(value_sms_on_ims: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSendFromMemoryStorageInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSendFromMemoryStorageInput
}
export class MessageWmsSendFromMemoryStorageOutput {
    /* Methods of Qmi.MessageWmsSendFromMemoryStorageOutput */
    get_cdma_cause_code(): [ /* returnType */ boolean, /* value_cdma_cause_code */ WmsCdmaCauseCode ]
    get_cdma_error_class(): [ /* returnType */ boolean, /* value_cdma_error_class */ WmsCdmaErrorClass ]
    get_gsm_wcdma_cause_info(): [ /* returnType */ boolean, /* value_gsm_wcdma_cause_info_rp_cause */ WmsGsmUmtsRpCause, /* value_gsm_wcdma_cause_info_tp_cause */ WmsGsmUmtsTpCause ]
    get_message_delivery_failure_type(): [ /* returnType */ boolean, /* value_message_delivery_failure_type */ WmsMessageDeliveryFailureType ]
    get_message_id(): [ /* returnType */ boolean, /* value_message_id */ number ]
    get_result(): boolean
    ref(): MessageWmsSendFromMemoryStorageOutput
    unref(): void
    static name: string
}
export class MessageWmsSetEventReportInput {
    /* Methods of Qmi.MessageWmsSetEventReportInput */
    get_new_mt_message_indicator(): [ /* returnType */ boolean, /* value_new_mt_message_indicator_report */ boolean ]
    ref(): MessageWmsSetEventReportInput
    set_new_mt_message_indicator(value_new_mt_message_indicator_report: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSetEventReportInput
}
export class MessageWmsSetEventReportOutput {
    /* Methods of Qmi.MessageWmsSetEventReportOutput */
    get_result(): boolean
    ref(): MessageWmsSetEventReportOutput
    unref(): void
    static name: string
}
export class MessageWmsSetRoutesInput {
    /* Methods of Qmi.MessageWmsSetRoutesInput */
    get_route_list(): [ /* returnType */ boolean, /* value_route_list */ MessageWmsSetRoutesInputRouteListElement[] ]
    get_transfer_status_report(): [ /* returnType */ boolean, /* value_transfer_status_report */ WmsTransferIndication ]
    ref(): MessageWmsSetRoutesInput
    set_route_list(value_route_list: MessageWmsSetRoutesInputRouteListElement[]): boolean
    set_transfer_status_report(value_transfer_status_report: WmsTransferIndication): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSetRoutesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSetRoutesInput
}
export class MessageWmsSetRoutesInputRouteListElement {
    /* Fields of Qmi.MessageWmsSetRoutesInputRouteListElement */
    message_type: WmsMessageType
    message_class: WmsMessageClass
    storage: WmsStorageType
    receipt_action: WmsReceiptAction
    static name: string
}
export class MessageWmsSetRoutesOutput {
    /* Methods of Qmi.MessageWmsSetRoutesOutput */
    get_result(): boolean
    ref(): MessageWmsSetRoutesOutput
    unref(): void
    static name: string
}
export class PhysicalSlotInformationSlot {
    /* Fields of Qmi.PhysicalSlotInformationSlot */
    card_protocol: UimCardProtocol
    valid_applications: number
    atr_value: object[]
    is_euicc: boolean
    static name: string
}
export class PhysicalSlotStatusSlot {
    /* Fields of Qmi.PhysicalSlotStatusSlot */
    physical_card_status: UimPhysicalCardState
    physical_slot_status: UimSlotState
    logical_slot: number
    iccid: object[]
    static name: string
}
export abstract class ProxyClass {
    /* Fields of Qmi.ProxyClass */
    parent: GObject.ObjectClass
    static name: string
}
export class ProxyPrivate {
    static name: string
}
type Message = Uint8Array