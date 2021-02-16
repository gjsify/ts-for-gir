/**
 * Mbim-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Mbim {

export enum ActivationCommand {
    DEACTIVATE,
    ACTIVATE,
}
export enum ActivationState {
    UNKNOWN,
    ACTIVATED,
    ACTIVATING,
    DEACTIVATED,
    DEACTIVATING,
}
export enum AtdsProviderPlmnMode {
    GSM,
    UTRAN,
    LTE,
}
export enum AtdsRatMode {
    AUTOMATIC,
    /* 2G_ONLY (invalid, starts with a number) */
    /* 3G_ONLY (invalid, starts with a number) */
    /* 4G_ONLY (invalid, starts with a number) */
}
export enum AuthProtocol {
    NONE,
    PAP,
    CHAP,
    MSCHAPV2,
}
export enum CidAtds {
    UNKNOWN,
    SIGNAL,
    LOCATION,
    OPERATORS,
    RAT,
    REGISTER_STATE,
}
export enum CidAuth {
    UNKNOWN,
    AKA,
    AKAP,
    SIM,
}
export enum CidBasicConnect {
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
export enum CidDss {
    UNKNOWN,
    CONNECT,
}
export enum CidIntelFirmwareUpdate {
    UNKNOWN,
    MODEM_REBOOT,
}
export enum CidMsBasicConnectExtensions {
    UNKNOWN,
    PROVISIONED_CONTEXTS,
    NETWORK_BLACKLIST,
    LTE_ATTACH_CONFIGURATION,
    LTE_ATTACH_STATUS,
    SYS_CAPS,
    DEVICE_CAPS,
    DEVICE_SLOT_MAPPINGS,
    SLOT_INFO_STATUS,
    PCO,
    DEVICE_RESET,
}
export enum CidMsFirmwareId {
    UNKNOWN,
    GET,
}
export enum CidMsHostShutdown {
    UNKNOWN,
    NOTIFY,
}
export enum CidMsSar {
    UNKNOWN,
    CONFIG,
    TRANSMISSION_STATUS,
}
export enum CidPhonebook {
    UNKNOWN,
    CONFIGURATION,
    READ,
    DELETE,
    WRITE,
}
export enum CidProxyControl {
    UNKNOWN,
    CONFIGURATION,
}
export enum CidQmi {
    UNKNOWN,
    MSG,
}
export enum CidSms {
    UNKNOWN,
    CONFIGURATION,
    READ,
    SEND,
    DELETE,
    MESSAGE_STORE_STATUS,
}
export enum CidStk {
    UNKNOWN,
    PAC,
    TERMINAL_RESPONSE,
    ENVELOPE,
}
export enum CidUssd {
    USSD_UNKNOWN,
    USSD,
}
export enum Compression {
    NONE,
    ENABLE,
}
export enum ContextIpType {
    DEFAULT,
    IPV4,
    IPV6,
    IPV4V6,
    IPV4_AND_IPV6,
}
export enum ContextSource {
    ADMIN,
    USER,
    OPERATOR,
    MODEM,
    DEVICE,
}
export enum ContextType {
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
}
export enum CoreError {
    FAILED,
    WRONGSTATE,
    TIMEOUT,
    INVALIDARGS,
    INVALIDMESSAGE,
    UNSUPPORTED,
    ABORTED,
    UNKNOWNSTATE,
}
export enum DeviceType {
    UNKNOWN,
    EMBEDDED,
    REMOVABLE,
    REMOTE,
}
export enum DssLinkState {
    DEACTIVATE,
    ACTIVATE,
}
export enum EmergencyModeState {
    OFF,
    ON,
}
export enum LteAttachContextOperation {
    DEFAULT,
    RESTORE_FACTORY,
}
export enum LteAttachContextRoamingControl {
    HOME,
    PARTNER,
    NON_PARTNER,
}
export enum LteAttachState {
    DETACHED,
    ATTACHED,
}
export enum MessageCommandType {
    UNKNOWN,
    QUERY,
    SET,
}
export enum MessageType {
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
export enum NetworkIdleHintState {
    DISABLED,
    ENABLED,
}
export enum NwError {
    UNKNOWN,
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
export enum PacketServiceAction {
    ATTACH,
    DETACH,
}
export enum PacketServiceState {
    UNKNOWN,
    ATTACHING,
    ATTACHED,
    DETACHING,
    DETACHED,
}
export enum PcoType {
    COMPLETE,
    PARTIAL,
}
export enum PhonebookFlag {
    ALL,
    INDEX,
}
export enum PhonebookState {
    NOT_INITIALIZED,
    INITIALIZED,
}
export enum PhonebookWriteFlag {
    UNUSED,
    INDEX,
}
export enum PinFormat {
    UNKNOWN,
    NUMERIC,
    ALPHANUMERIC,
}
export enum PinMode {
    NOT_SUPPORTED,
    ENABLED,
    DISABLED,
}
export enum PinOperation {
    ENTER,
    ENABLE,
    DISABLE,
    CHANGE,
}
export enum PinState {
    UNLOCKED,
    LOCKED,
}
export enum PinType {
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
export enum ProtocolError {
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
export enum RadioSwitchState {
    OFF,
    ON,
}
export enum RegisterAction {
    AUTOMATIC,
    MANUAL,
}
export enum RegisterMode {
    UNKNOWN,
    AUTOMATIC,
    MANUAL,
}
export enum RegisterState {
    UNKNOWN,
    DEREGISTERED,
    SEARCHING,
    HOME,
    ROAMING,
    PARTNER,
    DENIED,
}
export enum SarBackoffState {
    DISABLED,
    ENABLED,
}
export enum SarControlMode {
    DEVICE,
    OS,
}
export enum SarWifiHardwareState {
    INTEGRATED,
    NOT_INTEGRATED,
}
export enum Service {
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
}
export enum SmsCdmaEncoding {
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
export enum SmsCdmaLang {
    UNKNOWN,
    ENGLISH,
    FRENCH,
    SPANISH,
    JAPANESE,
    KOREAN,
    CHINESE,
    HEBREW,
}
export enum SmsFlag {
    ALL,
    INDEX,
    NEW,
    OLD,
    SENT,
    DRAFT,
}
export enum SmsFormat {
    PDU,
    CDMA,
}
export enum SmsStatus {
    NEW,
    OLD,
    DRAFT,
    SENT,
}
export enum SmsStatusFlag {
    NONE,
    MESSAGE_STORE_FULL,
    NEW_MESSAGE,
}
export enum SmsStorageState {
    NOT_INITIALIZED,
    INITIALIZED,
}
export enum StatusError {
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
export enum StkPacProfile {
    NOT_HANDLED_BY_FUNCTION_HANDLED_BY_HOST,
    NOT_HANDLED_BY_FUNCTION_MAY_BE_HANDLED_BY_HOST,
    HANDLED_BY_FUNCTION_ONLY_TRANSPARENT_TO_HOST,
    HANDLED_BY_FUNCTION_NOTIFICATION_TO_HOST_POSSIBLE,
    HANDLED_BY_FUNCTION_NOTIFICATIONS_TO_HOST_ENABLED,
    HANDLED_BY_FUNCTION_CAN_BE_OVERRIDEN_BY_HOST,
    HANDLED_BY_HOST_FUNCTION_NOT_ABLE_TO_HANDLE,
    HANDLED_BY_HOST_FUNCTION_ABLE_TO_HANDLE,
}
export enum StkPacType {
    PROACTIVE_COMMAND,
    NOTIFICATION,
}
export enum SubscriberReadyState {
    NOT_INITIALIZED,
    INITIALIZED,
    SIM_NOT_INSERTED,
    BAD_SIM,
    FAILURE,
    NOT_ACTIVATED,
    DEVICE_LOCKED,
}
export enum TransmissionNotificationStatus {
    DISABLED,
    ENABLED,
}
export enum TransmissionState {
    INACTIVE,
    ACTIVE,
}
export enum UssdAction {
    INITIATE,
    CONTINUE,
    CANCEL,
}
export enum UssdResponse {
    NO_ACTION_REQUIRED,
    ACTION_REQUIRED,
    TERMINATED_BY_NETWORK,
    OTHER_LOCAL_CLIENT,
    OPERATION_NOT_SUPPORTED,
    NETWORK_TIMEOUT,
}
export enum UssdSessionState {
    NEW_SESSION,
    EXISTING_SESSION,
}
export enum VisibleProvidersAction {
    FULL_SCAN,
    RESTRICTED_SCAN,
}
export enum VoiceCallState {
    NONE,
    IN_PROGRESS,
    HANG_UP,
}
export enum VoiceClass {
    UNKNOWN,
    NO_VOICE,
    SEPARATED_VOICE_DATA,
    SIMULTANEOUS_VOICE_DATA,
}
export enum CellularClass {
    GSM,
    CDMA,
}
export enum CtrlCaps {
    REG_MANUAL,
    HW_RADIO_SWITCH,
    CDMA_MOBILE_IP,
    CDMA_SIMPLE_IP,
    MULTI_CARRIER,
}
export enum DataClass {
    GPRS,
    EDGE,
    UMTS,
    HSDPA,
    HSUPA,
    LTE,
    /* 1XRTT (invalid, starts with a number) */
    /* 1XEVDO (invalid, starts with a number) */
    /* 1XEVDO_REVA (invalid, starts with a number) */
    /* 1XEVDV (invalid, starts with a number) */
    /* 3XRTT (invalid, starts with a number) */
    /* 1XEVDO_REVB (invalid, starts with a number) */
    UMB,
    CUSTOM,
}
export enum DeviceOpenFlags {
    NONE,
    PROXY,
}
export enum IPConfigurationAvailableFlag {
    NONE,
    ADDRESS,
    GATEWAY,
    DNS,
    MTU,
}
export enum ProviderState {
    UNKNOWN,
    HOME,
    FORBIDDEN,
    PREFERRED,
    VISIBLE,
    REGISTERED,
    PREFERRED_MULTICARRIER,
}
export enum ReadyInfoFlag {
    NONE,
    PROTECT_UNIQUE_ID,
}
export enum RegistrationFlag {
    NONE,
    MANUAL_SELECTION_NOT_AVAILABLE,
    PACKET_SERVICE_AUTOMATIC_ATTACH,
}
export enum SimClass {
    LOGICAL,
    REMOVABLE,
}
export enum SmsCaps {
    PDU_RECEIVE,
    PDU_SEND,
    TEXT_RECEIVE,
    TEXT_SEND,
}
export const DBUS_ERROR_PREFIX: string
export const DEVICE_FILE: string
export const DEVICE_IN_SESSION: string
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
export function activationCommandGetString(val: ActivationCommand): string
export function activationStateGetString(val: ActivationState): string
export function atdsProviderArrayFree(array: AtdsProviderArray): void
export function atdsProviderPlmnModeGetString(val: AtdsProviderPlmnMode): string
export function atdsRatModeGetString(val: AtdsRatMode): string
export function authProtocolGetString(val: AuthProtocol): string
export function cellularClassBuildStringFromMask(mask: CellularClass): string
export function cidAtdsGetString(val: CidAtds): string
export function cidAuthGetString(val: CidAuth): string
export function cidBasicConnectGetString(val: CidBasicConnect): string
export function cidCanNotify(service: Service, cid: number): boolean
export function cidCanQuery(service: Service, cid: number): boolean
export function cidCanSet(service: Service, cid: number): boolean
export function cidDssGetString(val: CidDss): string
export function cidGetPrintable(service: Service, cid: number): string
export function cidIntelFirmwareUpdateGetString(val: CidIntelFirmwareUpdate): string
export function cidMsBasicConnectExtensionsGetString(val: CidMsBasicConnectExtensions): string
export function cidMsFirmwareIdGetString(val: CidMsFirmwareId): string
export function cidMsHostShutdownGetString(val: CidMsHostShutdown): string
export function cidMsSarGetString(val: CidMsSar): string
export function cidPhonebookGetString(val: CidPhonebook): string
export function cidProxyControlGetString(val: CidProxyControl): string
export function cidQmiGetString(val: CidQmi): string
export function cidSmsGetString(val: CidSms): string
export function cidStkGetString(val: CidStk): string
export function cidUssdGetString(val: CidUssd): string
export function compressionGetString(val: Compression): string
export function contextIpTypeGetString(val: ContextIpType): string
export function contextSourceGetString(val: ContextSource): string
export function contextTypeGetString(val: ContextType): string
export function coreErrorGetString(val: CoreError): string
export function coreErrorQuark(): GLib.Quark
export function ctrlCapsBuildStringFromMask(mask: CtrlCaps): string
export function dataClassBuildStringFromMask(mask: DataClass): string
export function deviceServiceElementArrayFree(array: DeviceServiceElementArray): void
export function deviceTypeGetString(val: DeviceType): string
export function dssLinkStateGetString(val: DssLinkState): string
export function emergencyModeStateGetString(val: EmergencyModeState): string
export function eventEntryArrayFree(array: EventEntryArray): void
export function ipConfigurationAvailableFlagBuildStringFromMask(mask: IPConfigurationAvailableFlag): string
export function ipv4ElementArrayFree(array: IPv4ElementArray): void
export function ipv6ElementArrayFree(array: IPv6ElementArray): void
export function lteAttachConfigurationArrayFree(array: LteAttachConfigurationArray): void
export function lteAttachContextOperationGetString(val: LteAttachContextOperation): string
export function lteAttachContextRoamingControlGetString(val: LteAttachContextRoamingControl): string
export function lteAttachStateGetString(val: LteAttachState): string
export function messageCommandTypeGetString(val: MessageCommandType): string
export function messageTypeGetString(val: MessageType): string
export function networkIdleHintStateGetString(val: NetworkIdleHintState): string
export function nwErrorGetString(val: NwError): string
export function packetFilterArrayFree(array: PacketFilterArray): void
export function packetServiceActionGetString(val: PacketServiceAction): string
export function packetServiceStateGetString(val: PacketServiceState): string
export function pcoTypeGetString(val: PcoType): string
export function phonebookEntryArrayFree(array: PhonebookEntryArray): void
export function phonebookFlagGetString(val: PhonebookFlag): string
export function phonebookStateGetString(val: PhonebookState): string
export function phonebookWriteFlagGetString(val: PhonebookWriteFlag): string
export function pinFormatGetString(val: PinFormat): string
export function pinModeGetString(val: PinMode): string
export function pinOperationGetString(val: PinOperation): string
export function pinStateGetString(val: PinState): string
export function pinTypeGetString(val: PinType): string
export function protocolErrorGetString(val: ProtocolError): string
export function protocolErrorQuark(): GLib.Quark
export function providerArrayFree(array: ProviderArray): void
export function providerStateBuildStringFromMask(mask: ProviderState): string
export function provisionedContextElementArrayFree(array: ProvisionedContextElementArray): void
export function radioSwitchStateGetString(val: RadioSwitchState): string
export function readyInfoFlagBuildStringFromMask(mask: ReadyInfoFlag): string
export function registerActionGetString(val: RegisterAction): string
export function registerCustomService(uuid: Uuid, nickname: string): number
export function registerModeGetString(val: RegisterMode): string
export function registerStateGetString(val: RegisterState): string
export function registrationFlagBuildStringFromMask(mask: RegistrationFlag): string
export function sarBackoffStateGetString(val: SarBackoffState): string
export function sarConfigStateArrayFree(array: SarConfigStateArray): void
export function sarControlModeGetString(val: SarControlMode): string
export function sarWifiHardwareStateGetString(val: SarWifiHardwareState): string
export function serviceGetString(val: Service): string
export function serviceIdIsCustom(id: number): boolean
export function serviceLookupName(service: number): string
export function simClassBuildStringFromMask(mask: SimClass): string
export function smsCapsBuildStringFromMask(mask: SmsCaps): string
export function smsCdmaEncodingGetString(val: SmsCdmaEncoding): string
export function smsCdmaLangGetString(val: SmsCdmaLang): string
export function smsCdmaReadRecordArrayFree(array: SmsCdmaReadRecordArray): void
export function smsFlagGetString(val: SmsFlag): string
export function smsFormatGetString(val: SmsFormat): string
export function smsPduReadRecordArrayFree(array: SmsPduReadRecordArray): void
export function smsStatusFlagGetString(val: SmsStatusFlag): string
export function smsStatusGetString(val: SmsStatus): string
export function smsStorageStateGetString(val: SmsStorageState): string
export function statusErrorGetString(val: StatusError): string
export function statusErrorQuark(): GLib.Quark
export function stkPacProfileGetString(val: StkPacProfile): string
export function stkPacTypeGetString(val: StkPacType): string
export function subscriberReadyStateGetString(val: SubscriberReadyState): string
export function transmissionNotificationStatusGetString(val: TransmissionNotificationStatus): string
export function transmissionStateGetString(val: TransmissionState): string
export function unregisterCustomService(id: number): boolean
export function ussdActionGetString(val: UssdAction): string
export function ussdResponseGetString(val: UssdResponse): string
export function ussdSessionStateGetString(val: UssdSessionState): string
export function utilsGetTracesEnabled(): boolean
export function utilsSetTracesEnabled(enabled: boolean): void
export function uuidFromContextType(contextType: ContextType): Uuid
export function uuidFromPrintable(str: string, uuid: Uuid): boolean
export function uuidFromService(service: Service): Uuid
export function visibleProvidersActionGetString(val: VisibleProvidersAction): string
export function voiceCallStateGetString(val: VoiceCallState): string
export function voiceClassGetString(val: VoiceClass): string
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    deviceFile?: Gio.File
    deviceInSession?: boolean
    deviceTransactionId?: number
}
export class Device {
    /* Properties of Mbim.Device */
    deviceInSession: boolean
    deviceTransactionId: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Mbim.Device */
    close(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): boolean
    closeForce(): boolean
    command(message: Message, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    commandFinish(res: Gio.AsyncResult): Message
    getNextTransactionId(): number
    getPath(): string
    getPathDisplay(): string
    getTransactionId(): number
    isOpen(): boolean
    open(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(res: Gio.AsyncResult): boolean
    openFull(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFullFinish(res: Gio.AsyncResult): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Mbim.Device */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Mbim.Device */
    connect(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    connect_after(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    emit(sigName: "device-error", object: GLib.Error): void
    on(sigName: "device-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    connect_after(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    emit(sigName: "device-indicate-status", object: Message): void
    on(sigName: "device-indicate-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-indicate-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-indicate-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Device) => void)): number
    emit(sigName: "device-removed"): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class Proxy {
    /* Properties of Mbim.Proxy */
    readonly mbimProxyNClients: number
    readonly mbimProxyNDevices: number
    /* Fields of Mbim.Proxy */
    parent: GObject.Object
    priv: ProxyPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class AtdsProvider {
    /* Fields of Mbim.AtdsProvider */
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
export abstract class DeviceClass {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export class DeviceServiceElement {
    /* Fields of Mbim.DeviceServiceElement */
    deviceServiceId: Uuid
    dssPayload: number
    maxDssInstances: number
    cidsCount: number
    cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: DeviceServiceElementArray): void
}
export class EventEntry {
    /* Fields of Mbim.EventEntry */
    deviceServiceId: Uuid
    cidsCount: number
    cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: EventEntryArray): void
}
export class IPv4 {
    /* Fields of Mbim.IPv4 */
    addr: any
    static name: string
}
export class IPv4Element {
    /* Fields of Mbim.IPv4Element */
    onLinkPrefixLength: number
    ipv4Address: IPv4
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: IPv4ElementArray): void
}
export class IPv6 {
    /* Fields of Mbim.IPv6 */
    addr: any
    static name: string
}
export class IPv6Element {
    /* Fields of Mbim.IPv6Element */
    onLinkPrefixLength: number
    ipv6Address: IPv6
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: IPv6ElementArray): void
}
export class LteAttachConfiguration {
    /* Fields of Mbim.LteAttachConfiguration */
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
export class LteAttachStatus {
    /* Fields of Mbim.LteAttachStatus */
    lteAttachState: number
    ipType: number
    accessString: string
    userName: string
    password: string
    compression: number
    authProtocol: number
    /* Methods of Mbim.LteAttachStatus */
    free(): void
    static name: string
}
export class Message {
    /* Methods of Mbim.Message */
    atdsLocationResponseParse(): [ /* returnType */ boolean, /* outLac */ number | null, /* outTac */ number | null, /* outCellId */ number | null ]
    atdsOperatorsResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ AtdsProvider[] | null ]
    atdsRatResponseParse(): [ /* returnType */ boolean, /* outMode */ AtdsRatMode | null ]
    atdsRegisterStateResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outRegisterState */ RegisterState | null, /* outRegisterMode */ RegisterMode | null, /* outAvailableDataClasses */ DataClass | null, /* outCurrentCellularClass */ CellularClass | null, /* outProviderId */ string | null, /* outProviderName */ string | null, /* outRoamingText */ string | null, /* outRegistrationFlag */ RegistrationFlag | null ]
    atdsSignalResponseParse(): [ /* returnType */ boolean, /* outRssi */ number | null, /* outErrorRate */ number | null, /* outRscp */ number | null, /* outEcno */ number | null, /* outRsrq */ number | null, /* outRsrp */ number | null, /* outRssnr */ number | null ]
    authAkaResponseParse(): [ /* returnType */ boolean, /* outRes */ any | null, /* outResLen */ number | null, /* outIntegratingKey */ any | null, /* outCipheringKey */ any | null, /* outAuts */ any | null ]
    authAkapResponseParse(): [ /* returnType */ boolean, /* outRes */ any | null, /* outResLen */ number | null, /* outIntegratingKey */ any | null, /* outCipheringKey */ any | null, /* outAuts */ any | null ]
    authSimResponseParse(): [ /* returnType */ boolean, /* outSres1 */ number | null, /* outKc1 */ number | null, /* outSres2 */ number | null, /* outKc2 */ number | null, /* outSres3 */ number | null, /* outKc3 */ number | null, /* outN */ number | null ]
    closeDoneGetResult(): boolean
    closeDoneGetStatusCode(): StatusError
    commandAppend(buffer: number, bufferSize: number): void
    commandDoneGetCid(): number
    commandDoneGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    commandDoneGetResult(): boolean
    commandDoneGetService(): Service
    commandDoneGetServiceId(): Uuid
    commandDoneGetStatusCode(): StatusError
    commandGetCid(): number
    commandGetCommandType(): MessageCommandType
    commandGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    commandGetService(): Service
    commandGetServiceId(): Uuid
    connectNotificationParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outActivationState */ ActivationState | null, /* outVoiceCallState */ VoiceCallState | null, /* outIpType */ ContextIpType | null, /* outContextType */ Uuid | null, /* outNwError */ number | null ]
    connectResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outActivationState */ ActivationState | null, /* outVoiceCallState */ VoiceCallState | null, /* outIpType */ ContextIpType | null, /* outContextType */ Uuid | null, /* outNwError */ number | null ]
    deviceCapsResponseParse(): [ /* returnType */ boolean, /* outDeviceType */ DeviceType | null, /* outCellularClass */ CellularClass | null, /* outVoiceClass */ VoiceClass | null, /* outSimClass */ SimClass | null, /* outDataClass */ DataClass | null, /* outSmsCaps */ SmsCaps | null, /* outControlCaps */ CtrlCaps | null, /* outMaxSessions */ number | null, /* outCustomDataClass */ string | null, /* outDeviceId */ string | null, /* outFirmwareInfo */ string | null, /* outHardwareInfo */ string | null ]
    deviceServiceSubscribeListResponseParse(): [ /* returnType */ boolean, /* outEventsCount */ number | null, /* outEvents */ EventEntry[] | null ]
    deviceServiceSubscriberListResponseParse(eventsCount: number, events: EventEntry): boolean
    deviceServicesResponseParse(): [ /* returnType */ boolean, /* outDeviceServicesCount */ number | null, /* outMaxDssSessions */ number | null, /* outDeviceServices */ DeviceServiceElement[] | null ]
    dssConnectResponseParse(): boolean
    dup(): Message
    emergencyModeNotificationParse(): [ /* returnType */ boolean, /* outState */ EmergencyModeState | null ]
    emergencyModeResponseParse(): [ /* returnType */ boolean, /* outState */ EmergencyModeState | null ]
    errorGetError(): GLib.Error
    errorGetErrorStatusCode(): ProtocolError
    getMessageLength(): number
    getMessageType(): MessageType
    getPrintable(linePrefix: string, headersOnly: boolean): string
    getRaw(): [ /* returnType */ number, /* length */ number ]
    getTransactionId(): number
    homeProviderResponseParse(): [ /* returnType */ boolean, /* outProvider */ Provider | null ]
    indicateStatusGetCid(): number
    indicateStatusGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    indicateStatusGetService(): Service
    indicateStatusGetServiceId(): Uuid
    ipConfigurationNotificationParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outIpv4ConfigurationAvailable */ IPConfigurationAvailableFlag | null, /* outIpv6ConfigurationAvailable */ IPConfigurationAvailableFlag | null, /* outIpv4AddressCount */ number | null, /* outIpv4Address */ IPv4Element[] | null, /* outIpv6AddressCount */ number | null, /* outIpv6Address */ IPv6Element[] | null, /* outIpv4Gateway */ IPv4 | null, /* outIpv6Gateway */ IPv6 | null, /* outIpv4DnsServerCount */ number | null, /* outIpv4DnsServer */ IPv4[] | null, /* outIpv6DnsServerCount */ number | null, /* outIpv6DnsServer */ IPv6[] | null, /* outIpv4Mtu */ number | null, /* outIpv6Mtu */ number | null ]
    ipConfigurationResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outIpv4ConfigurationAvailable */ IPConfigurationAvailableFlag | null, /* outIpv6ConfigurationAvailable */ IPConfigurationAvailableFlag | null, /* outIpv4AddressCount */ number | null, /* outIpv4Address */ IPv4Element[] | null, /* outIpv6AddressCount */ number | null, /* outIpv6Address */ IPv6Element[] | null, /* outIpv4Gateway */ IPv4 | null, /* outIpv6Gateway */ IPv6 | null, /* outIpv4DnsServerCount */ number | null, /* outIpv4DnsServer */ IPv4[] | null, /* outIpv6DnsServerCount */ number | null, /* outIpv6DnsServer */ IPv6[] | null, /* outIpv4Mtu */ number | null, /* outIpv6Mtu */ number | null ]
    ipPacketFiltersResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outPacketFiltersCount */ number | null, /* outPacketFilters */ PacketFilter[] | null ]
    msBasicConnectExtensionsLteAttachConfigurationNotificationParse(): [ /* returnType */ boolean, /* outConfigurationCount */ number | null, /* outConfigurations */ LteAttachConfiguration[] | null ]
    msBasicConnectExtensionsLteAttachConfigurationResponseParse(): [ /* returnType */ boolean, /* outConfigurationCount */ number | null, /* outConfigurations */ LteAttachConfiguration[] | null ]
    msBasicConnectExtensionsLteAttachStatusNotificationParse(): [ /* returnType */ boolean, /* outLteAttachStatus */ LteAttachStatus | null ]
    msBasicConnectExtensionsLteAttachStatusResponseParse(): [ /* returnType */ boolean, /* outLteAttachStatus */ LteAttachStatus | null ]
    msBasicConnectExtensionsPcoNotificationParse(): [ /* returnType */ boolean, /* outPcoValue */ PcoValue | null ]
    msBasicConnectExtensionsPcoResponseParse(): [ /* returnType */ boolean, /* outPcoValue */ PcoValue | null ]
    msFirmwareIdGetResponseParse(): [ /* returnType */ boolean, /* outFirmwareId */ Uuid | null ]
    msSarConfigResponseParse(): [ /* returnType */ boolean, /* outMode */ SarControlMode | null, /* outBackoffState */ SarBackoffState | null, /* outWifiIntegration */ SarWifiHardwareState | null, /* outConfigStatesCount */ number | null, /* outConfigStates */ SarConfigState[] | null ]
    msSarTransmissionStatusNotificationParse(): [ /* returnType */ boolean, /* outChannelNotification */ TransmissionNotificationStatus | null, /* outTransmissionStatus */ TransmissionState | null, /* outHysteresisTimer */ number | null ]
    msSarTransmissionStatusResponseParse(): [ /* returnType */ boolean, /* outChannelNotification */ TransmissionNotificationStatus | null, /* outTransmissionStatus */ TransmissionState | null, /* outHysteresisTimer */ number | null ]
    multicarrierProvidersNotificationParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    multicarrierProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    networkIdleHintResponseParse(): [ /* returnType */ boolean, /* outState */ NetworkIdleHintState | null ]
    openDoneGetResult(): boolean
    openDoneGetStatusCode(): StatusError
    openGetMaxControlTransfer(): number
    packetServiceNotificationParse(): [ /* returnType */ boolean, /* outNwError */ number | null, /* outPacketServiceState */ PacketServiceState | null, /* outHighestAvailableDataClass */ DataClass | null, /* outUplinkSpeed */ number | null, /* outDownlinkSpeed */ number | null ]
    packetServiceResponseParse(): [ /* returnType */ boolean, /* outNwError */ number | null, /* outPacketServiceState */ PacketServiceState | null, /* outHighestAvailableDataClass */ DataClass | null, /* outUplinkSpeed */ number | null, /* outDownlinkSpeed */ number | null ]
    packetStatisticsResponseParse(): [ /* returnType */ boolean, /* outInDiscards */ number | null, /* outInErrors */ number | null, /* outInOctets */ number | null, /* outInPackets */ number | null, /* outOutOctets */ number | null, /* outOutPackets */ number | null, /* outOutErrors */ number | null, /* outOutDiscards */ number | null ]
    phonebookConfigurationNotificationParse(): [ /* returnType */ boolean, /* outState */ PhonebookState | null, /* outNumberOfEntries */ number | null, /* outUsedEntries */ number | null, /* outMaxNumberLength */ number | null, /* outMaxName */ number | null ]
    phonebookConfigurationResponseParse(): [ /* returnType */ boolean, /* outState */ PhonebookState | null, /* outNumberOfEntries */ number | null, /* outUsedEntries */ number | null, /* outMaxNumberLength */ number | null, /* outMaxName */ number | null ]
    phonebookDeleteResponseParse(): boolean
    phonebookReadResponseParse(): [ /* returnType */ boolean, /* outEntryCount */ number | null, /* outEntries */ PhonebookEntry[] | null ]
    phonebookWriteResponseParse(): boolean
    pinListResponseParse(): [ /* returnType */ boolean, /* outPinDescPin1 */ PinDesc | null, /* outPinDescPin2 */ PinDesc | null, /* outPinDescDeviceSimPin */ PinDesc | null, /* outPinDescDeviceFirstSimPin */ PinDesc | null, /* outPinDescNetworkPin */ PinDesc | null, /* outPinDescNetworkSubsetPin */ PinDesc | null, /* outPinDescServiceProviderPin */ PinDesc | null, /* outPinDescCorporatePin */ PinDesc | null, /* outPinDescSubsidyLock */ PinDesc | null, /* outPinDescCustom */ PinDesc | null ]
    pinResponseParse(): [ /* returnType */ boolean, /* outPinType */ PinType | null, /* outPinState */ PinState | null, /* outRemainingAttempts */ number | null ]
    preferredProvidersNotificationParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    preferredProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    provisionedContextsNotificationParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number | null, /* outProvisionedContexts */ ProvisionedContextElement[] | null ]
    provisionedContextsResponseParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number | null, /* outProvisionedContexts */ ProvisionedContextElement[] | null ]
    proxyControlConfigurationResponseParse(): boolean
    qmiMsgNotificationParse(): [ /* returnType */ boolean, /* outQmux */ any | null ]
    qmiMsgResponseParse(): [ /* returnType */ boolean, /* outQmux */ any | null ]
    radioStateNotificationParse(): [ /* returnType */ boolean, /* outHwRadioState */ RadioSwitchState | null, /* outSwRadioState */ RadioSwitchState | null ]
    radioStateResponseParse(): [ /* returnType */ boolean, /* outHwRadioState */ RadioSwitchState | null, /* outSwRadioState */ RadioSwitchState | null ]
    ref(): Message
    registerStateNotificationParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outRegisterState */ RegisterState | null, /* outRegisterMode */ RegisterMode | null, /* outAvailableDataClasses */ DataClass | null, /* outCurrentCellularClass */ CellularClass | null, /* outProviderId */ string | null, /* outProviderName */ string | null, /* outRoamingText */ string | null, /* outRegistrationFlag */ RegistrationFlag | null ]
    registerStateResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outRegisterState */ RegisterState | null, /* outRegisterMode */ RegisterMode | null, /* outAvailableDataClasses */ DataClass | null, /* outCurrentCellularClass */ CellularClass | null, /* outProviderId */ string | null, /* outProviderName */ string | null, /* outRoamingText */ string | null, /* outRegistrationFlag */ RegistrationFlag | null ]
    responseGetResult(expected: MessageType): boolean
    serviceActivationResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outBuffer */ any | null ]
    setTransactionId(transactionId: number): void
    signalStateNotificationParse(): [ /* returnType */ boolean, /* outRssi */ number | null, /* outErrorRate */ number | null, /* outSignalStrengthInterval */ number | null, /* outRssiThreshold */ number | null, /* outErrorRateThreshold */ number | null ]
    signalStateResponseParse(): [ /* returnType */ boolean, /* outRssi */ number | null, /* outErrorRate */ number | null, /* outSignalStrengthInterval */ number | null, /* outRssiThreshold */ number | null, /* outErrorRateThreshold */ number | null ]
    smsConfigurationResponseParse(): [ /* returnType */ boolean, /* outSmsStorageState */ SmsStorageState | null, /* outFormat */ SmsFormat | null, /* outMaxMessages */ number | null, /* outCdmaShortMessageSize */ number | null, /* outScAddress */ string | null ]
    smsDeleteResponseParse(): boolean
    smsMessageStoreStatusNotificationParse(): [ /* returnType */ boolean, /* outFlag */ SmsStatusFlag | null, /* outMessageIndex */ number | null ]
    smsMessageStoreStatusResponseParse(): [ /* returnType */ boolean, /* outFlag */ SmsStatusFlag | null, /* outMessageIndex */ number | null ]
    smsReadNotificationParse(): [ /* returnType */ boolean, /* outFormat */ SmsFormat | null, /* outMessagesCount */ number | null, /* outPduMessages */ SmsPduReadRecord[] | null, /* outCdmaMessages */ SmsCdmaReadRecord[] | null ]
    smsReadResponseParse(): [ /* returnType */ boolean, /* outFormat */ SmsFormat | null, /* outMessagesCount */ number | null, /* outPduMessages */ SmsPduReadRecord[] | null, /* outCdmaMessages */ SmsCdmaReadRecord[] | null ]
    smsSendResponseParse(): [ /* returnType */ boolean, /* outMessageReference */ number | null ]
    stkEnvelopeResponseParse(): [ /* returnType */ boolean, /* outEnvelopeSupport */ any | null ]
    stkPacNotificationParse(): [ /* returnType */ boolean, /* outPacType */ StkPacType | null, /* outDataBuffer */ any | null ]
    stkPacResponseParse(): [ /* returnType */ boolean, /* outPacSupport */ any | null ]
    stkTerminalResponseResponseParse(): [ /* returnType */ boolean, /* outResultData */ any | null, /* outStatusWords */ number | null ]
    subscriberReadyStatusNotificationParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState | null, /* outSubscriberId */ string | null, /* outSimIccId */ string | null, /* outReadyInfo */ ReadyInfoFlag | null, /* outTelephoneNumbersCount */ number | null, /* outTelephoneNumbers */ string[] | null ]
    subscriberReadyStatusResponseParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState | null, /* outSubscriberId */ string | null, /* outSimIccId */ string | null, /* outReadyInfo */ ReadyInfoFlag | null, /* outTelephoneNumbersCount */ number | null, /* outTelephoneNumbers */ string[] | null ]
    unref(): void
    ussdNotificationParse(): [ /* returnType */ boolean, /* outResponse */ UssdResponse | null, /* outSessionState */ UssdSessionState | null, /* outDataCodingScheme */ number | null, /* outPayload */ any | null ]
    ussdResponseParse(): [ /* returnType */ boolean, /* outResponse */ UssdResponse | null, /* outSessionState */ UssdSessionState | null, /* outDataCodingScheme */ number | null, /* outPayload */ any | null ]
    visibleProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
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
    static authAkaQueryNew(rand: any, autn: any): Message
    static authAkapQueryNew(rand: any, autn: any, networkName: string): Message
    static authSimQueryNew(rand1: any, rand2: any, rand3: any, n: number): Message
    static closeDoneNew(transactionId: number, errorStatusCode: StatusError): Message
    static closeNew(transactionId: number): Message
    static commandNew(transactionId: number, service: Service, cid: number, commandType: MessageCommandType): Message
    static connectQueryNew(sessionId: number, activationState: ActivationState, voiceCallState: VoiceCallState, ipType: ContextIpType, contextType: Uuid, nwError: number): Message
    static connectSetNew(sessionId: number, activationCommand: ActivationCommand, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol, ipType: ContextIpType, contextType: Uuid): Message
    static deviceCapsQueryNew(): Message
    static deviceServiceSubscribeListSetNew(eventsCount: number, events: EventEntry): Message
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
    static ipPacketFiltersQueryNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilter): Message
    static ipPacketFiltersSetNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilter): Message
    static msBasicConnectExtensionsLteAttachConfigurationQueryNew(): Message
    static msBasicConnectExtensionsLteAttachConfigurationSetNew(operation: LteAttachContextOperation, configurationCount: number, configurations: LteAttachConfiguration): Message
    static msBasicConnectExtensionsLteAttachStatusQueryNew(): Message
    static msBasicConnectExtensionsPcoQueryNew(pcoValue: PcoValue): Message
    static msFirmwareIdGetQueryNew(): Message
    static msHostShutdownNotifySetNew(): Message
    static msSarConfigQueryNew(): Message
    static msSarConfigSetNew(mode: SarControlMode, backoffState: SarBackoffState, configStatesCount: number, configStates: SarConfigState): Message
    static msSarTransmissionStatusQueryNew(): Message
    static msSarTransmissionStatusSetNew(channelNotification: TransmissionNotificationStatus, hysteresisTimer: number): Message
    static multicarrierProvidersQueryNew(): Message
    static multicarrierProvidersSetNew(providersCount: number, providers: Provider): Message
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
    static preferredProvidersSetNew(providersCount: number, providers: Provider): Message
    static provisionedContextsQueryNew(): Message
    static provisionedContextsSetNew(contextId: number, contextType: Uuid, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol, providerId: string): Message
    static proxyControlConfigurationSetNew(devicePath: string, timeout: number): Message
    static qmiMsgSetNew(qmiMsg: any): Message
    static radioStateQueryNew(): Message
    static radioStateSetNew(radioState: RadioSwitchState): Message
    static registerStateQueryNew(): Message
    static registerStateSetNew(providerId: string, registerAction: RegisterAction, dataClass: DataClass): Message
    static serviceActivationSetNew(buffer: any): Message
    static signalStateQueryNew(): Message
    static signalStateSetNew(signalStrengthInterval: number, rssiThreshold: number, errorRateThreshold: number): Message
    static smsConfigurationQueryNew(): Message
    static smsConfigurationSetNew(format: SmsFormat, scAddress: string): Message
    static smsDeleteSetNew(flag: SmsFlag, messageIndex: number): Message
    static smsMessageStoreStatusQueryNew(): Message
    static smsReadQueryNew(format: SmsFormat, flag: SmsFlag, messageIndex: number): Message
    static smsSendSetNew(format: SmsFormat, pduMessage: SmsPduSendRecord, cdmaMessage: SmsCdmaSendRecord): Message
    static stkEnvelopeQueryNew(): Message
    static stkEnvelopeSetNew(data: any): Message
    static stkPacQueryNew(): Message
    static stkPacSetNew(pacHostControl: any): Message
    static stkTerminalResponseSetNew(response: any): Message
    static subscriberReadyStatusQueryNew(): Message
    static ussdSetNew(action: UssdAction, dataCodingScheme: number, payload: any): Message
    static visibleProvidersQueryNew(action: VisibleProvidersAction): Message
}
export class PacketFilter {
    /* Fields of Mbim.PacketFilter */
    filterSize: number
    packetFilter: number
    packetMask: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: PacketFilterArray): void
}
export class PcoValue {
    /* Fields of Mbim.PcoValue */
    sessionId: number
    pcoDataSize: number
    pcoDataType: number
    pcoDataBuffer: number
    /* Methods of Mbim.PcoValue */
    free(): void
    static name: string
}
export class PhonebookEntry {
    /* Fields of Mbim.PhonebookEntry */
    entryIndex: number
    number: string
    name: string
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: PhonebookEntryArray): void
}
export class PinDesc {
    /* Fields of Mbim.PinDesc */
    pinMode: number
    pinFormat: number
    pinLengthMin: number
    pinLengthMax: number
    /* Methods of Mbim.PinDesc */
    free(): void
    static name: string
}
export class Provider {
    /* Fields of Mbim.Provider */
    providerId: string
    providerState: number
    providerName: string
    cellularClass: number
    rssi: number
    errorRate: number
    /* Methods of Mbim.Provider */
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: ProviderArray): void
}
export class ProvisionedContextElement {
    /* Fields of Mbim.ProvisionedContextElement */
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
export abstract class ProxyClass {
    /* Fields of Mbim.ProxyClass */
    parent: GObject.ObjectClass
    static name: string
}
export class ProxyPrivate {
    static name: string
}
export class SarConfigState {
    /* Fields of Mbim.SarConfigState */
    antennaIndex: number
    backoffIndex: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: SarConfigStateArray): void
}
export class SmsCdmaReadRecord {
    /* Fields of Mbim.SmsCdmaReadRecord */
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
export class SmsCdmaSendRecord {
    /* Fields of Mbim.SmsCdmaSendRecord */
    encoding: number
    language: number
    address: string
    encodedMessageSize: number
    encodedMessage: number
    encodedMessageSizeInCharacters: number
    /* Methods of Mbim.SmsCdmaSendRecord */
    free(): void
    static name: string
}
export class SmsPduReadRecord {
    /* Fields of Mbim.SmsPduReadRecord */
    messageIndex: number
    messageStatus: number
    pduDataSize: number
    pduData: number
    static name: string
    /* Static methods and pseudo-constructors */
    static arrayFree(array: SmsPduReadRecordArray): void
}
export class SmsPduSendRecord {
    /* Fields of Mbim.SmsPduSendRecord */
    pduDataSize: number
    pduData: number
    /* Methods of Mbim.SmsPduSendRecord */
    free(): void
    static name: string
}
export class Uuid {
    /* Fields of Mbim.Uuid */
    a: any
    b: any
    c: any
    d: any
    e: any
    /* Methods of Mbim.Uuid */
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
type DeprecatedCidBasicConnect = number
type DeprecatedRegistrationFlag = number
type DeviceServiceElementArray = DeviceServiceElement
type EventEntryArray = EventEntry
type IPv4ElementArray = IPv4Element
type IPv6ElementArray = IPv6Element
type LteAttachConfigurationArray = LteAttachConfiguration
type PacketFilterArray = PacketFilter
type PhonebookEntryArray = PhonebookEntry
type ProviderArray = Provider
type ProvisionedContextElementArray = ProvisionedContextElement
type SarConfigStateArray = SarConfigState
type SmsCdmaReadRecordArray = SmsCdmaReadRecord
type SmsPduReadRecordArray = SmsPduReadRecord
}