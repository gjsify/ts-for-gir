/**
 * Gst-1.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace Gst {

export enum BufferingMode {
    STREAM,
    DOWNLOAD,
    TIMESHIFT,
    LIVE,
}
export enum BusSyncReply {
    DROP,
    PASS,
    ASYNC,
}
export enum CapsIntersectMode {
    ZIG_ZAG,
    FIRST,
}
export enum ClockEntryType {
    SINGLE,
    PERIODIC,
}
export enum ClockReturn {
    OK,
    EARLY,
    UNSCHEDULED,
    BUSY,
    BADTIME,
    ERROR,
    UNSUPPORTED,
    DONE,
}
export enum ClockType {
    REALTIME,
    MONOTONIC,
    OTHER,
    TAI,
}
export enum CoreError {
    FAILED,
    TOO_LAZY,
    NOT_IMPLEMENTED,
    STATE_CHANGE,
    PAD,
    THREAD,
    NEGOTIATION,
    EVENT,
    SEEK,
    CAPS,
    TAG,
    MISSING_PLUGIN,
    CLOCK,
    DISABLED,
    NUM_ERRORS,
}
export enum DebugColorMode {
    OFF,
    ON,
    UNIX,
}
export enum DebugLevel {
    NONE,
    ERROR,
    WARNING,
    FIXME,
    INFO,
    DEBUG,
    LOG,
    TRACE,
    MEMDUMP,
    COUNT,
}
export enum EventType {
    UNKNOWN,
    FLUSH_START,
    FLUSH_STOP,
    STREAM_START,
    CAPS,
    SEGMENT,
    STREAM_COLLECTION,
    TAG,
    BUFFERSIZE,
    SINK_MESSAGE,
    STREAM_GROUP_DONE,
    EOS,
    TOC,
    PROTECTION,
    SEGMENT_DONE,
    GAP,
    INSTANT_RATE_CHANGE,
    QOS,
    SEEK,
    NAVIGATION,
    LATENCY,
    STEP,
    RECONFIGURE,
    TOC_SELECT,
    SELECT_STREAMS,
    INSTANT_RATE_SYNC_TIME,
    CUSTOM_UPSTREAM,
    CUSTOM_DOWNSTREAM,
    CUSTOM_DOWNSTREAM_OOB,
    CUSTOM_DOWNSTREAM_STICKY,
    CUSTOM_BOTH,
    CUSTOM_BOTH_OOB,
}
export enum FlowReturn {
    CUSTOM_SUCCESS_2,
    CUSTOM_SUCCESS_1,
    CUSTOM_SUCCESS,
    OK,
    NOT_LINKED,
    FLUSHING,
    EOS,
    NOT_NEGOTIATED,
    ERROR,
    NOT_SUPPORTED,
    CUSTOM_ERROR,
    CUSTOM_ERROR_1,
    CUSTOM_ERROR_2,
}
export enum Format {
    UNDEFINED,
    DEFAULT,
    BYTES,
    TIME,
    BUFFERS,
    PERCENT,
}
export enum IteratorItem {
    SKIP,
    PASS,
    END,
}
export enum IteratorResult {
    DONE,
    OK,
    RESYNC,
    ERROR,
}
export enum LibraryError {
    FAILED,
    TOO_LAZY,
    INIT,
    SHUTDOWN,
    SETTINGS,
    ENCODE,
    NUM_ERRORS,
}
export enum PadDirection {
    UNKNOWN,
    SRC,
    SINK,
}
export enum PadLinkReturn {
    OK,
    WRONG_HIERARCHY,
    WAS_LINKED,
    WRONG_DIRECTION,
    NOFORMAT,
    NOSCHED,
    REFUSED,
}
export enum PadMode {
    NONE,
    PUSH,
    PULL,
}
export enum PadPresence {
    ALWAYS,
    SOMETIMES,
    REQUEST,
}
export enum PadProbeReturn {
    DROP,
    OK,
    REMOVE,
    PASS,
    HANDLED,
}
export enum ParseError {
    SYNTAX,
    NO_SUCH_ELEMENT,
    NO_SUCH_PROPERTY,
    LINK,
    COULD_NOT_SET_PROPERTY,
    EMPTY_BIN,
    EMPTY,
    DELAYED_LINK,
}
export enum PluginError {
    MODULE,
    DEPENDENCIES,
    NAME_MISMATCH,
}
export enum ProgressType {
    START,
    CONTINUE,
    COMPLETE,
    CANCELED,
    ERROR,
}
export enum PromiseResult {
    PENDING,
    INTERRUPTED,
    REPLIED,
    EXPIRED,
}
export enum QOSType {
    OVERFLOW,
    UNDERFLOW,
    THROTTLE,
}
export enum QueryType {
    UNKNOWN,
    POSITION,
    DURATION,
    LATENCY,
    JITTER,
    RATE,
    SEEKING,
    SEGMENT,
    CONVERT,
    FORMATS,
    BUFFERING,
    CUSTOM,
    URI,
    ALLOCATION,
    SCHEDULING,
    ACCEPT_CAPS,
    CAPS,
    DRAIN,
    CONTEXT,
    BITRATE,
}
export enum Rank {
    NONE,
    MARGINAL,
    SECONDARY,
    PRIMARY,
}
export enum ResourceError {
    FAILED,
    TOO_LAZY,
    NOT_FOUND,
    BUSY,
    OPEN_READ,
    OPEN_WRITE,
    OPEN_READ_WRITE,
    CLOSE,
    READ,
    WRITE,
    SEEK,
    SYNC,
    SETTINGS,
    NO_SPACE_LEFT,
    NOT_AUTHORIZED,
    NUM_ERRORS,
}
export enum SearchMode {
    EXACT,
    BEFORE,
    AFTER,
}
export enum SeekType {
    NONE,
    SET,
    END,
}
export enum State {
    VOID_PENDING,
    NULL,
    READY,
    PAUSED,
    PLAYING,
}
export enum StateChange {
    NULL_TO_READY,
    READY_TO_PAUSED,
    PAUSED_TO_PLAYING,
    PLAYING_TO_PAUSED,
    PAUSED_TO_READY,
    READY_TO_NULL,
    NULL_TO_NULL,
    READY_TO_READY,
    PAUSED_TO_PAUSED,
    PLAYING_TO_PLAYING,
}
export enum StateChangeReturn {
    FAILURE,
    SUCCESS,
    ASYNC,
    NO_PREROLL,
}
export enum StreamError {
    FAILED,
    TOO_LAZY,
    NOT_IMPLEMENTED,
    TYPE_NOT_FOUND,
    WRONG_TYPE,
    CODEC_NOT_FOUND,
    DECODE,
    ENCODE,
    DEMUX,
    MUX,
    FORMAT,
    DECRYPT,
    DECRYPT_NOKEY,
    NUM_ERRORS,
}
export enum StreamStatusType {
    CREATE,
    ENTER,
    LEAVE,
    DESTROY,
    START,
    PAUSE,
    STOP,
}
export enum StructureChangeType {
    LINK,
    UNLINK,
}
export enum TagFlag {
    UNDEFINED,
    META,
    ENCODED,
    DECODED,
    COUNT,
}
export enum TagMergeMode {
    UNDEFINED,
    REPLACE_ALL,
    REPLACE,
    APPEND,
    PREPEND,
    KEEP,
    KEEP_ALL,
    COUNT,
}
export enum TagScope {
    STREAM,
    GLOBAL,
}
export enum TaskState {
    STARTED,
    STOPPED,
    PAUSED,
}
export enum TocEntryType {
    ANGLE,
    VERSION,
    EDITION,
    INVALID,
    TITLE,
    TRACK,
    CHAPTER,
}
export enum TocLoopType {
    NONE,
    FORWARD,
    REVERSE,
    PING_PONG,
}
export enum TocScope {
    GLOBAL,
    CURRENT,
}
export enum TracerValueScope {
    PROCESS,
    THREAD,
    ELEMENT,
    PAD,
}
export enum TypeFindProbability {
    NONE,
    MINIMUM,
    POSSIBLE,
    LIKELY,
    NEARLY_CERTAIN,
    MAXIMUM,
}
export enum URIError {
    UNSUPPORTED_PROTOCOL,
    BAD_URI,
    BAD_STATE,
    BAD_REFERENCE,
}
export enum URIType {
    UNKNOWN,
    SINK,
    SRC,
}
export enum AllocatorFlags {
    CUSTOM_ALLOC,
    LAST,
}
export enum BinFlags {
    NO_RESYNC,
    STREAMS_AWARE,
    LAST,
}
export enum BufferCopyFlags {
    NONE,
    FLAGS,
    TIMESTAMPS,
    META,
    MEMORY,
    MERGE,
    DEEP,
}
export enum BufferFlags {
    LIVE,
    DECODE_ONLY,
    DISCONT,
    RESYNC,
    CORRUPTED,
    MARKER,
    HEADER,
    GAP,
    DROPPABLE,
    DELTA_UNIT,
    TAG_MEMORY,
    SYNC_AFTER,
    NON_DROPPABLE,
    LAST,
}
export enum BufferPoolAcquireFlags {
    NONE,
    KEY_UNIT,
    DONTWAIT,
    DISCONT,
    LAST,
}
export enum BusFlags {
    FLUSHING,
    FLAG_LAST,
}
export enum CapsFlags {
    ANY,
}
export enum ClockFlags {
    CAN_DO_SINGLE_SYNC,
    CAN_DO_SINGLE_ASYNC,
    CAN_DO_PERIODIC_SYNC,
    CAN_DO_PERIODIC_ASYNC,
    CAN_SET_RESOLUTION,
    CAN_SET_MASTER,
    NEEDS_STARTUP_SYNC,
    LAST,
}
export enum DebugColorFlags {
    FG_BLACK,
    FG_RED,
    FG_GREEN,
    FG_YELLOW,
    FG_BLUE,
    FG_MAGENTA,
    FG_CYAN,
    FG_WHITE,
    BG_BLACK,
    BG_RED,
    BG_GREEN,
    BG_YELLOW,
    BG_BLUE,
    BG_MAGENTA,
    BG_CYAN,
    BG_WHITE,
    BOLD,
    UNDERLINE,
}
export enum DebugGraphDetails {
    MEDIA_TYPE,
    CAPS_DETAILS,
    NON_DEFAULT_PARAMS,
    STATES,
    FULL_PARAMS,
    ALL,
    VERBOSE,
}
export enum ElementFlags {
    LOCKED_STATE,
    SINK,
    SOURCE,
    PROVIDE_CLOCK,
    REQUIRE_CLOCK,
    INDEXABLE,
    LAST,
}
export enum EventTypeFlags {
    UPSTREAM,
    DOWNSTREAM,
    SERIALIZED,
    STICKY,
    STICKY_MULTI,
}
export enum GapFlags {
    DATA,
}
export enum LockFlags {
    READ,
    WRITE,
    EXCLUSIVE,
    LAST,
}
export enum MapFlags {
    READ,
    WRITE,
    FLAG_LAST,
}
export enum MemoryFlags {
    READONLY,
    NO_SHARE,
    ZERO_PREFIXED,
    ZERO_PADDED,
    PHYSICALLY_CONTIGUOUS,
    NOT_MAPPABLE,
    LAST,
}
export enum MessageType {
    UNKNOWN,
    EOS,
    ERROR,
    WARNING,
    INFO,
    TAG,
    BUFFERING,
    STATE_CHANGED,
    STATE_DIRTY,
    STEP_DONE,
    CLOCK_PROVIDE,
    CLOCK_LOST,
    NEW_CLOCK,
    STRUCTURE_CHANGE,
    STREAM_STATUS,
    APPLICATION,
    ELEMENT,
    SEGMENT_START,
    SEGMENT_DONE,
    DURATION_CHANGED,
    LATENCY,
    ASYNC_START,
    ASYNC_DONE,
    REQUEST_STATE,
    STEP_START,
    QOS,
    PROGRESS,
    TOC,
    RESET_TIME,
    STREAM_START,
    NEED_CONTEXT,
    HAVE_CONTEXT,
    EXTENDED,
    DEVICE_ADDED,
    DEVICE_REMOVED,
    PROPERTY_NOTIFY,
    STREAM_COLLECTION,
    STREAMS_SELECTED,
    REDIRECT,
    DEVICE_CHANGED,
    INSTANT_RATE_REQUEST,
    ANY,
}
export enum MetaFlags {
    NONE,
    READONLY,
    POOLED,
    LOCKED,
    LAST,
}
export enum MiniObjectFlags {
    LOCKABLE,
    LOCK_READONLY,
    MAY_BE_LEAKED,
    LAST,
}
export enum ObjectFlags {
    MAY_BE_LEAKED,
    LAST,
}
export enum PadFlags {
    BLOCKED,
    FLUSHING,
    EOS,
    BLOCKING,
    NEED_PARENT,
    NEED_RECONFIGURE,
    PENDING_EVENTS,
    FIXED_CAPS,
    PROXY_CAPS,
    PROXY_ALLOCATION,
    PROXY_SCHEDULING,
    ACCEPT_INTERSECT,
    ACCEPT_TEMPLATE,
    LAST,
}
export enum PadLinkCheck {
    NOTHING,
    HIERARCHY,
    TEMPLATE_CAPS,
    CAPS,
    NO_RECONFIGURE,
    DEFAULT,
}
export enum PadProbeType {
    INVALID,
    IDLE,
    BLOCK,
    BUFFER,
    BUFFER_LIST,
    EVENT_DOWNSTREAM,
    EVENT_UPSTREAM,
    EVENT_FLUSH,
    QUERY_DOWNSTREAM,
    QUERY_UPSTREAM,
    PUSH,
    PULL,
    BLOCKING,
    DATA_DOWNSTREAM,
    DATA_UPSTREAM,
    DATA_BOTH,
    BLOCK_DOWNSTREAM,
    BLOCK_UPSTREAM,
    EVENT_BOTH,
    QUERY_BOTH,
    ALL_BOTH,
    SCHEDULING,
}
export enum PadTemplateFlags {
    LAST,
}
export enum ParseFlags {
    NONE,
    FATAL_ERRORS,
    NO_SINGLE_ELEMENT_BINS,
    PLACE_IN_BIN,
}
export enum PipelineFlags {
    FIXED_CLOCK,
    LAST,
}
export enum PluginAPIFlags {
    MEMBERS,
}
export enum PluginDependencyFlags {
    NONE,
    RECURSE,
    PATHS_ARE_DEFAULT_ONLY,
    FILE_NAME_IS_SUFFIX,
    FILE_NAME_IS_PREFIX,
    PATHS_ARE_RELATIVE_TO_EXE,
}
export enum PluginFlags {
    CACHED,
    BLACKLISTED,
}
export enum QueryTypeFlags {
    UPSTREAM,
    DOWNSTREAM,
    SERIALIZED,
}
export enum SchedulingFlags {
    SEEKABLE,
    SEQUENTIAL,
    BANDWIDTH_LIMITED,
}
export enum SeekFlags {
    NONE,
    FLUSH,
    ACCURATE,
    KEY_UNIT,
    SEGMENT,
    TRICKMODE,
    SKIP,
    SNAP_BEFORE,
    SNAP_AFTER,
    SNAP_NEAREST,
    TRICKMODE_KEY_UNITS,
    TRICKMODE_NO_AUDIO,
    TRICKMODE_FORWARD_PREDICTED,
    INSTANT_RATE_CHANGE,
}
export enum SegmentFlags {
    NONE,
    RESET,
    TRICKMODE,
    SKIP,
    SEGMENT,
    TRICKMODE_KEY_UNITS,
    TRICKMODE_FORWARD_PREDICTED,
    TRICKMODE_NO_AUDIO,
}
export enum SerializeFlags {
    NONE,
    BACKWARD_COMPAT,
}
export enum StackTraceFlags {
    NONE,
    FULL,
}
export enum StreamFlags {
    NONE,
    SPARSE,
    SELECT,
    UNSELECT,
}
export enum StreamType {
    UNKNOWN,
    AUDIO,
    VIDEO,
    CONTAINER,
    TEXT,
}
export enum TracerValueFlags {
    NONE,
    OPTIONAL,
    AGGREGATED,
}
export const ALLOCATOR_SYSMEM: string
export const BUFFER_COPY_ALL: BufferCopyFlags
export const BUFFER_COPY_METADATA: BufferCopyFlags
export const BUFFER_OFFSET_NONE: number
export const CAN_INLINE: number
export const CAPS_FEATURE_MEMORY_SYSTEM_MEMORY: string
export const CLOCK_TIME_NONE: ClockTime
export const DEBUG_BG_MASK: number
export const DEBUG_FG_MASK: number
export const DEBUG_FORMAT_MASK: number
export const ELEMENT_FACTORY_KLASS_DECODER: string
export const ELEMENT_FACTORY_KLASS_DECRYPTOR: string
export const ELEMENT_FACTORY_KLASS_DEMUXER: string
export const ELEMENT_FACTORY_KLASS_DEPAYLOADER: string
export const ELEMENT_FACTORY_KLASS_ENCODER: string
export const ELEMENT_FACTORY_KLASS_ENCRYPTOR: string
export const ELEMENT_FACTORY_KLASS_FORMATTER: string
export const ELEMENT_FACTORY_KLASS_HARDWARE: string
export const ELEMENT_FACTORY_KLASS_MEDIA_AUDIO: string
export const ELEMENT_FACTORY_KLASS_MEDIA_IMAGE: string
export const ELEMENT_FACTORY_KLASS_MEDIA_METADATA: string
export const ELEMENT_FACTORY_KLASS_MEDIA_SUBTITLE: string
export const ELEMENT_FACTORY_KLASS_MEDIA_VIDEO: string
export const ELEMENT_FACTORY_KLASS_MUXER: string
export const ELEMENT_FACTORY_KLASS_PARSER: string
export const ELEMENT_FACTORY_KLASS_PAYLOADER: string
export const ELEMENT_FACTORY_KLASS_SINK: string
export const ELEMENT_FACTORY_KLASS_SRC: string
export const ELEMENT_FACTORY_TYPE_ANY: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_AUDIOVIDEO_SINKS: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_AUDIO_ENCODER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_DECODABLE: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_DECODER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_DECRYPTOR: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_DEMUXER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_DEPAYLOADER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_ENCODER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_ENCRYPTOR: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_FORMATTER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_HARDWARE: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_MAX_ELEMENTS: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_MEDIA_ANY: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_MEDIA_AUDIO: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_MEDIA_IMAGE: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_MEDIA_METADATA: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_MEDIA_SUBTITLE: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_MEDIA_VIDEO: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_MUXER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_PARSER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_PAYLOADER: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_SINK: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_SRC: ElementFactoryListType
export const ELEMENT_FACTORY_TYPE_VIDEO_ENCODER: ElementFactoryListType
export const ELEMENT_METADATA_AUTHOR: string
export const ELEMENT_METADATA_DESCRIPTION: string
export const ELEMENT_METADATA_DOC_URI: string
export const ELEMENT_METADATA_ICON_NAME: string
export const ELEMENT_METADATA_KLASS: string
export const ELEMENT_METADATA_LONGNAME: string
export const EVENT_NUM_SHIFT: number
export const EVENT_TYPE_BOTH: EventTypeFlags
export const FLAG_SET_MASK_EXACT: number
export const FORMAT_PERCENT_MAX: number
export const FORMAT_PERCENT_SCALE: number
export const GROUP_ID_INVALID: number
export const LICENSE_UNKNOWN: string
export const LOCK_FLAG_READWRITE: LockFlags
export const MAP_READWRITE: MapFlags
export const META_TAG_MEMORY_STR: string
export const MSECOND: ClockTimeDiff
export const NSECOND: ClockTimeDiff
export const PARAM_CONDITIONALLY_AVAILABLE: number
export const PARAM_CONTROLLABLE: number
export const PARAM_DOC_SHOW_DEFAULT: number
export const PARAM_MUTABLE_PAUSED: number
export const PARAM_MUTABLE_PLAYING: number
export const PARAM_MUTABLE_READY: number
export const PARAM_USER_SHIFT: number
export const PROTECTION_SYSTEM_ID_CAPS_FIELD: string
export const PROTECTION_UNSPECIFIED_SYSTEM_ID: string
export const QUERY_NUM_SHIFT: number
export const QUERY_TYPE_BOTH: QueryTypeFlags
export const SECOND: ClockTimeDiff
export const SEGMENT_INSTANT_FLAGS: number
export const SEQNUM_INVALID: number
export const TAG_ALBUM: string
export const TAG_ALBUM_ARTIST: string
export const TAG_ALBUM_ARTIST_SORTNAME: string
export const TAG_ALBUM_GAIN: string
export const TAG_ALBUM_PEAK: string
export const TAG_ALBUM_SORTNAME: string
export const TAG_ALBUM_VOLUME_COUNT: string
export const TAG_ALBUM_VOLUME_NUMBER: string
export const TAG_APPLICATION_DATA: string
export const TAG_APPLICATION_NAME: string
export const TAG_ARTIST: string
export const TAG_ARTIST_SORTNAME: string
export const TAG_ATTACHMENT: string
export const TAG_AUDIO_CODEC: string
export const TAG_BEATS_PER_MINUTE: string
export const TAG_BITRATE: string
export const TAG_CODEC: string
export const TAG_COMMENT: string
export const TAG_COMPOSER: string
export const TAG_COMPOSER_SORTNAME: string
export const TAG_CONDUCTOR: string
export const TAG_CONTACT: string
export const TAG_CONTAINER_FORMAT: string
export const TAG_COPYRIGHT: string
export const TAG_COPYRIGHT_URI: string
export const TAG_DATE: string
export const TAG_DATE_TIME: string
export const TAG_DESCRIPTION: string
export const TAG_DEVICE_MANUFACTURER: string
export const TAG_DEVICE_MODEL: string
export const TAG_DURATION: string
export const TAG_ENCODED_BY: string
export const TAG_ENCODER: string
export const TAG_ENCODER_VERSION: string
export const TAG_EXTENDED_COMMENT: string
export const TAG_GENRE: string
export const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string
export const TAG_GEO_LOCATION_CITY: string
export const TAG_GEO_LOCATION_COUNTRY: string
export const TAG_GEO_LOCATION_ELEVATION: string
export const TAG_GEO_LOCATION_HORIZONTAL_ERROR: string
export const TAG_GEO_LOCATION_LATITUDE: string
export const TAG_GEO_LOCATION_LONGITUDE: string
export const TAG_GEO_LOCATION_MOVEMENT_DIRECTION: string
export const TAG_GEO_LOCATION_MOVEMENT_SPEED: string
export const TAG_GEO_LOCATION_NAME: string
export const TAG_GEO_LOCATION_SUBLOCATION: string
export const TAG_GROUPING: string
export const TAG_HOMEPAGE: string
export const TAG_IMAGE: string
export const TAG_IMAGE_ORIENTATION: string
export const TAG_INTERPRETED_BY: string
export const TAG_ISRC: string
export const TAG_KEYWORDS: string
export const TAG_LANGUAGE_CODE: string
export const TAG_LANGUAGE_NAME: string
export const TAG_LICENSE: string
export const TAG_LICENSE_URI: string
export const TAG_LOCATION: string
export const TAG_LYRICS: string
export const TAG_MAXIMUM_BITRATE: string
export const TAG_MIDI_BASE_NOTE: string
export const TAG_MINIMUM_BITRATE: string
export const TAG_NOMINAL_BITRATE: string
export const TAG_ORGANIZATION: string
export const TAG_PERFORMER: string
export const TAG_PREVIEW_IMAGE: string
export const TAG_PRIVATE_DATA: string
export const TAG_PUBLISHER: string
export const TAG_REFERENCE_LEVEL: string
export const TAG_SERIAL: string
export const TAG_SHOW_EPISODE_NUMBER: string
export const TAG_SHOW_NAME: string
export const TAG_SHOW_SEASON_NUMBER: string
export const TAG_SHOW_SORTNAME: string
export const TAG_SUBTITLE_CODEC: string
export const TAG_TITLE: string
export const TAG_TITLE_SORTNAME: string
export const TAG_TRACK_COUNT: string
export const TAG_TRACK_GAIN: string
export const TAG_TRACK_NUMBER: string
export const TAG_TRACK_PEAK: string
export const TAG_USER_RATING: string
export const TAG_VERSION: string
export const TAG_VIDEO_CODEC: string
export const TOC_REPEAT_COUNT_INFINITE: number
export const URI_NO_PORT: number
export const USECOND: ClockTimeDiff
export const VALUE_EQUAL: number
export const VALUE_GREATER_THAN: number
export const VALUE_LESS_THAN: number
export const VALUE_UNORDERED: number
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_NANO: number
export function bufferGetMaxMemory(): number
export function capsFeaturesFromString(features: string): CapsFeatures | null
export function capsFromString(string: string): Caps | null
export function coreErrorQuark(): GLib.Quark
export function debugAddLogFunction(func: LogFunction): void
export function debugAddRingBufferLogger(maxSizePerThread: number, threadTimeout: number): void
export function debugBinToDotData(bin: Bin, details: DebugGraphDetails): string
export function debugBinToDotFile(bin: Bin, details: DebugGraphDetails, fileName: string): void
export function debugBinToDotFileWithTs(bin: Bin, details: DebugGraphDetails, fileName: string): void
export function debugConstructTermColor(colorinfo: number): string
export function debugConstructWinColor(colorinfo: number): number
export function debugGetAllCategories(): DebugCategory[]
export function debugGetColorMode(): DebugColorMode
export function debugGetDefaultThreshold(): DebugLevel
export function debugGetStackTrace(flags: StackTraceFlags): string | null
export function debugIsActive(): boolean
export function debugIsColored(): boolean
export function debugLevelGetName(level: DebugLevel): string
export function debugLogDefault(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message: DebugMessage, userData?: object | null): void
export function debugLogGetLine(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message: DebugMessage): string
export function debugPrintStackTrace(): void
export function debugRemoveLogFunction(func?: LogFunction | null): number
export function debugRemoveLogFunctionByData(data?: object | null): number
export function debugRemoveRingBufferLogger(): void
export function debugRingBufferLoggerGetLogs(): string[]
export function debugSetActive(active: boolean): void
export function debugSetColorMode(mode: DebugColorMode): void
export function debugSetColorModeFromString(mode: string): void
export function debugSetColored(colored: boolean): void
export function debugSetDefaultThreshold(level: DebugLevel): void
export function debugSetThresholdForName(name: string, level: DebugLevel): void
export function debugSetThresholdFromString(list: string, reset: boolean): void
export function debugUnsetThresholdForName(name: string): void
export function deinit(): void
export function dynamicTypeRegister(plugin: Plugin, type: GObject.Type): boolean
export function errorGetMessage(domain: GLib.Quark, code: number): string
export function eventTypeGetFlags(type: EventType): EventTypeFlags
export function eventTypeGetName(type: EventType): string
export function eventTypeToQuark(type: EventType): GLib.Quark
export function filenameToUri(filename: string): string
export function flowGetName(ret: FlowReturn): string
export function flowToQuark(ret: FlowReturn): GLib.Quark
export function formatGetByNick(nick: string): Format
export function formatGetDetails(format: Format): FormatDefinition | null
export function formatGetName(format: Format): string | null
export function formatIterateDefinitions(): Iterator
export function formatRegister(nick: string, description: string): Format
export function formatToQuark(format: Format): GLib.Quark
export function formatsContains(formats: Format[], format: Format): boolean
export function getMainExecutablePath(): string | null
export function init(argv?: string[] | null): /* argv */ string[] | null
export function initCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
export function isCapsFeatures(obj?: object | null): boolean
export function isInitialized(): boolean
export function libraryErrorQuark(): GLib.Quark
export function messageTypeGetName(type: MessageType): string
export function messageTypeToQuark(type: MessageType): GLib.Quark
export function metaApiTypeGetTags(api: GObject.Type): string[]
export function metaApiTypeHasTag(api: GObject.Type, tag: GLib.Quark): boolean
export function metaApiTypeRegister(api: string, tags: string[]): GObject.Type
export function metaGetInfo(impl: string): MetaInfo | null
export function metaRegister(api: GObject.Type, impl: string, size: number, initFunc: MetaInitFunction, freeFunc: MetaFreeFunction, transformFunc: MetaTransformFunction): MetaInfo
export function metaRegisterCustom(name: string, tags: string[], transformFunc: CustomMetaTransformFunction | null): MetaInfo
export function miniObjectReplace(olddata?: MiniObject | null, newdata?: MiniObject | null): [ /* returnType */ boolean, /* olddata */ MiniObject | null ]
export function miniObjectTake(olddata: MiniObject, newdata: MiniObject): [ /* returnType */ boolean, /* olddata */ MiniObject ]
export function padModeGetName(mode: PadMode): string
export function paramSpecArray(name: string, nick: string, blurb: string, elementSpec: GObject.ParamSpec, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecFraction(name: string, nick: string, blurb: string, minNum: number, minDenom: number, maxNum: number, maxDenom: number, defaultNum: number, defaultDenom: number, flags: GObject.ParamFlags): GObject.ParamSpec | null
export function parentBufferMetaApiGetType(): GObject.Type
export function parentBufferMetaGetInfo(): MetaInfo
export function parseBinFromDescription(binDescription: string, ghostUnlinkedPads: boolean): Bin
export function parseBinFromDescriptionFull(binDescription: string, ghostUnlinkedPads: boolean, context: ParseContext | null, flags: ParseFlags): Element
export function parseErrorQuark(): GLib.Quark
export function parseLaunch(pipelineDescription: string): Element
export function parseLaunchFull(pipelineDescription: string, context: ParseContext | null, flags: ParseFlags): Element
export function parseLaunchv(argv: string[]): Element
export function parseLaunchvFull(argv: string[], context: ParseContext | null, flags: ParseFlags): Element
export function pluginErrorQuark(): GLib.Quark
export function presetGetAppDir(): string | null
export function presetSetAppDir(appDir: string): boolean
export function protectionFilterSystemsByAvailableDecryptors(systemIdentifiers: string[]): string[] | null
export function protectionMetaApiGetType(): GObject.Type
export function protectionMetaGetInfo(): MetaInfo
export function protectionSelectSystem(systemIdentifiers: string[]): string | null
export function queryTypeGetFlags(type: QueryType): QueryTypeFlags
export function queryTypeGetName(type: QueryType): string
export function queryTypeToQuark(type: QueryType): GLib.Quark
export function referenceTimestampMetaApiGetType(): GObject.Type
export function referenceTimestampMetaGetInfo(): MetaInfo
export function resourceErrorQuark(): GLib.Quark
export function segtrapIsEnabled(): boolean
export function segtrapSetEnabled(enabled: boolean): void
export function stateChangeGetName(transition: StateChange): string
export function staticCapsGetType(): GObject.Type
export function staticPadTemplateGetType(): GObject.Type
export function streamErrorQuark(): GLib.Quark
export function streamTypeGetName(stype: StreamType): string
export function structureTake(oldstrPtr?: Structure | null, newstr?: Structure | null): [ /* returnType */ boolean, /* oldstrPtr */ Structure | null ]
export function tagExists(tag: string): boolean
export function tagGetDescription(tag: string): string | null
export function tagGetFlag(tag: string): TagFlag
export function tagGetNick(tag: string): string | null
export function tagGetType(tag: string): GObject.Type
export function tagIsFixed(tag: string): boolean
export function tagListCopyValue(list: TagList, tag: string): [ /* returnType */ boolean, /* dest */ any ]
export function tagMergeStringsWithComma(src: any): /* dest */ any
export function tagMergeUseFirst(src: any): /* dest */ any
export function tocEntryTypeGetNick(type: TocEntryType): string
export function tracingGetActiveTracers(): Tracer[]
export function tracingRegisterHook(tracer: Tracer, detail: string, func: GObject.Callback): void
export function typeFindGetType(): GObject.Type
export function typeFindRegister(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possibleCaps: Caps | null): boolean
export function typeIsPluginApi(type: GObject.Type): [ /* returnType */ boolean, /* flags */ PluginAPIFlags | null ]
export function typeMarkAsPluginApi(type: GObject.Type, flags: PluginAPIFlags): void
export function updateRegistry(): boolean
export function uriConstruct(protocol: string, location: string): string
export function uriErrorQuark(): GLib.Quark
export function uriFromString(uri: string): Uri | null
export function uriFromStringEscaped(uri: string): Uri | null
export function uriGetLocation(uri: string): string | null
export function uriGetProtocol(uri: string): string | null
export function uriHasProtocol(uri: string, protocol: string): boolean
export function uriIsValid(uri: string): boolean
export function uriJoinStrings(baseUri: string, refUri: string): string
export function uriProtocolIsSupported(type: URIType, protocol: string): boolean
export function uriProtocolIsValid(protocol: string): boolean
export function utilArrayBinarySearch(array: object | null, numElements: number, elementSize: number, searchFunc: GLib.CompareDataFunc, mode: SearchMode, searchData?: object | null): object | null
export function utilDoubleToFraction(src: number): [ /* destN */ number, /* destD */ number ]
export function utilDumpBuffer(buf: Buffer): void
export function utilDumpMem(mem: any): void
export function utilFractionAdd(aN: number, aD: number, bN: number, bD: number): [ /* returnType */ boolean, /* resN */ number, /* resD */ number ]
export function utilFractionCompare(aN: number, aD: number, bN: number, bD: number): number
export function utilFractionMultiply(aN: number, aD: number, bN: number, bD: number): [ /* returnType */ boolean, /* resN */ number, /* resD */ number ]
export function utilFractionToDouble(srcN: number, srcD: number): /* dest */ number
export function utilGdoubleToGuint64(value: number): number
export function utilGetObjectArray(object: GObject.Object, name: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
export function utilGetTimestamp(): ClockTime
export function utilGreatestCommonDivisor(a: number, b: number): number
export function utilGreatestCommonDivisorInt64(a: number, b: number): number
export function utilGroupIdNext(): number
export function utilGuint64ToGdouble(value: number): number
export function utilSeqnumCompare(s1: number, s2: number): number
export function utilSeqnumNext(): number
export function utilSetObjectArg(object: GObject.Object, name: string, value: string): void
export function utilSetObjectArray(object: GObject.Object, name: string, array: GObject.ValueArray): boolean
export function utilSetValueFromString(valueStr: string): /* value */ any
export function utilUint64Scale(val: number, num: number, denom: number): number
export function utilUint64ScaleCeil(val: number, num: number, denom: number): number
export function utilUint64ScaleInt(val: number, num: number, denom: number): number
export function utilUint64ScaleIntCeil(val: number, num: number, denom: number): number
export function utilUint64ScaleIntRound(val: number, num: number, denom: number): number
export function utilUint64ScaleRound(val: number, num: number, denom: number): number
export function valueCanCompare(value1: any, value2: any): boolean
export function valueCanIntersect(value1: any, value2: any): boolean
export function valueCanSubtract(minuend: any, subtrahend: any): boolean
export function valueCanUnion(value1: any, value2: any): boolean
export function valueCompare(value1: any, value2: any): number
export function valueDeserialize(src: string): [ /* returnType */ boolean, /* dest */ any ]
export function valueDeserializeWithPspec(src: string, pspec?: GObject.ParamSpec | null): [ /* returnType */ boolean, /* dest */ any ]
export function valueFixate(dest: any, src: any): boolean
export function valueFractionMultiply(product: any, factor1: any, factor2: any): boolean
export function valueFractionSubtract(dest: any, minuend: any, subtrahend: any): boolean
export function valueGetBitmask(value: any): number
export function valueGetCaps(value: any): Caps
export function valueGetCapsFeatures(value: any): CapsFeatures
export function valueGetDoubleRangeMax(value: any): number
export function valueGetDoubleRangeMin(value: any): number
export function valueGetFlagsetFlags(value: any): number
export function valueGetFlagsetMask(value: any): number
export function valueGetFractionDenominator(value: any): number
export function valueGetFractionNumerator(value: any): number
export function valueGetFractionRangeMax(value: any): any
export function valueGetFractionRangeMin(value: any): any
export function valueGetInt64RangeMax(value: any): number
export function valueGetInt64RangeMin(value: any): number
export function valueGetInt64RangeStep(value: any): number
export function valueGetIntRangeMax(value: any): number
export function valueGetIntRangeMin(value: any): number
export function valueGetIntRangeStep(value: any): number
export function valueGetStructure(value: any): Structure
export function valueInitAndCopy(src: any): /* dest */ any
export function valueIntersect(value1: any, value2: any): [ /* returnType */ boolean, /* dest */ any ]
export function valueIsFixed(value: any): boolean
export function valueIsSubset(value1: any, value2: any): boolean
export function valueRegister(table: ValueTable): void
export function valueSerialize(value: any): string | null
export function valueSetBitmask(value: any, bitmask: number): void
export function valueSetCaps(value: any, caps: Caps): void
export function valueSetCapsFeatures(value: any, features: CapsFeatures): void
export function valueSetDoubleRange(value: any, start: number, end: number): void
export function valueSetFlagset(value: any, flags: number, mask: number): void
export function valueSetFraction(value: any, numerator: number, denominator: number): void
export function valueSetFractionRange(value: any, start: any, end: any): void
export function valueSetFractionRangeFull(value: any, numeratorStart: number, denominatorStart: number, numeratorEnd: number, denominatorEnd: number): void
export function valueSetInt64Range(value: any, start: number, end: number): void
export function valueSetInt64RangeStep(value: any, start: number, end: number, step: number): void
export function valueSetIntRange(value: any, start: number, end: number): void
export function valueSetIntRangeStep(value: any, start: number, end: number, step: number): void
export function valueSetStructure(value: any, structure: Structure): void
export function valueSubtract(minuend: any, subtrahend: any): [ /* returnType */ boolean, /* dest */ any ]
export function valueUnion(value1: any, value2: any): [ /* returnType */ boolean, /* dest */ any ]
export function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
export function versionString(): string
export interface BufferForeachMetaFunc {
    (buffer: Buffer): boolean
}
export interface BufferListFunc {
    (idx: number): boolean
}
export interface BusFunc {
    (bus: Bus, message: Message): boolean
}
export interface BusSyncHandler {
    (bus: Bus, message: Message): BusSyncReply
}
export interface CapsFilterMapFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
export interface CapsForeachFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
export interface CapsMapFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
export interface ClockCallback {
    (clock: Clock, time: ClockTime, id: ClockID): boolean
}
export interface ControlBindingConvert {
    (binding: ControlBinding, srcValue: number, destValue: any): void
}
export interface ControlSourceGetValue {
    (self: ControlSource, timestamp: ClockTime, value: number): boolean
}
export interface ControlSourceGetValueArray {
    (self: ControlSource, timestamp: ClockTime, interval: ClockTime, nValues: number, values: number): boolean
}
export interface CustomMetaTransformFunction {
    (transbuf: Buffer, meta: CustomMeta, buffer: Buffer, type: GLib.Quark, data?: object | null): boolean
}
export interface DebugFuncPtr {
    (): void
}
export interface ElementCallAsyncFunc {
    (element: Element): void
}
export interface ElementForeachPadFunc {
    (element: Element, pad: Pad): boolean
}
export interface IteratorCopyFunction {
    (it: Iterator, copy: Iterator): void
}
export interface IteratorFoldFunction {
    (item: any, ret: any): boolean
}
export interface IteratorForeachFunction {
    (item: any): void
}
export interface IteratorFreeFunction {
    (it: Iterator): void
}
export interface IteratorItemFunction {
    (it: Iterator, item: any): IteratorItem
}
export interface IteratorNextFunction {
    (it: Iterator, result: any): IteratorResult
}
export interface IteratorResyncFunction {
    (it: Iterator): void
}
export interface LogFunction {
    (category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object, message: DebugMessage): void
}
export interface MemoryCopyFunction {
    (mem: Memory, offset: number, size: number): Memory
}
export interface MemoryIsSpanFunction {
    (mem1: Memory, mem2: Memory, offset: number): boolean
}
export interface MemoryMapFullFunction {
    (mem: Memory, info: MapInfo, maxsize: number): object | null
}
export interface MemoryMapFunction {
    (mem: Memory, maxsize: number, flags: MapFlags): object | null
}
export interface MemoryShareFunction {
    (mem: Memory, offset: number, size: number): Memory
}
export interface MemoryUnmapFullFunction {
    (mem: Memory, info: MapInfo): void
}
export interface MemoryUnmapFunction {
    (mem: Memory): void
}
export interface MetaFreeFunction {
    (meta: Meta, buffer: Buffer): void
}
export interface MetaInitFunction {
    (meta: Meta, params: object | null, buffer: Buffer): boolean
}
export interface MetaTransformFunction {
    (transbuf: Buffer, meta: Meta, buffer: Buffer, type: GLib.Quark, data?: object | null): boolean
}
export interface MiniObjectDisposeFunction {
    (obj: MiniObject): boolean
}
export interface MiniObjectFreeFunction {
    (obj: MiniObject): void
}
export interface MiniObjectNotify {
    (obj: MiniObject): void
}
export interface PadActivateFunction {
    (pad: Pad, parent: Object): boolean
}
export interface PadActivateModeFunction {
    (pad: Pad, parent: Object, mode: PadMode, active: boolean): boolean
}
export interface PadChainFunction {
    (pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn
}
export interface PadChainListFunction {
    (pad: Pad, parent: Object | null, list: BufferList): FlowReturn
}
export interface PadEventFullFunction {
    (pad: Pad, parent: Object | null, event: Event): FlowReturn
}
export interface PadEventFunction {
    (pad: Pad, parent: Object | null, event: Event): boolean
}
export interface PadForwardFunction {
    (pad: Pad): boolean
}
export interface PadGetRangeFunction {
    (pad: Pad, parent: Object | null, offset: number, length: number, buffer: Buffer): FlowReturn
}
export interface PadIterIntLinkFunction {
    (pad: Pad, parent?: Object | null): Iterator
}
export interface PadLinkFunction {
    (pad: Pad, parent: Object | null, peer: Pad): PadLinkReturn
}
export interface PadProbeCallback {
    (pad: Pad, info: PadProbeInfo): PadProbeReturn
}
export interface PadQueryFunction {
    (pad: Pad, parent: Object | null, query: Query): boolean
}
export interface PadStickyEventsForeachFunction {
    (pad: Pad, event?: Event | null): boolean
}
export interface PadUnlinkFunction {
    (pad: Pad, parent?: Object | null): void
}
export interface PluginFeatureFilter {
    (feature: PluginFeature): boolean
}
export interface PluginFilter {
    (plugin: Plugin): boolean
}
export interface PluginInitFullFunc {
    (plugin: Plugin): boolean
}
export interface PluginInitFunc {
    (plugin: Plugin): boolean
}
export interface PromiseChangeFunc {
    (promise: Promise): void
}
export interface StructureFilterMapFunc {
    (fieldId: GLib.Quark, value: any): boolean
}
export interface StructureForeachFunc {
    (fieldId: GLib.Quark, value: any): boolean
}
export interface StructureMapFunc {
    (fieldId: GLib.Quark, value: any): boolean
}
export interface TagForeachFunc {
    (list: TagList, tag: string): void
}
export interface TagMergeFunc {
    (dest: any, src: any): void
}
export interface TaskFunction {
    (): void
}
export interface TaskPoolFunction {
    (): void
}
export interface TaskThreadFunc {
    (task: Task, thread: GLib.Thread): void
}
export interface TypeFindFunction {
    (find: TypeFind): void
}
export interface ValueCompareFunc {
    (value1: any, value2: any): number
}
export interface ValueDeserializeFunc {
    (dest: any, s: string): boolean
}
export interface ValueDeserializeWithPSpecFunc {
    (dest: any, s: string, pspec: GObject.ParamSpec): boolean
}
export interface ValueSerializeFunc {
    (value1: any): string
}
export class ChildProxy {
    /* Methods of Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Virtual methods of Gst.ChildProxy */
    vfuncChildAdded(child: GObject.Object, name: string): void
    vfuncChildRemoved(child: GObject.Object, name: string): void
    vfuncGetChildByIndex(index: number): GObject.Object | null
    vfuncGetChildByName(name: string): GObject.Object | null
    vfuncGetChildrenCount(): number
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Preset {
    /* Methods of Gst.Preset */
    deletePreset(name: string): boolean
    getMeta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    getPresetNames(): string[]
    getPropertyNames(): string[]
    isEditable(): boolean
    loadPreset(name: string): boolean
    renamePreset(oldName: string, newName: string): boolean
    savePreset(name: string): boolean
    setMeta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of Gst.Preset */
    vfuncDeletePreset(name: string): boolean
    vfuncGetMeta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    vfuncGetPresetNames(): string[]
    vfuncGetPropertyNames(): string[]
    vfuncLoadPreset(name: string): boolean
    vfuncRenamePreset(oldName: string, newName: string): boolean
    vfuncSavePreset(name: string): boolean
    vfuncSetMeta(name: string, tag: string, value?: string | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getAppDir(): string | null
    static setAppDir(appDir: string): boolean
}
export interface TagSetter_ConstructProps extends Element_ConstructProps {
}
export class TagSetter {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Element */
    object: Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: State
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    startTime: ClockTime
    numpads: number
    pads: Pad[]
    numsrcpads: number
    srcpads: Pad[]
    numsinkpads: number
    sinkpads: Pad[]
    padsCookie: number
    contexts: Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.TagSetter */
    addTagValue(mode: TagMergeMode, tag: string, value: any): void
    getTagList(): TagList | null
    getTagMergeMode(): TagMergeMode
    mergeTags(list: TagList, mode: TagMergeMode): void
    resetTags(): void
    setTagMergeMode(mode: TagMergeMode): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: StateChange): StateChangeReturn
    vfuncGetState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Pad): void
    vfuncPadRemoved(pad: Pad): void
    vfuncPostMessage(message: Message): boolean
    vfuncProvideClock(): Clock | null
    vfuncQuery(query: Query): boolean
    vfuncReleasePad(pad: Pad): void
    vfuncRequestNewPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfuncSendEvent(event: Event): boolean
    vfuncSetBus(bus?: Bus | null): void
    vfuncSetClock(clock?: Clock | null): boolean
    vfuncSetContext(context: Context): void
    vfuncSetState(state: State): StateChangeReturn
    vfuncStateChanged(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: TagSetter, newPad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: TagSetter, newPad: Pad) => void)): number
    emit(sigName: "pad-added", newPad: Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: TagSetter, oldPad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: TagSetter, oldPad: Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TagSetter, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TagSetter, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TagSetter_ConstructProps)
    _init (config?: TagSetter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TocSetter_ConstructProps extends Element_ConstructProps {
}
export class TocSetter {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Element */
    object: Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: State
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    startTime: ClockTime
    numpads: number
    pads: Pad[]
    numsrcpads: number
    srcpads: Pad[]
    numsinkpads: number
    sinkpads: Pad[]
    padsCookie: number
    contexts: Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.TocSetter */
    getToc(): Toc | null
    reset(): void
    setToc(toc?: Toc | null): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: StateChange): StateChangeReturn
    vfuncGetState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Pad): void
    vfuncPadRemoved(pad: Pad): void
    vfuncPostMessage(message: Message): boolean
    vfuncProvideClock(): Clock | null
    vfuncQuery(query: Query): boolean
    vfuncReleasePad(pad: Pad): void
    vfuncRequestNewPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfuncSendEvent(event: Event): boolean
    vfuncSetBus(bus?: Bus | null): void
    vfuncSetClock(clock?: Clock | null): boolean
    vfuncSetContext(context: Context): void
    vfuncSetState(state: State): StateChangeReturn
    vfuncStateChanged(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TocSetter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: TocSetter) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: TocSetter, newPad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: TocSetter, newPad: Pad) => void)): number
    emit(sigName: "pad-added", newPad: Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: TocSetter, oldPad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: TocSetter, oldPad: Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TocSetter, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TocSetter, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TocSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TocSetter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TocSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TocSetter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TocSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TocSetter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TocSetter_ConstructProps)
    _init (config?: TocSetter_ConstructProps): void
    static $gtype: GObject.Type
}
export class URIHandler {
    /* Methods of Gst.URIHandler */
    getProtocols(): string[] | null
    getUri(): string | null
    getUriType(): URIType
    setUri(uri: string): boolean
    /* Virtual methods of Gst.URIHandler */
    vfuncGetUri(): string | null
    vfuncSetUri(uri: string): boolean
    static name: string
}

