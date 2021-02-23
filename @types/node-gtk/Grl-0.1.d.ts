/**
 * Grl-0.1
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace Grl {

export enum CoreError {
    BROWSE_FAILED,
    SEARCH_FAILED,
    SEARCH_NULL_UNSUPPORTED,
    QUERY_FAILED,
    METADATA_FAILED,
    RESOLVE_FAILED,
    MEDIA_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SET_METADATA_FAILED,
    MEDIA_FROM_URI_FAILED,
    CONFIG_LOAD_FAILED,
    CONFIG_FAILED,
    UNREGISTER_SOURCE_FAILED,
    LOAD_PLUGIN_FAILED,
    UNLOAD_PLUGIN_FAILED,
    REGISTER_METADATA_KEY_FAILED,
    NOTIFY_CHANGED_FAILED,
    OPERATION_CANCELLED,
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
export enum MediaSourceChangeType {
    CHANGED,
    ADDED,
    REMOVED,
}
export enum PluginRank {
    LOWEST,
    LOW,
    DEFAULT,
    HIGH,
    HIGHEST,
}
export enum MetadataResolutionFlags {
    NORMAL,
    FULL,
    IDLE_RELAY,
    FAST_ONLY,
}
export enum MetadataWritingFlags {
    NORMAL,
    FULL,
}
export enum SupportedOps {
    NONE,
    METADATA,
    RESOLVE,
    BROWSE,
    SEARCH,
    QUERY,
    STORE,
    STORE_PARENT,
    REMOVE,
    SET_METADATA,
    MEDIA_FROM_URI,
    NOTIFY_CHANGE,
}
export const CONFIG_KEY_APIKEY: string
export const CONFIG_KEY_APIKEY_BLOB: string
export const CONFIG_KEY_APISECRET: string
export const CONFIG_KEY_APITOKEN: string
export const CONFIG_KEY_PASSWORD: string
export const CONFIG_KEY_PLUGIN: string
export const CONFIG_KEY_SOURCE: string
export const CONFIG_KEY_USERNAME: string
export const KEYID_FORMAT: string
export const MEDIA_PLUGIN_AUTHOR: string
export const MEDIA_PLUGIN_DESCRIPTION: string
export const MEDIA_PLUGIN_LICENSE: string
export const MEDIA_PLUGIN_NAME: string
export const MEDIA_PLUGIN_SITE: string
export const MEDIA_PLUGIN_VERSION: string
export const METADATA_KEY_CHILDCOUNT_UNKNOWN: number
export const PADDING: number
export const PADDING_SMALL: number
export const PLUGIN_LIST_VAR: string
export const PLUGIN_PATH_VAR: string
export const PLUGIN_RANKS_VAR: string
export const SOURCE_REMAINING_UNKNOWN: number
export function init(argv?: string[] | null): { argv: string[] | null }
export function logConfigure(config: string): void
export function marshalVOIDBOXEDENUMBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function metadataKeyGetDesc(key: GObject.ParamSpec): string
export function metadataKeyGetName(key: GObject.ParamSpec): string
export function metadataKeySetupSystemKeys(registry: PluginRegistry): void
export function multipleCancel(searchId: number): void
export function multipleGetMediaFromUri(uri: string, keys: KeyID[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): void
export function multipleSearch(sources: MediaSource[] | null, text: string, keys: GObject.ParamSpec[], count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
export function multipleSearchSync(sources: MediaSource[] | null, text: string, keys: GObject.ParamSpec[], count: number, flags: MetadataResolutionFlags): Media[]
export function operationCancel(operationId: number): void
export function operationGetData(operationId: number): object
export function operationSetData(operationId: number, userData: object): void
export function pagingTranslate(skip: number, count: number, maxPageSize: number, pageSize: number, pageNumber: number, internalOffset: number): void
export interface MediaSourceMetadataCb {
    (source: MediaSource, operationId: number, media: Media, error: number): void
}
export interface MediaSourceRemoveCb {
    (source: MediaSource, media: Media, error: number): void
}
export interface MediaSourceResultCb {
    (source: MediaSource, operationId: number, media: Media, remaining: number, error: number): void
}
export interface MediaSourceStoreCb {
    (source: MediaSource, parent: MediaBox, media: Media, error: number): void
}
export interface MetadataSourceResolveCb {
    (source: MetadataSource, operationId: number, media: Media, error: number): void
}
export interface MetadataSourceSetMetadataCb {
    (source: MetadataSource, media: Media, failedKeys: GObject.ParamSpec[], error: number): void
}
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
export class Config {
    /* Fields of Grl-0.1.Grl.Config */
    parent: GObject.Object
    priv: ConfigPrivate
    grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Config */
    getApiKey(): string
    getApiKeyBlob(size: number): number
    getApiSecret(): string
    getApiToken(): string
    getBinary(param: string, size: number): number
    getBoolean(param: string): boolean
    getFloat(param: string): number
    getInt(param: string): number
    getPassword(): string
    getPlugin(): string
    getString(param: string): string
    getUsername(): string
    hasParam(param: string): boolean
    set(param: string, value: any): void
    setApiKey(key: string): void
    setApiKeyBlob(blob: number, size: number): void
    setApiSecret(secret: string): void
    setApiToken(token: string): void
    setBinary(param: string, blob: number, size: number): void
    setBoolean(param: string, value: boolean): void
    setFloat(param: string, value: number): void
    setInt(param: string, value: number): void
    setPassword(password: string): void
    setPlugin(plugin: string): void
    setSource(source: string): void
    setString(param: string, value: string): void
    setUsername(username: string): void
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(plugin: string, source?: string | null): Config
    static $gtype: GObject.Type
}
export interface Data_ConstructProps extends GObject.Object_ConstructProps {
    overwrite?: boolean
}
export class Data {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Data */
    parent: GObject.Object
    priv: DataPrivate
    grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    addBinary(key: GObject.ParamSpec, buf: number, size: number): void
    addFloat(key: GObject.ParamSpec, floatvalue: number): void
    addInt(key: GObject.ParamSpec, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    getAllSingleRelatedKeys(key: KeyID): any[]
    getAllSingleRelatedKeysString(key: KeyID): string[]
    getBinary(key: GObject.ParamSpec): { returnType: number, size: number }
    getFloat(key: GObject.ParamSpec): number
    getInt(key: GObject.ParamSpec): number
    getKeys(): GObject.ParamSpec[]
    getOverwrite(): boolean
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: GObject.ParamSpec): string
    hasKey(key: GObject.ParamSpec): boolean
    keyIsKnown(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    removeNth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    setInt(key: GObject.ParamSpec, intvalue: number): void
    setOverwrite(overwrite: boolean): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
}
export class Media {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): string
    getDate(): string
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getId(): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getRating(): number
    getSite(): string
    getSource(): string
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): { returnType: string, mime: string }
    getUrlDataNth(index: number): { returnType: string, mime: string }
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: string): void
    setDate(date: string): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setId(id: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setPlayCount(playCount: number): void
    setRating(rating: number, max: number): void
    setSite(site: string): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    addBinary(key: GObject.ParamSpec, buf: number, size: number): void
    addFloat(key: GObject.ParamSpec, floatvalue: number): void
    addInt(key: GObject.ParamSpec, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    getAllSingleRelatedKeys(key: KeyID): any[]
    getAllSingleRelatedKeysString(key: KeyID): string[]
    getBinary(key: GObject.ParamSpec): { returnType: number, size: number }
    getFloat(key: GObject.ParamSpec): number
    getInt(key: GObject.ParamSpec): number
    getKeys(): GObject.ParamSpec[]
    getOverwrite(): boolean
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: GObject.ParamSpec): string
    hasKey(key: GObject.ParamSpec): boolean
    keyIsKnown(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    removeNth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    setInt(key: GObject.ParamSpec, intvalue: number): void
    setOverwrite(overwrite: boolean): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Media
    static unserialize(serial: string): Media
    static $gtype: GObject.Type
}
export interface MediaAudio_ConstructProps extends Media_ConstructProps {
}
export class MediaAudio {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.MediaAudio */
    parent: Media
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaAudio */
    addArtist(artist: string): void
    addGenre(genre: string): void
    addLyrics(lyrics: string): void
    addUrlData(url: string, mime: string, bitrate: number): void
    getAlbum(): string
    getArtist(): string
    getArtistNth(index: number): string
    getBitrate(): number
    getGenre(): string
    getGenreNth(index: number): string
    getLyrics(): string
    getLyricsNth(index: number): string
    getTrackNumber(): number
    getUrlData(): { returnType: string, mime: string, bitrate: number }
    getUrlDataNth(index: number): { returnType: string, mime: string, bitrate: number }
    setAlbum(album: string): void
    setArtist(artist: string): void
    setBitrate(bitrate: number): void
    setGenre(genre: string): void
    setLyrics(lyrics: string): void
    setTrackNumber(trackNumber: number): void
    setUrlData(url: string, mime: string, bitrate: number): void
    /* Methods of Grl-0.1.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): string
    getDate(): string
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getId(): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getRating(): number
    getSite(): string
    getSource(): string
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): { returnType: string, mime: string }
    getUrlDataNth(index: number): { returnType: string, mime: string }
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: string): void
    setDate(date: string): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setId(id: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setPlayCount(playCount: number): void
    setRating(rating: number, max: number): void
    setSite(site: string): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    addBinary(key: GObject.ParamSpec, buf: number, size: number): void
    addFloat(key: GObject.ParamSpec, floatvalue: number): void
    addInt(key: GObject.ParamSpec, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    getAllSingleRelatedKeys(key: KeyID): any[]
    getAllSingleRelatedKeysString(key: KeyID): string[]
    getBinary(key: GObject.ParamSpec): { returnType: number, size: number }
    getFloat(key: GObject.ParamSpec): number
    getInt(key: GObject.ParamSpec): number
    getKeys(): GObject.ParamSpec[]
    getOverwrite(): boolean
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: GObject.ParamSpec): string
    hasKey(key: GObject.ParamSpec): boolean
    keyIsKnown(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    removeNth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    setInt(key: GObject.ParamSpec, intvalue: number): void
    setOverwrite(overwrite: boolean): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaAudio_ConstructProps)
    _init (config?: MediaAudio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaAudio
    static $gtype: GObject.Type
}
export interface MediaBox_ConstructProps extends Media_ConstructProps {
}
export class MediaBox {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.MediaBox */
    parent: Media
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaBox */
    getChildcount(): number
    setChildcount(childcount: number): void
    /* Methods of Grl-0.1.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): string
    getDate(): string
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getId(): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getRating(): number
    getSite(): string
    getSource(): string
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): { returnType: string, mime: string }
    getUrlDataNth(index: number): { returnType: string, mime: string }
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: string): void
    setDate(date: string): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setId(id: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setPlayCount(playCount: number): void
    setRating(rating: number, max: number): void
    setSite(site: string): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    addBinary(key: GObject.ParamSpec, buf: number, size: number): void
    addFloat(key: GObject.ParamSpec, floatvalue: number): void
    addInt(key: GObject.ParamSpec, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    getAllSingleRelatedKeys(key: KeyID): any[]
    getAllSingleRelatedKeysString(key: KeyID): string[]
    getBinary(key: GObject.ParamSpec): { returnType: number, size: number }
    getFloat(key: GObject.ParamSpec): number
    getInt(key: GObject.ParamSpec): number
    getKeys(): GObject.ParamSpec[]
    getOverwrite(): boolean
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: GObject.ParamSpec): string
    hasKey(key: GObject.ParamSpec): boolean
    keyIsKnown(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    removeNth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    setInt(key: GObject.ParamSpec, intvalue: number): void
    setOverwrite(overwrite: boolean): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaBox_ConstructProps)
    _init (config?: MediaBox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaBox
    static $gtype: GObject.Type
}
export interface MediaImage_ConstructProps extends Media_ConstructProps {
}
export class MediaImage {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.MediaImage */
    parent: Media
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaImage */
    addUrlData(url: string, mime: string, width: number, height: number): void
    getCameraModel(): string
    getExposureTime(): number
    getFlashUsed(): string
    getHeight(): number
    getIsoSpeed(): number
    getOrientation(): number
    getUrlData(width: number, height: number): { returnType: string, mime: string }
    getUrlDataNth(index: number, width: number, height: number): { returnType: string, mime: string }
    getWidth(): number
    setCameraModel(cameraModel: string): void
    setExposureTime(exposureTime: number): void
    setFlashUsed(flashUsed: string): void
    setHeight(height: number): void
    setIsoSpeed(isoSpeed: number): void
    setOrientation(orientation: number): void
    setSize(width: number, height: number): void
    setUrlData(url: string, mime: string, width: number, height: number): void
    setWidth(width: number): void
    /* Methods of Grl-0.1.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): string
    getDate(): string
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getId(): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getRating(): number
    getSite(): string
    getSource(): string
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): { returnType: string, mime: string }
    getUrlDataNth(index: number): { returnType: string, mime: string }
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: string): void
    setDate(date: string): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setId(id: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setPlayCount(playCount: number): void
    setRating(rating: number, max: number): void
    setSite(site: string): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    addBinary(key: GObject.ParamSpec, buf: number, size: number): void
    addFloat(key: GObject.ParamSpec, floatvalue: number): void
    addInt(key: GObject.ParamSpec, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    getAllSingleRelatedKeys(key: KeyID): any[]
    getAllSingleRelatedKeysString(key: KeyID): string[]
    getBinary(key: GObject.ParamSpec): { returnType: number, size: number }
    getFloat(key: GObject.ParamSpec): number
    getInt(key: GObject.ParamSpec): number
    getKeys(): GObject.ParamSpec[]
    getOverwrite(): boolean
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: GObject.ParamSpec): string
    hasKey(key: GObject.ParamSpec): boolean
    keyIsKnown(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    removeNth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    setInt(key: GObject.ParamSpec, intvalue: number): void
    setOverwrite(overwrite: boolean): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaImage_ConstructProps)
    _init (config?: MediaImage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaImage
    static $gtype: GObject.Type
}
export interface MediaPlugin_ConstructProps extends GObject.Object_ConstructProps {
}
export class MediaPlugin {
    /* Fields of Grl-0.1.Grl.MediaPlugin */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    getAuthor(): string
    getDescription(): string
    getFilename(): string
    getId(): string
    getInfo(key: string): string
    getInfoKeys(): string[]
    getLicense(): string
    getName(): string
    getRank(): number
    getSite(): string
    getVersion(): string
    setPluginInfo(info: PluginInfo): void
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
    connect(sigName: "notify", callback: (($obj: MediaPlugin, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MediaPlugin_ConstructProps)
    _init (config?: MediaPlugin_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaSource_ConstructProps extends MetadataSource_ConstructProps {
    autoSplitThreshold?: number
}
export class MediaSource {
    /* Properties of Grl-0.1.Grl.MediaSource */
    autoSplitThreshold: number
    /* Properties of Grl-0.1.Grl.MetadataSource */
    sourceDesc: string
    sourceId: string
    sourceName: string
    /* Fields of Grl-0.1.Grl.MediaSource */
    parent: MetadataSource
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaSource */
    browse(container: Media | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    browseSync(container: Media | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    cancel(operationId: number): void
    getAutoSplitThreshold(): number
    getMediaFromUri(uri: string, keys: KeyID[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): number
    getMediaFromUriSync(uri: string, keys: KeyID[], flags: MetadataResolutionFlags): Media
    getOperationData(operationId: number): object
    metadata(media: Media | null, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): number
    metadataSync(media: Media | null, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags): Media
    notifyChange(media: Media | null, changeType: MediaSourceChangeType, locationUnknown: boolean): void
    notifyChangeList(changedMedias: Media[], changeType: MediaSourceChangeType, locationUnknown: boolean): void
    notifyChangeStart(): boolean
    notifyChangeStop(): boolean
    query(query: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    querySync(query: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    remove(media: Media, callback: MediaSourceRemoveCb): void
    removeSync(media: Media): void
    search(text: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    searchSync(text: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    setAutoSplitThreshold(threshold: number): void
    setOperationData(operationId: number, data: object): void
    store(parent: MediaBox | null, media: Media, callback: MediaSourceStoreCb): void
    storeSync(parent: MediaBox | null, media: Media): void
    testMediaFromUri(uri: string): boolean
    /* Methods of Grl-0.1.Grl.MetadataSource */
    filterSlow(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): { returnType: GObject.ParamSpec[], keys: GObject.ParamSpec[] | null }
    filterSupported(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): { returnType: GObject.ParamSpec[], keys: GObject.ParamSpec[] | null }
    filterWritable(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): { returnType: GObject.ParamSpec[], keys: GObject.ParamSpec[] | null }
    genOperationId(): number
    getDescription(): string
    getId(): string
    getName(): string
    keyDepends(keyId: GObject.ParamSpec): GObject.ParamSpec[]
    mayResolve(media: Media, keyId: KeyID): { returnType: boolean, missingKeys: KeyID[] }
    operationIsCancelled(operationId: number): boolean
    operationIsCompleted(operationId: number): boolean
    operationIsFinished(operationId: number): boolean
    operationIsOngoing(operationId: number): boolean
    resolve(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags, callback: MetadataSourceResolveCb): number
    resolveSync(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags): Media
    setMetadata(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags, callback: MetadataSourceSetMetadataCb): void
    setMetadataSync(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags): GObject.ParamSpec[]
    setOperationCancelled(operationId: number): void
    setOperationCompleted(operationId: number): void
    setOperationFinished(operationId: number): void
    setOperationOngoing(operationId: number): void
    slowKeys(): GObject.ParamSpec[]
    supportedKeys(): GObject.ParamSpec[]
    supportedOperations(): number
    writableKeys(): GObject.ParamSpec[]
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    getAuthor(): string
    getFilename(): string
    getInfo(key: string): string
    getInfoKeys(): string[]
    getLicense(): string
    getRank(): number
    getSite(): string
    getVersion(): string
    setPluginInfo(info: PluginInfo): void
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
    /* Signals of Grl-0.1.Grl.MediaSource */
    connect(sigName: "content-changed", callback: (($obj: MediaSource, changedMedias: object[], changeType: MediaSourceChangeType, locationUnknown: boolean) => void)): number
    on(sigName: "content-changed", callback: (changedMedias: object[], changeType: MediaSourceChangeType, locationUnknown: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-changed", callback: (changedMedias: object[], changeType: MediaSourceChangeType, locationUnknown: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-changed", callback: (changedMedias: object[], changeType: MediaSourceChangeType, locationUnknown: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "content-changed", changedMedias: object[], changeType: MediaSourceChangeType, locationUnknown: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-split-threshold", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-split-threshold", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-desc", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-id", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-name", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaSource_ConstructProps)
    _init (config?: MediaSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaVideo_ConstructProps extends Media_ConstructProps {
}
export class MediaVideo {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.MediaVideo */
    parent: Media
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaVideo */
    addUrlData(url: string, mime: string, framerate: number, width: number, height: number): void
    getEpisode(): number
    getFramerate(): number
    getHeight(): number
    getSeason(): number
    getShow(): string
    getUrlData(framerate: number, width: number, height: number): { returnType: string, mime: string }
    getUrlDataNth(index: number, framerate: number, width: number, height: number): { returnType: string, mime: string }
    getWidth(): number
    setEpisode(episode: number): void
    setFramerate(framerate: number): void
    setHeight(height: number): void
    setSeason(season: number): void
    setShow(show: string): void
    setSize(width: number, height: number): void
    setUrlData(url: string, mime: string, framerate: number, width: number, height: number): void
    setWidth(width: number): void
    /* Methods of Grl-0.1.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): string
    getDate(): string
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getId(): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getRating(): number
    getSite(): string
    getSource(): string
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): { returnType: string, mime: string }
    getUrlDataNth(index: number): { returnType: string, mime: string }
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: string): void
    setDate(date: string): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setId(id: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setPlayCount(playCount: number): void
    setRating(rating: number, max: number): void
    setSite(site: string): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    addBinary(key: GObject.ParamSpec, buf: number, size: number): void
    addFloat(key: GObject.ParamSpec, floatvalue: number): void
    addInt(key: GObject.ParamSpec, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    getAllSingleRelatedKeys(key: KeyID): any[]
    getAllSingleRelatedKeysString(key: KeyID): string[]
    getBinary(key: GObject.ParamSpec): { returnType: number, size: number }
    getFloat(key: GObject.ParamSpec): number
    getInt(key: GObject.ParamSpec): number
    getKeys(): GObject.ParamSpec[]
    getOverwrite(): boolean
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: GObject.ParamSpec): string
    hasKey(key: GObject.ParamSpec): boolean
    keyIsKnown(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    removeNth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    setInt(key: GObject.ParamSpec, intvalue: number): void
    setOverwrite(overwrite: boolean): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaVideo_ConstructProps)
    _init (config?: MediaVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaVideo
    static $gtype: GObject.Type
}
export interface MetadataSource_ConstructProps extends MediaPlugin_ConstructProps {
    sourceDesc?: string
    sourceId?: string
    sourceName?: string
}
export class MetadataSource {
    /* Properties of Grl-0.1.Grl.MetadataSource */
    sourceDesc: string
    sourceId: string
    sourceName: string
    /* Fields of Grl-0.1.Grl.MetadataSource */
    parent: MediaPlugin
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MetadataSource */
    cancel(operationId: number): void
    filterSlow(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): { returnType: GObject.ParamSpec[], keys: GObject.ParamSpec[] | null }
    filterSupported(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): { returnType: GObject.ParamSpec[], keys: GObject.ParamSpec[] | null }
    filterWritable(keys: GObject.ParamSpec[] | null, returnFiltered: boolean): { returnType: GObject.ParamSpec[], keys: GObject.ParamSpec[] | null }
    genOperationId(): number
    getDescription(): string
    getId(): string
    getName(): string
    getOperationData(operationId: number): object
    keyDepends(keyId: GObject.ParamSpec): GObject.ParamSpec[]
    mayResolve(media: Media, keyId: KeyID): { returnType: boolean, missingKeys: KeyID[] }
    operationIsCancelled(operationId: number): boolean
    operationIsCompleted(operationId: number): boolean
    operationIsFinished(operationId: number): boolean
    operationIsOngoing(operationId: number): boolean
    resolve(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags, callback: MetadataSourceResolveCb): number
    resolveSync(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags): Media
    setMetadata(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags, callback: MetadataSourceSetMetadataCb): void
    setMetadataSync(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags): GObject.ParamSpec[]
    setOperationCancelled(operationId: number): void
    setOperationCompleted(operationId: number): void
    setOperationData(operationId: number, data: object): void
    setOperationFinished(operationId: number): void
    setOperationOngoing(operationId: number): void
    slowKeys(): GObject.ParamSpec[]
    supportedKeys(): GObject.ParamSpec[]
    supportedOperations(): number
    writableKeys(): GObject.ParamSpec[]
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    getAuthor(): string
    getFilename(): string
    getInfo(key: string): string
    getInfoKeys(): string[]
    getLicense(): string
    getRank(): number
    getSite(): string
    getVersion(): string
    setPluginInfo(info: PluginInfo): void
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
    connect(sigName: "notify", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::source-desc", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-id", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-name", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MetadataSource_ConstructProps)
    _init (config?: MetadataSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PluginRegistry_ConstructProps extends GObject.Object_ConstructProps {
}
export class PluginRegistry {
    /* Fields of Grl-0.1.Grl.PluginRegistry */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.PluginRegistry */
    addConfig(config: Config): boolean
    addConfigFromFile(configFile: string): boolean
    addDirectory(path: string): void
    getMetadataKeys(): GObject.ParamSpec[]
    getSources(ranked: boolean): MediaPlugin[]
    getSourcesByOperations(ops: SupportedOps, ranked: boolean): MediaPlugin[]
    load(libraryFilename: string): boolean
    loadAll(): boolean
    loadById(pluginId: string): boolean
    loadDirectory(path: string): boolean
    lookupMetadataKey(keyName: string): GObject.ParamSpec
    lookupMetadataKeyRelation(key: KeyID): GObject.ParamSpec[]
    lookupSource(sourceId: string): MediaPlugin
    registerMetadataKey(key: GObject.ParamSpec): GObject.ParamSpec
    registerMetadataKeyRelation(key1: KeyID, key2: KeyID): void
    registerSource(plugin: PluginInfo, source: MediaPlugin): boolean
    restrictPlugins(plugins: string): void
    unload(pluginId: string): boolean
    unregisterSource(source: MediaPlugin): boolean
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
    /* Signals of Grl-0.1.Grl.PluginRegistry */
    connect(sigName: "source-added", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    on(sigName: "source-added", callback: (plugin: MediaPlugin) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: (plugin: MediaPlugin) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: (plugin: MediaPlugin) => void): NodeJS.EventEmitter
    emit(sigName: "source-added", plugin: MediaPlugin): void
    connect(sigName: "source-removed", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    on(sigName: "source-removed", callback: (plugin: MediaPlugin) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: (plugin: MediaPlugin) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: (plugin: MediaPlugin) => void): NodeJS.EventEmitter
    emit(sigName: "source-removed", plugin: MediaPlugin): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginRegistry, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PluginRegistry_ConstructProps)
    _init (config?: PluginRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): PluginRegistry
    static $gtype: GObject.Type
}
export interface RelatedKeys_ConstructProps extends GObject.Object_ConstructProps {
}
export class RelatedKeys {
    /* Fields of Grl-0.1.Grl.RelatedKeys */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.RelatedKeys */
    add(key: GObject.ParamSpec): void
    dup(): RelatedKeys
    get(key: GObject.ParamSpec): any
    getBinary(key: GObject.ParamSpec): { returnType: number, size: number }
    getFloat(key: GObject.ParamSpec): number
    getInt(key: GObject.ParamSpec): number
    getKeys(): GObject.ParamSpec[]
    getString(key: GObject.ParamSpec): string
    hasKey(key: GObject.ParamSpec): boolean
    keyIsKnown(key: GObject.ParamSpec): boolean
    set(key: GObject.ParamSpec, value: any): void
    setBinary(key: GObject.ParamSpec, buf: number, size: number): void
    setFloat(key: GObject.ParamSpec, floatvalue: number): void
    setInt(key: GObject.ParamSpec, intvalue: number): void
    setString(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RelatedKeys_ConstructProps)
    _init (config?: RelatedKeys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelatedKeys
    static $gtype: GObject.Type
}
export abstract class ConfigClass {
    /* Fields of Grl-0.1.Grl.ConfigClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ConfigPrivate {
    static name: string
}
export abstract class DataClass {
    /* Fields of Grl-0.1.Grl.DataClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DataPrivate {
    static name: string
}
export class LogDomain {
    /* Methods of Grl-0.1.Grl.LogDomain */
    free(): void
    static name: string
}
export abstract class MediaAudioClass {
    /* Fields of Grl-0.1.Grl.MediaAudioClass */
    parentClass: MediaClass
    static name: string
}
export abstract class MediaBoxClass {
    /* Fields of Grl-0.1.Grl.MediaBoxClass */
    parentClass: MediaClass
    static name: string
}
export abstract class MediaClass {
    /* Fields of Grl-0.1.Grl.MediaClass */
    parentClass: DataClass
    static name: string
}
export abstract class MediaImageClass {
    /* Fields of Grl-0.1.Grl.MediaImageClass */
    parentClass: MediaClass
    static name: string
}
export abstract class MediaPluginClass {
    /* Fields of Grl-0.1.Grl.MediaPluginClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MediaPluginPrivate {
    static name: string
}
export class MediaSourceBrowseSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceBrowseSpec */
    source: MediaSource
    browseId: number
    container: Media
    keys: object[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    userData: object
    static name: string
}
export abstract class MediaSourceClass {
    /* Fields of Grl-0.1.Grl.MediaSourceClass */
    parentClass: MetadataSourceClass
    browse: (source: MediaSource, bs: MediaSourceBrowseSpec) => void
    search: (source: MediaSource, ss: MediaSourceSearchSpec) => void
    query: (source: MediaSource, qs: MediaSourceQuerySpec) => void
    cancel: (source: MediaSource, operationId: number) => void
    metadata: (source: MediaSource, ms: MediaSourceMetadataSpec) => void
    store: (source: MediaSource, ss: MediaSourceStoreSpec) => void
    remove: (source: MediaSource, ss: MediaSourceRemoveSpec) => void
    testMediaFromUri: (source: MediaSource, uri: string) => boolean
    mediaFromUri: (source: MediaSource, mfss: MediaSourceMediaFromUriSpec) => void
    notifyChangeStart: (source: MediaSource) => boolean
    notifyChangeStop: (source: MediaSource) => boolean
    static name: string
}
export class MediaSourceMediaFromUriSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceMediaFromUriSpec */
    source: MediaSource
    mediaFromUriId: number
    uri: string
    keys: object[]
    flags: MetadataResolutionFlags
    callback: MediaSourceMetadataCb
    userData: object
    static name: string
}
export class MediaSourceMetadataSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceMetadataSpec */
    source: MediaSource
    metadataId: number
    media: Media
    keys: object[]
    flags: MetadataResolutionFlags
    callback: MediaSourceMetadataCb
    userData: object
    static name: string
}
export class MediaSourcePrivate {
    static name: string
}
export class MediaSourceQuerySpec {
    /* Fields of Grl-0.1.Grl.MediaSourceQuerySpec */
    source: MediaSource
    queryId: number
    query: string
    keys: object[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    userData: object
    static name: string
}
export class MediaSourceRemoveSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceRemoveSpec */
    source: MediaSource
    mediaId: string
    media: Media
    callback: MediaSourceRemoveCb
    userData: object
    static name: string
}
export class MediaSourceSearchSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceSearchSpec */
    source: MediaSource
    searchId: number
    text: string
    keys: object[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    userData: object
    static name: string
}
export class MediaSourceStoreSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceStoreSpec */
    source: MediaSource
    parent: MediaBox
    media: Media
    callback: MediaSourceStoreCb
    userData: object
    static name: string
}
export abstract class MediaVideoClass {
    /* Fields of Grl-0.1.Grl.MediaVideoClass */
    parentClass: MediaClass
    static name: string
}
export abstract class MetadataSourceClass {
    /* Fields of Grl-0.1.Grl.MetadataSourceClass */
    parentClass: MediaPluginClass
    operationId: number
    supportedOperations: (source: MetadataSource) => SupportedOps
    supportedKeys: (source: MetadataSource) => GObject.ParamSpec[]
    slowKeys: (source: MetadataSource) => GObject.ParamSpec[]
    keyDepends: (source: MetadataSource, keyId: GObject.ParamSpec) => GObject.ParamSpec[]
    writableKeys: (source: MetadataSource) => GObject.ParamSpec[]
    resolve: (source: MetadataSource, rs: MetadataSourceResolveSpec) => void
    setMetadata: (source: MetadataSource, sms: MetadataSourceSetMetadataSpec) => void
    mayResolve: (source: MetadataSource, media: Media, keyId: KeyID) => { returnType: boolean, missingKeys: KeyID[] }
    cancel: (source: MetadataSource, operationId: number) => void
    static name: string
}
export class MetadataSourcePrivate {
    static name: string
}
export class MetadataSourceResolveSpec {
    /* Fields of Grl-0.1.Grl.MetadataSourceResolveSpec */
    source: MetadataSource
    resolveId: number
    keys: object[]
    media: Media
    flags: MetadataResolutionFlags
    callback: MetadataSourceResolveCb
    userData: object
    static name: string
}
export class MetadataSourceSetMetadataSpec {
    /* Fields of Grl-0.1.Grl.MetadataSourceSetMetadataSpec */
    source: MetadataSource
    media: Media
    keys: object[]
    flags: MetadataWritingFlags
    callback: MetadataSourceSetMetadataCb
    userData: object
    failedKeys: object[]
    static name: string
}
export class PluginDescriptor {
    /* Fields of Grl-0.1.Grl.PluginDescriptor */
    pluginId: string
    pluginDeinit: () => void
    module: GModule.Module
    static name: string
}
export class PluginInfo {
    /* Fields of Grl-0.1.Grl.PluginInfo */
    id: string
    filename: string
    optionalInfo: GLib.HashTable
    rank: number
    static name: string
}
export abstract class PluginRegistryClass {
    /* Fields of Grl-0.1.Grl.PluginRegistryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PluginRegistryPrivate {
    static name: string
}
export abstract class RelatedKeysClass {
    /* Fields of Grl-0.1.Grl.RelatedKeysClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RelatedKeysPrivate {
    static name: string
}
export type KeyID = object
}