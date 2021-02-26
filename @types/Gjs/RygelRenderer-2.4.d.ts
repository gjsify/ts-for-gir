/**
 * RygelRenderer-2.4
 */

import type * as Gjs from './Gjs';
import type * as RygelCore from './RygelCore-2.4';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as Gee from './Gee-0.8';
import type * as GUPnP from './GUPnP-1.0';
import type * as libxml2 from './libxml2-2.0';
import type * as Soup from './Soup-2.4';
import type * as GSSDP from './GSSDP-1.0';
import type * as GUPnPAV from './GUPnPAV-1.0';

export interface MediaPlayer_ConstructProps extends GObject.Object_ConstructProps {
    playback_state?: string
    playback_speed?: string
    uri?: string
    volume?: number
    metadata?: string
    mime_type?: string
    content_features?: string
}
export class MediaPlayer {
    /* Properties of RygelRenderer-2.4.RygelRenderer.MediaPlayer */
    playback_state: string
    readonly allowed_playback_speeds: string[]
    playback_speed: string
    uri: string
    volume: number
    readonly duration: number
    readonly size: number
    metadata: string
    mime_type: string
    readonly can_seek: boolean
    readonly can_seek_bytes: boolean
    content_features: string
    readonly duration_as_str: string
    readonly position: number
    readonly byte_position: number
    readonly position_as_str: string
    readonly protocol_info: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelRenderer-2.4.RygelRenderer.MediaPlayer */
    seek(time: number): boolean
    seek_bytes(bytes: number): boolean
    get_protocols(): string[]
    get_mime_types(): string[]
    play_speed_to_double(speed: string): number
    get_playback_state(): string
    set_playback_state(value: string): void
    get_allowed_playback_speeds(): string[]
    get_playback_speed(): string
    set_playback_speed(value: string): void
    get_uri(): string | null
    set_uri(value?: string | null): void
    get_volume(): number
    set_volume(value: number): void
    get_duration(): number
    get_size(): number
    get_metadata(): string | null
    set_metadata(value?: string | null): void
    get_mime_type(): string | null
    set_mime_type(value?: string | null): void
    get_can_seek(): boolean
    get_can_seek_bytes(): boolean
    get_content_features(): string | null
    set_content_features(value?: string | null): void
    get_duration_as_str(): string
    get_position(): number
    get_byte_position(): number
    get_position_as_str(): string
    get_protocol_info(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelRenderer-2.4.RygelRenderer.MediaPlayer */
    vfunc_seek(time: number): boolean
    vfunc_seek_bytes(bytes: number): boolean
    vfunc_get_protocols(): string[]
    vfunc_get_mime_types(): string[]
    vfunc_get_playback_state(): string
    vfunc_set_playback_state(value: string): void
    vfunc_get_allowed_playback_speeds(): string[]
    vfunc_get_playback_speed(): string
    vfunc_set_playback_speed(value: string): void
    vfunc_get_uri(): string | null
    vfunc_set_uri(value?: string | null): void
    vfunc_get_volume(): number
    vfunc_set_volume(value: number): void
    vfunc_get_duration(): number
    vfunc_get_size(): number
    vfunc_get_metadata(): string | null
    vfunc_set_metadata(value?: string | null): void
    vfunc_get_mime_type(): string | null
    vfunc_set_mime_type(value?: string | null): void
    vfunc_get_can_seek(): boolean
    vfunc_get_can_seek_bytes(): boolean
    vfunc_get_content_features(): string | null
    vfunc_set_content_features(value?: string | null): void
    vfunc_get_position(): number
    vfunc_get_byte_position(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::playback-state", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allowed-playback-speeds", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-playback-speeds", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playback-speed", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-speed", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadata", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-seek", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-seek-bytes", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek-bytes", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-features", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-features", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-as-str", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-as-str", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::byte-position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position-as-str", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position-as-str", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol-info", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol-info", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaPlayer_ConstructProps)
    _init (config?: MediaPlayer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerController_ConstructProps extends GObject.Object_ConstructProps {
    playback_state?: string
    n_tracks?: number
    track?: number
    uri?: string
    metadata?: string
    track_uri?: string
    track_metadata?: string
    next_uri?: string
    next_metadata?: string
}
export class PlayerController {
    /* Properties of RygelRenderer-2.4.RygelRenderer.PlayerController */
    playback_state: string
    n_tracks: number
    track: number
    uri: string
    metadata: string
    track_uri: string
    track_metadata: string
    next_uri: string
    next_metadata: string
    readonly current_transport_actions: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelRenderer-2.4.RygelRenderer.PlayerController */
    next(): boolean
    previous(): boolean
    set_single_play_uri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    set_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    set_next_single_play_uri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    set_next_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    unescape(input: string): string
    get_playback_state(): string
    set_playback_state(value: string): void
    get_n_tracks(): number
    set_n_tracks(value: number): void
    get_track(): number
    set_track(value: number): void
    get_uri(): string
    set_uri(value: string): void
    get_metadata(): string
    set_metadata(value: string): void
    get_track_uri(): string
    set_track_uri(value: string): void
    get_track_metadata(): string
    set_track_metadata(value: string): void
    get_next_uri(): string
    set_next_uri(value: string): void
    get_next_metadata(): string
    set_next_metadata(value: string): void
    get_current_transport_actions(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelRenderer-2.4.RygelRenderer.PlayerController */
    vfunc_next(): boolean
    vfunc_previous(): boolean
    vfunc_set_single_play_uri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    vfunc_set_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    vfunc_set_next_single_play_uri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    vfunc_set_next_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    vfunc_get_playback_state(): string
    vfunc_set_playback_state(value: string): void
    vfunc_get_n_tracks(): number
    vfunc_set_n_tracks(value: number): void
    vfunc_get_track(): number
    vfunc_set_track(value: number): void
    vfunc_get_uri(): string
    vfunc_set_uri(value: string): void
    vfunc_get_metadata(): string
    vfunc_set_metadata(value: string): void
    vfunc_get_track_uri(): string
    vfunc_set_track_uri(value: string): void
    vfunc_get_track_metadata(): string
    vfunc_set_track_metadata(value: string): void
    vfunc_get_next_uri(): string
    vfunc_set_next_uri(value: string): void
    vfunc_get_next_metadata(): string
    vfunc_set_next_metadata(value: string): void
    vfunc_get_current_transport_actions(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::playback-state", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-tracks", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-tracks", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-transport-actions", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-transport-actions", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayerController_ConstructProps)
    _init (config?: PlayerController_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaRendererPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {
    supported_profiles?: any[]
}
export class MediaRendererPlugin {
    /* Properties of RygelRenderer-2.4.RygelRenderer.MediaRendererPlugin */
    supported_profiles: any[]
    /* Properties of RygelCore-2.4.RygelCore.Plugin */
    capabilities: RygelCore.PluginCapabilities
    title: string
    active: boolean
    resource_infos: Gee.ArrayList
    icon_infos: Gee.ArrayList
    default_icons: Gee.ArrayList
    /* Fields of RygelRenderer-2.4.RygelRenderer.MediaRendererPlugin */
    parent_instance: RygelCore.Plugin
    priv: MediaRendererPluginPrivate
    /* Fields of GUPnP-1.0.GUPnP.ResourceFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelRenderer-2.4.RygelRenderer.MediaRendererPlugin */
    get_player(): MediaPlayer | null
    get_protocol_info(): string
    get_supported_profiles(): any[]
    set_supported_profiles(value: any[]): void
    /* Methods of RygelCore-2.4.RygelCore.Plugin */
    add_resource(resource_info: RygelCore.ResourceInfo): void
    add_icon(icon_info: RygelCore.IconInfo): void
    apply_hacks(device: RygelCore.RootDevice, description_path: string): void
    get_capabilities(): RygelCore.PluginCapabilities
    set_capabilities(value: RygelCore.PluginCapabilities): void
    get_name(): string
    get_title(): string
    set_title(value: string): void
    get_description(): string
    get_desc_path(): string
    get_active(): boolean
    set_active(value: boolean): void
    get_resource_infos(): Gee.ArrayList
    get_icon_infos(): Gee.ArrayList
    get_default_icons(): Gee.ArrayList
    /* Methods of GUPnP-1.0.GUPnP.ResourceFactory */
    register_resource_proxy_type(upnp_type: string, type: GObject.Type): void
    register_resource_type(upnp_type: string, type: GObject.Type): void
    unregister_resource_proxy_type(upnp_type: string): boolean
    unregister_resource_type(upnp_type: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of RygelRenderer-2.4.RygelRenderer.MediaRendererPlugin */
    vfunc_get_player(): MediaPlayer | null
    /* Virtual methods of RygelCore-2.4.RygelCore.Plugin */
    vfunc_apply_hacks(device: RygelCore.RootDevice, description_path: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::supported-profiles", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-icons", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaRendererPlugin_ConstructProps)
    _init (config?: MediaRendererPlugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaRendererPlugin
    static new(desc_path: string, name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaRendererPlugin
    static new(): MediaRendererPlugin
    static $gtype: GObject.Type
}
export interface MediaRenderer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {
    player?: MediaPlayer
}
export class MediaRenderer {
    /* Properties of RygelCore-2.4.RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of RygelRenderer-2.4.RygelRenderer.MediaRenderer */
    parent_instance: RygelCore.MediaDevice
    priv: MediaRendererPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.MediaDevice */
    add_interface(iface: string): void
    remove_interface(iface: string): void
    get_interfaces(): string[]
    get_plugin(): RygelCore.Plugin
    set_plugin(value: RygelCore.Plugin): void
    get_title(): string
    get_capabilities(): RygelCore.PluginCapabilities
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::plugin", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaRenderer_ConstructProps)
    _init (config?: MediaRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities): MediaRenderer
    static $gtype: GObject.Type
}
export abstract class MediaRendererPluginClass {
    /* Fields of RygelRenderer-2.4.RygelRenderer.MediaRendererPluginClass */
    parent_class: RygelCore.PluginClass
    get_player: (self: MediaRendererPlugin) => MediaPlayer | null
    get_controller: (self: MediaRendererPlugin) => PlayerController
    static name: string
}
export class MediaRendererPluginPrivate {
    static name: string
}
export abstract class MediaRendererClass {
    /* Fields of RygelRenderer-2.4.RygelRenderer.MediaRendererClass */
    parent_class: RygelCore.MediaDeviceClass
    static name: string
}
export class MediaRendererPrivate {
    static name: string
}
export abstract class MediaPlayerIface {
    /* Fields of RygelRenderer-2.4.RygelRenderer.MediaPlayerIface */
    parent_iface: GObject.TypeInterface
    seek: (self: MediaPlayer, time: number) => boolean
    seek_bytes: (self: MediaPlayer, bytes: number) => boolean
    get_protocols: (self: MediaPlayer) => string[]
    get_mime_types: (self: MediaPlayer) => string[]
    get_playback_state: (self: MediaPlayer) => string
    set_playback_state: (self: MediaPlayer, value: string) => void
    get_allowed_playback_speeds: (self: MediaPlayer) => string[]
    get_playback_speed: (self: MediaPlayer) => string
    set_playback_speed: (self: MediaPlayer, value: string) => void
    get_uri: (self: MediaPlayer) => string | null
    set_uri: (self: MediaPlayer, value?: string | null) => void
    get_volume: (self: MediaPlayer) => number
    set_volume: (self: MediaPlayer, value: number) => void
    get_duration: (self: MediaPlayer) => number
    get_size: (self: MediaPlayer) => number
    get_metadata: (self: MediaPlayer) => string | null
    set_metadata: (self: MediaPlayer, value?: string | null) => void
    get_mime_type: (self: MediaPlayer) => string | null
    set_mime_type: (self: MediaPlayer, value?: string | null) => void
    get_can_seek: (self: MediaPlayer) => boolean
    get_can_seek_bytes: (self: MediaPlayer) => boolean
    get_content_features: (self: MediaPlayer) => string | null
    set_content_features: (self: MediaPlayer, value?: string | null) => void
    get_position: (self: MediaPlayer) => number
    get_byte_position: (self: MediaPlayer) => number
    static name: string
}
export abstract class PlayerControllerIface {
    /* Fields of RygelRenderer-2.4.RygelRenderer.PlayerControllerIface */
    parent_iface: GObject.TypeInterface
    next: (self: PlayerController) => boolean
    previous: (self: PlayerController) => boolean
    set_single_play_uri: (self: PlayerController, uri: string, metadata: string, mime?: string | null, features?: string | null) => void
    set_playlist_uri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    set_next_single_play_uri: (self: PlayerController, uri: string, metadata: string, mime?: string | null, features?: string | null) => void
    set_next_playlist_uri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    get_playback_state: (self: PlayerController) => string
    set_playback_state: (self: PlayerController, value: string) => void
    get_n_tracks: (self: PlayerController) => number
    set_n_tracks: (self: PlayerController, value: number) => void
    get_track: (self: PlayerController) => number
    set_track: (self: PlayerController, value: number) => void
    get_uri: (self: PlayerController) => string
    set_uri: (self: PlayerController, value: string) => void
    get_metadata: (self: PlayerController) => string
    set_metadata: (self: PlayerController, value: string) => void
    get_track_uri: (self: PlayerController) => string
    set_track_uri: (self: PlayerController, value: string) => void
    get_track_metadata: (self: PlayerController) => string
    set_track_metadata: (self: PlayerController, value: string) => void
    get_next_uri: (self: PlayerController) => string
    set_next_uri: (self: PlayerController, value: string) => void
    get_next_metadata: (self: PlayerController) => string
    set_next_metadata: (self: PlayerController, value: string) => void
    get_current_transport_actions: (self: PlayerController) => string
    static name: string
}