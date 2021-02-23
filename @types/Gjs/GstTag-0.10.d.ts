/**
 * GstTag-0.10
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Gst from './Gst-0.10';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum DemuxResult {
    BROKEN_TAG,
    AGAIN,
    OK,
}
export enum ImageType {
    NONE,
    UNDEFINED,
    FRONT_COVER,
    BACK_COVER,
    LEAFLET_PAGE,
    MEDIUM,
    LEAD_ARTIST,
    ARTIST,
    CONDUCTOR,
    BAND_ORCHESTRA,
    COMPOSER,
    LYRICIST,
    RECORDING_LOCATION,
    DURING_RECORDING,
    DURING_PERFORMANCE,
    VIDEO_CAPTURE,
    FISH,
    ILLUSTRATION,
    ARTIST_LOGO,
    PUBLISHER_STUDIO_LOGO,
}
export const CDDA_CDDB_DISCID: string
export const CDDA_CDDB_DISCID_FULL: string
export const CDDA_MUSICBRAINZ_DISCID: string
export const CDDA_MUSICBRAINZ_DISCID_FULL: string
export const CMML_CLIP: string
export const CMML_HEAD: string
export const CMML_STREAM: string
export const MUSICBRAINZ_ALBUMARTISTID: string
export const MUSICBRAINZ_ALBUMID: string
export const MUSICBRAINZ_ARTISTID: string
export const MUSICBRAINZ_TRACKID: string
export const MUSICBRAINZ_TRMID: string
export function freeform_string_to_utf8(data: string, size: any, env_vars: string[]): string
export function from_id3_tag(id3_tag: string): string
export function from_id3_user_tag(type: string, id3_user_tag: string): string
export function from_vorbis_tag(vorbis_tag: string): string
export function get_language_code_iso_639_1(lang_code: string): string
export function get_language_code_iso_639_2B(lang_code: string): string
export function get_language_code_iso_639_2T(lang_code: string): string
export function get_language_codes(): string[]
export function get_language_name(language_code: string): string
export function gst_vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void
export function id3_genre_count(): any
export function id3_genre_get(id: any): string
export function image_data_to_image_buffer(image_data: any[], image_data_len: any, image_type: ImageType): Gst.Buffer
export function list_add_id3_image(tag_list: Gst.TagList, image_data: any[], image_data_len: any, id3_picture_type: any): any
export function list_from_vorbiscomment_buffer(buffer: Gst.Buffer, id_data: any[], id_data_length: any, vendor_string: string[]): Gst.TagList
export function list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList
export function list_new_from_id3v1(data: any[]): Gst.TagList
export function list_to_vorbiscomment_buffer(list: Gst.TagList, id_data: any[], id_data_length: any, vendor_string: string): Gst.Buffer
export function list_to_xmp_buffer(list: Gst.TagList, read_only: any): Gst.Buffer
export function parse_extended_comment(ext_comment: string, key: string[], lang: string[], value: string[], fail_if_no_key: any): any
export function register_musicbrainz_tags(): void
export function to_id3_tag(gst_tag: string): string
export function to_vorbis_tag(gst_tag: string): string
export interface Demux_ConstructProps extends Gst.Element_ConstructProps {
}
export class Demux {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstTag-0.10.GstTag.Demux */
    element: Gst.Element
    priv: DemuxPrivate
    reserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: any
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
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
    parent: Gst.Object
    flags: any
    _gst_reserved: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): any
    provides_clock(): any
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): any
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): any
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): any
    remove_pad(pad: Gst.Pad): any
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: any, stop_type: Gst.SeekType, stop: any): any
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): any
    post_message(message: Gst.Message): any
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    is_locked_state(): any
    set_locked_state(locked_state: any): any
    sync_state_with_parent(): any
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: any): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): any
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    link_filtered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: any): any
    query_position(format: Gst.Format): [ /* returnType */ any, /* cur */ any ]
    query_duration(format: Gst.Format): [ /* returnType */ any, /* duration */ any ]
    query_convert(src_format: Gst.Format, src_val: any, dest_format: Gst.Format): [ /* returnType */ any, /* dest_val */ any ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): any
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): any
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
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
    /* Virtual methods of GstTag-0.10.GstTag.Demux */
    vfunc_identify_tag(buffer: Gst.Buffer, start_tag: any): [ /* returnType */ any, /* tag_size */ any ]
    vfunc_parse_tag(buffer: Gst.Buffer, start_tag: any, tags: Gst.TagList): [ /* returnType */ DemuxResult, /* tag_size */ any ]
    vfunc_merge_tags(start_tags: Gst.TagList, end_tags: Gst.TagList): Gst.TagList
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): any
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): any
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): any
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
    connect(sigName: "no-more-pads", callback: (($obj: Demux) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Demux) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Demux, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Demux, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Demux, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Demux, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Demux, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Demux, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Demux, object: any) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Demux, object: any) => void)): number
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Demux, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Demux, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Demux, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Demux, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Demux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Demux, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Demux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Demux, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Demux_ConstructProps)
    _init (config?: Demux_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class DemuxClass {
    /* Fields of GstTag-0.10.GstTag.DemuxClass */
    parent_class: Gst.ElementClass
    min_start_size: any
    min_end_size: any
    identify_tag: (demux: Demux, buffer: Gst.Buffer, start_tag: any) => [ /* returnType */ any, /* tag_size */ any ]
    parse_tag: (demux: Demux, buffer: Gst.Buffer, start_tag: any, tags: Gst.TagList) => [ /* returnType */ DemuxResult, /* tag_size */ any ]
    merge_tags: (demux: Demux, start_tags: Gst.TagList, end_tags: Gst.TagList) => Gst.TagList
    reserved: any[]
    static name: string
}
export class DemuxPrivate {
    static name: string
}