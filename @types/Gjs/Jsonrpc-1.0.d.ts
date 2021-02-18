/**
 * Jsonrpc-1.0
 */

import type * as Gjs from './Gjs';
import type * as Json from './Json-1.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ClientError {
    PARSE_ERROR,
    INVALID_REQUEST,
    METHOD_NOT_FOUND,
    INVALID_PARAMS,
    INTERNAL_ERROR,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_S: string
export interface ServerHandler {
    (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    io_stream?: Gio.IOStream
    use_gvariant?: boolean
}
export class Client {
    /* Properties of Jsonrpc.Client */
    use_gvariant: boolean
    /* Fields of Jsonrpc.Client */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Jsonrpc.Client */
    call(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* return_value */ GLib.Variant | null ]
    call_async(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* return_value */ GLib.Variant | null ]
    call_with_id_async(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* id */ GLib.Variant | null
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    get_use_gvariant(): boolean
    reply(id: GLib.Variant, result?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    reply_async(id: GLib.Variant, result: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reply_error_async(id: GLib.Variant, code: number, message?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reply_error_finish(result: Gio.AsyncResult): boolean
    reply_finish(result: Gio.AsyncResult): boolean
    send_notification(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    send_notification_async(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_notification_finish(result: Gio.AsyncResult): boolean
    set_use_gvariant(use_gvariant: boolean): void
    start_listening(): void
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
    /* Virtual methods of Jsonrpc.Client */
    vfunc_failed(): void
    vfunc_handle_call(method: string, id: GLib.Variant, params: GLib.Variant): boolean
    vfunc_notification(method_name: string, params: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Jsonrpc.Client */
    connect(sigName: "failed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "failed", callback: (($obj: Client) => void)): number
    emit(sigName: "failed"): void
    connect(sigName: "handle-call", callback: (($obj: Client, method: string, id: GLib.Variant, params?: GLib.Variant | null) => boolean)): number
    connect_after(sigName: "handle-call", callback: (($obj: Client, method: string, id: GLib.Variant, params?: GLib.Variant | null) => boolean)): number
    emit(sigName: "handle-call", method: string, id: GLib.Variant, params?: GLib.Variant | null): void
    connect(sigName: "notification", callback: (($obj: Client, method: string, params?: GLib.Variant | null) => void)): number
    connect_after(sigName: "notification", callback: (($obj: Client, method: string, params?: GLib.Variant | null) => void)): number
    emit(sigName: "notification", method: string, params?: GLib.Variant | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-gvariant", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(io_stream: Gio.IOStream): Client
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends Gio.DataInputStream_ConstructProps {
}
export class InputStream {
    /* Properties of Gio.DataInputStream */
    byte_order: Gio.DataStreamByteOrder
    newline_type: Gio.DataStreamNewlineType
    /* Properties of Gio.BufferedInputStream */
    buffer_size: number
    /* Properties of Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Jsonrpc.InputStream */
    parent_instance: Gio.DataInputStream
    /* Fields of Gio.FilterInputStream */
    base_stream: Gio.InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Jsonrpc.InputStream */
    read_message(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean
    read_message_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_message_finish(result: Gio.AsyncResult, message: GLib.Variant): boolean
    /* Methods of Gio.DataInputStream */
    get_byte_order(): Gio.DataStreamByteOrder
    get_newline_type(): Gio.DataStreamNewlineType
    read_byte(cancellable?: Gio.Cancellable | null): number
    read_int16(cancellable?: Gio.Cancellable | null): number
    read_int32(cancellable?: Gio.Cancellable | null): number
    read_int64(cancellable?: Gio.Cancellable | null): number
    read_line(cancellable?: Gio.Cancellable | null): [ /* returnType */ Uint8Array[] | null, /* length */ number | null ]
    read_line_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_line_finish(result: Gio.AsyncResult): [ /* returnType */ Uint8Array[] | null, /* length */ number | null ]
    read_line_finish_utf8(result: Gio.AsyncResult): [ /* returnType */ string | null, /* length */ number | null ]
    read_line_utf8(cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* length */ number | null ]
    read_uint16(cancellable?: Gio.Cancellable | null): number
    read_uint32(cancellable?: Gio.Cancellable | null): number
    read_uint64(cancellable?: Gio.Cancellable | null): number
    read_until(stop_chars: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    read_until_async(stop_chars: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_until_finish(result: Gio.AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    read_upto(stop_chars: string, stop_chars_len: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    read_upto_async(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_upto_finish(result: Gio.AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    set_byte_order(order: Gio.DataStreamByteOrder): void
    set_newline_type(type: Gio.DataStreamNewlineType): void
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable?: Gio.Cancellable | null): number
    fill_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fill_finish(result: Gio.AsyncResult): number
    get_available(): number
    get_buffer_size(): number
    peek(buffer: Uint8Array[], offset: number): number
    peek_buffer(): Uint8Array[]
    set_buffer_size(size: number): void
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): Gio.InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Jsonrpc.InputStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedInputStream */
    vfunc_fill(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_fill_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_fill_finish(result: Gio.AsyncResult): number
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::newline-type", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-base-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.InputStream): InputStream
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends Gio.DataOutputStream_ConstructProps {
    use_gvariant?: boolean
}
export class OutputStream {
    /* Properties of Jsonrpc.OutputStream */
    use_gvariant: boolean
    /* Properties of Gio.DataOutputStream */
    byte_order: Gio.DataStreamByteOrder
    /* Fields of Jsonrpc.OutputStream */
    parent_instance: Gio.DataOutputStream
    /* Fields of Gio.FilterOutputStream */
    base_stream: Gio.OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Jsonrpc.OutputStream */
    get_use_gvariant(): boolean
    set_use_gvariant(use_gvariant: boolean): void
    write_message(message: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    write_message_async(message: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_message_finish(result: Gio.AsyncResult): boolean
    /* Methods of Gio.DataOutputStream */
    get_byte_order(): Gio.DataStreamByteOrder
    put_byte(data: number, cancellable?: Gio.Cancellable | null): boolean
    put_int16(data: number, cancellable?: Gio.Cancellable | null): boolean
    put_int32(data: number, cancellable?: Gio.Cancellable | null): boolean
    put_int64(data: number, cancellable?: Gio.Cancellable | null): boolean
    put_string(str: string, cancellable?: Gio.Cancellable | null): boolean
    put_uint16(data: number, cancellable?: Gio.Cancellable | null): boolean
    put_uint32(data: number, cancellable?: Gio.Cancellable | null): boolean
    put_uint64(data: number, cancellable?: Gio.Cancellable | null): boolean
    set_byte_order(order: Gio.DataStreamByteOrder): void
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): Gio.OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    splice_finish(result: Gio.AsyncResult): number
    write(buffer: Uint8Array[], cancellable?: Gio.Cancellable | null): number
    write_all(buffer: Uint8Array[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes_finish(result: Gio.AsyncResult): number
    write_finish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Jsonrpc.OutputStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_flush_finish(result: Gio.AsyncResult): boolean
    vfunc_splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    vfunc_splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_splice_finish(result: Gio.AsyncResult): number
    vfunc_write_async(buffer: Uint8Array[] | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_write_finish(result: Gio.AsyncResult): number
    vfunc_write_fn(buffer: Uint8Array[] | null, cancellable?: Gio.Cancellable | null): number
    vfunc_writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-gvariant", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::byte-order", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.OutputStream): OutputStream
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
}
export class Server {
    /* Fields of Jsonrpc.Server */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Jsonrpc.Server */
    accept_io_stream(io_stream: Gio.IOStream): void
    add_handler(method: string, handler: ServerHandler): number
    foreach(foreach_func: GLib.Func): void
    remove_handler(handler_id: number): void
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
    /* Virtual methods of Jsonrpc.Server */
    vfunc_client_accepted(client: Client): void
    vfunc_client_closed(client: Client): void
    vfunc_handle_call(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean
    vfunc_notification(client: Client, method: string, params: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Jsonrpc.Server */
    connect(sigName: "client-accepted", callback: (($obj: Server, client: Client) => void)): number
    connect_after(sigName: "client-accepted", callback: (($obj: Server, client: Client) => void)): number
    emit(sigName: "client-accepted", client: Client): void
    connect(sigName: "client-closed", callback: (($obj: Server, client: Client) => void)): number
    connect_after(sigName: "client-closed", callback: (($obj: Server, client: Client) => void)): number
    emit(sigName: "client-closed", client: Client): void
    connect(sigName: "handle-call", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-call", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean)): number
    emit(sigName: "handle-call", client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
    connect(sigName: "notification", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant) => void)): number
    connect_after(sigName: "notification", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant) => void)): number
    emit(sigName: "notification", client: Client, method: string, id: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Server
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of Jsonrpc.ClientClass */
    parent_class: GObject.ObjectClass
    notification: (self: Client, method_name: string, params: GLib.Variant) => void
    handle_call: (self: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    failed: (self: Client) => void
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
    static name: string
}
export abstract class InputStreamClass {
    /* Fields of Jsonrpc.InputStreamClass */
    parent_class: Gio.DataInputStreamClass
    _reserved1: object
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
    static name: string
}
export class MessageAny {
    /* Fields of Jsonrpc.MessageAny */
    magic: MessageMagic
    static name: string
}
export class MessageGetBoolean {
    /* Fields of Jsonrpc.MessageGetBoolean */
    magic: MessageMagic
    valptr: boolean
    static name: string
}
export class MessageGetDict {
    /* Fields of Jsonrpc.MessageGetDict */
    magic: MessageMagic
    dictptr: GLib.VariantDict
    static name: string
}
export class MessageGetDouble {
    /* Fields of Jsonrpc.MessageGetDouble */
    magic: MessageMagic
    valptr: number
    static name: string
}
export class MessageGetInt32 {
    /* Fields of Jsonrpc.MessageGetInt32 */
    magic: MessageMagic
    valptr: number
    static name: string
}
export class MessageGetInt64 {
    /* Fields of Jsonrpc.MessageGetInt64 */
    magic: MessageMagic
    valptr: number
    static name: string
}
export class MessageGetIter {
    /* Fields of Jsonrpc.MessageGetIter */
    magic: MessageMagic
    static name: string
}
export class MessageGetString {
    /* Fields of Jsonrpc.MessageGetString */
    magic: MessageMagic
    valptr: string
    static name: string
}
export class MessageGetStrv {
    /* Fields of Jsonrpc.MessageGetStrv */
    magic: MessageMagic
    valptr: string
    static name: string
}
export class MessageGetVariant {
    /* Fields of Jsonrpc.MessageGetVariant */
    magic: MessageMagic
    variantptr: GLib.Variant
    static name: string
}
export class MessageMagic {
    /* Fields of Jsonrpc.MessageMagic */
    bytes: number[]
    static name: string
}
export class MessagePutBoolean {
    /* Fields of Jsonrpc.MessagePutBoolean */
    magic: MessageMagic
    val: boolean
    static name: string
}
export class MessagePutDouble {
    /* Fields of Jsonrpc.MessagePutDouble */
    magic: MessageMagic
    val: number
    static name: string
}
export class MessagePutInt32 {
    /* Fields of Jsonrpc.MessagePutInt32 */
    magic: MessageMagic
    val: number
    static name: string
}
export class MessagePutInt64 {
    /* Fields of Jsonrpc.MessagePutInt64 */
    magic: MessageMagic
    val: number
    static name: string
}
export class MessagePutString {
    /* Fields of Jsonrpc.MessagePutString */
    magic: MessageMagic
    val: string
    static name: string
}
export class MessagePutStrv {
    /* Fields of Jsonrpc.MessagePutStrv */
    magic: MessageMagic
    val: string
    static name: string
}
export abstract class OutputStreamClass {
    /* Fields of Jsonrpc.OutputStreamClass */
    parent_class: Gio.DataOutputStreamClass
    _reserved1: object
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
    _reserved9: object
    _reserved10: object
    _reserved11: object
    _reserved12: object
    static name: string
}
export abstract class ServerClass {
    /* Fields of Jsonrpc.ServerClass */
    parent_class: GObject.ObjectClass
    handle_call: (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    notification: (self: Server, client: Client, method: string, params: GLib.Variant) => void
    client_accepted: (self: Server, client: Client) => void
    client_closed: (self: Server, client: Client) => void
    static name: string
}