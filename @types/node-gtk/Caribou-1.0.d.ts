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
    /* Properties of Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
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
    /* Virtual methods of Caribou.IScannableItem */
    vfuncGetScanStepping(): boolean
    vfuncSetScanStepping(value: boolean): void
    vfuncGetScanSelected(): boolean
    vfuncSetScanSelected(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Caribou.IScannableGroup */
    scanGrouping: ScanGrouping
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.IScannableGroup */
    childSelect(): IScannableItem | null
    scanReset(): void
    getScanChildren(): IScannableItem[]
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void
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
    /* Virtual methods of Caribou.IScannableGroup */
    vfuncChildSelect(): IScannableItem | null
    vfuncScanReset(): void
    vfuncGetScanChildren(): IScannableItem[]
    vfuncChildStep(cycles: number): IScannableItem | null
    vfuncGetStepPath(): IScannableItem[]
    vfuncGetSelectedPath(): IScannableItem[]
    vfuncGetScanGrouping(): ScanGrouping
    vfuncSetScanGrouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IScannableGroup */
    connect(sigName: "selected-item-changed", callback: (($obj: IScannableGroup, selectedItem?: IScannableItem | null) => void)): number
    connect_after(sigName: "selected-item-changed", callback: (($obj: IScannableGroup, selectedItem?: IScannableItem | null) => void)): number
    emit(sigName: "selected-item-changed", selectedItem?: IScannableItem | null): void
    on(sigName: "selected-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selected-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selected-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "step-item-changed", callback: (($obj: IScannableGroup, stepItem?: IScannableItem | null) => void)): number
    connect_after(sigName: "step-item-changed", callback: (($obj: IScannableGroup, stepItem?: IScannableItem | null) => void)): number
    emit(sigName: "step-item-changed", stepItem?: IScannableItem | null): void
    on(sigName: "step-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "step-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "step-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scan-cleared", callback: (($obj: IScannableGroup) => void)): number
    connect_after(sigName: "scan-cleared", callback: (($obj: IScannableGroup) => void)): number
    emit(sigName: "scan-cleared"): void
    on(sigName: "scan-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scan-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scan-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
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
    /* Virtual methods of Caribou.IKeyboardObject */
    vfuncGetChildren(): IKeyboardObject[]
    vfuncGetKeys(): KeyModel[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    on(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-pressed", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    on(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-released", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    on(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IKeyboardObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IKeyboardObject, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: IKeyboardObject_ConstructProps)
    _init (config?: IKeyboardObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DisplayAdapter_ConstructProps extends GObject.Object_ConstructProps {
    display?: Gdk.Display
}
export class DisplayAdapter {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Virtual methods of Caribou.DisplayAdapter */
    vfuncKeyvalPress(keyval: number): void
    vfuncKeyvalRelease(keyval: number): void
    vfuncModLock(mask: number): void
    vfuncModUnlock(mask: number): void
    vfuncModLatch(mask: number): void
    vfuncModUnlatch(mask: number): void
    vfuncGetCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    vfuncGetGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    vfuncRegisterKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    vfuncRegisterButtonFunc(button: number, func?: KeyButtonCallback | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: DisplayAdapter, modifiers: number) => void)): number
    connect_after(sigName: "modifiers-changed", callback: (($obj: DisplayAdapter, modifiers: number) => void)): number
    emit(sigName: "modifiers-changed", modifiers: number): void
    on(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "group-changed", callback: (($obj: DisplayAdapter, gid: number, group: string, variant: string) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: DisplayAdapter, gid: number, group: string, variant: string) => void)): number
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    on(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "config-changed", callback: (($obj: DisplayAdapter) => void)): number
    connect_after(sigName: "config-changed", callback: (($obj: DisplayAdapter) => void)): number
    emit(sigName: "config-changed"): void
    on(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DisplayAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DisplayAdapter, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Virtual methods of Caribou.DisplayAdapter */
    vfuncKeyvalPress(keyval: number): void
    vfuncKeyvalRelease(keyval: number): void
    vfuncModLock(mask: number): void
    vfuncModUnlock(mask: number): void
    vfuncModLatch(mask: number): void
    vfuncModUnlatch(mask: number): void
    vfuncGetCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    vfuncGetGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    vfuncRegisterKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    vfuncRegisterButtonFunc(button: number, func?: KeyButtonCallback | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: NullAdapter, modifiers: number) => void)): number
    connect_after(sigName: "modifiers-changed", callback: (($obj: NullAdapter, modifiers: number) => void)): number
    emit(sigName: "modifiers-changed", modifiers: number): void
    on(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "group-changed", callback: (($obj: NullAdapter, gid: number, group: string, variant: string) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: NullAdapter, gid: number, group: string, variant: string) => void)): number
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    on(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "config-changed", callback: (($obj: NullAdapter) => void)): number
    connect_after(sigName: "config-changed", callback: (($obj: NullAdapter) => void)): number
    emit(sigName: "config-changed"): void
    on(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NullAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NullAdapter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NullAdapter_ConstructProps)
    _init (config?: NullAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullAdapter
    static $gtype: GObject.Type
}
export interface XAdapter_ConstructProps extends DisplayAdapter_ConstructProps {
}
export class XAdapter {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Virtual methods of Caribou.DisplayAdapter */
    vfuncKeyvalPress(keyval: number): void
    vfuncKeyvalRelease(keyval: number): void
    vfuncModLock(mask: number): void
    vfuncModUnlock(mask: number): void
    vfuncModLatch(mask: number): void
    vfuncModUnlatch(mask: number): void
    vfuncGetCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    vfuncGetGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    vfuncRegisterKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    vfuncRegisterButtonFunc(button: number, func?: KeyButtonCallback | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: XAdapter, modifiers: number) => void)): number
    connect_after(sigName: "modifiers-changed", callback: (($obj: XAdapter, modifiers: number) => void)): number
    emit(sigName: "modifiers-changed", modifiers: number): void
    on(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "group-changed", callback: (($obj: XAdapter, gid: number, group: string, variant: string) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: XAdapter, gid: number, group: string, variant: string) => void)): number
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    on(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "config-changed", callback: (($obj: XAdapter) => void)): number
    connect_after(sigName: "config-changed", callback: (($obj: XAdapter) => void)): number
    emit(sigName: "config-changed"): void
    on(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: XAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XAdapter, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Caribou.KeyboardModel */
    activeGroup: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.KeyboardModel */
    getGroups(): string[]
    getGroup(groupName: string): GroupModel
    getActiveGroup(): string
    getKeyboardType(): string
    getKeyboardFile(): string
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
    /* Methods of Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Virtual methods of Caribou.KeyboardModel */
    vfuncGetChildren(): IKeyboardObject[]
    vfuncGetKeys(): KeyModel[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.KeyboardModel */
    connect(sigName: "group-added", callback: (($obj: KeyboardModel, name: string) => void)): number
    connect_after(sigName: "group-added", callback: (($obj: KeyboardModel, name: string) => void)): number
    emit(sigName: "group-added", name: string): void
    on(sigName: "group-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "group-removed", callback: (($obj: KeyboardModel, name: string) => void)): number
    connect_after(sigName: "group-removed", callback: (($obj: KeyboardModel, name: string) => void)): number
    emit(sigName: "group-removed", name: string): void
    on(sigName: "group-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    on(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-pressed", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    on(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-released", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    on(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.KeyboardService */
    setCursorLocation(x: number, y: number, w: number, h: number): void
    setEntryLocation(x: number, y: number, w: number, h: number): void
    show(timestamp: number): void
    hide(timestamp: number): void
    registerKeyboard(name: string): void
    nameLost(name: string): void
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
    /* Virtual methods of Caribou.KeyboardService */
    vfuncSetCursorLocation(x: number, y: number, w: number, h: number): void
    vfuncSetEntryLocation(x: number, y: number, w: number, h: number): void
    vfuncShow(timestamp: number): void
    vfuncHide(timestamp: number): void
    vfuncNameLost(name: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyboardService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyboardService, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: KeyboardService_ConstructProps)
    _init (config?: KeyboardService_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GroupModel_ConstructProps extends GObject.Object_ConstructProps {
    activeLevel?: string
}
export class GroupModel {
    /* Properties of Caribou.GroupModel */
    activeLevel: string
    /* Fields of Caribou.GroupModel */
    group: string
    variant: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.GroupModel */
    getLevels(): string[]
    getLevel(levelName: string): LevelModel
    getActiveLevel(): string
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
    /* Methods of Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Virtual methods of Caribou.GroupModel */
    vfuncGetChildren(): IKeyboardObject[]
    vfuncGetKeys(): KeyModel[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    on(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-pressed", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    on(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-released", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    on(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Caribou.LevelModel */
    mode: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.LevelModel */
    getRows(): RowModel[]
    getMode(): string
    /* Methods of Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Virtual methods of Caribou.LevelModel */
    vfuncGetChildren(): IKeyboardObject[]
    vfuncGetKeys(): KeyModel[]
    /* Virtual methods of Caribou.ScannableGroup */
    vfuncGetScanChildren(): IScannableItem[]
    vfuncChildSelect(): IScannableItem | null
    vfuncScanReset(): void
    vfuncChildStep(cycles: number): IScannableItem | null
    vfuncGetStepPath(): IScannableItem[]
    vfuncGetSelectedPath(): IScannableItem[]
    vfuncGetScanGrouping(): ScanGrouping
    vfuncSetScanGrouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.LevelModel */
    connect(sigName: "level-toggled", callback: (($obj: LevelModel, newLevel: string) => void)): number
    connect_after(sigName: "level-toggled", callback: (($obj: LevelModel, newLevel: string) => void)): number
    emit(sigName: "level-toggled", newLevel: string): void
    on(sigName: "level-toggled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "level-toggled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "level-toggled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    on(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-pressed", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    on(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-released", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    on(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.RowModel */
    getColumns(): ColumnModel[]
    /* Methods of Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Virtual methods of Caribou.RowModel */
    vfuncGetScanStepping(): boolean
    vfuncSetScanStepping(value: boolean): void
    vfuncGetScanSelected(): boolean
    vfuncSetScanSelected(value: boolean): void
    vfuncGetChildren(): IKeyboardObject[]
    vfuncGetKeys(): KeyModel[]
    /* Virtual methods of Caribou.ScannableGroup */
    vfuncGetScanChildren(): IScannableItem[]
    vfuncChildSelect(): IScannableItem | null
    vfuncScanReset(): void
    vfuncChildStep(cycles: number): IScannableItem | null
    vfuncGetStepPath(): IScannableItem[]
    vfuncGetSelectedPath(): IScannableItem[]
    vfuncGetScanGrouping(): ScanGrouping
    vfuncSetScanGrouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: RowModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: RowModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    on(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-pressed", callback: (($obj: RowModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: RowModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    on(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-released", callback: (($obj: RowModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: RowModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    on(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Caribou.KeyModel */
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
    /* Properties of Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of Caribou.KeyModel */
    modifierState: ModifierState
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.KeyModel */
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
    /* Methods of Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Virtual methods of Caribou.KeyModel */
    vfuncGetScanStepping(): boolean
    vfuncSetScanStepping(value: boolean): void
    vfuncGetScanSelected(): boolean
    vfuncSetScanSelected(value: boolean): void
    vfuncGetChildren(): IKeyboardObject[]
    vfuncGetKeys(): KeyModel[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.KeyModel */
    connect(sigName: "key-hold-end", callback: (($obj: KeyModel) => void)): number
    connect_after(sigName: "key-hold-end", callback: (($obj: KeyModel) => void)): number
    emit(sigName: "key-hold-end"): void
    on(sigName: "key-hold-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-hold-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-hold-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-hold", callback: (($obj: KeyModel) => void)): number
    connect_after(sigName: "key-hold", callback: (($obj: KeyModel) => void)): number
    emit(sigName: "key-hold"): void
    on(sigName: "key-hold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-hold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-hold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    on(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-pressed", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    on(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-released", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    on(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.ColumnModel */
    getKey(index: number): KeyModel
    firstKey(): KeyModel
    /* Methods of Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Virtual methods of Caribou.ColumnModel */
    vfuncGetScanStepping(): boolean
    vfuncSetScanStepping(value: boolean): void
    vfuncGetScanSelected(): boolean
    vfuncSetScanSelected(value: boolean): void
    vfuncGetChildren(): IKeyboardObject[]
    vfuncGetKeys(): KeyModel[]
    /* Virtual methods of Caribou.ScannableGroup */
    vfuncGetScanChildren(): IScannableItem[]
    vfuncChildSelect(): IScannableItem | null
    vfuncScanReset(): void
    vfuncChildStep(cycles: number): IScannableItem | null
    vfuncGetStepPath(): IScannableItem[]
    vfuncGetSelectedPath(): IScannableItem[]
    vfuncGetScanGrouping(): ScanGrouping
    vfuncSetScanGrouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    on(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-pressed", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    on(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-released", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    on(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Caribou.Scanner */
    scanGrouping: number
    scanEnabled: boolean
    stepTime: number
    switchDevice: string
    keyboardKey: string
    mouseButton: number
    scanCycles: number
    autorestart: boolean
    inverseScanning: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.Scanner */
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
    connect(sigName: "notify", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Caribou.IScannableGroup */
    scanGrouping: ScanGrouping
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou.IScannableGroup */
    scanReset(): void
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void
    /* Virtual methods of Caribou.ScannableGroup */
    vfuncGetScanChildren(): IScannableItem[]
    vfuncChildSelect(): IScannableItem | null
    vfuncScanReset(): void
    vfuncChildStep(cycles: number): IScannableItem | null
    vfuncGetStepPath(): IScannableItem[]
    vfuncGetSelectedPath(): IScannableItem[]
    vfuncGetScanGrouping(): ScanGrouping
    vfuncSetScanGrouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Caribou.IScannableGroup */
    connect(sigName: "selected-item-changed", callback: (($obj: ScannableGroup, selectedItem?: IScannableItem | null) => void)): number
    connect_after(sigName: "selected-item-changed", callback: (($obj: ScannableGroup, selectedItem?: IScannableItem | null) => void)): number
    emit(sigName: "selected-item-changed", selectedItem?: IScannableItem | null): void
    on(sigName: "selected-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selected-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selected-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "step-item-changed", callback: (($obj: ScannableGroup, stepItem?: IScannableItem | null) => void)): number
    connect_after(sigName: "step-item-changed", callback: (($obj: ScannableGroup, stepItem?: IScannableItem | null) => void)): number
    emit(sigName: "step-item-changed", stepItem?: IScannableItem | null): void
    on(sigName: "step-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "step-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "step-item-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scan-cleared", callback: (($obj: ScannableGroup) => void)): number
    connect_after(sigName: "scan-cleared", callback: (($obj: ScannableGroup) => void)): number
    emit(sigName: "scan-cleared"): void
    on(sigName: "scan-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scan-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scan-cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of Caribou.DisplayAdapterClass */
    keyvalPress: (keyval: number) => void
    keyvalRelease: (keyval: number) => void
    modLock: (mask: number) => void
    modUnlock: (mask: number) => void
    modLatch: (mask: number) => void
    modUnlatch: (mask: number) => void
    getCurrentGroup: () => [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups: () => [ /* groupNames */ string[], /* variantNames */ string[] ]
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
    /* Fields of Caribou.KeyboardServiceClass */
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
    /* Fields of Caribou.ScannableGroupClass */
    getScanChildren: () => IScannableItem[]
    childSelect: () => IScannableItem | null
    static name: string
}
export class ScannableGroupPrivate {
    static name: string
}
export abstract class IScannableItemIface {
    /* Fields of Caribou.IScannableItemIface */
    getScanStepping: () => boolean
    setScanStepping: (value: boolean) => void
    getScanSelected: () => boolean
    setScanSelected: (value: boolean) => void
    static name: string
}
export abstract class IScannableGroupIface {
    /* Fields of Caribou.IScannableGroupIface */
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
    /* Fields of Caribou.IKeyboardObjectIface */
    getChildren: () => IKeyboardObject[]
    getKeys: () => KeyModel[]
    static name: string
}
}