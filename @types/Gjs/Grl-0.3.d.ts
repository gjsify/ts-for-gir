/**
 * Grl-0.3
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum CoreError {
    BROWSE_FAILED,
    SEARCH_FAILED,
    SEARCH_NULL_UNSUPPORTED,
    QUERY_FAILED,
    RESOLVE_FAILED,
    MEDIA_NOT_FOUND,
    STORE_FAILED,
    STORE_METADATA_FAILED,
    REMOVE_FAILED,
    MEDIA_FROM_URI_FAILED,
    CONFIG_LOAD_FAILED,
    CONFIG_FAILED,
    UNREGISTER_SOURCE_FAILED,
    LOAD_PLUGIN_FAILED,
    UNLOAD_PLUGIN_FAILED,
    REGISTER_METADATA_KEY_FAILED,
    NOTIFY_CHANGED_FAILED,
    OPERATION_CANCELLED,
    AUTHENTICATION_TOKEN,
}
export enum LogLevel {
    NONE,
    ERROR,
    WARNING,
    MESSAGE,
    INFO,
    DEBUG,
    LAST,
}
export enum MediaSerializeType {
    BASIC,
    PARTIAL,
    FULL,
}
export enum MediaType {
    UNKNOWN,
    AUDIO,
    VIDEO,
    IMAGE,
    CONTAINER,
}
export enum Rank {
    LOWEST,
    LOW,
    DEFAULT,
    HIGH,
    HIGHEST,
}
export enum SourceChangeType {
    CHANGED,
    ADDED,
    REMOVED,
}
export enum ResolutionFlags {
    NORMAL,
    FULL,
    IDLE_RELAY,
    FAST_ONLY,
}
export enum SupportedMedia {
    NONE,
    AUDIO,
    VIDEO,
    IMAGE,
    ALL,
}
export enum SupportedOps {
    NONE,
    RESOLVE,
    BROWSE,
    SEARCH,
    QUERY,
    STORE,
    STORE_PARENT,
    STORE_METADATA,
    REMOVE,
    MEDIA_FROM_URI,
    NOTIFY_CHANGE,
}
export enum TypeFilter {
    NONE,
    AUDIO,
    VIDEO,
    IMAGE,
    ALL,
}
export enum WriteFlags {
    NORMAL,
    FULL,
}
export const CONFIG_KEY_APIKEY: string
export const CONFIG_KEY_APIKEY_BLOB: string
export const CONFIG_KEY_APISECRET: string
export const CONFIG_KEY_APITOKEN: string
export const CONFIG_KEY_APITOKEN_SECRET: string
export const CONFIG_KEY_PASSWORD: string
export const CONFIG_KEY_PLUGIN: string
export const CONFIG_KEY_SOURCE: string
export const CONFIG_KEY_USERNAME: string
export const COUNT_INFINITY: number
export const KEYID_FORMAT: string
export const METADATA_KEY_ALBUM: number
export const METADATA_KEY_ALBUM_ARTIST: number
export const METADATA_KEY_ALBUM_DISC_NUMBER: number
export const METADATA_KEY_ARTIST: number
export const METADATA_KEY_AUDIO_TRACK: number
export const METADATA_KEY_AUTHOR: number
export const METADATA_KEY_BITRATE: number
export const METADATA_KEY_CAMERA_MODEL: number
export const METADATA_KEY_CERTIFICATE: number
export const METADATA_KEY_CHILDCOUNT: number
export const METADATA_KEY_CHILDCOUNT_UNKNOWN: number
export const METADATA_KEY_COMPOSER: number
export const METADATA_KEY_CREATION_DATE: number
export const METADATA_KEY_DESCRIPTION: number
export const METADATA_KEY_DIRECTOR: number
export const METADATA_KEY_DURATION: number
export const METADATA_KEY_EPISODE: number
export const METADATA_KEY_EPISODE_TITLE: number
export const METADATA_KEY_EXPOSURE_TIME: number
export const METADATA_KEY_EXTERNAL_PLAYER: number
export const METADATA_KEY_EXTERNAL_URL: number
export const METADATA_KEY_FAVOURITE: number
export const METADATA_KEY_FLASH_USED: number
export const METADATA_KEY_FRAMERATE: number
export const METADATA_KEY_GENRE: number
export const METADATA_KEY_HEIGHT: number
export const METADATA_KEY_ID: number
export const METADATA_KEY_INVALID: number
export const METADATA_KEY_ISO_SPEED: number
export const METADATA_KEY_KEYWORD: number
export const METADATA_KEY_LAST_PLAYED: number
export const METADATA_KEY_LAST_POSITION: number
export const METADATA_KEY_LICENSE: number
export const METADATA_KEY_LYRICS: number
export const METADATA_KEY_MB_ALBUM_ID: number
export const METADATA_KEY_MB_ARTIST_ID: number
export const METADATA_KEY_MB_RECORDING_ID: number
export const METADATA_KEY_MB_RELEASE_GROUP_ID: number
export const METADATA_KEY_MB_RELEASE_ID: number
export const METADATA_KEY_MB_TRACK_ID: number
export const METADATA_KEY_MIME: number
export const METADATA_KEY_MODIFICATION_DATE: number
export const METADATA_KEY_ORIENTATION: number
export const METADATA_KEY_ORIGINAL_TITLE: number
export const METADATA_KEY_PERFORMER: number
export const METADATA_KEY_PLAY_COUNT: number
export const METADATA_KEY_PRODUCER: number
export const METADATA_KEY_PUBLICATION_DATE: number
export const METADATA_KEY_RATING: number
export const METADATA_KEY_REGION: number
export const METADATA_KEY_SEASON: number
export const METADATA_KEY_SHOW: number
export const METADATA_KEY_SITE: number
export const METADATA_KEY_SIZE: number
export const METADATA_KEY_SOURCE: number
export const METADATA_KEY_START_TIME: number
export const METADATA_KEY_STUDIO: number
export const METADATA_KEY_THUMBNAIL: number
export const METADATA_KEY_THUMBNAIL_BINARY: number
export const METADATA_KEY_TITLE: number
export const METADATA_KEY_TITLE_FROM_FILENAME: number
export const METADATA_KEY_TRACK_NUMBER: number
export const METADATA_KEY_URL: number
export const METADATA_KEY_WIDTH: number
export const PADDING: number
export const PADDING_SMALL: number
export const PLUGIN_AUTHOR: string
export const PLUGIN_DESCRIPTION: string
export const PLUGIN_LICENSE: string
export const PLUGIN_LIST_VAR: string
export const PLUGIN_NAME: string
export const PLUGIN_PATH_VAR: string
export const PLUGIN_RANKS_VAR: string
export const PLUGIN_SITE: string
export const PLUGIN_VERSION: string
export const SOURCE_REMAINING_UNKNOWN: number
export function date_time_from_iso8601(date: string): GLib.DateTime
export function deinit(): void
export function g_value_dup(value: any): any
export function g_value_free(value: any): void
export function g_value_hashtable_new(): GLib.HashTable
export function g_value_hashtable_new_direct(): GLib.HashTable
export function g_value_new(g_type: GObject.Type): any
export function init(argv?: string[] | null): /* argv */ string[] | null
export function init_get_option_group(): GLib.OptionGroup
export function log_configure(config: string): void
export function metadata_key_get_desc(key: KeyID): string
export function metadata_key_get_name(key: KeyID): string
export function metadata_key_get_type(key: KeyID): GObject.Type
export function multiple_get_media_from_uri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): void
export function multiple_search(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
export function multiple_search_sync(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions): Media[]
export function operation_cancel(operation_id: number): void
export function operation_get_data(operation_id: number): object | null
export function operation_set_data(operation_id: number, user_data?: object | null): void
export function operation_set_data_full(operation_id: number, user_data?: object | null, destroy_func?: GLib.DestroyNotify | null): void
export function paging_translate(skip: number, count: number, max_page_size: number, page_size: number, page_number: number, internal_offset: number): void
export function range_value_hashtable_insert(hash_table: GLib.HashTable, key: object | null, min: any, max: any): void
export function range_value_hashtable_new(): GLib.HashTable
export interface PluginDeinitFunc {
    (plugin: Plugin): void
}
export interface PluginRegisterKeysFunc {
    (registry: Registry, plugin: Plugin): void
}
export interface SourceRemoveCb {
    (source: Source, media: Media, error?: GLib.Error | null): void
}
export interface SourceResolveCb {
    (source: Source, operation_id: number, media: Media, error?: GLib.Error | null): void
}
export interface SourceResultCb {
    (source: Source, operation_id: number, media: Media | null, remaining: number, error?: GLib.Error | null): void
}
export interface SourceStoreCb {
    (source: Source, media: Media, failed_keys: KeyID[], error?: GLib.Error | null): void
}
export interface Caps_ConstructProps extends GObject.Object_ConstructProps {
}
export class Caps {
    /* Fields of Grl.Caps */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.Caps */
    get_key_filter(): KeyID[]
    get_key_range_filter(): KeyID[]
    get_type_filter(): TypeFilter
    is_key_filter(key: KeyID): boolean
    is_key_range_filter(key: KeyID): boolean
    set_key_filter(keys: KeyID[]): void
    set_key_range_filter(keys: KeyID[]): void
    set_type_filter(filter: TypeFilter): void
    test_option(key: string, value: any): boolean
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
    connect(sigName: "notify", callback: (($obj: Caps, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Caps, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Caps_ConstructProps)
    _init (config?: Caps_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Caps
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
export class Config {
    /* Fields of Grl.Config */
    parent: GObject.Object
    priv: ConfigPrivate
    _grl_reserved: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.Config */
    get_api_key(): string
    get_api_key_blob(size: number): number
    get_api_secret(): string
    get_api_token(): string
    get_api_token_secret(): string
    get_binary(param: string, size?: number | null): number
    get_boolean(param: string): boolean
    get_float(param: string): number
    get_int(param: string): number
    get_password(): string
    get_plugin(): string
    get_source(): string
    get_string(param: string): string
    get_username(): string
    has_param(param: string): boolean
    set(param: string, value: any): void
    set_api_key(key: string): void
    set_api_key_blob(blob: number, size: number): void
    set_api_secret(secret: string): void
    set_api_token(token: string): void
    set_api_token_secret(secret: string): void
    set_binary(param: string, blob: number, size: number): void
    set_boolean(param: string, value: boolean): void
    set_float(param: string, value: number): void
    set_int(param: string, value: number): void
    set_password(password: string): void
    set_plugin(plugin: string): void
    set_source(source: string): void
    set_string(param: string, value: string): void
    set_username(username: string): void
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(plugin: string, source?: string | null): Config
    static $gtype: GObject.Type
}
export interface Data_ConstructProps extends GObject.Object_ConstructProps {
}
export class Data {
    /* Fields of Grl.Data */
    parent: GObject.Object
    priv: DataPrivate
    _grl_reserved: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.Data */
    add_binary(key: KeyID, buf: number, size: number): void
    add_boxed(key: KeyID, boxed?: object | null): void
    add_float(key: KeyID, floatvalue: number): void
    add_for_id(key_name: string, value: any): boolean
    add_int(key: KeyID, intvalue: number): void
    add_int64(key: KeyID, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    remove_nth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, boolvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_for_id(key_name: string, value: any): boolean
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: KeyID, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Data_ConstructProps)
    _init (config?: Data_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Data
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends Data_ConstructProps {
    media_type?: MediaType
}
export class Media {
    /* Properties of Grl.Media */
    media_type: MediaType
    /* Fields of Grl.Media */
    parent: Data
    /* Fields of Grl.Data */
    priv: DataPrivate
    _grl_reserved: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.Media */
    add_artist(artist: string): void
    add_author(author: string): void
    add_director(director: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_genre(genre: string): void
    add_keyword(keyword: string): void
    add_lyrics(lyrics: string): void
    add_mb_artist_id(mb_artist_id: string): void
    add_performer(performer: string): void
    add_producer(producer: string): void
    add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void
    get_album(): string
    get_album_artist(): string
    get_album_disc_number(): number
    get_artist(): string
    get_artist_nth(index: number): string
    get_author(): string
    get_author_nth(index: number): string
    get_bitrate(): number
    get_camera_model(): string
    get_certificate(): string
    get_childcount(): number
    get_composer(): string
    get_composer_nth(index: number): string
    get_creation_date(): GLib.DateTime
    get_description(): string
    get_director(): string
    get_director_nth(index: number): string
    get_duration(): number
    get_episode(): number
    get_episode_title(): string
    get_exposure_time(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_favourite(): boolean
    get_flash_used(): string
    get_framerate(): number
    get_genre(): string
    get_genre_nth(index: number): string
    get_height(): number
    get_id(): string
    get_iso_speed(): number
    get_keyword(): string
    get_keyword_nth(index: number): string
    get_last_played(): GLib.DateTime
    get_last_position(): number
    get_license(): string
    get_lyrics(): string
    get_lyrics_nth(index: number): string
    get_mb_album_id(): string
    get_mb_artist_id(): string
    get_mb_artist_id_nth(index: number): string
    get_mb_recording_id(): string
    get_mb_release_group_id(): string
    get_mb_release_id(): string
    get_mb_track_id(): string
    get_media_type(): MediaType
    get_mime(): string
    get_modification_date(): GLib.DateTime
    get_orientation(): number
    get_original_title(): string
    get_performer(): string
    get_performer_nth(index: number): string
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_producer(): string
    get_producer_nth(index: number): string
    get_publication_date(): GLib.DateTime
    get_rating(): number
    get_region(): string
    get_region_data(): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_region_data_nth(index: number): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_season(): number
    get_show(): string
    get_site(): string
    get_size(): number
    get_source(): string
    get_start_time(): number
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_track_number(): number
    get_url(): string
    get_url_data(framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    get_url_data_nth(index: number, framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    get_width(): number
    is_audio(): boolean
    is_container(): boolean
    is_image(): boolean
    is_video(): boolean
    serialize(): string
    set_album(album: string): void
    set_album_artist(album_artist: string): void
    set_album_disc_number(disc_number: number): void
    set_artist(artist: string): void
    set_author(author: string): void
    set_bitrate(bitrate: number): void
    set_camera_model(camera_model: string): void
    set_certificate(certificate: string): void
    set_childcount(childcount: number): void
    set_composer(composer: string): void
    set_creation_date(creation_date: GLib.DateTime): void
    set_description(description: string): void
    set_director(director: string): void
    set_duration(duration: number): void
    set_episode(episode: number): void
    set_episode_title(episode_title: string): void
    set_exposure_time(exposure_time: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_favourite(favourite: boolean): void
    set_flash_used(flash_used: string): void
    set_framerate(framerate: number): void
    set_genre(genre: string): void
    set_height(height: number): void
    set_id(id: string): void
    set_iso_speed(iso_speed: number): void
    set_keyword(keyword: string): void
    set_last_played(last_played: GLib.DateTime): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_lyrics(lyrics: string): void
    set_mb_album_id(mb_album_id: string): void
    set_mb_artist_id(mb_artist_id: string): void
    set_mb_recording_id(mb_recording_id: string): void
    set_mb_release_group_id(mb_release_group_id: string): void
    set_mb_release_id(mb_release_id: string): void
    set_mb_track_id(mb_track_id: string): void
    set_mime(mime: string): void
    set_modification_date(modification_date: GLib.DateTime): void
    set_orientation(orientation: number): void
    set_original_title(original_title: string): void
    set_performer(performer: string): void
    set_play_count(play_count: number): void
    set_producer(producer: string): void
    set_publication_date(date: GLib.DateTime): void
    set_rating(rating: number, max: number): void
    set_region(region: string): void
    set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    set_season(season: number): void
    set_show(show: string): void
    set_site(site: string): void
    set_size(size: number): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_track_number(track_number: number): void
    set_url(url: string): void
    set_url_data(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void
    set_width(width: number): void
    /* Methods of Grl.Data */
    add_binary(key: KeyID, buf: number, size: number): void
    add_boxed(key: KeyID, boxed?: object | null): void
    add_float(key: KeyID, floatvalue: number): void
    add_for_id(key_name: string, value: any): boolean
    add_int(key: KeyID, intvalue: number): void
    add_int64(key: KeyID, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    remove_nth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, boolvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_for_id(key_name: string, value: any): boolean
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: KeyID, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::media-type", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static audio_new(): Media
    static container_new(): Media
    static image_new(): Media
    static new(): Media
    static video_new(): Media
    static unserialize(serial: string): Media
    static $gtype: GObject.Type
}
export interface OperationOptions_ConstructProps extends GObject.Object_ConstructProps {
}
export class OperationOptions {
    /* Fields of Grl.OperationOptions */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.OperationOptions */
    copy(): OperationOptions
    get_count(): number
    get_key_filter(key: KeyID): any
    get_key_filter_list(): KeyID[]
    get_key_range_filter(key: KeyID): [ /* min_value */ any | null, /* max_value */ any | null ]
    get_key_range_filter_list(): KeyID[]
    get_resolution_flags(): ResolutionFlags
    get_skip(): number
    get_type_filter(): TypeFilter
    obey_caps(caps: Caps): [ /* returnType */ boolean, /* supported_options */ OperationOptions, /* unsupported_options */ OperationOptions ]
    set_count(count: number): boolean
    set_key_filters(filters: GLib.HashTable): boolean
    set_key_filter_value(key: KeyID, value: any): boolean
    set_key_range_filter_value(key: KeyID, min_value?: any | null, max_value?: any | null): boolean
    set_resolution_flags(flags: ResolutionFlags): boolean
    set_skip(skip: number): boolean
    set_type_filter(filter: TypeFilter): boolean
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
    connect(sigName: "notify", callback: (($obj: OperationOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OperationOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OperationOptions_ConstructProps)
    _init (config?: OperationOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(caps?: Caps | null): OperationOptions
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}
export class Plugin {
    /* Properties of Grl.Plugin */
    readonly loaded: boolean
    /* Fields of Grl.Plugin */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.Plugin */
    get_author(): string
    get_description(): string
    get_filename(): string
    get_id(): string
    get_license(): string
    get_module_name(): string
    get_name(): string
    get_site(): string
    get_sources(): Source[]
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
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loaded", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}
export class Registry {
    /* Fields of Grl.Registry */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.Registry */
    activate_all_plugins(): boolean
    activate_plugin_by_id(plugin_id: string): boolean
    add_config(config: Config): boolean
    add_config_from_file(config_file: string): boolean
    add_config_from_resource(resource_path: string): boolean
    add_directory(path: string): void
    get_metadata_keys(): KeyID[]
    get_plugins(only_loaded: boolean): Plugin[]
    get_sources(ranked: boolean): Source[]
    get_sources_by_operations(ops: SupportedOps, ranked: boolean): Source[]
    load_all_plugins(activate: boolean): boolean
    load_plugin(library_filename: string): boolean
    load_plugin_directory(path: string): boolean
    lookup_metadata_key(key_name: string): KeyID
    lookup_metadata_key_desc(key: KeyID): string
    lookup_metadata_key_name(key: KeyID): string
    lookup_metadata_key_relation(key: KeyID): KeyID[]
    lookup_metadata_key_type(key: KeyID): GObject.Type
    lookup_plugin(plugin_id: string): Plugin
    lookup_source(source_id: string): Source
    metadata_key_validate(key: KeyID, value: any): boolean
    register_metadata_key(param_spec: GObject.ParamSpec, bind_key: KeyID): KeyID
    register_source(plugin: Plugin, source: Source): boolean
    unload_plugin(plugin_id: string): boolean
    unregister_source(source: Source): boolean
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
    /* Signals of Grl.Registry */
    connect(sigName: "metadata-key-added", callback: (($obj: Registry, key: string) => void)): number
    connect_after(sigName: "metadata-key-added", callback: (($obj: Registry, key: string) => void)): number
    emit(sigName: "metadata-key-added", key: string): void
    connect(sigName: "source-added", callback: (($obj: Registry, source: Source) => void)): number
    connect_after(sigName: "source-added", callback: (($obj: Registry, source: Source) => void)): number
    emit(sigName: "source-added", source: Source): void
    connect(sigName: "source-removed", callback: (($obj: Registry, source: Source) => void)): number
    connect_after(sigName: "source-removed", callback: (($obj: Registry, source: Source) => void)): number
    emit(sigName: "source-removed", source: Source): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Registry
    static $gtype: GObject.Type
}
export interface RelatedKeys_ConstructProps extends GObject.Object_ConstructProps {
}
export class RelatedKeys {
    /* Fields of Grl.RelatedKeys */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.RelatedKeys */
    dup(): RelatedKeys
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    remove(key: KeyID): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, booleanvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_for_id(key_name: string, value: any): boolean
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_string(key: KeyID, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RelatedKeys_ConstructProps)
    _init (config?: RelatedKeys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelatedKeys
    static $gtype: GObject.Type
}
export interface Source_ConstructProps extends GObject.Object_ConstructProps {
    auto_split_threshold?: number
    plugin?: Plugin
    rank?: number
    source_desc?: string
    source_icon?: Gio.Icon
    source_id?: string
    source_name?: string
    source_tags?: string[]
    supported_media?: SupportedMedia
}
export class Source {
    /* Properties of Grl.Source */
    auto_split_threshold: number
    plugin: Plugin
    rank: number
    source_desc: string
    source_icon: Gio.Icon
    source_id: string
    source_name: string
    source_tags: string[]
    supported_media: SupportedMedia
    /* Fields of Grl.Source */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl.Source */
    browse(container: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    browse_sync(container: Media | null, keys: KeyID[], options: OperationOptions): Media[]
    get_auto_split_threshold(): number
    get_caps(operation: SupportedOps): Caps
    get_description(): string
    get_icon(): Gio.Icon
    get_id(): string
    get_media_from_uri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    get_media_from_uri_sync(uri: string, keys: KeyID[], options: OperationOptions): Media
    get_name(): string
    get_plugin(): Plugin
    get_rank(): number
    get_supported_media(): SupportedMedia
    get_tags(): string[]
    may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean
    notify_change(media: Media | null, change_type: SourceChangeType, location_unknown: boolean): void
    notify_change_list(changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void
    notify_change_start(): boolean
    notify_change_stop(): boolean
    query(query: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    query_sync(query: string, keys: KeyID[], options: OperationOptions): Media[]
    remove(media: Media, callback: SourceRemoveCb): void
    remove_sync(media: Media): void
    resolve(media: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    resolve_sync(media: Media | null, keys: KeyID[], options: OperationOptions): Media
    search(text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    search_sync(text: string, keys: KeyID[], options: OperationOptions): Media[]
    set_auto_split_threshold(threshold: number): void
    slow_keys(): KeyID[]
    store(parent: Media | null, media: Media, flags: WriteFlags, callback: SourceStoreCb): void
    store_metadata(media: Media, keys: KeyID[] | null, flags: WriteFlags, callback: SourceStoreCb): void
    store_metadata_sync(media: Media, keys: KeyID[] | null, flags: WriteFlags): KeyID[]
    store_sync(parent: Media | null, media: Media, flags: WriteFlags): void
    supported_keys(): KeyID[]
    supported_operations(): number
    test_media_from_uri(uri: string): boolean
    writable_keys(): KeyID[]
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
    /* Virtual methods of Grl.Source */
    vfunc_browse(bs: SourceBrowseSpec): void
    vfunc_cancel(operation_id: number): void
    vfunc_get_caps(operation: SupportedOps): Caps
    vfunc_may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean
    vfunc_media_from_uri(mfus: SourceMediaFromUriSpec): void
    vfunc_notify_change_start(): boolean
    vfunc_notify_change_stop(): boolean
    vfunc_query(qs: SourceQuerySpec): void
    vfunc_remove(rs: SourceRemoveSpec): void
    vfunc_resolve(ms: SourceResolveSpec): void
    vfunc_search(ss: SourceSearchSpec): void
    vfunc_slow_keys(): KeyID[]
    vfunc_store(ss: SourceStoreSpec): void
    vfunc_store_metadata(sms: SourceStoreMetadataSpec): void
    vfunc_supported_keys(): KeyID[]
    vfunc_supported_operations(): SupportedOps
    vfunc_test_media_from_uri(uri: string): boolean
    vfunc_writable_keys(): KeyID[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Grl.Source */
    connect(sigName: "content-changed", callback: (($obj: Source, changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean) => void)): number
    connect_after(sigName: "content-changed", callback: (($obj: Source, changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean) => void)): number
    emit(sigName: "content-changed", changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-split-threshold", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-split-threshold", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::plugin", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rank", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rank", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-desc", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-icon", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-icon", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-tags", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-tags", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-media", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-media", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Source_ConstructProps)
    _init (config?: Source_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class CapsClass {
    /* Fields of Grl.CapsClass */
    parent: GObject.ObjectClass
    static name: string
}
export class CapsPrivate {
    static name: string
}
export abstract class ConfigClass {
    /* Fields of Grl.ConfigClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ConfigPrivate {
    static name: string
}
export abstract class DataClass {
    /* Fields of Grl.DataClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DataPrivate {
    static name: string
}
export class LogDomain {
    /* Methods of Grl.LogDomain */
    free(): void
    static name: string
}
export abstract class MediaClass {
    /* Fields of Grl.MediaClass */
    parent_class: DataClass
    static name: string
}
export class MediaPrivate {
    static name: string
}
export abstract class OperationOptionsClass {
    /* Fields of Grl.OperationOptionsClass */
    parent: GObject.ObjectClass
    static name: string
}
export class OperationOptionsPrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of Grl.PluginClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PluginDescriptor {
    /* Fields of Grl.PluginDescriptor */
    major_version: number
    minor_version: number
    id: string
    name: string
    description: string
    author: string
    version: string
    license: string
    site: string
    deinit: PluginDeinitFunc
    register_keys: PluginRegisterKeysFunc
    static name: string
}
export class PluginPrivate {
    static name: string
}
export class RangeValue {
    /* Fields of Grl.RangeValue */
    min: any
    max: any
    /* Methods of Grl.RangeValue */
    dup(): RangeValue
    free(): void
    static name: string
    static new(min: any, max: any): RangeValue
    constructor(min: any, max: any)
    /* Static methods and pseudo-constructors */
    static new(min: any, max: any): RangeValue
    static hashtable_insert(hash_table: GLib.HashTable, key: object | null, min: any, max: any): void
    static hashtable_new(): GLib.HashTable
}
export abstract class RegistryClass {
    /* Fields of Grl.RegistryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RegistryPrivate {
    static name: string
}
export abstract class RelatedKeysClass {
    /* Fields of Grl.RelatedKeysClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RelatedKeysPrivate {
    static name: string
}
export class SourceBrowseSpec {
    /* Fields of Grl.SourceBrowseSpec */
    source: Source
    operation_id: number
    container: Media
    keys: object[]
    options: OperationOptions
    callback: SourceResultCb
    user_data: object
    static name: string
}
export abstract class SourceClass {
    /* Fields of Grl.SourceClass */
    parent_class: GObject.ObjectClass
    supported_operations: (source: Source) => SupportedOps
    supported_keys: (source: Source) => KeyID[]
    slow_keys: (source: Source) => KeyID[]
    writable_keys: (source: Source) => KeyID[]
    get_caps: (source: Source, operation: SupportedOps) => Caps
    resolve: (source: Source, ms: SourceResolveSpec) => void
    may_resolve: (source: Source, media: Media, key_id: KeyID, missing_keys: KeyID[]) => boolean
    test_media_from_uri: (source: Source, uri: string) => boolean
    media_from_uri: (source: Source, mfus: SourceMediaFromUriSpec) => void
    browse: (source: Source, bs: SourceBrowseSpec) => void
    search: (source: Source, ss: SourceSearchSpec) => void
    query: (source: Source, qs: SourceQuerySpec) => void
    remove: (source: Source, rs: SourceRemoveSpec) => void
    store: (source: Source, ss: SourceStoreSpec) => void
    store_metadata: (source: Source, sms: SourceStoreMetadataSpec) => void
    cancel: (source: Source, operation_id: number) => void
    notify_change_start: (source: Source) => boolean
    notify_change_stop: (source: Source) => boolean
    static name: string
}
export class SourceMediaFromUriSpec {
    /* Fields of Grl.SourceMediaFromUriSpec */
    source: Source
    operation_id: number
    uri: string
    keys: object[]
    options: OperationOptions
    callback: SourceResolveCb
    user_data: object
    static name: string
}
export class SourcePrivate {
    static name: string
}
export class SourceQuerySpec {
    /* Fields of Grl.SourceQuerySpec */
    source: Source
    operation_id: number
    query: string
    keys: object[]
    options: OperationOptions
    callback: SourceResultCb
    user_data: object
    static name: string
}
export class SourceRemoveSpec {
    /* Fields of Grl.SourceRemoveSpec */
    source: Source
    media_id: string
    media: Media
    callback: SourceRemoveCb
    user_data: object
    static name: string
}
export class SourceResolveSpec {
    /* Fields of Grl.SourceResolveSpec */
    source: Source
    operation_id: number
    media: Media
    keys: object[]
    options: OperationOptions
    callback: SourceResolveCb
    user_data: object
    static name: string
}
export class SourceSearchSpec {
    /* Fields of Grl.SourceSearchSpec */
    source: Source
    operation_id: number
    text: string
    keys: object[]
    options: OperationOptions
    callback: SourceResultCb
    user_data: object
    static name: string
}
export class SourceStoreMetadataSpec {
    /* Fields of Grl.SourceStoreMetadataSpec */
    source: Source
    media: Media
    keys: object[]
    flags: WriteFlags
    callback: SourceStoreCb
    user_data: object
    failed_keys: object[]
    static name: string
}
export class SourceStoreSpec {
    /* Fields of Grl.SourceStoreSpec */
    source: Source
    parent: Media
    media: Media
    callback: SourceStoreCb
    user_data: object
    static name: string
}
export type KeyID = number