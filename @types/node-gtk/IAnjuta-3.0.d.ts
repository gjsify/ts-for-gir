/**
 * IAnjuta-3.0
 */

/// <reference types="node" />
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';
import type { Anjuta } from './Anjuta-3.0';
import type { Gdl } from './Gdl-3';

declare namespace IAnjuta {

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
    /* Methods of IAnjuta.Buildable */
    build(uri: string): void
    clean(uri: string): void
    configure(uri: string): void
    execute(uri: string): void
    generate(uri: string): void
    getCommand(commandId: BuildableCommand): string
    install(uri: string): void
    resetCommands(): void
    setCommand(commandId: BuildableCommand, command: string): void
    /* Virtual methods of IAnjuta.Buildable */
    vfuncBuild(uri: string): void
    vfuncClean(uri: string): void
    vfuncConfigure(uri: string): void
    vfuncExecute(uri: string): void
    vfuncGenerate(uri: string): void
    vfuncGetCommand(commandId: BuildableCommand): string
    vfuncInstall(uri: string): void
    vfuncResetCommands(): void
    vfuncSetCommand(commandId: BuildableCommand, command: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Builder {
    /* Methods of IAnjuta.Builder */
    cancel(handle: BuilderHandle): void
    getUriConfiguration(uri: string): string
    listConfiguration(): string[]
    /* Virtual methods of IAnjuta.Builder */
    vfuncCancel(handle: BuilderHandle): void
    vfuncGetUriConfiguration(uri: string): string
    vfuncListConfiguration(): string[]
    static name: string
}
export class DebugManager {
    /* Methods of IAnjuta.DebugManager */
    quit(): boolean
    start(uri: string): boolean
    startRemote(server: string, uri: string): boolean
    /* Virtual methods of IAnjuta.DebugManager */
    vfuncBreakpointChanged(breakpoint: DebuggerBreakpointItem): void
    vfuncDebuggerStarted(): void
    vfuncDebuggerStopped(err: GLib.Error): void
    vfuncFrameChanged(frame: number, thread: number): void
    vfuncLocationChanged(address: number, uri: string, line: number): void
    vfuncProgramExited(): void
    vfuncProgramLoaded(): void
    vfuncProgramMoved(pid: number, tid: number, address: number, file: string, line: number): void
    vfuncProgramRunning(): void
    vfuncProgramStarted(): void
    vfuncProgramStopped(): void
    vfuncProgramUnloaded(): void
    vfuncQuit(): boolean
    vfuncSharedlibEvent(): void
    vfuncSignalReceived(name: string, description: string): void
    vfuncStart(uri: string): boolean
    vfuncStartRemote(server: string, uri: string): boolean
    /* Signals of IAnjuta.DebugManager */
    connect(sigName: "breakpoint-changed", callback: (($obj: DebugManager, object?: object | null) => void)): number
    connect_after(sigName: "breakpoint-changed", callback: (($obj: DebugManager, object?: object | null) => void)): number
    emit(sigName: "breakpoint-changed", object?: object | null): void
    on(sigName: "breakpoint-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "breakpoint-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "breakpoint-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-started", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "debugger-started"): void
    on(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-stopped", callback: (($obj: DebugManager, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebugManager, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    on(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "frame-changed", callback: (($obj: DebugManager, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebugManager, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    on(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "location-changed", callback: (($obj: DebugManager, object: number, p0: string, p1: number) => void)): number
    connect_after(sigName: "location-changed", callback: (($obj: DebugManager, object: number, p0: string, p1: number) => void)): number
    emit(sigName: "location-changed", object: number, p0: string, p1: number): void
    on(sigName: "location-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "location-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "location-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-exited", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-exited"): void
    on(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-loaded", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-loaded"): void
    on(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-moved", callback: (($obj: DebugManager, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebugManager, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    on(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-running", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-running"): void
    on(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-started", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-started", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-started"): void
    on(sigName: "program-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-stopped", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-stopped"): void
    on(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-unloaded", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "program-unloaded", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "program-unloaded"): void
    on(sigName: "program-unloaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-unloaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-unloaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sharedlib-event", callback: (($obj: DebugManager) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebugManager) => void)): number
    emit(sigName: "sharedlib-event"): void
    on(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "signal-received", callback: (($obj: DebugManager, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebugManager, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    on(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Debugger {
    /* Methods of IAnjuta.Debugger */
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
    /* Virtual methods of IAnjuta.Debugger */
    vfuncAbort(): boolean
    vfuncAttach(pid: number, sourceSearchDirectories: string[]): boolean
    vfuncConnect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfuncDebuggerReady(state: DebuggerState): void
    vfuncDebuggerStarted(): void
    vfuncDebuggerStopped(err: GLib.Error): void
    vfuncDisableLog(): void
    vfuncEnableLog(log: MessageView): void
    vfuncExit(): boolean
    vfuncFrameChanged(frame: number, thread: number): void
    vfuncGetState(): DebuggerState
    vfuncHandleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfuncInterrupt(): boolean
    vfuncLoad(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    vfuncProgramExited(): void
    vfuncProgramLoaded(): void
    vfuncProgramMoved(pid: number, tid: number, address: number, file: string, line: number): void
    vfuncProgramRunning(): void
    vfuncProgramStopped(): void
    vfuncQuit(): boolean
    vfuncRun(): boolean
    vfuncRunFrom(file: string, line: number): boolean
    vfuncRunTo(file: string, line: number): boolean
    vfuncSendCommand(command: string): boolean
    vfuncSetEnvironment(env: string): boolean
    vfuncSetFrame(frame: number): boolean
    vfuncSetThread(thread: number): boolean
    vfuncSetWorkingDirectory(dir: string): boolean
    vfuncSharedlibEvent(): void
    vfuncSignalReceived(name: string, description: string): void
    vfuncStart(args: string, terminal: boolean, stop: boolean): boolean
    vfuncStepIn(): boolean
    vfuncStepOut(): boolean
    vfuncStepOver(): boolean
    vfuncUnload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: Debugger, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: Debugger, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    on(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-started", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: Debugger) => void)): number
    emit(sigName: "debugger-started"): void
    on(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-stopped", callback: (($obj: Debugger, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: Debugger, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    on(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "frame-changed", callback: (($obj: Debugger, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: Debugger, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    on(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-exited", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-exited"): void
    on(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-loaded", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-loaded"): void
    on(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-moved", callback: (($obj: Debugger, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: Debugger, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    on(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-running", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-running"): void
    on(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-stopped", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: Debugger) => void)): number
    emit(sigName: "program-stopped"): void
    on(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sharedlib-event", callback: (($obj: Debugger) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: Debugger) => void)): number
    emit(sigName: "sharedlib-event"): void
    on(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "signal-received", callback: (($obj: Debugger, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: Debugger, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    on(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class DebuggerBreakpoint {
    /* Methods of IAnjuta.DebuggerBreakpoint */
    implementBreakpoint(): number
    /* Methods of IAnjuta.Debugger */
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
    /* Virtual methods of IAnjuta.DebuggerBreakpoint */
    vfuncImplementBreakpoint(): number
    /* Virtual methods of IAnjuta.Debugger */
    vfuncAbort(): boolean
    vfuncAttach(pid: number, sourceSearchDirectories: string[]): boolean
    vfuncConnect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfuncDebuggerReady(state: DebuggerState): void
    vfuncDebuggerStarted(): void
    vfuncDebuggerStopped(err: GLib.Error): void
    vfuncDisableLog(): void
    vfuncEnableLog(log: MessageView): void
    vfuncExit(): boolean
    vfuncFrameChanged(frame: number, thread: number): void
    vfuncGetState(): DebuggerState
    vfuncHandleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfuncInterrupt(): boolean
    vfuncLoad(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    vfuncProgramExited(): void
    vfuncProgramLoaded(): void
    vfuncProgramMoved(pid: number, tid: number, address: number, file: string, line: number): void
    vfuncProgramRunning(): void
    vfuncProgramStopped(): void
    vfuncQuit(): boolean
    vfuncRun(): boolean
    vfuncRunFrom(file: string, line: number): boolean
    vfuncRunTo(file: string, line: number): boolean
    vfuncSendCommand(command: string): boolean
    vfuncSetEnvironment(env: string): boolean
    vfuncSetFrame(frame: number): boolean
    vfuncSetThread(thread: number): boolean
    vfuncSetWorkingDirectory(dir: string): boolean
    vfuncSharedlibEvent(): void
    vfuncSignalReceived(name: string, description: string): void
    vfuncStart(args: string, terminal: boolean, stop: boolean): boolean
    vfuncStepIn(): boolean
    vfuncStepOut(): boolean
    vfuncStepOver(): boolean
    vfuncUnload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerBreakpoint, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerBreakpoint, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    on(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-started", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "debugger-started"): void
    on(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerBreakpoint, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerBreakpoint, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    on(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "frame-changed", callback: (($obj: DebuggerBreakpoint, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerBreakpoint, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    on(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-exited", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-exited"): void
    on(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-loaded", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-loaded"): void
    on(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-moved", callback: (($obj: DebuggerBreakpoint, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerBreakpoint, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    on(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-running", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-running"): void
    on(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-stopped", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "program-stopped"): void
    on(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerBreakpoint) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerBreakpoint) => void)): number
    emit(sigName: "sharedlib-event"): void
    on(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "signal-received", callback: (($obj: DebuggerBreakpoint, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerBreakpoint, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    on(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DebuggerInstruction {
    /* Methods of IAnjuta.DebuggerInstruction */
    runFromAddress(address: number): boolean
    runToAddress(address: number): boolean
    stepInInstruction(): boolean
    stepOverInstruction(): boolean
    /* Methods of IAnjuta.Debugger */
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
    /* Virtual methods of IAnjuta.DebuggerInstruction */
    vfuncRunFromAddress(address: number): boolean
    vfuncRunToAddress(address: number): boolean
    vfuncStepInInstruction(): boolean
    vfuncStepOverInstruction(): boolean
    /* Virtual methods of IAnjuta.Debugger */
    vfuncAbort(): boolean
    vfuncAttach(pid: number, sourceSearchDirectories: string[]): boolean
    vfuncConnect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfuncDebuggerReady(state: DebuggerState): void
    vfuncDebuggerStarted(): void
    vfuncDebuggerStopped(err: GLib.Error): void
    vfuncDisableLog(): void
    vfuncEnableLog(log: MessageView): void
    vfuncExit(): boolean
    vfuncFrameChanged(frame: number, thread: number): void
    vfuncGetState(): DebuggerState
    vfuncHandleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfuncInterrupt(): boolean
    vfuncLoad(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    vfuncProgramExited(): void
    vfuncProgramLoaded(): void
    vfuncProgramMoved(pid: number, tid: number, address: number, file: string, line: number): void
    vfuncProgramRunning(): void
    vfuncProgramStopped(): void
    vfuncQuit(): boolean
    vfuncRun(): boolean
    vfuncRunFrom(file: string, line: number): boolean
    vfuncRunTo(file: string, line: number): boolean
    vfuncSendCommand(command: string): boolean
    vfuncSetEnvironment(env: string): boolean
    vfuncSetFrame(frame: number): boolean
    vfuncSetThread(thread: number): boolean
    vfuncSetWorkingDirectory(dir: string): boolean
    vfuncSharedlibEvent(): void
    vfuncSignalReceived(name: string, description: string): void
    vfuncStart(args: string, terminal: boolean, stop: boolean): boolean
    vfuncStepIn(): boolean
    vfuncStepOut(): boolean
    vfuncStepOver(): boolean
    vfuncUnload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerInstruction, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerInstruction, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    on(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-started", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "debugger-started"): void
    on(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerInstruction, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerInstruction, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    on(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "frame-changed", callback: (($obj: DebuggerInstruction, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerInstruction, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    on(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-exited", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-exited"): void
    on(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-loaded", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-loaded"): void
    on(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-moved", callback: (($obj: DebuggerInstruction, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerInstruction, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    on(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-running", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-running"): void
    on(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-stopped", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "program-stopped"): void
    on(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerInstruction) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerInstruction) => void)): number
    emit(sigName: "sharedlib-event"): void
    on(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "signal-received", callback: (($obj: DebuggerInstruction, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerInstruction, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    on(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DebuggerMemory {
    /* Methods of IAnjuta.Debugger */
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
    /* Virtual methods of IAnjuta.Debugger */
    vfuncAbort(): boolean
    vfuncAttach(pid: number, sourceSearchDirectories: string[]): boolean
    vfuncConnect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfuncDebuggerReady(state: DebuggerState): void
    vfuncDebuggerStarted(): void
    vfuncDebuggerStopped(err: GLib.Error): void
    vfuncDisableLog(): void
    vfuncEnableLog(log: MessageView): void
    vfuncExit(): boolean
    vfuncFrameChanged(frame: number, thread: number): void
    vfuncGetState(): DebuggerState
    vfuncHandleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfuncInterrupt(): boolean
    vfuncLoad(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    vfuncProgramExited(): void
    vfuncProgramLoaded(): void
    vfuncProgramMoved(pid: number, tid: number, address: number, file: string, line: number): void
    vfuncProgramRunning(): void
    vfuncProgramStopped(): void
    vfuncQuit(): boolean
    vfuncRun(): boolean
    vfuncRunFrom(file: string, line: number): boolean
    vfuncRunTo(file: string, line: number): boolean
    vfuncSendCommand(command: string): boolean
    vfuncSetEnvironment(env: string): boolean
    vfuncSetFrame(frame: number): boolean
    vfuncSetThread(thread: number): boolean
    vfuncSetWorkingDirectory(dir: string): boolean
    vfuncSharedlibEvent(): void
    vfuncSignalReceived(name: string, description: string): void
    vfuncStart(args: string, terminal: boolean, stop: boolean): boolean
    vfuncStepIn(): boolean
    vfuncStepOut(): boolean
    vfuncStepOver(): boolean
    vfuncUnload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerMemory, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerMemory, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    on(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-started", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "debugger-started"): void
    on(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerMemory, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerMemory, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    on(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "frame-changed", callback: (($obj: DebuggerMemory, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerMemory, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    on(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-exited", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-exited"): void
    on(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-loaded", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-loaded"): void
    on(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-moved", callback: (($obj: DebuggerMemory, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerMemory, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    on(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-running", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-running"): void
    on(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-stopped", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "program-stopped"): void
    on(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerMemory) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerMemory) => void)): number
    emit(sigName: "sharedlib-event"): void
    on(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "signal-received", callback: (($obj: DebuggerMemory, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerMemory, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    on(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DebuggerRegister {
    /* Methods of IAnjuta.DebuggerRegister */
    writeRegister(value: DebuggerRegisterData): boolean
    /* Methods of IAnjuta.Debugger */
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
    /* Virtual methods of IAnjuta.DebuggerRegister */
    vfuncWriteRegister(value: DebuggerRegisterData): boolean
    /* Virtual methods of IAnjuta.Debugger */
    vfuncAbort(): boolean
    vfuncAttach(pid: number, sourceSearchDirectories: string[]): boolean
    vfuncConnect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfuncDebuggerReady(state: DebuggerState): void
    vfuncDebuggerStarted(): void
    vfuncDebuggerStopped(err: GLib.Error): void
    vfuncDisableLog(): void
    vfuncEnableLog(log: MessageView): void
    vfuncExit(): boolean
    vfuncFrameChanged(frame: number, thread: number): void
    vfuncGetState(): DebuggerState
    vfuncHandleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfuncInterrupt(): boolean
    vfuncLoad(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    vfuncProgramExited(): void
    vfuncProgramLoaded(): void
    vfuncProgramMoved(pid: number, tid: number, address: number, file: string, line: number): void
    vfuncProgramRunning(): void
    vfuncProgramStopped(): void
    vfuncQuit(): boolean
    vfuncRun(): boolean
    vfuncRunFrom(file: string, line: number): boolean
    vfuncRunTo(file: string, line: number): boolean
    vfuncSendCommand(command: string): boolean
    vfuncSetEnvironment(env: string): boolean
    vfuncSetFrame(frame: number): boolean
    vfuncSetThread(thread: number): boolean
    vfuncSetWorkingDirectory(dir: string): boolean
    vfuncSharedlibEvent(): void
    vfuncSignalReceived(name: string, description: string): void
    vfuncStart(args: string, terminal: boolean, stop: boolean): boolean
    vfuncStepIn(): boolean
    vfuncStepOut(): boolean
    vfuncStepOver(): boolean
    vfuncUnload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerRegister, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerRegister, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    on(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-started", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "debugger-started"): void
    on(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerRegister, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerRegister, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    on(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "frame-changed", callback: (($obj: DebuggerRegister, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerRegister, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    on(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-exited", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-exited"): void
    on(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-loaded", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-loaded"): void
    on(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-moved", callback: (($obj: DebuggerRegister, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerRegister, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    on(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-running", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-running"): void
    on(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-stopped", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "program-stopped"): void
    on(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerRegister) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerRegister) => void)): number
    emit(sigName: "sharedlib-event"): void
    on(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "signal-received", callback: (($obj: DebuggerRegister, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerRegister, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    on(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DebuggerVariable {
    /* Methods of IAnjuta.DebuggerVariable */
    assign(name: string, value: string): boolean
    destroy(name: string): boolean
    /* Methods of IAnjuta.Debugger */
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
    /* Virtual methods of IAnjuta.DebuggerVariable */
    vfuncAssign(name: string, value: string): boolean
    vfuncDestroy(name: string): boolean
    /* Virtual methods of IAnjuta.Debugger */
    vfuncAbort(): boolean
    vfuncAttach(pid: number, sourceSearchDirectories: string[]): boolean
    vfuncConnect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    vfuncDebuggerReady(state: DebuggerState): void
    vfuncDebuggerStarted(): void
    vfuncDebuggerStopped(err: GLib.Error): void
    vfuncDisableLog(): void
    vfuncEnableLog(log: MessageView): void
    vfuncExit(): boolean
    vfuncFrameChanged(frame: number, thread: number): void
    vfuncGetState(): DebuggerState
    vfuncHandleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    vfuncInterrupt(): boolean
    vfuncLoad(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    vfuncProgramExited(): void
    vfuncProgramLoaded(): void
    vfuncProgramMoved(pid: number, tid: number, address: number, file: string, line: number): void
    vfuncProgramRunning(): void
    vfuncProgramStopped(): void
    vfuncQuit(): boolean
    vfuncRun(): boolean
    vfuncRunFrom(file: string, line: number): boolean
    vfuncRunTo(file: string, line: number): boolean
    vfuncSendCommand(command: string): boolean
    vfuncSetEnvironment(env: string): boolean
    vfuncSetFrame(frame: number): boolean
    vfuncSetThread(thread: number): boolean
    vfuncSetWorkingDirectory(dir: string): boolean
    vfuncSharedlibEvent(): void
    vfuncSignalReceived(name: string, description: string): void
    vfuncStart(args: string, terminal: boolean, stop: boolean): boolean
    vfuncStepIn(): boolean
    vfuncStepOut(): boolean
    vfuncStepOver(): boolean
    vfuncUnload(): boolean
    /* Signals of IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: (($obj: DebuggerVariable, object: DebuggerState) => void)): number
    connect_after(sigName: "debugger-ready", callback: (($obj: DebuggerVariable, object: DebuggerState) => void)): number
    emit(sigName: "debugger-ready", object: DebuggerState): void
    on(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-started", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "debugger-started", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "debugger-started"): void
    on(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "debugger-stopped", callback: (($obj: DebuggerVariable, object: GLib.Error) => void)): number
    connect_after(sigName: "debugger-stopped", callback: (($obj: DebuggerVariable, object: GLib.Error) => void)): number
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    on(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "frame-changed", callback: (($obj: DebuggerVariable, object: number, p0: number) => void)): number
    connect_after(sigName: "frame-changed", callback: (($obj: DebuggerVariable, object: number, p0: number) => void)): number
    emit(sigName: "frame-changed", object: number, p0: number): void
    on(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-exited", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-exited", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-exited"): void
    on(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-loaded", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-loaded", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-loaded"): void
    on(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-moved", callback: (($obj: DebuggerVariable, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    connect_after(sigName: "program-moved", callback: (($obj: DebuggerVariable, object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    on(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-running", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-running", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-running"): void
    on(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "program-stopped", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "program-stopped", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "program-stopped"): void
    on(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sharedlib-event", callback: (($obj: DebuggerVariable) => void)): number
    connect_after(sigName: "sharedlib-event", callback: (($obj: DebuggerVariable) => void)): number
    emit(sigName: "sharedlib-event"): void
    on(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "signal-received", callback: (($obj: DebuggerVariable, object: string, p0: string) => void)): number
    connect_after(sigName: "signal-received", callback: (($obj: DebuggerVariable, object: string, p0: string) => void)): number
    emit(sigName: "signal-received", object: string, p0: string): void
    on(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Document {
    /* Methods of IAnjuta.Document */
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
    /* Virtual methods of IAnjuta.Document */
    vfuncBeginUndoAction(): void
    vfuncCanRedo(): boolean
    vfuncCanUndo(): boolean
    vfuncClear(): void
    vfuncCopy(): void
    vfuncCut(): void
    vfuncEndUndoAction(): void
    vfuncGetFilename(): string
    vfuncGrabFocus(): void
    vfuncPaste(): void
    vfuncRedo(): void
    vfuncUndo(): void
    vfuncUpdateUi(): void
    /* Signals of IAnjuta.Document */
    connect(sigName: "update-ui", callback: (($obj: Document) => void)): number
    connect_after(sigName: "update-ui", callback: (($obj: Document) => void)): number
    emit(sigName: "update-ui"): void
    on(sigName: "update-ui", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "update-ui", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "update-ui", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class DocumentManager {
    /* Methods of IAnjuta.DocumentManager */
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
    /* Virtual methods of IAnjuta.DocumentManager */
    vfuncAddBookmark(file: Gio.File, line: number): void
    vfuncAddBuffer(name: string, content: string): Editor
    vfuncAddDocument(document: Document): void
    vfuncDocumentAdded(doc: Document): void
    vfuncDocumentRemoved(doc: Document): void
    vfuncFindDocumentWithFile(file: Gio.File): Document
    vfuncGetCurrentDocument(): Document
    vfuncGetDocWidgets(): Gtk.Widget[]
    vfuncGetFile(filename: string): Gio.File
    vfuncGotoFileLine(file: Gio.File, lineno: number): Editor
    vfuncGotoFileLineMark(file: Gio.File, lineno: number, mark: boolean): Editor
    vfuncRemoveDocument(document: Document, saveBefore: boolean): boolean
    vfuncSetCurrentDocument(document: Document): void
    /* Signals of IAnjuta.DocumentManager */
    connect(sigName: "document-added", callback: (($obj: DocumentManager, doc: Document) => void)): number
    connect_after(sigName: "document-added", callback: (($obj: DocumentManager, doc: Document) => void)): number
    emit(sigName: "document-added", doc: Document): void
    on(sigName: "document-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "document-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "document-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "document-removed", callback: (($obj: DocumentManager, doc: Document) => void)): number
    connect_after(sigName: "document-removed", callback: (($obj: DocumentManager, doc: Document) => void)): number
    emit(sigName: "document-removed", doc: Document): void
    on(sigName: "document-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "document-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "document-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Editor {
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: Editor) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: Editor) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: Editor, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Editor, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: Editor, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: Editor, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: Editor, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: Editor, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: Editor) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: Editor) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: Editor, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: Editor, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: Editor, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: Editor, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: Editor, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: Editor, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class EditorAssist {
    /* Methods of IAnjuta.EditorAssist */
    add(provider: Provider): void
    invoke(provider: Provider): void
    proposals(provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean): void
    remove(provider: Provider): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorAssist */
    vfuncAdd(provider: Provider): void
    vfuncCancelled(): void
    vfuncInvoke(provider: Provider): void
    vfuncProposals(provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean): void
    vfuncRemove(provider: Provider): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.EditorAssist */
    connect(sigName: "cancelled", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "cancelled"): void
    on(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorAssist, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorAssist, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorAssist, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorAssist, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorAssist, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorAssist, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorAssist) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorAssist) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorAssist, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorAssist, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorAssist, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorAssist, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorAssist, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorAssist, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorCell {
    /* Methods of IAnjuta.EditorCell */
    getAttribute(): EditorAttribute
    getChar(charIndex: number): number
    getCharacter(): string
    getLength(): number
    /* Virtual methods of IAnjuta.EditorCell */
    vfuncGetAttribute(): EditorAttribute
    vfuncGetChar(charIndex: number): number
    vfuncGetCharacter(): string
    vfuncGetLength(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorCellStyle {
    /* Methods of IAnjuta.EditorCellStyle */
    getBackgroundColor(): string
    getColor(): string
    getFontDescription(): string
    /* Methods of IAnjuta.EditorCell */
    getAttribute(): EditorAttribute
    getChar(charIndex: number): number
    getCharacter(): string
    getLength(): number
    /* Virtual methods of IAnjuta.EditorCellStyle */
    vfuncGetBackgroundColor(): string
    vfuncGetColor(): string
    vfuncGetFontDescription(): string
    /* Virtual methods of IAnjuta.EditorCell */
    vfuncGetAttribute(): EditorAttribute
    vfuncGetChar(charIndex: number): number
    vfuncGetCharacter(): string
    vfuncGetLength(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorComment {
    /* Methods of IAnjuta.EditorComment */
    block(): void
    box(): void
    stream(): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorComment */
    vfuncBlock(): void
    vfuncBox(): void
    vfuncStream(): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorComment) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorComment) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorComment, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorComment, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorComment, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorComment, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorComment, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorComment, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorComment) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorComment) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorComment, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorComment, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorComment, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorComment, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorComment, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorComment, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorConvert {
    /* Methods of IAnjuta.EditorConvert */
    toLower(startPosition: Iterable, endPosition: Iterable): void
    toUpper(startPosition: Iterable, endPosition: Iterable): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorConvert */
    vfuncToLower(startPosition: Iterable, endPosition: Iterable): void
    vfuncToUpper(startPosition: Iterable, endPosition: Iterable): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorConvert) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorConvert) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorConvert, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorConvert, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorConvert, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorConvert, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorConvert, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorConvert, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorConvert) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorConvert) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorConvert, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorConvert, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorConvert, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorConvert, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorConvert, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorConvert, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Methods of IAnjuta.EditorFolds */
    closeAll(): void
    openAll(): void
    toggleCurrent(): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorFolds */
    vfuncCloseAll(): void
    vfuncOpenAll(): void
    vfuncToggleCurrent(): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorFolds) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorFolds) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorFolds, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorFolds, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorFolds, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorFolds, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorFolds, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorFolds, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorFolds) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorFolds) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorFolds, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorFolds, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorFolds, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorFolds, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorFolds, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorFolds, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorGladeSignal {
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorGladeSignal */
    vfuncDrop(iterator: Iterable, signalData: string): void
    vfuncDropPossible(iterator: Iterable): boolean
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.EditorGladeSignal */
    connect(sigName: "drop", callback: (($obj: EditorGladeSignal, iter: Iterable, signalData: string) => void)): number
    connect_after(sigName: "drop", callback: (($obj: EditorGladeSignal, iter: Iterable, signalData: string) => void)): number
    emit(sigName: "drop", iter: Iterable, signalData: string): void
    on(sigName: "drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drop-possible", callback: (($obj: EditorGladeSignal, iter: Iterable) => boolean)): number
    connect_after(sigName: "drop-possible", callback: (($obj: EditorGladeSignal, iter: Iterable) => boolean)): number
    emit(sigName: "drop-possible", iter: Iterable): void
    on(sigName: "drop-possible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drop-possible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drop-possible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorGladeSignal) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorGladeSignal) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorGladeSignal, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorGladeSignal, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorGladeSignal, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorGladeSignal, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorGladeSignal, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorGladeSignal, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorGladeSignal) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorGladeSignal) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorGladeSignal, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorGladeSignal, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorGladeSignal, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorGladeSignal, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGladeSignal, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGladeSignal, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorGoto {
    /* Methods of IAnjuta.EditorGoto */
    endBlock(): void
    matchingBrace(): void
    startBlock(): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorGoto */
    vfuncEndBlock(): void
    vfuncMatchingBrace(): void
    vfuncStartBlock(): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorGoto) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorGoto) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorGoto, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorGoto, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorGoto, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorGoto, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorGoto, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorGoto, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorGoto) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorGoto) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorGoto, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorGoto, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorGoto, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorGoto, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGoto, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorGoto, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorHover {
    /* Methods of IAnjuta.EditorHover */
    display(position: Iterable, info: string): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorHover */
    vfuncDisplay(position: Iterable, info: string): void
    vfuncHoverLeave(position: Iterable): void
    vfuncHoverOver(position: Iterable): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.EditorHover */
    connect(sigName: "hover-leave", callback: (($obj: EditorHover, position: Iterable) => void)): number
    connect_after(sigName: "hover-leave", callback: (($obj: EditorHover, position: Iterable) => void)): number
    emit(sigName: "hover-leave", position: Iterable): void
    on(sigName: "hover-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hover-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hover-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hover-over", callback: (($obj: EditorHover, position: Iterable) => void)): number
    connect_after(sigName: "hover-over", callback: (($obj: EditorHover, position: Iterable) => void)): number
    emit(sigName: "hover-over", position: Iterable): void
    on(sigName: "hover-over", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hover-over", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hover-over", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorHover) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorHover) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorHover, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorHover, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorHover, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorHover, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorHover, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorHover, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorHover) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorHover) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorHover, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorHover, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorHover, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorHover, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorHover, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorHover, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorLanguage {
    /* Methods of IAnjuta.EditorLanguage */
    getLanguage(): string
    getLanguageName(language: string): string
    getSupportedLanguages(): string[]
    setLanguage(language: string): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorLanguage */
    vfuncGetLanguage(): string
    vfuncGetLanguageName(language: string): string
    vfuncGetSupportedLanguages(): string[]
    vfuncLanguageChanged(language: string): void
    vfuncSetLanguage(language: string): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.EditorLanguage */
    connect(sigName: "language-changed", callback: (($obj: EditorLanguage, language: string) => void)): number
    connect_after(sigName: "language-changed", callback: (($obj: EditorLanguage, language: string) => void)): number
    emit(sigName: "language-changed", language: string): void
    on(sigName: "language-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "language-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "language-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorLanguage) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorLanguage) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorLanguage, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorLanguage, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorLanguage, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorLanguage, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorLanguage, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorLanguage, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorLanguage) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorLanguage) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorLanguage, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorLanguage, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorLanguage, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorLanguage, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLanguage, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLanguage, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorLineMode {
    /* Methods of IAnjuta.EditorLineMode */
    convert(mode: EditorLineModeType): void
    fix(): void
    get(): EditorLineModeType
    set(mode: EditorLineModeType): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorLineMode */
    vfuncConvert(mode: EditorLineModeType): void
    vfuncFix(): void
    vfuncGet(): EditorLineModeType
    vfuncSet(mode: EditorLineModeType): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorLineMode) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorLineMode) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorLineMode, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorLineMode, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorLineMode, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorLineMode, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorLineMode, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorLineMode, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorLineMode) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorLineMode) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorLineMode, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorLineMode, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorLineMode, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorLineMode, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLineMode, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorLineMode, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorSearch {
    /* Methods of IAnjuta.EditorSearch */
    backward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    forward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorSearch */
    vfuncBackward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    vfuncForward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorSearch) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorSearch) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorSearch, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorSearch, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorSearch, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorSearch, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorSearch, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorSearch, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorSearch) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorSearch) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorSearch, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorSearch, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorSearch, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorSearch, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSearch, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSearch, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorSelection {
    /* Methods of IAnjuta.EditorSelection */
    get(): string
    hasSelection(): boolean
    replace(text: string, length: number): void
    selectAll(): void
    selectBlock(): void
    selectFunction(): void
    set(start: Iterable, end: Iterable, scroll: boolean): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorSelection */
    vfuncGet(): string
    vfuncHasSelection(): boolean
    vfuncReplace(text: string, length: number): void
    vfuncSelectAll(): void
    vfuncSelectBlock(): void
    vfuncSelectFunction(): void
    vfuncSet(start: Iterable, end: Iterable, scroll: boolean): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorSelection) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorSelection) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorSelection, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorSelection, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorSelection, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorSelection, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorSelection, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorSelection, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorSelection) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorSelection) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorSelection, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorSelection, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorSelection, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorSelection, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSelection, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorSelection, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorTip {
    /* Methods of IAnjuta.EditorTip */
    cancel(): void
    show(tips: string[], position: Iterable): void
    visible(): boolean
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorTip */
    vfuncCancel(): void
    vfuncShow(tips: string[], position: Iterable): void
    vfuncVisible(): boolean
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorTip) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorTip) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorTip, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorTip, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorTip, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorTip, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorTip, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorTip, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorTip) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorTip) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorTip, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorTip, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorTip, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorTip, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorTip, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorTip, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorView {
    /* Methods of IAnjuta.EditorView */
    create(): void
    getCount(): number
    removeCurrent(): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorView */
    vfuncCreate(): void
    vfuncGetCount(): number
    vfuncRemoveCurrent(): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorView) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorView) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorView, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorView, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorView, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorView, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorView, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorView, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorView) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorView) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorView, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorView, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorView, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorView, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorView, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorView, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class EditorZoom {
    /* Methods of IAnjuta.EditorZoom */
    in(): void
    out(): void
    /* Methods of IAnjuta.Editor */
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
    /* Virtual methods of IAnjuta.EditorZoom */
    vfuncIn(): void
    vfuncOut(): void
    /* Virtual methods of IAnjuta.Editor */
    vfuncAppend(text: string, length: number): void
    vfuncBackspace(): void
    vfuncChanged(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    vfuncCharAdded(position: Iterable, ch: number): void
    vfuncCodeChanged(position: Iterable, code: string): void
    vfuncCursorMoved(): void
    vfuncErase(positionStart: Iterable, positionEnd: Iterable): void
    vfuncEraseAll(): void
    vfuncGetColumn(): number
    vfuncGetCurrentWord(): string
    vfuncGetEndPosition(): Iterable
    vfuncGetIndentsize(): number
    vfuncGetLength(): number
    vfuncGetLineBeginPosition(line: number): Iterable
    vfuncGetLineEndPosition(line: number): Iterable
    vfuncGetLineFromPosition(position: Iterable): number
    vfuncGetLineno(): number
    vfuncGetOffset(): number
    vfuncGetOverwrite(): boolean
    vfuncGetPosition(): Iterable
    vfuncGetStartPosition(): Iterable
    vfuncGetTabsize(): number
    vfuncGetText(begin: Iterable, end: Iterable): string
    vfuncGetTextAll(): string
    vfuncGetUseSpaces(): boolean
    vfuncGladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    vfuncGladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    vfuncGotoEnd(): void
    vfuncGotoLine(lineno: number): void
    vfuncGotoPosition(position: Iterable): void
    vfuncGotoStart(): void
    vfuncInsert(position: Iterable, text: string, length: number): void
    vfuncLineMarksGutterClicked(location: number): void
    vfuncSetAutoIndent(autoIndent: boolean): void
    vfuncSetIndentsize(indentsize: number): void
    vfuncSetPopupMenu(menu: Gtk.Widget): void
    vfuncSetTabsize(tabsize: number): void
    vfuncSetUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta.Editor */
    connect(sigName: "backspace", callback: (($obj: EditorZoom) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: EditorZoom) => void)): number
    emit(sigName: "backspace"): void
    on(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: EditorZoom, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: EditorZoom, added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "char-added", callback: (($obj: EditorZoom, ch: Iterable, obj: number) => void)): number
    connect_after(sigName: "char-added", callback: (($obj: EditorZoom, ch: Iterable, obj: number) => void)): number
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    on(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "code-changed", callback: (($obj: EditorZoom, code: Iterable, obj: string) => void)): number
    connect_after(sigName: "code-changed", callback: (($obj: EditorZoom, code: Iterable, obj: string) => void)): number
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    on(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-moved", callback: (($obj: EditorZoom) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: EditorZoom) => void)): number
    emit(sigName: "cursor-moved"): void
    on(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-callback-add", callback: (($obj: EditorZoom, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    connect_after(sigName: "glade-callback-add", callback: (($obj: EditorZoom, signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    on(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "glade-member-add", callback: (($obj: EditorZoom, widgetName: string, filename: string, obj: string) => void)): number
    connect_after(sigName: "glade-member-add", callback: (($obj: EditorZoom, widgetName: string, filename: string, obj: string) => void)): number
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    on(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorZoom, doubleClick: number) => void)): number
    connect_after(sigName: "line-marks-gutter-clicked", callback: (($obj: EditorZoom, doubleClick: number) => void)): number
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    on(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Environment {
    /* Methods of IAnjuta.Environment */
    getRealDirectory(dir: string): string
    override(dirp: string, argvp: string, envp: string): boolean
    /* Virtual methods of IAnjuta.Environment */
    vfuncGetRealDirectory(dir: string): string
    vfuncOverride(dirp: string, argvp: string, envp: string): boolean
    static name: string
}
export class File {
    /* Methods of IAnjuta.File */
    getFile(): Gio.File
    open(file: Gio.File): void
    /* Virtual methods of IAnjuta.File */
    vfuncGetFile(): Gio.File
    vfuncOpen(file: Gio.File): void
    vfuncOpened(): void
    /* Signals of IAnjuta.File */
    connect(sigName: "opened", callback: (($obj: File) => void)): number
    connect_after(sigName: "opened", callback: (($obj: File) => void)): number
    emit(sigName: "opened"): void
    on(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class FileLoader {
    /* Methods of IAnjuta.FileLoader */
    peekInterface(file: Gio.File): string
    /* Virtual methods of IAnjuta.FileLoader */
    vfuncPeekInterface(file: Gio.File): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class FileManager {
    /* Methods of IAnjuta.FileManager */
    setRoot(rootUri: string): void
    setSelected(file: Gio.File): void
    /* Virtual methods of IAnjuta.FileManager */
    vfuncSectionChanged(file: Gio.File): void
    vfuncSetRoot(rootUri: string): void
    vfuncSetSelected(file: Gio.File): void
    /* Signals of IAnjuta.FileManager */
    connect(sigName: "section-changed", callback: (($obj: FileManager, err: Gio.File) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: FileManager, err: Gio.File) => void)): number
    emit(sigName: "section-changed", err: Gio.File): void
    on(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class FileSavable {
    /* Methods of IAnjuta.FileSavable */
    isConflict(): boolean
    isDirty(): boolean
    isReadOnly(): boolean
    save(): void
    saveAs(file: Gio.File): void
    setDirty(dirty: boolean): void
    /* Methods of IAnjuta.File */
    getFile(): Gio.File
    open(file: Gio.File): void
    /* Virtual methods of IAnjuta.FileSavable */
    vfuncIsConflict(): boolean
    vfuncIsDirty(): boolean
    vfuncIsReadOnly(): boolean
    vfuncSave(): void
    vfuncSaveAs(file: Gio.File): void
    vfuncSaved(file: Gio.File): void
    vfuncSetDirty(dirty: boolean): void
    vfuncUpdateSaveUi(): void
    /* Virtual methods of IAnjuta.File */
    vfuncGetFile(): Gio.File
    vfuncOpen(file: Gio.File): void
    vfuncOpened(): void
    /* Signals of IAnjuta.FileSavable */
    connect(sigName: "saved", callback: (($obj: FileSavable, file: Gio.File) => void)): number
    connect_after(sigName: "saved", callback: (($obj: FileSavable, file: Gio.File) => void)): number
    emit(sigName: "saved", file: Gio.File): void
    on(sigName: "saved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "saved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "saved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "update-save-ui", callback: (($obj: FileSavable) => void)): number
    connect_after(sigName: "update-save-ui", callback: (($obj: FileSavable) => void)): number
    emit(sigName: "update-save-ui"): void
    on(sigName: "update-save-ui", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "update-save-ui", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "update-save-ui", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of IAnjuta.File */
    connect(sigName: "opened", callback: (($obj: FileSavable) => void)): number
    connect_after(sigName: "opened", callback: (($obj: FileSavable) => void)): number
    emit(sigName: "opened"): void
    on(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Glade {
    /* Methods of IAnjuta.Glade */
    addAssociation(master: string, slave: string): void
    /* Virtual methods of IAnjuta.Glade */
    vfuncAddAssociation(master: string, slave: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Help {
    /* Methods of IAnjuta.Help */
    search(query: string): void
    /* Virtual methods of IAnjuta.Help */
    vfuncSearch(query: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Indenter {
    /* Methods of IAnjuta.Indenter */
    indent(start: Iterable, end: Iterable): void
    /* Virtual methods of IAnjuta.Indenter */
    vfuncIndent(start: Iterable, end: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Indicable {
    /* Methods of IAnjuta.Indicable */
    clear(): void
    set(beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator): void
    /* Virtual methods of IAnjuta.Indicable */
    vfuncClear(): void
    vfuncSet(beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Iterable {
    /* Methods of IAnjuta.Iterable */
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
    /* Virtual methods of IAnjuta.Iterable */
    vfuncAssign(srcIter: Iterable): void
    vfuncClone(): Iterable
    vfuncCompare(iter2: Iterable): number
    vfuncDiff(iter2: Iterable): number
    vfuncFirst(): boolean
    vfuncGetLength(): number
    vfuncGetPosition(): number
    vfuncLast(): boolean
    vfuncNext(): boolean
    vfuncPrevious(): boolean
    vfuncSetPosition(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class IterableTree {
    /* Methods of IAnjuta.IterableTree */
    children(): boolean
    hasChildren(): boolean
    parent(): boolean
    /* Methods of IAnjuta.Iterable */
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
    /* Virtual methods of IAnjuta.IterableTree */
    vfuncChildren(): boolean
    vfuncHasChildren(): boolean
    vfuncParent(): boolean
    /* Virtual methods of IAnjuta.Iterable */
    vfuncAssign(srcIter: Iterable): void
    vfuncClone(): Iterable
    vfuncCompare(iter2: Iterable): number
    vfuncDiff(iter2: Iterable): number
    vfuncFirst(): boolean
    vfuncGetLength(): number
    vfuncGetPosition(): number
    vfuncLast(): boolean
    vfuncNext(): boolean
    vfuncPrevious(): boolean
    vfuncSetPosition(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Language {
    /* Methods of IAnjuta.Language */
    getFromEditor(editor: EditorLanguage): LanguageId
    getFromMimeType(mimeType: string): LanguageId
    getFromString(string: string): LanguageId
    getLanguages(): number[]
    getMakeTarget(id: LanguageId): string
    getName(id: LanguageId): string
    getNameFromEditor(editor: EditorLanguage): string
    /* Virtual methods of IAnjuta.Language */
    vfuncGetFromEditor(editor: EditorLanguage): LanguageId
    vfuncGetFromMimeType(mimeType: string): LanguageId
    vfuncGetFromString(string: string): LanguageId
    vfuncGetLanguages(): number[]
    vfuncGetMakeTarget(id: LanguageId): string
    vfuncGetName(id: LanguageId): string
    vfuncGetNameFromEditor(editor: EditorLanguage): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class LanguageProvider {
    /* Methods of IAnjuta.LanguageProvider */
    getCalltipCache(callContext: string): string[]
    getCalltipContext(iter: Iterable): string
    newCalltip(callContext: string, iter: Iterable): void
    populateCompletions(iter: Iterable): Iterable | null
    /* Methods of IAnjuta.Provider */
    activate(iter: Iterable, data?: object | null): void
    getName(): string
    getStartIter(): Iterable
    populate(iter: Iterable): void
    /* Virtual methods of IAnjuta.LanguageProvider */
    vfuncGetCalltipCache(callContext: string): string[]
    vfuncGetCalltipContext(iter: Iterable): string
    vfuncNewCalltip(callContext: string, iter: Iterable): void
    vfuncPopulateCompletions(iter: Iterable): Iterable | null
    /* Virtual methods of IAnjuta.Provider */
    vfuncActivate(iter: Iterable, data?: object | null): void
    vfuncGetName(): string
    vfuncGetStartIter(): Iterable
    vfuncPopulate(iter: Iterable): void
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
    /* Methods of IAnjuta.Markable */
    deleteAllMarkers(marker: MarkableMarker): void
    isMarkerSet(location: number, marker: MarkableMarker): boolean
    locationFromHandle(handle: number): number
    mark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    unmark(location: number, marker: MarkableMarker): void
    /* Virtual methods of IAnjuta.Markable */
    vfuncDeleteAllMarkers(marker: MarkableMarker): void
    vfuncIsMarkerSet(location: number, marker: MarkableMarker): boolean
    vfuncLocationFromHandle(handle: number): number
    vfuncMark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    vfuncMarkerClicked(doubleClick: boolean, location: number): void
    vfuncUnmark(location: number, marker: MarkableMarker): void
    /* Signals of IAnjuta.Markable */
    connect(sigName: "marker-clicked", callback: (($obj: Markable, doubleClick: boolean, location: number) => void)): number
    connect_after(sigName: "marker-clicked", callback: (($obj: Markable, doubleClick: boolean, location: number) => void)): number
    emit(sigName: "marker-clicked", doubleClick: boolean, location: number): void
    on(sigName: "marker-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "marker-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "marker-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class MessageManager {
    /* Methods of IAnjuta.MessageManager */
    removeView(view: MessageView): void
    setCurrentView(view: MessageView): void
    setViewIcon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    setViewIconFromStock(view: MessageView, icon: string): void
    setViewTitle(view: MessageView, title: string): void
    /* Virtual methods of IAnjuta.MessageManager */
    vfuncRemoveView(view: MessageView): void
    vfuncSetCurrentView(view: MessageView): void
    vfuncSetViewIcon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    vfuncSetViewIconFromStock(view: MessageView, icon: string): void
    vfuncSetViewTitle(view: MessageView, title: string): void
    static name: string
}
export class MessageView {
    /* Methods of IAnjuta.MessageView */
    append(type: MessageViewType, summary: string, details: string): void
    bufferAppend(text: string): void
    clear(): void
    getCurrentMessage(): string
    selectNext(): void
    selectPrevious(): void
    /* Virtual methods of IAnjuta.MessageView */
    vfuncAppend(type: MessageViewType, summary: string, details: string): void
    vfuncBufferAppend(text: string): void
    vfuncBufferFlushed(line: string): void
    vfuncClear(): void
    vfuncGetCurrentMessage(): string
    vfuncMessageClicked(message: string): void
    vfuncSelectNext(): void
    vfuncSelectPrevious(): void
    /* Signals of IAnjuta.MessageView */
    connect(sigName: "buffer-flushed", callback: (($obj: MessageView, line: string) => void)): number
    connect_after(sigName: "buffer-flushed", callback: (($obj: MessageView, line: string) => void)): number
    emit(sigName: "buffer-flushed", line: string): void
    on(sigName: "buffer-flushed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "buffer-flushed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "buffer-flushed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "message-clicked", callback: (($obj: MessageView, message: string) => void)): number
    connect_after(sigName: "message-clicked", callback: (($obj: MessageView, message: string) => void)): number
    emit(sigName: "message-clicked", message: string): void
    on(sigName: "message-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "message-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "message-clicked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class PluginFactory {
    static name: string
}
export class Preferences {
    /* Methods of IAnjuta.Preferences */
    merge(prefs: Anjuta.Preferences): void
    unmerge(prefs: Anjuta.Preferences): void
    /* Virtual methods of IAnjuta.Preferences */
    vfuncMerge(prefs: Anjuta.Preferences): void
    vfuncUnmerge(prefs: Anjuta.Preferences): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Print {
    /* Methods of IAnjuta.Print */
    print(): void
    printPreview(): void
    /* Virtual methods of IAnjuta.Print */
    vfuncPrint(): void
    vfuncPrintPreview(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Project {
    /* Methods of IAnjuta.Project */
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
    /* Virtual methods of IAnjuta.Project */
    vfuncAddNodeAfter(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    vfuncAddNodeBefore(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    vfuncFileChanged(node?: object | null): void
    vfuncGetNodeInfo(): Anjuta.ProjectNodeInfo[]
    vfuncGetRoot(): Anjuta.ProjectNode
    vfuncIsLoaded(): boolean
    vfuncLoadNode(node: Anjuta.ProjectNode): boolean
    vfuncNodeChanged(node: object | null, error: GLib.Error): void
    vfuncNodeLoaded(node: object | null, error: GLib.Error): void
    vfuncNodeSaved(node: object | null, error: GLib.Error): void
    vfuncRemoveNode(node: Anjuta.ProjectNode): boolean
    vfuncRemoveProperty(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean
    vfuncSaveNode(node: Anjuta.ProjectNode): boolean
    vfuncSetProperty(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null
    /* Signals of IAnjuta.Project */
    connect(sigName: "file-changed", callback: (($obj: Project, node?: object | null) => void)): number
    connect_after(sigName: "file-changed", callback: (($obj: Project, node?: object | null) => void)): number
    emit(sigName: "file-changed", node?: object | null): void
    on(sigName: "file-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "file-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "file-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "node-changed", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-changed", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-changed", node: object | null, error: GLib.Error): void
    on(sigName: "node-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "node-loaded", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-loaded", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-loaded", node: object | null, error: GLib.Error): void
    on(sigName: "node-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "node-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "node-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "node-saved", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    connect_after(sigName: "node-saved", callback: (($obj: Project, node: object | null, error: GLib.Error) => void)): number
    emit(sigName: "node-saved", node: object | null, error: GLib.Error): void
    on(sigName: "node-saved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "node-saved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "node-saved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class ProjectBackend {
    /* Methods of IAnjuta.ProjectBackend */
    newProject(file: Gio.File): Project
    probe(directory: Gio.File): number
    /* Virtual methods of IAnjuta.ProjectBackend */
    vfuncNewProject(file: Gio.File): Project
    vfuncProbe(directory: Gio.File): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class ProjectChooser {
    /* Methods of IAnjuta.ProjectChooser */
    getSelected(): Gio.File
    setProjectModel(manager: ProjectManager, childType: Anjuta.ProjectNodeType): boolean
    /* Virtual methods of IAnjuta.ProjectChooser */
    vfuncChanged(): void
    vfuncGetSelected(): Gio.File
    vfuncSetProjectModel(manager: ProjectManager, childType: Anjuta.ProjectNodeType): boolean
    /* Signals of IAnjuta.ProjectChooser */
    connect(sigName: "changed", callback: (($obj: ProjectChooser) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ProjectChooser) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class ProjectManager {
    /* Methods of IAnjuta.ProjectManager */
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
    /* Virtual methods of IAnjuta.ProjectManager */
    vfuncAddGroup(name: string, defaultGroup?: Gio.File | null): Gio.File
    vfuncAddSource(name: string, defaultTarget?: Gio.File | null): Gio.File
    vfuncAddSourceQuiet(name: string, target: Gio.File): Gio.File
    vfuncAddSources(names: string[], defaultTarget?: Gio.File | null): Gio.File[]
    vfuncAddTarget(name: string, defaultGroup?: Gio.File | null): Gio.File
    vfuncElementAdded(element: Gio.File): void
    vfuncElementRemoved(element: Gio.File): void
    vfuncElementSelected(element: Gio.File): void
    vfuncGetCapabilities(): number
    vfuncGetChildren(parent: Gio.File, childrenType: number): Gio.File[]
    vfuncGetCurrentProject(): Project
    vfuncGetElements(elementType: Anjuta.ProjectNodeType): Gio.File[]
    vfuncGetPackages(): string[]
    vfuncGetSelected(): Gio.File
    vfuncGetTargetType(target: Gio.File): Anjuta.ProjectNodeType
    vfuncGetTargets(targetType: Anjuta.ProjectNodeType): Gio.File[]
    vfuncIsOpen(): boolean
    vfuncProjectLoaded(error: GLib.Error): void
    vfuncRemoveFile(file: Gio.File): boolean
    /* Signals of IAnjuta.ProjectManager */
    connect(sigName: "element-added", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-added", object: Gio.File): void
    on(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "element-removed", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-removed", object: Gio.File): void
    on(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "element-selected", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    connect_after(sigName: "element-selected", callback: (($obj: ProjectManager, object: Gio.File) => void)): number
    emit(sigName: "element-selected", object: Gio.File): void
    on(sigName: "element-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "element-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "element-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "project-loaded", callback: (($obj: ProjectManager, object: GLib.Error) => void)): number
    connect_after(sigName: "project-loaded", callback: (($obj: ProjectManager, object: GLib.Error) => void)): number
    emit(sigName: "project-loaded", object: GLib.Error): void
    on(sigName: "project-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "project-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "project-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Provider {
    /* Methods of IAnjuta.Provider */
    activate(iter: Iterable, data?: object | null): void
    getName(): string
    getStartIter(): Iterable
    populate(iter: Iterable): void
    /* Virtual methods of IAnjuta.Provider */
    vfuncActivate(iter: Iterable, data?: object | null): void
    vfuncGetName(): string
    vfuncGetStartIter(): Iterable
    vfuncPopulate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class SnippetsManager {
    /* Methods of IAnjuta.SnippetsManager */
    insert(key: string, editingSession: boolean): boolean
    /* Virtual methods of IAnjuta.SnippetsManager */
    vfuncInsert(key: string, editingSession: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Stream {
    /* Methods of IAnjuta.Stream */
    open(stream?: object | null): void
    /* Virtual methods of IAnjuta.Stream */
    vfuncOpen(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class StreamLoader {
    /* Methods of IAnjuta.StreamLoader */
    peekInterface(stream?: object | null): string
    /* Virtual methods of IAnjuta.StreamLoader */
    vfuncPeekInterface(stream?: object | null): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class StreamSavable {
    /* Methods of IAnjuta.StreamSavable */
    save(stream?: object | null): void
    /* Methods of IAnjuta.Stream */
    open(stream?: object | null): void
    /* Virtual methods of IAnjuta.StreamSavable */
    vfuncSave(stream?: object | null): void
    /* Virtual methods of IAnjuta.Stream */
    vfuncOpen(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Symbol {
    /* Methods of IAnjuta.Symbol */
    getBoolean(field: SymbolField): boolean
    getIcon(): GdkPixbuf.Pixbuf
    getInt(field: SymbolField): number
    getString(field: SymbolField): string
    getSymType(): SymbolType
    /* Virtual methods of IAnjuta.Symbol */
    vfuncGetBoolean(field: SymbolField): boolean
    vfuncGetIcon(): GdkPixbuf.Pixbuf
    vfuncGetInt(field: SymbolField): number
    vfuncGetString(field: SymbolField): string
    vfuncGetSymType(): SymbolType
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class SymbolManager {
    /* Methods of IAnjuta.SymbolManager */
    activatePackage(pkgName: string, pkgVersion: string): boolean
    deactivateAll(): void
    deactivatePackage(pkgName: string, pkgVersion: string): void
    /* Virtual methods of IAnjuta.SymbolManager */
    vfuncActivatePackage(pkgName: string, pkgVersion: string): boolean
    vfuncDeactivateAll(): void
    vfuncDeactivatePackage(pkgName: string, pkgVersion: string): void
    vfuncPrjScanEnd(processId: number): void
    vfuncSysScanEnd(processId: number): void
    /* Signals of IAnjuta.SymbolManager */
    connect(sigName: "prj-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    connect_after(sigName: "prj-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    emit(sigName: "prj-scan-end", object: number): void
    on(sigName: "prj-scan-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prj-scan-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prj-scan-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sys-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    connect_after(sigName: "sys-scan-end", callback: (($obj: SymbolManager, object: number) => void)): number
    emit(sigName: "sys-scan-end", object: number): void
    on(sigName: "sys-scan-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sys-scan-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sys-scan-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class SymbolQuery {
    /* Methods of IAnjuta.SymbolQuery */
    cancel(): void
    setFields(nFields: number, fields: SymbolField): void
    setFileScope(filescopeSearch: SymbolQueryFileScope): void
    setFilters(filters: SymbolType, includeTypes: boolean): void
    setGroupBy(field: SymbolField): void
    setLimit(limit: number): void
    setMode(mode: SymbolQueryMode): void
    setOffset(offset: number): void
    setOrderBy(field: SymbolField): void
    /* Virtual methods of IAnjuta.SymbolQuery */
    vfuncAsyncResult(result: GObject.Object): void
    vfuncCancel(): void
    vfuncSetFields(nFields: number, fields: SymbolField): void
    vfuncSetFileScope(filescopeSearch: SymbolQueryFileScope): void
    vfuncSetFilters(filters: SymbolType, includeTypes: boolean): void
    vfuncSetGroupBy(field: SymbolField): void
    vfuncSetLimit(limit: number): void
    vfuncSetMode(mode: SymbolQueryMode): void
    vfuncSetOffset(offset: number): void
    vfuncSetOrderBy(field: SymbolField): void
    /* Signals of IAnjuta.SymbolQuery */
    connect(sigName: "async-result", callback: (($obj: SymbolQuery, object: GObject.Object) => void)): number
    connect_after(sigName: "async-result", callback: (($obj: SymbolQuery, object: GObject.Object) => void)): number
    emit(sigName: "async-result", object: GObject.Object): void
    on(sigName: "async-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "async-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "async-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Terminal {
    /* Methods of IAnjuta.Terminal */
    executeCommand(directory: string, command: string, environment: string[]): number
    /* Virtual methods of IAnjuta.Terminal */
    vfuncChildExited(pid: number, status: number): void
    vfuncExecuteCommand(directory: string, command: string, environment: string[]): number
    /* Signals of IAnjuta.Terminal */
    connect(sigName: "child-exited", callback: (($obj: Terminal, object: number, p0: number) => void)): number
    connect_after(sigName: "child-exited", callback: (($obj: Terminal, object: number, p0: number) => void)): number
    emit(sigName: "child-exited", object: number, p0: number): void
    on(sigName: "child-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-exited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Todo {
    /* Methods of IAnjuta.Todo */
    load(file: Gio.File): void
    /* Virtual methods of IAnjuta.Todo */
    vfuncLoad(file: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class Vcs {
    /* Methods of IAnjuta.Vcs */
    add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    checkout(repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /* Virtual methods of IAnjuta.Vcs */
    vfuncAdd(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    vfuncCheckout(repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    vfuncRemove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    vfuncStatusChanged(): void
    /* Signals of IAnjuta.Vcs */
    connect(sigName: "status-changed", callback: (($obj: Vcs) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Vcs) => void)): number
    emit(sigName: "status-changed"): void
    on(sigName: "status-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Wizard {
    /* Methods of IAnjuta.Wizard */
    activate(): void
    /* Virtual methods of IAnjuta.Wizard */
    vfuncActivate(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export abstract class BuildableIface {
    /* Fields of IAnjuta.BuildableIface */
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
    /* Fields of IAnjuta.BuilderIface */
    gIface: GObject.TypeInterface
    cancel: (obj: Builder, handle: BuilderHandle) => void
    getUriConfiguration: (obj: Builder, uri: string) => string
    listConfiguration: (obj: Builder) => string[]
    static name: string
}
export abstract class DebugManagerIface {
    /* Fields of IAnjuta.DebugManagerIface */
    gIface: GObject.TypeInterface
    breakpointChanged: (obj: DebugManager, breakpoint: DebuggerBreakpointItem) => void
    debuggerStarted: (obj: DebugManager) => void
    debuggerStopped: (obj: DebugManager, err: GLib.Error) => void
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
    /* Fields of IAnjuta.DebuggerBreakpointIface */
    gIface: DebuggerIface
    implementBreakpoint: (obj: DebuggerBreakpoint) => number
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
    gIface: GObject.TypeInterface
    debuggerReady: (obj: Debugger, state: DebuggerState) => void
    debuggerStarted: (obj: Debugger) => void
    debuggerStopped: (obj: Debugger, err: GLib.Error) => void
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
    gIface: DebuggerIface
    runFromAddress: (obj: DebuggerInstruction, address: number) => boolean
    runToAddress: (obj: DebuggerInstruction, address: number) => boolean
    stepInInstruction: (obj: DebuggerInstruction) => boolean
    stepOverInstruction: (obj: DebuggerInstruction) => boolean
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
    gIface: DebuggerIface
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
    gIface: DebuggerIface
    writeRegister: (obj: DebuggerRegister, value: DebuggerRegisterData) => boolean
    static name: string
}
export abstract class DebuggerVariableIface {
    /* Fields of IAnjuta.DebuggerVariableIface */
    gIface: DebuggerIface
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
    hasMore: boolean
    static name: string
}
export abstract class DocumentIface {
    /* Fields of IAnjuta.DocumentIface */
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
    /* Fields of IAnjuta.DocumentManagerIface */
    gIface: GObject.TypeInterface
    documentAdded: (obj: DocumentManager, doc: Document) => void
    documentRemoved: (obj: DocumentManager, doc: Document) => void
    addBookmark: (obj: DocumentManager, file: Gio.File, line: number) => void
    addBuffer: (obj: DocumentManager, name: string, content: string) => Editor
    addDocument: (obj: DocumentManager, document: Document) => void
    findDocumentWithFile: (obj: DocumentManager, file: Gio.File) => Document
    getCurrentDocument: (obj: DocumentManager) => Document
    getDocWidgets: (obj: DocumentManager) => Gtk.Widget[]
    getFile: (obj: DocumentManager, filename: string) => Gio.File
    gotoFileLine: (obj: DocumentManager, file: Gio.File, lineno: number) => Editor
    gotoFileLineMark: (obj: DocumentManager, file: Gio.File, lineno: number, mark: boolean) => Editor
    removeDocument: (obj: DocumentManager, document: Document, saveBefore: boolean) => boolean
    setCurrentDocument: (obj: DocumentManager, document: Document) => void
    static name: string
}
export abstract class EditorAssistIface {
    /* Fields of IAnjuta.EditorAssistIface */
    gIface: EditorIface
    cancelled: (obj: EditorAssist) => void
    add: (obj: EditorAssist, provider: Provider) => void
    invoke: (obj: EditorAssist, provider: Provider) => void
    proposals: (obj: EditorAssist, provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean) => void
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
    gIface: GObject.TypeInterface
    getAttribute: (obj: EditorCell) => EditorAttribute
    getChar: (obj: EditorCell, charIndex: number) => number
    getCharacter: (obj: EditorCell) => string
    getLength: (obj: EditorCell) => number
    static name: string
}
export abstract class EditorCellStyleIface {
    /* Fields of IAnjuta.EditorCellStyleIface */
    gIface: EditorCellIface
    getBackgroundColor: (obj: EditorCellStyle) => string
    getColor: (obj: EditorCellStyle) => string
    getFontDescription: (obj: EditorCellStyle) => string
    static name: string
}
export abstract class EditorCommentIface {
    /* Fields of IAnjuta.EditorCommentIface */
    gIface: EditorIface
    block: (obj: EditorComment) => void
    box: (obj: EditorComment) => void
    stream: (obj: EditorComment) => void
    static name: string
}
export abstract class EditorConvertIface {
    /* Fields of IAnjuta.EditorConvertIface */
    gIface: EditorIface
    toLower: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    toUpper: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    static name: string
}
export abstract class EditorFactoryIface {
    /* Fields of IAnjuta.EditorFactoryIface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class EditorFoldsIface {
    /* Fields of IAnjuta.EditorFoldsIface */
    gIface: EditorIface
    closeAll: (obj: EditorFolds) => void
    openAll: (obj: EditorFolds) => void
    toggleCurrent: (obj: EditorFolds) => void
    static name: string
}
export abstract class EditorGladeSignalIface {
    /* Fields of IAnjuta.EditorGladeSignalIface */
    gIface: EditorIface
    drop: (obj: EditorGladeSignal, iterator: Iterable, signalData: string) => void
    dropPossible: (obj: EditorGladeSignal, iterator: Iterable) => boolean
    static name: string
}
export abstract class EditorGotoIface {
    /* Fields of IAnjuta.EditorGotoIface */
    gIface: EditorIface
    endBlock: (obj: EditorGoto) => void
    matchingBrace: (obj: EditorGoto) => void
    startBlock: (obj: EditorGoto) => void
    static name: string
}
export abstract class EditorHoverIface {
    /* Fields of IAnjuta.EditorHoverIface */
    gIface: EditorIface
    hoverLeave: (obj: EditorHover, position: Iterable) => void
    hoverOver: (obj: EditorHover, position: Iterable) => void
    display: (obj: EditorHover, position: Iterable, info: string) => void
    static name: string
}
export abstract class EditorIface {
    /* Fields of IAnjuta.EditorIface */
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
    setPopupMenu: (obj: Editor, menu: Gtk.Widget) => void
    setTabsize: (obj: Editor, tabsize: number) => void
    setUseSpaces: (obj: Editor, useSpaces: boolean) => void
    static name: string
}
export abstract class EditorLanguageIface {
    /* Fields of IAnjuta.EditorLanguageIface */
    gIface: EditorIface
    languageChanged: (obj: EditorLanguage, language: string) => void
    getLanguage: (obj: EditorLanguage) => string
    getLanguageName: (obj: EditorLanguage, language: string) => string
    getSupportedLanguages: (obj: EditorLanguage) => string[]
    setLanguage: (obj: EditorLanguage, language: string) => void
    static name: string
}
export abstract class EditorLineModeIface {
    /* Fields of IAnjuta.EditorLineModeIface */
    gIface: EditorIface
    convert: (obj: EditorLineMode, mode: EditorLineModeType) => void
    fix: (obj: EditorLineMode) => void
    get: (obj: EditorLineMode) => EditorLineModeType
    set: (obj: EditorLineMode, mode: EditorLineModeType) => void
    static name: string
}
export abstract class EditorSearchIface {
    /* Fields of IAnjuta.EditorSearchIface */
    gIface: EditorIface
    backward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    forward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    static name: string
}
export abstract class EditorSelectionIface {
    /* Fields of IAnjuta.EditorSelectionIface */
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
    /* Fields of IAnjuta.EditorTipIface */
    gIface: EditorIface
    cancel: (obj: EditorTip) => void
    show: (obj: EditorTip, tips: string[], position: Iterable) => void
    visible: (obj: EditorTip) => boolean
    static name: string
}
export abstract class EditorViewIface {
    /* Fields of IAnjuta.EditorViewIface */
    gIface: EditorIface
    create: (obj: EditorView) => void
    getCount: (obj: EditorView) => number
    removeCurrent: (obj: EditorView) => void
    static name: string
}
export abstract class EditorZoomIface {
    /* Fields of IAnjuta.EditorZoomIface */
    gIface: EditorIface
    in_: (obj: EditorZoom) => void
    out: (obj: EditorZoom) => void
    static name: string
}
export abstract class EnvironmentIface {
    /* Fields of IAnjuta.EnvironmentIface */
    gIface: GObject.TypeInterface
    getRealDirectory: (obj: Environment, dir: string) => string
    override: (obj: Environment, dirp: string, argvp: string, envp: string) => boolean
    static name: string
}
export abstract class FileIface {
    /* Fields of IAnjuta.FileIface */
    gIface: GObject.TypeInterface
    opened: (obj: File) => void
    getFile: (obj: File) => Gio.File
    open: (obj: File, file: Gio.File) => void
    static name: string
}
export abstract class FileLoaderIface {
    /* Fields of IAnjuta.FileLoaderIface */
    gIface: LoaderIface
    peekInterface: (obj: FileLoader, file: Gio.File) => string
    static name: string
}
export abstract class FileManagerIface {
    /* Fields of IAnjuta.FileManagerIface */
    gIface: GObject.TypeInterface
    sectionChanged: (obj: FileManager, file: Gio.File) => void
    setRoot: (obj: FileManager, rootUri: string) => void
    setSelected: (obj: FileManager, file: Gio.File) => void
    static name: string
}
export abstract class FileSavableIface {
    /* Fields of IAnjuta.FileSavableIface */
    gIface: FileIface
    saved: (obj: FileSavable, file: Gio.File) => void
    updateSaveUi: (obj: FileSavable) => void
    isConflict: (obj: FileSavable) => boolean
    isDirty: (obj: FileSavable) => boolean
    isReadOnly: (obj: FileSavable) => boolean
    save: (obj: FileSavable) => void
    saveAs: (obj: FileSavable, file: Gio.File) => void
    setDirty: (obj: FileSavable, dirty: boolean) => void
    static name: string
}
export abstract class GladeIface {
    /* Fields of IAnjuta.GladeIface */
    gIface: GObject.TypeInterface
    addAssociation: (obj: Glade, master: string, slave: string) => void
    static name: string
}
export abstract class HelpIface {
    /* Fields of IAnjuta.HelpIface */
    gIface: GObject.TypeInterface
    search: (obj: Help, query: string) => void
    static name: string
}
export abstract class IndenterIface {
    /* Fields of IAnjuta.IndenterIface */
    gIface: GObject.TypeInterface
    indent: (obj: Indenter, start: Iterable, end: Iterable) => void
    static name: string
}
export abstract class IndicableIface {
    /* Fields of IAnjuta.IndicableIface */
    gIface: GObject.TypeInterface
    clear: (obj: Indicable) => void
    set: (obj: Indicable, beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator) => void
    static name: string
}
export abstract class IterableIface {
    /* Fields of IAnjuta.IterableIface */
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
    /* Fields of IAnjuta.IterableTreeIface */
    gIface: IterableIface
    children: (obj: IterableTree) => boolean
    hasChildren: (obj: IterableTree) => boolean
    parent: (obj: IterableTree) => boolean
    static name: string
}
export abstract class LanguageIface {
    /* Fields of IAnjuta.LanguageIface */
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
    /* Fields of IAnjuta.LanguageProviderIface */
    gIface: ProviderIface
    getCalltipCache: (obj: LanguageProvider, callContext: string) => string[]
    getCalltipContext: (obj: LanguageProvider, iter: Iterable) => string
    newCalltip: (obj: LanguageProvider, callContext: string, iter: Iterable) => void
    populateCompletions: (obj: LanguageProvider, iter: Iterable) => Iterable | null
    static name: string
}
export abstract class LoaderIface {
    /* Fields of IAnjuta.LoaderIface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class MarkableIface {
    /* Fields of IAnjuta.MarkableIface */
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
    /* Fields of IAnjuta.MessageManagerIface */
    gIface: GObject.TypeInterface
    removeView: (obj: MessageManager, view: MessageView) => void
    setCurrentView: (obj: MessageManager, view: MessageView) => void
    setViewIcon: (obj: MessageManager, view: MessageView, icon: GdkPixbuf.PixbufAnimation) => void
    setViewIconFromStock: (obj: MessageManager, view: MessageView, icon: string) => void
    setViewTitle: (obj: MessageManager, view: MessageView, title: string) => void
    static name: string
}
export abstract class MessageViewIface {
    /* Fields of IAnjuta.MessageViewIface */
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
    /* Fields of IAnjuta.PluginFactoryIface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class PreferencesIface {
    /* Fields of IAnjuta.PreferencesIface */
    gIface: GObject.TypeInterface
    merge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    unmerge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    static name: string
}
export abstract class PrintIface {
    /* Fields of IAnjuta.PrintIface */
    gIface: GObject.TypeInterface
    print: (obj: Print) => void
    printPreview: (obj: Print) => void
    static name: string
}
export abstract class ProjectBackendIface {
    /* Fields of IAnjuta.ProjectBackendIface */
    gIface: GObject.TypeInterface
    newProject: (obj: ProjectBackend, file: Gio.File) => Project
    probe: (obj: ProjectBackend, directory: Gio.File) => number
    static name: string
}
export abstract class ProjectChooserIface {
    /* Fields of IAnjuta.ProjectChooserIface */
    gIface: GObject.TypeInterface
    changed: (obj: ProjectChooser) => void
    getSelected: (obj: ProjectChooser) => Gio.File
    setProjectModel: (obj: ProjectChooser, manager: ProjectManager, childType: Anjuta.ProjectNodeType) => boolean
    static name: string
}
export abstract class ProjectIface {
    /* Fields of IAnjuta.ProjectIface */
    gIface: GObject.TypeInterface
    fileChanged: (obj: Project, node?: object | null) => void
    nodeChanged: (obj: Project, node: object | null, error: GLib.Error) => void
    nodeLoaded: (obj: Project, node: object | null, error: GLib.Error) => void
    nodeSaved: (obj: Project, node: object | null, error: GLib.Error) => void
    addNodeAfter: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    addNodeBefore: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    getNodeInfo: (obj: Project) => Anjuta.ProjectNodeInfo[]
    getRoot: (obj: Project) => Anjuta.ProjectNode
    isLoaded: (obj: Project) => boolean
    loadNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    removeNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    removeProperty: (obj: Project, node: Anjuta.ProjectNode, id: string, name?: string | null) => boolean
    saveNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    setProperty: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null, value: string) => Anjuta.ProjectProperty | null
    static name: string
}
export abstract class ProjectManagerIface {
    /* Fields of IAnjuta.ProjectManagerIface */
    gIface: GObject.TypeInterface
    elementAdded: (obj: ProjectManager, element: Gio.File) => void
    elementRemoved: (obj: ProjectManager, element: Gio.File) => void
    elementSelected: (obj: ProjectManager, element: Gio.File) => void
    projectLoaded: (obj: ProjectManager, error: GLib.Error) => void
    addGroup: (obj: ProjectManager, name: string, defaultGroup?: Gio.File | null) => Gio.File
    addSource: (obj: ProjectManager, name: string, defaultTarget?: Gio.File | null) => Gio.File
    addSourceQuiet: (obj: ProjectManager, name: string, target: Gio.File) => Gio.File
    addSources: (obj: ProjectManager, names: string[], defaultTarget?: Gio.File | null) => Gio.File[]
    addTarget: (obj: ProjectManager, name: string, defaultGroup?: Gio.File | null) => Gio.File
    getCapabilities: (obj: ProjectManager) => number
    getChildren: (obj: ProjectManager, parent: Gio.File, childrenType: number) => Gio.File[]
    getCurrentProject: (obj: ProjectManager) => Project
    getElements: (obj: ProjectManager, elementType: Anjuta.ProjectNodeType) => Gio.File[]
    getPackages: (obj: ProjectManager) => string[]
    getSelected: (obj: ProjectManager) => Gio.File
    getTargetType: (obj: ProjectManager, target: Gio.File) => Anjuta.ProjectNodeType
    getTargets: (obj: ProjectManager, targetType: Anjuta.ProjectNodeType) => Gio.File[]
    isOpen: (obj: ProjectManager) => boolean
    removeFile: (obj: ProjectManager, file: Gio.File) => boolean
    static name: string
}
export abstract class ProviderIface {
    /* Fields of IAnjuta.ProviderIface */
    gIface: GObject.TypeInterface
    activate: (obj: Provider, iter: Iterable, data?: object | null) => void
    getName: (obj: Provider) => string
    getStartIter: (obj: Provider) => Iterable
    populate: (obj: Provider, iter: Iterable) => void
    static name: string
}
export abstract class SnippetsManagerIface {
    /* Fields of IAnjuta.SnippetsManagerIface */
    gIface: GObject.TypeInterface
    insert: (obj: SnippetsManager, key: string, editingSession: boolean) => boolean
    static name: string
}
export abstract class StreamIface {
    /* Fields of IAnjuta.StreamIface */
    gIface: GObject.TypeInterface
    open: (obj: Stream, stream?: object | null) => void
    static name: string
}
export abstract class StreamLoaderIface {
    /* Fields of IAnjuta.StreamLoaderIface */
    gIface: LoaderIface
    peekInterface: (obj: StreamLoader, stream?: object | null) => string
    static name: string
}
export abstract class StreamSavableIface {
    /* Fields of IAnjuta.StreamSavableIface */
    gIface: StreamIface
    save: (obj: StreamSavable, stream?: object | null) => void
    static name: string
}
export abstract class SymbolIface {
    /* Fields of IAnjuta.SymbolIface */
    gIface: GObject.TypeInterface
    getBoolean: (obj: Symbol, field: SymbolField) => boolean
    getIcon: (obj: Symbol) => GdkPixbuf.Pixbuf
    getInt: (obj: Symbol, field: SymbolField) => number
    getString: (obj: Symbol, field: SymbolField) => string
    getSymType: (obj: Symbol) => SymbolType
    static name: string
}
export abstract class SymbolManagerIface {
    /* Fields of IAnjuta.SymbolManagerIface */
    gIface: GObject.TypeInterface
    prjScanEnd: (obj: SymbolManager, processId: number) => void
    sysScanEnd: (obj: SymbolManager, processId: number) => void
    activatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => boolean
    deactivateAll: (obj: SymbolManager) => void
    deactivatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => void
    static name: string
}
export abstract class SymbolQueryIface {
    /* Fields of IAnjuta.SymbolQueryIface */
    gIface: GObject.TypeInterface
    asyncResult: (obj: SymbolQuery, result: GObject.Object) => void
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
    /* Fields of IAnjuta.TerminalIface */
    gIface: GObject.TypeInterface
    childExited: (obj: Terminal, pid: number, status: number) => void
    executeCommand: (obj: Terminal, directory: string, command: string, environment: string[]) => number
    static name: string
}
export abstract class TodoIface {
    /* Fields of IAnjuta.TodoIface */
    gIface: GObject.TypeInterface
    load: (obj: Todo, file: Gio.File) => void
    static name: string
}
export abstract class VcsIface {
    /* Fields of IAnjuta.VcsIface */
    gIface: GObject.TypeInterface
    statusChanged: (obj: Vcs) => void
    add: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    checkout: (obj: Vcs, repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify) => void
    remove: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    static name: string
}
export abstract class WizardIface {
    /* Fields of IAnjuta.WizardIface */
    gIface: GObject.TypeInterface
    activate: (obj: Wizard) => void
    static name: string
}
export type BuilderHandle = object
export type LanguageId = number
}