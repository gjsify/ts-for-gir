/**
 * GstMpegts-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum ATSCDescriptorType {
    STUFFING,
    AC3,
    CAPTION_SERVICE,
    CONTENT_ADVISORY,
    EXTENDED_CHANNEL_NAME,
    SERVICE_LOCATION,
    TIME_SHIFTED_SERVICE,
    COMPONENT_NAME,
    DCC_DEPARTING_REQUEST,
    DCC_ARRIVING_REQUEST,
    REDISTRIBUTION_CONTROL,
    GENRE,
    PRIVATE_INFORMATION,
    EAC3,
    ENHANCED_SIGNALING,
    DATA_SERVICE,
    PID_COUNT,
    DOWNLOAD_DESCRIPTOR,
    MULTIPROTOCOL_ENCAPSULATION,
    MODULE_LINK,
    CRC32,
    GROUP_LINK,
}
export enum ATSCStreamType {
    DCII_VIDEO,
    AUDIO_AC3,
    SUBTITLING,
    ISOCH_DATA,
    SIT,
    AUDIO_EAC3,
    AUDIO_DTS_HD,
}
export enum AtscMGTTableType {
    EIT0,
    EIT127,
    ETT0,
    ETT127,
}
export enum CableOuterFECScheme {
    UNDEFINED,
    NONE,
    RS_204_188,
}
export enum ComponentStreamContent {
    MPEG2_VIDEO,
    MPEG1_LAYER2_AUDIO,
    TELETEXT_OR_SUBTITLE,
    AC_3,
    AVC,
    AAC,
    DTS,
    SRM_CPCM,
}
export enum ContentNibbleHi {
    MOVIE_DRAMA,
    NEWS_CURRENT_AFFAIRS,
    SHOW_GAME_SHOW,
    SPORTS,
    CHILDREN_YOUTH_PROGRAM,
    MUSIC_BALLET_DANCE,
    ARTS_CULTURE,
    SOCIAL_POLITICAL_ECONOMICS,
    EDUCATION_SCIENCE_FACTUAL,
    LEISURE_HOBBIES,
    SPECIAL_CHARACTERISTICS,
}
export enum DVBCodeRate {
    NONE,
    /* 1_2 (invalid, starts with a number) */
    /* 2_3 (invalid, starts with a number) */
    /* 3_4 (invalid, starts with a number) */
    /* 4_5 (invalid, starts with a number) */
    /* 5_6 (invalid, starts with a number) */
    /* 6_7 (invalid, starts with a number) */
    /* 7_8 (invalid, starts with a number) */
    /* 8_9 (invalid, starts with a number) */
    AUTO,
    /* 3_5 (invalid, starts with a number) */
    /* 9_10 (invalid, starts with a number) */
    /* 2_5 (invalid, starts with a number) */
}
export enum DVBDescriptorType {
    NETWORK_NAME,
    SERVICE_LIST,
    STUFFING,
    SATELLITE_DELIVERY_SYSTEM,
    CABLE_DELIVERY_SYSTEM,
    VBI_DATA,
    VBI_TELETEXT,
    BOUQUET_NAME,
    SERVICE,
    COUNTRY_AVAILABILITY,
    LINKAGE,
    NVOD_REFERENCE,
    TIME_SHIFTED_SERVICE,
    SHORT_EVENT,
    EXTENDED_EVENT,
    TIME_SHIFTED_EVENT,
    COMPONENT,
    MOSAIC,
    STREAM_IDENTIFIER,
    CA_IDENTIFIER,
    CONTENT,
    PARENTAL_RATING,
    TELETEXT,
    TELEPHONE,
    LOCAL_TIME_OFFSET,
    SUBTITLING,
    TERRESTRIAL_DELIVERY_SYSTEM,
    MULTILINGUAL_NETWORK_NAME,
    MULTILINGUAL_BOUQUET_NAME,
    MULTILINGUAL_SERVICE_NAME,
    MULTILINGUAL_COMPONENT,
    PRIVATE_DATA_SPECIFIER,
    SERVICE_MOVE,
    SHORT_SMOOTHING_BUFFER,
    FREQUENCY_LIST,
    PARTIAL_TRANSPORT_STREAM,
    DATA_BROADCAST,
    SCRAMBLING,
    DATA_BROADCAST_ID,
    TRANSPORT_STREAM,
    DSNG,
    PDC,
    AC3,
    ANCILLARY_DATA,
    CELL_LIST,
    CELL_FREQUENCY_LINK,
    ANNOUNCEMENT_SUPPORT,
    APPLICATION_SIGNALLING,
    ADAPTATION_FIELD_DATA,
    SERVICE_IDENTIFIER,
    SERVICE_AVAILABILITY,
    DEFAULT_AUTHORITY,
    RELATED_CONTENT,
    TVA_ID,
    CONTENT_IDENTIFIER,
    TIMESLICE_FEC_IDENTIFIER,
    ECM_REPETITION_RATE,
    S2_SATELLITE_DELIVERY_SYSTEM,
    ENHANCED_AC3,
    DTS,
    AAC,
    XAIT_LOCATION,
    FTA_CONTENT_MANAGEMENT,
    EXTENSION,
}
export enum DVBExtendedDescriptorType {
    IMAGE_ICON,
    CPCM_DELIVERY_SIGNALLING,
    CP,
    CP_IDENTIFIER,
    T2_DELIVERY_SYSTEM,
    SH_DELIVERY_SYSTEM,
    SUPPLEMENTARY_AUDIO,
    NETWORK_CHANGE_NOTIFY,
    MESSAGE,
    TARGET_REGION,
    TARGET_REGION_NAME,
    SERVICE_RELOCATED,
    XAIT_PID,
    C2_DELIVERY_SYSTEM,
    DTS_HD_AUDIO_STREAM,
    DTS_NEUTRAL,
    VIDEO_DEPTH_RANGE,
    T2MI,
    URI_LINKAGE,
    AC4,
    AUDIO_PRESELECTION,
}
export enum DVBLinkageHandOverType {
    RESERVED,
    IDENTICAL,
    LOCAL_VARIATION,
    ASSOCIATED,
}
export enum DVBLinkageType {
    RESERVED_00,
    INFORMATION,
    EPG,
    CA_REPLACEMENT,
    TS_CONTAINING_COMPLETE_SI,
    SERVICE_REPLACEMENT,
    DATA_BROADCAST,
    RCS_MAP,
    MOBILE_HAND_OVER,
    SYSTEM_SOFTWARE_UPDATE,
    TS_CONTAINING_SSU,
    IP_MAC_NOTIFICATION,
    TS_CONTAINING_INT,
    EVENT,
    EXTENDED_EVENT,
}
export enum DVBScramblingModeType {
    RESERVED,
    CSA1,
    CSA2,
    CSA3_STANDARD,
    CSA3_MINIMAL_ENHANCED,
    CSA3_FULL_ENHANCED,
    CISSA,
    ATIS_0,
    ATIS_F,
}
export enum DVBServiceType {
    RESERVED_00,
    DIGITAL_TELEVISION,
    DIGITAL_RADIO_SOUND,
    TELETEXT,
    NVOD_REFERENCE,
    NVOD_TIME_SHIFTED,
    MOSAIC,
    FM_RADIO,
    DVB_SRM,
    RESERVED_09,
    ADVANCED_CODEC_DIGITAL_RADIO_SOUND,
    ADVANCED_CODEC_MOSAIC,
    DATA_BROADCAST,
    RESERVED_0D_COMMON_INTERFACE,
    RCS_MAP,
    RCS_FLS,
    DVB_MHP,
    MPEG2_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_SD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_SD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_SD_NVOD_REFERENCE,
    ADVANCED_CODEC_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_HD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_HD_NVOD_REFERENCE,
    ADVANCED_CODEC_STEREO_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_STEREO_HD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_STEREO_HD_NVOD_REFERENCE,
    RESERVED_FF,
}
export enum DVBTeletextType {
    NITIAL_PAGE,
    UBTITLE_PAGE,
    DDITIONAL_INFO_PAGE,
    ROGRAMME_SCHEDULE_PAGE,
    EARING_IMPAIRED_PAGE,
}
export enum DescriptorType {
    RESERVED_00,
    RESERVED_01,
    VIDEO_STREAM,
    AUDIO_STREAM,
    HIERARCHY,
    REGISTRATION,
    DATA_STREAM_ALIGNMENT,
    TARGET_BACKGROUND_GRID,
    VIDEO_WINDOW,
    CA,
    ISO_639_LANGUAGE,
    SYSTEM_CLOCK,
    MULTIPLEX_BUFFER_UTILISATION,
    COPYRIGHT,
    MAXIMUM_BITRATE,
    PRIVATE_DATA_INDICATOR,
    SMOOTHING_BUFFER,
    STD,
    IBP,
    DSMCC_CAROUSEL_IDENTIFIER,
    DSMCC_ASSOCIATION_TAG,
    DSMCC_DEFERRED_ASSOCIATION_TAG,
    DSMCC_NPT_REFERENCE,
    DSMCC_NPT_ENDPOINT,
    DSMCC_STREAM_MODE,
    DSMCC_STREAM_EVENT,
    MPEG4_VIDEO,
    MPEG4_AUDIO,
    IOD,
    SL,
    FMC,
    EXTERNAL_ES_ID,
    MUX_CODE,
    FMX_BUFFER_SIZE,
    MULTIPLEX_BUFFER,
    CONTENT_LABELING,
    METADATA_POINTER,
    METADATA,
    METADATA_STD,
    AVC_VIDEO,
    IPMP,
    AVC_TIMING_AND_HRD,
    MPEG2_AAC_AUDIO,
    FLEX_MUX_TIMING,
    MPEG4_TEXT,
    MPEG4_AUDIO_EXTENSION,
    AUXILIARY_VIDEO_STREAM,
    SVC_EXTENSION,
    MVC_EXTENSION,
    J2K_VIDEO,
    MVC_OPERATION_POINT,
    MPEG2_STEREOSCOPIC_VIDEO_FORMAT,
    STEREOSCOPIC_PROGRAM_INFO,
    STEREOSCOPIC_VIDEO_INFO,
}
export enum HdmvStreamType {
    AUDIO_LPCM,
    AUDIO_AC3,
    AUDIO_DTS,
    AUDIO_AC3_TRUE_HD,
    AUDIO_AC3_PLUS,
    AUDIO_DTS_HD,
    AUDIO_DTS_HD_MASTER_AUDIO,
    AUDIO_EAC3,
    SUBPICTURE_PGS,
    IGS,
    SUBTITLE,
    AUDIO_AC3_PLUS_SECONDARY,
    AUDIO_DTS_HD_SECONDARY,
}
export enum ISDBDescriptorType {
    HIERARCHICAL_TRANSMISSION,
    DIGITAL_COPY_CONTROL,
    NETWORK_IDENTIFICATION,
    PARTIAL_TS_TIME,
    AUDIO_COMPONENT,
    HYPERLINK,
    TARGET_REGION,
    DATA_CONTENT,
    VIDEO_DECODE_CONTROL,
    DOWNLOAD_CONTENT,
    CA_EMM_TS,
    CA_CONTRACT_INFORMATION,
    CA_SERVICE,
    TS_INFORMATION,
    EXTENDED_BROADCASTER,
    LOGO_TRANSMISSION,
    BASIC_LOCAL_EVENT,
    REFERENCE,
    NODE_RELATION,
    SHORT_NODE_INFORMATION,
    STC_REFERENCE,
    SERIES,
    EVENT_GROUP,
    SI_PARAMETER,
    BROADCASTER_NAME,
    COMPONENT_GROUP,
    SI_PRIME_TS,
    BOARD_INFORMATION,
    LDT_LINKAGE,
    CONNECTED_TRANSMISSION,
    CONTENT_AVAILABILITY,
    SERVICE_GROUP,
}
export enum Iso639AudioType {
    UNDEFINED,
    CLEAN_EFFECTS,
    HEARING_IMPAIRED,
    VISUAL_IMPAIRED_COMMENTARY,
}
export enum MiscDescriptorType {
    MTS_DESC_DTG_LOGICAL_CHANNEL,
}
export enum ModulationType {
    QPSK,
    QAM_16,
    QAM_32,
    QAM_64,
    QAM_128,
    QAM_256,
    QAM_AUTO,
    VSB_8,
    VSB_16,
    PSK_8,
    APSK_16,
    APSK_32,
    DQPSK,
    QAM_4_NR_,
    NONE,
}
export enum RunningStatus {
    UNDEFINED,
    NOT_RUNNING,
    STARTS_IN_FEW_SECONDS,
    PAUSING,
    RUNNING,
    OFF_AIR,
}
export enum SCTEDescriptorType {
    STUFFING,
    AC3,
    FRAME_RATE,
    EXTENDED_VIDEO,
    COMPONENT_NAME,
    FREQUENCY_SPEC,
    MODULATION_PARAMS,
    TRANSPORT_STREAM_ID,
}
export enum SCTESpliceCommandType {
    NULL,
    SCHEDULE,
    INSERT,
    TIME,
    BANDWIDTH,
    PRIVATE,
}
export enum SCTESpliceDescriptor {
    AVAIL,
    DTMF,
    SEGMENTATION,
    TIME,
    AUDIO,
}
export enum SatellitePolarizationType {
    LINEAR_HORIZONTAL,
    LINEAR_VERTICAL,
    CIRCULAR_LEFT,
    CIRCULAR_RIGHT,
}
export enum SatelliteRolloff {
    /* 35 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    /* 25 (invalid, starts with a number) */
    RESERVED,
    AUTO,
}
export enum ScteStreamType {
    SUBTITLING,
    ISOCH_DATA,
    SIT,
    DST_NRT,
    DSMCC_DCB,
    SIGNALING,
    SYNC_DATA,
    ASYNC_DATA,
}
export enum SectionATSCTableID {
    MASTER_GUIDE,
    TERRESTRIAL_VIRTUAL_CHANNEL,
    CABLE_VIRTUAL_CHANNEL,
    RATING_REGION,
    EVENT_INFORMATION,
    CHANNEL_OR_EVENT_EXTENDED_TEXT,
    SYSTEM_TIME,
    DATA_EVENT,
    DATA_SERVICE,
    PROGRAM_IDENTIFIER,
    NETWORK_RESOURCE,
    LONG_TERM_SERVICE,
    DIRECTED_CHANNEL_CHANGE,
    DIRECTED_CHANNEL_CHANGE_SECTION_CODE,
    AGGREGATE_EVENT_INFORMATION,
    AGGREGATE_EXTENDED_TEXT,
    AGGREGATE_DATA_EVENT,
    SATELLITE_VIRTUAL_CHANNEL,
}
export enum SectionDVBTableID {
    NETWORK_INFORMATION_ACTUAL_NETWORK,
    NETWORK_INFORMATION_OTHER_NETWORK,
    SERVICE_DESCRIPTION_ACTUAL_TS,
    SERVICE_DESCRIPTION_OTHER_TS,
    BOUQUET_ASSOCIATION,
    UPDATE_NOTIFICATION,
    DOWNLOADABLE_FONT_INFO,
    EVENT_INFORMATION_ACTUAL_TS_PRESENT,
    EVENT_INFORMATION_OTHER_TS_PRESENT,
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_1,
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_N,
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_1,
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_N,
    TIME_DATE,
    RUNNING_STATUS,
    STUFFING,
    TIME_OFFSET,
    APPLICATION_INFORMATION_TABLE,
    CONTAINER,
    RELATED_CONTENT,
    CONTENT_IDENTIFIER,
    MPE_FEC,
    RESOLUTION_NOTIFICATION,
    MPE_IFEC,
    PROTECTION_MESSAGE,
    DISCONTINUITY_INFORMATION,
    SELECTION_INFORMATION,
    CA_MESSAGE_ECM_0,
    CA_MESSAGE_ECM_1,
    CA_MESSAGE_SYSTEM_PRIVATE_1,
    CA_MESSAGE_SYSTEM_PRIVATE_N,
    SCT,
    FCT,
    TCT,
    SPT,
    CMT,
    TBTP,
    PCR_PACKET_PAYLOAD,
    TRANSMISSION_MODE_SUPPORT_PAYLOAD,
    TIM,
    LL_FEC_PARITY_DATA_TABLE,
}
export enum SectionSCTETableID {
    EAS,
    EBIF,
    RESERVED,
    EISS,
    DII,
    DDB,
    SPLICE,
}
export enum SectionTableID {
    PROGRAM_ASSOCIATION,
    CONDITIONAL_ACCESS,
    TS_PROGRAM_MAP,
    TS_DESCRIPTION,
    /* 14496_SCENE_DESCRIPTION (invalid, starts with a number) */
    /* 14496_OBJET_DESCRIPTOR (invalid, starts with a number) */
    METADATA,
    IPMP_CONTROL_INFORMATION,
    /* 14496_SECTION (invalid, starts with a number) */
    /* 23001_11_SECTION (invalid, starts with a number) */
    /* 23001_10_SECTION (invalid, starts with a number) */
    DSM_CC_MULTIPROTO_ENCAPSULATED_DATA,
    DSM_CC_U_N_MESSAGES,
    DSM_CC_DOWNLOAD_DATA_MESSAGES,
    DSM_CC_STREAM_DESCRIPTORS,
    DSM_CC_PRIVATE_DATA,
    DSM_CC_ADDRESSABLE_SECTIONS,
    UNSET,
}
export enum SectionType {
    UNKNOWN,
    PAT,
    PMT,
    CAT,
    TSDT,
    EIT,
    NIT,
    BAT,
    SDT,
    TDT,
    TOT,
    SIT,
    ATSC_TVCT,
    ATSC_CVCT,
    ATSC_MGT,
    ATSC_ETT,
    ATSC_EIT,
    ATSC_STT,
    ATSC_RRT,
    SCTE_SIT,
}
export enum StreamType {
    RESERVED_00,
    VIDEO_MPEG1,
    VIDEO_MPEG2,
    AUDIO_MPEG1,
    AUDIO_MPEG2,
    PRIVATE_SECTIONS,
    PRIVATE_PES_PACKETS,
    MHEG,
    DSM_CC,
    H_222_1,
    DSMCC_A,
    DSMCC_B,
    DSMCC_C,
    DSMCC_D,
    AUXILIARY,
    AUDIO_AAC_ADTS,
    VIDEO_MPEG4,
    AUDIO_AAC_LATM,
    SL_FLEXMUX_PES_PACKETS,
    SL_FLEXMUX_SECTIONS,
    SYNCHRONIZED_DOWNLOAD,
    METADATA_PES_PACKETS,
    METADATA_SECTIONS,
    METADATA_DATA_CAROUSEL,
    METADATA_OBJECT_CAROUSEL,
    METADATA_SYNCHRONIZED_DOWNLOAD,
    MPEG2_IPMP,
    VIDEO_H264,
    AUDIO_AAC_CLEAN,
    MPEG4_TIMED_TEXT,
    VIDEO_RVC,
    VIDEO_H264_SVC_SUB_BITSTREAM,
    VIDEO_H264_MVC_SUB_BITSTREAM,
    VIDEO_JP2K,
    VIDEO_MPEG2_STEREO_ADDITIONAL_VIEW,
    VIDEO_H264_STEREO_ADDITIONAL_VIEW,
    VIDEO_HEVC,
    IPMP_STREAM,
    USER_PRIVATE_EA,
}
export enum TerrestrialGuardInterval {
    /* 1_32 (invalid, starts with a number) */
    /* 1_16 (invalid, starts with a number) */
    /* 1_8 (invalid, starts with a number) */
    /* 1_4 (invalid, starts with a number) */
    AUTO,
    /* 1_128 (invalid, starts with a number) */
    /* 19_128 (invalid, starts with a number) */
    /* 19_256 (invalid, starts with a number) */
    PN420,
    PN595,
    PN945,
}
export enum TerrestrialHierarchy {
    NONE,
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    AUTO,
}
export enum TerrestrialTransmissionMode {
    /* 2K (invalid, starts with a number) */
    /* 8K (invalid, starts with a number) */
    AUTO,
    /* 4K (invalid, starts with a number) */
    /* 1K (invalid, starts with a number) */
    /* 16K (invalid, starts with a number) */
    /* 32K (invalid, starts with a number) */
    C1,
    C3780,
}
export enum RegistrationId {
    /* 0 (invalid, starts with a number) */
    AC_3,
    CUEI,
    DRAC,
    DTS1,
    DTS2,
    DTS3,
    BSSD,
    EAC3,
    ETV1,
    GA94,
    HDMV,
    KLVA,
    OPUS,
    TSHV,
    VC_1,
    AC_4,
    OTHER_HEVC,
}
export function descriptor_from_custom(tag: number, data: Uint8Array[]): Descriptor
export function descriptor_from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array[]): Descriptor
export function descriptor_from_dvb_network_name(name: string): Descriptor
export function descriptor_from_dvb_service(service_type: DVBServiceType, service_name?: string | null, service_provider?: string | null): Descriptor
export function descriptor_from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
export function descriptor_from_iso_639_language(language: string): Descriptor
export function descriptor_from_registration(format_identifier: string, additional_info: Uint8Array[] | null): Descriptor
export function descriptor_parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void
export function descriptor_parse_audio_preselection_free(source: AudioPreselectionDescriptor): void
export function dvb_component_descriptor_free(source: ComponentDescriptor): void
export function event_new_mpegts_section(section: Section): Gst.Event
export function event_parse_mpegts_section(event: Gst.Event): Section
export function find_descriptor(descriptors: Descriptor[], tag: number): Descriptor
export function find_descriptor_with_extension(descriptors: Descriptor[], tag: number, tag_extension: number): Descriptor
export function initialize(): void
export function message_new_mpegts_section(parent: Gst.Object, section: Section): Gst.Message
export function message_parse_mpegts_section(message: Gst.Message): Section
export function parse_descriptors(buffer: number, buf_len: number): Descriptor[]
export function pat_new(): PatProgram[]
export function scte_cancel_new(event_id: number): SCTESIT
export function scte_null_new(): SCTESIT
export function scte_splice_in_new(event_id: number, splice_time: Gst.ClockTime): SCTESIT
export function scte_splice_out_new(event_id: number, splice_time: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT
export function section_from_atsc_mgt(mgt: AtscMGT): Section
export function section_from_atsc_rrt(rrt: AtscRRT): Section
export function section_from_atsc_stt(stt: AtscSTT): Section
export function section_from_nit(nit: NIT): Section
export function section_from_pat(programs: PatProgram[], ts_id: number): Section
export function section_from_pmt(pmt: PMT, pid: number): Section
export function section_from_scte_sit(sit: SCTESIT, pid: number): Section
export function section_from_sdt(sdt: SDT): Section
export interface PacketizeFunc {
    (section: Section): boolean
}
export class AtscEIT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEIT */
    source_id: number
    protocol_version: number
    events: AtscEITEvent[]
    static name: string
}
export class AtscEITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEITEvent */
    event_id: number
    start_time: number
    etm_location: number
    length_in_seconds: number
    titles: AtscMultString[]
    descriptors: Descriptor[]
    static name: string
}
export class AtscETT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscETT */
    ett_table_id_extension: number
    protocol_version: number
    etm_id: number
    messages: AtscMultString[]
    static name: string
}
export class AtscMGT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMGT */
    protocol_version: number
    tables_defined: number
    tables: AtscMGTTable[]
    descriptors: Descriptor[]
    static name: string
    static new(): AtscMGT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscMGT
}
export class AtscMGTTable {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMGTTable */
    table_type: number
    pid: number
    version_number: number
    number_bytes: number
    descriptors: Descriptor[]
    static name: string
}
export class AtscMultString {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMultString */
    iso_639_langcode: number[]
    segments: AtscStringSegment[]
    static name: string
}
export class AtscRRT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRT */
    protocol_version: number
    names: AtscMultString[]
    dimensions_defined: number
    dimensions: AtscRRTDimension[]
    descriptors: object[]
    static name: string
    static new(): AtscRRT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRT
}
export class AtscRRTDimension {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRTDimension */
    names: AtscMultString[]
    graduated_scale: boolean
    values_defined: number
    values: AtscRRTDimensionValue[]
    static name: string
    static new(): AtscRRTDimension
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimension
}
export class AtscRRTDimensionValue {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRTDimensionValue */
    abbrev_ratings: AtscMultString[]
    ratings: AtscMultString[]
    static name: string
    static new(): AtscRRTDimensionValue
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimensionValue
}
export class AtscSTT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscSTT */
    protocol_version: number
    system_time: number
    gps_utc_offset: number
    ds_status: boolean
    ds_dayofmonth: number
    ds_hour: number
    descriptors: Descriptor[]
    utc_datetime: Gst.DateTime
    /* Methods of GstMpegts-1.0.GstMpegts.AtscSTT */
    get_datetime_utc(): Gst.DateTime
    static name: string
    static new(): AtscSTT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscSTT
}
export class AtscStringSegment {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    compression_type: number
    mode: number
    compressed_data_size: number
    compressed_data: number
    cached_string: string
    /* Methods of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    get_string(): string
    set_string(string: string, compression_type: number, mode: number): boolean
    static name: string
}
export class AtscVCT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCT */
    transport_stream_id: number
    protocol_version: number
    sources: AtscVCTSource[]
    descriptors: Descriptor[]
    static name: string
}
export class AtscVCTSource {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCTSource */
    short_name: string
    major_channel_number: number
    minor_channel_number: number
    modulation_mode: number
    carrier_frequency: number
    channel_TSID: number
    program_number: number
    ETM_location: number
    access_controlled: boolean
    hidden: boolean
    path_select: boolean
    out_of_band: boolean
    hide_guide: boolean
    service_type: number
    source_id: number
    descriptors: Descriptor[]
    static name: string
}
export class AudioPreselectionDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.AudioPreselectionDescriptor */
    preselection_id: number
    audio_rendering_indication: number
    audio_description: boolean
    spoken_subtitles: boolean
    dialogue_enhancement: boolean
    interactivity_enabled: boolean
    language_code_present: boolean
    text_label_present: boolean
    multi_stream_info_present: boolean
    future_extension: boolean
    language_code: string
    message_id: number
    static name: string
}
export class BAT {
    /* Fields of GstMpegts-1.0.GstMpegts.BAT */
    descriptors: Descriptor[]
    streams: BATStream[]
    static name: string
}
export class BATStream {
    /* Fields of GstMpegts-1.0.GstMpegts.BATStream */
    transport_stream_id: number
    original_network_id: number
    descriptors: object[]
    static name: string
}
export class CableDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    frequency: number
    outer_fec: CableOuterFECScheme
    modulation: ModulationType
    symbol_rate: number
    fec_inner: DVBCodeRate
    /* Methods of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    free(): void
    static name: string
}
export class ComponentDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ComponentDescriptor */
    stream_content: number
    component_type: number
    component_tag: number
    language_code: string
    text: string
    static name: string
}
export class Content {
    /* Fields of GstMpegts-1.0.GstMpegts.Content */
    content_nibble_1: ContentNibbleHi
    content_nibble_2: number
    user_byte: number
    static name: string
}
export class DVBLinkageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    transport_stream_id: number
    original_network_id: number
    service_id: number
    linkage_type: DVBLinkageType
    private_data_length: number
    private_data_bytes: number
    /* Methods of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    free(): void
    get_event(): DVBLinkageEvent
    get_extended_event(): DVBLinkageExtendedEvent[]
    get_mobile_hand_over(): DVBLinkageMobileHandOver
    static name: string
}
export class DVBLinkageEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageEvent */
    target_event_id: number
    target_listed: boolean
    event_simulcast: boolean
    static name: string
}
export class DVBLinkageExtendedEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageExtendedEvent */
    target_event_id: number
    target_listed: boolean
    event_simulcast: boolean
    link_type: number
    target_id_type: number
    original_network_id_flag: boolean
    service_id_flag: boolean
    user_defined_id: number
    target_transport_stream_id: number
    target_original_network_id: number
    target_service_id: number
    static name: string
}
export class DVBLinkageMobileHandOver {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageMobileHandOver */
    hand_over_type: DVBLinkageHandOverType
    origin_type: boolean
    network_id: number
    initial_service_id: number
    static name: string
}
export class DVBParentalRatingItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBParentalRatingItem */
    country_code: string
    rating: number
    static name: string
}
export class DVBServiceListItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBServiceListItem */
    service_id: number
    type: DVBServiceType
    static name: string
}
export class DataBroadcastDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    data_broadcast_id: number
    component_tag: number
    length: number
    selector_bytes: number
    language_code: string
    text: string
    /* Methods of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    free(): void
    static name: string
}
export class Descriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.Descriptor */
    tag: number
    tag_extension: number
    length: number
    data: number
    /* Methods of GstMpegts-1.0.GstMpegts.Descriptor */
    free(): void
    parse_audio_preselection_list(): [ /* returnType */ boolean, /* list */ AudioPreselectionDescriptor[] ]
    parse_ca(): [ /* returnType */ boolean, /* ca_system_id */ number, /* ca_pid */ number, /* private_data */ Uint8Array[] | null ]
    parse_cable_delivery_system(): [ /* returnType */ boolean, /* res */ CableDeliverySystemDescriptor ]
    parse_dvb_bouquet_name(): [ /* returnType */ boolean, /* bouquet_name */ string | null ]
    parse_dvb_ca_identifier(): [ /* returnType */ boolean, /* list */ number[] ]
    parse_dvb_component(): [ /* returnType */ boolean, /* res */ ComponentDescriptor ]
    parse_dvb_content(): [ /* returnType */ boolean, /* content */ Content[] ]
    parse_dvb_data_broadcast(): [ /* returnType */ boolean, /* res */ DataBroadcastDescriptor ]
    parse_dvb_data_broadcast_id(): [ /* returnType */ boolean, /* data_broadcast_id */ number, /* id_selector_bytes */ Uint8Array[] ]
    parse_dvb_extended_event(): [ /* returnType */ boolean, /* res */ ExtendedEventDescriptor ]
    parse_dvb_frequency_list(): [ /* returnType */ boolean, /* offset */ boolean, /* list */ number[] ]
    parse_dvb_linkage(): [ /* returnType */ boolean, /* res */ DVBLinkageDescriptor ]
    parse_dvb_multilingual_bouquet_name(): [ /* returnType */ boolean, /* bouquet_name_items */ DvbMultilingualBouquetNameItem[] ]
    parse_dvb_multilingual_component(): [ /* returnType */ boolean, /* component_tag */ number, /* component_description_items */ DvbMultilingualComponentItem[] ]
    parse_dvb_multilingual_network_name(): [ /* returnType */ boolean, /* network_name_items */ DvbMultilingualNetworkNameItem[] ]
    parse_dvb_multilingual_service_name(): [ /* returnType */ boolean, /* service_name_items */ DvbMultilingualServiceNameItem[] ]
    parse_dvb_network_name(): [ /* returnType */ boolean, /* name */ string ]
    parse_dvb_parental_rating(): [ /* returnType */ boolean, /* rating */ DVBParentalRatingItem[] ]
    parse_dvb_private_data_specifier(): [ /* returnType */ boolean, /* private_data_specifier */ number, /* private_data */ Uint8Array[] | null ]
    parse_dvb_scrambling(): [ /* returnType */ boolean, /* scrambling_mode */ DVBScramblingModeType ]
    parse_dvb_service(): [ /* returnType */ boolean, /* service_type */ DVBServiceType | null, /* service_name */ string | null, /* provider_name */ string | null ]
    parse_dvb_service_list(): [ /* returnType */ boolean, /* list */ DVBServiceListItem[] ]
    parse_dvb_short_event(): [ /* returnType */ boolean, /* language_code */ string | null, /* event_name */ string | null, /* text */ string | null ]
    parse_dvb_stream_identifier(): [ /* returnType */ boolean, /* component_tag */ number ]
    parse_dvb_stuffing(): [ /* returnType */ boolean, /* stuffing_bytes */ number ]
    parse_dvb_subtitling_idx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* type */ number | null, /* composition_page_id */ number | null, /* ancillary_page_id */ number | null ]
    parse_dvb_subtitling_nb(): number
    parse_dvb_t2_delivery_system(): [ /* returnType */ boolean, /* res */ T2DeliverySystemDescriptor ]
    parse_dvb_teletext_idx(idx: number): [ /* returnType */ boolean, /* language_code */ string | null, /* teletext_type */ DVBTeletextType | null, /* magazine_number */ number | null, /* page_number */ number | null ]
    parse_dvb_teletext_nb(): number
    parse_iso_639_language(): [ /* returnType */ boolean, /* res */ ISO639LanguageDescriptor ]
    parse_iso_639_language_idx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* audio_type */ Iso639AudioType | null ]
    parse_iso_639_language_nb(): number
    parse_logical_channel(): [ /* returnType */ boolean, /* res */ LogicalChannelDescriptor ]
    parse_registration(): [ /* returnType */ boolean, /* registration_id */ number, /* additional_info */ Uint8Array[] | null ]
    parse_satellite_delivery_system(): [ /* returnType */ boolean, /* res */ SatelliteDeliverySystemDescriptor ]
    parse_terrestrial_delivery_system(): [ /* returnType */ boolean, /* res */ TerrestrialDeliverySystemDescriptor ]
    static name: string
    /* Static methods and pseudo-constructors */
    static from_custom(tag: number, data: Uint8Array[]): Descriptor
    static from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array[]): Descriptor
    static from_dvb_network_name(name: string): Descriptor
    static from_dvb_service(service_type: DVBServiceType, service_name?: string | null, service_provider?: string | null): Descriptor
    static from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
    static from_iso_639_language(language: string): Descriptor
    static from_registration(format_identifier: string, additional_info: Uint8Array[] | null): Descriptor
    static parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void
    static parse_audio_preselection_free(source: AudioPreselectionDescriptor): void
}
export class DvbMultilingualBouquetNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualBouquetNameItem */
    language_code: string
    bouquet_name: string
    static name: string
}
export class DvbMultilingualComponentItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualComponentItem */
    language_code: string
    description: string
    static name: string
}
export class DvbMultilingualNetworkNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualNetworkNameItem */
    language_code: string
    network_name: string
    static name: string
}
export class DvbMultilingualServiceNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualServiceNameItem */
    language_code: string
    provider_name: string
    service_name: string
    static name: string
}
export class EIT {
    /* Fields of GstMpegts-1.0.GstMpegts.EIT */
    transport_stream_id: number
    original_network_id: number
    segment_last_section_number: number
    last_table_id: number
    actual_stream: boolean
    present_following: boolean
    events: EITEvent[]
    static name: string
}
export class EITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.EITEvent */
    event_id: number
    start_time: Gst.DateTime
    duration: number
    running_status: RunningStatus
    free_CA_mode: boolean
    descriptors: Descriptor[]
    static name: string
}
export class ExtendedEventDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    descriptor_number: number
    last_descriptor_number: number
    language_code: string
    items: ExtendedEventItem[]
    text: string
    /* Methods of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    free(): void
    static name: string
}
export class ExtendedEventItem {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventItem */
    item_description: string
    item: string
    static name: string
}
export class ISO639LanguageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    nb_language: number
    language: string[]
    audio_type: Iso639AudioType[]
    /* Methods of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    descriptor_free(): void
    static name: string
}
export class LogicalChannel {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannel */
    service_id: number
    visible_service: boolean
    logical_channel_number: number
    static name: string
}
export class LogicalChannelDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannelDescriptor */
    nb_channels: number
    channels: LogicalChannel[]
    static name: string
}
export class NIT {
    /* Fields of GstMpegts-1.0.GstMpegts.NIT */
    actual_network: boolean
    network_id: number
    descriptors: Descriptor[]
    streams: NITStream[]
    static name: string
    static new(): NIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NIT
}
export class NITStream {
    /* Fields of GstMpegts-1.0.GstMpegts.NITStream */
    transport_stream_id: number
    original_network_id: number
    descriptors: Descriptor[]
    static name: string
    static new(): NITStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NITStream
}
export class PMT {
    /* Fields of GstMpegts-1.0.GstMpegts.PMT */
    pcr_pid: number
    program_number: number
    descriptors: Descriptor[]
    streams: PMTStream[]
    static name: string
    static new(): PMT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PMT
}
export class PMTStream {
    /* Fields of GstMpegts-1.0.GstMpegts.PMTStream */
    stream_type: number
    pid: number
    descriptors: Descriptor[]
    static name: string
    static new(): PMTStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PMTStream
}
export class PatProgram {
    /* Fields of GstMpegts-1.0.GstMpegts.PatProgram */
    program_number: number
    network_or_program_map_PID: number
    static name: string
    static new(): PatProgram
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PatProgram
}
export class SCTESIT {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESIT */
    encrypted_packet: boolean
    encryption_algorithm: number
    pts_adjustment: number
    cw_index: number
    tier: number
    splice_command_length: number
    splice_command_type: SCTESpliceCommandType
    splice_time_specified: boolean
    splice_time: number
    splices: object[]
    descriptors: object[]
    fully_parsed: boolean
    is_running_time: boolean
    static name: string
    static new(): SCTESIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESIT
}
export class SCTESpliceComponent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceComponent */
    tag: number
    splice_time_specified: boolean
    splice_time: number
    utc_splice_time: number
    static name: string
    static new(tag: number): SCTESpliceComponent
    constructor(tag: number)
    /* Static methods and pseudo-constructors */
    static new(tag: number): SCTESpliceComponent
}
export class SCTESpliceEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceEvent */
    insert_event: boolean
    splice_event_id: number
    splice_event_cancel_indicator: boolean
    out_of_network_indicator: boolean
    program_splice_flag: boolean
    duration_flag: boolean
    splice_immediate_flag: boolean
    program_splice_time_specified: boolean
    program_splice_time: number
    utc_splice_time: number
    components: object[]
    break_duration_auto_return: boolean
    break_duration: number
    unique_program_id: number
    avail_num: number
    avails_expected: number
    static name: string
    static new(): SCTESpliceEvent
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESpliceEvent
}
export class SDT {
    /* Fields of GstMpegts-1.0.GstMpegts.SDT */
    original_network_id: number
    actual_ts: boolean
    transport_stream_id: number
    services: SDTService[]
    static name: string
    static new(): SDT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDT
}
export class SDTService {
    /* Fields of GstMpegts-1.0.GstMpegts.SDTService */
    service_id: number
    EIT_schedule_flag: boolean
    EIT_present_following_flag: boolean
    running_status: RunningStatus
    free_CA_mode: boolean
    descriptors: Descriptor[]
    static name: string
    static new(): SDTService
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDTService
}
export class SIT {
    /* Fields of GstMpegts-1.0.GstMpegts.SIT */
    descriptors: Descriptor[]
    services: SITService[]
    static name: string
}
export class SITService {
    /* Fields of GstMpegts-1.0.GstMpegts.SITService */
    service_id: number
    running_status: RunningStatus
    descriptors: Descriptor[]
    static name: string
}
export class SatelliteDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.SatelliteDeliverySystemDescriptor */
    frequency: number
    orbital_position: number
    west_east: boolean
    polarization: SatellitePolarizationType
    roll_off: SatelliteRolloff
    modulation_system: boolean
    modulation_type: ModulationType
    symbol_rate: number
    fec_inner: DVBCodeRate
    static name: string
}
export class Section {
    /* Fields of GstMpegts-1.0.GstMpegts.Section */
    section_type: SectionType
    pid: number
    table_id: number
    subtable_extension: number
    version_number: number
    current_next_indicator: boolean
    section_number: number
    last_section_number: number
    crc: number
    /* Methods of GstMpegts-1.0.GstMpegts.Section */
    get_atsc_cvct(): AtscVCT
    get_atsc_eit(): AtscEIT
    get_atsc_ett(): AtscETT
    get_atsc_mgt(): AtscMGT
    get_atsc_rrt(): AtscRRT
    get_atsc_stt(): AtscSTT
    get_atsc_tvct(): AtscVCT
    get_bat(): BAT
    get_cat(): Descriptor[]
    get_data(): GLib.Bytes
    get_eit(): EIT
    get_nit(): NIT
    get_pat(): PatProgram[]
    get_pmt(): PMT
    get_scte_sit(): SCTESIT
    get_sdt(): SDT
    get_sit(): SIT
    get_tdt(): Gst.DateTime
    get_tot(): TOT
    get_tsdt(): Descriptor[]
    packetize(): [ /* returnType */ number, /* output_size */ number ]
    send_event(element: Gst.Element): boolean
    static name: string
    static new(pid: number, data: Uint8Array[]): Section
    constructor(pid: number, data: Uint8Array[])
    /* Static methods and pseudo-constructors */
    static new(pid: number, data: Uint8Array[]): Section
    static from_atsc_mgt(mgt: AtscMGT): Section
    static from_atsc_rrt(rrt: AtscRRT): Section
    static from_atsc_stt(stt: AtscSTT): Section
    static from_nit(nit: NIT): Section
    static from_pat(programs: PatProgram[], ts_id: number): Section
    static from_pmt(pmt: PMT, pid: number): Section
    static from_scte_sit(sit: SCTESIT, pid: number): Section
    static from_sdt(sdt: SDT): Section
}
export class T2DeliverySystemCell {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCell */
    cell_id: number
    centre_frequencies: number[]
    sub_cells: T2DeliverySystemCellExtension[]
    static name: string
}
export class T2DeliverySystemCellExtension {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCellExtension */
    cell_id_extension: number
    transposer_frequency: number
    static name: string
}
export class T2DeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    plp_id: number
    t2_system_id: number
    siso_miso: number
    bandwidth: number
    guard_interval: TerrestrialGuardInterval
    transmission_mode: TerrestrialTransmissionMode
    other_frequency: boolean
    tfs: boolean
    cells: T2DeliverySystemCell[]
    /* Methods of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    free(): void
    static name: string
}
export class TOT {
    /* Fields of GstMpegts-1.0.GstMpegts.TOT */
    utc_time: Gst.DateTime
    descriptors: Descriptor[]
    static name: string
}
export class TerrestrialDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.TerrestrialDeliverySystemDescriptor */
    frequency: number
    bandwidth: number
    priority: boolean
    time_slicing: boolean
    mpe_fec: boolean
    constellation: ModulationType
    hierarchy: TerrestrialHierarchy
    code_rate_hp: DVBCodeRate
    code_rate_lp: DVBCodeRate
    guard_interval: TerrestrialGuardInterval
    transmission_mode: TerrestrialTransmissionMode
    other_frequency: boolean
    static name: string
}