/**
 * Grl-0.3
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace Grl {

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
export function dateTimeFromIso8601(date: string): GLib.DateTime
export function deinit(): void
export function gValueDup(value: any): any
export function gValueFree(value: any): void
export function gValueHashtableNew(): GLib.HashTable
export function gValueHashtableNewDirect(): GLib.HashTable
export function gValueNew(gType: GObject.Type): any
export function init(argv?: string[] | null): /* argv */ string[] | null
export function initGetOptionGroup(): GLib.OptionGroup
export function logConfigure(config: string): void
export function metadataKeyGetDesc(key: KeyID): string
export function metadataKeyGetName(key: KeyID): string
export function metadataKeyGetType(key: KeyID): GObject.Type
export function multipleGetMediaFromUri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): void
export function multipleSearch(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
export function multipleSearchSync(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions): Media[]
export function operationCancel(operationId: number): void
export function operationGetData(operationId: number): object | null
export function operationSetData(operationId: number, userData?: object | null): void
export function operationSetDataFull(operationId: number, userData?: object | null, destroyFunc?: GLib.DestroyNotify | null): void
export function pagingTranslate(skip: number, count: number, maxPageSize: number, pageSize: number, pageNumber: number, internalOffset: number): void
export function rangeValueHashtableInsert(hashTable: GLib.HashTable, key: object | null, min: any, max: any): void
export function rangeValueHashtableNew(): GLib.HashTable
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
    (source: Source, operationId: number, media: Media, error?: GLib.Error | null): void
}
export interface SourceResultCb {
    (source: Source, operationId: number, media: Media | null, remaining: number, error?: GLib.Error | null): void
}
export interface SourceStoreCb {
    (source: Source, media: Media, failedKeys: KeyID[], error?: GLib.Error | null): void
}
export interface Caps_ConstructProps extends GObject.Object_ConstructProps {
}
export class Caps {
    /* Fields of Grl.Caps */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.Caps */
    getKeyFilter(): KeyID[]
    getKeyRangeFilter(): KeyID[]
    getTypeFilter(): TypeFilter
    isKeyFilter(key: KeyID): boolean
    isKeyRangeFilter(key: KeyID): boolean
    setKeyFilter(keys: KeyID[]): void
    setKeyRangeFilter(keys: KeyID[]): void
    setTypeFilter(filter: TypeFilter): void
    testOption(key: string, value: any): boolean
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Caps, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Caps, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    grlReserved: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.Config */
    getApiKey(): string
    getApiKeyBlob(size: number): number
    getApiSecret(): string
    getApiToken(): string
    getApiTokenSecret(): string
    getBinary(param: string, size?: number | null): number
    getBoolean(param: string): boolean
    getFloat(param: string): number
    getInt(param: string): number
    getPassword(): string
    getPlugin(): string
    getSource(): string
    getString(param: string): string
    getUsername(): string
    hasParam(param: string): boolean
    set(param: string, value: any): void
    setApiKey(key: string): void
    setApiKeyBlob(blob: number, size: number): void
    setApiSecret(secret: string): void
    setApiToken(token: string): void
    setApiTokenSecret(secret: string): void
    setBinary(param: string, blob: number, size: number): void
    setBoolean(param: string, value: boolean): void
    setFloat(param: string, value: number): void
    setInt(param: string, value: number): void
    setPassword(password: string): void
    setPlugin(plugin: string): void
    setSource(source: string): void
    setString(param: string, value: string): void
    setUsername(username: string): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    grlReserved: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.Data */
    addBinary(key: KeyID, buf: number, size: number): void
    addBoxed(key: KeyID, boxed?: object | null): void
    addFloat(key: KeyID, floatvalue: number): void
    addForId(keyName: string, value: any): boolean
    addInt(key: KeyID, intvalue: number): void
    addInt64(key: KeyID, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    removeNth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, boolvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setForId(keyName: string, value: any): boolean
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: KeyID, strvalue: string): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Data_ConstructProps)
    _init (config?: Data_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Data
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends Data_ConstructProps {
    mediaType?: MediaType
}
export class Media {
    /* Properties of Grl.Media */
    mediaType: MediaType
    /* Fields of Grl.Media */
    parent: Data
    /* Fields of Grl.Data */
    priv: DataPrivate
    grlReserved: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.Media */
    addArtist(artist: string): void
    addAuthor(author: string): void
    addDirector(director: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addGenre(genre: string): void
    addKeyword(keyword: string): void
    addLyrics(lyrics: string): void
    addMbArtistId(mbArtistId: string): void
    addPerformer(performer: string): void
    addProducer(producer: string): void
    addRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void
    getAlbum(): string
    getAlbumArtist(): string
    getAlbumDiscNumber(): number
    getArtist(): string
    getArtistNth(index: number): string
    getAuthor(): string
    getAuthorNth(index: number): string
    getBitrate(): number
    getCameraModel(): string
    getCertificate(): string
    getChildcount(): number
    getComposer(): string
    getComposerNth(index: number): string
    getCreationDate(): GLib.DateTime
    getDescription(): string
    getDirector(): string
    getDirectorNth(index: number): string
    getDuration(): number
    getEpisode(): number
    getEpisodeTitle(): string
    getExposureTime(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getFavourite(): boolean
    getFlashUsed(): string
    getFramerate(): number
    getGenre(): string
    getGenreNth(index: number): string
    getHeight(): number
    getId(): string
    getIsoSpeed(): number
    getKeyword(): string
    getKeywordNth(index: number): string
    getLastPlayed(): GLib.DateTime
    getLastPosition(): number
    getLicense(): string
    getLyrics(): string
    getLyricsNth(index: number): string
    getMbAlbumId(): string
    getMbArtistId(): string
    getMbArtistIdNth(index: number): string
    getMbRecordingId(): string
    getMbReleaseGroupId(): string
    getMbReleaseId(): string
    getMbTrackId(): string
    getMediaType(): MediaType
    getMime(): string
    getModificationDate(): GLib.DateTime
    getOrientation(): number
    getOriginalTitle(): string
    getPerformer(): string
    getPerformerNth(index: number): string
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getProducer(): string
    getProducerNth(index: number): string
    getPublicationDate(): GLib.DateTime
    getRating(): number
    getRegion(): string
    getRegionData(): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getRegionDataNth(index: number): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getSeason(): number
    getShow(): string
    getSite(): string
    getSize(): number
    getSource(): string
    getStartTime(): number
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getTrackNumber(): number
    getUrl(): string
    getUrlData(framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    getUrlDataNth(index: number, framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    getWidth(): number
    isAudio(): boolean
    isContainer(): boolean
    isImage(): boolean
    isVideo(): boolean
    serialize(): string
    setAlbum(album: string): void
    setAlbumArtist(albumArtist: string): void
    setAlbumDiscNumber(discNumber: number): void
    setArtist(artist: string): void
    setAuthor(author: string): void
    setBitrate(bitrate: number): void
    setCameraModel(cameraModel: string): void
    setCertificate(certificate: string): void
    setChildcount(childcount: number): void
    setComposer(composer: string): void
    setCreationDate(creationDate: GLib.DateTime): void
    setDescription(description: string): void
    setDirector(director: string): void
    setDuration(duration: number): void
    setEpisode(episode: number): void
    setEpisodeTitle(episodeTitle: string): void
    setExposureTime(exposureTime: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setFavourite(favourite: boolean): void
    setFlashUsed(flashUsed: string): void
    setFramerate(framerate: number): void
    setGenre(genre: string): void
    setHeight(height: number): void
    setId(id: string): void
    setIsoSpeed(isoSpeed: number): void
    setKeyword(keyword: string): void
    setLastPlayed(lastPlayed: GLib.DateTime): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setLyrics(lyrics: string): void
    setMbAlbumId(mbAlbumId: string): void
    setMbArtistId(mbArtistId: string): void
    setMbRecordingId(mbRecordingId: string): void
    setMbReleaseGroupId(mbReleaseGroupId: string): void
    setMbReleaseId(mbReleaseId: string): void
    setMbTrackId(mbTrackId: string): void
    setMime(mime: string): void
    setModificationDate(modificationDate: GLib.DateTime): void
    setOrientation(orientation: number): void
    setOriginalTitle(originalTitle: string): void
    setPerformer(performer: string): void
    setPlayCount(playCount: number): void
    setProducer(producer: string): void
    setPublicationDate(date: GLib.DateTime): void
    setRating(rating: number, max: number): void
    setRegion(region: string): void
    setRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    setSeason(season: number): void
    setShow(show: string): void
    setSite(site: string): void
    setSize(size: number): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setTrackNumber(trackNumber: number): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void
    setWidth(width: number): void
    /* Methods of Grl.Data */
    addBinary(key: KeyID, buf: number, size: number): void
    addBoxed(key: KeyID, boxed?: object | null): void
    addFloat(key: KeyID, floatvalue: number): void
    addForId(keyName: string, value: any): boolean
    addInt(key: KeyID, intvalue: number): void
    addInt64(key: KeyID, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    removeNth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, boolvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setForId(keyName: string, value: any): boolean
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: KeyID, strvalue: string): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-type", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static audioNew(): Media
    static containerNew(): Media
    static imageNew(): Media
    static new(): Media
    static videoNew(): Media
    static unserialize(serial: string): Media
    static $gtype: GObject.Type
}
export interface OperationOptions_ConstructProps extends GObject.Object_ConstructProps {
}
export class OperationOptions {
    /* Fields of Grl.OperationOptions */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.OperationOptions */
    copy(): OperationOptions
    getCount(): number
    getKeyFilter(key: KeyID): any
    getKeyFilterList(): KeyID[]
    getKeyRangeFilter(key: KeyID): [ /* minValue */ any, /* maxValue */ any ]
    getKeyRangeFilterList(): KeyID[]
    getResolutionFlags(): ResolutionFlags
    getSkip(): number
    getTypeFilter(): TypeFilter
    obeyCaps(caps: Caps): [ /* returnType */ boolean, /* supportedOptions */ OperationOptions, /* unsupportedOptions */ OperationOptions ]
    setCount(count: number): boolean
    setKeyFilters(filters: GLib.HashTable): boolean
    setKeyFilterValue(key: KeyID, value: any): boolean
    setKeyRangeFilterValue(key: KeyID, minValue?: any, maxValue?: any): boolean
    setResolutionFlags(flags: ResolutionFlags): boolean
    setSkip(skip: number): boolean
    setTypeFilter(filter: TypeFilter): boolean
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OperationOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OperationOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.Plugin */
    getAuthor(): string
    getDescription(): string
    getFilename(): string
    getId(): string
    getLicense(): string
    getModuleName(): string
    getName(): string
    getSite(): string
    getSources(): Source[]
    getVersion(): string
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::loaded", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}
export class Registry {
    /* Fields of Grl.Registry */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.Registry */
    activateAllPlugins(): boolean
    activatePluginById(pluginId: string): boolean
    addConfig(config: Config): boolean
    addConfigFromFile(configFile: string): boolean
    addConfigFromResource(resourcePath: string): boolean
    addDirectory(path: string): void
    getMetadataKeys(): KeyID[]
    getPlugins(onlyLoaded: boolean): Plugin[]
    getSources(ranked: boolean): Source[]
    getSourcesByOperations(ops: SupportedOps, ranked: boolean): Source[]
    loadAllPlugins(activate: boolean): boolean
    loadPlugin(libraryFilename: string): boolean
    loadPluginDirectory(path: string): boolean
    lookupMetadataKey(keyName: string): KeyID
    lookupMetadataKeyDesc(key: KeyID): string
    lookupMetadataKeyName(key: KeyID): string
    lookupMetadataKeyRelation(key: KeyID): KeyID[]
    lookupMetadataKeyType(key: KeyID): GObject.Type
    lookupPlugin(pluginId: string): Plugin
    lookupSource(sourceId: string): Source
    metadataKeyValidate(key: KeyID, value: any): boolean
    registerMetadataKey(paramSpec: GObject.ParamSpec, bindKey: KeyID): KeyID
    registerSource(plugin: Plugin, source: Source): boolean
    unloadPlugin(pluginId: string): boolean
    unregisterSource(source: Source): boolean
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Grl.Registry */
    connect(sigName: "metadata-key-added", callback: (($obj: Registry, key: string) => void)): number
    connect_after(sigName: "metadata-key-added", callback: (($obj: Registry, key: string) => void)): number
    emit(sigName: "metadata-key-added", key: string): void
    on(sigName: "metadata-key-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "metadata-key-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "metadata-key-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-added", callback: (($obj: Registry, source: Source) => void)): number
    connect_after(sigName: "source-added", callback: (($obj: Registry, source: Source) => void)): number
    emit(sigName: "source-added", source: Source): void
    on(sigName: "source-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-removed", callback: (($obj: Registry, source: Source) => void)): number
    connect_after(sigName: "source-removed", callback: (($obj: Registry, source: Source) => void)): number
    emit(sigName: "source-removed", source: Source): void
    on(sigName: "source-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface RelatedKeys_ConstructProps extends GObject.Object_ConstructProps {
}
export class RelatedKeys {
    /* Fields of Grl.RelatedKeys */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.RelatedKeys */
    dup(): RelatedKeys
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    remove(key: KeyID): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, booleanvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setForId(keyName: string, value: any): boolean
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setString(key: KeyID, strvalue: string): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RelatedKeys_ConstructProps)
    _init (config?: RelatedKeys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelatedKeys
    static $gtype: GObject.Type
}
export interface Source_ConstructProps extends GObject.Object_ConstructProps {
    autoSplitThreshold?: number
    plugin?: Plugin
    rank?: number
    sourceDesc?: string
    sourceIcon?: Gio.Icon
    sourceId?: string
    sourceName?: string
    sourceTags?: string[]
    supportedMedia?: SupportedMedia
}
export class Source {
    /* Properties of Grl.Source */
    autoSplitThreshold: number
    plugin: Plugin
    rank: number
    sourceDesc: string
    sourceIcon: Gio.Icon
    sourceId: string
    sourceName: string
    sourceTags: string[]
    supportedMedia: SupportedMedia
    /* Fields of Grl.Source */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl.Source */
    browse(container: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    browseSync(container: Media | null, keys: KeyID[], options: OperationOptions): Media[]
    getAutoSplitThreshold(): number
    getCaps(operation: SupportedOps): Caps
    getDescription(): string
    getIcon(): Gio.Icon
    getId(): string
    getMediaFromUri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    getMediaFromUriSync(uri: string, keys: KeyID[], options: OperationOptions): Media
    getName(): string
    getPlugin(): Plugin
    getRank(): number
    getSupportedMedia(): SupportedMedia
    getTags(): string[]
    mayResolve(media: Media, keyId: KeyID, missingKeys: KeyID[]): boolean
    notifyChange(media: Media | null, changeType: SourceChangeType, locationUnknown: boolean): void
    notifyChangeList(changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean): void
    notifyChangeStart(): boolean
    notifyChangeStop(): boolean
    query(query: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    querySync(query: string, keys: KeyID[], options: OperationOptions): Media[]
    remove(media: Media, callback: SourceRemoveCb): void
    removeSync(media: Media): void
    resolve(media: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    resolveSync(media: Media | null, keys: KeyID[], options: OperationOptions): Media
    search(text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    searchSync(text: string, keys: KeyID[], options: OperationOptions): Media[]
    setAutoSplitThreshold(threshold: number): void
    slowKeys(): KeyID[]
    store(parent: Media | null, media: Media, flags: WriteFlags, callback: SourceStoreCb): void
    storeMetadata(media: Media, keys: KeyID[] | null, flags: WriteFlags, callback: SourceStoreCb): void
    storeMetadataSync(media: Media, keys: KeyID[] | null, flags: WriteFlags): KeyID[]
    storeSync(parent: Media | null, media: Media, flags: WriteFlags): void
    supportedKeys(): KeyID[]
    supportedOperations(): number
    testMediaFromUri(uri: string): boolean
    writableKeys(): KeyID[]
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Grl.Source */
    vfuncBrowse(bs: SourceBrowseSpec): void
    vfuncCancel(operationId: number): void
    vfuncGetCaps(operation: SupportedOps): Caps
    vfuncMayResolve(media: Media, keyId: KeyID, missingKeys: KeyID[]): boolean
    vfuncMediaFromUri(mfus: SourceMediaFromUriSpec): void
    vfuncNotifyChangeStart(): boolean
    vfuncNotifyChangeStop(): boolean
    vfuncQuery(qs: SourceQuerySpec): void
    vfuncRemove(rs: SourceRemoveSpec): void
    vfuncResolve(ms: SourceResolveSpec): void
    vfuncSearch(ss: SourceSearchSpec): void
    vfuncSlowKeys(): KeyID[]
    vfuncStore(ss: SourceStoreSpec): void
    vfuncStoreMetadata(sms: SourceStoreMetadataSpec): void
    vfuncSupportedKeys(): KeyID[]
    vfuncSupportedOperations(): SupportedOps
    vfuncTestMediaFromUri(uri: string): boolean
    vfuncWritableKeys(): KeyID[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Grl.Source */
    connect(sigName: "content-changed", callback: (($obj: Source, changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean) => void)): number
    connect_after(sigName: "content-changed", callback: (($obj: Source, changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean) => void)): number
    emit(sigName: "content-changed", changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean): void
    on(sigName: "content-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "content-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "content-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-split-threshold", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-split-threshold", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugin", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rank", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rank", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-desc", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-icon", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-icon", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-tags", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-tags", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-media", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-media", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    parentClass: GObject.ObjectClass
    static name: string
}
export class ConfigPrivate {
    static name: string
}
export abstract class DataClass {
    /* Fields of Grl.DataClass */
    parentClass: GObject.ObjectClass
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
    parentClass: DataClass
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
    parentClass: GObject.ObjectClass
    static name: string
}
export class PluginDescriptor {
    /* Fields of Grl.PluginDescriptor */
    majorVersion: number
    minorVersion: number
    id: string
    name: string
    description: string
    author: string
    version: string
    license: string
    site: string
    deinit: PluginDeinitFunc
    registerKeys: PluginRegisterKeysFunc
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
    static hashtableInsert(hashTable: GLib.HashTable, key: object | null, min: any, max: any): void
    static hashtableNew(): GLib.HashTable
}
export abstract class RegistryClass {
    /* Fields of Grl.RegistryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RegistryPrivate {
    static name: string
}
export abstract class RelatedKeysClass {
    /* Fields of Grl.RelatedKeysClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RelatedKeysPrivate {
    static name: string
}
export class SourceBrowseSpec {
    /* Fields of Grl.SourceBrowseSpec */
    source: Source
    operationId: number
    container: Media
    keys: object[]
    options: OperationOptions
    callback: SourceResultCb
    userData: object
    static name: string
}
export abstract class SourceClass {
    /* Fields of Grl.SourceClass */
    parentClass: GObject.ObjectClass
    supportedOperations: (source: Source) => SupportedOps
    supportedKeys: (source: Source) => KeyID[]
    slowKeys: (source: Source) => KeyID[]
    writableKeys: (source: Source) => KeyID[]
    getCaps: (source: Source, operation: SupportedOps) => Caps
    resolve: (source: Source, ms: SourceResolveSpec) => void
    mayResolve: (source: Source, media: Media, keyId: KeyID, missingKeys: KeyID[]) => boolean
    testMediaFromUri: (source: Source, uri: string) => boolean
    mediaFromUri: (source: Source, mfus: SourceMediaFromUriSpec) => void
    browse: (source: Source, bs: SourceBrowseSpec) => void
    search: (source: Source, ss: SourceSearchSpec) => void
    query: (source: Source, qs: SourceQuerySpec) => void
    remove: (source: Source, rs: SourceRemoveSpec) => void
    store: (source: Source, ss: SourceStoreSpec) => void
    storeMetadata: (source: Source, sms: SourceStoreMetadataSpec) => void
    cancel: (source: Source, operationId: number) => void
    notifyChangeStart: (source: Source) => boolean
    notifyChangeStop: (source: Source) => boolean
    static name: string
}
export class SourceMediaFromUriSpec {
    /* Fields of Grl.SourceMediaFromUriSpec */
    source: Source
    operationId: number
    uri: string
    keys: object[]
    options: OperationOptions
    callback: SourceResolveCb
    userData: object
    static name: string
}
export class SourcePrivate {
    static name: string
}
export class SourceQuerySpec {
    /* Fields of Grl.SourceQuerySpec */
    source: Source
    operationId: number
    query: string
    keys: object[]
    options: OperationOptions
    callback: SourceResultCb
    userData: object
    static name: string
}
export class SourceRemoveSpec {
    /* Fields of Grl.SourceRemoveSpec */
    source: Source
    mediaId: string
    media: Media
    callback: SourceRemoveCb
    userData: object
    static name: string
}
export class SourceResolveSpec {
    /* Fields of Grl.SourceResolveSpec */
    source: Source
    operationId: number
    media: Media
    keys: object[]
    options: OperationOptions
    callback: SourceResolveCb
    userData: object
    static name: string
}
export class SourceSearchSpec {
    /* Fields of Grl.SourceSearchSpec */
    source: Source
    operationId: number
    text: string
    keys: object[]
    options: OperationOptions
    callback: SourceResultCb
    userData: object
    static name: string
}
export class SourceStoreMetadataSpec {
    /* Fields of Grl.SourceStoreMetadataSpec */
    source: Source
    media: Media
    keys: object[]
    flags: WriteFlags
    callback: SourceStoreCb
    userData: object
    failedKeys: object[]
    static name: string
}
export class SourceStoreSpec {
    /* Fields of Grl.SourceStoreSpec */
    source: Source
    parent: Media
    media: Media
    callback: SourceStoreCb
    userData: object
    static name: string
}
export type KeyID = number
}