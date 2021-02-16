/**
 * GUPnPAV-1.0
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum CDSLastChangeEvent {
    INVALID,
    OBJECT_ADDED,
    OBJECT_REMOVED,
    OBJECT_MODIFIED,
    ST_DONE,
}
export enum DIDLLiteFragmentResult {
    OK,
    CURRENT_BAD_XML,
    NEW_BAD_XML,
    CURRENT_INVALID,
    NEW_INVALID,
    REQUIRED_TAG,
    READONLY_TAG,
    MISMATCH,
    UNKNOWN_ERROR,
}
export enum ProtocolError {
    INVALID_SYNTAX,
    OTHER,
}
export enum SearchCriteriaOp {
    EQ,
    NEQ,
    LESS,
    LEQ,
    GREATER,
    GEQ,
    CONTAINS,
    DOES_NOT_CONTAIN,
    DERIVED_FROM,
    EXISTS,
}
export enum SearchCriteriaParserError {
    SEARCH_CRITERIA_PARSER_ERROR_FAILED,
}
export enum DLNAConversion {
    NONE,
    TRANSCODED,
}
export enum DLNAFlags {
    NONE,
    SENDER_PACED,
    TIME_BASED_SEEK,
    BYTE_BASED_SEEK,
    PLAY_CONTAINER,
    S0_INCREASE,
    SN_INCREASE,
    RTSP_PAUSE,
    STREAMING_TRANSFER_MODE,
    INTERACTIVE_TRANSFER_MODE,
    BACKGROUND_TRANSFER_MODE,
    CONNECTION_STALL,
    DLNA_V15,
    LINK_PROTECTED_CONTENT,
    CLEARTEXT_BYTESEEK_FULL,
    LOP_CLEARTEXT_BYTESEEK,
}
export enum DLNAOperation {
    NONE,
    RANGE,
    TIMESEEK,
}
export enum OCMFlags {
    NONE,
    UPLOAD,
    CREATE_CONTAINER,
    DESTROYABLE,
    UPLOAD_DESTROYABLE,
    CHANGE_METADATA,
}
export const DIDL_LITE_WRITER_NAMESPACE_DC: string
export const DIDL_LITE_WRITER_NAMESPACE_DLNA: string
export const DIDL_LITE_WRITER_NAMESPACE_PV: string
export const DIDL_LITE_WRITER_NAMESPACE_UPNP: string
export function protocol_error_quark(): GLib.Quark
export interface CDSLastChangeParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class CDSLastChangeParser {
    /* Fields of GUPnPAV.CDSLastChangeParser */
    parent: GObject.Object
    priv: CDSLastChangeParserPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.CDSLastChangeParser */
    parse(last_change: string): CDSLastChangeEntry[]
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
    connect(sigName: "notify", callback: (($obj: CDSLastChangeParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CDSLastChangeParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CDSLastChangeParser_ConstructProps)
    _init (config?: CDSLastChangeParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CDSLastChangeParser
    static $gtype: GObject.Type
}
export interface DIDLLiteContainer_ConstructProps extends DIDLLiteObject_ConstructProps {
    child_count?: number
    container_update_id?: number
    searchable?: boolean
    storage_used?: number
    total_deleted_child_count?: number
}
export class DIDLLiteContainer {
    /* Properties of GUPnPAV.DIDLLiteContainer */
    child_count: number
    container_update_id: number
    searchable: boolean
    storage_used: number
    total_deleted_child_count: number
    /* Properties of GUPnPAV.DIDLLiteObject */
    album: string
    album_art: string
    artist: string
    author: string
    creator: string
    date: string
    description: string
    dlna_managed: OCMFlags
    genre: string
    id: string
    parent_id: string
    restricted: boolean
    title: string
    track_number: number
    update_id: number
    upnp_class: string
    write_status: string
    /* Fields of GUPnPAV.DIDLLiteContainer */
    parent: DIDLLiteObject
    /* Fields of GUPnPAV.DIDLLiteObject */
    priv: DIDLLiteObjectPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteContainer */
    add_create_class(create_class: string): void
    add_create_class_full(create_class: string, include_derived: boolean): void
    add_search_class(search_class: string): void
    add_search_class_full(search_class: string, include_derived: boolean): void
    container_update_id_is_set(): boolean
    get_child_count(): number
    get_container_update_id(): number
    get_create_classes(): string[]
    get_create_classes_full(): DIDLLiteCreateClass[]
    get_search_classes(): string[]
    get_searchable(): boolean
    get_storage_used(): number
    get_total_deleted_child_count(): number
    set_child_count(child_count: number): void
    set_container_update_id(update_id: number): void
    set_searchable(searchable: boolean): void
    set_storage_used(storage_used: number): void
    set_total_deleted_child_count(count: number): void
    total_deleted_child_count_is_set(): boolean
    unset_container_update_id(): void
    unset_total_deleted_child_count(): void
    /* Methods of GUPnPAV.DIDLLiteObject */
    add_artist(): DIDLLiteContributor
    add_author(): DIDLLiteContributor
    add_creator(): DIDLLiteContributor
    add_descriptor(): DIDLLiteDescriptor
    add_resource(): DIDLLiteResource
    apply_fragments(current_fragments: string[], new_fragments: string[]): DIDLLiteFragmentResult
    get_album(): string
    get_album_art(): string
    get_album_xml_string(): string
    get_artist(): string
    get_artists(): DIDLLiteContributor[]
    get_artists_xml_string(): string
    get_author(): string
    get_authors(): DIDLLiteContributor[]
    get_compat_resource(sink_protocol_info: string, lenient: boolean): DIDLLiteResource
    get_creator(): string
    get_creators(): DIDLLiteContributor[]
    get_date(): string
    get_date_xml_string(): string
    get_dc_namespace(): libxml2.NsPtr
    get_description(): string
    get_descriptors(): DIDLLiteDescriptor[]
    get_dlna_managed(): OCMFlags
    get_dlna_namespace(): libxml2.NsPtr
    get_genre(): string
    get_id(): string
    get_parent_id(): string
    get_properties(name: string): libxml2.Node[]
    get_pv_namespace(): libxml2.NsPtr
    get_resources(): DIDLLiteResource[]
    get_restricted(): boolean
    get_title(): string
    get_title_xml_string(): string
    get_track_number(): number
    get_track_number_xml_string(): string
    get_update_id(): number
    get_upnp_class(): string
    get_upnp_class_xml_string(): string
    get_upnp_namespace(): libxml2.NsPtr
    get_write_status(): string
    get_xml_node(): libxml2.Node
    get_xml_string(): string
    is_restricted_set(): boolean
    set_album(album: string): void
    set_album_art(album_art: string): void
    set_artist(artist: string): void
    set_author(author: string): void
    set_creator(creator: string): void
    set_date(date: string): void
    set_description(description: string): void
    set_dlna_managed(dlna_managed: OCMFlags): void
    set_genre(genre: string): void
    set_id(id: string): void
    set_parent_id(parent_id: string): void
    set_restricted(restricted: boolean): void
    set_title(title: string): void
    set_track_number(track_number: number): void
    set_update_id(update_id: number): void
    set_upnp_class(upnp_class: string): void
    set_write_status(write_status: string): void
    unset_artists(): void
    unset_update_id(): void
    update_id_is_set(): boolean
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::container-update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::searchable", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searchable", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storage-used", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage-used", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-deleted-child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-deleted-child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteContainer_ConstructProps)
    _init (config?: DIDLLiteContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteContributor_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    role?: string
    xml_node?: object
}
export class DIDLLiteContributor {
    /* Properties of GUPnPAV.DIDLLiteContributor */
    name: string
    role: string
    /* Fields of GUPnPAV.DIDLLiteContributor */
    parent: GObject.Object
    priv: DIDLLiteContributorPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteContributor */
    get_name(): string
    get_role(): string
    get_xml_node(): libxml2.Node
    set_name(name: string): void
    set_role(role: string): void
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteContributor_ConstructProps)
    _init (config?: DIDLLiteContributor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteCreateClass_ConstructProps extends GObject.Object_ConstructProps {
    content?: string
    friendly_name?: string
    include_derived?: boolean
    xml_node?: object
}
export class DIDLLiteCreateClass {
    /* Properties of GUPnPAV.DIDLLiteCreateClass */
    content: string
    friendly_name: string
    include_derived: boolean
    /* Fields of GUPnPAV.DIDLLiteCreateClass */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteCreateClass */
    get_content(): string
    get_friendly_name(): string
    get_include_derived(): boolean
    get_xml_node(): libxml2.Node
    set_content(content: string): void
    set_friendly_name(friendly_name: string): void
    set_include_derived(include_derived: boolean): void
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::friendly-name", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::friendly-name", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::include-derived", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-derived", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteCreateClass_ConstructProps)
    _init (config?: DIDLLiteCreateClass_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteDescriptor_ConstructProps extends GObject.Object_ConstructProps {
    content?: string
    id?: string
    metadata_type?: string
    name_space?: string
    xml_node?: object
}
export class DIDLLiteDescriptor {
    /* Properties of GUPnPAV.DIDLLiteDescriptor */
    content: string
    id: string
    metadata_type: string
    name_space: string
    /* Fields of GUPnPAV.DIDLLiteDescriptor */
    parent: GObject.Object
    priv: DIDLLiteDescriptorPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteDescriptor */
    get_content(): string
    get_id(): string
    get_metadata_type(): string
    get_name_space(): string
    get_xml_node(): libxml2.Node
    set_content(content: string): void
    set_id(id: string): void
    set_metadata_type(type: string): void
    set_name_space(name_space: string): void
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadata-type", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata-type", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name-space", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-space", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteDescriptor_ConstructProps)
    _init (config?: DIDLLiteDescriptor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DIDLLiteDescriptor
    static $gtype: GObject.Type
}
export interface DIDLLiteItem_ConstructProps extends DIDLLiteObject_ConstructProps {
    lifetime?: number
    ref_id?: string
}
export class DIDLLiteItem {
    /* Properties of GUPnPAV.DIDLLiteItem */
    lifetime: number
    ref_id: string
    /* Properties of GUPnPAV.DIDLLiteObject */
    album: string
    album_art: string
    artist: string
    author: string
    creator: string
    date: string
    description: string
    dlna_managed: OCMFlags
    genre: string
    id: string
    parent_id: string
    restricted: boolean
    title: string
    track_number: number
    update_id: number
    upnp_class: string
    write_status: string
    /* Fields of GUPnPAV.DIDLLiteItem */
    parent: DIDLLiteObject
    /* Fields of GUPnPAV.DIDLLiteObject */
    priv: DIDLLiteObjectPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteItem */
    get_lifetime(): number
    get_ref_id(): string
    set_lifetime(lifetime: number): void
    set_ref_id(ref_id: string): void
    /* Methods of GUPnPAV.DIDLLiteObject */
    add_artist(): DIDLLiteContributor
    add_author(): DIDLLiteContributor
    add_creator(): DIDLLiteContributor
    add_descriptor(): DIDLLiteDescriptor
    add_resource(): DIDLLiteResource
    apply_fragments(current_fragments: string[], new_fragments: string[]): DIDLLiteFragmentResult
    get_album(): string
    get_album_art(): string
    get_album_xml_string(): string
    get_artist(): string
    get_artists(): DIDLLiteContributor[]
    get_artists_xml_string(): string
    get_author(): string
    get_authors(): DIDLLiteContributor[]
    get_compat_resource(sink_protocol_info: string, lenient: boolean): DIDLLiteResource
    get_creator(): string
    get_creators(): DIDLLiteContributor[]
    get_date(): string
    get_date_xml_string(): string
    get_dc_namespace(): libxml2.NsPtr
    get_description(): string
    get_descriptors(): DIDLLiteDescriptor[]
    get_dlna_managed(): OCMFlags
    get_dlna_namespace(): libxml2.NsPtr
    get_genre(): string
    get_id(): string
    get_parent_id(): string
    get_properties(name: string): libxml2.Node[]
    get_pv_namespace(): libxml2.NsPtr
    get_resources(): DIDLLiteResource[]
    get_restricted(): boolean
    get_title(): string
    get_title_xml_string(): string
    get_track_number(): number
    get_track_number_xml_string(): string
    get_update_id(): number
    get_upnp_class(): string
    get_upnp_class_xml_string(): string
    get_upnp_namespace(): libxml2.NsPtr
    get_write_status(): string
    get_xml_node(): libxml2.Node
    get_xml_string(): string
    is_restricted_set(): boolean
    set_album(album: string): void
    set_album_art(album_art: string): void
    set_artist(artist: string): void
    set_author(author: string): void
    set_creator(creator: string): void
    set_date(date: string): void
    set_description(description: string): void
    set_dlna_managed(dlna_managed: OCMFlags): void
    set_genre(genre: string): void
    set_id(id: string): void
    set_parent_id(parent_id: string): void
    set_restricted(restricted: boolean): void
    set_title(title: string): void
    set_track_number(track_number: number): void
    set_update_id(update_id: number): void
    set_upnp_class(upnp_class: string): void
    set_write_status(write_status: string): void
    unset_artists(): void
    unset_update_id(): void
    update_id_is_set(): boolean
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::lifetime", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lifetime", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ref-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteItem_ConstructProps)
    _init (config?: DIDLLiteItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteObject_ConstructProps extends GObject.Object_ConstructProps {
    album?: string
    album_art?: string
    artist?: string
    author?: string
    creator?: string
    date?: string
    dc_namespace?: object
    description?: string
    dlna_managed?: OCMFlags
    dlna_namespace?: object
    genre?: string
    id?: string
    parent_id?: string
    pv_namespace?: object
    restricted?: boolean
    title?: string
    track_number?: number
    update_id?: number
    upnp_class?: string
    upnp_namespace?: object
    write_status?: string
    xml_node?: object
}
export class DIDLLiteObject {
    /* Properties of GUPnPAV.DIDLLiteObject */
    album: string
    album_art: string
    artist: string
    author: string
    creator: string
    date: string
    description: string
    dlna_managed: OCMFlags
    genre: string
    id: string
    parent_id: string
    restricted: boolean
    title: string
    track_number: number
    update_id: number
    upnp_class: string
    write_status: string
    /* Fields of GUPnPAV.DIDLLiteObject */
    parent: GObject.Object
    priv: DIDLLiteObjectPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteObject */
    add_artist(): DIDLLiteContributor
    add_author(): DIDLLiteContributor
    add_creator(): DIDLLiteContributor
    add_descriptor(): DIDLLiteDescriptor
    add_resource(): DIDLLiteResource
    apply_fragments(current_fragments: string[], new_fragments: string[]): DIDLLiteFragmentResult
    get_album(): string
    get_album_art(): string
    get_album_xml_string(): string
    get_artist(): string
    get_artists(): DIDLLiteContributor[]
    get_artists_xml_string(): string
    get_author(): string
    get_authors(): DIDLLiteContributor[]
    get_compat_resource(sink_protocol_info: string, lenient: boolean): DIDLLiteResource
    get_creator(): string
    get_creators(): DIDLLiteContributor[]
    get_date(): string
    get_date_xml_string(): string
    get_dc_namespace(): libxml2.NsPtr
    get_description(): string
    get_descriptors(): DIDLLiteDescriptor[]
    get_dlna_managed(): OCMFlags
    get_dlna_namespace(): libxml2.NsPtr
    get_genre(): string
    get_id(): string
    get_parent_id(): string
    get_properties(name: string): libxml2.Node[]
    get_pv_namespace(): libxml2.NsPtr
    get_resources(): DIDLLiteResource[]
    get_restricted(): boolean
    get_title(): string
    get_title_xml_string(): string
    get_track_number(): number
    get_track_number_xml_string(): string
    get_update_id(): number
    get_upnp_class(): string
    get_upnp_class_xml_string(): string
    get_upnp_namespace(): libxml2.NsPtr
    get_write_status(): string
    get_xml_node(): libxml2.Node
    get_xml_string(): string
    is_restricted_set(): boolean
    set_album(album: string): void
    set_album_art(album_art: string): void
    set_artist(artist: string): void
    set_author(author: string): void
    set_creator(creator: string): void
    set_date(date: string): void
    set_description(description: string): void
    set_dlna_managed(dlna_managed: OCMFlags): void
    set_genre(genre: string): void
    set_id(id: string): void
    set_parent_id(parent_id: string): void
    set_restricted(restricted: boolean): void
    set_title(title: string): void
    set_track_number(track_number: number): void
    set_update_id(update_id: number): void
    set_upnp_class(upnp_class: string): void
    set_write_status(write_status: string): void
    unset_artists(): void
    unset_update_id(): void
    update_id_is_set(): boolean
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::album", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteObject_ConstructProps)
    _init (config?: DIDLLiteObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class DIDLLiteParser {
    /* Fields of GUPnPAV.DIDLLiteParser */
    parent: GObject.Object
    gupnp_reserved: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteParser */
    parse_didl(didl: string): boolean
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
    /* Virtual methods of GUPnPAV.DIDLLiteParser */
    vfunc_container_available(container: DIDLLiteContainer): void
    vfunc_item_available(item: DIDLLiteItem): void
    vfunc_object_available(object: DIDLLiteObject): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnPAV.DIDLLiteParser */
    connect(sigName: "container-available", callback: (($obj: DIDLLiteParser, container: DIDLLiteContainer) => void)): number
    connect_after(sigName: "container-available", callback: (($obj: DIDLLiteParser, container: DIDLLiteContainer) => void)): number
    emit(sigName: "container-available", container: DIDLLiteContainer): void
    connect(sigName: "item-available", callback: (($obj: DIDLLiteParser, item: DIDLLiteItem) => void)): number
    connect_after(sigName: "item-available", callback: (($obj: DIDLLiteParser, item: DIDLLiteItem) => void)): number
    emit(sigName: "item-available", item: DIDLLiteItem): void
    connect(sigName: "object-available", callback: (($obj: DIDLLiteParser, object: DIDLLiteObject) => void)): number
    connect_after(sigName: "object-available", callback: (($obj: DIDLLiteParser, object: DIDLLiteObject) => void)): number
    emit(sigName: "object-available", object: DIDLLiteObject): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DIDLLiteParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteParser_ConstructProps)
    _init (config?: DIDLLiteParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DIDLLiteParser
    static $gtype: GObject.Type
}
export interface DIDLLiteResource_ConstructProps extends GObject.Object_ConstructProps {
    audio_channels?: number
    bitrate?: number
    bits_per_sample?: number
    cleartext_size?: number
    color_depth?: number
    dlna_namespace?: object
    duration?: number
    height?: number
    import_uri?: string
    protection?: string
    protocol_info?: ProtocolInfo
    pv_namespace?: object
    sample_freq?: number
    size?: number
    size64?: number
    subtitle_file_type?: string
    subtitle_file_uri?: string
    track_total?: number
    update_count?: number
    uri?: string
    width?: number
    xml_node?: object
}
export class DIDLLiteResource {
    /* Properties of GUPnPAV.DIDLLiteResource */
    audio_channels: number
    bitrate: number
    bits_per_sample: number
    cleartext_size: number
    color_depth: number
    duration: number
    height: number
    import_uri: string
    protection: string
    protocol_info: ProtocolInfo
    sample_freq: number
    size: number
    size64: number
    subtitle_file_type: string
    subtitle_file_uri: string
    track_total: number
    update_count: number
    uri: string
    width: number
    /* Fields of GUPnPAV.DIDLLiteResource */
    parent: GObject.Object
    priv: DIDLLiteResourcePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteResource */
    get_audio_channels(): number
    get_bitrate(): number
    get_bits_per_sample(): number
    get_cleartext_size(): number
    get_color_depth(): number
    get_dlna_namespace(): libxml2.NsPtr
    get_duration(): number
    get_height(): number
    get_import_uri(): string
    get_protection(): string
    get_protocol_info(): ProtocolInfo
    get_pv_namespace(): libxml2.NsPtr
    get_sample_freq(): number
    get_size(): number
    get_size64(): number
    get_subtitle_file_type(): string
    get_subtitle_file_uri(): string
    get_track_total(): number
    get_update_count(): number
    get_uri(): string
    get_width(): number
    get_xml_node(): libxml2.Node
    set_audio_channels(n_channels: number): void
    set_bitrate(bitrate: number): void
    set_bits_per_sample(sample_size: number): void
    set_cleartext_size(cleartext_size: number): void
    set_color_depth(color_depth: number): void
    set_duration(duration: number): void
    set_height(height: number): void
    set_import_uri(import_uri: string): void
    set_protection(protection: string): void
    set_protocol_info(info: ProtocolInfo): void
    set_sample_freq(sample_freq: number): void
    set_size(size: number): void
    set_size64(size: number): void
    set_subtitle_file_type(type?: string | null): void
    set_subtitle_file_uri(uri?: string | null): void
    set_track_total(track_total: number): void
    set_update_count(update_count: number): void
    set_uri(uri: string): void
    set_width(width: number): void
    track_total_is_set(): boolean
    unset_track_total(): void
    unset_update_count(): void
    update_count_is_set(): boolean
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::audio-channels", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-channels", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bitrate", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bits-per-sample", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cleartext-size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cleartext-size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color-depth", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::import-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::import-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protection", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protection", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol-info", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol-info", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sample-freq", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size64", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size64", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-file-type", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-file-type", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-file-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-file-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-total", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-total", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-count", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-count", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteResource_ConstructProps)
    _init (config?: DIDLLiteResource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DIDLLiteWriter_ConstructProps extends GObject.Object_ConstructProps {
    language?: string
}
export class DIDLLiteWriter {
    /* Properties of GUPnPAV.DIDLLiteWriter */
    readonly xml_node: object
    /* Fields of GUPnPAV.DIDLLiteWriter */
    parent: GObject.Object
    priv: DIDLLiteWriterPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.DIDLLiteWriter */
    add_container(): DIDLLiteContainer
    add_descriptor(): DIDLLiteDescriptor
    add_item(): DIDLLiteItem
    filter(filter: string): void
    get_language(): string
    get_string(): string
    get_xml_node(): libxml2.Node
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
    connect(sigName: "notify", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DIDLLiteWriter_ConstructProps)
    _init (config?: DIDLLiteWriter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(language?: string | null): DIDLLiteWriter
    static $gtype: GObject.Type
}
export interface Feature_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    object_ids?: string
    version?: string
}
export class Feature {
    /* Fields of GUPnPAV.Feature */
    parent: GObject.Object
    priv: FeaturePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.Feature */
    get_name(): string
    get_object_ids(): string
    get_version(): string
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
    connect(sigName: "notify", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Feature_ConstructProps)
    _init (config?: Feature_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FeatureListParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeatureListParser {
    /* Fields of GUPnPAV.FeatureListParser */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.FeatureListParser */
    parse_text(text: string): Feature[]
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
    connect(sigName: "notify", callback: (($obj: FeatureListParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeatureListParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeatureListParser_ConstructProps)
    _init (config?: FeatureListParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeatureListParser
    static $gtype: GObject.Type
}
export interface LastChangeParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class LastChangeParser {
    /* Fields of GUPnPAV.LastChangeParser */
    parent: GObject.Object
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
    connect(sigName: "notify", callback: (($obj: LastChangeParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LastChangeParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LastChangeParser_ConstructProps)
    _init (config?: LastChangeParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LastChangeParser
    static $gtype: GObject.Type
}
export interface MediaCollection_ConstructProps extends GObject.Object_ConstructProps {
    author?: string
    data?: string
    title?: string
}
export class MediaCollection {
    /* Properties of GUPnPAV.MediaCollection */
    author: string
    readonly mutable: boolean
    title: string
    /* Fields of GUPnPAV.MediaCollection */
    parent: GObject.Object
    priv: MediaCollectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.MediaCollection */
    add_item(): DIDLLiteItem
    get_author(): string
    get_items(): DIDLLiteItem[]
    get_mutable(): boolean
    get_string(): string
    get_title(): string
    set_author(author: string): void
    set_title(title: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mutable", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaCollection_ConstructProps)
    _init (config?: MediaCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaCollection
    static new_from_string(data: string): MediaCollection
    static $gtype: GObject.Type
}
export interface ProtocolInfo_ConstructProps extends GObject.Object_ConstructProps {
    dlna_conversion?: DLNAConversion
    dlna_flags?: DLNAFlags
    dlna_operation?: DLNAOperation
    dlna_profile?: string
    mime_type?: string
    network?: string
    play_speeds?: string[]
    protocol?: string
}
export class ProtocolInfo {
    /* Properties of GUPnPAV.ProtocolInfo */
    dlna_conversion: DLNAConversion
    dlna_flags: DLNAFlags
    dlna_operation: DLNAOperation
    dlna_profile: string
    mime_type: string
    network: string
    play_speeds: string[]
    protocol: string
    /* Fields of GUPnPAV.ProtocolInfo */
    parent: GObject.Object
    priv: ProtocolInfoPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.ProtocolInfo */
    get_dlna_conversion(): DLNAConversion
    get_dlna_flags(): DLNAFlags
    get_dlna_operation(): DLNAOperation
    get_dlna_profile(): string
    get_mime_type(): string
    get_network(): string
    get_play_speeds(): string[]
    get_protocol(): string
    is_compatible(info2: ProtocolInfo): boolean
    set_dlna_conversion(conversion: DLNAConversion): void
    set_dlna_flags(flags: DLNAFlags): void
    set_dlna_operation(operation: DLNAOperation): void
    set_dlna_profile(profile: string): void
    set_mime_type(mime_type: string): void
    set_network(network: string): void
    set_play_speeds(speeds: string): void
    set_protocol(protocol: string): void
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dlna-conversion", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-conversion", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-flags", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-flags", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-operation", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-operation", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-profile", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::play-speeds", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play-speeds", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProtocolInfo_ConstructProps)
    _init (config?: ProtocolInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ProtocolInfo
    static new_from_string(protocol_info: string): ProtocolInfo
    static $gtype: GObject.Type
}
export interface SearchCriteriaParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class SearchCriteriaParser {
    /* Fields of GUPnPAV.SearchCriteriaParser */
    parent: GObject.Object
    priv: SearchCriteriaParserPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPAV.SearchCriteriaParser */
    parse_text(text: string): boolean
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
    /* Virtual methods of GUPnPAV.SearchCriteriaParser */
    vfunc_begin_parens(): void
    vfunc_conjunction(): void
    vfunc_disjunction(): void
    vfunc_end_parens(): void
    vfunc_expression(property: string, op: SearchCriteriaOp, value: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnPAV.SearchCriteriaParser */
    connect(sigName: "begin-parens", callback: (($obj: SearchCriteriaParser) => void)): number
    connect_after(sigName: "begin-parens", callback: (($obj: SearchCriteriaParser) => void)): number
    emit(sigName: "begin-parens"): void
    connect(sigName: "conjunction", callback: (($obj: SearchCriteriaParser) => void)): number
    connect_after(sigName: "conjunction", callback: (($obj: SearchCriteriaParser) => void)): number
    emit(sigName: "conjunction"): void
    connect(sigName: "disjunction", callback: (($obj: SearchCriteriaParser) => void)): number
    connect_after(sigName: "disjunction", callback: (($obj: SearchCriteriaParser) => void)): number
    emit(sigName: "disjunction"): void
    connect(sigName: "end-parens", callback: (($obj: SearchCriteriaParser) => void)): number
    connect_after(sigName: "end-parens", callback: (($obj: SearchCriteriaParser) => void)): number
    emit(sigName: "end-parens"): void
    connect(sigName: "expression", callback: (($obj: SearchCriteriaParser, property: string, op: SearchCriteriaOp, value: string, error?: object | null) => boolean)): number
    connect_after(sigName: "expression", callback: (($obj: SearchCriteriaParser, property: string, op: SearchCriteriaOp, value: string, error?: object | null) => boolean)): number
    emit(sigName: "expression", property: string, op: SearchCriteriaOp, value: string, error?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SearchCriteriaParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchCriteriaParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SearchCriteriaParser_ConstructProps)
    _init (config?: SearchCriteriaParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SearchCriteriaParser
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export class CDSLastChangeEntry {
    /* Methods of GUPnPAV.CDSLastChangeEntry */
    get_class(): string
    get_event(): CDSLastChangeEvent
    get_object_id(): string
    get_parent_id(): string
    get_update_id(): number
    is_subtree_update(): boolean
    ref(): CDSLastChangeEntry
    unref(): void
    static name: string
}
export abstract class CDSLastChangeParserClass {
    /* Fields of GUPnPAV.CDSLastChangeParserClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CDSLastChangeParserPrivate {
    static name: string
}
export abstract class DIDLLiteContainerClass {
    /* Fields of GUPnPAV.DIDLLiteContainerClass */
    parent_class: DIDLLiteObjectClass
    static name: string
}
export abstract class DIDLLiteContributorClass {
    /* Fields of GUPnPAV.DIDLLiteContributorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DIDLLiteContributorPrivate {
    static name: string
}
export abstract class DIDLLiteCreateClassClass {
    /* Fields of GUPnPAV.DIDLLiteCreateClassClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DIDLLiteCreateClassPrivate {
    static name: string
}
export abstract class DIDLLiteDescriptorClass {
    /* Fields of GUPnPAV.DIDLLiteDescriptorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DIDLLiteDescriptorPrivate {
    static name: string
}
export abstract class DIDLLiteItemClass {
    /* Fields of GUPnPAV.DIDLLiteItemClass */
    parent_class: DIDLLiteObjectClass
    static name: string
}
export abstract class DIDLLiteObjectClass {
    /* Fields of GUPnPAV.DIDLLiteObjectClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DIDLLiteObjectPrivate {
    static name: string
}
export abstract class DIDLLiteParserClass {
    /* Fields of GUPnPAV.DIDLLiteParserClass */
    parent_class: GObject.ObjectClass
    object_available: (parser: DIDLLiteParser, object: DIDLLiteObject) => void
    item_available: (parser: DIDLLiteParser, item: DIDLLiteItem) => void
    container_available: (parser: DIDLLiteParser, container: DIDLLiteContainer) => void
    static name: string
}
export abstract class DIDLLiteResourceClass {
    /* Fields of GUPnPAV.DIDLLiteResourceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DIDLLiteResourcePrivate {
    static name: string
}
export abstract class DIDLLiteWriterClass {
    /* Fields of GUPnPAV.DIDLLiteWriterClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DIDLLiteWriterPrivate {
    static name: string
}
export abstract class FeatureClass {
    /* Fields of GUPnPAV.FeatureClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FeatureListParserClass {
    /* Fields of GUPnPAV.FeatureListParserClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FeaturePrivate {
    static name: string
}
export abstract class LastChangeParserClass {
    /* Fields of GUPnPAV.LastChangeParserClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MediaCollectionClass {
    /* Fields of GUPnPAV.MediaCollectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MediaCollectionPrivate {
    static name: string
}
export abstract class ProtocolInfoClass {
    /* Fields of GUPnPAV.ProtocolInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ProtocolInfoPrivate {
    static name: string
}
export abstract class SearchCriteriaParserClass {
    /* Fields of GUPnPAV.SearchCriteriaParserClass */
    parent_class: GObject.ObjectClass
    begin_parens: (parser: SearchCriteriaParser) => void
    end_parens: (parser: SearchCriteriaParser) => void
    conjunction: (parser: SearchCriteriaParser) => void
    disjunction: (parser: SearchCriteriaParser) => void
    expression: (parser: SearchCriteriaParser, property: string, op: SearchCriteriaOp, value: string) => boolean
    static name: string
}
export class SearchCriteriaParserPrivate {
    static name: string
}