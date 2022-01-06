/**
 * TotemPlParser-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace TotemPlParser {

enum ParserError {
    NO_DISC,
    MOUNT_FAILED,
    EMPTY_PLAYLIST,
}
enum ParserResult {
    UNHANDLED,
    ERROR,
    SUCCESS,
    IGNORED,
    CANCELLED,
}
enum ParserType {
    PLS,
    M3U,
    M3U_DOS,
    XSPF,
    IRIVER_PLA,
}
export const PARSER_CONTENT_RATING_CLEAN: string
export const PARSER_CONTENT_RATING_EXPLICIT: string
export const PARSER_CONTENT_RATING_UNRATED: string
export const PARSER_FIELD_ABSTRACT: string
export const PARSER_FIELD_ALBUM: string
export const PARSER_FIELD_AUDIO_TRACK: string
export const PARSER_FIELD_AUTHOR: string
export const PARSER_FIELD_AUTOPLAY: string
export const PARSER_FIELD_BASE: string
export const PARSER_FIELD_CONTACT: string
export const PARSER_FIELD_CONTENT_RATING: string
export const PARSER_FIELD_CONTENT_TYPE: string
export const PARSER_FIELD_COPYRIGHT: string
export const PARSER_FIELD_DESCRIPTION: string
export const PARSER_FIELD_DOWNLOAD_URI: string
export const PARSER_FIELD_DURATION: string
export const PARSER_FIELD_DURATION_MS: string
export const PARSER_FIELD_ENDTIME: string
export const PARSER_FIELD_FILESIZE: string
export const PARSER_FIELD_GENRE: string
export const PARSER_FIELD_GENRES: string
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
function parserErrorQuark(): GLib.Quark
function parserMetadataGetType(): GObject.Type
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
    debug?: boolean
    disableUnsafe?: boolean
    force?: boolean
    recurse?: boolean
}
class Parser {
    /* Properties of TotemPlParser-1.0.TotemPlParser.Parser */
    debug: boolean
    disableUnsafe: boolean
    force: boolean
    recurse: boolean
    /* Fields of TotemPlParser-1.0.TotemPlParser.Parser */
    parent: GObject.Object
    priv: ParserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TotemPlParser-1.0.TotemPlParser.Parser */
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of TotemPlParser-1.0.TotemPlParser.Parser */
    connect(sigName: "entry-parsed", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    on(sigName: "entry-parsed", callback: (uri: string, metadata: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "entry-parsed", callback: (uri: string, metadata: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "entry-parsed", callback: (uri: string, metadata: GLib.HashTable) => void): NodeJS.EventEmitter
    emit(sigName: "entry-parsed", uri: string, metadata: GLib.HashTable): void
    connect(sigName: "playlist-ended", callback: (($obj: Parser, uri: string) => void)): number
    on(sigName: "playlist-ended", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playlist-ended", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playlist-ended", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "playlist-ended", uri: string): void
    connect(sigName: "playlist-started", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    on(sigName: "playlist-started", callback: (uri: string, metadata: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playlist-started", callback: (uri: string, metadata: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playlist-started", callback: (uri: string, metadata: GLib.HashTable) => void): NodeJS.EventEmitter
    emit(sigName: "playlist-started", uri: string, metadata: GLib.HashTable): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
class Playlist {
    /* Fields of TotemPlParser-1.0.TotemPlParser.Playlist */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TotemPlParser-1.0.TotemPlParser.Playlist */
    append(): { iter: PlaylistIter }
    getValue(iter: PlaylistIter, key: string, value: any): boolean
    insert(position: number): { iter: PlaylistIter }
    iterFirst(): { returnType: boolean, iter: PlaylistIter }
    iterNext(iter: PlaylistIter): boolean
    iterPrev(iter: PlaylistIter): boolean
    prepend(): { iter: PlaylistIter }
    setValue(iter: PlaylistIter, key: string, value: any): boolean
    size(): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Playlist_ConstructProps)
    _init (config?: Playlist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Playlist
    static $gtype: GObject.Type
}
abstract class ParserClass {
    /* Fields of TotemPlParser-1.0.TotemPlParser.ParserClass */
    parentClass: GObject.ObjectClass
    entryParsed: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlistStarted: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlistEnded: (parser: Parser, uri: string) => void
    static name: string
}
class ParserPrivate {
    static name: string
}
abstract class PlaylistClass {
    /* Fields of TotemPlParser-1.0.TotemPlParser.PlaylistClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class PlaylistIter {
    static name: string
}
}
export default TotemPlParser