/**
 * IAnjuta-3.0
 */

import type * as Gjs from './Gjs';
import type * as Gtk from './Gtk-3.0';
import type * as xlib from './xlib-2.0';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';
import type * as Anjuta from './Anjuta-3.0';
import type * as Gdl from './Gdl-3';

export enum BuildableCommand {
    COMMAND_COMPILE,
    COMMAND_BUILD,
    COMMAND_BUILD_TARBALL,
    COMMAND_INSTALL,
    COMMAND_CONFIGURE,
    COMMAND_GENERATE,
    COMMAND_CLEAN,
    COMMAND_EXECUTE,
    COMMAND_IS_BUILT,
    COMMAND_AUTORECONF,
    COMMAND_DISTCLEAN,
    COMMAND_CHECK,
    N_COMMANDS,
}
export enum BuilderError {
    SUCCEED,
    FAILED,
    CANCELED,
    ABORTED,
    INTERRUPTED,
    TERMINATED,
    UNKNOWN_TARGET,
    UNKNOWN_ERROR,
    OTHER_ERROR,
}
export enum DebuggerBreakpointMethod {
    SET_AT_ADDRESS,
    SET_AT_FUNCTION,
    ENABLE,
    IGNORE,
    CONDITION,
}
export enum DebuggerBreakpointType {
    REMOVED,
    UPDATED,
    ON_LINE,
    ON_ADDRESS,
    ON_FUNCTION,
    ON_READ,
    ON_WRITE,
    WITH_ENABLE,
    WITH_IGNORE,
    WITH_TIME,
    WITH_CONDITION,
    WITH_TEMPORARY,
    WITH_PENDING,
}
export enum DebuggerError {
    OK,
    NOT_READY,
    NOT_RUNNING,
    NOT_STOPPED,
    NOT_LOADED,
    NOT_STARTED,
    NOT_CONNECTED,
    NOT_IMPLEMENTED,
    CANCEL,
    UNABLE_TO_CREATE_VARIABLE,
    UNABLE_TO_ACCESS_MEMORY,
    UNABLE_TO_OPEN_FILE,
    UNSUPPORTED_FILE_TYPE,
    UNSUPPORTED_VERSION,
    UNABLE_TO_FIND_DEBUGGER,
    ALREADY_DONE,
    PROGRAM_NOT_FOUND,
    UNABLE_TO_CONNECT,
    UNKNOWN_ERROR,
    OTHER_ERROR,
}
export enum DebuggerOutputType {
    OUTPUT,
    WARNING_OUTPUT,
    ERROR_OUTPUT,
    INFO_OUTPUT,
}
export enum DebuggerState {
    BUSY,
    STOPPED,
    STARTED,
    PROGRAM_LOADED,
    PROGRAM_STOPPED,
    PROGRAM_RUNNING,
}
export enum DocumentManagerError {
    DOESNT_EXIST,
}
export enum EditorAttribute {
    TEXT,
    KEYWORD,
    COMMENT,
    STRING,
}
export enum EditorError {
    DOESNT_EXIST,
}
export enum EditorLineModeType {
    LF,
    CR,
    CRLF,
}
export enum EnvironmentError {
    CONFIG,
    OTHER_ERROR,
}
export enum IndicableIndicator {
    NONE,
    IMPORTANT,
    WARNING,
    CRITICAL,
}
export enum MarkableError {
    INVALID_LOCATION,
}
export enum MarkableMarker {
    LINEMARKER,
    BOOKMARK,
    MESSAGE,
    BREAKPOINT_DISABLED,
    BREAKPOINT_ENABLED,
    PROGRAM_COUNTER,
}
export enum MessageManagerError {
    DOESNT_EXIST,
}
export enum MessageViewType {
    TYPE_NORMAL,
    TYPE_INFO,
    TYPE_WARNING,
    TYPE_ERROR,
}
export enum PluginFactoryError {
    OK,
    MISSING_LOCATION,
    MISSING_TYPE,
    MISSING_MODULE,
    INVALID_MODULE,
    MISSING_FUNCTION,
    INVALID_TYPE,
    UNKNOWN_ERROR,
}
export enum ProjectError {
    ERROR_SUCCESS,
    ERROR_DOESNT_EXIST,
    ERROR_ALREADY_EXISTS,
    ERROR_VALIDATION_FAILED,
    ERROR_PROJECT_MALFORMED,
    ERROR_WRONG_PARENT,
    ERROR_NOT_SUPPORTED,
    ERROR_GENERAL_FAILURE,
}
export enum ProjectProbe {
    PROBE_FILES,
    PROBE_MAKE_FILES,
    PROBE_PROJECT_FILES,
}
export enum SymbolField {
    FIELD_ID,
    FIELD_NAME,
    FIELD_FILE_POS,
    FILED_SCOPE_DEF_ID,
    FIELD_FILE_SCOPE,
    FIELD_SIGNATURE,
    FIELD_RETURNTYPE,
    FIELD_TYPE,
    FIELD_TYPE_NAME,
    FIELD_FILE_PATH,
    FIELD_PROJECT_NAME,
    FIELD_PROJECT_VERSION,
    FIELD_IMPLEMENTATION,
    FIELD_ACCESS,
    FIELD_KIND,
    FIELD_IS_CONTAINER,
    FIELD_END,
}
export enum SymbolQueryDb {
    DB_PROJECT,
    DB_SYSTEM,
}
export enum SymbolQueryFileScope {
    SEARCH_FS_IGNORE,
    SEARCH_FS_PUBLIC,
    SEARCH_FS_PRIVATE,
}
export enum SymbolQueryMode {
    MODE_SYNC,
    MODE_ASYNC,
    MODE_QUEUED,
}
export enum SymbolQueryName {
    SEARCH,
    SEARCH_ALL,
    SEARCH_FILE,
    SEARCH_IN_SCOPE,
    SEARCH_ID,
    SEARCH_MEMBERS,
    SEARCH_CLASS_PARENTS,
    SEARCH_SCOPE,
    SEARCH_PARENT_SCOPE,
    SEARCH_PARENT_SCOPE_FILE,
}
export enum SymbolType {
    TYPE_NONE,
    TYPE_UNDEF,
    TYPE_CLASS,
    TYPE_ENUM,
    TYPE_ENUMERATOR,
    TYPE_FIELD,
    TYPE_FUNCTION,
    TYPE_INTERFACE,
    TYPE_MEMBER,
    TYPE_METHOD,
    TYPE_NAMESPACE,
    TYPE_PACKAGE,
    TYPE_PROTOTYPE,
    TYPE_STRUCT,
    TYPE_TYPEDEF,
    TYPE_UNION,
    TYPE_VARIABLE,
    TYPE_EXTERNVAR,
    TYPE_MACRO,
    TYPE_MACRO_WITH_ARG,
    TYPE_FILE,
    TYPE_OTHER,
    TYPE_SCOPE_CONTAINER,
    TYPE_MAX,
}
export enum VcsError {
    UNKOWN_ERROR,
}
export const BUILDER_CONFIGURATION_DEBUG: string
export const BUILDER_CONFIGURATION_OPTIMIZED: string
export const BUILDER_CONFIGURATION_PROFILING: string
export const BUILDER_ROOT_URI: string
export const DOCUMENT_MANAGER_CURRENT_DOCUMENT: string
export const EDITOR_INDENT_WIDTH_KEY: string
export const EDITOR_PREF_SCHEMA: string
export const EDITOR_TAB_WIDTH_KEY: string
export const EDITOR_USE_TABS_KEY: string
export const FILE_MANAGER_SELECTED_FILE: string
export const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_BRACE_AFTER_FUNC: string
export const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_CLOSEBRACE_AFTER_FUNC: string
export const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_ENABLE: string
export const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_SPACE_AFTER_FUNC: string
export const LANGUAGE_PROVIDER_PREF_CALLTIP_ENABLE: string
export const PROJECT_MANAGER_CURRENT_PROJECT: string
export const PROJECT_MANAGER_CURRENT_URI: string
export const PROJECT_MANAGER_PROJECT_ROOT_URI: string
export function buildable_error_quark(): GLib.Quark
export function builder_error_quark(): GLib.Quark
export function debug_manager_error_quark(): GLib.Quark
export function debugger_breakpoint_error_quark(): GLib.Quark
export function debugger_error_quark(): GLib.Quark
export function debugger_instruction_error_quark(): GLib.Quark
export function debugger_memory_error_quark(): GLib.Quark
export function debugger_register_error_quark(): GLib.Quark
export function debugger_variable_error_quark(): GLib.Quark
export function document_error_quark(): GLib.Quark
export function document_manager_error_quark(): GLib.Quark
export function editor_assist_error_quark(): GLib.Quark
export function editor_cell_error_quark(): GLib.Quark
export function editor_cell_style_error_quark(): GLib.Quark
export function editor_comment_error_quark(): GLib.Quark
export function editor_convert_error_quark(): GLib.Quark
export function editor_error_quark(): GLib.Quark
export function editor_factory_error_quark(): GLib.Quark
export function editor_folds_error_quark(): GLib.Quark
export function editor_glade_signal_error_quark(): GLib.Quark
export function editor_goto_error_quark(): GLib.Quark
export function editor_hover_error_quark(): GLib.Quark
export function editor_language_error_quark(): GLib.Quark
export function editor_line_mode_error_quark(): GLib.Quark
export function editor_search_error_quark(): GLib.Quark
export function editor_selection_error_quark(): GLib.Quark
export function editor_tip_error_quark(): GLib.Quark
export function editor_view_error_quark(): GLib.Quark
export function editor_zoom_error_quark(): GLib.Quark
export function environment_error_quark(): GLib.Quark
export function file_error_quark(): GLib.Quark
export function file_loader_error_quark(): GLib.Quark
export function file_manager_error_quark(): GLib.Quark
export function file_savable_error_quark(): GLib.Quark
export function glade_error_quark(): GLib.Quark
export function help_error_quark(): GLib.Quark
export function indenter_error_quark(): GLib.Quark
export function indicable_error_quark(): GLib.Quark
export function iterable_error_quark(): GLib.Quark
export function iterable_tree_error_quark(): GLib.Quark
export function language_error_quark(): GLib.Quark
export function language_provider_error_quark(): GLib.Quark
export function loader_error_quark(): GLib.Quark
export function markable_error_quark(): GLib.Quark
export function message_manager_error_quark(): GLib.Quark
export function message_view_error_quark(): GLib.Quark
export function plugin_factory_error_quark(): GLib.Quark
export function preferences_error_quark(): GLib.Quark
export function print_error_quark(): GLib.Quark
export function project_backend_error_quark(): GLib.Quark
export function project_chooser_error_quark(): GLib.Quark
export function project_error_quark(): GLib.Quark
export function project_manager_error_quark(): GLib.Quark
export function provider_error_quark(): GLib.Quark
export function snippets_manager_error_quark(): GLib.Quark
export function stream_error_quark(): GLib.Quark
export function stream_loader_error_quark(): GLib.Quark
export function stream_savable_error_quark(): GLib.Quark
export function symbol_error_quark(): GLib.Quark
export function symbol_manager_error_quark(): GLib.Quark
export function symbol_query_error_quark(): GLib.Quark
export function terminal_error_quark(): GLib.Quark
export function todo_error_quark(): GLib.Quark
export function vcs_error_quark(): GLib.Quark
export function wizard_error_quark(): GLib.Quark
export interface BuilderCallback {
    (sender: GObject.Object, command: BuilderHandle, err: GLib.Error): void
}
export interface DebuggerBreakpointCallback {
    (data: DebuggerBreakpointItem, err: GLib.Error): void
}
export interface DebuggerCallback {
    (data: object | null, err: GLib.Error): void
}
export interface DebuggerGCharCallback {
    (value: string, err: GLib.Error): void
}
export interface DebuggerInstructionCallback {
    (data: DebuggerInstructionDisassembly, err: GLib.Error): void
}
export interface DebuggerMemoryCallback {
    (data: DebuggerMemoryBlock, err: GLib.Error): void
}
export interface DebuggerOutputCallback {
    (type: DebuggerOutputType, output: string): void
}
export interface DebuggerVariableCallback {
    (data: DebuggerVariableObject, err: GLib.Error): void
}
export interface VcsDiffCallback {
    (file: Gio.File, diff: string): void
}
export interface VcsStatusCallback {
    (file: Gio.File, status: Anjuta.VcsStatus): void
}
export class Buildable {
    /* Methods of IAnjuta.Buildable */
    build(uri: string): void
    clean(uri: string): void
    configure(uri: string): void
    execute(uri: string): void
    generate(uri: string): void
    get_command(command_id: BuildableCommand): string
    install(uri: string): void
    reset_commands(): void
    set_command(command_id: BuildableCommand, command: string): void
    /* Virtual methods of IAnjuta.Buildable */
    vfunc_build(uri: string): void
    vfunc_clean(uri: string): void
    vfunc_configure(uri: string): void
    vfunc_execute(uri: string): void
    vfunc_generate(uri: string): void
    vfunc_get_command(command_id: BuildableCommand): string
    vfunc_install(uri: string): void
    vfunc_reset_commands(): void
    vfunc_set_command(command_id: BuildableCommand, command: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Builder {
    /* Methods of IAnjuta.Builder */
    cancel(handle: BuilderHandle): void
    get_uri_configuration(uri: string): string
    list_configuration(): string[]
    /* Virtual methods of IAnjuta.Builder */
    vfunc_cancel(handle: BuilderHandle): void
    vfunc_get_uri_configuration(uri: string): string
    vfunc_list_configuration(): string[]
    static name: string
}
export class DebugManager {
    /* Methods of IAnjuta.DebugManager */
    quit(): boolean
    start(uri: string): boolean
    start_remote(server: string, uri: string): boolean
    /* Virtual methods of IAnjuta.DebugManager */
    vfunc_breakpoint_changed(breakpoint: DebuggerBreakpointItem): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    vfunc_frame_changed(frame: number, thread: number): void
    vfunc_location_changed(address: number, uri: string, line: number): void
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_started(): void
    vfunc_program_stopped(): void
    vfunc_program_unloaded(): void
    vfunc_quit(): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    vfunc_start(uri: string): boolean
    vfunc_start_remote(server: string, uri: string): boolean
    /* Signals of IAnjuta.DebugManager */
    connect(sigName: "breakpoint-changed", callback: (($obj: DebugManager, object?: object | null) => void)): number
    connect_after(sigName: "breakpoint-changed", callback: (($obj: DebugManager, object?: object | null) => void)): number
    emit(sigName: "breakpoint-changed", object?: object | null): void
    connect(sigName: "debugger-started", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebugManager, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebugManager, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebugManager, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebugManager, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "location-changed", callback: (($obj: DebugManager, object: number, p0: string, p1: number) => void)): number
    connect_after(sigName: "location-changed", callback: (($obj: DebugManager, object: number, p0: string, p1: number) => void)): number
    emit(sigName: "location-changed", object: number, p0: string, p1: number): void
    connect(sigName: "program-exited", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebugManager, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebugManager, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-started", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-started", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-started"): void
    connect(sigName: "program-stopped", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "program-unloaded", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-unloaded", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-unloaded"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebugManager, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebugManager, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Debugger {
    /* Methods of IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, source_search_directories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disable_log(): void
    enable_log(log: MessageView): void
    exit(): boolean
    get_state(): DebuggerState
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mime_type: string, source_search_directories: string[]): boolean
    quit(): boolean
    run(): boolean
    run_from(file: string, line: number): boolean
    run_to(file: string, line: number): boolean
    send_command(command: string): boolean
    set_environment(env: string): boolean
    set_frame(frame: number): boolean
    set_thread(thread: number): boolean
    set_working_directory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    step_in(): boolean
    step_out(): boolean
    step_over(): boolean
    unload(): boolean
    /* Virtual methods of IAnjuta.Debugger */
    vfunc_abort(): boolean
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    vfunc_disable_log(): void
    vfunc_enable_log(log: MessageView): void
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    vfunc_get_state(): DebuggerState
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfunc_interrupt(): boolean
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    vfunc_quit(): boolean
    vfunc_run(): boolean
    vfunc_run_from(file: string, line: number): boolean
    vfunc_run_to(file: string, line: number): boolean
    vfunc_send_command(command: string): boolean
    vfunc_set_environment(env: string): boolean
    vfunc_set_frame(frame: number): boolean
    vfunc_set_thread(thread: number): boolean
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    vfunc_step_in(): boolean
    vfunc_step_out(): boolean
    vfunc_step_over(): boolean
    vfunc_unload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: Debugger, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: Debugger, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: Debugger) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: Debugger, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: Debugger, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: Debugger, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: Debugger, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: Debugger, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: Debugger, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: Debugger) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: Debugger, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: Debugger, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
}
export class DebuggerBreakpoint {
    /* Methods of IAnjuta.DebuggerBreakpoint */
    implement_breakpoint(): number
    /* Methods of IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, source_search_directories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disable_log(): void
    enable_log(log: MessageView): void
    exit(): boolean
    get_state(): DebuggerState
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mime_type: string, source_search_directories: string[]): boolean
    quit(): boolean
    run(): boolean
    run_from(file: string, line: number): boolean
    run_to(file: string, line: number): boolean
    send_command(command: string): boolean
    set_environment(env: string): boolean
    set_frame(frame: number): boolean
    set_thread(thread: number): boolean
    set_working_directory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    step_in(): boolean
    step_out(): boolean
    step_over(): boolean
    unload(): boolean
    /* Virtual methods of IAnjuta.DebuggerBreakpoint */
    vfunc_implement_breakpoint(): number
    /* Virtual methods of IAnjuta.Debugger */
    vfunc_abort(): boolean
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    vfunc_disable_log(): void
    vfunc_enable_log(log: MessageView): void
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    vfunc_get_state(): DebuggerState
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfunc_interrupt(): boolean
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    vfunc_quit(): boolean
    vfunc_run(): boolean
    vfunc_run_from(file: string, line: number): boolean
    vfunc_run_to(file: string, line: number): boolean
    vfunc_send_command(command: string): boolean
    vfunc_set_environment(env: string): boolean
    vfunc_set_frame(frame: number): boolean
    vfunc_set_thread(thread: number): boolean
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    vfunc_step_in(): boolean
    vfunc_step_out(): boolean
    vfunc_step_over(): boolean
    vfunc_unload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerBreakpoint, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerBreakpoint, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerBreakpoint, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerBreakpoint, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerBreakpoint, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerBreakpoint, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerBreakpoint, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerBreakpoint, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerBreakpoint, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerBreakpoint, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class DebuggerInstruction {
    /* Methods of IAnjuta.DebuggerInstruction */
    run_from_address(address: number): boolean
    run_to_address(address: number): boolean
    step_in_instruction(): boolean
    step_over_instruction(): boolean
    /* Methods of IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, source_search_directories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disable_log(): void
    enable_log(log: MessageView): void
    exit(): boolean
    get_state(): DebuggerState
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mime_type: string, source_search_directories: string[]): boolean
    quit(): boolean
    run(): boolean
    run_from(file: string, line: number): boolean
    run_to(file: string, line: number): boolean
    send_command(command: string): boolean
    set_environment(env: string): boolean
    set_frame(frame: number): boolean
    set_thread(thread: number): boolean
    set_working_directory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    step_in(): boolean
    step_out(): boolean
    step_over(): boolean
    unload(): boolean
    /* Virtual methods of IAnjuta.DebuggerInstruction */
    vfunc_run_from_address(address: number): boolean
    vfunc_run_to_address(address: number): boolean
    vfunc_step_in_instruction(): boolean
    vfunc_step_over_instruction(): boolean
    /* Virtual methods of IAnjuta.Debugger */
    vfunc_abort(): boolean
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    vfunc_disable_log(): void
    vfunc_enable_log(log: MessageView): void
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    vfunc_get_state(): DebuggerState
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfunc_interrupt(): boolean
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    vfunc_quit(): boolean
    vfunc_run(): boolean
    vfunc_run_from(file: string, line: number): boolean
    vfunc_run_to(file: string, line: number): boolean
    vfunc_send_command(command: string): boolean
    vfunc_set_environment(env: string): boolean
    vfunc_set_frame(frame: number): boolean
    vfunc_set_thread(thread: number): boolean
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    vfunc_step_in(): boolean
    vfunc_step_out(): boolean
    vfunc_step_over(): boolean
    vfunc_unload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerInstruction, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerInstruction, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerInstruction, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerInstruction, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerInstruction, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerInstruction, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerInstruction, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerInstruction, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerInstruction, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerInstruction, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class DebuggerMemory {
    /* Methods of IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, source_search_directories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disable_log(): void
    enable_log(log: MessageView): void
    exit(): boolean
    get_state(): DebuggerState
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mime_type: string, source_search_directories: string[]): boolean
    quit(): boolean
    run(): boolean
    run_from(file: string, line: number): boolean
    run_to(file: string, line: number): boolean
    send_command(command: string): boolean
    set_environment(env: string): boolean
    set_frame(frame: number): boolean
    set_thread(thread: number): boolean
    set_working_directory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    step_in(): boolean
    step_out(): boolean
    step_over(): boolean
    unload(): boolean
    /* Virtual methods of IAnjuta.Debugger */
    vfunc_abort(): boolean
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    vfunc_disable_log(): void
    vfunc_enable_log(log: MessageView): void
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    vfunc_get_state(): DebuggerState
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfunc_interrupt(): boolean
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    vfunc_quit(): boolean
    vfunc_run(): boolean
    vfunc_run_from(file: string, line: number): boolean
    vfunc_run_to(file: string, line: number): boolean
    vfunc_send_command(command: string): boolean
    vfunc_set_environment(env: string): boolean
    vfunc_set_frame(frame: number): boolean
    vfunc_set_thread(thread: number): boolean
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    vfunc_step_in(): boolean
    vfunc_step_out(): boolean
    vfunc_step_over(): boolean
    vfunc_unload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerMemory, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerMemory, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerMemory, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerMemory, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerMemory, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerMemory, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerMemory, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerMemory, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerMemory, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerMemory, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class DebuggerRegister {
    /* Methods of IAnjuta.DebuggerRegister */
    write_register(value: DebuggerRegisterData): boolean
    /* Methods of IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, source_search_directories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disable_log(): void
    enable_log(log: MessageView): void
    exit(): boolean
    get_state(): DebuggerState
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mime_type: string, source_search_directories: string[]): boolean
    quit(): boolean
    run(): boolean
    run_from(file: string, line: number): boolean
    run_to(file: string, line: number): boolean
    send_command(command: string): boolean
    set_environment(env: string): boolean
    set_frame(frame: number): boolean
    set_thread(thread: number): boolean
    set_working_directory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    step_in(): boolean
    step_out(): boolean
    step_over(): boolean
    unload(): boolean
    /* Virtual methods of IAnjuta.DebuggerRegister */
    vfunc_write_register(value: DebuggerRegisterData): boolean
    /* Virtual methods of IAnjuta.Debugger */
    vfunc_abort(): boolean
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    vfunc_disable_log(): void
    vfunc_enable_log(log: MessageView): void
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    vfunc_get_state(): DebuggerState
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfunc_interrupt(): boolean
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    vfunc_quit(): boolean
    vfunc_run(): boolean
    vfunc_run_from(file: string, line: number): boolean
    vfunc_run_to(file: string, line: number): boolean
    vfunc_send_command(command: string): boolean
    vfunc_set_environment(env: string): boolean
    vfunc_set_frame(frame: number): boolean
    vfunc_set_thread(thread: number): boolean
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    vfunc_step_in(): boolean
    vfunc_step_out(): boolean
    vfunc_step_over(): boolean
    vfunc_unload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerRegister, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerRegister, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerRegister, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerRegister, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerRegister, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerRegister, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerRegister, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerRegister, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerRegister, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerRegister, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class DebuggerVariable {
    /* Methods of IAnjuta.DebuggerVariable */
    assign(name: string, value: string): boolean
    destroy(name: string): boolean
    /* Methods of IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, source_search_directories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disable_log(): void
    enable_log(log: MessageView): void
    exit(): boolean
    get_state(): DebuggerState
    handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mime_type: string, source_search_directories: string[]): boolean
    quit(): boolean
    run(): boolean
    run_from(file: string, line: number): boolean
    run_to(file: string, line: number): boolean
    send_command(command: string): boolean
    set_environment(env: string): boolean
    set_frame(frame: number): boolean
    set_thread(thread: number): boolean
    set_working_directory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    step_in(): boolean
    step_out(): boolean
    step_over(): boolean
    unload(): boolean
    /* Virtual methods of IAnjuta.DebuggerVariable */
    vfunc_assign(name: string, value: string): boolean
    vfunc_destroy(name: string): boolean
    /* Virtual methods of IAnjuta.Debugger */
    vfunc_abort(): boolean
    vfunc_attach(pid: number, source_search_directories: string[]): boolean
    vfunc_connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfunc_debugger_ready(state: DebuggerState): void
    vfunc_debugger_started(): void
    vfunc_debugger_stopped(err: GLib.Error): void
    vfunc_disable_log(): void
    vfunc_enable_log(log: MessageView): void
    vfunc_exit(): boolean
    vfunc_frame_changed(frame: number, thread: number): void
    vfunc_get_state(): DebuggerState
    vfunc_handle_signal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfunc_interrupt(): boolean
    vfunc_load(file: string, mime_type: string, source_search_directories: string[]): boolean
    vfunc_program_exited(): void
    vfunc_program_loaded(): void
    vfunc_program_moved(pid: number, tid: number, address: number, file: string, line: number): void
    vfunc_program_running(): void
    vfunc_program_stopped(): void
    vfunc_quit(): boolean
    vfunc_run(): boolean
    vfunc_run_from(file: string, line: number): boolean
    vfunc_run_to(file: string, line: number): boolean
    vfunc_send_command(command: string): boolean
    vfunc_set_environment(env: string): boolean
    vfunc_set_frame(frame: number): boolean
    vfunc_set_thread(thread: number): boolean
    vfunc_set_working_directory(dir: string): boolean
    vfunc_sharedlib_event(): void
    vfunc_signal_received(name: string, description: string): void
    vfunc_start(args: string, terminal: boolean, stop: boolean): boolean
    vfunc_step_in(): boolean
    vfunc_step_out(): boolean
    vfunc_step_over(): boolean
    vfunc_unload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerVariable, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerVariable, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerVariable, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerVariable, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerVariable, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerVariable, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerVariable, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerVariable, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerVariable, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerVariable, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Document {
    /* Methods of IAnjuta.Document */
    begin_undo_action(): void
    can_redo(): boolean
    can_undo(): boolean
    clear(): void
    copy(): void
    cut(): void
    end_undo_action(): void
    get_filename(): string
    grab_focus(): void
    paste(): void
    redo(): void
    undo(): void
    /* Virtual methods of IAnjuta.Document */
    vfunc_begin_undo_action(): void
    vfunc_can_redo(): boolean
    vfunc_can_undo(): boolean
    vfunc_clear(): void
    vfunc_copy(): void
    vfunc_cut(): void
    vfunc_end_undo_action(): void
    vfunc_get_filename(): string
    vfunc_grab_focus(): void
    vfunc_paste(): void
    vfunc_redo(): void
    vfunc_undo(): void
    vfunc_update_ui(): void
    /* Signals of IAnjuta.Document */
    connect(sigName: "update-ui", callback: (($obj: Document) => void)): number
    connect_after(sigName: "update-ui", callback: (($obj: Document) => void)): number
    emit(sigName: "update-ui"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class DocumentManager {
    /* Methods of IAnjuta.DocumentManager */
    add_bookmark(file: Gio.File, line: number): void
    add_buffer(name: string, content: string): Editor
    add_document(document: Document): void
    find_document_with_file(file: Gio.File): Document
    get_current_document(): Document
    get_doc_widgets(): Gtk.Widget[]
    get_file(filename: string): Gio.File
    goto_file_line(file: Gio.File, lineno: number): Editor
    goto_file_line_mark(file: Gio.File, lineno: number, mark: boolean): Editor
    remove_document(document: Document, save_before: boolean): boolean
    set_current_document(document: Document): void
    /* Virtual methods of IAnjuta.DocumentManager */
    vfunc_add_bookmark(file: Gio.File, line: number): void
    vfunc_add_buffer(name: string, content: string): Editor
    vfunc_add_document(document: Document): void
    vfunc_document_added(doc: Document): void
    vfunc_document_removed(doc: Document): void
    vfunc_find_document_with_file(file: Gio.File): Document
    vfunc_get_current_document(): Document
    vfunc_get_doc_widgets(): Gtk.Widget[]
    vfunc_get_file(filename: string): Gio.File
    vfunc_goto_file_line(file: Gio.File, lineno: number): Editor
    vfunc_goto_file_line_mark(file: Gio.File, lineno: number, mark: boolean): Editor
    vfunc_remove_document(document: Document, save_before: boolean): boolean
    vfunc_set_current_document(document: Document): void
    /* Signals of IAnjuta.DocumentManager */
    connect(sigName: "document-added", callback: (($obj: DocumentManager, doc: Document) => void)): number
    connect_after(sigName: "document-added", callback: (($obj: DocumentManager, doc: Document) => void)): number
    emit(sigName: "document-added", doc: Document): void
    connect(sigName: "document-removed", callback: (($obj: DocumentManager, doc: Document) => void)): number
    connect_after(sigName: "document-removed", callback: (($obj: DocumentManager, doc: Document) => void)): number
    emit(sigName: "document-removed", doc: Document): void
    static name: string
}
export class Editor {
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: Editor) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: Editor) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: Editor, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Editor, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: Editor, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: Editor, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: Editor, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: Editor, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: Editor) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: Editor) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: Editor, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: Editor, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: Editor, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: Editor, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: Editor, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: Editor, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
}
export class EditorAssist {
    /* Methods of IAnjuta.EditorAssist */
    add(provider: Provider): void
    invoke(provider: Provider): void
    proposals(provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean): void
    remove(provider: Provider): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorAssist */
    vfunc_add(provider: Provider): void
    vfunc_cancelled(): void
    vfunc_invoke(provider: Provider): void
    vfunc_proposals(provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean): void
    vfunc_remove(provider: Provider): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.EditorAssist */
    connect(sigName: "cancelled", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "cancelled"): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorAssist, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorAssist, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorAssist, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorAssist, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorAssist, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorAssist, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorAssist, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorAssist, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorAssist, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorAssist, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorAssist, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorAssist, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorCell {
    /* Methods of IAnjuta.EditorCell */
    get_attribute(): EditorAttribute
    get_char(char_index: number): number
    get_character(): string
    get_length(): number
    /* Virtual methods of IAnjuta.EditorCell */
    vfunc_get_attribute(): EditorAttribute
    vfunc_get_char(char_index: number): number
    vfunc_get_character(): string
    vfunc_get_length(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorCellStyle {
    /* Methods of IAnjuta.EditorCellStyle */
    get_background_color(): string
    get_color(): string
    get_font_description(): string
    /* Methods of IAnjuta.EditorCell */
    get_attribute(): EditorAttribute
    get_char(char_index: number): number
    get_character(): string
    get_length(): number
    /* Virtual methods of IAnjuta.EditorCellStyle */
    vfunc_get_background_color(): string
    vfunc_get_color(): string
    vfunc_get_font_description(): string
    /* Virtual methods of IAnjuta.EditorCell */
    vfunc_get_attribute(): EditorAttribute
    vfunc_get_char(char_index: number): number
    vfunc_get_character(): string
    vfunc_get_length(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorComment {
    /* Methods of IAnjuta.EditorComment */
    block(): void
    box(): void
    stream(): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorComment */
    vfunc_block(): void
    vfunc_box(): void
    vfunc_stream(): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorComment) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorComment) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorComment, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorComment, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorComment, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorComment, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorComment, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorComment, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorComment) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorComment) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorComment, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorComment, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorComment, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorComment, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorComment, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorComment, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorConvert {
    /* Methods of IAnjuta.EditorConvert */
    to_lower(start_position: Iterable, end_position: Iterable): void
    to_upper(start_position: Iterable, end_position: Iterable): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorConvert */
    vfunc_to_lower(start_position: Iterable, end_position: Iterable): void
    vfunc_to_upper(start_position: Iterable, end_position: Iterable): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorConvert) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorConvert) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorConvert, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorConvert, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorConvert, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorConvert, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorConvert, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorConvert, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorConvert) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorConvert) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorConvert, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorConvert, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorConvert, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorConvert, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorConvert, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorConvert, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorFactory {
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorFolds {
    /* Methods of IAnjuta.EditorFolds */
    close_all(): void
    open_all(): void
    toggle_current(): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorFolds */
    vfunc_close_all(): void
    vfunc_open_all(): void
    vfunc_toggle_current(): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorFolds) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorFolds) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorFolds, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorFolds, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorFolds, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorFolds, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorFolds, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorFolds, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorFolds) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorFolds) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorFolds, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorFolds, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorFolds, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorFolds, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorFolds, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorFolds, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorGladeSignal {
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorGladeSignal */
    vfunc_drop(iterator: Iterable, signal_data: string): void
    vfunc_drop_possible(iterator: Iterable): boolean
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.EditorGladeSignal */
    connect(sigName: "drop", callback: (($obj: EditorGladeSignal, iter: Iterable, signal_data: string) => void)): number
    connect_after(sigName: "drop", callback: (($obj: EditorGladeSignal, iter: Iterable, signal_data: string) => void)): number
    emit(sigName: "drop", iter: Iterable, signal_data: string): void
    connect(sigName: "drop-possible", callback: (($obj: EditorGladeSignal, iter: Iterable) => boolean)): number
    connect_after(sigName: "drop-possible", callback: (($obj: EditorGladeSignal, iter: Iterable) => boolean)): number
    emit(sigName: "drop-possible", iter: Iterable): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorGladeSignal) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorGladeSignal) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorGladeSignal, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorGladeSignal, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorGladeSignal, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorGladeSignal, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorGladeSignal, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorGladeSignal, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorGladeSignal) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorGladeSignal) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorGladeSignal, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorGladeSignal, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorGladeSignal, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorGladeSignal, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGladeSignal, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGladeSignal, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorGoto {
    /* Methods of IAnjuta.EditorGoto */
    end_block(): void
    matching_brace(): void
    start_block(): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorGoto */
    vfunc_end_block(): void
    vfunc_matching_brace(): void
    vfunc_start_block(): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorGoto) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorGoto) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorGoto, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorGoto, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorGoto, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorGoto, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorGoto, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorGoto, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorGoto) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorGoto) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorGoto, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorGoto, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorGoto, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorGoto, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGoto, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGoto, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorHover {
    /* Methods of IAnjuta.EditorHover */
    display(position: Iterable, info: string): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorHover */
    vfunc_display(position: Iterable, info: string): void
    vfunc_hover_leave(position: Iterable): void
    vfunc_hover_over(position: Iterable): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.EditorHover */
    connect(sigName: "hover-leave", callback: (($obj: EditorHover, position: Iterable) => void)): number
    connect_after(sigName: "hover-leave", callback: (($obj: EditorHover, position: Iterable) => void)): number
    emit(sigName: "hover-leave", position: Iterable): void
    connect(sigName: "hover-over", callback: (($obj: EditorHover, position: Iterable) => void)): number
    connect_after(sigName: "hover-over", callback: (($obj: EditorHover, position: Iterable) => void)): number
    emit(sigName: "hover-over", position: Iterable): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorHover) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorHover) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorHover, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorHover, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorHover, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorHover, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorHover, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorHover, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorHover) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorHover) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorHover, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorHover, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorHover, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorHover, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorHover, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorHover, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorLanguage {
    /* Methods of IAnjuta.EditorLanguage */
    get_language(): string
    get_language_name(language: string): string
    get_supported_languages(): string[]
    set_language(language: string): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorLanguage */
    vfunc_get_language(): string
    vfunc_get_language_name(language: string): string
    vfunc_get_supported_languages(): string[]
    vfunc_language_changed(language: string): void
    vfunc_set_language(language: string): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.EditorLanguage */
    connect(sigName: "language-changed", callback: (($obj: EditorLanguage, language: string) => void)): number
    connect_after(sigName: "language-changed", callback: (($obj: EditorLanguage, language: string) => void)): number
    emit(sigName: "language-changed", language: string): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorLanguage) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorLanguage) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorLanguage, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorLanguage, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorLanguage, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorLanguage, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorLanguage, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorLanguage, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorLanguage) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorLanguage) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorLanguage, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorLanguage, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorLanguage, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorLanguage, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLanguage, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLanguage, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorLineMode {
    /* Methods of IAnjuta.EditorLineMode */
    convert(mode: EditorLineModeType): void
    fix(): void
    get(): EditorLineModeType
    set(mode: EditorLineModeType): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorLineMode */
    vfunc_convert(mode: EditorLineModeType): void
    vfunc_fix(): void
    vfunc_get(): EditorLineModeType
    vfunc_set(mode: EditorLineModeType): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorLineMode) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorLineMode) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorLineMode, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorLineMode, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorLineMode, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorLineMode, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorLineMode, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorLineMode, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorLineMode) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorLineMode) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorLineMode, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorLineMode, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorLineMode, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorLineMode, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLineMode, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLineMode, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorSearch {
    /* Methods of IAnjuta.EditorSearch */
    backward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    forward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorSearch */
    vfunc_backward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    vfunc_forward(search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorSearch) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorSearch) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorSearch, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorSearch, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorSearch, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorSearch, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorSearch, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorSearch, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorSearch) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorSearch) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorSearch, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorSearch, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorSearch, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorSearch, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSearch, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSearch, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorSelection {
    /* Methods of IAnjuta.EditorSelection */
    get(): string
    has_selection(): boolean
    replace(text: string, length: number): void
    select_all(): void
    select_block(): void
    select_function(): void
    set(start: Iterable, end: Iterable, scroll: boolean): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorSelection */
    vfunc_get(): string
    vfunc_has_selection(): boolean
    vfunc_replace(text: string, length: number): void
    vfunc_select_all(): void
    vfunc_select_block(): void
    vfunc_select_function(): void
    vfunc_set(start: Iterable, end: Iterable, scroll: boolean): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorSelection) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorSelection) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorSelection, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorSelection, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorSelection, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorSelection, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorSelection, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorSelection, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorSelection) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorSelection) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorSelection, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorSelection, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorSelection, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorSelection, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSelection, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSelection, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorTip {
    /* Methods of IAnjuta.EditorTip */
    cancel(): void
    show(tips: string[], position: Iterable): void
    visible(): boolean
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorTip */
    vfunc_cancel(): void
    vfunc_show(tips: string[], position: Iterable): void
    vfunc_visible(): boolean
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorTip) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorTip) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorTip, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorTip, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorTip, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorTip, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorTip, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorTip, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorTip) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorTip) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorTip, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorTip, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorTip, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorTip, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorTip, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorTip, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorView {
    /* Methods of IAnjuta.EditorView */
    create(): void
    get_count(): number
    remove_current(): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorView */
    vfunc_create(): void
    vfunc_get_count(): number
    vfunc_remove_current(): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorView) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorView) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorView, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorView, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorView, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorView, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorView, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorView, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorView) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorView) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorView, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorView, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorView, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorView, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorView, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorView, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class EditorZoom {
    /* Methods of IAnjuta.EditorZoom */
    in(): void
    out(): void
    /* Methods of IAnjuta.Editor */
    append(text: string, length: number): void
    erase(position_start: Iterable, position_end: Iterable): void
    erase_all(): void
    get_column(): number
    get_current_word(): string
    get_end_position(): Iterable
    get_indentsize(): number
    get_length(): number
    get_line_begin_position(line: number): Iterable
    get_line_end_position(line: number): Iterable
    get_line_from_position(position: Iterable): number
    get_lineno(): number
    get_offset(): number
    get_overwrite(): boolean
    get_position(): Iterable
    get_start_position(): Iterable
    get_tabsize(): number
    get_text(begin: Iterable, end: Iterable): string
    get_text_all(): string
    get_use_spaces(): boolean
    goto_end(): void
    goto_line(lineno: number): void
    goto_position(position: Iterable): void
    goto_start(): void
    insert(position: Iterable, text: string, length: number): void
    set_auto_indent(auto_indent: boolean): void
    set_indentsize(indentsize: number): void
    set_popup_menu(menu: Gtk.Widget): void
    set_tabsize(tabsize: number): void
    set_use_spaces(use_spaces: boolean): void
    /* Virtual methods of IAnjuta.EditorZoom */
    vfunc_in(): void
    vfunc_out(): void
    /* Virtual methods of IAnjuta.Editor */
    vfunc_append(text: string, length: number): void
    vfunc_backspace(): void
    vfunc_changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfunc_char_added(position: Iterable, ch: number): void
    vfunc_code_changed(position: Iterable, code: string): void
    vfunc_cursor_moved(): void
    vfunc_erase(position_start: Iterable, position_end: Iterable): void
    vfunc_erase_all(): void
    vfunc_get_column(): number
    vfunc_get_current_word(): string
    vfunc_get_end_position(): Iterable
    vfunc_get_indentsize(): number
    vfunc_get_length(): number
    vfunc_get_line_begin_position(line: number): Iterable
    vfunc_get_line_end_position(line: number): Iterable
    vfunc_get_line_from_position(position: Iterable): number
    vfunc_get_lineno(): number
    vfunc_get_offset(): number
    vfunc_get_overwrite(): boolean
    vfunc_get_position(): Iterable
    vfunc_get_start_position(): Iterable
    vfunc_get_tabsize(): number
    vfunc_get_text(begin: Iterable, end: Iterable): string
    vfunc_get_text_all(): string
    vfunc_get_use_spaces(): boolean
    vfunc_glade_callback_add(widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfunc_glade_member_add(widget_typename: string, widget_name: string, filename: string): void
    vfunc_goto_end(): void
    vfunc_goto_line(lineno: number): void
    vfunc_goto_position(position: Iterable): void
    vfunc_goto_start(): void
    vfunc_insert(position: Iterable, text: string, length: number): void
    vfunc_line_marks_gutter_clicked(location: number): void
    vfunc_set_auto_indent(auto_indent: boolean): void
    vfunc_set_indentsize(indentsize: number): void
    vfunc_set_popup_menu(menu: Gtk.Widget): void
    vfunc_set_tabsize(tabsize: number): void
    vfunc_set_use_spaces(use_spaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorZoom) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorZoom) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorZoom, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorZoom, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorZoom, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorZoom, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorZoom, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorZoom, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorZoom) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorZoom) => void)): number
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorZoom, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorZoom, signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signal_name: string, handler_name: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorZoom, widget_name: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorZoom, widget_name: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widget_name: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorZoom, double_click: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorZoom, double_click: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", double_click: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Environment {
    /* Methods of IAnjuta.Environment */
    get_real_directory(dir: string): string
    override(dirp: string, argvp: string, envp: string): boolean
    /* Virtual methods of IAnjuta.Environment */
    vfunc_get_real_directory(dir: string): string
    vfunc_override(dirp: string, argvp: string, envp: string): boolean
    static name: string
}
export class File {
    /* Methods of IAnjuta.File */
    get_file(): Gio.File
    open(file: Gio.File): void
    /* Virtual methods of IAnjuta.File */
    vfunc_get_file(): Gio.File
    vfunc_open(file: Gio.File): void
    vfunc_opened(): void
    /* Signals of IAnjuta.File */
    connect(sigName: "opened", callback: (($obj: File) => void)): number
    connect_after(sigName: "opened", callback: (($obj: File) => void)): number
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class FileLoader {
    /* Methods of IAnjuta.FileLoader */
    peek_interface(file: Gio.File): string
    /* Virtual methods of IAnjuta.FileLoader */
    vfunc_peek_interface(file: Gio.File): string
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class FileManager {
    /* Methods of IAnjuta.FileManager */
    set_root(root_uri: string): void
    set_selected(file: Gio.File): void
    /* Virtual methods of IAnjuta.FileManager */
    vfunc_section_changed(file: Gio.File): void
    vfunc_set_root(root_uri: string): void
    vfunc_set_selected(file: Gio.File): void
    /* Signals of IAnjuta.FileManager */
    connect(sigName: "section-changed", callback: (($obj: FileManager, err: Gio.File) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: FileManager, err: Gio.File) => void)): number
    emit(sigName: "section-changed", err: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class FileSavable {
    /* Methods of IAnjuta.FileSavable */
    is_conflict(): boolean
    is_dirty(): boolean
    is_read_only(): boolean
    save(): void
    save_as(file: Gio.File): void
    set_dirty(dirty: boolean): void
    /* Methods of IAnjuta.File */
    get_file(): Gio.File
    open(file: Gio.File): void
    /* Virtual methods of IAnjuta.FileSavable */
    vfunc_is_conflict(): boolean
    vfunc_is_dirty(): boolean
    vfunc_is_read_only(): boolean
    vfunc_save(): void
    vfunc_save_as(file: Gio.File): void
    vfunc_saved(file: Gio.File): void
    vfunc_set_dirty(dirty: boolean): void
    vfunc_update_save_ui(): void
    /* Virtual methods of IAnjuta.File */
    vfunc_get_file(): Gio.File
    vfunc_open(file: Gio.File): void
    vfunc_opened(): void
    /* Signals of IAnjuta.FileSavable */
    connect(sigName: "saved", callback: (($obj: FileSavable, file: Gio.File) => void)): number
    connect_after(sigName: "saved", callback: (($obj: FileSavable, file: Gio.File) => void)): number
    emit(sigName: "saved", file: Gio.File): void
    connect(sigName: "update-save-ui", callback: (($obj: FileSavable) => void)): number
    connect_after(sigName: "update-save-ui", callback: (($obj: FileSavable) => void)): number
    emit(sigName: "update-save-ui"): void
    /* Signals of IAnjuta.File */
    connect(sigName: "opened", callback: (($obj: FileSavable) => void)): number
    connect_after(sigName: "opened", callback: (($obj: FileSavable) => void)): number
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Glade {
    /* Methods of IAnjuta.Glade */
    add_association(master: string, slave: string): void
    /* Virtual methods of IAnjuta.Glade */
    vfunc_add_association(master: string, slave: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Help {
    /* Methods of IAnjuta.Help */
    search(query: string): void
    /* Virtual methods of IAnjuta.Help */
    vfunc_search(query: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Indenter {
    /* Methods of IAnjuta.Indenter */
    indent(start: Iterable, end: Iterable): void
    /* Virtual methods of IAnjuta.Indenter */
    vfunc_indent(start: Iterable, end: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Indicable {
    /* Methods of IAnjuta.Indicable */
    clear(): void
    set(begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator): void
    /* Virtual methods of IAnjuta.Indicable */
    vfunc_clear(): void
    vfunc_set(begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Iterable {
    /* Methods of IAnjuta.Iterable */
    assign(src_iter: Iterable): void
    clone(): Iterable
    compare(iter2: Iterable): number
    diff(iter2: Iterable): number
    first(): boolean
    get_length(): number
    get_position(): number
    last(): boolean
    next(): boolean
    previous(): boolean
    set_position(position: number): boolean
    /* Virtual methods of IAnjuta.Iterable */
    vfunc_assign(src_iter: Iterable): void
    vfunc_clone(): Iterable
    vfunc_compare(iter2: Iterable): number
    vfunc_diff(iter2: Iterable): number
    vfunc_first(): boolean
    vfunc_get_length(): number
    vfunc_get_position(): number
    vfunc_last(): boolean
    vfunc_next(): boolean
    vfunc_previous(): boolean
    vfunc_set_position(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class IterableTree {
    /* Methods of IAnjuta.IterableTree */
    children(): boolean
    has_children(): boolean
    parent(): boolean
    /* Methods of IAnjuta.Iterable */
    assign(src_iter: Iterable): void
    clone(): Iterable
    compare(iter2: Iterable): number
    diff(iter2: Iterable): number
    first(): boolean
    get_length(): number
    get_position(): number
    last(): boolean
    next(): boolean
    previous(): boolean
    set_position(position: number): boolean
    /* Virtual methods of IAnjuta.IterableTree */
    vfunc_children(): boolean
    vfunc_has_children(): boolean
    vfunc_parent(): boolean
    /* Virtual methods of IAnjuta.Iterable */
    vfunc_assign(src_iter: Iterable): void
    vfunc_clone(): Iterable
    vfunc_compare(iter2: Iterable): number
    vfunc_diff(iter2: Iterable): number
    vfunc_first(): boolean
    vfunc_get_length(): number
    vfunc_get_position(): number
    vfunc_last(): boolean
    vfunc_next(): boolean
    vfunc_previous(): boolean
    vfunc_set_position(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Language {
    /* Methods of IAnjuta.Language */
    get_from_editor(editor: EditorLanguage): LanguageId
    get_from_mime_type(mime_type: string): LanguageId
    get_from_string(string: string): LanguageId
    get_languages(): number[]
    get_make_target(id: LanguageId): string
    get_name(id: LanguageId): string
    get_name_from_editor(editor: EditorLanguage): string
    /* Virtual methods of IAnjuta.Language */
    vfunc_get_from_editor(editor: EditorLanguage): LanguageId
    vfunc_get_from_mime_type(mime_type: string): LanguageId
    vfunc_get_from_string(string: string): LanguageId
    vfunc_get_languages(): number[]
    vfunc_get_make_target(id: LanguageId): string
    vfunc_get_name(id: LanguageId): string
    vfunc_get_name_from_editor(editor: EditorLanguage): string
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class LanguageProvider {
    /* Methods of IAnjuta.LanguageProvider */
    get_calltip_cache(call_context: string): string[]
    get_calltip_context(iter: Iterable): string
    new_calltip(call_context: string, iter: Iterable): void
    populate_completions(iter: Iterable): Iterable | null
    /* Methods of IAnjuta.Provider */
    activate(iter: Iterable, data?: object | null): void
    get_name(): string
    get_start_iter(): Iterable
    populate(iter: Iterable): void
    /* Virtual methods of IAnjuta.LanguageProvider */
    vfunc_get_calltip_cache(call_context: string): string[]
    vfunc_get_calltip_context(iter: Iterable): string
    vfunc_new_calltip(call_context: string, iter: Iterable): void
    vfunc_populate_completions(iter: Iterable): Iterable | null
    /* Virtual methods of IAnjuta.Provider */
    vfunc_activate(iter: Iterable, data?: object | null): void
    vfunc_get_name(): string
    vfunc_get_start_iter(): Iterable
    vfunc_populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Loader {
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Markable {
    /* Methods of IAnjuta.Markable */
    delete_all_markers(marker: MarkableMarker): void
    is_marker_set(location: number, marker: MarkableMarker): boolean
    location_from_handle(handle: number): number
    mark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    unmark(location: number, marker: MarkableMarker): void
    /* Virtual methods of IAnjuta.Markable */
    vfunc_delete_all_markers(marker: MarkableMarker): void
    vfunc_is_marker_set(location: number, marker: MarkableMarker): boolean
    vfunc_location_from_handle(handle: number): number
    vfunc_mark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    vfunc_marker_clicked(double_click: boolean, location: number): void
    vfunc_unmark(location: number, marker: MarkableMarker): void
    /* Signals of IAnjuta.Markable */
    connect(sigName: "marker-clicked", callback: (($obj: Markable, double_click: boolean, location: number) => void)): number
    connect_after(sigName: "marker-clicked", callback: (($obj: Markable, double_click: boolean, location: number) => void)): number
    emit(sigName: "marker-clicked", double_click: boolean, location: number): void
    static name: string
}
export class MessageManager {
    /* Methods of IAnjuta.MessageManager */
    remove_view(view: MessageView): void
    set_current_view(view: MessageView): void
    set_view_icon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    set_view_icon_from_stock(view: MessageView, icon: string): void
    set_view_title(view: MessageView, title: string): void
    /* Virtual methods of IAnjuta.MessageManager */
    vfunc_remove_view(view: MessageView): void
    vfunc_set_current_view(view: MessageView): void
    vfunc_set_view_icon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    vfunc_set_view_icon_from_stock(view: MessageView, icon: string): void
    vfunc_set_view_title(view: MessageView, title: string): void
    static name: string
}
export class MessageView {
    /* Methods of IAnjuta.MessageView */
    append(type: MessageViewType, summary: string, details: string): void
    buffer_append(text: string): void
    clear(): void
    get_current_message(): string
    select_next(): void
    select_previous(): void
    /* Virtual methods of IAnjuta.MessageView */
    vfunc_append(type: MessageViewType, summary: string, details: string): void
    vfunc_buffer_append(text: string): void
    vfunc_buffer_flushed(line: string): void
    vfunc_clear(): void
    vfunc_get_current_message(): string
    vfunc_message_clicked(message: string): void
    vfunc_select_next(): void
    vfunc_select_previous(): void
    /* Signals of IAnjuta.MessageView */
    connect(sigName: "buffer-flushed", callback: (($obj: MessageView, line: string) => void)): number
    connect_after(sigName: "buffer-flushed", callback: (($obj: MessageView, line: string) => void)): number
    emit(sigName: "buffer-flushed", line: string): void
    connect(sigName: "message-clicked", callback: (($obj: MessageView, message: string) => void)): number
    connect_after(sigName: "message-clicked", callback: (($obj: MessageView, message: string) => void)): number
    emit(sigName: "message-clicked", message: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class PluginFactory {
    static name: string
}
export class Preferences {
    /* Methods of IAnjuta.Preferences */
    merge(prefs: Anjuta.Preferences): void
    unmerge(prefs: Anjuta.Preferences): void
    /* Virtual methods of IAnjuta.Preferences */
    vfunc_merge(prefs: Anjuta.Preferences): void
    vfunc_unmerge(prefs: Anjuta.Preferences): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Print {
    /* Methods of IAnjuta.Print */
    print(): void
    print_preview(): void
    /* Virtual methods of IAnjuta.Print */
    vfunc_print(): void
    vfunc_print_preview(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Project {
    /* Methods of IAnjuta.Project */
    add_node_after(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    add_node_before(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    get_node_info(): Anjuta.ProjectNodeInfo[]
    get_root(): Anjuta.ProjectNode
    is_loaded(): boolean
    load_node(node: Anjuta.ProjectNode): boolean
    remove_node(node: Anjuta.ProjectNode): boolean
    remove_property(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean
    save_node(node: Anjuta.ProjectNode): boolean
    set_property(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null
    /* Virtual methods of IAnjuta.Project */
    vfunc_add_node_after(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    vfunc_add_node_before(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    vfunc_file_changed(node?: object | null): void
    vfunc_get_node_info(): Anjuta.ProjectNodeInfo[]
    vfunc_get_root(): Anjuta.ProjectNode
    vfunc_is_loaded(): boolean
    vfunc_load_node(node: Anjuta.ProjectNode): boolean
    vfunc_node_changed(node: object | null, error: GLib.Error): void
    vfunc_node_loaded(node: object | null, error: GLib.Error): void
    vfunc_node_saved(node: object | null, error: GLib.Error): void
    vfunc_remove_node(node: Anjuta.ProjectNode): boolean
    vfunc_remove_property(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean
    vfunc_save_node(node: Anjuta.ProjectNode): boolean
    vfunc_set_property(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null
    /* Signals of IAnjuta.Project */
    connect(sigName: "file-changed", callback: (($obj: Project, node?: object | null) => void)): number
    connect_after(sigName: "file-changed", callback: (($obj: Project, node?: object | null) => void)): number
    emit(sigName: "file-changed", node?: object | null): void
    connect(sigName: "node-changed", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-changed", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-changed", node: object | null, error: GLib.Error): void
    connect(sigName: "node-loaded", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-loaded", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-loaded", node: object | null, error: GLib.Error): void
    connect(sigName: "node-saved", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-saved", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-saved", node: object | null, error: GLib.Error): void
    static name: string
}
export class ProjectBackend {
    /* Methods of IAnjuta.ProjectBackend */
    new_project(file: Gio.File): Project
    probe(directory: Gio.File): number
    /* Virtual methods of IAnjuta.ProjectBackend */
    vfunc_new_project(file: Gio.File): Project
    vfunc_probe(directory: Gio.File): number
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class ProjectChooser {
    /* Methods of IAnjuta.ProjectChooser */
    get_selected(): Gio.File
    set_project_model(manager: ProjectManager, child_type: Anjuta.ProjectNodeType): boolean
    /* Virtual methods of IAnjuta.ProjectChooser */
    vfunc_changed(): void
    vfunc_get_selected(): Gio.File
    vfunc_set_project_model(manager: ProjectManager, child_type: Anjuta.ProjectNodeType): boolean
    /* Signals of IAnjuta.ProjectChooser */
    connect(sigName: "changed", callback: (($obj: ProjectChooser) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ProjectChooser) => void)): number
    emit(sigName: "changed"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class ProjectManager {
    /* Methods of IAnjuta.ProjectManager */
    add_group(name: string, default_group?: Gio.File | null): Gio.File
    add_source(name: string, default_target?: Gio.File | null): Gio.File
    add_source_quiet(name: string, target: Gio.File): Gio.File
    add_sources(names: string[], default_target?: Gio.File | null): Gio.File[]
    add_target(name: string, default_group?: Gio.File | null): Gio.File
    get_capabilities(): number
    get_children(parent: Gio.File, children_type: number): Gio.File[]
    get_current_project(): Project
    get_elements(element_type: Anjuta.ProjectNodeType): Gio.File[]
    get_packages(): string[]
    get_selected(): Gio.File
    get_target_type(target: Gio.File): Anjuta.ProjectNodeType
    get_targets(target_type: Anjuta.ProjectNodeType): Gio.File[]
    is_open(): boolean
    remove_file(file: Gio.File): boolean
    /* Virtual methods of IAnjuta.ProjectManager */
    vfunc_add_group(name: string, default_group?: Gio.File | null): Gio.File
    vfunc_add_source(name: string, default_target?: Gio.File | null): Gio.File
    vfunc_add_source_quiet(name: string, target: Gio.File): Gio.File
    vfunc_add_sources(names: string[], default_target?: Gio.File | null): Gio.File[]
    vfunc_add_target(name: string, default_group?: Gio.File | null): Gio.File
    vfunc_element_added(element: Gio.File): void
    vfunc_element_removed(element: Gio.File): void
    vfunc_element_selected(element: Gio.File): void
    vfunc_get_capabilities(): number
    vfunc_get_children(parent: Gio.File, children_type: number): Gio.File[]
    vfunc_get_current_project(): Project
    vfunc_get_elements(element_type: Anjuta.ProjectNodeType): Gio.File[]
    vfunc_get_packages(): string[]
    vfunc_get_selected(): Gio.File
    vfunc_get_target_type(target: Gio.File): Anjuta.ProjectNodeType
    vfunc_get_targets(target_type: Anjuta.ProjectNodeType): Gio.File[]
    vfunc_is_open(): boolean
    vfunc_project_loaded(error: GLib.Error): void
    vfunc_remove_file(file: Gio.File): boolean
    /* Signals of IAnjuta.ProjectManager */
    connect(sigName: "element-added", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-added", object: Gio.File): void
    connect(sigName: "element-removed", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-removed", object: Gio.File): void
    connect(sigName: "element-selected", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-selected", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-selected", object: Gio.File): void
    connect(sigName: "project-loaded", callback: (($obj: ProjectManager, object: GLib.Error) => void)): number
    connect_after(sigName: "project-loaded", callback: (($obj: ProjectManager, object: GLib.Error) => void)): number
    emit(sigName: "project-loaded", object: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Provider {
    /* Methods of IAnjuta.Provider */
    activate(iter: Iterable, data?: object | null): void
    get_name(): string
    get_start_iter(): Iterable
    populate(iter: Iterable): void
    /* Virtual methods of IAnjuta.Provider */
    vfunc_activate(iter: Iterable, data?: object | null): void
    vfunc_get_name(): string
    vfunc_get_start_iter(): Iterable
    vfunc_populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class SnippetsManager {
    /* Methods of IAnjuta.SnippetsManager */
    insert(key: string, editing_session: boolean): boolean
    /* Virtual methods of IAnjuta.SnippetsManager */
    vfunc_insert(key: string, editing_session: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Stream {
    /* Methods of IAnjuta.Stream */
    open(stream?: object | null): void
    /* Virtual methods of IAnjuta.Stream */
    vfunc_open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class StreamLoader {
    /* Methods of IAnjuta.StreamLoader */
    peek_interface(stream?: object | null): string
    /* Virtual methods of IAnjuta.StreamLoader */
    vfunc_peek_interface(stream?: object | null): string
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class StreamSavable {
    /* Methods of IAnjuta.StreamSavable */
    save(stream?: object | null): void
    /* Methods of IAnjuta.Stream */
    open(stream?: object | null): void
    /* Virtual methods of IAnjuta.StreamSavable */
    vfunc_save(stream?: object | null): void
    /* Virtual methods of IAnjuta.Stream */
    vfunc_open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Symbol {
    /* Methods of IAnjuta.Symbol */
    get_boolean(field: SymbolField): boolean
    get_icon(): GdkPixbuf.Pixbuf
    get_int(field: SymbolField): number
    get_string(field: SymbolField): string
    get_sym_type(): SymbolType
    /* Virtual methods of IAnjuta.Symbol */
    vfunc_get_boolean(field: SymbolField): boolean
    vfunc_get_icon(): GdkPixbuf.Pixbuf
    vfunc_get_int(field: SymbolField): number
    vfunc_get_string(field: SymbolField): string
    vfunc_get_sym_type(): SymbolType
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class SymbolManager {
    /* Methods of IAnjuta.SymbolManager */
    activate_package(pkg_name: string, pkg_version: string): boolean
    deactivate_all(): void
    deactivate_package(pkg_name: string, pkg_version: string): void
    /* Virtual methods of IAnjuta.SymbolManager */
    vfunc_activate_package(pkg_name: string, pkg_version: string): boolean
    vfunc_deactivate_all(): void
    vfunc_deactivate_package(pkg_name: string, pkg_version: string): void
    vfunc_prj_scan_end(process_id: number): void
    vfunc_sys_scan_end(process_id: number): void
    /* Signals of IAnjuta.SymbolManager */
    connect(sigName: "prj-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    connect_after(sigName: "prj-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    emit(sigName: "prj-scan-end", object: number): void
    connect(sigName: "sys-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    connect_after(sigName: "sys-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    emit(sigName: "sys-scan-end", object: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class SymbolQuery {
    /* Methods of IAnjuta.SymbolQuery */
    cancel(): void
    set_fields(n_fields: number, fields: SymbolField): void
    set_file_scope(filescope_search: SymbolQueryFileScope): void
    set_filters(filters: SymbolType, include_types: boolean): void
    set_group_by(field: SymbolField): void
    set_limit(limit: number): void
    set_mode(mode: SymbolQueryMode): void
    set_offset(offset: number): void
    set_order_by(field: SymbolField): void
    /* Virtual methods of IAnjuta.SymbolQuery */
    vfunc_async_result(result: GObject.Object): void
    vfunc_cancel(): void
    vfunc_set_fields(n_fields: number, fields: SymbolField): void
    vfunc_set_file_scope(filescope_search: SymbolQueryFileScope): void
    vfunc_set_filters(filters: SymbolType, include_types: boolean): void
    vfunc_set_group_by(field: SymbolField): void
    vfunc_set_limit(limit: number): void
    vfunc_set_mode(mode: SymbolQueryMode): void
    vfunc_set_offset(offset: number): void
    vfunc_set_order_by(field: SymbolField): void
    /* Signals of IAnjuta.SymbolQuery */
    connect(sigName: "async-result", callback: (($obj: SymbolQuery, object: GObject.Object) => void)): number
    connect_after(sigName: "async-result", callback: (($obj: SymbolQuery, object: GObject.Object) => void)): number
    emit(sigName: "async-result", object: GObject.Object): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Terminal {
    /* Methods of IAnjuta.Terminal */
    execute_command(directory: string, command: string, environment: string[]): number
    /* Virtual methods of IAnjuta.Terminal */
    vfunc_child_exited(pid: number, status: number): void
    vfunc_execute_command(directory: string, command: string, environment: string[]): number
    /* Signals of IAnjuta.Terminal */
    connect(sigName: "child-exited", callback: (($obj: Terminal, object: number, p0: number) => void)): number
    connect_after(sigName: "child-exited", callback: (($obj: Terminal, object: number, p0: number) => void)): number
    emit(sigName: "child-exited", object: number, p0: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Todo {
    /* Methods of IAnjuta.Todo */
    load(file: Gio.File): void
    /* Virtual methods of IAnjuta.Todo */
    vfunc_load(file: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Vcs {
    /* Methods of IAnjuta.Vcs */
    add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    checkout(repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /* Virtual methods of IAnjuta.Vcs */
    vfunc_add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    vfunc_checkout(repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    vfunc_remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    vfunc_status_changed(): void
    /* Signals of IAnjuta.Vcs */
    connect(sigName: "status-changed", callback: (($obj: Vcs) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Vcs) => void)): number
    emit(sigName: "status-changed"): void
    static name: string
}
export class Wizard {
    /* Methods of IAnjuta.Wizard */
    activate(): void
    /* Virtual methods of IAnjuta.Wizard */
    vfunc_activate(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export abstract class BuildableIface {
    /* Fields of IAnjuta.BuildableIface */
    g_iface: GObject.TypeInterface
    build: (obj: Buildable, uri: string) => void
    clean: (obj: Buildable, uri: string) => void
    configure: (obj: Buildable, uri: string) => void
    execute: (obj: Buildable, uri: string) => void
    generate: (obj: Buildable, uri: string) => void
    get_command: (obj: Buildable, command_id: BuildableCommand) => string
    install: (obj: Buildable, uri: string) => void
    reset_commands: (obj: Buildable) => void
    set_command: (obj: Buildable, command_id: BuildableCommand, command: string) => void
    static name: string
}
export abstract class BuilderIface {
    /* Fields of IAnjuta.BuilderIface */
    g_iface: GObject.TypeInterface
    cancel: (obj: Builder, handle: BuilderHandle) => void
    get_uri_configuration: (obj: Builder, uri: string) => string
    list_configuration: (obj: Builder) => string[]
    static name: string
}
export abstract class DebugManagerIface {
    /* Fields of IAnjuta.DebugManagerIface */
    g_iface: GObject.TypeInterface
    breakpoint_changed: (obj: DebugManager, breakpoint: DebuggerBreakpointItem) => void
    debugger_started: (obj: DebugManager) => void
    debugger_stopped: (obj: DebugManager, err: GLib.Error) => void
    frame_changed: (obj: DebugManager, frame: number, thread: number) => void
    location_changed: (obj: DebugManager, address: number, uri: string, line: number) => void
    program_exited: (obj: DebugManager) => void
    program_loaded: (obj: DebugManager) => void
    program_moved: (obj: DebugManager, pid: number, tid: number, address: number, file: string, line: number) => void
    program_running: (obj: DebugManager) => void
    program_started: (obj: DebugManager) => void
    program_stopped: (obj: DebugManager) => void
    program_unloaded: (obj: DebugManager) => void
    sharedlib_event: (obj: DebugManager) => void
    signal_received: (obj: DebugManager, name: string, description: string) => void
    quit: (obj: DebugManager) => boolean
    start: (obj: DebugManager, uri: string) => boolean
    start_remote: (obj: DebugManager, server: string, uri: string) => boolean
    static name: string
}
export abstract class DebuggerBreakpointIface {
    /* Fields of IAnjuta.DebuggerBreakpointIface */
    g_iface: DebuggerIface
    implement_breakpoint: (obj: DebuggerBreakpoint) => number
    static name: string
}
export class DebuggerBreakpointItem {
    /* Fields of IAnjuta.DebuggerBreakpointItem */
    type: number
    id: number
    file: string
    line: number
    function_: string
    address: number
    enable: boolean
    ignore: number
    times: number
    condition: string
    temporary: boolean
    pending: boolean
    static name: string
}
export class DebuggerFrame {
    /* Fields of IAnjuta.DebuggerFrame */
    thread: number
    level: number
    args: string
    file: string
    line: number
    function_: string
    library: string
    address: number
    static name: string
}
export abstract class DebuggerIface {
    /* Fields of IAnjuta.DebuggerIface */
    g_iface: GObject.TypeInterface
    debugger_ready: (obj: Debugger, state: DebuggerState) => void
    debugger_started: (obj: Debugger) => void
    debugger_stopped: (obj: Debugger, err: GLib.Error) => void
    frame_changed: (obj: Debugger, frame: number, thread: number) => void
    program_exited: (obj: Debugger) => void
    program_loaded: (obj: Debugger) => void
    program_moved: (obj: Debugger, pid: number, tid: number, address: number, file: string, line: number) => void
    program_running: (obj: Debugger) => void
    program_stopped: (obj: Debugger) => void
    sharedlib_event: (obj: Debugger) => void
    signal_received: (obj: Debugger, name: string, description: string) => void
    abort: (obj: Debugger) => boolean
    attach: (obj: Debugger, pid: number, source_search_directories: string[]) => boolean
    connect: (obj: Debugger, server: string, args: string, terminal: boolean, stop: boolean) => boolean
    disable_log: (obj: Debugger) => void
    enable_log: (obj: Debugger, log: MessageView) => void
    exit: (obj: Debugger) => boolean
    get_state: (obj: Debugger) => DebuggerState
    handle_signal: (obj: Debugger, name: string, stop: boolean, print: boolean, ignore: boolean) => boolean
    interrupt: (obj: Debugger) => boolean
    load: (obj: Debugger, file: string, mime_type: string, source_search_directories: string[]) => boolean
    quit: (obj: Debugger) => boolean
    run: (obj: Debugger) => boolean
    run_from: (obj: Debugger, file: string, line: number) => boolean
    run_to: (obj: Debugger, file: string, line: number) => boolean
    send_command: (obj: Debugger, command: string) => boolean
    set_environment: (obj: Debugger, env: string) => boolean
    set_frame: (obj: Debugger, frame: number) => boolean
    set_thread: (obj: Debugger, thread: number) => boolean
    set_working_directory: (obj: Debugger, dir: string) => boolean
    start: (obj: Debugger, args: string, terminal: boolean, stop: boolean) => boolean
    step_in: (obj: Debugger) => boolean
    step_out: (obj: Debugger) => boolean
    step_over: (obj: Debugger) => boolean
    unload: (obj: Debugger) => boolean
    static name: string
}
export class DebuggerInstructionALine {
    /* Fields of IAnjuta.DebuggerInstructionALine */
    address: number
    label: string
    text: string
    static name: string
}
export class DebuggerInstructionDisassembly {
    /* Fields of IAnjuta.DebuggerInstructionDisassembly */
    size: number
    data: DebuggerInstructionALine[]
    static name: string
}
export abstract class DebuggerInstructionIface {
    /* Fields of IAnjuta.DebuggerInstructionIface */
    g_iface: DebuggerIface
    run_from_address: (obj: DebuggerInstruction, address: number) => boolean
    run_to_address: (obj: DebuggerInstruction, address: number) => boolean
    step_in_instruction: (obj: DebuggerInstruction) => boolean
    step_over_instruction: (obj: DebuggerInstruction) => boolean
    static name: string
}
export class DebuggerMemoryBlock {
    /* Fields of IAnjuta.DebuggerMemoryBlock */
    address: number
    length: number
    data: string
    static name: string
}
export abstract class DebuggerMemoryIface {
    /* Fields of IAnjuta.DebuggerMemoryIface */
    g_iface: DebuggerIface
    static name: string
}
export class DebuggerRegisterData {
    /* Fields of IAnjuta.DebuggerRegisterData */
    num: number
    name: string
    value: string
    static name: string
}
export abstract class DebuggerRegisterIface {
    /* Fields of IAnjuta.DebuggerRegisterIface */
    g_iface: DebuggerIface
    write_register: (obj: DebuggerRegister, value: DebuggerRegisterData) => boolean
    static name: string
}
export abstract class DebuggerVariableIface {
    /* Fields of IAnjuta.DebuggerVariableIface */
    g_iface: DebuggerIface
    assign: (obj: DebuggerVariable, name: string, value: string) => boolean
    destroy: (obj: DebuggerVariable, name: string) => boolean
    static name: string
}
export class DebuggerVariableObject {
    /* Fields of IAnjuta.DebuggerVariableObject */
    name: string
    expression: string
    type: string
    value: string
    changed: boolean
    exited: boolean
    deleted: boolean
    children: number
    has_more: boolean
    static name: string
}
export abstract class DocumentIface {
    /* Fields of IAnjuta.DocumentIface */
    g_iface: GObject.TypeInterface
    update_ui: (obj: Document) => void
    begin_undo_action: (obj: Document) => void
    can_redo: (obj: Document) => boolean
    can_undo: (obj: Document) => boolean
    clear: (obj: Document) => void
    copy: (obj: Document) => void
    cut: (obj: Document) => void
    end_undo_action: (obj: Document) => void
    get_filename: (obj: Document) => string
    grab_focus: (obj: Document) => void
    paste: (obj: Document) => void
    redo: (obj: Document) => void
    undo: (obj: Document) => void
    static name: string
}
export abstract class DocumentManagerIface {
    /* Fields of IAnjuta.DocumentManagerIface */
    g_iface: GObject.TypeInterface
    document_added: (obj: DocumentManager, doc: Document) => void
    document_removed: (obj: DocumentManager, doc: Document) => void
    add_bookmark: (obj: DocumentManager, file: Gio.File, line: number) => void
    add_buffer: (obj: DocumentManager, name: string, content: string) => Editor
    add_document: (obj: DocumentManager, document: Document) => void
    find_document_with_file: (obj: DocumentManager, file: Gio.File) => Document
    get_current_document: (obj: DocumentManager) => Document
    get_doc_widgets: (obj: DocumentManager) => Gtk.Widget[]
    get_file: (obj: DocumentManager, filename: string) => Gio.File
    goto_file_line: (obj: DocumentManager, file: Gio.File, lineno: number) => Editor
    goto_file_line_mark: (obj: DocumentManager, file: Gio.File, lineno: number, mark: boolean) => Editor
    remove_document: (obj: DocumentManager, document: Document, save_before: boolean) => boolean
    set_current_document: (obj: DocumentManager, document: Document) => void
    static name: string
}
export abstract class EditorAssistIface {
    /* Fields of IAnjuta.EditorAssistIface */
    g_iface: EditorIface
    cancelled: (obj: EditorAssist) => void
    add: (obj: EditorAssist, provider: Provider) => void
    invoke: (obj: EditorAssist, provider: Provider) => void
    proposals: (obj: EditorAssist, provider: Provider, proposals: EditorAssistProposal[], pre_word: string, finished: boolean) => void
    remove: (obj: EditorAssist, provider: Provider) => void
    static name: string
}
export class EditorAssistProposal {
    /* Fields of IAnjuta.EditorAssistProposal */
    label: string
    markup: string
    info: string
    text: string
    icon: GdkPixbuf.Pixbuf
    data: object
    static name: string
}
export abstract class EditorCellIface {
    /* Fields of IAnjuta.EditorCellIface */
    g_iface: GObject.TypeInterface
    get_attribute: (obj: EditorCell) => EditorAttribute
    get_char: (obj: EditorCell, char_index: number) => number
    get_character: (obj: EditorCell) => string
    get_length: (obj: EditorCell) => number
    static name: string
}
export abstract class EditorCellStyleIface {
    /* Fields of IAnjuta.EditorCellStyleIface */
    g_iface: EditorCellIface
    get_background_color: (obj: EditorCellStyle) => string
    get_color: (obj: EditorCellStyle) => string
    get_font_description: (obj: EditorCellStyle) => string
    static name: string
}
export abstract class EditorCommentIface {
    /* Fields of IAnjuta.EditorCommentIface */
    g_iface: EditorIface
    block: (obj: EditorComment) => void
    box: (obj: EditorComment) => void
    stream: (obj: EditorComment) => void
    static name: string
}
export abstract class EditorConvertIface {
    /* Fields of IAnjuta.EditorConvertIface */
    g_iface: EditorIface
    to_lower: (obj: EditorConvert, start_position: Iterable, end_position: Iterable) => void
    to_upper: (obj: EditorConvert, start_position: Iterable, end_position: Iterable) => void
    static name: string
}
export abstract class EditorFactoryIface {
    /* Fields of IAnjuta.EditorFactoryIface */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class EditorFoldsIface {
    /* Fields of IAnjuta.EditorFoldsIface */
    g_iface: EditorIface
    close_all: (obj: EditorFolds) => void
    open_all: (obj: EditorFolds) => void
    toggle_current: (obj: EditorFolds) => void
    static name: string
}
export abstract class EditorGladeSignalIface {
    /* Fields of IAnjuta.EditorGladeSignalIface */
    g_iface: EditorIface
    drop: (obj: EditorGladeSignal, iterator: Iterable, signal_data: string) => void
    drop_possible: (obj: EditorGladeSignal, iterator: Iterable) => boolean
    static name: string
}
export abstract class EditorGotoIface {
    /* Fields of IAnjuta.EditorGotoIface */
    g_iface: EditorIface
    end_block: (obj: EditorGoto) => void
    matching_brace: (obj: EditorGoto) => void
    start_block: (obj: EditorGoto) => void
    static name: string
}
export abstract class EditorHoverIface {
    /* Fields of IAnjuta.EditorHoverIface */
    g_iface: EditorIface
    hover_leave: (obj: EditorHover, position: Iterable) => void
    hover_over: (obj: EditorHover, position: Iterable) => void
    display: (obj: EditorHover, position: Iterable, info: string) => void
    static name: string
}
export abstract class EditorIface {
    /* Fields of IAnjuta.EditorIface */
    g_iface: GObject.TypeInterface
    backspace: (obj: Editor) => void
    changed: (obj: Editor, position: Iterable, added: boolean, length: number, lines: number, text: string) => void
    char_added: (obj: Editor, position: Iterable, ch: number) => void
    code_changed: (obj: Editor, position: Iterable, code: string) => void
    cursor_moved: (obj: Editor) => void
    glade_callback_add: (obj: Editor, widget_typename: string, signal_name: string, handler_name: string, object: string, swap: boolean, after: boolean, filename: string) => void
    glade_member_add: (obj: Editor, widget_typename: string, widget_name: string, filename: string) => void
    line_marks_gutter_clicked: (obj: Editor, location: number) => void
    append: (obj: Editor, text: string, length: number) => void
    erase: (obj: Editor, position_start: Iterable, position_end: Iterable) => void
    erase_all: (obj: Editor) => void
    get_column: (obj: Editor) => number
    get_current_word: (obj: Editor) => string
    get_end_position: (obj: Editor) => Iterable
    get_indentsize: (obj: Editor) => number
    get_length: (obj: Editor) => number
    get_line_begin_position: (obj: Editor, line: number) => Iterable
    get_line_end_position: (obj: Editor, line: number) => Iterable
    get_line_from_position: (obj: Editor, position: Iterable) => number
    get_lineno: (obj: Editor) => number
    get_offset: (obj: Editor) => number
    get_overwrite: (obj: Editor) => boolean
    get_position: (obj: Editor) => Iterable
    get_start_position: (obj: Editor) => Iterable
    get_tabsize: (obj: Editor) => number
    get_text: (obj: Editor, begin: Iterable, end: Iterable) => string
    get_text_all: (obj: Editor) => string
    get_use_spaces: (obj: Editor) => boolean
    goto_end: (obj: Editor) => void
    goto_line: (obj: Editor, lineno: number) => void
    goto_position: (obj: Editor, position: Iterable) => void
    goto_start: (obj: Editor) => void
    insert: (obj: Editor, position: Iterable, text: string, length: number) => void
    set_auto_indent: (obj: Editor, auto_indent: boolean) => void
    set_indentsize: (obj: Editor, indentsize: number) => void
    set_popup_menu: (obj: Editor, menu: Gtk.Widget) => void
    set_tabsize: (obj: Editor, tabsize: number) => void
    set_use_spaces: (obj: Editor, use_spaces: boolean) => void
    static name: string
}
export abstract class EditorLanguageIface {
    /* Fields of IAnjuta.EditorLanguageIface */
    g_iface: EditorIface
    language_changed: (obj: EditorLanguage, language: string) => void
    get_language: (obj: EditorLanguage) => string
    get_language_name: (obj: EditorLanguage, language: string) => string
    get_supported_languages: (obj: EditorLanguage) => string[]
    set_language: (obj: EditorLanguage, language: string) => void
    static name: string
}
export abstract class EditorLineModeIface {
    /* Fields of IAnjuta.EditorLineModeIface */
    g_iface: EditorIface
    convert: (obj: EditorLineMode, mode: EditorLineModeType) => void
    fix: (obj: EditorLineMode) => void
    get: (obj: EditorLineMode) => EditorLineModeType
    set: (obj: EditorLineMode, mode: EditorLineModeType) => void
    static name: string
}
export abstract class EditorSearchIface {
    /* Fields of IAnjuta.EditorSearchIface */
    g_iface: EditorIface
    backward: (obj: EditorSearch, search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    forward: (obj: EditorSearch, search: string, case_sensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* result_start */ EditorCell, /* result_end */ EditorCell ]
    static name: string
}
export abstract class EditorSelectionIface {
    /* Fields of IAnjuta.EditorSelectionIface */
    g_iface: EditorIface
    get: (obj: EditorSelection) => string
    has_selection: (obj: EditorSelection) => boolean
    replace: (obj: EditorSelection, text: string, length: number) => void
    select_all: (obj: EditorSelection) => void
    select_block: (obj: EditorSelection) => void
    select_function: (obj: EditorSelection) => void
    set: (obj: EditorSelection, start: Iterable, end: Iterable, scroll: boolean) => void
    static name: string
}
export abstract class EditorTipIface {
    /* Fields of IAnjuta.EditorTipIface */
    g_iface: EditorIface
    cancel: (obj: EditorTip) => void
    show: (obj: EditorTip, tips: string[], position: Iterable) => void
    visible: (obj: EditorTip) => boolean
    static name: string
}
export abstract class EditorViewIface {
    /* Fields of IAnjuta.EditorViewIface */
    g_iface: EditorIface
    create: (obj: EditorView) => void
    get_count: (obj: EditorView) => number
    remove_current: (obj: EditorView) => void
    static name: string
}
export abstract class EditorZoomIface {
    /* Fields of IAnjuta.EditorZoomIface */
    g_iface: EditorIface
    in_: (obj: EditorZoom) => void
    out: (obj: EditorZoom) => void
    static name: string
}
export abstract class EnvironmentIface {
    /* Fields of IAnjuta.EnvironmentIface */
    g_iface: GObject.TypeInterface
    get_real_directory: (obj: Environment, dir: string) => string
    override: (obj: Environment, dirp: string, argvp: string, envp: string) => boolean
    static name: string
}
export abstract class FileIface {
    /* Fields of IAnjuta.FileIface */
    g_iface: GObject.TypeInterface
    opened: (obj: File) => void
    get_file: (obj: File) => Gio.File
    open: (obj: File, file: Gio.File) => void
    static name: string
}
export abstract class FileLoaderIface {
    /* Fields of IAnjuta.FileLoaderIface */
    g_iface: LoaderIface
    peek_interface: (obj: FileLoader, file: Gio.File) => string
    static name: string
}
export abstract class FileManagerIface {
    /* Fields of IAnjuta.FileManagerIface */
    g_iface: GObject.TypeInterface
    section_changed: (obj: FileManager, file: Gio.File) => void
    set_root: (obj: FileManager, root_uri: string) => void
    set_selected: (obj: FileManager, file: Gio.File) => void
    static name: string
}
export abstract class FileSavableIface {
    /* Fields of IAnjuta.FileSavableIface */
    g_iface: FileIface
    saved: (obj: FileSavable, file: Gio.File) => void
    update_save_ui: (obj: FileSavable) => void
    is_conflict: (obj: FileSavable) => boolean
    is_dirty: (obj: FileSavable) => boolean
    is_read_only: (obj: FileSavable) => boolean
    save: (obj: FileSavable) => void
    save_as: (obj: FileSavable, file: Gio.File) => void
    set_dirty: (obj: FileSavable, dirty: boolean) => void
    static name: string
}
export abstract class GladeIface {
    /* Fields of IAnjuta.GladeIface */
    g_iface: GObject.TypeInterface
    add_association: (obj: Glade, master: string, slave: string) => void
    static name: string
}
export abstract class HelpIface {
    /* Fields of IAnjuta.HelpIface */
    g_iface: GObject.TypeInterface
    search: (obj: Help, query: string) => void
    static name: string
}
export abstract class IndenterIface {
    /* Fields of IAnjuta.IndenterIface */
    g_iface: GObject.TypeInterface
    indent: (obj: Indenter, start: Iterable, end: Iterable) => void
    static name: string
}
export abstract class IndicableIface {
    /* Fields of IAnjuta.IndicableIface */
    g_iface: GObject.TypeInterface
    clear: (obj: Indicable) => void
    set: (obj: Indicable, begin_location: Iterable, end_location: Iterable, indicator: IndicableIndicator) => void
    static name: string
}
export abstract class IterableIface {
    /* Fields of IAnjuta.IterableIface */
    g_iface: GObject.TypeInterface
    assign: (obj: Iterable, src_iter: Iterable) => void
    clone: (obj: Iterable) => Iterable
    compare: (obj: Iterable, iter2: Iterable) => number
    diff: (obj: Iterable, iter2: Iterable) => number
    first: (obj: Iterable) => boolean
    get_length: (obj: Iterable) => number
    get_position: (obj: Iterable) => number
    last: (obj: Iterable) => boolean
    next: (obj: Iterable) => boolean
    previous: (obj: Iterable) => boolean
    set_position: (obj: Iterable, position: number) => boolean
    static name: string
}
export abstract class IterableTreeIface {
    /* Fields of IAnjuta.IterableTreeIface */
    g_iface: IterableIface
    children: (obj: IterableTree) => boolean
    has_children: (obj: IterableTree) => boolean
    parent: (obj: IterableTree) => boolean
    static name: string
}
export abstract class LanguageIface {
    /* Fields of IAnjuta.LanguageIface */
    g_iface: GObject.TypeInterface
    get_from_editor: (obj: Language, editor: EditorLanguage) => LanguageId
    get_from_mime_type: (obj: Language, mime_type: string) => LanguageId
    get_from_string: (obj: Language, string: string) => LanguageId
    get_languages: (obj: Language) => number[]
    get_make_target: (obj: Language, id: LanguageId) => string
    get_name: (obj: Language, id: LanguageId) => string
    get_name_from_editor: (obj: Language, editor: EditorLanguage) => string
    static name: string
}
export abstract class LanguageProviderIface {
    /* Fields of IAnjuta.LanguageProviderIface */
    g_iface: ProviderIface
    get_calltip_cache: (obj: LanguageProvider, call_context: string) => string[]
    get_calltip_context: (obj: LanguageProvider, iter: Iterable) => string
    new_calltip: (obj: LanguageProvider, call_context: string, iter: Iterable) => void
    populate_completions: (obj: LanguageProvider, iter: Iterable) => Iterable | null
    static name: string
}
export abstract class LoaderIface {
    /* Fields of IAnjuta.LoaderIface */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class MarkableIface {
    /* Fields of IAnjuta.MarkableIface */
    g_iface: GObject.TypeInterface
    marker_clicked: (obj: Markable, double_click: boolean, location: number) => void
    delete_all_markers: (obj: Markable, marker: MarkableMarker) => void
    is_marker_set: (obj: Markable, location: number, marker: MarkableMarker) => boolean
    location_from_handle: (obj: Markable, handle: number) => number
    mark: (obj: Markable, location: number, marker: MarkableMarker, tooltip?: string | null) => number
    unmark: (obj: Markable, location: number, marker: MarkableMarker) => void
    static name: string
}
export abstract class MessageManagerIface {
    /* Fields of IAnjuta.MessageManagerIface */
    g_iface: GObject.TypeInterface
    remove_view: (obj: MessageManager, view: MessageView) => void
    set_current_view: (obj: MessageManager, view: MessageView) => void
    set_view_icon: (obj: MessageManager, view: MessageView, icon: GdkPixbuf.PixbufAnimation) => void
    set_view_icon_from_stock: (obj: MessageManager, view: MessageView, icon: string) => void
    set_view_title: (obj: MessageManager, view: MessageView, title: string) => void
    static name: string
}
export abstract class MessageViewIface {
    /* Fields of IAnjuta.MessageViewIface */
    g_iface: GObject.TypeInterface
    buffer_flushed: (obj: MessageView, line: string) => void
    message_clicked: (obj: MessageView, message: string) => void
    append: (obj: MessageView, type: MessageViewType, summary: string, details: string) => void
    buffer_append: (obj: MessageView, text: string) => void
    clear: (obj: MessageView) => void
    get_current_message: (obj: MessageView) => string
    select_next: (obj: MessageView) => void
    select_previous: (obj: MessageView) => void
    static name: string
}
export abstract class PluginFactoryIface {
    /* Fields of IAnjuta.PluginFactoryIface */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class PreferencesIface {
    /* Fields of IAnjuta.PreferencesIface */
    g_iface: GObject.TypeInterface
    merge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    unmerge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    static name: string
}
export abstract class PrintIface {
    /* Fields of IAnjuta.PrintIface */
    g_iface: GObject.TypeInterface
    print: (obj: Print) => void
    print_preview: (obj: Print) => void
    static name: string
}
export abstract class ProjectBackendIface {
    /* Fields of IAnjuta.ProjectBackendIface */
    g_iface: GObject.TypeInterface
    new_project: (obj: ProjectBackend, file: Gio.File) => Project
    probe: (obj: ProjectBackend, directory: Gio.File) => number
    static name: string
}
export abstract class ProjectChooserIface {
    /* Fields of IAnjuta.ProjectChooserIface */
    g_iface: GObject.TypeInterface
    changed: (obj: ProjectChooser) => void
    get_selected: (obj: ProjectChooser) => Gio.File
    set_project_model: (obj: ProjectChooser, manager: ProjectManager, child_type: Anjuta.ProjectNodeType) => boolean
    static name: string
}
export abstract class ProjectIface {
    /* Fields of IAnjuta.ProjectIface */
    g_iface: GObject.TypeInterface
    file_changed: (obj: Project, node?: object | null) => void
    node_changed: (obj: Project, node: object | null, error: GLib.Error) => void
    node_loaded: (obj: Project, node: object | null, error: GLib.Error) => void
    node_saved: (obj: Project, node: object | null, error: GLib.Error) => void
    add_node_after: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    add_node_before: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    get_node_info: (obj: Project) => Anjuta.ProjectNodeInfo[]
    get_root: (obj: Project) => Anjuta.ProjectNode
    is_loaded: (obj: Project) => boolean
    load_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    remove_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    remove_property: (obj: Project, node: Anjuta.ProjectNode, id: string, name?: string | null) => boolean
    save_node: (obj: Project, node: Anjuta.ProjectNode) => boolean
    set_property: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null, value: string) => Anjuta.ProjectProperty | null
    static name: string
}
export abstract class ProjectManagerIface {
    /* Fields of IAnjuta.ProjectManagerIface */
    g_iface: GObject.TypeInterface
    element_added: (obj: ProjectManager, element: Gio.File) => void
    element_removed: (obj: ProjectManager, element: Gio.File) => void
    element_selected: (obj: ProjectManager, element: Gio.File) => void
    project_loaded: (obj: ProjectManager, error: GLib.Error) => void
    add_group: (obj: ProjectManager, name: string, default_group?: Gio.File | null) => Gio.File
    add_source: (obj: ProjectManager, name: string, default_target?: Gio.File | null) => Gio.File
    add_source_quiet: (obj: ProjectManager, name: string, target: Gio.File) => Gio.File
    add_sources: (obj: ProjectManager, names: string[], default_target?: Gio.File | null) => Gio.File[]
    add_target: (obj: ProjectManager, name: string, default_group?: Gio.File | null) => Gio.File
    get_capabilities: (obj: ProjectManager) => number
    get_children: (obj: ProjectManager, parent: Gio.File, children_type: number) => Gio.File[]
    get_current_project: (obj: ProjectManager) => Project
    get_elements: (obj: ProjectManager, element_type: Anjuta.ProjectNodeType) => Gio.File[]
    get_packages: (obj: ProjectManager) => string[]
    get_selected: (obj: ProjectManager) => Gio.File
    get_target_type: (obj: ProjectManager, target: Gio.File) => Anjuta.ProjectNodeType
    get_targets: (obj: ProjectManager, target_type: Anjuta.ProjectNodeType) => Gio.File[]
    is_open: (obj: ProjectManager) => boolean
    remove_file: (obj: ProjectManager, file: Gio.File) => boolean
    static name: string
}
export abstract class ProviderIface {
    /* Fields of IAnjuta.ProviderIface */
    g_iface: GObject.TypeInterface
    activate: (obj: Provider, iter: Iterable, data?: object | null) => void
    get_name: (obj: Provider) => string
    get_start_iter: (obj: Provider) => Iterable
    populate: (obj: Provider, iter: Iterable) => void
    static name: string
}
export abstract class SnippetsManagerIface {
    /* Fields of IAnjuta.SnippetsManagerIface */
    g_iface: GObject.TypeInterface
    insert: (obj: SnippetsManager, key: string, editing_session: boolean) => boolean
    static name: string
}
export abstract class StreamIface {
    /* Fields of IAnjuta.StreamIface */
    g_iface: GObject.TypeInterface
    open: (obj: Stream, stream?: object | null) => void
    static name: string
}
export abstract class StreamLoaderIface {
    /* Fields of IAnjuta.StreamLoaderIface */
    g_iface: LoaderIface
    peek_interface: (obj: StreamLoader, stream?: object | null) => string
    static name: string
}
export abstract class StreamSavableIface {
    /* Fields of IAnjuta.StreamSavableIface */
    g_iface: StreamIface
    save: (obj: StreamSavable, stream?: object | null) => void
    static name: string
}
export abstract class SymbolIface {
    /* Fields of IAnjuta.SymbolIface */
    g_iface: GObject.TypeInterface
    get_boolean: (obj: Symbol, field: SymbolField) => boolean
    get_icon: (obj: Symbol) => GdkPixbuf.Pixbuf
    get_int: (obj: Symbol, field: SymbolField) => number
    get_string: (obj: Symbol, field: SymbolField) => string
    get_sym_type: (obj: Symbol) => SymbolType
    static name: string
}
export abstract class SymbolManagerIface {
    /* Fields of IAnjuta.SymbolManagerIface */
    g_iface: GObject.TypeInterface
    prj_scan_end: (obj: SymbolManager, process_id: number) => void
    sys_scan_end: (obj: SymbolManager, process_id: number) => void
    activate_package: (obj: SymbolManager, pkg_name: string, pkg_version: string) => boolean
    deactivate_all: (obj: SymbolManager) => void
    deactivate_package: (obj: SymbolManager, pkg_name: string, pkg_version: string) => void
    static name: string
}
export abstract class SymbolQueryIface {
    /* Fields of IAnjuta.SymbolQueryIface */
    g_iface: GObject.TypeInterface
    async_result: (obj: SymbolQuery, result: GObject.Object) => void
    cancel: (obj: SymbolQuery) => void
    set_fields: (obj: SymbolQuery, n_fields: number, fields: SymbolField) => void
    set_file_scope: (obj: SymbolQuery, filescope_search: SymbolQueryFileScope) => void
    set_filters: (obj: SymbolQuery, filters: SymbolType, include_types: boolean) => void
    set_group_by: (obj: SymbolQuery, field: SymbolField) => void
    set_limit: (obj: SymbolQuery, limit: number) => void
    set_mode: (obj: SymbolQuery, mode: SymbolQueryMode) => void
    set_offset: (obj: SymbolQuery, offset: number) => void
    set_order_by: (obj: SymbolQuery, field: SymbolField) => void
    static name: string
}
export abstract class TerminalIface {
    /* Fields of IAnjuta.TerminalIface */
    g_iface: GObject.TypeInterface
    child_exited: (obj: Terminal, pid: number, status: number) => void
    execute_command: (obj: Terminal, directory: string, command: string, environment: string[]) => number
    static name: string
}
export abstract class TodoIface {
    /* Fields of IAnjuta.TodoIface */
    g_iface: GObject.TypeInterface
    load: (obj: Todo, file: Gio.File) => void
    static name: string
}
export abstract class VcsIface {
    /* Fields of IAnjuta.VcsIface */
    g_iface: GObject.TypeInterface
    status_changed: (obj: Vcs) => void
    add: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    checkout: (obj: Vcs, repository_location: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify) => void
    remove: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    static name: string
}
export abstract class WizardIface {
    /* Fields of IAnjuta.WizardIface */
    g_iface: GObject.TypeInterface
    activate: (obj: Wizard) => void
    static name: string
}
export type BuilderHandle = object
export type LanguageId = number