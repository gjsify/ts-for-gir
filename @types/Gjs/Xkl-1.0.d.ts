/**
 * Xkl-1.0
 */

import type * as Gjs from './Gjs';
import type * as xlib from './xlib-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum EngineListenModes {
    MANAGE_WINDOW_STATES,
    TRACK_KEYBOARD_STATE,
    MANAGE_LAYOUTS,
}
export enum EngineStateChange {
    GROUP_CHANGED,
    INDICATORS_CHANGED,
}
export enum EngineFeatures {
    CAN_TOGGLE_INDICATORS,
    CAN_OUTPUT_CONFIG_AS_ASCII,
    CAN_OUTPUT_CONFIG_AS_BINARY,
    MULTIPLE_LAYOUTS_SUPPORTED,
    REQUIRES_MANUAL_LAYOUT_MANAGEMENT,
    DEVICE_DISCOVERY,
}
export const MAX_CI_DESC_LENGTH: number
export const MAX_CI_NAME_LENGTH: number
export const MAX_CI_SHORT_DESC_LENGTH: number
export function get_country_name(code: string): string
export function get_language_name(code: string): string
export function get_last_error(): string
export function restore_names_prop(engine: Engine): boolean
export function set_debug_level(level: number): void
export interface ConfigItemProcessFunc {
    (config: ConfigRegistry, item: ConfigItem, data: object): void
}
export interface TwoConfigItemsProcessFunc {
    (config: ConfigRegistry, item: ConfigItem, subitem: ConfigItem, data: object): void
}
export interface ConfigItem_ConstructProps extends GObject.Object_ConstructProps {
}
export class ConfigItem {
    /* Fields of Xkl.ConfigItem */
    parent: GObject.Object
    name: number[]
    short_description: number[]
    description: number[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Xkl.ConfigItem */
    get_description(): string
    get_name(): string
    get_short_description(): string
    set_description(description?: string | null): void
    set_name(name?: string | null): void
    set_short_description(short_description?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: ConfigItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConfigItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConfigItem_ConstructProps)
    _init (config?: ConfigItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ConfigItem
    static $gtype: GObject.Type
}
export interface ConfigRec_ConstructProps extends GObject.Object_ConstructProps {
}
export class ConfigRec {
    /* Fields of Xkl.ConfigRec */
    parent: GObject.Object
    model: string
    layouts: string[]
    variants: string[]
    options: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Xkl.ConfigRec */
    activate(engine: Engine): boolean
    equals(data2: ConfigRec): boolean
    get_from_backup(engine: Engine): boolean
    get_from_root_window_property(rules_atom_name: xlib.Atom, rules_file_out: string, engine: Engine): boolean
    get_from_server(engine: Engine): boolean
    reset(): void
    set_layouts(new_layouts: string[]): void
    set_model(new_model: string): void
    set_options(new_options: string[]): void
    set_to_root_window_property(rules_atom_name: xlib.Atom, rules_file: string, engine: Engine): boolean
    set_variants(new_variants: string[]): void
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
    connect(sigName: "notify", callback: (($obj: ConfigRec, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConfigRec, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConfigRec_ConstructProps)
    _init (config?: ConfigRec_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ConfigRec
    static write_to_file(engine: Engine, file_name: string, data: ConfigRec, binary: boolean): boolean
    static $gtype: GObject.Type
}
export interface ConfigRegistry_ConstructProps extends GObject.Object_ConstructProps {
    engine?: Engine
}
export class ConfigRegistry {
    /* Fields of Xkl.ConfigRegistry */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Xkl.ConfigRegistry */
    find_layout(item: ConfigItem): boolean
    find_model(item: ConfigItem): boolean
    find_option(option_group_name: string, item: ConfigItem): boolean
    find_option_group(item: ConfigItem): boolean
    find_variant(layout_name: string, item: ConfigItem): boolean
    foreach_country(func: ConfigItemProcessFunc): void
    foreach_country_variant(country_code: string, func: TwoConfigItemsProcessFunc): void
    foreach_language(func: ConfigItemProcessFunc): void
    foreach_language_variant(language_code: string, func: TwoConfigItemsProcessFunc): void
    foreach_layout(func: ConfigItemProcessFunc): void
    foreach_layout_variant(layout_name: string, func: ConfigItemProcessFunc): void
    foreach_model(func: ConfigItemProcessFunc): void
    foreach_option(option_group_name: string, func: ConfigItemProcessFunc): void
    foreach_option_group(func: ConfigItemProcessFunc): void
    load(if_extras_needed: boolean): boolean
    search_by_pattern(pattern: string, func: TwoConfigItemsProcessFunc): void
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
    connect(sigName: "notify", callback: (($obj: ConfigRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConfigRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConfigRegistry_ConstructProps)
    _init (config?: ConfigRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_instance(engine: Engine): ConfigRegistry
    static $gtype: GObject.Type
}
export interface Engine_ConstructProps extends GObject.Object_ConstructProps {
    display?: object
}
export class Engine {
    /* Properties of Xkl.Engine */
    readonly backendName: string
    readonly default_group: number
    readonly features: EngineFeatures
    readonly indicators_handling: boolean
    readonly max_num_groups: number
    readonly num_groups: number
    readonly secondary_groups_mask: number
    /* Fields of Xkl.Engine */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Xkl.Engine */
    allow_one_switch_to_secondary_group(): void
    backup_names_prop(): boolean
    delete_state(win: xlib.Window): void
    filter_events(evt: xlib.XEvent): number
    get_backend_name(): string
    get_current_state(): State
    get_current_window(): xlib.Window
    get_current_window_group(): number
    get_default_group(): number
    get_features(): number
    get_groups_names(): string[]
    get_indicators_handling(): boolean
    get_indicators_names(): string[]
    get_max_num_groups(): number
    get_next_group(): number
    get_num_groups(): number
    get_prev_group(): number
    get_secondary_groups_mask(): number
    get_state(win: xlib.Window, state_out: State): boolean
    get_window_title(win: xlib.Window): string
    grab_key(keycode: number, modifiers: number): boolean
    is_group_per_toplevel_window(): boolean
    is_window_from_same_toplevel_window(win1: xlib.Window, win2: xlib.Window): boolean
    is_window_transparent(win: xlib.Window): boolean
    lock_group(group: number): void
    pause_listen(): number
    resume_listen(): number
    save_state(win: xlib.Window, state: State): void
    set_default_group(group: number): void
    set_group_per_toplevel_window(is_global: boolean): void
    set_indicators_handling(whether_handle: boolean): void
    set_secondary_groups_mask(mask: number): void
    set_window_transparent(win: xlib.Window, transparent: boolean): void
    start_listen(flags: number): number
    stop_listen(flags: number): number
    ungrab_key(keycode: number, modifiers: number): boolean
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
    /* Virtual methods of Xkl.Engine */
    vfunc_config_notify(): void
    vfunc_new_device_notify(): void
    vfunc_new_window_notify(win: xlib.Window, parent: xlib.Window): number
    vfunc_state_notify(change_type: EngineStateChange, group: number, restore: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Xkl.Engine */
    connect(sigName: "X-config-changed", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "X-config-changed", callback: (($obj: Engine) => void)): number
    emit(sigName: "X-config-changed"): void
    connect(sigName: "X-new-device", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "X-new-device", callback: (($obj: Engine) => void)): number
    emit(sigName: "X-new-device"): void
    connect(sigName: "X-state-changed", callback: (($obj: Engine, object: EngineStateChange, p0: number, p1: boolean) => void)): number
    connect_after(sigName: "X-state-changed", callback: (($obj: Engine, object: EngineStateChange, p0: number, p1: boolean) => void)): number
    emit(sigName: "X-state-changed", object: EngineStateChange, p0: number, p1: boolean): void
    connect(sigName: "new-toplevel-window", callback: (($obj: Engine, object: number, p0: number) => number)): number
    connect_after(sigName: "new-toplevel-window", callback: (($obj: Engine, object: number, p0: number) => number)): number
    emit(sigName: "new-toplevel-window", object: number, p0: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backendName", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backendName", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-group", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-group", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::features", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indicators-handling", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indicators-handling", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-groups", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-groups-mask", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-groups-mask", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static INT__LONG_LONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
    static VOID__ENUM_INT_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
    static get_instance(display: xlib.Display): Engine
    static $gtype: GObject.Type
}
export abstract class ConfigItemClass {
    /* Fields of Xkl.ConfigItemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ConfigRecClass {
    /* Fields of Xkl.ConfigRecClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ConfigRegistryClass {
    /* Fields of Xkl.ConfigRegistryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ConfigRegistryPrivate {
    static name: string
}
export abstract class EngineClass {
    /* Fields of Xkl.EngineClass */
    parent_class: GObject.ObjectClass
    config_notify: (engine: Engine) => void
    new_window_notify: (engine: Engine, win: xlib.Window, parent: xlib.Window) => number
    state_notify: (engine: Engine, change_type: EngineStateChange, group: number, restore: boolean) => void
    new_device_notify: (engine: Engine) => void
    static name: string
}
export class EnginePrivate {
    static name: string
}
export class State {
    /* Fields of Xkl.State */
    group: number
    indicators: number
    static name: string
}