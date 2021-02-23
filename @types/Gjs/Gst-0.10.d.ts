/**
 * Gst-0.10
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

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
export function alloc_trace_available(): any
export function alloc_trace_get(name: string): AllocTrace
export function alloc_trace_live_all(): any
export function alloc_trace_print_all(): void
export function alloc_trace_print_live(): void
export function alloc_trace_set_flags_all(flags: AllocTraceFlags): void
export function atomic_int_set(value: any): /* atomic_int */ any
export function caps_from_string(string: string): Caps
export function caps_load_thyself(parent: libxml2.NodePtr): Caps
export function child_proxy_child_added(object: Object, child: Object): void
export function child_proxy_child_removed(object: Object, child: Object): void
export function child_proxy_get_property(object: Object, name: string, value: any): void
export function child_proxy_lookup(object: Object, name: string, target: Object, pspec: GObject.ParamSpec): any
export function child_proxy_set_property(object: Object, name: string, value: any): void
export function class_signal_connect(klass: ObjectClass, name: string, func: any, func_data: any): any
export function class_signal_emit_by_name(object: Object, name: string, self: libxml2.NodePtr): void
export function debug_add_log_function(func: LogFunction): void
export function debug_construct_term_color(colorinfo: any): string
export function debug_construct_win_color(colorinfo: any): any
export function debug_get_all_categories(): any[]
export function debug_get_default_threshold(): DebugLevel
export function debug_is_active(): any
export function debug_is_colored(): any
export function debug_level_get_name(level: DebugLevel): string
export function debug_log_default(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: any, object: GObject.Object, message: DebugMessage, unused: any): void
export function debug_print_stack_trace(): void
export function debug_remove_log_function(func: LogFunction): any
export function debug_remove_log_function_by_data(data: any): any
export function debug_set_active(active: any): void
export function debug_set_colored(colored: any): void
export function debug_set_default_threshold(level: DebugLevel): void
export function debug_set_threshold_for_name(name: string, level: DebugLevel): void
export function debug_unset_threshold_for_name(name: string): void
export function default_registry_check_feature_version(feature_name: string, min_major: any, min_minor: any, min_micro: any): any
export function deinit(): void
export function error_get_message(domain: GLib.Quark, code: any): string
export function flow_get_name(ret: FlowReturn): string
export function flow_to_quark(ret: FlowReturn): GLib.Quark
export function format_get_by_nick(nick: string): Format
export function format_get_details(format: Format): FormatDefinition
export function format_get_name(format: Format): string
export function format_iterate_definitions(): Iterator
export function format_register(nick: string, description: string): Format
export function format_to_quark(format: Format): GLib.Quark
export function formats_contains(formats: Format, format: Format): any
export function implements_interface_cast(from: any, type: GObject.Type): any
export function implements_interface_check(from: any, type: GObject.Type): any
export function init(argv?: string[] | null): /* argv */ string[] | null
export function init_check(argv: string[]): [ /* returnType */ any, /* argc */ any ]
export function init_get_option_group(): GLib.OptionGroup
export function is_tag_list(p: any): any
export function param_spec_fraction(name: string, nick: string, blurb: string, min_num: any, min_denom: any, max_num: any, max_denom: any, default_num: any, default_denom: any, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_mini_object(name: string, nick: string, blurb: string, object_type: GObject.Type, flags: GObject.ParamFlags): GObject.ParamSpec
export function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: any): Element
export function parse_bin_from_description_full(bin_description: string, ghost_unlinked_pads: any, context: ParseContext, flags: ParseFlags): Element
export function parse_launch(pipeline_description: string): Element
export function parse_launch_full(pipeline_description: string, context: ParseContext, flags: ParseFlags): Element
export function parse_launchv(argv: string[]): Element
export function parse_launchv_full(argv: string[], context: ParseContext, flags: ParseFlags): Element
export function print_element_args(buf: GLib.String, indent: any, element: Element): void
export function print_pad_caps(buf: GLib.String, indent: any, pad: Pad): void
export function segtrap_is_enabled(): any
export function segtrap_set_enabled(enabled: any): void
export function structure_empty_new(name: string): Structure
export function structure_from_string(string: string, end: string[]): Structure
export function structure_id_empty_new(quark: GLib.Quark): Structure
export function tag_exists(tag: string): any
export function tag_get_description(tag: string): string
export function tag_get_flag(tag: string): TagFlag
export function tag_get_nick(tag: string): string
export function tag_get_type(tag: string): GObject.Type
export function tag_is_fixed(tag: string): any
export function tag_list_copy_value(dest: any, list: TagList, tag: string): any
export function tag_merge_strings_with_comma(dest: any, src: any): void
export function tag_merge_use_first(dest: any, src: any): void
export function tag_register(name: string, flag: TagFlag, type: GObject.Type, nick: string, blurb: string, func: TagMergeFunc): void
export function trace_read_tsc(): /* dst */ any
export function type_find_helper(src: Pad, size: any): Caps
export function type_find_helper_for_buffer(obj: Object, buf: Buffer, prob: TypeFindProbability): Caps
export function type_find_helper_for_extension(obj: Object, extension: string): Caps
export function type_find_helper_get_range(obj: Object, func: TypeFindHelperGetRangeFunction, size: any, prob: TypeFindProbability): Caps
export function type_find_helper_get_range_ext(obj: Object, func: TypeFindHelperGetRangeFunction, size: any, extension: string, prob: TypeFindProbability): Caps
export function type_find_register(plugin: Plugin, name: string, rank: any, func: TypeFindFunction, extensions: string[], possible_caps: Caps, data: any, data_notify: GLib.DestroyNotify): any
export function type_register_static_full(parent_type: GObject.Type, type_name: string, class_size: any, base_init: GObject.BaseInitFunc, base_finalize: GObject.BaseFinalizeFunc, class_init: GObject.ClassInitFunc, class_finalize: GObject.ClassFinalizeFunc, instance_size: any, n_preallocs: any, instance_init: GObject.InstanceInitFunc, value_table: GObject.TypeValueTable, flags: GObject.TypeFlags): GObject.Type
export function update_registry(): any
export function uri_construct(protocol: string, location: string): string
export function uri_get_location(uri: string): string
export function uri_get_protocol(uri: string): string
export function uri_has_protocol(uri: string, protocol: string): any
export function uri_is_valid(uri: string): any
export function uri_protocol_is_supported(type: URIType, protocol: string): any
export function uri_protocol_is_valid(protocol: string): any
export function util_array_binary_search(array: any, num_elements: any, element_size: number, search_func: GLib.CompareDataFunc, mode: SearchMode, search_data: any, user_data: any): any
export function util_double_to_fraction(src: number): [ /* dest_n */ any, /* dest_d */ any ]
export function util_dump_mem(mem: any[], size: any): void
export function util_fraction_add(a_n: any, a_d: any, b_n: any, b_d: any): [ /* returnType */ any, /* res_n */ any, /* res_d */ any ]
export function util_fraction_multiply(a_n: any, a_d: any, b_n: any, b_d: any): [ /* returnType */ any, /* res_n */ any, /* res_d */ any ]
export function util_fraction_to_double(src_n: any, src_d: any): /* dest */ number
export function util_gdouble_to_guint64(value: number): any
export function util_get_timestamp(): ClockTime
export function util_greatest_common_divisor(a: any, b: any): any
export function util_guint64_to_gdouble(value: any): number
export function util_seqnum_compare(s1: any, s2: any): number
export function util_seqnum_next(): any
export function util_set_object_arg(object: GObject.Object, name: string, value: string): void
export function util_set_value_from_string(value: any, value_str: string): void
export function util_uint64_scale(val: any, num: any, denom: any): any
export function util_uint64_scale_ceil(val: any, num: any, denom: any): any
export function util_uint64_scale_int(val: any, num: any, denom: any): any
export function util_uint64_scale_int_ceil(val: any, num: any, denom: any): any
export function util_uint64_scale_int_round(val: any, num: any, denom: any): any
export function util_uint64_scale_round(val: any, num: any, denom: any): any
export function value_array_append_value(value: any, append_value: any): void
export function value_array_get_size(value: any): any
export function value_array_get_value(value: any, index: any): any
export function value_array_prepend_value(value: any, prepend_value: any): void
export function value_can_compare(value1: any, value2: any): any
export function value_can_intersect(value1: any, value2: any): any
export function value_can_subtract(minuend: any, subtrahend: any): any
export function value_can_union(value1: any, value2: any): any
export function value_compare(value1: any, value2: any): any
export function value_deserialize(dest: any, src: string): any
export function value_dup_mini_object(value: any): MiniObject
export function value_fraction_multiply(product: any, factor1: any, factor2: any): any
export function value_fraction_subtract(dest: any, minuend: any, subtrahend: any): any
export function value_get_caps(value: any): Caps
export function value_get_date(value: any): GLib.Date
export function value_get_double_range_max(value: any): number
export function value_get_double_range_min(value: any): number
export function value_get_fourcc(value: any): any
export function value_get_fraction_denominator(value: any): any
export function value_get_fraction_numerator(value: any): any
export function value_get_fraction_range_max(value: any): any
export function value_get_fraction_range_min(value: any): any
export function value_get_int_range_max(value: any): any
export function value_get_int_range_min(value: any): any
export function value_get_mini_object(value: any): MiniObject
export function value_get_structure(value: any): Structure
export function value_init_and_copy(dest: any, src: any): void
export function value_intersect(dest: any, value1: any, value2: any): any
export function value_is_fixed(value: any): any
export function value_list_append_value(value: any, append_value: any): void
export function value_list_concat(dest: any, value1: any, value2: any): void
export function value_list_get_size(value: any): any
export function value_list_get_value(value: any, index: any): any
export function value_list_prepend_value(value: any, prepend_value: any): void
export function value_register(table: ValueTable): void
export function value_register_intersect_func(type1: GObject.Type, type2: GObject.Type, func: ValueIntersectFunc): void
export function value_register_subtract_func(minuend_type: GObject.Type, subtrahend_type: GObject.Type, func: ValueSubtractFunc): void
export function value_register_union_func(type1: GObject.Type, type2: GObject.Type, func: ValueUnionFunc): void
export function value_serialize(value: any): string
export function value_set_caps(value: any, caps: Caps): void
export function value_set_date(value: any, date: GLib.Date): void
export function value_set_double_range(value: any, start: number, end: number): void
export function value_set_fourcc(value: any, fourcc: any): void
export function value_set_fraction(value: any, numerator: any, denominator: any): void
export function value_set_fraction_range(value: any, start: any, end: any): void
export function value_set_fraction_range_full(value: any, numerator_start: any, denominator_start: any, numerator_end: any, denominator_end: any): void
export function value_set_int_range(value: any, start: any, end: any): void
export function value_set_mini_object(value: any, mini_object: MiniObject): void
export function value_set_structure(value: any, structure: Structure): void
export function value_subtract(dest: any, minuend: any, subtrahend: any): any
export function value_take_mini_object(value: any, mini_object: MiniObject): void
export function value_union(dest: any, value1: any, value2: any): any
export function version(): [ /* major */ any, /* minor */ any, /* micro */ any, /* nano */ any ]
export function version_string(): string
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
    (index: Index, writer: Object, writer_string: string[]): any
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
    (field_id: GLib.Quark, value: any): any
}
export interface StructureMapFunc {
    (field_id: GLib.Quark, value: any): any
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
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.ChildProxy */
    get_child_by_name(name: string): Object
    get_child_by_index(index: any): Object
    get_children_count(): any
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.ChildProxy */
    vfunc_get_child_by_index(index: any): Object
    vfunc_get_children_count(): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    emit(sigName: "child-removed", object: GObject.Object): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ChildProxy, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ChildProxy, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ChildProxy, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ChildProxy, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ChildProxy, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ChildProxy, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ChildProxy, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ChildProxy, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): any
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.ImplementsInterface */
    vfunc_supported(iface_type: GObject.Type): any
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: ImplementsInterface) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: ImplementsInterface) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ImplementsInterface, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ImplementsInterface, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ImplementsInterface, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ImplementsInterface, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TagSetter */
    reset_tags(): void
    merge_tags(list: TagList, mode: TagMergeMode): void
    add_tag_value(mode: TagMergeMode, tag: string, value: any): void
    get_tag_list(): TagList
    set_tag_merge_mode(mode: TagMergeMode): void
    get_tag_merge_mode(): TagMergeMode
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): any
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: TagSetter, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: TagSetter, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: TagSetter, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: TagSetter, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TagSetter, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TagSetter, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TagSetter, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: TagSetter, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: TagSetter, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: TagSetter, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TagSetter, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: TagSetter, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TagSetter_ConstructProps)
    _init (config?: TagSetter_ConstructProps): void
    static $gtype: GObject.Type
}
export class URIHandler {
    /* Methods of Gst-0.10.Gst.URIHandler */
    get_uri_type(): any
    get_protocols(): string[]
    get_uri(): string
    set_uri(uri: string): any
    new_uri(uri: string): void
    /* Virtual methods of Gst-0.10.Gst.URIHandler */
    vfunc_get_uri(): string
    vfunc_set_uri(uri: string): any
    /* Signals of Gst-0.10.Gst.URIHandler */
    connect(sigName: "new-uri", callback: (($obj: URIHandler, object: string) => void)): number
    connect_after(sigName: "new-uri", callback: (($obj: URIHandler, object: string) => void)): number
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
    assembled_data: any
    assembled_size: any
    assembled_len: any
    buflist_end: any[]
    priv: AdapterPrivate
    _gst_reserved: any[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Adapter */
    clear(): void
    push(buf: Buffer): void
    peek(size: any): any[]
    copy(dest: any[], offset: any, size: any): void
    flush(flush: any): void
    take(nbytes: any): any[]
    take_buffer(nbytes: any): Buffer
    available(): any
    available_fast(): any
    prev_timestamp(): [ /* returnType */ ClockTime, /* distance */ any ]
    masked_scan_uint32(mask: any, pattern: any, offset: any, size: any): any
    masked_scan_uint32_peek(mask: any, pattern: any, offset: any, size: any): [ /* returnType */ any, /* value */ any ]
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    enable_last_buffer?: any
    max_lateness?: any
    preroll_queue_len?: any
    qos?: any
    render_delay?: any
    sync?: any
    ts_offset?: any
}
export class BaseSink {
    /* Properties of Gst-0.10.Gst.BaseSink */
    async: any
    blocksize: any
    enable_last_buffer: any
    readonly last_buffer: Buffer
    max_lateness: any
    preroll_queue_len: any
    qos: any
    render_delay: any
    sync: any
    ts_offset: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.BaseSink */
    element: Element
    sinkpad: Pad
    pad_mode: ActivateMode
    offset: any
    can_activate_pull: any
    can_activate_push: any
    preroll_queue: GLib.Queue
    preroll_queue_max_len: any
    preroll_queued: any
    buffers_queued: any
    events_queued: any
    eos: any
    eos_queued: any
    need_preroll: any
    have_preroll: any
    playing_async: any
    have_newsegment: any
    segment: Segment
    clock_id: ClockID
    end_time: ClockTime
    flushing: any
    priv: BaseSinkPrivate
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSink */
    do_preroll(obj: MiniObject): FlowReturn
    wait_preroll(): FlowReturn
    set_sync(sync: any): void
    get_sync(): any
    set_max_lateness(max_lateness: any): void
    get_max_lateness(): any
    set_qos_enabled(enabled: any): void
    is_qos_enabled(): any
    set_async_enabled(enabled: any): void
    is_async_enabled(): any
    set_ts_offset(offset: ClockTimeDiff): void
    get_ts_offset(): ClockTimeDiff
    get_last_buffer(): Buffer
    set_last_buffer_enabled(enable: any): void
    is_last_buffer_enabled(): any
    query_latency(min_latency: ClockTime, max_latency: ClockTime): [ /* returnType */ any, /* live */ any, /* upstream_live */ any ]
    get_latency(): ClockTime
    set_render_delay(delay: ClockTime): void
    get_render_delay(): ClockTime
    set_blocksize(blocksize: any): void
    get_blocksize(): any
    wait_clock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn
    wait_eos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): any
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.BaseSink */
    vfunc_get_caps(): Caps
    vfunc_set_caps(caps: Caps): any
    vfunc_buffer_alloc(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void
    vfunc_start(): any
    vfunc_stop(): any
    vfunc_unlock(): any
    vfunc_event(event: Event): any
    vfunc_preroll(buffer: Buffer): FlowReturn
    vfunc_render(buffer: Buffer): FlowReturn
    vfunc_async_play(): StateChangeReturn
    vfunc_activate_pull(active: any): any
    vfunc_fixate(caps: Caps): void
    vfunc_unlock_stop(): any
    vfunc_render_list(buffer_list: BufferList): FlowReturn
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSink, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseSink, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSink, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseSink, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSink, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseSink, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseSink, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: BaseSink, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: BaseSink, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BaseSink, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseSink, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: BaseSink, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseSink_ConstructProps)
    _init (config?: BaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseSrc_ConstructProps extends Element_ConstructProps {
    blocksize?: any
    do_timestamp?: any
    num_buffers?: any
    typefind?: any
}
export class BaseSrc {
    /* Properties of Gst-0.10.Gst.BaseSrc */
    blocksize: any
    do_timestamp: any
    num_buffers: any
    typefind: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.BaseSrc */
    element: Element
    srcpad: Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: any
    live_running: any
    can_activate_push: any
    pad_mode: ActivateMode
    seekable: any
    random_access: any
    clock_id: ClockID
    end_time: ClockTime
    segment: Segment
    need_newsegment: any
    offset: any
    size: any
    num_buffers_left: any
    priv: BaseSrcPrivate
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSrc */
    wait_playing(): FlowReturn
    set_live(live: any): void
    set_format(format: Format): void
    query_latency(min_latency: ClockTime, max_latency: ClockTime): [ /* returnType */ any, /* live */ any ]
    set_blocksize(blocksize: any): void
    get_blocksize(): any
    set_do_timestamp(timestamp: any): void
    get_do_timestamp(): any
    new_seamless_segment(start: any, stop: any, position: any): any
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): any
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.BaseSrc */
    vfunc_get_caps(): Caps
    vfunc_set_caps(caps: Caps): any
    vfunc_negotiate(): any
    vfunc_newsegment(): any
    vfunc_start(): any
    vfunc_stop(): any
    vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void
    vfunc_get_size(): [ /* returnType */ any, /* size */ any ]
    vfunc_is_seekable(): any
    vfunc_unlock(): any
    vfunc_event(event: Event): any
    vfunc_create(offset: any, size: any, buf: Buffer): FlowReturn
    vfunc_do_seek(segment: Segment): any
    vfunc_query(query: Query): any
    vfunc_check_get_range(): any
    vfunc_fixate(caps: Caps): void
    vfunc_unlock_stop(): any
    vfunc_prepare_seek_segment(seek: Event, segment: Segment): any
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSrc, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseSrc, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSrc, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseSrc, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseSrc, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: BaseSrc, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: BaseSrc, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BaseSrc, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseSrc, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: BaseSrc, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    always_in_place: any
    cache_caps1: Caps
    cache_caps1_size: any
    cache_caps2: Caps
    cache_caps2_size: any
    have_same_caps: any
    delay_configure: any
    pending_configure: any
    negotiated: any
    have_newsegment: any
    segment: Segment
    transform_lock: GLib.Mutex
    priv: BaseTransformPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseTransform */
    set_passthrough(passthrough: any): void
    is_passthrough(): any
    set_in_place(in_place: any): void
    is_in_place(): any
    update_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void
    set_qos_enabled(enabled: any): void
    is_qos_enabled(): any
    set_gap_aware(gap_aware: any): void
    suggest(caps: Caps, size: any): void
    reconfigure(): void
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): any
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.BaseTransform */
    vfunc_transform_caps(direction: PadDirection, caps: Caps): Caps
    vfunc_fixate_caps(direction: PadDirection, caps: Caps, othercaps: Caps): void
    vfunc_transform_size(direction: PadDirection, caps: Caps, size: any, othercaps: Caps): [ /* returnType */ any, /* othersize */ any ]
    vfunc_get_unit_size(caps: Caps): [ /* returnType */ any, /* size */ any ]
    vfunc_set_caps(incaps: Caps, outcaps: Caps): any
    vfunc_start(): any
    vfunc_stop(): any
    vfunc_event(event: Event): any
    vfunc_transform(inbuf: Buffer, outbuf: Buffer): FlowReturn
    vfunc_transform_ip(buf: Buffer): FlowReturn
    vfunc_prepare_output_buffer(input: Buffer, size: any, caps: Caps, buf: Buffer): FlowReturn
    vfunc_src_event(event: Event): any
    vfunc_before_transform(buffer: Buffer): void
    vfunc_accept_caps(direction: PadDirection, caps: Caps): any
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseTransform, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseTransform, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseTransform, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseTransform, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseTransform, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseTransform, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseTransform, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: BaseTransform, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: BaseTransform, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BaseTransform, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseTransform, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: BaseTransform, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseTransform_ConstructProps)
    _init (config?: BaseTransform_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Bin_ConstructProps extends Element_ConstructProps {
    async_handling?: any
}
export class Bin {
    /* Properties of Gst-0.10.Gst.Bin */
    async_handling: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Bin */
    element: Element
    numchildren: any
    children: any[]
    children_cookie: any
    child_bus: Bus
    messages: any[]
    polling: any
    state_dirty: any
    clock_dirty: any
    provided_clock: Clock
    clock_provider: Element
    priv: BinPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Element): any
    remove(element: Element): any
    get_by_name(name: string): Element
    get_by_name_recurse_up(name: string): Element
    get_by_interface(iface: GObject.Type): Element
    iterate_elements(): Iterator
    iterate_sorted(): Iterator
    iterate_recurse(): Iterator
    iterate_sinks(): Iterator
    iterate_sources(): Iterator
    iterate_all_by_interface(iface: GObject.Type): Iterator
    recalculate_latency(): any
    find_unlinked_pad(direction: PadDirection): Pad
    find_unconnected_pad(direction: PadDirection): Pad
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): any
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gst-0.10.Gst.ChildProxy */
    get_child_by_name(name: string): Object
    get_child_by_index(index: any): Object
    get_children_count(): any
    /* Virtual methods of Gst-0.10.Gst.Bin */
    vfunc_add_element(element: Element): any
    vfunc_remove_element(element: Element): any
    vfunc_handle_message(message: Message): void
    vfunc_get_child_by_index(index: any): Object
    vfunc_get_children_count(): any
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (($obj: Bin) => any)): number
    connect_after(sigName: "do-latency", callback: (($obj: Bin) => any)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Bin, object: Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Bin, object: Element) => void)): number
    emit(sigName: "element-added", object: Element): void
    connect(sigName: "element-removed", callback: (($obj: Bin, object: Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Bin, object: Element) => void)): number
    emit(sigName: "element-removed", object: Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Bin, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Bin, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Bin, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Bin, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bin, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Bin, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Bin, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Bin, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Bin, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Bin, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Bin, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Bin, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Bin, object: GObject.Object) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Bin, object: GObject.Object) => void)): number
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: Bin, object: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Bin, object: GObject.Object) => void)): number
    emit(sigName: "child-removed", object: GObject.Object): void
    connect(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bin_ConstructProps)
    _init (config?: Bin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Bin
    static $gtype: GObject.Type
}
export class Buffer {
    /* Fields of Gst-0.10.Gst.Buffer */
    mini_object: MiniObject
    data: any
    size: any
    timestamp: ClockTime
    duration: ClockTime
    caps: Caps
    offset: any
    offset_end: any
    malloc_data: any
    free_func: GLib.FreeFunc
    parent: Buffer
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    /* Methods of Gst-0.10.Gst.Buffer */
    copy_metadata(src: Buffer, flags: BufferCopyFlags): void
    is_metadata_writable(): any
    make_metadata_writable(): Buffer
    get_caps(): Caps
    set_caps(caps: Caps): void
    create_sub(offset: any, size: any): Buffer
    is_span_fast(buf2: Buffer): any
    span(offset: any, buf2: Buffer, len: any): Buffer
    merge(buf2: Buffer): Buffer
    join(buf2: Buffer): Buffer
    stamp(src: Buffer): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): any
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    static new(): Buffer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Buffer
    static new(type: GObject.Type): Buffer
    static new_and_alloc(size: any): Buffer
    static try_new_and_alloc(size: any): Buffer
}
export class BufferList {
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    _gst_reserved: any
    /* Methods of Gst-0.10.Gst.BufferList */
    n_groups(): any
    foreach(func: BufferListFunc, user_data: any): void
    get(group: any, idx: any): Buffer
    iterate(): BufferListIterator
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): any
    make_writable(): MiniObject
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
    queue_lock: GLib.Mutex
    sync_handler: BusSyncHandler
    sync_handler_data: any
    signal_watch_id: any
    num_signal_watchers: any
    priv: BusPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Bus */
    post(message: Message): any
    have_pending(): any
    peek(): Message
    pop(): Message
    pop_filtered(types: MessageType): Message
    timed_pop(timeout: ClockTime): Message
    timed_pop_filtered(timeout: ClockTime, types: MessageType): Message
    set_flushing(flushing: any): void
    set_sync_handler(func: BusSyncHandler, data: any): void
    create_watch(): GLib.Source
    add_watch_full(priority: any, func: BusFunc, user_data: any): any
    add_watch(func: BusFunc, user_data: any): any
    poll(events: MessageType, timeout: ClockTimeDiff): Message
    async_signal_func(message: Message, data: any): any
    sync_signal_handler(message: Message, data: any): BusSyncReply
    add_signal_watch(): void
    add_signal_watch_full(priority: any): void
    remove_signal_watch(): void
    enable_sync_message_emission(): void
    disable_sync_message_emission(): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Bus */
    connect(sigName: "message", callback: (($obj: Bus, object: Message) => void)): number
    connect_after(sigName: "message", callback: (($obj: Bus, object: Message) => void)): number
    emit(sigName: "message", object: Message): void
    connect(sigName: "sync-message", callback: (($obj: Bus, object: Message) => void)): number
    connect_after(sigName: "sync-message", callback: (($obj: Bus, object: Message) => void)): number
    emit(sigName: "sync-message", object: Message): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bus, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Bus, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Bus, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Bus, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Bus, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Bus, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Bus, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Bus, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    window_size?: any
    window_threshold?: any
}
export class Clock {
    /* Properties of Gst-0.10.Gst.Clock */
    stats: any
    timeout: any
    window_size: any
    window_threshold: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Clock */
    object: Object
    slave_lock: GLib.Mutex
    internal_calibration: ClockTime
    external_calibration: ClockTime
    rate_numerator: ClockTime
    rate_denominator: ClockTime
    last_time: ClockTime
    entries: any[]
    entries_changed: GLib.Cond
    resolution: ClockTime
    master: Clock
    filling: any
    time_index: any
    times: ClockTime
    clockid: ClockID
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Clock */
    set_resolution(resolution: ClockTime): ClockTime
    get_resolution(): ClockTime
    get_time(): ClockTime
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    get_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    set_master(master: Clock): any
    get_master(): Clock
    add_observation(slave: ClockTime, master: ClockTime): [ /* returnType */ any, /* r_squared */ number ]
    get_internal_time(): ClockTime
    adjust_unlocked(internal: ClockTime): ClockTime
    unadjust_unlocked(external: ClockTime): ClockTime
    new_single_shot_id(time: ClockTime): ClockID
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Clock */
    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime
    vfunc_get_resolution(): ClockTime
    vfunc_get_internal_time(): ClockTime
    vfunc_wait(entry: ClockEntry): ClockReturn
    vfunc_wait_async(entry: ClockEntry): ClockReturn
    vfunc_unschedule(entry: ClockEntry): void
    vfunc_wait_jitter(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Clock, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Clock, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Clock, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Clock, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Clock, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Clock, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Clock, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Clock, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::stats", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Clock_ConstructProps)
    _init (config?: Clock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static id_ref(id: ClockID): ClockID
    static id_unref(id: ClockID): void
    static id_compare_func(id1: any, id2: any): any
    static id_get_time(id: ClockID): ClockTime
    static id_wait(id: ClockID, jitter: ClockTimeDiff): ClockReturn
    static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn
    static id_wait_async_full(id: ClockID, func: ClockCallback): ClockReturn
    static id_unschedule(id: ClockID): void
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
    user_data: any
    numpads: any
    queuedpads: any
    eospads: any
    started: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.CollectPads */
    set_function(func: CollectPadsFunction, user_data: any): void
    set_clip_function(clipfunc: CollectPadsClipFunction, user_data: any): void
    add_pad(pad: Pad, size: any): CollectData
    add_pad_full(pad: Pad, size: any, destroy_notify: CollectDataDestroyNotify): CollectData
    remove_pad(pad: Pad): any
    is_active(pad: Pad): any
    collect(): FlowReturn
    collect_range(offset: any, length: any): FlowReturn
    start(): void
    stop(): void
    set_flushing(flushing: any): void
    peek(data: CollectData): Buffer
    pop(data: CollectData): Buffer
    available(): any
    read(data: CollectData, size: any): [ /* returnType */ any, /* bytes */ any ]
    read_buffer(data: CollectData, size: any): Buffer
    take_buffer(data: CollectData, size: any): Buffer
    flush(data: CollectData, size: any): any
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: CollectPads, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: CollectPads, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: CollectPads, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: CollectPads, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: CollectPads, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: CollectPads, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: CollectPads, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: CollectPads, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly current_level_bytes: any
    readonly current_level_time: any
    readonly current_level_visible: any
    /* Fields of Gst-0.10.Gst.DataQueue */
    object: GObject.Object
    queue: GLib.Queue
    cur_level: DataQueueSize
    checkfull: DataQueueCheckFullFunction
    checkdata: any
    qlock: GLib.Mutex
    item_add: GLib.Cond
    item_del: GLib.Cond
    flushing: any
    fullcallback: DataQueueFullCallback
    emptycallback: DataQueueEmptyCallback
    _gst_reserved: any[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.DataQueue */
    push(item: DataQueueItem): any
    pop(item: DataQueueItem): any
    flush(): void
    set_flushing(flushing: any): void
    drop_head(type: GObject.Type): any
    is_full(): any
    is_empty(): any
    get_level(level: DataQueueSize): void
    limits_changed(): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.DataQueue */
    connect(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    connect_after(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (($obj: DataQueue) => void)): number
    connect_after(sigName: "full", callback: (($obj: DataQueue) => void)): number
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataQueue_ConstructProps)
    _init (config?: DataQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(checkfull: DataQueueCheckFullFunction): DataQueue
    static new_full(checkfull: DataQueueCheckFullFunction, fullcallback: DataQueueFullCallback, emptycallback: DataQueueEmptyCallback): DataQueue
    static $gtype: GObject.Type
}
export interface Element_ConstructProps extends Object_ConstructProps {
}
export class Element {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): any
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Element, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Element, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Element, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Element, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Element, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Element, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Element, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Element, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Element, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Element, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Element, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Element, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Element_ConstructProps)
    _init (config?: Element_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin, name: string, rank: any, type: GObject.Type): any
    static make_from_uri(type: URIType, uri: string, elementname: string): Element
    static state_get_name(state: State): string
    static state_change_return_get_name(state_ret: StateChangeReturn): string
    static add_pad_template(templ: PadTemplate): void
    static get_pad_template(name: string): PadTemplate
    static set_details(details: ElementDetails): void
    static set_details_simple(longname: string, classification: string, description: string, author: string): void
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
    uri_type: any
    uri_protocols: string
    interfaces: any[]
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.PluginFeature */
    object: Object
    loaded: any
    rank: any
    plugin_name: string
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.ElementFactory */
    get_element_type(): GObject.Type
    get_longname(): string
    get_klass(): string
    get_description(): string
    get_author(): string
    get_num_pad_templates(): any
    get_uri_type(): any
    get_uri_protocols(): string[]
    has_interface(interfacename: string): any
    create(name: string): Element
    can_src_caps(caps: Caps): any
    can_sink_caps(caps: Caps): any
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    type_name_filter(data: TypeNameData): any
    set_rank(rank: any): void
    set_name(name: string): void
    get_rank(): any
    get_name(): string
    check_version(min_major: any, min_minor: any, min_micro: any): any
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ElementFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ElementFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ElementFactory, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ElementFactory, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ElementFactory, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ElementFactory, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ElementFactory, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ElementFactory, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    mini_object: MiniObject
    type: EventType
    timestamp: any
    src: Object
    structure: Structure
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    _gst_reserved: any
    /* Methods of Gst-0.10.Gst.Event */
    get_structure(): Structure
    has_name(name: string): any
    get_seqnum(): any
    set_seqnum(seqnum: any): void
    parse_new_segment(format: Format): [ /* update */ any, /* rate */ number, /* start */ any, /* stop */ any, /* position */ any ]
    parse_new_segment_full(format: Format): [ /* update */ any, /* rate */ number, /* applied_rate */ number, /* start */ any, /* stop */ any, /* position */ any ]
    parse_tag(taglist: TagList): void
    parse_buffer_size(format: Format): [ /* minsize */ any, /* maxsize */ any, /* async */ any ]
    parse_qos(diff: ClockTimeDiff, timestamp: ClockTime): /* proportion */ number
    parse_seek(format: Format, flags: SeekFlags, start_type: SeekType, stop_type: SeekType): [ /* rate */ number, /* start */ any, /* stop */ any ]
    parse_latency(latency: ClockTime): void
    parse_step(format: Format): [ /* amount */ any, /* rate */ number, /* flush */ any, /* intermediate */ any ]
    parse_sink_message(msg: Message): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): any
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_custom(type: EventType, structure: Structure): Event
    static new_flush_start(): Event
    static new_flush_stop(): Event
    static new_eos(): Event
    static new_new_segment(update: any, rate: number, format: Format, start: any, stop: any, position: any): Event
    static new_new_segment_full(update: any, rate: number, applied_rate: number, format: Format, start: any, stop: any, position: any): Event
    static new_tag(taglist: TagList): Event
    static new_buffer_size(format: Format, minsize: any, maxsize: any, async: any): Event
    static new_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static new_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: any, stop_type: SeekType, stop: any): Event
    static new_navigation(structure: Structure): Event
    static new_latency(latency: ClockTime): Event
    static new_step(format: Format, amount: any, rate: number, flush: any, intermediate: any): Event
    static new_sink_message(msg: Message): Event
    static type_get_name(type: EventType): string
    static type_to_quark(type: EventType): GLib.Quark
    static type_get_flags(type: EventType): EventTypeFlags
}
export interface GParamSpecMiniObject_ConstructProps extends GObject.Object_ConstructProps {
}
export class GParamSpecMiniObject {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GParamSpecMiniObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GParamSpecMiniObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    element_private: any
    padtemplate: PadTemplate
    direction: PadDirection
    stream_rec_lock: any
    task: Task
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    block_cond: GLib.Cond
    block_callback: PadBlockCallback
    block_data: any
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
    sched_private: any
    chainfunc: PadChainFunction
    checkgetrangefunc: PadCheckGetRangeFunction
    getrangefunc: PadGetRangeFunction
    eventfunc: PadEventFunction
    mode: ActivateMode
    querytypefunc: PadQueryTypeFunction
    queryfunc: PadQueryFunction
    intlinkfunc: PadIntLinkFunction
    bufferallocfunc: PadBufferAllocFunction
    do_buffer_signals: any
    do_event_signals: any
    iterintlinkfunc: PadIterIntLinkFunction
    block_destroy_data: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.GhostPad */
    get_target(): Pad
    set_target(newtarget: Pad): any
    construct(): any
    /* Methods of Gst-0.10.Gst.Pad */
    get_direction(): PadDirection
    set_active(active: any): any
    is_active(): any
    activate_pull(active: any): any
    activate_push(active: any): any
    set_blocked(blocked: any): any
    set_blocked_async(blocked: any, callback: PadBlockCallback, user_data: any): any
    set_blocked_async_full(blocked: any, callback: PadBlockCallback, user_data: any): any
    is_blocked(): any
    is_blocking(): any
    set_element_private(priv: any): void
    get_element_private(): any
    get_pad_template(): PadTemplate
    set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void
    alloc_buffer(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    alloc_buffer_and_set_caps(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    set_activate_function(activate: PadActivateFunction): void
    set_activatepull_function(activatepull: PadActivateModeFunction): void
    set_activatepush_function(activatepush: PadActivateModeFunction): void
    set_chain_function(chain: PadChainFunction): void
    set_chain_list_function(chainlist: PadChainListFunction): void
    set_getrange_function(get: PadGetRangeFunction): void
    set_checkgetrange_function(check: PadCheckGetRangeFunction): void
    set_event_function(event: PadEventFunction): void
    set_link_function(link: PadLinkFunction): void
    set_unlink_function(unlink: PadUnlinkFunction): void
    can_link(sinkpad: Pad): any
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): any
    is_linked(): any
    get_peer(): Pad
    set_getcaps_function(getcaps: PadGetCapsFunction): void
    set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void
    set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void
    set_setcaps_function(setcaps: PadSetCapsFunction): void
    get_pad_template_caps(): Caps
    get_caps_reffed(): Caps
    get_caps(): Caps
    fixate_caps(caps: Caps): void
    accept_caps(caps: Caps): any
    set_caps(caps: Caps): any
    peer_get_caps_reffed(): Caps
    peer_get_caps(): Caps
    peer_accept_caps(caps: Caps): any
    get_allowed_caps(): Caps
    get_negotiated_caps(): Caps
    push(buffer: Buffer): FlowReturn
    push_list(list: BufferList): FlowReturn
    check_pull_range(): any
    pull_range(offset: any, size: any, buffer: Buffer): FlowReturn
    push_event(event: Event): any
    event_default(event: Event): any
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    get_range(offset: any, size: any, buffer: Buffer): FlowReturn
    send_event(event: Event): any
    start_task(func: TaskFunction, data: any): any
    pause_task(): any
    stop_task(): any
    set_internal_link_function(intlink: PadIntLinkFunction): void
    set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void
    iterate_internal_links(): Iterator
    iterate_internal_links_default(): Iterator
    set_query_type_function(type_func: PadQueryTypeFunction): void
    get_query_types(): QueryType
    get_query_types_default(): QueryType
    query(query: Query): any
    peer_query(query: Query): any
    set_query_function(query: PadQueryFunction): void
    query_default(query: Query): any
    dispatcher(dispatch: PadDispatcherFunction, data: any): any
    use_fixed_caps(): void
    get_fixed_caps_func(): Caps
    proxy_getcaps(): Caps
    proxy_setcaps(caps: Caps): any
    get_parent_element(): Element
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    query_peer_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_peer_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_peer_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    add_data_probe(handler: GObject.Callback, data: any): any
    add_data_probe_full(handler: GObject.Callback, data: any): any
    remove_data_probe(handler_id: any): void
    add_event_probe(handler: GObject.Callback, data: any): any
    add_event_probe_full(handler: GObject.Callback, data: any): any
    remove_event_probe(handler_id: any): void
    add_buffer_probe(handler: GObject.Callback, data: any): any
    add_buffer_probe_full(handler: GObject.Callback, data: any): any
    remove_buffer_probe(handler_id: any): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: GhostPad, object: MiniObject) => any)): number
    connect_after(sigName: "have-data", callback: (($obj: GhostPad, object: MiniObject) => any)): number
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: GhostPad, object: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: GhostPad, object: Pad) => void)): number
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: GhostPad) => void)): number
    connect_after(sigName: "request-link", callback: (($obj: GhostPad) => void)): number
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: GhostPad, object: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: GhostPad, object: Pad) => void)): number
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GhostPad, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GhostPad, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: GhostPad, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: GhostPad, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: GhostPad, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: GhostPad, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: GhostPad, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: GhostPad, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GhostPad_ConstructProps)
    _init (config?: GhostPad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, target: Pad): GhostPad
    static new(name: string, direction: PadDirection): GhostPad
    static new_no_target(name: string, dir: PadDirection): GhostPad
    static new_from_template(name: string, target: Pad, templ: PadTemplate): GhostPad
    static new_from_template(templ: PadTemplate, name: string): GhostPad
    static new_no_target_from_template(name: string, templ: PadTemplate): GhostPad
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
    resolver_user_data: any
    filter: IndexFilter
    filter_user_data: any
    filter_user_data_destroy: GLib.DestroyNotify
    writers: GLib.HashTable
    last_id: any
    resolver_user_data_destroy: GLib.DestroyNotify
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Index */
    commit(id: any): void
    get_group(): any
    new_group(): any
    set_group(groupnum: any): any
    set_certainty(certainty: IndexCertainty): void
    get_certainty(): IndexCertainty
    set_filter(filter: IndexFilter, user_data: any): void
    set_filter_full(filter: IndexFilter, user_data: any): void
    set_resolver(resolver: IndexResolver, user_data: any): void
    set_resolver_full(resolver: IndexResolver, user_data: any): void
    get_writer_id(writer: Object): [ /* returnType */ any, /* id */ any ]
    add_format(id: any, format: Format): IndexEntry
    add_associationv(id: any, flags: AssocFlags, n: any, list: IndexAssociation): IndexEntry
    add_object(id: any, key: string, type: GObject.Type, object: any): IndexEntry
    add_id(id: any, description: string): IndexEntry
    get_assoc_entry(id: any, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: any): IndexEntry
    get_assoc_entry_full(id: any, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: any, func: GLib.CompareDataFunc, user_data: any): IndexEntry
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Index */
    vfunc_get_writer_id(writer_string: string): [ /* returnType */ any, /* writer_id */ any ]
    vfunc_commit(id: any): void
    vfunc_add_entry(entry: IndexEntry): void
    vfunc_get_assoc_entry(id: any, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: any, func: GLib.CompareDataFunc, user_data: any): IndexEntry
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Index */
    connect(sigName: "entry-added", callback: (($obj: Index, object: IndexEntry) => void)): number
    connect_after(sigName: "entry-added", callback: (($obj: Index, object: IndexEntry) => void)): number
    emit(sigName: "entry-added", object: IndexEntry): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Index, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Index, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Index, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Index, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Index, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Index, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Index, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Index, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::resolver", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolver", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.PluginFeature */
    object: Object
    loaded: any
    rank: any
    plugin_name: string
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.IndexFactory */
    destroy(): void
    create(): Index
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    type_name_filter(data: TypeNameData): any
    set_rank(rank: any): void
    set_name(name: string): void
    get_rank(): any
    get_name(): string
    check_version(min_major: any, min_minor: any, min_micro: any): any
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: IndexFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: IndexFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: IndexFactory, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: IndexFactory, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: IndexFactory, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: IndexFactory, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: IndexFactory, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: IndexFactory, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    mini_object: MiniObject
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
    _gst_reserved: any
    /* Methods of Gst-0.10.Gst.Message */
    get_seqnum(): any
    set_seqnum(seqnum: any): void
    parse_error(gerror: GLib.Error, debug: string[]): void
    parse_warning(gerror: GLib.Error, debug: string[]): void
    parse_info(gerror: GLib.Error, debug: string[]): void
    parse_tag(tag_list: TagList): void
    parse_tag_full(pad: Pad, tag_list: TagList): void
    parse_buffering(): /* percent */ any
    set_buffering_stats(mode: BufferingMode, avg_in: any, avg_out: any, buffering_left: any): void
    parse_buffering_stats(mode: BufferingMode): [ /* avg_in */ any, /* avg_out */ any, /* buffering_left */ any ]
    parse_state_changed(oldstate: State, newstate: State, pending: State): void
    parse_step_done(format: Format): [ /* amount */ any, /* rate */ number, /* flush */ any, /* intermediate */ any, /* duration */ any, /* eos */ any ]
    parse_clock_provide(clock: Clock): /* ready */ any
    parse_clock_lost(clock: Clock): void
    parse_new_clock(clock: Clock): void
    parse_segment_start(format: Format): /* position */ any
    parse_segment_done(format: Format): /* position */ any
    parse_duration(format: Format): /* duration */ any
    parse_async_start(): /* new_base_time */ any
    parse_structure_change(type: StructureChangeType, owner: Element): /* busy */ any
    parse_stream_status(type: StreamStatusType, owner: Element): void
    set_stream_status_object(object: any): void
    get_stream_status_object(): any
    parse_request_state(state: State): void
    parse_step_start(format: Format): [ /* active */ any, /* amount */ any, /* rate */ number, /* flush */ any, /* intermediate */ any ]
    set_qos_values(jitter: any, proportion: number, quality: any): void
    set_qos_stats(format: Format, processed: any, dropped: any): void
    parse_qos(): [ /* live */ any, /* running_time */ any, /* stream_time */ any, /* timestamp */ any, /* duration */ any ]
    parse_qos_values(): [ /* jitter */ any, /* proportion */ number, /* quality */ any ]
    parse_qos_stats(format: Format): [ /* processed */ any, /* dropped */ any ]
    get_structure(): Structure
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): any
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_eos(src: Object): Message
    static new_error(src: Object, error: GLib.Error, debug: string): Message
    static new_warning(src: Object, error: GLib.Error, debug: string): Message
    static new_info(src: Object, error: GLib.Error, debug: string): Message
    static new_tag(src: Object, tag_list: TagList): Message
    static new_tag_full(src: Object, pad: Pad, tag_list: TagList): Message
    static new_buffering(src: Object, percent: any): Message
    static new_state_changed(src: Object, oldstate: State, newstate: State, pending: State): Message
    static new_state_dirty(src: Object): Message
    static new_step_done(src: Object, format: Format, amount: any, rate: number, flush: any, intermediate: any, duration: any, eos: any): Message
    static new_clock_provide(src: Object, clock: Clock, ready: any): Message
    static new_clock_lost(src: Object, clock: Clock): Message
    static new_new_clock(src: Object, clock: Clock): Message
    static new_application(src: Object, structure: Structure): Message
    static new_element(src: Object, structure: Structure): Message
    static new_segment_start(src: Object, format: Format, position: any): Message
    static new_segment_done(src: Object, format: Format, position: any): Message
    static new_duration(src: Object, format: Format, duration: any): Message
    static new_latency(src: Object): Message
    static new_async_start(src: Object, new_base_time: any): Message
    static new_async_done(src: Object): Message
    static new_structure_change(src: Object, type: StructureChangeType, owner: Element, busy: any): Message
    static new_stream_status(src: Object, type: StreamStatusType, owner: Element): Message
    static new_request_state(src: Object, state: State): Message
    static new_step_start(src: Object, active: any, format: Format, amount: any, rate: number, flush: any, intermediate: any): Message
    static new_qos(src: Object, live: any, running_time: any, stream_time: any, timestamp: any, duration: any): Message
    static new_custom(type: MessageType, src: Object, structure: Structure): Message
    static type_get_name(type: MessageType): string
    static type_to_quark(type: MessageType): GLib.Quark
}
export class MiniObject {
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    _gst_reserved: any
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): any
    make_writable(): MiniObject
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
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Object, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Object, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Object, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Object, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Object, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Object, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Object, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Object, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static default_deep_notify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excluded_props: string[]): void
    static ref(object: any): any
    static unref(object: any): void
    static ref_sink(object: any): void
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
    element_private: any
    padtemplate: PadTemplate
    direction: PadDirection
    stream_rec_lock: any
    task: Task
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    block_cond: GLib.Cond
    block_callback: PadBlockCallback
    block_data: any
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
    sched_private: any
    chainfunc: PadChainFunction
    checkgetrangefunc: PadCheckGetRangeFunction
    getrangefunc: PadGetRangeFunction
    eventfunc: PadEventFunction
    mode: ActivateMode
    querytypefunc: PadQueryTypeFunction
    queryfunc: PadQueryFunction
    intlinkfunc: PadIntLinkFunction
    bufferallocfunc: PadBufferAllocFunction
    do_buffer_signals: any
    do_event_signals: any
    iterintlinkfunc: PadIterIntLinkFunction
    block_destroy_data: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pad */
    get_direction(): PadDirection
    set_active(active: any): any
    is_active(): any
    activate_pull(active: any): any
    activate_push(active: any): any
    set_blocked(blocked: any): any
    set_blocked_async(blocked: any, callback: PadBlockCallback, user_data: any): any
    set_blocked_async_full(blocked: any, callback: PadBlockCallback, user_data: any): any
    is_blocked(): any
    is_blocking(): any
    set_element_private(priv: any): void
    get_element_private(): any
    get_pad_template(): PadTemplate
    set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void
    alloc_buffer(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    alloc_buffer_and_set_caps(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    set_activate_function(activate: PadActivateFunction): void
    set_activatepull_function(activatepull: PadActivateModeFunction): void
    set_activatepush_function(activatepush: PadActivateModeFunction): void
    set_chain_function(chain: PadChainFunction): void
    set_chain_list_function(chainlist: PadChainListFunction): void
    set_getrange_function(get: PadGetRangeFunction): void
    set_checkgetrange_function(check: PadCheckGetRangeFunction): void
    set_event_function(event: PadEventFunction): void
    set_link_function(link: PadLinkFunction): void
    set_unlink_function(unlink: PadUnlinkFunction): void
    can_link(sinkpad: Pad): any
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): any
    is_linked(): any
    get_peer(): Pad
    set_getcaps_function(getcaps: PadGetCapsFunction): void
    set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void
    set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void
    set_setcaps_function(setcaps: PadSetCapsFunction): void
    get_pad_template_caps(): Caps
    get_caps_reffed(): Caps
    get_caps(): Caps
    fixate_caps(caps: Caps): void
    accept_caps(caps: Caps): any
    set_caps(caps: Caps): any
    peer_get_caps_reffed(): Caps
    peer_get_caps(): Caps
    peer_accept_caps(caps: Caps): any
    get_allowed_caps(): Caps
    get_negotiated_caps(): Caps
    push(buffer: Buffer): FlowReturn
    push_list(list: BufferList): FlowReturn
    check_pull_range(): any
    pull_range(offset: any, size: any, buffer: Buffer): FlowReturn
    push_event(event: Event): any
    event_default(event: Event): any
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    get_range(offset: any, size: any, buffer: Buffer): FlowReturn
    send_event(event: Event): any
    start_task(func: TaskFunction, data: any): any
    pause_task(): any
    stop_task(): any
    set_internal_link_function(intlink: PadIntLinkFunction): void
    set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void
    iterate_internal_links(): Iterator
    iterate_internal_links_default(): Iterator
    set_query_type_function(type_func: PadQueryTypeFunction): void
    get_query_types(): QueryType
    get_query_types_default(): QueryType
    query(query: Query): any
    peer_query(query: Query): any
    set_query_function(query: PadQueryFunction): void
    query_default(query: Query): any
    dispatcher(dispatch: PadDispatcherFunction, data: any): any
    use_fixed_caps(): void
    get_fixed_caps_func(): Caps
    proxy_getcaps(): Caps
    proxy_setcaps(caps: Caps): any
    get_parent_element(): Element
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    query_peer_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_peer_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_peer_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    add_data_probe(handler: GObject.Callback, data: any): any
    add_data_probe_full(handler: GObject.Callback, data: any): any
    remove_data_probe(handler_id: any): void
    add_event_probe(handler: GObject.Callback, data: any): any
    add_event_probe_full(handler: GObject.Callback, data: any): any
    remove_event_probe(handler_id: any): void
    add_buffer_probe(handler: GObject.Callback, data: any): any
    add_buffer_probe_full(handler: GObject.Callback, data: any): any
    remove_buffer_probe(handler_id: any): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: Pad, object: MiniObject) => any)): number
    connect_after(sigName: "have-data", callback: (($obj: Pad, object: MiniObject) => any)): number
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: Pad, object: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: Pad, object: Pad) => void)): number
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: Pad) => void)): number
    connect_after(sigName: "request-link", callback: (($obj: Pad) => void)): number
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: Pad, object: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: Pad, object: Pad) => void)): number
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pad, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pad, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Pad, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Pad, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Pad, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Pad, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Pad, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Pad, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pad_ConstructProps)
    _init (config?: Pad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, direction: PadDirection): Pad
    static new_from_template(templ: PadTemplate, name: string): Pad
    static new_from_static_template(templ: StaticPadTemplate, name: string): Pad
    static load_and_link(self: libxml2.NodePtr, parent: Object): void
    static $gtype: GObject.Type
}
export interface PadTemplate_ConstructProps extends Object_ConstructProps {
    caps?: Caps
    direction?: PadDirection
    name_template?: string
    presence?: PadPresence
}
export class PadTemplate {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.PadTemplate */
    object: Object
    name_template: string
    direction: PadDirection
    presence: PadPresence
    caps: Caps
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.PadTemplate */
    get_caps(): Caps
    pad_created(pad: Pad): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.PadTemplate */
    connect(sigName: "pad-created", callback: (($obj: PadTemplate, object: Pad) => void)): number
    connect_after(sigName: "pad-created", callback: (($obj: PadTemplate, object: Pad) => void)): number
    emit(sigName: "pad-created", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PadTemplate, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PadTemplate, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PadTemplate, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: PadTemplate, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: PadTemplate, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PadTemplate, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PadTemplate, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: PadTemplate, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PadTemplate_ConstructProps)
    _init (config?: PadTemplate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate
    static $gtype: GObject.Type
}
export interface ParamFraction_ConstructProps extends GObject.Object_ConstructProps {
}
export class ParamFraction {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ParamFraction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ParamFraction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ParamFraction_ConstructProps)
    _init (config?: ParamFraction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Pipeline_ConstructProps extends Bin_ConstructProps {
    auto_flush_bus?: any
    delay?: any
}
export class Pipeline {
    /* Properties of Gst-0.10.Gst.Pipeline */
    auto_flush_bus: any
    delay: any
    /* Properties of Gst-0.10.Gst.Bin */
    async_handling: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.Pipeline */
    bin: Bin
    fixed_clock: Clock
    stream_time: ClockTime
    priv: PipelinePrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Bin */
    element: Element
    numchildren: any
    children: any[]
    children_cookie: any
    child_bus: Bus
    messages: any[]
    polling: any
    state_dirty: any
    clock_dirty: any
    provided_clock: Clock
    clock_provider: Element
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pipeline */
    get_bus(): Bus
    set_new_stream_time(time: ClockTime): void
    get_last_stream_time(): ClockTime
    use_clock(clock: Clock): void
    set_clock(clock: Clock): any
    get_clock(): Clock
    auto_clock(): void
    set_delay(delay: ClockTime): void
    get_delay(): ClockTime
    set_auto_flush_bus(auto_flush: any): void
    get_auto_flush_bus(): any
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Element): any
    remove(element: Element): any
    get_by_name(name: string): Element
    get_by_name_recurse_up(name: string): Element
    get_by_interface(iface: GObject.Type): Element
    iterate_elements(): Iterator
    iterate_sorted(): Iterator
    iterate_recurse(): Iterator
    iterate_sinks(): Iterator
    iterate_sources(): Iterator
    iterate_all_by_interface(iface: GObject.Type): Iterator
    recalculate_latency(): any
    find_unlinked_pad(direction: PadDirection): Pad
    find_unconnected_pad(direction: PadDirection): Pad
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gst-0.10.Gst.ChildProxy */
    get_child_by_name(name: string): Object
    get_child_by_index(index: any): Object
    get_children_count(): any
    /* Virtual methods of Gst-0.10.Gst.Bin */
    vfunc_add_element(element: Element): any
    vfunc_remove_element(element: Element): any
    vfunc_handle_message(message: Message): void
    vfunc_get_child_by_index(index: any): Object
    vfunc_get_children_count(): any
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (($obj: Pipeline) => any)): number
    connect_after(sigName: "do-latency", callback: (($obj: Pipeline) => any)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Pipeline, object: Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Pipeline, object: Element) => void)): number
    emit(sigName: "element-added", object: Element): void
    connect(sigName: "element-removed", callback: (($obj: Pipeline, object: Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Pipeline, object: Element) => void)): number
    emit(sigName: "element-removed", object: Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Pipeline, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Pipeline, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Pipeline, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Pipeline, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pipeline, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pipeline, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Pipeline, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Pipeline, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Pipeline, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Pipeline, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Pipeline, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Pipeline, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    emit(sigName: "child-removed", object: GObject.Object): void
    connect(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    orig_desc: PluginDesc
    flags: any
    filename: string
    basename: string
    module: GModule.Module
    file_size: number
    file_mtime: number
    registered: any
    priv: PluginPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Plugin */
    get_name(): string
    get_description(): string
    get_filename(): string
    get_version(): string
    get_license(): string
    get_source(): string
    get_package(): string
    get_origin(): string
    get_cache_data(): Structure
    set_cache_data(cache_data: Structure): void
    get_module(): GModule.Module
    is_loaded(): any
    name_filter(name: string): any
    load(): Plugin
    add_dependency(env_vars: string[], paths: string[], names: string[], flags: PluginDependencyFlags): void
    add_dependency_simple(env_vars: string, paths: string, names: string, flags: PluginDependencyFlags): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Plugin, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Plugin, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Plugin, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Plugin, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Plugin, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Plugin, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Plugin, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Plugin, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register_static(major_version: any, minor_version: any, name: string, description: string, init_func: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): any
    static register_static_full(major_version: any, minor_version: any, name: string, description: string, init_full_func: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string, user_data: any): any
    static load_file(filename: string): Plugin
    static load_by_name(name: string): Plugin
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
    plugin_name: string
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    type_name_filter(data: TypeNameData): any
    set_rank(rank: any): void
    set_name(name: string): void
    get_rank(): any
    get_name(): string
    check_version(min_major: any, min_minor: any, min_micro: any): any
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PluginFeature, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PluginFeature, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PluginFeature, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: PluginFeature, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: PluginFeature, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PluginFeature, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PluginFeature, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: PluginFeature, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    element_private: any
    padtemplate: PadTemplate
    direction: PadDirection
    stream_rec_lock: any
    task: Task
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    block_cond: GLib.Cond
    block_callback: PadBlockCallback
    block_data: any
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
    sched_private: any
    chainfunc: PadChainFunction
    checkgetrangefunc: PadCheckGetRangeFunction
    getrangefunc: PadGetRangeFunction
    eventfunc: PadEventFunction
    mode: ActivateMode
    querytypefunc: PadQueryTypeFunction
    queryfunc: PadQueryFunction
    intlinkfunc: PadIntLinkFunction
    bufferallocfunc: PadBufferAllocFunction
    do_buffer_signals: any
    do_event_signals: any
    iterintlinkfunc: PadIterIntLinkFunction
    block_destroy_data: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pad */
    get_direction(): PadDirection
    set_active(active: any): any
    is_active(): any
    activate_pull(active: any): any
    activate_push(active: any): any
    set_blocked(blocked: any): any
    set_blocked_async(blocked: any, callback: PadBlockCallback, user_data: any): any
    set_blocked_async_full(blocked: any, callback: PadBlockCallback, user_data: any): any
    is_blocked(): any
    is_blocking(): any
    set_element_private(priv: any): void
    get_element_private(): any
    get_pad_template(): PadTemplate
    set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void
    alloc_buffer(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    alloc_buffer_and_set_caps(offset: any, size: any, caps: Caps, buf: Buffer): FlowReturn
    set_activate_function(activate: PadActivateFunction): void
    set_activatepull_function(activatepull: PadActivateModeFunction): void
    set_activatepush_function(activatepush: PadActivateModeFunction): void
    set_chain_function(chain: PadChainFunction): void
    set_chain_list_function(chainlist: PadChainListFunction): void
    set_getrange_function(get: PadGetRangeFunction): void
    set_checkgetrange_function(check: PadCheckGetRangeFunction): void
    set_event_function(event: PadEventFunction): void
    set_link_function(link: PadLinkFunction): void
    set_unlink_function(unlink: PadUnlinkFunction): void
    can_link(sinkpad: Pad): any
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): any
    is_linked(): any
    get_peer(): Pad
    set_getcaps_function(getcaps: PadGetCapsFunction): void
    set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void
    set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void
    set_setcaps_function(setcaps: PadSetCapsFunction): void
    get_pad_template_caps(): Caps
    get_caps_reffed(): Caps
    get_caps(): Caps
    fixate_caps(caps: Caps): void
    accept_caps(caps: Caps): any
    set_caps(caps: Caps): any
    peer_get_caps_reffed(): Caps
    peer_get_caps(): Caps
    peer_accept_caps(caps: Caps): any
    get_allowed_caps(): Caps
    get_negotiated_caps(): Caps
    push(buffer: Buffer): FlowReturn
    push_list(list: BufferList): FlowReturn
    check_pull_range(): any
    pull_range(offset: any, size: any, buffer: Buffer): FlowReturn
    push_event(event: Event): any
    event_default(event: Event): any
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    get_range(offset: any, size: any, buffer: Buffer): FlowReturn
    send_event(event: Event): any
    start_task(func: TaskFunction, data: any): any
    pause_task(): any
    stop_task(): any
    set_internal_link_function(intlink: PadIntLinkFunction): void
    set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void
    iterate_internal_links(): Iterator
    iterate_internal_links_default(): Iterator
    set_query_type_function(type_func: PadQueryTypeFunction): void
    get_query_types(): QueryType
    get_query_types_default(): QueryType
    query(query: Query): any
    peer_query(query: Query): any
    set_query_function(query: PadQueryFunction): void
    query_default(query: Query): any
    dispatcher(dispatch: PadDispatcherFunction, data: any): any
    use_fixed_caps(): void
    get_fixed_caps_func(): Caps
    proxy_getcaps(): Caps
    proxy_setcaps(caps: Caps): any
    get_parent_element(): Element
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    query_peer_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_peer_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_peer_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    add_data_probe(handler: GObject.Callback, data: any): any
    add_data_probe_full(handler: GObject.Callback, data: any): any
    remove_data_probe(handler_id: any): void
    add_event_probe(handler: GObject.Callback, data: any): any
    add_event_probe_full(handler: GObject.Callback, data: any): any
    remove_event_probe(handler_id: any): void
    add_buffer_probe(handler: GObject.Callback, data: any): any
    add_buffer_probe_full(handler: GObject.Callback, data: any): any
    remove_buffer_probe(handler_id: any): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: ProxyPad, object: MiniObject) => any)): number
    connect_after(sigName: "have-data", callback: (($obj: ProxyPad, object: MiniObject) => any)): number
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: ProxyPad) => void)): number
    connect_after(sigName: "request-link", callback: (($obj: ProxyPad) => void)): number
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ProxyPad, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ProxyPad, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ProxyPad, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ProxyPad, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: ProxyPad, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ProxyPad, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ProxyPad, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ProxyPad, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    do_timestamp: any
    num_buffers: any
    typefind: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.PushSrc */
    parent: BaseSrc
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.BaseSrc */
    element: Element
    srcpad: Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: any
    live_running: any
    can_activate_push: any
    pad_mode: ActivateMode
    seekable: any
    random_access: any
    clock_id: ClockID
    end_time: ClockTime
    segment: Segment
    need_newsegment: any
    offset: any
    size: any
    num_buffers_left: any
    priv: BaseSrcPrivate
    /* Fields of Gst-0.10.Gst.Element */
    object: Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    pads_cookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSrc */
    wait_playing(): FlowReturn
    set_live(live: any): void
    set_format(format: Format): void
    query_latency(min_latency: ClockTime, max_latency: ClockTime): [ /* returnType */ any, /* live */ any ]
    set_blocksize(blocksize: any): void
    get_blocksize(): any
    set_do_timestamp(timestamp: any): void
    get_do_timestamp(): any
    new_seamless_segment(start: any, stop: any, position: any): any
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): any
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): any
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): any
    remove_pad(pad: Pad): any
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): any
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: any, stop_type: SeekType, stop: any): any
    get_query_types(): QueryType
    query(query: Query): any
    post_message(message: Message): any
    message_full(type: MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): any
    link_filtered(dest: Element, filter: Caps): any
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): any
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: any): any
    query_position(format: Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Format, src_val: any, dest_format: Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.PushSrc */
    vfunc_create(buf: Buffer): FlowReturn
    vfunc_create(offset: any, size: any, buf: Buffer): FlowReturn
    /* Virtual methods of Gst-0.10.Gst.BaseSrc */
    vfunc_get_caps(): Caps
    vfunc_set_caps(caps: Caps): any
    vfunc_negotiate(): any
    vfunc_newsegment(): any
    vfunc_start(): any
    vfunc_stop(): any
    vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void
    vfunc_get_size(): [ /* returnType */ any, /* size */ any ]
    vfunc_is_seekable(): any
    vfunc_unlock(): any
    vfunc_event(event: Event): any
    vfunc_create(offset: any, size: any, buf: Buffer): FlowReturn
    vfunc_do_seek(segment: Segment): any
    vfunc_query(query: Query): any
    vfunc_check_get_range(): any
    vfunc_fixate(caps: Caps): void
    vfunc_unlock_stop(): any
    vfunc_prepare_seek_segment(seek: Event, segment: Segment): any
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): any
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): any
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): any
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: PushSrc, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: PushSrc, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: PushSrc, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: PushSrc, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PushSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PushSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PushSrc, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: PushSrc, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: PushSrc, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PushSrc, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PushSrc, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: PushSrc, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PushSrc_ConstructProps)
    _init (config?: PushSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export class Query {
    /* Fields of Gst-0.10.Gst.Query */
    mini_object: MiniObject
    type: QueryType
    structure: Structure
    _gst_reserved: any
    /* Fields of Gst-0.10.Gst.MiniObject */
    instance: GObject.TypeInstance
    refcount: any
    flags: any
    /* Methods of Gst-0.10.Gst.Query */
    set_position(format: Format, cur: any): void
    parse_position(format: Format): /* cur */ any
    set_duration(format: Format, duration: any): void
    parse_duration(format: Format): /* duration */ any
    set_latency(live: any, min_latency: ClockTime, max_latency: ClockTime): void
    parse_latency(min_latency: ClockTime, max_latency: ClockTime): /* live */ any
    set_convert(src_format: Format, src_value: any, dest_format: Format, dest_value: any): void
    parse_convert(src_format: Format, dest_format: Format): [ /* src_value */ any, /* dest_value */ any ]
    set_segment(rate: number, format: Format, start_value: any, stop_value: any): void
    parse_segment(format: Format): [ /* rate */ number, /* start_value */ any, /* stop_value */ any ]
    get_structure(): Structure
    set_seeking(format: Format, seekable: any, segment_start: any, segment_end: any): void
    parse_seeking(format: Format): [ /* seekable */ any, /* segment_start */ any, /* segment_end */ any ]
    set_formatsv(n_formats: any, formats: Format): void
    parse_formats_length(): /* n_formats */ any
    parse_formats_nth(nth: any, format: Format): void
    set_buffering_percent(busy: any, percent: any): void
    parse_buffering_percent(): [ /* busy */ any, /* percent */ any ]
    set_buffering_stats(mode: BufferingMode, avg_in: any, avg_out: any, buffering_left: any): void
    parse_buffering_stats(mode: BufferingMode): [ /* avg_in */ any, /* avg_out */ any, /* buffering_left */ any ]
    set_buffering_range(format: Format, start: any, stop: any, estimated_total: any): void
    parse_buffering_range(format: Format): [ /* start */ any, /* stop */ any, /* estimated_total */ any ]
    parse_uri(uri: string[]): void
    set_uri(uri: string): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): any
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_position(format: Format): Query
    static new_duration(format: Format): Query
    static new_latency(): Query
    static new_convert(src_format: Format, value: any, dest_format: Format): Query
    static new_segment(format: Format): Query
    static new_application(type: QueryType, structure: Structure): Query
    static new_seeking(format: Format): Query
    static new_formats(): Query
    static new_buffering(format: Format): Query
    static new_uri(): Query
    static type_get_name(query: QueryType): string
    static type_to_quark(query: QueryType): GLib.Quark
    static type_register(nick: string, description: string): QueryType
    static type_get_by_nick(nick: string): QueryType
    static types_contains(types: QueryType, type: QueryType): any
    static type_get_details(type: QueryType): QueryTypeDefinition
    static type_iterate_definitions(): Iterator
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
    cache_file: any
    feature_hash: GLib.HashTable
    basename_hash: GLib.HashTable
    priv: RegistryPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Registry */
    scan_path(path: string): any
    add_path(path: string): void
    add_plugin(plugin: Plugin): any
    remove_plugin(plugin: Plugin): void
    add_feature(feature: PluginFeature): any
    remove_feature(feature: PluginFeature): void
    get_feature_list_cookie(): any
    find_plugin(name: string): Plugin
    find_feature(name: string, type: GObject.Type): PluginFeature
    lookup(filename: string): Plugin
    lookup_feature(name: string): PluginFeature
    xml_read_cache(location: string): any
    xml_write_cache(location: string): any
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Registry */
    connect(sigName: "feature-added", callback: (($obj: Registry, object: any) => void)): number
    connect_after(sigName: "feature-added", callback: (($obj: Registry, object: any) => void)): number
    emit(sigName: "feature-added", object: any): void
    connect(sigName: "plugin-added", callback: (($obj: Registry, object: any) => void)): number
    connect_after(sigName: "plugin-added", callback: (($obj: Registry, object: any) => void)): number
    emit(sigName: "plugin-added", object: any): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Registry, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Registry, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Registry, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Registry, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Registry, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Registry, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Registry, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Registry, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Registry
    static fork_is_enabled(): any
    static fork_set_enabled(enabled: any): void
    static $gtype: GObject.Type
}
export interface SystemClock_ConstructProps extends Clock_ConstructProps {
    clock_type?: ClockType
}
export class SystemClock {
    /* Properties of Gst-0.10.Gst.SystemClock */
    clock_type: ClockType
    /* Properties of Gst-0.10.Gst.Clock */
    stats: any
    timeout: any
    window_size: any
    window_threshold: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of Gst-0.10.Gst.SystemClock */
    clock: Clock
    thread: GLib.Thread
    stopping: any
    priv: SystemClockPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Clock */
    object: Object
    slave_lock: GLib.Mutex
    internal_calibration: ClockTime
    external_calibration: ClockTime
    rate_numerator: ClockTime
    rate_denominator: ClockTime
    last_time: ClockTime
    entries: any[]
    entries_changed: GLib.Cond
    resolution: ClockTime
    master: Clock
    filling: any
    time_index: any
    times: ClockTime
    clockid: ClockID
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Clock */
    set_resolution(resolution: ClockTime): ClockTime
    get_resolution(): ClockTime
    get_time(): ClockTime
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    get_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    set_master(master: Clock): any
    get_master(): Clock
    add_observation(slave: ClockTime, master: ClockTime): [ /* returnType */ any, /* r_squared */ number ]
    get_internal_time(): ClockTime
    adjust_unlocked(internal: ClockTime): ClockTime
    unadjust_unlocked(external: ClockTime): ClockTime
    new_single_shot_id(time: ClockTime): ClockID
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Clock */
    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime
    vfunc_get_resolution(): ClockTime
    vfunc_get_internal_time(): ClockTime
    vfunc_wait(entry: ClockEntry): ClockReturn
    vfunc_wait_async(entry: ClockEntry): ClockReturn
    vfunc_unschedule(entry: ClockEntry): void
    vfunc_wait_jitter(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: SystemClock, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: SystemClock, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: SystemClock, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: SystemClock, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: SystemClock, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: SystemClock, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: SystemClock, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: SystemClock, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    name_prefix: string
    parent: Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Task */
    set_lock(mutex: any): void
    set_priority(priority: any): void
    get_pool(): TaskPool
    set_pool(pool: TaskPool): void
    set_thread_callbacks(callbacks: TaskThreadCallbacks, user_data: any, notify: GLib.DestroyNotify): void
    get_state(): TaskState
    set_state(state: TaskState): any
    start(): any
    stop(): any
    pause(): any
    join(): any
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Task, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Task, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Task, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Task, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Task, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Task, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Task, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Task, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static cleanup_all(): void
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
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TaskPool */
    prepare(): void
    push(func: TaskPoolFunction, user_data: any): any
    join(id: any): void
    cleanup(): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.TaskPool */
    vfunc_prepare(): void
    vfunc_cleanup(): void
    vfunc_push(func: TaskPoolFunction, user_data: any): any
    vfunc_join(id: any): void
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TaskPool, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TaskPool, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TaskPool, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: TaskPool, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: TaskPool, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: TaskPool, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TaskPool, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: TaskPool, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    user_data: any
    user_data_notify: GLib.DestroyNotify
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.PluginFeature */
    object: Object
    loaded: any
    rank: any
    plugin_name: string
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TypeFindFactory */
    get_extensions(): string[]
    get_caps(): Caps
    call_function(find: TypeFind): void
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    type_name_filter(data: TypeNameData): any
    set_rank(rank: any): void
    set_name(name: string): void
    get_rank(): any
    get_name(): string
    check_version(min_major: any, min_minor: any, min_micro: any): any
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TypeFindFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TypeFindFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TypeFindFactory, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: TypeFindFactory, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    name_prefix: string
    parent: Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.XML */
    parse_doc(doc: libxml2.DocPtr, root: any[]): any
    parse_file(fname: any[], root: any[]): any
    parse_memory(buffer: any[], size: any, root: string): any
    get_element(name: any[]): Element
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): any
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): any
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gst-0.10.Gst.XML */
    vfunc_object_saved(object: Object, self: libxml2.NodePtr): void
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.XML */
    connect(sigName: "object-loaded", callback: (($obj: XML, object: Object, p0: any) => void)): number
    connect_after(sigName: "object-loaded", callback: (($obj: XML, object: Object, p0: any) => void)): number
    emit(sigName: "object-loaded", object: Object, p0: any): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: XML, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: XML, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: XML, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: XML, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: XML, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: XML, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: XML, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: XML, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XML_ConstructProps)
    _init (config?: XML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XML
    static write(element: Element): libxml2.DocPtr
    static make_element(cur: libxml2.NodePtr, parent: Object): Element
    static $gtype: GObject.Type
}
export abstract class AdapterClass {
    /* Fields of Gst-0.10.Gst.AdapterClass */
    parent_class: GObject.ObjectClass
    _gst_reserved: any[]
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
    mem_live: any[]
    /* Methods of Gst-0.10.Gst.AllocTrace */
    print(): void
    set_flags(flags: AllocTraceFlags): void
    static name: string
}
export abstract class BaseSinkClass {
    /* Fields of Gst-0.10.Gst.BaseSinkClass */
    parent_class: ElementClass
    get_caps: (sink: BaseSink) => Caps
    set_caps: (sink: BaseSink, caps: Caps) => any
    buffer_alloc: (sink: BaseSink, offset: any, size: any, caps: Caps, buf: Buffer) => FlowReturn
    get_times: (sink: BaseSink, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    start: (sink: BaseSink) => any
    stop: (sink: BaseSink) => any
    unlock: (sink: BaseSink) => any
    event: (sink: BaseSink, event: Event) => any
    preroll: (sink: BaseSink, buffer: Buffer) => FlowReturn
    render: (sink: BaseSink, buffer: Buffer) => FlowReturn
    async_play: (sink: BaseSink) => StateChangeReturn
    activate_pull: (sink: BaseSink, active: any) => any
    fixate: (sink: BaseSink, caps: Caps) => void
    unlock_stop: (sink: BaseSink) => any
    render_list: (sink: BaseSink, buffer_list: BufferList) => FlowReturn
    _gst_reserved: any[]
    static name: string
}
export class BaseSinkPrivate {
    static name: string
}
export abstract class BaseSrcClass {
    /* Fields of Gst-0.10.Gst.BaseSrcClass */
    parent_class: ElementClass
    get_caps: (src: BaseSrc) => Caps
    set_caps: (src: BaseSrc, caps: Caps) => any
    negotiate: (src: BaseSrc) => any
    newsegment: (src: BaseSrc) => any
    start: (src: BaseSrc) => any
    stop: (src: BaseSrc) => any
    get_times: (src: BaseSrc, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    get_size: (src: BaseSrc) => [ /* returnType */ any, /* size */ any ]
    is_seekable: (src: BaseSrc) => any
    unlock: (src: BaseSrc) => any
    event: (src: BaseSrc, event: Event) => any
    create: (src: BaseSrc, offset: any, size: any, buf: Buffer) => FlowReturn
    do_seek: (src: BaseSrc, segment: Segment) => any
    query: (src: BaseSrc, query: Query) => any
    check_get_range: (src: BaseSrc) => any
    fixate: (src: BaseSrc, caps: Caps) => void
    unlock_stop: (src: BaseSrc) => any
    prepare_seek_segment: (src: BaseSrc, seek: Event, segment: Segment) => any
    _gst_reserved: any[]
    static name: string
}
export class BaseSrcPrivate {
    static name: string
}
export abstract class BaseTransformClass {
    /* Fields of Gst-0.10.Gst.BaseTransformClass */
    parent_class: ElementClass
    transform_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => Caps
    fixate_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps, othercaps: Caps) => void
    transform_size: (trans: BaseTransform, direction: PadDirection, caps: Caps, size: any, othercaps: Caps) => [ /* returnType */ any, /* othersize */ any ]
    get_unit_size: (trans: BaseTransform, caps: Caps) => [ /* returnType */ any, /* size */ any ]
    set_caps: (trans: BaseTransform, incaps: Caps, outcaps: Caps) => any
    start: (trans: BaseTransform) => any
    stop: (trans: BaseTransform) => any
    event: (trans: BaseTransform, event: Event) => any
    transform: (trans: BaseTransform, inbuf: Buffer, outbuf: Buffer) => FlowReturn
    transform_ip: (trans: BaseTransform, buf: Buffer) => FlowReturn
    passthrough_on_same_caps: any
    prepare_output_buffer: (trans: BaseTransform, input: Buffer, size: any, caps: Caps, buf: Buffer) => FlowReturn
    src_event: (trans: BaseTransform, event: Event) => any
    before_transform: (trans: BaseTransform, buffer: Buffer) => void
    accept_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => any
    _gst_reserved: any[]
    static name: string
}
export class BaseTransformPrivate {
    static name: string
}
export abstract class BinClass {
    /* Fields of Gst-0.10.Gst.BinClass */
    parent_class: ElementClass
    pool: GLib.ThreadPool
    element_added: (bin: Bin, child: Element) => void
    element_removed: (bin: Bin, child: Element) => void
    add_element: (bin: Bin, element: Element) => any
    remove_element: (bin: Bin, element: Element) => any
    handle_message: (bin: Bin, message: Message) => void
    do_latency: (bin: Bin) => any
    _gst_reserved: any[]
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
    init_from_buffer(buffer: Buffer): void
    set_pos(pos: any): any
    get_pos(): any
    get_remaining(): any
    get_size(): any
    skip(nbits: any): any
    skip_to_byte(): any
    get_bits_uint8(val: any[], nbits: any): any
    get_bits_uint16(nbits: any): [ /* returnType */ any, /* val */ any ]
    get_bits_uint32(nbits: any): [ /* returnType */ any, /* val */ any ]
    get_bits_uint64(nbits: any): [ /* returnType */ any, /* val */ any ]
    peek_bits_uint8(val: any[], nbits: any): any
    peek_bits_uint16(nbits: any): [ /* returnType */ any, /* val */ any ]
    peek_bits_uint32(nbits: any): [ /* returnType */ any, /* val */ any ]
    peek_bits_uint64(nbits: any): [ /* returnType */ any, /* val */ any ]
    static name: string
    static new(data: any[], size: any): BitReader
    constructor(data: any[], size: any)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: any): BitReader
    static new_from_buffer(buffer: Buffer): BitReader
}
export abstract class BufferClass {
    /* Fields of Gst-0.10.Gst.BufferClass */
    mini_object_class: MiniObjectClass
    static name: string
}
export abstract class BufferListClass {
    static name: string
}
export class BufferListIterator {
    /* Methods of Gst-0.10.Gst.BufferListIterator */
    free(): void
    n_buffers(): any
    next(): Buffer
    next_group(): any
    add(buffer: Buffer): void
    add_group(): void
    remove(): void
    steal(): Buffer
    take(buffer: Buffer): void
    do(do_func: BufferListDoFunction, user_data: any): Buffer
    merge_group(): Buffer
    static name: string
}
export abstract class BusClass {
    /* Fields of Gst-0.10.Gst.BusClass */
    parent_class: ObjectClass
    message: (bus: Bus, message: Message) => void
    sync_message: (bus: Bus, message: Message) => void
    _gst_reserved: any[]
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
    init_from_buffer(buffer: Buffer): void
    set_pos(pos: any): any
    get_pos(): any
    get_remaining(): any
    get_size(): any
    skip(nbytes: any): any
    get_uint8(val: any[]): any
    get_int8(): [ /* returnType */ any, /* val */ any ]
    get_uint16_le(): [ /* returnType */ any, /* val */ any ]
    get_int16_le(): [ /* returnType */ any, /* val */ any ]
    get_uint16_be(): [ /* returnType */ any, /* val */ any ]
    get_int16_be(): [ /* returnType */ any, /* val */ any ]
    get_uint24_le(): [ /* returnType */ any, /* val */ any ]
    get_int24_le(): [ /* returnType */ any, /* val */ number ]
    get_uint24_be(): [ /* returnType */ any, /* val */ any ]
    get_int24_be(): [ /* returnType */ any, /* val */ number ]
    get_uint32_le(): [ /* returnType */ any, /* val */ any ]
    get_int32_le(): [ /* returnType */ any, /* val */ number ]
    get_uint32_be(): [ /* returnType */ any, /* val */ any ]
    get_int32_be(): [ /* returnType */ any, /* val */ number ]
    get_uint64_le(): [ /* returnType */ any, /* val */ any ]
    get_int64_le(): [ /* returnType */ any, /* val */ any ]
    get_uint64_be(): [ /* returnType */ any, /* val */ any ]
    get_int64_be(): [ /* returnType */ any, /* val */ any ]
    peek_uint8(val: any[]): any
    peek_int8(): [ /* returnType */ any, /* val */ any ]
    peek_uint16_le(): [ /* returnType */ any, /* val */ any ]
    peek_int16_le(): [ /* returnType */ any, /* val */ any ]
    peek_uint16_be(): [ /* returnType */ any, /* val */ any ]
    peek_int16_be(): [ /* returnType */ any, /* val */ any ]
    peek_uint24_le(): [ /* returnType */ any, /* val */ any ]
    peek_int24_le(): [ /* returnType */ any, /* val */ number ]
    peek_uint24_be(): [ /* returnType */ any, /* val */ any ]
    peek_int24_be(): [ /* returnType */ any, /* val */ number ]
    peek_uint32_le(): [ /* returnType */ any, /* val */ any ]
    peek_int32_le(): [ /* returnType */ any, /* val */ number ]
    peek_uint32_be(): [ /* returnType */ any, /* val */ any ]
    peek_int32_be(): [ /* returnType */ any, /* val */ number ]
    peek_uint64_le(): [ /* returnType */ any, /* val */ any ]
    peek_int64_le(): [ /* returnType */ any, /* val */ any ]
    peek_uint64_be(): [ /* returnType */ any, /* val */ any ]
    peek_int64_be(): [ /* returnType */ any, /* val */ any ]
    get_float32_le(): [ /* returnType */ any, /* val */ any ]
    get_float32_be(): [ /* returnType */ any, /* val */ any ]
    get_float64_le(): [ /* returnType */ any, /* val */ number ]
    get_float64_be(): [ /* returnType */ any, /* val */ number ]
    peek_float32_le(): [ /* returnType */ any, /* val */ any ]
    peek_float32_be(): [ /* returnType */ any, /* val */ any ]
    peek_float64_le(): [ /* returnType */ any, /* val */ number ]
    peek_float64_be(): [ /* returnType */ any, /* val */ number ]
    dup_data(size: any): [ /* returnType */ any, /* val */ any ]
    get_data(size: any): [ /* returnType */ any, /* val */ any ]
    peek_data(size: any): [ /* returnType */ any, /* val */ any ]
    dup_string_utf8(str: string[]): any
    dup_string_utf16(): [ /* returnType */ any, /* str */ any ]
    dup_string_utf32(): [ /* returnType */ any, /* str */ any ]
    skip_string_utf8(): any
    skip_string_utf16(): any
    skip_string_utf32(): any
    get_string_utf8(str: string[]): any
    peek_string_utf8(str: string[]): any
    masked_scan_uint32(mask: any, pattern: any, offset: any, size: any): any
    static name: string
    static new(data: any[], size: any): ByteReader
    constructor(data: any[], size: any)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: any): ByteReader
    static new_from_buffer(buffer: Buffer): ByteReader
}
export class ByteWriter {
    /* Fields of Gst-0.10.Gst.ByteWriter */
    parent: ByteReader
    alloc_size: any
    fixed: any
    owned: any
    /* Methods of Gst-0.10.Gst.ByteWriter */
    init(): void
    init_with_size(size: any, fixed: any): void
    init_with_data(data: any[], size: any, initialized: any): void
    init_with_buffer(buffer: Buffer, initialized: any): void
    free(): void
    free_and_get_data(): any[]
    free_and_get_buffer(): Buffer
    reset(): void
    reset_and_get_data(): any[]
    reset_and_get_buffer(): Buffer
    get_remaining(): any
    ensure_free_space(size: any): any
    put_uint8(val: any): any
    put_int8(val: any): any
    put_uint16_be(val: any): any
    put_uint16_le(val: any): any
    put_int16_be(val: any): any
    put_int16_le(val: any): any
    put_uint24_be(val: any): any
    put_uint24_le(val: any): any
    put_int24_be(val: number): any
    put_int24_le(val: number): any
    put_uint32_be(val: any): any
    put_uint32_le(val: any): any
    put_int32_be(val: number): any
    put_int32_le(val: number): any
    put_uint64_be(val: any): any
    put_uint64_le(val: any): any
    put_int64_be(val: any): any
    put_int64_le(val: any): any
    put_float32_be(val: any): any
    put_float32_le(val: any): any
    put_float64_be(val: number): any
    put_float64_le(val: number): any
    put_data(data: any[], size: any): any
    fill(value: any, size: any): any
    put_string_utf8(data: string): any
    put_string_utf16(): [ /* returnType */ any, /* data */ any ]
    put_string_utf32(): [ /* returnType */ any, /* data */ any ]
    static name: string
    static new(): ByteWriter
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ByteWriter
    static new_with_size(size: any, fixed: any): ByteWriter
    static new_with_data(data: any[], size: any, initialized: any): ByteWriter
    static new_with_buffer(buffer: Buffer, initialized: any): ByteWriter
}
export class Caps {
    /* Fields of Gst-0.10.Gst.Caps */
    type: GObject.Type
    refcount: any
    flags: CapsFlags
    structs: GLib.PtrArray
    _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.Caps */
    ref(): Caps
    copy(): Caps
    make_writable(): Caps
    unref(): void
    append(caps2: Caps): void
    merge(caps2: Caps): void
    append_structure(structure: Structure): void
    remove_structure(idx: any): void
    merge_structure(structure: Structure): void
    get_size(): any
    get_structure(index: any): Structure
    steal_structure(index: any): Structure
    copy_nth(nth: any): Caps
    truncate(): void
    set_value(field: string, value: any): void
    is_any(): any
    is_empty(): any
    is_fixed(): any
    is_always_compatible(caps2: Caps): any
    is_subset(superset: Caps): any
    is_equal(caps2: Caps): any
    is_equal_fixed(caps2: Caps): any
    can_intersect(caps2: Caps): any
    intersect(caps2: Caps): Caps
    subtract(subtrahend: Caps): Caps
    union(caps2: Caps): Caps
    normalize(): Caps
    do_simplify(): any
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    replace(newcaps: Caps): void
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static new_empty(): Caps
    static new_any(): Caps
}
export abstract class ChildProxyInterface {
    /* Fields of Gst-0.10.Gst.ChildProxyInterface */
    parent: GObject.TypeInterface
    get_child_by_index: (parent: ChildProxy, index: any) => Object
    get_children_count: (parent: ChildProxy) => any
    child_added: (parent: ChildProxy, child: Object) => void
    child_removed: (parent: ChildProxy, child: Object) => void
    _gst_reserved: any[]
    static name: string
}
export abstract class ClockClass {
    /* Fields of Gst-0.10.Gst.ClockClass */
    parent_class: ObjectClass
    change_resolution: (clock: Clock, old_resolution: ClockTime, new_resolution: ClockTime) => ClockTime
    get_resolution: (clock: Clock) => ClockTime
    get_internal_time: (clock: Clock) => ClockTime
    wait: (clock: Clock, entry: ClockEntry) => ClockReturn
    wait_async: (clock: Clock, entry: ClockEntry) => ClockReturn
    unschedule: (clock: Clock, entry: ClockEntry) => void
    wait_jitter: (clock: Clock, entry: ClockEntry, jitter: ClockTimeDiff) => ClockReturn
    _gst_reserved: any[]
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
    user_data: any
    destroy_data: GLib.DestroyNotify
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
    parent_class: ObjectClass
    _gst_reserved: any[]
    static name: string
}
export class CollectPadsPrivate {
    static name: string
}
export abstract class DataQueueClass {
    /* Fields of Gst-0.10.Gst.DataQueueClass */
    parent_class: GObject.ObjectClass
    empty: (queue: DataQueue) => void
    full: (queue: DataQueue) => void
    _gst_reserved: any[]
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
    set_threshold(level: DebugLevel): void
    reset_threshold(): void
    get_threshold(): DebugLevel
    get_name(): string
    get_color(): any
    get_description(): string
    static name: string
}
export class DebugMessage {
    /* Methods of Gst-0.10.Gst.DebugMessage */
    get(): string
    static name: string
}
export abstract class ElementClass {
    /* Fields of Gst-0.10.Gst.ElementClass */
    parent_class: ObjectClass
    details: ElementDetails
    elementfactory: ElementFactory
    padtemplates: any[]
    numpadtemplates: any
    pad_templ_cookie: any
    pad_added: (element: Element, pad: Pad) => void
    pad_removed: (element: Element, pad: Pad) => void
    no_more_pads: (element: Element) => void
    request_new_pad: (element: Element, templ: PadTemplate, name: string) => Pad
    release_pad: (element: Element, pad: Pad) => void
    get_state: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state: (element: Element, state: State) => StateChangeReturn
    change_state: (element: Element, transition: StateChange) => StateChangeReturn
    set_bus: (element: Element, bus: Bus) => void
    provide_clock: (element: Element) => Clock
    set_clock: (element: Element, clock: Clock) => any
    get_index: (element: Element) => Index
    set_index: (element: Element, index: Index) => void
    send_event: (element: Element, event: Event) => any
    get_query_types: (element: Element) => QueryType
    query: (element: Element, query: Query) => any
    _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.ElementClass */
    add_pad_template(templ: PadTemplate): void
    get_pad_template(name: string): PadTemplate
    set_details(details: ElementDetails): void
    set_details_simple(longname: string, classification: string, description: string, author: string): void
    static name: string
}
export class ElementDetails {
    /* Fields of Gst-0.10.Gst.ElementDetails */
    longname: string
    klass: string
    description: string
    author: string
    _gst_reserved: any[]
    static name: string
}
export abstract class ElementFactoryClass {
    /* Fields of Gst-0.10.Gst.ElementFactoryClass */
    parent_class: PluginFeatureClass
    _gst_reserved: any[]
    static name: string
}
export abstract class EventClass {
    /* Fields of Gst-0.10.Gst.EventClass */
    mini_object_class: MiniObjectClass
    _gst_reserved: any[]
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
    parent_class: ProxyPadClass
    _gst_reserved: any[]
    static name: string
}
export class GhostPadPrivate {
    static name: string
}
export abstract class ImplementsInterfaceClass {
    /* Fields of Gst-0.10.Gst.ImplementsInterfaceClass */
    parent: GObject.TypeInterface
    supported: (iface: ImplementsInterface, iface_type: GObject.Type) => any
    _gst_reserved: any[]
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
    parent_class: ObjectClass
    get_writer_id: (index: Index, writer_string: string) => [ /* returnType */ any, /* writer_id */ any ]
    commit: (index: Index, id: any) => void
    add_entry: (index: Index, entry: IndexEntry) => void
    get_assoc_entry: (index: Index, id: any, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: any, func: GLib.CompareDataFunc) => IndexEntry
    entry_added: (index: Index, entry: IndexEntry) => void
    _gst_reserved: any[]
    static name: string
}
export class IndexEntry {
    /* Fields of Gst-0.10.Gst.IndexEntry */
    type: IndexEntryType
    id: any
    /* Methods of Gst-0.10.Gst.IndexEntry */
    copy(): IndexEntry
    free(): void
    assoc_map(format: Format): [ /* returnType */ any, /* value */ any ]
    static name: string
}
export abstract class IndexFactoryClass {
    /* Fields of Gst-0.10.Gst.IndexFactoryClass */
    parent: PluginFeatureClass
    _gst_reserved: any[]
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
    master_cookie: any
    _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.Iterator */
    push(other: Iterator): void
    filter(func: GLib.CompareFunc, user_data: any): Iterator
    fold(func: IteratorFoldFunction, ret: any, user_data: any): IteratorResult
    foreach(func: GLib.Func, user_data: any): IteratorResult
    find_custom(func: GLib.CompareFunc, user_data: any): any
    static name: string
    static new(size: any, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    constructor(size: any, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction)
    /* Static methods and pseudo-constructors */
    static new(size: any, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    static new_single(type: GObject.Type, object: any, copy: CopyFunction, free: GLib.FreeFunc): Iterator
}
export abstract class MessageClass {
    /* Fields of Gst-0.10.Gst.MessageClass */
    mini_object_class: MiniObjectClass
    _gst_reserved: any[]
    static name: string
}
export abstract class MiniObjectClass {
    /* Fields of Gst-0.10.Gst.MiniObjectClass */
    type_class: GObject.TypeClass
    copy: MiniObjectCopyFunction
    finalize: MiniObjectFinalizeFunction
    _gst_reserved: any
    static name: string
}
export abstract class ObjectClass {
    /* Fields of Gst-0.10.Gst.ObjectClass */
    parent_class: GObject.ObjectClass
    path_string_separator: string
    signal_object: GObject.Object
    lock: any
    parent_set: (object: Object, parent: Object) => void
    parent_unset: (object: Object, parent: Object) => void
    object_saved: (object: Object, parent: libxml2.NodePtr) => void
    deep_notify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    save_thyself: (object: Object, parent: libxml2.NodePtr) => libxml2.NodePtr
    restore_thyself: (object: Object, self: libxml2.NodePtr) => void
    _gst_reserved: any[]
    static name: string
}
export abstract class PadClass {
    /* Fields of Gst-0.10.Gst.PadClass */
    parent_class: ObjectClass
    linked: (pad: Pad, peer: Pad) => void
    unlinked: (pad: Pad, peer: Pad) => void
    request_link: (pad: Pad) => void
    have_data: (pad: Pad, data: MiniObject) => any
    _gst_reserved: any[]
    static name: string
}
export class PadPrivate {
    static name: string
}
export abstract class PadTemplateClass {
    /* Fields of Gst-0.10.Gst.PadTemplateClass */
    parent_class: ObjectClass
    pad_created: (templ: PadTemplate, pad: Pad) => void
    _gst_reserved: any[]
    static name: string
}
export class ParamSpecFraction {
    /* Fields of Gst-0.10.Gst.ParamSpecFraction */
    parent_instance: GObject.ParamSpec
    min_num: any
    min_den: any
    max_num: any
    max_den: any
    def_num: any
    def_den: any
    static name: string
}
export class ParamSpecMiniObject {
    /* Fields of Gst-0.10.Gst.ParamSpecMiniObject */
    parent_instance: GObject.ParamSpec
    static name: string
}
export class ParseContext {
    /* Methods of Gst-0.10.Gst.ParseContext */
    get_missing_elements(): string[]
    free(): void
    static name: string
    static new(): ParseContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParseContext
}
export abstract class PipelineClass {
    /* Fields of Gst-0.10.Gst.PipelineClass */
    parent_class: BinClass
    _gst_reserved: any[]
    static name: string
}
export class PipelinePrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of Gst-0.10.Gst.PluginClass */
    object_class: ObjectClass
    _gst_reserved: any[]
    static name: string
}
export class PluginDesc {
    /* Fields of Gst-0.10.Gst.PluginDesc */
    major_version: any
    minor_version: any
    name: string
    description: string
    plugin_init: PluginInitFunc
    version: string
    license: string
    source: string
    package: string
    origin: string
    _gst_reserved: any[]
    static name: string
}
export abstract class PluginFeatureClass {
    /* Fields of Gst-0.10.Gst.PluginFeatureClass */
    parent_class: ObjectClass
    _gst_reserved: any[]
    static name: string
}
export class PluginPrivate {
    static name: string
}
export class Poll {
    /* Methods of Gst-0.10.Gst.Poll */
    free(): void
    add_fd(fd: PollFD): any
    remove_fd(fd: PollFD): any
    fd_ctl_write(fd: PollFD, active: any): any
    fd_ctl_read(fd: PollFD, active: any): any
    fd_ignored(fd: PollFD): void
    fd_has_closed(fd: PollFD): any
    fd_has_error(fd: PollFD): any
    fd_can_read(fd: PollFD): any
    fd_can_write(fd: PollFD): any
    wait(timeout: ClockTime): any
    set_controllable(controllable: any): any
    restart(): void
    set_flushing(flushing: any): void
    write_control(): any
    read_control(): any
    static name: string
    static new(controllable: any): Poll
    constructor(controllable: any)
    /* Static methods and pseudo-constructors */
    static new(controllable: any): Poll
    static new_timer(): Poll
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
    parent_class: PadClass
    _gst_reserved: any[]
    static name: string
}
export class ProxyPadPrivate {
    static name: string
}
export abstract class PushSrcClass {
    /* Fields of Gst-0.10.Gst.PushSrcClass */
    parent_class: BaseSrcClass
    create: (src: PushSrc, buf: Buffer) => FlowReturn
    _gst_reserved: any[]
    static name: string
}
export abstract class QueryClass {
    /* Fields of Gst-0.10.Gst.QueryClass */
    mini_object_class: MiniObjectClass
    _gst_reserved: any[]
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
    parent_class: ObjectClass
    plugin_added: (registry: Registry, plugin: Plugin) => void
    feature_added: (registry: Registry, feature: PluginFeature) => void
    _gst_reserved: any[]
    static name: string
}
export class RegistryPrivate {
    static name: string
}
export class Segment {
    /* Fields of Gst-0.10.Gst.Segment */
    rate: number
    abs_rate: number
    format: Format
    flags: SeekFlags
    start: any
    stop: any
    time: any
    accum: any
    last_stop: any
    duration: any
    applied_rate: number
    _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.Segment */
    copy(): Segment
    free(): void
    init(format: Format): void
    set_duration(format: Format, duration: any): void
    set_last_stop(format: Format, position: any): void
    set_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: any, stop_type: SeekType, stop: any): /* update */ any
    set_newsegment(update: any, rate: number, format: Format, start: any, stop: any, time: any): void
    set_newsegment_full(update: any, rate: number, applied_rate: number, format: Format, start: any, stop: any, time: any): void
    to_stream_time(format: Format, position: any): any
    to_running_time(format: Format, position: any): any
    to_position(format: Format, running_time: any): any
    clip(format: Format, start: any, stop: any): [ /* returnType */ any, /* clip_start */ any, /* clip_stop */ any ]
    set_running_time(format: Format, running_time: any): any
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
    _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.StaticCaps */
    get(): Caps
    static name: string
}
export class StaticPadTemplate {
    /* Fields of Gst-0.10.Gst.StaticPadTemplate */
    name_template: string
    direction: PadDirection
    presence: PadPresence
    static_caps: StaticCaps
    /* Methods of Gst-0.10.Gst.StaticPadTemplate */
    get(): PadTemplate
    get_caps(): Caps
    static name: string
}
export class Structure {
    /* Fields of Gst-0.10.Gst.Structure */
    type: GObject.Type
    name: GLib.Quark
    parent_refcount: any
    fields: GLib.Array
    _gst_reserved: any
    /* Methods of Gst-0.10.Gst.Structure */
    copy(): Structure
    set_parent_refcount(): /* refcount */ any
    free(): void
    get_name(): string
    get_name_id(): GLib.Quark
    has_name(name: string): any
    set_name(name: string): void
    id_set_value(field: GLib.Quark, value: any): void
    set_value(fieldname: string, value: any): void
    id_get_value(field: GLib.Quark): any
    get_value(fieldname: string): any
    remove_field(fieldname: string): void
    remove_all_fields(): void
    get_field_type(fieldname: string): GObject.Type
    foreach(func: StructureForeachFunc, user_data: any): any
    map_in_place(func: StructureMapFunc, user_data: any): any
    n_fields(): any
    nth_field_name(index: any): string
    id_has_field(field: GLib.Quark): any
    id_has_field_typed(field: GLib.Quark, type: GObject.Type): any
    has_field(fieldname: string): any
    has_field_typed(fieldname: string, type: GObject.Type): any
    get_boolean(fieldname: string): [ /* returnType */ any, /* value */ any ]
    get_int(fieldname: string): [ /* returnType */ any, /* value */ any ]
    get_uint(fieldname: string): [ /* returnType */ any, /* value */ any ]
    get_fourcc(fieldname: string): [ /* returnType */ any, /* value */ any ]
    get_double(fieldname: string): [ /* returnType */ any, /* value */ number ]
    get_date(fieldname: string, value: GLib.Date): any
    get_clock_time(fieldname: string, value: ClockTime): any
    get_string(fieldname: string): string
    get_enum(fieldname: string, enumtype: GObject.Type): [ /* returnType */ any, /* value */ any ]
    get_fraction(fieldname: string): [ /* returnType */ any, /* value_numerator */ any, /* value_denominator */ any ]
    to_string(): string
    fixate_field_nearest_int(field_name: string, target: any): any
    fixate_field_nearest_double(field_name: string, target: number): any
    fixate_field_boolean(field_name: string, target: any): any
    fixate_field_string(field_name: string, target: string): any
    fixate_field_nearest_fraction(field_name: string, target_numerator: any, target_denominator: any): any
    static name: string
}
export abstract class SystemClockClass {
    /* Fields of Gst-0.10.Gst.SystemClockClass */
    parent_class: ClockClass
    _gst_reserved: any[]
    static name: string
}
export class SystemClockPrivate {
    static name: string
}
export class TagSetterIFace {
    /* Fields of Gst-0.10.Gst.TagSetterIFace */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class TaskClass {
    /* Fields of Gst-0.10.Gst.TaskClass */
    parent_class: ObjectClass
    pool: TaskPool
    _gst_reserved: any[]
    static name: string
}
export abstract class TaskPoolClass {
    /* Fields of Gst-0.10.Gst.TaskPoolClass */
    parent_class: ObjectClass
    prepare: (pool: TaskPool) => void
    cleanup: (pool: TaskPool) => void
    push: (pool: TaskPool, func: TaskPoolFunction) => any
    join: (pool: TaskPool, id: any) => void
    _gst_reserved: any[]
    static name: string
}
export class TaskPrivate {
    static name: string
}
export class TaskThreadCallbacks {
    /* Fields of Gst-0.10.Gst.TaskThreadCallbacks */
    enter_thread: any
    leave_thread: any
    _gst_reserved: any[]
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
    text_flush(): void
    set_default(): void
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
    get_length: any
    _gst_reserved: any[]
    static name: string
}
export abstract class TypeFindFactoryClass {
    /* Fields of Gst-0.10.Gst.TypeFindFactoryClass */
    parent: PluginFeatureClass
    _gst_reserved: any[]
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
    new_uri: (handler: URIHandler, uri: string) => void
    get_type: () => URIType
    get_protocols: () => string[]
    get_uri: (handler: URIHandler) => string
    set_uri: (handler: URIHandler, uri: string) => any
    get_type_full: (type: GObject.Type) => URIType
    get_protocols_full: (type: GObject.Type) => string[]
    _gst_reserved: any[]
    static name: string
}
export class ValueTable {
    /* Fields of Gst-0.10.Gst.ValueTable */
    type: GObject.Type
    compare: ValueCompareFunc
    serialize: ValueSerializeFunc
    deserialize: ValueDeserializeFunc
    _gst_reserved: any[]
    static name: string
}
export abstract class XMLClass {
    /* Fields of Gst-0.10.Gst.XMLClass */
    parent_class: ObjectClass
    object_loaded: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    object_saved: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    _gst_reserved: any[]
    static name: string
}
export type ClockID = any
export type ClockTime = any
export type ClockTimeDiff = any
export type TagList = any