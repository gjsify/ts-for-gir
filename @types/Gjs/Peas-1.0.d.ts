/**
 * Peas-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as GIRepository from './GIRepository-2.0';

export enum PluginInfoError {
    LOADING_FAILED,
    LOADER_NOT_FOUND,
    DEP_NOT_FOUND,
    DEP_LOADING_FAILED,
}
export function cclosure_marshal_VOID__BOXED_OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
export function plugin_info_error_quark(): GLib.Quark
export interface ExtensionSetForeachFunc {
    (set: ExtensionSet, info: PluginInfo, exten: Extension, data?: object | null): void
}
export interface FactoryFunc {
    (parameters: GObject.Parameter[]): GObject.Object
}
export class Activatable {
    /* Methods of Peas.Activatable */
    activate(): void
    deactivate(): void
    update_state(): void
    /* Virtual methods of Peas.Activatable */
    vfunc_activate(): void
    vfunc_deactivate(): void
    vfunc_update_state(): void
    static name: string
}
export interface Engine_ConstructProps extends GObject.Object_ConstructProps {
    loaded_plugins?: string[]
    nonglobal_loaders?: boolean
}
export class Engine {
    /* Properties of Peas.Engine */
    loaded_plugins: string[]
    readonly plugin_list: object
    /* Fields of Peas.Engine */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Peas.Engine */
    add_search_path(module_dir: string, data_dir?: string | null): void
    create_extension(info: PluginInfo, extension_type: GObject.Type, prop_names: string[], prop_values: any[]): Extension
    enable_loader(loader_name: string): void
    garbage_collect(): void
    get_loaded_plugins(): string[]
    get_plugin_info(plugin_name: string): PluginInfo
    get_plugin_list(): PluginInfo[]
    load_plugin(info: PluginInfo): boolean
    prepend_search_path(module_dir: string, data_dir?: string | null): void
    provides_extension(info: PluginInfo, extension_type: GObject.Type): boolean
    rescan_plugins(): void
    set_loaded_plugins(plugin_names?: string[] | null): void
    unload_plugin(info: PluginInfo): boolean
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
    /* Virtual methods of Peas.Engine */
    vfunc_load_plugin(info: PluginInfo): void
    vfunc_unload_plugin(info: PluginInfo): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Peas.Engine */
    connect(sigName: "load-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    connect_after(sigName: "load-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    emit(sigName: "load-plugin", info: PluginInfo): void
    connect(sigName: "unload-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    connect_after(sigName: "unload-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    emit(sigName: "unload-plugin", info: PluginInfo): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loaded-plugins", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded-plugins", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::plugin-list", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin-list", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Engine
    static new_with_nonglobal_loaders(): Engine
    static get_default(): Engine
    static $gtype: GObject.Type
}
export interface ExtensionBase_ConstructProps extends GObject.Object_ConstructProps {
    plugin_info?: PluginInfo
}
export class ExtensionBase {
    /* Properties of Peas.ExtensionBase */
    readonly data_dir: string
    /* Fields of Peas.ExtensionBase */
    parent: GObject.Object
    priv: ExtensionBasePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Peas.ExtensionBase */
    get_data_dir(): string
    get_plugin_info(): PluginInfo
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
    connect(sigName: "notify", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data-dir", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-dir", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtensionBase_ConstructProps)
    _init (config?: ExtensionBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExtensionSet_ConstructProps extends GObject.Object_ConstructProps {
    construct_properties?: object
    engine?: Engine
    extension_type?: GObject.Type
}
export class ExtensionSet {
    /* Fields of Peas.ExtensionSet */
    parent: GObject.Object
    priv: ExtensionSetPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Peas.ExtensionSet */
    foreach(func: ExtensionSetForeachFunc): void
    get_extension(info: PluginInfo): Extension
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
    /* Virtual methods of Peas.ExtensionSet */
    vfunc_call(method_name: string, args: GIRepository.Argument): boolean
    vfunc_extension_added(info: PluginInfo, exten: Extension): void
    vfunc_extension_removed(info: PluginInfo, exten: Extension): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Peas.ExtensionSet */
    connect(sigName: "extension-added", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    connect_after(sigName: "extension-added", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    emit(sigName: "extension-added", info: PluginInfo, exten: GObject.Object): void
    connect(sigName: "extension-removed", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    connect_after(sigName: "extension-removed", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    emit(sigName: "extension-removed", info: PluginInfo, exten: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtensionSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtensionSet_ConstructProps)
    _init (config?: ExtensionSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engine: Engine | null, exten_type: GObject.Type, prop_names: string[], prop_values: any[]): ExtensionSet
    static $gtype: GObject.Type
}
export interface ObjectModule_ConstructProps extends GObject.TypeModule_ConstructProps {
    local_linkage?: boolean
    module_name?: string
    path?: string
    resident?: boolean
    symbol?: string
}
export class ObjectModule {
    /* Fields of Peas.ObjectModule */
    parent: GObject.TypeModule
    priv: ObjectModulePrivate
    /* Fields of GObject.TypeModule */
    parent_instance: GObject.Object
    use_count: number
    type_infos: object[]
    interface_infos: object[]
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Peas.ObjectModule */
    register_extension_factory(exten_type: GObject.Type, factory_func: FactoryFunc): void
    register_extension_type(exten_type: GObject.Type, impl_type: GObject.Type): void
    /* Methods of GObject.TypeModule */
    add_interface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    register_type(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    set_name(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject.TypePlugin */
    complete_interface_info(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    complete_type_info(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    use(): void
    /* Virtual methods of GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectModule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectModule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectModule_ConstructProps)
    _init (config?: ObjectModule_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ActivatableInterface {
    /* Fields of Peas.ActivatableInterface */
    g_iface: GObject.TypeInterface
    activate: (activatable: Activatable) => void
    deactivate: (activatable: Activatable) => void
    update_state: (activatable: Activatable) => void
    static name: string
}
export abstract class EngineClass {
    /* Fields of Peas.EngineClass */
    parent_class: GObject.ObjectClass
    load_plugin: (engine: Engine, info: PluginInfo) => void
    unload_plugin: (engine: Engine, info: PluginInfo) => void
    static name: string
}
export class EnginePrivate {
    static name: string
}
export abstract class ExtensionBaseClass {
    /* Fields of Peas.ExtensionBaseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ExtensionBasePrivate {
    static name: string
}
export abstract class ExtensionSetClass {
    /* Fields of Peas.ExtensionSetClass */
    parent_class: GObject.ObjectClass
    call: (set: ExtensionSet, method_name: string, args: GIRepository.Argument) => boolean
    extension_added: (set: ExtensionSet, info: PluginInfo, exten: Extension) => void
    extension_removed: (set: ExtensionSet, info: PluginInfo, exten: Extension) => void
    static name: string
}
export class ExtensionSetPrivate {
    static name: string
}
export abstract class ObjectModuleClass {
    /* Fields of Peas.ObjectModuleClass */
    parent_class: GObject.TypeModuleClass
    static name: string
}
export class ObjectModulePrivate {
    static name: string
}
export class PluginInfo {
    /* Methods of Peas.PluginInfo */
    get_authors(): string[]
    get_copyright(): string
    get_data_dir(): string
    get_dependencies(): string[]
    get_description(): string
    get_external_data(key: string): string
    get_help_uri(): string
    get_icon_name(): string
    get_module_dir(): string
    get_module_name(): string
    get_name(): string
    get_settings(schema_id?: string | null): Gio.Settings
    get_version(): string
    get_website(): string
    has_dependency(module_name: string): boolean
    is_available(): boolean
    is_builtin(): boolean
    is_hidden(): boolean
    is_loaded(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export type Extension = GObject.Object