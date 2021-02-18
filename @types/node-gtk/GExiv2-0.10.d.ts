/**
 * GExiv2-0.10
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GExiv2 {

export enum ByteOrder {
    LITTLE,
    BIG,
}
export enum LogLevel {
    DEBUG,
    INFO,
    WARN,
    ERROR,
    MUTE,
}
export enum Orientation {
    UNSPECIFIED,
    NORMAL,
    HFLIP,
    ROT_180,
    VFLIP,
    ROT_90_HFLIP,
    ROT_90,
    ROT_90_VFLIP,
    ROT_270,
}
export enum StructureType {
    NONE,
    ALT,
    BAG,
    SEQ,
    LANG,
}
export enum XmpFormatFlags {
    OMIT_PACKET_WRAPPER,
    READ_ONLY_PACKET,
    USE_COMPACT_FORMAT,
    INCLUDE_THUMBNAIL_PAD,
    EXACT_PACKET_LENGTH,
    WRITE_ALIAS_COMMENTS,
    OMIT_ALL_FORMATTING,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function getVersion(): number
export function initialize(): boolean
export function logGetLevel(): LogLevel
export function logSetLevel(level: LogLevel): void
export function logUseGlibLogging(): void
export interface LogHandler {
    (level: LogLevel, msg: string): void
}
export interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}
export class Metadata {
    /* Fields of GExiv2.Metadata */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GExiv2.Metadata */
    clear(): void
    clearComment(): void
    clearExif(): void
    clearIptc(): void
    clearTag(tag: string): boolean
    clearXmp(): void
    deleteGpsInfo(): void
    eraseExifThumbnail(): void
    free(): void
    fromApp1Segment(data: any[]): boolean
    fromStream(stream: Gio.InputStream): boolean
    generateXmpPacket(xmpFormatFlags: XmpFormatFlags, padding: number): string | null
    getComment(): string | null
    getExifData(byteOrder: ByteOrder): any | null
    getExifTagRational(tag: string): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    getExifTags(): string[]
    getExifThumbnail(): [ /* returnType */ boolean, /* buffer */ any[] ]
    getExposureTime(): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    getFnumber(): number
    getFocalLength(): number
    getGpsAltitude(): [ /* returnType */ boolean, /* altitude */ number ]
    getGpsInfo(): [ /* returnType */ boolean, /* longitude */ number, /* latitude */ number, /* altitude */ number ]
    getGpsLatitude(): [ /* returnType */ boolean, /* latitude */ number ]
    getGpsLongitude(): [ /* returnType */ boolean, /* longitude */ number ]
    getIptcTags(): string[]
    getIsoSpeed(): number
    getMetadataPixelHeight(): number
    getMetadataPixelWidth(): number
    getMimeType(): string
    getOrientation(): Orientation
    getPixelHeight(): number
    getPixelWidth(): number
    getPreviewImage(props: PreviewProperties): PreviewImage
    getPreviewProperties(): PreviewProperties[] | null
    getSupportsExif(): boolean
    getSupportsIptc(): boolean
    getSupportsXmp(): boolean
    getTagInterpretedString(tag: string): string | null
    getTagLong(tag: string): number
    getTagMultiple(tag: string): string[] | null
    getTagRaw(tag: string): any | null
    getTagString(tag: string): string | null
    getXmpPacket(): string | null
    getXmpTags(): string[]
    hasExif(): boolean
    hasIptc(): boolean
    hasTag(tag: string): boolean
    hasXmp(): boolean
    openBuf(data: any[]): boolean
    openPath(path: string): boolean
    saveExternal(path: string): boolean
    saveFile(path: string): boolean
    setComment(comment: string): void
    setExifTagRational(tag: string, nom: number, den: number): boolean
    setExifThumbnailFromBuffer(buffer: any[]): void
    setExifThumbnailFromFile(path: string): boolean
    setGpsInfo(longitude: number, latitude: number, altitude: number): boolean
    setMetadataPixelHeight(height: number): void
    setMetadataPixelWidth(width: number): void
    setOrientation(orientation: Orientation): void
    setTagLong(tag: string, value: number): boolean
    setTagMultiple(tag: string, values: string[]): boolean
    setTagString(tag: string, value: string): boolean
    setXmpTagStruct(tag: string, type: StructureType): boolean
    tryGetTagMultiple(tag: string): string[] | null
    tryGetTagString(tag: string): string | null
    trySetTagMultiple(tag: string, values: string[]): boolean
    trySetTagString(tag: string, value: string): boolean
    updateGpsInfo(longitude: number, latitude: number, altitude: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Metadata_ConstructProps)
    _init (config?: Metadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Metadata
    static getTagDescription(tag: string): string | null
    static getTagLabel(tag: string): string | null
    static getTagType(tag: string): string | null
    static getXmpNamespaceForTag(tag: string): string
    static isExifTag(tag: string): boolean
    static isIptcTag(tag: string): boolean
    static isXmpTag(tag: string): boolean
    static registerXmpNamespace(name: string, prefix: string): boolean
    static unregisterAllXmpNamespaces(): void
    static unregisterXmpNamespace(name: string): boolean
    static $gtype: GObject.Type
}
export interface PreviewImage_ConstructProps extends GObject.Object_ConstructProps {
}
export class PreviewImage {
    /* Fields of GExiv2.PreviewImage */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GExiv2.PreviewImage */
    free(): void
    getData(): any[]
    getExtension(): string
    getHeight(): number
    getMimeType(): string
    getWidth(): number
    writeFile(path: string): number
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
    connect(sigName: "notify", callback: (($obj: PreviewImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewImage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PreviewImage_ConstructProps)
    _init (config?: PreviewImage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PreviewProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class PreviewProperties {
    /* Fields of GExiv2.PreviewProperties */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GExiv2.PreviewProperties */
    getExtension(): string
    getHeight(): number
    getMimeType(): string
    getSize(): number
    getWidth(): number
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
    connect(sigName: "notify", callback: (($obj: PreviewProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewProperties, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PreviewProperties_ConstructProps)
    _init (config?: PreviewProperties_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class MetadataClass {
    /* Fields of GExiv2.MetadataClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MetadataPrivate {
    static name: string
}
export abstract class PreviewImageClass {
    /* Fields of GExiv2.PreviewImageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PreviewImagePrivate {
    static name: string
}
export abstract class PreviewPropertiesClass {
    /* Fields of GExiv2.PreviewPropertiesClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PreviewPropertiesPrivate {
    static name: string
}
}