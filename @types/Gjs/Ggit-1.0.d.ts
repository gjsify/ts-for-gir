/**
 * Ggit-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum BranchType {
    LOCAL,
    REMOTE,
}
export enum CloneLocal {
    AUTO,
    LOCAL,
    NO_LOCAL,
    NO_LINKS,
}
export enum ConfigLevel {
    PROGRAMDATA,
    SYSTEM,
    XDG,
    GLOBAL,
    LOCAL,
    APP,
    HIGHEST,
}
export enum DeltaType {
    UNMODIFIED,
    ADDED,
    DELETED,
    MODIFIED,
    RENAMED,
    COPIED,
    IGNORED,
    UNTRACKED,
}
export enum DiffBinaryType {
    NONE,
    LITERAL,
    DELTA,
}
export enum DiffFormatType {
    PATCH,
    PATCH_HEADER,
    RAW,
    NAME_ONLY,
    NAME_STATUS,
}
export enum DiffLineType {
    CONTEXT,
    ADDITION,
    DELETION,
    CONTEXT_EOFNL,
    ADD_EOFNL,
    DEL_EOFNL,
    FILE_HDR,
    HUNK_HDR,
    BINARY,
}
export enum Direction {
    FETCH,
    PUSH,
}
export enum Error {
    GIT_ERROR,
    NOTFOUND,
    EXISTS,
    AMBIGUOUS,
    BUFS,
    PASSTHROUGH,
    ITEROVER,
}
export enum FileMode {
    UNREADABLE,
    TREE,
    BLOB,
    BLOB_EXECUTABLE,
    LINK,
    COMMIT,
}
export enum MergeFileFavor {
    NORMAL,
    OURS,
    THEIRS,
    UNION,
}
export enum PackbuilderStage {
    ADDING_OBJECTS,
    DELTAFICATION,
}
export enum ProxyType {
    NONE,
    AUTO,
    SPECIFIED,
}
export enum RebaseOperationType {
    PICK,
    REWORD,
    EDIT,
    SQUASH,
    FIXUP,
    EXEC,
}
export enum RefType {
    INVALID,
    OID,
    SYMBOLIC,
    LISTALL,
}
export enum RemoteCompletionType {
    DOWNLOAD,
    INDEXING,
    ERROR,
}
export enum RemoteDownloadTagsType {
    UNSPECIFIED,
    AUTO,
    NONE,
    ALL,
}
export enum ResetType {
    SOFT,
    MIXED,
    HARD,
}
export enum StatusShow {
    INDEX_AND_WORKDIR,
    INDEX_ONLY,
    WORKDIR_ONLY,
}
export enum SubmoduleIgnore {
    UNSPECIFIED,
    NONE,
    UNTRACKED,
    DIRTY,
    ALL,
}
export enum SubmoduleRecurse {
    NO,
    YES,
    ONDEMAND,
}
export enum SubmoduleUpdate {
    CHECKOUT,
    REBASE,
    MERGE,
    NONE,
    DEFAULT,
}
export enum TreeWalkMode {
    PRE,
    POST,
}
export enum AttributeCheckFlags {
    FILE_THEN_INDEX,
    INDEX_THEN_FILE,
    INDEX_ONLY,
    NO_SYSTEM,
}
export enum BlameFlags {
    NORMAL,
    TRACK_COPIES_SAME_FILE,
}
export enum CheckoutNotifyFlags {
    NONE,
    CONFLICT,
    DIRTY,
    UPDATED,
    UNTRACKED,
    IGNORED,
    ALL,
}
export enum CheckoutStrategy {
    NONE,
    SAFE,
    FORCE,
    RECREATE_MISSING,
    ALLOW_CONFLICTS,
    REMOVE_UNTRACKED,
    REMOVE_IGNORED,
    UPDATE_ONLY,
    DONT_UPDATE_INDEX,
    NO_REFRESH,
    SKIP_UNMERGED,
    USE_OURS,
    USE_THEIRS,
    DISABLE_PATHSPEC_MATCH,
    SKIP_LOCKED_DIRECTORIES,
    DONT_OVERWRITE_IGNORED,
    CONFLICT_STYLE_MERGE,
    CONFLICT_STYLE_DIFF3,
    DONT_REMOVE_EXISTING,
    DONT_WRITE_INDEX,
    UPDATE_SUBMODULES,
    UPDATE_SUBMODULES_IF_CHANGED,
}
export enum CreateFlags {
    NONE,
    FORCE,
}
export enum Credtype {
    USERPASS_PLAINTEXT,
    SSH_KEY,
    SSH_CUSTOM,
    DEFAULT,
    SSH_INTERACTIVE,
}
export enum DiffFindFlags {
    FIND_BY_CONFIG,
    FIND_RENAMES,
    FIND_RENAMES_FROM_REWRITES,
    FIND_COPIES,
    FIND_COPIES_FROM_UNMODIFIED,
    FIND_REWRITES,
    BREAK_REWRITES,
    FIND_AND_BREAK_REWRITES,
    FIND_FOR_UNTRACKED,
    FIND_ALL,
    FIND_IGNORE_LEADING_WHITESPACE,
    FIND_IGNORE_WHITESPACE,
    FIND_DONT_IGNORE_WHITESPACE,
    FIND_EXACT_MATCH_ONLY,
    BREAK_REWRITES_FOR_RENAMES_ONLY,
    FIND_REMOVE_UNMODIFIED,
}
export enum DiffFlag {
    BINARY,
    NOT_BINARY,
    VALID_ID,
}
export enum DiffFormatEmailFlags {
    NONE,
    EXCLUDE_SUBJECT_PATCH_MARKER,
}
export enum DiffOption {
    NORMAL,
    REVERSE,
    INCLUDE_IGNORED,
    RECURSE_IGNORED_DIRS,
    INCLUDE_UNTRACKED,
    RECURSE_UNTRACKED_DIRS,
    INCLUDE_UNMODIFIED,
    INCLUDE_TYPECHANGE,
    INCLUDE_TYPECHANGE_TREES,
    IGNORE_FILE_MODE,
    IGNORE_SUBMODULES,
    IGNORE_CASE,
    DISABLE_PATHSPEC_MATCH,
    SKIP_BINARY_CHECK,
    ENABLE_FAST_UNTRACKED_DIRS,
    FORCE_TEXT,
    FORCE_BINARY,
    IGNORE_WHITESPACE,
    IGNORE_WHITESPACE_CHANGE,
    IGNORE_WHITESPACE_EOL,
    SHOW_UNTRACKED_CONTENT,
    SHOW_UNMODIFIED,
    PATIENCE,
    MINIMAL,
    SHOW_BINARY,
}
export enum FeatureFlags {
    THREADS,
    HTTPS,
    SSH,
}
export enum MergeFileFlags {
    DEFAULT,
    STYLE_MERGE,
    STYLE_DIFF3,
    SIMPLIFY_ALNUM,
    IGNORE_WHITESPACE,
    IGNORE_WHITESPACE_CHANGE,
    IGNORE_WHITESPACE_EOL,
    DIFF_PATIENCE,
    DIFF_MINIMAL,
}
export enum MergeFlags {
    FIND_RENAMES,
    FAIL_ON_CONFLICT,
    SKIP_REUC,
    NO_RECURSIVE,
}
export enum SortMode {
    NONE,
    TOPOLOGICAL,
    TIME,
    REVERSE,
}
export enum StashFlags {
    DEFAULT,
    KEEP_INDEX,
    INCLUDE_UNTRACKED,
    INCLUDE_IGNORED,
}
export enum StatusFlags {
    CURRENT,
    INDEX_NEW,
    INDEX_MODIFIED,
    INDEX_DELETED,
    INDEX_RENAMED,
    INDEX_TYPECHANGE,
    WORKING_TREE_NEW,
    WORKING_TREE_MODIFIED,
    WORKING_TREE_DELETED,
    WORKING_TREE_TYPECHANGE,
    IGNORED,
}
export enum StatusOption {
    INCLUDE_UNTRACKED,
    INCLUDE_IGNORED,
    INCLUDE_UNMODIFIED,
    EXCLUDE_SUBMODULES,
    RECURSE_UNTRACKED_DIRS,
    DISABLE_PATHSPEC_MATCH,
    RECURSE_IGNORED_DIRS,
    RENAMES_HEAD_TO_INDEX,
    RENAMES_INDEX_TO_WORKDIR,
    SORT_CASE_SENSITIVELY,
    SORT_CASE_INSENSITIVELY,
    DEFAULT,
}
export enum SubmoduleStatus {
    IN_HEAD,
    IN_INDEX,
    IN_CONFIG,
    IN_WD,
    INDEX_ADDED,
    INDEX_DELETED,
    INDEX_MODIFIED,
    WD_UNINITIALIZED,
    WD_ADDED,
    WD_DELETED,
    WD_MODIFIED,
    WD_INDEX_MODIFIED,
    WD_WD_MODIFIED,
    WD_UNTRACKED,
}
export function error_quark(): GLib.Quark
export function get_features(): FeatureFlags
export function init(): void
export function message_prettify(message: string, strip_comments: boolean, comment_char: number): string
export interface ConfigCallback {
    (entry: ConfigEntry): number
}
export interface ConfigMatchCallback {
    (match_info: GLib.MatchInfo, value: string): number
}
export interface CredAcquireCallback {
    (url: string, username_from_url: string | null, allowed_types: number, cred: Cred): number
}
export interface DiffBinaryCallback {
    (delta: DiffDelta, binary: DiffBinary): number
}
export interface DiffFileCallback {
    (delta: DiffDelta, progress: number): number
}
export interface DiffHunkCallback {
    (delta: DiffDelta, hunk: DiffHunk): number
}
export interface DiffLineCallback {
    (delta: DiffDelta, hunk: DiffHunk | null, line: DiffLine): number
}
export interface DiffSimilarityMetricBufferSignatureCallback {
    (file: DiffFile, buf: string, buflen: number, out?: object | null): number
}
export interface DiffSimilarityMetricFileSignatureCallback {
    (file: DiffFile, fullpath: string, out?: object | null): number
}
export interface DiffSimilarityMetricFreeSignatureCallback {
    (signature?: object | null): void
}
export interface DiffSimilarityMetricSimilarityCallback {
    (score: number, signature_a?: object | null, signature_b?: object | null): number
}
export interface NoteCallback {
    (blob_id: OId, annotated_object_id: OId): number
}
export interface ReferencesCallback {
    (reference: Ref): number
}
export interface ReferencesNameCallback {
    (name: string): number
}
export interface RemoteListCallback {
    (name: string, oid: OId, loid: OId, local: boolean): number
}
export interface StashCallback {
    (index: number, message: string, stash_oid: OId): number
}
export interface StatusCallback {
    (path: string, status_flags: StatusFlags): number
}
export interface SubmoduleCallback {
    (submodule: Submodule, name: string): number
}
export interface TagCallback {
    (name: string, tag_oid: OId): number
}
export interface TransferProgressCallback {
    (stats: TransferProgress): number
}
export interface TreeWalkCallback {
    (root: string, entry: TreeEntry): number
}
export interface Blame_ConstructProps extends Native_ConstructProps {
}
export class Blame {
    /* Fields of Ggit.Native */
    parent_instance: ObjectFactoryBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Blame */
    from_buffer(buffer: Uint8Array[]): Blame | null
    get_hunk_by_index(idx: number): BlameHunk
    get_hunk_by_line(line: number): BlameHunk
    get_hunk_count(): number
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
    connect(sigName: "notify", callback: (($obj: Blame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Blame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Blame_ConstructProps)
    _init (config?: Blame_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_flags(blame_options: BlameOptions): BlameFlags
    static set_flags(blame_options: BlameOptions, flags: BlameFlags): void
    static $gtype: GObject.Type
}
export interface Blob_ConstructProps extends Object_ConstructProps {
}
export class Blob {
    /* Fields of Ggit.Object */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Blob */
    get_raw_content(): Uint8Array[] | null
    is_binary(): boolean
    /* Methods of Ggit.Object */
    get_id(): OId | null
    get_owner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Blob_ConstructProps)
    _init (config?: Blob_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BlobOutputStream_ConstructProps extends Gio.OutputStream_ConstructProps {
    repository?: Repository
}
export class BlobOutputStream {
    /* Fields of Ggit.BlobOutputStream */
    parent_instance: Gio.OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.BlobOutputStream */
    get_id(): OId | null
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
    connect(sigName: "notify", callback: (($obj: BlobOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlobOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlobOutputStream_ConstructProps)
    _init (config?: BlobOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Branch_ConstructProps extends Ref_ConstructProps {
}
export class Branch {
    /* Fields of Ggit.Branch */
    parent_instance: Ref
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Branch */
    delete(): void
    get_name(): string | null
    get_upstream(): Ref | null
    is_head(): boolean
    move(new_branch_name: string, flags: CreateFlags): Branch | null
    set_upstream(upstream_branch_name: string): void
    /* Methods of Ggit.Ref */
    delete_log(): void
    get_log(): Reflog | null
    get_owner(): Repository | null
    get_reference_type(): RefType
    get_shorthand(): string | null
    get_symbolic_target(): string | null
    get_target(): OId | null
    has_log(): boolean
    is_branch(): boolean
    is_note(): boolean
    is_remote(): boolean
    is_tag(): boolean
    lookup(): Object | null
    rename(new_name: string, force: boolean, log_message: string): Ref | null
    resolve(): Ref | null
    set_symbolic_target(target: string, log_message: string): Ref | null
    set_target(oid: OId, log_message: string): Ref | null
    to_string(): string | null
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
    connect(sigName: "notify", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Branch_ConstructProps)
    _init (config?: Branch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CheckoutOptions_ConstructProps extends GObject.Object_ConstructProps {
    ancestor_label?: string
    baseline?: Tree
    dir_mode?: number
    disable_filters?: boolean
    file_mode?: number
    file_open_flags?: number
    notify_flags?: CheckoutNotifyFlags
    our_label?: string
    strategy?: CheckoutStrategy
    target_directory?: string
    their_label?: string
}
export class CheckoutOptions {
    /* Properties of Ggit.CheckoutOptions */
    ancestor_label: string
    baseline: Tree
    dir_mode: number
    disable_filters: boolean
    file_mode: number
    file_open_flags: number
    notify_flags: CheckoutNotifyFlags
    our_label: string
    strategy: CheckoutStrategy
    target_directory: string
    their_label: string
    /* Fields of Ggit.CheckoutOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.CheckoutOptions */
    get_ancestor_label(): string | null
    get_baseline(): Tree | null
    get_dir_mode(): number
    get_disable_filters(): boolean
    get_file_mode(): number
    get_file_open_flags(): number
    get_notify_flags(): CheckoutNotifyFlags
    get_our_label(): string | null
    get_paths(): string[] | null
    get_strategy(): CheckoutStrategy
    get_target_directory(): string | null
    get_their_label(): string | null
    set_ancestor_label(label?: string | null): void
    set_baseline(tree?: Tree | null): void
    set_dir_mode(dir_mode: number): void
    set_disable_filters(disable: boolean): void
    set_file_mode(file_mode: number): void
    set_file_open_flags(flags: number): void
    set_notify_flags(flags: CheckoutNotifyFlags): void
    set_our_label(label?: string | null): void
    set_paths(paths?: string[] | null): void
    set_strategy(strategy: CheckoutStrategy): void
    set_target_directory(directory?: string | null): void
    set_their_label(label?: string | null): void
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
    /* Virtual methods of Ggit.CheckoutOptions */
    vfunc_notify(why: CheckoutNotifyFlags, path: string, baseline: DiffFile, target: DiffFile, workdir: DiffFile): number
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_progress(path: string, completed_steps: number, total_steps: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ancestor-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ancestor-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dir-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dir-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disable-filters", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-filters", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-open-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-open-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notify-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::our-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::our-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strategy", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strategy", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::target-directory", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target-directory", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::their-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::their-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CheckoutOptions_ConstructProps)
    _init (config?: CheckoutOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CheckoutOptions
    static $gtype: GObject.Type
}
export interface CherryPickOptions_ConstructProps extends GObject.Object_ConstructProps {
    checkout_options?: CheckoutOptions
    mainline?: number
    merge_options?: MergeOptions
}
export class CherryPickOptions {
    /* Properties of Ggit.CherryPickOptions */
    checkout_options: CheckoutOptions
    mainline: number
    merge_options: MergeOptions
    /* Fields of Ggit.CherryPickOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.CherryPickOptions */
    get_checkout_options(): CheckoutOptions
    get_mainline(): number
    get_merge_options(): MergeOptions
    set_checkout_options(checkout_options?: CheckoutOptions | null): void
    set_mainline(mainline: number): void
    set_merge_options(merge_options?: MergeOptions | null): void
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
    connect(sigName: "notify", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::checkout-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checkout-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mainline", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mainline", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::merge-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CherryPickOptions_ConstructProps)
    _init (config?: CherryPickOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CherryPickOptions
    static $gtype: GObject.Type
}
export interface CloneOptions_ConstructProps extends GObject.Object_ConstructProps {
}
export class CloneOptions {
    /* Fields of Ggit.CloneOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.CloneOptions */
    get_checkout_branch(): string
    get_fetch_options(): FetchOptions
    get_is_bare(): boolean
    get_local(): CloneLocal
    set_checkout_branch(checkout_branch?: string | null): void
    set_fetch_options(fetch_options?: FetchOptions | null): void
    set_is_bare(bare: boolean): void
    set_local(local: CloneLocal): void
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
    /* Virtual methods of Ggit.CloneOptions */
    vfunc_create_remote(repository: Repository, name: string, url: string): Remote | null
    vfunc_create_repository(path: string, is_bare: boolean): Repository | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CloneOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CloneOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CloneOptions_ConstructProps)
    _init (config?: CloneOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CloneOptions
    static $gtype: GObject.Type
}
export interface Commit_ConstructProps extends Object_ConstructProps {
}
export class Commit {
    /* Fields of Ggit.Commit */
    parent_instance: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Commit */
    amend(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: Tree): OId | null
    get_author(): Signature | null
    get_committer(): Signature | null
    get_message(): string | null
    get_message_encoding(): string | null
    get_nth_ancestor(n: number): Commit | null
    get_parents(): CommitParents | null
    get_subject(): string | null
    get_tree(): Tree | null
    get_tree_id(): OId | null
    /* Methods of Ggit.Object */
    get_id(): OId | null
    get_owner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Commit_ConstructProps)
    _init (config?: Commit_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommitParents_ConstructProps extends GObject.Object_ConstructProps {
    commit?: Commit
}
export class CommitParents {
    /* Properties of Ggit.CommitParents */
    readonly size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.CommitParents */
    get(idx: number): Commit | null
    get_id(idx: number): OId | null
    get_size(): number
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
    connect(sigName: "notify", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CommitParents_ConstructProps)
    _init (config?: CommitParents_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(commit: Commit): CommitParents
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends Native_ConstructProps {
}
export class Config {
    /* Fields of Ggit.Native */
    parent_instance: ObjectFactoryBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Config */
    add_file(file: Gio.File, level: ConfigLevel, force: boolean): void
    delete_entry(name: string): boolean
    foreach(callback: ConfigCallback): boolean
    get_bool(name: string): boolean
    get_entry(name: string): ConfigEntry
    get_int32(name: string): number
    get_int64(name: string): number
    get_string(name: string): string | null
    match(regex: GLib.Regex): [ /* returnType */ string | null, /* match_info */ GLib.MatchInfo | null ]
    match_foreach(regex: GLib.Regex, callback: ConfigMatchCallback): boolean
    open_level(level: ConfigLevel): Config
    set_bool(name: string, value: boolean): boolean
    set_int32(name: string, value: number): boolean
    set_int64(name: string, value: number): boolean
    set_string(name: string, value: string): boolean
    snapshot(): Config
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Config
    static new_default(): Config
    static new_from_file(file: Gio.File): Config
    static find_global(): Gio.File
    static find_system(): Gio.File
    static $gtype: GObject.Type
}
export interface Cred_ConstructProps extends Native_ConstructProps {
}
export class Cred {
    /* Fields of Ggit.Cred */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Cred, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cred, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cred_ConstructProps)
    _init (config?: Cred_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CredPlaintext_ConstructProps extends Cred_ConstructProps {
    password?: string
    username?: string
}
export class CredPlaintext {
    /* Fields of Ggit.CredPlaintext */
    parent_instance: Cred
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.CredPlaintext */
    get_password(): string
    get_username(): string
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
    /* Virtual methods of Ggit.CredPlaintext */
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
    connect(sigName: "notify", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CredPlaintext_ConstructProps)
    _init (config?: CredPlaintext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(username: string, password: string): CredPlaintext
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface CredSshInteractive_ConstructProps extends Cred_ConstructProps {
    username?: string
}
export class CredSshInteractive {
    /* Fields of Ggit.CredSshInteractive */
    parent_instance: Cred
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.CredSshInteractive */
    get_username(): string
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
    /* Virtual methods of Ggit.CredSshInteractive */
    vfunc_prompt(prompts: CredSshInteractivePrompt[]): void
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
    connect(sigName: "notify", callback: (($obj: CredSshInteractive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredSshInteractive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CredSshInteractive_ConstructProps)
    _init (config?: CredSshInteractive_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(username: string): CredSshInteractive
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface CredSshKeyFromAgent_ConstructProps extends Cred_ConstructProps {
    username?: string
}
export class CredSshKeyFromAgent {
    /* Fields of Ggit.Cred */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.CredSshKeyFromAgent */
    get_username(): string | null
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
    /* Virtual methods of Ggit.CredSshKeyFromAgent */
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
    connect(sigName: "notify", callback: (($obj: CredSshKeyFromAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredSshKeyFromAgent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CredSshKeyFromAgent_ConstructProps)
    _init (config?: CredSshKeyFromAgent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(username: string): CredSshKeyFromAgent
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Diff_ConstructProps extends Native_ConstructProps {
    repository?: Repository
}
export class Diff {
    /* Fields of Ggit.Diff */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Diff */
    find_similar(options?: DiffFindOptions | null): boolean
    foreach(file_cb?: DiffFileCallback | null, binary_cb?: DiffBinaryCallback | null, hunk_cb?: DiffHunkCallback | null, line_cb?: DiffLineCallback | null): void
    format_email(options: DiffFormatEmailOptions): string | null
    get_delta(index: number): DiffDelta | null
    get_num_deltas(): number
    merge(from: Diff): void
    print(type: DiffFormatType, print_cb: DiffLineCallback): void
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
    connect(sigName: "notify", callback: (($obj: Diff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Diff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Diff_ConstructProps)
    _init (config?: Diff_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_buffers(buffer1: Uint8Array[] | null, buffer1_as_path: string | null, buffer2: Uint8Array[] | null, buffer2_as_path?: string | null, diff_options?: DiffOptions | null): Diff
    static new_index_to_workdir(repository: Repository, index?: Index | null, diff_options?: DiffOptions | null): Diff
    static new_tree_to_index(repository: Repository, old_tree?: Tree | null, index?: Index | null, diff_options?: DiffOptions | null): Diff
    static new_tree_to_tree(repository: Repository, old_tree?: Tree | null, new_tree?: Tree | null, diff_options?: DiffOptions | null): Diff
    static new_tree_to_workdir(repository: Repository, old_tree?: Tree | null, diff_options?: DiffOptions | null): Diff
    static blob_to_buffer(old_blob: Blob | null, old_as_path: string | null, buffer: Uint8Array[] | null, buffer_as_path?: string | null, diff_options?: DiffOptions | null, file_cb?: DiffFileCallback | null, binary_cb?: DiffBinaryCallback | null, hunk_cb?: DiffHunkCallback | null, line_cb?: DiffLineCallback | null): void
    static blobs(old_blob?: Blob | null, old_as_path?: string | null, new_blob?: Blob | null, new_as_path?: string | null, diff_options?: DiffOptions | null, file_cb?: DiffFileCallback | null, binary_cb?: DiffBinaryCallback | null, hunk_cb?: DiffHunkCallback | null, line_cb?: DiffLineCallback | null): void
    static $gtype: GObject.Type
}
export interface DiffFindOptions_ConstructProps extends GObject.Object_ConstructProps {
    copy_threshold?: number
    flags?: DiffFindFlags
    metric?: DiffSimilarityMetric
    rename_from_rewrite_threshold?: number
    rename_limit?: number
    rename_threshold?: number
}
export class DiffFindOptions {
    /* Properties of Ggit.DiffFindOptions */
    copy_threshold: number
    flags: DiffFindFlags
    metric: DiffSimilarityMetric
    rename_from_rewrite_threshold: number
    rename_limit: number
    rename_threshold: number
    /* Fields of Ggit.DiffFindOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.DiffFindOptions */
    get_copy_threshold(): number
    get_flags(): DiffFindFlags
    get_metric(): DiffSimilarityMetric | null
    get_rename_from_rewrite_threshold(): number
    get_rename_limit(): number
    get_rename_threshold(): number
    set_copy_threshold(threshold: number): void
    set_flags(flags: DiffFindFlags): void
    set_metric(metric: DiffSimilarityMetric): void
    set_rename_from_rewrite_threshold(threshold: number): void
    set_rename_limit(limit: number): void
    set_rename_threshold(threshold: number): void
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
    connect(sigName: "notify", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::copy-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metric", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metric", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rename-from-rewrite-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-from-rewrite-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rename-limit", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-limit", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rename-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiffFindOptions_ConstructProps)
    _init (config?: DiffFindOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DiffFindOptions
    static $gtype: GObject.Type
}
export interface DiffFormatEmailOptions_ConstructProps extends GObject.Object_ConstructProps {
    author?: Signature
    body?: string
    flags?: DiffFormatEmailFlags
    id?: OId
    patch_number?: number
    summary?: string
    total_patches?: number
}
export class DiffFormatEmailOptions {
    /* Properties of Ggit.DiffFormatEmailOptions */
    author: Signature
    body: string
    flags: DiffFormatEmailFlags
    id: OId
    patch_number: number
    summary: string
    total_patches: number
    /* Fields of Ggit.DiffFormatEmailOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.DiffFormatEmailOptions */
    get_author(): Signature | null
    get_body(): string | null
    get_flags(): DiffFormatEmailFlags
    get_id(): OId | null
    get_patch_number(): number
    get_summary(): string | null
    get_total_patches(): number
    set_author(author?: Signature | null): void
    set_body(body?: string | null): void
    set_flags(flags: DiffFormatEmailFlags): void
    set_id(id?: OId | null): void
    set_patch_number(number: number): void
    set_summary(summary?: string | null): void
    set_total_patches(patches: number): void
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
    connect(sigName: "notify", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::body", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::patch-number", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::patch-number", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-patches", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-patches", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiffFormatEmailOptions_ConstructProps)
    _init (config?: DiffFormatEmailOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DiffFormatEmailOptions
    static $gtype: GObject.Type
}
export interface DiffOptions_ConstructProps extends GObject.Object_ConstructProps {
    flags?: DiffOption
    n_context_lines?: number
    n_interhunk_lines?: number
    new_prefix?: string
    old_prefix?: string
    pathspec?: string[]
}
export class DiffOptions {
    /* Properties of Ggit.DiffOptions */
    flags: DiffOption
    n_context_lines: number
    n_interhunk_lines: number
    new_prefix: string
    old_prefix: string
    pathspec: string[]
    /* Fields of Ggit.DiffOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.DiffOptions */
    get_flags(): DiffOption
    get_n_context_lines(): number
    get_n_interhunk_lines(): number
    get_new_prefix(): string | null
    get_old_prefix(): string | null
    get_pathspec(): string[] | null
    set_flags(flags: DiffOption): void
    set_n_context_lines(n: number): void
    set_n_interhunk_lines(n: number): void
    set_new_prefix(prefix: string): void
    set_old_prefix(prefix: string): void
    set_pathspec(pathspec?: string[] | null): void
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
    connect(sigName: "notify", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-context-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-context-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-interhunk-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-interhunk-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::new-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::old-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pathspec", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pathspec", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiffOptions_ConstructProps)
    _init (config?: DiffOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DiffOptions
    static $gtype: GObject.Type
}
export interface Index_ConstructProps extends Native_ConstructProps {
    file?: Gio.File
}
export class Index {
    /* Fields of Ggit.Native */
    parent_instance: ObjectFactoryBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Index */
    add(entry: IndexEntry): boolean
    add_file(file: Gio.File): boolean
    add_path(path: string): boolean
    get_entries(): IndexEntries | null
    get_entries_resolve_undo(): IndexEntriesResolveUndo | null
    get_owner(): Repository | null
    has_conflicts(): boolean
    read(force: boolean): boolean
    remove(file: Gio.File, stage: number): boolean
    write(): boolean
    write_tree(): OId | null
    write_tree_to(repository: Repository): OId | null
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
    /* Virtual methods of Ggit.Index */
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
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static open(file: Gio.File): Index | null
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Native_ConstructProps extends ObjectFactoryBase_ConstructProps {
    native?: object
}
export class Native {
    /* Fields of Ggit.Native */
    parent_instance: ObjectFactoryBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Native, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Native, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Native_ConstructProps)
    _init (config?: Native_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends Native_ConstructProps {
}
export class Object {
    /* Fields of Ggit.Object */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Object */
    get_id(): OId | null
    get_owner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectFactory {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.ObjectFactory */
    construct(parent_class: GObject.ObjectClass, basetype: GObject.Type, construct_properties: GObject.ObjectConstructParam[]): GObject.Object | null
    register(basetype: GObject.Type, subtype: GObject.Type): void
    unregister(basetype: GObject.Type, subtype: GObject.Type): void
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
    connect(sigName: "notify", callback: (($obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectFactory_ConstructProps)
    _init (config?: ObjectFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): ObjectFactory
    static $gtype: GObject.Type
}
export interface ObjectFactoryBase_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectFactoryBase {
    /* Fields of Ggit.ObjectFactoryBase */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ObjectFactoryBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectFactoryBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectFactoryBase_ConstructProps)
    _init (config?: ObjectFactoryBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProxyOptions_ConstructProps extends GObject.Object_ConstructProps {
}
export class ProxyOptions {
    /* Fields of Ggit.ProxyOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ProxyOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyOptions_ConstructProps)
    _init (config?: ProxyOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ProxyOptions
    static $gtype: GObject.Type
}
export interface PushOptions_ConstructProps extends GObject.Object_ConstructProps {
    callbacks?: RemoteCallbacks
    parallelism?: number
}
export class PushOptions {
    /* Properties of Ggit.PushOptions */
    callbacks: RemoteCallbacks
    parallelism: number
    /* Fields of Ggit.PushOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.PushOptions */
    get_parallelism(): number
    get_remote_callbacks(): RemoteCallbacks | null
    set_parallelism(parallelism: number): void
    set_remote_callbacks(callbacks: RemoteCallbacks): void
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
    connect(sigName: "notify", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::callbacks", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callbacks", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parallelism", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallelism", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PushOptions_ConstructProps)
    _init (config?: PushOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PushOptions
    static $gtype: GObject.Type
}
export interface Rebase_ConstructProps extends Native_ConstructProps {
}
export class Rebase {
    /* Fields of Ggit.Native */
    parent_instance: ObjectFactoryBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Rebase */
    abort(): void
    commit(author: Signature | null, committer: Signature, message?: string | null): OId | null
    finish(signature?: Signature | null): void
    get_operation_by_index(idx: number): RebaseOperation | null
    get_operation_entry_count(): number
    get_operation_index(): number
    next(): RebaseOperation | null
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
    connect(sigName: "notify", callback: (($obj: Rebase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Rebase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Rebase_ConstructProps)
    _init (config?: Rebase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Ref_ConstructProps extends Native_ConstructProps {
}
export class Ref {
    /* Fields of Ggit.Ref */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Ref */
    delete(): void
    delete_log(): void
    get_log(): Reflog | null
    get_name(): string | null
    get_owner(): Repository | null
    get_reference_type(): RefType
    get_shorthand(): string | null
    get_symbolic_target(): string | null
    get_target(): OId | null
    has_log(): boolean
    is_branch(): boolean
    is_note(): boolean
    is_remote(): boolean
    is_tag(): boolean
    lookup(): Object | null
    rename(new_name: string, force: boolean, log_message: string): Ref | null
    resolve(): Ref | null
    set_symbolic_target(target: string, log_message: string): Ref | null
    set_target(oid: OId, log_message: string): Ref | null
    to_string(): string | null
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
    connect(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Ref_ConstructProps)
    _init (config?: Ref_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static is_valid_name(name: string): boolean
    static $gtype: GObject.Type
}
export interface Remote_ConstructProps extends Native_ConstructProps {
}
export class Remote {
    /* Fields of Ggit.Remote */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Remote */
    connect(direction: Direction, callbacks: RemoteCallbacks, proxy_options?: ProxyOptions | null, custom_headers?: string | null): void
    disconnect(): void
    download(specs: string[] | null, fetch_options: FetchOptions): boolean
    get_connected(): boolean
    get_fetch_specs(): string[] | null
    get_name(): string | null
    get_owner(): Repository | null
    get_push_specs(): string[] | null
    get_url(): string | null
    list(): RemoteHead[] | null
    prune(callbacks: RemoteCallbacks): void
    push(specs: string[] | null, push_options: PushOptions): boolean
    update_tips(callbacks: RemoteCallbacks, update_fetch_head: boolean, tags_type: RemoteDownloadTagsType, message?: string | null): boolean
    upload(specs: string[] | null, push_options: PushOptions): boolean
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
    connect(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(repository: Repository, name: string, url: string): Remote
    static new_anonymous(repository: Repository, url: string): Remote
    static $gtype: GObject.Type
}
export interface RemoteCallbacks_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteCallbacks {
    /* Fields of Ggit.RemoteCallbacks */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Virtual methods of Ggit.RemoteCallbacks */
    vfunc_completion(type: RemoteCompletionType): void
    vfunc_credentials(url: string, username_from_url: string | null, allowed_types: Credtype): Cred | null
    vfunc_progress(message: string): void
    vfunc_transfer_progress(stats: TransferProgress): void
    vfunc_update_tips(refname: string, a: OId, b: OId): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Ggit.RemoteCallbacks */
    connect(sigName: "completion", callback: (($obj: RemoteCallbacks, object: RemoteCompletionType) => void)): number
    connect_after(sigName: "completion", callback: (($obj: RemoteCallbacks, object: RemoteCompletionType) => void)): number
    emit(sigName: "completion", object: RemoteCompletionType): void
    connect(sigName: "progress", callback: (($obj: RemoteCallbacks, object: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: RemoteCallbacks, object: string) => void)): number
    emit(sigName: "progress", object: string): void
    connect(sigName: "transfer-progress", callback: (($obj: RemoteCallbacks, object: TransferProgress) => void)): number
    connect_after(sigName: "transfer-progress", callback: (($obj: RemoteCallbacks, object: TransferProgress) => void)): number
    emit(sigName: "transfer-progress", object: TransferProgress): void
    connect(sigName: "update-tips", callback: (($obj: RemoteCallbacks, object: string, p0: OId, p1: OId) => void)): number
    connect_after(sigName: "update-tips", callback: (($obj: RemoteCallbacks, object: string, p0: OId, p1: OId) => void)): number
    emit(sigName: "update-tips", object: string, p0: OId, p1: OId): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteCallbacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteCallbacks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteCallbacks_ConstructProps)
    _init (config?: RemoteCallbacks_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Repository_ConstructProps extends Native_ConstructProps {
    clone_options?: CloneOptions
    init?: boolean
    is_bare?: boolean
    location?: Gio.File
    url?: string
    workdir?: Gio.File
}
export class Repository {
    /* Properties of Ggit.Repository */
    readonly head: Ref
    workdir: Gio.File
    /* Fields of Ggit.Native */
    parent_instance: ObjectFactoryBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Repository */
    add_remote_fetch(remote: Remote, refspec: string): void
    add_remote_push(remote: Remote, refspec: string): void
    blame_file(file: Gio.File, blame_options?: BlameOptions | null): Blame | null
    checkout_head(options?: CheckoutOptions | null): boolean
    checkout_index(index?: Index | null, options?: CheckoutOptions | null): boolean
    checkout_tree(tree?: Object | null, options?: CheckoutOptions | null): boolean
    cherry_pick(commit: Commit, options: CherryPickOptions): boolean
    cherry_pick_commit(commit: Commit, our_commit: Commit, mainline: number, merge_options?: MergeOptions | null): Index | null
    create_blob(): BlobOutputStream | null
    create_blob_from_buffer(buffer: Uint8Array[]): OId | null
    create_blob_from_file(file: Gio.File): OId
    create_blob_from_path(path: string): OId | null
    create_branch(branch_name: string, target: Object, flags: CreateFlags): Branch | null
    create_commit(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: Tree, parents: Commit[]): OId | null
    create_commit_from_ids(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: OId, parents: OId[]): OId | null
    create_index_entry_for_file(file?: Gio.File | null, id?: OId | null): IndexEntry | null
    create_index_entry_for_path(path?: string | null, id?: OId | null): IndexEntry | null
    create_note(notes_ref: string | null, author: Signature, committer: Signature, id: OId, note: string, force: boolean): OId | null
    create_reference(name: string, oid: OId, log_message: string): Ref | null
    create_remote(name: string, url: string): Remote | null
    create_symbolic_reference(name: string, target: string, log_message: string): Ref | null
    create_tag(tag_name: string, target: Object, tagger: Signature, message: string, flags: CreateFlags): OId | null
    create_tag_annotation(tag_name: string, target: Object, signature: Signature, message: string): OId | null
    create_tag_from_buffer(tag: string, flags: CreateFlags): OId | null
    create_tag_lightweight(tag_name: string, target: Object, flags: CreateFlags): OId | null
    create_tree_builder(): TreeBuilder | null
    create_tree_builder_from_tree(tree: Tree): TreeBuilder | null
    delete_tag(name: string): boolean
    drop_stash(index: number): void
    enumerate_branches(list_type: BranchType): BranchEnumerator | null
    file_status(location: Gio.File): StatusFlags
    file_status_foreach(options: StatusOptions | null, callback: StatusCallback): boolean
    get_ahead_behind(local: OId, upstream: OId): [ /* ahead */ number, /* behind */ number ]
    get_attribute(path: string, name: string, flags: AttributeCheckFlags): string | null
    get_config(): Config | null
    get_default_notes_ref(): string | null
    get_descendant_of(commit: OId, ancestor: OId): boolean
    get_head(): Ref | null
    get_index(): Index | null
    get_location(): Gio.File | null
    get_submodule_status(name: string, ignore: SubmoduleIgnore): SubmoduleStatus
    get_workdir(): Gio.File | null
    is_bare(): boolean
    is_empty(): boolean
    is_head_detached(): boolean
    is_head_unborn(): boolean
    list_remotes(): string[] | null
    list_tags(): string[] | null
    list_tags_match(pattern?: string | null): string[] | null
    lookup(oid: OId, gtype: GObject.Type): Object | null
    lookup_blob(oid: OId): Blob | null
    lookup_branch(branch_name: string, branch_type: BranchType): Branch | null
    lookup_commit(oid: OId): Commit | null
    lookup_reference(name: string): Ref | null
    lookup_reference_dwim(short_name: string): Ref | null
    lookup_remote(name: string): Remote | null
    lookup_submodule(name: string): Submodule | null
    lookup_tag(oid: OId): Tag | null
    lookup_tree(oid: OId): Tree | null
    merge(their_heads: AnnotatedCommit[], merge_opts: MergeOptions, checkout_opts: CheckoutOptions): void
    merge_base(oid_one: OId, oid_two: OId): OId | null
    merge_commits(our_commit: Commit, their_commit: Commit, merge_options: MergeOptions): Index | null
    merge_trees(ancestor_tree: Tree, our_tree: Tree, their_tree: Tree, merge_options: MergeOptions): Index | null
    note_foreach(notes_ref: string | null, callback: NoteCallback): boolean
    path_is_ignored(path: string): boolean
    read_note(notes_ref: string | null, id: OId): Note | null
    rebase_init(branch: AnnotatedCommit | null, upstream: AnnotatedCommit | null, onto: AnnotatedCommit | null, options: RebaseOptions): Rebase | null
    rebase_open(options: RebaseOptions): Rebase | null
    references_foreach(callback: ReferencesCallback): boolean
    references_foreach_name(callback: ReferencesNameCallback): boolean
    remove_note(notes_ref: string | null, author: Signature, committer: Signature, id: OId): boolean
    remove_remote(name: string): boolean
    rename_remote(name: string, new_name: string): string[] | null
    reset(target: Object, reset_type: ResetType, checkout_options: CheckoutOptions): void
    reset_default(target: Object | null, pathspecs: string[]): void
    revert(commit: Commit, options: RevertOptions): boolean
    revparse(spec: string): Object | null
    save_stash(stasher: Signature, message: string, flags: StashFlags): OId | null
    set_head(ref_name: string): boolean
    set_remote_url(remote: string, url: string): boolean
    set_submodule_fetch_recurse(name: string, fetch_recurse_submodules: SubmoduleRecurse): void
    set_submodule_ignore(name: string, ignore: SubmoduleIgnore): void
    set_submodule_update(name: string, update: SubmoduleUpdate): void
    set_submodule_url(name: string, url: string): void
    set_workdir(workdir: Gio.File, update_gitlink: boolean): void
    stash_foreach(callback: StashCallback): boolean
    submodule_foreach(callback: SubmoduleCallback): boolean
    tag_foreach(callback: TagCallback): boolean
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
    /* Virtual methods of Ggit.Repository */
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
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Repository_ConstructProps)
    _init (config?: Repository_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static clone(url: string, location: Gio.File, options?: CloneOptions | null): Repository | null
    static discover(location: Gio.File): Gio.File | null
    static discover_full(location: Gio.File, across_fs: boolean, ceiling_dirs?: string[] | null): Gio.File | null
    static init_repository(location: Gio.File, is_bare: boolean): Repository | null
    static open(location: Gio.File): Repository | null
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface RevisionWalker_ConstructProps extends Native_ConstructProps {
    repository?: Repository
}
export class RevisionWalker {
    /* Properties of Ggit.RevisionWalker */
    repository: Repository
    /* Fields of Ggit.RevisionWalker */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.RevisionWalker */
    get_repository(): Repository | null
    hide(oid: OId): void
    hide_glob(item: string): void
    hide_head(): void
    hide_ref(item: string): void
    next(): OId | null
    push(oid: OId): void
    push_glob(item: string): void
    push_head(): void
    push_range(range: string): void
    push_ref(item: string): void
    reset(): void
    set_sort_mode(sort_mode: SortMode): void
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
    /* Virtual methods of Ggit.RevisionWalker */
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
    connect(sigName: "notify", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::repository", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RevisionWalker_ConstructProps)
    _init (config?: RevisionWalker_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(repository: Repository): RevisionWalker
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Signature_ConstructProps extends Native_ConstructProps {
    encoding?: string
}
export class Signature {
    /* Fields of Ggit.Native */
    parent_instance: ObjectFactoryBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Signature */
    copy(): Signature | null
    get_email(): string | null
    get_name(): string | null
    get_time(): GLib.DateTime | null
    get_time_zone(): GLib.TimeZone | null
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
    connect(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Signature_ConstructProps)
    _init (config?: Signature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, email: string, signature_time: GLib.DateTime): Signature
    static new_now(name: string, email: string): Signature
    static $gtype: GObject.Type
}
export interface SubmoduleUpdateOptions_ConstructProps extends GObject.Object_ConstructProps {
    checkout_options?: CheckoutOptions
    fetch_options?: FetchOptions
}
export class SubmoduleUpdateOptions {
    /* Properties of Ggit.SubmoduleUpdateOptions */
    checkout_options: CheckoutOptions
    fetch_options: FetchOptions
    /* Fields of Ggit.SubmoduleUpdateOptions */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.SubmoduleUpdateOptions */
    get_checkout_options(): CheckoutOptions | null
    get_fetch_options(): FetchOptions
    set_checkout_options(checkout_options?: CheckoutOptions | null): void
    set_fetch_options(fetch_options?: FetchOptions | null): void
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
    connect(sigName: "notify", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::checkout-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checkout-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fetch-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fetch-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubmoduleUpdateOptions_ConstructProps)
    _init (config?: SubmoduleUpdateOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SubmoduleUpdateOptions
    static $gtype: GObject.Type
}
export interface Tag_ConstructProps extends Object_ConstructProps {
}
export class Tag {
    /* Fields of Ggit.Tag */
    parent_instance: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Tag */
    get_message(): string | null
    get_name(): string | null
    get_tagger(): Signature | null
    get_target(): Object | null
    get_target_id(): OId | null
    get_target_type(): GObject.Type
    peel(): Object | null
    /* Methods of Ggit.Object */
    get_id(): OId | null
    get_owner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tag_ConstructProps)
    _init (config?: Tag_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Tree_ConstructProps extends Object_ConstructProps {
}
export class Tree {
    /* Fields of Ggit.Tree */
    parent_instance: Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Tree */
    get(i: number): TreeEntry | null
    get_by_name(name: string): TreeEntry | null
    get_by_path(path: string): TreeEntry | null
    get_id(): OId | null
    size(): number
    walk(mode: TreeWalkMode, callback: TreeWalkCallback): void
    /* Methods of Ggit.Object */
    get_owner(): Repository | null
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
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TreeBuilder_ConstructProps extends Native_ConstructProps {
}
export class TreeBuilder {
    /* Fields of Ggit.TreeBuilder */
    parent_instance: Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.TreeBuilder */
    clear(): void
    get_entry(path: string): TreeEntry | null
    insert(filename: string, oid: OId, file_mode: FileMode): TreeEntry | null
    remove(path: string): void
    write(): OId | null
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
    connect(sigName: "notify", callback: (($obj: TreeBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeBuilder_ConstructProps)
    _init (config?: TreeBuilder_ConstructProps): void
    static $gtype: GObject.Type
}
export class AnnotatedCommit {
    /* Methods of Ggit.AnnotatedCommit */
    get_id(): OId | null
    ref(): AnnotatedCommit | null
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_ref(repository: Repository, ref: Ref): AnnotatedCommit
}
export abstract class BlameClass {
    /* Fields of Ggit.BlameClass */
    parent_class: NativeClass
    static name: string
}
export class BlameHunk {
    /* Methods of Ggit.BlameHunk */
    get_final_commit_id(): OId | null
    get_final_signature(): Signature | null
    get_final_start_line_number(): number
    get_lines_in_hunk(): number
    get_orig_commit_id(): OId | null
    get_orig_path(): string | null
    get_orig_signature(): Signature | null
    get_orig_start_line_number(): number
    is_boundary(): boolean
    ref(): BlameHunk | null
    unref(): void
    static name: string
}
export class BlameOptions {
    /* Methods of Ggit.BlameOptions */
    copy(): BlameOptions | null
    free(): void
    get_maximum_line(): number
    get_minimum_line(): number
    get_minimum_match_characters(): number
    get_newest_commit(): OId | null
    get_oldest_commit(): OId | null
    set_maximum_line(line: number): void
    set_minimum_line(line: number): void
    set_minimum_match_characters(characters: number): void
    set_newest_commit(oid?: OId | null): void
    set_oldest_commit(oid?: OId | null): void
    static name: string
    static new(): BlameOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BlameOptions
}
export abstract class BlobClass {
    /* Fields of Ggit.BlobClass */
    parent_class: ObjectClass
    static name: string
}
export abstract class BlobOutputStreamClass {
    static name: string
}
export abstract class BranchClass {
    static name: string
}
export class BranchEnumerator {
    /* Methods of Ggit.BranchEnumerator */
    get(): Ref | null
    iterator(): BranchEnumerator | null
    next(): boolean
    ref(): BranchEnumerator | null
    unref(): void
    static name: string
}
export abstract class CheckoutOptionsClass {
    /* Fields of Ggit.CheckoutOptionsClass */
    parent_class: GObject.ObjectClass
    notify: (options: CheckoutOptions, why: CheckoutNotifyFlags, path: string, baseline: DiffFile, target: DiffFile, workdir: DiffFile) => number
    progress: (options: CheckoutOptions, path: string, completed_steps: number, total_steps: number) => void
    static name: string
}
export abstract class CherryPickOptionsClass {
    /* Fields of Ggit.CherryPickOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CloneOptionsClass {
    /* Fields of Ggit.CloneOptionsClass */
    parent_class: GObject.ObjectClass
    create_repository: (options: CloneOptions, path: string, is_bare: boolean) => Repository | null
    create_remote: (options: CloneOptions, repository: Repository, name: string, url: string) => Remote | null
    static name: string
}
export abstract class CommitClass {
    static name: string
}
export abstract class CommitParentsClass {
    /* Fields of Ggit.CommitParentsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ConfigClass {
    /* Fields of Ggit.ConfigClass */
    parent_class: NativeClass
    static name: string
}
export class ConfigEntry {
    /* Methods of Ggit.ConfigEntry */
    get_level(): ConfigLevel
    get_name(): string | null
    get_value(): string | null
    ref(): ConfigEntry | null
    unref(): void
    static name: string
}
export abstract class CredClass {
    static name: string
}
export abstract class CredPlaintextClass {
    static name: string
}
export abstract class CredSshInteractiveClass {
    /* Fields of Ggit.CredSshInteractiveClass */
    prompt: (cred: CredSshInteractive, prompts: CredSshInteractivePrompt[]) => void
    static name: string
}
export class CredSshInteractivePrompt {
    /* Methods of Ggit.CredSshInteractivePrompt */
    get_instruction(): string
    get_name(): string
    get_response(): string
    get_text(): string
    is_masked(): boolean
    ref(): CredSshInteractivePrompt
    set_response(response: string): void
    unref(): void
    static name: string
    static new(name: string, instruction: string, text: string, is_masked: boolean): CredSshInteractivePrompt
    constructor(name: string, instruction: string, text: string, is_masked: boolean)
    /* Static methods and pseudo-constructors */
    static new(name: string, instruction: string, text: string, is_masked: boolean): CredSshInteractivePrompt
}
export abstract class CredSshKeyFromAgentClass {
    /* Fields of Ggit.CredSshKeyFromAgentClass */
    parent_class: CredClass
    static name: string
}
export class DiffBinary {
    /* Methods of Ggit.DiffBinary */
    get_new_file(): DiffBinaryFile | null
    get_old_file(): DiffBinaryFile | null
    ref(): DiffBinary | null
    unref(): void
    static name: string
}
export class DiffBinaryFile {
    /* Methods of Ggit.DiffBinaryFile */
    get_binary_type(): DiffBinaryType
    get_data(size?: number | null): number
    get_inflated_size(): number
    ref(): DiffBinaryFile
    unref(): void
    static name: string
}
export abstract class DiffClass {
    static name: string
}
export class DiffDelta {
    /* Methods of Ggit.DiffDelta */
    get_flags(): DiffFlag
    get_new_file(): DiffFile | null
    get_old_file(): DiffFile | null
    get_similarity(): number
    get_status(): DeltaType
    ref(): DiffDelta | null
    unref(): void
    static name: string
}
export class DiffFile {
    /* Methods of Ggit.DiffFile */
    get_flags(): DiffFlag
    get_mode(): number
    get_oid(): OId | null
    get_path(): string | null
    get_size(): number
    ref(): DiffFile | null
    unref(): void
    static name: string
}
export abstract class DiffFindOptionsClass {
    /* Fields of Ggit.DiffFindOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DiffFormatEmailOptionsClass {
    /* Fields of Ggit.DiffFormatEmailOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DiffHunk {
    /* Methods of Ggit.DiffHunk */
    get_header(): string
    get_new_lines(): number
    get_new_start(): number
    get_old_lines(): number
    get_old_start(): number
    ref(): DiffHunk | null
    unref(): void
    static name: string
}
export class DiffLine {
    /* Methods of Ggit.DiffLine */
    get_content(): Uint8Array[]
    get_content_offset(): number
    get_new_lineno(): number
    get_old_lineno(): number
    get_origin(): DiffLineType
    get_text(): string | null
    ref(): DiffLine | null
    unref(): void
    static name: string
}
export abstract class DiffOptionsClass {
    /* Fields of Ggit.DiffOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DiffSimilarityMetric {
    /* Methods of Ggit.DiffSimilarityMetric */
    copy(): DiffSimilarityMetric | null
    free(): void
    static name: string
    static new(file_signature: DiffSimilarityMetricFileSignatureCallback, buffer_signature: DiffSimilarityMetricBufferSignatureCallback, free_signature: DiffSimilarityMetricFreeSignatureCallback, similarity: DiffSimilarityMetricSimilarityCallback): DiffSimilarityMetric
    constructor(file_signature: DiffSimilarityMetricFileSignatureCallback, buffer_signature: DiffSimilarityMetricBufferSignatureCallback, free_signature: DiffSimilarityMetricFreeSignatureCallback, similarity: DiffSimilarityMetricSimilarityCallback)
    /* Static methods and pseudo-constructors */
    static new(file_signature: DiffSimilarityMetricFileSignatureCallback, buffer_signature: DiffSimilarityMetricBufferSignatureCallback, free_signature: DiffSimilarityMetricFreeSignatureCallback, similarity: DiffSimilarityMetricSimilarityCallback): DiffSimilarityMetric
}
export class FetchOptions {
    /* Methods of Ggit.FetchOptions */
    copy(): FetchOptions | null
    free(): void
    get_download_tags(): RemoteDownloadTagsType
    get_remote_callbacks(): RemoteCallbacks | null
    set_download_tags(download_tags: RemoteDownloadTagsType): void
    set_remote_callbacks(callbacks?: RemoteCallbacks | null): void
    static name: string
    static new(): FetchOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FetchOptions
}
export abstract class IndexClass {
    /* Fields of Ggit.IndexClass */
    parent_class: NativeClass
    static name: string
}
export class IndexEntries {
    /* Methods of Ggit.IndexEntries */
    get_by_index(idx: number): IndexEntry | null
    get_by_path(file: Gio.File, stage: number): IndexEntry | null
    ref(): IndexEntries | null
    size(): number
    unref(): void
    static name: string
}
export class IndexEntriesResolveUndo {
    /* Methods of Ggit.IndexEntriesResolveUndo */
    get(idx: number): IndexEntryResolveUndo | null
    get_by_file(file: Gio.File): IndexEntryResolveUndo | null
    ref(): IndexEntriesResolveUndo | null
    size(): number
    unref(): void
    static name: string
}
export class IndexEntry {
    /* Methods of Ggit.IndexEntry */
    get_dev(): number
    get_file_size(): number
    get_flags(): number
    get_flags_extended(): number
    get_gid(): number
    get_id(): OId | null
    get_ino(): number
    get_mode(): number
    get_path(): string
    get_uid(): number
    is_conflict(): boolean
    ref(): IndexEntry | null
    set_commit(commit: Commit): void
    set_dev(dev: number): void
    set_file_size(file_size: number): void
    set_flags(flags: number): void
    set_flags_extended(flags_extended: number): void
    set_gid(gid: number): void
    set_id(id?: OId | null): void
    set_ino(ino: number): void
    set_mode(mode: number): void
    set_path(path?: string | null): void
    set_uid(uid: number): void
    stat(file: Gio.File): boolean
    unref(): void
    static name: string
}
export class IndexEntryResolveUndo {
    /* Methods of Ggit.IndexEntryResolveUndo */
    get_file(): Gio.File | null
    get_id(stage: number): OId | null
    get_mode(stage: number): number
    ref(): IndexEntryResolveUndo | null
    unref(): void
    static name: string
}
export class MergeOptions {
    /* Methods of Ggit.MergeOptions */
    copy(): MergeOptions | null
    free(): void
    get_file_favor(): MergeFileFavor
    get_file_flags(): MergeFileFlags
    get_flags(): MergeFlags
    get_rename_threshold(): number
    get_similarity_metric(): DiffSimilarityMetric | null
    get_target_limit(): number
    set_file_favor(file_favor: MergeFileFavor): void
    set_file_flags(file_flags: MergeFileFlags): void
    set_flags(flags: MergeFlags): void
    set_rename_threshold(rename_threshold: number): void
    set_similarity_metric(metric: DiffSimilarityMetric): void
    set_target_limit(target_limit: number): void
    static name: string
    static new(): MergeOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MergeOptions
}
export abstract class NativeClass {
    static name: string
}
export class Note {
    /* Methods of Ggit.Note */
    get_id(): OId | null
    get_message(): string | null
    ref(): Note | null
    unref(): void
    static name: string
}
export class OId {
    /* Methods of Ggit.OId */
    compare(b: OId): number
    copy(): OId | null
    equal(b: OId): boolean
    free(): void
    has_prefix(prefix: string): boolean
    hash(): number
    is_zero(): boolean
    to_string(): string | null
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_raw(raw: Uint8Array[]): OId
    static new_from_string(str: string): OId
}
export abstract class ObjectClass {
    static name: string
}
export abstract class ObjectFactoryBaseClass {
    static name: string
}
export abstract class ObjectFactoryClass {
    /* Fields of Ggit.ObjectFactoryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Patch {
    /* Methods of Ggit.Patch */
    get_delta(): DiffDelta | null
    get_hunk(idx: number): DiffHunk | null
    get_line_stats(): [ /* returnType */ boolean, /* total_context */ number | null, /* total_additions */ number | null, /* total_deletions */ number | null ]
    get_num_hunks(): number
    get_num_lines_in_hunk(hunk: number): number
    ref(): Patch | null
    to_stream(stream: Gio.OutputStream): boolean
    to_string(): string | null
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_blobs(old_blob?: Blob | null, old_as_path?: string | null, new_blob?: Blob | null, new_as_path?: string | null, diff_options?: DiffOptions | null): Patch
    static new_from_diff(diff: Diff, idx: number): Patch
}
export abstract class ProxyOptionsClass {
    /* Fields of Ggit.ProxyOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PushOptionsClass {
    /* Fields of Ggit.PushOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RebaseClass {
    /* Fields of Ggit.RebaseClass */
    parent_class: NativeClass
    static name: string
}
export class RebaseOperation {
    /* Methods of Ggit.RebaseOperation */
    get_exec(): string | null
    get_id(): OId | null
    get_operation_type(): RebaseOperationType
    ref(): RebaseOperation | null
    unref(): void
    static name: string
}
export class RebaseOptions {
    /* Methods of Ggit.RebaseOptions */
    copy(): RebaseOptions | null
    free(): void
    get_checkout_options(): CheckoutOptions | null
    get_quiet(): boolean
    get_rewrite_notes_ref(): string | null
    set_checkout_options(checkout_options: CheckoutOptions): void
    set_quiet(quiet: boolean): void
    set_rewrite_notes_ref(rewrite_notes_ref: string): void
    static name: string
    static new(): RebaseOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RebaseOptions
}
export abstract class RefClass {
    static name: string
}
export class RefSpec {
    /* Methods of Ggit.RefSpec */
    get_destination(): string | null
    get_source(): string | null
    is_forced(): boolean
    ref(): RefSpec | null
    unref(): void
    static name: string
}
export class Reflog {
    /* Methods of Ggit.Reflog */
    append(oid: OId, committer: Signature, message: string): boolean
    get_entry_count(): number
    get_entry_from_index(idx: number): ReflogEntry | null
    ref(): Reflog | null
    rename(new_name: string): boolean
    unref(): void
    write(): boolean
    static name: string
}
export class ReflogEntry {
    /* Methods of Ggit.ReflogEntry */
    get_committer(): Signature | null
    get_message(): string | null
    get_new_id(): OId | null
    get_old_id(): OId | null
    ref(): ReflogEntry | null
    unref(): void
    static name: string
}
export abstract class RemoteCallbacksClass {
    /* Fields of Ggit.RemoteCallbacksClass */
    parent_class: GObject.ObjectClass
    progress: (callbacks: RemoteCallbacks, message: string) => void
    transfer_progress: (callbacks: RemoteCallbacks, stats: TransferProgress) => void
    update_tips: (callbacks: RemoteCallbacks, refname: string, a: OId, b: OId) => void
    completion: (callbacks: RemoteCallbacks, type: RemoteCompletionType) => void
    credentials: (callbacks: RemoteCallbacks, url: string, username_from_url: string | null, allowed_types: Credtype) => Cred | null
    static name: string
}
export abstract class RemoteClass {
    static name: string
}
export class RemoteHead {
    /* Methods of Ggit.RemoteHead */
    get_local_oid(): OId | null
    get_name(): string | null
    get_oid(): OId | null
    is_local(): boolean
    ref(): RemoteHead
    unref(): void
    static name: string
}
export abstract class RepositoryClass {
    static name: string
}
export class RevertOptions {
    /* Methods of Ggit.RevertOptions */
    copy(): RevertOptions | null
    free(): void
    static name: string
    static new(mainline: number, merge_options?: MergeOptions | null, checkout_options?: CheckoutOptions | null): RevertOptions
    constructor(mainline: number, merge_options?: MergeOptions | null, checkout_options?: CheckoutOptions | null)
    /* Static methods and pseudo-constructors */
    static new(mainline: number, merge_options?: MergeOptions | null, checkout_options?: CheckoutOptions | null): RevertOptions
}
export abstract class RevisionWalkerClass {
    static name: string
}
export abstract class SignatureClass {
    /* Fields of Ggit.SignatureClass */
    parent_class: NativeClass
    static name: string
}
export class StatusOptions {
    /* Methods of Ggit.StatusOptions */
    copy(): StatusOptions | null
    free(): void
    static name: string
    static new(options: StatusOption, show: StatusShow, pathspec?: string[] | null): StatusOptions
    constructor(options: StatusOption, show: StatusShow, pathspec?: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(options: StatusOption, show: StatusShow, pathspec?: string[] | null): StatusOptions
}
export class Submodule {
    /* Methods of Ggit.Submodule */
    get_fetch_recurse(): boolean
    get_head_id(): OId
    get_ignore(): SubmoduleIgnore
    get_index_id(): OId | null
    get_name(): string | null
    get_owner(): Repository | null
    get_path(): string | null
    get_update(): SubmoduleUpdate
    get_url(): string | null
    get_workdir_id(): OId | null
    init(overwrite: boolean): void
    open(): Repository | null
    ref(): Submodule | null
    reload(force: boolean): void
    sync(): void
    unref(): void
    update(init: boolean, options: SubmoduleUpdateOptions): void
    static name: string
}
export abstract class SubmoduleUpdateOptionsClass {
    /* Fields of Ggit.SubmoduleUpdateOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TagClass {
    static name: string
}
export class TransferProgress {
    /* Methods of Ggit.TransferProgress */
    copy(): TransferProgress | null
    free(): void
    get_indexed_objects(): number
    get_received_bytes(): number
    get_received_objects(): number
    get_total_objects(): number
    static name: string
}
export abstract class TreeBuilderClass {
    static name: string
}
export abstract class TreeClass {
    static name: string
}
export class TreeEntry {
    /* Methods of Ggit.TreeEntry */
    get_file_mode(): FileMode
    get_id(): OId | null
    get_name(): string | null
    get_object_type(): GObject.Type
    ref(): TreeEntry | null
    unref(): void
    static name: string
}