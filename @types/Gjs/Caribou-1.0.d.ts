/**
 * Caribou-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';

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
    scan_stepping?: boolean
    scan_selected?: boolean
}
export class IScannableItem {
    /* Properties of Caribou.IScannableItem */
    scan_stepping: boolean
    scan_selected: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.IScannableItem */
    get_scan_stepping(): boolean
    set_scan_stepping(value: boolean): void
    get_scan_selected(): boolean
    set_scan_selected(value: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Caribou.IScannableItem */
    vfunc_get_scan_stepping(): boolean
    vfunc_set_scan_stepping(value: boolean): void
    vfunc_get_scan_selected(): boolean
    vfunc_set_scan_selected(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scan-stepping", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scan-selected", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: IScannableItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IScannableItem_ConstructProps)
    _init (config?: IScannableItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IScannableGroup_ConstructProps extends GObject.Object_ConstructProps {
    scan_grouping?: ScanGrouping
}
export class IScannableGroup {
    /* Properties of Caribou.IScannableGroup */
    scan_grouping: ScanGrouping
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.IScannableGroup */
    child_select(): IScannableItem | null
    scan_reset(): void
    get_scan_children(): IScannableItem[]
    child_step(cycles: number): IScannableItem | null
    get_step_path(): IScannableItem[]
    get_selected_path(): IScannableItem[]
    get_scan_grouping(): ScanGrouping
    set_scan_grouping(value: ScanGrouping): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Caribou.IScannableGroup */
    vfunc_child_select(): IScannableItem | null
    vfunc_scan_reset(): void
    vfunc_get_scan_children(): IScannableItem[]
    vfunc_child_step(cycles: number): IScannableItem | null
    vfunc_get_step_path(): IScannableItem[]
    vfunc_get_selected_path(): IScannableItem[]
    vfunc_get_scan_grouping(): ScanGrouping
    vfunc_set_scan_grouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IScannableGroup */
    connect(sigName: "selected-item-changed", callback: (($obj: IScannableGroup, selected_item?: IScannableItem | null) => void)): number
    connect_after(sigName: "selected-item-changed", callback: (($obj: IScannableGroup, selected_item?: IScannableItem | null) => void)): number
    emit(sigName: "selected-item-changed", selected_item?: IScannableItem | null): void
    connect(sigName: "step-item-changed", callback: (($obj: IScannableGroup, step_item?: IScannableItem | null) => void)): number
    connect_after(sigName: "step-item-changed", callback: (($obj: IScannableGroup, step_item?: IScannableItem | null) => void)): number
    emit(sigName: "step-item-changed", step_item?: IScannableItem | null): void
    connect(sigName: "scan-cleared", callback: (($obj: IScannableGroup) => void)): number
    connect_after(sigName: "scan-cleared", callback: (($obj: IScannableGroup) => void)): number
    emit(sigName: "scan-cleared"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scan-grouping", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: IScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IScannableGroup_ConstructProps)
    _init (config?: IScannableGroup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IKeyboardObject_ConstructProps extends GObject.Object_ConstructProps {
}
export class IKeyboardObject {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.IKeyboardObject */
    get_children(): IKeyboardObject[]
    get_keys(): KeyModel[]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Caribou.IKeyboardObject */
    vfunc_get_children(): IKeyboardObject[]
    vfunc_get_keys(): KeyModel[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: IKeyboardObject, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IKeyboardObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IKeyboardObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.DisplayAdapter */
    keyval_press(keyval: number): void
    keyval_release(keyval: number): void
    mod_lock(mask: number): void
    mod_unlock(mask: number): void
    mod_latch(mask: number): void
    mod_unlatch(mask: number): void
    get_current_group(): [ /* returnType */ number, /* group_name */ string, /* variant_name */ string ]
    get_groups(): [ /* group_names */ string[], /* variant_names */ string[] ]
    register_key_func(keyval: number, func?: KeyButtonCallback | null): void
    register_button_func(button: number, func?: KeyButtonCallback | null): void
    get_display(): Gdk.Display
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Caribou.DisplayAdapter */
    vfunc_keyval_press(keyval: number): void
    vfunc_keyval_release(keyval: number): void
    vfunc_mod_lock(mask: number): void
    vfunc_mod_unlock(mask: number): void
    vfunc_mod_latch(mask: number): void
    vfunc_mod_unlatch(mask: number): void
    vfunc_get_current_group(): [ /* returnType */ number, /* group_name */ string, /* variant_name */ string ]
    vfunc_get_groups(): [ /* group_names */ string[], /* variant_names */ string[] ]
    vfunc_register_key_func(keyval: number, func?: KeyButtonCallback | null): void
    vfunc_register_button_func(button: number, func?: KeyButtonCallback | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: DisplayAdapter, modifiers: number) => void)): number
    connect_after(sigName: "modifiers-changed", callback: (($obj: DisplayAdapter, modifiers: number) => void)): number
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: (($obj: DisplayAdapter, gid: number, group: string, variant: string) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: DisplayAdapter, gid: number, group: string, variant: string) => void)): number
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (($obj: DisplayAdapter) => void)): number
    connect_after(sigName: "config-changed", callback: (($obj: DisplayAdapter) => void)): number
    emit(sigName: "config-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DisplayAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DisplayAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DisplayAdapter_ConstructProps)
    _init (config?: DisplayAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static set_default(adapter: DisplayAdapter): boolean
    static get_default(): DisplayAdapter
    static $gtype: GObject.Type
}
export interface NullAdapter_ConstructProps extends DisplayAdapter_ConstructProps {
}
export class NullAdapter {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.DisplayAdapter */
    keyval_press(keyval: number): void
    keyval_release(keyval: number): void
    mod_lock(mask: number): void
    mod_unlock(mask: number): void
    mod_latch(mask: number): void
    mod_unlatch(mask: number): void
    get_current_group(): [ /* returnType */ number, /* group_name */ string, /* variant_name */ string ]
    get_groups(): [ /* group_names */ string[], /* variant_names */ string[] ]
    register_key_func(keyval: number, func?: KeyButtonCallback | null): void
    register_button_func(button: number, func?: KeyButtonCallback | null): void
    get_display(): Gdk.Display
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Caribou.DisplayAdapter */
    vfunc_keyval_press(keyval: number): void
    vfunc_keyval_release(keyval: number): void
    vfunc_mod_lock(mask: number): void
    vfunc_mod_unlock(mask: number): void
    vfunc_mod_latch(mask: number): void
    vfunc_mod_unlatch(mask: number): void
    vfunc_get_current_group(): [ /* returnType */ number, /* group_name */ string, /* variant_name */ string ]
    vfunc_get_groups(): [ /* group_names */ string[], /* variant_names */ string[] ]
    vfunc_register_key_func(keyval: number, func?: KeyButtonCallback | null): void
    vfunc_register_button_func(button: number, func?: KeyButtonCallback | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: NullAdapter, modifiers: number) => void)): number
    connect_after(sigName: "modifiers-changed", callback: (($obj: NullAdapter, modifiers: number) => void)): number
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: (($obj: NullAdapter, gid: number, group: string, variant: string) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: NullAdapter, gid: number, group: string, variant: string) => void)): number
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (($obj: NullAdapter) => void)): number
    connect_after(sigName: "config-changed", callback: (($obj: NullAdapter) => void)): number
    emit(sigName: "config-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NullAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NullAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.DisplayAdapter */
    keyval_press(keyval: number): void
    keyval_release(keyval: number): void
    mod_lock(mask: number): void
    mod_unlock(mask: number): void
    mod_latch(mask: number): void
    mod_unlatch(mask: number): void
    get_current_group(): [ /* returnType */ number, /* group_name */ string, /* variant_name */ string ]
    get_groups(): [ /* group_names */ string[], /* variant_names */ string[] ]
    register_key_func(keyval: number, func?: KeyButtonCallback | null): void
    register_button_func(button: number, func?: KeyButtonCallback | null): void
    get_display(): Gdk.Display
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Caribou.DisplayAdapter */
    vfunc_keyval_press(keyval: number): void
    vfunc_keyval_release(keyval: number): void
    vfunc_mod_lock(mask: number): void
    vfunc_mod_unlock(mask: number): void
    vfunc_mod_latch(mask: number): void
    vfunc_mod_unlatch(mask: number): void
    vfunc_get_current_group(): [ /* returnType */ number, /* group_name */ string, /* variant_name */ string ]
    vfunc_get_groups(): [ /* group_names */ string[], /* variant_names */ string[] ]
    vfunc_register_key_func(keyval: number, func?: KeyButtonCallback | null): void
    vfunc_register_button_func(button: number, func?: KeyButtonCallback | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: (($obj: XAdapter, modifiers: number) => void)): number
    connect_after(sigName: "modifiers-changed", callback: (($obj: XAdapter, modifiers: number) => void)): number
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: (($obj: XAdapter, gid: number, group: string, variant: string) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: XAdapter, gid: number, group: string, variant: string) => void)): number
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (($obj: XAdapter) => void)): number
    connect_after(sigName: "config-changed", callback: (($obj: XAdapter) => void)): number
    emit(sigName: "config-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: XAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XAdapter_ConstructProps)
    _init (config?: XAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XAdapter
    static $gtype: GObject.Type
}
export interface KeyboardModel_ConstructProps extends GObject.Object_ConstructProps {
    active_group?: string
    keyboard_type?: string
    keyboard_file?: string
}
export class KeyboardModel {
    /* Properties of Caribou.KeyboardModel */
    active_group: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.KeyboardModel */
    get_groups(): string[]
    get_group(group_name: string): GroupModel
    get_active_group(): string
    get_keyboard_type(): string
    get_keyboard_file(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Caribou.IKeyboardObject */
    get_children(): IKeyboardObject[]
    get_keys(): KeyModel[]
    /* Virtual methods of Caribou.KeyboardModel */
    vfunc_get_children(): IKeyboardObject[]
    vfunc_get_keys(): KeyModel[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.KeyboardModel */
    connect(sigName: "group-added", callback: (($obj: KeyboardModel, name: string) => void)): number
    connect_after(sigName: "group-added", callback: (($obj: KeyboardModel, name: string) => void)): number
    emit(sigName: "group-added", name: string): void
    connect(sigName: "group-removed", callback: (($obj: KeyboardModel, name: string) => void)): number
    connect_after(sigName: "group-removed", callback: (($obj: KeyboardModel, name: string) => void)): number
    emit(sigName: "group-removed", name: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: KeyboardModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::active-group", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-group", callback: (($obj: KeyboardModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.KeyboardService */
    set_cursor_location(x: number, y: number, w: number, h: number): void
    set_entry_location(x: number, y: number, w: number, h: number): void
    show(timestamp: number): void
    hide(timestamp: number): void
    register_keyboard(name: string): void
    name_lost(name: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Caribou.KeyboardService */
    vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void
    vfunc_set_entry_location(x: number, y: number, w: number, h: number): void
    vfunc_show(timestamp: number): void
    vfunc_hide(timestamp: number): void
    vfunc_name_lost(name: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyboardService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyboardService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyboardService_ConstructProps)
    _init (config?: KeyboardService_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GroupModel_ConstructProps extends GObject.Object_ConstructProps {
    active_level?: string
}
export class GroupModel {
    /* Properties of Caribou.GroupModel */
    active_level: string
    /* Fields of Caribou.GroupModel */
    group: string
    variant: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.GroupModel */
    get_levels(): string[]
    get_level(level_name: string): LevelModel
    get_active_level(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Caribou.IKeyboardObject */
    get_children(): IKeyboardObject[]
    get_keys(): KeyModel[]
    /* Virtual methods of Caribou.GroupModel */
    vfunc_get_children(): IKeyboardObject[]
    vfunc_get_keys(): KeyModel[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: GroupModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::active-level", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-level", callback: (($obj: GroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GroupModel_ConstructProps)
    _init (config?: GroupModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(group: string, variant: string): GroupModel
    static create_group_name(group: string, variant: string): string
    static $gtype: GObject.Type
}
export interface LevelModel_ConstructProps extends ScannableGroup_ConstructProps {
    mode?: string
}
export class LevelModel {
    /* Properties of Caribou.LevelModel */
    mode: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.LevelModel */
    get_rows(): RowModel[]
    get_mode(): string
    /* Methods of Caribou.ScannableGroup */
    get_scan_children(): IScannableItem[]
    child_select(): IScannableItem | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Caribou.IKeyboardObject */
    get_children(): IKeyboardObject[]
    get_keys(): KeyModel[]
    /* Virtual methods of Caribou.LevelModel */
    vfunc_get_children(): IKeyboardObject[]
    vfunc_get_keys(): KeyModel[]
    /* Virtual methods of Caribou.ScannableGroup */
    vfunc_get_scan_children(): IScannableItem[]
    vfunc_child_select(): IScannableItem | null
    vfunc_scan_reset(): void
    vfunc_child_step(cycles: number): IScannableItem | null
    vfunc_get_step_path(): IScannableItem[]
    vfunc_get_selected_path(): IScannableItem[]
    vfunc_get_scan_grouping(): ScanGrouping
    vfunc_set_scan_grouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.LevelModel */
    connect(sigName: "level-toggled", callback: (($obj: LevelModel, new_level: string) => void)): number
    connect_after(sigName: "level-toggled", callback: (($obj: LevelModel, new_level: string) => void)): number
    emit(sigName: "level-toggled", new_level: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: LevelModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::mode", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: LevelModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LevelModel_ConstructProps)
    _init (config?: LevelModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: string): LevelModel
    static $gtype: GObject.Type
}
export interface RowModel_ConstructProps extends ScannableGroup_ConstructProps {
    scan_stepping?: boolean
    scan_selected?: boolean
}
export class RowModel {
    /* Properties of Caribou.IScannableItem */
    scan_stepping: boolean
    scan_selected: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.RowModel */
    get_columns(): ColumnModel[]
    /* Methods of Caribou.ScannableGroup */
    get_scan_children(): IScannableItem[]
    child_select(): IScannableItem | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Caribou.IScannableItem */
    get_scan_stepping(): boolean
    set_scan_stepping(value: boolean): void
    get_scan_selected(): boolean
    set_scan_selected(value: boolean): void
    /* Methods of Caribou.IKeyboardObject */
    get_children(): IKeyboardObject[]
    get_keys(): KeyModel[]
    /* Virtual methods of Caribou.RowModel */
    vfunc_get_scan_stepping(): boolean
    vfunc_set_scan_stepping(value: boolean): void
    vfunc_get_scan_selected(): boolean
    vfunc_set_scan_selected(value: boolean): void
    vfunc_get_children(): IKeyboardObject[]
    vfunc_get_keys(): KeyModel[]
    /* Virtual methods of Caribou.ScannableGroup */
    vfunc_get_scan_children(): IScannableItem[]
    vfunc_child_select(): IScannableItem | null
    vfunc_scan_reset(): void
    vfunc_child_step(cycles: number): IScannableItem | null
    vfunc_get_step_path(): IScannableItem[]
    vfunc_get_selected_path(): IScannableItem[]
    vfunc_get_scan_grouping(): ScanGrouping
    vfunc_set_scan_grouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: RowModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: RowModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: RowModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: RowModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: RowModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: RowModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::scan-stepping", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scan-selected", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: RowModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    is_modifier?: boolean
    show_subkeys?: boolean
    name?: string
    keyval?: number
    text?: string
    label?: string
    scan_stepping?: boolean
    scan_selected?: boolean
}
export class KeyModel {
    /* Properties of Caribou.KeyModel */
    align: string
    width: number
    toggle: string
    repeatable: boolean
    is_modifier: boolean
    show_subkeys: boolean
    name: string
    keyval: number
    text: string
    label: string
    /* Properties of Caribou.IScannableItem */
    scan_stepping: boolean
    scan_selected: boolean
    /* Fields of Caribou.KeyModel */
    modifier_state: ModifierState
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.KeyModel */
    press(): void
    release(): void
    get_extended_keys(): KeyModel[]
    activate(): void
    get_align(): string
    set_align(value: string): void
    get_width(): number
    set_width(value: number): void
    get_toggle(): string
    set_toggle(value: string): void
    get_repeatable(): boolean
    set_repeatable(value: boolean): void
    get_is_modifier(): boolean
    set_is_modifier(value: boolean): void
    get_show_subkeys(): boolean
    get_name(): string
    get_keyval(): number
    get_text(): string | null
    get_label(): string
    set_label(value: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Caribou.IScannableItem */
    get_scan_stepping(): boolean
    set_scan_stepping(value: boolean): void
    get_scan_selected(): boolean
    set_scan_selected(value: boolean): void
    /* Methods of Caribou.IKeyboardObject */
    get_children(): IKeyboardObject[]
    get_keys(): KeyModel[]
    /* Virtual methods of Caribou.KeyModel */
    vfunc_get_scan_stepping(): boolean
    vfunc_set_scan_stepping(value: boolean): void
    vfunc_get_scan_selected(): boolean
    vfunc_set_scan_selected(value: boolean): void
    vfunc_get_children(): IKeyboardObject[]
    vfunc_get_keys(): KeyModel[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Caribou.KeyModel */
    connect(sigName: "key-hold-end", callback: (($obj: KeyModel) => void)): number
    connect_after(sigName: "key-hold-end", callback: (($obj: KeyModel) => void)): number
    emit(sigName: "key-hold-end"): void
    connect(sigName: "key-hold", callback: (($obj: KeyModel) => void)): number
    connect_after(sigName: "key-hold", callback: (($obj: KeyModel) => void)): number
    emit(sigName: "key-hold"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: KeyModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::align", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::toggle", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toggle", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeatable", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeatable", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-modifier", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-modifier", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-subkeys", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-subkeys", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keyval", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyval", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scan-stepping", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scan-selected", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: KeyModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyModel_ConstructProps)
    _init (config?: KeyModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, text?: string | null): KeyModel
    static $gtype: GObject.Type
}
export interface ColumnModel_ConstructProps extends ScannableGroup_ConstructProps {
    scan_stepping?: boolean
    scan_selected?: boolean
}
export class ColumnModel {
    /* Properties of Caribou.IScannableItem */
    scan_stepping: boolean
    scan_selected: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.ColumnModel */
    get_key(index: number): KeyModel
    first_key(): KeyModel
    /* Methods of Caribou.ScannableGroup */
    get_scan_children(): IScannableItem[]
    child_select(): IScannableItem | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Caribou.IScannableItem */
    get_scan_stepping(): boolean
    set_scan_stepping(value: boolean): void
    get_scan_selected(): boolean
    set_scan_selected(value: boolean): void
    /* Methods of Caribou.IKeyboardObject */
    get_children(): IKeyboardObject[]
    get_keys(): KeyModel[]
    /* Virtual methods of Caribou.ColumnModel */
    vfunc_get_scan_stepping(): boolean
    vfunc_set_scan_stepping(value: boolean): void
    vfunc_get_scan_selected(): boolean
    vfunc_set_scan_selected(value: boolean): void
    vfunc_get_children(): IKeyboardObject[]
    vfunc_get_keys(): KeyModel[]
    /* Virtual methods of Caribou.ScannableGroup */
    vfunc_get_scan_children(): IScannableItem[]
    vfunc_child_select(): IScannableItem | null
    vfunc_scan_reset(): void
    vfunc_child_step(cycles: number): IScannableItem | null
    vfunc_get_step_path(): IScannableItem[]
    vfunc_get_selected_path(): IScannableItem[]
    vfunc_get_scan_grouping(): ScanGrouping
    vfunc_set_scan_grouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-clicked", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-pressed", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    connect_after(sigName: "key-released", callback: (($obj: ColumnModel, key: KeyModel) => void)): number
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::scan-stepping", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scan-selected", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: (($obj: ColumnModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ColumnModel_ConstructProps)
    _init (config?: ColumnModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ColumnModel
    static $gtype: GObject.Type
}
export interface Scanner_ConstructProps extends GObject.Object_ConstructProps {
    bind_settings?: boolean
    scan_grouping?: number
    scan_enabled?: boolean
    step_time?: number
    switch_device?: string
    keyboard_key?: string
    mouse_button?: number
    scan_cycles?: number
    autorestart?: boolean
    inverse_scanning?: boolean
}
export class Scanner {
    /* Properties of Caribou.Scanner */
    scan_grouping: number
    scan_enabled: boolean
    step_time: number
    switch_device: string
    keyboard_key: string
    mouse_button: number
    scan_cycles: number
    autorestart: boolean
    inverse_scanning: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.Scanner */
    set_keyboard(keyboard: KeyboardModel): void
    reset(): void
    get_bind_settings(): boolean
    get_scan_grouping(): number
    set_scan_grouping(value: number): void
    get_scan_enabled(): boolean
    set_scan_enabled(value: boolean): void
    get_step_time(): number
    set_step_time(value: number): void
    get_switch_device(): string
    set_switch_device(value: string): void
    get_keyboard_key(): string
    set_keyboard_key(value: string): void
    get_mouse_button(): number
    set_mouse_button(value: number): void
    get_scan_cycles(): number
    set_scan_cycles(value: number): void
    get_autorestart(): boolean
    set_autorestart(value: boolean): void
    get_inverse_scanning(): boolean
    set_inverse_scanning(value: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scan-grouping", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scan-enabled", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-enabled", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::step-time", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step-time", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::switch-device", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switch-device", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keyboard-key", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyboard-key", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mouse-button", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-button", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scan-cycles", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-cycles", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autorestart", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autorestart", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inverse-scanning", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverse-scanning", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Scanner_ConstructProps)
    _init (config?: Scanner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Scanner
    static $gtype: GObject.Type
}
export interface ScannableGroup_ConstructProps extends GObject.Object_ConstructProps {
    scan_grouping?: ScanGrouping
}
export class ScannableGroup {
    /* Properties of Caribou.IScannableGroup */
    scan_grouping: ScanGrouping
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Caribou.ScannableGroup */
    get_scan_children(): IScannableItem[]
    child_select(): IScannableItem | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Caribou.IScannableGroup */
    scan_reset(): void
    child_step(cycles: number): IScannableItem | null
    get_step_path(): IScannableItem[]
    get_selected_path(): IScannableItem[]
    get_scan_grouping(): ScanGrouping
    set_scan_grouping(value: ScanGrouping): void
    /* Virtual methods of Caribou.ScannableGroup */
    vfunc_get_scan_children(): IScannableItem[]
    vfunc_child_select(): IScannableItem | null
    vfunc_scan_reset(): void
    vfunc_child_step(cycles: number): IScannableItem | null
    vfunc_get_step_path(): IScannableItem[]
    vfunc_get_selected_path(): IScannableItem[]
    vfunc_get_scan_grouping(): ScanGrouping
    vfunc_set_scan_grouping(value: ScanGrouping): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou.IScannableGroup */
    connect(sigName: "selected-item-changed", callback: (($obj: ScannableGroup, selected_item?: IScannableItem | null) => void)): number
    connect_after(sigName: "selected-item-changed", callback: (($obj: ScannableGroup, selected_item?: IScannableItem | null) => void)): number
    emit(sigName: "selected-item-changed", selected_item?: IScannableItem | null): void
    connect(sigName: "step-item-changed", callback: (($obj: ScannableGroup, step_item?: IScannableItem | null) => void)): number
    connect_after(sigName: "step-item-changed", callback: (($obj: ScannableGroup, step_item?: IScannableItem | null) => void)): number
    emit(sigName: "step-item-changed", step_item?: IScannableItem | null): void
    connect(sigName: "scan-cleared", callback: (($obj: ScannableGroup) => void)): number
    connect_after(sigName: "scan-cleared", callback: (($obj: ScannableGroup) => void)): number
    emit(sigName: "scan-cleared"): void
    connect(sigName: "notify::scan-grouping", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: (($obj: ScannableGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ScannableGroup_ConstructProps)
    _init (config?: ScannableGroup_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class DisplayAdapterClass {
    /* Fields of Caribou.DisplayAdapterClass */
    keyval_press: (keyval: number) => void
    keyval_release: (keyval: number) => void
    mod_lock: (mask: number) => void
    mod_unlock: (mask: number) => void
    mod_latch: (mask: number) => void
    mod_unlatch: (mask: number) => void
    get_current_group: () => [ /* returnType */ number, /* group_name */ string, /* variant_name */ string ]
    get_groups: () => [ /* group_names */ string[], /* variant_names */ string[] ]
    register_key_func: (keyval: number, func?: KeyButtonCallback | null) => void
    register_button_func: (button: number, func?: KeyButtonCallback | null) => void
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
    set_cursor_location: (x: number, y: number, w: number, h: number) => void
    set_entry_location: (x: number, y: number, w: number, h: number) => void
    show: (timestamp: number) => void
    hide: (timestamp: number) => void
    name_lost: (name: string) => void
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
    get_scan_children: () => IScannableItem[]
    child_select: () => IScannableItem | null
    static name: string
}
export class ScannableGroupPrivate {
    static name: string
}
export abstract class IScannableItemIface {
    /* Fields of Caribou.IScannableItemIface */
    get_scan_stepping: () => boolean
    set_scan_stepping: (value: boolean) => void
    get_scan_selected: () => boolean
    set_scan_selected: (value: boolean) => void
    static name: string
}
export abstract class IScannableGroupIface {
    /* Fields of Caribou.IScannableGroupIface */
    child_select: () => IScannableItem | null
    scan_reset: () => void
    get_scan_children: () => IScannableItem[]
    child_step: (cycles: number) => IScannableItem | null
    get_step_path: () => IScannableItem[]
    get_selected_path: () => IScannableItem[]
    get_scan_grouping: () => ScanGrouping
    set_scan_grouping: (value: ScanGrouping) => void
    static name: string
}
export abstract class IKeyboardObjectIface {
    /* Fields of Caribou.IKeyboardObjectIface */
    get_children: () => IKeyboardObject[]
    get_keys: () => KeyModel[]
    static name: string
}