export interface Allocator_ConstructProps {}
export interface BufferPool_ConstructProps {}
export interface Element_ConstructProps {}
export interface ControlSource_ConstructProps {}
export interface Clock_ConstructProps {}
export interface Pad_ConstructProps {}
export interface ControlBinding_ConstructProps {}
export interface Object_ConstructProps {}
export interface Allocator_ConstructProps extends Object_ConstructProps {
}
export class Allocator {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Allocator */
    object: Object
    memType: string
    memMap: MemoryMapFunction
    memUnmap: MemoryUnmapFunction
    memCopy: MemoryCopyFunction
    memShare: MemoryShareFunction
    memIsSpan: MemoryIsSpanFunction
    memMapFull: MemoryMapFullFunction
    memUnmapFull: MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: AllocationParams | null): Memory | null
    free(memory: Memory): void
    setDefault(): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Allocator */
    vfuncAlloc(size: number, params?: AllocationParams | null): Memory | null
    vfuncFree(memory: Memory): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Allocator, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Allocator, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Allocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Allocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Allocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Allocator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Allocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Allocator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Allocator_ConstructProps)
    _init (config?: Allocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name?: string | null): Allocator | null
    static register(name: string, allocator: Allocator): void
    static $gtype: GObject.Type
}
export interface Bin_ConstructProps extends Element_ConstructProps {
    asyncHandling?: boolean
    messageForward?: boolean
}
export class Bin {
    /* Properties of Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Bin */
    element: Element
    numchildren: number
    children: Element[]
    childrenCookie: number
    childBus: Bus
    messages: Message[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Clock
    clockProvider: Element
    /* Fields of Gst.Element */
    object: Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: State
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    startTime: ClockTime
    numpads: number
    pads: Pad[]
    numsrcpads: number
    srcpads: Pad[]
    numsinkpads: number
    sinkpads: Pad[]
    padsCookie: number
    contexts: Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Bin */
    add(element: Element): boolean
    findUnlinkedPad(direction: PadDirection): Pad | null
    getByInterface(iface: GObject.Type): Element | null
    getByName(name: string): Element | null
    getByNameRecurseUp(name: string): Element | null
    getSuppressedFlags(): ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Iterator | null
    iterateAllByInterface(iface: GObject.Type): Iterator | null
    iterateElements(): Iterator | null
    iterateRecurse(): Iterator | null
    iterateSinks(): Iterator | null
    iterateSorted(): Iterator | null
    iterateSources(): Iterator | null
    recalculateLatency(): boolean
    remove(element: Element): boolean
    setSuppressedFlags(flags: ElementFlags): void
    syncChildrenStates(): boolean
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Virtual methods of Gst.Bin */
    vfuncAddElement(element: Element): boolean
    vfuncDeepElementAdded(subBin: Bin, child: Element): void
    vfuncDeepElementRemoved(subBin: Bin, child: Element): void
    vfuncDoLatency(): boolean
    vfuncElementAdded(child: Element): void
    vfuncElementRemoved(child: Element): void
    vfuncHandleMessage(message: Message): void
    vfuncRemoveElement(element: Element): boolean
    vfuncChildAdded(child: GObject.Object, name: string): void
    vfuncChildRemoved(child: GObject.Object, name: string): void
    vfuncGetChildByIndex(index: number): GObject.Object | null
    vfuncGetChildByName(name: string): GObject.Object | null
    vfuncGetChildrenCount(): number
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: StateChange): StateChangeReturn
    vfuncGetState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Pad): void
    vfuncPadRemoved(pad: Pad): void
    vfuncPostMessage(message: Message): boolean
    vfuncProvideClock(): Clock | null
    vfuncQuery(query: Query): boolean
    vfuncReleasePad(pad: Pad): void
    vfuncRequestNewPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfuncSendEvent(event: Event): boolean
    vfuncSetBus(bus?: Bus | null): void
    vfuncSetClock(clock?: Clock | null): boolean
    vfuncSetContext(context: Context): void
    vfuncSetState(state: State): StateChangeReturn
    vfuncStateChanged(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Bin, subBin: Bin, element: Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Bin, subBin: Bin, element: Element) => void)): number
    emit(sigName: "deep-element-added", subBin: Bin, element: Element): void
    on(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deep-element-removed", callback: (($obj: Bin, subBin: Bin, element: Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Bin, subBin: Bin, element: Element) => void)): number
    emit(sigName: "deep-element-removed", subBin: Bin, element: Element): void
    on(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "do-latency", callback: (($obj: Bin) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Bin) => boolean)): number
    emit(sigName: "do-latency"): void
    on(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "element-added", callback: (($obj: Bin, element: Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Bin, element: Element) => void)): number
    emit(sigName: "element-added", element: Element): void
    on(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "element-removed", callback: (($obj: Bin, element: Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Bin, element: Element) => void)): number
    emit(sigName: "element-removed", element: Element): void
    on(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: Bin, newPad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Bin, newPad: Pad) => void)): number
    emit(sigName: "pad-added", newPad: Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: Bin, oldPad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Bin, oldPad: Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bin, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Bin, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Bin, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Bin, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: Bin, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Bin, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Bin_ConstructProps)
    _init (config?: Bin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): Bin
    static $gtype: GObject.Type
}
export class Bitmask {
    static name: string
}
export interface BufferPool_ConstructProps extends Object_ConstructProps {
}
export class BufferPool {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.BufferPool */
    object: Object
    flushing: number
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.BufferPool */
    acquireBuffer(params?: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    getConfig(): Structure
    getOptions(): string[]
    hasOption(option: string): boolean
    isActive(): boolean
    releaseBuffer(buffer: Buffer): void
    setActive(active: boolean): boolean
    setConfig(config: Structure): boolean
    setFlushing(flushing: boolean): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.BufferPool */
    vfuncAcquireBuffer(params?: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    vfuncAllocBuffer(params?: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    vfuncFlushStart(): void
    vfuncFlushStop(): void
    vfuncFreeBuffer(buffer: Buffer): void
    vfuncGetOptions(): string[]
    vfuncReleaseBuffer(buffer: Buffer): void
    vfuncResetBuffer(buffer: Buffer): void
    vfuncSetConfig(config: Structure): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BufferPool, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BufferPool, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BufferPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: BufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BufferPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BufferPool_ConstructProps)
    _init (config?: BufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BufferPool
    static configAddOption(config: Structure, option: string): void
    static configGetAllocator(config: Structure): [ /* returnType */ boolean, /* allocator */ Allocator | null, /* params */ AllocationParams | null ]
    static configGetOption(config: Structure, index: number): string | null
    static configGetParams(config: Structure): [ /* returnType */ boolean, /* caps */ Caps | null, /* size */ number | null, /* minBuffers */ number | null, /* maxBuffers */ number | null ]
    static configHasOption(config: Structure, option: string): boolean
    static configNOptions(config: Structure): number
    static configSetAllocator(config: Structure, allocator?: Allocator | null, params?: AllocationParams | null): void
    static configSetParams(config: Structure, caps: Caps | null, size: number, minBuffers: number, maxBuffers: number): void
    static configValidateParams(config: Structure, caps: Caps | null, size: number, minBuffers: number, maxBuffers: number): boolean
    static $gtype: GObject.Type
}
export interface Bus_ConstructProps extends Object_ConstructProps {
    enableAsync?: boolean
}
export class Bus {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Bus */
    object: Object
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Bus */
    addSignalWatch(): void
    addSignalWatchFull(priority: number): void
    addWatch(priority: number, func: BusFunc): number
    asyncSignalFunc(message: Message, data?: object | null): boolean
    createWatch(): GLib.Source | null
    disableSyncMessageEmission(): void
    enableSyncMessageEmission(): void
    getPollfd(): /* fd */ GLib.PollFD
    havePending(): boolean
    peek(): Message | null
    poll(events: MessageType, timeout: ClockTime): Message | null
    pop(): Message | null
    popFiltered(types: MessageType): Message | null
    post(message: Message): boolean
    removeSignalWatch(): void
    removeWatch(): boolean
    setFlushing(flushing: boolean): void
    setSyncHandler(func: BusSyncHandler | null): void
    syncSignalHandler(message: Message, data?: object | null): BusSyncReply
    timedPop(timeout: ClockTime): Message | null
    timedPopFiltered(timeout: ClockTime, types: MessageType): Message | null
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Bus */
    vfuncMessage(message: Message): void
    vfuncSyncMessage(message: Message): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Bus */
    connect(sigName: "message", callback: (($obj: Bus, message: Message) => void)): number
    connect_after(sigName: "message", callback: (($obj: Bus, message: Message) => void)): number
    emit(sigName: "message", message: Message): void
    on(sigName: "message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sync-message", callback: (($obj: Bus, message: Message) => void)): number
    connect_after(sigName: "sync-message", callback: (($obj: Bus, message: Message) => void)): number
    emit(sigName: "sync-message", message: Message): void
    on(sigName: "sync-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sync-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sync-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bus, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Bus, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Bus_ConstructProps)
    _init (config?: Bus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Bus
    static $gtype: GObject.Type
}
export interface Clock_ConstructProps extends Object_ConstructProps {
    timeout?: number
    windowSize?: number
    windowThreshold?: number
}
export class Clock {
    /* Properties of Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Clock */
    object: Object
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Clock */
    addObservation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number ]
    addObservationUnapplied(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number, /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rateNum */ ClockTime | null, /* rateDenom */ ClockTime | null ]
    adjustUnlocked(internal: ClockTime): ClockTime
    adjustWithCalibration(internalTarget: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    getCalibration(): [ /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rateNum */ ClockTime | null, /* rateDenom */ ClockTime | null ]
    getInternalTime(): ClockTime
    getMaster(): Clock | null
    getResolution(): ClockTime
    getTime(): ClockTime
    getTimeout(): ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID
    newSingleShotId(time: ClockTime): ClockID
    periodicIdReinit(id: ClockID, startTime: ClockTime, interval: ClockTime): boolean
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master?: Clock | null): boolean
    setResolution(resolution: ClockTime): ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: ClockTime): void
    singleShotIdReinit(id: ClockID, time: ClockTime): boolean
    unadjustUnlocked(external: ClockTime): ClockTime
    unadjustWithCalibration(externalTarget: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    waitForSync(timeout: ClockTime): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Clock */
    vfuncChangeResolution(oldResolution: ClockTime, newResolution: ClockTime): ClockTime
    vfuncGetInternalTime(): ClockTime
    vfuncGetResolution(): ClockTime
    vfuncUnschedule(entry: ClockEntry): void
    vfuncWait(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn
    vfuncWaitAsync(entry: ClockEntry): ClockReturn
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Clock */
    connect(sigName: "synced", callback: (($obj: Clock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: Clock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    on(sigName: "synced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "synced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "synced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Clock, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Clock, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Clock_ConstructProps)
    _init (config?: Clock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static idCompareFunc(id1?: object | null, id2?: object | null): number
    static idGetClock(id: ClockID): Clock | null
    static idGetTime(id: ClockID): ClockTime
    static idRef(id: ClockID): ClockID
    static idUnref(id: ClockID): void
    static idUnschedule(id: ClockID): void
    static idUsesClock(id: ClockID, clock: Clock): boolean
    static idWait(id: ClockID): [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff | null ]
    static idWaitAsync(id: ClockID, func: ClockCallback): ClockReturn
    static $gtype: GObject.Type
}
export interface ControlBinding_ConstructProps extends Object_ConstructProps {
    name?: string
    object?: Object
}
export class ControlBinding {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.ControlBinding */
    pspec: GObject.ParamSpec
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.ControlBinding */
    getGValueArray(timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getValue(timestamp: ClockTime): any
    isDisabled(): boolean
    setDisabled(disabled: boolean): void
    syncValues(object: Object, timestamp: ClockTime, lastSync: ClockTime): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.ControlBinding */
    vfuncGetGValueArray(timestamp: ClockTime, interval: ClockTime, values: any): boolean
    vfuncGetValue(timestamp: ClockTime): any
    vfuncSyncValues(object: Object, timestamp: ClockTime, lastSync: ClockTime): boolean
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ControlBinding, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ControlBinding, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ControlBinding_ConstructProps)
    _init (config?: ControlBinding_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ControlSource_ConstructProps extends Object_ConstructProps {
}
export class ControlSource {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.ControlSource */
    getValue: ControlSourceGetValue
    getValueArray: ControlSourceGetValueArray
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.ControlSource */
    controlSourceGetValue(timestamp: ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: ClockTime, interval: ClockTime, values: number[]): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ControlSource, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ControlSource, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ControlSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ControlSource_ConstructProps)
    _init (config?: ControlSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends Object_ConstructProps {
    caps?: Caps
    deviceClass?: string
    displayName?: string
    properties?: Structure
}
export class Device {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Device */
    createElement(name?: string | null): Element | null
    getCaps(): Caps | null
    getDeviceClass(): string
    getDisplayName(): string
    getProperties(): Structure | null
    hasClasses(classes: string): boolean
    hasClassesv(classes: string[]): boolean
    reconfigureElement(element: Element): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Device */
    vfuncCreateElement(name?: string | null): Element | null
    vfuncReconfigureElement(element: Element): boolean
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Device */
    connect(sigName: "removed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Device) => void)): number
    emit(sigName: "removed"): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Device, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Device, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface DeviceMonitor_ConstructProps extends Object_ConstructProps {
    showAll?: boolean
}
export class DeviceMonitor {
    /* Properties of Gst.DeviceMonitor */
    showAll: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.DeviceMonitor */
    addFilter(classes?: string | null, caps?: Caps | null): number
    getBus(): Bus
    getDevices(): Device[] | null
    getProviders(): string[]
    getShowAllDevices(): boolean
    removeFilter(filterId: number): boolean
    setShowAllDevices(showAll: boolean): void
    start(): boolean
    stop(): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DeviceMonitor, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DeviceMonitor, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-all", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceMonitor_ConstructProps)
    _init (config?: DeviceMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceMonitor
    static $gtype: GObject.Type
}
export interface DeviceProvider_ConstructProps extends Object_ConstructProps {
}
export class DeviceProvider {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.DeviceProvider */
    devices: object[]
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.DeviceProvider */
    canMonitor(): boolean
    deviceAdd(device: Device): void
    deviceChanged(device: Device, changedDevice: Device): void
    deviceRemove(device: Device): void
    getBus(): Bus
    getDevices(): Device[]
    getFactory(): DeviceProviderFactory | null
    getHiddenProviders(): string[]
    getMetadata(key: string): string
    hideProvider(name: string): void
    isStarted(): boolean
    start(): boolean
    stop(): void
    unhideProvider(name: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.DeviceProvider */
    vfuncStart(): boolean
    vfuncStop(): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.DeviceProvider */
    connect(sigName: "provider-hidden", callback: (($obj: DeviceProvider, object: string) => void)): number
    connect_after(sigName: "provider-hidden", callback: (($obj: DeviceProvider, object: string) => void)): number
    emit(sigName: "provider-hidden", object: string): void
    on(sigName: "provider-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "provider-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "provider-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "provider-unhidden", callback: (($obj: DeviceProvider, object: string) => void)): number
    connect_after(sigName: "provider-unhidden", callback: (($obj: DeviceProvider, object: string) => void)): number
    emit(sigName: "provider-unhidden", object: string): void
    on(sigName: "provider-unhidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "provider-unhidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "provider-unhidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DeviceProvider, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DeviceProvider, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DeviceProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DeviceProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DeviceProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DeviceProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceProvider_ConstructProps)
    _init (config?: DeviceProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.Type): boolean
    static addMetadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static addStaticMetadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static getMetadata(klass: DeviceProvider | Function | GObject.Type, key: string): string | null
    static setMetadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static setStaticMetadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static $gtype: GObject.Type
}
export interface DeviceProviderFactory_ConstructProps extends PluginFeature_ConstructProps {
}
export class DeviceProviderFactory {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.DeviceProviderFactory */
    get(): DeviceProvider | null
    getDeviceProviderType(): GObject.Type
    getMetadata(key: string): string | null
    getMetadataKeys(): string[] | null
    hasClasses(classes?: string | null): boolean
    hasClassesv(classes?: string[] | null): boolean
    /* Methods of Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DeviceProviderFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DeviceProviderFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceProviderFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceProviderFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DeviceProviderFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DeviceProviderFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DeviceProviderFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DeviceProviderFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceProviderFactory_ConstructProps)
    _init (config?: DeviceProviderFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name: string): DeviceProviderFactory | null
    static getByName(factoryname: string): DeviceProvider | null
    static listGetDeviceProviders(minrank: Rank): DeviceProviderFactory[]
    static $gtype: GObject.Type
}
export class DoubleRange {
    static name: string
}
export interface DynamicTypeFactory_ConstructProps extends PluginFeature_ConstructProps {
}
export class DynamicTypeFactory {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DynamicTypeFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DynamicTypeFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DynamicTypeFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DynamicTypeFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DynamicTypeFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DynamicTypeFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DynamicTypeFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DynamicTypeFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DynamicTypeFactory_ConstructProps)
    _init (config?: DynamicTypeFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static load(factoryname: string): GObject.Type
    static $gtype: GObject.Type
}
export interface Element_ConstructProps extends Object_ConstructProps {
}
export class Element {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Element */
    object: Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: State
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    startTime: ClockTime
    numpads: number
    pads: Pad[]
    numsrcpads: number
    srcpads: Pad[]
    numsinkpads: number
    sinkpads: Pad[]
    padsCookie: number
    contexts: Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: StateChange): StateChangeReturn
    vfuncGetState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Pad): void
    vfuncPadRemoved(pad: Pad): void
    vfuncPostMessage(message: Message): boolean
    vfuncProvideClock(): Clock | null
    vfuncQuery(query: Query): boolean
    vfuncReleasePad(pad: Pad): void
    vfuncRequestNewPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfuncSendEvent(event: Event): boolean
    vfuncSetBus(bus?: Bus | null): void
    vfuncSetClock(clock?: Clock | null): boolean
    vfuncSetContext(context: Context): void
    vfuncSetState(state: State): StateChangeReturn
    vfuncStateChanged(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: Element, newPad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Element, newPad: Pad) => void)): number
    emit(sigName: "pad-added", newPad: Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: Element, oldPad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Element, oldPad: Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Element, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Element, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Element_ConstructProps)
    _init (config?: Element_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static makeFromUri(type: URIType, uri: string, elementname?: string | null): Element
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.Type): boolean
    static stateChangeReturnGetName(stateRet: StateChangeReturn): string
    static stateGetName(state: State): string
    static addMetadata(klass: Element | Function | GObject.Type, key: string, value: string): void
    static addPadTemplate(klass: Element | Function | GObject.Type, templ: PadTemplate): void
    static addStaticMetadata(klass: Element | Function | GObject.Type, key: string, value: string): void
    static addStaticPadTemplate(klass: Element | Function | GObject.Type, staticTempl: StaticPadTemplate): void
    static addStaticPadTemplateWithGtype(klass: Element | Function | GObject.Type, staticTempl: StaticPadTemplate, padType: GObject.Type): void
    static getMetadata(klass: Element | Function | GObject.Type, key: string): string
    static getPadTemplate(element_class: Element | Function | GObject.Type, name: string): PadTemplate | null
    static getPadTemplateList(element_class: Element | Function | GObject.Type): PadTemplate[]
    static setMetadata(klass: Element | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static setStaticMetadata(klass: Element | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static $gtype: GObject.Type
}
export interface ElementFactory_ConstructProps extends PluginFeature_ConstructProps {
}
export class ElementFactory {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.ElementFactory */
    canSinkAllCaps(caps: Caps): boolean
    canSinkAnyCaps(caps: Caps): boolean
    canSrcAllCaps(caps: Caps): boolean
    canSrcAnyCaps(caps: Caps): boolean
    create(name?: string | null): Element | null
    getElementType(): GObject.Type
    getMetadata(key: string): string | null
    getMetadataKeys(): string[] | null
    getNumPadTemplates(): number
    getStaticPadTemplates(): StaticPadTemplate[]
    getUriProtocols(): string[]
    getUriType(): URIType
    hasInterface(interfacename: string): boolean
    listIsType(type: ElementFactoryListType): boolean
    /* Methods of Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ElementFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ElementFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ElementFactory_ConstructProps)
    _init (config?: ElementFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name: string): ElementFactory | null
    static listFilter(list: ElementFactory[], caps: Caps, direction: PadDirection, subsetonly: boolean): ElementFactory[]
    static listGetElements(type: ElementFactoryListType, minrank: Rank): ElementFactory[]
    static make(factoryname: string, name?: string | null): Element | null
    static $gtype: GObject.Type
}
export class FlagSet {
    static name: string
    /* Static methods and pseudo-constructors */
    static register(flagsType: GObject.Type): GObject.Type
}
export class Fraction {
    static name: string
}
export class FractionRange {
    static name: string
}
export interface GhostPad_ConstructProps extends ProxyPad_ConstructProps {
}
export class GhostPad {
    /* Properties of Gst.Pad */
    readonly caps: Caps
    offset: number
    template: PadTemplate
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.GhostPad */
    pad: ProxyPad
    /* Fields of Gst.Pad */
    object: Object
    elementPrivate: object
    padtemplate: PadTemplate
    direction: PadDirection
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.GhostPad */
    construct(): boolean
    getTarget(): Pad | null
    setTarget(newtarget?: Pad | null): boolean
    /* Methods of Gst.ProxyPad */
    getInternal(): ProxyPad | null
    /* Methods of Gst.Pad */
    activateMode(mode: PadMode, active: boolean): boolean
    addProbe(mask: PadProbeType, callback: PadProbeCallback): number
    canLink(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Element, streamId?: string | null): string
    eventDefault(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    getAllowedCaps(): Caps | null
    getCurrentCaps(): Caps | null
    getDirection(): PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): FlowReturn
    getOffset(): number
    getPadTemplate(): PadTemplate | null
    getPadTemplateCaps(): Caps
    getParentElement(): Element | null
    getPeer(): Pad | null
    getRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    getSingleInternalLink(): Pad | null
    getStickyEvent(eventType: EventType, idx: number): Event | null
    getStream(): Stream | null
    getStreamId(): string | null
    getTaskState(): TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Iterator | null
    iterateInternalLinksDefault(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    linkMaybeGhosting(sink: Pad): boolean
    linkMaybeGhostingFull(sink: Pad, flags: PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Query): boolean
    peerQueryAcceptCaps(caps: Caps): boolean
    peerQueryCaps(filter?: Caps | null): Caps
    peerQueryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Query): boolean
    proxyQueryCaps(query: Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    pushList(list: BufferList): FlowReturn
    query(query: Query): boolean
    queryAcceptCaps(caps: Caps): boolean
    queryCaps(filter?: Caps | null): Caps
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Object | null, query: Query): boolean
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Event): boolean
    setActivateFunctionFull(activate: PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: PadChainFunction): void
    setChainListFunctionFull(chainlist: PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: PadEventFullFunction): void
    setEventFunctionFull(event: PadEventFunction): void
    setGetrangeFunctionFull(get: PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: PadIterIntLinkFunction): void
    setLinkFunctionFull(link: PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: PadQueryFunction): void
    setUnlinkFunctionFull(unlink: PadUnlinkFunction): void
    startTask(func: TaskFunction): boolean
    stickyEventsForeach(foreachFunc: PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Pad */
    vfuncLinked(peer: Pad): void
    vfuncUnlinked(peer: Pad): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Pad */
    connect(sigName: "linked", callback: (($obj: GhostPad, peer: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: GhostPad, peer: Pad) => void)): number
    emit(sigName: "linked", peer: Pad): void
    on(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unlinked", callback: (($obj: GhostPad, peer: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: GhostPad, peer: Pad) => void)): number
    emit(sigName: "unlinked", peer: Pad): void
    on(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GhostPad, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GhostPad, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GhostPad_ConstructProps)
    _init (config?: GhostPad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, target: Pad): GhostPad
    static new(name: string | null, direction: PadDirection): GhostPad
    static newFromTemplate(name: string | null, target: Pad, templ: PadTemplate): GhostPad
    static newFromTemplate(templ: PadTemplate, name?: string | null): GhostPad
    static newNoTarget(name: string | null, dir: PadDirection): GhostPad
    static newNoTargetFromTemplate(name: string | null, templ: PadTemplate): GhostPad
    static activateModeDefault(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean
    static internalActivateModeDefault(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean
    static $gtype: GObject.Type
}
export class Int64Range {
    static name: string
}
export class IntRange {
    static name: string
}
export interface Object_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    name?: string
    parent?: Object
}
export class Object {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Object, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Object, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static checkUniqueness(list: Object[], name: string): boolean
    static defaultDeepNotify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excludedProps?: string[] | null): void
    static replace(oldobj?: Object | null, newobj?: Object | null): [ /* returnType */ boolean, /* oldobj */ Object | null ]
    static $gtype: GObject.Type
}
export interface Pad_ConstructProps extends Object_ConstructProps {
    direction?: PadDirection
    offset?: number
    template?: PadTemplate
}
export class Pad {
    /* Properties of Gst.Pad */
    readonly caps: Caps
    offset: number
    template: PadTemplate
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Pad */
    object: Object
    elementPrivate: object
    padtemplate: PadTemplate
    direction: PadDirection
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Pad */
    activateMode(mode: PadMode, active: boolean): boolean
    addProbe(mask: PadProbeType, callback: PadProbeCallback): number
    canLink(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Element, streamId?: string | null): string
    eventDefault(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    getAllowedCaps(): Caps | null
    getCurrentCaps(): Caps | null
    getDirection(): PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): FlowReturn
    getOffset(): number
    getPadTemplate(): PadTemplate | null
    getPadTemplateCaps(): Caps
    getParentElement(): Element | null
    getPeer(): Pad | null
    getRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    getSingleInternalLink(): Pad | null
    getStickyEvent(eventType: EventType, idx: number): Event | null
    getStream(): Stream | null
    getStreamId(): string | null
    getTaskState(): TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Iterator | null
    iterateInternalLinksDefault(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    linkMaybeGhosting(sink: Pad): boolean
    linkMaybeGhostingFull(sink: Pad, flags: PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Query): boolean
    peerQueryAcceptCaps(caps: Caps): boolean
    peerQueryCaps(filter?: Caps | null): Caps
    peerQueryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Query): boolean
    proxyQueryCaps(query: Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    pushList(list: BufferList): FlowReturn
    query(query: Query): boolean
    queryAcceptCaps(caps: Caps): boolean
    queryCaps(filter?: Caps | null): Caps
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Object | null, query: Query): boolean
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Event): boolean
    setActivateFunctionFull(activate: PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: PadChainFunction): void
    setChainListFunctionFull(chainlist: PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: PadEventFullFunction): void
    setEventFunctionFull(event: PadEventFunction): void
    setGetrangeFunctionFull(get: PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: PadIterIntLinkFunction): void
    setLinkFunctionFull(link: PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: PadQueryFunction): void
    setUnlinkFunctionFull(unlink: PadUnlinkFunction): void
    startTask(func: TaskFunction): boolean
    stickyEventsForeach(foreachFunc: PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Pad */
    vfuncLinked(peer: Pad): void
    vfuncUnlinked(peer: Pad): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Pad */
    connect(sigName: "linked", callback: (($obj: Pad, peer: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: Pad, peer: Pad) => void)): number
    emit(sigName: "linked", peer: Pad): void
    on(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unlinked", callback: (($obj: Pad, peer: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: Pad, peer: Pad) => void)): number
    emit(sigName: "unlinked", peer: Pad): void
    on(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pad, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pad, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pad_ConstructProps)
    _init (config?: Pad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, direction: PadDirection): Pad
    static newFromStaticTemplate(templ: StaticPadTemplate, name: string): Pad
    static newFromTemplate(templ: PadTemplate, name?: string | null): Pad
    static linkGetName(ret: PadLinkReturn): string
    static $gtype: GObject.Type
}
export interface PadTemplate_ConstructProps extends Object_ConstructProps {
    caps?: Caps
    direction?: PadDirection
    gtype?: GObject.Type
    nameTemplate?: string
    presence?: PadPresence
}
export class PadTemplate {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.PadTemplate */
    object: Object
    nameTemplate: string
    direction: PadDirection
    presence: PadPresence
    caps: Caps
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.PadTemplate */
    getCaps(): Caps
    getDocumentationCaps(): Caps
    padCreated(pad: Pad): void
    setDocumentationCaps(caps: Caps): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.PadTemplate */
    vfuncPadCreated(pad: Pad): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.PadTemplate */
    connect(sigName: "pad-created", callback: (($obj: PadTemplate, pad: Pad) => void)): number
    connect_after(sigName: "pad-created", callback: (($obj: PadTemplate, pad: Pad) => void)): number
    emit(sigName: "pad-created", pad: Pad): void
    on(sigName: "pad-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PadTemplate, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PadTemplate, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PadTemplate_ConstructProps)
    _init (config?: PadTemplate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(nameTemplate: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate
    static newFromStaticPadTemplateWithGtype(padTemplate: StaticPadTemplate, padType: GObject.Type): PadTemplate
    static newWithGtype(nameTemplate: string, direction: PadDirection, presence: PadPresence, caps: Caps, padType: GObject.Type): PadTemplate
    static $gtype: GObject.Type
}
export class ParamArray {
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamFraction {
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export interface Pipeline_ConstructProps extends Bin_ConstructProps {
    autoFlushBus?: boolean
    delay?: number
    latency?: number
}
export class Pipeline {
    /* Properties of Gst.Pipeline */
    autoFlushBus: boolean
    delay: number
    latency: number
    /* Properties of Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Pipeline */
    bin: Bin
    fixedClock: Clock
    streamTime: ClockTime
    /* Fields of Gst.Bin */
    element: Element
    numchildren: number
    children: Element[]
    childrenCookie: number
    childBus: Bus
    messages: Message[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Clock
    clockProvider: Element
    /* Fields of Gst.Element */
    object: Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: State
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    startTime: ClockTime
    numpads: number
    pads: Pad[]
    numsrcpads: number
    srcpads: Pad[]
    numsinkpads: number
    sinkpads: Pad[]
    padsCookie: number
    contexts: Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Pipeline */
    autoClock(): void
    getAutoFlushBus(): boolean
    getBus(): Bus
    getDelay(): ClockTime
    getLatency(): ClockTime
    getPipelineClock(): Clock
    setAutoFlushBus(autoFlush: boolean): void
    setDelay(delay: ClockTime): void
    setLatency(latency: ClockTime): void
    useClock(clock?: Clock | null): void
    /* Methods of Gst.Bin */
    add(element: Element): boolean
    findUnlinkedPad(direction: PadDirection): Pad | null
    getByInterface(iface: GObject.Type): Element | null
    getByName(name: string): Element | null
    getByNameRecurseUp(name: string): Element | null
    getSuppressedFlags(): ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Iterator | null
    iterateAllByInterface(iface: GObject.Type): Iterator | null
    iterateElements(): Iterator | null
    iterateRecurse(): Iterator | null
    iterateSinks(): Iterator | null
    iterateSorted(): Iterator | null
    iterateSources(): Iterator | null
    recalculateLatency(): boolean
    remove(element: Element): boolean
    setSuppressedFlags(flags: ElementFlags): void
    syncChildrenStates(): boolean
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Virtual methods of Gst.Bin */
    vfuncAddElement(element: Element): boolean
    vfuncDeepElementAdded(subBin: Bin, child: Element): void
    vfuncDeepElementRemoved(subBin: Bin, child: Element): void
    vfuncDoLatency(): boolean
    vfuncElementAdded(child: Element): void
    vfuncElementRemoved(child: Element): void
    vfuncHandleMessage(message: Message): void
    vfuncRemoveElement(element: Element): boolean
    vfuncChildAdded(child: GObject.Object, name: string): void
    vfuncChildRemoved(child: GObject.Object, name: string): void
    vfuncGetChildByIndex(index: number): GObject.Object | null
    vfuncGetChildByName(name: string): GObject.Object | null
    vfuncGetChildrenCount(): number
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: StateChange): StateChangeReturn
    vfuncGetState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Pad): void
    vfuncPadRemoved(pad: Pad): void
    vfuncPostMessage(message: Message): boolean
    vfuncProvideClock(): Clock | null
    vfuncQuery(query: Query): boolean
    vfuncReleasePad(pad: Pad): void
    vfuncRequestNewPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfuncSendEvent(event: Event): boolean
    vfuncSetBus(bus?: Bus | null): void
    vfuncSetClock(clock?: Clock | null): boolean
    vfuncSetContext(context: Context): void
    vfuncSetState(state: State): StateChangeReturn
    vfuncStateChanged(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Pipeline, subBin: Bin, element: Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Pipeline, subBin: Bin, element: Element) => void)): number
    emit(sigName: "deep-element-added", subBin: Bin, element: Element): void
    on(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deep-element-removed", callback: (($obj: Pipeline, subBin: Bin, element: Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Pipeline, subBin: Bin, element: Element) => void)): number
    emit(sigName: "deep-element-removed", subBin: Bin, element: Element): void
    on(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    emit(sigName: "do-latency"): void
    on(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "element-added", callback: (($obj: Pipeline, element: Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Pipeline, element: Element) => void)): number
    emit(sigName: "element-added", element: Element): void
    on(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "element-removed", callback: (($obj: Pipeline, element: Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Pipeline, element: Element) => void)): number
    emit(sigName: "element-removed", element: Element): void
    on(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: Pipeline, newPad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Pipeline, newPad: Pad) => void)): number
    emit(sigName: "pad-added", newPad: Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: Pipeline, oldPad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Pipeline, oldPad: Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pipeline, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pipeline, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pipeline_ConstructProps)
    _init (config?: Pipeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): Pipeline
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends Object_ConstructProps {
}
export class Plugin {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Plugin */
    addDependency(envVars: string[] | null, paths: string[] | null, names: string[] | null, flags: PluginDependencyFlags): void
    addDependencySimple(envVars: string | null, paths: string | null, names: string | null, flags: PluginDependencyFlags): void
    getCacheData(): Structure | null
    getDescription(): string
    getFilename(): string | null
    getLicense(): string
    getName(): string
    getOrigin(): string
    getPackage(): string
    getReleaseDateString(): string | null
    getSource(): string
    getVersion(): string
    isLoaded(): boolean
    load(): Plugin | null
    setCacheData(cacheData: Structure): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Plugin, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Plugin, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static listFree(list: Plugin[]): void
    static loadByName(name: string): Plugin | null
    static loadFile(filename: string): Plugin
    static registerStatic(majorVersion: number, minorVersion: number, name: string, description: string, initFunc: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    static registerStaticFull(majorVersion: number, minorVersion: number, name: string, description: string, initFullFunc: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    static $gtype: GObject.Type
}
export interface PluginFeature_ConstructProps extends Object_ConstructProps {
}
export class PluginFeature {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PluginFeature, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PluginFeature, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PluginFeature_ConstructProps)
    _init (config?: PluginFeature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static listCopy(list: PluginFeature[]): PluginFeature[]
    static listDebug(list: PluginFeature[]): void
    static listFree(list: PluginFeature[]): void
    static rankCompareFunc(p1?: object | null, p2?: object | null): number
    static $gtype: GObject.Type
}
export interface ProxyPad_ConstructProps extends Pad_ConstructProps {
}
export class ProxyPad {
    /* Properties of Gst.Pad */
    readonly caps: Caps
    offset: number
    template: PadTemplate
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.ProxyPad */
    pad: Pad
    /* Fields of Gst.Pad */
    object: Object
    elementPrivate: object
    padtemplate: PadTemplate
    direction: PadDirection
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.ProxyPad */
    getInternal(): ProxyPad | null
    /* Methods of Gst.Pad */
    activateMode(mode: PadMode, active: boolean): boolean
    addProbe(mask: PadProbeType, callback: PadProbeCallback): number
    canLink(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Element, streamId?: string | null): string
    eventDefault(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    getAllowedCaps(): Caps | null
    getCurrentCaps(): Caps | null
    getDirection(): PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): FlowReturn
    getOffset(): number
    getPadTemplate(): PadTemplate | null
    getPadTemplateCaps(): Caps
    getParentElement(): Element | null
    getPeer(): Pad | null
    getRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    getSingleInternalLink(): Pad | null
    getStickyEvent(eventType: EventType, idx: number): Event | null
    getStream(): Stream | null
    getStreamId(): string | null
    getTaskState(): TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Iterator | null
    iterateInternalLinksDefault(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    linkMaybeGhosting(sink: Pad): boolean
    linkMaybeGhostingFull(sink: Pad, flags: PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Query): boolean
    peerQueryAcceptCaps(caps: Caps): boolean
    peerQueryCaps(filter?: Caps | null): Caps
    peerQueryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Query): boolean
    proxyQueryCaps(query: Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    pushList(list: BufferList): FlowReturn
    query(query: Query): boolean
    queryAcceptCaps(caps: Caps): boolean
    queryCaps(filter?: Caps | null): Caps
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Object | null, query: Query): boolean
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Event): boolean
    setActivateFunctionFull(activate: PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: PadChainFunction): void
    setChainListFunctionFull(chainlist: PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: PadEventFullFunction): void
    setEventFunctionFull(event: PadEventFunction): void
    setGetrangeFunctionFull(get: PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: PadIterIntLinkFunction): void
    setLinkFunctionFull(link: PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: PadQueryFunction): void
    setUnlinkFunctionFull(unlink: PadUnlinkFunction): void
    startTask(func: TaskFunction): boolean
    stickyEventsForeach(foreachFunc: PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Pad */
    vfuncLinked(peer: Pad): void
    vfuncUnlinked(peer: Pad): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Pad */
    connect(sigName: "linked", callback: (($obj: ProxyPad, peer: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: ProxyPad, peer: Pad) => void)): number
    emit(sigName: "linked", peer: Pad): void
    on(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unlinked", callback: (($obj: ProxyPad, peer: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: ProxyPad, peer: Pad) => void)): number
    emit(sigName: "unlinked", peer: Pad): void
    on(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ProxyPad, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ProxyPad, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyPad_ConstructProps)
    _init (config?: ProxyPad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static chainDefault(pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn
    static chainListDefault(pad: Pad, parent: Object | null, list: BufferList): FlowReturn
    static getrangeDefault(pad: Pad, parent: Object, offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    static iterateInternalLinksDefault(pad: Pad, parent?: Object | null): Iterator | null
    static $gtype: GObject.Type
}
export interface Registry_ConstructProps extends Object_ConstructProps {
}
export class Registry {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Registry */
    object: Object
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Registry */
    addFeature(feature: PluginFeature): boolean
    addPlugin(plugin: Plugin): boolean
    checkFeatureVersion(featureName: string, minMajor: number, minMinor: number, minMicro: number): boolean
    featureFilter(filter: PluginFeatureFilter, first: boolean): PluginFeature[]
    findFeature(name: string, type: GObject.Type): PluginFeature | null
    findPlugin(name: string): Plugin | null
    getFeatureList(type: GObject.Type): PluginFeature[]
    getFeatureListByPlugin(name: string): PluginFeature[]
    getFeatureListCookie(): number
    getPluginList(): Plugin[]
    lookup(filename: string): Plugin | null
    lookupFeature(name: string): PluginFeature | null
    pluginFilter(filter: PluginFilter, first: boolean): Plugin[]
    removeFeature(feature: PluginFeature): void
    removePlugin(plugin: Plugin): void
    scanPath(path: string): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Registry */
    connect(sigName: "feature-added", callback: (($obj: Registry, feature: PluginFeature) => void)): number
    connect_after(sigName: "feature-added", callback: (($obj: Registry, feature: PluginFeature) => void)): number
    emit(sigName: "feature-added", feature: PluginFeature): void
    on(sigName: "feature-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "feature-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "feature-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "plugin-added", callback: (($obj: Registry, plugin: Plugin) => void)): number
    connect_after(sigName: "plugin-added", callback: (($obj: Registry, plugin: Plugin) => void)): number
    emit(sigName: "plugin-added", plugin: Plugin): void
    on(sigName: "plugin-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "plugin-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "plugin-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Registry, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Registry, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static forkIsEnabled(): boolean
    static forkSetEnabled(enabled: boolean): void
    static get(): Registry
    static $gtype: GObject.Type
}
export interface SharedTaskPool_ConstructProps extends TaskPool_ConstructProps {
}
export class SharedTaskPool {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.TaskPool */
    object: Object
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.SharedTaskPool */
    getMaxThreads(): number
    setMaxThreads(maxThreads: number): void
    /* Methods of Gst.TaskPool */
    cleanup(): void
    disposeHandle(id?: object | null): void
    join(id?: object | null): void
    prepare(): void
    push(func: TaskPoolFunction): object | null
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.TaskPool */
    vfuncCleanup(): void
    vfuncDisposeHandle(id?: object | null): void
    vfuncJoin(id?: object | null): void
    vfuncPrepare(): void
    vfuncPush(func: TaskPoolFunction): object | null
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: SharedTaskPool, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: SharedTaskPool, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SharedTaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SharedTaskPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SharedTaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SharedTaskPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: SharedTaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SharedTaskPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SharedTaskPool_ConstructProps)
    _init (config?: SharedTaskPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SharedTaskPool
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends Object_ConstructProps {
    caps?: Caps
    streamFlags?: StreamFlags
    streamId?: string
    streamType?: StreamType
    tags?: TagList
}
export class Stream {
    /* Properties of Gst.Stream */
    caps: Caps
    streamFlags: StreamFlags
    streamType: StreamType
    tags: TagList
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Stream */
    streamId: string
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Stream */
    getCaps(): Caps | null
    getStreamFlags(): StreamFlags
    getStreamId(): string | null
    getStreamType(): StreamType
    getTags(): TagList | null
    setCaps(caps?: Caps | null): void
    setStreamFlags(flags: StreamFlags): void
    setStreamType(streamType: StreamType): void
    setTags(tags?: TagList | null): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Stream, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Stream, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-flags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-flags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-type", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-type", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(streamId: string | null, caps: Caps | null, type: StreamType, flags: StreamFlags): Stream
    static $gtype: GObject.Type
}
export interface StreamCollection_ConstructProps extends Object_ConstructProps {
    upstreamId?: string
}
export class StreamCollection {
    /* Properties of Gst.StreamCollection */
    upstreamId: string
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.StreamCollection */
    addStream(stream: Stream): boolean
    getSize(): number
    getStream(index: number): Stream | null
    getUpstreamId(): string | null
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.StreamCollection */
    vfuncStreamNotify(stream: Stream, pspec: GObject.ParamSpec): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.StreamCollection */
    connect(sigName: "stream-notify", callback: (($obj: StreamCollection, object: Stream, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "stream-notify", callback: (($obj: StreamCollection, object: Stream, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "stream-notify", object: Stream, p0: GObject.ParamSpec): void
    on(sigName: "stream-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stream-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stream-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: StreamCollection, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: StreamCollection, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upstream-id", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upstream-id", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upstream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upstream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upstream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamCollection_ConstructProps)
    _init (config?: StreamCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(upstreamId?: string | null): StreamCollection
    static $gtype: GObject.Type
}
export interface SystemClock_ConstructProps extends Clock_ConstructProps {
    clockType?: ClockType
}
export class SystemClock {
    /* Properties of Gst.SystemClock */
    clockType: ClockType
    /* Properties of Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.SystemClock */
    clock: Clock
    /* Fields of Gst.Clock */
    object: Object
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Clock */
    addObservation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number ]
    addObservationUnapplied(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number, /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rateNum */ ClockTime | null, /* rateDenom */ ClockTime | null ]
    adjustUnlocked(internal: ClockTime): ClockTime
    adjustWithCalibration(internalTarget: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    getCalibration(): [ /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rateNum */ ClockTime | null, /* rateDenom */ ClockTime | null ]
    getInternalTime(): ClockTime
    getMaster(): Clock | null
    getResolution(): ClockTime
    getTime(): ClockTime
    getTimeout(): ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID
    newSingleShotId(time: ClockTime): ClockID
    periodicIdReinit(id: ClockID, startTime: ClockTime, interval: ClockTime): boolean
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master?: Clock | null): boolean
    setResolution(resolution: ClockTime): ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: ClockTime): void
    singleShotIdReinit(id: ClockID, time: ClockTime): boolean
    unadjustUnlocked(external: ClockTime): ClockTime
    unadjustWithCalibration(externalTarget: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    waitForSync(timeout: ClockTime): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Clock */
    vfuncChangeResolution(oldResolution: ClockTime, newResolution: ClockTime): ClockTime
    vfuncGetInternalTime(): ClockTime
    vfuncGetResolution(): ClockTime
    vfuncUnschedule(entry: ClockEntry): void
    vfuncWait(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn
    vfuncWaitAsync(entry: ClockEntry): ClockReturn
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Clock */
    connect(sigName: "synced", callback: (($obj: SystemClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: SystemClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    on(sigName: "synced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "synced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "synced", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: SystemClock, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: SystemClock, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SystemClock_ConstructProps)
    _init (config?: SystemClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static obtain(): Clock
    static setDefault(newClock?: Clock | null): void
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends Object_ConstructProps {
}
export class Task {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Task */
    object: Object
    state: TaskState
    cond: GLib.Cond
    lock: GLib.RecMutex
    func: TaskFunction
    userData: object
    notify: GLib.DestroyNotify
    running: boolean
    /* Fields of Gst.Object */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Task */
    getPool(): TaskPool
    getState(): TaskState
    join(): boolean
    pause(): boolean
    resume(): boolean
    setEnterCallback(enterFunc: TaskThreadFunc): void
    setLeaveCallback(leaveFunc: TaskThreadFunc): void
    setLock(mutex: GLib.RecMutex): void
    setPool(pool: TaskPool): void
    setState(state: TaskState): boolean
    start(): boolean
    stop(): boolean
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Task, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Task, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(func: TaskFunction): Task
    static cleanupAll(): void
    static $gtype: GObject.Type
}
export interface TaskPool_ConstructProps extends Object_ConstructProps {
}
export class TaskPool {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.TaskPool */
    object: Object
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.TaskPool */
    cleanup(): void
    disposeHandle(id?: object | null): void
    join(id?: object | null): void
    prepare(): void
    push(func: TaskPoolFunction): object | null
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.TaskPool */
    vfuncCleanup(): void
    vfuncDisposeHandle(id?: object | null): void
    vfuncJoin(id?: object | null): void
    vfuncPrepare(): void
    vfuncPush(func: TaskPoolFunction): object | null
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TaskPool, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TaskPool, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TaskPool_ConstructProps)
    _init (config?: TaskPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TaskPool
    static $gtype: GObject.Type
}
export interface Tracer_ConstructProps extends Object_ConstructProps {
    params?: string
}
export class Tracer {
    /* Properties of Gst.Tracer */
    params: string
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Tracer, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Tracer, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::params", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::params", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tracer_ConstructProps)
    _init (config?: Tracer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin | null, name: string, type: GObject.Type): boolean
    static $gtype: GObject.Type
}
export interface TracerFactory_ConstructProps extends PluginFeature_ConstructProps {
}
export class TracerFactory {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.TracerFactory */
    getTracerType(): GObject.Type
    /* Methods of Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TracerFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TracerFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TracerFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TracerFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TracerFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TracerFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TracerFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TracerFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TracerFactory_ConstructProps)
    _init (config?: TracerFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getList(): TracerFactory[]
    static $gtype: GObject.Type
}
export interface TracerRecord_ConstructProps extends Object_ConstructProps {
}
export class TracerRecord {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TracerRecord, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TracerRecord, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TracerRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TracerRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TracerRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TracerRecord, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TracerRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TracerRecord, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TracerRecord_ConstructProps)
    _init (config?: TracerRecord_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TypeFindFactory_ConstructProps extends PluginFeature_ConstructProps {
}
export class TypeFindFactory {
    /* Properties of Gst.Object */
    name: string
    parent: Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.TypeFindFactory */
    callFunction(find: TypeFind): void
    getCaps(): Caps | null
    getExtensions(): string[] | null
    hasFunction(): boolean
    /* Methods of Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TypeFindFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TypeFindFactory, propObject: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TypeFindFactory_ConstructProps)
    _init (config?: TypeFindFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getList(): TypeFindFactory[]
    static $gtype: GObject.Type
}
export class ValueArray {
    static name: string
    /* Static methods and pseudo-constructors */
    static appendAndTakeValue(value: any, appendValue: any): void
    static appendValue(value: any, appendValue: any): void
    static getSize(value: any): number
    static getValue(value: any, index: number): any
    static init(value: any, prealloc: number): any
    static prependValue(value: any, prependValue: any): void
}
export class ValueList {
    static name: string
    /* Static methods and pseudo-constructors */
    static appendAndTakeValue(value: any, appendValue: any): void
    static appendValue(value: any, appendValue: any): void
    static concat(value1: any, value2: any): /* dest */ any
    static getSize(value: any): number
    static getValue(value: any, index: number): any
    static init(value: any, prealloc: number): any
    static merge(value1: any, value2: any): /* dest */ any
    static prependValue(value: any, prependValue: any): void
}
export class AllocationParams {
    /* Fields of Gst.AllocationParams */
    flags: MemoryFlags
    align: number
    prefix: number
    padding: number
    /* Methods of Gst.AllocationParams */
    copy(): AllocationParams | null
    free(): void
    init(): void
    static name: string
}
export abstract class AllocatorClass {
    /* Fields of Gst.AllocatorClass */
    objectClass: ObjectClass
    alloc: (allocator: Allocator | null, size: number, params?: AllocationParams | null) => Memory | null
    free: (allocator: Allocator, memory: Memory) => void
    static name: string
}
export class AllocatorPrivate {
    static name: string
}
export class AtomicQueue {
    /* Methods of Gst.AtomicQueue */
    length(): number
    peek(): object | null
    pop(): object | null
    push(data?: object | null): void
    ref(): void
    unref(): void
    static name: string
    static new(initialSize: number): AtomicQueue
    constructor(initialSize: number)
    /* Static methods and pseudo-constructors */
    static new(initialSize: number): AtomicQueue
}
export abstract class BinClass {
    /* Fields of Gst.BinClass */
    parentClass: ElementClass
    elementAdded: (bin: Bin, child: Element) => void
    elementRemoved: (bin: Bin, child: Element) => void
    addElement: (bin: Bin, element: Element) => boolean
    removeElement: (bin: Bin, element: Element) => boolean
    handleMessage: (bin: Bin, message: Message) => void
    doLatency: (bin: Bin) => boolean
    deepElementAdded: (bin: Bin, subBin: Bin, child: Element) => void
    deepElementRemoved: (bin: Bin, subBin: Bin, child: Element) => void
    static name: string
}
export class BinPrivate {
    static name: string
}
export class Buffer {
    /* Fields of Gst.Buffer */
    miniObject: MiniObject
    pool: BufferPool
    pts: ClockTime
    dts: ClockTime
    duration: ClockTime
    offset: number
    offsetEnd: number
    /* Methods of Gst.Buffer */
    addCustomMeta(name: string): CustomMeta | null
    addMeta(info: MetaInfo, params?: object | null): Meta | null
    addParentBufferMeta(ref: Buffer): ParentBufferMeta | null
    addProtectionMeta(info: Structure): ProtectionMeta
    addReferenceTimestampMeta(reference: Caps, timestamp: ClockTime, duration: ClockTime): ReferenceTimestampMeta | null
    append(buf2: Buffer): Buffer
    appendMemory(mem: Memory): void
    appendRegion(buf2: Buffer, offset: number, size: number): Buffer
    copyDeep(): Buffer
    copyInto(src: Buffer, flags: BufferCopyFlags, offset: number, size: number): boolean
    copyRegion(flags: BufferCopyFlags, offset: number, size: number): Buffer
    extract(offset: number): [ /* returnType */ number, /* dest */ any ]
    extractDup(offset: number, size: number): /* dest */ any
    fill(offset: number, src: any): number
    findMemory(offset: number, size: number): [ /* returnType */ boolean, /* idx */ number, /* length */ number, /* skip */ number ]
    foreachMeta(func: BufferForeachMetaFunc): boolean
    getAllMemory(): Memory | null
    getCustomMeta(name: string): CustomMeta | null
    getFlags(): BufferFlags
    getMemory(idx: number): Memory | null
    getMemoryRange(idx: number, length: number): Memory | null
    getMeta(api: GObject.Type): Meta | null
    getNMeta(apiType: GObject.Type): number
    getReferenceTimestampMeta(reference?: Caps | null): ReferenceTimestampMeta | null
    getSize(): number
    getSizes(): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    getSizesRange(idx: number, length: number): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    hasFlags(flags: BufferFlags): boolean
    insertMemory(idx: number, mem: Memory): void
    isAllMemoryWritable(): boolean
    isMemoryRangeWritable(idx: number, length: number): boolean
    map(flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    mapRange(idx: number, length: number, flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    memcmp(offset: number, mem: any): number
    memset(offset: number, val: number, size: number): number
    nMemory(): number
    peekMemory(idx: number): Memory | null
    prependMemory(mem: Memory): void
    removeAllMemory(): void
    removeMemory(idx: number): void
    removeMemoryRange(idx: number, length: number): void
    removeMeta(meta: Meta): boolean
    replaceAllMemory(mem: Memory): void
    replaceMemory(idx: number, mem: Memory): void
    replaceMemoryRange(idx: number, length: number, mem: Memory): void
    resize(offset: number, size: number): void
    resizeRange(idx: number, length: number, offset: number, size: number): boolean
    setFlags(flags: BufferFlags): boolean
    setSize(size: number): void
    unmap(info: MapInfo): void
    unsetFlags(flags: BufferFlags): boolean
    static name: string
    static new(): Buffer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Buffer
    static newAllocate(allocator: Allocator | null, size: number, params?: AllocationParams | null): Buffer
    static newWrapped(data: any): Buffer
    static newWrappedBytes(bytes: any): Buffer
    static newWrappedFull(flags: MemoryFlags, data: any, maxsize: number, offset: number, notify?: GLib.DestroyNotify | null): Buffer
    static getMaxMemory(): number
}
export class BufferList {
    /* Methods of Gst.BufferList */
    calculateSize(): number
    copyDeep(): BufferList
    foreach(func: BufferListFunc): boolean
    get(idx: number): Buffer | null
    getWritable(idx: number): Buffer | null
    insert(idx: number, buffer: Buffer): void
    length(): number
    remove(idx: number, length: number): void
    static name: string
    static new(): BufferList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BufferList
    static newSized(size: number): BufferList
}
export class BufferPoolAcquireParams {
    /* Fields of Gst.BufferPoolAcquireParams */
    format: Format
    start: number
    stop: number
    flags: BufferPoolAcquireFlags
    static name: string
}
export abstract class BufferPoolClass {
    /* Fields of Gst.BufferPoolClass */
    objectClass: ObjectClass
    getOptions: (pool: BufferPool) => string[]
    setConfig: (pool: BufferPool, config: Structure) => boolean
    start: (pool: BufferPool) => boolean
    stop: (pool: BufferPool) => boolean
    acquireBuffer: (pool: BufferPool, params?: BufferPoolAcquireParams | null) => [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    allocBuffer: (pool: BufferPool, params?: BufferPoolAcquireParams | null) => [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    resetBuffer: (pool: BufferPool, buffer: Buffer) => void
    releaseBuffer: (pool: BufferPool, buffer: Buffer) => void
    freeBuffer: (pool: BufferPool, buffer: Buffer) => void
    flushStart: (pool: BufferPool) => void
    flushStop: (pool: BufferPool) => void
    static name: string
}
export class BufferPoolPrivate {
    static name: string
}
export abstract class BusClass {
    /* Fields of Gst.BusClass */
    parentClass: ObjectClass
    message: (bus: Bus, message: Message) => void
    syncMessage: (bus: Bus, message: Message) => void
    static name: string
}
export class BusPrivate {
    static name: string
}
export class Caps {
    /* Fields of Gst.Caps */
    miniObject: MiniObject
    /* Methods of Gst.Caps */
    append(caps2: Caps): void
    appendStructure(structure: Structure): void
    appendStructureFull(structure: Structure, features?: CapsFeatures | null): void
    canIntersect(caps2: Caps): boolean
    copy(): Caps
    copyNth(nth: number): Caps
    filterAndMapInPlace(func: CapsFilterMapFunc): void
    fixate(): Caps
    foreach(func: CapsForeachFunc): boolean
    getFeatures(index: number): CapsFeatures | null
    getSize(): number
    getStructure(index: number): Structure
    intersect(caps2: Caps): Caps
    intersectFull(caps2: Caps, mode: CapsIntersectMode): Caps
    isAlwaysCompatible(caps2: Caps): boolean
    isAny(): boolean
    isEmpty(): boolean
    isEqual(caps2: Caps): boolean
    isEqualFixed(caps2: Caps): boolean
    isFixed(): boolean
    isStrictlyEqual(caps2: Caps): boolean
    isSubset(superset: Caps): boolean
    isSubsetStructure(structure: Structure): boolean
    isSubsetStructureFull(structure: Structure, features?: CapsFeatures | null): boolean
    mapInPlace(func: CapsMapFunc): boolean
    merge(caps2: Caps): Caps
    mergeStructure(structure: Structure): Caps
    mergeStructureFull(structure: Structure, features?: CapsFeatures | null): Caps
    normalize(): Caps
    removeStructure(idx: number): void
    serialize(flags: SerializeFlags): string
    setFeatures(index: number, features?: CapsFeatures | null): void
    setFeaturesSimple(features?: CapsFeatures | null): void
    setValue(field: string, value: any): void
    simplify(): Caps
    stealStructure(index: number): Structure | null
    subtract(subtrahend: Caps): Caps
    toString(): string
    truncate(): Caps
    static name: string
    /* Static methods and pseudo-constructors */
    static newAny(): Caps
    static newEmpty(): Caps
    static newEmptySimple(mediaType: string): Caps
    static fromString(string: string): Caps | null
}
export class CapsFeatures {
    /* Methods of Gst.CapsFeatures */
    add(feature: string): void
    addId(feature: GLib.Quark): void
    contains(feature: string): boolean
    containsId(feature: GLib.Quark): boolean
    copy(): CapsFeatures
    free(): void
    getNth(i: number): string | null
    getNthId(i: number): GLib.Quark
    getSize(): number
    isAny(): boolean
    isEqual(features2: CapsFeatures): boolean
    remove(feature: string): void
    removeId(feature: GLib.Quark): void
    setParentRefcount(refcount: number): boolean
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static newAny(): CapsFeatures
    static newEmpty(): CapsFeatures
    static fromString(features: string): CapsFeatures | null
}
export abstract class ChildProxyInterface {
    /* Fields of Gst.ChildProxyInterface */
    parent: GObject.TypeInterface
    getChildByName: (parent: ChildProxy, name: string) => GObject.Object | null
    getChildByIndex: (parent: ChildProxy, index: number) => GObject.Object | null
    getChildrenCount: (parent: ChildProxy) => number
    childAdded: (parent: ChildProxy, child: GObject.Object, name: string) => void
    childRemoved: (parent: ChildProxy, child: GObject.Object, name: string) => void
    static name: string
}
export abstract class ClockClass {
    /* Fields of Gst.ClockClass */
    parentClass: ObjectClass
    changeResolution: (clock: Clock, oldResolution: ClockTime, newResolution: ClockTime) => ClockTime
    getResolution: (clock: Clock) => ClockTime
    getInternalTime: (clock: Clock) => ClockTime
    wait: (clock: Clock, entry: ClockEntry, jitter: ClockTimeDiff) => ClockReturn
    waitAsync: (clock: Clock, entry: ClockEntry) => ClockReturn
    unschedule: (clock: Clock, entry: ClockEntry) => void
    static name: string
}
export class ClockEntry {
    /* Fields of Gst.ClockEntry */
    refcount: number
    clock: Clock
    type: ClockEntryType
    time: ClockTime
    interval: ClockTime
    status: ClockReturn
    func: ClockCallback
    userData: object
    destroyData: GLib.DestroyNotify
    unscheduled: boolean
    wokenUp: boolean
    static name: string
}
export class ClockPrivate {
    static name: string
}
export class Context {
    /* Methods of Gst.Context */
    getContextType(): string
    getStructure(): Structure
    hasContextType(contextType: string): boolean
    isPersistent(): boolean
    writableStructure(): Structure
    static name: string
    static new(contextType: string, persistent: boolean): Context
    constructor(contextType: string, persistent: boolean)
    /* Static methods and pseudo-constructors */
    static new(contextType: string, persistent: boolean): Context
}
export abstract class ControlBindingClass {
    /* Fields of Gst.ControlBindingClass */
    parentClass: ObjectClass
    syncValues: (binding: ControlBinding, object: Object, timestamp: ClockTime, lastSync: ClockTime) => boolean
    getValue: (binding: ControlBinding, timestamp: ClockTime) => any
    getGValueArray: (binding: ControlBinding, timestamp: ClockTime, interval: ClockTime, values: any) => boolean
    static name: string
}
export class ControlBindingPrivate {
    static name: string
}
export abstract class ControlSourceClass {
    /* Fields of Gst.ControlSourceClass */
    parentClass: ObjectClass
    static name: string
}
export class CustomMeta {
    /* Fields of Gst.CustomMeta */
    meta: Meta
    /* Methods of Gst.CustomMeta */
    getStructure(): Structure
    hasName(name: string): boolean
    static name: string
}
export class DateTime {
    /* Methods of Gst.DateTime */
    getDay(): number
    getHour(): number
    getMicrosecond(): number
    getMinute(): number
    getMonth(): number
    getSecond(): number
    getTimeZoneOffset(): number
    getYear(): number
    hasDay(): boolean
    hasMonth(): boolean
    hasSecond(): boolean
    hasTime(): boolean
    hasYear(): boolean
    ref(): DateTime
    toGDateTime(): GLib.DateTime | null
    toIso8601String(): string | null
    unref(): void
    static name: string
    static new(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    constructor(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number)
    /* Static methods and pseudo-constructors */
    static new(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static newFromGDateTime(dt?: GLib.DateTime | null): DateTime
    static newFromIso8601String(string: string): DateTime
    static newFromUnixEpochLocalTime(secs: number): DateTime
    static newFromUnixEpochLocalTimeUsecs(usecs: number): DateTime
    static newFromUnixEpochUtc(secs: number): DateTime
    static newFromUnixEpochUtcUsecs(usecs: number): DateTime
    static newLocalTime(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static newNowLocalTime(): DateTime
    static newNowUtc(): DateTime
    static newY(year: number): DateTime
    static newYm(year: number, month: number): DateTime
    static newYmd(year: number, month: number, day: number): DateTime
}
export class DebugCategory {
    /* Methods of Gst.DebugCategory */
    free(): void
    getColor(): number
    getDescription(): string
    getName(): string
    getThreshold(): DebugLevel
    resetThreshold(): void
    setThreshold(level: DebugLevel): void
    static name: string
}
export class DebugMessage {
    /* Methods of Gst.DebugMessage */
    get(): string | null
    static name: string
}
export abstract class DeviceClass {
    /* Fields of Gst.DeviceClass */
    parentClass: ObjectClass
    createElement: (device: Device, name?: string | null) => Element | null
    reconfigureElement: (device: Device, element: Element) => boolean
    static name: string
}
export abstract class DeviceMonitorClass {
    /* Fields of Gst.DeviceMonitorClass */
    parentClass: ObjectClass
    static name: string
}
export class DeviceMonitorPrivate {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export abstract class DeviceProviderClass {
    /* Fields of Gst.DeviceProviderClass */
    parentClass: ObjectClass
    factory: DeviceProviderFactory
    start: (provider: DeviceProvider) => boolean
    stop: (provider: DeviceProvider) => void
    /* Methods of Gst.DeviceProviderClass */
    addMetadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    addStaticMetadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    getMetadata(klass: DeviceProvider | Function | GObject.Type, key: string): string | null
    setMetadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    setStaticMetadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static name: string
}
export abstract class DeviceProviderFactoryClass {
    static name: string
}
export class DeviceProviderPrivate {
    static name: string
}
export abstract class DynamicTypeFactoryClass {
    static name: string
}
export abstract class ElementClass {
    /* Fields of Gst.ElementClass */
    parentClass: ObjectClass
    metadata: object
    elementfactory: ElementFactory
    padtemplates: object[]
    numpadtemplates: number
    padTemplCookie: number
    padAdded: (element: Element, pad: Pad) => void
    padRemoved: (element: Element, pad: Pad) => void
    noMorePads: (element: Element) => void
    requestNewPad: (element: Element, templ: PadTemplate, name?: string | null, caps?: Caps | null) => Pad | null
    releasePad: (element: Element, pad: Pad) => void
    getState: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    setState: (element: Element, state: State) => StateChangeReturn
    changeState: (element: Element, transition: StateChange) => StateChangeReturn
    stateChanged: (element: Element, oldstate: State, newstate: State, pending: State) => void
    setBus: (element: Element, bus?: Bus | null) => void
    provideClock: (element: Element) => Clock | null
    setClock: (element: Element, clock?: Clock | null) => boolean
    sendEvent: (element: Element, event: Event) => boolean
    query: (element: Element, query: Query) => boolean
    postMessage: (element: Element, message: Message) => boolean
    setContext: (element: Element, context: Context) => void
    /* Methods of Gst.ElementClass */
    addMetadata(klass: Element | Function | GObject.Type, key: string, value: string): void
    addPadTemplate(klass: Element | Function | GObject.Type, templ: PadTemplate): void
    addStaticMetadata(klass: Element | Function | GObject.Type, key: string, value: string): void
    addStaticPadTemplate(klass: Element | Function | GObject.Type, staticTempl: StaticPadTemplate): void
    addStaticPadTemplateWithGtype(klass: Element | Function | GObject.Type, staticTempl: StaticPadTemplate, padType: GObject.Type): void
    getMetadata(klass: Element | Function | GObject.Type, key: string): string
    getPadTemplate(element_class: Element | Function | GObject.Type, name: string): PadTemplate | null
    getPadTemplateList(element_class: Element | Function | GObject.Type): PadTemplate[]
    setMetadata(klass: Element | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    setStaticMetadata(klass: Element | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static name: string
}
export abstract class ElementFactoryClass {
    static name: string
}
export class Event {
    /* Fields of Gst.Event */
    miniObject: MiniObject
    type: EventType
    timestamp: number
    seqnum: number
    /* Methods of Gst.Event */
    copySegment(segment: Segment): void
    getRunningTimeOffset(): number
    getSeqnum(): number
    getStructure(): Structure | null
    hasName(name: string): boolean
    hasNameId(name: GLib.Quark): boolean
    parseBufferSize(): [ /* format */ Format, /* minsize */ number, /* maxsize */ number, /* async */ boolean ]
    parseCaps(): /* caps */ Caps
    parseFlushStop(): /* resetTime */ boolean
    parseGap(): [ /* timestamp */ ClockTime | null, /* duration */ ClockTime | null ]
    parseGapFlags(): /* flags */ GapFlags
    parseGroupId(): [ /* returnType */ boolean, /* groupId */ number ]
    parseInstantRateChange(): [ /* rateMultiplier */ number | null, /* newFlags */ SegmentFlags | null ]
    parseInstantRateSyncTime(): [ /* rateMultiplier */ number | null, /* runningTime */ ClockTime | null, /* upstreamRunningTime */ ClockTime | null ]
    parseLatency(): /* latency */ ClockTime
    parseProtection(): [ /* systemId */ string | null, /* data */ Buffer | null, /* origin */ string | null ]
    parseQos(): [ /* type */ QOSType, /* proportion */ number, /* diff */ ClockTimeDiff, /* timestamp */ ClockTime ]
    parseSeek(): [ /* rate */ number, /* format */ Format, /* flags */ SeekFlags, /* startType */ SeekType, /* start */ number, /* stopType */ SeekType, /* stop */ number ]
    parseSeekTrickmodeInterval(): /* interval */ ClockTime
    parseSegment(): /* segment */ Segment
    parseSegmentDone(): [ /* format */ Format | null, /* position */ number | null ]
    parseSelectStreams(): /* streams */ string[]
    parseSinkMessage(): /* msg */ Message
    parseStep(): [ /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null ]
    parseStream(): /* stream */ Stream
    parseStreamCollection(): /* collection */ StreamCollection
    parseStreamFlags(): /* flags */ StreamFlags
    parseStreamGroupDone(): /* groupId */ number
    parseStreamStart(): /* streamId */ string
    parseTag(): /* taglist */ TagList
    parseToc(): [ /* toc */ Toc, /* updated */ boolean ]
    parseTocSelect(): /* uid */ string | null
    setGapFlags(flags: GapFlags): void
    setGroupId(groupId: number): void
    setRunningTimeOffset(offset: number): void
    setSeekTrickmodeInterval(interval: ClockTime): void
    setSeqnum(seqnum: number): void
    setStream(stream: Stream): void
    setStreamFlags(flags: StreamFlags): void
    writableStructure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static newBufferSize(format: Format, minsize: number, maxsize: number, async: boolean): Event
    static newCaps(caps: Caps): Event
    static newCustom(type: EventType, structure: Structure): Event
    static newEos(): Event
    static newFlushStart(): Event
    static newFlushStop(resetTime: boolean): Event
    static newGap(timestamp: ClockTime, duration: ClockTime): Event
    static newInstantRateChange(rateMultiplier: number, newFlags: SegmentFlags): Event
    static newInstantRateSyncTime(rateMultiplier: number, runningTime: ClockTime, upstreamRunningTime: ClockTime): Event
    static newLatency(latency: ClockTime): Event
    static newNavigation(structure: Structure): Event
    static newProtection(systemId: string, data: Buffer, origin: string): Event
    static newQos(type: QOSType, proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static newReconfigure(): Event
    static newSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): Event
    static newSegment(segment: Segment): Event
    static newSegmentDone(format: Format, position: number): Event
    static newSelectStreams(streams: string[]): Event
    static newSinkMessage(name: string, msg: Message): Event
    static newStep(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event
    static newStreamCollection(collection: StreamCollection): Event
    static newStreamGroupDone(groupId: number): Event
    static newStreamStart(streamId: string): Event
    static newTag(taglist: TagList): Event
    static newToc(toc: Toc, updated: boolean): Event
    static newTocSelect(uid: string): Event
}
export class FormatDefinition {
    /* Fields of Gst.FormatDefinition */
    value: Format
    nick: string
    description: string
    quark: GLib.Quark
    static name: string
}
export abstract class GhostPadClass {
    /* Fields of Gst.GhostPadClass */
    parentClass: ProxyPadClass
    static name: string
}
export class GhostPadPrivate {
    static name: string
}
export class Iterator {
    /* Fields of Gst.Iterator */
    copy: IteratorCopyFunction
    next: IteratorNextFunction
    item: IteratorItemFunction
    resync: IteratorResyncFunction
    free: IteratorFreeFunction
    pushed: Iterator
    type: GObject.Type
    lock: GLib.Mutex
    cookie: number
    masterCookie: number
    size: number
    /* Methods of Gst.Iterator */
    filter(func: GLib.CompareFunc, userData: any): Iterator
    findCustom(func: GLib.CompareFunc): [ /* returnType */ boolean, /* elem */ any ]
    fold(func: IteratorFoldFunction, ret: any): IteratorResult
    foreach(func: IteratorForeachFunction): IteratorResult
    push(other: Iterator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newSingle(type: GObject.Type, object: any): Iterator
}
export class MapInfo {
    /* Fields of Gst.MapInfo */
    memory: Memory
    flags: MapFlags
    data: any
    size: number
    maxsize: number
    userData: object[]
    static name: string
}
export class Memory {
    /* Fields of Gst.Memory */
    miniObject: MiniObject
    allocator: Allocator
    parent: Memory
    maxsize: number
    align: number
    offset: number
    size: number
    /* Methods of Gst.Memory */
    copy(offset: number, size: number): Memory
    getSizes(): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    isSpan(mem2: Memory): [ /* returnType */ boolean, /* offset */ number ]
    isType(memType: string): boolean
    makeMapped(flags: MapFlags): [ /* returnType */ Memory | null, /* info */ MapInfo ]
    map(flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    resize(offset: number, size: number): void
    share(offset: number, size: number): Memory
    unmap(info: MapInfo): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newWrapped(flags: MemoryFlags, data: any, maxsize: number, offset: number, notify?: GLib.DestroyNotify | null): Memory
}
export class Message {
    /* Fields of Gst.Message */
    miniObject: MiniObject
    type: MessageType
    timestamp: number
    src: Object
    seqnum: number
    /* Methods of Gst.Message */
    addRedirectEntry(location: string, tagList?: TagList | null, entryStruct?: Structure | null): void
    getNumRedirectEntries(): number
    getSeqnum(): number
    getStreamStatusObject(): any
    getStructure(): Structure | null
    hasName(name: string): boolean
    parseAsyncDone(): /* runningTime */ ClockTime | null
    parseBuffering(): /* percent */ number | null
    parseBufferingStats(): [ /* mode */ BufferingMode | null, /* avgIn */ number | null, /* avgOut */ number | null, /* bufferingLeft */ number | null ]
    parseClockLost(): /* clock */ Clock | null
    parseClockProvide(): [ /* clock */ Clock | null, /* ready */ boolean | null ]
    parseContextType(): [ /* returnType */ boolean, /* contextType */ string | null ]
    parseDeviceAdded(): /* device */ Device | null
    parseDeviceChanged(): [ /* device */ Device | null, /* changedDevice */ Device | null ]
    parseDeviceRemoved(): /* device */ Device | null
    parseError(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parseErrorDetails(): /* structure */ Structure
    parseGroupId(): [ /* returnType */ boolean, /* groupId */ number | null ]
    parseHaveContext(): /* context */ Context | null
    parseInfo(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parseInfoDetails(): /* structure */ Structure
    parseInstantRateRequest(): /* rateMultiplier */ number | null
    parseNewClock(): /* clock */ Clock | null
    parseProgress(): [ /* type */ ProgressType | null, /* code */ string | null, /* text */ string | null ]
    parsePropertyNotify(): [ /* object */ Object | null, /* propertyName */ string | null, /* propertyValue */ any ]
    parseQos(): [ /* live */ boolean | null, /* runningTime */ number | null, /* streamTime */ number | null, /* timestamp */ number | null, /* duration */ number | null ]
    parseQosStats(): [ /* format */ Format | null, /* processed */ number | null, /* dropped */ number | null ]
    parseQosValues(): [ /* jitter */ number | null, /* proportion */ number | null, /* quality */ number | null ]
    parseRedirectEntry(entryIndex: number): [ /* location */ string | null, /* tagList */ TagList | null, /* entryStruct */ Structure | null ]
    parseRequestState(): /* state */ State | null
    parseResetTime(): /* runningTime */ ClockTime | null
    parseSegmentDone(): [ /* format */ Format | null, /* position */ number | null ]
    parseSegmentStart(): [ /* format */ Format | null, /* position */ number | null ]
    parseStateChanged(): [ /* oldstate */ State | null, /* newstate */ State | null, /* pending */ State | null ]
    parseStepDone(): [ /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null, /* duration */ number | null, /* eos */ boolean | null ]
    parseStepStart(): [ /* active */ boolean | null, /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null ]
    parseStreamCollection(): /* collection */ StreamCollection | null
    parseStreamStatus(): [ /* type */ StreamStatusType, /* owner */ Element ]
    parseStreamsSelected(): /* collection */ StreamCollection | null
    parseStructureChange(): [ /* type */ StructureChangeType, /* owner */ Element | null, /* busy */ boolean | null ]
    parseTag(): /* tagList */ TagList
    parseToc(): [ /* toc */ Toc, /* updated */ boolean ]
    parseWarning(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parseWarningDetails(): /* structure */ Structure
    setBufferingStats(mode: BufferingMode, avgIn: number, avgOut: number, bufferingLeft: number): void
    setGroupId(groupId: number): void
    setQosStats(format: Format, processed: number, dropped: number): void
    setQosValues(jitter: number, proportion: number, quality: number): void
    setSeqnum(seqnum: number): void
    setStreamStatusObject(object: any): void
    streamsSelectedAdd(stream: Stream): void
    streamsSelectedGetSize(): number
    streamsSelectedGetStream(idx: number): Stream | null
    writableStructure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static newApplication(src: Object | null, structure: Structure): Message
    static newAsyncDone(src: Object | null, runningTime: ClockTime): Message
    static newAsyncStart(src?: Object | null): Message
    static newBuffering(src: Object | null, percent: number): Message
    static newClockLost(src: Object | null, clock: Clock): Message
    static newClockProvide(src: Object | null, clock: Clock, ready: boolean): Message
    static newCustom(type: MessageType, src?: Object | null, structure?: Structure | null): Message
    static newDeviceAdded(src: Object, device: Device): Message
    static newDeviceChanged(src: Object, device: Device, changedDevice: Device): Message
    static newDeviceRemoved(src: Object, device: Device): Message
    static newDurationChanged(src?: Object | null): Message
    static newElement(src: Object | null, structure: Structure): Message
    static newEos(src?: Object | null): Message
    static newError(src: Object | null, error: GLib.Error, debug: string): Message
    static newErrorWithDetails(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
    static newHaveContext(src: Object | null, context: Context): Message
    static newInfo(src: Object | null, error: GLib.Error, debug: string): Message
    static newInfoWithDetails(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
    static newInstantRateRequest(src: Object, rateMultiplier: number): Message
    static newLatency(src?: Object | null): Message
    static newNeedContext(src: Object | null, contextType: string): Message
    static newNewClock(src: Object | null, clock: Clock): Message
    static newProgress(src: Object, type: ProgressType, code: string, text: string): Message
    static newPropertyNotify(src: Object, propertyName: string, val?: any): Message
    static newQos(src: Object, live: boolean, runningTime: number, streamTime: number, timestamp: number, duration: number): Message
    static newRedirect(src: Object, location: string, tagList?: TagList | null, entryStruct?: Structure | null): Message
    static newRequestState(src: Object | null, state: State): Message
    static newResetTime(src: Object | null, runningTime: ClockTime): Message
    static newSegmentDone(src: Object | null, format: Format, position: number): Message
    static newSegmentStart(src: Object | null, format: Format, position: number): Message
    static newStateChanged(src: Object | null, oldstate: State, newstate: State, pending: State): Message
    static newStateDirty(src?: Object | null): Message
    static newStepDone(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message
    static newStepStart(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message
    static newStreamCollection(src: Object, collection: StreamCollection): Message
    static newStreamStart(src?: Object | null): Message
    static newStreamStatus(src: Object, type: StreamStatusType, owner: Element): Message
    static newStreamsSelected(src: Object, collection: StreamCollection): Message
    static newStructureChange(src: Object | null, type: StructureChangeType, owner: Element, busy: boolean): Message
    static newTag(src: Object | null, tagList: TagList): Message
    static newToc(src: Object, toc: Toc, updated: boolean): Message
    static newWarning(src: Object | null, error: GLib.Error, debug: string): Message
    static newWarningWithDetails(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
}
export class Meta {
    /* Fields of Gst.Meta */
    flags: MetaFlags
    info: MetaInfo
    /* Methods of Gst.Meta */
    compareSeqnum(meta2: Meta): number
    getSeqnum(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static apiTypeGetTags(api: GObject.Type): string[]
    static apiTypeHasTag(api: GObject.Type, tag: GLib.Quark): boolean
    static apiTypeRegister(api: string, tags: string[]): GObject.Type
    static getInfo(impl: string): MetaInfo | null
    static register(api: GObject.Type, impl: string, size: number, initFunc: MetaInitFunction, freeFunc: MetaFreeFunction, transformFunc: MetaTransformFunction): MetaInfo
    static registerCustom(name: string, tags: string[], transformFunc: CustomMetaTransformFunction | null): MetaInfo
}
export class MetaInfo {
    /* Fields of Gst.MetaInfo */
    api: GObject.Type
    type: GObject.Type
    size: number
    initFunc: MetaInitFunction
    freeFunc: MetaFreeFunction
    transformFunc: MetaTransformFunction
    /* Methods of Gst.MetaInfo */
    isCustom(): boolean
    static name: string
}
export class MetaTransformCopy {
    /* Fields of Gst.MetaTransformCopy */
    region: boolean
    offset: number
    size: number
    static name: string
}
export class MiniObject {
    /* Fields of Gst.MiniObject */
    type: GObject.Type
    refcount: number
    lockstate: number
    flags: number
    dispose: MiniObjectDisposeFunction
    free: MiniObjectFreeFunction
    /* Methods of Gst.MiniObject */
    addParent(parent: MiniObject): void
    getQdata(quark: GLib.Quark): object | null
    isWritable(): boolean
    lock(flags: LockFlags): boolean
    removeParent(parent: MiniObject): void
    setQdata(quark: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    stealQdata(quark: GLib.Quark): object | null
    unlock(flags: LockFlags): void
    static name: string
    /* Static methods and pseudo-constructors */
    static replace(olddata?: MiniObject | null, newdata?: MiniObject | null): [ /* returnType */ boolean, /* olddata */ MiniObject | null ]
    static take(olddata: MiniObject, newdata: MiniObject): [ /* returnType */ boolean, /* olddata */ MiniObject ]
}
export abstract class ObjectClass {
    /* Fields of Gst.ObjectClass */
    parentClass: GObject.InitiallyUnownedClass
    pathStringSeparator: string
    deepNotify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    static name: string
}
export abstract class PadClass {
    /* Fields of Gst.PadClass */
    parentClass: ObjectClass
    linked: (pad: Pad, peer: Pad) => void
    unlinked: (pad: Pad, peer: Pad) => void
    static name: string
}
export class PadPrivate {
    static name: string
}
export class PadProbeInfo {
    /* Fields of Gst.PadProbeInfo */
    type: PadProbeType
    id: number
    data: object
    offset: number
    size: number
    /* Methods of Gst.PadProbeInfo */
    getBuffer(): Buffer | null
    getBufferList(): BufferList | null
    getEvent(): Event | null
    getQuery(): Query | null
    static name: string
}
export abstract class PadTemplateClass {
    /* Fields of Gst.PadTemplateClass */
    parentClass: ObjectClass
    padCreated: (templ: PadTemplate, pad: Pad) => void
    static name: string
}
export class ParamSpecArray {
    /* Fields of Gst.ParamSpecArray */
    parentInstance: GObject.ParamSpec
    elementSpec: GObject.ParamSpec
    static name: string
}
export class ParamSpecFraction {
    /* Fields of Gst.ParamSpecFraction */
    parentInstance: GObject.ParamSpec
    minNum: number
    minDen: number
    maxNum: number
    maxDen: number
    defNum: number
    defDen: number
    static name: string
}
export class ParentBufferMeta {
    /* Fields of Gst.ParentBufferMeta */
    parent: Meta
    buffer: Buffer
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): MetaInfo
}
export class ParseContext {
    /* Methods of Gst.ParseContext */
    copy(): ParseContext | null
    free(): void
    getMissingElements(): string[] | null
    static name: string
    static new(): ParseContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParseContext
}
export abstract class PipelineClass {
    /* Fields of Gst.PipelineClass */
    parentClass: BinClass
    static name: string
}
export class PipelinePrivate {
    static name: string
}
export abstract class PluginClass {
    static name: string
}
export class PluginDesc {
    /* Fields of Gst.PluginDesc */
    majorVersion: number
    minorVersion: number
    name: string
    description: string
    pluginInit: PluginInitFunc
    version: string
    license: string
    source: string
    package: string
    origin: string
    releaseDatetime: string
    static name: string
}
export abstract class PluginFeatureClass {
    static name: string
}
export class Poll {
    /* Methods of Gst.Poll */
    addFd(fd: PollFD): boolean
    fdCanRead(fd: PollFD): boolean
    fdCanWrite(fd: PollFD): boolean
    fdCtlPri(fd: PollFD, active: boolean): boolean
    fdCtlRead(fd: PollFD, active: boolean): boolean
    fdCtlWrite(fd: PollFD, active: boolean): boolean
    fdHasClosed(fd: PollFD): boolean
    fdHasError(fd: PollFD): boolean
    fdHasPri(fd: PollFD): boolean
    fdIgnored(fd: PollFD): void
    free(): void
    getReadGpollfd(fd: GLib.PollFD): void
    readControl(): boolean
    removeFd(fd: PollFD): boolean
    restart(): void
    setControllable(controllable: boolean): boolean
    setFlushing(flushing: boolean): void
    wait(timeout: ClockTime): number
    writeControl(): boolean
    static name: string
}
export class PollFD {
    /* Fields of Gst.PollFD */
    fd: number
    /* Methods of Gst.PollFD */
    init(): void
    static name: string
}
export abstract class PresetInterface {
    /* Fields of Gst.PresetInterface */
    parent: GObject.TypeInterface
    getPresetNames: (preset: Preset) => string[]
    getPropertyNames: (preset: Preset) => string[]
    loadPreset: (preset: Preset, name: string) => boolean
    savePreset: (preset: Preset, name: string) => boolean
    renamePreset: (preset: Preset, oldName: string, newName: string) => boolean
    deletePreset: (preset: Preset, name: string) => boolean
    setMeta: (preset: Preset, name: string, tag: string, value?: string | null) => boolean
    getMeta: (preset: Preset, name: string, tag: string) => [ /* returnType */ boolean, /* value */ string ]
    static name: string
}
export class Promise {
    /* Fields of Gst.Promise */
    parent: MiniObject
    /* Methods of Gst.Promise */
    expire(): void
    getReply(): Structure | null
    interrupt(): void
    reply(s?: Structure | null): void
    wait(): PromiseResult
    static name: string
    static new(): Promise
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Promise
    static newWithChangeFunc(func: PromiseChangeFunc): Promise
}
export class ProtectionMeta {
    /* Fields of Gst.ProtectionMeta */
    meta: Meta
    info: Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): MetaInfo
}
export abstract class ProxyPadClass {
    /* Fields of Gst.ProxyPadClass */
    parentClass: PadClass
    static name: string
}
export class ProxyPadPrivate {
    static name: string
}
export class Query {
    /* Fields of Gst.Query */
    miniObject: MiniObject
    type: QueryType
    /* Methods of Gst.Query */
    addAllocationMeta(api: GObject.Type, params?: Structure | null): void
    addAllocationParam(allocator?: Allocator | null, params?: AllocationParams | null): void
    addAllocationPool(pool: BufferPool | null, size: number, minBuffers: number, maxBuffers: number): void
    addBufferingRange(start: number, stop: number): boolean
    addSchedulingMode(mode: PadMode): void
    findAllocationMeta(api: GObject.Type): [ /* returnType */ boolean, /* index */ number | null ]
    getNAllocationMetas(): number
    getNAllocationParams(): number
    getNAllocationPools(): number
    getNBufferingRanges(): number
    getNSchedulingModes(): number
    getStructure(): Structure | null
    hasSchedulingMode(mode: PadMode): boolean
    hasSchedulingModeWithFlags(mode: PadMode, flags: SchedulingFlags): boolean
    parseAcceptCaps(): /* caps */ Caps
    parseAcceptCapsResult(): /* result */ boolean | null
    parseAllocation(): [ /* caps */ Caps | null, /* needPool */ boolean | null ]
    parseBitrate(): /* nominalBitrate */ number | null
    parseBufferingPercent(): [ /* busy */ boolean | null, /* percent */ number | null ]
    parseBufferingRange(): [ /* format */ Format | null, /* start */ number | null, /* stop */ number | null, /* estimatedTotal */ number | null ]
    parseBufferingStats(): [ /* mode */ BufferingMode | null, /* avgIn */ number | null, /* avgOut */ number | null, /* bufferingLeft */ number | null ]
    parseCaps(): /* filter */ Caps
    parseCapsResult(): /* caps */ Caps
    parseContext(): /* context */ Context
    parseContextType(): [ /* returnType */ boolean, /* contextType */ string | null ]
    parseConvert(): [ /* srcFormat */ Format | null, /* srcValue */ number | null, /* destFormat */ Format | null, /* destValue */ number | null ]
    parseDuration(): [ /* format */ Format | null, /* duration */ number | null ]
    parseLatency(): [ /* live */ boolean | null, /* minLatency */ ClockTime | null, /* maxLatency */ ClockTime | null ]
    parseNFormats(): /* nFormats */ number | null
    parseNthAllocationMeta(index: number): [ /* returnType */ GObject.Type, /* params */ Structure | null ]
    parseNthAllocationParam(index: number): [ /* allocator */ Allocator | null, /* params */ AllocationParams | null ]
    parseNthAllocationPool(index: number): [ /* pool */ BufferPool | null, /* size */ number | null, /* minBuffers */ number | null, /* maxBuffers */ number | null ]
    parseNthBufferingRange(index: number): [ /* returnType */ boolean, /* start */ number | null, /* stop */ number | null ]
    parseNthFormat(nth: number): /* format */ Format | null
    parseNthSchedulingMode(index: number): PadMode
    parsePosition(): [ /* format */ Format | null, /* cur */ number | null ]
    parseScheduling(): [ /* flags */ SchedulingFlags | null, /* minsize */ number | null, /* maxsize */ number | null, /* align */ number | null ]
    parseSeeking(): [ /* format */ Format | null, /* seekable */ boolean | null, /* segmentStart */ number | null, /* segmentEnd */ number | null ]
    parseSegment(): [ /* rate */ number | null, /* format */ Format | null, /* startValue */ number | null, /* stopValue */ number | null ]
    parseUri(): /* uri */ string | null
    parseUriRedirection(): /* uri */ string | null
    parseUriRedirectionPermanent(): /* permanent */ boolean | null
    removeNthAllocationMeta(index: number): void
    removeNthAllocationParam(index: number): void
    removeNthAllocationPool(index: number): void
    setAcceptCapsResult(result: boolean): void
    setBitrate(nominalBitrate: number): void
    setBufferingPercent(busy: boolean, percent: number): void
    setBufferingRange(format: Format, start: number, stop: number, estimatedTotal: number): void
    setBufferingStats(mode: BufferingMode, avgIn: number, avgOut: number, bufferingLeft: number): void
    setCapsResult(caps: Caps): void
    setContext(context: Context): void
    setConvert(srcFormat: Format, srcValue: number, destFormat: Format, destValue: number): void
    setDuration(format: Format, duration: number): void
    setFormatsv(formats: Format[]): void
    setLatency(live: boolean, minLatency: ClockTime, maxLatency: ClockTime): void
    setNthAllocationParam(index: number, allocator?: Allocator | null, params?: AllocationParams | null): void
    setNthAllocationPool(index: number, pool: BufferPool | null, size: number, minBuffers: number, maxBuffers: number): void
    setPosition(format: Format, cur: number): void
    setScheduling(flags: SchedulingFlags, minsize: number, maxsize: number, align: number): void
    setSeeking(format: Format, seekable: boolean, segmentStart: number, segmentEnd: number): void
    setSegment(rate: number, format: Format, startValue: number, stopValue: number): void
    setUri(uri: string): void
    setUriRedirection(uri: string): void
    setUriRedirectionPermanent(permanent: boolean): void
    writableStructure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static newAcceptCaps(caps: Caps): Query
    static newAllocation(caps: Caps, needPool: boolean): Query
    static newBitrate(): Query
    static newBuffering(format: Format): Query
    static newCaps(filter: Caps): Query
    static newContext(contextType: string): Query
    static newConvert(srcFormat: Format, value: number, destFormat: Format): Query
    static newCustom(type: QueryType, structure?: Structure | null): Query
    static newDrain(): Query
    static newDuration(format: Format): Query
    static newFormats(): Query
    static newLatency(): Query
    static newPosition(format: Format): Query
    static newScheduling(): Query
    static newSeeking(format: Format): Query
    static newSegment(format: Format): Query
    static newUri(): Query
}
export class ReferenceTimestampMeta {
    /* Fields of Gst.ReferenceTimestampMeta */
    parent: Meta
    reference: Caps
    timestamp: ClockTime
    duration: ClockTime
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): MetaInfo
}
export abstract class RegistryClass {
    /* Fields of Gst.RegistryClass */
    parentClass: ObjectClass
    static name: string
}
export class RegistryPrivate {
    static name: string
}
export class Sample {
    /* Methods of Gst.Sample */
    getBuffer(): Buffer | null
    getBufferList(): BufferList | null
    getCaps(): Caps | null
    getInfo(): Structure | null
    getSegment(): Segment
    setBuffer(buffer: Buffer): void
    setBufferList(bufferList: BufferList): void
    setCaps(caps: Caps): void
    setInfo(info: Structure): boolean
    setSegment(segment: Segment): void
    static name: string
    static new(buffer?: Buffer | null, caps?: Caps | null, segment?: Segment | null, info?: Structure | null): Sample
    constructor(buffer?: Buffer | null, caps?: Caps | null, segment?: Segment | null, info?: Structure | null)
    /* Static methods and pseudo-constructors */
    static new(buffer?: Buffer | null, caps?: Caps | null, segment?: Segment | null, info?: Structure | null): Sample
}
export class Segment {
    /* Fields of Gst.Segment */
    flags: SegmentFlags
    rate: number
    appliedRate: number
    format: Format
    base: number
    offset: number
    start: number
    stop: number
    time: number
    position: number
    duration: number
    /* Methods of Gst.Segment */
    clip(format: Format, start: number, stop: number): [ /* returnType */ boolean, /* clipStart */ number | null, /* clipStop */ number | null ]
    copy(): Segment
    copyInto(dest: Segment): void
    doSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): [ /* returnType */ boolean, /* update */ boolean | null ]
    free(): void
    init(format: Format): void
    isEqual(s1: Segment): boolean
    offsetRunningTime(format: Format, offset: number): boolean
    positionFromRunningTime(format: Format, runningTime: number): number
    positionFromRunningTimeFull(format: Format, runningTime: number): [ /* returnType */ number, /* position */ number ]
    positionFromStreamTime(format: Format, streamTime: number): number
    positionFromStreamTimeFull(format: Format, streamTime: number): [ /* returnType */ number, /* position */ number ]
    setRunningTime(format: Format, runningTime: number): boolean
    toPosition(format: Format, runningTime: number): number
    toRunningTime(format: Format, position: number): number
    toRunningTimeFull(format: Format, position: number): [ /* returnType */ number, /* runningTime */ number | null ]
    toStreamTime(format: Format, position: number): number
    toStreamTimeFull(format: Format, position: number): [ /* returnType */ number, /* streamTime */ number ]
    static name: string
    static new(): Segment
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Segment
}
export abstract class SharedTaskPoolClass {
    /* Fields of Gst.SharedTaskPoolClass */
    parentClass: TaskPoolClass
    static name: string
}
export class SharedTaskPoolPrivate {
    static name: string
}
export class StaticCaps {
    /* Fields of Gst.StaticCaps */
    caps: Caps
    string: string
    /* Methods of Gst.StaticCaps */
    cleanup(): void
    get(): Caps | null
    static name: string
}
export class StaticPadTemplate {
    /* Fields of Gst.StaticPadTemplate */
    nameTemplate: string
    direction: PadDirection
    presence: PadPresence
    staticCaps: StaticCaps
    /* Methods of Gst.StaticPadTemplate */
    get(): PadTemplate | null
    getCaps(): Caps
    static name: string
}
export abstract class StreamClass {
    /* Fields of Gst.StreamClass */
    parentClass: ObjectClass
    static name: string
}
export abstract class StreamCollectionClass {
    /* Fields of Gst.StreamCollectionClass */
    parentClass: ObjectClass
    streamNotify: (collection: StreamCollection, stream: Stream, pspec: GObject.ParamSpec) => void
    static name: string
}
export class StreamCollectionPrivate {
    static name: string
}
export class StreamPrivate {
    static name: string
}
export class Structure {
    /* Fields of Gst.Structure */
    type: GObject.Type
    /* Methods of Gst.Structure */
    canIntersect(struct2: Structure): boolean
    copy(): Structure
    filterAndMapInPlace(func: StructureFilterMapFunc): void
    fixate(): void
    fixateField(fieldName: string): boolean
    fixateFieldBoolean(fieldName: string, target: boolean): boolean
    fixateFieldNearestDouble(fieldName: string, target: number): boolean
    fixateFieldNearestFraction(fieldName: string, targetNumerator: number, targetDenominator: number): boolean
    fixateFieldNearestInt(fieldName: string, target: number): boolean
    fixateFieldString(fieldName: string, target: string): boolean
    foreach(func: StructureForeachFunc): boolean
    free(): void
    getArray(fieldname: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
    getBoolean(fieldname: string): [ /* returnType */ boolean, /* value */ boolean ]
    getClockTime(fieldname: string): [ /* returnType */ boolean, /* value */ ClockTime ]
    getDate(fieldname: string): [ /* returnType */ boolean, /* value */ GLib.Date ]
    getDateTime(fieldname: string): [ /* returnType */ boolean, /* value */ DateTime ]
    getDouble(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getEnum(fieldname: string, enumtype: GObject.Type): [ /* returnType */ boolean, /* value */ number ]
    getFieldType(fieldname: string): GObject.Type
    getFlagset(fieldname: string): [ /* returnType */ boolean, /* valueFlags */ number | null, /* valueMask */ number | null ]
    getFraction(fieldname: string): [ /* returnType */ boolean, /* valueNumerator */ number, /* valueDenominator */ number ]
    getInt(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getList(fieldname: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
    getName(): string
    getNameId(): GLib.Quark
    getString(fieldname: string): string | null
    getUint(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getValue(fieldname: string): any
    hasField(fieldname: string): boolean
    hasFieldTyped(fieldname: string, type: GObject.Type): boolean
    hasName(name: string): boolean
    idGetValue(field: GLib.Quark): any
    idHasField(field: GLib.Quark): boolean
    idHasFieldTyped(field: GLib.Quark, type: GObject.Type): boolean
    idSetValue(field: GLib.Quark, value: any): void
    idTakeValue(field: GLib.Quark, value: any): void
    intersect(struct2: Structure): Structure | null
    isEqual(structure2: Structure): boolean
    isSubset(superset: Structure): boolean
    mapInPlace(func: StructureMapFunc): boolean
    nFields(): number
    nthFieldName(index: number): string
    removeAllFields(): void
    removeField(fieldname: string): void
    serialize(flags: SerializeFlags): string
    setArray(fieldname: string, array: GObject.ValueArray): void
    setList(fieldname: string, array: GObject.ValueArray): void
    setName(name: string): void
    setParentRefcount(refcount: number): boolean
    setValue(fieldname: string, value: any): void
    takeValue(fieldname: string, value: any): void
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static fromString(string: string): Structure
    static newEmpty(name: string): Structure
    static newFromString(string: string): Structure
    static newIdEmpty(quark: GLib.Quark): Structure
    static take(oldstrPtr?: Structure | null, newstr?: Structure | null): [ /* returnType */ boolean, /* oldstrPtr */ Structure | null ]
}
export abstract class SystemClockClass {
    /* Fields of Gst.SystemClockClass */
    parentClass: ClockClass
    static name: string
}
export class SystemClockPrivate {
    static name: string
}
export class TagList {
    /* Fields of Gst.TagList */
    miniObject: MiniObject
    /* Methods of Gst.TagList */
    addValue(mode: TagMergeMode, tag: string, value: any): void
    copy(): TagList
    foreach(func: TagForeachFunc): void
    getBoolean(tag: string): [ /* returnType */ boolean, /* value */ boolean ]
    getBooleanIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ boolean ]
    getDate(tag: string): [ /* returnType */ boolean, /* value */ GLib.Date ]
    getDateIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    getDateTime(tag: string): [ /* returnType */ boolean, /* value */ DateTime ]
    getDateTimeIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ DateTime ]
    getDouble(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getDoubleIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getFloat(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getFloatIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getInt(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64Index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getIntIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getPointer(tag: string): [ /* returnType */ boolean, /* value */ object | null ]
    getPointerIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ object | null ]
    getSample(tag: string): [ /* returnType */ boolean, /* sample */ Sample ]
    getSampleIndex(tag: string, index: number): [ /* returnType */ boolean, /* sample */ Sample ]
    getScope(): TagScope
    getString(tag: string): [ /* returnType */ boolean, /* value */ string ]
    getStringIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ string ]
    getTagSize(tag: string): number
    getUint(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64Index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getUintIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getValueIndex(tag: string, index: number): any
    insert(from: TagList, mode: TagMergeMode): void
    isEmpty(): boolean
    isEqual(list2: TagList): boolean
    merge(list2: TagList | null, mode: TagMergeMode): TagList | null
    nTags(): number
    nthTagName(index: number): string
    peekStringIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ string ]
    removeTag(tag: string): void
    setScope(scope: TagScope): void
    toString(): string | null
    static name: string
    /* Static methods and pseudo-constructors */
    static newEmpty(): TagList
    static newFromString(str: string): TagList
    static copyValue(list: TagList, tag: string): [ /* returnType */ boolean, /* dest */ any ]
}
export abstract class TagSetterInterface {
    /* Fields of Gst.TagSetterInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class TaskClass {
    /* Fields of Gst.TaskClass */
    parentClass: ObjectClass
    static name: string
}
export abstract class TaskPoolClass {
    /* Fields of Gst.TaskPoolClass */
    parentClass: ObjectClass
    prepare: (pool: TaskPool) => void
    cleanup: (pool: TaskPool) => void
    push: (pool: TaskPool, func: TaskPoolFunction) => object | null
    join: (pool: TaskPool, id?: object | null) => void
    disposeHandle: (pool: TaskPool, id?: object | null) => void
    static name: string
}
export class TaskPrivate {
    static name: string
}
export class TimedValue {
    /* Fields of Gst.TimedValue */
    timestamp: ClockTime
    value: number
    static name: string
}
export class Toc {
    /* Methods of Gst.Toc */
    appendEntry(entry: TocEntry): void
    dump(): void
    findEntry(uid: string): TocEntry | null
    getEntries(): TocEntry[]
    getScope(): TocScope
    getTags(): TagList
    mergeTags(tags: TagList | null, mode: TagMergeMode): void
    setTags(tags?: TagList | null): void
    static name: string
    static new(scope: TocScope): Toc
    constructor(scope: TocScope)
    /* Static methods and pseudo-constructors */
    static new(scope: TocScope): Toc
}
export class TocEntry {
    /* Methods of Gst.TocEntry */
    appendSubEntry(subentry: TocEntry): void
    getEntryType(): TocEntryType
    getLoop(): [ /* returnType */ boolean, /* loopType */ TocLoopType | null, /* repeatCount */ number | null ]
    getParent(): TocEntry | null
    getStartStopTimes(): [ /* returnType */ boolean, /* start */ number | null, /* stop */ number | null ]
    getSubEntries(): TocEntry[]
    getTags(): TagList
    getToc(): Toc
    getUid(): string
    isAlternative(): boolean
    isSequence(): boolean
    mergeTags(tags: TagList | null, mode: TagMergeMode): void
    setLoop(loopType: TocLoopType, repeatCount: number): void
    setStartStopTimes(start: number, stop: number): void
    setTags(tags?: TagList | null): void
    static name: string
    static new(type: TocEntryType, uid: string): TocEntry
    constructor(type: TocEntryType, uid: string)
    /* Static methods and pseudo-constructors */
    static new(type: TocEntryType, uid: string): TocEntry
}
export abstract class TocSetterInterface {
    /* Fields of Gst.TocSetterInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class TracerClass {
    /* Fields of Gst.TracerClass */
    parentClass: ObjectClass
    static name: string
}
export abstract class TracerFactoryClass {
    static name: string
}
export class TracerPrivate {
    static name: string
}
export abstract class TracerRecordClass {
    static name: string
}
export class TypeFind {
    /* Fields of Gst.TypeFind */
    peek: (data: object, offset: number, size: number) => number
    suggest: (data: object, probability: number, caps: Caps) => void
    data: object
    getLength: (data: object) => number
    static name: string
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possibleCaps: Caps | null): boolean
}
export abstract class TypeFindFactoryClass {
    static name: string
}
export abstract class URIHandlerInterface {
    /* Fields of Gst.URIHandlerInterface */
    parent: GObject.TypeInterface
    getType: (type: GObject.Type) => URIType
    getProtocols: (type: GObject.Type) => string[]
    getUri: (handler: URIHandler) => string | null
    setUri: (handler: URIHandler, uri: string) => boolean
    static name: string
}
export class Uri {
    /* Methods of Gst.Uri */
    appendPath(relativePath: string): boolean
    appendPathSegment(pathSegment: string): boolean
    equal(second: Uri): boolean
    fromStringWithBase(uri: string): Uri
    getFragment(): string | null
    getHost(): string | null
    getMediaFragmentTable(): GLib.HashTable | null
    getPath(): string | null
    getPathSegments(): string[]
    getPathString(): string | null
    getPort(): number
    getQueryKeys(): string[]
    getQueryString(): string | null
    getQueryTable(): GLib.HashTable | null
    getQueryValue(queryKey: string): string | null
    getScheme(): string | null
    getUserinfo(): string | null
    isNormalized(): boolean
    isWritable(): boolean
    join(refUri?: Uri | null): Uri | null
    makeWritable(): Uri
    newWithBase(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    normalize(): boolean
    queryHasKey(queryKey: string): boolean
    removeQueryKey(queryKey: string): boolean
    setFragment(fragment?: string | null): boolean
    setHost(host: string): boolean
    setPath(path: string): boolean
    setPathSegments(pathSegments?: string[] | null): boolean
    setPathString(path: string): boolean
    setPort(port: number): boolean
    setQueryString(query: string): boolean
    setQueryTable(queryTable?: GLib.HashTable | null): boolean
    setQueryValue(queryKey: string, queryValue?: string | null): boolean
    setScheme(scheme: string): boolean
    setUserinfo(userinfo: string): boolean
    toString(): string
    static name: string
    static new(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    constructor(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null)
    /* Static methods and pseudo-constructors */
    static new(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    static construct(protocol: string, location: string): string
    static fromString(uri: string): Uri | null
    static fromStringEscaped(uri: string): Uri | null
    static getLocation(uri: string): string | null
    static getProtocol(uri: string): string | null
    static hasProtocol(uri: string, protocol: string): boolean
    static isValid(uri: string): boolean
    static joinStrings(baseUri: string, refUri: string): string
    static protocolIsSupported(type: URIType, protocol: string): boolean
    static protocolIsValid(protocol: string): boolean
}
export class ValueTable {
    /* Fields of Gst.ValueTable */
    type: GObject.Type
    compare: ValueCompareFunc
    serialize: ValueSerializeFunc
    deserialize: ValueDeserializeFunc
    deserializeWithPspec: ValueDeserializeWithPSpecFunc
    static name: string
}
type ClockID = object
type ClockTime = number
type ClockTimeDiff = number
type ElementFactoryListType = number
}