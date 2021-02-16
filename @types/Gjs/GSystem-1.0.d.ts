/**
 * GSystem-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum SubprocessStreamDisposition {
    NULL,
    INHERIT,
    PIPE,
    STDERR_MERGE,
}
export function dfd_and_name_get_all_xattrs(dfd: number, name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_xattrs */ GLib.Variant ]
export function dfd_and_name_set_all_xattrs(dfd: number, name: string, xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
export function dirfd_iterator_clear(dfd_iter: DirFdIterator): void
export function dirfd_iterator_init_at(dfd: number, path: string, follow: boolean, dfd_iter: DirFdIterator): boolean
export function dirfd_iterator_init_take_fd(dfd: number, dfd_iter: DirFdIterator): boolean
export function fd_get_all_xattrs(fd: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_xattrs */ GLib.Variant ]
export function fd_set_all_xattrs(fd: number, xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
export function file_chmod(path: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): boolean
export function file_chown(path: Gio.File, owner: number, group: number, cancellable?: Gio.Cancellable | null): boolean
export function file_create(file: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_stream */ Gio.OutputStream | null ]
export function file_ensure_directory(dir: Gio.File, with_parents: boolean, cancellable?: Gio.Cancellable | null): boolean
export function file_ensure_directory_mode(dir: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): boolean
export function file_enumerator_iterate(direnum: Gio.FileEnumerator, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_info */ Gio.FileInfo | null, /* out_child */ Gio.File | null ]
export function file_get_all_xattrs(f: Gio.File, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_xattrs */ GLib.Variant ]
export function file_get_basename_cached(file: Gio.File): string
export function file_get_path_cached(file: Gio.File): string
export function file_get_relpath(one: Gio.File, two: Gio.File): string
export function file_lchown(path: Gio.File, owner: number, group: number, cancellable?: Gio.Cancellable | null): boolean
export function file_linkcopy(src: Gio.File, dest: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
export function file_linkcopy_sync_data(src: Gio.File, dest: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
export function file_load_contents_utf8(file: Gio.File, cancellable?: Gio.Cancellable | null): string
export function file_map_readonly(file: Gio.File, cancellable?: Gio.Cancellable | null): GLib.Bytes
export function file_open_dir_fd(path: Gio.File, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ number ]
export function file_open_dir_fd_at(parent_dfd: number, name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ number ]
export function file_open_in_tmpdir(tmpdir: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_file */ Gio.File, /* out_stream */ Gio.OutputStream | null ]
export function file_open_in_tmpdir_at(tmpdir_fd: number, mode: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_name */ string, /* out_stream */ Gio.OutputStream | null ]
export function file_openat_noatime(dfd: number, name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ret_fd */ number ]
export function file_read_noatime(file: Gio.File, cancellable?: Gio.Cancellable | null): Gio.InputStream
export function file_realpath(file: Gio.File): Gio.File | null
export function file_rename(from: Gio.File, to: Gio.File, cancellable?: Gio.Cancellable | null): boolean
export function file_set_all_xattrs(file: Gio.File, xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
export function file_sync_data(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
export function file_unlink(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
export function fileutil_gen_tmp_name(prefix?: string | null, suffix?: string | null): string
export function log_structured(message: string, keys?: string[] | null): void
export function log_structured_print(message: string, keys?: string[] | null): void
export function opendirat(dfd: number, path: string, follow: boolean, out_fd: number): boolean
export function opendirat_with_errno(dfd: number, path: string, follow: boolean): number
export function set_error_from_errno(error: GLib.Error | null, saved_errno: number): void
export function shutil_cp_a(src: Gio.File, dest: Gio.File, cancellable?: Gio.Cancellable | null): boolean
export function shutil_cp_al_or_fallback(src: Gio.File, dest: Gio.File, cancellable?: Gio.Cancellable | null): boolean
export function shutil_rm_rf(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
export function shutil_rm_rf_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
export function stdout_is_journal(): boolean
export interface Console_ConstructProps extends GObject.Object_ConstructProps {
}
export class Console {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSystem.Console */
    begin_status_line(line: string, cancellable?: Gio.Cancellable | null): boolean
    end_status_line(cancellable?: Gio.Cancellable | null): boolean
    read_password(prompt: string, cancellable?: Gio.Cancellable | null): string
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
    connect(sigName: "notify", callback: (($obj: Console, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Console, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Console_ConstructProps)
    _init (config?: Console_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): Console
    static get_stderr(): Gio.OutputStream
    static get_stdin(): Gio.InputStream
    static get_stdout(): Gio.OutputStream
    static $gtype: GObject.Type
}
export interface Subprocess_ConstructProps extends GObject.Object_ConstructProps {
    context?: SubprocessContext
}
export class Subprocess {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSystem.Subprocess */
    force_exit(): void
    get_pid(): GLib.Pid
    get_stderr_pipe(): Gio.InputStream
    get_stdin_pipe(): Gio.OutputStream
    get_stdout_pipe(): Gio.InputStream
    request_exit(): boolean
    wait(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wait_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_exit_status */ number ]
    wait_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_exit_status */ number ]
    wait_sync_check(cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GSystem.Subprocess */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Subprocess_ConstructProps)
    _init (config?: Subprocess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: SubprocessContext, cancellable?: Gio.Cancellable | null): Subprocess
    static new_simple_argv(argv: string[], stdout_disposition: SubprocessStreamDisposition, stderr_disposition: SubprocessStreamDisposition, cancellable?: Gio.Cancellable | null): Subprocess
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SubprocessContext_ConstructProps extends GObject.Object_ConstructProps {
    argv?: string[]
}
export class SubprocessContext {
    /* Properties of GSystem.SubprocessContext */
    argv: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSystem.SubprocessContext */
    argv_append(arg: string): void
    open_pipe_read(): [ /* returnType */ boolean, /* out_stream */ Gio.InputStream, /* out_fdno */ number ]
    open_pipe_write(): [ /* returnType */ boolean, /* out_stream */ Gio.OutputStream, /* out_fdno */ number ]
    set_cwd(cwd: string): void
    set_environment(environ: string[]): void
    set_keep_descriptors(keep_descriptors: boolean): void
    set_search_path(search_path: boolean, search_path_from_envp: boolean): void
    set_stderr_disposition(disposition: SubprocessStreamDisposition): void
    set_stderr_fd(fd: number): void
    set_stderr_file_path(path: string): void
    set_stdin_disposition(disposition: SubprocessStreamDisposition): void
    set_stdin_fd(fd: number): void
    set_stdin_file_path(path: string): void
    set_stdout_disposition(disposition: SubprocessStreamDisposition): void
    set_stdout_fd(fd: number): void
    set_stdout_file_path(path: string): void
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
    connect(sigName: "notify", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::argv", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::argv", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubprocessContext_ConstructProps)
    _init (config?: SubprocessContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(argv: string): SubprocessContext
    static new_argv0(argv0: string, argv: string): SubprocessContext
    static $gtype: GObject.Type
}
export class DirFdIterator {
    /* Fields of GSystem.DirFdIterator */
    initialized: boolean
    fd: number
    padding_data: object[]
    static name: string
}