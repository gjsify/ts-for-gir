/**
 * GnomeMaps-1.0
 */

/// <reference types="node" />
import type { Rest } from './Rest-0.7';
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GeocodeGlib } from './GeocodeGlib-1.0';
import type { Json } from './Json-1.0';
import type { Champlain } from './Champlain-0.12';
import type { Clutter } from './Clutter-1.0';
import type { cairo } from './cairo-1.0';
import type { GL } from './GL-1.0';
import type { CoglPango } from './CoglPango-1.0';
import type { PangoCairo } from './PangoCairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Cogl } from './Cogl-1.0';
import type { Atk } from './Atk-1.0';

declare namespace GnomeMaps {

export enum ContactStoreState {
    INITIAL,
    LOADING,
    LOADED,
}
export function osmFinalize(): void
export function osmInit(): void
export function osmParse(content: string, length: number): OSMObject
export interface ContactGeocodeCallback {
    (contact: Contact): void
}
export interface ContactStoreLookupCallback {
    (contact: Contact): void
}
export interface Contact_ConstructProps extends GObject.Object_ConstructProps {
    icon?: Gio.Icon
    id?: string
    name?: string
}
export class Contact {
    /* Properties of GnomeMaps.Contact */
    readonly boundingBox: Champlain.BoundingBox
    icon: Gio.Icon
    id: string
    name: string
    /* Fields of GnomeMaps.Contact */
    parentInstance: GObject.Object
    priv: ContactPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps.Contact */
    addPlace(place: GeocodeGlib.Place): void
    geocode(callback: ContactGeocodeCallback): void
    getPlaces(): GeocodeGlib.Place[]
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
    connect(sigName: "notify", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounding-box", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Contact_ConstructProps)
    _init (config?: Contact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Contact
    static $gtype: GObject.Type
}
export interface ContactStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContactStore {
    /* Properties of GnomeMaps.ContactStore */
    readonly state: ContactStoreState
    /* Fields of GnomeMaps.ContactStore */
    parentInstance: GObject.Object
    priv: ContactStorePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps.ContactStore */
    getContacts(): Contact[]
    load(): void
    lookup(id: string, callback: ContactStoreLookupCallback): void
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
    connect(sigName: "notify", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContactStore_ConstructProps)
    _init (config?: ContactStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContactStore
    static $gtype: GObject.Type
}
export interface FileTileSource_ConstructProps extends Champlain.TileSource_ConstructProps {
    path?: string
}
export class FileTileSource {
    /* Properties of GnomeMaps.FileTileSource */
    readonly maxZoom: number
    readonly minZoom: number
    path: string
    readonly world: Champlain.BoundingBox
    /* Properties of Champlain.TileSource */
    cache: Champlain.TileCache
    id: string
    license: string
    licenseUri: string
    maxZoomLevel: number
    minZoomLevel: number
    name: string
    projection: Champlain.MapProjection
    tileSize: number
    /* Properties of Champlain.MapSource */
    nextSource: Champlain.MapSource
    renderer: Champlain.Renderer
    /* Fields of GnomeMaps.FileTileSource */
    parentInstance: Champlain.TileSource
    priv: FileTileSourcePrivate
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps.FileTileSource */
    prepare(): boolean
    /* Methods of Champlain.TileSource */
    getCache(): Champlain.TileCache
    setCache(cache: Champlain.TileCache): void
    setId(id: string): void
    setLicense(license: string): void
    setLicenseUri(licenseUri: string): void
    setMaxZoomLevel(zoomLevel: number): void
    setMinZoomLevel(zoomLevel: number): void
    setName(name: string): void
    setProjection(projection: Champlain.MapProjection): void
    setTileSize(tileSize: number): void
    /* Methods of Champlain.MapSource */
    fillTile(tile: Champlain.Tile): void
    getColumnCount(zoomLevel: number): number
    getId(): string
    getLatitude(zoomLevel: number, y: number): number
    getLicense(): string
    getLicenseUri(): string
    getLongitude(zoomLevel: number, x: number): number
    getMaxZoomLevel(): number
    getMetersPerPixel(zoomLevel: number, latitude: number, longitude: number): number
    getMinZoomLevel(): number
    getName(): string
    getNextSource(): Champlain.MapSource
    getProjection(): Champlain.MapProjection
    getRenderer(): Champlain.Renderer
    getRowCount(zoomLevel: number): number
    getTileSize(): number
    getX(zoomLevel: number, longitude: number): number
    getY(zoomLevel: number, latitude: number): number
    setNextSource(nextSource: Champlain.MapSource): void
    setRenderer(renderer: Champlain.Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfuncFillTile(tile: Champlain.Tile): void
    vfuncGetId(): string
    vfuncGetLicense(): string
    vfuncGetLicenseUri(): string
    vfuncGetMaxZoomLevel(): number
    vfuncGetMinZoomLevel(): number
    vfuncGetName(): string
    vfuncGetProjection(): Champlain.MapProjection
    vfuncGetTileSize(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::world", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::world", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::world", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::world", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::world", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileTileSource_ConstructProps)
    _init (config?: FileTileSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OSMChangeset_ConstructProps extends GObject.Object_ConstructProps {
    comment?: string
    createdBy?: string
}
export class OSMChangeset {
    /* Properties of GnomeMaps.OSMChangeset */
    comment: string
    createdBy: string
    /* Fields of GnomeMaps.OSMChangeset */
    parentInstance: GObject.Object
    priv: OSMChangesetPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMChangeset */
    serialize(): string
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
    connect(sigName: "notify", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-by", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-by", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMChangeset_ConstructProps)
    _init (config?: OSMChangeset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(comment?: string | null, createdBy?: string | null): OSMChangeset
    static $gtype: GObject.Type
}
export interface OSMNode_ConstructProps extends OSMObject_ConstructProps {
    latitude?: number
    longitude?: number
}
export class OSMNode {
    /* Properties of GnomeMaps.OSMNode */
    latitude: number
    longitude: number
    /* Properties of GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps.OSMNode */
    parentInstance: OSMObject
    priv: OSMNodePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMObject */
    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::changeset", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMNode_ConstructProps)
    _init (config?: OSMNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode
    static $gtype: GObject.Type
}
export interface OSMOAuthProxyCall_ConstructProps extends Rest.OAuthProxyCall_ConstructProps {
}
export class OSMOAuthProxyCall {
    /* Fields of GnomeMaps.OSMOAuthProxyCall */
    parent: Rest.OAuthProxyCall
    priv: OSMOAuthProxyCallPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Rest.OAuthProxyCall */
    parseTokenReponse(): void
    parseTokenResponse(): void
    /* Methods of Rest.ProxyCall */
    addHeader(header: string, value: string): void
    addParam(name: string, value: string): void
    addParamFull(param: Rest.Param): void
    getFunction(): string
    getMethod(): string
    getParams(): Rest.Params
    getPayload(): string
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    getStatusCode(): number
    getStatusMessage(): string
    invokeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    lookupHeader(header: string): string
    lookupParam(name: string): Rest.Param
    lookupResponseHeader(header: string): string
    removeHeader(header: string): void
    removeParam(name: string): void
    run(loop: GLib.MainLoop): boolean
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    setFunction(function_: string): void
    setMethod(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weakObject: GObject.Object): boolean
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
    /* Virtual methods of Rest.ProxyCall */
    vfuncPrepare(): boolean
    vfuncSerializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OSMOAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMOAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: OSMOAuthProxyCall_ConstructProps)
    _init (config?: OSMOAuthProxyCall_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall
    static $gtype: GObject.Type
}
export interface OSMObject_ConstructProps extends GObject.Object_ConstructProps {
    changeset?: number
    id?: number
    version?: number
}
export class OSMObject {
    /* Properties of GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps.OSMObject */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMObject */
    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::changeset", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMObject_ConstructProps)
    _init (config?: OSMObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OSMRelation_ConstructProps extends OSMObject_ConstructProps {
}
export class OSMRelation {
    /* Properties of GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps.OSMRelation */
    parentInstance: OSMObject
    priv: OSMRelationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMRelation */
    addMember(role: string, type: number, ref: number): void
    /* Methods of GnomeMaps.OSMObject */
    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::changeset", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMRelation_ConstructProps)
    _init (config?: OSMRelation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number): OSMRelation
    static $gtype: GObject.Type
}
export interface OSMWay_ConstructProps extends OSMObject_ConstructProps {
}
export class OSMWay {
    /* Properties of GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps.OSMWay */
    parentInstance: OSMObject
    priv: OSMWayPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps.OSMWay */
    addNodeId(id: number): void
    /* Methods of GnomeMaps.OSMObject */
    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::changeset", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMWay_ConstructProps)
    _init (config?: OSMWay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number): OSMWay
    static $gtype: GObject.Type
}
export abstract class ContactClass {
    /* Fields of GnomeMaps.ContactClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ContactPrivate {
    static name: string
}
export abstract class ContactStoreClass {
    /* Fields of GnomeMaps.ContactStoreClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ContactStorePrivate {
    static name: string
}
export abstract class FileTileSourceClass {
    /* Fields of GnomeMaps.FileTileSourceClass */
    parentClass: Champlain.TileSourceClass
    static name: string
}
export class FileTileSourcePrivate {
    static name: string
}
export abstract class OSMChangesetClass {
    /* Fields of GnomeMaps.OSMChangesetClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class OSMChangesetPrivate {
    static name: string
}
export abstract class OSMNodeClass {
    /* Fields of GnomeMaps.OSMNodeClass */
    parentClass: OSMObjectClass
    static name: string
}
export class OSMNodePrivate {
    static name: string
}
export abstract class OSMOAuthProxyCallClass {
    /* Fields of GnomeMaps.OSMOAuthProxyCallClass */
    parentClass: Rest.OAuthProxyCallClass
    static name: string
}
export class OSMOAuthProxyCallPrivate {
    static name: string
}
export abstract class OSMObjectClass {
    /* Fields of GnomeMaps.OSMObjectClass */
    parentClass: GObject.ObjectClass
    getXmlTagName: () => string
    static name: string
}
export class OSMObjectPrivate {
    static name: string
}
export abstract class OSMRelationClass {
    /* Fields of GnomeMaps.OSMRelationClass */
    parentClass: OSMObjectClass
    static name: string
}
export class OSMRelationPrivate {
    static name: string
}
export abstract class OSMWayClass {
    /* Fields of GnomeMaps.OSMWayClass */
    parentClass: OSMObjectClass
    static name: string
}
export class OSMWayPrivate {
    static name: string
}
export class _ContactClass {
    /* Fields of GnomeMaps._ContactClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class _ContactStoreClass {
    /* Fields of GnomeMaps._ContactStoreClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class _OSMChangesetClass {
    /* Fields of GnomeMaps._OSMChangesetClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class _OSMNodeClass {
    /* Fields of GnomeMaps._OSMNodeClass */
    parentClass: OSMObjectClass
    static name: string
}
export class _OSMRelationClass {
    /* Fields of GnomeMaps._OSMRelationClass */
    parentClass: OSMObjectClass
    static name: string
}
export class _OSMWayClass {
    /* Fields of GnomeMaps._OSMWayClass */
    parentClass: OSMObjectClass
    static name: string
}
}