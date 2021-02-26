/**
 * ModemManager-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum BearerIpMethod {
    UNKNOWN,
    PPP,
    STATIC,
    DHCP,
}
export enum BearerType {
    UNKNOWN,
    DEFAULT,
    DEFAULT_ATTACH,
    DEDICATED,
}
export enum CallDirection {
    UNKNOWN,
    INCOMING,
    OUTGOING,
}
export enum CallState {
    UNKNOWN,
    DIALING,
    RINGING_OUT,
    RINGING_IN,
    ACTIVE,
    HELD,
    WAITING,
    TERMINATED,
}
export enum CallStateReason {
    UNKNOWN,
    OUTGOING_STARTED,
    INCOMING_NEW,
    ACCEPTED,
    TERMINATED,
    REFUSED_OR_BUSY,
    ERROR,
    AUDIO_SETUP_FAILED,
    TRANSFERRED,
    DEFLECTED,
}
export enum CdmaActivationError {
    NONE,
    UNKNOWN,
    ROAMING,
    WRONGRADIOINTERFACE,
    COULDNOTCONNECT,
    SECURITYAUTHENTICATIONFAILED,
    PROVISIONINGFAILED,
    NOSIGNAL,
    TIMEDOUT,
    STARTFAILED,
}
export enum ConnectionError {
    UNKNOWN,
    NOCARRIER,
    NODIALTONE,
    BUSY,
    NOANSWER,
}
export enum CoreError {
    FAILED,
    CANCELLED,
    ABORTED,
    UNSUPPORTED,
    NOPLUGINS,
    UNAUTHORIZED,
    INVALIDARGS,
    INPROGRESS,
    WRONGSTATE,
    CONNECTED,
    TOOMANY,
    NOTFOUND,
    RETRY,
    EXISTS,
}
export enum FirmwareImageType {
    UNKNOWN,
    GENERIC,
    GOBI,
}
export enum MessageError {
    MEFAILURE,
    SMSSERVICERESERVED,
    NOTALLOWED,
    NOTSUPPORTED,
    INVALIDPDUPARAMETER,
    INVALIDTEXTPARAMETER,
    SIMNOTINSERTED,
    SIMPIN,
    PHSIMPIN,
    SIMFAILURE,
    SIMBUSY,
    SIMWRONG,
    SIMPUK,
    SIMPIN2,
    SIMPUK2,
    MEMORYFAILURE,
    INVALIDINDEX,
    MEMORYFULL,
    SMSCADDRESSUNKNOWN,
    NONETWORK,
    NETWORKTIMEOUT,
    NOCNMAACKEXPECTED,
    UNKNOWN,
}
export enum MobileEquipmentError {
    PHONEFAILURE,
    NOCONNECTION,
    LINKRESERVED,
    NOTALLOWED,
    NOTSUPPORTED,
    PHSIMPIN,
    PHFSIMPIN,
    PHFSIMPUK,
    SIMNOTINSERTED,
    SIMPIN,
    SIMPUK,
    SIMFAILURE,
    SIMBUSY,
    SIMWRONG,
    INCORRECTPASSWORD,
    SIMPIN2,
    SIMPUK2,
    MEMORYFULL,
    INVALIDINDEX,
    NOTFOUND,
    MEMORYFAILURE,
    TEXTTOOLONG,
    INVALIDCHARS,
    DIALSTRINGTOOLONG,
    DIALSTRINGINVALID,
    NONETWORK,
    NETWORKTIMEOUT,
    NETWORKNOTALLOWED,
    NETWORKPIN,
    NETWORKPUK,
    NETWORKSUBSETPIN,
    NETWORKSUBSETPUK,
    SERVICEPIN,
    SERVICEPUK,
    CORPPIN,
    CORPPUK,
    HIDDENKEYREQUIRED,
    EAPMETHODNOTSUPPORTED,
    INCORRECTPARAMETERS,
    UNKNOWN,
    GPRSIMSIUNKNOWNINHLR,
    GPRSILLEGALMS,
    GPRSIMSIUNKNOWNINVLR,
    GPRSILLEGALME,
    GPRSSERVICENOTALLOWED,
    GPRSANDNONGPRSSERVICESNOTALLOWED,
    GPRSPLMNNOTALLOWED,
    GPRSLOCATIONNOTALLOWED,
    GPRSROMAINGNOTALLOWED,
    GPRSNOCELLSINLOCATIONAREA,
    GPRSNETWORKFAILURE,
    GPRSCONGESTION,
    NOTAUTHORIZEDFORCSG,
    GPRSINSUFFICIENTRESOURCES,
    GPRSMISSINGORUNKNOWNAPN,
    GPRSUNKNOWNPDPADDRESSORTYPE,
    GPRSUSERAUTHENTICATIONFAILED,
    GPRSACTIVATIONREJECTEDBYGGSNORGW,
    GPRSACTIVATIONREJECTEDUNSPECIFIED,
    GPRSSERVICEOPTIONNOTSUPPORTED,
    GPRSSERVICEOPTIONNOTSUBSCRIBED,
    GPRSSERVICEOPTIONOUTOFORDER,
    GPRSFEATURENOTSUPPORTED,
    GPRSSEMANTICERRORINTFTOPERATION,
    GPRSSYNTACTICALERRORINTFTOPERATION,
    GPRSUNKNOWNPDPCONTEXT,
    GPRSSEMANTICERRORSINPACKETFILTER,
    GPRSSYNTACTICALERRORSINPACKETFILTER,
    GPRSPDPCONTEXTWITHOUTTFTALREADYACTIVATED,
    GPRSUNKNOWN,
    GPRSPDPAUTHFAILURE,
    GPRSINVALIDMOBILECLASS,
    GPRSLASTPDNDISCONNECTIONNOTALLOWEDLEGACY,
    GPRSLASTPDNDISCONNECTIONNOTALLOWED,
    GPRSSEMANTICALLYINCORRECTMESSAGE,
    GPRSMANDATORYIEERROR,
    GPRSIENOTIMPLEMENTED,
    GPRSCONDITIONALIEERROR,
    GPRSUNSPECIFIEDPROTOCOLERROR,
    GPRSOPERATORDETERMINEDBARRING,
    GPRSMAXIMUMNUMBEROFPDPCONTEXTSREACHED,
    GPRSREQUESTEDAPNNOTSUPPORTED,
    GPRSREQUESTREJECTEDBCMVIOLATION,
}
export enum Modem3gppEpsUeModeOperation {
    UNKNOWN,
    PS_1,
    PS_2,
    CSPS_1,
    CSPS_2,
}
export enum Modem3gppNetworkAvailability {
    UNKNOWN,
    AVAILABLE,
    CURRENT,
    FORBIDDEN,
}
export enum Modem3gppRegistrationState {
    IDLE,
    HOME,
    SEARCHING,
    DENIED,
    UNKNOWN,
    ROAMING,
    HOME_SMS_ONLY,
    ROAMING_SMS_ONLY,
    EMERGENCY_ONLY,
    HOME_CSFB_NOT_PREFERRED,
    ROAMING_CSFB_NOT_PREFERRED,
    ATTACHED_RLOS,
}
export enum Modem3gppSubscriptionState {
    UNKNOWN,
    UNPROVISIONED,
    PROVISIONED,
    OUT_OF_DATA,
}
export enum Modem3gppUssdSessionState {
    UNKNOWN,
    IDLE,
    ACTIVE,
    USER_RESPONSE,
}
export enum ModemBand {
    UNKNOWN,
    EGSM,
    DCS,
    PCS,
    G850,
    UTRAN_1,
    UTRAN_3,
    UTRAN_4,
    UTRAN_6,
    UTRAN_5,
    UTRAN_8,
    UTRAN_9,
    UTRAN_2,
    UTRAN_7,
    G450,
    G480,
    G750,
    G380,
    G410,
    G710,
    G810,
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
    EUTRAN_22,
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
    EUTRAN_44,
    EUTRAN_45,
    EUTRAN_46,
    EUTRAN_47,
    EUTRAN_48,
    EUTRAN_49,
    EUTRAN_50,
    EUTRAN_51,
    EUTRAN_52,
    EUTRAN_53,
    EUTRAN_54,
    EUTRAN_55,
    EUTRAN_56,
    EUTRAN_57,
    EUTRAN_58,
    EUTRAN_59,
    EUTRAN_60,
    EUTRAN_61,
    EUTRAN_62,
    EUTRAN_63,
    EUTRAN_64,
    EUTRAN_65,
    EUTRAN_66,
    EUTRAN_67,
    EUTRAN_68,
    EUTRAN_69,
    EUTRAN_70,
    EUTRAN_71,
    CDMA_BC0,
    CDMA_BC1,
    CDMA_BC2,
    CDMA_BC3,
    CDMA_BC4,
    CDMA_BC5,
    CDMA_BC6,
    CDMA_BC7,
    CDMA_BC8,
    CDMA_BC9,
    CDMA_BC10,
    CDMA_BC11,
    CDMA_BC12,
    CDMA_BC13,
    CDMA_BC14,
    CDMA_BC15,
    CDMA_BC16,
    CDMA_BC17,
    CDMA_BC18,
    CDMA_BC19,
    UTRAN_10,
    UTRAN_11,
    UTRAN_12,
    UTRAN_13,
    UTRAN_14,
    UTRAN_19,
    UTRAN_20,
    UTRAN_21,
    UTRAN_22,
    UTRAN_25,
    UTRAN_26,
    UTRAN_32,
    ANY,
}
export enum ModemCdmaActivationState {
    UNKNOWN,
    NOT_ACTIVATED,
    ACTIVATING,
    PARTIALLY_ACTIVATED,
    ACTIVATED,
}
export enum ModemCdmaRegistrationState {
    UNKNOWN,
    REGISTERED,
    HOME,
    ROAMING,
}
export enum ModemCdmaRmProtocol {
    UNKNOWN,
    ASYNC,
    PACKET_RELAY,
    PACKET_NETWORK_PPP,
    PACKET_NETWORK_SLIP,
    STU_III,
}
export enum ModemContactsStorage {
    UNKNOWN,
    ME,
    SM,
    MT,
}
export enum ModemLock {
    UNKNOWN,
    NONE,
    SIM_PIN,
    SIM_PIN2,
    SIM_PUK,
    SIM_PUK2,
    PH_SP_PIN,
    PH_SP_PUK,
    PH_NET_PIN,
    PH_NET_PUK,
    PH_SIM_PIN,
    PH_CORP_PIN,
    PH_CORP_PUK,
    PH_FSIM_PIN,
    PH_FSIM_PUK,
    PH_NETSUB_PIN,
    PH_NETSUB_PUK,
}
export enum ModemPortType {
    UNKNOWN,
    NET,
    AT,
    QCDM,
    GPS,
    QMI,
    MBIM,
    AUDIO,
    IGNORED,
}
export enum ModemPowerState {
    UNKNOWN,
    OFF,
    LOW,
    ON,
}
export enum ModemState {
    FAILED,
    UNKNOWN,
    INITIALIZING,
    LOCKED,
    DISABLED,
    DISABLING,
    ENABLING,
    ENABLED,
    SEARCHING,
    REGISTERED,
    DISCONNECTING,
    CONNECTING,
    CONNECTED,
}
export enum ModemStateChangeReason {
    UNKNOWN,
    USER_REQUESTED,
    SUSPEND,
    FAILURE,
}
export enum ModemStateFailedReason {
    NONE,
    UNKNOWN,
    SIM_MISSING,
    SIM_ERROR,
}
export enum OmaSessionState {
    FAILED,
    UNKNOWN,
    STARTED,
    RETRYING,
    CONNECTING,
    CONNECTED,
    AUTHENTICATED,
    MDN_DOWNLOADED,
    MSID_DOWNLOADED,
    PRL_DOWNLOADED,
    MIP_PROFILE_DOWNLOADED,
    COMPLETED,
}
export enum OmaSessionStateFailedReason {
    UNKNOWN,
    NETWORK_UNAVAILABLE,
    SERVER_UNAVAILABLE,
    AUTHENTICATION_FAILED,
    MAX_RETRY_EXCEEDED,
    SESSION_CANCELLED,
}
export enum OmaSessionType {
    UNKNOWN,
    CLIENT_INITIATED_DEVICE_CONFIGURE,
    CLIENT_INITIATED_PRL_UPDATE,
    CLIENT_INITIATED_HANDS_FREE_ACTIVATION,
    NETWORK_INITIATED_DEVICE_CONFIGURE,
    NETWORK_INITIATED_PRL_UPDATE,
    DEVICE_INITIATED_PRL_UPDATE,
    DEVICE_INITIATED_HANDS_FREE_ACTIVATION,
}
export enum SerialError {
    UNKNOWN,
    OPENFAILED,
    SENDFAILED,
    RESPONSETIMEOUT,
    OPENFAILEDNODEVICE,
    FLASHFAILED,
    NOTOPEN,
    PARSEFAILED,
    FRAMENOTFOUND,
}
export enum SmsCdmaServiceCategory {
    UNKNOWN,
    EMERGENCY_BROADCAST,
    ADMINISTRATIVE,
    MAINTENANCE,
    GENERAL_NEWS_LOCAL,
    GENERAL_NEWS_REGIONAL,
    GENERAL_NEWS_NATIONAL,
    GENERAL_NEWS_INTERNATIONAL,
    BUSINESS_NEWS_LOCAL,
    BUSINESS_NEWS_REGIONAL,
    BUSINESS_NEWS_NATIONAL,
    BUSINESS_NEWS_INTERNATIONAL,
    SPORTS_NEWS_LOCAL,
    SPORTS_NEWS_REGIONAL,
    SPORTS_NEWS_NATIONAL,
    SPORTS_NEWS_INTERNATIONAL,
    ENTERTAINMENT_NEWS_LOCAL,
    ENTERTAINMENT_NEWS_REGIONAL,
    ENTERTAINMENT_NEWS_NATIONAL,
    ENTERTAINMENT_NEWS_INTERNATIONAL,
    LOCAL_WEATHER,
    TRAFFIC_REPORT,
    FLIGHT_SCHEDULES,
    RESTAURANTS,
    LODGINGS,
    RETAIL_DIRECTORY,
    ADVERTISEMENTS,
    STOCK_QUOTES,
    EMPLOYMENT,
    HOSPITALS,
    TECHNOLOGY_NEWS,
    MULTICATEGORY,
    CMAS_PRESIDENTIAL_ALERT,
    CMAS_EXTREME_THREAT,
    CMAS_SEVERE_THREAT,
    CMAS_CHILD_ABDUCTION_EMERGENCY,
    CMAS_TEST,
}
export enum SmsCdmaTeleserviceId {
    UNKNOWN,
    CMT91,
    WPT,
    WMT,
    VMN,
    WAP,
    WEMT,
    SCPT,
    CATPT,
}
export enum SmsDeliveryState {
    COMPLETED_RECEIVED,
    COMPLETED_FORWARDED_UNCONFIRMED,
    COMPLETED_REPLACED_BY_SC,
    TEMPORARY_ERROR_CONGESTION,
    TEMPORARY_ERROR_SME_BUSY,
    TEMPORARY_ERROR_NO_RESPONSE_FROM_SME,
    TEMPORARY_ERROR_SERVICE_REJECTED,
    TEMPORARY_ERROR_QOS_NOT_AVAILABLE,
    TEMPORARY_ERROR_IN_SME,
    ERROR_REMOTE_PROCEDURE,
    ERROR_INCOMPATIBLE_DESTINATION,
    ERROR_CONNECTION_REJECTED,
    ERROR_NOT_OBTAINABLE,
    ERROR_QOS_NOT_AVAILABLE,
    ERROR_NO_INTERWORKING_AVAILABLE,
    ERROR_VALIDITY_PERIOD_EXPIRED,
    ERROR_DELETED_BY_ORIGINATING_SME,
    ERROR_DELETED_BY_SC_ADMINISTRATION,
    ERROR_MESSAGE_DOES_NOT_EXIST,
    TEMPORARY_FATAL_ERROR_CONGESTION,
    TEMPORARY_FATAL_ERROR_SME_BUSY,
    TEMPORARY_FATAL_ERROR_NO_RESPONSE_FROM_SME,
    TEMPORARY_FATAL_ERROR_SERVICE_REJECTED,
    TEMPORARY_FATAL_ERROR_QOS_NOT_AVAILABLE,
    TEMPORARY_FATAL_ERROR_IN_SME,
    UNKNOWN,
    NETWORK_PROBLEM_ADDRESS_VACANT,
    NETWORK_PROBLEM_ADDRESS_TRANSLATION_FAILURE,
    NETWORK_PROBLEM_NETWORK_RESOURCE_OUTAGE,
    NETWORK_PROBLEM_NETWORK_FAILURE,
    NETWORK_PROBLEM_INVALID_TELESERVICE_ID,
    NETWORK_PROBLEM_OTHER,
    TERMINAL_PROBLEM_NO_PAGE_RESPONSE,
    TERMINAL_PROBLEM_DESTINATION_BUSY,
    TERMINAL_PROBLEM_NO_ACKNOWLEDGMENT,
    TERMINAL_PROBLEM_DESTINATION_RESOURCE_SHORTAGE,
    TERMINAL_PROBLEM_SMS_DELIVERY_POSTPONED,
    TERMINAL_PROBLEM_DESTINATION_OUT_OF_SERVICE,
    TERMINAL_PROBLEM_DESTINATION_NO_LONGER_AT_THIS_ADDRESS,
    TERMINAL_PROBLEM_OTHER,
    RADIO_INTERFACE_PROBLEM_RESOURCE_SHORTAGE,
    RADIO_INTERFACE_PROBLEM_INCOMPATIBILITY,
    RADIO_INTERFACE_PROBLEM_OTHER,
    GENERAL_PROBLEM_ENCODING,
    GENERAL_PROBLEM_SMS_ORIGINATION_DENIED,
    GENERAL_PROBLEM_SMS_TERMINATION_DENIED,
    GENERAL_PROBLEM_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED,
    GENERAL_PROBLEM_SMS_NOT_SUPPORTED,
    GENERAL_PROBLEM_MISSING_EXPECTED_PARAMETER,
    GENERAL_PROBLEM_MISSING_MANDATORY_PARAMETER,
    GENERAL_PROBLEM_UNRECOGNIZED_PARAMETER_VALUE,
    GENERAL_PROBLEM_UNEXPECTED_PARAMETER_VALUE,
    GENERAL_PROBLEM_USER_DATA_SIZE_ERROR,
    GENERAL_PROBLEM_OTHER,
    TEMPORARY_NETWORK_PROBLEM_ADDRESS_VACANT,
    TEMPORARY_NETWORK_PROBLEM_ADDRESS_TRANSLATION_FAILURE,
    TEMPORARY_NETWORK_PROBLEM_NETWORK_RESOURCE_OUTAGE,
    TEMPORARY_NETWORK_PROBLEM_NETWORK_FAILURE,
    TEMPORARY_NETWORK_PROBLEM_INVALID_TELESERVICE_ID,
    TEMPORARY_NETWORK_PROBLEM_OTHER,
    TEMPORARY_TERMINAL_PROBLEM_NO_PAGE_RESPONSE,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_BUSY,
    TEMPORARY_TERMINAL_PROBLEM_NO_ACKNOWLEDGMENT,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_RESOURCE_SHORTAGE,
    TEMPORARY_TERMINAL_PROBLEM_SMS_DELIVERY_POSTPONED,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_OUT_OF_SERVICE,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_NO_LONGER_AT_THIS_ADDRESS,
    TEMPORARY_TERMINAL_PROBLEM_OTHER,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_RESOURCE_SHORTAGE,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_INCOMPATIBILITY,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_OTHER,
    TEMPORARY_GENERAL_PROBLEM_ENCODING,
    TEMPORARY_GENERAL_PROBLEM_SMS_ORIGINATION_DENIED,
    TEMPORARY_GENERAL_PROBLEM_SMS_TERMINATION_DENIED,
    TEMPORARY_GENERAL_PROBLEM_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED,
    TEMPORARY_GENERAL_PROBLEM_SMS_NOT_SUPPORTED,
    TEMPORARY_GENERAL_PROBLEM_MISSING_EXPECTED_PARAMETER,
    TEMPORARY_GENERAL_PROBLEM_MISSING_MANDATORY_PARAMETER,
    TEMPORARY_GENERAL_PROBLEM_UNRECOGNIZED_PARAMETER_VALUE,
    TEMPORARY_GENERAL_PROBLEM_UNEXPECTED_PARAMETER_VALUE,
    TEMPORARY_GENERAL_PROBLEM_USER_DATA_SIZE_ERROR,
    TEMPORARY_GENERAL_PROBLEM_OTHER,
}
export enum SmsPduType {
    UNKNOWN,
    DELIVER,
    SUBMIT,
    STATUS_REPORT,
    CDMA_DELIVER,
    CDMA_SUBMIT,
    CDMA_CANCELLATION,
    CDMA_DELIVERY_ACKNOWLEDGEMENT,
    CDMA_USER_ACKNOWLEDGEMENT,
    CDMA_READ_ACKNOWLEDGEMENT,
}
export enum SmsState {
    UNKNOWN,
    STORED,
    RECEIVING,
    RECEIVED,
    SENDING,
    SENT,
}
export enum SmsStorage {
    UNKNOWN,
    SM,
    ME,
    MT,
    SR,
    BM,
    TA,
}
export enum SmsValidityType {
    UNKNOWN,
    RELATIVE,
    ABSOLUTE,
    ENHANCED,
}
export enum BearerAllowedAuth {
    UNKNOWN,
    NONE,
    PAP,
    CHAP,
    MSCHAP,
    MSCHAPV2,
    EAP,
}
export enum BearerIpFamily {
    NONE,
    IPV4,
    IPV6,
    IPV4V6,
    ANY,
}
export enum BearerPropertiesCmpFlags {
    NONE,
    LOOSE,
    NO_PASSWORD,
    NO_ALLOW_ROAMING,
    NO_RM_PROTOCOL,
}
export enum Modem3gppFacility {
    NONE,
    SIM,
    FIXED_DIALING,
    PH_SIM,
    PH_FSIM,
    NET_PERS,
    NET_SUB_PERS,
    PROVIDER_PERS,
    CORP_PERS,
}
export enum ModemAccessTechnology {
    UNKNOWN,
    POTS,
    GSM,
    GSM_COMPACT,
    GPRS,
    EDGE,
    UMTS,
    HSDPA,
    HSUPA,
    HSPA,
    HSPA_PLUS,
    /* 1XRTT (invalid, starts with a number) */
    EVDO0,
    EVDOA,
    EVDOB,
    LTE,
    /* 5GNR (invalid, starts with a number) */
    ANY,
}
export enum ModemCapability {
    NONE,
    POTS,
    CDMA_EVDO,
    GSM_UMTS,
    LTE,
    IRIDIUM,
    /* 5GNR (invalid, starts with a number) */
    ANY,
}
export enum ModemFirmwareUpdateMethod {
    NONE,
    FASTBOOT,
    QMI_PDC,
}
export enum ModemLocationAssistanceDataType {
    NONE,
    XTRA,
}
export enum ModemLocationSource {
    NONE,
    /* 3GPP_LAC_CI (invalid, starts with a number) */
    GPS_RAW,
    GPS_NMEA,
    CDMA_BS,
    GPS_UNMANAGED,
    AGPS_MSA,
    AGPS_MSB,
}
export enum ModemMode {
    NONE,
    CS,
    /* 2G (invalid, starts with a number) */
    /* 3G (invalid, starts with a number) */
    /* 4G (invalid, starts with a number) */
    /* 5G (invalid, starts with a number) */
    ANY,
}
export enum OmaFeature {
    NONE,
    DEVICE_PROVISIONING,
    PRL_UPDATE,
    HANDS_FREE_ACTIVATION,
}
export const BEARER_METHOD_CONNECT: string
export const BEARER_METHOD_DISCONNECT: string
export const BEARER_PROPERTY_BEARERTYPE: string
export const BEARER_PROPERTY_CONNECTED: string
export const BEARER_PROPERTY_INTERFACE: string
export const BEARER_PROPERTY_IP4CONFIG: string
export const BEARER_PROPERTY_IP6CONFIG: string
export const BEARER_PROPERTY_IPTIMEOUT: string
export const BEARER_PROPERTY_PROPERTIES: string
export const BEARER_PROPERTY_STATS: string
export const BEARER_PROPERTY_SUSPENDED: string
export const CALL_METHOD_ACCEPT: string
export const CALL_METHOD_DEFLECT: string
export const CALL_METHOD_HANGUP: string
export const CALL_METHOD_JOINMULTIPARTY: string
export const CALL_METHOD_LEAVEMULTIPARTY: string
export const CALL_METHOD_SENDDTMF: string
export const CALL_METHOD_START: string
export const CALL_PROPERTY_AUDIOFORMAT: string
export const CALL_PROPERTY_AUDIOPORT: string
export const CALL_PROPERTY_DIRECTION: string
export const CALL_PROPERTY_MULTIPARTY: string
export const CALL_PROPERTY_NUMBER: string
export const CALL_PROPERTY_STATE: string
export const CALL_PROPERTY_STATEREASON: string
export const CALL_SIGNAL_DTMFRECEIVED: string
export const CALL_SIGNAL_STATECHANGED: string
export const DBUS_ERROR_PREFIX: string
export const DBUS_INTERFACE: string
export const DBUS_INTERFACE_BEARER: string
export const DBUS_INTERFACE_CALL: string
export const DBUS_INTERFACE_MODEM: string
export const DBUS_INTERFACE_MODEM_FIRMWARE: string
export const DBUS_INTERFACE_MODEM_LOCATION: string
export const DBUS_INTERFACE_MODEM_MESSAGING: string
export const DBUS_INTERFACE_MODEM_MODEM3GPP: string
export const DBUS_INTERFACE_MODEM_MODEM3GPP_USSD: string
export const DBUS_INTERFACE_MODEM_MODEMCDMA: string
export const DBUS_INTERFACE_MODEM_OMA: string
export const DBUS_INTERFACE_MODEM_SIGNAL: string
export const DBUS_INTERFACE_MODEM_TIME: string
export const DBUS_INTERFACE_MODEM_VOICE: string
export const DBUS_INTERFACE_SIM: string
export const DBUS_INTERFACE_SMS: string
export const DBUS_PATH: string
export const DBUS_SERVICE: string
export const MAJOR_VERSION: number
export const MANAGER_METHOD_INHIBITDEVICE: string
export const MANAGER_METHOD_REPORTKERNELEVENT: string
export const MANAGER_METHOD_SCANDEVICES: string
export const MANAGER_METHOD_SETLOGGING: string
export const MANAGER_PROPERTY_VERSION: string
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const MODEM_CDMA_NID_UNKNOWN: number
export const MODEM_CDMA_SID_UNKNOWN: number
export const MODEM_FIRMWARE_METHOD_LIST: string
export const MODEM_FIRMWARE_METHOD_SELECT: string
export const MODEM_FIRMWARE_PROPERTY_UPDATESETTINGS: string
export const MODEM_LOCATION_METHOD_GETLOCATION: string
export const MODEM_LOCATION_METHOD_INJECTASSISTANCEDATA: string
export const MODEM_LOCATION_METHOD_SETGPSREFRESHRATE: string
export const MODEM_LOCATION_METHOD_SETSUPLSERVER: string
export const MODEM_LOCATION_METHOD_SETUP: string
export const MODEM_LOCATION_PROPERTY_ASSISTANCEDATASERVERS: string
export const MODEM_LOCATION_PROPERTY_CAPABILITIES: string
export const MODEM_LOCATION_PROPERTY_ENABLED: string
export const MODEM_LOCATION_PROPERTY_GPSREFRESHRATE: string
export const MODEM_LOCATION_PROPERTY_LOCATION: string
export const MODEM_LOCATION_PROPERTY_SIGNALSLOCATION: string
export const MODEM_LOCATION_PROPERTY_SUPLSERVER: string
export const MODEM_LOCATION_PROPERTY_SUPPORTEDASSISTANCEDATA: string
export const MODEM_MESSAGING_METHOD_CREATE: string
export const MODEM_MESSAGING_METHOD_DELETE: string
export const MODEM_MESSAGING_METHOD_LIST: string
export const MODEM_MESSAGING_PROPERTY_DEFAULTSTORAGE: string
export const MODEM_MESSAGING_PROPERTY_MESSAGES: string
export const MODEM_MESSAGING_PROPERTY_SUPPORTEDSTORAGES: string
export const MODEM_MESSAGING_SIGNAL_ADDED: string
export const MODEM_MESSAGING_SIGNAL_DELETED: string
export const MODEM_METHOD_COMMAND: string
export const MODEM_METHOD_CREATEBEARER: string
export const MODEM_METHOD_DELETEBEARER: string
export const MODEM_METHOD_ENABLE: string
export const MODEM_METHOD_FACTORYRESET: string
export const MODEM_METHOD_LISTBEARERS: string
export const MODEM_METHOD_RESET: string
export const MODEM_METHOD_SETCURRENTBANDS: string
export const MODEM_METHOD_SETCURRENTCAPABILITIES: string
export const MODEM_METHOD_SETCURRENTMODES: string
export const MODEM_METHOD_SETPOWERSTATE: string
export const MODEM_METHOD_SETPRIMARYSIMSLOT: string
export const MODEM_MODEM3GPP_METHOD_REGISTER: string
export const MODEM_MODEM3GPP_METHOD_SCAN: string
export const MODEM_MODEM3GPP_METHOD_SETEPSUEMODEOPERATION: string
export const MODEM_MODEM3GPP_METHOD_SETINITIALEPSBEARERSETTINGS: string
export const MODEM_MODEM3GPP_PROPERTY_ENABLEDFACILITYLOCKS: string
export const MODEM_MODEM3GPP_PROPERTY_EPSUEMODEOPERATION: string
export const MODEM_MODEM3GPP_PROPERTY_IMEI: string
export const MODEM_MODEM3GPP_PROPERTY_INITIALEPSBEARER: string
export const MODEM_MODEM3GPP_PROPERTY_INITIALEPSBEARERSETTINGS: string
export const MODEM_MODEM3GPP_PROPERTY_OPERATORCODE: string
export const MODEM_MODEM3GPP_PROPERTY_OPERATORNAME: string
export const MODEM_MODEM3GPP_PROPERTY_PCO: string
export const MODEM_MODEM3GPP_PROPERTY_REGISTRATIONSTATE: string
export const MODEM_MODEM3GPP_PROPERTY_SUBSCRIPTIONSTATE: string
export const MODEM_MODEM3GPP_USSD_METHOD_CANCEL: string
export const MODEM_MODEM3GPP_USSD_METHOD_INITIATE: string
export const MODEM_MODEM3GPP_USSD_METHOD_RESPOND: string
export const MODEM_MODEM3GPP_USSD_PROPERTY_NETWORKNOTIFICATION: string
export const MODEM_MODEM3GPP_USSD_PROPERTY_NETWORKREQUEST: string
export const MODEM_MODEM3GPP_USSD_PROPERTY_STATE: string
export const MODEM_MODEMCDMA_METHOD_ACTIVATE: string
export const MODEM_MODEMCDMA_METHOD_ACTIVATEMANUAL: string
export const MODEM_MODEMCDMA_PROPERTY_ACTIVATIONSTATE: string
export const MODEM_MODEMCDMA_PROPERTY_CDMA1XREGISTRATIONSTATE: string
export const MODEM_MODEMCDMA_PROPERTY_ESN: string
export const MODEM_MODEMCDMA_PROPERTY_EVDOREGISTRATIONSTATE: string
export const MODEM_MODEMCDMA_PROPERTY_MEID: string
export const MODEM_MODEMCDMA_PROPERTY_NID: string
export const MODEM_MODEMCDMA_PROPERTY_SID: string
export const MODEM_MODEMCDMA_SIGNAL_ACTIVATIONSTATECHANGED: string
export const MODEM_OMA_METHOD_ACCEPTNETWORKINITIATEDSESSION: string
export const MODEM_OMA_METHOD_CANCELSESSION: string
export const MODEM_OMA_METHOD_SETUP: string
export const MODEM_OMA_METHOD_STARTCLIENTINITIATEDSESSION: string
export const MODEM_OMA_PROPERTY_FEATURES: string
export const MODEM_OMA_PROPERTY_PENDINGNETWORKINITIATEDSESSIONS: string
export const MODEM_OMA_PROPERTY_SESSIONSTATE: string
export const MODEM_OMA_PROPERTY_SESSIONTYPE: string
export const MODEM_OMA_SIGNAL_SESSIONSTATECHANGED: string
export const MODEM_PROPERTY_ACCESSTECHNOLOGIES: string
export const MODEM_PROPERTY_BEARERS: string
export const MODEM_PROPERTY_CARRIERCONFIGURATION: string
export const MODEM_PROPERTY_CARRIERCONFIGURATIONREVISION: string
export const MODEM_PROPERTY_CURRENTBANDS: string
export const MODEM_PROPERTY_CURRENTCAPABILITIES: string
export const MODEM_PROPERTY_CURRENTMODES: string
export const MODEM_PROPERTY_DEVICE: string
export const MODEM_PROPERTY_DEVICEIDENTIFIER: string
export const MODEM_PROPERTY_DRIVERS: string
export const MODEM_PROPERTY_EQUIPMENTIDENTIFIER: string
export const MODEM_PROPERTY_HARDWAREREVISION: string
export const MODEM_PROPERTY_MANUFACTURER: string
export const MODEM_PROPERTY_MAXACTIVEBEARERS: string
export const MODEM_PROPERTY_MAXBEARERS: string
export const MODEM_PROPERTY_MODEL: string
export const MODEM_PROPERTY_OWNNUMBERS: string
export const MODEM_PROPERTY_PLUGIN: string
export const MODEM_PROPERTY_PORTS: string
export const MODEM_PROPERTY_POWERSTATE: string
export const MODEM_PROPERTY_PRIMARYPORT: string
export const MODEM_PROPERTY_PRIMARYSIMSLOT: string
export const MODEM_PROPERTY_REVISION: string
export const MODEM_PROPERTY_SIGNALQUALITY: string
export const MODEM_PROPERTY_SIM: string
export const MODEM_PROPERTY_SIMSLOTS: string
export const MODEM_PROPERTY_STATE: string
export const MODEM_PROPERTY_STATEFAILEDREASON: string
export const MODEM_PROPERTY_SUPPORTEDBANDS: string
export const MODEM_PROPERTY_SUPPORTEDCAPABILITIES: string
export const MODEM_PROPERTY_SUPPORTEDIPFAMILIES: string
export const MODEM_PROPERTY_SUPPORTEDMODES: string
export const MODEM_PROPERTY_UNLOCKREQUIRED: string
export const MODEM_PROPERTY_UNLOCKRETRIES: string
export const MODEM_SIGNAL_METHOD_SETUP: string
export const MODEM_SIGNAL_PROPERTY_CDMA: string
export const MODEM_SIGNAL_PROPERTY_EVDO: string
export const MODEM_SIGNAL_PROPERTY_GSM: string
export const MODEM_SIGNAL_PROPERTY_LTE: string
export const MODEM_SIGNAL_PROPERTY_NR5G: string
export const MODEM_SIGNAL_PROPERTY_RATE: string
export const MODEM_SIGNAL_PROPERTY_UMTS: string
export const MODEM_SIGNAL_STATECHANGED: string
export const MODEM_TIME_METHOD_GETNETWORKTIME: string
export const MODEM_TIME_PROPERTY_NETWORKTIMEZONE: string
export const MODEM_TIME_SIGNAL_NETWORKTIMECHANGED: string
export const MODEM_VOICE_METHOD_CALLWAITINGQUERY: string
export const MODEM_VOICE_METHOD_CALLWAITINGSETUP: string
export const MODEM_VOICE_METHOD_CREATECALL: string
export const MODEM_VOICE_METHOD_DELETECALL: string
export const MODEM_VOICE_METHOD_HANGUPALL: string
export const MODEM_VOICE_METHOD_HANGUPANDACCEPT: string
export const MODEM_VOICE_METHOD_HOLDANDACCEPT: string
export const MODEM_VOICE_METHOD_LISTCALLS: string
export const MODEM_VOICE_METHOD_TRANSFER: string
export const MODEM_VOICE_PROPERTY_CALLS: string
export const MODEM_VOICE_PROPERTY_EMERGENCYONLY: string
export const MODEM_VOICE_SIGNAL_CALLADDED: string
export const MODEM_VOICE_SIGNAL_CALLDELETED: string
export const SIMPLE_PROPERTY_3GPP_OPERATOR_CODE: string
export const SIMPLE_PROPERTY_3GPP_OPERATOR_NAME: string
export const SIMPLE_PROPERTY_3GPP_REGISTRATION_STATE: string
export const SIMPLE_PROPERTY_3GPP_SUBSCRIPTION_STATE: string
export const SIMPLE_PROPERTY_ACCESS_TECHNOLOGIES: string
export const SIMPLE_PROPERTY_CDMA_CDMA1X_REGISTRATION_STATE: string
export const SIMPLE_PROPERTY_CDMA_EVDO_REGISTRATION_STATE: string
export const SIMPLE_PROPERTY_CDMA_NID: string
export const SIMPLE_PROPERTY_CDMA_SID: string
export const SIMPLE_PROPERTY_CURRENT_BANDS: string
export const SIMPLE_PROPERTY_SIGNAL_QUALITY: string
export const SIMPLE_PROPERTY_STATE: string
export const SIM_METHOD_CHANGEPIN: string
export const SIM_METHOD_ENABLEPIN: string
export const SIM_METHOD_SENDPIN: string
export const SIM_METHOD_SENDPUK: string
export const SIM_PROPERTY_ACTIVE: string
export const SIM_PROPERTY_EID: string
export const SIM_PROPERTY_EMERGENCYNUMBERS: string
export const SIM_PROPERTY_IMSI: string
export const SIM_PROPERTY_OPERATORIDENTIFIER: string
export const SIM_PROPERTY_OPERATORNAME: string
export const SIM_PROPERTY_SIMIDENTIFIER: string
export const SMS_METHOD_SEND: string
export const SMS_METHOD_STORE: string
export const SMS_PROPERTY_CLASS: string
export const SMS_PROPERTY_DATA: string
export const SMS_PROPERTY_DELIVERYREPORTREQUEST: string
export const SMS_PROPERTY_DELIVERYSTATE: string
export const SMS_PROPERTY_DISCHARGETIMESTAMP: string
export const SMS_PROPERTY_MESSAGEREFERENCE: string
export const SMS_PROPERTY_NUMBER: string
export const SMS_PROPERTY_PDUTYPE: string
export const SMS_PROPERTY_SERVICECATEGORY: string
export const SMS_PROPERTY_SMSC: string
export const SMS_PROPERTY_STATE: string
export const SMS_PROPERTY_STORAGE: string
export const SMS_PROPERTY_TELESERVICEID: string
export const SMS_PROPERTY_TEXT: string
export const SMS_PROPERTY_TIMESTAMP: string
export const SMS_PROPERTY_VALIDITY: string
export const UNLOCK_RETRIES_UNKNOWN: number
export function bearer_allowed_auth_build_string_from_mask(mask: BearerAllowedAuth): string
export function bearer_ip_family_build_string_from_mask(mask: BearerIpFamily): string
export function bearer_ip_method_get_string(val: BearerIpMethod): string
export function bearer_type_get_string(val: BearerType): string
export function call_direction_get_string(val: CallDirection): string
export function call_state_get_string(val: CallState): string
export function call_state_reason_get_string(val: CallStateReason): string
export function cdma_activation_error_quark(): GLib.Quark
export function connection_error_quark(): GLib.Quark
export function core_error_quark(): GLib.Quark
export function firmware_image_type_get_string(val: FirmwareImageType): string
export function gdbus_bearer_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_bearer_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem3gpp_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem3gpp_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem3gpp_ussd_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem3gpp_ussd_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_cdma_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_cdma_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_firmware_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_firmware_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_location_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_location_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_messaging_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_messaging_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_oma_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_oma_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_signal_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_signal_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_simple_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_simple_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_time_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_time_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_modem_voice_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_modem_voice_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_org_freedesktop_modem_manager1_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_org_freedesktop_modem_manager1_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_sim_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_sim_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function gdbus_sms_interface_info(): Gio.DBusInterfaceInfo
export function gdbus_sms_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function message_error_quark(): GLib.Quark
export function mobile_equipment_error_quark(): GLib.Quark
export function modem_3gpp_eps_ue_mode_operation_get_string(val: Modem3gppEpsUeModeOperation): string
export function modem_3gpp_facility_build_string_from_mask(mask: Modem3gppFacility): string
export function modem_3gpp_network_availability_get_string(val: Modem3gppNetworkAvailability): string
export function modem_3gpp_registration_state_get_string(val: Modem3gppRegistrationState): string
export function modem_3gpp_subscription_state_get_string(val: Modem3gppSubscriptionState): string
export function modem_3gpp_ussd_session_state_get_string(val: Modem3gppUssdSessionState): string
export function modem_access_technology_build_string_from_mask(mask: ModemAccessTechnology): string
export function modem_band_get_string(val: ModemBand): string
export function modem_capability_build_string_from_mask(mask: ModemCapability): string
export function modem_cdma_activation_state_get_string(val: ModemCdmaActivationState): string
export function modem_cdma_registration_state_get_string(val: ModemCdmaRegistrationState): string
export function modem_cdma_rm_protocol_get_string(val: ModemCdmaRmProtocol): string
export function modem_contacts_storage_get_string(val: ModemContactsStorage): string
export function modem_firmware_update_method_build_string_from_mask(mask: ModemFirmwareUpdateMethod): string
export function modem_location_assistance_data_type_build_string_from_mask(mask: ModemLocationAssistanceDataType): string
export function modem_location_source_build_string_from_mask(mask: ModemLocationSource): string
export function modem_lock_get_string(val: ModemLock): string
export function modem_mode_build_string_from_mask(mask: ModemMode): string
export function modem_port_type_get_string(val: ModemPortType): string
export function modem_power_state_get_string(val: ModemPowerState): string
export function modem_state_change_reason_get_string(val: ModemStateChangeReason): string
export function modem_state_failed_reason_get_string(val: ModemStateFailedReason): string
export function modem_state_get_string(val: ModemState): string
export function oma_feature_build_string_from_mask(mask: OmaFeature): string
export function oma_session_state_failed_reason_get_string(val: OmaSessionStateFailedReason): string
export function oma_session_state_get_string(val: OmaSessionState): string
export function oma_session_type_get_string(val: OmaSessionType): string
export function serial_error_quark(): GLib.Quark
export function sms_cdma_service_category_get_string(val: SmsCdmaServiceCategory): string
export function sms_cdma_teleservice_id_get_string(val: SmsCdmaTeleserviceId): string
export function sms_delivery_state_get_string(val: SmsDeliveryState): string
export function sms_pdu_type_get_string(val: SmsPduType): string
export function sms_state_get_string(val: SmsState): string
export function sms_storage_get_string(val: SmsStorage): string
export function sms_validity_type_get_string(val: SmsValidityType): string
export interface UnlockRetriesForeachCb {
    (lock: ModemLock, count: number): void
}
export class GdbusBearer {
    /* Properties of ModemManager-1.0.ModemManager.GdbusBearer */
    bearer_type: number
    connected: boolean
    interface: string
    ip_timeout: number
    ip4_config: GLib.Variant
    ip6_config: GLib.Variant
    properties: GLib.Variant
    stats: GLib.Variant
    suspended: boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusBearer */
    call_connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_connect_finish(res: Gio.AsyncResult): boolean
    call_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_connect(invocation: Gio.DBusMethodInvocation): void
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusBearer */
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusBearer */
    connect(sigName: "handle-connect", callback: (($obj: GdbusBearer, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-connect", callback: (($obj: GdbusBearer, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-connect", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-disconnect", callback: (($obj: GdbusBearer, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: GdbusBearer, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModem {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem */
    access_technologies: number
    bearers: string[]
    carrier_configuration: string
    carrier_configuration_revision: string
    current_bands: GLib.Variant
    current_capabilities: number
    current_modes: GLib.Variant
    device: string
    device_identifier: string
    drivers: string[]
    equipment_identifier: string
    hardware_revision: string
    manufacturer: string
    max_active_bearers: number
    max_bearers: number
    model: string
    own_numbers: string[]
    plugin: string
    ports: GLib.Variant
    power_state: number
    primary_port: string
    primary_sim_slot: number
    revision: string
    signal_quality: GLib.Variant
    sim: string
    sim_slots: string[]
    state: number
    state_failed_reason: number
    supported_bands: GLib.Variant
    supported_capabilities: GLib.Variant
    supported_ip_families: number
    supported_modes: GLib.Variant
    unlock_required: number
    unlock_retries: GLib.Variant
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem */
    call_command(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_command_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_response */ string | null ]
    call_command_sync(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_response */ string | null ]
    call_create_bearer(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_bearer_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_bearer_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete_bearer(arg_bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean
    call_delete_bearer_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean
    call_enable(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_finish(res: Gio.AsyncResult): boolean
    call_enable_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_factory_reset(arg_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_factory_reset_finish(res: Gio.AsyncResult): boolean
    call_factory_reset_sync(arg_code: string, cancellable?: Gio.Cancellable | null): boolean
    call_list_bearers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_bearers_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_bearers */ string[] | null ]
    call_list_bearers_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_bearers */ string[] | null ]
    call_reset(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_reset_finish(res: Gio.AsyncResult): boolean
    call_reset_sync(cancellable?: Gio.Cancellable | null): boolean
    call_set_current_bands(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_current_capabilities(arg_capabilities: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_current_modes(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_power_state(arg_state: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_power_state_finish(res: Gio.AsyncResult): boolean
    call_set_power_state_sync(arg_state: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_primary_sim_slot(arg_sim_slot: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean
    call_set_primary_sim_slot_sync(arg_sim_slot: number, cancellable?: Gio.Cancellable | null): boolean
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void
    complete_enable(invocation: Gio.DBusMethodInvocation): void
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void
    complete_reset(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void
    complete_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation): void
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem */
    vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean
    vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean
    vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean
    vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean
    vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean
    vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean
    vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean
    vfunc_handle_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): boolean
    vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem */
    connect(sigName: "handle-command", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean)): number
    connect_after(sigName: "handle-command", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean)): number
    emit(sigName: "handle-command", invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): void
    connect(sigName: "handle-create-bearer", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-bearer", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-bearer", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete-bearer", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    connect_after(sigName: "handle-delete-bearer", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    emit(sigName: "handle-delete-bearer", invocation: Gio.DBusMethodInvocation, arg_bearer: string): void
    connect(sigName: "handle-enable", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-enable", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-factory-reset", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean)): number
    connect_after(sigName: "handle-factory-reset", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean)): number
    emit(sigName: "handle-factory-reset", invocation: Gio.DBusMethodInvocation, arg_code: string): void
    connect(sigName: "handle-list-bearers", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list-bearers", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list-bearers", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-reset", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-reset", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-reset", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-current-bands", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-current-bands", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-current-bands", invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): void
    connect(sigName: "handle-set-current-capabilities", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean)): number
    connect_after(sigName: "handle-set-current-capabilities", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean)): number
    emit(sigName: "handle-set-current-capabilities", invocation: Gio.DBusMethodInvocation, arg_capabilities: number): void
    connect(sigName: "handle-set-current-modes", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-current-modes", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-current-modes", invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): void
    connect(sigName: "handle-set-power-state", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean)): number
    connect_after(sigName: "handle-set-power-state", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean)): number
    emit(sigName: "handle-set-power-state", invocation: Gio.DBusMethodInvocation, arg_state: number): void
    connect(sigName: "handle-set-primary-sim-slot", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean)): number
    connect_after(sigName: "handle-set-primary-sim-slot", callback: (($obj: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean)): number
    emit(sigName: "handle-set-primary-sim-slot", invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): void
    connect(sigName: "state-changed", callback: (($obj: GdbusModem, arg_old: number, arg_new: number, arg_reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: GdbusModem, arg_old: number, arg_new: number, arg_reason: number) => void)): number
    emit(sigName: "state-changed", arg_old: number, arg_new: number, arg_reason: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModem3gpp {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    enabled_facility_locks: number
    eps_ue_mode_operation: number
    imei: string
    initial_eps_bearer: string
    initial_eps_bearer_settings: GLib.Variant
    operator_code: string
    operator_name: string
    pco: GLib.Variant
    registration_state: number
    subscription_state: number
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    call_register(arg_operator_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_finish(res: Gio.AsyncResult): boolean
    call_register_sync(arg_operator_id: string, cancellable?: Gio.Cancellable | null): boolean
    call_scan(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_scan_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_results */ GLib.Variant | null ]
    call_scan_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_results */ GLib.Variant | null ]
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean
    call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_register(invocation: Gio.DBusMethodInvocation): void
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean
    vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean
    vfunc_handle_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    connect(sigName: "handle-register", callback: (($obj: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean)): number
    connect_after(sigName: "handle-register", callback: (($obj: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean)): number
    emit(sigName: "handle-register", invocation: Gio.DBusMethodInvocation, arg_operator_id: string): void
    connect(sigName: "handle-scan", callback: (($obj: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-scan", callback: (($obj: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-scan", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-eps-ue-mode-operation", callback: (($obj: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean)): number
    connect_after(sigName: "handle-set-eps-ue-mode-operation", callback: (($obj: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean)): number
    emit(sigName: "handle-set-eps-ue-mode-operation", invocation: Gio.DBusMethodInvocation, arg_mode: number): void
    connect(sigName: "handle-set-initial-eps-bearer-settings", callback: (($obj: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-initial-eps-bearer-settings", callback: (($obj: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-initial-eps-bearer-settings", invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModem3gppUssd {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    network_notification: string
    network_request: string
    state: number
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    call_cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean
    call_initiate(arg_command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_initiate_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_initiate_sync(arg_command: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_respond(arg_response: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_respond_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_respond_sync(arg_response: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reply */ string | null ]
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean
    vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    connect(sigName: "handle-cancel", callback: (($obj: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-initiate", callback: (($obj: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean)): number
    connect_after(sigName: "handle-initiate", callback: (($obj: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean)): number
    emit(sigName: "handle-initiate", invocation: Gio.DBusMethodInvocation, arg_command: string): void
    connect(sigName: "handle-respond", callback: (($obj: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean)): number
    connect_after(sigName: "handle-respond", callback: (($obj: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean)): number
    emit(sigName: "handle-respond", invocation: Gio.DBusMethodInvocation, arg_response: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemCdma {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemCdma */
    activation_state: number
    cdma1x_registration_state: number
    esn: string
    evdo_registration_state: number
    meid: string
    nid: number
    sid: number
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemCdma */
    call_activate(arg_carrier_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_activate_finish(res: Gio.AsyncResult): boolean
    call_activate_manual(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_activate_manual_finish(res: Gio.AsyncResult): boolean
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_activate_sync(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): boolean
    complete_activate(invocation: Gio.DBusMethodInvocation): void
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void
    emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemCdma */
    vfunc_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean
    vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemCdma */
    connect(sigName: "activation-state-changed", callback: (($obj: GdbusModemCdma, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void)): number
    connect_after(sigName: "activation-state-changed", callback: (($obj: GdbusModemCdma, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void)): number
    emit(sigName: "activation-state-changed", arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    connect(sigName: "handle-activate", callback: (($obj: GdbusModemCdma, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean)): number
    connect_after(sigName: "handle-activate", callback: (($obj: GdbusModemCdma, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean)): number
    emit(sigName: "handle-activate", invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): void
    connect(sigName: "handle-activate-manual", callback: (($obj: GdbusModemCdma, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-activate-manual", callback: (($obj: GdbusModemCdma, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-activate-manual", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemFirmware {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    update_settings: GLib.Variant
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    call_list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_selected */ string | null, /* out_installed */ GLib.Variant | null ]
    call_list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_selected */ string | null, /* out_installed */ GLib.Variant | null ]
    call_select(arg_uniqueid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_finish(res: Gio.AsyncResult): boolean
    call_select_sync(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): boolean
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void
    complete_select(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    connect(sigName: "handle-list", callback: (($obj: GdbusModemFirmware, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list", callback: (($obj: GdbusModemFirmware, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select", callback: (($obj: GdbusModemFirmware, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean)): number
    connect_after(sigName: "handle-select", callback: (($obj: GdbusModemFirmware, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean)): number
    emit(sigName: "handle-select", invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemLocation {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemLocation */
    assistance_data_servers: string[]
    capabilities: number
    enabled: number
    gps_refresh_rate: number
    location: GLib.Variant
    signals_location: boolean
    supl_server: string
    supported_assistance_data: number
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemLocation */
    call_get_location(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_location_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_Location */ GLib.Variant | null ]
    call_get_location_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_Location */ GLib.Variant | null ]
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_gps_refresh_rate(arg_rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_supl_server(arg_supl: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean
    call_set_supl_server_sync(arg_supl: string, cancellable?: Gio.Cancellable | null): boolean
    call_setup(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemLocation */
    vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean
    vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean
    vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemLocation */
    connect(sigName: "handle-get-location", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-location", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-location", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-inject-assistance-data", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-inject-assistance-data", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean)): number
    emit(sigName: "handle-inject-assistance-data", invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): void
    connect(sigName: "handle-set-gps-refresh-rate", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    connect_after(sigName: "handle-set-gps-refresh-rate", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    emit(sigName: "handle-set-gps-refresh-rate", invocation: Gio.DBusMethodInvocation, arg_rate: number): void
    connect(sigName: "handle-set-supl-server", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean)): number
    connect_after(sigName: "handle-set-supl-server", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean)): number
    emit(sigName: "handle-set-supl-server", invocation: Gio.DBusMethodInvocation, arg_supl: string): void
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemMessaging {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    default_storage: number
    messages: string[]
    supported_storages: GLib.Variant
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    call_create(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete(arg_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean
    call_list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void
    emit_added(arg_path: string, arg_received: boolean): void
    emit_deleted(arg_path: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    vfunc_added(arg_path: string, arg_received: boolean): void
    vfunc_deleted(arg_path: string): void
    vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    connect(sigName: "added", callback: (($obj: GdbusModemMessaging, arg_path: string, arg_received: boolean) => void)): number
    connect_after(sigName: "added", callback: (($obj: GdbusModemMessaging, arg_path: string, arg_received: boolean) => void)): number
    emit(sigName: "added", arg_path: string, arg_received: boolean): void
    connect(sigName: "deleted", callback: (($obj: GdbusModemMessaging, arg_path: string) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: GdbusModemMessaging, arg_path: string) => void)): number
    emit(sigName: "deleted", arg_path: string): void
    connect(sigName: "handle-create", callback: (($obj: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create", callback: (($obj: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete", callback: (($obj: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_path: string): void
    connect(sigName: "handle-list", callback: (($obj: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list", callback: (($obj: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemOma {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemOma */
    features: number
    pending_network_initiated_sessions: GLib.Variant
    session_state: number
    session_type: number
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemOma */
    call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean
    call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_cancel_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_session_finish(res: Gio.AsyncResult): boolean
    call_cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean
    call_setup(arg_features: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_features: number, cancellable?: Gio.Cancellable | null): boolean
    call_start_client_initiated_session(arg_session_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable?: Gio.Cancellable | null): boolean
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void
    emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemOma */
    vfunc_handle_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): boolean
    vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean
    vfunc_handle_start_client_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_type: number): boolean
    vfunc_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemOma */
    connect(sigName: "handle-accept-network-initiated-session", callback: (($obj: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean)): number
    connect_after(sigName: "handle-accept-network-initiated-session", callback: (($obj: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean)): number
    emit(sigName: "handle-accept-network-initiated-session", invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): void
    connect(sigName: "handle-cancel-session", callback: (($obj: GdbusModemOma, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel-session", callback: (($obj: GdbusModemOma, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel-session", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_features: number): void
    connect(sigName: "handle-start-client-initiated-session", callback: (($obj: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean)): number
    connect_after(sigName: "handle-start-client-initiated-session", callback: (($obj: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean)): number
    emit(sigName: "handle-start-client-initiated-session", invocation: Gio.DBusMethodInvocation, arg_session_type: number): void
    connect(sigName: "session-state-changed", callback: (($obj: GdbusModemOma, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void)): number
    connect_after(sigName: "session-state-changed", callback: (($obj: GdbusModemOma, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void)): number
    emit(sigName: "session-state-changed", arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemSignal {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemSignal */
    cdma: GLib.Variant
    evdo: GLib.Variant
    gsm: GLib.Variant
    lte: GLib.Variant
    nr5g: GLib.Variant
    rate: number
    umts: GLib.Variant
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemSignal */
    call_setup(arg_rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSignal */
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemSignal */
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemSignal, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemSignal, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_rate: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemSimple {
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemSimple */
    call_connect(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_connect_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_bearer */ string | null ]
    call_connect_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_bearer */ string | null ]
    call_disconnect(arg_bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_status(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_status_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_properties */ GLib.Variant | null ]
    call_get_status_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_properties */ GLib.Variant | null ]
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSimple */
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean
    vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemSimple */
    connect(sigName: "handle-connect", callback: (($obj: GdbusModemSimple, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-connect", callback: (($obj: GdbusModemSimple, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-connect", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-disconnect", callback: (($obj: GdbusModemSimple, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: GdbusModemSimple, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    emit(sigName: "handle-disconnect", invocation: Gio.DBusMethodInvocation, arg_bearer: string): void
    connect(sigName: "handle-get-status", callback: (($obj: GdbusModemSimple, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-status", callback: (($obj: GdbusModemSimple, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-status", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemTime {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemTime */
    network_timezone: GLib.Variant
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemTime */
    call_get_network_time(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_network_time_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_time */ string | null ]
    call_get_network_time_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_time */ string | null ]
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void
    emit_network_time_changed(arg_time: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemTime */
    vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_network_time_changed(arg_time: string): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemTime */
    connect(sigName: "handle-get-network-time", callback: (($obj: GdbusModemTime, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-network-time", callback: (($obj: GdbusModemTime, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-network-time", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "network-time-changed", callback: (($obj: GdbusModemTime, arg_time: string) => void)): number
    connect_after(sigName: "network-time-changed", callback: (($obj: GdbusModemTime, arg_time: string) => void)): number
    emit(sigName: "network-time-changed", arg_time: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusModemVoice {
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemVoice */
    calls: string[]
    emergency_only: boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemVoice */
    call_call_waiting_query(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_call_waiting_query_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_status */ boolean | null ]
    call_call_waiting_query_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_status */ boolean | null ]
    call_call_waiting_setup(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean
    call_call_waiting_setup_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_create_call(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_call_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_call_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete_call(arg_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_call_finish(res: Gio.AsyncResult): boolean
    call_delete_call_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean
    call_hangup_all(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hangup_all_finish(res: Gio.AsyncResult): boolean
    call_hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean
    call_hangup_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean
    call_hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    call_hold_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hold_and_accept_finish(res: Gio.AsyncResult): boolean
    call_hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    call_list_calls(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_calls_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_list_calls_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_transfer(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_transfer_finish(res: Gio.AsyncResult): boolean
    call_transfer_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void
    complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void
    complete_hangup_all(invocation: Gio.DBusMethodInvocation): void
    complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void
    complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void
    complete_transfer(invocation: Gio.DBusMethodInvocation): void
    emit_call_added(arg_path: string): void
    emit_call_deleted(arg_path: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemVoice */
    vfunc_call_added(arg_path: string): void
    vfunc_call_deleted(arg_path: string): void
    vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean
    vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemVoice */
    connect(sigName: "call-added", callback: (($obj: GdbusModemVoice, arg_path: string) => void)): number
    connect_after(sigName: "call-added", callback: (($obj: GdbusModemVoice, arg_path: string) => void)): number
    emit(sigName: "call-added", arg_path: string): void
    connect(sigName: "call-deleted", callback: (($obj: GdbusModemVoice, arg_path: string) => void)): number
    connect_after(sigName: "call-deleted", callback: (($obj: GdbusModemVoice, arg_path: string) => void)): number
    emit(sigName: "call-deleted", arg_path: string): void
    connect(sigName: "handle-call-waiting-query", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-call-waiting-query", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-call-waiting-query", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-call-waiting-setup", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-call-waiting-setup", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-call-waiting-setup", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-create-call", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-call", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-call", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete-call", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    connect_after(sigName: "handle-delete-call", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    emit(sigName: "handle-delete-call", invocation: Gio.DBusMethodInvocation, arg_path: string): void
    connect(sigName: "handle-hangup-all", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hangup-all", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hangup-all", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-hangup-and-accept", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hangup-and-accept", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hangup-and-accept", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-hold-and-accept", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hold-and-accept", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hold-and-accept", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-list-calls", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list-calls", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list-calls", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-transfer", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-transfer", callback: (($obj: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-transfer", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusObject {
    /* Properties of ModemManager-1.0.ModemManager.GdbusObject */
    modem: GdbusModem
    modem_cdma: GdbusModemCdma
    modem_firmware: GdbusModemFirmware
    modem_location: GdbusModemLocation
    modem_messaging: GdbusModemMessaging
    modem_oma: GdbusModemOma
    modem_signal: GdbusModemSignal
    modem_simple: GdbusModemSimple
    modem_time: GdbusModemTime
    modem_voice: GdbusModemVoice
    modem3gpp: GdbusModem3gpp
    modem3gpp_ussd: GdbusModem3gppUssd
    /* Methods of ModemManager-1.0.ModemManager.GdbusObject */
    get_modem(): GdbusModem | null
    get_modem3gpp(): GdbusModem3gpp | null
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null
    get_modem_cdma(): GdbusModemCdma | null
    get_modem_firmware(): GdbusModemFirmware | null
    get_modem_location(): GdbusModemLocation | null
    get_modem_messaging(): GdbusModemMessaging | null
    get_modem_oma(): GdbusModemOma | null
    get_modem_signal(): GdbusModemSignal | null
    get_modem_simple(): GdbusModemSimple | null
    get_modem_time(): GdbusModemTime | null
    get_modem_voice(): GdbusModemVoice | null
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Virtual methods of Gio-2.0.Gio.DBusObject */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: GdbusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: GdbusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: GdbusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: GdbusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    static name: string
}
export class GdbusOrgFreedesktopModemManager1 {
    /* Properties of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    version: string
    /* Methods of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_inhibit_device_finish(res: Gio.AsyncResult): boolean
    call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_report_kernel_event(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_report_kernel_event_finish(res: Gio.AsyncResult): boolean
    call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_scan_devices(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_scan_devices_finish(res: Gio.AsyncResult): boolean
    call_scan_devices_sync(cancellable?: Gio.Cancellable | null): boolean
    call_set_logging(arg_level: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_logging_finish(res: Gio.AsyncResult): boolean
    call_set_logging_sync(arg_level: string, cancellable?: Gio.Cancellable | null): boolean
    complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void
    complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void
    complete_scan_devices(invocation: Gio.DBusMethodInvocation): void
    complete_set_logging(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean
    vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    connect(sigName: "handle-inhibit-device", callback: (($obj: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean) => boolean)): number
    connect_after(sigName: "handle-inhibit-device", callback: (($obj: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean) => boolean)): number
    emit(sigName: "handle-inhibit-device", invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): void
    connect(sigName: "handle-report-kernel-event", callback: (($obj: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-report-kernel-event", callback: (($obj: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-report-kernel-event", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-scan-devices", callback: (($obj: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-scan-devices", callback: (($obj: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-scan-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-logging", callback: (($obj: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_level: string) => boolean)): number
    connect_after(sigName: "handle-set-logging", callback: (($obj: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_level: string) => boolean)): number
    emit(sigName: "handle-set-logging", invocation: Gio.DBusMethodInvocation, arg_level: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusSim {
    /* Properties of ModemManager-1.0.ModemManager.GdbusSim */
    active: boolean
    eid: string
    emergency_numbers: string[]
    imsi: string
    operator_identifier: string
    operator_name: string
    sim_identifier: string
    /* Methods of ModemManager-1.0.ModemManager.GdbusSim */
    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_change_pin_finish(res: Gio.AsyncResult): boolean
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): boolean
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_pin_finish(res: Gio.AsyncResult): boolean
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_send_pin(arg_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_pin_finish(res: Gio.AsyncResult): boolean
    call_send_pin_sync(arg_pin: string, cancellable?: Gio.Cancellable | null): boolean
    call_send_puk(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_puk_finish(res: Gio.AsyncResult): boolean
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): boolean
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusSim */
    vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean
    vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean
    vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean
    vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusSim */
    connect(sigName: "handle-change-pin", callback: (($obj: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean)): number
    connect_after(sigName: "handle-change-pin", callback: (($obj: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean)): number
    emit(sigName: "handle-change-pin", invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): void
    connect(sigName: "handle-enable-pin", callback: (($obj: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-pin", callback: (($obj: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean)): number
    emit(sigName: "handle-enable-pin", invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): void
    connect(sigName: "handle-send-pin", callback: (($obj: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean)): number
    connect_after(sigName: "handle-send-pin", callback: (($obj: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean)): number
    emit(sigName: "handle-send-pin", invocation: Gio.DBusMethodInvocation, arg_pin: string): void
    connect(sigName: "handle-send-puk", callback: (($obj: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean)): number
    connect_after(sigName: "handle-send-puk", callback: (($obj: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean)): number
    emit(sigName: "handle-send-puk", invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class GdbusSms {
    /* Properties of ModemManager-1.0.ModemManager.GdbusSms */
    "class": number
    data: GLib.Variant
    delivery_report_request: boolean
    delivery_state: number
    discharge_timestamp: string
    message_reference: number
    number: string
    pdu_type: number
    service_category: number
    smsc: string
    state: number
    storage: number
    teleservice_id: number
    text: string
    timestamp: string
    validity: GLib.Variant
    /* Methods of ModemManager-1.0.ModemManager.GdbusSms */
    call_send(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_finish(res: Gio.AsyncResult): boolean
    call_send_sync(cancellable?: Gio.Cancellable | null): boolean
    call_store(arg_storage: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_store_finish(res: Gio.AsyncResult): boolean
    call_store_sync(arg_storage: number, cancellable?: Gio.Cancellable | null): boolean
    complete_send(invocation: Gio.DBusMethodInvocation): void
    complete_store(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusSms */
    vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean
    /* Signals of ModemManager-1.0.ModemManager.GdbusSms */
    connect(sigName: "handle-send", callback: (($obj: GdbusSms, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-send", callback: (($obj: GdbusSms, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-send", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-store", callback: (($obj: GdbusSms, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean)): number
    connect_after(sigName: "handle-store", callback: (($obj: GdbusSms, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean)): number
    emit(sigName: "handle-store", invocation: Gio.DBusMethodInvocation, arg_storage: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export interface Bearer_ConstructProps extends GdbusBearerProxy_ConstructProps {
    bearer_type?: number
    connected?: boolean
    interface?: string
    ip_timeout?: number
    ip4_config?: GLib.Variant
    ip6_config?: GLib.Variant
    properties?: GLib.Variant
    stats?: GLib.Variant
    suspended?: boolean
}
export class Bearer {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusBearer */
    bearer_type: number
    connected: boolean
    interface: string
    ip_timeout: number
    ip4_config: GLib.Variant
    ip6_config: GLib.Variant
    properties: GLib.Variant
    stats: GLib.Variant
    suspended: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Bearer */
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(res: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(res: Gio.AsyncResult): boolean
    disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    dup_interface(): string
    dup_path(): string
    get_bearer_type(): BearerType
    get_connected(): boolean
    get_interface(): string
    get_ip_timeout(): number
    get_ipv4_config(): BearerIpConfig
    get_ipv6_config(): BearerIpConfig
    get_path(): string
    get_properties(): BearerProperties
    get_stats(): BearerStats
    get_suspended(): boolean
    peek_ipv4_config(): BearerIpConfig
    peek_ipv6_config(): BearerIpConfig
    peek_properties(): BearerProperties
    peek_stats(): BearerStats
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusBearer */
    call_connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_connect_finish(res: Gio.AsyncResult): boolean
    call_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_connect(invocation: Gio.DBusMethodInvocation): void
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusBearerProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Bearer, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Bearer, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Bearer, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Bearer, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusBearer */
    connect(sigName: "handle-connect", callback: (($obj: Bearer, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-connect", callback: (($obj: Bearer, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-connect", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-disconnect", callback: (($obj: Bearer, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: Bearer, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bearer-type", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bearer-type", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connected", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-timeout", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-timeout", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::properties", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspended", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspended", callback: (($obj: Bearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bearer_ConstructProps)
    _init (config?: Bearer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): Bearer
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Bearer
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): Bearer
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Bearer
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface BearerIpConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class BearerIpConfig {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.BearerIpConfig */
    get_address(): string
    get_dns(): string[]
    get_gateway(): string
    get_method(): BearerIpMethod
    get_mtu(): number
    get_prefix(): number
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
    connect(sigName: "notify", callback: (($obj: BearerIpConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BearerIpConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BearerIpConfig_ConstructProps)
    _init (config?: BearerIpConfig_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BearerProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class BearerProperties {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.BearerProperties */
    get_allow_roaming(): boolean
    get_allowed_auth(): BearerAllowedAuth
    get_apn(): string
    get_ip_type(): BearerIpFamily
    get_number(): string
    get_password(): string
    get_rm_protocol(): ModemCdmaRmProtocol
    get_user(): string
    set_allow_roaming(allow_roaming: boolean): void
    set_allowed_auth(allowed_auth: BearerAllowedAuth): void
    set_apn(apn: string): void
    set_ip_type(ip_type: BearerIpFamily): void
    set_number(number: string): void
    set_password(password: string): void
    set_rm_protocol(protocol: ModemCdmaRmProtocol): void
    set_user(user: string): void
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
    connect(sigName: "notify", callback: (($obj: BearerProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BearerProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BearerProperties_ConstructProps)
    _init (config?: BearerProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BearerProperties
    static $gtype: GObject.Type
}
export interface BearerStats_ConstructProps extends GObject.Object_ConstructProps {
}
export class BearerStats {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.BearerStats */
    get_attempts(): number
    get_duration(): number
    get_failed_attempts(): number
    get_rx_bytes(): number
    get_total_duration(): number
    get_total_rx_bytes(): number
    get_total_tx_bytes(): number
    get_tx_bytes(): number
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
    connect(sigName: "notify", callback: (($obj: BearerStats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BearerStats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BearerStats_ConstructProps)
    _init (config?: BearerStats_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Call_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class Call {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Call */
    accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    accept_finish(res: Gio.AsyncResult): boolean
    accept_sync(cancellable?: Gio.Cancellable | null): boolean
    deflect(number: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deflect_finish(res: Gio.AsyncResult): boolean
    deflect_sync(number: string, cancellable?: Gio.Cancellable | null): boolean
    dup_audio_port(): string
    dup_number(): string
    dup_path(): string
    get_audio_format(): CallAudioFormat
    get_audio_port(): string
    get_direction(): CallDirection
    get_multiparty(): boolean
    get_number(): string
    get_path(): string
    get_state(): CallState
    get_state_reason(): CallStateReason
    hangup(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    hangup_finish(res: Gio.AsyncResult): boolean
    hangup_sync(cancellable?: Gio.Cancellable | null): boolean
    join_multiparty(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    join_multiparty_finish(res: Gio.AsyncResult): boolean
    join_multiparty_sync(cancellable?: Gio.Cancellable | null): boolean
    leave_multiparty(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    leave_multiparty_finish(res: Gio.AsyncResult): boolean
    leave_multiparty_sync(cancellable?: Gio.Cancellable | null): boolean
    peek_audio_format(): CallAudioFormat
    send_dtmf(dtmf: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_dtmf_finish(res: Gio.AsyncResult): boolean
    send_dtmf_sync(dtmf: string, cancellable?: Gio.Cancellable | null): boolean
    start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_finish(res: Gio.AsyncResult): boolean
    start_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of ModemManager-1.0.ModemManager.Call */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Call, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Call, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Call, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Call, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Call, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Call, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Call, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Call, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Call, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Call, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Call, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Call, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Call_ConstructProps)
    _init (config?: Call_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface CallAudioFormat_ConstructProps extends GObject.Object_ConstructProps {
}
export class CallAudioFormat {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.CallAudioFormat */
    get_encoding(): string
    get_rate(): number
    get_resolution(): string
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
    connect(sigName: "notify", callback: (($obj: CallAudioFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CallAudioFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CallAudioFormat_ConstructProps)
    _init (config?: CallAudioFormat_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CallProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class CallProperties {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.CallProperties */
    get_dictionary(): GLib.Variant
    get_direction(): CallDirection
    get_number(): string
    get_state(): CallState
    get_state_reason(): CallStateReason
    set_direction(direction: CallDirection): void
    set_number(text: string): void
    set_state(state: CallState): void
    set_state_reason(state_reason: CallStateReason): void
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
    connect(sigName: "notify", callback: (($obj: CallProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CallProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CallProperties_ConstructProps)
    _init (config?: CallProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CallProperties
    static new_from_dictionary(dictionary: GLib.Variant): CallProperties
    static new_from_string(str: string): CallProperties
    static $gtype: GObject.Type
}
export interface CdmaManualActivationProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class CdmaManualActivationProperties {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.CdmaManualActivationProperties */
    get_mdn(): string
    get_min(): string
    get_mn_aaa_key(): string
    get_mn_ha_key(): string
    get_prl(): [ /* returnType */ number, /* prl_len */ number ]
    get_prl_bytearray(): Uint8Array[]
    get_sid(): number
    get_spc(): string
    peek_prl_bytearray(): Uint8Array[]
    set_mdn(mdn: string): boolean
    set_min(min: string): boolean
    set_mn_aaa_key(mn_aaa_key: string): boolean
    set_mn_ha_key(mn_ha_key: string): boolean
    set_prl(prl: number, prl_length: number): boolean
    set_prl_bytearray(prl: Uint8Array[]): boolean
    set_sid(sid: number): void
    set_spc(spc: string): boolean
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
    connect(sigName: "notify", callback: (($obj: CdmaManualActivationProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CdmaManualActivationProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CdmaManualActivationProperties_ConstructProps)
    _init (config?: CdmaManualActivationProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CdmaManualActivationProperties
    static $gtype: GObject.Type
}
export interface FirmwareProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class FirmwareProperties {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.FirmwareProperties */
    get_dictionary(): GLib.Variant
    get_gobi_boot_version(): string
    get_gobi_modem_unique_id(): string
    get_gobi_pri_info(): string
    get_gobi_pri_unique_id(): string
    get_gobi_pri_version(): string
    get_image_type(): FirmwareImageType
    get_unique_id(): string
    set_gobi_boot_version(version: string): void
    set_gobi_modem_unique_id(id: string): void
    set_gobi_pri_info(info: string): void
    set_gobi_pri_unique_id(id: string): void
    set_gobi_pri_version(version: string): void
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
    connect(sigName: "notify", callback: (($obj: FirmwareProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FirmwareProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FirmwareProperties_ConstructProps)
    _init (config?: FirmwareProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(image_type: FirmwareImageType, unique_id: string): FirmwareProperties
    static new_from_dictionary(dictionary: GLib.Variant): FirmwareProperties
    static $gtype: GObject.Type
}
export interface FirmwareUpdateSettings_ConstructProps extends GObject.Object_ConstructProps {
}
export class FirmwareUpdateSettings {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.FirmwareUpdateSettings */
    get_device_ids(): string[]
    get_fastboot_at(): string
    get_method(): ModemFirmwareUpdateMethod
    get_version(): string
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
    connect(sigName: "notify", callback: (($obj: FirmwareUpdateSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FirmwareUpdateSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FirmwareUpdateSettings_ConstructProps)
    _init (config?: FirmwareUpdateSettings_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GdbusBearerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    bearer_type?: number
    connected?: boolean
    interface?: string
    ip_timeout?: number
    ip4_config?: GLib.Variant
    ip6_config?: GLib.Variant
    properties?: GLib.Variant
    stats?: GLib.Variant
    suspended?: boolean
}
export class GdbusBearerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusBearer */
    bearer_type: number
    connected: boolean
    interface: string
    ip_timeout: number
    ip4_config: GLib.Variant
    ip6_config: GLib.Variant
    properties: GLib.Variant
    stats: GLib.Variant
    suspended: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusBearer */
    call_connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_connect_finish(res: Gio.AsyncResult): boolean
    call_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_connect(invocation: Gio.DBusMethodInvocation): void
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusBearerProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusBearerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusBearerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusBearerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusBearerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusBearer */
    connect(sigName: "handle-connect", callback: (($obj: GdbusBearerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-connect", callback: (($obj: GdbusBearerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-connect", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-disconnect", callback: (($obj: GdbusBearerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: GdbusBearerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bearer-type", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bearer-type", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connected", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-timeout", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-timeout", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::properties", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspended", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspended", callback: (($obj: GdbusBearerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusBearerProxy_ConstructProps)
    _init (config?: GdbusBearerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusBearerProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusBearerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusBearerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusBearerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusBearerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusBearerProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusBearerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    bearer_type?: number
    connected?: boolean
    interface?: string
    ip_timeout?: number
    ip4_config?: GLib.Variant
    ip6_config?: GLib.Variant
    properties?: GLib.Variant
    stats?: GLib.Variant
    suspended?: boolean
}
export class GdbusBearerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusBearer */
    bearer_type: number
    connected: boolean
    interface: string
    ip_timeout: number
    ip4_config: GLib.Variant
    ip6_config: GLib.Variant
    properties: GLib.Variant
    stats: GLib.Variant
    suspended: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusBearer */
    call_connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_connect_finish(res: Gio.AsyncResult): boolean
    call_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_connect(invocation: Gio.DBusMethodInvocation): void
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusBearerSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusBearerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusBearerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusBearer */
    connect(sigName: "handle-connect", callback: (($obj: GdbusBearerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-connect", callback: (($obj: GdbusBearerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-connect", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-disconnect", callback: (($obj: GdbusBearerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: GdbusBearerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bearer-type", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bearer-type", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connected", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip-timeout", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-timeout", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip4-config", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-config", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::properties", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspended", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspended", callback: (($obj: GdbusBearerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusBearerSkeleton_ConstructProps)
    _init (config?: GdbusBearerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusBearerSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModem3gppProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    enabled_facility_locks?: number
    eps_ue_mode_operation?: number
    imei?: string
    initial_eps_bearer?: string
    initial_eps_bearer_settings?: GLib.Variant
    operator_code?: string
    operator_name?: string
    pco?: GLib.Variant
    registration_state?: number
    subscription_state?: number
}
export class GdbusModem3gppProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    enabled_facility_locks: number
    eps_ue_mode_operation: number
    imei: string
    initial_eps_bearer: string
    initial_eps_bearer_settings: GLib.Variant
    operator_code: string
    operator_name: string
    pco: GLib.Variant
    registration_state: number
    subscription_state: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    call_register(arg_operator_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_finish(res: Gio.AsyncResult): boolean
    call_register_sync(arg_operator_id: string, cancellable?: Gio.Cancellable | null): boolean
    call_scan(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_scan_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_results */ GLib.Variant | null ]
    call_scan_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_results */ GLib.Variant | null ]
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean
    call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_register(invocation: Gio.DBusMethodInvocation): void
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem3gppProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean
    vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean
    vfunc_handle_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModem3gppProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModem3gppProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModem3gppProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModem3gppProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    connect(sigName: "handle-register", callback: (($obj: GdbusModem3gppProxy, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean)): number
    connect_after(sigName: "handle-register", callback: (($obj: GdbusModem3gppProxy, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean)): number
    emit(sigName: "handle-register", invocation: Gio.DBusMethodInvocation, arg_operator_id: string): void
    connect(sigName: "handle-scan", callback: (($obj: GdbusModem3gppProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-scan", callback: (($obj: GdbusModem3gppProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-scan", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-eps-ue-mode-operation", callback: (($obj: GdbusModem3gppProxy, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean)): number
    connect_after(sigName: "handle-set-eps-ue-mode-operation", callback: (($obj: GdbusModem3gppProxy, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean)): number
    emit(sigName: "handle-set-eps-ue-mode-operation", invocation: Gio.DBusMethodInvocation, arg_mode: number): void
    connect(sigName: "handle-set-initial-eps-bearer-settings", callback: (($obj: GdbusModem3gppProxy, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-initial-eps-bearer-settings", callback: (($obj: GdbusModem3gppProxy, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-initial-eps-bearer-settings", invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled-facility-locks", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-facility-locks", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eps-ue-mode-operation", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eps-ue-mode-operation", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imei", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imei", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initial-eps-bearer", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-eps-bearer", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initial-eps-bearer-settings", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-eps-bearer-settings", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-code", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-code", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-name", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-name", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pco", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pco", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registration-state", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registration-state", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subscription-state", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscription-state", callback: (($obj: GdbusModem3gppProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModem3gppProxy_ConstructProps)
    _init (config?: GdbusModem3gppProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModem3gppProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModem3gppProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModem3gppProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModem3gppProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModem3gppProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModem3gppSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    enabled_facility_locks?: number
    eps_ue_mode_operation?: number
    imei?: string
    initial_eps_bearer?: string
    initial_eps_bearer_settings?: GLib.Variant
    operator_code?: string
    operator_name?: string
    pco?: GLib.Variant
    registration_state?: number
    subscription_state?: number
}
export class GdbusModem3gppSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    enabled_facility_locks: number
    eps_ue_mode_operation: number
    imei: string
    initial_eps_bearer: string
    initial_eps_bearer_settings: GLib.Variant
    operator_code: string
    operator_name: string
    pco: GLib.Variant
    registration_state: number
    subscription_state: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    call_register(arg_operator_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_finish(res: Gio.AsyncResult): boolean
    call_register_sync(arg_operator_id: string, cancellable?: Gio.Cancellable | null): boolean
    call_scan(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_scan_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_results */ GLib.Variant | null ]
    call_scan_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_results */ GLib.Variant | null ]
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean
    call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_register(invocation: Gio.DBusMethodInvocation): void
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem3gppSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean
    vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean
    vfunc_handle_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    connect(sigName: "handle-register", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean)): number
    connect_after(sigName: "handle-register", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean)): number
    emit(sigName: "handle-register", invocation: Gio.DBusMethodInvocation, arg_operator_id: string): void
    connect(sigName: "handle-scan", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-scan", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-scan", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-eps-ue-mode-operation", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean)): number
    connect_after(sigName: "handle-set-eps-ue-mode-operation", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean)): number
    emit(sigName: "handle-set-eps-ue-mode-operation", invocation: Gio.DBusMethodInvocation, arg_mode: number): void
    connect(sigName: "handle-set-initial-eps-bearer-settings", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-initial-eps-bearer-settings", callback: (($obj: GdbusModem3gppSkeleton, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-initial-eps-bearer-settings", invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled-facility-locks", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-facility-locks", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eps-ue-mode-operation", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eps-ue-mode-operation", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imei", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imei", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initial-eps-bearer", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-eps-bearer", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initial-eps-bearer-settings", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-eps-bearer-settings", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-code", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-code", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-name", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-name", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pco", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pco", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registration-state", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registration-state", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subscription-state", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscription-state", callback: (($obj: GdbusModem3gppSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModem3gppSkeleton_ConstructProps)
    _init (config?: GdbusModem3gppSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModem3gppSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModem3gppUssdProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    network_notification?: string
    network_request?: string
    state?: number
}
export class GdbusModem3gppUssdProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    network_notification: string
    network_request: string
    state: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    call_cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean
    call_initiate(arg_command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_initiate_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_initiate_sync(arg_command: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_respond(arg_response: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_respond_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_respond_sync(arg_response: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reply */ string | null ]
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem3gppUssdProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean
    vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModem3gppUssdProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModem3gppUssdProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModem3gppUssdProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModem3gppUssdProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    connect(sigName: "handle-cancel", callback: (($obj: GdbusModem3gppUssdProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: GdbusModem3gppUssdProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-initiate", callback: (($obj: GdbusModem3gppUssdProxy, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean)): number
    connect_after(sigName: "handle-initiate", callback: (($obj: GdbusModem3gppUssdProxy, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean)): number
    emit(sigName: "handle-initiate", invocation: Gio.DBusMethodInvocation, arg_command: string): void
    connect(sigName: "handle-respond", callback: (($obj: GdbusModem3gppUssdProxy, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean)): number
    connect_after(sigName: "handle-respond", callback: (($obj: GdbusModem3gppUssdProxy, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean)): number
    emit(sigName: "handle-respond", invocation: Gio.DBusMethodInvocation, arg_response: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-notification", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-notification", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-request", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-request", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: GdbusModem3gppUssdProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModem3gppUssdProxy_ConstructProps)
    _init (config?: GdbusModem3gppUssdProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModem3gppUssdProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModem3gppUssdProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModem3gppUssdProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModem3gppUssdProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModem3gppUssdSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    network_notification?: string
    network_request?: string
    state?: number
}
export class GdbusModem3gppUssdSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    network_notification: string
    network_request: string
    state: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    call_cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean
    call_initiate(arg_command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_initiate_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_initiate_sync(arg_command: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_respond(arg_response: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_respond_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_respond_sync(arg_response: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reply */ string | null ]
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem3gppUssdSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean
    vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModem3gppUssdSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModem3gppUssdSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    connect(sigName: "handle-cancel", callback: (($obj: GdbusModem3gppUssdSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: GdbusModem3gppUssdSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-initiate", callback: (($obj: GdbusModem3gppUssdSkeleton, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean)): number
    connect_after(sigName: "handle-initiate", callback: (($obj: GdbusModem3gppUssdSkeleton, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean)): number
    emit(sigName: "handle-initiate", invocation: Gio.DBusMethodInvocation, arg_command: string): void
    connect(sigName: "handle-respond", callback: (($obj: GdbusModem3gppUssdSkeleton, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean)): number
    connect_after(sigName: "handle-respond", callback: (($obj: GdbusModem3gppUssdSkeleton, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean)): number
    emit(sigName: "handle-respond", invocation: Gio.DBusMethodInvocation, arg_response: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-notification", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-notification", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-request", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-request", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: GdbusModem3gppUssdSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModem3gppUssdSkeleton_ConstructProps)
    _init (config?: GdbusModem3gppUssdSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModem3gppUssdSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemCdmaProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    activation_state?: number
    cdma1x_registration_state?: number
    esn?: string
    evdo_registration_state?: number
    meid?: string
    nid?: number
    sid?: number
}
export class GdbusModemCdmaProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemCdma */
    activation_state: number
    cdma1x_registration_state: number
    esn: string
    evdo_registration_state: number
    meid: string
    nid: number
    sid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemCdma */
    call_activate(arg_carrier_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_activate_finish(res: Gio.AsyncResult): boolean
    call_activate_manual(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_activate_manual_finish(res: Gio.AsyncResult): boolean
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_activate_sync(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): boolean
    complete_activate(invocation: Gio.DBusMethodInvocation): void
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void
    emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemCdmaProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean
    vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemCdmaProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemCdmaProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemCdmaProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemCdmaProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemCdma */
    connect(sigName: "activation-state-changed", callback: (($obj: GdbusModemCdmaProxy, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void)): number
    connect_after(sigName: "activation-state-changed", callback: (($obj: GdbusModemCdmaProxy, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void)): number
    emit(sigName: "activation-state-changed", arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    connect(sigName: "handle-activate", callback: (($obj: GdbusModemCdmaProxy, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean)): number
    connect_after(sigName: "handle-activate", callback: (($obj: GdbusModemCdmaProxy, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean)): number
    emit(sigName: "handle-activate", invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): void
    connect(sigName: "handle-activate-manual", callback: (($obj: GdbusModemCdmaProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-activate-manual", callback: (($obj: GdbusModemCdmaProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-activate-manual", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activation-state", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation-state", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma1x-registration-state", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma1x-registration-state", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::esn", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::esn", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::evdo-registration-state", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::evdo-registration-state", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::meid", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meid", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nid", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nid", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sid", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sid", callback: (($obj: GdbusModemCdmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemCdmaProxy_ConstructProps)
    _init (config?: GdbusModemCdmaProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemCdmaProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemCdmaProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemCdmaProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemCdmaProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemCdmaSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    activation_state?: number
    cdma1x_registration_state?: number
    esn?: string
    evdo_registration_state?: number
    meid?: string
    nid?: number
    sid?: number
}
export class GdbusModemCdmaSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemCdma */
    activation_state: number
    cdma1x_registration_state: number
    esn: string
    evdo_registration_state: number
    meid: string
    nid: number
    sid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemCdma */
    call_activate(arg_carrier_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_activate_finish(res: Gio.AsyncResult): boolean
    call_activate_manual(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_activate_manual_finish(res: Gio.AsyncResult): boolean
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_activate_sync(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): boolean
    complete_activate(invocation: Gio.DBusMethodInvocation): void
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void
    emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemCdmaSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean
    vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemCdmaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemCdmaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemCdma */
    connect(sigName: "activation-state-changed", callback: (($obj: GdbusModemCdmaSkeleton, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void)): number
    connect_after(sigName: "activation-state-changed", callback: (($obj: GdbusModemCdmaSkeleton, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void)): number
    emit(sigName: "activation-state-changed", arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    connect(sigName: "handle-activate", callback: (($obj: GdbusModemCdmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean)): number
    connect_after(sigName: "handle-activate", callback: (($obj: GdbusModemCdmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean)): number
    emit(sigName: "handle-activate", invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): void
    connect(sigName: "handle-activate-manual", callback: (($obj: GdbusModemCdmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-activate-manual", callback: (($obj: GdbusModemCdmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-activate-manual", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activation-state", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation-state", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma1x-registration-state", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma1x-registration-state", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::esn", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::esn", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::evdo-registration-state", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::evdo-registration-state", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::meid", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meid", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nid", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nid", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sid", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sid", callback: (($obj: GdbusModemCdmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemCdmaSkeleton_ConstructProps)
    _init (config?: GdbusModemCdmaSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemCdmaSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemFirmwareProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    update_settings?: GLib.Variant
}
export class GdbusModemFirmwareProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    update_settings: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    call_list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_selected */ string | null, /* out_installed */ GLib.Variant | null ]
    call_list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_selected */ string | null, /* out_installed */ GLib.Variant | null ]
    call_select(arg_uniqueid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_finish(res: Gio.AsyncResult): boolean
    call_select_sync(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): boolean
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void
    complete_select(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemFirmwareProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemFirmwareProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemFirmwareProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemFirmwareProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemFirmwareProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    connect(sigName: "handle-list", callback: (($obj: GdbusModemFirmwareProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list", callback: (($obj: GdbusModemFirmwareProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select", callback: (($obj: GdbusModemFirmwareProxy, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean)): number
    connect_after(sigName: "handle-select", callback: (($obj: GdbusModemFirmwareProxy, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean)): number
    emit(sigName: "handle-select", invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-settings", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-settings", callback: (($obj: GdbusModemFirmwareProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemFirmwareProxy_ConstructProps)
    _init (config?: GdbusModemFirmwareProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemFirmwareProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemFirmwareProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemFirmwareProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemFirmwareProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemFirmwareSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    update_settings?: GLib.Variant
}
export class GdbusModemFirmwareSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    update_settings: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    call_list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_selected */ string | null, /* out_installed */ GLib.Variant | null ]
    call_list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_selected */ string | null, /* out_installed */ GLib.Variant | null ]
    call_select(arg_uniqueid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_finish(res: Gio.AsyncResult): boolean
    call_select_sync(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): boolean
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void
    complete_select(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemFirmwareSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemFirmwareSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemFirmwareSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemFirmwareSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemFirmwareSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    connect(sigName: "handle-list", callback: (($obj: GdbusModemFirmwareSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list", callback: (($obj: GdbusModemFirmwareSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select", callback: (($obj: GdbusModemFirmwareSkeleton, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean)): number
    connect_after(sigName: "handle-select", callback: (($obj: GdbusModemFirmwareSkeleton, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean)): number
    emit(sigName: "handle-select", invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemFirmwareSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemFirmwareSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-settings", callback: (($obj: GdbusModemFirmwareSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-settings", callback: (($obj: GdbusModemFirmwareSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemFirmwareSkeleton_ConstructProps)
    _init (config?: GdbusModemFirmwareSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemFirmwareSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemLocationProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    assistance_data_servers?: string[]
    capabilities?: number
    enabled?: number
    gps_refresh_rate?: number
    location?: GLib.Variant
    signals_location?: boolean
    supl_server?: string
    supported_assistance_data?: number
}
export class GdbusModemLocationProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemLocation */
    assistance_data_servers: string[]
    capabilities: number
    enabled: number
    gps_refresh_rate: number
    location: GLib.Variant
    signals_location: boolean
    supl_server: string
    supported_assistance_data: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemLocation */
    call_get_location(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_location_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_Location */ GLib.Variant | null ]
    call_get_location_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_Location */ GLib.Variant | null ]
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_gps_refresh_rate(arg_rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_supl_server(arg_supl: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean
    call_set_supl_server_sync(arg_supl: string, cancellable?: Gio.Cancellable | null): boolean
    call_setup(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemLocationProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean
    vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean
    vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemLocationProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemLocationProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemLocationProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemLocationProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemLocation */
    connect(sigName: "handle-get-location", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-location", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-location", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-inject-assistance-data", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-inject-assistance-data", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean)): number
    emit(sigName: "handle-inject-assistance-data", invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): void
    connect(sigName: "handle-set-gps-refresh-rate", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    connect_after(sigName: "handle-set-gps-refresh-rate", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    emit(sigName: "handle-set-gps-refresh-rate", invocation: Gio.DBusMethodInvocation, arg_rate: number): void
    connect(sigName: "handle-set-supl-server", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean)): number
    connect_after(sigName: "handle-set-supl-server", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean)): number
    emit(sigName: "handle-set-supl-server", invocation: Gio.DBusMethodInvocation, arg_supl: string): void
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemLocationProxy, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::assistance-data-servers", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistance-data-servers", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gps-refresh-rate", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gps-refresh-rate", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signals-location", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signals-location", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supl-server", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supl-server", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-assistance-data", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-assistance-data", callback: (($obj: GdbusModemLocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemLocationProxy_ConstructProps)
    _init (config?: GdbusModemLocationProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemLocationProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemLocationProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemLocationProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemLocationProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemLocationProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemLocationProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemLocationSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    assistance_data_servers?: string[]
    capabilities?: number
    enabled?: number
    gps_refresh_rate?: number
    location?: GLib.Variant
    signals_location?: boolean
    supl_server?: string
    supported_assistance_data?: number
}
export class GdbusModemLocationSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemLocation */
    assistance_data_servers: string[]
    capabilities: number
    enabled: number
    gps_refresh_rate: number
    location: GLib.Variant
    signals_location: boolean
    supl_server: string
    supported_assistance_data: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemLocation */
    call_get_location(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_location_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_Location */ GLib.Variant | null ]
    call_get_location_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_Location */ GLib.Variant | null ]
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_gps_refresh_rate(arg_rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_supl_server(arg_supl: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean
    call_set_supl_server_sync(arg_supl: string, cancellable?: Gio.Cancellable | null): boolean
    call_setup(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemLocationSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean
    vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean
    vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemLocation */
    connect(sigName: "handle-get-location", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-location", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-location", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-inject-assistance-data", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-inject-assistance-data", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean)): number
    emit(sigName: "handle-inject-assistance-data", invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): void
    connect(sigName: "handle-set-gps-refresh-rate", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    connect_after(sigName: "handle-set-gps-refresh-rate", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    emit(sigName: "handle-set-gps-refresh-rate", invocation: Gio.DBusMethodInvocation, arg_rate: number): void
    connect(sigName: "handle-set-supl-server", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean)): number
    connect_after(sigName: "handle-set-supl-server", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean)): number
    emit(sigName: "handle-set-supl-server", invocation: Gio.DBusMethodInvocation, arg_supl: string): void
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemLocationSkeleton, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::assistance-data-servers", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistance-data-servers", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gps-refresh-rate", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gps-refresh-rate", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signals-location", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signals-location", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supl-server", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supl-server", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-assistance-data", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-assistance-data", callback: (($obj: GdbusModemLocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemLocationSkeleton_ConstructProps)
    _init (config?: GdbusModemLocationSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemLocationSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemMessagingProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    default_storage?: number
    messages?: string[]
    supported_storages?: GLib.Variant
}
export class GdbusModemMessagingProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    default_storage: number
    messages: string[]
    supported_storages: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    call_create(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete(arg_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean
    call_list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void
    emit_added(arg_path: string, arg_received: boolean): void
    emit_deleted(arg_path: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemMessagingProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_added(arg_path: string, arg_received: boolean): void
    vfunc_deleted(arg_path: string): void
    vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemMessagingProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemMessagingProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemMessagingProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemMessagingProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    connect(sigName: "added", callback: (($obj: GdbusModemMessagingProxy, arg_path: string, arg_received: boolean) => void)): number
    connect_after(sigName: "added", callback: (($obj: GdbusModemMessagingProxy, arg_path: string, arg_received: boolean) => void)): number
    emit(sigName: "added", arg_path: string, arg_received: boolean): void
    connect(sigName: "deleted", callback: (($obj: GdbusModemMessagingProxy, arg_path: string) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: GdbusModemMessagingProxy, arg_path: string) => void)): number
    emit(sigName: "deleted", arg_path: string): void
    connect(sigName: "handle-create", callback: (($obj: GdbusModemMessagingProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create", callback: (($obj: GdbusModemMessagingProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete", callback: (($obj: GdbusModemMessagingProxy, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: GdbusModemMessagingProxy, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_path: string): void
    connect(sigName: "handle-list", callback: (($obj: GdbusModemMessagingProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list", callback: (($obj: GdbusModemMessagingProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-storage", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-storage", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::messages", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::messages", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-storages", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-storages", callback: (($obj: GdbusModemMessagingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemMessagingProxy_ConstructProps)
    _init (config?: GdbusModemMessagingProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemMessagingProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemMessagingProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemMessagingProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemMessagingProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemMessagingSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    default_storage?: number
    messages?: string[]
    supported_storages?: GLib.Variant
}
export class GdbusModemMessagingSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    default_storage: number
    messages: string[]
    supported_storages: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    call_create(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete(arg_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean
    call_list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void
    emit_added(arg_path: string, arg_received: boolean): void
    emit_deleted(arg_path: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemMessagingSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_added(arg_path: string, arg_received: boolean): void
    vfunc_deleted(arg_path: string): void
    vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemMessagingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemMessagingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    connect(sigName: "added", callback: (($obj: GdbusModemMessagingSkeleton, arg_path: string, arg_received: boolean) => void)): number
    connect_after(sigName: "added", callback: (($obj: GdbusModemMessagingSkeleton, arg_path: string, arg_received: boolean) => void)): number
    emit(sigName: "added", arg_path: string, arg_received: boolean): void
    connect(sigName: "deleted", callback: (($obj: GdbusModemMessagingSkeleton, arg_path: string) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: GdbusModemMessagingSkeleton, arg_path: string) => void)): number
    emit(sigName: "deleted", arg_path: string): void
    connect(sigName: "handle-create", callback: (($obj: GdbusModemMessagingSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create", callback: (($obj: GdbusModemMessagingSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete", callback: (($obj: GdbusModemMessagingSkeleton, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: GdbusModemMessagingSkeleton, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_path: string): void
    connect(sigName: "handle-list", callback: (($obj: GdbusModemMessagingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list", callback: (($obj: GdbusModemMessagingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-storage", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-storage", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::messages", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::messages", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-storages", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-storages", callback: (($obj: GdbusModemMessagingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemMessagingSkeleton_ConstructProps)
    _init (config?: GdbusModemMessagingSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemMessagingSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemOmaProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    features?: number
    pending_network_initiated_sessions?: GLib.Variant
    session_state?: number
    session_type?: number
}
export class GdbusModemOmaProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemOma */
    features: number
    pending_network_initiated_sessions: GLib.Variant
    session_state: number
    session_type: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemOma */
    call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean
    call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_cancel_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_session_finish(res: Gio.AsyncResult): boolean
    call_cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean
    call_setup(arg_features: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_features: number, cancellable?: Gio.Cancellable | null): boolean
    call_start_client_initiated_session(arg_session_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable?: Gio.Cancellable | null): boolean
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void
    emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemOmaProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): boolean
    vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean
    vfunc_handle_start_client_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_type: number): boolean
    vfunc_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemOmaProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemOmaProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemOmaProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemOmaProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemOma */
    connect(sigName: "handle-accept-network-initiated-session", callback: (($obj: GdbusModemOmaProxy, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean)): number
    connect_after(sigName: "handle-accept-network-initiated-session", callback: (($obj: GdbusModemOmaProxy, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean)): number
    emit(sigName: "handle-accept-network-initiated-session", invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): void
    connect(sigName: "handle-cancel-session", callback: (($obj: GdbusModemOmaProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel-session", callback: (($obj: GdbusModemOmaProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel-session", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemOmaProxy, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemOmaProxy, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_features: number): void
    connect(sigName: "handle-start-client-initiated-session", callback: (($obj: GdbusModemOmaProxy, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean)): number
    connect_after(sigName: "handle-start-client-initiated-session", callback: (($obj: GdbusModemOmaProxy, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean)): number
    emit(sigName: "handle-start-client-initiated-session", invocation: Gio.DBusMethodInvocation, arg_session_type: number): void
    connect(sigName: "session-state-changed", callback: (($obj: GdbusModemOmaProxy, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void)): number
    connect_after(sigName: "session-state-changed", callback: (($obj: GdbusModemOmaProxy, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void)): number
    emit(sigName: "session-state-changed", arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::features", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pending-network-initiated-sessions", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pending-network-initiated-sessions", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-state", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-state", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-type", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-type", callback: (($obj: GdbusModemOmaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemOmaProxy_ConstructProps)
    _init (config?: GdbusModemOmaProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemOmaProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemOmaProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemOmaProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemOmaProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemOmaProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemOmaProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemOmaSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    features?: number
    pending_network_initiated_sessions?: GLib.Variant
    session_state?: number
    session_type?: number
}
export class GdbusModemOmaSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemOma */
    features: number
    pending_network_initiated_sessions: GLib.Variant
    session_state: number
    session_type: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemOma */
    call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean
    call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_cancel_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_session_finish(res: Gio.AsyncResult): boolean
    call_cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean
    call_setup(arg_features: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_features: number, cancellable?: Gio.Cancellable | null): boolean
    call_start_client_initiated_session(arg_session_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable?: Gio.Cancellable | null): boolean
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void
    emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemOmaSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): boolean
    vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean
    vfunc_handle_start_client_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_type: number): boolean
    vfunc_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemOma */
    connect(sigName: "handle-accept-network-initiated-session", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean)): number
    connect_after(sigName: "handle-accept-network-initiated-session", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean)): number
    emit(sigName: "handle-accept-network-initiated-session", invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): void
    connect(sigName: "handle-cancel-session", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel-session", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel-session", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_features: number): void
    connect(sigName: "handle-start-client-initiated-session", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean)): number
    connect_after(sigName: "handle-start-client-initiated-session", callback: (($obj: GdbusModemOmaSkeleton, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean)): number
    emit(sigName: "handle-start-client-initiated-session", invocation: Gio.DBusMethodInvocation, arg_session_type: number): void
    connect(sigName: "session-state-changed", callback: (($obj: GdbusModemOmaSkeleton, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void)): number
    connect_after(sigName: "session-state-changed", callback: (($obj: GdbusModemOmaSkeleton, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void)): number
    emit(sigName: "session-state-changed", arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::features", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pending-network-initiated-sessions", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pending-network-initiated-sessions", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-state", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-state", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-type", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-type", callback: (($obj: GdbusModemOmaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemOmaSkeleton_ConstructProps)
    _init (config?: GdbusModemOmaSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemOmaSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    access_technologies?: number
    bearers?: string[]
    carrier_configuration?: string
    carrier_configuration_revision?: string
    current_bands?: GLib.Variant
    current_capabilities?: number
    current_modes?: GLib.Variant
    device?: string
    device_identifier?: string
    drivers?: string[]
    equipment_identifier?: string
    hardware_revision?: string
    manufacturer?: string
    max_active_bearers?: number
    max_bearers?: number
    model?: string
    own_numbers?: string[]
    plugin?: string
    ports?: GLib.Variant
    power_state?: number
    primary_port?: string
    primary_sim_slot?: number
    revision?: string
    signal_quality?: GLib.Variant
    sim?: string
    sim_slots?: string[]
    state?: number
    state_failed_reason?: number
    supported_bands?: GLib.Variant
    supported_capabilities?: GLib.Variant
    supported_ip_families?: number
    supported_modes?: GLib.Variant
    unlock_required?: number
    unlock_retries?: GLib.Variant
}
export class GdbusModemProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem */
    access_technologies: number
    bearers: string[]
    carrier_configuration: string
    carrier_configuration_revision: string
    current_bands: GLib.Variant
    current_capabilities: number
    current_modes: GLib.Variant
    device: string
    device_identifier: string
    drivers: string[]
    equipment_identifier: string
    hardware_revision: string
    manufacturer: string
    max_active_bearers: number
    max_bearers: number
    model: string
    own_numbers: string[]
    plugin: string
    ports: GLib.Variant
    power_state: number
    primary_port: string
    primary_sim_slot: number
    revision: string
    signal_quality: GLib.Variant
    sim: string
    sim_slots: string[]
    state: number
    state_failed_reason: number
    supported_bands: GLib.Variant
    supported_capabilities: GLib.Variant
    supported_ip_families: number
    supported_modes: GLib.Variant
    unlock_required: number
    unlock_retries: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem */
    call_command(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_command_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_response */ string | null ]
    call_command_sync(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_response */ string | null ]
    call_create_bearer(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_bearer_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_bearer_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete_bearer(arg_bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean
    call_delete_bearer_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean
    call_enable(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_finish(res: Gio.AsyncResult): boolean
    call_enable_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_factory_reset(arg_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_factory_reset_finish(res: Gio.AsyncResult): boolean
    call_factory_reset_sync(arg_code: string, cancellable?: Gio.Cancellable | null): boolean
    call_list_bearers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_bearers_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_bearers */ string[] | null ]
    call_list_bearers_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_bearers */ string[] | null ]
    call_reset(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_reset_finish(res: Gio.AsyncResult): boolean
    call_reset_sync(cancellable?: Gio.Cancellable | null): boolean
    call_set_current_bands(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_current_capabilities(arg_capabilities: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_current_modes(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_power_state(arg_state: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_power_state_finish(res: Gio.AsyncResult): boolean
    call_set_power_state_sync(arg_state: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_primary_sim_slot(arg_sim_slot: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean
    call_set_primary_sim_slot_sync(arg_sim_slot: number, cancellable?: Gio.Cancellable | null): boolean
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void
    complete_enable(invocation: Gio.DBusMethodInvocation): void
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void
    complete_reset(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void
    complete_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation): void
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean
    vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean
    vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean
    vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean
    vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean
    vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean
    vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean
    vfunc_handle_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): boolean
    vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem */
    connect(sigName: "handle-command", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean)): number
    connect_after(sigName: "handle-command", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean)): number
    emit(sigName: "handle-command", invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): void
    connect(sigName: "handle-create-bearer", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-bearer", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-bearer", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete-bearer", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    connect_after(sigName: "handle-delete-bearer", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    emit(sigName: "handle-delete-bearer", invocation: Gio.DBusMethodInvocation, arg_bearer: string): void
    connect(sigName: "handle-enable", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-enable", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-factory-reset", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean)): number
    connect_after(sigName: "handle-factory-reset", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean)): number
    emit(sigName: "handle-factory-reset", invocation: Gio.DBusMethodInvocation, arg_code: string): void
    connect(sigName: "handle-list-bearers", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list-bearers", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list-bearers", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-reset", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-reset", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-reset", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-current-bands", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-current-bands", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-current-bands", invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): void
    connect(sigName: "handle-set-current-capabilities", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean)): number
    connect_after(sigName: "handle-set-current-capabilities", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean)): number
    emit(sigName: "handle-set-current-capabilities", invocation: Gio.DBusMethodInvocation, arg_capabilities: number): void
    connect(sigName: "handle-set-current-modes", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-current-modes", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-current-modes", invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): void
    connect(sigName: "handle-set-power-state", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean)): number
    connect_after(sigName: "handle-set-power-state", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean)): number
    emit(sigName: "handle-set-power-state", invocation: Gio.DBusMethodInvocation, arg_state: number): void
    connect(sigName: "handle-set-primary-sim-slot", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean)): number
    connect_after(sigName: "handle-set-primary-sim-slot", callback: (($obj: GdbusModemProxy, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean)): number
    emit(sigName: "handle-set-primary-sim-slot", invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): void
    connect(sigName: "state-changed", callback: (($obj: GdbusModemProxy, arg_old: number, arg_new: number, arg_reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: GdbusModemProxy, arg_old: number, arg_new: number, arg_reason: number) => void)): number
    emit(sigName: "state-changed", arg_old: number, arg_new: number, arg_reason: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::access-technologies", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-technologies", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bearers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bearers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::carrier-configuration", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier-configuration", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::carrier-configuration-revision", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier-configuration-revision", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-bands", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-bands", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-capabilities", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-capabilities", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-modes", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-modes", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-identifier", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-identifier", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drivers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drivers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::equipment-identifier", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equipment-identifier", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hardware-revision", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hardware-revision", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-active-bearers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-active-bearers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bearers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bearers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::own-numbers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::own-numbers", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::plugin", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ports", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ports", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-state", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-state", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-port", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-port", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-sim-slot", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-sim-slot", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::revision", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signal-quality", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-quality", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim-slots", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim-slots", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-failed-reason", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-failed-reason", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-bands", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-bands", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-capabilities", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-capabilities", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-ip-families", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-ip-families", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-modes", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-modes", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unlock-required", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unlock-required", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unlock-retries", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unlock-retries", callback: (($obj: GdbusModemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemProxy_ConstructProps)
    _init (config?: GdbusModemProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemSignalProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    cdma?: GLib.Variant
    evdo?: GLib.Variant
    gsm?: GLib.Variant
    lte?: GLib.Variant
    nr5g?: GLib.Variant
    rate?: number
    umts?: GLib.Variant
}
export class GdbusModemSignalProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemSignal */
    cdma: GLib.Variant
    evdo: GLib.Variant
    gsm: GLib.Variant
    lte: GLib.Variant
    nr5g: GLib.Variant
    rate: number
    umts: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemSignal */
    call_setup(arg_rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSignalProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemSignalProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemSignalProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemSignalProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemSignalProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemSignal */
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemSignalProxy, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemSignalProxy, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_rate: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::evdo", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::evdo", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gsm", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gsm", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lte", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lte", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nr5g", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nr5g", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::umts", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::umts", callback: (($obj: GdbusModemSignalProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemSignalProxy_ConstructProps)
    _init (config?: GdbusModemSignalProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemSignalProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSignalProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemSignalProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemSignalProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemSignalProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemSignalProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemSignalSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    cdma?: GLib.Variant
    evdo?: GLib.Variant
    gsm?: GLib.Variant
    lte?: GLib.Variant
    nr5g?: GLib.Variant
    rate?: number
    umts?: GLib.Variant
}
export class GdbusModemSignalSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemSignal */
    cdma: GLib.Variant
    evdo: GLib.Variant
    gsm: GLib.Variant
    lte: GLib.Variant
    nr5g: GLib.Variant
    rate: number
    umts: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemSignal */
    call_setup(arg_rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSignalSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemSignalSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemSignalSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemSignal */
    connect(sigName: "handle-setup", callback: (($obj: GdbusModemSignalSkeleton, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: GdbusModemSignalSkeleton, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_rate: number): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::evdo", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::evdo", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gsm", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gsm", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lte", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lte", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nr5g", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nr5g", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::umts", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::umts", callback: (($obj: GdbusModemSignalSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemSignalSkeleton_ConstructProps)
    _init (config?: GdbusModemSignalSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemSignalSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemSimpleProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class GdbusModemSimpleProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemSimple */
    call_connect(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_connect_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_bearer */ string | null ]
    call_connect_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_bearer */ string | null ]
    call_disconnect(arg_bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_status(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_status_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_properties */ GLib.Variant | null ]
    call_get_status_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_properties */ GLib.Variant | null ]
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSimpleProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean
    vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemSimpleProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemSimpleProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemSimpleProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemSimpleProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemSimpleProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemSimpleProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemSimple */
    connect(sigName: "handle-connect", callback: (($obj: GdbusModemSimpleProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-connect", callback: (($obj: GdbusModemSimpleProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-connect", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-disconnect", callback: (($obj: GdbusModemSimpleProxy, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: GdbusModemSimpleProxy, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    emit(sigName: "handle-disconnect", invocation: Gio.DBusMethodInvocation, arg_bearer: string): void
    connect(sigName: "handle-get-status", callback: (($obj: GdbusModemSimpleProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-status", callback: (($obj: GdbusModemSimpleProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-status", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemSimpleProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemSimpleProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemSimpleProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemSimpleProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemSimpleProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemSimpleProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemSimpleProxy_ConstructProps)
    _init (config?: GdbusModemSimpleProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemSimpleProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemSimpleProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemSimpleProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemSimpleProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemSimpleSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class GdbusModemSimpleSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemSimple */
    call_connect(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_connect_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_bearer */ string | null ]
    call_connect_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_bearer */ string | null ]
    call_disconnect(arg_bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_status(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_status_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_properties */ GLib.Variant | null ]
    call_get_status_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_properties */ GLib.Variant | null ]
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSimpleSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean
    vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemSimpleSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemSimpleSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemSimpleSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemSimpleSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemSimple */
    connect(sigName: "handle-connect", callback: (($obj: GdbusModemSimpleSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-connect", callback: (($obj: GdbusModemSimpleSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-connect", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-disconnect", callback: (($obj: GdbusModemSimpleSkeleton, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: GdbusModemSimpleSkeleton, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    emit(sigName: "handle-disconnect", invocation: Gio.DBusMethodInvocation, arg_bearer: string): void
    connect(sigName: "handle-get-status", callback: (($obj: GdbusModemSimpleSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-status", callback: (($obj: GdbusModemSimpleSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-status", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemSimpleSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemSimpleSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemSimpleSkeleton_ConstructProps)
    _init (config?: GdbusModemSimpleSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemSimpleSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    access_technologies?: number
    bearers?: string[]
    carrier_configuration?: string
    carrier_configuration_revision?: string
    current_bands?: GLib.Variant
    current_capabilities?: number
    current_modes?: GLib.Variant
    device?: string
    device_identifier?: string
    drivers?: string[]
    equipment_identifier?: string
    hardware_revision?: string
    manufacturer?: string
    max_active_bearers?: number
    max_bearers?: number
    model?: string
    own_numbers?: string[]
    plugin?: string
    ports?: GLib.Variant
    power_state?: number
    primary_port?: string
    primary_sim_slot?: number
    revision?: string
    signal_quality?: GLib.Variant
    sim?: string
    sim_slots?: string[]
    state?: number
    state_failed_reason?: number
    supported_bands?: GLib.Variant
    supported_capabilities?: GLib.Variant
    supported_ip_families?: number
    supported_modes?: GLib.Variant
    unlock_required?: number
    unlock_retries?: GLib.Variant
}
export class GdbusModemSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem */
    access_technologies: number
    bearers: string[]
    carrier_configuration: string
    carrier_configuration_revision: string
    current_bands: GLib.Variant
    current_capabilities: number
    current_modes: GLib.Variant
    device: string
    device_identifier: string
    drivers: string[]
    equipment_identifier: string
    hardware_revision: string
    manufacturer: string
    max_active_bearers: number
    max_bearers: number
    model: string
    own_numbers: string[]
    plugin: string
    ports: GLib.Variant
    power_state: number
    primary_port: string
    primary_sim_slot: number
    revision: string
    signal_quality: GLib.Variant
    sim: string
    sim_slots: string[]
    state: number
    state_failed_reason: number
    supported_bands: GLib.Variant
    supported_capabilities: GLib.Variant
    supported_ip_families: number
    supported_modes: GLib.Variant
    unlock_required: number
    unlock_retries: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem */
    call_command(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_command_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_response */ string | null ]
    call_command_sync(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_response */ string | null ]
    call_create_bearer(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_bearer_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_bearer_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete_bearer(arg_bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean
    call_delete_bearer_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean
    call_enable(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_finish(res: Gio.AsyncResult): boolean
    call_enable_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_factory_reset(arg_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_factory_reset_finish(res: Gio.AsyncResult): boolean
    call_factory_reset_sync(arg_code: string, cancellable?: Gio.Cancellable | null): boolean
    call_list_bearers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_bearers_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_bearers */ string[] | null ]
    call_list_bearers_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_bearers */ string[] | null ]
    call_reset(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_reset_finish(res: Gio.AsyncResult): boolean
    call_reset_sync(cancellable?: Gio.Cancellable | null): boolean
    call_set_current_bands(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_current_capabilities(arg_capabilities: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_current_modes(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_power_state(arg_state: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_power_state_finish(res: Gio.AsyncResult): boolean
    call_set_power_state_sync(arg_state: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_primary_sim_slot(arg_sim_slot: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean
    call_set_primary_sim_slot_sync(arg_sim_slot: number, cancellable?: Gio.Cancellable | null): boolean
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void
    complete_enable(invocation: Gio.DBusMethodInvocation): void
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void
    complete_reset(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void
    complete_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation): void
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean
    vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean
    vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean
    vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean
    vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean
    vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean
    vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean
    vfunc_handle_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): boolean
    vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem */
    connect(sigName: "handle-command", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean)): number
    connect_after(sigName: "handle-command", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean)): number
    emit(sigName: "handle-command", invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): void
    connect(sigName: "handle-create-bearer", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-bearer", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-bearer", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete-bearer", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    connect_after(sigName: "handle-delete-bearer", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    emit(sigName: "handle-delete-bearer", invocation: Gio.DBusMethodInvocation, arg_bearer: string): void
    connect(sigName: "handle-enable", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-enable", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-factory-reset", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean)): number
    connect_after(sigName: "handle-factory-reset", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean)): number
    emit(sigName: "handle-factory-reset", invocation: Gio.DBusMethodInvocation, arg_code: string): void
    connect(sigName: "handle-list-bearers", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list-bearers", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list-bearers", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-reset", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-reset", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-reset", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-current-bands", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-current-bands", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-current-bands", invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): void
    connect(sigName: "handle-set-current-capabilities", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean)): number
    connect_after(sigName: "handle-set-current-capabilities", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean)): number
    emit(sigName: "handle-set-current-capabilities", invocation: Gio.DBusMethodInvocation, arg_capabilities: number): void
    connect(sigName: "handle-set-current-modes", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-current-modes", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-current-modes", invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): void
    connect(sigName: "handle-set-power-state", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean)): number
    connect_after(sigName: "handle-set-power-state", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean)): number
    emit(sigName: "handle-set-power-state", invocation: Gio.DBusMethodInvocation, arg_state: number): void
    connect(sigName: "handle-set-primary-sim-slot", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean)): number
    connect_after(sigName: "handle-set-primary-sim-slot", callback: (($obj: GdbusModemSkeleton, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean)): number
    emit(sigName: "handle-set-primary-sim-slot", invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): void
    connect(sigName: "state-changed", callback: (($obj: GdbusModemSkeleton, arg_old: number, arg_new: number, arg_reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: GdbusModemSkeleton, arg_old: number, arg_new: number, arg_reason: number) => void)): number
    emit(sigName: "state-changed", arg_old: number, arg_new: number, arg_reason: number): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::access-technologies", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-technologies", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bearers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bearers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::carrier-configuration", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier-configuration", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::carrier-configuration-revision", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier-configuration-revision", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-bands", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-bands", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-capabilities", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-capabilities", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-modes", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-modes", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-identifier", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-identifier", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drivers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drivers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::equipment-identifier", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equipment-identifier", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hardware-revision", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hardware-revision", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-active-bearers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-active-bearers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bearers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bearers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::own-numbers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::own-numbers", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::plugin", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ports", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ports", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-state", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-state", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-port", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-port", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-sim-slot", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-sim-slot", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::revision", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signal-quality", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-quality", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim-slots", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim-slots", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-failed-reason", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-failed-reason", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-bands", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-bands", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-capabilities", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-capabilities", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-ip-families", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-ip-families", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-modes", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-modes", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unlock-required", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unlock-required", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unlock-retries", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unlock-retries", callback: (($obj: GdbusModemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemSkeleton_ConstructProps)
    _init (config?: GdbusModemSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemTimeProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    network_timezone?: GLib.Variant
}
export class GdbusModemTimeProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemTime */
    network_timezone: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemTime */
    call_get_network_time(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_network_time_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_time */ string | null ]
    call_get_network_time_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_time */ string | null ]
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void
    emit_network_time_changed(arg_time: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemTimeProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_network_time_changed(arg_time: string): void
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemTimeProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemTimeProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemTimeProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemTimeProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemTime */
    connect(sigName: "handle-get-network-time", callback: (($obj: GdbusModemTimeProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-network-time", callback: (($obj: GdbusModemTimeProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-network-time", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "network-time-changed", callback: (($obj: GdbusModemTimeProxy, arg_time: string) => void)): number
    connect_after(sigName: "network-time-changed", callback: (($obj: GdbusModemTimeProxy, arg_time: string) => void)): number
    emit(sigName: "network-time-changed", arg_time: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-timezone", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-timezone", callback: (($obj: GdbusModemTimeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemTimeProxy_ConstructProps)
    _init (config?: GdbusModemTimeProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemTimeProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemTimeProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemTimeProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemTimeProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemTimeProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemTimeProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemTimeSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    network_timezone?: GLib.Variant
}
export class GdbusModemTimeSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemTime */
    network_timezone: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemTime */
    call_get_network_time(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_network_time_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_time */ string | null ]
    call_get_network_time_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_time */ string | null ]
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void
    emit_network_time_changed(arg_time: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemTimeSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_network_time_changed(arg_time: string): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemTimeSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemTimeSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemTimeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemTimeSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemTime */
    connect(sigName: "handle-get-network-time", callback: (($obj: GdbusModemTimeSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-network-time", callback: (($obj: GdbusModemTimeSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-network-time", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "network-time-changed", callback: (($obj: GdbusModemTimeSkeleton, arg_time: string) => void)): number
    connect_after(sigName: "network-time-changed", callback: (($obj: GdbusModemTimeSkeleton, arg_time: string) => void)): number
    emit(sigName: "network-time-changed", arg_time: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemTimeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemTimeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-timezone", callback: (($obj: GdbusModemTimeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-timezone", callback: (($obj: GdbusModemTimeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemTimeSkeleton_ConstructProps)
    _init (config?: GdbusModemTimeSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemTimeSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemVoiceProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    calls?: string[]
    emergency_only?: boolean
}
export class GdbusModemVoiceProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemVoice */
    calls: string[]
    emergency_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemVoice */
    call_call_waiting_query(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_call_waiting_query_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_status */ boolean | null ]
    call_call_waiting_query_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_status */ boolean | null ]
    call_call_waiting_setup(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean
    call_call_waiting_setup_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_create_call(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_call_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_call_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete_call(arg_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_call_finish(res: Gio.AsyncResult): boolean
    call_delete_call_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean
    call_hangup_all(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hangup_all_finish(res: Gio.AsyncResult): boolean
    call_hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean
    call_hangup_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean
    call_hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    call_hold_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hold_and_accept_finish(res: Gio.AsyncResult): boolean
    call_hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    call_list_calls(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_calls_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_list_calls_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_transfer(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_transfer_finish(res: Gio.AsyncResult): boolean
    call_transfer_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void
    complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void
    complete_hangup_all(invocation: Gio.DBusMethodInvocation): void
    complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void
    complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void
    complete_transfer(invocation: Gio.DBusMethodInvocation): void
    emit_call_added(arg_path: string): void
    emit_call_deleted(arg_path: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemVoiceProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_call_added(arg_path: string): void
    vfunc_call_deleted(arg_path: string): void
    vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean
    vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusModemVoiceProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusModemVoiceProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusModemVoiceProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusModemVoiceProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemVoice */
    connect(sigName: "call-added", callback: (($obj: GdbusModemVoiceProxy, arg_path: string) => void)): number
    connect_after(sigName: "call-added", callback: (($obj: GdbusModemVoiceProxy, arg_path: string) => void)): number
    emit(sigName: "call-added", arg_path: string): void
    connect(sigName: "call-deleted", callback: (($obj: GdbusModemVoiceProxy, arg_path: string) => void)): number
    connect_after(sigName: "call-deleted", callback: (($obj: GdbusModemVoiceProxy, arg_path: string) => void)): number
    emit(sigName: "call-deleted", arg_path: string): void
    connect(sigName: "handle-call-waiting-query", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-call-waiting-query", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-call-waiting-query", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-call-waiting-setup", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-call-waiting-setup", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-call-waiting-setup", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-create-call", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-call", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-call", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete-call", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    connect_after(sigName: "handle-delete-call", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    emit(sigName: "handle-delete-call", invocation: Gio.DBusMethodInvocation, arg_path: string): void
    connect(sigName: "handle-hangup-all", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hangup-all", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hangup-all", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-hangup-and-accept", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hangup-and-accept", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hangup-and-accept", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-hold-and-accept", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hold-and-accept", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hold-and-accept", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-list-calls", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list-calls", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list-calls", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-transfer", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-transfer", callback: (($obj: GdbusModemVoiceProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-transfer", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calls", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calls", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emergency-only", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emergency-only", callback: (($obj: GdbusModemVoiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemVoiceProxy_ConstructProps)
    _init (config?: GdbusModemVoiceProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemVoiceProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemVoiceProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusModemVoiceProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusModemVoiceProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusModemVoiceSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    calls?: string[]
    emergency_only?: boolean
}
export class GdbusModemVoiceSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemVoice */
    calls: string[]
    emergency_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemVoice */
    call_call_waiting_query(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_call_waiting_query_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_status */ boolean | null ]
    call_call_waiting_query_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_status */ boolean | null ]
    call_call_waiting_setup(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean
    call_call_waiting_setup_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_create_call(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_call_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_call_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete_call(arg_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_call_finish(res: Gio.AsyncResult): boolean
    call_delete_call_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean
    call_hangup_all(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hangup_all_finish(res: Gio.AsyncResult): boolean
    call_hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean
    call_hangup_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean
    call_hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    call_hold_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hold_and_accept_finish(res: Gio.AsyncResult): boolean
    call_hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    call_list_calls(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_calls_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_list_calls_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_transfer(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_transfer_finish(res: Gio.AsyncResult): boolean
    call_transfer_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void
    complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void
    complete_hangup_all(invocation: Gio.DBusMethodInvocation): void
    complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void
    complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void
    complete_transfer(invocation: Gio.DBusMethodInvocation): void
    emit_call_added(arg_path: string): void
    emit_call_deleted(arg_path: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemVoiceSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_call_added(arg_path: string): void
    vfunc_call_deleted(arg_path: string): void
    vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean
    vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusModemVoiceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusModemVoiceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemVoice */
    connect(sigName: "call-added", callback: (($obj: GdbusModemVoiceSkeleton, arg_path: string) => void)): number
    connect_after(sigName: "call-added", callback: (($obj: GdbusModemVoiceSkeleton, arg_path: string) => void)): number
    emit(sigName: "call-added", arg_path: string): void
    connect(sigName: "call-deleted", callback: (($obj: GdbusModemVoiceSkeleton, arg_path: string) => void)): number
    connect_after(sigName: "call-deleted", callback: (($obj: GdbusModemVoiceSkeleton, arg_path: string) => void)): number
    emit(sigName: "call-deleted", arg_path: string): void
    connect(sigName: "handle-call-waiting-query", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-call-waiting-query", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-call-waiting-query", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-call-waiting-setup", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-call-waiting-setup", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-call-waiting-setup", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-create-call", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-call", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-call", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete-call", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    connect_after(sigName: "handle-delete-call", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    emit(sigName: "handle-delete-call", invocation: Gio.DBusMethodInvocation, arg_path: string): void
    connect(sigName: "handle-hangup-all", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hangup-all", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hangup-all", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-hangup-and-accept", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hangup-and-accept", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hangup-and-accept", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-hold-and-accept", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hold-and-accept", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hold-and-accept", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-list-calls", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list-calls", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list-calls", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-transfer", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-transfer", callback: (($obj: GdbusModemVoiceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-transfer", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusModemVoiceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusModemVoiceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calls", callback: (($obj: GdbusModemVoiceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calls", callback: (($obj: GdbusModemVoiceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emergency-only", callback: (($obj: GdbusModemVoiceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emergency-only", callback: (($obj: GdbusModemVoiceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusModemVoiceSkeleton_ConstructProps)
    _init (config?: GdbusModemVoiceSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusModemVoiceSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusObjectManagerClient_ConstructProps extends Gio.DBusObjectManagerClient_ConstructProps {
}
export class GdbusObjectManagerClient {
    /* Properties of Gio-2.0.Gio.DBusObjectManagerClient */
    readonly name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectManagerClient */
    get_connection(): Gio.DBusConnection
    get_flags(): Gio.DBusObjectManagerClientFlags
    get_name(): string
    get_name_owner(): string | null
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
    /* Methods of Gio-2.0.Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): Gio.DBusInterface
    get_object(object_path: string): Gio.DBusObject
    get_object_path(): string
    get_objects(): Gio.DBusObject[]
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusObjectManagerClient */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface
    vfunc_get_object(object_path: string): Gio.DBusObject
    vfunc_get_object_path(): string
    vfunc_get_objects(): Gio.DBusObject[]
    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_object_added(object: Gio.DBusObject): void
    vfunc_object_removed(object: Gio.DBusObject): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusObjectManagerClient */
    vfunc_interface_proxy_properties_changed(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_interface_proxy_signal(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: GdbusObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: GdbusObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: (($obj: GdbusObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: GdbusObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: GdbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: GdbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: GdbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: GdbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "object-added", callback: (($obj: GdbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: GdbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-added", object: Gio.DBusObject): void
    connect(sigName: "object-removed", callback: (($obj: GdbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: GdbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    connect(sigName: "notify::name-owner", callback: (($obj: GdbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: GdbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusObjectManagerClient_ConstructProps)
    _init (config?: GdbusObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusObjectManagerClient
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusObjectManagerClient
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusObjectManagerClient
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): GdbusObjectManagerClient
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusObjectManagerClient
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): GdbusObjectManagerClient
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name?: string | null, user_data?: object | null): GObject.Type
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface GdbusObjectProxy_ConstructProps extends Gio.DBusObjectProxy_ConstructProps {
    modem?: GdbusModem
    modem_cdma?: GdbusModemCdma
    modem_firmware?: GdbusModemFirmware
    modem_location?: GdbusModemLocation
    modem_messaging?: GdbusModemMessaging
    modem_oma?: GdbusModemOma
    modem_signal?: GdbusModemSignal
    modem_simple?: GdbusModemSimple
    modem_time?: GdbusModemTime
    modem_voice?: GdbusModemVoice
    modem3gpp?: GdbusModem3gpp
    modem3gpp_ussd?: GdbusModem3gppUssd
}
export class GdbusObjectProxy {
    /* Properties of ModemManager-1.0.ModemManager.GdbusObject */
    modem: GdbusModem
    modem_cdma: GdbusModemCdma
    modem_firmware: GdbusModemFirmware
    modem_location: GdbusModemLocation
    modem_messaging: GdbusModemMessaging
    modem_oma: GdbusModemOma
    modem_signal: GdbusModemSignal
    modem_simple: GdbusModemSimple
    modem_time: GdbusModemTime
    modem_voice: GdbusModemVoice
    modem3gpp: GdbusModem3gpp
    modem3gpp_ussd: GdbusModem3gppUssd
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectProxy */
    get_connection(): Gio.DBusConnection
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Methods of ModemManager-1.0.ModemManager.GdbusObject */
    get_modem(): GdbusModem | null
    get_modem3gpp(): GdbusModem3gpp | null
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null
    get_modem_cdma(): GdbusModemCdma | null
    get_modem_firmware(): GdbusModemFirmware | null
    get_modem_location(): GdbusModemLocation | null
    get_modem_messaging(): GdbusModemMessaging | null
    get_modem_oma(): GdbusModemOma | null
    get_modem_signal(): GdbusModemSignal | null
    get_modem_simple(): GdbusModemSimple | null
    get_modem_time(): GdbusModemTime | null
    get_modem_voice(): GdbusModemVoice | null
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusObjectProxy */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: GdbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: GdbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: GdbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: GdbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::modem", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-cdma", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-cdma", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-firmware", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-firmware", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-location", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-location", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-messaging", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-messaging", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-oma", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-oma", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-signal", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-signal", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-simple", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-simple", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-time", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-time", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-voice", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-voice", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem3gpp", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem3gpp", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem3gpp-ussd", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem3gpp-ussd", callback: (($obj: GdbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusObjectProxy_ConstructProps)
    _init (config?: GdbusObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, object_path: string): GdbusObjectProxy
    static $gtype: GObject.Type
}
export interface GdbusObjectSkeleton_ConstructProps extends Gio.DBusObjectSkeleton_ConstructProps {
    modem?: GdbusModem
    modem_cdma?: GdbusModemCdma
    modem_firmware?: GdbusModemFirmware
    modem_location?: GdbusModemLocation
    modem_messaging?: GdbusModemMessaging
    modem_oma?: GdbusModemOma
    modem_signal?: GdbusModemSignal
    modem_simple?: GdbusModemSimple
    modem_time?: GdbusModemTime
    modem_voice?: GdbusModemVoice
    modem3gpp?: GdbusModem3gpp
    modem3gpp_ussd?: GdbusModem3gppUssd
}
export class GdbusObjectSkeleton {
    /* Properties of Gio-2.0.Gio.DBusObjectSkeleton */
    g_object_path: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusObject */
    modem: GdbusModem
    modem_cdma: GdbusModemCdma
    modem_firmware: GdbusModemFirmware
    modem_location: GdbusModemLocation
    modem_messaging: GdbusModemMessaging
    modem_oma: GdbusModemOma
    modem_signal: GdbusModemSignal
    modem_simple: GdbusModemSimple
    modem_time: GdbusModemTime
    modem_voice: GdbusModemVoice
    modem3gpp: GdbusModem3gpp
    modem3gpp_ussd: GdbusModem3gppUssd
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.GdbusObjectSkeleton */
    set_modem(interface_?: GdbusModem | null): void
    set_modem3gpp(interface_?: GdbusModem3gpp | null): void
    set_modem3gpp_ussd(interface_?: GdbusModem3gppUssd | null): void
    set_modem_cdma(interface_?: GdbusModemCdma | null): void
    set_modem_firmware(interface_?: GdbusModemFirmware | null): void
    set_modem_location(interface_?: GdbusModemLocation | null): void
    set_modem_messaging(interface_?: GdbusModemMessaging | null): void
    set_modem_oma(interface_?: GdbusModemOma | null): void
    set_modem_signal(interface_?: GdbusModemSignal | null): void
    set_modem_simple(interface_?: GdbusModemSimple | null): void
    set_modem_time(interface_?: GdbusModemTime | null): void
    set_modem_voice(interface_?: GdbusModemVoice | null): void
    /* Methods of Gio-2.0.Gio.DBusObjectSkeleton */
    add_interface(interface_: Gio.DBusInterfaceSkeleton): void
    flush(): void
    remove_interface(interface_: Gio.DBusInterfaceSkeleton): void
    remove_interface_by_name(interface_name: string): void
    set_object_path(object_path: string): void
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Methods of ModemManager-1.0.ModemManager.GdbusObject */
    get_modem(): GdbusModem | null
    get_modem3gpp(): GdbusModem3gpp | null
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null
    get_modem_cdma(): GdbusModemCdma | null
    get_modem_firmware(): GdbusModemFirmware | null
    get_modem_location(): GdbusModemLocation | null
    get_modem_messaging(): GdbusModemMessaging | null
    get_modem_oma(): GdbusModemOma | null
    get_modem_signal(): GdbusModemSignal | null
    get_modem_simple(): GdbusModemSimple | null
    get_modem_time(): GdbusModemTime | null
    get_modem_voice(): GdbusModemVoice | null
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusObjectSkeleton */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of Gio-2.0.Gio.DBusObjectSkeleton */
    vfunc_authorize_method(interface_: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: GdbusObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: GdbusObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: GdbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: GdbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: GdbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: GdbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::g-object-path", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-cdma", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-cdma", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-firmware", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-firmware", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-location", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-location", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-messaging", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-messaging", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-oma", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-oma", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-signal", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-signal", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-simple", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-simple", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-time", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-time", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-voice", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-voice", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem3gpp", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem3gpp", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem3gpp-ussd", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem3gpp-ussd", callback: (($obj: GdbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusObjectSkeleton_ConstructProps)
    _init (config?: GdbusObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object_path: string): GdbusObjectSkeleton
    static $gtype: GObject.Type
}
export interface GdbusOrgFreedesktopModemManager1Proxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    version?: string
}
export class GdbusOrgFreedesktopModemManager1Proxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    version: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_inhibit_device_finish(res: Gio.AsyncResult): boolean
    call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_report_kernel_event(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_report_kernel_event_finish(res: Gio.AsyncResult): boolean
    call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_scan_devices(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_scan_devices_finish(res: Gio.AsyncResult): boolean
    call_scan_devices_sync(cancellable?: Gio.Cancellable | null): boolean
    call_set_logging(arg_level: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_logging_finish(res: Gio.AsyncResult): boolean
    call_set_logging_sync(arg_level: string, cancellable?: Gio.Cancellable | null): boolean
    complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void
    complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void
    complete_scan_devices(invocation: Gio.DBusMethodInvocation): void
    complete_set_logging(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1Proxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean
    vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    connect(sigName: "handle-inhibit-device", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean) => boolean)): number
    connect_after(sigName: "handle-inhibit-device", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean) => boolean)): number
    emit(sigName: "handle-inhibit-device", invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): void
    connect(sigName: "handle-report-kernel-event", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-report-kernel-event", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-report-kernel-event", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-scan-devices", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-scan-devices", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-scan-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-logging", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, invocation: Gio.DBusMethodInvocation, arg_level: string) => boolean)): number
    connect_after(sigName: "handle-set-logging", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, invocation: Gio.DBusMethodInvocation, arg_level: string) => boolean)): number
    emit(sigName: "handle-set-logging", invocation: Gio.DBusMethodInvocation, arg_level: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: GdbusOrgFreedesktopModemManager1Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusOrgFreedesktopModemManager1Proxy_ConstructProps)
    _init (config?: GdbusOrgFreedesktopModemManager1Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusOrgFreedesktopModemManager1Proxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusOrgFreedesktopModemManager1Proxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusOrgFreedesktopModemManager1Proxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusOrgFreedesktopModemManager1Proxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusOrgFreedesktopModemManager1Skeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    version?: string
}
export class GdbusOrgFreedesktopModemManager1Skeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    version: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_inhibit_device_finish(res: Gio.AsyncResult): boolean
    call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_report_kernel_event(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_report_kernel_event_finish(res: Gio.AsyncResult): boolean
    call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_scan_devices(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_scan_devices_finish(res: Gio.AsyncResult): boolean
    call_scan_devices_sync(cancellable?: Gio.Cancellable | null): boolean
    call_set_logging(arg_level: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_logging_finish(res: Gio.AsyncResult): boolean
    call_set_logging_sync(arg_level: string, cancellable?: Gio.Cancellable | null): boolean
    complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void
    complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void
    complete_scan_devices(invocation: Gio.DBusMethodInvocation): void
    complete_set_logging(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1Skeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean
    vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1 */
    connect(sigName: "handle-inhibit-device", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean) => boolean)): number
    connect_after(sigName: "handle-inhibit-device", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean) => boolean)): number
    emit(sigName: "handle-inhibit-device", invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): void
    connect(sigName: "handle-report-kernel-event", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-report-kernel-event", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-report-kernel-event", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-scan-devices", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-scan-devices", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-scan-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-logging", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation, arg_level: string) => boolean)): number
    connect_after(sigName: "handle-set-logging", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, invocation: Gio.DBusMethodInvocation, arg_level: string) => boolean)): number
    emit(sigName: "handle-set-logging", invocation: Gio.DBusMethodInvocation, arg_level: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: GdbusOrgFreedesktopModemManager1Skeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusOrgFreedesktopModemManager1Skeleton_ConstructProps)
    _init (config?: GdbusOrgFreedesktopModemManager1Skeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusOrgFreedesktopModemManager1Skeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusSimProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    active?: boolean
    eid?: string
    emergency_numbers?: string[]
    imsi?: string
    operator_identifier?: string
    operator_name?: string
    sim_identifier?: string
}
export class GdbusSimProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusSim */
    active: boolean
    eid: string
    emergency_numbers: string[]
    imsi: string
    operator_identifier: string
    operator_name: string
    sim_identifier: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusSim */
    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_change_pin_finish(res: Gio.AsyncResult): boolean
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): boolean
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_pin_finish(res: Gio.AsyncResult): boolean
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_send_pin(arg_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_pin_finish(res: Gio.AsyncResult): boolean
    call_send_pin_sync(arg_pin: string, cancellable?: Gio.Cancellable | null): boolean
    call_send_puk(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_puk_finish(res: Gio.AsyncResult): boolean
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): boolean
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusSimProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean
    vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean
    vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean
    vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusSimProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusSimProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusSimProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusSimProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusSim */
    connect(sigName: "handle-change-pin", callback: (($obj: GdbusSimProxy, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean)): number
    connect_after(sigName: "handle-change-pin", callback: (($obj: GdbusSimProxy, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean)): number
    emit(sigName: "handle-change-pin", invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): void
    connect(sigName: "handle-enable-pin", callback: (($obj: GdbusSimProxy, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-pin", callback: (($obj: GdbusSimProxy, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean)): number
    emit(sigName: "handle-enable-pin", invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): void
    connect(sigName: "handle-send-pin", callback: (($obj: GdbusSimProxy, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean)): number
    connect_after(sigName: "handle-send-pin", callback: (($obj: GdbusSimProxy, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean)): number
    emit(sigName: "handle-send-pin", invocation: Gio.DBusMethodInvocation, arg_pin: string): void
    connect(sigName: "handle-send-puk", callback: (($obj: GdbusSimProxy, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean)): number
    connect_after(sigName: "handle-send-puk", callback: (($obj: GdbusSimProxy, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean)): number
    emit(sigName: "handle-send-puk", invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eid", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eid", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emergency-numbers", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emergency-numbers", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imsi", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imsi", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-identifier", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-identifier", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-name", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-name", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim-identifier", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim-identifier", callback: (($obj: GdbusSimProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusSimProxy_ConstructProps)
    _init (config?: GdbusSimProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusSimProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusSimProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusSimProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusSimProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusSimProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusSimProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusSimSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    active?: boolean
    eid?: string
    emergency_numbers?: string[]
    imsi?: string
    operator_identifier?: string
    operator_name?: string
    sim_identifier?: string
}
export class GdbusSimSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusSim */
    active: boolean
    eid: string
    emergency_numbers: string[]
    imsi: string
    operator_identifier: string
    operator_name: string
    sim_identifier: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusSim */
    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_change_pin_finish(res: Gio.AsyncResult): boolean
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): boolean
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_pin_finish(res: Gio.AsyncResult): boolean
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_send_pin(arg_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_pin_finish(res: Gio.AsyncResult): boolean
    call_send_pin_sync(arg_pin: string, cancellable?: Gio.Cancellable | null): boolean
    call_send_puk(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_puk_finish(res: Gio.AsyncResult): boolean
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): boolean
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusSimSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean
    vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean
    vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean
    vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusSim */
    connect(sigName: "handle-change-pin", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean)): number
    connect_after(sigName: "handle-change-pin", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean)): number
    emit(sigName: "handle-change-pin", invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): void
    connect(sigName: "handle-enable-pin", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-pin", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean)): number
    emit(sigName: "handle-enable-pin", invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): void
    connect(sigName: "handle-send-pin", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean)): number
    connect_after(sigName: "handle-send-pin", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean)): number
    emit(sigName: "handle-send-pin", invocation: Gio.DBusMethodInvocation, arg_pin: string): void
    connect(sigName: "handle-send-puk", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean)): number
    connect_after(sigName: "handle-send-puk", callback: (($obj: GdbusSimSkeleton, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean)): number
    emit(sigName: "handle-send-puk", invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eid", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eid", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emergency-numbers", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emergency-numbers", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imsi", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imsi", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-identifier", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-identifier", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-name", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-name", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim-identifier", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim-identifier", callback: (($obj: GdbusSimSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusSimSkeleton_ConstructProps)
    _init (config?: GdbusSimSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusSimSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusSmsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    "class"?: number
    data?: GLib.Variant
    delivery_report_request?: boolean
    delivery_state?: number
    discharge_timestamp?: string
    message_reference?: number
    number?: string
    pdu_type?: number
    service_category?: number
    smsc?: string
    state?: number
    storage?: number
    teleservice_id?: number
    text?: string
    timestamp?: string
    validity?: GLib.Variant
}
export class GdbusSmsProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusSms */
    "class": number
    data: GLib.Variant
    delivery_report_request: boolean
    delivery_state: number
    discharge_timestamp: string
    message_reference: number
    number: string
    pdu_type: number
    service_category: number
    smsc: string
    state: number
    storage: number
    teleservice_id: number
    text: string
    timestamp: string
    validity: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusSms */
    call_send(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_finish(res: Gio.AsyncResult): boolean
    call_send_sync(cancellable?: Gio.Cancellable | null): boolean
    call_store(arg_storage: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_store_finish(res: Gio.AsyncResult): boolean
    call_store_sync(arg_storage: number, cancellable?: Gio.Cancellable | null): boolean
    complete_send(invocation: Gio.DBusMethodInvocation): void
    complete_store(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusSmsProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GdbusSmsProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GdbusSmsProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GdbusSmsProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GdbusSmsProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusSms */
    connect(sigName: "handle-send", callback: (($obj: GdbusSmsProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-send", callback: (($obj: GdbusSmsProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-send", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-store", callback: (($obj: GdbusSmsProxy, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean)): number
    connect_after(sigName: "handle-store", callback: (($obj: GdbusSmsProxy, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean)): number
    emit(sigName: "handle-store", invocation: Gio.DBusMethodInvocation, arg_storage: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::class", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delivery-report-request", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delivery-report-request", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delivery-state", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delivery-state", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discharge-timestamp", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discharge-timestamp", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-reference", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-reference", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pdu-type", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pdu-type", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-category", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-category", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smsc", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smsc", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storage", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::teleservice-id", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::teleservice-id", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validity", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validity", callback: (($obj: GdbusSmsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusSmsProxy_ConstructProps)
    _init (config?: GdbusSmsProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): GdbusSmsProxy
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusSmsProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): GdbusSmsProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusSmsProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): GdbusSmsProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): GdbusSmsProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface GdbusSmsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    "class"?: number
    data?: GLib.Variant
    delivery_report_request?: boolean
    delivery_state?: number
    discharge_timestamp?: string
    message_reference?: number
    number?: string
    pdu_type?: number
    service_category?: number
    smsc?: string
    state?: number
    storage?: number
    teleservice_id?: number
    text?: string
    timestamp?: string
    validity?: GLib.Variant
}
export class GdbusSmsSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of ModemManager-1.0.ModemManager.GdbusSms */
    "class": number
    data: GLib.Variant
    delivery_report_request: boolean
    delivery_state: number
    discharge_timestamp: string
    message_reference: number
    number: string
    pdu_type: number
    service_category: number
    smsc: string
    state: number
    storage: number
    teleservice_id: number
    text: string
    timestamp: string
    validity: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of ModemManager-1.0.ModemManager.GdbusSms */
    call_send(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_finish(res: Gio.AsyncResult): boolean
    call_send_sync(cancellable?: Gio.Cancellable | null): boolean
    call_store(arg_storage: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_store_finish(res: Gio.AsyncResult): boolean
    call_store_sync(arg_storage: number, cancellable?: Gio.Cancellable | null): boolean
    complete_send(invocation: Gio.DBusMethodInvocation): void
    complete_store(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusSmsSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GdbusSmsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GdbusSmsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusSms */
    connect(sigName: "handle-send", callback: (($obj: GdbusSmsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-send", callback: (($obj: GdbusSmsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-send", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-store", callback: (($obj: GdbusSmsSkeleton, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean)): number
    connect_after(sigName: "handle-store", callback: (($obj: GdbusSmsSkeleton, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean)): number
    emit(sigName: "handle-store", invocation: Gio.DBusMethodInvocation, arg_storage: number): void
    connect(sigName: "notify::g-flags", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::class", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delivery-report-request", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delivery-report-request", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delivery-state", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delivery-state", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discharge-timestamp", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discharge-timestamp", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-reference", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-reference", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pdu-type", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pdu-type", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-category", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-category", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smsc", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smsc", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storage", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::teleservice-id", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::teleservice-id", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validity", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validity", callback: (($obj: GdbusSmsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GdbusSmsSkeleton_ConstructProps)
    _init (config?: GdbusSmsSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GdbusSmsSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface KernelEventProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class KernelEventProperties {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.KernelEventProperties */
    get_action(): string
    get_name(): string
    get_subsystem(): string
    get_uid(): string
    set_action(action: string): void
    set_name(name: string): void
    set_subsystem(subsystem: string): void
    set_uid(uid: string): void
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
    connect(sigName: "notify", callback: (($obj: KernelEventProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KernelEventProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KernelEventProperties_ConstructProps)
    _init (config?: KernelEventProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): KernelEventProperties
    static $gtype: GObject.Type
}
export interface Location3gpp_ConstructProps extends GObject.Object_ConstructProps {
}
export class Location3gpp {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Location3gpp */
    get_cell_id(): number
    get_location_area_code(): number
    get_mobile_country_code(): number
    get_mobile_network_code(): number
    get_tracking_area_code(): number
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
    connect(sigName: "notify", callback: (($obj: Location3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Location3gpp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Location3gpp_ConstructProps)
    _init (config?: Location3gpp_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LocationCdmaBs_ConstructProps extends GObject.Object_ConstructProps {
}
export class LocationCdmaBs {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.LocationCdmaBs */
    get_latitude(): number
    get_longitude(): number
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
    connect(sigName: "notify", callback: (($obj: LocationCdmaBs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationCdmaBs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocationCdmaBs_ConstructProps)
    _init (config?: LocationCdmaBs_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LocationGpsNmea_ConstructProps extends GObject.Object_ConstructProps {
}
export class LocationGpsNmea {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.LocationGpsNmea */
    build_full(): string
    get_trace(trace_type: string): string
    get_traces(): string[]
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
    connect(sigName: "notify", callback: (($obj: LocationGpsNmea, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationGpsNmea, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocationGpsNmea_ConstructProps)
    _init (config?: LocationGpsNmea_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LocationGpsRaw_ConstructProps extends GObject.Object_ConstructProps {
}
export class LocationGpsRaw {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.LocationGpsRaw */
    get_altitude(): number
    get_latitude(): number
    get_longitude(): number
    get_utc_time(): string
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
    connect(sigName: "notify", callback: (($obj: LocationGpsRaw, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationGpsRaw, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocationGpsRaw_ConstructProps)
    _init (config?: LocationGpsRaw_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Manager_ConstructProps extends GdbusObjectManagerClient_ConstructProps {
}
export class Manager {
    /* Properties of Gio-2.0.Gio.DBusObjectManagerClient */
    readonly name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Manager */
    get_proxy(): Gio.DBusProxy
    get_version(): string
    inhibit_device(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    inhibit_device_finish(res: Gio.AsyncResult): boolean
    inhibit_device_sync(uid: string, cancellable?: Gio.Cancellable | null): boolean
    peek_proxy(): Gio.DBusProxy
    report_kernel_event(properties: KernelEventProperties, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    report_kernel_event_finish(res: Gio.AsyncResult): boolean
    report_kernel_event_sync(properties: KernelEventProperties, cancellable?: Gio.Cancellable | null): boolean
    scan_devices(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    scan_devices_finish(res: Gio.AsyncResult): boolean
    scan_devices_sync(cancellable?: Gio.Cancellable | null): boolean
    set_logging(level: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_logging_finish(res: Gio.AsyncResult): boolean
    set_logging_sync(level: string, cancellable?: Gio.Cancellable | null): boolean
    uninhibit_device(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uninhibit_device_finish(res: Gio.AsyncResult): boolean
    uninhibit_device_sync(uid: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusObjectManagerClient */
    get_connection(): Gio.DBusConnection
    get_flags(): Gio.DBusObjectManagerClientFlags
    get_name(): string
    get_name_owner(): string | null
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
    /* Methods of Gio-2.0.Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): Gio.DBusInterface
    get_object(object_path: string): Gio.DBusObject
    get_object_path(): string
    get_objects(): Gio.DBusObject[]
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusObjectManagerClient */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface
    vfunc_get_object(object_path: string): Gio.DBusObject
    vfunc_get_object_path(): string
    vfunc_get_objects(): Gio.DBusObject[]
    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_object_added(object: Gio.DBusObject): void
    vfunc_object_removed(object: Gio.DBusObject): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusObjectManagerClient */
    vfunc_interface_proxy_properties_changed(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_interface_proxy_signal(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: Manager, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: Manager, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: (($obj: Manager, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: Manager, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: Manager, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: Manager, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: Manager, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: Manager, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "object-added", callback: (($obj: Manager, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: Manager, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-added", object: Gio.DBusObject): void
    connect(sigName: "object-removed", callback: (($obj: Manager, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: Manager, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    connect(sigName: "notify::name-owner", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Manager_ConstructProps)
    _init (config?: Manager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): Manager
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, cancellable?: Gio.Cancellable | null): Manager
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): Manager
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): Manager
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): Manager
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): Manager
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Modem_ConstructProps extends GdbusModemProxy_ConstructProps {
    access_technologies?: number
    bearers?: string[]
    carrier_configuration?: string
    carrier_configuration_revision?: string
    current_bands?: GLib.Variant
    current_capabilities?: number
    current_modes?: GLib.Variant
    device?: string
    device_identifier?: string
    drivers?: string[]
    equipment_identifier?: string
    hardware_revision?: string
    manufacturer?: string
    max_active_bearers?: number
    max_bearers?: number
    model?: string
    own_numbers?: string[]
    plugin?: string
    ports?: GLib.Variant
    power_state?: number
    primary_port?: string
    primary_sim_slot?: number
    revision?: string
    signal_quality?: GLib.Variant
    sim?: string
    sim_slots?: string[]
    state?: number
    state_failed_reason?: number
    supported_bands?: GLib.Variant
    supported_capabilities?: GLib.Variant
    supported_ip_families?: number
    supported_modes?: GLib.Variant
    unlock_required?: number
    unlock_retries?: GLib.Variant
}
export class Modem {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem */
    access_technologies: number
    bearers: string[]
    carrier_configuration: string
    carrier_configuration_revision: string
    current_bands: GLib.Variant
    current_capabilities: number
    current_modes: GLib.Variant
    device: string
    device_identifier: string
    drivers: string[]
    equipment_identifier: string
    hardware_revision: string
    manufacturer: string
    max_active_bearers: number
    max_bearers: number
    model: string
    own_numbers: string[]
    plugin: string
    ports: GLib.Variant
    power_state: number
    primary_port: string
    primary_sim_slot: number
    revision: string
    signal_quality: GLib.Variant
    sim: string
    sim_slots: string[]
    state: number
    state_failed_reason: number
    supported_bands: GLib.Variant
    supported_capabilities: GLib.Variant
    supported_ip_families: number
    supported_modes: GLib.Variant
    unlock_required: number
    unlock_retries: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Modem */
    command(cmd: string, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    command_finish(res: Gio.AsyncResult): string
    command_sync(cmd: string, timeout: number, cancellable?: Gio.Cancellable | null): string
    create_bearer(properties: BearerProperties, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_bearer_finish(res: Gio.AsyncResult): Bearer
    create_bearer_sync(properties: BearerProperties, cancellable?: Gio.Cancellable | null): Bearer
    delete_bearer(bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_bearer_finish(res: Gio.AsyncResult): boolean
    delete_bearer_sync(bearer: string, cancellable?: Gio.Cancellable | null): boolean
    disable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disable_finish(res: Gio.AsyncResult): boolean
    disable_sync(cancellable?: Gio.Cancellable | null): boolean
    dup_bearer_paths(): string[]
    dup_carrier_configuration(): string
    dup_carrier_configuration_revision(): string
    dup_device(): string
    dup_device_identifier(): string
    dup_drivers(): string[]
    dup_equipment_identifier(): string
    dup_hardware_revision(): string
    dup_manufacturer(): string
    dup_model(): string
    dup_own_numbers(): string[]
    dup_path(): string
    dup_plugin(): string
    dup_primary_port(): string
    dup_revision(): string
    dup_sim_path(): string
    dup_sim_slot_paths(): string[]
    enable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enable_finish(res: Gio.AsyncResult): boolean
    enable_sync(cancellable?: Gio.Cancellable | null): boolean
    factory_reset(code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    factory_reset_finish(res: Gio.AsyncResult): boolean
    factory_reset_sync(code: string, cancellable?: Gio.Cancellable | null): boolean
    get_access_technologies(): ModemAccessTechnology
    get_bearer_paths(): string[]
    get_carrier_configuration(): string
    get_carrier_configuration_revision(): string
    get_current_bands(): [ /* returnType */ boolean, /* bands */ ModemBand[] ]
    get_current_capabilities(): ModemCapability
    get_current_modes(): [ /* returnType */ boolean, /* allowed */ ModemMode, /* preferred */ ModemMode ]
    get_device(): string
    get_device_identifier(): string
    get_drivers(): string[]
    get_equipment_identifier(): string
    get_hardware_revision(): string
    get_manufacturer(): string
    get_max_active_bearers(): number
    get_max_bearers(): number
    get_model(): string
    get_plugin(): string
    get_ports(): [ /* returnType */ boolean, /* ports */ ModemPortInfo[] ]
    get_power_state(): ModemPowerState
    get_primary_port(): string
    get_primary_sim_slot(): number
    get_revision(): string
    get_signal_quality(): [ /* returnType */ number, /* recent */ boolean ]
    get_sim(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_sim_finish(res: Gio.AsyncResult): Sim
    get_sim_slot_paths(): string[]
    get_sim_sync(cancellable?: Gio.Cancellable | null): Sim
    get_state(): ModemState
    get_state_failed_reason(): ModemStateFailedReason
    get_supported_bands(): [ /* returnType */ boolean, /* bands */ ModemBand[] ]
    get_supported_capabilities(): [ /* returnType */ boolean, /* capabilities */ ModemCapability[] ]
    get_supported_ip_families(): BearerIpFamily
    get_supported_modes(): [ /* returnType */ boolean, /* modes */ ModemModeCombination[] ]
    get_unlock_required(): ModemLock
    get_unlock_retries(): UnlockRetries
    list_bearers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_bearers_finish(res: Gio.AsyncResult): Bearer[]
    list_bearers_sync(cancellable?: Gio.Cancellable | null): Bearer[]
    list_sim_slots(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_sim_slots_finish(res: Gio.AsyncResult): Sim[]
    list_sim_slots_sync(cancellable?: Gio.Cancellable | null): Sim[]
    peek_current_bands(): [ /* returnType */ boolean, /* bands */ ModemBand[] ]
    peek_ports(): [ /* returnType */ boolean, /* ports */ ModemPortInfo[] ]
    peek_supported_bands(): [ /* returnType */ boolean, /* bands */ ModemBand[] ]
    peek_supported_capabilities(): [ /* returnType */ boolean, /* capabilities */ ModemCapability[] ]
    peek_supported_modes(): [ /* returnType */ boolean, /* modes */ ModemModeCombination[] ]
    peek_unlock_retries(): UnlockRetries
    reset(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): boolean
    reset_sync(cancellable?: Gio.Cancellable | null): boolean
    set_current_bands(bands: ModemBand, n_bands: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_current_bands_finish(res: Gio.AsyncResult): boolean
    set_current_bands_sync(bands: ModemBand, n_bands: number, cancellable?: Gio.Cancellable | null): boolean
    set_current_capabilities(capabilities: ModemCapability, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_current_capabilities_finish(res: Gio.AsyncResult): boolean
    set_current_capabilities_sync(capabilities: ModemCapability, cancellable?: Gio.Cancellable | null): boolean
    set_current_modes(modes: ModemMode, preferred: ModemMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_current_modes_finish(res: Gio.AsyncResult): boolean
    set_current_modes_sync(modes: ModemMode, preferred: ModemMode, cancellable?: Gio.Cancellable | null): boolean
    set_power_state(state: ModemPowerState, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_power_state_finish(res: Gio.AsyncResult): boolean
    set_power_state_sync(state: ModemPowerState, cancellable?: Gio.Cancellable | null): boolean
    set_primary_sim_slot(sim_slot: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean
    set_primary_sim_slot_sync(sim_slot: number, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem */
    call_command(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_command_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_response */ string | null ]
    call_command_sync(arg_cmd: string, arg_timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_response */ string | null ]
    call_create_bearer(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_bearer_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_bearer_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete_bearer(arg_bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean
    call_delete_bearer_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean
    call_enable(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_finish(res: Gio.AsyncResult): boolean
    call_enable_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_factory_reset(arg_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_factory_reset_finish(res: Gio.AsyncResult): boolean
    call_factory_reset_sync(arg_code: string, cancellable?: Gio.Cancellable | null): boolean
    call_list_bearers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_bearers_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_bearers */ string[] | null ]
    call_list_bearers_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_bearers */ string[] | null ]
    call_reset(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_reset_finish(res: Gio.AsyncResult): boolean
    call_reset_sync(cancellable?: Gio.Cancellable | null): boolean
    call_set_current_bands(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_current_capabilities(arg_capabilities: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_current_modes(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_power_state(arg_state: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_power_state_finish(res: Gio.AsyncResult): boolean
    call_set_power_state_sync(arg_state: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_primary_sim_slot(arg_sim_slot: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean
    call_set_primary_sim_slot_sync(arg_sim_slot: number, cancellable?: Gio.Cancellable | null): boolean
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void
    complete_enable(invocation: Gio.DBusMethodInvocation): void
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void
    complete_reset(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void
    complete_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation): void
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean
    vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean
    vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean
    vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean
    vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean
    vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean
    vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean
    vfunc_handle_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): boolean
    vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Modem, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Modem, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Modem, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Modem, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem */
    connect(sigName: "handle-command", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean)): number
    connect_after(sigName: "handle-command", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean)): number
    emit(sigName: "handle-command", invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): void
    connect(sigName: "handle-create-bearer", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-bearer", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-bearer", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete-bearer", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    connect_after(sigName: "handle-delete-bearer", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    emit(sigName: "handle-delete-bearer", invocation: Gio.DBusMethodInvocation, arg_bearer: string): void
    connect(sigName: "handle-enable", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-enable", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-factory-reset", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean)): number
    connect_after(sigName: "handle-factory-reset", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean)): number
    emit(sigName: "handle-factory-reset", invocation: Gio.DBusMethodInvocation, arg_code: string): void
    connect(sigName: "handle-list-bearers", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list-bearers", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list-bearers", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-reset", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-reset", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-reset", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-current-bands", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-current-bands", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-current-bands", invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): void
    connect(sigName: "handle-set-current-capabilities", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean)): number
    connect_after(sigName: "handle-set-current-capabilities", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean)): number
    emit(sigName: "handle-set-current-capabilities", invocation: Gio.DBusMethodInvocation, arg_capabilities: number): void
    connect(sigName: "handle-set-current-modes", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-current-modes", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-current-modes", invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): void
    connect(sigName: "handle-set-power-state", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean)): number
    connect_after(sigName: "handle-set-power-state", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean)): number
    emit(sigName: "handle-set-power-state", invocation: Gio.DBusMethodInvocation, arg_state: number): void
    connect(sigName: "handle-set-primary-sim-slot", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean)): number
    connect_after(sigName: "handle-set-primary-sim-slot", callback: (($obj: Modem, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean)): number
    emit(sigName: "handle-set-primary-sim-slot", invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): void
    connect(sigName: "state-changed", callback: (($obj: Modem, arg_old: number, arg_new: number, arg_reason: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Modem, arg_old: number, arg_new: number, arg_reason: number) => void)): number
    emit(sigName: "state-changed", arg_old: number, arg_new: number, arg_reason: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::access-technologies", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-technologies", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bearers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bearers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::carrier-configuration", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier-configuration", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::carrier-configuration-revision", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier-configuration-revision", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-bands", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-bands", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-capabilities", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-capabilities", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-modes", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-modes", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-identifier", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-identifier", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drivers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drivers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::equipment-identifier", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equipment-identifier", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hardware-revision", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hardware-revision", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-active-bearers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-active-bearers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bearers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bearers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::own-numbers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::own-numbers", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::plugin", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ports", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ports", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-state", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-state", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-port", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-port", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-sim-slot", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-sim-slot", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::revision", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signal-quality", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-quality", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim-slots", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim-slots", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-failed-reason", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-failed-reason", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-bands", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-bands", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-capabilities", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-capabilities", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-ip-families", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-ip-families", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-modes", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-modes", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unlock-required", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unlock-required", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unlock-retries", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unlock-retries", callback: (($obj: Modem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Modem_ConstructProps)
    _init (config?: Modem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): Modem
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Modem
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): Modem
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Modem
    static get_pending_network_initiated_sessions(self: ModemOma): [ /* returnType */ boolean, /* sessions */ OmaPendingNetworkInitiatedSession[] ]
    static peek_pending_network_initiated_sessions(self: ModemOma): [ /* returnType */ boolean, /* sessions */ OmaPendingNetworkInitiatedSession[] ]
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Modem3gpp_ConstructProps extends GdbusModem3gppProxy_ConstructProps {
    enabled_facility_locks?: number
    eps_ue_mode_operation?: number
    imei?: string
    initial_eps_bearer?: string
    initial_eps_bearer_settings?: GLib.Variant
    operator_code?: string
    operator_name?: string
    pco?: GLib.Variant
    registration_state?: number
    subscription_state?: number
}
export class Modem3gpp {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    enabled_facility_locks: number
    eps_ue_mode_operation: number
    imei: string
    initial_eps_bearer: string
    initial_eps_bearer_settings: GLib.Variant
    operator_code: string
    operator_name: string
    pco: GLib.Variant
    registration_state: number
    subscription_state: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Modem3gpp */
    dup_imei(): string
    dup_initial_eps_bearer_path(): string
    dup_operator_code(): string
    dup_operator_name(): string
    dup_path(): string
    get_enabled_facility_locks(): Modem3gppFacility
    get_eps_ue_mode_operation(): Modem3gppEpsUeModeOperation
    get_imei(): string
    get_initial_eps_bearer(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_initial_eps_bearer_finish(res: Gio.AsyncResult): Bearer
    get_initial_eps_bearer_settings(): BearerProperties
    get_initial_eps_bearer_sync(cancellable?: Gio.Cancellable | null): Bearer
    get_operator_code(): string
    get_operator_name(): string
    get_path(): string
    get_pco(): Pco[]
    get_registration_state(): Modem3gppRegistrationState
    get_subscription_state(): Modem3gppSubscriptionState
    peek_initial_eps_bearer_settings(): BearerProperties
    register(network_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_finish(res: Gio.AsyncResult): boolean
    register_sync(network_id: string, cancellable?: Gio.Cancellable | null): boolean
    scan(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    scan_finish(res: Gio.AsyncResult): Modem3gppNetwork[]
    scan_sync(cancellable?: Gio.Cancellable | null): Modem3gppNetwork[]
    set_eps_ue_mode_operation(mode: Modem3gppEpsUeModeOperation, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean
    set_eps_ue_mode_operation_sync(mode: Modem3gppEpsUeModeOperation, cancellable?: Gio.Cancellable | null): boolean
    set_initial_eps_bearer_settings(config: BearerProperties, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean
    set_initial_eps_bearer_settings_sync(config: BearerProperties, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    call_register(arg_operator_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_finish(res: Gio.AsyncResult): boolean
    call_register_sync(arg_operator_id: string, cancellable?: Gio.Cancellable | null): boolean
    call_scan(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_scan_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_results */ GLib.Variant | null ]
    call_scan_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_results */ GLib.Variant | null ]
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean
    call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_register(invocation: Gio.DBusMethodInvocation): void
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem3gppProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean
    vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean
    vfunc_handle_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Modem3gpp, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Modem3gpp, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Modem3gpp, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Modem3gpp, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem3gpp */
    connect(sigName: "handle-register", callback: (($obj: Modem3gpp, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean)): number
    connect_after(sigName: "handle-register", callback: (($obj: Modem3gpp, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean)): number
    emit(sigName: "handle-register", invocation: Gio.DBusMethodInvocation, arg_operator_id: string): void
    connect(sigName: "handle-scan", callback: (($obj: Modem3gpp, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-scan", callback: (($obj: Modem3gpp, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-scan", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-set-eps-ue-mode-operation", callback: (($obj: Modem3gpp, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean)): number
    connect_after(sigName: "handle-set-eps-ue-mode-operation", callback: (($obj: Modem3gpp, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean)): number
    emit(sigName: "handle-set-eps-ue-mode-operation", invocation: Gio.DBusMethodInvocation, arg_mode: number): void
    connect(sigName: "handle-set-initial-eps-bearer-settings", callback: (($obj: Modem3gpp, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-initial-eps-bearer-settings", callback: (($obj: Modem3gpp, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-initial-eps-bearer-settings", invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled-facility-locks", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-facility-locks", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eps-ue-mode-operation", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eps-ue-mode-operation", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imei", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imei", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initial-eps-bearer", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-eps-bearer", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initial-eps-bearer-settings", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-eps-bearer-settings", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-code", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-code", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-name", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-name", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pco", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pco", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registration-state", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registration-state", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subscription-state", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscription-state", callback: (($obj: Modem3gpp, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Modem3gpp_ConstructProps)
    _init (config?: Modem3gpp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): Modem3gpp
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Modem3gpp
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): Modem3gpp
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Modem3gpp
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Modem3gppUssd_ConstructProps extends GdbusModem3gppUssdProxy_ConstructProps {
    network_notification?: string
    network_request?: string
    state?: number
}
export class Modem3gppUssd {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    network_notification: string
    network_request: string
    state: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Modem3gppUssd */
    cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cancel_finish(res: Gio.AsyncResult): boolean
    cancel_sync(cancellable?: Gio.Cancellable | null): boolean
    dup_network_notification(): string
    dup_network_request(): string
    dup_path(): string
    get_network_notification(): string
    get_network_request(): string
    get_path(): string
    get_state(): Modem3gppUssdSessionState
    initiate(command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiate_finish(res: Gio.AsyncResult): string
    initiate_sync(command: string, cancellable?: Gio.Cancellable | null): string
    respond(response: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    respond_finish(res: Gio.AsyncResult): string
    respond_sync(response: string, cancellable?: Gio.Cancellable | null): string
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    call_cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean
    call_initiate(arg_command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_initiate_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_initiate_sync(arg_command: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_respond(arg_response: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_respond_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reply */ string | null ]
    call_respond_sync(arg_response: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reply */ string | null ]
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModem3gppUssdProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean
    vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Modem3gppUssd, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Modem3gppUssd, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Modem3gppUssd, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Modem3gppUssd, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModem3gppUssd */
    connect(sigName: "handle-cancel", callback: (($obj: Modem3gppUssd, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: Modem3gppUssd, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-initiate", callback: (($obj: Modem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean)): number
    connect_after(sigName: "handle-initiate", callback: (($obj: Modem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean)): number
    emit(sigName: "handle-initiate", invocation: Gio.DBusMethodInvocation, arg_command: string): void
    connect(sigName: "handle-respond", callback: (($obj: Modem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean)): number
    connect_after(sigName: "handle-respond", callback: (($obj: Modem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean)): number
    emit(sigName: "handle-respond", invocation: Gio.DBusMethodInvocation, arg_response: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-notification", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-notification", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-request", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-request", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Modem3gppUssd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Modem3gppUssd_ConstructProps)
    _init (config?: Modem3gppUssd_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): Modem3gppUssd
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Modem3gppUssd
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): Modem3gppUssd
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Modem3gppUssd
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemCdma_ConstructProps extends GdbusModemCdmaProxy_ConstructProps {
    activation_state?: number
    cdma1x_registration_state?: number
    esn?: string
    evdo_registration_state?: number
    meid?: string
    nid?: number
    sid?: number
}
export class ModemCdma {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemCdma */
    activation_state: number
    cdma1x_registration_state: number
    esn: string
    evdo_registration_state: number
    meid: string
    nid: number
    sid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemCdma */
    activate(carrier: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_finish(res: Gio.AsyncResult): boolean
    activate_manual(properties: CdmaManualActivationProperties, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_manual_finish(res: Gio.AsyncResult): boolean
    activate_manual_sync(properties: CdmaManualActivationProperties, cancellable?: Gio.Cancellable | null): boolean
    activate_sync(carrier: string, cancellable?: Gio.Cancellable | null): boolean
    dup_esn(): string
    dup_meid(): string
    dup_path(): string
    get_activation_state(): ModemCdmaActivationState
    get_cdma1x_registration_state(): ModemCdmaRegistrationState
    get_esn(): string
    get_evdo_registration_state(): ModemCdmaRegistrationState
    get_meid(): string
    get_nid(): number
    get_path(): string
    get_sid(): number
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemCdma */
    call_activate(arg_carrier_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_activate_finish(res: Gio.AsyncResult): boolean
    call_activate_manual(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_activate_manual_finish(res: Gio.AsyncResult): boolean
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_activate_sync(arg_carrier_code: string, cancellable?: Gio.Cancellable | null): boolean
    complete_activate(invocation: Gio.DBusMethodInvocation): void
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void
    emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemCdmaProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean
    vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemCdma, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemCdma, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemCdma, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemCdma, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemCdma */
    connect(sigName: "activation-state-changed", callback: (($obj: ModemCdma, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void)): number
    connect_after(sigName: "activation-state-changed", callback: (($obj: ModemCdma, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void)): number
    emit(sigName: "activation-state-changed", arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void
    connect(sigName: "handle-activate", callback: (($obj: ModemCdma, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean)): number
    connect_after(sigName: "handle-activate", callback: (($obj: ModemCdma, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean)): number
    emit(sigName: "handle-activate", invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): void
    connect(sigName: "handle-activate-manual", callback: (($obj: ModemCdma, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-activate-manual", callback: (($obj: ModemCdma, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-activate-manual", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activation-state", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation-state", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma1x-registration-state", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma1x-registration-state", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::esn", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::esn", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::evdo-registration-state", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::evdo-registration-state", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::meid", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meid", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nid", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nid", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sid", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sid", callback: (($obj: ModemCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemCdma_ConstructProps)
    _init (config?: ModemCdma_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemCdma
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemCdma
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemCdma
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemCdma
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemFirmware_ConstructProps extends GdbusModemFirmwareProxy_ConstructProps {
    update_settings?: GLib.Variant
}
export class ModemFirmware {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    update_settings: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemFirmware */
    dup_path(): string
    get_path(): string
    get_update_settings(): FirmwareUpdateSettings
    list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* selected */ FirmwareProperties | null, /* installed */ FirmwareProperties[] | null ]
    list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* selected */ FirmwareProperties | null, /* installed */ FirmwareProperties[] | null ]
    peek_update_settings(): FirmwareUpdateSettings
    select(unique_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    select_finish(res: Gio.AsyncResult): boolean
    select_sync(unique_id: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    call_list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_selected */ string | null, /* out_installed */ GLib.Variant | null ]
    call_list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_selected */ string | null, /* out_installed */ GLib.Variant | null ]
    call_select(arg_uniqueid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_finish(res: Gio.AsyncResult): boolean
    call_select_sync(arg_uniqueid: string, cancellable?: Gio.Cancellable | null): boolean
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void
    complete_select(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemFirmwareProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemFirmware, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemFirmware, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemFirmware, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemFirmware, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemFirmware */
    connect(sigName: "handle-list", callback: (($obj: ModemFirmware, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list", callback: (($obj: ModemFirmware, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select", callback: (($obj: ModemFirmware, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean)): number
    connect_after(sigName: "handle-select", callback: (($obj: ModemFirmware, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean)): number
    emit(sigName: "handle-select", invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-settings", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-settings", callback: (($obj: ModemFirmware, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemFirmware_ConstructProps)
    _init (config?: ModemFirmware_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemFirmware
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemFirmware
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemFirmware
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemFirmware
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemLocation_ConstructProps extends GdbusModemLocationProxy_ConstructProps {
    assistance_data_servers?: string[]
    capabilities?: number
    enabled?: number
    gps_refresh_rate?: number
    location?: GLib.Variant
    signals_location?: boolean
    supl_server?: string
    supported_assistance_data?: number
}
export class ModemLocation {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemLocation */
    assistance_data_servers: string[]
    capabilities: number
    enabled: number
    gps_refresh_rate: number
    location: GLib.Variant
    signals_location: boolean
    supl_server: string
    supported_assistance_data: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemLocation */
    dup_assistance_data_servers(): string[]
    dup_path(): string
    dup_supl_server(): string
    get_3gpp(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_3gpp_finish(res: Gio.AsyncResult): Location3gpp
    get_3gpp_sync(cancellable?: Gio.Cancellable | null): Location3gpp
    get_assistance_data_servers(): string[]
    get_capabilities(): ModemLocationSource
    get_cdma_bs(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_cdma_bs_finish(res: Gio.AsyncResult): LocationCdmaBs
    get_cdma_bs_sync(cancellable?: Gio.Cancellable | null): LocationCdmaBs
    get_enabled(): ModemLocationSource
    get_full(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_full_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* location_3gpp */ Location3gpp | null, /* location_gps_nmea */ LocationGpsNmea | null, /* location_gps_raw */ LocationGpsRaw | null, /* location_cdma_bs */ LocationCdmaBs | null ]
    get_full_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* location_3gpp */ Location3gpp | null, /* location_gps_nmea */ LocationGpsNmea | null, /* location_gps_raw */ LocationGpsRaw | null, /* location_cdma_bs */ LocationCdmaBs | null ]
    get_gps_nmea(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_gps_nmea_finish(res: Gio.AsyncResult): LocationGpsNmea
    get_gps_nmea_sync(cancellable?: Gio.Cancellable | null): LocationGpsNmea
    get_gps_raw(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_gps_raw_finish(res: Gio.AsyncResult): LocationGpsRaw
    get_gps_raw_sync(cancellable?: Gio.Cancellable | null): LocationGpsRaw
    get_gps_refresh_rate(): number
    get_path(): string
    get_supl_server(): string
    get_supported_assistance_data(): ModemLocationAssistanceDataType
    inject_assistance_data(data: Uint8Array[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    inject_assistance_data_finish(res: Gio.AsyncResult): boolean
    inject_assistance_data_sync(data: Uint8Array[], cancellable?: Gio.Cancellable | null): boolean
    set_gps_refresh_rate(rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean
    set_gps_refresh_rate_sync(rate: number, cancellable?: Gio.Cancellable | null): boolean
    set_supl_server(supl: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_supl_server_finish(res: Gio.AsyncResult): boolean
    set_supl_server_sync(supl: string, cancellable?: Gio.Cancellable | null): boolean
    setup(sources: ModemLocationSource, signal_location: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setup_finish(res: Gio.AsyncResult): boolean
    setup_sync(sources: ModemLocationSource, signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemLocation */
    call_get_location(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_location_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_Location */ GLib.Variant | null ]
    call_get_location_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_Location */ GLib.Variant | null ]
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_gps_refresh_rate(arg_rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean
    call_set_supl_server(arg_supl: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean
    call_set_supl_server_sync(arg_supl: string, cancellable?: Gio.Cancellable | null): boolean
    call_setup(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable?: Gio.Cancellable | null): boolean
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemLocationProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean
    vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean
    vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemLocation, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemLocation, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemLocation, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemLocation, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemLocation */
    connect(sigName: "handle-get-location", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-location", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-location", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-inject-assistance-data", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-inject-assistance-data", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean)): number
    emit(sigName: "handle-inject-assistance-data", invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): void
    connect(sigName: "handle-set-gps-refresh-rate", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    connect_after(sigName: "handle-set-gps-refresh-rate", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    emit(sigName: "handle-set-gps-refresh-rate", invocation: Gio.DBusMethodInvocation, arg_rate: number): void
    connect(sigName: "handle-set-supl-server", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean)): number
    connect_after(sigName: "handle-set-supl-server", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean)): number
    emit(sigName: "handle-set-supl-server", invocation: Gio.DBusMethodInvocation, arg_supl: string): void
    connect(sigName: "handle-setup", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: ModemLocation, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::assistance-data-servers", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistance-data-servers", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gps-refresh-rate", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gps-refresh-rate", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signals-location", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signals-location", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supl-server", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supl-server", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-assistance-data", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-assistance-data", callback: (($obj: ModemLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemLocation_ConstructProps)
    _init (config?: ModemLocation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemLocation
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemLocation
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemLocation
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemLocation
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemMessaging_ConstructProps extends GdbusModemMessagingProxy_ConstructProps {
    default_storage?: number
    messages?: string[]
    supported_storages?: GLib.Variant
}
export class ModemMessaging {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    default_storage: number
    messages: string[]
    supported_storages: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemMessaging */
    create(properties: SmsProperties, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_finish(res: Gio.AsyncResult): Sms
    create_sync(properties: SmsProperties, cancellable?: Gio.Cancellable | null): Sms
    delete(sms: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(res: Gio.AsyncResult): boolean
    delete_sync(sms: string, cancellable?: Gio.Cancellable | null): boolean
    dup_path(): string
    get_default_storage(): SmsStorage
    get_path(): string
    get_supported_storages(): [ /* returnType */ boolean, /* storages */ SmsStorage[] ]
    list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_finish(res: Gio.AsyncResult): Sms[]
    list_sync(cancellable?: Gio.Cancellable | null): Sms[]
    peek_supported_storages(): [ /* returnType */ boolean, /* storages */ SmsStorage, /* n_storages */ number ]
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    call_create(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete(arg_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean
    call_list(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_list_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void
    emit_added(arg_path: string, arg_received: boolean): void
    emit_deleted(arg_path: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemMessagingProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_added(arg_path: string, arg_received: boolean): void
    vfunc_deleted(arg_path: string): void
    vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean
    vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemMessaging, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemMessaging, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemMessaging, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemMessaging, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemMessaging */
    connect(sigName: "added", callback: (($obj: ModemMessaging, arg_path: string, arg_received: boolean) => void)): number
    connect_after(sigName: "added", callback: (($obj: ModemMessaging, arg_path: string, arg_received: boolean) => void)): number
    emit(sigName: "added", arg_path: string, arg_received: boolean): void
    connect(sigName: "deleted", callback: (($obj: ModemMessaging, arg_path: string) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: ModemMessaging, arg_path: string) => void)): number
    emit(sigName: "deleted", arg_path: string): void
    connect(sigName: "handle-create", callback: (($obj: ModemMessaging, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create", callback: (($obj: ModemMessaging, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete", callback: (($obj: ModemMessaging, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: ModemMessaging, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_path: string): void
    connect(sigName: "handle-list", callback: (($obj: ModemMessaging, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list", callback: (($obj: ModemMessaging, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-storage", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-storage", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::messages", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::messages", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-storages", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-storages", callback: (($obj: ModemMessaging, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemMessaging_ConstructProps)
    _init (config?: ModemMessaging_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemMessaging
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemMessaging
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemMessaging
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemMessaging
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemOma_ConstructProps extends GdbusModemOmaProxy_ConstructProps {
    features?: number
    pending_network_initiated_sessions?: GLib.Variant
    session_state?: number
    session_type?: number
}
export class ModemOma {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemOma */
    features: number
    pending_network_initiated_sessions: GLib.Variant
    session_state: number
    session_type: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemOma */
    accept_network_initiated_session(session_id: number, accept: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean
    accept_network_initiated_session_sync(session_id: number, accept: boolean, cancellable?: Gio.Cancellable | null): boolean
    cancel_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cancel_session_finish(res: Gio.AsyncResult): boolean
    cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean
    dup_path(): string
    get_features(): OmaFeature
    get_path(): string
    get_session_state(): OmaSessionState
    get_session_type(): OmaSessionType
    setup(features: OmaFeature, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setup_finish(res: Gio.AsyncResult): boolean
    setup_sync(features: OmaFeature, cancellable?: Gio.Cancellable | null): boolean
    start_client_initiated_session(session_type: OmaSessionType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_client_initiated_session_finish(res: Gio.AsyncResult): boolean
    start_client_initiated_session_sync(session_type: OmaSessionType, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemOma */
    call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean
    call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_cancel_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_session_finish(res: Gio.AsyncResult): boolean
    call_cancel_session_sync(cancellable?: Gio.Cancellable | null): boolean
    call_setup(arg_features: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_features: number, cancellable?: Gio.Cancellable | null): boolean
    call_start_client_initiated_session(arg_session_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable?: Gio.Cancellable | null): boolean
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void
    emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemOmaProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): boolean
    vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean
    vfunc_handle_start_client_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_type: number): boolean
    vfunc_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemOma, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemOma, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemOma, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemOma, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemOma */
    connect(sigName: "handle-accept-network-initiated-session", callback: (($obj: ModemOma, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean)): number
    connect_after(sigName: "handle-accept-network-initiated-session", callback: (($obj: ModemOma, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean)): number
    emit(sigName: "handle-accept-network-initiated-session", invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): void
    connect(sigName: "handle-cancel-session", callback: (($obj: ModemOma, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel-session", callback: (($obj: ModemOma, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel-session", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-setup", callback: (($obj: ModemOma, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: ModemOma, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_features: number): void
    connect(sigName: "handle-start-client-initiated-session", callback: (($obj: ModemOma, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean)): number
    connect_after(sigName: "handle-start-client-initiated-session", callback: (($obj: ModemOma, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean)): number
    emit(sigName: "handle-start-client-initiated-session", invocation: Gio.DBusMethodInvocation, arg_session_type: number): void
    connect(sigName: "session-state-changed", callback: (($obj: ModemOma, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void)): number
    connect_after(sigName: "session-state-changed", callback: (($obj: ModemOma, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void)): number
    emit(sigName: "session-state-changed", arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::features", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pending-network-initiated-sessions", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pending-network-initiated-sessions", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-state", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-state", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-type", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-type", callback: (($obj: ModemOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemOma_ConstructProps)
    _init (config?: ModemOma_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemOma
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemOma
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemOma
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemOma
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemSignal_ConstructProps extends GdbusModemSignalProxy_ConstructProps {
    cdma?: GLib.Variant
    evdo?: GLib.Variant
    gsm?: GLib.Variant
    lte?: GLib.Variant
    nr5g?: GLib.Variant
    rate?: number
    umts?: GLib.Variant
}
export class ModemSignal {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemSignal */
    cdma: GLib.Variant
    evdo: GLib.Variant
    gsm: GLib.Variant
    lte: GLib.Variant
    nr5g: GLib.Variant
    rate: number
    umts: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemSignal */
    dup_path(): string
    get_cdma(): Signal
    get_evdo(): Signal
    get_gsm(): Signal
    get_lte(): Signal
    get_nr5g(): Signal
    get_path(): string
    get_rate(): number
    get_umts(): Signal
    peek_cdma(): Signal
    peek_evdo(): Signal
    peek_gsm(): Signal
    peek_lte(): Signal
    peek_nr5g(): Signal
    peek_umts(): Signal
    setup(rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setup_finish(res: Gio.AsyncResult): boolean
    setup_sync(rate: number, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemSignal */
    call_setup(arg_rate: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_setup_finish(res: Gio.AsyncResult): boolean
    call_setup_sync(arg_rate: number, cancellable?: Gio.Cancellable | null): boolean
    complete_setup(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSignalProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemSignal, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemSignal, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemSignal, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemSignal, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemSignal */
    connect(sigName: "handle-setup", callback: (($obj: ModemSignal, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    connect_after(sigName: "handle-setup", callback: (($obj: ModemSignal, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean)): number
    emit(sigName: "handle-setup", invocation: Gio.DBusMethodInvocation, arg_rate: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::evdo", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::evdo", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gsm", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gsm", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lte", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lte", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nr5g", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nr5g", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::umts", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::umts", callback: (($obj: ModemSignal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemSignal_ConstructProps)
    _init (config?: ModemSignal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemSignal
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemSignal
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemSignal
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemSignal
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemSimple_ConstructProps extends GdbusModemSimpleProxy_ConstructProps {
}
export class ModemSimple {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemSimple */
    connect(properties: SimpleConnectProperties, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(res: Gio.AsyncResult): Bearer
    connect_sync(properties: SimpleConnectProperties, cancellable?: Gio.Cancellable | null): Bearer
    disconnect(bearer?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(res: Gio.AsyncResult): boolean
    disconnect_sync(bearer?: string | null, cancellable?: Gio.Cancellable | null): boolean
    dup_path(): string
    get_path(): string
    get_status(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_status_finish(res: Gio.AsyncResult): SimpleStatus
    get_status_sync(cancellable?: Gio.Cancellable | null): SimpleStatus
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemSimple */
    call_connect(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_connect_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_bearer */ string | null ]
    call_connect_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_bearer */ string | null ]
    call_disconnect(arg_bearer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(arg_bearer: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_status(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_status_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_properties */ GLib.Variant | null ]
    call_get_status_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_properties */ GLib.Variant | null ]
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemSimpleProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean
    vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemSimple, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemSimple, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemSimple, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemSimple, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemSimple */
    connect(sigName: "handle-connect", callback: (($obj: ModemSimple, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-connect", callback: (($obj: ModemSimple, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-connect", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-disconnect", callback: (($obj: ModemSimple, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: ModemSimple, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean)): number
    emit(sigName: "handle-disconnect", invocation: Gio.DBusMethodInvocation, arg_bearer: string): void
    connect(sigName: "handle-get-status", callback: (($obj: ModemSimple, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-status", callback: (($obj: ModemSimple, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-status", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemSimple_ConstructProps)
    _init (config?: ModemSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemSimple
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemSimple
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemSimple
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemSimple
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemTime_ConstructProps extends GdbusModemTimeProxy_ConstructProps {
    network_timezone?: GLib.Variant
}
export class ModemTime {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemTime */
    network_timezone: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemTime */
    dup_path(): string
    get_network_time(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_network_time_finish(res: Gio.AsyncResult): string
    get_network_time_sync(cancellable?: Gio.Cancellable | null): string
    get_network_timezone(): NetworkTimezone
    get_path(): string
    peek_network_timezone(): NetworkTimezone
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemTime */
    call_get_network_time(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_network_time_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_time */ string | null ]
    call_get_network_time_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_time */ string | null ]
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void
    emit_network_time_changed(arg_time: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemTimeProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_network_time_changed(arg_time: string): void
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemTime, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemTime, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemTime, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemTime, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemTime */
    connect(sigName: "handle-get-network-time", callback: (($obj: ModemTime, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-network-time", callback: (($obj: ModemTime, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-network-time", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "network-time-changed", callback: (($obj: ModemTime, arg_time: string) => void)): number
    connect_after(sigName: "network-time-changed", callback: (($obj: ModemTime, arg_time: string) => void)): number
    emit(sigName: "network-time-changed", arg_time: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-timezone", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-timezone", callback: (($obj: ModemTime, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemTime_ConstructProps)
    _init (config?: ModemTime_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemTime
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemTime
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemTime
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemTime
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ModemVoice_ConstructProps extends GdbusModemVoiceProxy_ConstructProps {
    calls?: string[]
    emergency_only?: boolean
}
export class ModemVoice {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusModemVoice */
    calls: string[]
    emergency_only: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.ModemVoice */
    call_waiting_query(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_waiting_query_finish(res: Gio.AsyncResult, status: boolean): boolean
    call_waiting_query_sync(cancellable: Gio.Cancellable | null, status: boolean): boolean
    call_waiting_setup(enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_waiting_setup_finish(res: Gio.AsyncResult): boolean
    call_waiting_setup_sync(enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    create_call(properties: CallProperties, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_call_finish(res: Gio.AsyncResult): Call
    create_call_sync(properties: CallProperties, cancellable?: Gio.Cancellable | null): Call
    delete_call(call: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_call_finish(res: Gio.AsyncResult): boolean
    delete_call_sync(call: string, cancellable?: Gio.Cancellable | null): boolean
    dup_path(): string
    get_emergency_only(): boolean
    get_path(): string
    hangup_all(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    hangup_all_finish(res: Gio.AsyncResult): boolean
    hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean
    hangup_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    hangup_and_accept_finish(res: Gio.AsyncResult): boolean
    hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    hold_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    hold_and_accept_finish(res: Gio.AsyncResult): boolean
    hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    list_calls(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_calls_finish(res: Gio.AsyncResult): Call[]
    list_calls_sync(cancellable?: Gio.Cancellable | null): Call[]
    transfer(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_finish(res: Gio.AsyncResult): boolean
    transfer_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusModemVoice */
    call_call_waiting_query(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_call_waiting_query_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_status */ boolean | null ]
    call_call_waiting_query_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_status */ boolean | null ]
    call_call_waiting_setup(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean
    call_call_waiting_setup_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_create_call(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_call_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_create_call_sync(arg_properties: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_path */ string | null ]
    call_delete_call(arg_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_call_finish(res: Gio.AsyncResult): boolean
    call_delete_call_sync(arg_path: string, cancellable?: Gio.Cancellable | null): boolean
    call_hangup_all(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hangup_all_finish(res: Gio.AsyncResult): boolean
    call_hangup_all_sync(cancellable?: Gio.Cancellable | null): boolean
    call_hangup_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean
    call_hangup_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    call_hold_and_accept(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hold_and_accept_finish(res: Gio.AsyncResult): boolean
    call_hold_and_accept_sync(cancellable?: Gio.Cancellable | null): boolean
    call_list_calls(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_list_calls_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_list_calls_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_result */ string[] | null ]
    call_transfer(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_transfer_finish(res: Gio.AsyncResult): boolean
    call_transfer_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void
    complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void
    complete_hangup_all(invocation: Gio.DBusMethodInvocation): void
    complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void
    complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void
    complete_transfer(invocation: Gio.DBusMethodInvocation): void
    emit_call_added(arg_path: string): void
    emit_call_deleted(arg_path: string): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusModemVoiceProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_call_added(arg_path: string): void
    vfunc_call_deleted(arg_path: string): void
    vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean
    vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean
    vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ModemVoice, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ModemVoice, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ModemVoice, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ModemVoice, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusModemVoice */
    connect(sigName: "call-added", callback: (($obj: ModemVoice, arg_path: string) => void)): number
    connect_after(sigName: "call-added", callback: (($obj: ModemVoice, arg_path: string) => void)): number
    emit(sigName: "call-added", arg_path: string): void
    connect(sigName: "call-deleted", callback: (($obj: ModemVoice, arg_path: string) => void)): number
    connect_after(sigName: "call-deleted", callback: (($obj: ModemVoice, arg_path: string) => void)): number
    emit(sigName: "call-deleted", arg_path: string): void
    connect(sigName: "handle-call-waiting-query", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-call-waiting-query", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-call-waiting-query", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-call-waiting-setup", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-call-waiting-setup", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-call-waiting-setup", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-create-call", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-call", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-call", invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): void
    connect(sigName: "handle-delete-call", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    connect_after(sigName: "handle-delete-call", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean)): number
    emit(sigName: "handle-delete-call", invocation: Gio.DBusMethodInvocation, arg_path: string): void
    connect(sigName: "handle-hangup-all", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hangup-all", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hangup-all", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-hangup-and-accept", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hangup-and-accept", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hangup-and-accept", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-hold-and-accept", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hold-and-accept", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hold-and-accept", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-list-calls", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-list-calls", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-list-calls", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-transfer", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-transfer", callback: (($obj: ModemVoice, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-transfer", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calls", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calls", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emergency-only", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emergency-only", callback: (($obj: ModemVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModemVoice_ConstructProps)
    _init (config?: ModemVoice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ModemVoice
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemVoice
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ModemVoice
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ModemVoice
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface NetworkTimezone_ConstructProps extends GObject.Object_ConstructProps {
}
export class NetworkTimezone {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.NetworkTimezone */
    get_dst_offset(): number
    get_leap_seconds(): number
    get_offset(): number
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
    connect(sigName: "notify", callback: (($obj: NetworkTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkTimezone_ConstructProps)
    _init (config?: NetworkTimezone_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GdbusObjectProxy_ConstructProps {
    modem?: GdbusModem
    modem_cdma?: GdbusModemCdma
    modem_firmware?: GdbusModemFirmware
    modem_location?: GdbusModemLocation
    modem_messaging?: GdbusModemMessaging
    modem_oma?: GdbusModemOma
    modem_signal?: GdbusModemSignal
    modem_simple?: GdbusModemSimple
    modem_time?: GdbusModemTime
    modem_voice?: GdbusModemVoice
    modem3gpp?: GdbusModem3gpp
    modem3gpp_ussd?: GdbusModem3gppUssd
}
export class Object {
    /* Properties of ModemManager-1.0.ModemManager.GdbusObject */
    modem: GdbusModem
    modem_cdma: GdbusModemCdma
    modem_firmware: GdbusModemFirmware
    modem_location: GdbusModemLocation
    modem_messaging: GdbusModemMessaging
    modem_oma: GdbusModemOma
    modem_signal: GdbusModemSignal
    modem_simple: GdbusModemSimple
    modem_time: GdbusModemTime
    modem_voice: GdbusModemVoice
    modem3gpp: GdbusModem3gpp
    modem3gpp_ussd: GdbusModem3gppUssd
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Object */
    dup_path(): string
    get_modem(): Modem
    get_modem_3gpp(): Modem3gpp
    get_modem_3gpp_ussd(): Modem3gppUssd
    get_modem_cdma(): ModemCdma
    get_modem_firmware(): ModemFirmware
    get_modem_location(): ModemLocation
    get_modem_messaging(): ModemMessaging
    get_modem_oma(): ModemOma
    get_modem_signal(): ModemSignal
    get_modem_simple(): ModemSimple
    get_modem_time(): ModemTime
    get_modem_voice(): ModemVoice
    /* Methods of Gio-2.0.Gio.DBusObjectProxy */
    get_connection(): Gio.DBusConnection
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Methods of ModemManager-1.0.ModemManager.GdbusObject */
    get_modem(): GdbusModem | null
    get_modem3gpp(): GdbusModem3gpp | null
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null
    get_modem_cdma(): GdbusModemCdma | null
    get_modem_firmware(): GdbusModemFirmware | null
    get_modem_location(): GdbusModemLocation | null
    get_modem_messaging(): GdbusModemMessaging | null
    get_modem_oma(): GdbusModemOma | null
    get_modem_signal(): GdbusModemSignal | null
    get_modem_simple(): GdbusModemSimple | null
    get_modem_time(): GdbusModemTime | null
    get_modem_voice(): GdbusModemVoice | null
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusObjectProxy */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::modem", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-cdma", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-cdma", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-firmware", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-firmware", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-location", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-location", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-messaging", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-messaging", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-oma", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-oma", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-signal", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-signal", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-simple", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-simple", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-time", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-time", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem-voice", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-voice", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem3gpp", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem3gpp", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modem3gpp-ussd", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem3gpp-ussd", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Pco_ConstructProps extends GObject.Object_ConstructProps {
}
export class Pco {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Pco */
    get_data(): [ /* returnType */ number, /* data_size */ number ]
    get_session_id(): number
    is_complete(): boolean
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
    connect(sigName: "notify", callback: (($obj: Pco, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pco, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pco_ConstructProps)
    _init (config?: Pco_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static list_free(pco_list: Pco[]): void
    static $gtype: GObject.Type
}
export interface Signal_ConstructProps extends GObject.Object_ConstructProps {
}
export class Signal {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Signal */
    get_ecio(): number
    get_io(): number
    get_rscp(): number
    get_rsrp(): number
    get_rsrq(): number
    get_rssi(): number
    get_sinr(): number
    get_snr(): number
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
    connect(sigName: "notify", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Signal_ConstructProps)
    _init (config?: Signal_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Sim_ConstructProps extends GdbusSimProxy_ConstructProps {
    active?: boolean
    eid?: string
    emergency_numbers?: string[]
    imsi?: string
    operator_identifier?: string
    operator_name?: string
    sim_identifier?: string
}
export class Sim {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusSim */
    active: boolean
    eid: string
    emergency_numbers: string[]
    imsi: string
    operator_identifier: string
    operator_name: string
    sim_identifier: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Sim */
    change_pin(old_pin: string, new_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    change_pin_finish(res: Gio.AsyncResult): boolean
    change_pin_sync(old_pin: string, new_pin: string, cancellable?: Gio.Cancellable | null): boolean
    disable_pin(pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disable_pin_finish(res: Gio.AsyncResult): boolean
    disable_pin_sync(pin: string, cancellable?: Gio.Cancellable | null): boolean
    dup_eid(): string
    dup_emergency_numbers(): string[]
    dup_identifier(): string
    dup_imsi(): string
    dup_operator_identifier(): string
    dup_operator_name(): string
    dup_path(): string
    enable_pin(pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enable_pin_finish(res: Gio.AsyncResult): boolean
    enable_pin_sync(pin: string, cancellable?: Gio.Cancellable | null): boolean
    get_active(): boolean
    get_eid(): string
    get_emergency_numbers(): string[]
    get_identifier(): string
    get_imsi(): string
    get_operator_identifier(): string
    get_operator_name(): string
    get_path(): string
    send_pin(pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_pin_finish(res: Gio.AsyncResult): boolean
    send_pin_sync(pin: string, cancellable?: Gio.Cancellable | null): boolean
    send_puk(puk: string, pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_puk_finish(res: Gio.AsyncResult): boolean
    send_puk_sync(puk: string, pin: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusSim */
    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_change_pin_finish(res: Gio.AsyncResult): boolean
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable?: Gio.Cancellable | null): boolean
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_pin_finish(res: Gio.AsyncResult): boolean
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_send_pin(arg_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_pin_finish(res: Gio.AsyncResult): boolean
    call_send_pin_sync(arg_pin: string, cancellable?: Gio.Cancellable | null): boolean
    call_send_puk(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_puk_finish(res: Gio.AsyncResult): boolean
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable?: Gio.Cancellable | null): boolean
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusSimProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean
    vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean
    vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean
    vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Sim, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Sim, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Sim, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Sim, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusSim */
    connect(sigName: "handle-change-pin", callback: (($obj: Sim, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean)): number
    connect_after(sigName: "handle-change-pin", callback: (($obj: Sim, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean)): number
    emit(sigName: "handle-change-pin", invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): void
    connect(sigName: "handle-enable-pin", callback: (($obj: Sim, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-pin", callback: (($obj: Sim, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean)): number
    emit(sigName: "handle-enable-pin", invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): void
    connect(sigName: "handle-send-pin", callback: (($obj: Sim, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean)): number
    connect_after(sigName: "handle-send-pin", callback: (($obj: Sim, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean)): number
    emit(sigName: "handle-send-pin", invocation: Gio.DBusMethodInvocation, arg_pin: string): void
    connect(sigName: "handle-send-puk", callback: (($obj: Sim, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean)): number
    connect_after(sigName: "handle-send-puk", callback: (($obj: Sim, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean)): number
    emit(sigName: "handle-send-puk", invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eid", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eid", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emergency-numbers", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emergency-numbers", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imsi", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imsi", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-identifier", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-identifier", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator-name", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator-name", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sim-identifier", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sim-identifier", callback: (($obj: Sim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sim_ConstructProps)
    _init (config?: Sim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): Sim
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Sim
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): Sim
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Sim
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface SimpleConnectProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleConnectProperties {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.SimpleConnectProperties */
    get_allow_roaming(): boolean
    get_allowed_auth(): BearerAllowedAuth
    get_apn(): string
    get_ip_type(): BearerIpFamily
    get_number(): string
    get_operator_id(): string
    get_password(): string
    get_pin(): string
    get_rm_protocol(): ModemCdmaRmProtocol
    get_user(): string
    set_allow_roaming(allow_roaming: boolean): void
    set_allowed_auth(allowed_auth: BearerAllowedAuth): void
    set_apn(apn: string): void
    set_ip_type(ip_type: BearerIpFamily): void
    set_number(number: string): void
    set_operator_id(operator_id: string): void
    set_password(password: string): void
    set_pin(pin: string): void
    set_rm_protocol(protocol: ModemCdmaRmProtocol): void
    set_user(user: string): void
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
    connect(sigName: "notify", callback: (($obj: SimpleConnectProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleConnectProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleConnectProperties_ConstructProps)
    _init (config?: SimpleConnectProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleConnectProperties
    static $gtype: GObject.Type
}
export interface SimpleStatus_ConstructProps extends GObject.Object_ConstructProps {
    access_technologies?: ModemAccessTechnology
    cdma_cdma1x_registration_state?: ModemCdmaRegistrationState
    cdma_evdo_registration_state?: ModemCdmaRegistrationState
    cdma_nid?: number
    cdma_sid?: number
    current_bands?: GLib.Variant
    m3gpp_operator_code?: string
    m3gpp_operator_name?: string
    m3gpp_registration_state?: Modem3gppRegistrationState
    m3gpp_subscription_state?: Modem3gppSubscriptionState
    signal_quality?: GLib.Variant
    state?: ModemState
}
export class SimpleStatus {
    /* Properties of ModemManager-1.0.ModemManager.SimpleStatus */
    access_technologies: ModemAccessTechnology
    cdma_cdma1x_registration_state: ModemCdmaRegistrationState
    cdma_evdo_registration_state: ModemCdmaRegistrationState
    cdma_nid: number
    cdma_sid: number
    current_bands: GLib.Variant
    m3gpp_operator_code: string
    m3gpp_operator_name: string
    m3gpp_registration_state: Modem3gppRegistrationState
    m3gpp_subscription_state: Modem3gppSubscriptionState
    signal_quality: GLib.Variant
    state: ModemState
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.SimpleStatus */
    get_3gpp_operator_code(): string
    get_3gpp_operator_name(): string
    get_3gpp_registration_state(): Modem3gppRegistrationState
    get_3gpp_subscription_state(): Modem3gppSubscriptionState
    get_access_technologies(): ModemAccessTechnology
    get_cdma_cdma1x_registration_state(): ModemCdmaRegistrationState
    get_cdma_evdo_registration_state(): ModemCdmaRegistrationState
    get_cdma_nid(): number
    get_cdma_sid(): number
    get_current_bands(): [ /* bands */ ModemBand, /* n_bands */ number ]
    get_signal_quality(): [ /* returnType */ number, /* recent */ boolean | null ]
    get_state(): ModemState
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
    connect(sigName: "notify", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-technologies", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-technologies", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma-cdma1x-registration-state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma-cdma1x-registration-state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma-evdo-registration-state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma-evdo-registration-state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma-nid", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma-nid", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cdma-sid", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cdma-sid", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-bands", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-bands", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::m3gpp-operator-code", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::m3gpp-operator-code", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::m3gpp-operator-name", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::m3gpp-operator-name", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::m3gpp-registration-state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::m3gpp-registration-state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::m3gpp-subscription-state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::m3gpp-subscription-state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signal-quality", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-quality", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SimpleStatus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleStatus_ConstructProps)
    _init (config?: SimpleStatus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Sms_ConstructProps extends GdbusSmsProxy_ConstructProps {
    "class"?: number
    data?: GLib.Variant
    delivery_report_request?: boolean
    delivery_state?: number
    discharge_timestamp?: string
    message_reference?: number
    number?: string
    pdu_type?: number
    service_category?: number
    smsc?: string
    state?: number
    storage?: number
    teleservice_id?: number
    text?: string
    timestamp?: string
    validity?: GLib.Variant
}
export class Sms {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of ModemManager-1.0.ModemManager.GdbusSms */
    "class": number
    data: GLib.Variant
    delivery_report_request: boolean
    delivery_state: number
    discharge_timestamp: string
    message_reference: number
    number: string
    pdu_type: number
    service_category: number
    smsc: string
    state: number
    storage: number
    teleservice_id: number
    text: string
    timestamp: string
    validity: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.Sms */
    dup_data(): Uint8Array[]
    dup_discharge_timestamp(): string
    dup_number(): string
    dup_path(): string
    dup_smsc(): string
    dup_text(): string
    dup_timestamp(): string
    get_class(): number
    get_data(): Uint8Array[]
    get_delivery_report_request(): boolean
    get_delivery_state(): number
    get_discharge_timestamp(): string
    get_message_reference(): number
    get_number(): string
    get_path(): string
    get_pdu_type(): SmsPduType
    get_service_category(): SmsCdmaServiceCategory
    get_smsc(): string
    get_state(): SmsState
    get_storage(): SmsStorage
    get_teleservice_id(): SmsCdmaTeleserviceId
    get_text(): string
    get_timestamp(): string
    get_validity_relative(): number
    get_validity_type(): SmsValidityType
    send(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(res: Gio.AsyncResult): boolean
    send_sync(cancellable?: Gio.Cancellable | null): boolean
    store(storage: SmsStorage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    store_finish(res: Gio.AsyncResult): boolean
    store_sync(storage: SmsStorage, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of ModemManager-1.0.ModemManager.GdbusSms */
    call_send(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_send_finish(res: Gio.AsyncResult): boolean
    call_send_sync(cancellable?: Gio.Cancellable | null): boolean
    call_store(arg_storage: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_store_finish(res: Gio.AsyncResult): boolean
    call_store_sync(arg_storage: number, cancellable?: Gio.Cancellable | null): boolean
    complete_send(invocation: Gio.DBusMethodInvocation): void
    complete_store(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of ModemManager-1.0.ModemManager.GdbusSmsProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Sms, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Sms, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Sms, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Sms, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ModemManager-1.0.ModemManager.GdbusSms */
    connect(sigName: "handle-send", callback: (($obj: Sms, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-send", callback: (($obj: Sms, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-send", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-store", callback: (($obj: Sms, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean)): number
    connect_after(sigName: "handle-store", callback: (($obj: Sms, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean)): number
    emit(sigName: "handle-store", invocation: Gio.DBusMethodInvocation, arg_storage: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::class", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delivery-report-request", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delivery-report-request", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delivery-state", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delivery-state", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discharge-timestamp", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discharge-timestamp", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-reference", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-reference", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pdu-type", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pdu-type", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-category", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-category", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smsc", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smsc", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storage", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::teleservice-id", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::teleservice-id", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validity", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validity", callback: (($obj: Sms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sms_ConstructProps)
    _init (config?: Sms_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): Sms
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Sms
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): Sms
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): Sms
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface SmsProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class SmsProperties {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.SmsProperties */
    get_class(): number
    get_data(): [ /* returnType */ number, /* data_len */ number ]
    get_data_bytearray(): Uint8Array[]
    get_delivery_report_request(): boolean
    get_number(): string
    get_service_category(): SmsCdmaServiceCategory
    get_smsc(): string
    get_teleservice_id(): SmsCdmaTeleserviceId
    get_text(): string
    get_validity_relative(): number
    get_validity_type(): SmsValidityType
    peek_data_bytearray(): Uint8Array[]
    set_class(message_class: number): void
    set_data(data: number, data_length: number): void
    set_data_bytearray(data: Uint8Array[]): void
    set_delivery_report_request(request: boolean): void
    set_number(number: string): void
    set_service_category(service_category: SmsCdmaServiceCategory): void
    set_smsc(smsc: string): void
    set_teleservice_id(teleservice_id: SmsCdmaTeleserviceId): void
    set_text(text: string): void
    set_validity_relative(validity: number): void
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
    connect(sigName: "notify", callback: (($obj: SmsProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SmsProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SmsProperties_ConstructProps)
    _init (config?: SmsProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SmsProperties
    static $gtype: GObject.Type
}
export interface UnlockRetries_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnlockRetries {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ModemManager-1.0.ModemManager.UnlockRetries */
    foreach(callback: UnlockRetriesForeachCb): void
    get(lock: ModemLock): number
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
    connect(sigName: "notify", callback: (($obj: UnlockRetries, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnlockRetries, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnlockRetries_ConstructProps)
    _init (config?: UnlockRetries_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class BearerClass {
    static name: string
}
export abstract class BearerIpConfigClass {
    static name: string
}
export class BearerIpConfigPrivate {
    static name: string
}
export class BearerPrivate {
    static name: string
}
export abstract class BearerPropertiesClass {
    static name: string
}
export class BearerPropertiesPrivate {
    static name: string
}
export abstract class BearerStatsClass {
    static name: string
}
export class BearerStatsPrivate {
    static name: string
}
export abstract class CallAudioFormatClass {
    static name: string
}
export class CallAudioFormatPrivate {
    static name: string
}
export abstract class CallClass {
    static name: string
}
export class CallPrivate {
    static name: string
}
export abstract class CallPropertiesClass {
    static name: string
}
export class CallPropertiesPrivate {
    static name: string
}
export abstract class CdmaManualActivationPropertiesClass {
    static name: string
}
export class CdmaManualActivationPropertiesPrivate {
    static name: string
}
export abstract class FirmwarePropertiesClass {
    static name: string
}
export class FirmwarePropertiesPrivate {
    static name: string
}
export abstract class FirmwareUpdateSettingsClass {
    static name: string
}
export class FirmwareUpdateSettingsPrivate {
    static name: string
}
export abstract class GdbusBearerIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusBearerIface */
    parent_iface: GObject.TypeInterface
    handle_connect: (object: GdbusBearer, invocation: Gio.DBusMethodInvocation) => boolean
    handle_disconnect: (object: GdbusBearer, invocation: Gio.DBusMethodInvocation) => boolean
    get_bearer_type: (object: GdbusBearer) => number
    get_connected: (object: GdbusBearer) => boolean
    get_interface: (object: GdbusBearer) => string | null
    get_ip4_config: (object: GdbusBearer) => GLib.Variant | null
    get_ip6_config: (object: GdbusBearer) => GLib.Variant | null
    get_ip_timeout: (object: GdbusBearer) => number
    get_properties: (object: GdbusBearer) => GLib.Variant | null
    get_stats: (object: GdbusBearer) => GLib.Variant | null
    get_suspended: (object: GdbusBearer) => boolean
    static name: string
}
export abstract class GdbusBearerProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusBearerProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusBearerProxyPrivate {
    static name: string
}
export abstract class GdbusBearerSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusBearerSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusBearerSkeletonPrivate {
    static name: string
}
export abstract class GdbusModem3gppIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModem3gppIface */
    parent_iface: GObject.TypeInterface
    handle_register: (object: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_operator_id: string) => boolean
    handle_scan: (object: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation) => boolean
    handle_set_eps_ue_mode_operation: (object: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_mode: number) => boolean
    handle_set_initial_eps_bearer_settings: (object: GdbusModem3gpp, invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant) => boolean
    get_enabled_facility_locks: (object: GdbusModem3gpp) => number
    get_eps_ue_mode_operation: (object: GdbusModem3gpp) => number
    get_imei: (object: GdbusModem3gpp) => string | null
    get_initial_eps_bearer: (object: GdbusModem3gpp) => string | null
    get_initial_eps_bearer_settings: (object: GdbusModem3gpp) => GLib.Variant | null
    get_operator_code: (object: GdbusModem3gpp) => string | null
    get_operator_name: (object: GdbusModem3gpp) => string | null
    get_pco: (object: GdbusModem3gpp) => GLib.Variant | null
    get_registration_state: (object: GdbusModem3gpp) => number
    get_subscription_state: (object: GdbusModem3gpp) => number
    static name: string
}
export abstract class GdbusModem3gppProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModem3gppProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModem3gppProxyPrivate {
    static name: string
}
export abstract class GdbusModem3gppSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModem3gppSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModem3gppSkeletonPrivate {
    static name: string
}
export abstract class GdbusModem3gppUssdIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModem3gppUssdIface */
    parent_iface: GObject.TypeInterface
    handle_cancel: (object: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation) => boolean
    handle_initiate: (object: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_command: string) => boolean
    handle_respond: (object: GdbusModem3gppUssd, invocation: Gio.DBusMethodInvocation, arg_response: string) => boolean
    get_network_notification: (object: GdbusModem3gppUssd) => string | null
    get_network_request: (object: GdbusModem3gppUssd) => string | null
    get_state: (object: GdbusModem3gppUssd) => number
    static name: string
}
export abstract class GdbusModem3gppUssdProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModem3gppUssdProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModem3gppUssdProxyPrivate {
    static name: string
}
export abstract class GdbusModem3gppUssdSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModem3gppUssdSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModem3gppUssdSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemCdmaIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemCdmaIface */
    parent_iface: GObject.TypeInterface
    handle_activate: (object: GdbusModemCdma, invocation: Gio.DBusMethodInvocation, arg_carrier_code: string) => boolean
    handle_activate_manual: (object: GdbusModemCdma, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean
    get_activation_state: (object: GdbusModemCdma) => number
    get_cdma1x_registration_state: (object: GdbusModemCdma) => number
    get_esn: (object: GdbusModemCdma) => string | null
    get_evdo_registration_state: (object: GdbusModemCdma) => number
    get_meid: (object: GdbusModemCdma) => string | null
    get_nid: (object: GdbusModemCdma) => number
    get_sid: (object: GdbusModemCdma) => number
    activation_state_changed: (object: GdbusModemCdma, arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant) => void
    static name: string
}
export abstract class GdbusModemCdmaProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemCdmaProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemCdmaProxyPrivate {
    static name: string
}
export abstract class GdbusModemCdmaSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemCdmaSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemCdmaSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemFirmwareIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemFirmwareIface */
    parent_iface: GObject.TypeInterface
    handle_list: (object: GdbusModemFirmware, invocation: Gio.DBusMethodInvocation) => boolean
    handle_select: (object: GdbusModemFirmware, invocation: Gio.DBusMethodInvocation, arg_uniqueid: string) => boolean
    get_update_settings: (object: GdbusModemFirmware) => GLib.Variant | null
    static name: string
}
export abstract class GdbusModemFirmwareProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemFirmwareProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemFirmwareProxyPrivate {
    static name: string
}
export abstract class GdbusModemFirmwareSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemFirmwareSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemFirmwareSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemIface */
    parent_iface: GObject.TypeInterface
    handle_command: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number) => boolean
    handle_create_bearer: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean
    handle_delete_bearer: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean
    handle_enable: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean
    handle_factory_reset: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_code: string) => boolean
    handle_list_bearers: (object: GdbusModem, invocation: Gio.DBusMethodInvocation) => boolean
    handle_reset: (object: GdbusModem, invocation: Gio.DBusMethodInvocation) => boolean
    handle_set_current_bands: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant) => boolean
    handle_set_current_capabilities: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_capabilities: number) => boolean
    handle_set_current_modes: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant) => boolean
    handle_set_power_state: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_state: number) => boolean
    handle_set_primary_sim_slot: (object: GdbusModem, invocation: Gio.DBusMethodInvocation, arg_sim_slot: number) => boolean
    get_access_technologies: (object: GdbusModem) => number
    get_bearers: (object: GdbusModem) => string[] | null
    get_carrier_configuration: (object: GdbusModem) => string | null
    get_carrier_configuration_revision: (object: GdbusModem) => string | null
    get_current_bands: (object: GdbusModem) => GLib.Variant | null
    get_current_capabilities: (object: GdbusModem) => number
    get_current_modes: (object: GdbusModem) => GLib.Variant | null
    get_device: (object: GdbusModem) => string | null
    get_device_identifier: (object: GdbusModem) => string | null
    get_drivers: (object: GdbusModem) => string[] | null
    get_equipment_identifier: (object: GdbusModem) => string | null
    get_hardware_revision: (object: GdbusModem) => string | null
    get_manufacturer: (object: GdbusModem) => string | null
    get_max_active_bearers: (object: GdbusModem) => number
    get_max_bearers: (object: GdbusModem) => number
    get_model: (object: GdbusModem) => string | null
    get_own_numbers: (object: GdbusModem) => string[] | null
    get_plugin: (object: GdbusModem) => string | null
    get_ports: (object: GdbusModem) => GLib.Variant | null
    get_power_state: (object: GdbusModem) => number
    get_primary_port: (object: GdbusModem) => string | null
    get_primary_sim_slot: (object: GdbusModem) => number
    get_revision: (object: GdbusModem) => string | null
    get_signal_quality: (object: GdbusModem) => GLib.Variant | null
    get_sim: (object: GdbusModem) => string | null
    get_sim_slots: (object: GdbusModem) => string[] | null
    get_state: (object: GdbusModem) => number
    get_state_failed_reason: (object: GdbusModem) => number
    get_supported_bands: (object: GdbusModem) => GLib.Variant | null
    get_supported_capabilities: (object: GdbusModem) => GLib.Variant | null
    get_supported_ip_families: (object: GdbusModem) => number
    get_supported_modes: (object: GdbusModem) => GLib.Variant | null
    get_unlock_required: (object: GdbusModem) => number
    get_unlock_retries: (object: GdbusModem) => GLib.Variant | null
    state_changed: (object: GdbusModem, arg_old: number, arg_new: number, arg_reason: number) => void
    static name: string
}
export abstract class GdbusModemLocationIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemLocationIface */
    parent_iface: GObject.TypeInterface
    handle_get_location: (object: GdbusModemLocation, invocation: Gio.DBusMethodInvocation) => boolean
    handle_inject_assistance_data: (object: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant) => boolean
    handle_set_gps_refresh_rate: (object: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean
    handle_set_supl_server: (object: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_supl: string) => boolean
    handle_setup: (object: GdbusModemLocation, invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean) => boolean
    get_assistance_data_servers: (object: GdbusModemLocation) => string[] | null
    get_capabilities: (object: GdbusModemLocation) => number
    get_enabled: (object: GdbusModemLocation) => number
    get_gps_refresh_rate: (object: GdbusModemLocation) => number
    get_location: (object: GdbusModemLocation) => GLib.Variant | null
    get_signals_location: (object: GdbusModemLocation) => boolean
    get_supl_server: (object: GdbusModemLocation) => string | null
    get_supported_assistance_data: (object: GdbusModemLocation) => number
    static name: string
}
export abstract class GdbusModemLocationProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemLocationProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemLocationProxyPrivate {
    static name: string
}
export abstract class GdbusModemLocationSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemLocationSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemLocationSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemMessagingIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemMessagingIface */
    parent_iface: GObject.TypeInterface
    handle_create: (object: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean
    handle_delete: (object: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean
    handle_list: (object: GdbusModemMessaging, invocation: Gio.DBusMethodInvocation) => boolean
    get_default_storage: (object: GdbusModemMessaging) => number
    get_messages: (object: GdbusModemMessaging) => string[] | null
    get_supported_storages: (object: GdbusModemMessaging) => GLib.Variant | null
    added: (object: GdbusModemMessaging, arg_path: string, arg_received: boolean) => void
    deleted: (object: GdbusModemMessaging, arg_path: string) => void
    static name: string
}
export abstract class GdbusModemMessagingProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemMessagingProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemMessagingProxyPrivate {
    static name: string
}
export abstract class GdbusModemMessagingSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemMessagingSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemMessagingSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemOmaIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemOmaIface */
    parent_iface: GObject.TypeInterface
    handle_accept_network_initiated_session: (object: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean) => boolean
    handle_cancel_session: (object: GdbusModemOma, invocation: Gio.DBusMethodInvocation) => boolean
    handle_setup: (object: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_features: number) => boolean
    handle_start_client_initiated_session: (object: GdbusModemOma, invocation: Gio.DBusMethodInvocation, arg_session_type: number) => boolean
    get_features: (object: GdbusModemOma) => number
    get_pending_network_initiated_sessions: (object: GdbusModemOma) => GLib.Variant | null
    get_session_state: (object: GdbusModemOma) => number
    get_session_type: (object: GdbusModemOma) => number
    session_state_changed: (object: GdbusModemOma, arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number) => void
    static name: string
}
export abstract class GdbusModemOmaProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemOmaProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemOmaProxyPrivate {
    static name: string
}
export abstract class GdbusModemOmaSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemOmaSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemOmaSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemProxyPrivate {
    static name: string
}
export abstract class GdbusModemSignalIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemSignalIface */
    parent_iface: GObject.TypeInterface
    handle_setup: (object: GdbusModemSignal, invocation: Gio.DBusMethodInvocation, arg_rate: number) => boolean
    get_cdma: (object: GdbusModemSignal) => GLib.Variant | null
    get_evdo: (object: GdbusModemSignal) => GLib.Variant | null
    get_gsm: (object: GdbusModemSignal) => GLib.Variant | null
    get_lte: (object: GdbusModemSignal) => GLib.Variant | null
    get_nr5g: (object: GdbusModemSignal) => GLib.Variant | null
    get_rate: (object: GdbusModemSignal) => number
    get_umts: (object: GdbusModemSignal) => GLib.Variant | null
    static name: string
}
export abstract class GdbusModemSignalProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemSignalProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemSignalProxyPrivate {
    static name: string
}
export abstract class GdbusModemSignalSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemSignalSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemSignalSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemSimpleIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemSimpleIface */
    parent_iface: GObject.TypeInterface
    handle_connect: (object: GdbusModemSimple, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean
    handle_disconnect: (object: GdbusModemSimple, invocation: Gio.DBusMethodInvocation, arg_bearer: string) => boolean
    handle_get_status: (object: GdbusModemSimple, invocation: Gio.DBusMethodInvocation) => boolean
    static name: string
}
export abstract class GdbusModemSimpleProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemSimpleProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemSimpleProxyPrivate {
    static name: string
}
export abstract class GdbusModemSimpleSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemSimpleSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemSimpleSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemTimeIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemTimeIface */
    parent_iface: GObject.TypeInterface
    handle_get_network_time: (object: GdbusModemTime, invocation: Gio.DBusMethodInvocation) => boolean
    get_network_timezone: (object: GdbusModemTime) => GLib.Variant | null
    network_time_changed: (object: GdbusModemTime, arg_time: string) => void
    static name: string
}
export abstract class GdbusModemTimeProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemTimeProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemTimeProxyPrivate {
    static name: string
}
export abstract class GdbusModemTimeSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemTimeSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemTimeSkeletonPrivate {
    static name: string
}
export abstract class GdbusModemVoiceIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemVoiceIface */
    parent_iface: GObject.TypeInterface
    handle_call_waiting_query: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean
    handle_call_waiting_setup: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean
    handle_create_call: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean
    handle_delete_call: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation, arg_path: string) => boolean
    handle_hangup_all: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean
    handle_hangup_and_accept: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean
    handle_hold_and_accept: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean
    handle_list_calls: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean
    handle_transfer: (object: GdbusModemVoice, invocation: Gio.DBusMethodInvocation) => boolean
    get_calls: (object: GdbusModemVoice) => string[] | null
    get_emergency_only: (object: GdbusModemVoice) => boolean
    call_added: (object: GdbusModemVoice, arg_path: string) => void
    call_deleted: (object: GdbusModemVoice, arg_path: string) => void
    static name: string
}
export abstract class GdbusModemVoiceProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemVoiceProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusModemVoiceProxyPrivate {
    static name: string
}
export abstract class GdbusModemVoiceSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusModemVoiceSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusModemVoiceSkeletonPrivate {
    static name: string
}
export abstract class GdbusObjectIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusObjectIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class GdbusObjectManagerClientClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusObjectManagerClientClass */
    parent_class: Gio.DBusObjectManagerClientClass
    static name: string
}
export class GdbusObjectManagerClientPrivate {
    static name: string
}
export abstract class GdbusObjectProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusObjectProxyClass */
    parent_class: Gio.DBusObjectProxyClass
    static name: string
}
export class GdbusObjectProxyPrivate {
    static name: string
}
export abstract class GdbusObjectSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusObjectSkeletonClass */
    parent_class: Gio.DBusObjectSkeletonClass
    static name: string
}
export class GdbusObjectSkeletonPrivate {
    static name: string
}
export abstract class GdbusOrgFreedesktopModemManager1Iface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1Iface */
    parent_iface: GObject.TypeInterface
    handle_inhibit_device: (object: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean) => boolean
    handle_report_kernel_event: (object: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant) => boolean
    handle_scan_devices: (object: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation) => boolean
    handle_set_logging: (object: GdbusOrgFreedesktopModemManager1, invocation: Gio.DBusMethodInvocation, arg_level: string) => boolean
    get_version: (object: GdbusOrgFreedesktopModemManager1) => string | null
    static name: string
}
export abstract class GdbusOrgFreedesktopModemManager1ProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1ProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusOrgFreedesktopModemManager1ProxyPrivate {
    static name: string
}
export abstract class GdbusOrgFreedesktopModemManager1SkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusOrgFreedesktopModemManager1SkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusOrgFreedesktopModemManager1SkeletonPrivate {
    static name: string
}
export abstract class GdbusSimIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusSimIface */
    parent_iface: GObject.TypeInterface
    handle_change_pin: (object: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string) => boolean
    handle_enable_pin: (object: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean) => boolean
    handle_send_pin: (object: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_pin: string) => boolean
    handle_send_puk: (object: GdbusSim, invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string) => boolean
    get_active: (object: GdbusSim) => boolean
    get_eid: (object: GdbusSim) => string | null
    get_emergency_numbers: (object: GdbusSim) => string[] | null
    get_imsi: (object: GdbusSim) => string | null
    get_operator_identifier: (object: GdbusSim) => string | null
    get_operator_name: (object: GdbusSim) => string | null
    get_sim_identifier: (object: GdbusSim) => string | null
    static name: string
}
export abstract class GdbusSimProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusSimProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusSimProxyPrivate {
    static name: string
}
export abstract class GdbusSimSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusSimSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusSimSkeletonPrivate {
    static name: string
}
export abstract class GdbusSmsIface {
    /* Fields of ModemManager-1.0.ModemManager.GdbusSmsIface */
    parent_iface: GObject.TypeInterface
    handle_send: (object: GdbusSms, invocation: Gio.DBusMethodInvocation) => boolean
    handle_store: (object: GdbusSms, invocation: Gio.DBusMethodInvocation, arg_storage: number) => boolean
    get_class: (object: GdbusSms) => number
    get_data: (object: GdbusSms) => GLib.Variant | null
    get_delivery_report_request: (object: GdbusSms) => boolean
    get_delivery_state: (object: GdbusSms) => number
    get_discharge_timestamp: (object: GdbusSms) => string | null
    get_message_reference: (object: GdbusSms) => number
    get_number: (object: GdbusSms) => string | null
    get_pdu_type: (object: GdbusSms) => number
    get_service_category: (object: GdbusSms) => number
    get_smsc: (object: GdbusSms) => string | null
    get_state: (object: GdbusSms) => number
    get_storage: (object: GdbusSms) => number
    get_teleservice_id: (object: GdbusSms) => number
    get_text: (object: GdbusSms) => string | null
    get_timestamp: (object: GdbusSms) => string | null
    get_validity: (object: GdbusSms) => GLib.Variant | null
    static name: string
}
export abstract class GdbusSmsProxyClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusSmsProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GdbusSmsProxyPrivate {
    static name: string
}
export abstract class GdbusSmsSkeletonClass {
    /* Fields of ModemManager-1.0.ModemManager.GdbusSmsSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GdbusSmsSkeletonPrivate {
    static name: string
}
export abstract class KernelEventPropertiesClass {
    static name: string
}
export class KernelEventPropertiesPrivate {
    static name: string
}
export abstract class Location3gppClass {
    static name: string
}
export class Location3gppPrivate {
    static name: string
}
export abstract class LocationCdmaBsClass {
    static name: string
}
export class LocationCdmaBsPrivate {
    static name: string
}
export abstract class LocationGpsNmeaClass {
    static name: string
}
export class LocationGpsNmeaPrivate {
    static name: string
}
export abstract class LocationGpsRawClass {
    static name: string
}
export class LocationGpsRawPrivate {
    static name: string
}
export abstract class ManagerClass {
    static name: string
}
export class ManagerPrivate {
    static name: string
}
export abstract class Modem3gppClass {
    static name: string
}
export class Modem3gppNetwork {
    /* Methods of ModemManager-1.0.ModemManager.Modem3gppNetwork */
    free(): void
    get_access_technology(): ModemAccessTechnology
    get_availability(): Modem3gppNetworkAvailability
    get_operator_code(): string
    get_operator_long(): string
    get_operator_short(): string
    static name: string
}
export class Modem3gppPrivate {
    static name: string
}
export abstract class Modem3gppUssdClass {
    static name: string
}
export abstract class ModemCdmaClass {
    static name: string
}
export abstract class ModemClass {
    static name: string
}
export abstract class ModemFirmwareClass {
    static name: string
}
export class ModemFirmwarePrivate {
    static name: string
}
export abstract class ModemLocationClass {
    static name: string
}
export abstract class ModemMessagingClass {
    static name: string
}
export class ModemMessagingPrivate {
    static name: string
}
export class ModemModeCombination {
    /* Fields of ModemManager-1.0.ModemManager.ModemModeCombination */
    allowed: ModemMode
    preferred: ModemMode
    static name: string
}
export abstract class ModemOmaClass {
    static name: string
}
export class ModemOmaPrivate {
    static name: string
}
export class ModemPortInfo {
    /* Fields of ModemManager-1.0.ModemManager.ModemPortInfo */
    name: string
    type: ModemPortType
    /* Methods of ModemManager-1.0.ModemManager.ModemPortInfo */
    array_free(array_size: number): void
    static name: string
}
export class ModemPrivate {
    static name: string
}
export abstract class ModemSignalClass {
    static name: string
}
export class ModemSignalPrivate {
    static name: string
}
export abstract class ModemSimpleClass {
    static name: string
}
export abstract class ModemTimeClass {
    static name: string
}
export class ModemTimePrivate {
    static name: string
}
export abstract class ModemVoiceClass {
    static name: string
}
export class ModemVoicePrivate {
    static name: string
}
export abstract class NetworkTimezoneClass {
    static name: string
}
export class NetworkTimezonePrivate {
    static name: string
}
export abstract class ObjectClass {
    static name: string
}
export class OmaPendingNetworkInitiatedSession {
    /* Fields of ModemManager-1.0.ModemManager.OmaPendingNetworkInitiatedSession */
    session_type: OmaSessionType
    session_id: number
    static name: string
}
export abstract class PcoClass {
    static name: string
}
export class PcoPrivate {
    static name: string
}
export abstract class SignalClass {
    static name: string
}
export class SignalPrivate {
    static name: string
}
export abstract class SimClass {
    static name: string
}
export abstract class SimpleConnectPropertiesClass {
    static name: string
}
export class SimpleConnectPropertiesPrivate {
    static name: string
}
export abstract class SimpleStatusClass {
    static name: string
}
export class SimpleStatusPrivate {
    static name: string
}
export abstract class SmsClass {
    static name: string
}
export abstract class SmsPropertiesClass {
    static name: string
}
export class SmsPropertiesPrivate {
    static name: string
}
export abstract class UnlockRetriesClass {
    static name: string
}
export class UnlockRetriesPrivate {
    static name: string
}