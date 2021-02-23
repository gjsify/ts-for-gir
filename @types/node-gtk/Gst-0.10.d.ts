/**
 * Gst-0.10
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace Gst {

export enum ActivateMode {
    NONE,
    PUSH,
    PULL,
}
export enum BufferListItem {
    CONTINUE,
    SKIP_GROUP,
    END,
}
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
}
export enum ClockType {
    REALTIME,
    MONOTONIC,
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
export enum DebugLevel {
    NONE,
    ERROR,
    WARNING,
    INFO,
    DEBUG,
    LOG,
    FIXME,
    TRACE,
    MEMDUMP,
    COUNT,
}
export enum EventType {
    UNKNOWN,
    FLUSH_START,
    FLUSH_STOP,
    EOS,
    NEWSEGMENT,
    TAG,
    BUFFERSIZE,
    SINK_MESSAGE,
    QOS,
    SEEK,
    NAVIGATION,
    LATENCY,
    STEP,
    CUSTOM_UPSTREAM,
    CUSTOM_DOWNSTREAM,
    CUSTOM_DOWNSTREAM_OOB,
    CUSTOM_BOTH,
    CUSTOM_BOTH_OOB,
}
export enum FlowReturn {
    CUSTOM_SUCCESS_2,
    CUSTOM_SUCCESS_1,
    CUSTOM_SUCCESS,
    RESEND,
    OK,
    NOT_LINKED,
    WRONG_STATE,
    UNEXPECTED,
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
export enum IndexCertainty {
    UNKNOWN,
    CERTAIN,
    FUZZY,
}
export enum IndexEntryType {
    ID,
    ASSOCIATION,
    OBJECT,
    FORMAT,
}
export enum IndexLookupMethod {
    EXACT,
    BEFORE,
    AFTER,
}
export enum IndexResolverMethod {
    CUSTOM,
    GTYPE,
    PATH,
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
export enum PadPresence {
    ALWAYS,
    SOMETIMES,
    REQUEST,
}
export enum ParseError {
    SYNTAX,
    NO_SUCH_ELEMENT,
    NO_SUCH_PROPERTY,
    LINK,
    COULD_NOT_SET_PROPERTY,
    EMPTY_BIN,
    EMPTY,
}
export enum PluginError {
    MODULE,
    DEPENDENCIES,
    NAME_MISMATCH,
}
export enum QueryType {
    NONE,
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
    NUM_ERRORS,
}
export enum SearchMode {
    EXACT,
    BEFORE,
    AFTER,
}
export enum SeekType {
    NONE,
    CUR,
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
export enum TaskState {
    STARTED,
    STOPPED,
    PAUSED,
}
export enum TypeFindProbability {
    MINIMUM,
    POSSIBLE,
    LIKELY,
    NEARLY_CERTAIN,
    MAXIMUM,
}
export enum URIType {
    UNKNOWN,
    SINK,
    SRC,
}
export enum AllocTraceFlags {
    LIVE,
    MEM_LIVE,
}
export enum AssocFlags {
    NONE,
    KEY_UNIT,
    DELTA_UNIT,
    LAST,
}
export enum BaseSrcFlags {
    STARTED,
    FLAG_LAST,
}
export enum BinFlags {
    LAST,
}
export enum BufferCopyFlags {
    FLAGS,
    TIMESTAMPS,
    CAPS,
}
export enum BufferFlag {
    READONLY,
    PREROLL,
    DISCONT,
    IN_CAPS,
    GAP,
    DELTA_UNIT,
    MEDIA1,
    MEDIA2,
    MEDIA3,
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
    LAST,
}
export enum DebugGraphDetails {
    MEDIA_TYPE,
    CAPS_DETAILS,
    NON_DEFAULT_PARAMS,
    STATES,
    ALL,
}
export enum ElementFlags {
    LOCKED_STATE,
    IS_SINK,
    UNPARENTING,
    FLAG_LAST,
}
export enum EventTypeFlags {
    UPSTREAM,
    DOWNSTREAM,
    SERIALIZED,
}
export enum IndexFlags {
    WRITABLE,
    READABLE,
    FLAG_LAST,
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
    DURATION,
    LATENCY,
    ASYNC_START,
    ASYNC_DONE,
    REQUEST_STATE,
    STEP_START,
    QOS,
    ANY,
}
export enum MiniObjectFlags {
    READONLY,
    LAST,
}
export enum ObjectFlags {
    DISPOSING,
    FLOATING,
    FLAG_LAST,
}
export enum PadFlags {
    BLOCKED,
    FLUSHING,
    IN_GETCAPS,
    IN_SETCAPS,
    BLOCKING,
    FLAG_LAST,
}
export enum PadLinkCheck {
    NOTHING,
    HIERARCHY,
    TEMPLATE_CAPS,
    CAPS,
}
export enum PadTemplateFlags {
    FIXED,
    FLAG_LAST,
}
export enum ParseFlags {
    NONE,
    FATAL_ERRORS,
}
export enum PipelineFlags {
    FIXED_CLOCK,
    LAST,
}
export enum PluginDependencyFlags {
    NONE,
    RECURSE,
    PATHS_ARE_DEFAULT_ONLY,
    FILE_NAME_IS_SUFFIX,
}
export enum PluginFlags {
    CACHED,
    BLACKLISTED,
}
export enum SeekFlags {
    NONE,
    FLUSH,
    ACCURATE,
    KEY_UNIT,
    SEGMENT,
    SKIP,
}
export const BASE_TRANSFORM_SINK_NAME: string
export const BASE_TRANSFORM_SRC_NAME: string
export const BUFFER_COPY_ALL: any
export const BUFFER_OFFSET_NONE: any
export const BUFFER_TRACE_NAME: string
export const CAN_INLINE: any
export const CLOCK_ENTRY_TRACE_NAME: string
export const CLOCK_TIME_NONE: any
export const DEBUG_BG_MASK: any
export const DEBUG_FG_MASK: any
export const DEBUG_FORMAT_MASK: any
export const DISABLE_ALLOC_TRACE: any
export const DISABLE_GST_DEBUG: any
export const DISABLE_LOADSAVE: any
export const DISABLE_LOADSAVE_REGISTRY: any
export const DISABLE_PARSE: any
export const DISABLE_PLUGIN: any
export const DISABLE_REGISTRY: any
export const DISABLE_TRACE: any
export const DISABLE_XML: any
export const ERROR_SYSTEM: string
export const EVENT_TRACE_NAME: string
export const EVENT_TYPE_BOTH: any
export const EVENT_TYPE_SHIFT: any
export const FOURCC_FORMAT: string
export const HAVE_GLIB_2_8: any
export const HAVE_UNALIGNED_ACCESS: any
export const INDEX_ID_INVALID: any
export const LICENSE_UNKNOWN: string
export const MESSAGE_TRACE_NAME: string
export const MSECOND: any
export const M_PI: number
export const NSECOND: any
export const PADDING: any
export const PADDING_LARGE: any
export const PAD_LINK_CHECK_DEFAULT: any
export const PARAM_CONTROLLABLE: any
export const PARAM_MUTABLE_PAUSED: any
export const PARAM_MUTABLE_PLAYING: any
export const PARAM_MUTABLE_READY: any
export const PARAM_USER_SHIFT: any
export const PTR_FORMAT: string
export const SECOND: any
export const SEGMENT_FORMAT: string
export const TAG_ALBUM: string
export const TAG_ALBUM_ARTIST: string
export const TAG_ALBUM_ARTIST_SORTNAME: string
export const TAG_ALBUM_GAIN: string
export const TAG_ALBUM_PEAK: string
export const TAG_ALBUM_SORTNAME: string
export const TAG_ALBUM_VOLUME_COUNT: string
export const TAG_ALBUM_VOLUME_NUMBER: string
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
export const TAG_CONTACT: string
export const TAG_CONTAINER_FORMAT: string
export const TAG_COPYRIGHT: string
export const TAG_COPYRIGHT_URI: string
export const TAG_DATE: string
export const TAG_DESCRIPTION: string
export const TAG_DEVICE_MANUFACTURER: string
export const TAG_DEVICE_MODEL: string
export const TAG_DURATION: string
export const TAG_ENCODER: string
export const TAG_ENCODER_VERSION: string
export const TAG_EXTENDED_COMMENT: string
export const TAG_GENRE: string
export const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string
export const TAG_GEO_LOCATION_CITY: string
export const TAG_GEO_LOCATION_COUNTRY: string
export const TAG_GEO_LOCATION_ELEVATION: string
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
export const TAG_ISRC: string
export const TAG_KEYWORDS: string
export const TAG_LANGUAGE_CODE: string
export const TAG_LICENSE: string
export const TAG_LICENSE_URI: string
export const TAG_LOCATION: string
export const TAG_LYRICS: string
export const TAG_MAXIMUM_BITRATE: string
export const TAG_MINIMUM_BITRATE: string
export const TAG_NOMINAL_BITRATE: string
export const TAG_ORGANIZATION: string
export const TAG_PERFORMER: string
export const TAG_PREVIEW_IMAGE: string
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
export const TIME_FORMAT: string
export const USECOND: any
export const VALUE_EQUAL: any
export const VALUE_GREATER_THAN: any
export const VALUE_LESS_THAN: any
export const VALUE_UNORDERED: any
export const VERSION_MAJOR: any
export const VERSION_MICRO: any
export const VERSION_MINOR: any
export const VERSION_NANO: any
export function allocTraceAvailable(): any
export function allocTraceGet(name: string): AllocTrace
export function allocTraceLiveAll(): any
export function allocTracePrintAll(): void
export function allocTracePrintLive(): void
export function allocTraceSetFlagsAll(flags: AllocTraceFlags): void
export function atomicIntSet(value: any): { atomicInt: any }
export function capsFromString(string: string): Caps
export function capsLoadThyself(parent: libxml2.NodePtr): Caps
export function childProxyChildAdded(object: Object, child: Object): void
export function childProxyChildRemoved(object: Object, child: Object): void
export function childProxyGetProperty(object: Object, name: string, value: any): void
export function childProxyLookup(object: Object, name: string, target: Object, pspec: GObject.ParamSpec): any
export function childProxySetProperty(object: Object, name: string, value: any): void
export function classSignalConnect(klass: ObjectClass, name: string, func: any, funcData: any): any
export function classSignalEmitByName(object: Object, name: string, self: libxml2.NodePtr): void
export function debugAddLogFunction(func: LogFunction): void
export function debugConstructTermColor(colorinfo: any): string
export function debugConstructWinColor(colorinfo: any): any
export function debugGetAllCategories(): any[]
export function debugGetDefaultThreshold(): DebugLevel
export function debugIsActive(): any
export function debugIsColored(): any
export function debugLevelGetName(level: DebugLevel): string
export function debugLogDefault(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: any, object: GObject.Object, message: DebugMessage, unused: any): void
export function debugPrintStackTrace(): void
export function debugRemoveLogFunction(func: LogFunction): any
export function debugRemoveLogFunctionByData(data: any): any
export function debugSetActive(active: any): void
export function debugSetColored(colored: any): void
export function debugSetDefaultThreshold(level: DebugLevel): void
export function debugSetThresholdForName(name: string, level: DebugLevel): void
export function debugUnsetThresholdForName(name: string): void
export function defaultRegistryCheckFeatureVersion(featureName: string, minMajor: any, minMinor: any, minMicro: any): any
export function deinit(): void
export function errorGetMessage(domain: GLib.Quark, code: any): string
export function flowGetName(ret: FlowReturn): string
export function flowToQuark(ret: FlowReturn): GLib.Quark
export function formatGetByNick(nick: string): Format
export function formatGetDetails(format: Format): FormatDefinition
export function formatGetName(format: Format): string
export function formatIterateDefinitions(): Iterator
export function formatRegister(nick: string, description: string): Format
export function formatToQuark(format: Format): GLib.Quark
export function formatsContains(formats: Format, format: Format): any
export function implementsInterfaceCast(from: any, type: GObject.Type): any
export function implementsInterfaceCheck(from: any, type: GObject.Type): any
export function init(argv?: string[] | null): { argv: string[] | null }
export function initCheck(argv: string[]): { returnType: any, argc: any }
export function initGetOptionGroup(): GLib.OptionGroup
export function isTagList(p: any): any
export function paramSpecFraction(name: string, nick: string, blurb: string, minNum: any, minDenom: any, maxNum: any, maxDenom: any, defaultNum: any, defaultDenom: any, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecMiniObject(name: string, nick: string, blurb: string, objectType: GObject.Type, flags: GObject.ParamFlags): GObject.ParamSpec
export function parseBinFromDescription(binDescription: string, ghostUnlinkedPads: any): Element
export function parseBinFromDescriptionFull(binDescription: string, ghostUnlinkedPads: any, context: ParseContext, flags: ParseFlags): Element
export function parseLaunch(pipelineDescription: string): Element
export function parseLaunchFull(pipelineDescription: string, context: ParseContext, flags: ParseFlags): Element
export function parseLaunchv(argv: string[]): Element
export function parseLaunchvFull(argv: string[], context: ParseContext, flags: ParseFlags): Element
export function printElementArgs(buf: GLib.String, indent: any, element: Element): void
export function printPadCaps(buf: GLib.String, indent: any, pad: Pad): void
export function segtrapIsEnabled(): any
export function segtrapSetEnabled(enabled: any): void
export function structureEmptyNew(name: string): Structure
export function structureFromString(string: string, end: string[]): Structure
export function structureIdEmptyNew(quark: GLib.Quark): Structure
export function tagExists(tag: string): any
export function tagGetDescription(tag: string): string
export function tagGetFlag(tag: string): TagFlag
export function tagGetNick(tag: string): string
export function tagGetType(tag: string): GObject.Type
export function tagIsFixed(tag: string): any
export function tagListCopyValue(dest: any, list: TagList, tag: string): any
export function tagMergeStringsWithComma(dest: any, src: any): void
export function tagMergeUseFirst(dest: any, src: any): void
export function tagRegister(name: string, flag: TagFlag, type: GObject.Type, nick: string, blurb: string, func: TagMergeFunc): void
export function traceReadTsc(): { dst: any }
export function typeFindHelper(src: Pad, size: any): Caps
export function typeFindHelperForBuffer(obj: Object, buf: Buffer, prob: TypeFindProbability): Caps
export function typeFindHelperForExtension(obj: Object, extension: string): Caps
export function typeFindHelperGetRange(obj: Object, func: TypeFindHelperGetRangeFunction, size: any, prob: TypeFindProbability): Caps
export function typeFindHelperGetRangeExt(obj: Object, func: TypeFindHelperGetRangeFunction, size: any, extension: string, prob: TypeFindProbability): Caps
export function typeFindRegister(plugin: Plugin, name: string, rank: any, func: TypeFindFunction, extensions: string[], possibleCaps: Caps, data: any, dataNotify: GLib.DestroyNotify): any
export function typeRegisterStaticFull(parentType: GObject.Type, typeName: string, classSize: any, baseInit: GObject.BaseInitFunc, baseFinalize: GObject.BaseFinalizeFunc, classInit: GObject.ClassInitFunc, classFinalize: GObject.ClassFinalizeFunc, instanceSize: any, nPreallocs: any, instanceInit: GObject.InstanceInitFunc, valueTable: GObject.TypeValueTable, flags: GObject.TypeFlags): GObject.Type
export function updateRegistry(): any
export function uriConstruct(protocol: string, location: string): string
export function uriGetLocation(uri: string): string
export function uriGetProtocol(uri: string): string
export function uriHasProtocol(uri: string, protocol: string): any
export function uriIsValid(uri: string): any
export function uriProtocolIsSupported(type: URIType, protocol: string): any
export function uriProtocolIsValid(protocol: string): any
export function utilArrayBinarySearch(array: any, numElements: any, elementSize: number, searchFunc: GLib.CompareDataFunc, mode: SearchMode, searchData: any, userData: any): any
export function utilDoubleToFraction(src: number): { destN: any, destD: any }
export function utilDumpMem(mem: any[], size: any): void
export function utilFractionAdd(aN: any, aD: any, bN: any, bD: any): { returnType: any, resN: any, resD: any }
export function utilFractionMultiply(aN: any, aD: any, bN: any, bD: any): { returnType: any, resN: any, resD: any }
export function utilFractionToDouble(srcN: any, srcD: any): { dest: number }
export function utilGdoubleToGuint64(value: number): any
export function utilGetTimestamp(): ClockTime
export function utilGreatestCommonDivisor(a: any, b: any): any
export function utilGuint64ToGdouble(value: any): number
export function utilSeqnumCompare(s1: any, s2: any): number
export function utilSeqnumNext(): any
export function utilSetObjectArg(object: GObject.Object, name: string, value: string): void
export function utilSetValueFromString(value: any, valueStr: string): void
export function utilUint64Scale(val: any, num: any, denom: any): any
export function utilUint64ScaleCeil(val: any, num: any, denom: any): any
export function utilUint64ScaleInt(val: any, num: any, denom: any): any
export function utilUint64ScaleIntCeil(val: any, num: any, denom: any): any
export function utilUint64ScaleIntRound(val: any, num: any, denom: any): any
export function utilUint64ScaleRound(val: any, num: any, denom: any): any
export function valueArrayAppendValue(value: any, appendValue: any): void
export function valueArrayGetSize(value: any): any
export function valueArrayGetValue(value: any, index: any): any
export function valueArrayPrependValue(value: any, prependValue: any): void
export function valueCanCompare(value1: any, value2: any): any
export function valueCanIntersect(value1: any, value2: any): any
export function valueCanSubtract(minuend: any, subtrahend: any): any
export function valueCanUnion(value1: any, value2: any): any
export function valueCompare(value1: any, value2: any): any
export function valueDeserialize(dest: any, src: string): any
export function valueDupMiniObject(value: any): MiniObject
export function valueFractionMultiply(product: any, factor1: any, factor2: any): any
export function valueFractionSubtract(dest: any, minuend: any, subtrahend: any): any
export function valueGetCaps(value: any): Caps
export function valueGetDate(value: any): GLib.Date
export function valueGetDoubleRangeMax(value: any): number
export function valueGetDoubleRangeMin(value: any): number
export function valueGetFourcc(value: any): any
export function valueGetFractionDenominator(value: any): any
export function valueGetFractionNumerator(value: any): any
export function valueGetFractionRangeMax(value: any): any
export function valueGetFractionRangeMin(value: any): any
export function valueGetIntRangeMax(value: any): any
export function valueGetIntRangeMin(value: any): any
export function valueGetMiniObject(value: any): MiniObject
export function valueGetStructure(value: any): Structure
export function valueInitAndCopy(dest: any, src: any): void
export function valueIntersect(dest: any, value1: any, value2: any): any
export function valueIsFixed(value: any): any
export function valueListAppendValue(value: any, appendValue: any): void
export function valueListConcat(dest: any, value1: any, value2: any): void
export function valueListGetSize(value: any): any
export function valueListGetValue(value: any, index: any): any
export function valueListPrependValue(value: any, prependValue: any): void
export function valueRegister(table: ValueTable): void
export function valueRegisterIntersectFunc(type1: GObject.Type, type2: GObject.Type, func: ValueIntersectFunc): void
export function valueRegisterSubtractFunc(minuendType: GObject.Type, subtrahendType: GObject.Type, func: ValueSubtractFunc): void
export function valueRegisterUnionFunc(type1: GObject.Type, type2: GObject.Type, func: ValueUnionFunc): void
export function valueSerialize(value: any): string
export function valueSetCaps(value: any, caps: Caps): void
export function valueSetDate(value: any, date: GLib.Date): void
export function valueSetDoubleRange(value: any, start: number, end: number): void
export function valueSetFourcc(value: any, fourcc: any): void
export function valueSetFraction(value: any, numerator: any, denominator: any): void
export function valueSetFractionRange(value: any, start: any, end: any): void
export function valueSetFractionRangeFull(value: any, numeratorStart: any, denominatorStart: any, numeratorEnd: any, denominatorEnd: any): void
export function valueSetIntRange(value: any, start: any, end: any): void
export function valueSetMiniObject(value: any, miniObject: MiniObject): void
export function valueSetStructure(value: any, structure: Structure): void
export function valueSubtract(dest: any, minuend: any, subtrahend: any): any
export function valueTakeMiniObject(value: any, miniObject: MiniObject): void
export function valueUnion(dest: any, value1: any, value2: any): any
export function version(): { major: any, minor: any, micro: any, nano: any }
export function versionString(): string
export interface BufferListDoFunction {
    (buffer: Buffer): Buffer
}
export interface BufferListFunc {
    (buffer: Buffer, group: any, idx: any): BufferListItem
}
export interface BusFunc {
    (bus: Bus, message: Message, data: any): any
}
export interface BusSyncHandler {
    (bus: Bus, message: Message, data: any): BusSyncReply
}
export interface ClockCallback {
    (clock: Clock, time: ClockTime, id: ClockID): any
}
export interface CollectDataDestroyNotify {
    (data: CollectData): void
}
export interface CollectPadsClipFunction {
    (pads: CollectPads, data: CollectData, buffer: Buffer): Buffer
}
export interface CollectPadsFunction {
    (pads: CollectPads): FlowReturn
}
export interface CopyFunction {
    (object: any): any
}
export interface DataQueueCheckFullFunction {
    (queue: DataQueue, visible: any, bytes: any, time: any, checkdata: any): any
}
export interface DataQueueEmptyCallback {
    (queue: DataQueue, checkdata: any): void
}
export interface DataQueueFullCallback {
    (queue: DataQueue, checkdata: any): void
}
export interface DebugFuncPtr {
    (): void
}
export interface FilterFunc {
    (obj: any): any
}
export interface IndexFilter {
    (index: Index, entry: IndexEntry): any
}
export interface IndexResolver {
    (index: Index, writer: Object, writerString: string[]): any
}
export interface IteratorDisposeFunction {
    (owner: any): void
}
export interface IteratorFoldFunction {
    (item: any, ret: any): any
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
    (category: DebugCategory, level: DebugLevel, file: string, function_: string, line: any, object: GObject.Object, message: DebugMessage, data: any): void
}
export interface MiniObjectCopyFunction {
    (obj: MiniObject): MiniObject
}
export interface MiniObjectFinalizeFunction {
    (obj: MiniObject): void
}
export interface PadAcceptCapsFunction {
    (pad: Pad, caps: Caps): any
}
export interface PadActivateFunction {
    (pad: Pad): any
}
export interface PadActivateModeFunction {
    (pad: Pad, active: any): any
}
export interface PadBlockCallback {
    (pad: Pad, blocked: any): void
}
export interface PadBufferAllocFunction {
    (pad: Pad, offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
}
export interface PadChainFunction {
    (pad: Pad, buffer: Buffer): FlowReturn
}
export interface PadChainListFunction {
    (pad: Pad, list: BufferList): FlowReturn
}
export interface PadCheckGetRangeFunction {
    (pad: Pad): any
}
export interface PadDispatcherFunction {
    (pad: Pad, data: any): any
}
export interface PadEventFunction {
    (pad: Pad, event: Event): any
}
export interface PadFixateCapsFunction {
    (pad: Pad, caps: Caps): void
}
export interface PadGetCapsFunction {
    (pad: Pad): Caps
}
export interface PadGetRangeFunction {
    (pad: Pad, offset: any, length: any, buffer: Buffer): FlowReturn
}
export interface PadIntLinkFunction {
    (pad: Pad): Pad[]
}
export interface PadIterIntLinkFunction {
    (pad: Pad): Iterator
}
export interface PadLinkFunction {
    (pad: Pad, peer: Pad): PadLinkReturn
}
export interface PadQueryFunction {
    (pad: Pad, query: Query): any
}
export interface PadQueryTypeFunction {
    (pad: Pad): QueryType
}
export interface PadSetCapsFunction {
    (pad: Pad, caps: Caps): any
}
export interface PadUnlinkFunction {
    (pad: Pad): void
}
export interface PluginFeatureFilter {
    (feature: PluginFeature): any
}
export interface PluginFilter {
    (plugin: Plugin): any
}
export interface PluginInitFullFunc {
    (plugin: Plugin): any
}
export interface PluginInitFunc {
    (plugin: Plugin): any
}
export interface StructureForeachFunc {
    (fieldId: GLib.Quark, value: any): any
}
export interface StructureMapFunc {
    (fieldId: GLib.Quark, value: any): any
}
export interface TagForeachFunc {
    (list: TagList, tag: string): void
}
export interface TagMergeFunc {
    (dest: any, src: any): void
}
export interface TaskFunction {
    (data: any): void
}
export interface TaskPoolFunction {
    (data: any): void
}
export interface TypeFindFunction {
    (find: TypeFind, data: any): void
}
export interface TypeFindHelperGetRangeFunction {
    (obj: Object, offset: any, length: any, buffer: Buffer): FlowReturn
}
export interface ValueCompareFunc {
    (value1: any, value2: any): any
}
export interface ValueDeserializeFunc {
    (dest: any, s: string): any
}
export interface ValueIntersectFunc {
    (dest: any, value1: any, value2: any): any
}
export interface ValueSerializeFunc {
    (value1: any): string
}
export interface ValueSubtractFunc {
    (dest: any, minuend: any, subtrahend: any): any
}
export interface ValueUnionFunc {
    (dest: any, value1: any, value2: any): any
}
export interface ChildProxy_ConstructProps extends Object_ConstructProps {
}
export class ChildProxy {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.ChildProxy */
    getChildByName(name: string): Object
    getChildByIndex(index: any): Object
    getChildrenCount(): any
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ChildProxy, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ChildProxy, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ChildProxy, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ChildProxy, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChildProxy_ConstructProps)
    _init (config?: ChildProxy_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ImplementsInterface_ConstructProps extends Element_ConstructProps {
}
export class ImplementsInterface {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): any
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: ImplementsInterface) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ImplementsInterface, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ImplementsInterface, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ImplementsInterface_ConstructProps)
    _init (config?: ImplementsInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TagSetter_ConstructProps extends Element_ConstructProps {
}
export class TagSetter {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TagSetter */
    resetTags(): void
    mergeTags(list: TagList, mode: TagMergeMode): void
    addTagValue(mode: TagMergeMode, tag: string, value: any): void
    getTagList(): TagList
    setTagMergeMode(mode: TagMergeMode): void
    getTagMergeMode(): TagMergeMode
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): any
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: TagSetter, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: TagSetter, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TagSetter, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TagSetter, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: TagSetter, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TagSetter, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class URIHandler {
    /* Methods of Gst-0.10.Gst.URIHandler */
    getUriType(): any
    getProtocols(): string[]
    getUri(): string
    setUri(uri: string): any
    newUri(uri: string): void
    /* Signals of Gst-0.10.Gst.URIHandler */
    connect(sigName: "new-uri", callback: (($obj: URIHandler, object: string) => void)): number
    on(sigName: "new-uri", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-uri", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-uri", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-uri", object: string): void
    static name: string
}
export interface Adapter_ConstructProps extends GObject.Object_ConstructProps {
}
export class Adapter {
    /* Fields of Gst-0.10.Gst.Adapter */
    object: GObject.Object
    buflist: any[]
    size: any
    skip: any
    assembledData: any
    assembledSize: any
    assembledLen: any
    buflistEnd: any[]
    priv: AdapterPrivate
    gstReserved: any[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Adapter */
    clear(): void
    push(buf: Buffer): void
    peek(size: any): any[]
    copy(dest: any[], offset: any, size: any): void
    flush(flush: any): void
    take(nbytes: any): any[]
    takeBuffer(nbytes: any): Buffer
    available(): any
    availableFast(): any
    prevTimestamp(): { returnType: ClockTime, distance: any }
    maskedScanUint32(mask: any, pattern: any, offset: any, size: any): any
    maskedScanUint32Peek(mask: any, pattern: any, offset: any, size: any): { returnType: any, value: any }
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Adapter_ConstructProps)
    _init (config?: Adapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Adapter
    static $gtype: GObject.Type
}
export interface BaseSink_ConstructProps extends Element_ConstructProps {
    async?: any
    blocksize?: any
    enableLastBuffer?: any
    maxLateness?: any
    prerollQueueLen?: any
    qos?: any
    renderDelay?: any
    sync?: any
    tsOffset?: any
}
export class BaseSink {
    /* Properties of Gst-0.10.Gst.BaseSink */
    async: any
    blocksize: any
    enableLastBuffer: any
    readonly lastBuffer: Buffer
    maxLateness: any
    prerollQueueLen: any
    qos: any
    renderDelay: any
    sync: any
    tsOffset: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.BaseSink */
    element: Element
    sinkpad: Pad
    padMode: ActivateMode
    offset: any
    canActivatePull: any
    canActivatePush: any
    prerollQueue: GLib.Queue
    prerollQueueMaxLen: any
    prerollQueued: any
    buffersQueued: any
    eventsQueued: any
    eos: any
    eosQueued: any
    needPreroll: any
    havePreroll: any
    playingAsync: any
    haveNewsegment: any
    segment: Segment
    clockId: ClockID
    endTime: ClockTime
    flushing: any
    priv: BaseSinkPrivate
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSink */
    doPreroll(obj: MiniObject): FlowReturn
    waitPreroll(): FlowReturn
    setSync(sync: any): void
    getSync(): any
    setMaxLateness(maxLateness: any): void
    getMaxLateness(): any
    setQosEnabled(enabled: any): void
    isQosEnabled(): any
    setAsyncEnabled(enabled: any): void
    isAsyncEnabled(): any
    setTsOffset(offset: ClockTimeDiff): void
    getTsOffset(): ClockTimeDiff
    getLastBuffer(): Buffer
    setLastBufferEnabled(enable: any): void
    isLastBufferEnabled(): any
    queryLatency(minLatency: ClockTime, maxLatency: ClockTime): { returnType: any, live: any, upstreamLive: any }
    getLatency(): ClockTime
    setRenderDelay(delay: ClockTime): void
    getRenderDelay(): ClockTime
    setBlocksize(blocksize: any): void
    getBlocksize(): any
    waitClock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn
    waitEos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): any
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSink, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSink, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSink, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseSink, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: BaseSink, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseSink, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseSink_ConstructProps)
    _init (config?: BaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseSrc_ConstructProps extends Element_ConstructProps {
    blocksize?: any
    doTimestamp?: any
    numBuffers?: any
    typefind?: any
}
export class BaseSrc {
    /* Properties of Gst-0.10.Gst.BaseSrc */
    blocksize: any
    doTimestamp: any
    numBuffers: any
    typefind: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.BaseSrc */
    element: Element
    srcpad: Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: any
    liveRunning: any
    canActivatePush: any
    padMode: ActivateMode
    seekable: any
    randomAccess: any
    clockId: ClockID
    endTime: ClockTime
    segment: Segment
    needNewsegment: any
    offset: any
    size: any
    numBuffersLeft: any
    priv: BaseSrcPrivate
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSrc */
    waitPlaying(): FlowReturn
    setLive(live: any): void
    setFormat(format: Format): void
    queryLatency(minLatency: ClockTime, maxLatency: ClockTime): { returnType: any, live: any }
    setBlocksize(blocksize: any): void
    getBlocksize(): any
    setDoTimestamp(timestamp: any): void
    getDoTimestamp(): any
    newSeamlessSegment(start: any, stop: any, position: any): any
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): any
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSrc, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSrc, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseSrc, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: BaseSrc, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseSrc, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseSrc_ConstructProps)
    _init (config?: BaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseTransform_ConstructProps extends Element_ConstructProps {
    qos?: any
}
export class BaseTransform {
    /* Properties of Gst-0.10.Gst.BaseTransform */
    qos: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.BaseTransform */
    element: Element
    sinkpad: Pad
    srcpad: Pad
    passthrough: any
    alwaysInPlace: any
    cacheCaps1: Caps
    cacheCaps1Size: any
    cacheCaps2: Caps
    cacheCaps2Size: any
    haveSameCaps: any
    delayConfigure: any
    pendingConfigure: any
    negotiated: any
    haveNewsegment: any
    segment: Segment
    transformLock: GLib.Mutex
    priv: BaseTransformPrivate
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseTransform */
    setPassthrough(passthrough: any): void
    isPassthrough(): any
    setInPlace(inPlace: any): void
    isInPlace(): any
    updateQos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void
    setQosEnabled(enabled: any): void
    isQosEnabled(): any
    setGapAware(gapAware: any): void
    suggest(caps: Caps, size: any): void
    reconfigure(): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): any
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseTransform, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseTransform, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseTransform, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseTransform, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: BaseTransform, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseTransform, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseTransform_ConstructProps)
    _init (config?: BaseTransform_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Bin_ConstructProps extends Element_ConstructProps {
    asyncHandling?: any
}
export class Bin {
    /* Properties of Gst-0.10.Gst.Bin */
    asyncHandling: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Bin */
    element: Element
    numchildren: any
    children: any[]
    childrenCookie: any
    childBus: Bus
    messages: any[]
    polling: any
    stateDirty: any
    clockDirty: any
    providedClock: Clock
    clockProvider: Element
    priv: BinPrivate
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Element): any
    remove(element: Element): any
    getByName(name: string): Element
    getByNameRecurseUp(name: string): Element
    getByInterface(iface: GObject.Type): Element
    iterateElements(): Iterator
    iterateSorted(): Iterator
    iterateRecurse(): Iterator
    iterateSinks(): Iterator
    iterateSources(): Iterator
    iterateAllByInterface(iface: GObject.Type): Iterator
    recalculateLatency(): any
    findUnlinkedPad(direction: PadDirection): Pad
    findUnconnectedPad(direction: PadDirection): Pad
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): any
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gst-0.10.Gst.ChildProxy */
    getChildByName(name: string): Object
    getChildByIndex(index: any): Object
    getChildrenCount(): any
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (($obj: Bin) => any)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Bin, object: Element) => void)): number
    on(sigName: "element-added", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (object: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", object: Element): void
    connect(sigName: "element-removed", callback: (($obj: Bin, object: Element) => void)): number
    on(sigName: "element-removed", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (object: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", object: Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Bin, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Bin, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bin, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Bin, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Bin, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Bin, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Bin, object: GObject.Object) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: Bin, object: GObject.Object) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object): void
    connect(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(name: string): Bin
    static $gtype: GObject.Type
}
export class Buffer {
    /* Fields of Gst-0.10.Gst.Buffer */
    miniObject: MiniObject
    data: any
    size: any
    timestamp: ClockTime
    duration: ClockTime
    caps: Caps
    offset: any
    offsetEnd: any
    mallocData: any
    freeFunc: GLib.FreeFunc
    parent: Buffer
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    /* Methods of Gst-0.10.Gst.Buffer */
    copyMetadata(src: Buffer, flags: BufferCopyFlags): void
    isMetadataWritable(): any
    makeMetadataWritable(): Buffer
    getCaps(): Caps
    setCaps(caps: Caps): void
    createSub(offset: any, size: any): Buffer
    isSpanFast(buf2: Buffer): any
    span(offset: any, buf2: Buffer, len: any): Buffer
    merge(buf2: Buffer): Buffer
    join(buf2: Buffer): Buffer
    stamp(src: Buffer): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): any
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    static new(): Buffer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Buffer
    static new(type: GObject.Type): Buffer
    static newAndAlloc(size: any): Buffer
    static tryNewAndAlloc(size: any): Buffer
}
export class BufferList {
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    gstReserved: any
    /* Methods of Gst-0.10.Gst.BufferList */
    nGroups(): any
    foreach(func: BufferListFunc, userData: any): void
    get(group: any, idx: any): Buffer
    iterate(): BufferListIterator
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): any
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    static new(): BufferList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BufferList
    static new(type: GObject.Type): BufferList
}
export interface Bus_ConstructProps extends Object_ConstructProps {
}
export class Bus {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Bus */
    object: Object
    queue: GLib.Queue
    queueLock: GLib.Mutex
    syncHandler: BusSyncHandler
    syncHandlerData: any
    signalWatchId: any
    numSignalWatchers: any
    priv: BusPrivate
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Bus */
    post(message: Message): any
    havePending(): any
    peek(): Message
    pop(): Message
    popFiltered(types: MessageType): Message
    timedPop(timeout: ClockTime): Message
    timedPopFiltered(timeout: ClockTime, types: MessageType): Message
    setFlushing(flushing: any): void
    setSyncHandler(func: BusSyncHandler, data: any): void
    createWatch(): GLib.Source
    addWatchFull(priority: any, func: BusFunc, userData: any): any
    addWatch(func: BusFunc, userData: any): any
    poll(events: MessageType, timeout: ClockTimeDiff): Message
    asyncSignalFunc(message: Message, data: any): any
    syncSignalHandler(message: Message, data: any): BusSyncReply
    addSignalWatch(): void
    addSignalWatchFull(priority: any): void
    removeSignalWatch(): void
    enableSyncMessageEmission(): void
    disableSyncMessageEmission(): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Bus */
    connect(sigName: "message", callback: (($obj: Bus, object: Message) => void)): number
    on(sigName: "message", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message", callback: (object: Message) => void): NodeJS.EventEmitter
    emit(sigName: "message", object: Message): void
    connect(sigName: "sync-message", callback: (($obj: Bus, object: Message) => void)): number
    on(sigName: "sync-message", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sync-message", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sync-message", callback: (object: Message) => void): NodeJS.EventEmitter
    emit(sigName: "sync-message", object: Message): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bus, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Bus, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Bus, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Bus, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    stats?: any
    timeout?: any
    windowSize?: any
    windowThreshold?: any
}
export class Clock {
    /* Properties of Gst-0.10.Gst.Clock */
    stats: any
    timeout: any
    windowSize: any
    windowThreshold: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Clock */
    object: Object
    slaveLock: GLib.Mutex
    internalCalibration: ClockTime
    externalCalibration: ClockTime
    rateNumerator: ClockTime
    rateDenominator: ClockTime
    lastTime: ClockTime
    entries: any[]
    entriesChanged: GLib.Cond
    resolution: ClockTime
    master: Clock
    filling: any
    timeIndex: any
    times: ClockTime
    clockid: ClockID
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Clock */
    setResolution(resolution: ClockTime): ClockTime
    getResolution(): ClockTime
    getTime(): ClockTime
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    getCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master: Clock): any
    getMaster(): Clock
    addObservation(slave: ClockTime, master: ClockTime): { returnType: any, rSquared: number }
    getInternalTime(): ClockTime
    adjustUnlocked(internal: ClockTime): ClockTime
    unadjustUnlocked(external: ClockTime): ClockTime
    newSingleShotId(time: ClockTime): ClockID
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Clock, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Clock, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Clock, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Clock, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::stats", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static idRef(id: ClockID): ClockID
    static idUnref(id: ClockID): void
    static idCompareFunc(id1: any, id2: any): any
    static idGetTime(id: ClockID): ClockTime
    static idWait(id: ClockID, jitter: ClockTimeDiff): ClockReturn
    static idWaitAsync(id: ClockID, func: ClockCallback): ClockReturn
    static idWaitAsyncFull(id: ClockID, func: ClockCallback): ClockReturn
    static idUnschedule(id: ClockID): void
    static $gtype: GObject.Type
}
export interface CollectPads_ConstructProps extends Object_ConstructProps {
}
export class CollectPads {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.CollectPads */
    object: Object
    data: any[]
    cookie: any
    cond: GLib.Cond
    func: CollectPadsFunction
    userData: any
    numpads: any
    queuedpads: any
    eospads: any
    started: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.CollectPads */
    setFunction(func: CollectPadsFunction, userData: any): void
    setClipFunction(clipfunc: CollectPadsClipFunction, userData: any): void
    addPad(pad: Pad, size: any): CollectData
    addPadFull(pad: Pad, size: any, destroyNotify: CollectDataDestroyNotify): CollectData
    removePad(pad: Pad): any
    isActive(pad: Pad): any
    collect(): FlowReturn
    collectRange(offset: any, length: any): FlowReturn
    start(): void
    stop(): void
    setFlushing(flushing: any): void
    peek(data: CollectData): Buffer
    pop(data: CollectData): Buffer
    available(): any
    read(data: CollectData, size: any): { returnType: any, bytes: any }
    readBuffer(data: CollectData, size: any): Buffer
    takeBuffer(data: CollectData, size: any): Buffer
    flush(data: CollectData, size: any): any
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: CollectPads, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: CollectPads, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: CollectPads, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: CollectPads, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CollectPads_ConstructProps)
    _init (config?: CollectPads_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CollectPads
    static $gtype: GObject.Type
}
export interface DataQueue_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataQueue {
    /* Properties of Gst-0.10.Gst.DataQueue */
    readonly currentLevelBytes: any
    readonly currentLevelTime: any
    readonly currentLevelVisible: any
    /* Fields of Gst-0.10.Gst.DataQueue */
    object: GObject.Object
    queue: GLib.Queue
    curLevel: DataQueueSize
    checkfull: DataQueueCheckFullFunction
    checkdata: any
    qlock: GLib.Mutex
    itemAdd: GLib.Cond
    itemDel: GLib.Cond
    flushing: any
    fullcallback: DataQueueFullCallback
    emptycallback: DataQueueEmptyCallback
    gstReserved: any[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.DataQueue */
    push(item: DataQueueItem): any
    pop(item: DataQueueItem): any
    flush(): void
    setFlushing(flushing: any): void
    dropHead(type: GObject.Type): any
    isFull(): any
    isEmpty(): any
    getLevel(level: DataQueueSize): void
    limitsChanged(): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.DataQueue */
    connect(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    on(sigName: "empty", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "empty", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "empty", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (($obj: DataQueue) => void)): number
    on(sigName: "full", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "full", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "full", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataQueue_ConstructProps)
    _init (config?: DataQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(checkfull: DataQueueCheckFullFunction): DataQueue
    static newFull(checkfull: DataQueueCheckFullFunction, fullcallback: DataQueueFullCallback, emptycallback: DataQueueEmptyCallback): DataQueue
    static $gtype: GObject.Type
}
export interface Element_ConstructProps extends Object_ConstructProps {
}
export class Element {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): any
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Element, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Element, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Element, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Element, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Element, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Element, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static register(plugin: Plugin, name: string, rank: any, type: GObject.Type): any
    static makeFromUri(type: URIType, uri: string, elementname: string): Element
    static stateGetName(state: State): string
    static stateChangeReturnGetName(stateRet: StateChangeReturn): string
    static addPadTemplate(templ: PadTemplate): void
    static getPadTemplate(name: string): PadTemplate
    static setDetails(details: ElementDetails): void
    static setDetailsSimple(longname: string, classification: string, description: string, author: string): void
    static $gtype: GObject.Type
}
export interface ElementFactory_ConstructProps extends PluginFeature_ConstructProps {
}
export class ElementFactory {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.ElementFactory */
    parent: PluginFeature
    type: GObject.Type
    details: ElementDetails
    staticpadtemplates: any[]
    numpadtemplates: any
    uriType: any
    uriProtocols: string
    interfaces: any[]
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.PluginFeature */
    object: Object
    loaded: any
    rank: any
    pluginName: string
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.ElementFactory */
    getElementType(): GObject.Type
    getLongname(): string
    getKlass(): string
    getDescription(): string
    getAuthor(): string
    getNumPadTemplates(): any
    getUriType(): any
    getUriProtocols(): string[]
    hasInterface(interfacename: string): any
    create(name: string): Element
    canSrcCaps(caps: Caps): any
    canSinkCaps(caps: Caps): any
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    typeNameFilter(data: TypeNameData): any
    setRank(rank: any): void
    setName(name: string): void
    getRank(): any
    getName(): string
    checkVersion(minMajor: any, minMinor: any, minMicro: any): any
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ElementFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ElementFactory, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ElementFactory, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ElementFactory, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static find(name: string): ElementFactory
    static make(factoryname: string, name: string): Element
    static $gtype: GObject.Type
}
export class Event {
    /* Fields of Gst-0.10.Gst.Event */
    miniObject: MiniObject
    type: EventType
    timestamp: any
    src: Object
    structure: Structure
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    gstReserved: any
    /* Methods of Gst-0.10.Gst.Event */
    getStructure(): Structure
    hasName(name: string): any
    getSeqnum(): any
    setSeqnum(seqnum: any): void
    parseNewSegment(format: Format): { update: any, rate: number, start: any, stop: any, position: any }
    parseNewSegmentFull(format: Format): { update: any, rate: number, appliedRate: number, start: any, stop: any, position: any }
    parseTag(taglist: TagList): void
    parseBufferSize(format: Format): { minsize: any, maxsize: any, async: any }
    parseQos(diff: ClockTimeDiff, timestamp: ClockTime): { proportion: number }
    parseSeek(format: Format, flags: SeekFlags, startType: SeekType, stopType: SeekType): { rate: number, start: any, stop: any }
    parseLatency(latency: ClockTime): void
    parseStep(format: Format): { amount: any, rate: number, flush: any, intermediate: any }
    parseSinkMessage(msg: Message): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): any
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newCustom(type: EventType, structure: Structure): Event
    static newFlushStart(): Event
    static newFlushStop(): Event
    static newEos(): Event
    static newNewSegment(update: any, rate: number, format: Format, start: any, stop: any, position: any): Event
    static newNewSegmentFull(update: any, rate: number, appliedRate: number, format: Format, start: any, stop: any, position: any): Event
    static newTag(taglist: TagList): Event
    static newBufferSize(format: Format, minsize: any, maxsize: any, async: any): Event
    static newQos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static newSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: any, stopType: SeekType, stop: any): Event
    static newNavigation(structure: Structure): Event
    static newLatency(latency: ClockTime): Event
    static newStep(format: Format, amount: any, rate: number, flush: any, intermediate: any): Event
    static newSinkMessage(msg: Message): Event
    static typeGetName(type: EventType): string
    static typeToQuark(type: EventType): GLib.Quark
    static typeGetFlags(type: EventType): EventTypeFlags
}
export interface GParamSpecMiniObject_ConstructProps extends GObject.Object_ConstructProps {
}
export class GParamSpecMiniObject {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GParamSpecMiniObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GParamSpecMiniObject_ConstructProps)
    _init (config?: GParamSpecMiniObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GhostPad_ConstructProps extends ProxyPad_ConstructProps {
}
export class GhostPad {
    /* Properties of Gst-0.10.Gst.Pad */
    readonly caps: Caps
    template: PadTemplate
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.GhostPad */
    pad: ProxyPad
    priv: GhostPadPrivate
    /* Fields of Gst-0.10.Gst.Pad */
    object: Object
    elementPrivate: any
    padtemplate: PadTemplate
    direction: PadDirection
    streamRecLock: any
    task: Task
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    blockCond: GLib.Cond
    blockCallback: PadBlockCallback
    blockData: any
    getcapsfunc: PadGetCapsFunction
    setcapsfunc: PadSetCapsFunction
    acceptcapsfunc: PadAcceptCapsFunction
    fixatecapsfunc: PadFixateCapsFunction
    activatefunc: PadActivateFunction
    activatepushfunc: PadActivateModeFunction
    activatepullfunc: PadActivateModeFunction
    linkfunc: PadLinkFunction
    unlinkfunc: PadUnlinkFunction
    peer: Pad
    schedPrivate: any
    chainfunc: PadChainFunction
    checkgetrangefunc: PadCheckGetRangeFunction
    getrangefunc: PadGetRangeFunction
    eventfunc: PadEventFunction
    mode: ActivateMode
    querytypefunc: PadQueryTypeFunction
    queryfunc: PadQueryFunction
    intlinkfunc: PadIntLinkFunction
    bufferallocfunc: PadBufferAllocFunction
    doBufferSignals: any
    doEventSignals: any
    iterintlinkfunc: PadIterIntLinkFunction
    blockDestroyData: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.GhostPad */
    getTarget(): Pad
    setTarget(newtarget: Pad): any
    construct(): any
    /* Methods of Gst-0.10.Gst.Pad */
    getDirection(): PadDirection
    setActive(active: any): any
    isActive(): any
    activatePull(active: any): any
    activatePush(active: any): any
    setBlocked(blocked: any): any
    setBlockedAsync(blocked: any, callback: PadBlockCallback, userData: any): any
    setBlockedAsyncFull(blocked: any, callback: PadBlockCallback, userData: any): any
    isBlocked(): any
    isBlocking(): any
    setElementPrivate(priv: any): void
    getElementPrivate(): any
    getPadTemplate(): PadTemplate
    setBufferallocFunction(bufalloc: PadBufferAllocFunction): void
    allocBuffer(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    allocBufferAndSetCaps(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    setActivateFunction(activate: PadActivateFunction): void
    setActivatepullFunction(activatepull: PadActivateModeFunction): void
    setActivatepushFunction(activatepush: PadActivateModeFunction): void
    setChainFunction(chain: PadChainFunction): void
    setChainListFunction(chainlist: PadChainListFunction): void
    setGetrangeFunction(get: PadGetRangeFunction): void
    setCheckgetrangeFunction(check: PadCheckGetRangeFunction): void
    setEventFunction(event: PadEventFunction): void
    setLinkFunction(link: PadLinkFunction): void
    setUnlinkFunction(unlink: PadUnlinkFunction): void
    canLink(sinkpad: Pad): any
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): any
    isLinked(): any
    getPeer(): Pad
    setGetcapsFunction(getcaps: PadGetCapsFunction): void
    setAcceptcapsFunction(acceptcaps: PadAcceptCapsFunction): void
    setFixatecapsFunction(fixatecaps: PadFixateCapsFunction): void
    setSetcapsFunction(setcaps: PadSetCapsFunction): void
    getPadTemplateCaps(): Caps
    getCapsReffed(): Caps
    getCaps(): Caps
    fixateCaps(caps: Caps): void
    acceptCaps(caps: Caps): any
    setCaps(caps: Caps): any
    peerGetCapsReffed(): Caps
    peerGetCaps(): Caps
    peerAcceptCaps(caps: Caps): any
    getAllowedCaps(): Caps
    getNegotiatedCaps(): Caps
    push(buffer: Buffer): FlowReturn
    pushList(list: BufferList): FlowReturn
    checkPullRange(): any
    pullRange(offset: any, size: any, buffer: Buffer): FlowReturn
    pushEvent(event: Event): any
    eventDefault(event: Event): any
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    getRange(offset: any, size: any, buffer: Buffer): FlowReturn
    sendEvent(event: Event): any
    startTask(func: TaskFunction, data: any): any
    pauseTask(): any
    stopTask(): any
    setInternalLinkFunction(intlink: PadIntLinkFunction): void
    setIterateInternalLinksFunction(iterintlink: PadIterIntLinkFunction): void
    iterateInternalLinks(): Iterator
    iterateInternalLinksDefault(): Iterator
    setQueryTypeFunction(typeFunc: PadQueryTypeFunction): void
    getQueryTypes(): QueryType
    getQueryTypesDefault(): QueryType
    query(query: Query): any
    peerQuery(query: Query): any
    setQueryFunction(query: PadQueryFunction): void
    queryDefault(query: Query): any
    dispatcher(dispatch: PadDispatcherFunction, data: any): any
    useFixedCaps(): void
    getFixedCapsFunc(): Caps
    proxyGetcaps(): Caps
    proxySetcaps(caps: Caps): any
    getParentElement(): Element
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    queryPeerPosition(format: Format): { returnType: any, cur: any }
    queryPeerDuration(format: Format): { returnType: any, duration: any }
    queryPeerConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    addDataProbe(handler: GObject.Callback, data: any): any
    addDataProbeFull(handler: GObject.Callback, data: any): any
    removeDataProbe(handlerId: any): void
    addEventProbe(handler: GObject.Callback, data: any): any
    addEventProbeFull(handler: GObject.Callback, data: any): any
    removeEventProbe(handlerId: any): void
    addBufferProbe(handler: GObject.Callback, data: any): any
    addBufferProbeFull(handler: GObject.Callback, data: any): any
    removeBufferProbe(handlerId: any): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: GhostPad, object: MiniObject) => any)): number
    on(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "have-data", callback: (object: MiniObject) => void): NodeJS.EventEmitter
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: GhostPad, object: Pad) => void)): number
    on(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: GhostPad) => void)): number
    on(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-link", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: GhostPad, object: Pad) => void)): number
    on(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GhostPad, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: GhostPad, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: GhostPad, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: GhostPad, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(name: string, target: Pad): GhostPad
    static new(name: string, direction: PadDirection): GhostPad
    static newNoTarget(name: string, dir: PadDirection): GhostPad
    static newFromTemplate(name: string, target: Pad, templ: PadTemplate): GhostPad
    static newFromTemplate(templ: PadTemplate, name: string): GhostPad
    static newNoTargetFromTemplate(name: string, templ: PadTemplate): GhostPad
    static $gtype: GObject.Type
}
export interface Index_ConstructProps extends Object_ConstructProps {
    resolver?: IndexResolver
}
export class Index {
    /* Properties of Gst-0.10.Gst.Index */
    resolver: IndexResolver
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Index */
    object: Object
    groups: any[]
    curgroup: IndexGroup
    maxgroup: any
    method: IndexResolverMethod
    resolverUserData: any
    filter: IndexFilter
    filterUserData: any
    filterUserDataDestroy: GLib.DestroyNotify
    writers: GLib.HashTable
    lastId: any
    resolverUserDataDestroy: GLib.DestroyNotify
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Index */
    commit(id: any): void
    getGroup(): any
    newGroup(): any
    setGroup(groupnum: any): any
    setCertainty(certainty: IndexCertainty): void
    getCertainty(): IndexCertainty
    setFilter(filter: IndexFilter, userData: any): void
    setFilterFull(filter: IndexFilter, userData: any): void
    setResolver(resolver: IndexResolver, userData: any): void
    setResolverFull(resolver: IndexResolver, userData: any): void
    getWriterId(writer: Object): { returnType: any, id: any }
    addFormat(id: any, format: Format): IndexEntry
    addAssociationv(id: any, flags: AssocFlags, n: any, list: IndexAssociation): IndexEntry
    addObject(id: any, key: string, type: GObject.Type, object: any): IndexEntry
    addId(id: any, description: string): IndexEntry
    getAssocEntry(id: any, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: any): IndexEntry
    getAssocEntryFull(id: any, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: any, func: GLib.CompareDataFunc, userData: any): IndexEntry
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Index */
    connect(sigName: "entry-added", callback: (($obj: Index, object: IndexEntry) => void)): number
    on(sigName: "entry-added", callback: (object: IndexEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "entry-added", callback: (object: IndexEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "entry-added", callback: (object: IndexEntry) => void): NodeJS.EventEmitter
    emit(sigName: "entry-added", object: IndexEntry): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Index, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Index, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Index, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Index, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::resolver", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolver", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Index
    static $gtype: GObject.Type
}
export interface IndexFactory_ConstructProps extends PluginFeature_ConstructProps {
}
export class IndexFactory {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.IndexFactory */
    feature: PluginFeature
    longdesc: string
    type: GObject.Type
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.PluginFeature */
    object: Object
    loaded: any
    rank: any
    pluginName: string
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.IndexFactory */
    destroy(): void
    create(): Index
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    typeNameFilter(data: TypeNameData): any
    setRank(rank: any): void
    setName(name: string): void
    getRank(): any
    getName(): string
    checkVersion(minMajor: any, minMinor: any, minMicro: any): any
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: IndexFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: IndexFactory, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: IndexFactory, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: IndexFactory, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IndexFactory_ConstructProps)
    _init (config?: IndexFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, longdesc: string, type: GObject.Type): IndexFactory
    static find(name: string): IndexFactory
    static make(name: string): Index
    static $gtype: GObject.Type
}
export class Message {
    /* Fields of Gst-0.10.Gst.Message */
    miniObject: MiniObject
    lock: GLib.Mutex
    cond: GLib.Cond
    type: MessageType
    timestamp: any
    src: Object
    structure: Structure
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    gstReserved: any
    /* Methods of Gst-0.10.Gst.Message */
    getSeqnum(): any
    setSeqnum(seqnum: any): void
    parseError(gerror: GLib.Error, debug: string[]): void
    parseWarning(gerror: GLib.Error, debug: string[]): void
    parseInfo(gerror: GLib.Error, debug: string[]): void
    parseTag(tagList: TagList): void
    parseTagFull(pad: Pad, tagList: TagList): void
    parseBuffering(): { percent: any }
    setBufferingStats(mode: BufferingMode, avgIn: any, avgOut: any, bufferingLeft: any): void
    parseBufferingStats(mode: BufferingMode): { avgIn: any, avgOut: any, bufferingLeft: any }
    parseStateChanged(oldstate: State, newstate: State, pending: State): void
    parseStepDone(format: Format): { amount: any, rate: number, flush: any, intermediate: any, duration: any, eos: any }
    parseClockProvide(clock: Clock): { ready: any }
    parseClockLost(clock: Clock): void
    parseNewClock(clock: Clock): void
    parseSegmentStart(format: Format): { position: any }
    parseSegmentDone(format: Format): { position: any }
    parseDuration(format: Format): { duration: any }
    parseAsyncStart(): { newBaseTime: any }
    parseStructureChange(type: StructureChangeType, owner: Element): { busy: any }
    parseStreamStatus(type: StreamStatusType, owner: Element): void
    setStreamStatusObject(object: any): void
    getStreamStatusObject(): any
    parseRequestState(state: State): void
    parseStepStart(format: Format): { active: any, amount: any, rate: number, flush: any, intermediate: any }
    setQosValues(jitter: any, proportion: number, quality: any): void
    setQosStats(format: Format, processed: any, dropped: any): void
    parseQos(): { live: any, runningTime: any, streamTime: any, timestamp: any, duration: any }
    parseQosValues(): { jitter: any, proportion: number, quality: any }
    parseQosStats(format: Format): { processed: any, dropped: any }
    getStructure(): Structure
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): any
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newEos(src: Object): Message
    static newError(src: Object, error: GLib.Error, debug: string): Message
    static newWarning(src: Object, error: GLib.Error, debug: string): Message
    static newInfo(src: Object, error: GLib.Error, debug: string): Message
    static newTag(src: Object, tagList: TagList): Message
    static newTagFull(src: Object, pad: Pad, tagList: TagList): Message
    static newBuffering(src: Object, percent: any): Message
    static newStateChanged(src: Object, oldstate: State, newstate: State, pending: State): Message
    static newStateDirty(src: Object): Message
    static newStepDone(src: Object, format: Format, amount: any, rate: number, flush: any, intermediate: any, duration: any, eos: any): Message
    static newClockProvide(src: Object, clock: Clock, ready: any): Message
    static newClockLost(src: Object, clock: Clock): Message
    static newNewClock(src: Object, clock: Clock): Message
    static newApplication(src: Object, structure: Structure): Message
    static newElement(src: Object, structure: Structure): Message
    static newSegmentStart(src: Object, format: Format, position: any): Message
    static newSegmentDone(src: Object, format: Format, position: any): Message
    static newDuration(src: Object, format: Format, duration: any): Message
    static newLatency(src: Object): Message
    static newAsyncStart(src: Object, newBaseTime: any): Message
    static newAsyncDone(src: Object): Message
    static newStructureChange(src: Object, type: StructureChangeType, owner: Element, busy: any): Message
    static newStreamStatus(src: Object, type: StreamStatusType, owner: Element): Message
    static newRequestState(src: Object, state: State): Message
    static newStepStart(src: Object, active: any, format: Format, amount: any, rate: number, flush: any, intermediate: any): Message
    static newQos(src: Object, live: any, runningTime: any, streamTime: any, timestamp: any, duration: any): Message
    static newCustom(type: MessageType, src: Object, structure: Structure): Message
    static typeGetName(type: MessageType): string
    static typeToQuark(type: MessageType): GLib.Quark
}
export class MiniObject {
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    gstReserved: any
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): any
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    static new(type: GObject.Type): MiniObject
    constructor(type: GObject.Type)
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type): MiniObject
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
export class Object {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Object, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Object, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Object, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Object, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static defaultDeepNotify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excludedProps: string[]): void
    static ref(object: any): any
    static unref(object: any): void
    static refSink(object: any): void
    static sink(object: any): void
    static $gtype: GObject.Type
}
export interface Pad_ConstructProps extends Object_ConstructProps {
    direction?: PadDirection
    template?: PadTemplate
}
export class Pad {
    /* Properties of Gst-0.10.Gst.Pad */
    readonly caps: Caps
    template: PadTemplate
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Pad */
    object: Object
    elementPrivate: any
    padtemplate: PadTemplate
    direction: PadDirection
    streamRecLock: any
    task: Task
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    blockCond: GLib.Cond
    blockCallback: PadBlockCallback
    blockData: any
    getcapsfunc: PadGetCapsFunction
    setcapsfunc: PadSetCapsFunction
    acceptcapsfunc: PadAcceptCapsFunction
    fixatecapsfunc: PadFixateCapsFunction
    activatefunc: PadActivateFunction
    activatepushfunc: PadActivateModeFunction
    activatepullfunc: PadActivateModeFunction
    linkfunc: PadLinkFunction
    unlinkfunc: PadUnlinkFunction
    peer: Pad
    schedPrivate: any
    chainfunc: PadChainFunction
    checkgetrangefunc: PadCheckGetRangeFunction
    getrangefunc: PadGetRangeFunction
    eventfunc: PadEventFunction
    mode: ActivateMode
    querytypefunc: PadQueryTypeFunction
    queryfunc: PadQueryFunction
    intlinkfunc: PadIntLinkFunction
    bufferallocfunc: PadBufferAllocFunction
    doBufferSignals: any
    doEventSignals: any
    iterintlinkfunc: PadIterIntLinkFunction
    blockDestroyData: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pad */
    getDirection(): PadDirection
    setActive(active: any): any
    isActive(): any
    activatePull(active: any): any
    activatePush(active: any): any
    setBlocked(blocked: any): any
    setBlockedAsync(blocked: any, callback: PadBlockCallback, userData: any): any
    setBlockedAsyncFull(blocked: any, callback: PadBlockCallback, userData: any): any
    isBlocked(): any
    isBlocking(): any
    setElementPrivate(priv: any): void
    getElementPrivate(): any
    getPadTemplate(): PadTemplate
    setBufferallocFunction(bufalloc: PadBufferAllocFunction): void
    allocBuffer(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    allocBufferAndSetCaps(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    setActivateFunction(activate: PadActivateFunction): void
    setActivatepullFunction(activatepull: PadActivateModeFunction): void
    setActivatepushFunction(activatepush: PadActivateModeFunction): void
    setChainFunction(chain: PadChainFunction): void
    setChainListFunction(chainlist: PadChainListFunction): void
    setGetrangeFunction(get: PadGetRangeFunction): void
    setCheckgetrangeFunction(check: PadCheckGetRangeFunction): void
    setEventFunction(event: PadEventFunction): void
    setLinkFunction(link: PadLinkFunction): void
    setUnlinkFunction(unlink: PadUnlinkFunction): void
    canLink(sinkpad: Pad): any
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): any
    isLinked(): any
    getPeer(): Pad
    setGetcapsFunction(getcaps: PadGetCapsFunction): void
    setAcceptcapsFunction(acceptcaps: PadAcceptCapsFunction): void
    setFixatecapsFunction(fixatecaps: PadFixateCapsFunction): void
    setSetcapsFunction(setcaps: PadSetCapsFunction): void
    getPadTemplateCaps(): Caps
    getCapsReffed(): Caps
    getCaps(): Caps
    fixateCaps(caps: Caps): void
    acceptCaps(caps: Caps): any
    setCaps(caps: Caps): any
    peerGetCapsReffed(): Caps
    peerGetCaps(): Caps
    peerAcceptCaps(caps: Caps): any
    getAllowedCaps(): Caps
    getNegotiatedCaps(): Caps
    push(buffer: Buffer): FlowReturn
    pushList(list: BufferList): FlowReturn
    checkPullRange(): any
    pullRange(offset: any, size: any, buffer: Buffer): FlowReturn
    pushEvent(event: Event): any
    eventDefault(event: Event): any
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    getRange(offset: any, size: any, buffer: Buffer): FlowReturn
    sendEvent(event: Event): any
    startTask(func: TaskFunction, data: any): any
    pauseTask(): any
    stopTask(): any
    setInternalLinkFunction(intlink: PadIntLinkFunction): void
    setIterateInternalLinksFunction(iterintlink: PadIterIntLinkFunction): void
    iterateInternalLinks(): Iterator
    iterateInternalLinksDefault(): Iterator
    setQueryTypeFunction(typeFunc: PadQueryTypeFunction): void
    getQueryTypes(): QueryType
    getQueryTypesDefault(): QueryType
    query(query: Query): any
    peerQuery(query: Query): any
    setQueryFunction(query: PadQueryFunction): void
    queryDefault(query: Query): any
    dispatcher(dispatch: PadDispatcherFunction, data: any): any
    useFixedCaps(): void
    getFixedCapsFunc(): Caps
    proxyGetcaps(): Caps
    proxySetcaps(caps: Caps): any
    getParentElement(): Element
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    queryPeerPosition(format: Format): { returnType: any, cur: any }
    queryPeerDuration(format: Format): { returnType: any, duration: any }
    queryPeerConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    addDataProbe(handler: GObject.Callback, data: any): any
    addDataProbeFull(handler: GObject.Callback, data: any): any
    removeDataProbe(handlerId: any): void
    addEventProbe(handler: GObject.Callback, data: any): any
    addEventProbeFull(handler: GObject.Callback, data: any): any
    removeEventProbe(handlerId: any): void
    addBufferProbe(handler: GObject.Callback, data: any): any
    addBufferProbeFull(handler: GObject.Callback, data: any): any
    removeBufferProbe(handlerId: any): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: Pad, object: MiniObject) => any)): number
    on(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "have-data", callback: (object: MiniObject) => void): NodeJS.EventEmitter
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: Pad, object: Pad) => void)): number
    on(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: Pad) => void)): number
    on(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-link", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: Pad, object: Pad) => void)): number
    on(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pad, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Pad, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Pad, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Pad, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(name: string, direction: PadDirection): Pad
    static newFromTemplate(templ: PadTemplate, name: string): Pad
    static newFromStaticTemplate(templ: StaticPadTemplate, name: string): Pad
    static loadAndLink(self: libxml2.NodePtr, parent: Object): void
    static $gtype: GObject.Type
}
export interface PadTemplate_ConstructProps extends Object_ConstructProps {
    caps?: Caps
    direction?: PadDirection
    nameTemplate?: string
    presence?: PadPresence
}
export class PadTemplate {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.PadTemplate */
    object: Object
    nameTemplate: string
    direction: PadDirection
    presence: PadPresence
    caps: Caps
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.PadTemplate */
    getCaps(): Caps
    padCreated(pad: Pad): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.PadTemplate */
    connect(sigName: "pad-created", callback: (($obj: PadTemplate, object: Pad) => void)): number
    on(sigName: "pad-created", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-created", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-created", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-created", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PadTemplate, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PadTemplate, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: PadTemplate, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PadTemplate, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface ParamFraction_ConstructProps extends GObject.Object_ConstructProps {
}
export class ParamFraction {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ParamFraction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ParamFraction_ConstructProps)
    _init (config?: ParamFraction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Pipeline_ConstructProps extends Bin_ConstructProps {
    autoFlushBus?: any
    delay?: any
}
export class Pipeline {
    /* Properties of Gst-0.10.Gst.Pipeline */
    autoFlushBus: any
    delay: any
    /* Properties of Gst-0.10.Gst.Bin */
    asyncHandling: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Pipeline */
    bin: Bin
    fixedClock: Clock
    streamTime: ClockTime
    priv: PipelinePrivate
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Bin */
    element: Element
    numchildren: any
    children: any[]
    childrenCookie: any
    childBus: Bus
    messages: any[]
    polling: any
    stateDirty: any
    clockDirty: any
    providedClock: Clock
    clockProvider: Element
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pipeline */
    getBus(): Bus
    setNewStreamTime(time: ClockTime): void
    getLastStreamTime(): ClockTime
    useClock(clock: Clock): void
    setClock(clock: Clock): any
    getClock(): Clock
    autoClock(): void
    setDelay(delay: ClockTime): void
    getDelay(): ClockTime
    setAutoFlushBus(autoFlush: any): void
    getAutoFlushBus(): any
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Element): any
    remove(element: Element): any
    getByName(name: string): Element
    getByNameRecurseUp(name: string): Element
    getByInterface(iface: GObject.Type): Element
    iterateElements(): Iterator
    iterateSorted(): Iterator
    iterateRecurse(): Iterator
    iterateSinks(): Iterator
    iterateSources(): Iterator
    iterateAllByInterface(iface: GObject.Type): Iterator
    recalculateLatency(): any
    findUnlinkedPad(direction: PadDirection): Pad
    findUnconnectedPad(direction: PadDirection): Pad
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gst-0.10.Gst.ChildProxy */
    getChildByName(name: string): Object
    getChildByIndex(index: any): Object
    getChildrenCount(): any
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (($obj: Pipeline) => any)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Pipeline, object: Element) => void)): number
    on(sigName: "element-added", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (object: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", object: Element): void
    connect(sigName: "element-removed", callback: (($obj: Pipeline, object: Element) => void)): number
    on(sigName: "element-removed", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (object: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", object: Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Pipeline, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Pipeline, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pipeline, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Pipeline, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Pipeline, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Pipeline, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object): void
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
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(name: string): Pipeline
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends Object_ConstructProps {
}
export class Plugin {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Plugin */
    object: Object
    desc: PluginDesc
    origDesc: PluginDesc
    flags: any
    filename: string
    basename: string
    module: GModule.Module
    fileSize: number
    fileMtime: number
    registered: any
    priv: PluginPrivate
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Plugin */
    getName(): string
    getDescription(): string
    getFilename(): string
    getVersion(): string
    getLicense(): string
    getSource(): string
    getPackage(): string
    getOrigin(): string
    getCacheData(): Structure
    setCacheData(cacheData: Structure): void
    getModule(): GModule.Module
    isLoaded(): any
    nameFilter(name: string): any
    load(): Plugin
    addDependency(envVars: string[], paths: string[], names: string[], flags: PluginDependencyFlags): void
    addDependencySimple(envVars: string, paths: string, names: string, flags: PluginDependencyFlags): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Plugin, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Plugin, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Plugin, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Plugin, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static registerStatic(majorVersion: any, minorVersion: any, name: string, description: string, initFunc: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): any
    static registerStaticFull(majorVersion: any, minorVersion: any, name: string, description: string, initFullFunc: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string, userData: any): any
    static loadFile(filename: string): Plugin
    static loadByName(name: string): Plugin
    static $gtype: GObject.Type
}
export interface PluginFeature_ConstructProps extends Object_ConstructProps {
}
export class PluginFeature {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.PluginFeature */
    object: Object
    loaded: any
    rank: any
    pluginName: string
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    typeNameFilter(data: TypeNameData): any
    setRank(rank: any): void
    setName(name: string): void
    getRank(): any
    getName(): string
    checkVersion(minMajor: any, minMinor: any, minMicro: any): any
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PluginFeature, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PluginFeature, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: PluginFeature, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PluginFeature, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface ProxyPad_ConstructProps extends Pad_ConstructProps {
}
export class ProxyPad {
    /* Properties of Gst-0.10.Gst.Pad */
    readonly caps: Caps
    template: PadTemplate
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.ProxyPad */
    pad: Pad
    priv: ProxyPadPrivate
    /* Fields of Gst-0.10.Gst.Pad */
    object: Object
    elementPrivate: any
    padtemplate: PadTemplate
    direction: PadDirection
    streamRecLock: any
    task: Task
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    blockCond: GLib.Cond
    blockCallback: PadBlockCallback
    blockData: any
    getcapsfunc: PadGetCapsFunction
    setcapsfunc: PadSetCapsFunction
    acceptcapsfunc: PadAcceptCapsFunction
    fixatecapsfunc: PadFixateCapsFunction
    activatefunc: PadActivateFunction
    activatepushfunc: PadActivateModeFunction
    activatepullfunc: PadActivateModeFunction
    linkfunc: PadLinkFunction
    unlinkfunc: PadUnlinkFunction
    peer: Pad
    schedPrivate: any
    chainfunc: PadChainFunction
    checkgetrangefunc: PadCheckGetRangeFunction
    getrangefunc: PadGetRangeFunction
    eventfunc: PadEventFunction
    mode: ActivateMode
    querytypefunc: PadQueryTypeFunction
    queryfunc: PadQueryFunction
    intlinkfunc: PadIntLinkFunction
    bufferallocfunc: PadBufferAllocFunction
    doBufferSignals: any
    doEventSignals: any
    iterintlinkfunc: PadIterIntLinkFunction
    blockDestroyData: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pad */
    getDirection(): PadDirection
    setActive(active: any): any
    isActive(): any
    activatePull(active: any): any
    activatePush(active: any): any
    setBlocked(blocked: any): any
    setBlockedAsync(blocked: any, callback: PadBlockCallback, userData: any): any
    setBlockedAsyncFull(blocked: any, callback: PadBlockCallback, userData: any): any
    isBlocked(): any
    isBlocking(): any
    setElementPrivate(priv: any): void
    getElementPrivate(): any
    getPadTemplate(): PadTemplate
    setBufferallocFunction(bufalloc: PadBufferAllocFunction): void
    allocBuffer(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    allocBufferAndSetCaps(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    setActivateFunction(activate: PadActivateFunction): void
    setActivatepullFunction(activatepull: PadActivateModeFunction): void
    setActivatepushFunction(activatepush: PadActivateModeFunction): void
    setChainFunction(chain: PadChainFunction): void
    setChainListFunction(chainlist: PadChainListFunction): void
    setGetrangeFunction(get: PadGetRangeFunction): void
    setCheckgetrangeFunction(check: PadCheckGetRangeFunction): void
    setEventFunction(event: PadEventFunction): void
    setLinkFunction(link: PadLinkFunction): void
    setUnlinkFunction(unlink: PadUnlinkFunction): void
    canLink(sinkpad: Pad): any
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): any
    isLinked(): any
    getPeer(): Pad
    setGetcapsFunction(getcaps: PadGetCapsFunction): void
    setAcceptcapsFunction(acceptcaps: PadAcceptCapsFunction): void
    setFixatecapsFunction(fixatecaps: PadFixateCapsFunction): void
    setSetcapsFunction(setcaps: PadSetCapsFunction): void
    getPadTemplateCaps(): Caps
    getCapsReffed(): Caps
    getCaps(): Caps
    fixateCaps(caps: Caps): void
    acceptCaps(caps: Caps): any
    setCaps(caps: Caps): any
    peerGetCapsReffed(): Caps
    peerGetCaps(): Caps
    peerAcceptCaps(caps: Caps): any
    getAllowedCaps(): Caps
    getNegotiatedCaps(): Caps
    push(buffer: Buffer): FlowReturn
    pushList(list: BufferList): FlowReturn
    checkPullRange(): any
    pullRange(offset: any, size: any, buffer: Buffer): FlowReturn
    pushEvent(event: Event): any
    eventDefault(event: Event): any
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    getRange(offset: any, size: any, buffer: Buffer): FlowReturn
    sendEvent(event: Event): any
    startTask(func: TaskFunction, data: any): any
    pauseTask(): any
    stopTask(): any
    setInternalLinkFunction(intlink: PadIntLinkFunction): void
    setIterateInternalLinksFunction(iterintlink: PadIterIntLinkFunction): void
    iterateInternalLinks(): Iterator
    iterateInternalLinksDefault(): Iterator
    setQueryTypeFunction(typeFunc: PadQueryTypeFunction): void
    getQueryTypes(): QueryType
    getQueryTypesDefault(): QueryType
    query(query: Query): any
    peerQuery(query: Query): any
    setQueryFunction(query: PadQueryFunction): void
    queryDefault(query: Query): any
    dispatcher(dispatch: PadDispatcherFunction, data: any): any
    useFixedCaps(): void
    getFixedCapsFunc(): Caps
    proxyGetcaps(): Caps
    proxySetcaps(caps: Caps): any
    getParentElement(): Element
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    queryPeerPosition(format: Format): { returnType: any, cur: any }
    queryPeerDuration(format: Format): { returnType: any, duration: any }
    queryPeerConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    addDataProbe(handler: GObject.Callback, data: any): any
    addDataProbeFull(handler: GObject.Callback, data: any): any
    removeDataProbe(handlerId: any): void
    addEventProbe(handler: GObject.Callback, data: any): any
    addEventProbeFull(handler: GObject.Callback, data: any): any
    removeEventProbe(handlerId: any): void
    addBufferProbe(handler: GObject.Callback, data: any): any
    addBufferProbeFull(handler: GObject.Callback, data: any): any
    removeBufferProbe(handlerId: any): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: ProxyPad, object: MiniObject) => any)): number
    on(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "have-data", callback: (object: MiniObject) => void): NodeJS.EventEmitter
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    on(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: ProxyPad) => void)): number
    on(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-link", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    on(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ProxyPad, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ProxyPad, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ProxyPad, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ProxyPad, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface PushSrc_ConstructProps extends BaseSrc_ConstructProps {
}
export class PushSrc {
    /* Properties of Gst-0.10.Gst.BaseSrc */
    blocksize: any
    doTimestamp: any
    numBuffers: any
    typefind: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.PushSrc */
    parent: BaseSrc
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.BaseSrc */
    element: Element
    srcpad: Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: any
    liveRunning: any
    canActivatePush: any
    padMode: ActivateMode
    seekable: any
    randomAccess: any
    clockId: ClockID
    endTime: ClockTime
    segment: Segment
    needNewsegment: any
    offset: any
    size: any
    numBuffersLeft: any
    priv: BaseSrcPrivate
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSrc */
    waitPlaying(): FlowReturn
    setLive(live: any): void
    setFormat(format: Format): void
    queryLatency(minLatency: ClockTime, maxLatency: ClockTime): { returnType: any, live: any }
    setBlocksize(blocksize: any): void
    getBlocksize(): any
    setDoTimestamp(timestamp: any): void
    getDoTimestamp(): any
    newSeamlessSegment(start: any, stop: any, position: any): any
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): any
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): any
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): any
    removePad(pad: Pad): any
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: any, stopType: SeekType, stop: any): any
    getQueryTypes(): QueryType
    query(query: Query): any
    postMessage(message: Message): any
    messageFull(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: ClockTime): { returnType: StateChangeReturn, state: State, pending: State }
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    linkFiltered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: any): any
    queryPosition(format: Format): { returnType: any, cur: any }
    queryDuration(format: Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Format, srcVal: any, destFormat: Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: PushSrc, object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: PushSrc, object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PushSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PushSrc, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: PushSrc, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PushSrc, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PushSrc_ConstructProps)
    _init (config?: PushSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export class Query {
    /* Fields of Gst-0.10.Gst.Query */
    miniObject: MiniObject
    type: QueryType
    structure: Structure
    gstReserved: any
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    /* Methods of Gst-0.10.Gst.Query */
    setPosition(format: Format, cur: any): void
    parsePosition(format: Format): { cur: any }
    setDuration(format: Format, duration: any): void
    parseDuration(format: Format): { duration: any }
    setLatency(live: any, minLatency: ClockTime, maxLatency: ClockTime): void
    parseLatency(minLatency: ClockTime, maxLatency: ClockTime): { live: any }
    setConvert(srcFormat: Format, srcValue: any, destFormat: Format, destValue: any): void
    parseConvert(srcFormat: Format, destFormat: Format): { srcValue: any, destValue: any }
    setSegment(rate: number, format: Format, startValue: any, stopValue: any): void
    parseSegment(format: Format): { rate: number, startValue: any, stopValue: any }
    getStructure(): Structure
    setSeeking(format: Format, seekable: any, segmentStart: any, segmentEnd: any): void
    parseSeeking(format: Format): { seekable: any, segmentStart: any, segmentEnd: any }
    setFormatsv(nFormats: any, formats: Format): void
    parseFormatsLength(): { nFormats: any }
    parseFormatsNth(nth: any, format: Format): void
    setBufferingPercent(busy: any, percent: any): void
    parseBufferingPercent(): { busy: any, percent: any }
    setBufferingStats(mode: BufferingMode, avgIn: any, avgOut: any, bufferingLeft: any): void
    parseBufferingStats(mode: BufferingMode): { avgIn: any, avgOut: any, bufferingLeft: any }
    setBufferingRange(format: Format, start: any, stop: any, estimatedTotal: any): void
    parseBufferingRange(format: Format): { start: any, stop: any, estimatedTotal: any }
    parseUri(uri: string[]): void
    setUri(uri: string): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): any
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newPosition(format: Format): Query
    static newDuration(format: Format): Query
    static newLatency(): Query
    static newConvert(srcFormat: Format, value: any, destFormat: Format): Query
    static newSegment(format: Format): Query
    static newApplication(type: QueryType, structure: Structure): Query
    static newSeeking(format: Format): Query
    static newFormats(): Query
    static newBuffering(format: Format): Query
    static newUri(): Query
    static typeGetName(query: QueryType): string
    static typeToQuark(query: QueryType): GLib.Quark
    static typeRegister(nick: string, description: string): QueryType
    static typeGetByNick(nick: string): QueryType
    static typesContains(types: QueryType, type: QueryType): any
    static typeGetDetails(type: QueryType): QueryTypeDefinition
    static typeIterateDefinitions(): Iterator
}
export interface Registry_ConstructProps extends Object_ConstructProps {
}
export class Registry {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Registry */
    object: Object
    plugins: any[]
    features: any[]
    paths: any[]
    cacheFile: any
    featureHash: GLib.HashTable
    basenameHash: GLib.HashTable
    priv: RegistryPrivate
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Registry */
    scanPath(path: string): any
    addPath(path: string): void
    addPlugin(plugin: Plugin): any
    removePlugin(plugin: Plugin): void
    addFeature(feature: PluginFeature): any
    removeFeature(feature: PluginFeature): void
    getFeatureListCookie(): any
    findPlugin(name: string): Plugin
    findFeature(name: string, type: GObject.Type): PluginFeature
    lookup(filename: string): Plugin
    lookupFeature(name: string): PluginFeature
    xmlReadCache(location: string): any
    xmlWriteCache(location: string): any
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Registry */
    connect(sigName: "feature-added", callback: (($obj: Registry, object: any) => void)): number
    on(sigName: "feature-added", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feature-added", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feature-added", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "feature-added", object: any): void
    connect(sigName: "plugin-added", callback: (($obj: Registry, object: any) => void)): number
    on(sigName: "plugin-added", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "plugin-added", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "plugin-added", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "plugin-added", object: any): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Registry, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Registry, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Registry, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Registry, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static getDefault(): Registry
    static forkIsEnabled(): any
    static forkSetEnabled(enabled: any): void
    static $gtype: GObject.Type
}
export interface SystemClock_ConstructProps extends Clock_ConstructProps {
    clockType?: ClockType
}
export class SystemClock {
    /* Properties of Gst-0.10.Gst.SystemClock */
    clockType: ClockType
    /* Properties of Gst-0.10.Gst.Clock */
    stats: any
    timeout: any
    windowSize: any
    windowThreshold: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.SystemClock */
    clock: Clock
    thread: GLib.Thread
    stopping: any
    priv: SystemClockPrivate
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Clock */
    object: Object
    slaveLock: GLib.Mutex
    internalCalibration: ClockTime
    externalCalibration: ClockTime
    rateNumerator: ClockTime
    rateDenominator: ClockTime
    lastTime: ClockTime
    entries: any[]
    entriesChanged: GLib.Cond
    resolution: ClockTime
    master: Clock
    filling: any
    timeIndex: any
    times: ClockTime
    clockid: ClockID
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Clock */
    setResolution(resolution: ClockTime): ClockTime
    getResolution(): ClockTime
    getTime(): ClockTime
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    getCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master: Clock): any
    getMaster(): Clock
    addObservation(slave: ClockTime, master: ClockTime): { returnType: any, rSquared: number }
    getInternalTime(): ClockTime
    adjustUnlocked(internal: ClockTime): ClockTime
    unadjustUnlocked(external: ClockTime): ClockTime
    newSingleShotId(time: ClockTime): ClockID
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: SystemClock, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: SystemClock, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: SystemClock, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: SystemClock, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends Object_ConstructProps {
}
export class Task {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Task */
    object: Object
    state: TaskState
    cond: GLib.Cond
    lock: any
    func: TaskFunction
    data: any
    running: any
    priv: TaskPrivate
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    namePrefix: string
    parent: Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Task */
    setLock(mutex: any): void
    setPriority(priority: any): void
    getPool(): TaskPool
    setPool(pool: TaskPool): void
    setThreadCallbacks(callbacks: TaskThreadCallbacks, userData: any, notify: GLib.DestroyNotify): void
    getState(): TaskState
    setState(state: TaskState): any
    start(): any
    stop(): any
    pause(): any
    join(): any
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Task, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Task, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Task, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Task, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static cleanupAll(): void
    static create(func: TaskFunction): Task
    static $gtype: GObject.Type
}
export interface TaskPool_ConstructProps extends Object_ConstructProps {
}
export class TaskPool {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.TaskPool */
    object: Object
    pool: GLib.ThreadPool
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TaskPool */
    prepare(): void
    push(func: TaskPoolFunction, userData: any): any
    join(id: any): void
    cleanup(): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TaskPool, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TaskPool, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: TaskPool, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TaskPool, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface TypeFindFactory_ConstructProps extends PluginFeature_ConstructProps {
}
export class TypeFindFactory {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.TypeFindFactory */
    feature: PluginFeature
    function_: TypeFindFunction
    extensions: string
    caps: Caps
    userData: any
    userDataNotify: GLib.DestroyNotify
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.PluginFeature */
    object: Object
    loaded: any
    rank: any
    pluginName: string
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TypeFindFactory */
    getExtensions(): string[]
    getCaps(): Caps
    callFunction(find: TypeFind): void
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    typeNameFilter(data: TypeNameData): any
    setRank(rank: any): void
    setName(name: string): void
    getRank(): any
    getName(): string
    checkVersion(minMajor: any, minMinor: any, minMicro: any): any
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TypeFindFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TypeFindFactory, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface XML_ConstructProps extends Object_ConstructProps {
}
export class XML {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.XML */
    object: Object
    topelements: any[]
    ns: libxml2.NsPtr
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.XML */
    parseDoc(doc: libxml2.DocPtr, root: any[]): any
    parseFile(fname: any[], root: any[]): any
    parseMemory(buffer: any[], size: any, root: string): any
    getElement(name: any[]): Element
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): any
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): any
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Gst-0.10.Gst.XML */
    connect(sigName: "object-loaded", callback: (($obj: XML, object: Object, p0: any) => void)): number
    on(sigName: "object-loaded", callback: (object: Object, p0: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-loaded", callback: (object: Object, p0: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-loaded", callback: (object: Object, p0: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-loaded", object: Object, p0: any): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: XML, object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: XML, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: XML, object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: XML, object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XML_ConstructProps)
    _init (config?: XML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XML
    static write(element: Element): libxml2.DocPtr
    static makeElement(cur: libxml2.NodePtr, parent: Object): Element
    static $gtype: GObject.Type
}
export abstract class AdapterClass {
    /* Fields of Gst-0.10.Gst.AdapterClass */
    parentClass: GObject.ObjectClass
    gstReserved: any[]
    static name: string
}
export class AdapterPrivate {
    static name: string
}
export class AllocTrace {
    /* Fields of Gst-0.10.Gst.AllocTrace */
    name: string
    flags: any
    live: any
    memLive: any[]
    /* Methods of Gst-0.10.Gst.AllocTrace */
    print(): void
    setFlags(flags: AllocTraceFlags): void
    static name: string
}
export abstract class BaseSinkClass {
    /* Fields of Gst-0.10.Gst.BaseSinkClass */
    parentClass: ElementClass
    getCaps: (sink: BaseSink) => Caps
    setCaps: (sink: BaseSink, caps: Caps) => any
    bufferAlloc: (sink: BaseSink, offset: any, size: any, caps: Caps, buf: Buffer) => FlowReturn
    getTimes: (sink: BaseSink, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    start: (sink: BaseSink) => any
    stop: (sink: BaseSink) => any
    unlock: (sink: BaseSink) => any
    event: (sink: BaseSink, event: Event) => any
    preroll: (sink: BaseSink, buffer: Buffer) => FlowReturn
    render: (sink: BaseSink, buffer: Buffer) => FlowReturn
    asyncPlay: (sink: BaseSink) => StateChangeReturn
    activatePull: (sink: BaseSink, active: any) => any
    fixate: (sink: BaseSink, caps: Caps) => void
    unlockStop: (sink: BaseSink) => any
    renderList: (sink: BaseSink, bufferList: BufferList) => FlowReturn
    gstReserved: any[]
    static name: string
}
export class BaseSinkPrivate {
    static name: string
}
export abstract class BaseSrcClass {
    /* Fields of Gst-0.10.Gst.BaseSrcClass */
    parentClass: ElementClass
    getCaps: (src: BaseSrc) => Caps
    setCaps: (src: BaseSrc, caps: Caps) => any
    negotiate: (src: BaseSrc) => any
    newsegment: (src: BaseSrc) => any
    start: (src: BaseSrc) => any
    stop: (src: BaseSrc) => any
    getTimes: (src: BaseSrc, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    getSize: (src: BaseSrc) => { returnType: any, size: any }
    isSeekable: (src: BaseSrc) => any
    unlock: (src: BaseSrc) => any
    event: (src: BaseSrc, event: Event) => any
    create: (src: BaseSrc, offset: any, size: any, buf: Buffer) => FlowReturn
    doSeek: (src: BaseSrc, segment: Segment) => any
    query: (src: BaseSrc, query: Query) => any
    checkGetRange: (src: BaseSrc) => any
    fixate: (src: BaseSrc, caps: Caps) => void
    unlockStop: (src: BaseSrc) => any
    prepareSeekSegment: (src: BaseSrc, seek: Event, segment: Segment) => any
    gstReserved: any[]
    static name: string
}
export class BaseSrcPrivate {
    static name: string
}
export abstract class BaseTransformClass {
    /* Fields of Gst-0.10.Gst.BaseTransformClass */
    parentClass: ElementClass
    transformCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => Caps
    fixateCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps, othercaps: Caps) => void
    transformSize: (trans: BaseTransform, direction: PadDirection, caps: Caps, size: any, othercaps: Caps) => { returnType: any, othersize: any }
    getUnitSize: (trans: BaseTransform, caps: Caps) => { returnType: any, size: any }
    setCaps: (trans: BaseTransform, incaps: Caps, outcaps: Caps) => any
    start: (trans: BaseTransform) => any
    stop: (trans: BaseTransform) => any
    event: (trans: BaseTransform, event: Event) => any
    transform: (trans: BaseTransform, inbuf: Buffer, outbuf: Buffer) => FlowReturn
    transformIp: (trans: BaseTransform, buf: Buffer) => FlowReturn
    passthroughOnSameCaps: any
    prepareOutputBuffer: (trans: BaseTransform, input: Buffer, size: any, caps: Caps, buf: Buffer) => FlowReturn
    srcEvent: (trans: BaseTransform, event: Event) => any
    beforeTransform: (trans: BaseTransform, buffer: Buffer) => void
    acceptCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => any
    gstReserved: any[]
    static name: string
}
export class BaseTransformPrivate {
    static name: string
}
export abstract class BinClass {
    /* Fields of Gst-0.10.Gst.BinClass */
    parentClass: ElementClass
    pool: GLib.ThreadPool
    elementAdded: (bin: Bin, child: Element) => void
    elementRemoved: (bin: Bin, child: Element) => void
    addElement: (bin: Bin, element: Element) => any
    removeElement: (bin: Bin, element: Element) => any
    handleMessage: (bin: Bin, message: Message) => void
    doLatency: (bin: Bin) => any
    gstReserved: any[]
    static name: string
}
export class BinPrivate {
    static name: string
}
export class BitReader {
    /* Fields of Gst-0.10.Gst.BitReader */
    data: any
    size: any
    byte: any
    bit: any
    /* Methods of Gst-0.10.Gst.BitReader */
    free(): void
    init(data: any[], size: any): void
    initFromBuffer(buffer: Buffer): void
    setPos(pos: any): any
    getPos(): any
    getRemaining(): any
    getSize(): any
    skip(nbits: any): any
    skipToByte(): any
    getBitsUint8(val: any[], nbits: any): any
    getBitsUint16(nbits: any): { returnType: any, val: any }
    getBitsUint32(nbits: any): { returnType: any, val: any }
    getBitsUint64(nbits: any): { returnType: any, val: any }
    peekBitsUint8(val: any[], nbits: any): any
    peekBitsUint16(nbits: any): { returnType: any, val: any }
    peekBitsUint32(nbits: any): { returnType: any, val: any }
    peekBitsUint64(nbits: any): { returnType: any, val: any }
    static name: string
    static new(data: any[], size: any): BitReader
    constructor(data: any[], size: any)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: any): BitReader
    static newFromBuffer(buffer: Buffer): BitReader
}
export abstract class BufferClass {
    /* Fields of Gst-0.10.Gst.BufferClass */
    miniObjectClass: MiniObjectClass
    static name: string
}
export abstract class BufferListClass {
    static name: string
}
export class BufferListIterator {
    /* Methods of Gst-0.10.Gst.BufferListIterator */
    free(): void
    nBuffers(): any
    next(): Buffer
    nextGroup(): any
    add(buffer: Buffer): void
    addGroup(): void
    remove(): void
    steal(): Buffer
    take(buffer: Buffer): void
    do(doFunc: BufferListDoFunction, userData: any): Buffer
    mergeGroup(): Buffer
    static name: string
}
export abstract class BusClass {
    /* Fields of Gst-0.10.Gst.BusClass */
    parentClass: ObjectClass
    message: (bus: Bus, message: Message) => void
    syncMessage: (bus: Bus, message: Message) => void
    gstReserved: any[]
    static name: string
}
export class BusPrivate {
    static name: string
}
export class ByteReader {
    /* Fields of Gst-0.10.Gst.ByteReader */
    data: any
    size: any
    byte: any
    /* Methods of Gst-0.10.Gst.ByteReader */
    free(): void
    init(data: any[], size: any): void
    initFromBuffer(buffer: Buffer): void
    setPos(pos: any): any
    getPos(): any
    getRemaining(): any
    getSize(): any
    skip(nbytes: any): any
    getUint8(val: any[]): any
    getInt8(): { returnType: any, val: any }
    getUint16Le(): { returnType: any, val: any }
    getInt16Le(): { returnType: any, val: any }
    getUint16Be(): { returnType: any, val: any }
    getInt16Be(): { returnType: any, val: any }
    getUint24Le(): { returnType: any, val: any }
    getInt24Le(): { returnType: any, val: number }
    getUint24Be(): { returnType: any, val: any }
    getInt24Be(): { returnType: any, val: number }
    getUint32Le(): { returnType: any, val: any }
    getInt32Le(): { returnType: any, val: number }
    getUint32Be(): { returnType: any, val: any }
    getInt32Be(): { returnType: any, val: number }
    getUint64Le(): { returnType: any, val: any }
    getInt64Le(): { returnType: any, val: any }
    getUint64Be(): { returnType: any, val: any }
    getInt64Be(): { returnType: any, val: any }
    peekUint8(val: any[]): any
    peekInt8(): { returnType: any, val: any }
    peekUint16Le(): { returnType: any, val: any }
    peekInt16Le(): { returnType: any, val: any }
    peekUint16Be(): { returnType: any, val: any }
    peekInt16Be(): { returnType: any, val: any }
    peekUint24Le(): { returnType: any, val: any }
    peekInt24Le(): { returnType: any, val: number }
    peekUint24Be(): { returnType: any, val: any }
    peekInt24Be(): { returnType: any, val: number }
    peekUint32Le(): { returnType: any, val: any }
    peekInt32Le(): { returnType: any, val: number }
    peekUint32Be(): { returnType: any, val: any }
    peekInt32Be(): { returnType: any, val: number }
    peekUint64Le(): { returnType: any, val: any }
    peekInt64Le(): { returnType: any, val: any }
    peekUint64Be(): { returnType: any, val: any }
    peekInt64Be(): { returnType: any, val: any }
    getFloat32Le(): { returnType: any, val: any }
    getFloat32Be(): { returnType: any, val: any }
    getFloat64Le(): { returnType: any, val: number }
    getFloat64Be(): { returnType: any, val: number }
    peekFloat32Le(): { returnType: any, val: any }
    peekFloat32Be(): { returnType: any, val: any }
    peekFloat64Le(): { returnType: any, val: number }
    peekFloat64Be(): { returnType: any, val: number }
    dupData(size: any): { returnType: any, val: any }
    getData(size: any): { returnType: any, val: any }
    peekData(size: any): { returnType: any, val: any }
    dupStringUtf8(str: string[]): any
    dupStringUtf16(): { returnType: any, str: any }
    dupStringUtf32(): { returnType: any, str: any }
    skipStringUtf8(): any
    skipStringUtf16(): any
    skipStringUtf32(): any
    getStringUtf8(str: string[]): any
    peekStringUtf8(str: string[]): any
    maskedScanUint32(mask: any, pattern: any, offset: any, size: any): any
    static name: string
    static new(data: any[], size: any): ByteReader
    constructor(data: any[], size: any)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: any): ByteReader
    static newFromBuffer(buffer: Buffer): ByteReader
}
export class ByteWriter {
    /* Fields of Gst-0.10.Gst.ByteWriter */
    parent: ByteReader
    allocSize: any
    fixed: any
    owned: any
    /* Methods of Gst-0.10.Gst.ByteWriter */
    init(): void
    initWithSize(size: any, fixed: any): void
    initWithData(data: any[], size: any, initialized: any): void
    initWithBuffer(buffer: Buffer, initialized: any): void
    free(): void
    freeAndGetData(): any[]
    freeAndGetBuffer(): Buffer
    reset(): void
    resetAndGetData(): any[]
    resetAndGetBuffer(): Buffer
    getRemaining(): any
    ensureFreeSpace(size: any): any
    putUint8(val: any): any
    putInt8(val: any): any
    putUint16Be(val: any): any
    putUint16Le(val: any): any
    putInt16Be(val: any): any
    putInt16Le(val: any): any
    putUint24Be(val: any): any
    putUint24Le(val: any): any
    putInt24Be(val: number): any
    putInt24Le(val: number): any
    putUint32Be(val: any): any
    putUint32Le(val: any): any
    putInt32Be(val: number): any
    putInt32Le(val: number): any
    putUint64Be(val: any): any
    putUint64Le(val: any): any
    putInt64Be(val: any): any
    putInt64Le(val: any): any
    putFloat32Be(val: any): any
    putFloat32Le(val: any): any
    putFloat64Be(val: number): any
    putFloat64Le(val: number): any
    putData(data: any[], size: any): any
    fill(value: any, size: any): any
    putStringUtf8(data: string): any
    putStringUtf16(): { returnType: any, data: any }
    putStringUtf32(): { returnType: any, data: any }
    static name: string
    static new(): ByteWriter
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ByteWriter
    static newWithSize(size: any, fixed: any): ByteWriter
    static newWithData(data: any[], size: any, initialized: any): ByteWriter
    static newWithBuffer(buffer: Buffer, initialized: any): ByteWriter
}
export class Caps {
    /* Fields of Gst-0.10.Gst.Caps */
    type: GObject.Type
    refcount: any
    flags: CapsFlags
    structs: GLib.PtrArray
    gstReserved: any[]
    /* Methods of Gst-0.10.Gst.Caps */
    ref(): Caps
    copy(): Caps
    makeWritable(): Caps
    unref(): void
    append(caps2: Caps): void
    merge(caps2: Caps): void
    appendStructure(structure: Structure): void
    removeStructure(idx: any): void
    mergeStructure(structure: Structure): void
    getSize(): any
    getStructure(index: any): Structure
    stealStructure(index: any): Structure
    copyNth(nth: any): Caps
    truncate(): void
    setValue(field: string, value: any): void
    isAny(): any
    isEmpty(): any
    isFixed(): any
    isAlwaysCompatible(caps2: Caps): any
    isSubset(superset: Caps): any
    isEqual(caps2: Caps): any
    isEqualFixed(caps2: Caps): any
    canIntersect(caps2: Caps): any
    intersect(caps2: Caps): Caps
    subtract(subtrahend: Caps): Caps
    union(caps2: Caps): Caps
    normalize(): Caps
    doSimplify(): any
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    replace(newcaps: Caps): void
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static newEmpty(): Caps
    static newAny(): Caps
}
export abstract class ChildProxyInterface {
    /* Fields of Gst-0.10.Gst.ChildProxyInterface */
    parent: GObject.TypeInterface
    getChildByIndex: (parent: ChildProxy, index: any) => Object
    getChildrenCount: (parent: ChildProxy) => any
    childAdded: (parent: ChildProxy, child: Object) => void
    childRemoved: (parent: ChildProxy, child: Object) => void
    gstReserved: any[]
    static name: string
}
export abstract class ClockClass {
    /* Fields of Gst-0.10.Gst.ClockClass */
    parentClass: ObjectClass
    changeResolution: (clock: Clock, oldResolution: ClockTime, newResolution: ClockTime) => ClockTime
    getResolution: (clock: Clock) => ClockTime
    getInternalTime: (clock: Clock) => ClockTime
    wait: (clock: Clock, entry: ClockEntry) => ClockReturn
    waitAsync: (clock: Clock, entry: ClockEntry) => ClockReturn
    unschedule: (clock: Clock, entry: ClockEntry) => void
    waitJitter: (clock: Clock, entry: ClockEntry, jitter: ClockTimeDiff) => ClockReturn
    gstReserved: any[]
    static name: string
}
export class ClockEntry {
    /* Fields of Gst-0.10.Gst.ClockEntry */
    refcount: any
    clock: Clock
    type: ClockEntryType
    time: ClockTime
    interval: ClockTime
    status: ClockReturn
    func: ClockCallback
    userData: any
    destroyData: GLib.DestroyNotify
    static name: string
}
export class ClockPrivate {
    static name: string
}
export class CollectData {
    /* Fields of Gst-0.10.Gst.CollectData */
    collect: CollectPads
    pad: Pad
    buffer: Buffer
    pos: any
    segment: Segment
    static name: string
}
export abstract class CollectPadsClass {
    /* Fields of Gst-0.10.Gst.CollectPadsClass */
    parentClass: ObjectClass
    gstReserved: any[]
    static name: string
}
export class CollectPadsPrivate {
    static name: string
}
export abstract class DataQueueClass {
    /* Fields of Gst-0.10.Gst.DataQueueClass */
    parentClass: GObject.ObjectClass
    empty: (queue: DataQueue) => void
    full: (queue: DataQueue) => void
    gstReserved: any[]
    static name: string
}
export class DataQueueItem {
    /* Fields of Gst-0.10.Gst.DataQueueItem */
    object: MiniObject
    size: any
    duration: any
    visible: any
    destroy: GLib.DestroyNotify
    static name: string
}
export class DataQueueSize {
    /* Fields of Gst-0.10.Gst.DataQueueSize */
    visible: any
    bytes: any
    time: any
    static name: string
}
export class DebugCategory {
    /* Fields of Gst-0.10.Gst.DebugCategory */
    threshold: any
    color: any
    name: string
    description: string
    /* Methods of Gst-0.10.Gst.DebugCategory */
    free(): void
    setThreshold(level: DebugLevel): void
    resetThreshold(): void
    getThreshold(): DebugLevel
    getName(): string
    getColor(): any
    getDescription(): string
    static name: string
}
export class DebugMessage {
    /* Methods of Gst-0.10.Gst.DebugMessage */
    get(): string
    static name: string
}
export abstract class ElementClass {
    /* Fields of Gst-0.10.Gst.ElementClass */
    parentClass: ObjectClass
    details: ElementDetails
    elementfactory: ElementFactory
    padtemplates: any[]
    numpadtemplates: any
    padTemplCookie: any
    padAdded: (element: Element, pad: Pad) => void
    padRemoved: (element: Element, pad: Pad) => void
    noMorePads: (element: Element) => void
    requestNewPad: (element: Element, templ: PadTemplate, name: string) => Pad
    releasePad: (element: Element, pad: Pad) => void
    getState: (element: Element, timeout: ClockTime) => { returnType: StateChangeReturn, state: State, pending: State }
    setState: (element: Element, state: State) => StateChangeReturn
    changeState: (element: Element, transition: StateChange) => StateChangeReturn
    setBus: (element: Element, bus: Bus) => void
    provideClock: (element: Element) => Clock
    setClock: (element: Element, clock: Clock) => any
    getIndex: (element: Element) => Index
    setIndex: (element: Element, index: Index) => void
    sendEvent: (element: Element, event: Event) => any
    getQueryTypes: (element: Element) => QueryType
    query: (element: Element, query: Query) => any
    gstReserved: any[]
    /* Methods of Gst-0.10.Gst.ElementClass */
    addPadTemplate(templ: PadTemplate): void
    getPadTemplate(name: string): PadTemplate
    setDetails(details: ElementDetails): void
    setDetailsSimple(longname: string, classification: string, description: string, author: string): void
    static name: string
}
export class ElementDetails {
    /* Fields of Gst-0.10.Gst.ElementDetails */
    longname: string
    klass: string
    description: string
    author: string
    gstReserved: any[]
    static name: string
}
export abstract class ElementFactoryClass {
    /* Fields of Gst-0.10.Gst.ElementFactoryClass */
    parentClass: PluginFeatureClass
    gstReserved: any[]
    static name: string
}
export abstract class EventClass {
    /* Fields of Gst-0.10.Gst.EventClass */
    miniObjectClass: MiniObjectClass
    gstReserved: any[]
    static name: string
}
export class FormatDefinition {
    /* Fields of Gst-0.10.Gst.FormatDefinition */
    value: Format
    nick: string
    description: string
    quark: GLib.Quark
    static name: string
}
export abstract class GhostPadClass {
    /* Fields of Gst-0.10.Gst.GhostPadClass */
    parentClass: ProxyPadClass
    gstReserved: any[]
    static name: string
}
export class GhostPadPrivate {
    static name: string
}
export abstract class ImplementsInterfaceClass {
    /* Fields of Gst-0.10.Gst.ImplementsInterfaceClass */
    parent: GObject.TypeInterface
    supported: (iface: ImplementsInterface, ifaceType: GObject.Type) => any
    gstReserved: any[]
    static name: string
}
export class IndexAssociation {
    /* Fields of Gst-0.10.Gst.IndexAssociation */
    format: Format
    value: any
    static name: string
}
export abstract class IndexClass {
    /* Fields of Gst-0.10.Gst.IndexClass */
    parentClass: ObjectClass
    getWriterId: (index: Index, writerString: string) => { returnType: any, writerId: any }
    commit: (index: Index, id: any) => void
    addEntry: (index: Index, entry: IndexEntry) => void
    getAssocEntry: (index: Index, id: any, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: any, func: GLib.CompareDataFunc) => IndexEntry
    entryAdded: (index: Index, entry: IndexEntry) => void
    gstReserved: any[]
    static name: string
}
export class IndexEntry {
    /* Fields of Gst-0.10.Gst.IndexEntry */
    type: IndexEntryType
    id: any
    /* Methods of Gst-0.10.Gst.IndexEntry */
    copy(): IndexEntry
    free(): void
    assocMap(format: Format): { returnType: any, value: any }
    static name: string
}
export abstract class IndexFactoryClass {
    /* Fields of Gst-0.10.Gst.IndexFactoryClass */
    parent: PluginFeatureClass
    gstReserved: any[]
    static name: string
}
export class IndexGroup {
    /* Fields of Gst-0.10.Gst.IndexGroup */
    groupnum: any
    entries: any[]
    certainty: IndexCertainty
    peergroup: any
    static name: string
}
export class Iterator {
    /* Fields of Gst-0.10.Gst.Iterator */
    next: IteratorNextFunction
    item: IteratorItemFunction
    resync: IteratorResyncFunction
    free: IteratorFreeFunction
    pushed: Iterator
    type: GObject.Type
    lock: GLib.Mutex
    cookie: any
    masterCookie: any
    gstReserved: any[]
    /* Methods of Gst-0.10.Gst.Iterator */
    push(other: Iterator): void
    filter(func: GLib.CompareFunc, userData: any): Iterator
    fold(func: IteratorFoldFunction, ret: any, userData: any): IteratorResult
    foreach(func: GLib.Func, userData: any): IteratorResult
    findCustom(func: GLib.CompareFunc, userData: any): any
    static name: string
    static new(size: any, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    constructor(size: any, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction)
    /* Static methods and pseudo-constructors */
    static new(size: any, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    static newSingle(type: GObject.Type, object: any, copy: CopyFunction, free: GLib.FreeFunc): Iterator
}
export abstract class MessageClass {
    /* Fields of Gst-0.10.Gst.MessageClass */
    miniObjectClass: MiniObjectClass
    gstReserved: any[]
    static name: string
}
export abstract class MiniObjectClass {
    /* Fields of Gst-0.10.Gst.MiniObjectClass */
    typeClass: GObject.TypeClass
    copy: MiniObjectCopyFunction
    finalize: MiniObjectFinalizeFunction
    gstReserved: any
    static name: string
}
export abstract class ObjectClass {
    /* Fields of Gst-0.10.Gst.ObjectClass */
    parentClass: GObject.ObjectClass
    pathStringSeparator: string
    signalObject: GObject.Object
    lock: any
    parentSet: (object: Object, parent: Object) => void
    parentUnset: (object: Object, parent: Object) => void
    objectSaved: (object: Object, parent: libxml2.NodePtr) => void
    deepNotify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    saveThyself: (object: Object, parent: libxml2.NodePtr) => libxml2.NodePtr
    restoreThyself: (object: Object, self: libxml2.NodePtr) => void
    gstReserved: any[]
    static name: string
}
export abstract class PadClass {
    /* Fields of Gst-0.10.Gst.PadClass */
    parentClass: ObjectClass
    linked: (pad: Pad, peer: Pad) => void
    unlinked: (pad: Pad, peer: Pad) => void
    requestLink: (pad: Pad) => void
    haveData: (pad: Pad, data: MiniObject) => any
    gstReserved: any[]
    static name: string
}
export class PadPrivate {
    static name: string
}
export abstract class PadTemplateClass {
    /* Fields of Gst-0.10.Gst.PadTemplateClass */
    parentClass: ObjectClass
    padCreated: (templ: PadTemplate, pad: Pad) => void
    gstReserved: any[]
    static name: string
}
export class ParamSpecFraction {
    /* Fields of Gst-0.10.Gst.ParamSpecFraction */
    parentInstance: GObject.ParamSpec
    minNum: any
    minDen: any
    maxNum: any
    maxDen: any
    defNum: any
    defDen: any
    static name: string
}
export class ParamSpecMiniObject {
    /* Fields of Gst-0.10.Gst.ParamSpecMiniObject */
    parentInstance: GObject.ParamSpec
    static name: string
}
export class ParseContext {
    /* Methods of Gst-0.10.Gst.ParseContext */
    getMissingElements(): string[]
    free(): void
    static name: string
    static new(): ParseContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParseContext
}
export abstract class PipelineClass {
    /* Fields of Gst-0.10.Gst.PipelineClass */
    parentClass: BinClass
    gstReserved: any[]
    static name: string
}
export class PipelinePrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of Gst-0.10.Gst.PluginClass */
    objectClass: ObjectClass
    gstReserved: any[]
    static name: string
}
export class PluginDesc {
    /* Fields of Gst-0.10.Gst.PluginDesc */
    majorVersion: any
    minorVersion: any
    name: string
    description: string
    pluginInit: PluginInitFunc
    version: string
    license: string
    source: string
    package: string
    origin: string
    gstReserved: any[]
    static name: string
}
export abstract class PluginFeatureClass {
    /* Fields of Gst-0.10.Gst.PluginFeatureClass */
    parentClass: ObjectClass
    gstReserved: any[]
    static name: string
}
export class PluginPrivate {
    static name: string
}
export class Poll {
    /* Methods of Gst-0.10.Gst.Poll */
    free(): void
    addFd(fd: PollFD): any
    removeFd(fd: PollFD): any
    fdCtlWrite(fd: PollFD, active: any): any
    fdCtlRead(fd: PollFD, active: any): any
    fdIgnored(fd: PollFD): void
    fdHasClosed(fd: PollFD): any
    fdHasError(fd: PollFD): any
    fdCanRead(fd: PollFD): any
    fdCanWrite(fd: PollFD): any
    wait(timeout: ClockTime): any
    setControllable(controllable: any): any
    restart(): void
    setFlushing(flushing: any): void
    writeControl(): any
    readControl(): any
    static name: string
    static new(controllable: any): Poll
    constructor(controllable: any)
    /* Static methods and pseudo-constructors */
    static new(controllable: any): Poll
    static newTimer(): Poll
}
export class PollFD {
    /* Fields of Gst-0.10.Gst.PollFD */
    fd: any
    idx: any
    /* Methods of Gst-0.10.Gst.PollFD */
    init(): void
    static name: string
}
export abstract class ProxyPadClass {
    /* Fields of Gst-0.10.Gst.ProxyPadClass */
    parentClass: PadClass
    gstReserved: any[]
    static name: string
}
export class ProxyPadPrivate {
    static name: string
}
export abstract class PushSrcClass {
    /* Fields of Gst-0.10.Gst.PushSrcClass */
    parentClass: BaseSrcClass
    create: (src: PushSrc, buf: Buffer) => FlowReturn
    gstReserved: any[]
    static name: string
}
export abstract class QueryClass {
    /* Fields of Gst-0.10.Gst.QueryClass */
    miniObjectClass: MiniObjectClass
    gstReserved: any[]
    static name: string
}
export class QueryTypeDefinition {
    /* Fields of Gst-0.10.Gst.QueryTypeDefinition */
    value: QueryType
    nick: string
    description: string
    quark: GLib.Quark
    static name: string
}
export abstract class RegistryClass {
    /* Fields of Gst-0.10.Gst.RegistryClass */
    parentClass: ObjectClass
    pluginAdded: (registry: Registry, plugin: Plugin) => void
    featureAdded: (registry: Registry, feature: PluginFeature) => void
    gstReserved: any[]
    static name: string
}
export class RegistryPrivate {
    static name: string
}
export class Segment {
    /* Fields of Gst-0.10.Gst.Segment */
    rate: number
    absRate: number
    format: Format
    flags: SeekFlags
    start: any
    stop: any
    time: any
    accum: any
    lastStop: any
    duration: any
    appliedRate: number
    gstReserved: any[]
    /* Methods of Gst-0.10.Gst.Segment */
    copy(): Segment
    free(): void
    init(format: Format): void
    setDuration(format: Format, duration: any): void
    setLastStop(format: Format, position: any): void
    setSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: any, stopType: SeekType, stop: any): { update: any }
    setNewsegment(update: any, rate: number, format: Format, start: any, stop: any, time: any): void
    setNewsegmentFull(update: any, rate: number, appliedRate: number, format: Format, start: any, stop: any, time: any): void
    toStreamTime(format: Format, position: any): any
    toRunningTime(format: Format, position: any): any
    toPosition(format: Format, runningTime: any): any
    clip(format: Format, start: any, stop: any): { returnType: any, clipStart: any, clipStop: any }
    setRunningTime(format: Format, runningTime: any): any
    static name: string
    static new(): Segment
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Segment
}
export class StaticCaps {
    /* Fields of Gst-0.10.Gst.StaticCaps */
    caps: Caps
    string: string
    gstReserved: any[]
    /* Methods of Gst-0.10.Gst.StaticCaps */
    get(): Caps
    static name: string
}
export class StaticPadTemplate {
    /* Fields of Gst-0.10.Gst.StaticPadTemplate */
    nameTemplate: string
    direction: PadDirection
    presence: PadPresence
    staticCaps: StaticCaps
    /* Methods of Gst-0.10.Gst.StaticPadTemplate */
    get(): PadTemplate
    getCaps(): Caps
    static name: string
}
export class Structure {
    /* Fields of Gst-0.10.Gst.Structure */
    type: GObject.Type
    name: GLib.Quark
    parentRefcount: any
    fields: GLib.Array
    gstReserved: any
    /* Methods of Gst-0.10.Gst.Structure */
    copy(): Structure
    setParentRefcount(): { refcount: any }
    free(): void
    getName(): string
    getNameId(): GLib.Quark
    hasName(name: string): any
    setName(name: string): void
    idSetValue(field: GLib.Quark, value: any): void
    setValue(fieldname: string, value: any): void
    idGetValue(field: GLib.Quark): any
    getValue(fieldname: string): any
    removeField(fieldname: string): void
    removeAllFields(): void
    getFieldType(fieldname: string): GObject.Type
    foreach(func: StructureForeachFunc, userData: any): any
    mapInPlace(func: StructureMapFunc, userData: any): any
    nFields(): any
    nthFieldName(index: any): string
    idHasField(field: GLib.Quark): any
    idHasFieldTyped(field: GLib.Quark, type: GObject.Type): any
    hasField(fieldname: string): any
    hasFieldTyped(fieldname: string, type: GObject.Type): any
    getBoolean(fieldname: string): { returnType: any, value: any }
    getInt(fieldname: string): { returnType: any, value: any }
    getUint(fieldname: string): { returnType: any, value: any }
    getFourcc(fieldname: string): { returnType: any, value: any }
    getDouble(fieldname: string): { returnType: any, value: number }
    getDate(fieldname: string, value: GLib.Date): any
    getClockTime(fieldname: string, value: ClockTime): any
    getString(fieldname: string): string
    getEnum(fieldname: string, enumtype: GObject.Type): { returnType: any, value: any }
    getFraction(fieldname: string): { returnType: any, valueNumerator: any, valueDenominator: any }
    toString(): string
    fixateFieldNearestInt(fieldName: string, target: any): any
    fixateFieldNearestDouble(fieldName: string, target: number): any
    fixateFieldBoolean(fieldName: string, target: any): any
    fixateFieldString(fieldName: string, target: string): any
    fixateFieldNearestFraction(fieldName: string, targetNumerator: any, targetDenominator: any): any
    static name: string
}
export abstract class SystemClockClass {
    /* Fields of Gst-0.10.Gst.SystemClockClass */
    parentClass: ClockClass
    gstReserved: any[]
    static name: string
}
export class SystemClockPrivate {
    static name: string
}
export class TagSetterIFace {
    /* Fields of Gst-0.10.Gst.TagSetterIFace */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class TaskClass {
    /* Fields of Gst-0.10.Gst.TaskClass */
    parentClass: ObjectClass
    pool: TaskPool
    gstReserved: any[]
    static name: string
}
export abstract class TaskPoolClass {
    /* Fields of Gst-0.10.Gst.TaskPoolClass */
    parentClass: ObjectClass
    prepare: (pool: TaskPool) => void
    cleanup: (pool: TaskPool) => void
    push: (pool: TaskPool, func: TaskPoolFunction) => any
    join: (pool: TaskPool, id: any) => void
    gstReserved: any[]
    static name: string
}
export class TaskPrivate {
    static name: string
}
export class TaskThreadCallbacks {
    /* Fields of Gst-0.10.Gst.TaskThreadCallbacks */
    enterThread: any
    leaveThread: any
    gstReserved: any[]
    static name: string
}
export class Trace {
    /* Fields of Gst-0.10.Gst.Trace */
    filename: string
    fd: any
    buf: TraceEntry
    bufsize: any
    bufoffset: any
    /* Methods of Gst-0.10.Gst.Trace */
    destroy(): void
    flush(): void
    textFlush(): void
    setDefault(): void
    static name: string
    static new(filename: string, size: any): Trace
    constructor(filename: string, size: any)
    /* Static methods and pseudo-constructors */
    static new(filename: string, size: any): Trace
}
export class TraceEntry {
    /* Fields of Gst-0.10.Gst.TraceEntry */
    timestamp: any
    sequence: any
    data: any
    message: any[]
    static name: string
}
export class TypeFind {
    /* Fields of Gst-0.10.Gst.TypeFind */
    peek: any
    suggest: any
    data: any
    getLength: any
    gstReserved: any[]
    static name: string
}
export abstract class TypeFindFactoryClass {
    /* Fields of Gst-0.10.Gst.TypeFindFactoryClass */
    parent: PluginFeatureClass
    gstReserved: any[]
    static name: string
}
export class TypeNameData {
    /* Fields of Gst-0.10.Gst.TypeNameData */
    name: string
    type: GObject.Type
    static name: string
}
export abstract class URIHandlerInterface {
    /* Fields of Gst-0.10.Gst.URIHandlerInterface */
    parent: GObject.TypeInterface
    newUri: (handler: URIHandler, uri: string) => void
    getType: () => URIType
    getProtocols: () => string[]
    getUri: (handler: URIHandler) => string
    setUri: (handler: URIHandler, uri: string) => any
    getTypeFull: (type: GObject.Type) => URIType
    getProtocolsFull: (type: GObject.Type) => string[]
    gstReserved: any[]
    static name: string
}
export class ValueTable {
    /* Fields of Gst-0.10.Gst.ValueTable */
    type: GObject.Type
    compare: ValueCompareFunc
    serialize: ValueSerializeFunc
    deserialize: ValueDeserializeFunc
    gstReserved: any[]
    static name: string
}
export abstract class XMLClass {
    /* Fields of Gst-0.10.Gst.XMLClass */
    parentClass: ObjectClass
    objectLoaded: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    objectSaved: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    gstReserved: any[]
    static name: string
}
export type ClockID = any
export type ClockTime = any
export type ClockTimeDiff = any
export type TagList = any
}