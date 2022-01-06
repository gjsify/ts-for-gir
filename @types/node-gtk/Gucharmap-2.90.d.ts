/**
 * Gucharmap-2.90
 */

import "node"
import type { Pango } from './Pango-1.0';
import type { cairo } from './cairo-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';

export declare namespace Gucharmap {

export enum CharmapPageType {
    CHARTABLE,
    DETAILS,
}
export enum UnicodeVersion {
    UNASSIGNED,
    /* 1_1 (invalid, starts with a number) */
    /* 2_0 (invalid, starts with a number) */
    /* 2_1 (invalid, starts with a number) */
    /* 3_0 (invalid, starts with a number) */
    /* 3_1 (invalid, starts with a number) */
    /* 3_2 (invalid, starts with a number) */
    /* 4_0 (invalid, starts with a number) */
    /* 4_1 (invalid, starts with a number) */
    /* 5_0 (invalid, starts with a number) */
    /* 5_1 (invalid, starts with a number) */
    /* 5_2 (invalid, starts with a number) */
    /* 6_0 (invalid, starts with a number) */
    /* 6_1 (invalid, starts with a number) */
    /* 6_2 (invalid, starts with a number) */
    /* 6_3 (invalid, starts with a number) */
    /* 7_0 (invalid, starts with a number) */
    /* 8_0 (invalid, starts with a number) */
    LATEST,
}
export function getNameslistColons(uc: number): string[]
export function getNameslistEquals(uc: number): string[]
export function getNameslistExes(uc: number): number
export function getNameslistPounds(uc: number): string[]
export function getNameslistStars(uc: number): string[]
export function getUnicodeCategoryName(uc: number): string
export function getUnicodeDataName(uc: number): string
export function getUnicodeDataNameCount(): number
export function getUnicodeKCantonese(uc: number): string
export function getUnicodeKDefinition(uc: number): string
export function getUnicodeKJapaneseKun(uc: number): string
export function getUnicodeKJapaneseOn(uc: number): string
export function getUnicodeKKorean(uc: number): string
export function getUnicodeKMandarin(uc: number): string
export function getUnicodeKTang(uc: number): string
export function getUnicodeName(uc: number): string
export function getUnicodeVersion(uc: number): UnicodeVersion
export function getUnihanCount(): number
export function unicharIsdefined(uc: number): boolean
export function unicharIsgraph(uc: number): boolean
export function unicharToPrintableUtf8(uc: number, outbuf: string): number
export function unicharType(uc: number): GLib.UnicodeType
export function unicharValidate(uc: number): boolean
export function unicodeGetLocaleCharacter(): number
export function unicodeGetScriptForChar(wc: number): string
export function unicodeListScripts(): string[]
export function unicodeVersionToString(version: UnicodeVersion): string
export interface BlockChaptersModel_ConstructProps extends ChaptersModel_ConstructProps {
}
export class BlockChaptersModel {
    /* Fields of Gucharmap-2.90.Gucharmap.BlockChaptersModel */
    parent: ChaptersModel
    /* Fields of Gucharmap-2.90.Gucharmap.ChaptersModel */
    parentInstance: Gtk.ListStore
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.ChaptersModel */
    characterToIter(wc: number): { returnType: boolean, iter: Gtk.TreeIter }
    getBookCodepointList(): CodepointList
    getCodepointList(iter: Gtk.TreeIter): CodepointList
    getTitle(): string
    idToIter(id: string): { returnType: boolean, iter: Gtk.TreeIter }
    /* Methods of Gtk-3.0.Gtk.ListStore */
    append(): { iter: Gtk.TreeIter }
    clear(): void
    insert(position: number): { iter: Gtk.TreeIter }
    insertAfter(sibling?: Gtk.TreeIter | null): { iter: Gtk.TreeIter }
    insertBefore(sibling?: Gtk.TreeIter | null): { iter: Gtk.TreeIter }
    insertWithValuesv(position: number, columns: number[], values: any[]): { iter: Gtk.TreeIter | null }
    iterIsValid(iter: Gtk.TreeIter): boolean
    moveAfter(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    moveBefore(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    prepend(): { iter: Gtk.TreeIter }
    remove(iter: Gtk.TreeIter): boolean
    reorder(newOrder: number[]): void
    setColumnTypes(types: GObject.Type[]): void
    setValue(iter: Gtk.TreeIter, column: number, value: any): void
    set(iter: Gtk.TreeIter, columns: number[], values: any[]): void
    swap(a: Gtk.TreeIter, b: Gtk.TreeIter): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): { returnType: boolean, parser: GLib.MarkupParser, data: object | null }
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    getName(): string
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Methods of Gtk-3.0.Gtk.TreeDragDest */
    dragDataReceived(dest: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    rowDropPossible(destPath: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    /* Methods of Gtk-3.0.Gtk.TreeDragSource */
    dragDataDelete(path: Gtk.TreePath): boolean
    dragDataGet(path: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    rowDraggable(path: Gtk.TreePath): boolean
    /* Methods of Gtk-3.0.Gtk.TreeModel */
    filterNew(root?: Gtk.TreePath | null): Gtk.TreeModel
    foreach(func: Gtk.TreeModelForeachFunc): void
    getColumnType(index: number): GObject.Type
    getFlags(): Gtk.TreeModelFlags
    getIter(path: Gtk.TreePath): { returnType: boolean, iter: Gtk.TreeIter }
    getIterFirst(): { returnType: boolean, iter: Gtk.TreeIter }
    getIterFromString(pathString: string): { returnType: boolean, iter: Gtk.TreeIter }
    getNColumns(): number
    getPath(iter: Gtk.TreeIter): Gtk.TreePath
    getStringFromIter(iter: Gtk.TreeIter): string
    getValue(iter: Gtk.TreeIter, column: number): { value: any }
    iterChildren(parent?: Gtk.TreeIter | null): { returnType: boolean, iter: Gtk.TreeIter }
    iterHasChild(iter: Gtk.TreeIter): boolean
    iterNChildren(iter?: Gtk.TreeIter | null): number
    iterNext(iter: Gtk.TreeIter): boolean
    iterNthChild(parent: Gtk.TreeIter | null, n: number): { returnType: boolean, iter: Gtk.TreeIter }
    iterParent(child: Gtk.TreeIter): { returnType: boolean, iter: Gtk.TreeIter }
    iterPrevious(iter: Gtk.TreeIter): boolean
    refNode(iter: Gtk.TreeIter): void
    rowChanged(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowDeleted(path: Gtk.TreePath): void
    rowHasChildToggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowInserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowsReordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, newOrder: number[]): void
    unrefNode(iter: Gtk.TreeIter): void
    /* Methods of Gtk-3.0.Gtk.TreeSortable */
    getSortColumnId(): { returnType: boolean, sortColumnId: number, order: Gtk.SortType }
    hasDefaultSortFunc(): boolean
    setDefaultSortFunc(sortFunc: Gtk.TreeIterCompareFunc): void
    setSortColumnId(sortColumnId: number, order: Gtk.SortType): void
    setSortFunc(sortColumnId: number, sortFunc: Gtk.TreeIterCompareFunc): void
    sortColumnChanged(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockChaptersModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk-3.0.Gtk.TreeModel */
    connect(sigName: "row-changed", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-deleted", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath) => void)): number
    on(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void): NodeJS.EventEmitter
    emit(sigName: "row-deleted", path: Gtk.TreePath): void
    connect(sigName: "row-has-child-toggled", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-has-child-toggled", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-inserted", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "rows-reordered", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void)): number
    on(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "rows-reordered", path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null): void
    /* Signals of Gtk-3.0.Gtk.TreeSortable */
    connect(sigName: "sort-column-changed", callback: (($obj: BlockChaptersModel) => void)): number
    on(sigName: "sort-column-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sort-column-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sort-column-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sort-column-changed"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BlockChaptersModel_ConstructProps)
    _init (config?: BlockChaptersModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BlockChaptersModel
    static new(types: GObject.Type[]): BlockChaptersModel
    static $gtype: GObject.Type
}
export interface BlockCodepointList_ConstructProps extends CodepointList_ConstructProps {
    firstCodepoint?: number
    lastCodepoint?: number
}
export class BlockCodepointList {
    /* Fields of Gucharmap-2.90.Gucharmap.BlockCodepointList */
    parentInstance: CodepointList
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.CodepointList */
    getChar(index: number): number
    getIndex(wc: number): number
    getLastIndex(): number
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
    connect(sigName: "notify", callback: (($obj: BlockCodepointList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BlockCodepointList_ConstructProps)
    _init (config?: BlockCodepointList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(start: number, end: number): BlockCodepointList
    static $gtype: GObject.Type
}
export interface ChaptersModel_ConstructProps extends Gtk.ListStore_ConstructProps {
}
export class ChaptersModel {
    /* Fields of Gucharmap-2.90.Gucharmap.ChaptersModel */
    parentInstance: Gtk.ListStore
    /* Fields of Gtk-3.0.Gtk.ListStore */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.ChaptersModel */
    characterToIter(wc: number): { returnType: boolean, iter: Gtk.TreeIter }
    getBookCodepointList(): CodepointList
    getCodepointList(iter: Gtk.TreeIter): CodepointList
    getTitle(): string
    idToIter(id: string): { returnType: boolean, iter: Gtk.TreeIter }
    /* Methods of Gtk-3.0.Gtk.ListStore */
    append(): { iter: Gtk.TreeIter }
    clear(): void
    insert(position: number): { iter: Gtk.TreeIter }
    insertAfter(sibling?: Gtk.TreeIter | null): { iter: Gtk.TreeIter }
    insertBefore(sibling?: Gtk.TreeIter | null): { iter: Gtk.TreeIter }
    insertWithValuesv(position: number, columns: number[], values: any[]): { iter: Gtk.TreeIter | null }
    iterIsValid(iter: Gtk.TreeIter): boolean
    moveAfter(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    moveBefore(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    prepend(): { iter: Gtk.TreeIter }
    remove(iter: Gtk.TreeIter): boolean
    reorder(newOrder: number[]): void
    setColumnTypes(types: GObject.Type[]): void
    setValue(iter: Gtk.TreeIter, column: number, value: any): void
    set(iter: Gtk.TreeIter, columns: number[], values: any[]): void
    swap(a: Gtk.TreeIter, b: Gtk.TreeIter): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): { returnType: boolean, parser: GLib.MarkupParser, data: object | null }
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    getName(): string
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Methods of Gtk-3.0.Gtk.TreeDragDest */
    dragDataReceived(dest: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    rowDropPossible(destPath: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    /* Methods of Gtk-3.0.Gtk.TreeDragSource */
    dragDataDelete(path: Gtk.TreePath): boolean
    dragDataGet(path: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    rowDraggable(path: Gtk.TreePath): boolean
    /* Methods of Gtk-3.0.Gtk.TreeModel */
    filterNew(root?: Gtk.TreePath | null): Gtk.TreeModel
    foreach(func: Gtk.TreeModelForeachFunc): void
    getColumnType(index: number): GObject.Type
    getFlags(): Gtk.TreeModelFlags
    getIter(path: Gtk.TreePath): { returnType: boolean, iter: Gtk.TreeIter }
    getIterFirst(): { returnType: boolean, iter: Gtk.TreeIter }
    getIterFromString(pathString: string): { returnType: boolean, iter: Gtk.TreeIter }
    getNColumns(): number
    getPath(iter: Gtk.TreeIter): Gtk.TreePath
    getStringFromIter(iter: Gtk.TreeIter): string
    getValue(iter: Gtk.TreeIter, column: number): { value: any }
    iterChildren(parent?: Gtk.TreeIter | null): { returnType: boolean, iter: Gtk.TreeIter }
    iterHasChild(iter: Gtk.TreeIter): boolean
    iterNChildren(iter?: Gtk.TreeIter | null): number
    iterNext(iter: Gtk.TreeIter): boolean
    iterNthChild(parent: Gtk.TreeIter | null, n: number): { returnType: boolean, iter: Gtk.TreeIter }
    iterParent(child: Gtk.TreeIter): { returnType: boolean, iter: Gtk.TreeIter }
    iterPrevious(iter: Gtk.TreeIter): boolean
    refNode(iter: Gtk.TreeIter): void
    rowChanged(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowDeleted(path: Gtk.TreePath): void
    rowHasChildToggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowInserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowsReordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, newOrder: number[]): void
    unrefNode(iter: Gtk.TreeIter): void
    /* Methods of Gtk-3.0.Gtk.TreeSortable */
    getSortColumnId(): { returnType: boolean, sortColumnId: number, order: Gtk.SortType }
    hasDefaultSortFunc(): boolean
    setDefaultSortFunc(sortFunc: Gtk.TreeIterCompareFunc): void
    setSortColumnId(sortColumnId: number, order: Gtk.SortType): void
    setSortFunc(sortColumnId: number, sortFunc: Gtk.TreeIterCompareFunc): void
    sortColumnChanged(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChaptersModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk-3.0.Gtk.TreeModel */
    connect(sigName: "row-changed", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-deleted", callback: (($obj: ChaptersModel, path: Gtk.TreePath) => void)): number
    on(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void): NodeJS.EventEmitter
    emit(sigName: "row-deleted", path: Gtk.TreePath): void
    connect(sigName: "row-has-child-toggled", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-has-child-toggled", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-inserted", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "rows-reordered", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void)): number
    on(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "rows-reordered", path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null): void
    /* Signals of Gtk-3.0.Gtk.TreeSortable */
    connect(sigName: "sort-column-changed", callback: (($obj: ChaptersModel) => void)): number
    on(sigName: "sort-column-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sort-column-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sort-column-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sort-column-changed"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChaptersModel_ConstructProps)
    _init (config?: ChaptersModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ChaptersView_ConstructProps extends Gtk.TreeView_ConstructProps {
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
export class ChaptersView {
    /* Properties of Gtk-3.0.Gtk.TreeView */
    activateOnSingleClick: boolean
    enableGridLines: Gtk.TreeViewGridLines
    enableSearch: boolean
    enableTreeLines: boolean
    expanderColumn: Gtk.TreeViewColumn
    fixedHeightMode: boolean
    headersClickable: boolean
    headersVisible: boolean
    hoverExpand: boolean
    hoverSelection: boolean
    levelIndentation: number
    model: Gtk.TreeModel
    reorderable: boolean
    rubberBanding: boolean
    rulesHint: boolean
    searchColumn: number
    showExpanders: boolean
    tooltipColumn: number
    /* Properties of Gtk-3.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of Gucharmap-2.90.Gucharmap.ChaptersView */
    parentInstance: Gtk.TreeView
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.ChaptersView */
    getBookCodepointList(): CodepointList
    getCodepointList(): CodepointList
    getModel(): ChaptersModel
    getSelected(): string
    next(): void
    previous(): void
    selectCharacter(wc: number): boolean
    selectLocale(): boolean
    setModel(model: ChaptersModel): void
    setSelected(name: string): boolean
    /* Methods of Gtk-3.0.Gtk.TreeView */
    appendColumn(column: Gtk.TreeViewColumn): number
    collapseAll(): void
    collapseRow(path: Gtk.TreePath): boolean
    columnsAutosize(): void
    convertBinWindowToTreeCoords(bx: number, by: number): { tx: number, ty: number }
    convertBinWindowToWidgetCoords(bx: number, by: number): { wx: number, wy: number }
    convertTreeToBinWindowCoords(tx: number, ty: number): { bx: number, by: number }
    convertTreeToWidgetCoords(tx: number, ty: number): { wx: number, wy: number }
    convertWidgetToBinWindowCoords(wx: number, wy: number): { bx: number, by: number }
    convertWidgetToTreeCoords(wx: number, wy: number): { tx: number, ty: number }
    createRowDragIcon(path: Gtk.TreePath): cairo.Surface
    enableModelDragDest(targets: Gtk.TargetEntry[], actions: Gdk.DragAction): void
    enableModelDragSource(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[], actions: Gdk.DragAction): void
    expandAll(): void
    expandRow(path: Gtk.TreePath, openAll: boolean): boolean
    expandToPath(path: Gtk.TreePath): void
    getActivateOnSingleClick(): boolean
    getBackgroundArea(path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null): { rect: Gdk.Rectangle }
    getBinWindow(): Gdk.Window | null
    getCellArea(path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null): { rect: Gdk.Rectangle }
    getColumn(n: number): Gtk.TreeViewColumn | null
    getColumns(): Gtk.TreeViewColumn[]
    getCursor(): { path: Gtk.TreePath | null, focusColumn: Gtk.TreeViewColumn | null }
    getDestRowAtPos(dragX: number, dragY: number): { returnType: boolean, path: Gtk.TreePath | null, pos: Gtk.TreeViewDropPosition | null }
    getDragDestRow(): { path: Gtk.TreePath | null, pos: Gtk.TreeViewDropPosition | null }
    getEnableSearch(): boolean
    getEnableTreeLines(): boolean
    getExpanderColumn(): Gtk.TreeViewColumn
    getFixedHeightMode(): boolean
    getGridLines(): Gtk.TreeViewGridLines
    getHadjustment(): Gtk.Adjustment
    getHeadersClickable(): boolean
    getHeadersVisible(): boolean
    getHoverExpand(): boolean
    getHoverSelection(): boolean
    getLevelIndentation(): number
    getModel(): Gtk.TreeModel | null
    getNColumns(): number
    getPathAtPos(x: number, y: number): { returnType: boolean, path: Gtk.TreePath | null, column: Gtk.TreeViewColumn | null, cellX: number | null, cellY: number | null }
    getReorderable(): boolean
    getRubberBanding(): boolean
    getRulesHint(): boolean
    getSearchColumn(): number
    getSearchEntry(): Gtk.Entry
    getSelection(): Gtk.TreeSelection
    getShowExpanders(): boolean
    getTooltipColumn(): number
    getTooltipContext(x: number, y: number, keyboardTip: boolean): { returnType: boolean, x: number, y: number, model: Gtk.TreeModel | null, path: Gtk.TreePath | null, iter: Gtk.TreeIter | null }
    getVadjustment(): Gtk.Adjustment
    getVisibleRange(): { returnType: boolean, startPath: Gtk.TreePath | null, endPath: Gtk.TreePath | null }
    getVisibleRect(): { visibleRect: Gdk.Rectangle }
    insertColumn(column: Gtk.TreeViewColumn, position: number): number
    insertColumnWithDataFunc(position: number, title: string, cell: Gtk.CellRenderer, func: Gtk.TreeCellDataFunc): number
    isBlankAtPos(x: number, y: number): { returnType: boolean, path: Gtk.TreePath | null, column: Gtk.TreeViewColumn | null, cellX: number | null, cellY: number | null }
    isRubberBandingActive(): boolean
    mapExpandedRows(func: Gtk.TreeViewMappingFunc): void
    moveColumnAfter(column: Gtk.TreeViewColumn, baseColumn?: Gtk.TreeViewColumn | null): void
    removeColumn(column: Gtk.TreeViewColumn): number
    rowActivated(path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    rowExpanded(path: Gtk.TreePath): boolean
    scrollToCell(path: Gtk.TreePath | null, column: Gtk.TreeViewColumn | null, useAlign: boolean, rowAlign: number, colAlign: number): void
    scrollToPoint(treeX: number, treeY: number): void
    setActivateOnSingleClick(single: boolean): void
    setColumnDragFunction(func?: Gtk.TreeViewColumnDropFunc | null): void
    setCursor(path: Gtk.TreePath, focusColumn: Gtk.TreeViewColumn | null, startEditing: boolean): void
    setCursorOnCell(path: Gtk.TreePath, focusColumn: Gtk.TreeViewColumn | null, focusCell: Gtk.CellRenderer | null, startEditing: boolean): void
    setDestroyCountFunc(func?: Gtk.TreeDestroyCountFunc | null): void
    setDragDestRow(path: Gtk.TreePath | null, pos: Gtk.TreeViewDropPosition): void
    setEnableSearch(enableSearch: boolean): void
    setEnableTreeLines(enabled: boolean): void
    setExpanderColumn(column?: Gtk.TreeViewColumn | null): void
    setFixedHeightMode(enable: boolean): void
    setGridLines(gridLines: Gtk.TreeViewGridLines): void
    setHadjustment(adjustment?: Gtk.Adjustment | null): void
    setHeadersClickable(setting: boolean): void
    setHeadersVisible(headersVisible: boolean): void
    setHoverExpand(expand: boolean): void
    setHoverSelection(hover: boolean): void
    setLevelIndentation(indentation: number): void
    setModel(model?: Gtk.TreeModel | null): void
    setReorderable(reorderable: boolean): void
    setRowSeparatorFunc(func?: Gtk.TreeViewRowSeparatorFunc | null): void
    setRubberBanding(enable: boolean): void
    setRulesHint(setting: boolean): void
    setSearchColumn(column: number): void
    setSearchEntry(entry?: Gtk.Entry | null): void
    setSearchEqualFunc(searchEqualFunc: Gtk.TreeViewSearchEqualFunc): void
    setSearchPositionFunc(func?: Gtk.TreeViewSearchPositionFunc | null): void
    setShowExpanders(enabled: boolean): void
    setTooltipCell(tooltip: Gtk.Tooltip, path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null, cell?: Gtk.CellRenderer | null): void
    setTooltipColumn(column: number): void
    setTooltipRow(tooltip: Gtk.Tooltip, path: Gtk.TreePath): void
    setVadjustment(adjustment?: Gtk.Adjustment | null): void
    unsetRowsDragDest(): void
    unsetRowsDragSource(): void
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    /* child_notify clashes with Gtk.Widget.child_notify */
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): { returnType: boolean, focusableWidgets: Gtk.Widget[] }
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): { pathLength: number | null, path: string | null, pathReversed: string | null }
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): { widgetPointer: Gtk.Widget }
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): { allocation: Gtk.Allocation, baseline: number | null }
    getAllocatedWidth(): number
    getAllocation(): { allocation: Gtk.Allocation }
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): { requisition: Gtk.Requisition }
    getChildVisible(): boolean
    getClip(): { clip: Gtk.Allocation }
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): { x: number | null, y: number | null }
    getPreferredHeight(): { minimumHeight: number | null, naturalHeight: number | null }
    getPreferredHeightAndBaselineForWidth(width: number): { minimumHeight: number | null, naturalHeight: number | null, minimumBaseline: number | null, naturalBaseline: number | null }
    getPreferredHeightForWidth(width: number): { minimumHeight: number | null, naturalHeight: number | null }
    getPreferredSize(): { minimumSize: Gtk.Requisition | null, naturalSize: Gtk.Requisition | null }
    getPreferredWidth(): { minimumWidth: number | null, naturalWidth: number | null }
    getPreferredWidthForHeight(height: number): { minimumWidth: number | null, naturalWidth: number | null }
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): { requisition: Gtk.Requisition }
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): { width: number | null, height: number | null }
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): { returnType: boolean, intersection: Gdk.Rectangle | null }
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): { pathLength: number | null, path: string | null, pathReversed: string | null }
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): { requisition: Gtk.Requisition }
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): { returnType: boolean, destX: number | null, destY: number | null }
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): { returnType: boolean, parser: GLib.MarkupParser, data: object | null }
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Methods of Gtk-3.0.Gtk.Scrollable */
    getBorder(): { returnType: boolean, border: Gtk.Border }
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Signals of Gtk-3.0.Gtk.TreeView */
    connect(sigName: "columns-changed", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "columns-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "columns-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "columns-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "columns-changed"): void
    connect(sigName: "cursor-changed", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "cursor-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-changed"): void
    connect(sigName: "expand-collapse-cursor-row", callback: (($obj: ChaptersView, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    on(sigName: "expand-collapse-cursor-row", callback: (object: boolean, p0: boolean, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "expand-collapse-cursor-row", callback: (object: boolean, p0: boolean, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "expand-collapse-cursor-row", callback: (object: boolean, p0: boolean, p1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "expand-collapse-cursor-row", object: boolean, p0: boolean, p1: boolean): void
    connect(sigName: "move-cursor", callback: (($obj: ChaptersView, step: Gtk.MovementStep, direction: number) => boolean)): number
    on(sigName: "move-cursor", callback: (step: Gtk.MovementStep, direction: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: (step: Gtk.MovementStep, direction: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: (step: Gtk.MovementStep, direction: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-cursor", step: Gtk.MovementStep, direction: number): void
    connect(sigName: "row-activated", callback: (($obj: ChaptersView, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    on(sigName: "row-activated", callback: (path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-activated", callback: (path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-activated", callback: (path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void): NodeJS.EventEmitter
    emit(sigName: "row-activated", path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    connect(sigName: "row-collapsed", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    on(sigName: "row-collapsed", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-collapsed", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-collapsed", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void): NodeJS.EventEmitter
    emit(sigName: "row-collapsed", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "row-expanded", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    on(sigName: "row-expanded", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-expanded", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-expanded", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void): NodeJS.EventEmitter
    emit(sigName: "row-expanded", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "select-all", callback: (($obj: ChaptersView) => boolean)): number
    on(sigName: "select-all", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-all", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-all", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "select-all"): void
    connect(sigName: "select-cursor-parent", callback: (($obj: ChaptersView) => boolean)): number
    on(sigName: "select-cursor-parent", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-cursor-parent", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-cursor-parent", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "select-cursor-parent"): void
    connect(sigName: "select-cursor-row", callback: (($obj: ChaptersView, object: boolean) => boolean)): number
    on(sigName: "select-cursor-row", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-cursor-row", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-cursor-row", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "select-cursor-row", object: boolean): void
    connect(sigName: "start-interactive-search", callback: (($obj: ChaptersView) => boolean)): number
    on(sigName: "start-interactive-search", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start-interactive-search", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start-interactive-search", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "start-interactive-search"): void
    connect(sigName: "test-collapse-row", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    on(sigName: "test-collapse-row", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "test-collapse-row", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "test-collapse-row", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void): NodeJS.EventEmitter
    emit(sigName: "test-collapse-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "test-expand-row", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    on(sigName: "test-expand-row", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "test-expand-row", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "test-expand-row", callback: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void): NodeJS.EventEmitter
    emit(sigName: "test-expand-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "toggle-cursor-row", callback: (($obj: ChaptersView) => boolean)): number
    on(sigName: "toggle-cursor-row", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "toggle-cursor-row", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "toggle-cursor-row", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "toggle-cursor-row"): void
    connect(sigName: "unselect-all", callback: (($obj: ChaptersView) => boolean)): number
    on(sigName: "unselect-all", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unselect-all", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unselect-all", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unselect-all"): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: ChaptersView, object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: ChaptersView, object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: ChaptersView, object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: ChaptersView, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: ChaptersView, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: ChaptersView, signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: (($obj: ChaptersView, childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: ChaptersView, event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: ChaptersView, event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: ChaptersView, event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: ChaptersView, event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: ChaptersView, previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: ChaptersView, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: ChaptersView, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: ChaptersView, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: ChaptersView, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: ChaptersView, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: ChaptersView, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: ChaptersView, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: ChaptersView, context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: ChaptersView, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: ChaptersView, cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: ChaptersView, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: ChaptersView, event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: ChaptersView, event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: ChaptersView, direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: ChaptersView, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: ChaptersView, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: ChaptersView, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: ChaptersView, wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: ChaptersView, previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: ChaptersView, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: ChaptersView, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: ChaptersView, direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: ChaptersView, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: ChaptersView, event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ChaptersView, groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: ChaptersView, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: ChaptersView, direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: ChaptersView, oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: ChaptersView) => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: ChaptersView, event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: ChaptersView, event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: ChaptersView, event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: ChaptersView, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: ChaptersView, previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: ChaptersView, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: ChaptersView, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: ChaptersView, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: ChaptersView, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: ChaptersView, data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: ChaptersView, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: ChaptersView, helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: ChaptersView, allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: ChaptersView, state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: ChaptersView, flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: ChaptersView, previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: ChaptersView, object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: ChaptersView, event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: ChaptersView) => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: ChaptersView, event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: ChaptersView, event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-search", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expander-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expander-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expander-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expander-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::headers-clickable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::headers-visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::headers-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::headers-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::headers-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hover-expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hover-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hover-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hover-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hover-selection", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hover-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hover-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hover-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level-indentation", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level-indentation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level-indentation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level-indentation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reorderable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rubber-banding", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rules-hint", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rules-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rules-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rules-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-expanders", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-expanders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-expanders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-expanders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChaptersView_ConstructProps)
    _init (config?: ChaptersView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChaptersView
    static $gtype: GObject.Type
}
export interface Charmap_ConstructProps extends Gtk.Paned_ConstructProps {
    activeChapter?: string
    activeCharacter?: number
    activePage?: number
    chaptersModel?: ChaptersModel
    fontDesc?: Pango.FontDescription
    fontFallback?: boolean
    snapPower2?: boolean
    orientation?: Gtk.Orientation
}
export class Charmap {
    /* Properties of Gucharmap-2.90.Gucharmap.Charmap */
    activeChapter: string
    activeCharacter: number
    readonly activeCodepointList: CodepointList
    activePage: number
    chaptersModel: ChaptersModel
    fontDesc: Pango.FontDescription
    fontFallback: boolean
    snapPower2: boolean
    /* Properties of Gtk-3.0.Gtk.Paned */
    readonly maxPosition: number
    readonly minPosition: number
    position: number
    positionSet: boolean
    wideHandle: boolean
    /* Properties of Gtk-3.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gtk-3.0.Gtk.Paned */
    container: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.Charmap */
    getActiveChapter(): string
    getActiveCharacter(): number
    getActiveCodepointList(): CodepointList
    getActivePage(): number
    getBookCodepointList(): CodepointList
    getChaptersModel(): ChaptersModel
    getChaptersView(): ChaptersView
    getChaptersVisible(): boolean
    getChartable(): Chartable
    getFontDesc(): Pango.FontDescription
    getFontFallback(): boolean
    getPageVisible(page: number): boolean
    getSnapPow2(): boolean
    nextChapter(): void
    previousChapter(): void
    setActiveChapter(chapter: string): void
    setActiveCharacter(uc: number): void
    setActivePage(page: number): void
    setChaptersModel(model: ChaptersModel): void
    setChaptersVisible(visible: boolean): void
    setFontDesc(fontDesc: Pango.FontDescription): void
    setFontFallback(enableFontFallback: boolean): void
    setPageVisible(page: number, visible: boolean): void
    setSnapPow2(snap: boolean): void
    /* Methods of Gtk-3.0.Gtk.Paned */
    add1(child: Gtk.Widget): void
    add2(child: Gtk.Widget): void
    getChild1(): Gtk.Widget | null
    getChild2(): Gtk.Widget | null
    getHandleWindow(): Gdk.Window
    getPosition(): number
    getWideHandle(): boolean
    pack1(child: Gtk.Widget, resize: boolean, shrink: boolean): void
    pack2(child: Gtk.Widget, resize: boolean, shrink: boolean): void
    setPosition(position: number): void
    setWideHandle(wide: boolean): void
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    /* child_notify clashes with Gtk.Widget.child_notify */
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): { returnType: boolean, focusableWidgets: Gtk.Widget[] }
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): { pathLength: number | null, path: string | null, pathReversed: string | null }
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): { widgetPointer: Gtk.Widget }
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): { allocation: Gtk.Allocation, baseline: number | null }
    getAllocatedWidth(): number
    getAllocation(): { allocation: Gtk.Allocation }
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): { requisition: Gtk.Requisition }
    getChildVisible(): boolean
    getClip(): { clip: Gtk.Allocation }
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): { x: number | null, y: number | null }
    getPreferredHeight(): { minimumHeight: number | null, naturalHeight: number | null }
    getPreferredHeightAndBaselineForWidth(width: number): { minimumHeight: number | null, naturalHeight: number | null, minimumBaseline: number | null, naturalBaseline: number | null }
    getPreferredHeightForWidth(width: number): { minimumHeight: number | null, naturalHeight: number | null }
    getPreferredSize(): { minimumSize: Gtk.Requisition | null, naturalSize: Gtk.Requisition | null }
    getPreferredWidth(): { minimumWidth: number | null, naturalWidth: number | null }
    getPreferredWidthForHeight(height: number): { minimumWidth: number | null, naturalWidth: number | null }
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): { requisition: Gtk.Requisition }
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): { width: number | null, height: number | null }
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): { returnType: boolean, intersection: Gdk.Rectangle | null }
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): { pathLength: number | null, path: string | null, pathReversed: string | null }
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): { requisition: Gtk.Requisition }
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): { returnType: boolean, destX: number | null, destY: number | null }
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): { returnType: boolean, parser: GLib.MarkupParser, data: object | null }
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Methods of Gtk-3.0.Gtk.Orientable */
    getOrientation(): Gtk.Orientation
    setOrientation(orientation: Gtk.Orientation): void
    /* Signals of Gucharmap-2.90.Gucharmap.Charmap */
    connect(sigName: "link-clicked", callback: (($obj: Charmap, object: number, p0: number) => void)): number
    on(sigName: "link-clicked", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-clicked", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-clicked", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "link-clicked", object: number, p0: number): void
    connect(sigName: "status-message", callback: (($obj: Charmap, object: string) => void)): number
    on(sigName: "status-message", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-message", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-message", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "status-message", object: string): void
    /* Signals of Gtk-3.0.Gtk.Paned */
    connect(sigName: "accept-position", callback: (($obj: Charmap) => boolean)): number
    on(sigName: "accept-position", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-position", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-position", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accept-position"): void
    connect(sigName: "cancel-position", callback: (($obj: Charmap) => boolean)): number
    on(sigName: "cancel-position", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel-position", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel-position", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancel-position"): void
    connect(sigName: "cycle-child-focus", callback: (($obj: Charmap, reversed: boolean) => boolean)): number
    on(sigName: "cycle-child-focus", callback: (reversed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cycle-child-focus", callback: (reversed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cycle-child-focus", callback: (reversed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "cycle-child-focus", reversed: boolean): void
    connect(sigName: "cycle-handle-focus", callback: (($obj: Charmap, reversed: boolean) => boolean)): number
    on(sigName: "cycle-handle-focus", callback: (reversed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cycle-handle-focus", callback: (reversed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cycle-handle-focus", callback: (reversed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "cycle-handle-focus", reversed: boolean): void
    connect(sigName: "move-handle", callback: (($obj: Charmap, scrollType: Gtk.ScrollType) => boolean)): number
    on(sigName: "move-handle", callback: (scrollType: Gtk.ScrollType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-handle", callback: (scrollType: Gtk.ScrollType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-handle", callback: (scrollType: Gtk.ScrollType) => void): NodeJS.EventEmitter
    emit(sigName: "move-handle", scrollType: Gtk.ScrollType): void
    connect(sigName: "toggle-handle-focus", callback: (($obj: Charmap) => boolean)): number
    on(sigName: "toggle-handle-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "toggle-handle-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "toggle-handle-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "toggle-handle-focus"): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: Charmap, object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Charmap) => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Charmap, object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Charmap, object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Charmap) => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: Charmap, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Charmap, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: Charmap, signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: (($obj: Charmap, childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: Charmap) => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: Charmap, event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: Charmap, event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: Charmap, event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: Charmap) => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: Charmap, event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: Charmap, previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: Charmap, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: Charmap, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: Charmap, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: Charmap, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: Charmap, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: Charmap, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: Charmap, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: Charmap, context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: Charmap, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: Charmap, cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: Charmap, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: Charmap, event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: Charmap, event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: Charmap, direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: Charmap, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: Charmap, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: Charmap, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: Charmap) => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: Charmap, wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Charmap) => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: Charmap, previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: Charmap, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: Charmap, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: Charmap, direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: Charmap, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Charmap) => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: Charmap, event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Charmap, groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: Charmap, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Charmap, direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: Charmap, oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: Charmap) => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: Charmap, event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: Charmap, event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: Charmap, event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: Charmap, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Charmap) => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: Charmap, previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: Charmap, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: Charmap, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Charmap, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Charmap, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: Charmap, data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: Charmap, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Charmap) => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Charmap, helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Charmap, allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: Charmap, state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: Charmap, flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: Charmap, previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: Charmap) => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: Charmap, object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: Charmap) => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: Charmap, event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Charmap) => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: Charmap, event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: Charmap, event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-chapter", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-chapter", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-chapter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-chapter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-chapter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-character", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-character", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-codepoint-list", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-codepoint-list", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-codepoint-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-codepoint-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-codepoint-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-page", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-page", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chapters-model", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chapters-model", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chapters-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chapters-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chapters-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-fallback", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-fallback", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap-power-2", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-power-2", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wide-handle", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wide-handle", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wide-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wide-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wide-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::orientation", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Charmap_ConstructProps)
    _init (config?: Charmap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Charmap
    static new(orientation: Gtk.Orientation): Charmap
    static $gtype: GObject.Type
}
export interface Chartable_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    activeCharacter?: number
    codepointList?: CodepointList
    fontDesc?: Pango.FontDescription
    fontFallback?: boolean
    snapPower2?: boolean
    zoomEnabled?: boolean
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
export class Chartable {
    /* Properties of Gucharmap-2.90.Gucharmap.Chartable */
    activeCharacter: number
    codepointList: CodepointList
    fontDesc: Pango.FontDescription
    fontFallback: boolean
    snapPower2: boolean
    zoomEnabled: boolean
    readonly zoomShowing: boolean
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of Gucharmap-2.90.Gucharmap.Chartable */
    parentInstance: Gtk.DrawingArea
    /* Fields of Gtk-3.0.Gtk.DrawingArea */
    widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.Chartable */
    getActiveCharacter(): number
    getCodepointList(): CodepointList
    getFontDesc(): Pango.FontDescription
    getFontFallback(): boolean
    getSnapPow2(): boolean
    getZoomEnabled(): boolean
    setActiveCharacter(wc: number): void
    setCodepointList(codepointList: CodepointList): void
    setFontDesc(fontDesc: Pango.FontDescription): void
    setFontFallback(enableFontFallback: boolean): void
    setSnapPow2(snap: boolean): void
    setZoomEnabled(enabled: boolean): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): { pathLength: number | null, path: string | null, pathReversed: string | null }
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): { widgetPointer: Gtk.Widget }
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): { allocation: Gtk.Allocation, baseline: number | null }
    getAllocatedWidth(): number
    getAllocation(): { allocation: Gtk.Allocation }
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): { requisition: Gtk.Requisition }
    getChildVisible(): boolean
    getClip(): { clip: Gtk.Allocation }
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): { x: number | null, y: number | null }
    getPreferredHeight(): { minimumHeight: number | null, naturalHeight: number | null }
    getPreferredHeightAndBaselineForWidth(width: number): { minimumHeight: number | null, naturalHeight: number | null, minimumBaseline: number | null, naturalBaseline: number | null }
    getPreferredHeightForWidth(width: number): { minimumHeight: number | null, naturalHeight: number | null }
    getPreferredSize(): { minimumSize: Gtk.Requisition | null, naturalSize: Gtk.Requisition | null }
    getPreferredWidth(): { minimumWidth: number | null, naturalWidth: number | null }
    getPreferredWidthForHeight(height: number): { minimumWidth: number | null, naturalWidth: number | null }
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): { requisition: Gtk.Requisition }
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): { width: number | null, height: number | null }
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): { returnType: boolean, intersection: Gdk.Rectangle | null }
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): { pathLength: number | null, path: string | null, pathReversed: string | null }
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): { requisition: Gtk.Requisition }
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): { returnType: boolean, destX: number | null, destY: number | null }
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): { returnType: boolean, parser: GLib.MarkupParser, data: object | null }
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Methods of Gtk-3.0.Gtk.Scrollable */
    getBorder(): { returnType: boolean, border: Gtk.Border }
    getHadjustment(): Gtk.Adjustment
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVadjustment(): Gtk.Adjustment
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Signals of Gucharmap-2.90.Gucharmap.Chartable */
    connect(sigName: "activate", callback: (($obj: Chartable) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "copy-clipboard", callback: (($obj: Chartable) => void)): number
    on(sigName: "copy-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "copy-clipboard"): void
    connect(sigName: "move-cursor", callback: (($obj: Chartable, object: Gtk.MovementStep, p0: number) => boolean)): number
    on(sigName: "move-cursor", callback: (object: Gtk.MovementStep, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: (object: Gtk.MovementStep, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: (object: Gtk.MovementStep, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-cursor", object: Gtk.MovementStep, p0: number): void
    connect(sigName: "paste-clipboard", callback: (($obj: Chartable) => void)): number
    on(sigName: "paste-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paste-clipboard"): void
    connect(sigName: "status-message", callback: (($obj: Chartable, object: string) => void)): number
    on(sigName: "status-message", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-message", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-message", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "status-message", object: string): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Chartable) => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: Chartable, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Chartable, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: Chartable, signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: (($obj: Chartable, childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: Chartable) => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: Chartable, event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: Chartable, event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: Chartable, event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: Chartable) => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: Chartable, event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: Chartable, previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: Chartable, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: Chartable, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: Chartable, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: Chartable, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: Chartable, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: Chartable, context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: Chartable, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: Chartable, context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: Chartable, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: Chartable, cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: Chartable, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: Chartable, event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: Chartable, event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: Chartable, direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: Chartable, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: Chartable, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: Chartable, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: Chartable) => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: Chartable, wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Chartable) => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: Chartable, previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: Chartable, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: Chartable, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: Chartable, direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: Chartable, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Chartable) => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: Chartable, event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Chartable, groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: Chartable, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Chartable, direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: Chartable, oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: Chartable) => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: Chartable, event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: Chartable, event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: Chartable, event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: Chartable, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Chartable) => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: Chartable, previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: Chartable, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: Chartable, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Chartable, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Chartable, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: Chartable, data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: Chartable, event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Chartable) => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Chartable, helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Chartable, allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: Chartable, state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: Chartable, flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: Chartable, previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: Chartable) => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: Chartable, object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: Chartable) => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: Chartable, event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Chartable) => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: Chartable, event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: Chartable, event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-character", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-character", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codepoint-list", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codepoint-list", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codepoint-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codepoint-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codepoint-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-fallback", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-fallback", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap-power-2", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-power-2", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zoom-enabled", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-enabled", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zoom-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zoom-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zoom-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zoom-showing", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-showing", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zoom-showing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zoom-showing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zoom-showing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Chartable_ConstructProps)
    _init (config?: Chartable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Chartable
    static $gtype: GObject.Type
}
export interface ChartableAccessible_ConstructProps extends Atk.NoOpObject_ConstructProps {
}
export class ChartableAccessible {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Atk.Object
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.NoOpObject */
    parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relationSet: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    /* return type clashes with Atk.Action.get_description */
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    /* return type clashes with Atk.Action.get_name */
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    /* return type clashes with Atk.Action.set_description */
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): { x: number | null, y: number | null, width: number | null, height: number | null }
    getPosition(coordType: Atk.CoordType): { x: number | null, y: number | null }
    getSize(): { width: number | null, height: number | null }
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Methods of Atk-1.0.Atk.Document */
    getAttributeValue(attributeName: string): string | null
    getCurrentPageNumber(): number
    getDocument(): object | null
    getDocumentType(): string
    getLocale(): string
    getPageCount(): number
    setAttributeValue(attributeName: string, attributeValue: string): boolean
    /* Methods of Atk-1.0.Atk.EditableText */
    copyText(startPos: number, endPos: number): void
    cutText(startPos: number, endPos: number): void
    deleteText(startPos: number, endPos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attribSet: Atk.AttributeSet, startOffset: number, endOffset: number): boolean
    setTextContents(string: string): void
    /* Methods of Atk-1.0.Atk.Hypertext */
    getLink(linkIndex: number): Atk.Hyperlink
    getLinkIndex(charIndex: number): number
    getNLinks(): number
    /* Methods of Atk-1.0.Atk.Image */
    getImageDescription(): string
    getImageLocale(): string | null
    getImagePosition(coordType: Atk.CoordType): { x: number | null, y: number | null }
    getImageSize(): { width: number | null, height: number | null }
    setImageDescription(description: string): boolean
    /* Methods of Atk-1.0.Atk.Selection */
    addSelection(i: number): boolean
    clearSelection(): boolean
    getSelectionCount(): number
    isChildSelected(i: number): boolean
    refSelection(i: number): Atk.Object | null
    removeSelection(i: number): boolean
    selectAllSelection(): boolean
    /* Methods of Atk-1.0.Atk.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getCaption(): Atk.Object | null
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Atk.Object | null
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getRowAtIndex(index: number): number
    getRowDescription(row: number): string | null
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Atk.Object | null
    getSelectedColumns(selected: number): number
    getSelectedRows(selected: number): number
    getSummary(): Atk.Object
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    refAt(row: number, column: number): Atk.Object
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    setCaption(caption: Atk.Object): void
    setColumnDescription(column: number, description: string): void
    setColumnHeader(column: number, header: Atk.Object): void
    setRowDescription(row: number, description: string): void
    setRowHeader(row: number, header: Atk.Object): void
    setSummary(accessible: Atk.Object): void
    /* Methods of Atk-1.0.Atk.TableCell */
    getColumnHeaderCells(): Atk.Object[]
    getColumnSpan(): number
    getPosition(): { returnType: boolean, row: number, column: number }
    getRowColumnSpan(): { returnType: boolean, row: number, column: number, rowSpan: number, columnSpan: number }
    getRowHeaderCells(): Atk.Object[]
    getRowSpan(): number
    getTable(): Atk.Object
    /* Methods of Atk-1.0.Atk.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getBoundedRanges(rect: Atk.TextRectangle, coordType: Atk.CoordType, xClipType: Atk.TextClipType, yClipType: Atk.TextClipType): Atk.TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: Atk.CoordType): { x: number | null, y: number | null, width: number | null, height: number | null }
    getDefaultAttributes(): Atk.AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: Atk.CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, coordType: Atk.CoordType): { rect: Atk.TextRectangle }
    getRunAttributes(offset: number): { returnType: Atk.AttributeSet, startOffset: number, endOffset: number }
    getSelection(selectionNum: number): { returnType: string, startOffset: number, endOffset: number }
    getStringAtOffset(offset: number, granularity: Atk.TextGranularity): { returnType: string | null, startOffset: number, endOffset: number }
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, boundaryType: Atk.TextBoundary): { returnType: string, startOffset: number, endOffset: number }
    getTextAtOffset(offset: number, boundaryType: Atk.TextBoundary): { returnType: string, startOffset: number, endOffset: number }
    getTextBeforeOffset(offset: number, boundaryType: Atk.TextBoundary): { returnType: string, startOffset: number, endOffset: number }
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: Atk.ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: Atk.CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Methods of Atk-1.0.Atk.Value */
    getCurrentValue(): { value: any }
    getIncrement(): number
    getMaximumValue(): { value: any }
    getMinimumIncrement(): { value: any }
    getMinimumValue(): { value: any }
    getRange(): Atk.Range | null
    getSubRanges(): Atk.Range[]
    getValueAndText(): { value: number, text: string | null }
    setCurrentValue(value: any): boolean
    setValue(newValue: number): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: ChartableAccessible, arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: (($obj: ChartableAccessible, arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: (($obj: ChartableAccessible, arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: ChartableAccessible, arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: ChartableAccessible, arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: ChartableAccessible, arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    /* Signals of Atk-1.0.Atk.Document */
    connect(sigName: "load-complete", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-complete"): void
    connect(sigName: "load-stopped", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-stopped"): void
    connect(sigName: "page-changed", callback: (($obj: ChartableAccessible, pageNumber: number) => void)): number
    on(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (pageNumber: number) => void): NodeJS.EventEmitter
    emit(sigName: "page-changed", pageNumber: number): void
    connect(sigName: "reload", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reload", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reload"): void
    /* Signals of Atk-1.0.Atk.Hypertext */
    connect(sigName: "link-selected", callback: (($obj: ChartableAccessible, arg1: number) => void)): number
    on(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "link-selected", arg1: number): void
    /* Signals of Atk-1.0.Atk.Selection */
    connect(sigName: "selection-changed", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-changed"): void
    /* Signals of Atk-1.0.Atk.Table */
    connect(sigName: "column-deleted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    on(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    connect(sigName: "column-inserted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    on(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    connect(sigName: "column-reordered", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "column-reordered"): void
    connect(sigName: "model-changed", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "model-changed"): void
    connect(sigName: "row-deleted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    on(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    connect(sigName: "row-inserted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    on(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    connect(sigName: "row-reordered", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "row-reordered"): void
    /* Signals of Atk-1.0.Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-attributes-changed"): void
    connect(sigName: "text-caret-moved", callback: (($obj: ChartableAccessible, arg1: number) => void)): number
    on(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-caret-moved", arg1: number): void
    connect(sigName: "text-changed", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    on(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    connect(sigName: "text-insert", callback: (($obj: ChartableAccessible, arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-remove", callback: (($obj: ChartableAccessible, arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-selection-changed", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-selection-changed"): void
    /* Signals of Atk-1.0.Atk.Value */
    connect(sigName: "value-changed", callback: (($obj: ChartableAccessible, value: number, text: string) => void)): number
    on(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (value: number, text: string) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", value: number, text: string): void
    /* Signals of Atk-1.0.Atk.Window */
    connect(sigName: "activate", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "create", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "create"): void
    connect(sigName: "deactivate", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deactivate"): void
    connect(sigName: "destroy", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "maximize", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "maximize"): void
    connect(sigName: "minimize", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "minimize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "minimize"): void
    connect(sigName: "move", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "move"): void
    connect(sigName: "resize", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resize"): void
    connect(sigName: "restore", callback: (($obj: ChartableAccessible) => void)): number
    on(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restore", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restore"): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChartableAccessible_ConstructProps)
    _init (config?: ChartableAccessible_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(chartable: Chartable): ChartableAccessible
    static new(obj: GObject.Object): ChartableAccessible
    static freeRanges(ranges: Atk.TextRange[]): void
    static $gtype: GObject.Type
}
export interface ChartableCellAccessible_ConstructProps extends Atk.Object_ConstructProps {
}
export class ChartableCellAccessible {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Atk.Object
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Gucharmap-2.90.Gucharmap.ChartableCellAccessible */
    parent: Atk.Object
    widget: Gtk.Widget
    index: number
    stateSet: Atk.StateSet
    activateDescription: string
    actionIdleHandler: number
    /* Fields of Atk-1.0.Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relationSet: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.ChartableCellAccessible */
    addState(stateType: Atk.StateType, emitSignal: boolean): boolean
    initialise(widget: Gtk.Widget, parent: Atk.Object, index: number): void
    removeState(stateType: Atk.StateType, emitSignal: boolean): boolean
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    /* return type clashes with Atk.Action.get_description */
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    /* return type clashes with Atk.Action.get_name */
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    /* return type clashes with Atk.Action.set_description */
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): { x: number | null, y: number | null, width: number | null, height: number | null }
    getPosition(coordType: Atk.CoordType): { x: number | null, y: number | null }
    getSize(): { width: number | null, height: number | null }
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: ChartableCellAccessible, arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: (($obj: ChartableCellAccessible, arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: (($obj: ChartableCellAccessible, arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: ChartableCellAccessible, arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: ChartableCellAccessible, arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: ChartableCellAccessible) => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: ChartableCellAccessible, arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChartableCellAccessible_ConstructProps)
    _init (config?: ChartableCellAccessible_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChartableCellAccessible
    static $gtype: GObject.Type
}
export interface CodepointList_ConstructProps extends GObject.Object_ConstructProps {
}
export class CodepointList {
    /* Fields of Gucharmap-2.90.Gucharmap.CodepointList */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.CodepointList */
    getChar(index: number): number
    getIndex(wc: number): number
    getLastIndex(): number
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
    connect(sigName: "notify", callback: (($obj: CodepointList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CodepointList_ConstructProps)
    _init (config?: CodepointList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ScriptChaptersModel_ConstructProps extends ChaptersModel_ConstructProps {
}
export class ScriptChaptersModel {
    /* Fields of Gucharmap-2.90.Gucharmap.ScriptChaptersModel */
    parent: ChaptersModel
    /* Fields of Gucharmap-2.90.Gucharmap.ChaptersModel */
    parentInstance: Gtk.ListStore
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.ChaptersModel */
    characterToIter(wc: number): { returnType: boolean, iter: Gtk.TreeIter }
    getBookCodepointList(): CodepointList
    getCodepointList(iter: Gtk.TreeIter): CodepointList
    getTitle(): string
    idToIter(id: string): { returnType: boolean, iter: Gtk.TreeIter }
    /* Methods of Gtk-3.0.Gtk.ListStore */
    append(): { iter: Gtk.TreeIter }
    clear(): void
    insert(position: number): { iter: Gtk.TreeIter }
    insertAfter(sibling?: Gtk.TreeIter | null): { iter: Gtk.TreeIter }
    insertBefore(sibling?: Gtk.TreeIter | null): { iter: Gtk.TreeIter }
    insertWithValuesv(position: number, columns: number[], values: any[]): { iter: Gtk.TreeIter | null }
    iterIsValid(iter: Gtk.TreeIter): boolean
    moveAfter(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    moveBefore(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    prepend(): { iter: Gtk.TreeIter }
    remove(iter: Gtk.TreeIter): boolean
    reorder(newOrder: number[]): void
    setColumnTypes(types: GObject.Type[]): void
    setValue(iter: Gtk.TreeIter, column: number, value: any): void
    set(iter: Gtk.TreeIter, columns: number[], values: any[]): void
    swap(a: Gtk.TreeIter, b: Gtk.TreeIter): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): { returnType: boolean, parser: GLib.MarkupParser, data: object | null }
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    getName(): string
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Methods of Gtk-3.0.Gtk.TreeDragDest */
    dragDataReceived(dest: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    rowDropPossible(destPath: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    /* Methods of Gtk-3.0.Gtk.TreeDragSource */
    dragDataDelete(path: Gtk.TreePath): boolean
    dragDataGet(path: Gtk.TreePath, selectionData: Gtk.SelectionData): boolean
    rowDraggable(path: Gtk.TreePath): boolean
    /* Methods of Gtk-3.0.Gtk.TreeModel */
    filterNew(root?: Gtk.TreePath | null): Gtk.TreeModel
    foreach(func: Gtk.TreeModelForeachFunc): void
    getColumnType(index: number): GObject.Type
    getFlags(): Gtk.TreeModelFlags
    getIter(path: Gtk.TreePath): { returnType: boolean, iter: Gtk.TreeIter }
    getIterFirst(): { returnType: boolean, iter: Gtk.TreeIter }
    getIterFromString(pathString: string): { returnType: boolean, iter: Gtk.TreeIter }
    getNColumns(): number
    getPath(iter: Gtk.TreeIter): Gtk.TreePath
    getStringFromIter(iter: Gtk.TreeIter): string
    getValue(iter: Gtk.TreeIter, column: number): { value: any }
    iterChildren(parent?: Gtk.TreeIter | null): { returnType: boolean, iter: Gtk.TreeIter }
    iterHasChild(iter: Gtk.TreeIter): boolean
    iterNChildren(iter?: Gtk.TreeIter | null): number
    iterNext(iter: Gtk.TreeIter): boolean
    iterNthChild(parent: Gtk.TreeIter | null, n: number): { returnType: boolean, iter: Gtk.TreeIter }
    iterParent(child: Gtk.TreeIter): { returnType: boolean, iter: Gtk.TreeIter }
    iterPrevious(iter: Gtk.TreeIter): boolean
    refNode(iter: Gtk.TreeIter): void
    rowChanged(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowDeleted(path: Gtk.TreePath): void
    rowHasChildToggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowInserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rowsReordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, newOrder: number[]): void
    unrefNode(iter: Gtk.TreeIter): void
    /* Methods of Gtk-3.0.Gtk.TreeSortable */
    getSortColumnId(): { returnType: boolean, sortColumnId: number, order: Gtk.SortType }
    hasDefaultSortFunc(): boolean
    setDefaultSortFunc(sortFunc: Gtk.TreeIterCompareFunc): void
    setSortColumnId(sortColumnId: number, order: Gtk.SortType): void
    setSortFunc(sortColumnId: number, sortFunc: Gtk.TreeIterCompareFunc): void
    sortColumnChanged(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScriptChaptersModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk-3.0.Gtk.TreeModel */
    connect(sigName: "row-changed", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-deleted", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath) => void)): number
    on(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (path: Gtk.TreePath) => void): NodeJS.EventEmitter
    emit(sigName: "row-deleted", path: Gtk.TreePath): void
    connect(sigName: "row-has-child-toggled", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-has-child-toggled", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-has-child-toggled", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-inserted", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    on(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "rows-reordered", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void)): number
    on(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "rows-reordered", callback: (path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "rows-reordered", path: Gtk.TreePath, iter: Gtk.TreeIter, newOrder?: object | null): void
    /* Signals of Gtk-3.0.Gtk.TreeSortable */
    connect(sigName: "sort-column-changed", callback: (($obj: ScriptChaptersModel) => void)): number
    on(sigName: "sort-column-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sort-column-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sort-column-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sort-column-changed"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ScriptChaptersModel_ConstructProps)
    _init (config?: ScriptChaptersModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ScriptChaptersModel
    static new(types: GObject.Type[]): ScriptChaptersModel
    static $gtype: GObject.Type
}
export interface ScriptCodepointList_ConstructProps extends CodepointList_ConstructProps {
}
export class ScriptCodepointList {
    /* Fields of Gucharmap-2.90.Gucharmap.ScriptCodepointList */
    parent: CodepointList
    /* Fields of Gucharmap-2.90.Gucharmap.CodepointList */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gucharmap-2.90.Gucharmap.ScriptCodepointList */
    appendScript(script: string): boolean
    setScript(script: string): boolean
    setScripts(scripts: string): boolean
    /* Methods of Gucharmap-2.90.Gucharmap.CodepointList */
    getChar(index: number): number
    getIndex(wc: number): number
    getLastIndex(): number
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
    connect(sigName: "notify", callback: (($obj: ScriptCodepointList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ScriptCodepointList_ConstructProps)
    _init (config?: ScriptCodepointList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ScriptCodepointList
    static $gtype: GObject.Type
}
export abstract class BlockChaptersModelClass {
    /* Fields of Gucharmap-2.90.Gucharmap.BlockChaptersModelClass */
    parentClass: ChaptersModelClass
    static name: string
}
export class BlockChaptersModelPrivate {
    static name: string
}
export abstract class BlockCodepointListClass {
    /* Fields of Gucharmap-2.90.Gucharmap.BlockCodepointListClass */
    parentClass: CodepointListClass
    static name: string
}
export class BlockCodepointListPrivate {
    static name: string
}
export abstract class ChaptersModelClass {
    /* Fields of Gucharmap-2.90.Gucharmap.ChaptersModelClass */
    parentClass: Gtk.ListStoreClass
    title: string
    characterToIter: (chapters: ChaptersModel, wc: number) => { returnType: boolean, iter: Gtk.TreeIter }
    getCodepointList: (chapters: ChaptersModel, iter: Gtk.TreeIter) => CodepointList
    getBookCodepointList: (chapters: ChaptersModel) => CodepointList
    static name: string
}
export class ChaptersModelPrivate {
    /* Fields of Gucharmap-2.90.Gucharmap.ChaptersModelPrivate */
    bookList: CodepointList
    static name: string
}
export abstract class ChaptersViewClass {
    /* Fields of Gucharmap-2.90.Gucharmap.ChaptersViewClass */
    parentClass: Gtk.TreeViewClass
    static name: string
}
export class ChaptersViewPrivate {
    static name: string
}
export abstract class CharmapClass {
    /* Fields of Gucharmap-2.90.Gucharmap.CharmapClass */
    parentClass: Gtk.PanedClass
    statusMessage: (charmap: Charmap, message: string) => void
    linkClicked: (charmap: Charmap, oldCharacter: number, newCharacter: number) => void
    static name: string
}
export class CharmapPrivate {
    static name: string
}
export abstract class ChartableAccessibleClass {
    static name: string
}
export abstract class ChartableCellAccessibleClass {
    /* Fields of Gucharmap-2.90.Gucharmap.ChartableCellAccessibleClass */
    parentClass: Atk.ObjectClass
    static name: string
}
export abstract class ChartableClass {
    /* Fields of Gucharmap-2.90.Gucharmap.ChartableClass */
    parentClass: Gtk.DrawingAreaClass
    setScrollAdjustments: (chartable: Chartable, hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment) => void
    moveCursor: (chartable: Chartable, step: Gtk.MovementStep, count: number) => boolean
    activate: (chartable: Chartable) => void
    copyClipboard: (chartable: Chartable) => void
    pasteClipboard: (chartable: Chartable) => void
    setActiveChar: (chartable: Chartable, ch: number) => void
    statusMessage: (chartable: Chartable, message: string) => void
    static name: string
}
export class ChartablePrivate {
    /* Fields of Gucharmap-2.90.Gucharmap.ChartablePrivate */
    vadjustment: Gtk.Adjustment
    vadjustmentChangedHandlerId: number
    hadjustment: Gtk.Adjustment
    hscrollPolicy: number
    vscrollPolicy: number
    fontDesc: Pango.FontDescription
    minimalColumnWidth: number
    minimalRowHeight: number
    nPaddedColumns: number
    nPaddedRows: number
    rows: number
    cols: number
    pageSize: number
    pageFirstCell: number
    activeCell: number
    pangoLayout: Pango.Layout
    zoomWindow: Gtk.Widget
    zoomImageWidth: number
    zoomImageHeight: number
    clickX: number
    clickY: number
    targetList: Gtk.TargetList
    codepointList: CodepointList
    lastCell: number
    codepointListChanged: boolean
    snapPow2Enabled: number
    zoomModeEnabled: number
    fontFallback: number
    static name: string
}
export abstract class CodepointListClass {
    /* Fields of Gucharmap-2.90.Gucharmap.CodepointListClass */
    parentClass: GObject.ObjectClass
    getLastIndex: (list: CodepointList) => number
    getChar: (list: CodepointList, index: number) => number
    getIndex: (list: CodepointList, wc: number) => number
    static name: string
}
export class CodepointListPrivate {
    static name: string
}
export abstract class ScriptChaptersModelClass {
    /* Fields of Gucharmap-2.90.Gucharmap.ScriptChaptersModelClass */
    parentClass: ChaptersModelClass
    static name: string
}
export class ScriptChaptersModelPrivate {
    static name: string
}
export abstract class ScriptCodepointListClass {
    /* Fields of Gucharmap-2.90.Gucharmap.ScriptCodepointListClass */
    parentClass: CodepointListClass
    static name: string
}
export class ScriptCodepointListPrivate {
    static name: string
}
}