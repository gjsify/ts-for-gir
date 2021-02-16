/**
 * GMenu-3.0
 */

/// <reference types="node" />
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GMenu {

export enum TreeItemType {
    INVALID,
    DIRECTORY,
    ENTRY,
    SEPARATOR,
    HEADER,
    ALIAS,
}
export enum TreeFlags {
    NONE,
    INCLUDE_EXCLUDED,
    SHOW_EMPTY,
    INCLUDE_NODISPLAY,
    SHOW_ALL_SEPARATORS,
    SORT_DISPLAY_NAME,
    INCLUDE_UNALLOCATED,
}
export interface Tree_ConstructProps extends GObject.Object_ConstructProps {
    flags?: TreeFlags
    menuBasename?: string
    menuPath?: string
}
export class Tree {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMenu.Tree */
    getCanonicalMenuPath(): string
    getDirectoryFromPath(path: string): TreeDirectory
    getEntryById(id: string): TreeEntry
    getRootDirectory(): TreeDirectory
    loadSync(): boolean
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
    /* Signals of GMenu.Tree */
    connect(sigName: "changed", callback: (($obj: Tree) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Tree) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(menuBasename: string, flags: TreeFlags): Tree
    static newForPath(menuPath: string, flags: TreeFlags): Tree
    static itemRef(item?: object | null): object | null
    static itemUnref(item?: object | null): void
    static $gtype: GObject.Type
}
export class TreeAlias {
    /* Methods of GMenu.TreeAlias */
    getAliasedDirectory(): TreeDirectory
    getAliasedEntry(): TreeEntry
    getAliasedItemType(): TreeItemType
    getDirectory(): TreeDirectory
    getParent(): TreeDirectory
    getTree(): Tree
    static name: string
}
export abstract class TreeClass {
    /* Fields of GMenu.TreeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class TreeDirectory {
    /* Methods of GMenu.TreeDirectory */
    getComment(): string
    getDesktopFilePath(): string
    getGenericName(): string
    getIcon(): Gio.Icon
    getIsNodisplay(): boolean
    getMenuId(): string
    getName(): string
    getParent(): TreeDirectory
    getTree(): Tree
    iter(): TreeIter
    makePath(entry: TreeEntry): string
    static name: string
}
export class TreeEntry {
    /* Methods of GMenu.TreeEntry */
    getAppInfo(): Gio.DesktopAppInfo
    getDesktopFileId(): string
    getDesktopFilePath(): string
    getIsExcluded(): boolean
    getIsNodisplayRecurse(): boolean
    getIsUnallocated(): boolean
    getParent(): TreeDirectory
    getTree(): Tree
    static name: string
}
export class TreeHeader {
    /* Methods of GMenu.TreeHeader */
    getDirectory(): TreeDirectory
    getParent(): TreeDirectory
    getTree(): Tree
    static name: string
}
export class TreeIter {
    /* Methods of GMenu.TreeIter */
    getAlias(): TreeAlias
    getDirectory(): TreeDirectory
    getEntry(): TreeEntry
    getHeader(): TreeHeader
    getSeparator(): TreeSeparator
    next(): TreeItemType
    static name: string
}
export class TreeSeparator {
    /* Methods of GMenu.TreeSeparator */
    getParent(): TreeDirectory
    getTree(): Tree
    static name: string
}
}