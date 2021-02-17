/**
 * TotemPlParser-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace TotemPlParser {

export enum ParserError {
    NO_DISC,
    MOUNT_FAILED,
    EMPTY_PLAYLIST,
}
export enum ParserResult {
    UNHANDLED,
    ERROR,
    SUCCESS,
    IGNORED,
    CANCELLED,
}
export enum ParserType {
    PLS,
    M3U,
    M3U_DOS,
    XSPF,
    IRIVER_PLA,
}
export const PARSER_FIELD_ABSTRACT: string
export const PARSER_FIELD_ALBUM: string
export const PARSER_FIELD_AUDIO_TRACK: string
export const PARSER_FIELD_AUTHOR: string
export const PARSER_FIELD_AUTOPLAY: string
export const PARSER_FIELD_BASE: string
export const PARSER_FIELD_CONTACT: string
export const PARSER_FIELD_CONTENT_TYPE: string
export const PARSER_FIELD_COPYRIGHT: string
export const PARSER_FIELD_DESCRIPTION: string
export const PARSER_FIELD_DOWNLOAD_URI: string
export const PARSER_FIELD_DURATION: string
export const PARSER_FIELD_DURATION_MS: string
export const PARSER_FIELD_ENDTIME: string
export const PARSER_FIELD_FILESIZE: string
export const PARSER_FIELD_GENRE: string
export const PARSER_FIELD_ID: string
export const PARSER_FIELD_IMAGE_URI: string
export const PARSER_FIELD_IS_PLAYLIST: string
export const PARSER_FIELD_LANGUAGE: string
export const PARSER_FIELD_MOREINFO: string
export const PARSER_FIELD_PLAYING: string
export const PARSER_FIELD_PUB_DATE: string
export const PARSER_FIELD_SCREENSIZE: string
export const PARSER_FIELD_STARTTIME: string
export const PARSER_FIELD_SUBTITLE_URI: string
export const PARSER_FIELD_TITLE: string
export const PARSER_FIELD_UI_MODE: string
export const PARSER_FIELD_URI: string
export const PARSER_FIELD_VOLUME: string
export const PARSER_VERSION_MAJOR: number
export const PARSER_VERSION_MICRO: number
export const PARSER_VERSION_MINOR: number
export function parserErrorQuark(): GLib.Quark
export function parserMetadataGetType(): GObject.Type
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
    debug?: boolean
    disableUnsafe?: boolean
    force?: boolean
    recurse?: boolean
}
export class Parser {
    /* Properties of TotemPlParser.Parser */
    debug: boolean
    disableUnsafe: boolean
    force: boolean
    recurse: boolean
    /* Fields of TotemPlParser.Parser */
    parent: GObject.Object
    priv: ParserPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TotemPlParser.Parser */
    addIgnoredGlob(glob: string): void
    addIgnoredMimetype(mimetype: string): void
    addIgnoredScheme(scheme: string): void
    parse(uri: string, fallback: boolean): ParserResult
    parseAsync(uri: string, fallback: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    parseFinish(asyncResult: Gio.AsyncResult): ParserResult
    parseWithBase(uri: string, base: string | null, fallback: boolean): ParserResult
    parseWithBaseAsync(uri: string, base: string | null, fallback: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save(playlist: Playlist, dest: Gio.File, title: string, type: ParserType): boolean
    saveAsync(playlist: Playlist, dest: Gio.File, title: string, type: ParserType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(asyncResult: Gio.AsyncResult): boolean
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
    /* Virtual methods of TotemPlParser.Parser */
    vfuncEntryParsed(uri: string, metadata: GLib.HashTable): void
    vfuncPlaylistEnded(uri: string): void
    vfuncPlaylistStarted(uri: string, metadata: GLib.HashTable): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TotemPlParser.Parser */
    connect(sigName: "entry-parsed", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    connect_after(sigName: "entry-parsed", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    emit(sigName: "entry-parsed", uri: string, metadata: GLib.HashTable): void
    on(sigName: "entry-parsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "entry-parsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "entry-parsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "playlist-ended", callback: (($obj: Parser, uri: string) => void)): number
    connect_after(sigName: "playlist-ended", callback: (($obj: Parser, uri: string) => void)): number
    emit(sigName: "playlist-ended", uri: string): void
    on(sigName: "playlist-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "playlist-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "playlist-ended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "playlist-started", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    connect_after(sigName: "playlist-started", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    emit(sigName: "playlist-started", uri: string, metadata: GLib.HashTable): void
    on(sigName: "playlist-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "playlist-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "playlist-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::debug", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-unsafe", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-unsafe", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recurse", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurse", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recurse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recurse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recurse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static canParseFromData(data: string, len: number, debug: boolean): boolean
    static canParseFromFilename(filename: string, debug: boolean): boolean
    static canParseFromUri(uri: string, debug: boolean): boolean
    static parseDate(dateStr: string, debug: boolean): number
    static parseDuration(duration: string, debug: boolean): number
    static $gtype: GObject.Type
}
export interface Playlist_ConstructProps extends GObject.Object_ConstructProps {
}
export class Playlist {
    /* Fields of TotemPlParser.Playlist */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TotemPlParser.Playlist */
    append(): /* iter */ PlaylistIter
    getValue(iter: PlaylistIter, key: string, value: any): boolean
    insert(position: number): /* iter */ PlaylistIter
    iterFirst(): [ /* returnType */ boolean, /* iter */ PlaylistIter ]
    iterNext(iter: PlaylistIter): boolean
    iterPrev(iter: PlaylistIter): boolean
    prepend(): /* iter */ PlaylistIter
    setValue(iter: PlaylistIter, key: string, value: any): boolean
    size(): number
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
    connect(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Playlist_ConstructProps)
    _init (config?: Playlist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Playlist
    static $gtype: GObject.Type
}
export abstract class ParserClass {
    /* Fields of TotemPlParser.ParserClass */
    parentClass: GObject.ObjectClass
    entryParsed: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlistStarted: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlistEnded: (parser: Parser, uri: string) => void
    static name: string
}
export class ParserPrivate {
    static name: string
}
export abstract class PlaylistClass {
    /* Fields of TotemPlParser.PlaylistClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PlaylistIter {
    static name: string
}
}