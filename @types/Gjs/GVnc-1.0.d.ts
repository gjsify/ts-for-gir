/**
 * GVnc-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum AudioFormatType {
    U8,
    S8,
    U16,
    S16,
    U32,
    S32,
}
export enum ConnectionAuth {
    INVALID,
    NONE,
    VNC,
    RA2,
    RA2NE,
    TIGHT,
    ULTRA,
    TLS,
    VENCRYPT,
    SASL,
    ARD,
    MSLOGONII,
    MSLOGON,
}
export enum ConnectionAuthVencrypt {
    PLAIN,
    TLSNONE,
    TLSVNC,
    TLSPLAIN,
    X509NONE,
    X509VNC,
    X509PLAIN,
    X509SASL,
    TLSSASL,
}
export enum ConnectionCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
export enum ConnectionEncoding {
    RAW,
    COPY_RECT,
    RRE,
    CORRE,
    HEXTILE,
    TIGHT,
    ZRLE,
    TIGHT_JPEG0,
    TIGHT_JPEG1,
    TIGHT_JPEG2,
    TIGHT_JPEG3,
    TIGHT_JPEG4,
    TIGHT_JPEG5,
    TIGHT_JPEG6,
    TIGHT_JPEG7,
    TIGHT_JPEG8,
    TIGHT_JPEG9,
    DESKTOP_RESIZE,
    LAST_RECT,
    WMVI,
    CURSOR_POS,
    RICH_CURSOR,
    XCURSOR,
    POINTER_CHANGE,
    EXT_KEY_EVENT,
    AUDIO,
    LED_STATE,
    DESKTOP_NAME,
    EXTENDED_DESKTOP_RESIZE,
    XVP,
    ALPHA_CURSOR,
}
export enum ConnectionPowerAction {
    SHUTDOWN,
    REBOOT,
    RESET,
}
export enum ConnectionResizeStatus {
    UNSUPPORTED,
    OK,
    ADMIN_PROHIBITED,
    OUT_OF_RESOURCES,
    INVALID_LAOUT,
    FORWARDED,
}
export const LEDSTATE_CAPS_LOCK: number
export const LEDSTATE_NUM_LOCK: number
export const LEDSTATE_SCROLL_LOCK: number
export const PADDING: number
export const PADDING_LARGE: number
export function util_check_version(major: number, minor: number, micro: number): boolean
export function util_get_debug(): boolean
export function util_get_version(): number
export function util_get_version_string(): string
export function util_set_debug(enabled: boolean): void
export class Audio {
    /* Methods of GVnc-1.0.GVnc.Audio */
    playback_data(sample: AudioSample): void
    playback_start(format: AudioFormat): void
    playback_stop(): void
    /* Virtual methods of GVnc-1.0.GVnc.Audio */
    vfunc_playback_data(sample: AudioSample): boolean
    vfunc_playback_start(format: AudioFormat): boolean
    vfunc_playback_stop(): boolean
    static name: string
}
export class Framebuffer {
    /* Methods of GVnc-1.0.GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: Uint8Array[], x: number, y: number, width: number, height: number): void
    get_buffer(): Uint8Array[]
    get_height(): number
    get_local_format(): PixelFormat
    get_remote_format(): PixelFormat
    get_rowstride(): number
    get_width(): number
    perfect_format_match(): boolean
    rgb24_blt(src: Uint8Array[], rowstride: number, x: number, y: number, width: number, height: number): void
    set_color_map(map: ColorMap): void
    set_pixel_at(src: Uint8Array[], x: number, y: number): void
    /* Virtual methods of GVnc-1.0.GVnc.Framebuffer */
    vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    vfunc_fill(src: Uint8Array[], x: number, y: number, width: number, height: number): void
    vfunc_get_buffer(): number
    vfunc_get_height(): number
    vfunc_get_local_format(): PixelFormat
    vfunc_get_remote_format(): PixelFormat
    vfunc_get_rowstride(): number
    vfunc_get_width(): number
    vfunc_perfect_format_match(): boolean
    vfunc_rgb24_blt(src: Uint8Array[], rowstride: number, x: number, y: number, width: number, height: number): void
    vfunc_set_color_map(map: ColorMap): void
    vfunc_set_pixel_at(src: Uint8Array[], x: number, y: number): void
    static name: string
}
export interface BaseAudio_ConstructProps extends GObject.Object_ConstructProps {
}
export class BaseAudio {
    /* Fields of GVnc-1.0.GVnc.BaseAudio */
    parent: GObject.Object
    priv: BaseAudioPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GVnc-1.0.GVnc.Audio */
    playback_data(sample: AudioSample): void
    playback_start(format: AudioFormat): void
    playback_stop(): void
    /* Virtual methods of GVnc-1.0.GVnc.BaseAudio */
    vfunc_playback_data(sample: AudioSample): boolean
    vfunc_playback_start(format: AudioFormat): boolean
    vfunc_playback_stop(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GVnc-1.0.GVnc.BaseAudio */
    connect(sigName: "vnc-audio-playback-data", callback: (($obj: BaseAudio, object: AudioSample) => void)): number
    connect_after(sigName: "vnc-audio-playback-data", callback: (($obj: BaseAudio, object: AudioSample) => void)): number
    emit(sigName: "vnc-audio-playback-data", object: AudioSample): void
    connect(sigName: "vnc-audio-playback-start", callback: (($obj: BaseAudio, object: AudioFormat) => void)): number
    connect_after(sigName: "vnc-audio-playback-start", callback: (($obj: BaseAudio, object: AudioFormat) => void)): number
    emit(sigName: "vnc-audio-playback-start", object: AudioFormat): void
    connect(sigName: "vnc-audio-playback-stop", callback: (($obj: BaseAudio) => void)): number
    connect_after(sigName: "vnc-audio-playback-stop", callback: (($obj: BaseAudio) => void)): number
    emit(sigName: "vnc-audio-playback-stop"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseAudio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseAudio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseAudio_ConstructProps)
    _init (config?: BaseAudio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BaseAudio
    static $gtype: GObject.Type
}
export interface BaseFramebuffer_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: object
    color_map?: ColorMap
    height?: number
    local_format?: PixelFormat
    remote_format?: PixelFormat
    rowstride?: number
    width?: number
}
export class BaseFramebuffer {
    /* Properties of GVnc-1.0.GVnc.BaseFramebuffer */
    color_map: ColorMap
    /* Fields of GVnc-1.0.GVnc.BaseFramebuffer */
    parent: GObject.Object
    priv: BaseFramebufferPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GVnc-1.0.GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: Uint8Array[], x: number, y: number, width: number, height: number): void
    get_buffer(): Uint8Array[]
    get_height(): number
    get_local_format(): PixelFormat
    get_remote_format(): PixelFormat
    get_rowstride(): number
    get_width(): number
    perfect_format_match(): boolean
    rgb24_blt(src: Uint8Array[], rowstride: number, x: number, y: number, width: number, height: number): void
    set_color_map(map: ColorMap): void
    set_pixel_at(src: Uint8Array[], x: number, y: number): void
    /* Virtual methods of GVnc-1.0.GVnc.BaseFramebuffer */
    vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    vfunc_fill(src: Uint8Array[], x: number, y: number, width: number, height: number): void
    vfunc_get_buffer(): number
    vfunc_get_height(): number
    vfunc_get_local_format(): PixelFormat
    vfunc_get_remote_format(): PixelFormat
    vfunc_get_rowstride(): number
    vfunc_get_width(): number
    vfunc_perfect_format_match(): boolean
    vfunc_rgb24_blt(src: Uint8Array[], rowstride: number, x: number, y: number, width: number, height: number): void
    vfunc_set_color_map(map: ColorMap): void
    vfunc_set_pixel_at(src: Uint8Array[], x: number, y: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::color-map", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-map", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseFramebuffer_ConstructProps)
    _init (config?: BaseFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Uint8Array[], width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat): BaseFramebuffer
    static $gtype: GObject.Type
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    framebuffer?: Framebuffer
}
export class Connection {
    /* Properties of GVnc-1.0.GVnc.Connection */
    framebuffer: Framebuffer
    /* Fields of GVnc-1.0.GVnc.Connection */
    parent: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GVnc-1.0.GVnc.Connection */
    audio_disable(): boolean
    audio_enable(): boolean
    client_cut_text(data: object | null, length: number): boolean
    framebuffer_update_request(incremental: boolean, x: number, y: number, width: number, height: number): boolean
    get_abs_pointer(): boolean
    get_audio_format(): AudioFormat
    get_cursor(): Cursor
    get_ext_key_event(): boolean
    get_height(): number
    get_ledstate(): number
    get_name(): string
    get_pixel_format(): PixelFormat
    get_power_control(): boolean
    get_shared(): boolean
    get_width(): number
    has_error(): boolean
    is_initialized(): boolean
    is_open(): boolean
    key_event(down_flag: boolean, key: number, scancode: number): boolean
    open_addr(addr: Gio.SocketAddress, hostname?: string | null): boolean
    open_fd(fd: number): boolean
    open_fd_with_hostname(fd: number, hostname?: string | null): boolean
    open_host(host: string, port: string): boolean
    pointer_event(button_mask: number, x: number, y: number): boolean
    power_control(action: ConnectionPowerAction): boolean
    set_audio(audio: Audio): boolean
    set_audio_format(fmt: AudioFormat): boolean
    set_auth_subtype(type: number): boolean
    set_auth_type(type: number): boolean
    set_credential(type: number, data: string): boolean
    set_encodings(encoding: number[]): boolean
    set_framebuffer(fb: Framebuffer): boolean
    set_pixel_format(fmt: PixelFormat): boolean
    set_shared(sharedFlag: boolean): boolean
    set_size(width: number, height: number): ConnectionResizeStatus
    shutdown(): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GVnc-1.0.GVnc.Connection */
    vfunc_vnc_auth_choose_subtype(type: number, subtypes: GObject.ValueArray): void
    vfunc_vnc_auth_choose_type(types: GObject.ValueArray): void
    vfunc_vnc_auth_credential(creds: GObject.ValueArray): void
    vfunc_vnc_auth_failure(reason: string): void
    vfunc_vnc_auth_unsupported(authType: number): void
    vfunc_vnc_bell(): void
    vfunc_vnc_connected(): void
    vfunc_vnc_cursor_changed(cursor: Cursor): void
    vfunc_vnc_desktop_rename(name: string): void
    vfunc_vnc_desktop_resize(width: number, height: number): void
    vfunc_vnc_disconnected(): void
    vfunc_vnc_error(message: string): void
    vfunc_vnc_framebuffer_update(x: number, y: number, width: number, height: number): void
    vfunc_vnc_initialized(): void
    vfunc_vnc_led_state(): void
    vfunc_vnc_pixel_format_changed(format: PixelFormat): void
    vfunc_vnc_pointer_mode_changed(absPointer: boolean): void
    vfunc_vnc_power_control_failed(): void
    vfunc_vnc_power_control_initialized(): void
    vfunc_vnc_server_cut_text(text: GLib.String): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GVnc-1.0.GVnc.Connection */
    connect(sigName: "vnc-auth-choose-subtype", callback: (($obj: Connection, object: number, p0: GObject.ValueArray) => void)): number
    connect_after(sigName: "vnc-auth-choose-subtype", callback: (($obj: Connection, object: number, p0: GObject.ValueArray) => void)): number
    emit(sigName: "vnc-auth-choose-subtype", object: number, p0: GObject.ValueArray): void
    connect(sigName: "vnc-auth-choose-type", callback: (($obj: Connection, object: GObject.ValueArray) => void)): number
    connect_after(sigName: "vnc-auth-choose-type", callback: (($obj: Connection, object: GObject.ValueArray) => void)): number
    emit(sigName: "vnc-auth-choose-type", object: GObject.ValueArray): void
    connect(sigName: "vnc-auth-credential", callback: (($obj: Connection, object: GObject.ValueArray) => void)): number
    connect_after(sigName: "vnc-auth-credential", callback: (($obj: Connection, object: GObject.ValueArray) => void)): number
    emit(sigName: "vnc-auth-credential", object: GObject.ValueArray): void
    connect(sigName: "vnc-auth-failure", callback: (($obj: Connection, object: string) => void)): number
    connect_after(sigName: "vnc-auth-failure", callback: (($obj: Connection, object: string) => void)): number
    emit(sigName: "vnc-auth-failure", object: string): void
    connect(sigName: "vnc-auth-unsupported", callback: (($obj: Connection, object: number) => void)): number
    connect_after(sigName: "vnc-auth-unsupported", callback: (($obj: Connection, object: number) => void)): number
    emit(sigName: "vnc-auth-unsupported", object: number): void
    connect(sigName: "vnc-bell", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-bell", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-bell"): void
    connect(sigName: "vnc-connected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-connected", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-connected"): void
    connect(sigName: "vnc-cursor-changed", callback: (($obj: Connection, object: Cursor) => void)): number
    connect_after(sigName: "vnc-cursor-changed", callback: (($obj: Connection, object: Cursor) => void)): number
    emit(sigName: "vnc-cursor-changed", object: Cursor): void
    connect(sigName: "vnc-desktop-rename", callback: (($obj: Connection, object: string) => void)): number
    connect_after(sigName: "vnc-desktop-rename", callback: (($obj: Connection, object: string) => void)): number
    emit(sigName: "vnc-desktop-rename", object: string): void
    connect(sigName: "vnc-desktop-resize", callback: (($obj: Connection, object: number, p0: number) => void)): number
    connect_after(sigName: "vnc-desktop-resize", callback: (($obj: Connection, object: number, p0: number) => void)): number
    emit(sigName: "vnc-desktop-resize", object: number, p0: number): void
    connect(sigName: "vnc-disconnected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-disconnected", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-disconnected"): void
    connect(sigName: "vnc-error", callback: (($obj: Connection, object: string) => void)): number
    connect_after(sigName: "vnc-error", callback: (($obj: Connection, object: string) => void)): number
    emit(sigName: "vnc-error", object: string): void
    connect(sigName: "vnc-framebuffer-update", callback: (($obj: Connection, object: number, p0: number, p1: number, p2: number) => void)): number
    connect_after(sigName: "vnc-framebuffer-update", callback: (($obj: Connection, object: number, p0: number, p1: number, p2: number) => void)): number
    emit(sigName: "vnc-framebuffer-update", object: number, p0: number, p1: number, p2: number): void
    connect(sigName: "vnc-initialized", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-initialized", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-initialized"): void
    connect(sigName: "vnc-led-state", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-led-state", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-led-state"): void
    connect(sigName: "vnc-pixel-format-changed", callback: (($obj: Connection, object?: object | null) => void)): number
    connect_after(sigName: "vnc-pixel-format-changed", callback: (($obj: Connection, object?: object | null) => void)): number
    emit(sigName: "vnc-pixel-format-changed", object?: object | null): void
    connect(sigName: "vnc-pointer-mode-changed", callback: (($obj: Connection, object: boolean) => void)): number
    connect_after(sigName: "vnc-pointer-mode-changed", callback: (($obj: Connection, object: boolean) => void)): number
    emit(sigName: "vnc-pointer-mode-changed", object: boolean): void
    connect(sigName: "vnc-power-control-failed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-power-control-failed", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-power-control-failed"): void
    connect(sigName: "vnc-power-control-initialized", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-power-control-initialized", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-power-control-initialized"): void
    connect(sigName: "vnc-server-cut-text", callback: (($obj: Connection, object: string) => void)): number
    connect_after(sigName: "vnc-server-cut-text", callback: (($obj: Connection, object: string) => void)): number
    emit(sigName: "vnc-server-cut-text", object: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::framebuffer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::framebuffer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static $gtype: GObject.Type
}
export interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    data?: object
    height?: number
    hotx?: number
    hoty?: number
    width?: number
}
export class Cursor {
    /* Properties of GVnc-1.0.GVnc.Cursor */
    data: object
    height: number
    hotx: number
    hoty: number
    width: number
    /* Fields of GVnc-1.0.GVnc.Cursor */
    parent: GObject.Object
    priv: CursorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GVnc-1.0.GVnc.Cursor */
    get_data(): Uint8Array[]
    get_height(): number
    get_hotx(): number
    get_hoty(): number
    get_width(): number
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hotx", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hotx", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hoty", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hoty", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array[], hotx: number, hoty: number, width: number, height: number): Cursor
    static $gtype: GObject.Type
}
export class AudioFormat {
    /* Fields of GVnc-1.0.GVnc.AudioFormat */
    format: number
    nchannels: number
    frequency: number
    /* Methods of GVnc-1.0.GVnc.AudioFormat */
    copy(): AudioFormat
    free(): void
    static name: string
    static new(): AudioFormat
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AudioFormat
}
export abstract class AudioInterface {
    /* Fields of GVnc-1.0.GVnc.AudioInterface */
    parent: GObject.TypeInterface
    playback_start: (audio: Audio, format: AudioFormat) => boolean
    playback_stop: (audio: Audio) => boolean
    playback_data: (audio: Audio, sample: AudioSample) => boolean
    static name: string
}
export class AudioSample {
    /* Fields of GVnc-1.0.GVnc.AudioSample */
    data: number
    length: number
    capacity: number
    /* Methods of GVnc-1.0.GVnc.AudioSample */
    copy(): AudioSample
    free(): void
    static name: string
    static new(capacity: number): AudioSample
    constructor(capacity: number)
    /* Static methods and pseudo-constructors */
    static new(capacity: number): AudioSample
}
export abstract class BaseAudioClass {
    /* Fields of GVnc-1.0.GVnc.BaseAudioClass */
    parent_class: GObject.ObjectClass
    playback_start: (audio: BaseAudio, format: AudioFormat) => boolean
    playback_stop: (audio: BaseAudio) => boolean
    playback_data: (audio: BaseAudio, sample: AudioSample) => boolean
    static name: string
}
export class BaseAudioPrivate {
    static name: string
}
export abstract class BaseFramebufferClass {
    /* Fields of GVnc-1.0.GVnc.BaseFramebufferClass */
    parent_class: GObject.ObjectClass
    _vnc_reserved: object[]
    static name: string
}
export class BaseFramebufferPrivate {
    static name: string
}
export class ColorMap {
    /* Fields of GVnc-1.0.GVnc.ColorMap */
    offset: number
    size: number
    colors: ColorMapEntry
    /* Methods of GVnc-1.0.GVnc.ColorMap */
    copy(): ColorMap
    free(): void
    lookup(idx: number, red: number, green: number, blue: number): boolean
    set(idx: number, red: number, green: number, blue: number): boolean
    static name: string
    static new(offset: number, size: number): ColorMap
    constructor(offset: number, size: number)
    /* Static methods and pseudo-constructors */
    static new(offset: number, size: number): ColorMap
}
export class ColorMapEntry {
    /* Fields of GVnc-1.0.GVnc.ColorMapEntry */
    red: number
    green: number
    blue: number
    static name: string
}
export abstract class ConnectionClass {
    /* Fields of GVnc-1.0.GVnc.ConnectionClass */
    parent_class: GObject.ObjectClass
    vnc_cursor_changed: (conn: Connection, cursor: Cursor) => void
    vnc_pointer_mode_changed: (conn: Connection, absPointer: boolean) => void
    vnc_bell: (conn: Connection) => void
    vnc_server_cut_text: (conn: Connection, text: GLib.String) => void
    vnc_framebuffer_update: (conn: Connection, x: number, y: number, width: number, height: number) => void
    vnc_desktop_resize: (conn: Connection, width: number, height: number) => void
    vnc_pixel_format_changed: (conn: Connection, format: PixelFormat) => void
    vnc_auth_failure: (conn: Connection, reason: string) => void
    vnc_auth_unsupported: (conn: Connection, authType: number) => void
    vnc_auth_credential: (conn: Connection, creds: GObject.ValueArray) => void
    vnc_auth_choose_type: (conn: Connection, types: GObject.ValueArray) => void
    vnc_auth_choose_subtype: (conn: Connection, type: number, subtypes: GObject.ValueArray) => void
    vnc_connected: (conn: Connection) => void
    vnc_initialized: (conn: Connection) => void
    vnc_disconnected: (conn: Connection) => void
    vnc_led_state: (conn: Connection) => void
    vnc_error: (conn: Connection, message: string) => void
    vnc_power_control_initialized: (conn: Connection) => void
    vnc_power_control_failed: (conn: Connection) => void
    vnc_desktop_rename: (conn: Connection, name: string) => void
    _vnc_reserved: object[]
    static name: string
}
export class ConnectionPrivate {
    static name: string
}
export abstract class CursorClass {
    /* Fields of GVnc-1.0.GVnc.CursorClass */
    parent_class: GObject.ObjectClass
    _vnc_reserved: object[]
    static name: string
}
export class CursorPrivate {
    static name: string
}
export abstract class FramebufferInterface {
    /* Fields of GVnc-1.0.GVnc.FramebufferInterface */
    parent: GObject.TypeInterface
    get_width: (fb: Framebuffer) => number
    get_height: (fb: Framebuffer) => number
    get_rowstride: (fb: Framebuffer) => number
    get_buffer: (fb: Framebuffer) => number
    get_local_format: (fb: Framebuffer) => PixelFormat
    get_remote_format: (fb: Framebuffer) => PixelFormat
    perfect_format_match: (fb: Framebuffer) => boolean
    set_pixel_at: (fb: Framebuffer, src: Uint8Array[], x: number, y: number) => void
    fill: (fb: Framebuffer, src: Uint8Array[], x: number, y: number, width: number, height: number) => void
    copyrect: (fb: Framebuffer, srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number) => void
    blt: (fb: Framebuffer, src: number, rowstride: number, x: number, y: number, width: number, height: number) => void
    rgb24_blt: (fb: Framebuffer, src: Uint8Array[], rowstride: number, x: number, y: number, width: number, height: number) => void
    set_color_map: (fb: Framebuffer, map: ColorMap) => void
    static name: string
}
export class PixelFormat {
    /* Fields of GVnc-1.0.GVnc.PixelFormat */
    bits_per_pixel: number
    depth: number
    byte_order: number
    true_color_flag: number
    red_max: number
    green_max: number
    blue_max: number
    red_shift: number
    green_shift: number
    blue_shift: number
    /* Methods of GVnc-1.0.GVnc.PixelFormat */
    copy(): PixelFormat
    free(): void
    match(other: PixelFormat): boolean
    static name: string
    static new(): PixelFormat
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PixelFormat
}