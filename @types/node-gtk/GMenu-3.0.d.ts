/**
 * GMenu-3.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GMenu {

enum TreeItemType {
    INVALID,
    DIRECTORY,
    ENTRY,
    SEPARATOR,
    HEADER,
    ALIAS,
}
enum TreeFlags {
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
class Tree {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GMenu-3.0.GMenu.Tree */
    getCanonicalMenuPath(): string
    getDirectoryFromPath(path: string): TreeDirectory
    getEntryById(id: string): TreeEntry
    getRootDirectory(): TreeDirectory
    loadSync(): boolean
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
    /* Signals of GMenu-3.0.GMenu.Tree */
    connect(sigName: "changed", callback: (($obj: Tree) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(menuBasename: string, flags: TreeFlags): Tree
    static newForPath(menuPath: string, flags: TreeFlags): Tree
    static itemRef(item?: object | null): object | null
    static itemUnref(item?: object | null): void
    static $gtype: GObject.Type
}
class TreeAlias {
    /* Methods of GMenu-3.0.GMenu.TreeAlias */
    getAliasedDirectory(): TreeDirectory
    getAliasedEntry(): TreeEntry
    getAliasedItemType(): TreeItemType
    getDirectory(): TreeDirectory
    getParent(): TreeDirectory
    getTree(): Tree
    static name: string
}
abstract class TreeClass {
    /* Fields of GMenu-3.0.GMenu.TreeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class TreeDirectory {
    /* Methods of GMenu-3.0.GMenu.TreeDirectory */
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
class TreeEntry {
    /* Methods of GMenu-3.0.GMenu.TreeEntry */
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
class TreeHeader {
    /* Methods of GMenu-3.0.GMenu.TreeHeader */
    getDirectory(): TreeDirectory
    getParent(): TreeDirectory
    getTree(): Tree
    static name: string
}
class TreeIter {
    /* Methods of GMenu-3.0.GMenu.TreeIter */
    getAlias(): TreeAlias
    getDirectory(): TreeDirectory
    getEntry(): TreeEntry
    getHeader(): TreeHeader
    getSeparator(): TreeSeparator
    next(): TreeItemType
    static name: string
}
class TreeSeparator {
    /* Methods of GMenu-3.0.GMenu.TreeSeparator */
    getParent(): TreeDirectory
    getTree(): Tree
    static name: string
}
}
export default GMenu