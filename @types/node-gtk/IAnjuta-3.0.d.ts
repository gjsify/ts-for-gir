/**
 * IAnjuta-3.0
 */

import "node"
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';
import type { Anjuta } from './Anjuta-3.0';
import type { Gdl } from './Gdl-3';

export declare namespace IAnjuta {

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
export function buildableErrorQuark(): GLib.Quark
export function builderErrorQuark(): GLib.Quark
export function debugManagerErrorQuark(): GLib.Quark
export function debuggerBreakpointErrorQuark(): GLib.Quark
export function debuggerErrorQuark(): GLib.Quark
export function debuggerInstructionErrorQuark(): GLib.Quark
export function debuggerMemoryErrorQuark(): GLib.Quark
export function debuggerRegisterErrorQuark(): GLib.Quark
export function debuggerVariableErrorQuark(): GLib.Quark
export function documentErrorQuark(): GLib.Quark
export function documentManagerErrorQuark(): GLib.Quark
export function editorAssistErrorQuark(): GLib.Quark
export function editorCellErrorQuark(): GLib.Quark
export function editorCellStyleErrorQuark(): GLib.Quark
export function editorCommentErrorQuark(): GLib.Quark
export function editorConvertErrorQuark(): GLib.Quark
export function editorErrorQuark(): GLib.Quark
export function editorFactoryErrorQuark(): GLib.Quark
export function editorFoldsErrorQuark(): GLib.Quark
export function editorGladeSignalErrorQuark(): GLib.Quark
export function editorGotoErrorQuark(): GLib.Quark
export function editorHoverErrorQuark(): GLib.Quark
export function editorLanguageErrorQuark(): GLib.Quark
export function editorLineModeErrorQuark(): GLib.Quark
export function editorSearchErrorQuark(): GLib.Quark
export function editorSelectionErrorQuark(): GLib.Quark
export function editorTipErrorQuark(): GLib.Quark
export function editorViewErrorQuark(): GLib.Quark
export function editorZoomErrorQuark(): GLib.Quark
export function environmentErrorQuark(): GLib.Quark
export function fileErrorQuark(): GLib.Quark
export function fileLoaderErrorQuark(): GLib.Quark
export function fileManagerErrorQuark(): GLib.Quark
export function fileSavableErrorQuark(): GLib.Quark
export function gladeErrorQuark(): GLib.Quark
export function helpErrorQuark(): GLib.Quark
export function indenterErrorQuark(): GLib.Quark
export function indicableErrorQuark(): GLib.Quark
export function iterableErrorQuark(): GLib.Quark
export function iterableTreeErrorQuark(): GLib.Quark
export function languageErrorQuark(): GLib.Quark
export function languageProviderErrorQuark(): GLib.Quark
export function loaderErrorQuark(): GLib.Quark
export function markableErrorQuark(): GLib.Quark
export function messageManagerErrorQuark(): GLib.Quark
export function messageViewErrorQuark(): GLib.Quark
export function pluginFactoryErrorQuark(): GLib.Quark
export function preferencesErrorQuark(): GLib.Quark
export function printErrorQuark(): GLib.Quark
export function projectBackendErrorQuark(): GLib.Quark
export function projectChooserErrorQuark(): GLib.Quark
export function projectErrorQuark(): GLib.Quark
export function projectManagerErrorQuark(): GLib.Quark
export function providerErrorQuark(): GLib.Quark
export function snippetsManagerErrorQuark(): GLib.Quark
export function streamErrorQuark(): GLib.Quark
export function streamLoaderErrorQuark(): GLib.Quark
export function streamSavableErrorQuark(): GLib.Quark
export function symbolErrorQuark(): GLib.Quark
export function symbolManagerErrorQuark(): GLib.Quark
export function symbolQueryErrorQuark(): GLib.Quark
export function terminalErrorQuark(): GLib.Quark
export function todoErrorQuark(): GLib.Quark
export function vcsErrorQuark(): GLib.Quark
export function wizardErrorQuark(): GLib.Quark
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
    /* Methods of IAnjuta-3.0.IAnjuta.Buildable */
    build(uri: string): void
    clean(uri: string): void
    configure(uri: string): void
    execute(uri: string): void
    generate(uri: string): void
    getCommand(commandId: BuildableCommand): string
    install(uri: string): void
    resetCommands(): void
    setCommand(commandId: BuildableCommand, command: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Builder {
    /* Methods of IAnjuta-3.0.IAnjuta.Builder */
    cancel(handle: BuilderHandle): void
    getUriConfiguration(uri: string): string
    listConfiguration(): string[]
    static name: string
}
export class DebugManager {
    /* Methods of IAnjuta-3.0.IAnjuta.DebugManager */
    quit(): boolean
    start(uri: string): boolean
    startRemote(server: string, uri: string): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.DebugManager */
    connect(sigName: "breakpoint-changed", callback: (($obj: DebugManager, object?: object | null) => void)): number
    on(sigName: "breakpoint-changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "breakpoint-changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "breakpoint-changed", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "breakpoint-changed", object?: object | null): void
    connect(sigName: "debugger-started", callback: (($obj: DebugManager) => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebugManager, object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebugManager, object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "location-changed", callback: (($obj: DebugManager, object: number, p0: string, p1: number) => void)): number
    on(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void): NodeJS.EventEmitter
    emit(sigName: "location-changed", object: number, p0: string, p1: number): void
    connect(sigName: "program-exited", callback: (($obj: DebugManager) => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebugManager) => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebugManager, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebugManager) => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-started", callback: (($obj: DebugManager) => void)): number
    on(sigName: "program-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-started"): void
    connect(sigName: "program-stopped", callback: (($obj: DebugManager) => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "program-unloaded", callback: (($obj: DebugManager) => void)): number
    on(sigName: "program-unloaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-unloaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-unloaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-unloaded"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebugManager) => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebugManager, object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Debugger {
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: Debugger, object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: Debugger) => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: Debugger, object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: Debugger, object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: Debugger) => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: Debugger) => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: Debugger, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: Debugger) => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: Debugger) => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: Debugger) => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: Debugger, object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
}
export class DebuggerBreakpoint {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint */
    implementBreakpoint(): number
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerBreakpoint, object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerBreakpoint) => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerBreakpoint, object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerBreakpoint, object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerBreakpoint) => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerBreakpoint) => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerBreakpoint, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerBreakpoint) => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerBreakpoint) => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerBreakpoint) => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerBreakpoint, object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DebuggerInstruction {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction */
    runFromAddress(address: number): boolean
    runToAddress(address: number): boolean
    stepInInstruction(): boolean
    stepOverInstruction(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerInstruction, object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerInstruction) => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerInstruction, object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerInstruction, object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerInstruction) => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerInstruction) => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerInstruction, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerInstruction) => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerInstruction) => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerInstruction) => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerInstruction, object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DebuggerMemory {
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerMemory, object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerMemory) => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerMemory, object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerMemory, object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerMemory) => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerMemory) => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerMemory, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerMemory) => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerMemory) => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerMemory) => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerMemory, object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DebuggerRegister {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerRegister */
    writeRegister(value: DebuggerRegisterData): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerRegister, object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerRegister) => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerRegister, object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerRegister, object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerRegister) => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerRegister) => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerRegister, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerRegister) => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerRegister) => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerRegister) => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerRegister, object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DebuggerVariable {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerVariable */
    assign(name: string, value: string): boolean
    destroy(name: string): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerVariable, object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (($obj: DebuggerVariable) => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerVariable, object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: (($obj: DebuggerVariable, object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (($obj: DebuggerVariable) => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (($obj: DebuggerVariable) => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: (($obj: DebuggerVariable, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (($obj: DebuggerVariable) => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (($obj: DebuggerVariable) => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerVariable) => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: (($obj: DebuggerVariable, object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Document {
    /* Methods of IAnjuta-3.0.IAnjuta.Document */
    beginUndoAction(): void
    canRedo(): boolean
    canUndo(): boolean
    clear(): void
    copy(): void
    cut(): void
    endUndoAction(): void
    getFilename(): string
    grabFocus(): void
    paste(): void
    redo(): void
    undo(): void
    /* Signals of IAnjuta-3.0.IAnjuta.Document */
    connect(sigName: "update-ui", callback: (($obj: Document) => void)): number
    on(sigName: "update-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-ui", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "update-ui"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DocumentManager {
    /* Methods of IAnjuta-3.0.IAnjuta.DocumentManager */
    addBookmark(file: Gio.File, line: number): void
    addBuffer(name: string, content: string): Editor
    addDocument(document: Document): void
    findDocumentWithFile(file: Gio.File): Document
    getCurrentDocument(): Document
    getDocWidgets(): Gtk.Widget[]
    getFile(filename: string): Gio.File
    gotoFileLine(file: Gio.File, lineno: number): Editor
    gotoFileLineMark(file: Gio.File, lineno: number, mark: boolean): Editor
    removeDocument(document: Document, saveBefore: boolean): boolean
    setCurrentDocument(document: Document): void
    /* Signals of IAnjuta-3.0.IAnjuta.DocumentManager */
    connect(sigName: "document-added", callback: (($obj: DocumentManager, doc: Document) => void)): number
    on(sigName: "document-added", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "document-added", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "document-added", callback: (doc: Document) => void): NodeJS.EventEmitter
    emit(sigName: "document-added", doc: Document): void
    connect(sigName: "document-removed", callback: (($obj: DocumentManager, doc: Document) => void)): number
    on(sigName: "document-removed", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "document-removed", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "document-removed", callback: (doc: Document) => void): NodeJS.EventEmitter
    emit(sigName: "document-removed", doc: Document): void
    static name: string
}
export class Editor {
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: Editor) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: Editor, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: Editor, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: Editor, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: Editor) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: Editor, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: Editor, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: Editor, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
}
export class EditorAssist {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorAssist */
    add(provider: Provider): void
    invoke(provider: Provider): void
    proposals(provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean): void
    remove(provider: Provider): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorAssist */
    connect(sigName: "cancelled", callback: (($obj: EditorAssist) => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorAssist) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorAssist, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorAssist, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorAssist, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorAssist) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorAssist, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorAssist, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorAssist, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorCell {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCell */
    getAttribute(): EditorAttribute
    getChar(charIndex: number): number
    getCharacter(): string
    getLength(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorCellStyle {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCellStyle */
    getBackgroundColor(): string
    getColor(): string
    getFontDescription(): string
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCell */
    getAttribute(): EditorAttribute
    getChar(charIndex: number): number
    getCharacter(): string
    getLength(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorComment {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorComment */
    block(): void
    box(): void
    stream(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorComment) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorComment, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorComment, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorComment, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorComment) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorComment, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorComment, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorComment, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorConvert {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorConvert */
    toLower(startPosition: Iterable, endPosition: Iterable): void
    toUpper(startPosition: Iterable, endPosition: Iterable): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorConvert) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorConvert, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorConvert, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorConvert, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorConvert) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorConvert, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorConvert, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorConvert, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorFactory {
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorFolds {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorFolds */
    closeAll(): void
    openAll(): void
    toggleCurrent(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorFolds) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorFolds, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorFolds, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorFolds, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorFolds) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorFolds, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorFolds, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorFolds, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorGladeSignal {
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorGladeSignal */
    connect(sigName: "drop", callback: (($obj: EditorGladeSignal, iter: Iterable, signalData: string) => void)): number
    on(sigName: "drop", callback: (iter: Iterable, signalData: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop", callback: (iter: Iterable, signalData: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop", callback: (iter: Iterable, signalData: string) => void): NodeJS.EventEmitter
    emit(sigName: "drop", iter: Iterable, signalData: string): void
    connect(sigName: "drop-possible", callback: (($obj: EditorGladeSignal, iter: Iterable) => boolean)): number
    on(sigName: "drop-possible", callback: (iter: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop-possible", callback: (iter: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop-possible", callback: (iter: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "drop-possible", iter: Iterable): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorGladeSignal) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorGladeSignal, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorGladeSignal, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorGladeSignal, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorGladeSignal) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorGladeSignal, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorGladeSignal, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGladeSignal, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorGoto {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorGoto */
    endBlock(): void
    matchingBrace(): void
    startBlock(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorGoto) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorGoto, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorGoto, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorGoto, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorGoto) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorGoto, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorGoto, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGoto, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorHover {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorHover */
    display(position: Iterable, info: string): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorHover */
    connect(sigName: "hover-leave", callback: (($obj: EditorHover, position: Iterable) => void)): number
    on(sigName: "hover-leave", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hover-leave", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hover-leave", callback: (position: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "hover-leave", position: Iterable): void
    connect(sigName: "hover-over", callback: (($obj: EditorHover, position: Iterable) => void)): number
    on(sigName: "hover-over", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hover-over", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hover-over", callback: (position: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "hover-over", position: Iterable): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorHover) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorHover, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorHover, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorHover, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorHover) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorHover, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorHover, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorHover, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorLanguage {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorLanguage */
    getLanguage(): string
    getLanguageName(language: string): string
    getSupportedLanguages(): string[]
    setLanguage(language: string): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorLanguage */
    connect(sigName: "language-changed", callback: (($obj: EditorLanguage, language: string) => void)): number
    on(sigName: "language-changed", callback: (language: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "language-changed", callback: (language: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "language-changed", callback: (language: string) => void): NodeJS.EventEmitter
    emit(sigName: "language-changed", language: string): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorLanguage) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorLanguage, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorLanguage, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorLanguage, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorLanguage) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorLanguage, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorLanguage, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLanguage, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorLineMode {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorLineMode */
    convert(mode: EditorLineModeType): void
    fix(): void
    get(): EditorLineModeType
    set(mode: EditorLineModeType): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorLineMode) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorLineMode, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorLineMode, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorLineMode, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorLineMode) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorLineMode, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorLineMode, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLineMode, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorSearch {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorSearch */
    backward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): { returnType: boolean, resultStart: EditorCell, resultEnd: EditorCell }
    forward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): { returnType: boolean, resultStart: EditorCell, resultEnd: EditorCell }
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorSearch) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorSearch, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorSearch, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorSearch, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorSearch) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorSearch, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorSearch, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSearch, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorSelection {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorSelection */
    get(): string
    hasSelection(): boolean
    replace(text: string, length: number): void
    selectAll(): void
    selectBlock(): void
    selectFunction(): void
    set(start: Iterable, end: Iterable, scroll: boolean): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorSelection) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorSelection, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorSelection, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorSelection, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorSelection) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorSelection, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorSelection, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSelection, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorTip {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorTip */
    cancel(): void
    show(tips: string[], position: Iterable): void
    visible(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorTip) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorTip, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorTip, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorTip, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorTip) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorTip, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorTip, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorTip, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorView {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorView */
    create(): void
    getCount(): number
    removeCurrent(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorView) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorView, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorView, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorView, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorView) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorView, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorView, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorView, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorZoom {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorZoom */
    in(): void
    out(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorZoom) => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: (($obj: EditorZoom, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: (($obj: EditorZoom, ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: (($obj: EditorZoom, code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (($obj: EditorZoom) => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: (($obj: EditorZoom, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: (($obj: EditorZoom, widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorZoom, doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Environment {
    /* Methods of IAnjuta-3.0.IAnjuta.Environment */
    getRealDirectory(dir: string): string
    override(dirp: string, argvp: string, envp: string): boolean
    static name: string
}
export class File {
    /* Methods of IAnjuta-3.0.IAnjuta.File */
    getFile(): Gio.File
    open(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.File */
    connect(sigName: "opened", callback: (($obj: File) => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class FileLoader {
    /* Methods of IAnjuta-3.0.IAnjuta.FileLoader */
    peekInterface(file: Gio.File): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class FileManager {
    /* Methods of IAnjuta-3.0.IAnjuta.FileManager */
    setRoot(rootUri: string): void
    setSelected(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.FileManager */
    connect(sigName: "section-changed", callback: (($obj: FileManager, err: Gio.File) => void)): number
    on(sigName: "section-changed", callback: (err: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (err: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (err: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", err: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class FileSavable {
    /* Methods of IAnjuta-3.0.IAnjuta.FileSavable */
    isConflict(): boolean
    isDirty(): boolean
    isReadOnly(): boolean
    save(): void
    saveAs(file: Gio.File): void
    setDirty(dirty: boolean): void
    /* Methods of IAnjuta-3.0.IAnjuta.File */
    getFile(): Gio.File
    open(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.FileSavable */
    connect(sigName: "saved", callback: (($obj: FileSavable, file: Gio.File) => void)): number
    on(sigName: "saved", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "saved", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "saved", callback: (file: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "saved", file: Gio.File): void
    connect(sigName: "update-save-ui", callback: (($obj: FileSavable) => void)): number
    on(sigName: "update-save-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-save-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-save-ui", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "update-save-ui"): void
    /* Signals of IAnjuta-3.0.IAnjuta.File */
    connect(sigName: "opened", callback: (($obj: FileSavable) => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Glade {
    /* Methods of IAnjuta-3.0.IAnjuta.Glade */
    addAssociation(master: string, slave: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Help {
    /* Methods of IAnjuta-3.0.IAnjuta.Help */
    search(query: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Indenter {
    /* Methods of IAnjuta-3.0.IAnjuta.Indenter */
    indent(start: Iterable, end: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Indicable {
    /* Methods of IAnjuta-3.0.IAnjuta.Indicable */
    clear(): void
    set(beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Iterable {
    /* Methods of IAnjuta-3.0.IAnjuta.Iterable */
    assign(srcIter: Iterable): void
    clone(): Iterable
    compare(iter2: Iterable): number
    diff(iter2: Iterable): number
    first(): boolean
    getLength(): number
    getPosition(): number
    last(): boolean
    next(): boolean
    previous(): boolean
    setPosition(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class IterableTree {
    /* Methods of IAnjuta-3.0.IAnjuta.IterableTree */
    children(): boolean
    hasChildren(): boolean
    parent(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Iterable */
    assign(srcIter: Iterable): void
    clone(): Iterable
    compare(iter2: Iterable): number
    diff(iter2: Iterable): number
    first(): boolean
    getLength(): number
    getPosition(): number
    last(): boolean
    next(): boolean
    previous(): boolean
    setPosition(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Language {
    /* Methods of IAnjuta-3.0.IAnjuta.Language */
    getFromEditor(editor: EditorLanguage): LanguageId
    getFromMimeType(mimeType: string): LanguageId
    getFromString(string: string): LanguageId
    getLanguages(): number[]
    getMakeTarget(id: LanguageId): string
    getName(id: LanguageId): string
    getNameFromEditor(editor: EditorLanguage): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class LanguageProvider {
    /* Methods of IAnjuta-3.0.IAnjuta.LanguageProvider */
    getCalltipCache(callContext: string): string[]
    getCalltipContext(iter: Iterable): string
    newCalltip(callContext: string, iter: Iterable): void
    populateCompletions(iter: Iterable): Iterable | null
    /* Methods of IAnjuta-3.0.IAnjuta.Provider */
    activate(iter: Iterable, data?: object | null): void
    getName(): string
    getStartIter(): Iterable
    populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Loader {
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Markable {
    /* Methods of IAnjuta-3.0.IAnjuta.Markable */
    deleteAllMarkers(marker: MarkableMarker): void
    isMarkerSet(location: number, marker: MarkableMarker): boolean
    locationFromHandle(handle: number): number
    mark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    unmark(location: number, marker: MarkableMarker): void
    /* Signals of IAnjuta-3.0.IAnjuta.Markable */
    connect(sigName: "marker-clicked", callback: (($obj: Markable, doubleClick: boolean, location: number) => void)): number
    on(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void): NodeJS.EventEmitter
    emit(sigName: "marker-clicked", doubleClick: boolean, location: number): void
    static name: string
}
export class MessageManager {
    /* Methods of IAnjuta-3.0.IAnjuta.MessageManager */
    removeView(view: MessageView): void
    setCurrentView(view: MessageView): void
    setViewIcon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    setViewIconFromStock(view: MessageView, icon: string): void
    setViewTitle(view: MessageView, title: string): void
    static name: string
}
export class MessageView {
    /* Methods of IAnjuta-3.0.IAnjuta.MessageView */
    append(type: MessageViewType, summary: string, details: string): void
    bufferAppend(text: string): void
    clear(): void
    getCurrentMessage(): string
    selectNext(): void
    selectPrevious(): void
    /* Signals of IAnjuta-3.0.IAnjuta.MessageView */
    connect(sigName: "buffer-flushed", callback: (($obj: MessageView, line: string) => void)): number
    on(sigName: "buffer-flushed", callback: (line: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-flushed", callback: (line: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-flushed", callback: (line: string) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-flushed", line: string): void
    connect(sigName: "message-clicked", callback: (($obj: MessageView, message: string) => void)): number
    on(sigName: "message-clicked", callback: (message: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-clicked", callback: (message: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-clicked", callback: (message: string) => void): NodeJS.EventEmitter
    emit(sigName: "message-clicked", message: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class PluginFactory {
    static name: string
}
export class Preferences {
    /* Methods of IAnjuta-3.0.IAnjuta.Preferences */
    merge(prefs: Anjuta.Preferences): void
    unmerge(prefs: Anjuta.Preferences): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Print {
    /* Methods of IAnjuta-3.0.IAnjuta.Print */
    print(): void
    printPreview(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Project {
    /* Methods of IAnjuta-3.0.IAnjuta.Project */
    addNodeAfter(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    addNodeBefore(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    getNodeInfo(): Anjuta.ProjectNodeInfo[]
    getRoot(): Anjuta.ProjectNode
    isLoaded(): boolean
    loadNode(node: Anjuta.ProjectNode): boolean
    removeNode(node: Anjuta.ProjectNode): boolean
    removeProperty(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean
    saveNode(node: Anjuta.ProjectNode): boolean
    setProperty(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null
    /* Signals of IAnjuta-3.0.IAnjuta.Project */
    connect(sigName: "file-changed", callback: (($obj: Project, node?: object | null) => void)): number
    on(sigName: "file-changed", callback: (node?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-changed", callback: (node?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-changed", callback: (node?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "file-changed", node?: object | null): void
    connect(sigName: "node-changed", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-changed", node: object | null, error: GLib.Error): void
    connect(sigName: "node-loaded", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-loaded", node: object | null, error: GLib.Error): void
    connect(sigName: "node-saved", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-saved", node: object | null, error: GLib.Error): void
    static name: string
}
export class ProjectBackend {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectBackend */
    newProject(file: Gio.File): Project
    probe(directory: Gio.File): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class ProjectChooser {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectChooser */
    getSelected(): Gio.File
    setProjectModel(manager: ProjectManager, childType: Anjuta.ProjectNodeType): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.ProjectChooser */
    connect(sigName: "changed", callback: (($obj: ProjectChooser) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class ProjectManager {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectManager */
    addGroup(name: string, defaultGroup?: Gio.File | null): Gio.File
    addSource(name: string, defaultTarget?: Gio.File | null): Gio.File
    addSourceQuiet(name: string, target: Gio.File): Gio.File
    addSources(names: string[], defaultTarget?: Gio.File | null): Gio.File[]
    addTarget(name: string, defaultGroup?: Gio.File | null): Gio.File
    getCapabilities(): number
    getChildren(parent: Gio.File, childrenType: number): Gio.File[]
    getCurrentProject(): Project
    getElements(elementType: Anjuta.ProjectNodeType): Gio.File[]
    getPackages(): string[]
    getSelected(): Gio.File
    getTargetType(target: Gio.File): Anjuta.ProjectNodeType
    getTargets(targetType: Anjuta.ProjectNodeType): Gio.File[]
    isOpen(): boolean
    removeFile(file: Gio.File): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.ProjectManager */
    connect(sigName: "element-added", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    on(sigName: "element-added", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", object: Gio.File): void
    connect(sigName: "element-removed", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    on(sigName: "element-removed", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", object: Gio.File): void
    connect(sigName: "element-selected", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    on(sigName: "element-selected", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-selected", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-selected", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-selected", object: Gio.File): void
    connect(sigName: "project-loaded", callback: (($obj: ProjectManager, object: GLib.Error) => void)): number
    on(sigName: "project-loaded", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "project-loaded", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "project-loaded", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "project-loaded", object: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Provider {
    /* Methods of IAnjuta-3.0.IAnjuta.Provider */
    activate(iter: Iterable, data?: object | null): void
    getName(): string
    getStartIter(): Iterable
    populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class SnippetsManager {
    /* Methods of IAnjuta-3.0.IAnjuta.SnippetsManager */
    insert(key: string, editingSession: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Stream {
    /* Methods of IAnjuta-3.0.IAnjuta.Stream */
    open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class StreamLoader {
    /* Methods of IAnjuta-3.0.IAnjuta.StreamLoader */
    peekInterface(stream?: object | null): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class StreamSavable {
    /* Methods of IAnjuta-3.0.IAnjuta.StreamSavable */
    save(stream?: object | null): void
    /* Methods of IAnjuta-3.0.IAnjuta.Stream */
    open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Symbol {
    /* Methods of IAnjuta-3.0.IAnjuta.Symbol */
    getBoolean(field: SymbolField): boolean
    getIcon(): GdkPixbuf.Pixbuf
    getInt(field: SymbolField): number
    getString(field: SymbolField): string
    getSymType(): SymbolType
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class SymbolManager {
    /* Methods of IAnjuta-3.0.IAnjuta.SymbolManager */
    activatePackage(pkgName: string, pkgVersion: string): boolean
    deactivateAll(): void
    deactivatePackage(pkgName: string, pkgVersion: string): void
    /* Signals of IAnjuta-3.0.IAnjuta.SymbolManager */
    connect(sigName: "prj-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    on(sigName: "prj-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prj-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prj-scan-end", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "prj-scan-end", object: number): void
    connect(sigName: "sys-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    on(sigName: "sys-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sys-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sys-scan-end", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "sys-scan-end", object: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class SymbolQuery {
    /* Methods of IAnjuta-3.0.IAnjuta.SymbolQuery */
    cancel(): void
    setFields(nFields: number, fields: SymbolField): void
    setFileScope(filescopeSearch: SymbolQueryFileScope): void
    setFilters(filters: SymbolType, includeTypes: boolean): void
    setGroupBy(field: SymbolField): void
    setLimit(limit: number): void
    setMode(mode: SymbolQueryMode): void
    setOffset(offset: number): void
    setOrderBy(field: SymbolField): void
    /* Signals of IAnjuta-3.0.IAnjuta.SymbolQuery */
    connect(sigName: "async-result", callback: (($obj: SymbolQuery, object: GObject.Object) => void)): number
    on(sigName: "async-result", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "async-result", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "async-result", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "async-result", object: GObject.Object): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Terminal {
    /* Methods of IAnjuta-3.0.IAnjuta.Terminal */
    executeCommand(directory: string, command: string, environment: string[]): number
    /* Signals of IAnjuta-3.0.IAnjuta.Terminal */
    connect(sigName: "child-exited", callback: (($obj: Terminal, object: number, p0: number) => void)): number
    on(sigName: "child-exited", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-exited", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-exited", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-exited", object: number, p0: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Todo {
    /* Methods of IAnjuta-3.0.IAnjuta.Todo */
    load(file: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Vcs {
    /* Methods of IAnjuta-3.0.IAnjuta.Vcs */
    add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    checkout(repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /* Signals of IAnjuta-3.0.IAnjuta.Vcs */
    connect(sigName: "status-changed", callback: (($obj: Vcs) => void)): number
    on(sigName: "status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "status-changed"): void
    static name: string
}
export class Wizard {
    /* Methods of IAnjuta-3.0.IAnjuta.Wizard */
    activate(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export abstract class BuildableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.BuildableIface */
    gIface: GObject.TypeInterface
    build: (obj: Buildable, uri: string) => void
    clean: (obj: Buildable, uri: string) => void
    configure: (obj: Buildable, uri: string) => void
    execute: (obj: Buildable, uri: string) => void
    generate: (obj: Buildable, uri: string) => void
    getCommand: (obj: Buildable, commandId: BuildableCommand) => string
    install: (obj: Buildable, uri: string) => void
    resetCommands: (obj: Buildable) => void
    setCommand: (obj: Buildable, commandId: BuildableCommand, command: string) => void
    static name: string
}
export abstract class BuilderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.BuilderIface */
    gIface: GObject.TypeInterface
    cancel: (obj: Builder, handle: BuilderHandle) => void
    getUriConfiguration: (obj: Builder, uri: string) => string
    listConfiguration: (obj: Builder) => string[]
    static name: string
}
export abstract class DebugManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebugManagerIface */
    gIface: GObject.TypeInterface
    breakpointChanged: (obj: DebugManager, breakpoint: DebuggerBreakpointItem) => void
    debuggerStarted: (obj: DebugManager) => void
    debuggerStopped: any
    frameChanged: (obj: DebugManager, frame: number, thread: number) => void
    locationChanged: (obj: DebugManager, address: number, uri: string, line: number) => void
    programExited: (obj: DebugManager) => void
    programLoaded: (obj: DebugManager) => void
    programMoved: (obj: DebugManager, pid: number, tid: number, address: number, file: string, line: number) => void
    programRunning: (obj: DebugManager) => void
    programStarted: (obj: DebugManager) => void
    programStopped: (obj: DebugManager) => void
    programUnloaded: (obj: DebugManager) => void
    sharedlibEvent: (obj: DebugManager) => void
    signalReceived: (obj: DebugManager, name: string, description: string) => void
    quit: (obj: DebugManager) => boolean
    start: (obj: DebugManager, uri: string) => boolean
    startRemote: (obj: DebugManager, server: string, uri: string) => boolean
    static name: string
}
export abstract class DebuggerBreakpointIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointIface */
    gIface: DebuggerIface
    implementBreakpoint: (obj: DebuggerBreakpoint) => number
    static name: string
}
export class DebuggerBreakpointItem {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointItem */
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
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerFrame */
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
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerIface */
    gIface: GObject.TypeInterface
    debuggerReady: (obj: Debugger, state: DebuggerState) => void
    debuggerStarted: (obj: Debugger) => void
    debuggerStopped: any
    frameChanged: (obj: Debugger, frame: number, thread: number) => void
    programExited: (obj: Debugger) => void
    programLoaded: (obj: Debugger) => void
    programMoved: (obj: Debugger, pid: number, tid: number, address: number, file: string, line: number) => void
    programRunning: (obj: Debugger) => void
    programStopped: (obj: Debugger) => void
    sharedlibEvent: (obj: Debugger) => void
    signalReceived: (obj: Debugger, name: string, description: string) => void
    abort: (obj: Debugger) => boolean
    attach: (obj: Debugger, pid: number, sourceSearchDirectories: string[]) => boolean
    connect: (obj: Debugger, server: string, args: string, terminal: boolean, stop: boolean) => boolean
    disableLog: (obj: Debugger) => void
    enableLog: (obj: Debugger, log: MessageView) => void
    exit: (obj: Debugger) => boolean
    getState: (obj: Debugger) => DebuggerState
    handleSignal: (obj: Debugger, name: string, stop: boolean, print: boolean, ignore: boolean) => boolean
    interrupt: (obj: Debugger) => boolean
    load: (obj: Debugger, file: string, mimeType: string, sourceSearchDirectories: string[]) => boolean
    quit: (obj: Debugger) => boolean
    run: (obj: Debugger) => boolean
    runFrom: (obj: Debugger, file: string, line: number) => boolean
    runTo: (obj: Debugger, file: string, line: number) => boolean
    sendCommand: (obj: Debugger, command: string) => boolean
    setEnvironment: (obj: Debugger, env: string) => boolean
    setFrame: (obj: Debugger, frame: number) => boolean
    setThread: (obj: Debugger, thread: number) => boolean
    setWorkingDirectory: (obj: Debugger, dir: string) => boolean
    start: (obj: Debugger, args: string, terminal: boolean, stop: boolean) => boolean
    stepIn: (obj: Debugger) => boolean
    stepOut: (obj: Debugger) => boolean
    stepOver: (obj: Debugger) => boolean
    unload: (obj: Debugger) => boolean
    static name: string
}
export class DebuggerInstructionALine {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionALine */
    address: number
    label: string
    text: string
    static name: string
}
export class DebuggerInstructionDisassembly {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionDisassembly */
    size: number
    data: DebuggerInstructionALine[]
    static name: string
}
export abstract class DebuggerInstructionIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionIface */
    gIface: DebuggerIface
    runFromAddress: (obj: DebuggerInstruction, address: number) => boolean
    runToAddress: (obj: DebuggerInstruction, address: number) => boolean
    stepInInstruction: (obj: DebuggerInstruction) => boolean
    stepOverInstruction: (obj: DebuggerInstruction) => boolean
    static name: string
}
export class DebuggerMemoryBlock {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryBlock */
    address: number
    length: number
    data: string
    static name: string
}
export abstract class DebuggerMemoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryIface */
    gIface: DebuggerIface
    static name: string
}
export class DebuggerRegisterData {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterData */
    num: number
    name: string
    value: string
    static name: string
}
export abstract class DebuggerRegisterIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterIface */
    gIface: DebuggerIface
    writeRegister: (obj: DebuggerRegister, value: DebuggerRegisterData) => boolean
    static name: string
}
export abstract class DebuggerVariableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerVariableIface */
    gIface: DebuggerIface
    assign: (obj: DebuggerVariable, name: string, value: string) => boolean
    destroy: (obj: DebuggerVariable, name: string) => boolean
    static name: string
}
export class DebuggerVariableObject {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerVariableObject */
    name: string
    expression: string
    type: string
    value: string
    changed: boolean
    exited: boolean
    deleted: boolean
    children: number
    hasMore: boolean
    static name: string
}
export abstract class DocumentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DocumentIface */
    gIface: GObject.TypeInterface
    updateUi: (obj: Document) => void
    beginUndoAction: (obj: Document) => void
    canRedo: (obj: Document) => boolean
    canUndo: (obj: Document) => boolean
    clear: (obj: Document) => void
    copy: (obj: Document) => void
    cut: (obj: Document) => void
    endUndoAction: (obj: Document) => void
    getFilename: (obj: Document) => string
    grabFocus: (obj: Document) => void
    paste: (obj: Document) => void
    redo: (obj: Document) => void
    undo: (obj: Document) => void
    static name: string
}
export abstract class DocumentManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DocumentManagerIface */
    gIface: GObject.TypeInterface
    documentAdded: (obj: DocumentManager, doc: Document) => void
    documentRemoved: (obj: DocumentManager, doc: Document) => void
    addBookmark: any
    addBuffer: (obj: DocumentManager, name: string, content: string) => Editor
    addDocument: (obj: DocumentManager, document: Document) => void
    findDocumentWithFile: any
    getCurrentDocument: (obj: DocumentManager) => Document
    getDocWidgets: any
    getFile: any
    gotoFileLine: any
    gotoFileLineMark: any
    removeDocument: (obj: DocumentManager, document: Document, saveBefore: boolean) => boolean
    setCurrentDocument: (obj: DocumentManager, document: Document) => void
    static name: string
}
export abstract class EditorAssistIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorAssistIface */
    gIface: EditorIface
    cancelled: (obj: EditorAssist) => void
    add: (obj: EditorAssist, provider: Provider) => void
    invoke: (obj: EditorAssist, provider: Provider) => void
    proposals: (obj: EditorAssist, provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean) => void
    remove: (obj: EditorAssist, provider: Provider) => void
    static name: string
}
export class EditorAssistProposal {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorAssistProposal */
    label: string
    markup: string
    info: string
    text: string
    icon: GdkPixbuf.Pixbuf
    data: object
    static name: string
}
export abstract class EditorCellIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCellIface */
    gIface: GObject.TypeInterface
    getAttribute: (obj: EditorCell) => EditorAttribute
    getChar: (obj: EditorCell, charIndex: number) => number
    getCharacter: (obj: EditorCell) => string
    getLength: (obj: EditorCell) => number
    static name: string
}
export abstract class EditorCellStyleIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCellStyleIface */
    gIface: EditorCellIface
    getBackgroundColor: (obj: EditorCellStyle) => string
    getColor: (obj: EditorCellStyle) => string
    getFontDescription: (obj: EditorCellStyle) => string
    static name: string
}
export abstract class EditorCommentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCommentIface */
    gIface: EditorIface
    block: (obj: EditorComment) => void
    box: (obj: EditorComment) => void
    stream: (obj: EditorComment) => void
    static name: string
}
export abstract class EditorConvertIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorConvertIface */
    gIface: EditorIface
    toLower: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    toUpper: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    static name: string
}
export abstract class EditorFactoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorFactoryIface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class EditorFoldsIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorFoldsIface */
    gIface: EditorIface
    closeAll: (obj: EditorFolds) => void
    openAll: (obj: EditorFolds) => void
    toggleCurrent: (obj: EditorFolds) => void
    static name: string
}
export abstract class EditorGladeSignalIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorGladeSignalIface */
    gIface: EditorIface
    drop: (obj: EditorGladeSignal, iterator: Iterable, signalData: string) => void
    dropPossible: (obj: EditorGladeSignal, iterator: Iterable) => boolean
    static name: string
}
export abstract class EditorGotoIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorGotoIface */
    gIface: EditorIface
    endBlock: (obj: EditorGoto) => void
    matchingBrace: (obj: EditorGoto) => void
    startBlock: (obj: EditorGoto) => void
    static name: string
}
export abstract class EditorHoverIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorHoverIface */
    gIface: EditorIface
    hoverLeave: (obj: EditorHover, position: Iterable) => void
    hoverOver: (obj: EditorHover, position: Iterable) => void
    display: (obj: EditorHover, position: Iterable, info: string) => void
    static name: string
}
export abstract class EditorIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorIface */
    gIface: GObject.TypeInterface
    backspace: (obj: Editor) => void
    changed: (obj: Editor, position: Iterable, added: boolean, length: number, lines: number, text: string) => void
    charAdded: (obj: Editor, position: Iterable, ch: number) => void
    codeChanged: (obj: Editor, position: Iterable, code: string) => void
    cursorMoved: (obj: Editor) => void
    gladeCallbackAdd: (obj: Editor, widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string) => void
    gladeMemberAdd: (obj: Editor, widgetTypename: string, widgetName: string, filename: string) => void
    lineMarksGutterClicked: (obj: Editor, location: number) => void
    append: (obj: Editor, text: string, length: number) => void
    erase: (obj: Editor, positionStart: Iterable, positionEnd: Iterable) => void
    eraseAll: (obj: Editor) => void
    getColumn: (obj: Editor) => number
    getCurrentWord: (obj: Editor) => string
    getEndPosition: (obj: Editor) => Iterable
    getIndentsize: (obj: Editor) => number
    getLength: (obj: Editor) => number
    getLineBeginPosition: (obj: Editor, line: number) => Iterable
    getLineEndPosition: (obj: Editor, line: number) => Iterable
    getLineFromPosition: (obj: Editor, position: Iterable) => number
    getLineno: (obj: Editor) => number
    getOffset: (obj: Editor) => number
    getOverwrite: (obj: Editor) => boolean
    getPosition: (obj: Editor) => Iterable
    getStartPosition: (obj: Editor) => Iterable
    getTabsize: (obj: Editor) => number
    getText: (obj: Editor, begin: Iterable, end: Iterable) => string
    getTextAll: (obj: Editor) => string
    getUseSpaces: (obj: Editor) => boolean
    gotoEnd: (obj: Editor) => void
    gotoLine: (obj: Editor, lineno: number) => void
    gotoPosition: (obj: Editor, position: Iterable) => void
    gotoStart: (obj: Editor) => void
    insert: (obj: Editor, position: Iterable, text: string, length: number) => void
    setAutoIndent: (obj: Editor, autoIndent: boolean) => void
    setIndentsize: (obj: Editor, indentsize: number) => void
    setPopupMenu: any
    setTabsize: (obj: Editor, tabsize: number) => void
    setUseSpaces: (obj: Editor, useSpaces: boolean) => void
    static name: string
}
export abstract class EditorLanguageIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorLanguageIface */
    gIface: EditorIface
    languageChanged: (obj: EditorLanguage, language: string) => void
    getLanguage: (obj: EditorLanguage) => string
    getLanguageName: (obj: EditorLanguage, language: string) => string
    getSupportedLanguages: (obj: EditorLanguage) => string[]
    setLanguage: (obj: EditorLanguage, language: string) => void
    static name: string
}
export abstract class EditorLineModeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorLineModeIface */
    gIface: EditorIface
    convert: (obj: EditorLineMode, mode: EditorLineModeType) => void
    fix: (obj: EditorLineMode) => void
    get: (obj: EditorLineMode) => EditorLineModeType
    set: (obj: EditorLineMode, mode: EditorLineModeType) => void
    static name: string
}
export abstract class EditorSearchIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorSearchIface */
    gIface: EditorIface
    backward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => { returnType: boolean, resultStart: EditorCell, resultEnd: EditorCell }
    forward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => { returnType: boolean, resultStart: EditorCell, resultEnd: EditorCell }
    static name: string
}
export abstract class EditorSelectionIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorSelectionIface */
    gIface: EditorIface
    get: (obj: EditorSelection) => string
    hasSelection: (obj: EditorSelection) => boolean
    replace: (obj: EditorSelection, text: string, length: number) => void
    selectAll: (obj: EditorSelection) => void
    selectBlock: (obj: EditorSelection) => void
    selectFunction: (obj: EditorSelection) => void
    set: (obj: EditorSelection, start: Iterable, end: Iterable, scroll: boolean) => void
    static name: string
}
export abstract class EditorTipIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorTipIface */
    gIface: EditorIface
    cancel: (obj: EditorTip) => void
    show: (obj: EditorTip, tips: string[], position: Iterable) => void
    visible: (obj: EditorTip) => boolean
    static name: string
}
export abstract class EditorViewIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorViewIface */
    gIface: EditorIface
    create: (obj: EditorView) => void
    getCount: (obj: EditorView) => number
    removeCurrent: (obj: EditorView) => void
    static name: string
}
export abstract class EditorZoomIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorZoomIface */
    gIface: EditorIface
    in_: (obj: EditorZoom) => void
    out: (obj: EditorZoom) => void
    static name: string
}
export abstract class EnvironmentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EnvironmentIface */
    gIface: GObject.TypeInterface
    getRealDirectory: (obj: Environment, dir: string) => string
    override: (obj: Environment, dirp: string, argvp: string, envp: string) => boolean
    static name: string
}
export abstract class FileIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileIface */
    gIface: GObject.TypeInterface
    opened: (obj: File) => void
    getFile: any
    open: any
    static name: string
}
export abstract class FileLoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileLoaderIface */
    gIface: LoaderIface
    peekInterface: any
    static name: string
}
export abstract class FileManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileManagerIface */
    gIface: GObject.TypeInterface
    sectionChanged: any
    setRoot: (obj: FileManager, rootUri: string) => void
    setSelected: any
    static name: string
}
export abstract class FileSavableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileSavableIface */
    gIface: FileIface
    saved: any
    updateSaveUi: (obj: FileSavable) => void
    isConflict: (obj: FileSavable) => boolean
    isDirty: (obj: FileSavable) => boolean
    isReadOnly: (obj: FileSavable) => boolean
    save: (obj: FileSavable) => void
    saveAs: any
    setDirty: (obj: FileSavable, dirty: boolean) => void
    static name: string
}
export abstract class GladeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.GladeIface */
    gIface: GObject.TypeInterface
    addAssociation: (obj: Glade, master: string, slave: string) => void
    static name: string
}
export abstract class HelpIface {
    /* Fields of IAnjuta-3.0.IAnjuta.HelpIface */
    gIface: GObject.TypeInterface
    search: (obj: Help, query: string) => void
    static name: string
}
export abstract class IndenterIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IndenterIface */
    gIface: GObject.TypeInterface
    indent: (obj: Indenter, start: Iterable, end: Iterable) => void
    static name: string
}
export abstract class IndicableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IndicableIface */
    gIface: GObject.TypeInterface
    clear: (obj: Indicable) => void
    set: (obj: Indicable, beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator) => void
    static name: string
}
export abstract class IterableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IterableIface */
    gIface: GObject.TypeInterface
    assign: (obj: Iterable, srcIter: Iterable) => void
    clone: (obj: Iterable) => Iterable
    compare: (obj: Iterable, iter2: Iterable) => number
    diff: (obj: Iterable, iter2: Iterable) => number
    first: (obj: Iterable) => boolean
    getLength: (obj: Iterable) => number
    getPosition: (obj: Iterable) => number
    last: (obj: Iterable) => boolean
    next: (obj: Iterable) => boolean
    previous: (obj: Iterable) => boolean
    setPosition: (obj: Iterable, position: number) => boolean
    static name: string
}
export abstract class IterableTreeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IterableTreeIface */
    gIface: IterableIface
    children: (obj: IterableTree) => boolean
    hasChildren: (obj: IterableTree) => boolean
    parent: (obj: IterableTree) => boolean
    static name: string
}
export abstract class LanguageIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LanguageIface */
    gIface: GObject.TypeInterface
    getFromEditor: (obj: Language, editor: EditorLanguage) => LanguageId
    getFromMimeType: (obj: Language, mimeType: string) => LanguageId
    getFromString: (obj: Language, string: string) => LanguageId
    getLanguages: (obj: Language) => number[]
    getMakeTarget: (obj: Language, id: LanguageId) => string
    getName: (obj: Language, id: LanguageId) => string
    getNameFromEditor: (obj: Language, editor: EditorLanguage) => string
    static name: string
}
export abstract class LanguageProviderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LanguageProviderIface */
    gIface: ProviderIface
    getCalltipCache: (obj: LanguageProvider, callContext: string) => string[]
    getCalltipContext: (obj: LanguageProvider, iter: Iterable) => string
    newCalltip: (obj: LanguageProvider, callContext: string, iter: Iterable) => void
    populateCompletions: (obj: LanguageProvider, iter: Iterable) => Iterable | null
    static name: string
}
export abstract class LoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LoaderIface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class MarkableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MarkableIface */
    gIface: GObject.TypeInterface
    markerClicked: (obj: Markable, doubleClick: boolean, location: number) => void
    deleteAllMarkers: (obj: Markable, marker: MarkableMarker) => void
    isMarkerSet: (obj: Markable, location: number, marker: MarkableMarker) => boolean
    locationFromHandle: (obj: Markable, handle: number) => number
    mark: (obj: Markable, location: number, marker: MarkableMarker, tooltip?: string | null) => number
    unmark: (obj: Markable, location: number, marker: MarkableMarker) => void
    static name: string
}
export abstract class MessageManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MessageManagerIface */
    gIface: GObject.TypeInterface
    removeView: (obj: MessageManager, view: MessageView) => void
    setCurrentView: (obj: MessageManager, view: MessageView) => void
    setViewIcon: any
    setViewIconFromStock: (obj: MessageManager, view: MessageView, icon: string) => void
    setViewTitle: (obj: MessageManager, view: MessageView, title: string) => void
    static name: string
}
export abstract class MessageViewIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MessageViewIface */
    gIface: GObject.TypeInterface
    bufferFlushed: (obj: MessageView, line: string) => void
    messageClicked: (obj: MessageView, message: string) => void
    append: (obj: MessageView, type: MessageViewType, summary: string, details: string) => void
    bufferAppend: (obj: MessageView, text: string) => void
    clear: (obj: MessageView) => void
    getCurrentMessage: (obj: MessageView) => string
    selectNext: (obj: MessageView) => void
    selectPrevious: (obj: MessageView) => void
    static name: string
}
export abstract class PluginFactoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PluginFactoryIface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class PreferencesIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PreferencesIface */
    gIface: GObject.TypeInterface
    merge: any
    unmerge: any
    static name: string
}
export abstract class PrintIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PrintIface */
    gIface: GObject.TypeInterface
    print: (obj: Print) => void
    printPreview: (obj: Print) => void
    static name: string
}
export abstract class ProjectBackendIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectBackendIface */
    gIface: GObject.TypeInterface
    newProject: any
    probe: any
    static name: string
}
export abstract class ProjectChooserIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectChooserIface */
    gIface: GObject.TypeInterface
    changed: (obj: ProjectChooser) => void
    getSelected: any
    setProjectModel: any
    static name: string
}
export abstract class ProjectIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectIface */
    gIface: GObject.TypeInterface
    fileChanged: (obj: Project, node?: object | null) => void
    nodeChanged: any
    nodeLoaded: any
    nodeSaved: any
    addNodeAfter: any
    addNodeBefore: any
    getNodeInfo: any
    getRoot: any
    isLoaded: (obj: Project) => boolean
    loadNode: any
    removeNode: any
    removeProperty: any
    saveNode: any
    setProperty: any
    static name: string
}
export abstract class ProjectManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectManagerIface */
    gIface: GObject.TypeInterface
    elementAdded: any
    elementRemoved: any
    elementSelected: any
    projectLoaded: any
    addGroup: any
    addSource: any
    addSourceQuiet: any
    addSources: any
    addTarget: any
    getCapabilities: (obj: ProjectManager) => number
    getChildren: any
    getCurrentProject: (obj: ProjectManager) => Project
    getElements: any
    getPackages: (obj: ProjectManager) => string[]
    getSelected: any
    getTargetType: any
    getTargets: any
    isOpen: (obj: ProjectManager) => boolean
    removeFile: any
    static name: string
}
export abstract class ProviderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProviderIface */
    gIface: GObject.TypeInterface
    activate: (obj: Provider, iter: Iterable, data?: object | null) => void
    getName: (obj: Provider) => string
    getStartIter: (obj: Provider) => Iterable
    populate: (obj: Provider, iter: Iterable) => void
    static name: string
}
export abstract class SnippetsManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SnippetsManagerIface */
    gIface: GObject.TypeInterface
    insert: (obj: SnippetsManager, key: string, editingSession: boolean) => boolean
    static name: string
}
export abstract class StreamIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamIface */
    gIface: GObject.TypeInterface
    open: (obj: Stream, stream?: object | null) => void
    static name: string
}
export abstract class StreamLoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamLoaderIface */
    gIface: LoaderIface
    peekInterface: (obj: StreamLoader, stream?: object | null) => string
    static name: string
}
export abstract class StreamSavableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamSavableIface */
    gIface: StreamIface
    save: (obj: StreamSavable, stream?: object | null) => void
    static name: string
}
export abstract class SymbolIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolIface */
    gIface: GObject.TypeInterface
    getBoolean: (obj: Symbol, field: SymbolField) => boolean
    getIcon: any
    getInt: (obj: Symbol, field: SymbolField) => number
    getString: (obj: Symbol, field: SymbolField) => string
    getSymType: (obj: Symbol) => SymbolType
    static name: string
}
export abstract class SymbolManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolManagerIface */
    gIface: GObject.TypeInterface
    prjScanEnd: (obj: SymbolManager, processId: number) => void
    sysScanEnd: (obj: SymbolManager, processId: number) => void
    activatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => boolean
    deactivateAll: (obj: SymbolManager) => void
    deactivatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => void
    static name: string
}
export abstract class SymbolQueryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolQueryIface */
    gIface: GObject.TypeInterface
    asyncResult: any
    cancel: (obj: SymbolQuery) => void
    setFields: (obj: SymbolQuery, nFields: number, fields: SymbolField) => void
    setFileScope: (obj: SymbolQuery, filescopeSearch: SymbolQueryFileScope) => void
    setFilters: (obj: SymbolQuery, filters: SymbolType, includeTypes: boolean) => void
    setGroupBy: (obj: SymbolQuery, field: SymbolField) => void
    setLimit: (obj: SymbolQuery, limit: number) => void
    setMode: (obj: SymbolQuery, mode: SymbolQueryMode) => void
    setOffset: (obj: SymbolQuery, offset: number) => void
    setOrderBy: (obj: SymbolQuery, field: SymbolField) => void
    static name: string
}
export abstract class TerminalIface {
    /* Fields of IAnjuta-3.0.IAnjuta.TerminalIface */
    gIface: GObject.TypeInterface
    childExited: (obj: Terminal, pid: number, status: number) => void
    executeCommand: (obj: Terminal, directory: string, command: string, environment: string[]) => number
    static name: string
}
export abstract class TodoIface {
    /* Fields of IAnjuta-3.0.IAnjuta.TodoIface */
    gIface: GObject.TypeInterface
    load: any
    static name: string
}
export abstract class VcsIface {
    /* Fields of IAnjuta-3.0.IAnjuta.VcsIface */
    gIface: GObject.TypeInterface
    statusChanged: (obj: Vcs) => void
    add: any
    checkout: any
    remove: any
    static name: string
}
export abstract class WizardIface {
    /* Fields of IAnjuta-3.0.IAnjuta.WizardIface */
    gIface: GObject.TypeInterface
    activate: (obj: Wizard) => void
    static name: string
}
export type BuilderHandle = object
export type LanguageId = number
}