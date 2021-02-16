/**
 * Nautilus-3.0
 */

/// <reference types="node" />
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';

declare namespace Nautilus {

export enum OperationResult {
    COMPLETE,
    FAILED,
    IN_PROGRESS,
}
export function fileInfoCreate(location: Gio.File): FileInfo
export function fileInfoCreateForUri(uri: string): FileInfo
export function fileInfoListCopy(files: FileInfo[]): FileInfo[]
export function fileInfoListFree(files: FileInfo[]): void
export function fileInfoLookup(location: Gio.File): FileInfo
export function fileInfoLookupForUri(uri: string): FileInfo
export function infoProviderUpdateCompleteInvoke(updateComplete: Function, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
export function moduleInitialize(module: GObject.TypeModule): void
export function moduleListTypes(): /* types */ GType[]
export function moduleShutdown(): void
export class ColumnProvider {
    /* Methods of Nautilus.ColumnProvider */
    getColumns(): Column[]
    static name: string
}
export class FileInfo {
    /* Methods of Nautilus.FileInfo */
    addEmblem(emblemName: string): void
    addStringAttribute(attributeName: string, value: string): void
    canWrite(): boolean
    getActivationUri(): string
    getFileType(): Gio.FileType
    getLocation(): Gio.File
    getMimeType(): string
    getMount(): Gio.Mount | null
    getName(): string
    getParentInfo(): FileInfo | null
    getParentLocation(): Gio.File | null
    getParentUri(): string
    getStringAttribute(attributeName: string): string
    getUri(): string
    getUriScheme(): string
    invalidateExtensionInfo(): void
    isDirectory(): boolean
    isGone(): boolean
    isMimeType(mimeType: string): boolean
    /* Virtual methods of Nautilus.FileInfo */
    vfuncAddEmblem(emblemName: string): void
    vfuncAddStringAttribute(attributeName: string, value: string): void
    vfuncCanWrite(): boolean
    vfuncGetActivationUri(): string
    vfuncGetFileType(): Gio.FileType
    vfuncGetLocation(): Gio.File
    vfuncGetMimeType(): string
    vfuncGetMount(): Gio.Mount | null
    vfuncGetName(): string
    vfuncGetParentInfo(): FileInfo | null
    vfuncGetParentLocation(): Gio.File | null
    vfuncGetParentUri(): string
    vfuncGetStringAttribute(attributeName: string): string
    vfuncGetUri(): string
    vfuncGetUriScheme(): string
    vfuncInvalidateExtensionInfo(): void
    vfuncIsDirectory(): boolean
    vfuncIsGone(): boolean
    vfuncIsMimeType(mimeType: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static create(location: Gio.File): FileInfo
    static createForUri(uri: string): FileInfo
    static listCopy(files: FileInfo[]): FileInfo[]
    static listFree(files: FileInfo[]): void
    static lookup(location: Gio.File): FileInfo
    static lookupForUri(uri: string): FileInfo
}
export class InfoProvider {
    /* Methods of Nautilus.InfoProvider */
    cancelUpdate(handle: OperationHandle): void
    updateFileInfo(file: FileInfo, updateComplete: Function, handle: OperationHandle): OperationResult
    static name: string
    /* Static methods and pseudo-constructors */
    static updateCompleteInvoke(updateComplete: Function, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
}
export class LocationWidgetProvider {
    /* Methods of Nautilus.LocationWidgetProvider */
    getWidget(uri: string, window: Gtk.Widget): Gtk.Widget
    static name: string
}
export class MenuProvider {
    /* Methods of Nautilus.MenuProvider */
    emitItemsUpdatedSignal(): void
    getBackgroundItems(window: Gtk.Widget, currentFolder: FileInfo): MenuItem[] | null
    getFileItems(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null
    /* Signals of Nautilus.MenuProvider */
    connect(sigName: "items-updated", callback: (($obj: MenuProvider) => void)): number
    connect_after(sigName: "items-updated", callback: (($obj: MenuProvider) => void)): number
    emit(sigName: "items-updated"): void
    on(sigName: "items-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class PropertyPageProvider {
    /* Methods of Nautilus.PropertyPageProvider */
    getPages(files: FileInfo[]): PropertyPage[]
    static name: string
}
export interface Column_ConstructProps extends GObject.Object_ConstructProps {
    attribute?: string
    defaultSortOrder?: Gtk.SortType
    description?: string
    label?: string
    name?: string
    xalign?: number
}
export class Column {
    /* Properties of Nautilus.Column */
    attribute: string
    readonly attributeQ: number
    defaultSortOrder: Gtk.SortType
    description: string
    label: string
    xalign: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attribute", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attribute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attribute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attribute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attribute-q", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-q", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attribute-q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attribute-q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attribute-q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-sort-order", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-sort-order", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-sort-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-sort-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-sort-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Column_ConstructProps)
    _init (config?: Column_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, attribute: string, label: string, description: string): Column
    static $gtype: GObject.Type
}
export interface Menu_ConstructProps extends GObject.Object_ConstructProps {
}
export class Menu {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Nautilus.Menu */
    appendItem(item: MenuItem): void
    getItems(): MenuItem[]
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
    connect(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menu
    static $gtype: GObject.Type
}
export interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
    icon?: string
    label?: string
    menu?: Menu
    name?: string
    priority?: boolean
    sensitive?: boolean
    tip?: string
}
export class MenuItem {
    /* Properties of Nautilus.MenuItem */
    icon: string
    label: string
    menu: Menu
    priority: boolean
    sensitive: boolean
    tip: string
    /* Fields of Nautilus.MenuItem */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Nautilus.MenuItem */
    activate(): void
    setSubmenu(menu: Menu): void
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
    /* Virtual methods of Nautilus.MenuItem */
    vfuncActivate(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Nautilus.MenuItem */
    connect(sigName: "activate", callback: (($obj: MenuItem) => void)): number
    connect_after(sigName: "activate", callback: (($obj: MenuItem) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::menu", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tip", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tip", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MenuItem_ConstructProps)
    _init (config?: MenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, label: string, tip: string, icon: string): MenuItem
    static listFree(itemList: MenuItem[]): void
    static $gtype: GObject.Type
}
export interface PropertyPage_ConstructProps extends GObject.Object_ConstructProps {
    label?: Gtk.Widget
    name?: string
    page?: Gtk.Widget
}
export class PropertyPage {
    /* Properties of Nautilus.PropertyPage */
    label: Gtk.Widget
    page: Gtk.Widget
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PropertyPage_ConstructProps)
    _init (config?: PropertyPage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage
    static $gtype: GObject.Type
}
export abstract class ColumnClass {
    /* Fields of Nautilus.ColumnClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ColumnProviderInterface {
    /* Fields of Nautilus.ColumnProviderInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export class File {
    static name: string
}
export abstract class FileInfoInterface {
    /* Fields of Nautilus.FileInfoInterface */
    gIface: GObject.TypeInterface
    isGone: (fileInfo: FileInfo) => boolean
    getName: (fileInfo: FileInfo) => string
    getUri: (fileInfo: FileInfo) => string
    getParentUri: (fileInfo: FileInfo) => string
    getUriScheme: (fileInfo: FileInfo) => string
    getMimeType: (fileInfo: FileInfo) => string
    isMimeType: (fileInfo: FileInfo, mimeType: string) => boolean
    isDirectory: (fileInfo: FileInfo) => boolean
    addEmblem: (fileInfo: FileInfo, emblemName: string) => void
    getStringAttribute: (fileInfo: FileInfo, attributeName: string) => string
    addStringAttribute: (fileInfo: FileInfo, attributeName: string, value: string) => void
    invalidateExtensionInfo: (fileInfo: FileInfo) => void
    getActivationUri: (fileInfo: FileInfo) => string
    getFileType: (fileInfo: FileInfo) => Gio.FileType
    getLocation: (fileInfo: FileInfo) => Gio.File
    getParentLocation: (fileInfo: FileInfo) => Gio.File | null
    getParentInfo: (fileInfo: FileInfo) => FileInfo | null
    getMount: (fileInfo: FileInfo) => Gio.Mount | null
    canWrite: (fileInfo: FileInfo) => boolean
    static name: string
}
export class InfoProviderInterface {
    /* Fields of Nautilus.InfoProviderInterface */
    gIface: GObject.TypeInterface
    updateFileInfo: (provider: InfoProvider, file: FileInfo, updateComplete: Function, handle: OperationHandle) => OperationResult
    cancelUpdate: (provider: InfoProvider, handle: OperationHandle) => void
    static name: string
}
export class LocationWidgetProviderInterface {
    /* Fields of Nautilus.LocationWidgetProviderInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class MenuClass {
    /* Fields of Nautilus.MenuClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MenuItemClass {
    /* Fields of Nautilus.MenuItemClass */
    parent: GObject.ObjectClass
    activate: (item: MenuItem) => void
    static name: string
}
export class MenuProviderInterface {
    /* Fields of Nautilus.MenuProviderInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export class OperationHandle {
    static name: string
}
export abstract class PropertyPageClass {
    /* Fields of Nautilus.PropertyPageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PropertyPageProviderInterface {
    /* Fields of Nautilus.PropertyPageProviderInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export type ColumnProviderIface = ColumnProviderInterface
export type InfoProviderIface = InfoProviderInterface
export type LocationWidgetProviderIface = LocationWidgetProviderInterface
export type MenuProviderIface = MenuProviderInterface
export type PropertyPageProviderIface = PropertyPageProviderInterface
}