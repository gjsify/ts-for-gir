/**
 * GstMpegts-1.0
 */

import "node"
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstMpegts {

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
export function descriptorFromCustom(tag: number, data: any): Descriptor
export function descriptorFromCustomWithExtension(tag: number, tagExtension: number, data: any): Descriptor
export function descriptorFromDvbNetworkName(name: string): Descriptor
export function descriptorFromDvbService(serviceType: DVBServiceType, serviceName?: string | null, serviceProvider?: string | null): Descriptor
export function descriptorFromDvbSubtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
export function descriptorFromIso639Language(language: string): Descriptor
export function descriptorFromRegistration(formatIdentifier: string, additionalInfo: any | null): Descriptor
export function descriptorParseAudioPreselectionDump(source: AudioPreselectionDescriptor): void
export function descriptorParseAudioPreselectionFree(source: AudioPreselectionDescriptor): void
export function dvbComponentDescriptorFree(source: ComponentDescriptor): void
export function eventParseMpegtsSection(event: Gst.Event): Section
export function findDescriptor(descriptors: Descriptor[], tag: number): Descriptor
export function findDescriptorWithExtension(descriptors: Descriptor[], tag: number, tagExtension: number): Descriptor
export function initialize(): void
export function messageNewMpegtsSection(parent: Gst.Object, section: Section): Gst.Message
export function messageParseMpegtsSection(message: Gst.Message): Section
export function parseDescriptors(buffer: number, bufLen: number): Descriptor[]
export function patNew(): PatProgram[]
export function scteCancelNew(eventId: number): SCTESIT
export function scteNullNew(): SCTESIT
export function scteSpliceInNew(eventId: number, spliceTime: number): SCTESIT
export function scteSpliceOutNew(eventId: number, spliceTime: number, duration: number): SCTESIT
export function sectionFromAtscMgt(mgt: AtscMGT): Section
export function sectionFromAtscRrt(rrt: AtscRRT): Section
export function sectionFromAtscStt(stt: AtscSTT): Section
export function sectionFromNit(nit: NIT): Section
export function sectionFromPat(programs: PatProgram[], tsId: number): Section
export function sectionFromPmt(pmt: PMT, pid: number): Section
export function sectionFromScteSit(sit: SCTESIT, pid: number): Section
export function sectionFromSdt(sdt: SDT): Section
export interface PacketizeFunc {
    (section: Section): boolean
}
export class AtscEIT {
    /* Fields of GstMpegts.AtscEIT */
    sourceId: number
    protocolVersion: number
    events: AtscEITEvent[]
    static name: string
}
export class AtscEITEvent {
    /* Fields of GstMpegts.AtscEITEvent */
    eventId: number
    startTime: number
    etmLocation: number
    lengthInSeconds: number
    titles: AtscMultString[]
    descriptors: Descriptor[]
    static name: string
}
export class AtscETT {
    /* Fields of GstMpegts.AtscETT */
    ettTableIdExtension: number
    protocolVersion: number
    etmId: number
    messages: AtscMultString[]
    static name: string
}
export class AtscMGT {
    /* Fields of GstMpegts.AtscMGT */
    protocolVersion: number
    tablesDefined: number
    tables: AtscMGTTable[]
    descriptors: Descriptor[]
    static name: string
    static new(): AtscMGT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscMGT
}
export class AtscMGTTable {
    /* Fields of GstMpegts.AtscMGTTable */
    tableType: number
    pid: number
    versionNumber: number
    numberBytes: number
    descriptors: Descriptor[]
    static name: string
}
export class AtscMultString {
    /* Fields of GstMpegts.AtscMultString */
    iso639Langcode: number[]
    segments: AtscStringSegment[]
    static name: string
}
export class AtscRRT {
    /* Fields of GstMpegts.AtscRRT */
    protocolVersion: number
    names: AtscMultString[]
    dimensionsDefined: number
    dimensions: AtscRRTDimension[]
    descriptors: object[]
    static name: string
    static new(): AtscRRT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRT
}
export class AtscRRTDimension {
    /* Fields of GstMpegts.AtscRRTDimension */
    names: AtscMultString[]
    graduatedScale: boolean
    valuesDefined: number
    values: AtscRRTDimensionValue[]
    static name: string
    static new(): AtscRRTDimension
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimension
}
export class AtscRRTDimensionValue {
    /* Fields of GstMpegts.AtscRRTDimensionValue */
    abbrevRatings: AtscMultString[]
    ratings: AtscMultString[]
    static name: string
    static new(): AtscRRTDimensionValue
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimensionValue
}
export class AtscSTT {
    /* Fields of GstMpegts.AtscSTT */
    protocolVersion: number
    systemTime: number
    gpsUtcOffset: number
    dsStatus: boolean
    dsDayofmonth: number
    dsHour: number
    descriptors: Descriptor[]
    utcDatetime: Gst.DateTime
    /* Methods of GstMpegts.AtscSTT */
    getDatetimeUtc(): Gst.DateTime
    static name: string
    static new(): AtscSTT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscSTT
}
export class AtscStringSegment {
    /* Fields of GstMpegts.AtscStringSegment */
    compressionType: number
    mode: number
    compressedDataSize: number
    compressedData: number
    cachedString: string
    /* Methods of GstMpegts.AtscStringSegment */
    getString(): string
    setString(string: string, compressionType: number, mode: number): boolean
    static name: string
}
export class AtscVCT {
    /* Fields of GstMpegts.AtscVCT */
    transportStreamId: number
    protocolVersion: number
    sources: AtscVCTSource[]
    descriptors: Descriptor[]
    static name: string
}
export class AtscVCTSource {
    /* Fields of GstMpegts.AtscVCTSource */
    shortName: string
    majorChannelNumber: number
    minorChannelNumber: number
    modulationMode: number
    carrierFrequency: number
    channelTSID: number
    programNumber: number
    eTMLocation: number
    accessControlled: boolean
    hidden: boolean
    pathSelect: boolean
    outOfBand: boolean
    hideGuide: boolean
    serviceType: number
    sourceId: number
    descriptors: Descriptor[]
    static name: string
}
export class AudioPreselectionDescriptor {
    /* Fields of GstMpegts.AudioPreselectionDescriptor */
    preselectionId: number
    audioRenderingIndication: number
    audioDescription: boolean
    spokenSubtitles: boolean
    dialogueEnhancement: boolean
    interactivityEnabled: boolean
    languageCodePresent: boolean
    textLabelPresent: boolean
    multiStreamInfoPresent: boolean
    futureExtension: boolean
    languageCode: string
    messageId: number
    static name: string
}
export class BAT {
    /* Fields of GstMpegts.BAT */
    descriptors: Descriptor[]
    streams: BATStream[]
    static name: string
}
export class BATStream {
    /* Fields of GstMpegts.BATStream */
    transportStreamId: number
    originalNetworkId: number
    descriptors: object[]
    static name: string
}
export class CableDeliverySystemDescriptor {
    /* Fields of GstMpegts.CableDeliverySystemDescriptor */
    frequency: number
    outerFec: CableOuterFECScheme
    modulation: ModulationType
    symbolRate: number
    fecInner: DVBCodeRate
    /* Methods of GstMpegts.CableDeliverySystemDescriptor */
    free(): void
    static name: string
}
export class ComponentDescriptor {
    /* Fields of GstMpegts.ComponentDescriptor */
    streamContent: number
    componentType: number
    componentTag: number
    languageCode: string
    text: string
    static name: string
}
export class Content {
    /* Fields of GstMpegts.Content */
    contentNibble1: ContentNibbleHi
    contentNibble2: number
    userByte: number
    static name: string
}
export class DVBLinkageDescriptor {
    /* Fields of GstMpegts.DVBLinkageDescriptor */
    transportStreamId: number
    originalNetworkId: number
    serviceId: number
    linkageType: DVBLinkageType
    privateDataLength: number
    privateDataBytes: number
    /* Methods of GstMpegts.DVBLinkageDescriptor */
    free(): void
    getEvent(): DVBLinkageEvent
    getExtendedEvent(): DVBLinkageExtendedEvent[]
    getMobileHandOver(): DVBLinkageMobileHandOver
    static name: string
}
export class DVBLinkageEvent {
    /* Fields of GstMpegts.DVBLinkageEvent */
    targetEventId: number
    targetListed: boolean
    eventSimulcast: boolean
    static name: string
}
export class DVBLinkageExtendedEvent {
    /* Fields of GstMpegts.DVBLinkageExtendedEvent */
    targetEventId: number
    targetListed: boolean
    eventSimulcast: boolean
    linkType: number
    targetIdType: number
    originalNetworkIdFlag: boolean
    serviceIdFlag: boolean
    userDefinedId: number
    targetTransportStreamId: number
    targetOriginalNetworkId: number
    targetServiceId: number
    static name: string
}
export class DVBLinkageMobileHandOver {
    /* Fields of GstMpegts.DVBLinkageMobileHandOver */
    handOverType: DVBLinkageHandOverType
    originType: boolean
    networkId: number
    initialServiceId: number
    static name: string
}
export class DVBParentalRatingItem {
    /* Fields of GstMpegts.DVBParentalRatingItem */
    countryCode: string
    rating: number
    static name: string
}
export class DVBServiceListItem {
    /* Fields of GstMpegts.DVBServiceListItem */
    serviceId: number
    type: DVBServiceType
    static name: string
}
export class DataBroadcastDescriptor {
    /* Fields of GstMpegts.DataBroadcastDescriptor */
    dataBroadcastId: number
    componentTag: number
    length: number
    selectorBytes: number
    languageCode: string
    text: string
    /* Methods of GstMpegts.DataBroadcastDescriptor */
    free(): void
    static name: string
}
export class Descriptor {
    /* Fields of GstMpegts.Descriptor */
    tag: number
    tagExtension: number
    length: number
    data: number
    /* Methods of GstMpegts.Descriptor */
    free(): void
    parseAudioPreselectionList(): [ /* returnType */ boolean, /* list */ AudioPreselectionDescriptor[] ]
    parseCa(): [ /* returnType */ boolean, /* caSystemId */ number, /* caPid */ number, /* privateData */ any | null ]
    parseCableDeliverySystem(): [ /* returnType */ boolean, /* res */ CableDeliverySystemDescriptor ]
    parseDvbBouquetName(): [ /* returnType */ boolean, /* bouquetName */ string | null ]
    parseDvbCaIdentifier(): [ /* returnType */ boolean, /* list */ number[] ]
    parseDvbComponent(): [ /* returnType */ boolean, /* res */ ComponentDescriptor ]
    parseDvbContent(): [ /* returnType */ boolean, /* content */ Content[] ]
    parseDvbDataBroadcast(): [ /* returnType */ boolean, /* res */ DataBroadcastDescriptor ]
    parseDvbDataBroadcastId(): [ /* returnType */ boolean, /* dataBroadcastId */ number, /* idSelectorBytes */ any ]
    parseDvbExtendedEvent(): [ /* returnType */ boolean, /* res */ ExtendedEventDescriptor ]
    parseDvbFrequencyList(): [ /* returnType */ boolean, /* offset */ boolean, /* list */ number[] ]
    parseDvbLinkage(): [ /* returnType */ boolean, /* res */ DVBLinkageDescriptor ]
    parseDvbMultilingualBouquetName(): [ /* returnType */ boolean, /* bouquetNameItems */ DvbMultilingualBouquetNameItem[] ]
    parseDvbMultilingualComponent(): [ /* returnType */ boolean, /* componentTag */ number, /* componentDescriptionItems */ DvbMultilingualComponentItem[] ]
    parseDvbMultilingualNetworkName(): [ /* returnType */ boolean, /* networkNameItems */ DvbMultilingualNetworkNameItem[] ]
    parseDvbMultilingualServiceName(): [ /* returnType */ boolean, /* serviceNameItems */ DvbMultilingualServiceNameItem[] ]
    parseDvbNetworkName(): [ /* returnType */ boolean, /* name */ string ]
    parseDvbParentalRating(): [ /* returnType */ boolean, /* rating */ DVBParentalRatingItem[] ]
    parseDvbPrivateDataSpecifier(): [ /* returnType */ boolean, /* privateDataSpecifier */ number, /* privateData */ any | null ]
    parseDvbScrambling(): [ /* returnType */ boolean, /* scramblingMode */ DVBScramblingModeType ]
    parseDvbService(): [ /* returnType */ boolean, /* serviceType */ DVBServiceType | null, /* serviceName */ string | null, /* providerName */ string | null ]
    parseDvbServiceList(): [ /* returnType */ boolean, /* list */ DVBServiceListItem[] ]
    parseDvbShortEvent(): [ /* returnType */ boolean, /* languageCode */ string | null, /* eventName */ string | null, /* text */ string | null ]
    parseDvbStreamIdentifier(): [ /* returnType */ boolean, /* componentTag */ number ]
    parseDvbStuffing(): [ /* returnType */ boolean, /* stuffingBytes */ number ]
    parseDvbSubtitlingIdx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* type */ number | null, /* compositionPageId */ number | null, /* ancillaryPageId */ number | null ]
    parseDvbSubtitlingNb(): number
    parseDvbT2DeliverySystem(): [ /* returnType */ boolean, /* res */ T2DeliverySystemDescriptor ]
    parseDvbTeletextIdx(idx: number): [ /* returnType */ boolean, /* languageCode */ string | null, /* teletextType */ DVBTeletextType | null, /* magazineNumber */ number | null, /* pageNumber */ number | null ]
    parseDvbTeletextNb(): number
    parseIso639Language(): [ /* returnType */ boolean, /* res */ ISO639LanguageDescriptor ]
    parseIso639LanguageIdx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* audioType */ Iso639AudioType | null ]
    parseIso639LanguageNb(): number
    parseLogicalChannel(): [ /* returnType */ boolean, /* res */ LogicalChannelDescriptor ]
    parseRegistration(): [ /* returnType */ boolean, /* registrationId */ number, /* additionalInfo */ any | null ]
    parseSatelliteDeliverySystem(): [ /* returnType */ boolean, /* res */ SatelliteDeliverySystemDescriptor ]
    parseTerrestrialDeliverySystem(): [ /* returnType */ boolean, /* res */ TerrestrialDeliverySystemDescriptor ]
    static name: string
    /* Static methods and pseudo-constructors */
    static fromCustom(tag: number, data: any): Descriptor
    static fromCustomWithExtension(tag: number, tagExtension: number, data: any): Descriptor
    static fromDvbNetworkName(name: string): Descriptor
    static fromDvbService(serviceType: DVBServiceType, serviceName?: string | null, serviceProvider?: string | null): Descriptor
    static fromDvbSubtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
    static fromIso639Language(language: string): Descriptor
    static fromRegistration(formatIdentifier: string, additionalInfo: any | null): Descriptor
    static parseAudioPreselectionDump(source: AudioPreselectionDescriptor): void
    static parseAudioPreselectionFree(source: AudioPreselectionDescriptor): void
}
export class DvbMultilingualBouquetNameItem {
    /* Fields of GstMpegts.DvbMultilingualBouquetNameItem */
    languageCode: string
    bouquetName: string
    static name: string
}
export class DvbMultilingualComponentItem {
    /* Fields of GstMpegts.DvbMultilingualComponentItem */
    languageCode: string
    description: string
    static name: string
}
export class DvbMultilingualNetworkNameItem {
    /* Fields of GstMpegts.DvbMultilingualNetworkNameItem */
    languageCode: string
    networkName: string
    static name: string
}
export class DvbMultilingualServiceNameItem {
    /* Fields of GstMpegts.DvbMultilingualServiceNameItem */
    languageCode: string
    providerName: string
    serviceName: string
    static name: string
}
export class EIT {
    /* Fields of GstMpegts.EIT */
    transportStreamId: number
    originalNetworkId: number
    segmentLastSectionNumber: number
    lastTableId: number
    actualStream: boolean
    presentFollowing: boolean
    events: EITEvent[]
    static name: string
}
export class EITEvent {
    /* Fields of GstMpegts.EITEvent */
    eventId: number
    startTime: Gst.DateTime
    duration: number
    runningStatus: RunningStatus
    freeCAMode: boolean
    descriptors: Descriptor[]
    static name: string
}
export class ExtendedEventDescriptor {
    /* Fields of GstMpegts.ExtendedEventDescriptor */
    descriptorNumber: number
    lastDescriptorNumber: number
    languageCode: string
    items: ExtendedEventItem[]
    text: string
    /* Methods of GstMpegts.ExtendedEventDescriptor */
    free(): void
    static name: string
}
export class ExtendedEventItem {
    /* Fields of GstMpegts.ExtendedEventItem */
    itemDescription: string
    item: string
    static name: string
}
export class ISO639LanguageDescriptor {
    /* Fields of GstMpegts.ISO639LanguageDescriptor */
    nbLanguage: number
    language: string[]
    audioType: Iso639AudioType[]
    /* Methods of GstMpegts.ISO639LanguageDescriptor */
    descriptorFree(): void
    static name: string
}
export class LogicalChannel {
    /* Fields of GstMpegts.LogicalChannel */
    serviceId: number
    visibleService: boolean
    logicalChannelNumber: number
    static name: string
}
export class LogicalChannelDescriptor {
    /* Fields of GstMpegts.LogicalChannelDescriptor */
    nbChannels: number
    channels: LogicalChannel[]
    static name: string
}
export class NIT {
    /* Fields of GstMpegts.NIT */
    actualNetwork: boolean
    networkId: number
    descriptors: Descriptor[]
    streams: NITStream[]
    static name: string
    static new(): NIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NIT
}
export class NITStream {
    /* Fields of GstMpegts.NITStream */
    transportStreamId: number
    originalNetworkId: number
    descriptors: Descriptor[]
    static name: string
    static new(): NITStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NITStream
}
export class PMT {
    /* Fields of GstMpegts.PMT */
    pcrPid: number
    programNumber: number
    descriptors: Descriptor[]
    streams: PMTStream[]
    static name: string
    static new(): PMT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PMT
}
export class PMTStream {
    /* Fields of GstMpegts.PMTStream */
    streamType: number
    pid: number
    descriptors: Descriptor[]
    static name: string
    static new(): PMTStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PMTStream
}
export class PatProgram {
    /* Fields of GstMpegts.PatProgram */
    programNumber: number
    networkOrProgramMapPID: number
    static name: string
    static new(): PatProgram
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PatProgram
}
export class SCTESIT {
    /* Fields of GstMpegts.SCTESIT */
    encryptedPacket: boolean
    encryptionAlgorithm: number
    ptsAdjustment: number
    cwIndex: number
    tier: number
    spliceCommandLength: number
    spliceCommandType: SCTESpliceCommandType
    spliceTimeSpecified: boolean
    spliceTime: number
    splices: object[]
    descriptors: object[]
    static name: string
    static new(): SCTESIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESIT
}
export class SCTESpliceEvent {
    /* Fields of GstMpegts.SCTESpliceEvent */
    insertEvent: boolean
    spliceEventId: number
    spliceEventCancelIndicator: boolean
    outOfNetworkIndicator: boolean
    programSpliceFlag: boolean
    durationFlag: boolean
    spliceImmediateFlag: boolean
    programSpliceTimeSpecified: boolean
    programSpliceTime: number
    breakDurationAutoReturn: boolean
    breakDuration: number
    uniqueProgramId: number
    availNum: number
    availsExpected: number
    static name: string
    static new(): SCTESpliceEvent
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESpliceEvent
}
export class SDT {
    /* Fields of GstMpegts.SDT */
    originalNetworkId: number
    actualTs: boolean
    transportStreamId: number
    services: SDTService[]
    static name: string
    static new(): SDT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDT
}
export class SDTService {
    /* Fields of GstMpegts.SDTService */
    serviceId: number
    eITScheduleFlag: boolean
    eITPresentFollowingFlag: boolean
    runningStatus: RunningStatus
    freeCAMode: boolean
    descriptors: Descriptor[]
    static name: string
    static new(): SDTService
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDTService
}
export class SIT {
    /* Fields of GstMpegts.SIT */
    descriptors: Descriptor[]
    services: SITService[]
    static name: string
}
export class SITService {
    /* Fields of GstMpegts.SITService */
    serviceId: number
    runningStatus: RunningStatus
    descriptors: Descriptor[]
    static name: string
}
export class SatelliteDeliverySystemDescriptor {
    /* Fields of GstMpegts.SatelliteDeliverySystemDescriptor */
    frequency: number
    orbitalPosition: number
    westEast: boolean
    polarization: SatellitePolarizationType
    rollOff: SatelliteRolloff
    modulationSystem: boolean
    modulationType: ModulationType
    symbolRate: number
    fecInner: DVBCodeRate
    static name: string
}
export class Section {
    /* Fields of GstMpegts.Section */
    sectionType: SectionType
    pid: number
    tableId: number
    subtableExtension: number
    versionNumber: number
    currentNextIndicator: boolean
    sectionNumber: number
    lastSectionNumber: number
    crc: number
    /* Methods of GstMpegts.Section */
    getAtscCvct(): AtscVCT
    getAtscEit(): AtscEIT
    getAtscEtt(): AtscETT
    getAtscMgt(): AtscMGT
    getAtscRrt(): AtscRRT
    getAtscStt(): AtscSTT
    getAtscTvct(): AtscVCT
    getBat(): BAT
    getCat(): Descriptor[]
    getData(): any
    getEit(): EIT
    getNit(): NIT
    getPat(): PatProgram[]
    getPmt(): PMT
    getScteSit(): SCTESIT
    getSdt(): SDT
    getSit(): SIT
    getTdt(): Gst.DateTime
    getTot(): TOT
    getTsdt(): Descriptor[]
    packetize(): [ /* returnType */ number, /* outputSize */ number ]
    sendEvent(element: Gst.Element): boolean
    static name: string
    static new(pid: number, data: any): Section
    constructor(pid: number, data: any)
    /* Static methods and pseudo-constructors */
    static new(pid: number, data: any): Section
    static fromAtscMgt(mgt: AtscMGT): Section
    static fromAtscRrt(rrt: AtscRRT): Section
    static fromAtscStt(stt: AtscSTT): Section
    static fromNit(nit: NIT): Section
    static fromPat(programs: PatProgram[], tsId: number): Section
    static fromPmt(pmt: PMT, pid: number): Section
    static fromScteSit(sit: SCTESIT, pid: number): Section
    static fromSdt(sdt: SDT): Section
}
export class T2DeliverySystemCell {
    /* Fields of GstMpegts.T2DeliverySystemCell */
    cellId: number
    centreFrequencies: number[]
    subCells: T2DeliverySystemCellExtension[]
    static name: string
}
export class T2DeliverySystemCellExtension {
    /* Fields of GstMpegts.T2DeliverySystemCellExtension */
    cellIdExtension: number
    transposerFrequency: number
    static name: string
}
export class T2DeliverySystemDescriptor {
    /* Fields of GstMpegts.T2DeliverySystemDescriptor */
    plpId: number
    t2SystemId: number
    sisoMiso: number
    bandwidth: number
    guardInterval: TerrestrialGuardInterval
    transmissionMode: TerrestrialTransmissionMode
    otherFrequency: boolean
    tfs: boolean
    cells: T2DeliverySystemCell[]
    /* Methods of GstMpegts.T2DeliverySystemDescriptor */
    free(): void
    static name: string
}
export class TOT {
    /* Fields of GstMpegts.TOT */
    utcTime: Gst.DateTime
    descriptors: Descriptor[]
    static name: string
}
export class TerrestrialDeliverySystemDescriptor {
    /* Fields of GstMpegts.TerrestrialDeliverySystemDescriptor */
    frequency: number
    bandwidth: number
    priority: boolean
    timeSlicing: boolean
    mpeFec: boolean
    constellation: ModulationType
    hierarchy: TerrestrialHierarchy
    codeRateHp: DVBCodeRate
    codeRateLp: DVBCodeRate
    guardInterval: TerrestrialGuardInterval
    transmissionMode: TerrestrialTransmissionMode
    otherFrequency: boolean
    static name: string
}
}