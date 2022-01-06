/**
 * Parquet-1.0
 */

import type * as Gjs from './Gjs';
import type * as Arrow from './Arrow-1.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_TAG: string
export interface ArrowFileReader_ConstructProps extends GObject.Object_ConstructProps {
    arrow_file_reader?: object
}
export class ArrowFileReader {
    /* Fields of Parquet-1.0.Parquet.ArrowFileReader */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Parquet-1.0.Parquet.ArrowFileReader */
    get_n_row_groups(): number
    get_schema(): Arrow.Schema | null
    read_column_data(i: number): Arrow.ChunkedArray | null
    read_row_group(row_group_index: number, column_indices: number[] | null): Arrow.Table | null
    read_table(): Arrow.Table | null
    set_use_threads(use_threads: boolean): void
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
    connect(sigName: "notify", callback: (($obj: ArrowFileReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArrowFileReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ArrowFileReader_ConstructProps)
    _init (config?: ArrowFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_arrow(source: Arrow.SeekableInputStream): ArrowFileReader
    static new_path(path: string): ArrowFileReader
    static $gtype: GObject.Type
}
export interface ArrowFileWriter_ConstructProps extends GObject.Object_ConstructProps {
    arrow_file_writer?: object
}
export class ArrowFileWriter {
    /* Fields of Parquet-1.0.Parquet.ArrowFileWriter */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Parquet-1.0.Parquet.ArrowFileWriter */
    close(): boolean
    write_table(table: Arrow.Table, chunk_size: number): boolean
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
    connect(sigName: "notify", callback: (($obj: ArrowFileWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArrowFileWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ArrowFileWriter_ConstructProps)
    _init (config?: ArrowFileWriter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_arrow(schema: Arrow.Schema, sink: Arrow.OutputStream, writer_properties?: WriterProperties | null): ArrowFileWriter
    static new_path(schema: Arrow.Schema, path: string, writer_properties?: WriterProperties | null): ArrowFileWriter
    static $gtype: GObject.Type
}
export interface WriterProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class WriterProperties {
    /* Fields of Parquet-1.0.Parquet.WriterProperties */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Parquet-1.0.Parquet.WriterProperties */
    disable_dictionary(path?: string | null): void
    enable_dictionary(path?: string | null): void
    get_batch_size(): number
    get_compression_path(path: string): Arrow.CompressionType
    get_data_page_size(): number
    get_dictionary_page_size_limit(): number
    get_max_row_group_length(): number
    is_dictionary_enabled(path: string): boolean
    set_batch_size(batch_size: number): void
    set_compression(compression_type: Arrow.CompressionType, path?: string | null): void
    set_data_page_size(data_page_size: number): void
    set_dictionary_page_size_limit(limit: number): void
    set_max_row_group_length(length: number): void
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
    connect(sigName: "notify", callback: (($obj: WriterProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WriterProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WriterProperties_ConstructProps)
    _init (config?: WriterProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WriterProperties
    static $gtype: GObject.Type
}
export abstract class ArrowFileReaderClass {
    /* Fields of Parquet-1.0.Parquet.ArrowFileReaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ArrowFileWriterClass {
    /* Fields of Parquet-1.0.Parquet.ArrowFileWriterClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class WriterPropertiesClass {
    /* Fields of Parquet-1.0.Parquet.WriterPropertiesClass */
    parent_class: GObject.ObjectClass
    static name: string
}