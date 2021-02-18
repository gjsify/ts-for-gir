/**
 * GstVideo-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum ColorBalanceType {
    HARDWARE,
    SOFTWARE,
}
export enum NavigationCommand {
    INVALID,
    MENU1,
    MENU2,
    MENU3,
    MENU4,
    MENU5,
    MENU6,
    MENU7,
    LEFT,
    RIGHT,
    UP,
    DOWN,
    ACTIVATE,
    PREV_ANGLE,
    NEXT_ANGLE,
}
export enum NavigationEventType {
    INVALID,
    KEY_PRESS,
    KEY_RELEASE,
    MOUSE_BUTTON_PRESS,
    MOUSE_BUTTON_RELEASE,
    MOUSE_MOVE,
    COMMAND,
    MOUSE_SCROLL,
}
export enum NavigationMessageType {
    INVALID,
    MOUSE_OVER,
    COMMANDS_CHANGED,
    ANGLES_CHANGED,
    EVENT,
}
export enum NavigationQueryType {
    INVALID,
    COMMANDS,
    ANGLES,
}
export enum VideoAFDSpec {
    DVB_ETSI,
    ATSC_A53,
    SMPTE_ST2016_1,
}
export enum VideoAFDValue {
    UNAVAILABLE,
    /* 16_9_TOP_ALIGNED (invalid, starts with a number) */
    /* 14_9_TOP_ALIGNED (invalid, starts with a number) */
    GREATER_THAN_16_9,
    /* 4_3_FULL_16_9_FULL (invalid, starts with a number) */
    /* 4_3_FULL_4_3_PILLAR (invalid, starts with a number) */
    /* 16_9_LETTER_16_9_FULL (invalid, starts with a number) */
    /* 14_9_LETTER_14_9_PILLAR (invalid, starts with a number) */
    /* 4_3_FULL_14_9_CENTER (invalid, starts with a number) */
    /* 16_9_LETTER_14_9_CENTER (invalid, starts with a number) */
    /* 16_9_LETTER_4_3_CENTER (invalid, starts with a number) */
}
export enum VideoAlphaMode {
    COPY,
    SET,
    MULT,
}
export enum VideoAncillaryDID {
    UNDEFINED,
    DELETION,
    HANC_3G_AUDIO_DATA_FIRST,
    HANC_3G_AUDIO_DATA_LAST,
    HANC_HDTV_AUDIO_DATA_FIRST,
    HANC_HDTV_AUDIO_DATA_LAST,
    HANC_SDTV_AUDIO_DATA_1_FIRST,
    HANC_SDTV_AUDIO_DATA_1_LAST,
    CAMERA_POSITION,
    HANC_ERROR_DETECTION,
    HANC_SDTV_AUDIO_DATA_2_FIRST,
    HANC_SDTV_AUDIO_DATA_2_LAST,
}
export enum VideoAncillaryDID16 {
    S334_EIA_708,
    S334_EIA_608,
    S2016_3_AFD_BAR,
}
export enum VideoCaptionType {
    UNKNOWN,
    CEA608_RAW,
    CEA608_S334_1A,
    CEA708_RAW,
    CEA708_CDP,
}
export enum VideoChromaMethod {
    NEAREST,
    LINEAR,
}
export enum VideoChromaMode {
    FULL,
    UPSAMPLE_ONLY,
    DOWNSAMPLE_ONLY,
    NONE,
}
export enum VideoColorMatrix {
    UNKNOWN,
    RGB,
    FCC,
    BT709,
    BT601,
    SMPTE240M,
    BT2020,
}
export enum VideoColorPrimaries {
    UNKNOWN,
    BT709,
    BT470M,
    BT470BG,
    SMPTE170M,
    SMPTE240M,
    FILM,
    BT2020,
    ADOBERGB,
    SMPTEST428,
    SMPTERP431,
    SMPTEEG432,
    EBU3213,
}
export enum VideoColorRange {
    UNKNOWN,
    /* 0_255 (invalid, starts with a number) */
    /* 16_235 (invalid, starts with a number) */
}
export enum VideoDitherMethod {
    NONE,
    VERTERR,
    FLOYD_STEINBERG,
    SIERRA_LITE,
    BAYER,
}
export enum VideoFieldOrder {
    UNKNOWN,
    TOP_FIELD_FIRST,
    BOTTOM_FIELD_FIRST,
}
export enum VideoFormat {
    UNKNOWN,
    ENCODED,
    I420,
    YV12,
    YUY2,
    UYVY,
    AYUV,
    RGBX,
    BGRX,
    XRGB,
    XBGR,
    RGBA,
    BGRA,
    ARGB,
    ABGR,
    RGB,
    BGR,
    Y41B,
    Y42B,
    YVYU,
    Y444,
    V210,
    V216,
    NV12,
    NV21,
    GRAY8,
    GRAY16_BE,
    GRAY16_LE,
    V308,
    RGB16,
    BGR16,
    RGB15,
    BGR15,
    UYVP,
    A420,
    RGB8P,
    YUV9,
    YVU9,
    IYU1,
    ARGB64,
    AYUV64,
    R210,
    I420_10BE,
    I420_10LE,
    I422_10BE,
    I422_10LE,
    Y444_10BE,
    Y444_10LE,
    GBR,
    GBR_10BE,
    GBR_10LE,
    NV16,
    NV24,
    NV12_64Z32,
    A420_10BE,
    A420_10LE,
    A422_10BE,
    A422_10LE,
    A444_10BE,
    A444_10LE,
    NV61,
    P010_10BE,
    P010_10LE,
    IYU2,
    VYUY,
    GBRA,
    GBRA_10BE,
    GBRA_10LE,
    GBR_12BE,
    GBR_12LE,
    GBRA_12BE,
    GBRA_12LE,
    I420_12BE,
    I420_12LE,
    I422_12BE,
    I422_12LE,
    Y444_12BE,
    Y444_12LE,
    GRAY10_LE32,
    NV12_10LE32,
    NV16_10LE32,
    NV12_10LE40,
    Y210,
    Y410,
    VUYA,
    BGR10A2_LE,
    RGB10A2_LE,
    Y444_16BE,
    Y444_16LE,
    P016_BE,
    P016_LE,
    P012_BE,
    P012_LE,
    Y212_BE,
    Y212_LE,
    Y412_BE,
    Y412_LE,
    NV12_4L4,
    NV12_32L32,
}
export enum VideoGLTextureOrientation {
    NORMAL_Y_NORMAL,
    NORMAL_Y_FLIP,
    FLIP_Y_NORMAL,
    FLIP_Y_FLIP,
}
export enum VideoGLTextureType {
    LUMINANCE,
    LUMINANCE_ALPHA,
    RGB16,
    RGB,
    RGBA,
    R,
    RG,
}
export enum VideoGammaMode {
    NONE,
    REMAP,
}
export enum VideoHDRFormat {
    NONE,
    HDR10,
    HDR10_PLUS,
    DOLBY_VISION,
}
export enum VideoInterlaceMode {
    PROGRESSIVE,
    INTERLEAVED,
    MIXED,
    FIELDS,
    ALTERNATE,
}
export enum VideoMatrixMode {
    FULL,
    INPUT_ONLY,
    OUTPUT_ONLY,
    NONE,
}
export enum VideoMultiviewFramePacking {
    NONE,
    MONO,
    LEFT,
    RIGHT,
    SIDE_BY_SIDE,
    SIDE_BY_SIDE_QUINCUNX,
    COLUMN_INTERLEAVED,
    ROW_INTERLEAVED,
    TOP_BOTTOM,
    CHECKERBOARD,
}
export enum VideoMultiviewMode {
    NONE,
    MONO,
    LEFT,
    RIGHT,
    SIDE_BY_SIDE,
    SIDE_BY_SIDE_QUINCUNX,
    COLUMN_INTERLEAVED,
    ROW_INTERLEAVED,
    TOP_BOTTOM,
    CHECKERBOARD,
    FRAME_BY_FRAME,
    MULTIVIEW_FRAME_BY_FRAME,
    SEPARATED,
}
export enum VideoOrientationMethod {
    IDENTITY,
    /* 90R (invalid, starts with a number) */
    /* 180 (invalid, starts with a number) */
    /* 90L (invalid, starts with a number) */
    HORIZ,
    VERT,
    UL_LR,
    UR_LL,
    AUTO,
    CUSTOM,
}
export enum VideoPrimariesMode {
    NONE,
    MERGE_ONLY,
    FAST,
}
export enum VideoResamplerMethod {
    NEAREST,
    LINEAR,
    CUBIC,
    SINC,
    LANCZOS,
}
export enum VideoTileMode {
    UNKNOWN,
    ZFLIPZ_2X2,
    LINEAR,
}
export enum VideoTileType {
    INDEXED,
}
export enum VideoTransferFunction {
    UNKNOWN,
    GAMMA10,
    GAMMA18,
    GAMMA20,
    GAMMA22,
    BT709,
    SMPTE240M,
    SRGB,
    GAMMA28,
    LOG100,
    LOG316,
    BT2020_12,
    ADOBERGB,
    BT2020_10,
    SMPTE2084,
    ARIB_STD_B67,
    BT601,
}
export enum VideoVBIParserResult {
    DONE,
    OK,
    ERROR,
}
export enum VideoBufferFlags {
    INTERLACED,
    TFF,
    RFF,
    ONEFIELD,
    MULTIPLE_VIEW,
    FIRST_IN_BUNDLE,
    TOP_FIELD,
    BOTTOM_FIELD,
    MARKER,
    LAST,
}
export enum VideoChromaFlags {
    NONE,
    INTERLACED,
}
export enum VideoChromaSite {
    UNKNOWN,
    NONE,
    H_COSITED,
    V_COSITED,
    ALT_LINE,
    COSITED,
    JPEG,
    MPEG2,
    DV,
}
export enum VideoCodecFrameFlags {
    DECODE_ONLY,
    SYNC_POINT,
    FORCE_KEYFRAME,
    FORCE_KEYFRAME_HEADERS,
    CORRUPTED,
}
export enum VideoDecoderRequestSyncPointFlags {
    DISCARD_INPUT,
    CORRUPT_OUTPUT,
}
export enum VideoDitherFlags {
    NONE,
    INTERLACED,
    QUANTIZE,
}
export enum VideoFlags {
    NONE,
    VARIABLE_FPS,
    PREMULTIPLIED_ALPHA,
}
export enum VideoFormatFlags {
    YUV,
    RGB,
    GRAY,
    ALPHA,
    LE,
    PALETTE,
    COMPLEX,
    UNPACK,
    TILED,
}
export enum VideoFrameFlags {
    NONE,
    INTERLACED,
    TFF,
    RFF,
    ONEFIELD,
    MULTIPLE_VIEW,
    FIRST_IN_BUNDLE,
    TOP_FIELD,
    BOTTOM_FIELD,
}
export enum VideoFrameMapFlags {
    NO_REF,
    LAST,
}
export enum VideoMultiviewFlags {
    NONE,
    RIGHT_VIEW_FIRST,
    LEFT_FLIPPED,
    LEFT_FLOPPED,
    RIGHT_FLIPPED,
    RIGHT_FLOPPED,
    HALF_ASPECT,
    MIXED_MONO,
}
export enum VideoOverlayFormatFlags {
    NONE,
    PREMULTIPLIED_ALPHA,
    GLOBAL_ALPHA,
}
export enum VideoPackFlags {
    NONE,
    TRUNCATE_RANGE,
    INTERLACED,
}
export enum VideoResamplerFlags {
    NONE,
    HALF_TAPS,
}
export enum VideoScalerFlags {
    NONE,
    INTERLACED,
}
export enum VideoTimeCodeFlags {
    NONE,
    DROP_FRAME,
    INTERLACED,
}
export const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string
export const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string
export const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string
export const BUFFER_POOL_OPTION_VIDEO_META: string
export const CAPS_FEATURE_FORMAT_INTERLACED: string
export const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string
export const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string
export const CAPS_FEATURE_META_GST_VIDEO_META: string
export const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string
export const META_TAG_VIDEO_COLORSPACE_STR: string
export const META_TAG_VIDEO_ORIENTATION_STR: string
export const META_TAG_VIDEO_SIZE_STR: string
export const META_TAG_VIDEO_STR: string
export const VIDEO_COLORIMETRY_BT2020: string
export const VIDEO_COLORIMETRY_BT2020_10: string
export const VIDEO_COLORIMETRY_BT2100_HLG: string
export const VIDEO_COLORIMETRY_BT2100_PQ: string
export const VIDEO_COLORIMETRY_BT601: string
export const VIDEO_COLORIMETRY_BT709: string
export const VIDEO_COLORIMETRY_SMPTE240M: string
export const VIDEO_COLORIMETRY_SRGB: string
export const VIDEO_COMP_A: number
export const VIDEO_COMP_B: number
export const VIDEO_COMP_G: number
export const VIDEO_COMP_INDEX: number
export const VIDEO_COMP_PALETTE: number
export const VIDEO_COMP_R: number
export const VIDEO_COMP_U: number
export const VIDEO_COMP_V: number
export const VIDEO_COMP_Y: number
export const VIDEO_CONVERTER_OPT_ALPHA_MODE: string
export const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string
export const VIDEO_CONVERTER_OPT_BORDER_ARGB: string
export const VIDEO_CONVERTER_OPT_CHROMA_MODE: string
export const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string
export const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string
export const VIDEO_CONVERTER_OPT_DEST_WIDTH: string
export const VIDEO_CONVERTER_OPT_DEST_X: string
export const VIDEO_CONVERTER_OPT_DEST_Y: string
export const VIDEO_CONVERTER_OPT_DITHER_METHOD: string
export const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string
export const VIDEO_CONVERTER_OPT_FILL_BORDER: string
export const VIDEO_CONVERTER_OPT_GAMMA_MODE: string
export const VIDEO_CONVERTER_OPT_MATRIX_MODE: string
export const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string
export const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string
export const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string
export const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string
export const VIDEO_CONVERTER_OPT_SRC_WIDTH: string
export const VIDEO_CONVERTER_OPT_SRC_X: string
export const VIDEO_CONVERTER_OPT_SRC_Y: string
export const VIDEO_CONVERTER_OPT_THREADS: string
export const VIDEO_DECODER_MAX_ERRORS: number
export const VIDEO_DECODER_SINK_NAME: string
export const VIDEO_DECODER_SRC_NAME: string
export const VIDEO_ENCODER_SINK_NAME: string
export const VIDEO_ENCODER_SRC_NAME: string
export const VIDEO_FORMATS_ALL: string
export const VIDEO_FPS_RANGE: string
export const VIDEO_HDR10_PLUS_MAX_BYTES: number
export const VIDEO_HDR10_PLUS_MAX_COLS_MD_APL: number
export const VIDEO_HDR10_PLUS_MAX_ROWS_TSD_APL: number
export const VIDEO_HDR10_PLUS_NUM_WINDOWS: number
export const VIDEO_MAX_COMPONENTS: number
export const VIDEO_MAX_PLANES: number
export const VIDEO_RESAMPLER_OPT_CUBIC_B: string
export const VIDEO_RESAMPLER_OPT_CUBIC_C: string
export const VIDEO_RESAMPLER_OPT_ENVELOPE: string
export const VIDEO_RESAMPLER_OPT_MAX_TAPS: string
export const VIDEO_RESAMPLER_OPT_SHARPEN: string
export const VIDEO_RESAMPLER_OPT_SHARPNESS: string
export const VIDEO_SCALER_OPT_DITHER_METHOD: string
export const VIDEO_SIZE_RANGE: string
export const VIDEO_TILE_TYPE_MASK: number
export const VIDEO_TILE_TYPE_SHIFT: number
export const VIDEO_TILE_X_TILES_MASK: number
export const VIDEO_TILE_Y_TILES_SHIFT: number
export function buffer_add_video_afd_meta(buffer: Gst.Buffer, field: number, spec: VideoAFDSpec, afd: VideoAFDValue): VideoAFDMeta
export function buffer_add_video_affine_transformation_meta(buffer: Gst.Buffer): VideoAffineTransformationMeta
export function buffer_add_video_bar_meta(buffer: Gst.Buffer, field: number, is_letterbox: boolean, bar_data1: number, bar_data2: number): VideoBarMeta
export function buffer_add_video_caption_meta(buffer: Gst.Buffer, caption_type: VideoCaptionType, data: Uint8Array[]): VideoCaptionMeta
export function buffer_add_video_gl_texture_upload_meta(buffer: Gst.Buffer, texture_orientation: VideoGLTextureOrientation, n_textures: number, texture_type: VideoGLTextureType, upload: VideoGLTextureUpload, user_data_copy: GObject.BoxedCopyFunc, user_data_free: GObject.BoxedFreeFunc): VideoGLTextureUploadMeta
export function buffer_add_video_hdr_meta(buffer: Gst.Buffer, format: VideoHDRFormat, data: number, size: number): VideoHDRMeta
export function buffer_add_video_meta(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number): VideoMeta
export function buffer_add_video_meta_full(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number, n_planes: number, offset: number[], stride: number[]): VideoMeta
export function buffer_add_video_overlay_composition_meta(buf: Gst.Buffer, comp?: VideoOverlayComposition | null): VideoOverlayCompositionMeta
export function buffer_add_video_region_of_interest_meta(buffer: Gst.Buffer, roi_type: string, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
export function buffer_add_video_region_of_interest_meta_id(buffer: Gst.Buffer, roi_type: GLib.Quark, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
export function buffer_add_video_time_code_meta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null
export function buffer_add_video_time_code_meta_full(buffer: Gst.Buffer, fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCodeMeta
export function buffer_get_video_meta(buffer: Gst.Buffer): VideoMeta
export function buffer_get_video_meta_id(buffer: Gst.Buffer, id: number): VideoMeta
export function buffer_get_video_region_of_interest_meta_id(buffer: Gst.Buffer, id: number): VideoRegionOfInterestMeta
export function buffer_pool_config_get_video_alignment(config: Gst.Structure, align: VideoAlignment): boolean
export function buffer_pool_config_set_video_alignment(config: Gst.Structure, align: VideoAlignment): void
export function is_video_overlay_prepare_window_handle_message(msg: Gst.Message): boolean
export function navigation_event_get_type(event: Gst.Event): NavigationEventType
export function navigation_event_parse_command(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
export function navigation_event_parse_key_event(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
export function navigation_event_parse_mouse_button_event(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
export function navigation_event_parse_mouse_move_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
export function navigation_event_parse_mouse_scroll_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* delta_x */ number | null, /* delta_y */ number | null ]
export function navigation_message_get_type(message: Gst.Message): NavigationMessageType
export function navigation_message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message
export function navigation_message_new_commands_changed(src: Gst.Object): Gst.Message
export function navigation_message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message
export function navigation_message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message
export function navigation_message_parse_angles_changed(message: Gst.Message): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
export function navigation_message_parse_event(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
export function navigation_message_parse_mouse_over(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
export function navigation_query_get_type(query: Gst.Query): NavigationQueryType
export function navigation_query_new_angles(): Gst.Query
export function navigation_query_new_commands(): Gst.Query
export function navigation_query_parse_angles(query: Gst.Query): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
export function navigation_query_parse_commands_length(query: Gst.Query): [ /* returnType */ boolean, /* n_cmds */ number | null ]
export function navigation_query_parse_commands_nth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
export function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
export function navigation_query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void
export function video_afd_meta_api_get_type(): GObject.Type
export function video_afd_meta_get_info(): Gst.MetaInfo
export function video_affine_transformation_meta_api_get_type(): GObject.Type
export function video_affine_transformation_meta_get_info(): Gst.MetaInfo
export function video_bar_meta_api_get_type(): GObject.Type
export function video_bar_meta_get_info(): Gst.MetaInfo
export function video_blend(dest: VideoFrame, src: VideoFrame, x: number, y: number, global_alpha: number): boolean
export function video_blend_scale_linear_RGBA(src: VideoInfo, src_buffer: Gst.Buffer, dest_height: number, dest_width: number): [ /* dest */ VideoInfo, /* dest_buffer */ Gst.Buffer ]
export function video_calculate_display_ratio(video_width: number, video_height: number, video_par_n: number, video_par_d: number, display_par_n: number, display_par_d: number): [ /* returnType */ boolean, /* dar_n */ number, /* dar_d */ number ]
export function video_caption_meta_api_get_type(): GObject.Type
export function video_caption_meta_get_info(): Gst.MetaInfo
export function video_caption_type_from_caps(caps: Gst.Caps): VideoCaptionType
export function video_caption_type_to_caps(type: VideoCaptionType): Gst.Caps
export function video_chroma_from_string(s: string): VideoChromaSite
export function video_chroma_resample(resample: VideoChromaResample, lines: object | null, width: number): void
export function video_chroma_site_from_string(s: string): VideoChromaSite
export function video_chroma_site_to_string(site: VideoChromaSite): string | null
export function video_chroma_to_string(site: VideoChromaSite): string
export function video_color_matrix_from_iso(value: number): VideoColorMatrix
export function video_color_matrix_get_Kr_Kb(matrix: VideoColorMatrix): [ /* returnType */ boolean, /* Kr */ number, /* Kb */ number ]
export function video_color_matrix_to_iso(matrix: VideoColorMatrix): number
export function video_color_primaries_from_iso(value: number): VideoColorPrimaries
export function video_color_primaries_get_info(primaries: VideoColorPrimaries): VideoColorPrimariesInfo
export function video_color_primaries_to_iso(primaries: VideoColorPrimaries): number
export function video_color_range_offsets(range: VideoColorRange, info: VideoFormatInfo): [ /* offset */ number[], /* scale */ number[] ]
export function video_color_transfer_decode(func: VideoTransferFunction, val: number): number
export function video_color_transfer_encode(func: VideoTransferFunction, val: number): number
export function video_convert_sample(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample
export function video_convert_sample_async(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime, callback: VideoConvertSampleCallback): void
export function video_crop_meta_api_get_type(): GObject.Type
export function video_crop_meta_get_info(): Gst.MetaInfo
export function video_event_is_force_key_unit(event: Gst.Event): boolean
export function video_event_new_downstream_force_key_unit(timestamp: Gst.ClockTime, stream_time: Gst.ClockTime, running_time: Gst.ClockTime, all_headers: boolean, count: number): Gst.Event
export function video_event_new_still_frame(in_still: boolean): Gst.Event
export function video_event_new_upstream_force_key_unit(running_time: Gst.ClockTime, all_headers: boolean, count: number): Gst.Event
export function video_event_parse_downstream_force_key_unit(event: Gst.Event): [ /* returnType */ boolean, /* timestamp */ Gst.ClockTime, /* stream_time */ Gst.ClockTime, /* running_time */ Gst.ClockTime, /* all_headers */ boolean, /* count */ number ]
export function video_event_parse_still_frame(event: Gst.Event): [ /* returnType */ boolean, /* in_still */ boolean ]
export function video_event_parse_upstream_force_key_unit(event: Gst.Event): [ /* returnType */ boolean, /* running_time */ Gst.ClockTime, /* all_headers */ boolean, /* count */ number ]
export function video_field_order_from_string(order: string): VideoFieldOrder
export function video_field_order_to_string(order: VideoFieldOrder): string
export function video_format_from_fourcc(fourcc: number): VideoFormat
export function video_format_from_masks(depth: number, bpp: number, endianness: number, red_mask: number, green_mask: number, blue_mask: number, alpha_mask: number): VideoFormat
export function video_format_from_string(format: string): VideoFormat
export function video_format_get_info(format: VideoFormat): VideoFormatInfo
export function video_format_get_palette(format: VideoFormat): [ /* returnType */ object | null, /* size */ number ]
export function video_format_to_fourcc(format: VideoFormat): number
export function video_format_to_string(format: VideoFormat): string
export function video_formats_raw(): VideoFormat[]
export function video_frame_map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
export function video_frame_map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
export function video_gl_texture_upload_meta_api_get_type(): GObject.Type
export function video_gl_texture_upload_meta_get_info(): Gst.MetaInfo
export function video_guess_framerate(duration: Gst.ClockTime): [ /* returnType */ boolean, /* dest_n */ number | null, /* dest_d */ number | null ]
export function video_hdr_format_from_string(format?: string | null): VideoHDRFormat
export function video_hdr_format_to_string(format: VideoHDRFormat): string | null
export function video_hdr_meta_api_get_type(): GObject.Type
export function video_hdr_meta_get_info(): Gst.MetaInfo
export function video_hdr_parse_hdr10_plus(data: number, size: number): [ /* returnType */ boolean, /* hdr10_plus */ VideoHDR10Plus ]
export function video_info_from_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
export function video_info_init(): /* info */ VideoInfo
export function video_interlace_mode_from_string(mode: string): VideoInterlaceMode
export function video_interlace_mode_to_string(mode: VideoInterlaceMode): string
export function video_make_raw_caps(formats: VideoFormat[] | null): Gst.Caps
export function video_make_raw_caps_with_features(formats: VideoFormat[] | null, features?: Gst.CapsFeatures | null): Gst.Caps
export function video_mastering_display_info_from_string(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
export function video_meta_api_get_type(): GObject.Type
export function video_meta_get_info(): Gst.MetaInfo
export function video_meta_transform_scale_get_quark(): GLib.Quark
export function video_multiview_get_doubled_height_modes(): any
export function video_multiview_get_doubled_size_modes(): any
export function video_multiview_get_doubled_width_modes(): any
export function video_multiview_get_mono_modes(): any
export function video_multiview_get_unpacked_modes(): any
export function video_multiview_guess_half_aspect(mv_mode: VideoMultiviewMode, width: number, height: number, par_n: number, par_d: number): boolean
export function video_multiview_mode_from_caps_string(caps_mview_mode: string): VideoMultiviewMode
export function video_multiview_mode_to_caps_string(mview_mode: VideoMultiviewMode): string
export function video_multiview_video_info_change_mode(info: VideoInfo, out_mview_mode: VideoMultiviewMode, out_mview_flags: VideoMultiviewFlags): void
export function video_overlay_composition_meta_api_get_type(): GObject.Type
export function video_overlay_composition_meta_get_info(): Gst.MetaInfo
export function video_overlay_install_properties(oclass: GObject.ObjectClass, last_prop_id: number): void
export function video_overlay_set_property(object: GObject.Object, last_prop_id: number, property_id: number, value: any): boolean
export function video_region_of_interest_meta_api_get_type(): GObject.Type
export function video_region_of_interest_meta_get_info(): Gst.MetaInfo
export function video_tile_get_index(mode: VideoTileMode, x: number, y: number, x_tiles: number, y_tiles: number): number
export function video_time_code_meta_api_get_type(): GObject.Type
export function video_time_code_meta_get_info(): Gst.MetaInfo
export function video_transfer_function_decode(func: VideoTransferFunction, val: number): number
export function video_transfer_function_encode(func: VideoTransferFunction, val: number): number
export function video_transfer_function_from_iso(value: number): VideoTransferFunction
export function video_transfer_function_is_equivalent(from_func: VideoTransferFunction, from_bpp: number, to_func: VideoTransferFunction, to_bpp: number): boolean
export function video_transfer_function_to_iso(func: VideoTransferFunction): number
export interface VideoAffineTransformationGetMatrix {
    (meta: VideoAffineTransformationMeta, matrix: number): boolean
}
export interface VideoConvertSampleCallback {
    (sample: Gst.Sample, error: GLib.Error): void
}
export interface VideoFormatPack {
    (info: VideoFormatInfo, flags: VideoPackFlags, src: object | null, sstride: number, data: object | null, stride: number, chroma_site: VideoChromaSite, y: number, width: number): void
}
export interface VideoFormatUnpack {
    (info: VideoFormatInfo, flags: VideoPackFlags, dest: object | null, data: object | null, stride: number, x: number, y: number, width: number): void
}
export interface VideoGLTextureUpload {
    (meta: VideoGLTextureUploadMeta, texture_id: number): boolean
}
export class ColorBalance {
    /* Methods of GstVideo.ColorBalance */
    get_balance_type(): ColorBalanceType
    get_value(channel: ColorBalanceChannel): number
    list_channels(): ColorBalanceChannel[]
    set_value(channel: ColorBalanceChannel, value: number): void
    value_changed(channel: ColorBalanceChannel, value: number): void
    /* Virtual methods of GstVideo.ColorBalance */
    vfunc_get_balance_type(): ColorBalanceType
    vfunc_get_value(channel: ColorBalanceChannel): number
    vfunc_list_channels(): ColorBalanceChannel[]
    vfunc_set_value(channel: ColorBalanceChannel, value: number): void
    vfunc_value_changed(channel: ColorBalanceChannel, value: number): void
    /* Signals of GstVideo.ColorBalance */
    connect(sigName: "value-changed", callback: (($obj: ColorBalance, channel: ColorBalanceChannel, value: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ColorBalance, channel: ColorBalanceChannel, value: number) => void)): number
    emit(sigName: "value-changed", channel: ColorBalanceChannel, value: number): void
    static name: string
}
export class Navigation {
    /* Methods of GstVideo.Navigation */
    send_command(command: NavigationCommand): void
    send_event(structure: Gst.Structure): void
    send_key_event(event: string, key: string): void
    send_mouse_event(event: string, button: number, x: number, y: number): void
    send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void
    /* Virtual methods of GstVideo.Navigation */
    vfunc_send_event(structure: Gst.Structure): void
    static name: string
    /* Static methods and pseudo-constructors */
    static event_get_type(event: Gst.Event): NavigationEventType
    static event_parse_command(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
    static event_parse_key_event(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    static event_parse_mouse_button_event(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    static event_parse_mouse_move_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    static event_parse_mouse_scroll_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* delta_x */ number | null, /* delta_y */ number | null ]
    static message_get_type(message: Gst.Message): NavigationMessageType
    static message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message
    static message_new_commands_changed(src: Gst.Object): Gst.Message
    static message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message
    static message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message
    static message_parse_angles_changed(message: Gst.Message): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    static message_parse_event(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    static message_parse_mouse_over(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    static query_get_type(query: Gst.Query): NavigationQueryType
    static query_new_angles(): Gst.Query
    static query_new_commands(): Gst.Query
    static query_parse_angles(query: Gst.Query): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    static query_parse_commands_length(query: Gst.Query): [ /* returnType */ boolean, /* n_cmds */ number | null ]
    static query_parse_commands_nth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
    static query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
    static query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void
}
export class VideoDirection {
    /* Properties of GstVideo.VideoDirection */
    video_direction: VideoOrientationMethod
    static name: string
}
export class VideoOrientation {
    /* Methods of GstVideo.VideoOrientation */
    get_hcenter(): [ /* returnType */ boolean, /* center */ number ]
    get_hflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    get_vcenter(): [ /* returnType */ boolean, /* center */ number ]
    get_vflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    set_hcenter(center: number): boolean
    set_hflip(flip: boolean): boolean
    set_vcenter(center: number): boolean
    set_vflip(flip: boolean): boolean
    /* Virtual methods of GstVideo.VideoOrientation */
    vfunc_get_hcenter(): [ /* returnType */ boolean, /* center */ number ]
    vfunc_get_hflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    vfunc_get_vcenter(): [ /* returnType */ boolean, /* center */ number ]
    vfunc_get_vflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    vfunc_set_hcenter(center: number): boolean
    vfunc_set_hflip(flip: boolean): boolean
    vfunc_set_vcenter(center: number): boolean
    vfunc_set_vflip(flip: boolean): boolean
    static name: string
}
export class VideoOverlay {
    /* Methods of GstVideo.VideoOverlay */
    expose(): void
    got_window_handle(handle: any): void
    handle_events(handle_events: boolean): void
    prepare_window_handle(): void
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    set_window_handle(handle: any): void
    /* Virtual methods of GstVideo.VideoOverlay */
    vfunc_expose(): void
    vfunc_handle_events(handle_events: boolean): void
    vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): void
    vfunc_set_window_handle(handle: any): void
    static name: string
    /* Static methods and pseudo-constructors */
    static install_properties(oclass: GObject.ObjectClass, last_prop_id: number): void
    static set_property(object: GObject.Object, last_prop_id: number, property_id: number, value: any): boolean
}
export interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}
export class ColorBalanceChannel {
    /* Fields of GstVideo.ColorBalanceChannel */
    parent: GObject.Object
    label: string
    min_value: number
    max_value: number
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
    /* Virtual methods of GstVideo.ColorBalanceChannel */
    vfunc_value_changed(value: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstVideo.ColorBalanceChannel */
    connect(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, value: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, value: number) => void)): number
    emit(sigName: "value-changed", value: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ColorBalanceChannel_ConstructProps)
    _init (config?: ColorBalanceChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoAggregator_ConstructProps extends GstBase.Aggregator_ConstructProps {
}
export class VideoAggregator {
    /* Properties of GstBase.Aggregator */
    emit_signals: boolean
    latency: number
    min_upstream_latency: number
    start_time: number
    start_time_selection: GstBase.AggregatorStartTimeSelection
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoAggregator */
    aggregator: GstBase.Aggregator
    info: VideoInfo
    /* Fields of GstBase.Aggregator */
    srcpad: Gst.Pad
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase.Aggregator */
    finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    get_latency(): Gst.ClockTime
    negotiate(): boolean
    peek_next_sample(pad: GstBase.AggregatorPad): Gst.Sample | null
    selected_samples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_src_caps(caps: Gst.Caps): void
    simple_get_next_time(): Gst.ClockTime
    update_segment(segment: Gst.Segment): void
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoAggregator */
    vfunc_aggregate_frames(outbuffer: Gst.Buffer): Gst.FlowReturn
    vfunc_create_output_buffer(outbuffer: Gst.Buffer): Gst.FlowReturn
    vfunc_find_best_format(downstream_caps: Gst.Caps, best_info: VideoInfo, at_least_one_alpha: boolean): void
    vfunc_update_caps(caps: Gst.Caps): Gst.Caps
    /* Virtual methods of GstBase.Aggregator */
    vfunc_aggregate(timeout: boolean): Gst.FlowReturn
    vfunc_clip(aggregator_pad: GstBase.AggregatorPad, buf: Gst.Buffer): Gst.Buffer
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    vfunc_fixate_src_caps(caps: Gst.Caps): Gst.Caps
    vfunc_flush(): Gst.FlowReturn
    vfunc_get_next_time(): Gst.ClockTime
    vfunc_negotiate(): boolean
    vfunc_negotiated_src_caps(caps: Gst.Caps): boolean
    vfunc_peek_next_sample(aggregator_pad: GstBase.AggregatorPad): Gst.Sample | null
    vfunc_propose_allocation(pad: GstBase.AggregatorPad, decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_sink_event(aggregator_pad: GstBase.AggregatorPad, event: Gst.Event): boolean
    vfunc_sink_event_pre_queue(aggregator_pad: GstBase.AggregatorPad, event: Gst.Event): Gst.FlowReturn
    vfunc_sink_query(aggregator_pad: GstBase.AggregatorPad, query: Gst.Query): boolean
    vfunc_sink_query_pre_queue(aggregator_pad: GstBase.AggregatorPad, query: Gst.Query): boolean
    vfunc_src_activate(mode: Gst.PadMode, active: boolean): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_update_src_caps(caps: Gst.Caps): [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps | null ]
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: (($obj: VideoAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    connect_after(sigName: "samples-selected", callback: (($obj: VideoAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoAggregator) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoAggregator) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoAggregator, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoAggregator, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoAggregator, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoAggregator, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-upstream-latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time-selection", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoAggregator_ConstructProps)
    _init (config?: VideoAggregator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoAggregatorConvertPad_ConstructProps extends VideoAggregatorPad_ConstructProps {
    converter_config?: Gst.Structure
}
export class VideoAggregatorConvertPad {
    /* Properties of GstVideo.VideoAggregatorConvertPad */
    converter_config: Gst.Structure
    /* Properties of GstVideo.VideoAggregatorPad */
    max_last_buffer_repeat: number
    repeat_after_eos: boolean
    zorder: number
    /* Properties of GstBase.AggregatorPad */
    emit_signals: boolean
    /* Properties of Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoAggregatorPad */
    info: VideoInfo
    /* Fields of GstBase.AggregatorPad */
    segment: Gst.Segment
    /* Fields of Gst.Pad */
    object: Gst.Object
    element_private: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo.VideoAggregatorConvertPad */
    update_conversion_info(): void
    /* Methods of GstVideo.VideoAggregatorPad */
    get_current_buffer(): Gst.Buffer
    get_prepared_frame(): VideoFrame
    has_current_buffer(): boolean
    set_needs_alpha(needs_alpha: boolean): void
    /* Methods of GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoAggregatorConvertPad */
    vfunc_create_conversion_info(agg: VideoAggregator, conversion_info: VideoInfo): void
    /* Virtual methods of GstVideo.VideoAggregatorPad */
    vfunc_clean_frame(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void
    vfunc_prepare_frame(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): boolean
    vfunc_update_conversion_info(): void
    /* Virtual methods of GstBase.AggregatorPad */
    vfunc_flush(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorConvertPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorConvertPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst.Pad */
    connect(sigName: "linked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregatorConvertPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregatorConvertPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::converter-config", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zorder", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoAggregatorConvertPad_ConstructProps)
    _init (config?: VideoAggregatorConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoAggregatorPad_ConstructProps extends GstBase.AggregatorPad_ConstructProps {
    max_last_buffer_repeat?: number
    repeat_after_eos?: boolean
    zorder?: number
}
export class VideoAggregatorPad {
    /* Properties of GstVideo.VideoAggregatorPad */
    max_last_buffer_repeat: number
    repeat_after_eos: boolean
    zorder: number
    /* Properties of GstBase.AggregatorPad */
    emit_signals: boolean
    /* Properties of Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoAggregatorPad */
    info: VideoInfo
    /* Fields of GstBase.AggregatorPad */
    segment: Gst.Segment
    /* Fields of Gst.Pad */
    object: Gst.Object
    element_private: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo.VideoAggregatorPad */
    get_current_buffer(): Gst.Buffer
    get_prepared_frame(): VideoFrame
    has_current_buffer(): boolean
    set_needs_alpha(needs_alpha: boolean): void
    /* Methods of GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoAggregatorPad */
    vfunc_clean_frame(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void
    vfunc_prepare_frame(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): boolean
    vfunc_update_conversion_info(): void
    /* Virtual methods of GstBase.AggregatorPad */
    vfunc_flush(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst.Pad */
    connect(sigName: "linked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zorder", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoAggregatorPad_ConstructProps)
    _init (config?: VideoAggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
export class VideoBufferPool {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoBufferPool */
    bufferpool: Gst.BufferPool
    priv: VideoBufferPoolPrivate
    /* Fields of Gst.BufferPool */
    object: Gst.Object
    flushing: number
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst.BufferPool */
    acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_config(): Gst.Structure
    get_options(): string[]
    has_option(option: string): boolean
    is_active(): boolean
    release_buffer(buffer: Gst.Buffer): void
    set_active(active: boolean): boolean
    set_config(config: Gst.Structure): boolean
    set_flushing(flushing: boolean): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gst.BufferPool */
    vfunc_acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_alloc_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_flush_start(): void
    vfunc_flush_stop(): void
    vfunc_free_buffer(buffer: Gst.Buffer): void
    vfunc_get_options(): string[]
    vfunc_release_buffer(buffer: Gst.Buffer): void
    vfunc_reset_buffer(buffer: Gst.Buffer): void
    vfunc_set_config(config: Gst.Structure): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoBufferPool_ConstructProps)
    _init (config?: VideoBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoBufferPool
    static $gtype: GObject.Type
}
export interface VideoDecoder_ConstructProps extends Gst.Element_ConstructProps {
    discard_corrupted_frames?: boolean
    max_errors?: number
    min_force_key_unit_interval?: number
    qos?: boolean
}
export class VideoDecoder {
    /* Properties of GstVideo.VideoDecoder */
    discard_corrupted_frames: boolean
    max_errors: number
    min_force_key_unit_interval: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo.VideoDecoder */
    add_to_frame(n_bytes: number): void
    allocate_output_buffer(): Gst.Buffer
    allocate_output_frame(frame: VideoCodecFrame): Gst.FlowReturn
    allocate_output_frame_with_params(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    drop_frame(frame: VideoCodecFrame): Gst.FlowReturn
    finish_frame(frame: VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool
    get_estimate_rate(): number
    get_frame(frame_number: number): VideoCodecFrame
    get_frames(): VideoCodecFrame[]
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_decode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff
    get_max_errors(): number
    get_needs_format(): boolean
    get_needs_sync_point(): boolean
    get_oldest_frame(): VideoCodecFrame
    get_output_state(): VideoCodecState
    get_packetized(): boolean
    get_pending_frame_size(): number
    get_qos_proportion(): number
    have_frame(): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    release_frame(frame: VideoCodecFrame): void
    request_sync_point(frame: VideoCodecFrame, flags: VideoDecoderRequestSyncPointFlags): void
    set_estimate_rate(enabled: boolean): void
    set_interlaced_output_state(fmt: VideoFormat, interlace_mode: VideoInterlaceMode, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_max_errors(num: number): void
    set_needs_format(enabled: boolean): void
    set_needs_sync_point(enabled: boolean): void
    set_output_state(fmt: VideoFormat, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    set_packetized(packetized: boolean): void
    set_use_default_pad_acceptcaps(use: boolean): void
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoDecoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_drain(): Gst.FlowReturn
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(frame: VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoDecoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoDecoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoDecoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoDecoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoDecoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoDecoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoDecoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoDecoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-errors", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoDecoder_ConstructProps)
    _init (config?: VideoDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoEncoder_ConstructProps extends Gst.Element_ConstructProps {
    min_force_key_unit_interval?: number
    qos?: boolean
}
export class VideoEncoder {
    /* Properties of GstVideo.VideoEncoder */
    min_force_key_unit_interval: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo.VideoEncoder */
    allocate_output_buffer(size: number): Gst.Buffer
    allocate_output_frame(frame: VideoCodecFrame, size: number): Gst.FlowReturn
    finish_frame(frame: VideoCodecFrame): Gst.FlowReturn
    finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_frame(frame_number: number): VideoCodecFrame
    get_frames(): VideoCodecFrame[]
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_encode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff
    get_min_force_key_unit_interval(): Gst.ClockTime
    get_oldest_frame(): VideoCodecFrame
    get_output_state(): VideoCodecState
    is_qos_enabled(): boolean
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    set_headers(headers: Gst.Buffer[]): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_min_force_key_unit_interval(interval: Gst.ClockTime): void
    set_min_pts(min_pts: Gst.ClockTime): void
    set_output_state(caps: Gst.Caps, reference?: VideoCodecState | null): VideoCodecState
    set_qos_enabled(enabled: boolean): void
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gst.Preset */
    delete_preset(name: string): boolean
    get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    get_preset_names(): string[]
    get_property_names(): string[]
    is_editable(): boolean
    load_preset(name: string): boolean
    rename_preset(old_name: string, new_name: string): boolean
    save_preset(name: string): boolean
    set_meta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of GstVideo.VideoEncoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_pre_push(frame: VideoCodecFrame): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean
    vfunc_delete_preset(name: string): boolean
    vfunc_get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    vfunc_get_preset_names(): string[]
    vfunc_get_property_names(): string[]
    vfunc_load_preset(name: string): boolean
    vfunc_rename_preset(old_name: string, new_name: string): boolean
    vfunc_save_preset(name: string): boolean
    vfunc_set_meta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoEncoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoEncoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoEncoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoEncoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoEncoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoEncoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoEncoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoEncoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoEncoder_ConstructProps)
    _init (config?: VideoEncoder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_app_dir(): string | null
    static set_app_dir(app_dir: string): boolean
    static $gtype: GObject.Type
}
export interface VideoFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
export class VideoFilter {
    /* Properties of GstBase.BaseTransform */
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoFilter */
    element: GstBase.BaseTransform
    negotiated: boolean
    in_info: VideoInfo
    out_info: VideoInfo
    /* Fields of GstBase.BaseTransform */
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    have_segment: boolean
    segment: Gst.Segment
    queued_buf: Gst.Buffer
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase.BaseTransform */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    is_in_place(): boolean
    is_passthrough(): boolean
    is_qos_enabled(): boolean
    reconfigure(): boolean
    reconfigure_sink(): void
    reconfigure_src(): void
    set_gap_aware(gap_aware: boolean): void
    set_in_place(in_place: boolean): void
    set_passthrough(passthrough: boolean): void
    set_prefer_passthrough(prefer_passthrough: boolean): void
    set_qos_enabled(enabled: boolean): void
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    update_src_caps(updated_caps: Gst.Caps): boolean
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoFilter */
    vfunc_set_info(incaps: Gst.Caps, in_info: VideoInfo, outcaps: Gst.Caps, out_info: VideoInfo): boolean
    vfunc_transform_frame(inframe: VideoFrame, outframe: VideoFrame): Gst.FlowReturn
    vfunc_transform_frame_ip(frame: VideoFrame): Gst.FlowReturn
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstBase.BaseTransform */
    vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfunc_before_transform(buffer: Gst.Buffer): void
    vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_filter_meta(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfunc_generate_output(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_get_unit_size(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfunc_prepare_output_buffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfunc_transform_size(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoFilter, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoFilter, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoFilter, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoFilter, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoFilter_ConstructProps)
    _init (config?: VideoFilter_ConstructProps): void
    static $gtype: GObject.Type
}
export class VideoMultiviewFlagsSet {
    static name: string
}
export interface VideoSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    show_preroll_frame?: boolean
}
export class VideoSink {
    /* Properties of GstVideo.VideoSink */
    show_preroll_frame: boolean
    /* Properties of GstBase.BaseSink */
    async: boolean
    blocksize: number
    enable_last_sample: boolean
    readonly last_sample: Gst.Sample
    max_bitrate: number
    max_lateness: number
    processing_deadline: number
    qos: boolean
    render_delay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttle_time: number
    ts_offset: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo.VideoSink */
    element: GstBase.BaseSink
    width: number
    height: number
    /* Fields of GstBase.BaseSink */
    sinkpad: Gst.Pad
    pad_mode: Gst.PadMode
    offset: number
    can_activate_pull: boolean
    can_activate_push: boolean
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    eos: boolean
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase.BaseSink */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    get_blocksize(): number
    get_drop_out_of_segment(): boolean
    get_last_sample(): Gst.Sample | null
    get_latency(): Gst.ClockTime
    get_max_bitrate(): number
    get_max_lateness(): number
    get_processing_deadline(): Gst.ClockTime
    get_render_delay(): Gst.ClockTime
    get_stats(): Gst.Structure
    get_sync(): boolean
    get_throttle_time(): number
    get_ts_offset(): Gst.ClockTimeDiff
    is_async_enabled(): boolean
    is_last_sample_enabled(): boolean
    is_qos_enabled(): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstream_live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async_enabled(enabled: boolean): void
    set_blocksize(blocksize: number): void
    set_drop_out_of_segment(drop_out_of_segment: boolean): void
    set_last_sample_enabled(enabled: boolean): void
    set_max_bitrate(max_bitrate: number): void
    set_max_lateness(max_lateness: number): void
    set_processing_deadline(processing_deadline: Gst.ClockTime): void
    set_qos_enabled(enabled: boolean): void
    set_render_delay(delay: Gst.ClockTime): void
    set_sync(sync: boolean): void
    set_throttle_time(throttle: number): void
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_clock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_preroll(): Gst.FlowReturn
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GstVideo.VideoSink */
    vfunc_set_info(caps: Gst.Caps, info: VideoInfo): boolean
    vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase.BaseSink */
    vfunc_activate_pull(active: boolean): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter: Gst.Caps): Gst.Caps
    vfunc_get_times(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static center_rect(src: VideoRectangle, dst: VideoRectangle, result: VideoRectangle, scaling: boolean): void
    static $gtype: GObject.Type
}
export abstract class ColorBalanceChannelClass {
    /* Fields of GstVideo.ColorBalanceChannelClass */
    parent: GObject.ObjectClass
    value_changed: (channel: ColorBalanceChannel, value: number) => void
    static name: string
}
export abstract class ColorBalanceInterface {
    /* Fields of GstVideo.ColorBalanceInterface */
    iface: GObject.TypeInterface
    list_channels: (balance: ColorBalance) => ColorBalanceChannel[]
    set_value: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    get_value: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    get_balance_type: (balance: ColorBalance) => ColorBalanceType
    value_changed: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    static name: string
}
export abstract class NavigationInterface {
    /* Fields of GstVideo.NavigationInterface */
    iface: GObject.TypeInterface
    send_event: (navigation: Navigation, structure: Gst.Structure) => void
    static name: string
}
export class VideoAFDMeta {
    /* Fields of GstVideo.VideoAFDMeta */
    meta: Gst.Meta
    field: number
    spec: VideoAFDSpec
    afd: VideoAFDValue
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export class VideoAffineTransformationMeta {
    /* Fields of GstVideo.VideoAffineTransformationMeta */
    meta: Gst.Meta
    matrix: number[]
    /* Methods of GstVideo.VideoAffineTransformationMeta */
    apply_matrix(matrix: number[]): void
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export abstract class VideoAggregatorClass {
    /* Fields of GstVideo.VideoAggregatorClass */
    update_caps: (videoaggregator: VideoAggregator, caps: Gst.Caps) => Gst.Caps
    aggregate_frames: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    create_output_buffer: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    find_best_format: (vagg: VideoAggregator, downstream_caps: Gst.Caps, best_info: VideoInfo, at_least_one_alpha: boolean) => void
    static name: string
}
export abstract class VideoAggregatorConvertPadClass {
    /* Fields of GstVideo.VideoAggregatorConvertPadClass */
    parent_class: VideoAggregatorPadClass
    create_conversion_info: (pad: VideoAggregatorConvertPad, agg: VideoAggregator, conversion_info: VideoInfo) => void
    static name: string
}
export class VideoAggregatorConvertPadPrivate {
    static name: string
}
export abstract class VideoAggregatorPadClass {
    /* Fields of GstVideo.VideoAggregatorPadClass */
    parent_class: GstBase.AggregatorPadClass
    update_conversion_info: (pad: VideoAggregatorPad) => void
    prepare_frame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame) => boolean
    clean_frame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, prepared_frame: VideoFrame) => void
    _gst_reserved: object[]
    static name: string
}
export class VideoAggregatorPadPrivate {
    static name: string
}
export class VideoAggregatorPrivate {
    static name: string
}
export class VideoAlignment {
    /* Fields of GstVideo.VideoAlignment */
    padding_top: number
    padding_bottom: number
    padding_left: number
    padding_right: number
    stride_align: number[]
    /* Methods of GstVideo.VideoAlignment */
    reset(): void
    static name: string
}
export class VideoAncillary {
    /* Fields of GstVideo.VideoAncillary */
    DID: number
    SDID_block_number: number
    data_count: number
    data: Uint8Array[]
    static name: string
}
export class VideoBarMeta {
    /* Fields of GstVideo.VideoBarMeta */
    meta: Gst.Meta
    field: number
    is_letterbox: boolean
    bar_data1: number
    bar_data2: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export abstract class VideoBufferPoolClass {
    /* Fields of GstVideo.VideoBufferPoolClass */
    parent_class: Gst.BufferPoolClass
    static name: string
}
export class VideoBufferPoolPrivate {
    static name: string
}
export class VideoCaptionMeta {
    /* Fields of GstVideo.VideoCaptionMeta */
    meta: Gst.Meta
    caption_type: VideoCaptionType
    data: Uint8Array[]
    size: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export class VideoChromaResample {
    /* Methods of GstVideo.VideoChromaResample */
    free(): void
    get_info(n_lines: number, offset: number): void
    static name: string
}
export class VideoCodecFrame {
    /* Fields of GstVideo.VideoCodecFrame */
    system_frame_number: number
    dts: Gst.ClockTime
    pts: Gst.ClockTime
    duration: Gst.ClockTime
    distance_from_sync: number
    input_buffer: Gst.Buffer
    output_buffer: Gst.Buffer
    deadline: Gst.ClockTime
    /* Methods of GstVideo.VideoCodecFrame */
    get_user_data(): object | null
    ref(): VideoCodecFrame
    set_user_data(notify: GLib.DestroyNotify): void
    unref(): void
    static name: string
}
export class VideoCodecState {
    /* Fields of GstVideo.VideoCodecState */
    info: VideoInfo
    caps: Gst.Caps
    codec_data: Gst.Buffer
    allocation_caps: Gst.Caps
    /* Methods of GstVideo.VideoCodecState */
    ref(): VideoCodecState
    unref(): void
    static name: string
}
export class VideoColorPrimariesInfo {
    /* Fields of GstVideo.VideoColorPrimariesInfo */
    primaries: VideoColorPrimaries
    Wx: number
    Wy: number
    Rx: number
    Ry: number
    Gx: number
    Gy: number
    Bx: number
    By: number
    static name: string
}
export class VideoColorVolumeTransformation {
    /* Fields of GstVideo.VideoColorVolumeTransformation */
    window_upper_left_corner_x: number
    window_upper_left_corner_y: number
    window_lower_right_corner_x: number
    window_lower_right_corner_y: number
    center_of_ellipse_x: number
    center_of_ellipse_y: number
    rotation_angle: number
    semimajor_axis_internal_ellipse: number
    semimajor_axis_external_ellipse: number
    semiminor_axis_external_ellipse: number
    overlap_process_option: number
    maxscl: number[]
    average_maxrgb: number
    num_distribution_maxrgb_percentiles: number
    distribution_maxrgb_percentages: Uint8Array[]
    distribution_maxrgb_percentiles: number[]
    fraction_bright_pixels: number
    tone_mapping_flag: number
    knee_point_x: number
    knee_point_y: number
    num_bezier_curve_anchors: number
    bezier_curve_anchors: number[]
    color_saturation_mapping_flag: number
    color_saturation_weight: number
    static name: string
}
export class VideoColorimetry {
    /* Fields of GstVideo.VideoColorimetry */
    range: VideoColorRange
    matrix: VideoColorMatrix
    transfer: VideoTransferFunction
    primaries: VideoColorPrimaries
    /* Methods of GstVideo.VideoColorimetry */
    from_string(color: string): boolean
    is_equal(other: VideoColorimetry): boolean
    matches(color: string): boolean
    to_string(): string | null
    static name: string
}
export class VideoContentLightLevel {
    /* Fields of GstVideo.VideoContentLightLevel */
    max_content_light_level: number
    max_frame_average_light_level: number
    /* Methods of GstVideo.VideoContentLightLevel */
    add_to_caps(caps: Gst.Caps): boolean
    from_caps(caps: Gst.Caps): boolean
    from_string(level: string): boolean
    init(): void
    is_equal(other: VideoContentLightLevel): boolean
    to_string(): string
    static name: string
}
export class VideoConverter {
    /* Methods of GstVideo.VideoConverter */
    frame(src: VideoFrame, dest: VideoFrame): void
    free(): void
    get_config(): Gst.Structure
    set_config(config: Gst.Structure): boolean
    static name: string
}
export class VideoCropMeta {
    /* Fields of GstVideo.VideoCropMeta */
    meta: Gst.Meta
    x: number
    y: number
    width: number
    height: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export abstract class VideoDecoderClass {
    /* Fields of GstVideo.VideoDecoderClass */
    open: (decoder: VideoDecoder) => boolean
    close: (decoder: VideoDecoder) => boolean
    start: (decoder: VideoDecoder) => boolean
    stop: (decoder: VideoDecoder) => boolean
    parse: (decoder: VideoDecoder, frame: VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean) => Gst.FlowReturn
    set_format: (decoder: VideoDecoder, state: VideoCodecState) => boolean
    reset: (decoder: VideoDecoder, hard: boolean) => boolean
    finish: (decoder: VideoDecoder) => Gst.FlowReturn
    handle_frame: (decoder: VideoDecoder, frame: VideoCodecFrame) => Gst.FlowReturn
    sink_event: (decoder: VideoDecoder, event: Gst.Event) => boolean
    src_event: (decoder: VideoDecoder, event: Gst.Event) => boolean
    negotiate: (decoder: VideoDecoder) => boolean
    decide_allocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    propose_allocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    flush: (decoder: VideoDecoder) => boolean
    sink_query: (decoder: VideoDecoder, query: Gst.Query) => boolean
    src_query: (decoder: VideoDecoder, query: Gst.Query) => boolean
    getcaps: (decoder: VideoDecoder, filter: Gst.Caps) => Gst.Caps
    drain: (decoder: VideoDecoder) => Gst.FlowReturn
    transform_meta: (decoder: VideoDecoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    static name: string
}
export class VideoDecoderPrivate {
    static name: string
}
export abstract class VideoDirectionInterface {
    /* Fields of GstVideo.VideoDirectionInterface */
    iface: GObject.TypeInterface
    static name: string
}
export class VideoDither {
    /* Methods of GstVideo.VideoDither */
    free(): void
    line(line: object | null, x: number, y: number, width: number): void
    static name: string
}
export abstract class VideoEncoderClass {
    /* Fields of GstVideo.VideoEncoderClass */
    open: (encoder: VideoEncoder) => boolean
    close: (encoder: VideoEncoder) => boolean
    start: (encoder: VideoEncoder) => boolean
    stop: (encoder: VideoEncoder) => boolean
    set_format: (encoder: VideoEncoder, state: VideoCodecState) => boolean
    handle_frame: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    reset: (encoder: VideoEncoder, hard: boolean) => boolean
    finish: (encoder: VideoEncoder) => Gst.FlowReturn
    pre_push: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    getcaps: (enc: VideoEncoder, filter: Gst.Caps) => Gst.Caps
    sink_event: (encoder: VideoEncoder, event: Gst.Event) => boolean
    src_event: (encoder: VideoEncoder, event: Gst.Event) => boolean
    negotiate: (encoder: VideoEncoder) => boolean
    decide_allocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    propose_allocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    flush: (encoder: VideoEncoder) => boolean
    sink_query: (encoder: VideoEncoder, query: Gst.Query) => boolean
    src_query: (encoder: VideoEncoder, query: Gst.Query) => boolean
    transform_meta: (encoder: VideoEncoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    static name: string
}
export class VideoEncoderPrivate {
    static name: string
}
export abstract class VideoFilterClass {
    /* Fields of GstVideo.VideoFilterClass */
    parent_class: GstBase.BaseTransformClass
    set_info: (filter: VideoFilter, incaps: Gst.Caps, in_info: VideoInfo, outcaps: Gst.Caps, out_info: VideoInfo) => boolean
    transform_frame: (filter: VideoFilter, inframe: VideoFrame, outframe: VideoFrame) => Gst.FlowReturn
    transform_frame_ip: (trans: VideoFilter, frame: VideoFrame) => Gst.FlowReturn
    static name: string
}
export class VideoFormatInfo {
    /* Fields of GstVideo.VideoFormatInfo */
    format: VideoFormat
    name: string
    description: string
    flags: VideoFormatFlags
    bits: number
    n_components: number
    shift: number[]
    depth: number[]
    pixel_stride: number[]
    n_planes: number
    plane: number[]
    poffset: number[]
    w_sub: number[]
    h_sub: number[]
    unpack_format: VideoFormat
    unpack_func: VideoFormatUnpack
    pack_lines: number
    pack_func: VideoFormatPack
    tile_mode: VideoTileMode
    tile_ws: number
    tile_hs: number
    /* Methods of GstVideo.VideoFormatInfo */
    component(plane: number): /* components */ number
    static name: string
}
export class VideoFrame {
    /* Fields of GstVideo.VideoFrame */
    info: VideoInfo
    flags: VideoFrameFlags
    buffer: Gst.Buffer
    meta: object
    id: number
    data: object[]
    map: Gst.MapInfo[]
    /* Methods of GstVideo.VideoFrame */
    copy(src: VideoFrame): boolean
    copy_plane(src: VideoFrame, plane: number): boolean
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
    static map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
}
export class VideoGLTextureUploadMeta {
    /* Fields of GstVideo.VideoGLTextureUploadMeta */
    meta: Gst.Meta
    texture_orientation: VideoGLTextureOrientation
    n_textures: number
    texture_type: VideoGLTextureType[]
    /* Methods of GstVideo.VideoGLTextureUploadMeta */
    upload(texture_id: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export class VideoHDR10Plus {
    /* Fields of GstVideo.VideoHDR10Plus */
    application_identifier: number
    application_version: number
    num_windows: number
    processing_window: VideoColorVolumeTransformation[]
    targeted_system_display_maximum_luminance: number
    targeted_system_display_actual_peak_luminance_flag: number
    num_rows_targeted_system_display_actual_peak_luminance: number
    num_cols_targeted_system_display_actual_peak_luminance: number
    targeted_system_display_actual_peak_luminance: Uint8Array[]
    mastering_display_actual_peak_luminance_flag: number
    num_rows_mastering_display_actual_peak_luminance: number
    num_cols_mastering_display_actual_peak_luminance: number
    mastering_display_actual_peak_luminance: Uint8Array[]
    static name: string
}
export class VideoHDRMeta {
    /* Fields of GstVideo.VideoHDRMeta */
    meta: Gst.Meta
    format: VideoHDRFormat
    data: number
    size: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export class VideoInfo {
    /* Fields of GstVideo.VideoInfo */
    finfo: VideoFormatInfo
    interlace_mode: VideoInterlaceMode
    flags: VideoFlags
    width: number
    height: number
    size: number
    views: number
    chroma_site: VideoChromaSite
    colorimetry: VideoColorimetry
    par_n: number
    par_d: number
    fps_n: number
    fps_d: number
    offset: number[]
    stride: number[]
    /* Methods of GstVideo.VideoInfo */
    align(align: VideoAlignment): boolean
    align_full(align: VideoAlignment): [ /* returnType */ boolean, /* plane_size */ number | null ]
    convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_value */ number ]
    copy(): VideoInfo
    free(): void
    is_equal(other: VideoInfo): boolean
    set_format(format: VideoFormat, width: number, height: number): boolean
    set_interlaced_format(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean
    to_caps(): Gst.Caps
    static name: string
    static new(): VideoInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): VideoInfo
    static from_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
    static init(): /* info */ VideoInfo
}
export class VideoMasteringDisplayInfo {
    /* Fields of GstVideo.VideoMasteringDisplayInfo */
    display_primaries: VideoMasteringDisplayInfoCoordinates[]
    white_point: VideoMasteringDisplayInfoCoordinates
    max_display_mastering_luminance: number
    min_display_mastering_luminance: number
    /* Methods of GstVideo.VideoMasteringDisplayInfo */
    add_to_caps(caps: Gst.Caps): boolean
    from_caps(caps: Gst.Caps): boolean
    init(): void
    is_equal(other: VideoMasteringDisplayInfo): boolean
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static from_string(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
}
export class VideoMasteringDisplayInfoCoordinates {
    /* Fields of GstVideo.VideoMasteringDisplayInfoCoordinates */
    x: number
    y: number
    static name: string
}
export class VideoMeta {
    /* Fields of GstVideo.VideoMeta */
    meta: Gst.Meta
    buffer: Gst.Buffer
    flags: VideoFrameFlags
    format: VideoFormat
    id: number
    width: number
    height: number
    n_planes: number
    offset: number[]
    stride: number[]
    map: (meta: VideoMeta, plane: number, info: Gst.MapInfo, data: object, stride: number, flags: Gst.MapFlags) => boolean
    unmap: (meta: VideoMeta, plane: number, info: Gst.MapInfo) => boolean
    alignment: VideoAlignment
    /* Methods of GstVideo.VideoMeta */
    get_plane_height(): [ /* returnType */ boolean, /* plane_height */ number[] ]
    get_plane_size(): [ /* returnType */ boolean, /* plane_size */ number[] ]
    set_alignment(alignment: VideoAlignment): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export class VideoMetaTransform {
    /* Fields of GstVideo.VideoMetaTransform */
    in_info: VideoInfo
    out_info: VideoInfo
    static name: string
    /* Static methods and pseudo-constructors */
    static scale_get_quark(): GLib.Quark
}
export abstract class VideoOrientationInterface {
    /* Fields of GstVideo.VideoOrientationInterface */
    iface: GObject.TypeInterface
    get_hflip: (video_orientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    get_vflip: (video_orientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    get_hcenter: (video_orientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    get_vcenter: (video_orientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    set_hflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    set_vflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    set_hcenter: (video_orientation: VideoOrientation, center: number) => boolean
    set_vcenter: (video_orientation: VideoOrientation, center: number) => boolean
    static name: string
}
export class VideoOverlayComposition {
    /* Methods of GstVideo.VideoOverlayComposition */
    add_rectangle(rectangle: VideoOverlayRectangle): void
    blend(video_buf: VideoFrame): boolean
    copy(): VideoOverlayComposition
    get_rectangle(n: number): VideoOverlayRectangle
    get_seqnum(): number
    make_writable(): VideoOverlayComposition
    n_rectangles(): number
    static name: string
    static new(rectangle: VideoOverlayRectangle): VideoOverlayComposition
    constructor(rectangle: VideoOverlayRectangle)
    /* Static methods and pseudo-constructors */
    static new(rectangle: VideoOverlayRectangle): VideoOverlayComposition
}
export class VideoOverlayCompositionMeta {
    /* Fields of GstVideo.VideoOverlayCompositionMeta */
    meta: Gst.Meta
    overlay: VideoOverlayComposition
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export abstract class VideoOverlayInterface {
    /* Fields of GstVideo.VideoOverlayInterface */
    iface: GObject.TypeInterface
    expose: (overlay: VideoOverlay) => void
    handle_events: (overlay: VideoOverlay, handle_events: boolean) => void
    set_render_rectangle: (overlay: VideoOverlay, x: number, y: number, width: number, height: number) => void
    set_window_handle: (overlay: VideoOverlay, handle: any) => void
    static name: string
}
export class VideoOverlayRectangle {
    /* Methods of GstVideo.VideoOverlayRectangle */
    copy(): VideoOverlayRectangle
    get_flags(): VideoOverlayFormatFlags
    get_global_alpha(): number
    get_pixels_argb(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_raw(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_unscaled_argb(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_unscaled_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_unscaled_raw(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_render_rectangle(): [ /* returnType */ boolean, /* render_x */ number | null, /* render_y */ number | null, /* render_width */ number | null, /* render_height */ number | null ]
    get_seqnum(): number
    set_global_alpha(global_alpha: number): void
    set_render_rectangle(render_x: number, render_y: number, render_width: number, render_height: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_raw(pixels: Gst.Buffer, render_x: number, render_y: number, render_width: number, render_height: number, flags: VideoOverlayFormatFlags): VideoOverlayRectangle
}
export class VideoRectangle {
    /* Fields of GstVideo.VideoRectangle */
    x: number
    y: number
    w: number
    h: number
    static name: string
}
export class VideoRegionOfInterestMeta {
    /* Fields of GstVideo.VideoRegionOfInterestMeta */
    meta: Gst.Meta
    roi_type: GLib.Quark
    id: number
    parent_id: number
    x: number
    y: number
    w: number
    h: number
    params: object[]
    /* Methods of GstVideo.VideoRegionOfInterestMeta */
    add_param(s: Gst.Structure): void
    get_param(name: string): Gst.Structure | null
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export class VideoResampler {
    /* Fields of GstVideo.VideoResampler */
    in_size: number
    out_size: number
    max_taps: number
    n_phases: number
    offset: number
    phase: number
    n_taps: number
    taps: number
    /* Methods of GstVideo.VideoResampler */
    clear(): void
    init(method: VideoResamplerMethod, flags: VideoResamplerFlags, n_phases: number, n_taps: number, shift: number, in_size: number, out_size: number, options: Gst.Structure): boolean
    static name: string
}
export class VideoScaler {
    /* Methods of GstVideo.VideoScaler */
    TODO_2d(vscale: VideoScaler, format: VideoFormat, src: object | null, src_stride: number, dest: object | null, dest_stride: number, x: number, y: number, width: number, height: number): void
    free(): void
    get_coeff(out_offset: number, in_offset: number, n_taps: number): number
    get_max_taps(): number
    horizontal(format: VideoFormat, src: object | null, dest: object | null, dest_offset: number, width: number): void
    vertical(format: VideoFormat, src_lines: object | null, dest: object | null, dest_offset: number, width: number): void
    static name: string
}
export abstract class VideoSinkClass {
    /* Fields of GstVideo.VideoSinkClass */
    parent_class: GstBase.BaseSinkClass
    show_frame: (video_sink: VideoSink, buf: Gst.Buffer) => Gst.FlowReturn
    set_info: (video_sink: VideoSink, caps: Gst.Caps, info: VideoInfo) => boolean
    static name: string
}
export class VideoSinkPrivate {
    static name: string
}
export class VideoTimeCode {
    /* Fields of GstVideo.VideoTimeCode */
    config: VideoTimeCodeConfig
    hours: number
    minutes: number
    seconds: number
    frames: number
    field_count: number
    /* Methods of GstVideo.VideoTimeCode */
    add_frames(frames: number): void
    add_interval(tc_inter: VideoTimeCodeInterval): VideoTimeCode | null
    clear(): void
    compare(tc2: VideoTimeCode): number
    copy(): VideoTimeCode
    frames_since_daily_jam(): number
    free(): void
    increment_frame(): void
    init(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime | null, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): void
    init_from_date_time(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): void
    init_from_date_time_full(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): boolean
    is_valid(): boolean
    nsec_since_daily_jam(): number
    to_date_time(): GLib.DateTime | null
    to_string(): string
    static name: string
    static new(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCode
    constructor(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number)
    /* Static methods and pseudo-constructors */
    static new(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCode
    static new_empty(): VideoTimeCode
    static new_from_date_time(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): VideoTimeCode
    static new_from_date_time_full(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): VideoTimeCode
    static new_from_string(tc_str: string): VideoTimeCode
}
export class VideoTimeCodeConfig {
    /* Fields of GstVideo.VideoTimeCodeConfig */
    fps_n: number
    fps_d: number
    flags: VideoTimeCodeFlags
    latest_daily_jam: GLib.DateTime
    static name: string
}
export class VideoTimeCodeInterval {
    /* Fields of GstVideo.VideoTimeCodeInterval */
    hours: number
    minutes: number
    seconds: number
    frames: number
    /* Methods of GstVideo.VideoTimeCodeInterval */
    clear(): void
    copy(): VideoTimeCodeInterval
    free(): void
    init(hours: number, minutes: number, seconds: number, frames: number): void
    static name: string
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    constructor(hours: number, minutes: number, seconds: number, frames: number)
    /* Static methods and pseudo-constructors */
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    static new_from_string(tc_inter_str: string): VideoTimeCodeInterval
}
export class VideoTimeCodeMeta {
    /* Fields of GstVideo.VideoTimeCodeMeta */
    meta: Gst.Meta
    tc: VideoTimeCode
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export class VideoVBIEncoder {
    /* Methods of GstVideo.VideoVBIEncoder */
    add_ancillary(composite: boolean, DID: number, SDID_block_number: number, data: Uint8Array[]): boolean
    copy(): VideoVBIEncoder
    free(): void
    write_line(data: number): void
    static name: string
    static new(format: VideoFormat, pixel_width: number): VideoVBIEncoder
    constructor(format: VideoFormat, pixel_width: number)
    /* Static methods and pseudo-constructors */
    static new(format: VideoFormat, pixel_width: number): VideoVBIEncoder
}
export class VideoVBIParser {
    /* Methods of GstVideo.VideoVBIParser */
    add_line(data: Uint8Array[]): void
    copy(): VideoVBIParser
    free(): void
    get_ancillary(): [ /* returnType */ VideoVBIParserResult, /* anc */ VideoAncillary ]
    static name: string
    static new(format: VideoFormat, pixel_width: number): VideoVBIParser
    constructor(format: VideoFormat, pixel_width: number)
    /* Static methods and pseudo-constructors */
    static new(format: VideoFormat, pixel_width: number): VideoVBIParser
}