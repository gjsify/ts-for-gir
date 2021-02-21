/**
 * Caribou-1.0
 */

import "node"
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace Caribou {

export enum ModifierState {
    NONE,
    LATCHED,
    LOCKED,
}
export enum ScanGrouping {
    NONE,
    SUBGROUPS,
    ROWS,
    LINEAR,
}
export interface KeyButtonCallback {
    (keybuttoncode: number, pressed: boolean): void
}
export interface IScannableItem_ConstructProps extends GObject.Object_ConstructProps {
    scanStepping?: boolean
    scanSelected?: boolean
}
export class IScannableItem {
    /* Properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
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
    connect(sigName: "notify", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scan-stepping", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-selected", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IScannableItem_ConstructProps)
    _init (config?: IScannableItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IScannableGroup_ConstructProps extends GObject.Object_ConstructProps {
    scanGrouping?: ScanGrouping
}
export class IScannableGroup {
    /* Properties of Caribou-1.0.Caribou.IScannableGroup */
    scanGrouping: ScanGrouping
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.IScannableGroup */
    childSelect(): IScannableItem | null
    scanReset(): void
    getScanChildren(): IScannableItem[]
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void
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
    /* Signals of Caribou-1.0.Caribou.IScannableGroup */
    connect(sigName: "selected-item-changed", callback: (($obj: IScannableGroup, selectedItem?: IScannableItem | null) => void)): number
    on(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void): NodeJS.EventEmitter
    emit(sigName: "selected-item-changed", selectedItem?: IScannableItem | null): void
    connect(sigName: "step-item-changed", callback: (($obj: IScannableGroup, stepItem?: IScannableItem | null) => void)): number
    on(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void): NodeJS.EventEmitter
    emit(sigName: "step-item-changed", stepItem?: IScannableItem | null): void
    connect(sigName: "scan-cleared", callback: (($obj: IScannableGroup) => void)): number
    on(sigName: "scan-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scan-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scan-cleared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "scan-cleared"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scan-grouping", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IScannableGroup_ConstructProps)
    _init (config?: IScannableGroup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IKeyboardObject_ConstructProps extends GObject.Object_ConstructProps {
}
export class IKeyboardObject {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
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
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IKeyboardObject, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: IKeyboardObject_ConstructProps)
    _init (config?: IKeyboardObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DisplayAdapter_ConstructProps extends GObject.Object_ConstructProps {
    display?: Gdk.Display
}
export class DisplayAdapter {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): { returnType: number, groupName: string, variantName: string }
    getGroups(): { groupNames: string[], variantNames: string[] }
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Signals of Caribou-1.0.Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: DisplayAdapter, modifiers: number) => void)): number
    on(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (modifiers: number) => void): NodeJS.EventEmitter
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: (($obj: DisplayAdapter, gid: number, group: string, variant: string) => void)): number
    on(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (($obj: DisplayAdapter) => void)): number
    on(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "config-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DisplayAdapter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DisplayAdapter_ConstructProps)
    _init (config?: DisplayAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static setDefault(adapter: DisplayAdapter): boolean
    static getDefault(): DisplayAdapter
    static $gtype: GObject.Type
}
export interface NullAdapter_ConstructProps extends DisplayAdapter_ConstructProps {
}
export class NullAdapter {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): { returnType: number, groupName: string, variantName: string }
    getGroups(): { groupNames: string[], variantNames: string[] }
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Signals of Caribou-1.0.Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: NullAdapter, modifiers: number) => void)): number
    on(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (modifiers: number) => void): NodeJS.EventEmitter
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: (($obj: NullAdapter, gid: number, group: string, variant: string) => void)): number
    on(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (($obj: NullAdapter) => void)): number
    on(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "config-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NullAdapter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NullAdapter_ConstructProps)
    _init (config?: NullAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullAdapter
    static $gtype: GObject.Type
}
export interface XAdapter_ConstructProps extends DisplayAdapter_ConstructProps {
}
export class XAdapter {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): { returnType: number, groupName: string, variantName: string }
    getGroups(): { groupNames: string[], variantNames: string[] }
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Signals of Caribou-1.0.Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: XAdapter, modifiers: number) => void)): number
    on(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (modifiers: number) => void): NodeJS.EventEmitter
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: (($obj: XAdapter, gid: number, group: string, variant: string) => void)): number
    on(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (($obj: XAdapter) => void)): number
    on(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "config-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XAdapter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: XAdapter_ConstructProps)
    _init (config?: XAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XAdapter
    static $gtype: GObject.Type
}
export interface KeyboardModel_ConstructProps extends GObject.Object_ConstructProps {
    activeGroup?: string
    keyboardType?: string
    keyboardFile?: string
}
export class KeyboardModel {
    /* Properties of Caribou-1.0.Caribou.KeyboardModel */
    activeGroup: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.KeyboardModel */
    getGroups(): string[]
    getGroup(groupName: string): GroupModel
    getActiveGroup(): string
    getKeyboardType(): string
    getKeyboardFile(): string
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
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of Caribou-1.0.Caribou.KeyboardModel */
    connect(sigName: "group-added", callback: (($obj: KeyboardModel, name: string) => void)): number
    on(sigName: "group-added", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-added", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-added", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-added", name: string): void
    connect(sigName: "group-removed", callback: (($obj: KeyboardModel, name: string) => void)): number
    on(sigName: "group-removed", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-removed", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-removed", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-removed", name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::active-group", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-group", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: KeyboardModel_ConstructProps)
    _init (config?: KeyboardModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): KeyboardModel
    static $gtype: GObject.Type
}
export interface KeyboardService_ConstructProps extends GObject.Object_ConstructProps {
}
export class KeyboardService {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.KeyboardService */
    setCursorLocation(x: number, y: number, w: number, h: number): void
    setEntryLocation(x: number, y: number, w: number, h: number): void
    show(timestamp: number): void
    hide(timestamp: number): void
    registerKeyboard(name: string): void
    nameLost(name: string): void
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
    connect(sigName: "notify", callback: (($obj: KeyboardService, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: KeyboardService_ConstructProps)
    _init (config?: KeyboardService_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GroupModel_ConstructProps extends GObject.Object_ConstructProps {
    activeLevel?: string
}
export class GroupModel {
    /* Properties of Caribou-1.0.Caribou.GroupModel */
    activeLevel: string
    /* Fields of Caribou-1.0.Caribou.GroupModel */
    group: string
    variant: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.GroupModel */
    getLevels(): string[]
    getLevel(levelName: string): LevelModel
    getActiveLevel(): string
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
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::active-level", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-level", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GroupModel_ConstructProps)
    _init (config?: GroupModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(group: string, variant: string): GroupModel
    static createGroupName(group: string, variant: string): string
    static $gtype: GObject.Type
}
export interface LevelModel_ConstructProps extends ScannableGroup_ConstructProps {
    mode?: string
}
export class LevelModel {
    /* Properties of Caribou-1.0.Caribou.LevelModel */
    mode: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.LevelModel */
    getRows(): RowModel[]
    getMode(): string
    /* Methods of Caribou-1.0.Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of Caribou-1.0.Caribou.LevelModel */
    connect(sigName: "level-toggled", callback: (($obj: LevelModel, newLevel: string) => void)): number
    on(sigName: "level-toggled", callback: (newLevel: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "level-toggled", callback: (newLevel: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "level-toggled", callback: (newLevel: string) => void): NodeJS.EventEmitter
    emit(sigName: "level-toggled", newLevel: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::mode", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LevelModel_ConstructProps)
    _init (config?: LevelModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: string): LevelModel
    static $gtype: GObject.Type
}
export interface RowModel_ConstructProps extends ScannableGroup_ConstructProps {
    scanStepping?: boolean
    scanSelected?: boolean
}
export class RowModel {
    /* Properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.RowModel */
    getColumns(): ColumnModel[]
    /* Methods of Caribou-1.0.Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou-1.0.Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: RowModel, key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: RowModel, key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: RowModel, key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::scan-stepping", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-selected", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RowModel_ConstructProps)
    _init (config?: RowModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RowModel
    static $gtype: GObject.Type
}
export interface KeyModel_ConstructProps extends GObject.Object_ConstructProps {
    align?: string
    width?: number
    toggle?: string
    repeatable?: boolean
    isModifier?: boolean
    showSubkeys?: boolean
    name?: string
    keyval?: number
    text?: string
    label?: string
    scanStepping?: boolean
    scanSelected?: boolean
}
export class KeyModel {
    /* Properties of Caribou-1.0.Caribou.KeyModel */
    align: string
    width: number
    toggle: string
    repeatable: boolean
    isModifier: boolean
    showSubkeys: boolean
    name: string
    keyval: number
    text: string
    label: string
    /* Properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of Caribou-1.0.Caribou.KeyModel */
    modifierState: ModifierState
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.KeyModel */
    press(): void
    release(): void
    getExtendedKeys(): KeyModel[]
    activate(): void
    getAlign(): string
    setAlign(value: string): void
    getWidth(): number
    setWidth(value: number): void
    getToggle(): string
    setToggle(value: string): void
    getRepeatable(): boolean
    setRepeatable(value: boolean): void
    getIsModifier(): boolean
    setIsModifier(value: boolean): void
    getShowSubkeys(): boolean
    getName(): string
    getKeyval(): number
    getText(): string | null
    getLabel(): string
    setLabel(value: string): void
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
    /* Methods of Caribou-1.0.Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of Caribou-1.0.Caribou.KeyModel */
    connect(sigName: "key-hold-end", callback: (($obj: KeyModel) => void)): number
    on(sigName: "key-hold-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-hold-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-hold-end", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "key-hold-end"): void
    connect(sigName: "key-hold", callback: (($obj: KeyModel) => void)): number
    on(sigName: "key-hold", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-hold", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-hold", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "key-hold"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::align", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::toggle", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toggle", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::toggle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::toggle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::toggle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeatable", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeatable", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-modifier", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-modifier", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-modifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-modifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-modifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-subkeys", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-subkeys", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-subkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-subkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-subkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keyval", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyval", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keyval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keyval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keyval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-stepping", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-selected", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: KeyModel_ConstructProps)
    _init (config?: KeyModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, text?: string | null): KeyModel
    static $gtype: GObject.Type
}
export interface ColumnModel_ConstructProps extends ScannableGroup_ConstructProps {
    scanStepping?: boolean
    scanSelected?: boolean
}
export class ColumnModel {
    /* Properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.ColumnModel */
    getKey(index: number): KeyModel
    firstKey(): KeyModel
    /* Methods of Caribou-1.0.Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou-1.0.Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::scan-stepping", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-selected", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ColumnModel_ConstructProps)
    _init (config?: ColumnModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ColumnModel
    static $gtype: GObject.Type
}
export interface Scanner_ConstructProps extends GObject.Object_ConstructProps {
    bindSettings?: boolean
    scanGrouping?: number
    scanEnabled?: boolean
    stepTime?: number
    switchDevice?: string
    keyboardKey?: string
    mouseButton?: number
    scanCycles?: number
    autorestart?: boolean
    inverseScanning?: boolean
}
export class Scanner {
    /* Properties of Caribou-1.0.Caribou.Scanner */
    scanGrouping: number
    scanEnabled: boolean
    stepTime: number
    switchDevice: string
    keyboardKey: string
    mouseButton: number
    scanCycles: number
    autorestart: boolean
    inverseScanning: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.Scanner */
    setKeyboard(keyboard: KeyboardModel): void
    reset(): void
    getBindSettings(): boolean
    getScanGrouping(): number
    setScanGrouping(value: number): void
    getScanEnabled(): boolean
    setScanEnabled(value: boolean): void
    getStepTime(): number
    setStepTime(value: number): void
    getSwitchDevice(): string
    setSwitchDevice(value: string): void
    getKeyboardKey(): string
    setKeyboardKey(value: string): void
    getMouseButton(): number
    setMouseButton(value: number): void
    getScanCycles(): number
    setScanCycles(value: number): void
    getAutorestart(): boolean
    setAutorestart(value: boolean): void
    getInverseScanning(): boolean
    setInverseScanning(value: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scan-grouping", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-enabled", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-enabled", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::step-time", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step-time", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::step-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::step-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::step-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::switch-device", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switch-device", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::switch-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::switch-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::switch-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keyboard-key", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyboard-key", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keyboard-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keyboard-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keyboard-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mouse-button", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-button", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-cycles", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-cycles", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-cycles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-cycles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-cycles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autorestart", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autorestart", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autorestart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autorestart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autorestart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inverse-scanning", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverse-scanning", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Scanner_ConstructProps)
    _init (config?: Scanner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Scanner
    static $gtype: GObject.Type
}
export interface ScannableGroup_ConstructProps extends GObject.Object_ConstructProps {
    scanGrouping?: ScanGrouping
}
export class ScannableGroup {
    /* Properties of Caribou-1.0.Caribou.IScannableGroup */
    scanGrouping: ScanGrouping
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou-1.0.Caribou.IScannableGroup */
    scanReset(): void
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IScannableGroup */
    connect(sigName: "selected-item-changed", callback: (($obj: ScannableGroup, selectedItem?: IScannableItem | null) => void)): number
    on(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void): NodeJS.EventEmitter
    emit(sigName: "selected-item-changed", selectedItem?: IScannableItem | null): void
    connect(sigName: "step-item-changed", callback: (($obj: ScannableGroup, stepItem?: IScannableItem | null) => void)): number
    on(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void): NodeJS.EventEmitter
    emit(sigName: "step-item-changed", stepItem?: IScannableItem | null): void
    connect(sigName: "scan-cleared", callback: (($obj: ScannableGroup) => void)): number
    on(sigName: "scan-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scan-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scan-cleared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "scan-cleared"): void
    connect(sigName: "notify::scan-grouping", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ScannableGroup_ConstructProps)
    _init (config?: ScannableGroup_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class DisplayAdapterClass {
    /* Fields of Caribou-1.0.Caribou.DisplayAdapterClass */
    keyvalPress: (keyval: number) => void
    keyvalRelease: (keyval: number) => void
    modLock: (mask: number) => void
    modUnlock: (mask: number) => void
    modLatch: (mask: number) => void
    modUnlatch: (mask: number) => void
    getCurrentGroup: () => { returnType: number, groupName: string, variantName: string }
    getGroups: () => { groupNames: string[], variantNames: string[] }
    registerKeyFunc: (keyval: number, func?: KeyButtonCallback | null) => void
    registerButtonFunc: (button: number, func?: KeyButtonCallback | null) => void
    static name: string
}
export class DisplayAdapterPrivate {
    static name: string
}
export abstract class NullAdapterClass {
    static name: string
}
export class NullAdapterPrivate {
    static name: string
}
export abstract class XAdapterClass {
    static name: string
}
export class XAdapterPrivate {
    static name: string
}
export abstract class KeyboardModelClass {
    static name: string
}
export class KeyboardModelPrivate {
    static name: string
}
export abstract class KeyboardServiceClass {
    /* Fields of Caribou-1.0.Caribou.KeyboardServiceClass */
    setCursorLocation: (x: number, y: number, w: number, h: number) => void
    setEntryLocation: (x: number, y: number, w: number, h: number) => void
    show: (timestamp: number) => void
    hide: (timestamp: number) => void
    nameLost: (name: string) => void
    static name: string
}
export class KeyboardServicePrivate {
    static name: string
}
export abstract class GroupModelClass {
    static name: string
}
export class GroupModelPrivate {
    static name: string
}
export abstract class LevelModelClass {
    static name: string
}
export class LevelModelPrivate {
    static name: string
}
export abstract class RowModelClass {
    static name: string
}
export class RowModelPrivate {
    static name: string
}
export abstract class KeyModelClass {
    static name: string
}
export class KeyModelPrivate {
    static name: string
}
export abstract class ColumnModelClass {
    static name: string
}
export class ColumnModelPrivate {
    static name: string
}
export abstract class ScannerClass {
    static name: string
}
export class ScannerPrivate {
    static name: string
}
export abstract class ScannableGroupClass {
    /* Fields of Caribou-1.0.Caribou.ScannableGroupClass */
    getScanChildren: () => IScannableItem[]
    childSelect: () => IScannableItem | null
    static name: string
}
export class ScannableGroupPrivate {
    static name: string
}
export abstract class IScannableItemIface {
    /* Fields of Caribou-1.0.Caribou.IScannableItemIface */
    getScanStepping: () => boolean
    setScanStepping: (value: boolean) => void
    getScanSelected: () => boolean
    setScanSelected: (value: boolean) => void
    static name: string
}
export abstract class IScannableGroupIface {
    /* Fields of Caribou-1.0.Caribou.IScannableGroupIface */
    childSelect: () => IScannableItem | null
    scanReset: () => void
    getScanChildren: () => IScannableItem[]
    childStep: (cycles: number) => IScannableItem | null
    getStepPath: () => IScannableItem[]
    getSelectedPath: () => IScannableItem[]
    getScanGrouping: () => ScanGrouping
    setScanGrouping: (value: ScanGrouping) => void
    static name: string
}
export abstract class IKeyboardObjectIface {
    /* Fields of Caribou-1.0.Caribou.IKeyboardObjectIface */
    getChildren: () => IKeyboardObject[]
    getKeys: () => KeyModel[]
    static name: string
}
}