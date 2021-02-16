/**
 * Mbim-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

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
export function activation_command_get_string(val: ActivationCommand): string
export function activation_state_get_string(val: ActivationState): string
export function atds_provider_array_free(array: AtdsProviderArray): void
export function atds_provider_plmn_mode_get_string(val: AtdsProviderPlmnMode): string
export function atds_rat_mode_get_string(val: AtdsRatMode): string
export function auth_protocol_get_string(val: AuthProtocol): string
export function cellular_class_build_string_from_mask(mask: CellularClass): string
export function cid_atds_get_string(val: CidAtds): string
export function cid_auth_get_string(val: CidAuth): string
export function cid_basic_connect_get_string(val: CidBasicConnect): string
export function cid_can_notify(service: Service, cid: number): boolean
export function cid_can_query(service: Service, cid: number): boolean
export function cid_can_set(service: Service, cid: number): boolean
export function cid_dss_get_string(val: CidDss): string
export function cid_get_printable(service: Service, cid: number): string
export function cid_intel_firmware_update_get_string(val: CidIntelFirmwareUpdate): string
export function cid_ms_basic_connect_extensions_get_string(val: CidMsBasicConnectExtensions): string
export function cid_ms_firmware_id_get_string(val: CidMsFirmwareId): string
export function cid_ms_host_shutdown_get_string(val: CidMsHostShutdown): string
export function cid_ms_sar_get_string(val: CidMsSar): string
export function cid_phonebook_get_string(val: CidPhonebook): string
export function cid_proxy_control_get_string(val: CidProxyControl): string
export function cid_qmi_get_string(val: CidQmi): string
export function cid_sms_get_string(val: CidSms): string
export function cid_stk_get_string(val: CidStk): string
export function cid_ussd_get_string(val: CidUssd): string
export function compression_get_string(val: Compression): string
export function context_ip_type_get_string(val: ContextIpType): string
export function context_source_get_string(val: ContextSource): string
export function context_type_get_string(val: ContextType): string
export function core_error_get_string(val: CoreError): string
export function core_error_quark(): GLib.Quark
export function ctrl_caps_build_string_from_mask(mask: CtrlCaps): string
export function data_class_build_string_from_mask(mask: DataClass): string
export function device_service_element_array_free(array: DeviceServiceElementArray): void
export function device_type_get_string(val: DeviceType): string
export function dss_link_state_get_string(val: DssLinkState): string
export function emergency_mode_state_get_string(val: EmergencyModeState): string
export function event_entry_array_free(array: EventEntryArray): void
export function ip_configuration_available_flag_build_string_from_mask(mask: IPConfigurationAvailableFlag): string
export function ipv4_element_array_free(array: IPv4ElementArray): void
export function ipv6_element_array_free(array: IPv6ElementArray): void
export function lte_attach_configuration_array_free(array: LteAttachConfigurationArray): void
export function lte_attach_context_operation_get_string(val: LteAttachContextOperation): string
export function lte_attach_context_roaming_control_get_string(val: LteAttachContextRoamingControl): string
export function lte_attach_state_get_string(val: LteAttachState): string
export function message_command_type_get_string(val: MessageCommandType): string
export function message_type_get_string(val: MessageType): string
export function network_idle_hint_state_get_string(val: NetworkIdleHintState): string
export function nw_error_get_string(val: NwError): string
export function packet_filter_array_free(array: PacketFilterArray): void
export function packet_service_action_get_string(val: PacketServiceAction): string
export function packet_service_state_get_string(val: PacketServiceState): string
export function pco_type_get_string(val: PcoType): string
export function phonebook_entry_array_free(array: PhonebookEntryArray): void
export function phonebook_flag_get_string(val: PhonebookFlag): string
export function phonebook_state_get_string(val: PhonebookState): string
export function phonebook_write_flag_get_string(val: PhonebookWriteFlag): string
export function pin_format_get_string(val: PinFormat): string
export function pin_mode_get_string(val: PinMode): string
export function pin_operation_get_string(val: PinOperation): string
export function pin_state_get_string(val: PinState): string
export function pin_type_get_string(val: PinType): string
export function protocol_error_get_string(val: ProtocolError): string
export function protocol_error_quark(): GLib.Quark
export function provider_array_free(array: ProviderArray): void
export function provider_state_build_string_from_mask(mask: ProviderState): string
export function provisioned_context_element_array_free(array: ProvisionedContextElementArray): void
export function radio_switch_state_get_string(val: RadioSwitchState): string
export function ready_info_flag_build_string_from_mask(mask: ReadyInfoFlag): string
export function register_action_get_string(val: RegisterAction): string
export function register_custom_service(uuid: Uuid, nickname: string): number
export function register_mode_get_string(val: RegisterMode): string
export function register_state_get_string(val: RegisterState): string
export function registration_flag_build_string_from_mask(mask: RegistrationFlag): string
export function sar_backoff_state_get_string(val: SarBackoffState): string
export function sar_config_state_array_free(array: SarConfigStateArray): void
export function sar_control_mode_get_string(val: SarControlMode): string
export function sar_wifi_hardware_state_get_string(val: SarWifiHardwareState): string
export function service_get_string(val: Service): string
export function service_id_is_custom(id: number): boolean
export function service_lookup_name(service: number): string
export function sim_class_build_string_from_mask(mask: SimClass): string
export function sms_caps_build_string_from_mask(mask: SmsCaps): string
export function sms_cdma_encoding_get_string(val: SmsCdmaEncoding): string
export function sms_cdma_lang_get_string(val: SmsCdmaLang): string
export function sms_cdma_read_record_array_free(array: SmsCdmaReadRecordArray): void
export function sms_flag_get_string(val: SmsFlag): string
export function sms_format_get_string(val: SmsFormat): string
export function sms_pdu_read_record_array_free(array: SmsPduReadRecordArray): void
export function sms_status_flag_get_string(val: SmsStatusFlag): string
export function sms_status_get_string(val: SmsStatus): string
export function sms_storage_state_get_string(val: SmsStorageState): string
export function status_error_get_string(val: StatusError): string
export function status_error_quark(): GLib.Quark
export function stk_pac_profile_get_string(val: StkPacProfile): string
export function stk_pac_type_get_string(val: StkPacType): string
export function subscriber_ready_state_get_string(val: SubscriberReadyState): string
export function transmission_notification_status_get_string(val: TransmissionNotificationStatus): string
export function transmission_state_get_string(val: TransmissionState): string
export function unregister_custom_service(id: number): boolean
export function ussd_action_get_string(val: UssdAction): string
export function ussd_response_get_string(val: UssdResponse): string
export function ussd_session_state_get_string(val: UssdSessionState): string
export function utils_get_traces_enabled(): boolean
export function utils_set_traces_enabled(enabled: boolean): void
export function uuid_from_context_type(context_type: ContextType): Uuid
export function uuid_from_printable(str: string, uuid: Uuid): boolean
export function uuid_from_service(service: Service): Uuid
export function visible_providers_action_get_string(val: VisibleProvidersAction): string
export function voice_call_state_get_string(val: VoiceCallState): string
export function voice_class_get_string(val: VoiceClass): string
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    device_file?: Gio.File
    device_in_session?: boolean
    device_transaction_id?: number
}
export class Device {
    /* Properties of Mbim.Device */
    device_in_session: boolean
    device_transaction_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Mbim.Device */
    close(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(res: Gio.AsyncResult): boolean
    close_force(): boolean
    command(message: Message, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    command_finish(res: Gio.AsyncResult): Message
    get_next_transaction_id(): number
    get_path(): string
    get_path_display(): string
    get_transaction_id(): number
    is_open(): boolean
    open(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(res: Gio.AsyncResult): boolean
    open_full(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_full_finish(res: Gio.AsyncResult): boolean
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
    /* Virtual methods of Mbim.Device */
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
    /* Signals of Mbim.Device */
    connect(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    connect_after(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    emit(sigName: "device-error", object: GLib.Error): void
    connect(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    connect_after(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    emit(sigName: "device-indicate-status", object: Message): void
    connect(sigName: "device-removed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Device) => void)): number
    emit(sigName: "device-removed"): void
    /* Signals of GObject.Object */
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
export class Proxy {
    /* Properties of Mbim.Proxy */
    readonly mbim_proxy_n_clients: number
    readonly mbim_proxy_n_devices: number
    /* Fields of Mbim.Proxy */
    parent: GObject.Object
    priv: ProxyPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
export class AtdsProvider {
    /* Fields of Mbim.AtdsProvider */
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
export abstract class DeviceClass {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export class DeviceServiceElement {
    /* Fields of Mbim.DeviceServiceElement */
    device_service_id: Uuid
    dss_payload: number
    max_dss_instances: number
    cids_count: number
    cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: DeviceServiceElementArray): void
}
export class EventEntry {
    /* Fields of Mbim.EventEntry */
    device_service_id: Uuid
    cids_count: number
    cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: EventEntryArray): void
}
export class IPv4 {
    /* Fields of Mbim.IPv4 */
    addr: Uint8Array
    static name: string
}
export class IPv4Element {
    /* Fields of Mbim.IPv4Element */
    on_link_prefix_length: number
    ipv4_address: IPv4
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: IPv4ElementArray): void
}
export class IPv6 {
    /* Fields of Mbim.IPv6 */
    addr: Uint8Array
    static name: string
}
export class IPv6Element {
    /* Fields of Mbim.IPv6Element */
    on_link_prefix_length: number
    ipv6_address: IPv6
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: IPv6ElementArray): void
}
export class LteAttachConfiguration {
    /* Fields of Mbim.LteAttachConfiguration */
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
export class LteAttachStatus {
    /* Fields of Mbim.LteAttachStatus */
    lte_attach_state: number
    ip_type: number
    access_string: string
    user_name: string
    password: string
    compression: number
    auth_protocol: number
    /* Methods of Mbim.LteAttachStatus */
    free(): void
    static name: string
}
export class Message {
    /* Methods of Mbim.Message */
    atds_location_response_parse(): [ /* returnType */ boolean, /* out_lac */ number | null, /* out_tac */ number | null, /* out_cell_id */ number | null ]
    atds_operators_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ AtdsProvider[] | null ]
    atds_rat_response_parse(): [ /* returnType */ boolean, /* out_mode */ AtdsRatMode | null ]
    atds_register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    atds_signal_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_rscp */ number | null, /* out_ecno */ number | null, /* out_rsrq */ number | null, /* out_rsrp */ number | null, /* out_rssnr */ number | null ]
    auth_aka_response_parse(): [ /* returnType */ boolean, /* out_res */ Uint8Array | null, /* out_res_len */ number | null, /* out_integrating_key */ Uint8Array | null, /* out_ciphering_key */ Uint8Array | null, /* out_auts */ Uint8Array | null ]
    auth_akap_response_parse(): [ /* returnType */ boolean, /* out_res */ Uint8Array | null, /* out_res_len */ number | null, /* out_integrating_key */ Uint8Array | null, /* out_ciphering_key */ Uint8Array | null, /* out_auts */ Uint8Array | null ]
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
    ms_basic_connect_extensions_lte_attach_configuration_notification_parse(): [ /* returnType */ boolean, /* out_configuration_count */ number | null, /* out_configurations */ LteAttachConfiguration[] | null ]
    ms_basic_connect_extensions_lte_attach_configuration_response_parse(): [ /* returnType */ boolean, /* out_configuration_count */ number | null, /* out_configurations */ LteAttachConfiguration[] | null ]
    ms_basic_connect_extensions_lte_attach_status_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_status */ LteAttachStatus | null ]
    ms_basic_connect_extensions_lte_attach_status_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_status */ LteAttachStatus | null ]
    ms_basic_connect_extensions_pco_notification_parse(): [ /* returnType */ boolean, /* out_pco_value */ PcoValue | null ]
    ms_basic_connect_extensions_pco_response_parse(): [ /* returnType */ boolean, /* out_pco_value */ PcoValue | null ]
    ms_firmware_id_get_response_parse(): [ /* returnType */ boolean, /* out_firmware_id */ Uuid | null ]
    ms_sar_config_response_parse(): [ /* returnType */ boolean, /* out_mode */ SarControlMode | null, /* out_backoff_state */ SarBackoffState | null, /* out_wifi_integration */ SarWifiHardwareState | null, /* out_config_states_count */ number | null, /* out_config_states */ SarConfigState[] | null ]
    ms_sar_transmission_status_notification_parse(): [ /* returnType */ boolean, /* out_channel_notification */ TransmissionNotificationStatus | null, /* out_transmission_status */ TransmissionState | null, /* out_hysteresis_timer */ number | null ]
    ms_sar_transmission_status_response_parse(): [ /* returnType */ boolean, /* out_channel_notification */ TransmissionNotificationStatus | null, /* out_transmission_status */ TransmissionState | null, /* out_hysteresis_timer */ number | null ]
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
    qmi_msg_notification_parse(): [ /* returnType */ boolean, /* out_qmux */ Uint8Array | null ]
    qmi_msg_response_parse(): [ /* returnType */ boolean, /* out_qmux */ Uint8Array | null ]
    radio_state_notification_parse(): [ /* returnType */ boolean, /* out_hw_radio_state */ RadioSwitchState | null, /* out_sw_radio_state */ RadioSwitchState | null ]
    radio_state_response_parse(): [ /* returnType */ boolean, /* out_hw_radio_state */ RadioSwitchState | null, /* out_sw_radio_state */ RadioSwitchState | null ]
    ref(): Message
    register_state_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    response_get_result(expected: MessageType): boolean
    service_activation_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_buffer */ Uint8Array | null ]
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
    stk_envelope_response_parse(): [ /* returnType */ boolean, /* out_envelope_support */ Uint8Array | null ]
    stk_pac_notification_parse(): [ /* returnType */ boolean, /* out_pac_type */ StkPacType | null, /* out_data_buffer */ Uint8Array | null ]
    stk_pac_response_parse(): [ /* returnType */ boolean, /* out_pac_support */ Uint8Array | null ]
    stk_terminal_response_response_parse(): [ /* returnType */ boolean, /* out_result_data */ Uint8Array | null, /* out_status_words */ number | null ]
    subscriber_ready_status_notification_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    subscriber_ready_status_response_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    unref(): void
    ussd_notification_parse(): [ /* returnType */ boolean, /* out_response */ UssdResponse | null, /* out_session_state */ UssdSessionState | null, /* out_data_coding_scheme */ number | null, /* out_payload */ Uint8Array | null ]
    ussd_response_parse(): [ /* returnType */ boolean, /* out_response */ UssdResponse | null, /* out_session_state */ UssdSessionState | null, /* out_data_coding_scheme */ number | null, /* out_payload */ Uint8Array | null ]
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
    static auth_aka_query_new(rand: Uint8Array, autn: Uint8Array): Message
    static auth_akap_query_new(rand: Uint8Array, autn: Uint8Array, network_name: string): Message
    static auth_sim_query_new(rand1: Uint8Array, rand2: Uint8Array, rand3: Uint8Array, n: number): Message
    static close_done_new(transaction_id: number, error_status_code: StatusError): Message
    static close_new(transaction_id: number): Message
    static command_new(transaction_id: number, service: Service, cid: number, command_type: MessageCommandType): Message
    static connect_query_new(session_id: number, activation_state: ActivationState, voice_call_state: VoiceCallState, ip_type: ContextIpType, context_type: Uuid, nw_error: number): Message
    static connect_set_new(session_id: number, activation_command: ActivationCommand, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid): Message
    static device_caps_query_new(): Message
    static device_service_subscribe_list_set_new(events_count: number, events: EventEntry): Message
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
    static ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter): Message
    static ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter): Message
    static ms_basic_connect_extensions_lte_attach_configuration_query_new(): Message
    static ms_basic_connect_extensions_lte_attach_configuration_set_new(operation: LteAttachContextOperation, configuration_count: number, configurations: LteAttachConfiguration): Message
    static ms_basic_connect_extensions_lte_attach_status_query_new(): Message
    static ms_basic_connect_extensions_pco_query_new(pco_value: PcoValue): Message
    static ms_firmware_id_get_query_new(): Message
    static ms_host_shutdown_notify_set_new(): Message
    static ms_sar_config_query_new(): Message
    static ms_sar_config_set_new(mode: SarControlMode, backoff_state: SarBackoffState, config_states_count: number, config_states: SarConfigState): Message
    static ms_sar_transmission_status_query_new(): Message
    static ms_sar_transmission_status_set_new(channel_notification: TransmissionNotificationStatus, hysteresis_timer: number): Message
    static multicarrier_providers_query_new(): Message
    static multicarrier_providers_set_new(providers_count: number, providers: Provider): Message
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
    static preferred_providers_set_new(providers_count: number, providers: Provider): Message
    static provisioned_contexts_query_new(): Message
    static provisioned_contexts_set_new(context_id: number, context_type: Uuid, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, provider_id: string): Message
    static proxy_control_configuration_set_new(device_path: string, timeout: number): Message
    static qmi_msg_set_new(qmi_msg: Uint8Array): Message
    static radio_state_query_new(): Message
    static radio_state_set_new(radio_state: RadioSwitchState): Message
    static register_state_query_new(): Message
    static register_state_set_new(provider_id: string, register_action: RegisterAction, data_class: DataClass): Message
    static service_activation_set_new(buffer: Uint8Array): Message
    static signal_state_query_new(): Message
    static signal_state_set_new(signal_strength_interval: number, rssi_threshold: number, error_rate_threshold: number): Message
    static sms_configuration_query_new(): Message
    static sms_configuration_set_new(format: SmsFormat, sc_address: string): Message
    static sms_delete_set_new(flag: SmsFlag, message_index: number): Message
    static sms_message_store_status_query_new(): Message
    static sms_read_query_new(format: SmsFormat, flag: SmsFlag, message_index: number): Message
    static sms_send_set_new(format: SmsFormat, pdu_message: SmsPduSendRecord, cdma_message: SmsCdmaSendRecord): Message
    static stk_envelope_query_new(): Message
    static stk_envelope_set_new(data: Uint8Array): Message
    static stk_pac_query_new(): Message
    static stk_pac_set_new(pac_host_control: Uint8Array): Message
    static stk_terminal_response_set_new(response: Uint8Array): Message
    static subscriber_ready_status_query_new(): Message
    static ussd_set_new(action: UssdAction, data_coding_scheme: number, payload: Uint8Array): Message
    static visible_providers_query_new(action: VisibleProvidersAction): Message
}
export class PacketFilter {
    /* Fields of Mbim.PacketFilter */
    filter_size: number
    packet_filter: number
    packet_mask: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: PacketFilterArray): void
}
export class PcoValue {
    /* Fields of Mbim.PcoValue */
    session_id: number
    pco_data_size: number
    pco_data_type: number
    pco_data_buffer: number
    /* Methods of Mbim.PcoValue */
    free(): void
    static name: string
}
export class PhonebookEntry {
    /* Fields of Mbim.PhonebookEntry */
    entry_index: number
    number: string
    name: string
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: PhonebookEntryArray): void
}
export class PinDesc {
    /* Fields of Mbim.PinDesc */
    pin_mode: number
    pin_format: number
    pin_length_min: number
    pin_length_max: number
    /* Methods of Mbim.PinDesc */
    free(): void
    static name: string
}
export class Provider {
    /* Fields of Mbim.Provider */
    provider_id: string
    provider_state: number
    provider_name: string
    cellular_class: number
    rssi: number
    error_rate: number
    /* Methods of Mbim.Provider */
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: ProviderArray): void
}
export class ProvisionedContextElement {
    /* Fields of Mbim.ProvisionedContextElement */
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
    antenna_index: number
    backoff_index: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: SarConfigStateArray): void
}
export class SmsCdmaReadRecord {
    /* Fields of Mbim.SmsCdmaReadRecord */
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
export class SmsCdmaSendRecord {
    /* Fields of Mbim.SmsCdmaSendRecord */
    encoding: number
    language: number
    address: string
    encoded_message_size: number
    encoded_message: number
    encoded_message_size_in_characters: number
    /* Methods of Mbim.SmsCdmaSendRecord */
    free(): void
    static name: string
}
export class SmsPduReadRecord {
    /* Fields of Mbim.SmsPduReadRecord */
    message_index: number
    message_status: number
    pdu_data_size: number
    pdu_data: number
    static name: string
    /* Static methods and pseudo-constructors */
    static array_free(array: SmsPduReadRecordArray): void
}
export class SmsPduSendRecord {
    /* Fields of Mbim.SmsPduSendRecord */
    pdu_data_size: number
    pdu_data: number
    /* Methods of Mbim.SmsPduSendRecord */
    free(): void
    static name: string
}
export class Uuid {
    /* Fields of Mbim.Uuid */
    a: Uint8Array
    b: Uint8Array
    c: Uint8Array
    d: Uint8Array
    e: Uint8Array
    /* Methods of Mbim.Uuid */
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
export type AtdsProviderArray = AtdsProvider
export type DeprecatedCidBasicConnect = number
export type DeprecatedRegistrationFlag = number
export type DeviceServiceElementArray = DeviceServiceElement
export type EventEntryArray = EventEntry
export type IPv4ElementArray = IPv4Element
export type IPv6ElementArray = IPv6Element
export type LteAttachConfigurationArray = LteAttachConfiguration
export type PacketFilterArray = PacketFilter
export type PhonebookEntryArray = PhonebookEntry
export type ProviderArray = Provider
export type ProvisionedContextElementArray = ProvisionedContextElement
export type SarConfigStateArray = SarConfigState
export type SmsCdmaReadRecordArray = SmsCdmaReadRecord
export type SmsPduReadRecordArray = SmsPduReadRecord